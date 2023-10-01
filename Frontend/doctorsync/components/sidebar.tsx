import React from "react";

export default function Sidebar() {
  return (
    <aside className="bg-darkgreen w-48 h-screen text-center text-white pt-16">
      <ul>
        <li className="mb-8 font-bold text-xl"><a href="/pacientes" className="mt-8">Pacientes</a> </li>
        <li className="mb-8 font-bold text-xl"><a href="/novo-paciente" className="mt-8">Cadastrar novo paciente</a> </li>
        <li className="mb-8 font-bold text-xl"><a href="/nova-consulta" className="mt-8">Cadastrar nova consulta</a> </li>
        <li className="mb-8 font-bold text-xl"><a href="/pacientes" className="mt-8">Receituários</a> </li>
      </ul>
    </aside>
  );
}
