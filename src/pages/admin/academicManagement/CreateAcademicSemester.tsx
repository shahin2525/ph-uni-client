import { Button, Col, Flex } from "antd";
import { FieldValues } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];
const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));
console.log(yearOptions);
const CreateAcademicSemester = () => {
  const onSubmit = (data: FieldValues) => {
    const name = nameOptions[Number(data.name) - 1].label;
    console.log(name);
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="name" name="name" options={nameOptions}></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={nameOptions}
          ></PHSelect>
          <PHSelect
            label="End Month"
            name="EndMonth"
            options={nameOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
