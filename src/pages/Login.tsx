import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verfyJwtToken";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });
  const [login, { error }] = useLoginMutation();
  // console.log("data=>", data);
  // console.log("error=>", error);
  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    console.log(user);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
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
