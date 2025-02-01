import InputFloatingLabel from "@/components/molecules/InputFloatingLabel";
import FormSignIn from "@/components/organisms/Auth/FormSignIn";
import { Meteors } from "@/components/ui/meteors";
import { ShineBorder } from "@/components/ui/shine-border";
import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-10 bg-[#FDFEFF]">
      <ShineBorder
        className="relative flex h-full w-full md:max-w-sm md:h-[450px] xl:max-w-lg xl:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <Meteors />
        <FormSignIn />
      </ShineBorder>
    </div>
  );
};

export default SignIn;
