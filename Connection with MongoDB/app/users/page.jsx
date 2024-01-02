import Link from "next/link"

async function getUsers(){
    let res =  await fetch(`http://localhost:3000/api/users`)
    res = res.json()
    return res

}
const page = async () => {
    const data = await getUsers()
    console.log(data);
  return (
    <div>
      {
        data.map((item)=>(
            <Link href={`/users/${item.id}`} key={item.id} >
            <h2 className="text-[22px] font-semibold">{item.name}</h2>
            </Link>
        ))
      }
    </div>
  )
}

export default page
