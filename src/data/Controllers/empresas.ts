'use server'

export default async function getEmpresas () {
    try {
        const response = await fetch(`${process.env.URL}/getAllEmpresas`, {
            cache: "no-store"
        });
        const data =  await response.json()     
        return data
    } catch (e) {
        console.log(e);
    }
}
