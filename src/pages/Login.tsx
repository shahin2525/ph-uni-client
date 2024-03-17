import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });
  const [login, { data, error }] = useLoginMutation();
  console.log("data=>", data);
  console.log("error=>", error);
  const onSubmit = (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    login(userInfo);
  };

  return (
    <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-2">
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register("userId")} />
      </div>

      <div className="m-4">
        <label htmlFor="password">Password:</label>
        <input id="password" {...register("password")} />
      </div>

      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
