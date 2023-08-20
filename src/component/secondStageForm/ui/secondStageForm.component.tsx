/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, InputNumber } from "antd";
import { SecondFormProps } from "../../../types";
import "./secondStageForm.component.scss";

const SecondStageForm = ({
  onFinish,
  handleFileUpload,
  form,
}: SecondFormProps) => {
  return (
    <Form
      className="second-stage-form"
      form={form}
      name="stage-two-form"
      onFinish={onFinish}
    >
      <div className="min-max-container">
        <Form.Item
          label="Min X"
          name="min_x"
          rules={[{ required: true, message: "Min X is required" }]}
        >
          <InputNumber type="number" placeholder="Min X" />
        </Form.Item>

        <Form.Item
          label="Max X"
          name="max_x"
          rules={[{ required: true, message: "Max X is required" }]}
        >
          <InputNumber type="number" placeholder="Max X" />
        </Form.Item>
      </div>

      <div className="min-max-container">
        <Form.Item
          label="Min Y"
          name="min_y"
          rules={[{ required: true, message: "Min Y is required" }]}
        >
          <InputNumber type="number" placeholder="Min Y" />
        </Form.Item>

        <Form.Item
          label="Max Y"
          name="max_y"
          rules={[{ required: true, message: "Max Y is required" }]}
        >
          <InputNumber type="number" placeholder="Max Y" />
        </Form.Item>
      </div>

      <div className="min-max-container">
        <Form.Item
          label="Min Z"
          name="min_z"
          rules={[{ required: true, message: "Min Z is required" }]}
        >
          <InputNumber type="number" placeholder="Min Z" />
        </Form.Item>

        <Form.Item
          label="Max Z"
          name="max_z"
          rules={[{ required: true, message: "Max Z is required" }]}
        >
          <InputNumber type="number" placeholder="Max Z" />
        </Form.Item>
      </div>

      <div className="button-container">
        <Form.Item>
          <Input type="file" accept=".csv" onChange={handleFileUpload} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            View Table & Chart
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SecondStageForm;
// [
//   {
//       "name": "Min_x",
//       "type": "column",
//       "data": [
//           23,
//           232,
//           30,
//           121,
//           30,
//           32
//       ]
//   }
// ]