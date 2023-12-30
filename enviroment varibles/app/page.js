import { API_URL } from '@/config/constant';
import Image from 'next/image'

export default function Home() {
  console.log(process.env.USER_PASS);
  return (
    <>
      <div>
        ENVIROMENT VARIABLES
        {API_URL}
      </div>
    </>
  )
}
