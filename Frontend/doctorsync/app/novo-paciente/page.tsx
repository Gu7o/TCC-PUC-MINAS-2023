"use client";

import React from "react";
import Sidebar from "@/components/sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [CPF, setCPF] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorEmail = "annabeatriz@email.com" //APAGAR

    if (!name || !email || !telefone || !CPF|| !nascimento) {
      setError("Todos os campos são obrigatórios");
      console.log("Todos os campos são obrigatorios");
      return;
    }

    try {
      const registerPaciant = await fetch("api/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          telefone,
          CPF,
          nascimento,
          email,
          doctorEmail
        }),
      });
      console.log("Registro de resposta", registerPaciant);
      if (registerPaciant.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("Registro do usuário Falhou");
      }
    } catch (error) {
      console.log("Erro durante o registro:", error);
    }

  }

  return (
    <div className="flex bg-green">
      <Sidebar></Sidebar>
      <div className="flex-col">
        <h1 className="text-4x1 text-white ml-16 mt-12 text-bold">
          {" "}
          Cadastrar novo paciente
        </h1>
        <div>
          <form onSubmit={handleSubmit} className="mt-12">
            <label
              htmlFor="nome"
              className="block text-white font-bold ml-16 text-lg"
            >
              Nome
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="username"
              className="border rounded-lg px-3 py-2 bg-white w-full ml-16 h-12 mb-4"
              placeholder="Digite o nome do paciente"
            />
            <label
              htmlFor="nome"
              className="block text-white font-bold ml-16 text-lg"
            >
              Telefone
            </label>
            <input
              onChange={(e) => setTelefone(e.target.value)}
              type="text"
              id="username"
              className="border rounded-lg px-3 py-2 bg-white w-full ml-16 h-12 mb-4"
              placeholder="Digite o telefone do paciente"
            />
            <label
              htmlFor="nome"
              className="block text-white font-bold ml-16 text-lg"
            >
              CPF
            </label>
            <input
              onChange={(e) => setCPF(e.target.value)}
              type="text"
              id="username"
              className="border rounded-lg px-3 py-2 bg-white w-full ml-16 h-12 mb-4"
              placeholder="Digite o CPF do paciente"
            />
            <label
              htmlFor="nome"
              className="block text-white font-bold ml-16 text-lg"
            >
              Data de nascimento
            </label>
            <input
              onChange={(e) => setNascimento(e.target.value)}
              type="text"
              id="username"
              className="border rounded-lg px-3 py-2 bg-white w-full ml-16 h-12 mb-4"
              placeholder="Digite a data de nascimento do paciente"
            />
            <label
              htmlFor="nome"
              className="block text-white font-bold ml-16 text-lg"
            >
              email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="username"
              className="border rounded-lg px-3 py-2 bg-white w-full ml-16 h-12 mb-4"
              placeholder="Digite o email do paciente"
            />
            <button
              type="submit"
              className="bg-darkgreen hover:bg-blue text-white font-bold  mt-4 ml-16 py-2 px-4 rounded w-full mt-8"
            >
              Salvar
            </button>
            {error && (
              <div className="bg-red ml-16 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
              )}
          </form>
        </div>
      </div>
    </div>
  );
}
