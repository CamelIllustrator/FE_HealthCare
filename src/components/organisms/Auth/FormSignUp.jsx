import Image from "@/components/atoms/Image";
import FormInputSignUpInstitution from "@/components/molecules/Auth/FormInputSignUpInstitution";
import FormInputSignUpParent from "@/components/molecules/Auth/FormInputSignUpParent";
import TextFormSignUp from "@/components/molecules/Auth/TextFormSignUp";
import React from "react";
import { useLocation } from "react-router-dom";

const FormSignUp = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col items-center justify-center space-y-5 w-full">
      <Image src="/logo.svg" alt="Logo" className="w-[75px]" />
      <TextFormSignUp />
      {path.includes("/auth/register/parent") ? (
        <FormInputSignUpParent />
      ) : (
        <FormInputSignUpInstitution />
      )}
    </div>
  );
};

export default FormSignUp;
