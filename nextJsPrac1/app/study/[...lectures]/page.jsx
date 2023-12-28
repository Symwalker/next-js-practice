'use client'
import React from 'react'
const page = ({params}) => {
  console.log(params);
  return (
    <div>
      <h1>
      {params.lectures[0]}

      </h1>
      <p>
      {params.lectures[1]}

      </p>
    </div>
  )
}

export default page
