import React from "react";
import FormInput from "../Fragments/FormSignUp";
import Button from "../Elements/Button";

const SignupForm = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    console.log("Data pendaftaran dikirim");
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center">Buat Akun</h2>

      {/* Menggunakan Molecule FormInput */}
      <FormInput
        label="Nama Lengkap"
        type="text"
        placeholder="Masukkan nama anda"
        name="fullname"
      />

      <FormInput
        label="Email"
        type="email"
        placeholder="contoh@mail.com"
        name="email"
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />

      {/* Menggunakan Atom Button yang tadi kamu perbaiki */}
      <Button type="submit" variant="primary">
        Daftar Sekarang
      </Button>

      <p className="text-sm text-center text-gray-600">
        Sudah punya akun?{" "}
        <Link to="/login" className="text-blue-600">
          Masuk
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
