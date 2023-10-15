"use client";

import React from 'react'
import Sidebar from '@/components/sidebar'
import Paciente from '@/components/paciente'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"


export default function home() {
  
  const {data : session} = useSession();
  const router = useRouter();

  if (session) {
    console.log("Sessiton:", session);
    return (
      <div className='flex bg-green w-full'>
          <Sidebar></Sidebar>
          <div className='flex-col w-full'>
            <div className='flex w-full items-end'>
              <h1 className='text-4x1 text-white pl-16 pt-12 text-bold'> Pacientes</h1>
              <input
                    type="text"
                    id="username"
                    className="border rounded-lg px-3 py-2 bg-white w-1/2 ml-16 h-12"
                    placeholder="Digite o nome do paciente"
                />
            </div>
              <div className='ml-16 mt-12'>
                 <Paciente></Paciente>
              </div>
          </div>
      </div>
    )
  } else {
    router.replace("login");
  }
}