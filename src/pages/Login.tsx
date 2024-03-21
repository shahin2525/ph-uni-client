import { Button, Row } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useDispatch } from "react-redux";
import { TUser, setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verfyJwtToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0002",
  //     password: "admin123",
  //   },
  // });
  const defaultValues = {
    userId: "A-0002",
    password: "admin123",
  };
  const [login] = useLoginMutation();
  // console.log("data=>", data);
  // console.log("error=>", error);
  const onSubmit = async (data: FieldValues) => {
    console.log("data", data);
    const toastId = toast("user logging");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast("user logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast(toast.error("something went wrong"), {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:"></PHInput>

        <PHInput type="text" name="password" label="Password:"></PHInput>

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
