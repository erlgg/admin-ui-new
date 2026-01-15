import React from "react";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const SignUpSchema = Yup.object().shape({
  fullname: Yup.string().required("Nama lengkap wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

const FormSignUp = () => {
  return (
    <div className="mt-16">
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Data pendaftaran:", values);
            setSubmitting(false);
            alert("Pendaftaran Berhasil (Simulasi)");
          }, 2000);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center">Buat Akun</h2>

            {/* Field Nama Lengkap */}
            <div className="mb-2">
              <Field name="fullname">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Nama Lengkap"
                    type="text"
                    placeholder="Masukkan nama anda"
                    id="fullname"
                  />
                )}
              </Field>
              <ErrorMessage
                name="fullname"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Field Email */}
            <div className="mb-2">
              <Field name="email">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Email"
                    type="email"
                    placeholder="hello@example.com"
                    id="email"
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Field Password */}
            <div className="mb-2">
              <Field name="password">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Password"
                    type="password"
                    placeholder="●●●●●●"
                    id="password"
                  />
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            {/* Tombol dengan kondisi Loading */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Daftar Sekarang"}
            </Button>

            <p className="text-sm text-center text-gray-600 mt-4">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-primary font-bold">
                Masuk
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSignUp;
