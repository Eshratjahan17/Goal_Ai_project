import React from "react";
import { useForm } from "react-hook-form";
import googleImage from "../Assets/Google.svg.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(user);
    navigate("/dashboard");
  };
  if (googleUser || user) {
    console.log(googleUser);
    navigate("/dashboard");
  }
  if (googleLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[url('/src/Assets/bg.png')]  bg-cover">
      <h1 className="text-4xl font-bold pb-5">Log In!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div>
          <div className="form-control  ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email here"
              className="input input-bordered  "
              {...register("email", { required: true })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <div>
          <div className="form-control w-96 ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="password"
              placeholder="Password here"
              className="input input-bordered w-96"
              {...register("password", { required: true })}
            />
          </div>
        </div>

        <input
          type="submit"
          className="btn-primary  mt-4 p-2 rounded-lg w-96 text-white "
        />
      </form>
      <div className="divider w-96 mx-auto">Or</div>
      <button
        className="btn-secondary p-3 rounded-lg flex items-center justify-center "
        onClick={() => signInWithGoogle()}
      >
        <img alt="Google-logo" className="w-6 h-6 mr-2" src={googleImage}></img>
        <p className="font-bold">Continue With Google</p>
      </button>
      <label>
        {error ? (
          <span class="label-text-alt text-red-500"> {error}</span>
        ) : (
          <span class="label-text-alt text-red-500"></span>
        )}
      </label>
    </div>
  );
};

export default Login;
