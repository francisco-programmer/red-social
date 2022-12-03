import React, { useState } from "react";
import {
  FaFacebook,
  FaGoogle,
  FaUserLock,
  FaSortNumericUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiEyeOffLine } from "react-icons/ri";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 place-items-center bg-cover bg-slate-50">
      <div className="">
        <p className="text-5xl flex gap-6 text-pink-600">
          <FaUserLock />
          Kissecrets!
        </p>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <p className="text-slate-500 mb-10 text-4xl font-bold "> Registrarme</p>
        <Link
          to="/"
          className="flex flex-item-center bg-blue-900 text-white gap-4 p-2 rounded my-2"
        >
          <FaFacebook className="text-white text-xl" />
          Registrarme con Facebook
        </Link>
        <Link
          to="/"
          className="flex flex-item-center bg-red-600 text-white gap-4 p-2 rounded my-2 w-auto"
        >
          <FaGoogle className="text-white text-xl" /> Registrarme con Google
        </Link>
        <form>
          <div className="relative">
            <FiUser className="absolute top-1/2 -translate-y-1/2 left-2 text-slate-500" />
            <input
              type="text"
              className="w-full  p-2 pl-8 rounded my-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-pink-600
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600 
      focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
              maxLength={30}
              required
              placeholder="Nombre Completo"
            />
          </div>
          <div className="relative">
            <FaSortNumericUp className="absolute top-1/2 -translate-y-1/2 left-2 text-slate-500" />
            <input
              type="number"
              className="w-full  p-2 pl-8 rounded my-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-pink-600
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600 
      focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
              maxLength={30}
              required
              placeholder="Edad"
            />
          </div>
          <div className="relative">
            <MdEmail className="absolute top-1/2 -translate-y-1/2 left-2 text-slate-500" />

            <input
              type="email"
              className="w-full p-2 pl-8 rounded my-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-pink-600
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 g-pink-600"
              maxLength={30}
              required
              placeholder="Correo electronico"
            />
          </div>
          <div className="relative">
            <RiLockPasswordFill className="absolute top-1/2 -translate-y-1/2 left-2 text-slate-500" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 rounded  pl-8 my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-pink-600
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-600"
              placeholder="Contraseña"
              required
              maxLength={20}
            />{" "}
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-slate-500"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-slate-500"
              />
            )}
          </div>
          <Link
            to="/"
            className="flex justify-center flex-item-center bg-rose-600 text-white gap-4 p-2 rounded my-4 w-40"
          >
            <input type="submit" value="Registrarme" />
          </Link>
          <p className="text-gray-900">
            ¿ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="hover:underline text-pink-600 font-bold"
            >
              Inicia sesion!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
