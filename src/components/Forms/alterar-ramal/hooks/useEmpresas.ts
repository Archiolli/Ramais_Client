
'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import getEmpresas from '@/data/Controllers/empresas';
import { iEmpresa } from '@/@types/types';


export default function useEmpresas() {

    const [empresas, setEmpresas] = useState<iEmpresa[]>()

    useEffect(() => {
        (async () => setEmpresas(await getEmpresas()))()
    },[])

    return {
        empresas
    }
} 