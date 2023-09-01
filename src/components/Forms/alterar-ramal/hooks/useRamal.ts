'use client'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import getRamais from '@/data/Controllers/ramais';
import { iRamais } from '@/@types/types';


export default function useRamal(URL : string) {

    const [ramais, setRamais] = useState<iRamais[]>([])

     useEffect(() => {
        (async () => setRamais(await getRamais()))()
    }, [])

    const handleAddRamal = async (data: any) => {
        console.log(data)
        await toast.promise(
            axios.put(`${URL}/changeRamal`,
                data
            ).then((res) => {
                return Promise.resolve();
            }).catch((e) => {
                console.log(e);
                return Promise.reject();
            }), {
            pending: 'Aguarde...',
            success: 'Ramal alterado com sucesso!',
            error: 'Erro ao alterar Ramal',

        }, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        }
        ).finally(() => {

            setTimeout(() => {
                window.location.reload();
            }, 1500)
        })



    }

    const deleteRamalById = async (cd_departamento: number | string, cd_cargos: number | string, cd_empresa: number | string) => {
        await toast.promise(
            axios.delete(`${URL}/deleteRamal`, {
                data: { cd_departamento, cd_cargos, cd_empresa }
            }).then((res) => {
                return Promise.resolve();
            }).catch((e) => {
                console.log(e);
                return Promise.reject();
            }), {
            pending: 'Aguarde...',
            success: 'Ramal Excluído!',
            error: 'Erro ao excluir Ramal',

        }, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        }).finally(() => {
            setTimeout(() => {
                window.location.reload();
            }, 1500)
        })
    };
    return {
        deleteRamalById,
        handleAddRamal,
        ramais
    }
} 