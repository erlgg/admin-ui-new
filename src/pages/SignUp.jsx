import React from "react";
import FormSignUp from "../components/Fragments/FormSignUp";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <FormSignUp />
      </div>
    </div>
  );
};

export default SignupPage;
