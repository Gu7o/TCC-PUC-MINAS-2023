import React from 'react'
import Sidebar from '@/components/sidebar'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

export default function page() {
  return (
    <div className='flex bg-green'>
        <Sidebar></Sidebar>
        <div className='flex'>
            <h1 className='text-4x1 text-white ml-16 mt-12 text-bold'> Cadastrar novo paciente</h1>
        </div>
    </div>
  )
}
