import React from 'react'
import Sidebar from '@/components/sidebar'
import Paciente from '@/components/paciente'

export default function page() {
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
}
