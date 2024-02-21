/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-500" : "border-gray-400"
              } `}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="password" error={errors.password}>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 5,
                  message: "password must be 5 character",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-400"
              } `}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </Field>
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full name is required",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-400"
              } `}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Full name"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required",
                max: {
                  value: 100,
                  message: "Age must be between 0 to 100",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-500" : "border-gray-400"
              } `}
              type="number"
              name="age"
              id="age"
              placeholder="Enter age"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>

        <Field>
          <button className="text-md text-white m-auto cursor-pointer p-1 border rounded-lg  bg-purple-500">
            Log in
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
