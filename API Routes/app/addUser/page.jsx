"use client"
import { useState } from "react"
export default function page(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const submit = async () => {
        let response = await fetch(`http://localhost:3000/api/users`,
            {
                method: "Post",
                body: JSON.stringify({ name, email, age })
            })
            response = await response.json()
            if(response.success){
                alert("user created")
            }
            else{
                alert(response.result)
            }

    }

    return (
        <div className="ml-4 flex flex-col gap-6">
            <input type="text" className="border w-[200px] p-1 border-black rounded-sm" placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
            <input type="email" className="border w-[200px] p-1 border-black rounded-sm" placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className="border w-[200px] p-1 border-black rounded-sm" placeholder="enter your age" onChange={(e) => setAge(e.target.value)} />
            <button className="p-2 bg-blue-600 text-white w-[200px] cursor-pointer" onClick={submit}>Submit</button>
        </div>
    )
}


