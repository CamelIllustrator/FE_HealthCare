import FormSignUp from "@/components/organisms/Auth/FormSignUp";
import { Meteors } from "@/components/ui/meteors";
import { ShineBorder } from "@/components/ui/shine-border";
import React from "react";

const SignUpInstitution = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-10 bg-[#FDFEFF]">
      <ShineBorder
        className="relative flex h-full w-full md:max-w-sm md:h-[550px] xl:max-w-lg flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <Meteors />
        <FormSignUp />
      </ShineBorder>
    </div>
  );
};

export default SignUpInstitution;
