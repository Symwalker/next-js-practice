import { Roboto } from "next/font/google"
const roboto = Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})
const page = () => {
  return (
    <div>
      {/* <h2 className='text-[23px] ' style={{fontFamily:"Roboto", fontWeight:100}}>hello from fonts</h2> */}
      {/* <h2 className={`${roboto.className} text-[22px] font-extrabold`}>hello from fonts</h2> */}
      <h2 className={roboto.className}>hello from fonts</h2>
      {/* <p style={{fontFamily:"Roboto"}}>this is my paragrap Eh</p> */}
    </div>
  )
}

export default page
