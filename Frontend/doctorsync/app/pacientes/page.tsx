import React from 'react'
import Sidebar from '@/components/sidebar'
import Paciente from '@/components/paciente'

export default function page() {
  return (
    <div className='flex bg-green'>
        <Sidebar></Sidebar>
        <div className='flex-col'>
            <h1 className='text-4x1 text-white ml-16 mt-12 text-bold'> Pacientes</h1>
            <div className='ml-16 mt-12'>
               <Paciente></Paciente>
            </div>
        </div>
    </div>
  )
}
