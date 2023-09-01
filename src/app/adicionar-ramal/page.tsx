import FormAdicionarRamal from "@/components/Forms/adicionar-ramal";

export default async function adicionarRamal() { 
    
    return (
        <FormAdicionarRamal URL={`${process.env.URL}`}/>
    );
}