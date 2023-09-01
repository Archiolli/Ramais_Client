"use client"
import Link from "next/link";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

import { useState } from "react";

export default function Navbar () {

  const [display, setDisplay] = useState('hidden');

  return (
      <aside onMouseOver={() => setDisplay('block')} onMouseLeave={()=> setDisplay('hidden')} className={`w-16 h-screen flex
       flex-col space-y-4 items-center justify-center absolute z-10
       bg-gradient-to-b from-BEE5FF to-186A9F
       hover:w-44 text-black ease-in duration-200
       `}>
        <Link href={`/listar-ramais`} className="w-full" >
          <div className={`h-14 px-1 w-full flex items-center ${display === "hidden" ? 'justify-center' : 'justify-start pl-2'} rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-40 hover:duration-300 hover:ease-linear`}>
            < PermPhoneMsgIcon/>
            <span className={`${display } ml-5`}>Lista de ramais</span>
          </div>
        </Link>
        <Link href={`/adicionar-ramal`} className="w-full" >
          <div className={`h-14 px-1 w-full flex items-center ${display === "hidden" ? 'justify-center' : 'justify-start pl-2'} rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-40 hover:duration-300 hover:ease-linear`}>
            <AddIcCallIcon />
            <span className={`${display } ml-5`}>Adicionar Ramal</span>
          </div>
        </Link>
        
      </aside>
  );
}