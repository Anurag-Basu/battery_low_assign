import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { DataType, FormSecondValue } from "../../../types";
import Papa from "papaparse";
import { Options, SeriesOptionsType } from "highcharts";
import { filterMaxValueByProperty, getSeriesData } from "../functions";

/* eslint-disable @typescript-eslint/no-explicit-any */
const useApp = () => {
  const [SecondForm] = useForm();
  const [firstForm] = useForm();

  const [disableFirstForm, setDisableFirstForm] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [series, setSeries] = useState<SeriesOptionsType[]>([]);
  const [isUploadCsv, setIsUploadCsv] = useState<boolean>(false);
  const [showSecondForm, setShowSecondForm] = useState<boolean>(false);
  const [projectName, setProjectName] = useState<string>("");

  const [data, setData] = useState<any[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const data = results.data.filter((ele: any) => ele.Min_x);
        const tableData = data.map((ele: any, index) => {
          return {
            key: `row-${index}`,
            min_x: ele.Min_x,
            max_x: ele.Max_x,
            min_y: ele.Min_y,
            max_y: ele.Max_y,
            min_z: ele.Min_z,
            max_z: ele.Max_z,
          };
        });
        SecondForm.setFieldsValue({
          min_x: filterMaxValueByProperty(data, "Min_x"),
          min_y: filterMaxValueByProperty(data, "Min_y"),
          min_z: filterMaxValueByProperty(data, "Min_z"),
          max_x: filterMaxValueByProperty(data, "Max_x", true),
          max_y: filterMaxValueByProperty(data, "Max_y", true),
          max_z: filterMaxValueByProperty(data, "Max_z", true),
        });

        const dataToReturn = getSeriesData(data);
        setData(data);
        setSeries(dataToReturn);
        setIsUploadCsv(true);
        console.log({ dataToReturn, tableData }, results.data);
        setDataSource(tableData);
      },
    });
  };

  const onFinishFirstForm = (values: any) => {
    console.log(values);
    setProjectName(values.project_name);
    setDisableFirstForm(true);
    setShowSecondForm(true);
  };

  const onFinishSecondForm = (values: FormSecondValue) => {
    console.log(values);
    console.log({ isUploadCsv });
    if (!isUploadCsv) {
      const data = [
        {
          key: "1",
          min_x: values.min_x,
          max_x: values.max_x,
          min_y: values.min_y,
          max_y: values.max_y,
          min_z: values.min_z,
          max_z: values.max_z,
        },
      ];

      const manualSeries: SeriesOptionsType[] = [
        {
          name: "Min_x",
          type: "column",
          data: [Number(values.min_x)],
        },
        {
          name: "Max_x",
          type: "column",
          data: [Number(values.max_x)],
        },
        {
          name: "Min_y",
          type: "column",
          data: [Number(values.min_y)],
        },
        {
          name: "Max_y",
          type: "column",
          data: [Number(values.max_y)],
        },
        {
          name: "Min_z",
          type: "column",
          data: [Number(values.min_z)],
        },
        {
          name: "Max_z",
          type: "column",
          data: [Number(values.max_z)],
        },
      ];

      setDataSource(data);
      setSeries(manualSeries);
    }
    setShowResult(true);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Min X",
      dataIndex: "min_x",
      key: "min-X",
    },
    {
      title: "Max X",
      dataIndex: "max_x",
      key: "Max-x",
    },
    {
      title: "Min Y",
      dataIndex: "min_y",
      key: "min-y",
    },
    {
      title: "Max Y",
      dataIndex: "max_y",
      key: "Max-y",
    },
    {
      title: "Min Z",
      dataIndex: "min_z",
      key: "min-z",
    },
    {
      title: "Max Z",
      dataIndex: "max_z",
      key: "Max-z",
    },
  ];

  const option: Options = {
    chart: {
      type: "column",
    },
    title: {
      text: projectName,
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          menuItems: ["downloadPNG", "downloadSVG"],
        },
      },
    },
    series,
  };

  const handleBackBtn = () => {
    firstForm.resetFields();
    SecondForm.resetFields();
    setShowResult(false);
    setDisableFirstForm(false);
  };

  return {
    onFinishSecondForm,
    onFinishFirstForm,
    disableFirstForm,
    showResult,
    columns,
    dataSource,
    handleFileUpload,
    data,
    SecondForm,
    option,
    showSecondForm,
    firstForm,
    handleBackBtn,
  };
};

export default useApp;
