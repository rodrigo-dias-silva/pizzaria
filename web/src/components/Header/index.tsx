import { useContext } from "react";
import Link from "next/link";

import { SignOut } from "@phosphor-icons/react";
import { AuthContext } from "@/src/contexts/AuthContext";


export default function Header() {

  const { signOut } = useContext(AuthContext)

  return (
    <header className="h-20">
      <div className="max-w-6xl h-20 m-auto px-8 flex justify-between items-center">
        <Link href='/dashboard'>
          <img
            alt="logotipo DG Pizza"
            src='/logo.svg'
            className="w-48 h-16"
          />
        </Link>

        <nav className="flex items-center text-white gap-8">
          <Link href='/category' className="px-2 hover:text-red-theme transition-colors duration-500">
            <span>Categoria</span>
          </Link>

          <Link href='/product' className="px-2 hover:text-red-theme transition-colors duration-500">
            <span>Cardápio</span>
          </Link>

          <button
            className="px-2 hover:text-red-theme hover:scale-110 transition-all duration-500"
            onClick={signOut}
          >
            <SignOut size={24} />
          </button>
        </nav>
      </div>
    </header>
  )
}