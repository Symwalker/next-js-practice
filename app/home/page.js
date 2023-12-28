'use client'
import React, { useState } from 'react'
import homeCss from "./home.module.css" 
const page = () => {
  const [color, setColor ] = useState("red")  
  return (
    <div>
      <h1 className={homeCss.main}>
       This is Home Page
      </h1>
      <p>lorem ipsum dolor sit</p>
    </div>
  )
}

export default page