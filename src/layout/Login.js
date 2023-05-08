import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="flex items-center justify-center flex-col h-screen ">
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
            <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label>
          </div>
        </div>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              type="email"
              placeholder="Password here"
              className="input input-bordered w-full max-w-xs"
              {...register("password", { required: true })}
            />
            <label className="label">
              <span className="label-text-alt">Bottom Left label</span>
            </label>
          </div>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
