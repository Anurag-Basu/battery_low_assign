import { Button, Table } from "antd";

import { ResultProps } from "../../../types";
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";

import "./result.component.scss";
import useResult from "../hooks/useResult";

const Result = ({
  columns,
  dataSource,
  options,
  handleBackBtn,
}: ResultProps) => {
  const { componentPDF, handleDownloadPdf } = useResult();

  return (
    <div style={{ width: "90vw", margin: "5%" }}>
      <div className="btn-container">
        <Button onClick={handleBackBtn} style={{ marginRight: "20px" }}>
          Back
        </Button>
        <Button type="primary" onClick={handleDownloadPdf}>
          Download
        </Button>
      </div>
      <div ref={componentPDF} style={{ width: "100%" }}>
        <HighchartsReact options={options} highcharts={Highcharts} />
        <Table columns={columns} dataSource={dataSource} bordered />
      </div>
    </div>
  );
};

export default Result;
