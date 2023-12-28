'use client'
import React from 'react'
const page = ({params}) => {
  console.log(params);
  return (
    <div>
       name = {params.student}
    </div>
  )
}

export default page
