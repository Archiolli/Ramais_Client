
'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import getCargos from '@/data/Controllers/cargos';
import { iCargos } from '@/@types/types';


export default function useCargos() {

    const [cargos, setCargos] = useState<iCargos[]>()

    useEffect(() => {
        (async () => setCargos(await getCargos()))()
    },[])

    return {
        cargos
    }
} 
