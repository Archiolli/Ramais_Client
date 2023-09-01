import Prodesan from "@/components/logo/index";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export default function Home() {
  return (
    <div className="w-full h-screen flex-col text-center bg-white flex justify-center items-center">
      <span className="mb-5"><ContactPhoneIcon sx={{ fontSize: 96 }} /></span>
      <p className="text-3xl font-bold font-mono">Ramais</p> 
    </div>
  )
}
