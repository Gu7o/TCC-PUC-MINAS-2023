import React from "react";
import Image from "next/image";

export default function pages() {
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="flex bg-login text-primary w-auto max-w-screen-md  p-8">
        <div className="flex-col w-2/3 mr-8">
          <div className="flex-col justify-center items-center text-center">
            <p className="text-xl font-bold">Cadastro</p>
          </div>
          <div className=" flex justify-start w-full ml-4 mt-4">
            <form>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold ml-2 text-xxs"
                >
                  NOME *:
                </label>
                <input
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
              <a href="/login" className="mt-8">Já possui conta? Faça Login</a>  
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