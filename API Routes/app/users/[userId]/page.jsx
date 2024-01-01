async function getUsers(id) {
    let res = await fetch(`http://localhost:3000/api/users/${id}`)
    res = await res.json()
    return res.data
}

const page = async ({ params }) => {
    const data = await getUsers(params.userId)
    console.log(data);
  
    return (
        <div>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}
export default page