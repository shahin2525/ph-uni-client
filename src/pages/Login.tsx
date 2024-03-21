import { Button } from "antd";
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
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();
  // console.log("data=>", data);
  // console.log("error=>", error);
  const onSubmit = async (data: FieldValues) => {
    console.log("data", data);
    // const toastId = toast("user logging");
    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };
    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   console.log(user);
    //   dispatch(setUser({ user: user, token: res.data.accessToken }));
    //   toast("user logged in", { id: toastId, duration: 2000 });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   toast(toast.error("something went wrong"), {
    //     id: toastId,
    //     duration: 2000,
    //   });
    // }
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <div className="mt-2">
        <PHInput type="text" name="userId" label="ID:"></PHInput>
      </div>

      <div className="m-4">
        <PHInput type="text" name="password" label="Password:"></PHInput>
      </div>

      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
