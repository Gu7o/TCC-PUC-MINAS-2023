"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function pages() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Credenciais inválidas");
        return
      }
      console.log("LOGADO");
      router.replace("pacientes");

    } catch (error) {
      console.log("ERROR", error)
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="flex bg-login text-primary w-auto max-w-screen-md p-8">
        <div className="flex-col w-2/3 mr-8">
          <div className="flex-col justify-center items-center text-center">
            <p className="text-xl font-bold">Login</p>
            <p className="text-xs text-cinzaclaro">Bem vindo de volta</p>
          </div>
          <div className=" flex justify-start w-full ml-4 mt-4">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold ml-2 text-xxs"
              >
                EMAIL *:
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="username"
                className="border rounded-lg px-3 py-2 bg-secundary w-full"
                placeholder="Digite seu email"
              />
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold ml-2 mt-4 text-xxs"
              >
                SENHA *:
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                id="username"
                className="border rounded-lg px-3 py-2 bg-secundary w-full"
                placeholder="Digite sua senha"
              />
              <button
                type="submit"
                className="bg-green hover:bg-blue text-white font-bold  mt-4 py-2 px-4 rounded w-full mt-8"
              >
                LOG IN
              </button>
              <a href="/signin" className="mt-8">
                Criar nova conta
              </a>
              {error && (
                <div className="bg-red text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="w-1/3 bg-gray">
          <Image
            src={"/login.png"}
            alt="My Image"
            width={400} // Set the width of the image
            height={341} // Set the height of the image
          />
        </div>
      </div>
    </div>
  );
}
