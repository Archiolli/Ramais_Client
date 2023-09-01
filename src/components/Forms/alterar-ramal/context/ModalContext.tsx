'use client'
import Modal, { iModalAttributes } from '@/components/modal';
import { PropsWithChildren, createContext, useCallback, useContext, useRef, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import 'react-toastify/dist/ReactToastify.css';
import useRamal from '../hooks/useRamal';
import useCargos from '../hooks/useCargos';
import useEmpresas from '../hooks/useEmpresas';
import { iModalContext} from '@/@types/types';




const ModalContext = createContext<iModalContext>({} as iModalContext)

const ModalProvider = ({ children, URL }: PropsWithChildren<{ URL: string }>) => {


    //Funções get, put e delete
    const { deleteRamalById, handleAddRamal, ramais } = useRamal(URL)
    const { empresas } = useEmpresas()
    const { cargos } = useCargos()



    const nmUsuarioRamalInputRef = useRef<HTMLInputElement>(null);
    const cdCargoSelectRef = useRef<HTMLSelectElement>(null);
    const cdEmpresaSelectRef = useRef<HTMLSelectElement>(null);
    const predioPertencenteInputRef = useRef<HTMLInputElement>(null);
    const nmAndarInputRef = useRef<HTMLInputElement>(null);
    const cdRamalInputRef = useRef<HTMLInputElement>(null);
    const nmUpdateUserInputRef = useRef<HTMLInputElement>(null);
    const nmDepatamentoInputRef = useRef<HTMLInputElement>(null);


    const modalAlterarRef = useRef<iModalAttributes>(null);
    const modalDeletarRef = useRef<iModalAttributes>(null);

    const [userInfos, setUserInfos] = useState<(string | number)[]>([])


    const [userInfosToUpdate, setUserInfosToUpdate] = useState<(string | number)[]>([])

    const [inputVisibility, setInputVisibility] = useState({
        nomeUsuario: false,
        cargoUsuario: false,
        predioPertencente: false,
        andarDepartamento: false,
        numeroRamal: false,
        nomePredio: false,
        nomeDepartamento: false
    });
    const data = useCallback(() => {
        return {
            cd_departamento: userInfosToUpdate[0],
            nm_funcionario: !nmUsuarioRamalInputRef.current?.value ? userInfosToUpdate[3] : nmUsuarioRamalInputRef.current?.value,
            nm_departamento: !nmDepatamentoInputRef.current?.value ? userInfosToUpdate[4] : nmDepatamentoInputRef.current?.value,
            cd_cargos: !cdCargoSelectRef.current?.value ? userInfosToUpdate[1] : cdCargoSelectRef.current?.value,
            cd_empresa: !cdEmpresaSelectRef.current?.value ? userInfosToUpdate[2] : cdEmpresaSelectRef.current?.value,
            nm_predio: !predioPertencenteInputRef.current?.value ? userInfosToUpdate[6] : predioPertencenteInputRef.current?.value,
            nm_andar: !nmAndarInputRef.current?.value ? userInfosToUpdate[7] : nmAndarInputRef.current.value,
            cd_ramal: !cdRamalInputRef.current?.value ? userInfosToUpdate[8] : cdRamalInputRef.current?.value,
            nm_updateuser: nmUpdateUserInputRef.current?.value
        }
    }, [nmUsuarioRamalInputRef, nmDepatamentoInputRef, cdCargoSelectRef, cdEmpresaSelectRef, predioPertencenteInputRef,
        nmAndarInputRef, cdRamalInputRef, userInfosToUpdate, nmUpdateUserInputRef])



    const toggleInputVisibility = (inputName: any) => {
        setInputVisibility((prevState: any) => ({
            ...prevState,
            [inputName]: !prevState[inputName]
        }));
    };




    return (

        <ModalContext.Provider value={{
            setUserInfosToUpdate,
            setUserInfos,
            ramais,
            modalAlterarRef,
            modalDeletarRef, 
        }}>
            {children}
            <Modal ref={modalAlterarRef} modalTitle={<div >Dados para alteração de ramal</div>}>
                <>
                    <div className="mt-3 w-full justify-center ">
                        <div className="w-full py-2 border-b-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Nome do(s) usuário(s) do ramal:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('nomeUsuario')} fontSize="small" />
                            </div>
                            {inputVisibility.nomeUsuario && (
                                <input
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmUsuarioRamalInputRef}
                                    type="text" placeholder="Digite o nome do usuário" />
                            ) || userInfosToUpdate[3]}
                        </div>
                        <div className="w-full py-2 border-b-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Nome do departamento:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('nomeDepartamento')} fontSize="small" />
                            </div>
                            {inputVisibility.nomeDepartamento && (
                                <input
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmDepatamentoInputRef}
                                    type="text" placeholder="Digite o nome do usuário" />
                            ) || userInfosToUpdate[4]}
                        </div>

                        <div className="w-full py-2 border-b-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Cargo do(s) usuário(s) do ramal:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('cargoUsuario')} fontSize="small" />
                            </div>

                            {inputVisibility.cargoUsuario && (
                                <select
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={cdCargoSelectRef}>
                                    <option value="">Selecione uma opção</option>
                                    {cargos?.map((val) => {
                                        return (
                                            <option key={val.cd_cargos} value={val.cd_cargos}>{val.nm_cargos}</option>
                                        )
                                    })}

                                </select>
                            ) || userInfosToUpdate[5]}
                        </div>

                        <div className="w-full py-2 border-b-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Prédio pertencente:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('predioPertencente')} fontSize="small" />
                            </div>
                            {inputVisibility.predioPertencente && (
                                <input
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={predioPertencenteInputRef}
                                    type="text" placeholder="Digite o prédio pertencente" />
                            ) || userInfosToUpdate[6]}
                        </div>

                        <div className="w-full py-2 border-b-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Andar do departamento:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('andarDepartamento')} fontSize="small" />
                            </div>

                            {inputVisibility.andarDepartamento && (
                                <input
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={nmAndarInputRef}
                                    type="text" placeholder="Digite o andar do departamento" />
                            ) || userInfosToUpdate[7]}
                        </div>

                        <div className="w-full py-2 border-b-2 border-gray-300">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Número do ramal:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('numeroRamal')} fontSize="small" />
                            </div>

                            {inputVisibility.numeroRamal && (
                                <input
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={cdRamalInputRef}
                                    type="text" placeholder="Digite o número do ramal" />
                            ) || userInfosToUpdate[8]}
                        </div>
                        <div className="w-full py-2 ">
                            <div className="flex justify-between items-center">
                                <b className="mr-10 flex-nowrap">Nome da empresa:</b>
                                <ModeEditIcon onClick={() => toggleInputVisibility('nomePredio')} fontSize="small" />
                            </div>

                            {inputVisibility.nomePredio && (
                                <select
                                    className={`w-full px-2 mr-2 h-8 border-solid border-2 border-slate-400 rounded-md`}
                                    ref={cdEmpresaSelectRef} >
                                    <option value="">Selecione uma opção</option>
                                    {empresas?.map((val) => {
                                        return (
                                            <option key={val.cd_empresa} value={val.cd_empresa}>{val.nm_empresa}</option>
                                        )
                                    })}
                                </select>
                            ) || userInfosToUpdate[9]}
                        </div>
                        <div>
                            <label className='text-red-400'>Informe seu registro para poder continuar*</label>
                            <input type="text"
                                className={`w-full px-2 mr-2 h-10 border-solid border-2 border-slate-500 rounded-md`}
                                ref={nmUpdateUserInputRef}
                                placeholder='registro...'
                                autoFocus
                            />
                        </div>
                    </div>



                    <div className="mt-5 flex w-full justify-center items-center">
                        <button
                            type="button"
                            onClick={() => { handleAddRamal(data()) }}
                            className="bg-186A9F rounded-lg p-2 text-white
                             					hover:from-186A9F hover:to-BEE5FF hover:duration-150 hover:ease-in-out hover:ring-2 
												ring-offset-4 cursor-pointer"

                        >
                            Alterar ramal
                        </button>
                    </div>
                </>



            </Modal>



            <Modal ref={modalDeletarRef} modalTitle={<span>Excluir {userInfos[3]} do departamento: {userInfos[4]}?</span>}>
                <div className="mt-3 w-full justify-center px-16">
                    <span className="flex w-full justify-center text-red-900">
                        <ReportGmailerrorredIcon fontSize="large" />
                    </span>
                    <span className="flex text-center text-red-900">
                        Ao clicar em "Sim", o Ramal será deletado permanentemente, deseja continuar?
                    </span>
                </div>

                <div className="mt-5 flex w-full justify-center items-center">
                    <span className="mr-5">
                        <button
                            type="button"
                            className="bg-red-600 rounded-lg p-3 text-white                            					 
                             					hover:duration-150 hover:ease-in-out
                            					 hover:ring-2 hover:ring-red-400
                             					ring-offset-4 ring-offset-white
                            					 cursor-pointer"
                            onClick={() => deleteRamalById(userInfos[0], userInfos[1], userInfos[2])}
                        >
                            Sim
                        </button>
                    </span>
                    <span>
                        <button
                            type="button"
                            className="bg-186A9F rounded-lg p-3 text-white
                             hover:from-186A9F hover:to-BEE5FF
                             hover:duration-150 hover:ease-in-out
                             hover:ring-2 hover:ring-mouseHoverNav
                             ring-offset-4 ring-offset-cardContent
                             cursor-pointer"
                            onClick={() => modalDeletarRef.current?.closeModal()}
                        >
                            Não
                        </button>
                    </span>


                </div>

            </Modal>
        </ModalContext.Provider>


    )
}

export default ModalProvider


export const useRamalList = () => useContext<iModalContext>(ModalContext)
