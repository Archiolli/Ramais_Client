"use client";
import { useRef, useState, useCallback, Fragment, useEffect } from "react";
import Background from "@/components/Background";
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormAdicionarRamal = ({ URL }: { URL: string }) => {

    interface iEmpresa {
        cd_empresa: number;
        nm_empresa: string;
    }
    interface iCargos {
        cd_cargos: number;
        nm_cargos: string;
    }



    const nmFuncionarioInputRef = useRef<HTMLInputElement>(null);
    const nmDepartamentoInputRef = useRef<HTMLInputElement>(null);
    const cdCargoSelectRef = useRef<HTMLSelectElement>(null);
    const cdRamalInputRef = useRef<HTMLInputElement>(null);
    const nmAndarInputRef = useRef<HTMLInputElement>(null);
    const cdEmpresaSelectRef = useRef<HTMLSelectElement>(null);
    const nmUpdateuserInputRef = useRef<HTMLInputElement>(null);
    const nmPredioInputRef = useRef<HTMLInputElement>(null);

    const [empresas, setEmpresas] = useState<iEmpresa[]>([])
    const [cargos, setCargos] = useState<iCargos[]>([])


    useEffect(() => {
        getAllEmpresas()
        getAllCargos()
    }, [])


    const getAllEmpresas = async () => {
        try {
            const data = await axios.get(`${URL}/getAllEmpresas`);
            setEmpresas(data.data)
        } catch (e) {
            console.log(e);
        }
    }
    const getAllCargos = async () => {
        try {
            const data = await axios.get(`${URL}/getAllCargos`);
            setCargos(data.data)
        } catch (e) {
            console.log(e);
        }
    }



    const handleAddRamal = useCallback(async () => {

        if (cdRamalInputRef.current!.value === '' || !cdRamalInputRef.current!.value) {
            toast.warn(`Preencha o campo de ramal para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (cdCargoSelectRef.current!.value === '' || !cdCargoSelectRef.current!.value) {
            toast.warn(`Preencha o campo de cargo para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (nmDepartamentoInputRef.current!.value === '' || !nmDepartamentoInputRef.current!.value) {
            toast.warn(`Preencha o nome do departamento para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (nmAndarInputRef.current!.value === '' || !nmAndarInputRef.current!.value) {
            toast.warn(`Preencha o número do andar para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (cdEmpresaSelectRef.current!.value === '' || !cdEmpresaSelectRef.current!.value) {
            toast.warn(`Selecione a empresa para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (nmFuncionarioInputRef.current!.value === '' || !nmFuncionarioInputRef.current!.value) {
            toast.warn(`Preencha o nome do funcionário para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (nmUpdateuserInputRef.current!.value === '' || !nmUpdateuserInputRef.current!.value) {
            toast.warn(`Preencha o registro para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }
        if (nmPredioInputRef.current!.value === '' || !nmPredioInputRef.current!.value) {
            toast.warn(`Preencha o nome do pŕedio para prosseguir`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            return
        }


        await toast.promise(
            axios.post(`${URL}/addRamal`, {
                ramal: cdRamalInputRef.current?.value,
                usuario: nmUpdateuserInputRef.current?.value,
                cargo: cdCargoSelectRef.current?.value,
                departamento: nmDepartamentoInputRef.current?.value,
                andar: nmAndarInputRef.current?.value,
                empresa: cdEmpresaSelectRef.current?.value,
                funcionario: nmFuncionarioInputRef.current?.value,
                nm_predio: nmPredioInputRef.current?.value
            }).then((res) => {
                closeModal();
                return Promise.resolve(); // Resolving the promise with no value
            }).catch((e) => {
                console.log(e);
                return Promise.reject(); // Rejecting the promise with no value
            }), {
            pending: 'Aguarde...',
            success: 'Ramal Adicionado',
            error: 'Erro ao adicionar Ramal',

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
            // Limpar os campos
            cdRamalInputRef.current!.value = '';
            nmUpdateuserInputRef.current!.value = '';
            cdCargoSelectRef.current!.value = '';
            nmDepartamentoInputRef.current!.value = '';
            nmAndarInputRef.current!.value = '';
            cdEmpresaSelectRef.current!.value = '';
            nmFuncionarioInputRef.current!.value = '';
            nmPredioInputRef.current!.value = '';
        })



    }, [nmFuncionarioInputRef, nmDepartamentoInputRef, cdCargoSelectRef, cdRamalInputRef, nmAndarInputRef, cdEmpresaSelectRef, nmUpdateuserInputRef]);

    const [open, setOpen] = useState(false);
    const closeModal = () => {
        setOpen(false)
    }

    const openModal = () => {
        setOpen(true)
    }


    return (

        <>
            <Background>

                <div className="overflow-y-auto h-full w-full flex justify-center items-center">
                    <div className="bg-white bg-opacity-40 rounded-lg w-4/4 flex flex-col mt-20
                 items-center justify-center py-2">
                        <div className="text-4xl border-solid border-b-2 border-cyan-900 w-full font-mono font-bold text-center py-2 pb-5 ">
                            <p>Adicionar Ramal</p>
                        </div>
                        <div className="w-3/4 items-center">
                            <div className="w-full">
                                <label htmlFor="">Numero do Ramal:</label>
                                <input
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    placeholder="ex: 999 ou (99) 999999999"
                                    ref={cdRamalInputRef}
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="">Nome do funcionário:</label>
                                <input
                                    placeholder="ex: João..."
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmFuncionarioInputRef}
                                />
                            </div>

                            <div className="w-full"><label htmlFor="">Andar do departamento:</label>
                                <input
                                    placeholder="ex: Térreo... 1º andar..."
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmAndarInputRef}
                                />
                            </div>
                            <div className="w-full"><label htmlFor="">Nome do departamento:</label>
                                <input
                                    placeholder="ex: Marketing, informática"
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmDepartamentoInputRef}
                                />
                            </div>
                            <div className="w-full"><label htmlFor="">Nome do prédio</label>
                                <input
                                    placeholder="ex: Rua Amazonas..."
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmPredioInputRef}
                                />
                            </div>

                            <div className="w-full">
                                <label htmlFor="">Empresa pertencente:</label>
                                <select
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={cdEmpresaSelectRef}
                                >
                                    <option >Selecione uma opção</option>
                                    {empresas.map((val) => {
                                        return (
                                            <option key={val.cd_empresa} value={val.cd_empresa}>{val.nm_empresa}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="w-full"><label htmlFor="">Cargo do usuario:</label>
                                <select
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={cdCargoSelectRef}
                                >
                                    <option >Selecione uma opção</option>
                                    {cargos.map((val) => {
                                        return (
                                            <option key={val.cd_cargos} value={val.cd_cargos}>{val.nm_cargos}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <span className="flex justify-center items-center mt-5">
                                <button className="bg-186A9F rounded-lg p-3 text-white
                                hover:from-186A9F hover:to-BEE5FF
                                hover:duration-150 hover:ease-in-out
                                hover:ring-2 hover:ring-mouseHoverNav
                                ring-offset-4 ring-offset-cardContent
                                cursor-pointer"
                                    onClick={openModal}
                                >
                                    enviar
                                </button>


                            </span>
                        </div>
                    </div>
                </div>



                <Transition appear show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="border-b-2 border-slate-300 flex w-full justify-center items-center text-lg font-medium leading-6 text-gray-900"
                                        >
                                            Informe seu registro para continuar
                                        </Dialog.Title>
                                        <div className="mt-3 w-full justify-center px-16">
                                            <input
                                                className={`w-full px-2 h-10 border-solid border-2 border-slate-400 rounded-md outline-cyan-600`}
                                                type="text"
                                                placeholder="registro..."
                                                ref={nmUpdateuserInputRef}
                                            />
                                        </div>

                                        <div className="mt-5 flex w-full justify-center items-center">
                                            <button
                                                type="button"
                                                onClick={handleAddRamal}
                                                className="bg-186A9F rounded-lg p-2 text-white
                                                hover:from-186A9F hover:to-BEE5FF
                                                hover:duration-150 hover:ease-in-out
                                                hover:ring-2 hover:ring-mouseHoverNav
                                                ring-offset-4 ring-offset-cardContent
                                                cursor-pointer"
                                            >
                                                Adicionar ramal
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </Background>
            <ToastContainer position="bottom-right" />
        </>


    );
}

export default FormAdicionarRamal;