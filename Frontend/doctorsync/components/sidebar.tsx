import React from "react";

export default function Sidebar() {
  return (
    <aside className="bg-darkgreen w-48 h-screen text-center text-white pt-4">
      <ul>
        <li className="mb-8 font-bold text-xl">Pacioentes</li>
        <li className="mb-8 font-bold text-xl">Cadastrar novo paciente</li>
        <li className="mb-8 font-bold text-xl">Cadastrar nova consulta</li>
        <li className="mb-8 font-bold text-xl">Receituários</li>
      </ul>
    </aside>
  );
}
