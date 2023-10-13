"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function pages() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Todos os campos são obrigatórios");
      console.log("Todos os campos são obrigatorios");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log("PASSEI PELO TRY");
      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("Registro do usuário Falhou");
      }
    } catch (error) {
      console.log("Erro durante o registro:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="flex bg-login text-primary w-auto max-w-screen-md  p-8">
        <div className="flex-col w-2/3 mr-8">
          <div className="flex-col justify-center items-center text-center">
            <p className="text-xl font-bold">Cadastro</p>
          </div>
          <div className=" flex justify-start w-full ml-4 mt-4">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold ml-2 text-xxs"
              >
                NOME *:
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="username"
                className="border rounded-lg px-3 py-2 bg-secundary w-full"
                placeholder="Digite seu nome"
              />
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold ml-2 mt-4 text-xxs"
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
                className="bg-green hover:bg-blue text-white font-bold   py-2 px-4 rounded w-full mt-8"
              >
                CADASTRAR
              </button>
              <a href="/login" className="mt-8">
                Já possui conta? Faça Login
              </a>
            </form>
          </div>
        </div>
        <div className="w-1/3 bg-gray">
          <Image
            src={"/signin2.png"}
            alt="My Image"
            width={224} // Set the width of the image
            height={378} // Set the height of the image
          />
        </div>
      </div>
    </div>
  );
}
