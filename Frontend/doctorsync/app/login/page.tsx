"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function pages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log("Name:", name);
  console.log("email:", email);
  console.log("password:", password);
  
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="flex bg-login text-primary w-auto max-w-screen-md p-8">
        <div className="flex-col w-2/3 mr-8">
          <div className="flex-col justify-center items-center text-center">
            <p className="text-xl font-bold">Login</p>
            <p className="text-xs text-cinzaclaro">Bem vindo de volta</p>
          </div>
          <div className=" flex justify-start w-full ml-4 mt-4">
            <form>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold ml-2 text-xxs"
              >
                EMAIL *:
              </label>
              <input
              onChange={(e) => setEmail(e.target.value) }
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
