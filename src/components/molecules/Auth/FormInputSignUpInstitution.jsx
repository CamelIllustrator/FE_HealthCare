import Form from "@/components/atoms/Form";
import React, { useState } from "react";
import InputFloatingLabel from "../InputFloatingLabel";
import { RippleButton } from "@/components/ui/ripple-button";
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { registerInstitution } from "@/lib/api";

const FormInputSignUpInstitution = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (values) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleLoading = delay(1000);

    toast.promise(
      handleLoading.then(() => registerInstitution(values)),
      {
        pending: "Loading...",
        success: {
          render(response) {
            return response.data.message;
          },
          onClose: () => navigate("../login"),
        },
        error: {
          render(response) {
            return response.data.message;
          },
        },
      },
      {
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        autoClose: 2000,
      }
    );
  };

  const { handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
  });

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 items-center justify-center"
    >
      <InputFloatingLabel
        type="text"
        htmlFor="username"
        id="username"
        name="username"
        onChange={handleChange}
        onBlur={handleBlur}
        containerProps="min-[320px]:min-w-[250px] min-[375px]:min-w-[260px] min-[428px]:min-w-[310px]"
      >
        Username
      </InputFloatingLabel>
      <InputFloatingLabel
        type="email"
        htmlFor="email"
        id="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        containerProps="min-[320px]:min-w-[250px] min-[375px]:min-w-[260px] min-[428px]:min-w-[310px]"
      >
        Email
      </InputFloatingLabel>
      <InputFloatingLabel
        type={show ? "text" : "password"}
        id="password"
        name="password"
        htmlFor="password"
        onChange={handleChange}
        onBlur={handleBlur}
        containerProps="min-[320px]:min-w-[250px] min-[375px]:min-w-[260px] min-[428px]:min-w-[310px]"
        icon={
          <div onClick={() => setShow(!show)}>
            {show ? (
              <Eye className="text-gray-400 cursor-pointer" size={18} />
            ) : (
              <EyeOff className="text-gray-400 cursor-pointer" size={18} />
            )}
          </div>
        }
      >
        Password
      </InputFloatingLabel>
      <RippleButton
        type="submit"
        className="w-full bg-blue-700 font-semibold text-white hover:bg-blue-800"
      >
        Sign Up
      </RippleButton>
      <InteractiveHoverButton
        type="button"
        className="w-full"
        onClick={() => navigate("../..")}
      >
        Go Back
      </InteractiveHoverButton>
    </Form>
  );
};

export default FormInputSignUpInstitution;
