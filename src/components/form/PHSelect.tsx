import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const PHSelect = ({ label, name }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
