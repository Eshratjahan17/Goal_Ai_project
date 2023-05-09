import React from "react";
import { useForm } from "react-hook-form";
import googleImage from "../Assets/Google.svg.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth  from "../firebase.init";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate=useNavigate();
  
  const onSubmit = (data) => console.log(data);
if (user){
  console.log(user);
  navigate("/dasboard");
}
  return (
    <div className="flex items-center justify-center flex-col h-screen ">
      <h1 className="text-4xl font-bold pb-5">Log In!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email here"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div>
          <div className="form-control w-96 ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="email"
              placeholder="Password here"
              className="input input-bordered w-96"
              {...register("password", { required: true })}
            />
          </div>
        </div>

        <input
          type="submit"
          className="btn-primary w-full mt-4 p-2 rounded-lg w-96 text-white "
        />
      </form>
      <div className="divider w-96 mx-auto">Or</div>
      <button className="btn-secondary p-3 rounded-lg flex items-center justify-center "
      onClick={() => signInWithGoogle()}
      >
        <img className="w-6 h-6 mr-2" src={googleImage}></img>
        <p className="font-bold">Continue With Google</p>
      </button>
    </div>
  );
};

export default Login;
