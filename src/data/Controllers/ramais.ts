
'use server'

export default async function getRamais () {
    console.log(`${process.env.URL}/getAllRamais`)
    try {
        const response = await fetch(`${process.env.URL}/getAllRamais`, {
            cache: "no-store"
        });  
        const data =  await response.json()     
        return data
    } catch (e) {
        console.log(e);
    }
}