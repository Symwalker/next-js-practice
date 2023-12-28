import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <div>
      <Script
      src='/location.js'
      />
      <h1>GET User Location</h1>
    </div>
  )
}

export default page
