"use client"

import React from "react";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  return (
    <aside className="bg-darkgreen w-48 h-screen text-center text-white pt-16">
      <ul>
        <li className="mb-8 font-bold text-xl">
          <a href="/pacientes" className="mt-8">
            Pacientes
          </a>{" "}
        </li>
        <li className="mb-8 font-bold text-xl">
          <a href="/novo-paciente" className="mt-8">
            Cadastrar novo paciente
          </a>{" "}
        </li>
        <li className="mb-8 font-bold text-xl">
          <a href="/nova-consulta" className="mt-8">
            Cadastrar nova consulta
          </a>{" "}
        </li>
        <li className="mb-8 font-bold text-xl">
          {" "}
          <button
            onClick = {() => signOut()}
            className="bg-green hover:bg-blue text-white font-bold  mt-4 py-2 px-4 rounded w-full mt-8"
          >
            Log out
          </button>
        </li>
      </ul>
    </aside>
  );
}
