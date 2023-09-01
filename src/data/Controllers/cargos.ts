'use server'

export default async function getCargos () {
    try {
        const response = await fetch(`${process.env.URL}/getAllCargos`, {
            cache: "no-store"
        });
        const data =  await response.json()     
        return data
    } catch (e) {
        console.log(e);
    }
}
