import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const TextFormSignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="text-2xl"
        as="h1"
      >
        Welcome Back
      </TextAnimate>
      <TextAnimate
        animation="slideLeft"
        by="character"
        duration={0.2}
        className="font-extralight text-sm"
      >
        Please enter your details to sign up
      </TextAnimate>
    </div>
  );
};

export default TextFormSignUp;
