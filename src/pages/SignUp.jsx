import React from "react";
import SignupForm from "../components/Organisms/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
