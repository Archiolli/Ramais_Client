"use client";
import { useState } from "react";
import Background from "@/components/Background";
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRamalList } from "./context/ModalContext";
import PdfMaker from "@/components/pdfMake";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { iRamais } from "@/@types/types";

const FormListarRamais = ({ ramais }: {ramais: iRamais[]}) => {

	const [search, setSearch] = useState<string>()

	const { setUserInfos, setUserInfosToUpdate, modalAlterarRef, modalDeletarRef } = useRamalList()

	const gerarPdf = () => {
		PdfMaker(ramais)
	}

	const ramaisFiltrados = search == null ? ramais : ramais?.filter((val) => {
		const searchFormatted = search.trim().toUpperCase();
		return val.nm_funcionario.toUpperCase().includes(searchFormatted) ||
			String(val.cd_ramal).includes(searchFormatted) ||
			val.nm_departamento.toUpperCase().includes(searchFormatted) ||
			val.nm_andar.toUpperCase().includes(searchFormatted) ||
			val.nm_predio?.toUpperCase().includes(searchFormatted) ||
			val.nm_cargos.toUpperCase().includes(searchFormatted);
	});



	return (
		<Background>

			<div className="flex flex-col w-full h-full items-center justify-center px-24">

				<div className="flex flex-row h-20 justify-center items-center w-full p-5">
					<div className="absolute -mr-48"><SearchIcon /></div>
					<label className="mr-2">Buscar Ramais:</label>
					<input type="text"
						className="h-8 p-2 w-72 rounded-md"
						placeholder="Busque por qualquer coisa..."
						onChange={(e) => setSearch(e.target.value.toUpperCase())}
					/>
					<div className="ml-12">
						<span className="bg-red-800 
						items-center p-3 rounded-xl text-white
						hover:from-186A9F hover:to-BEE5FF
						hover:duration-150 hover:ease-in-out
						hover:ring-2 hover:ring-red-600
						ring-offset-4 
						cursor-pointer
						" onClick={gerarPdf}>
							<button className="mr-2" >Gerar PDF</button><InsertDriveFileIcon />
						</span>
					</div>
				</div>
				<div className="bg-white bg-opacity-40 w-4/4 block ">
					<div className="flex max-h-96 overflow-x-hidden p-2 border-2 border-dashed border-cyan-600 overflow-y-scroll">
						<table>
							<thead>
								<tr className="border-b-2 border-black">
									<th scope="col" className="px-6 py-3 ">
										Usuários pertencentes
									</th>
									<th scope="col" className="px-6 py-3">
										Departamento
									</th>
									<th scope="col" className="px-6 py-3">
										Número do ramal
									</th>
									<th scope="col" className="px-5 py-3">
										Andar pertencente
									</th>
									<th scope="col" className="px-5 py-3">
										Prédio pertencente
									</th>
									<th scope="col" className="px-5 py-3">
										Cargo
									</th>
									<th scope="col" className="px-5 py-3">
										Nome da empresa
									</th>
									<th scope="col" className="px-5 py-3">
										Editar/Excluir
									</th>
								</tr>
							</thead>
							<tbody>
								{!!ramaisFiltrados?.length && ramaisFiltrados.map((val) => {
									return (
										<tr className="border-b-2 border-black" key={val.nm_funcionario + val.cd_departamento + val.cd_cargos} >
											<th className="font-medium text-gray-900 whitespace-wrap text-start">
												<div className='py-8 px-1 '>{val.nm_funcionario}</div>
											</th>
											<td className="text-center">
												<div className='py-4' >{val.nm_departamento}</div>
											</td>
											<td className="text-center">
												<div className='py-4' >{val.cd_ramal}</div>
											</td>

											<td className="text-center">
												<div className='py-4'>{val.nm_andar}</div>
											</td>
											<td className="text-center">
												<div className='py-4'>{val.nm_predio}</div>
											</td>
											<td className="text-center">
												<div className='py-4'>{val.nm_cargos}</div>
											</td>
											<td className="text-center">
												<div className='py-4'>{val.nm_empresa}</div>
											</td>
											<td className="text-center">
												<span
													onClick={() => {	
														console.log(val.cd_departamento, val.cd_cargos, val.cd_empresa,
															val.nm_funcionario, val.nm_departamento,
															val.nm_cargos, val.nm_predio, val.nm_andar, val.cd_ramal);													
														modalAlterarRef?.current?.openModal()
														setUserInfosToUpdate?.([val.cd_departamento, val.cd_cargos, val.cd_empresa,
														val.nm_funcionario, val.nm_departamento,
														val.nm_cargos, val.nm_predio, val.nm_andar,
														 val.cd_ramal, val.nm_empresa, val.cd_empresa])
													}}><ModeEditIcon fontSize="medium" />
												</span>
												<span
													className="ml-3"
													onClick={() => {																																			
														modalDeletarRef?.current?.openModal()
														setUserInfos?.([val.cd_departamento, val.cd_cargos, val.cd_empresa,
														val.nm_funcionario, val.nm_departamento,
														val.nm_cargos, val.nm_predio, val.nm_andar, val.cd_ramal])
													}}><DeleteForeverIcon fontSize="medium" />
												</span>
											</td>

										</tr>
									)

								})}

							</tbody>
						</table>
					</div>



				</div>


			</div>

			<ToastContainer position="bottom-right" />
		</Background >



	);
}

export default FormListarRamais;
