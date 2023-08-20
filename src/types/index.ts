/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormInstance } from "antd";
import { ColumnsType } from "antd/es/table";
import { Options } from "highcharts";

export interface FormSecondValue {
  max_x: number;
  max_y: number;
  max_z: number;
  min_x: number;
  min_y: number;
  min_z: number;
}

export interface DataType extends FormSecondValue {
  key: string | number;
}

export interface ResultProps {
  dataSource: DataType[];
  columns: ColumnsType<DataType>;
  options: Options;
  handleBackBtn: () => void;
}
export interface SecondFormProps {
  onFinish: (val: any) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: FormInstance<any>;
}

export interface FirstFormProps {
  onFinish: (val: any) => void;
  disableFirstForm: boolean;
  form: FormInstance<any>;
}
