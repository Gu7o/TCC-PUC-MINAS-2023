import React from 'react'
import Sidebar from '@/components/sidebar'

export default function page() {
  return (
    <div className='flex bg-green'>
        <Sidebar></Sidebar>
        <div className='flex'>
            <h1 className='text-4x1 text-white ml-16 mt-12 text-bold'> Cadastrar nova consulta</h1>
        </div>
    </div>
  )
}
