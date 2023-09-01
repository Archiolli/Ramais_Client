import { iModalAttributes } from "@/components/modal";
import { RefObject } from "react";

export interface iRamais {
    cd_departamento: number;
    nm_departamento: string;
    nm_funcionario: string;
    cd_cargos: number;
    cd_ramal: string;
    nm_andar: string;
    cd_empresa: number;
    nm_predio: string;
    nm_cargos: string;
    nm_empresa: string;
}
export interface iEmpresa {
    cd_empresa: number;
    nm_empresa: string;
}
export interface iCargos {
    cd_cargos: number;
    nm_cargos: string;
}
export interface iModalContext {
    setUserInfosToUpdate?: (...arg: any) => void,
    setUserInfos?: (...arg: any) => void,
    ramais?: iRamais[]
    modalAlterarRef?: RefObject<iModalAttributes>;
    modalDeletarRef?: RefObject<iModalAttributes>
    modalAdicionar?: RefObject<iModalAttributes>
    data?: () => {
        ramal: string | undefined;
        usuario: string | undefined;
        cargos: string | undefined;
        departamento: string | undefined;
        andar: string | undefined;
        empresa: string | undefined;
        funcionario: string | undefined;
        nmPredio: string | undefined;
    }
}

