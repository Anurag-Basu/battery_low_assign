/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";

import "./firstStageForm.component.scss";
import { FirstFormProps } from "../../../types";

const FirstStageForm = ({
  onFinish,
  disableFirstForm,
  form,
}: FirstFormProps) => {
  return (
    <div className="first-stage-form">
      <Form
        form={form}
        disabled={disableFirstForm}
        name="stage-one-form"
        onFinish={onFinish}
      >
        <Form.Item
          name="project_name"
          rules={[{ required: true, message: "Project Name is required" }]}
          label="Project Name"
        >
          <Input placeholder="Project Name" />
        </Form.Item>

        <Form.Item
          name="project_description"
          rules={[
            { required: true, message: "Project Description is required" },
          ]}
          label="Project Description"
        >
          <Input placeholder="Project Description" />
        </Form.Item>

        <Form.Item
          name="client"
          rules={[{ required: true, message: "Client is required" }]}
          label="Client"
        >
          <Input placeholder="Client" />
        </Form.Item>

        <Form.Item
          name="contractor"
          rules={[{ required: true, message: "Contractor is required" }]}
          label="Contractor"
        >
          <Input placeholder="Contractor" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FirstStageForm;
