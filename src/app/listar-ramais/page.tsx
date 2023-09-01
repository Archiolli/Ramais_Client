import FormListarRamais from "@/components/Forms/alterar-ramal";
import getRamais from "@/data/Controllers/ramais";

export default async function alterarRamais() {     
    const ramais =  await getRamais()
    return (
        <FormListarRamais URL={`${process.env.URL}`} ramais={ramais}/>
    );
}