import Link from 'next/link'
import React from 'react'

const page = () => {
    const students = [
        {
            id:1,
            name:"shayan"
        },
        {
            id:2,
            name:"salman"
        },
        {
            id:3,
            name:"farhan"
        },
        {
            id:4,
            name:"hanif"
        }
    ]
  return (
    <div>
        <ul>

      {
        students.map((student)=>(
            <li><Link href={`/studentList/${student.name}`} > {student.name}</Link></li>
        ))
      }
        </ul>

    </div>
  )
}

export default page
