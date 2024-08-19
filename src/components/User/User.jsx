import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-600 rounded-md  text-cyan-50 p-3 text-2xl'>User : {userid}</div>
  )
}

export default User