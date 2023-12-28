import image1 from "@/public/doctor-img01.png"
import Image from "next/image"

const page = () => {
    console.log(image1);
  return (
    <div>
      <Image src={image1}  width={100}/>
    </div>
  )
}

export default page
