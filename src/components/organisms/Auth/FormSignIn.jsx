import Image from "@/components/atoms/Image";
import FormInputSignIn from "@/components/molecules/Auth/FormInputSignIn";
import TextFormSignIn from "@/components/molecules/Auth/TextFormSignIn";
import React from "react";

const FormSignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 w-full">
      <Image src="/logo.svg" alt="Logo" className="w-[75px]" />
      <TextFormSignIn />
      <FormInputSignIn />
    </div>
  );
};

export default FormSignIn;
