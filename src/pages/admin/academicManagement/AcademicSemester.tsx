import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>from academic semester </h1>
    </div>
  );
};

export default AcademicSemester;
