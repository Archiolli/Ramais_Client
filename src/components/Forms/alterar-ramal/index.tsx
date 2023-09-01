import { iRamais } from "@/@types/types";
import ModalProvider from "./context/ModalContext";
import { default as FLR } from "./FormListarRamais";

export default function FormListarRamais({ ramais, URL }: {ramais: iRamais[], URL: string} ) {
    return (
        <ModalProvider  URL={URL}>
            <FLR ramais={ramais}/>
        </ModalProvider>
    )
}

