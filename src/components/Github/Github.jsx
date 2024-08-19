import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hema-vallika')
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    },[])
  return (
    <>
     <div className='text-center m-4 rounded-lg p-4 bg-orange-500 text-white text-2xl'>Github followers : {data.followers}</div>
    <img className='mx-auto' src={data.avatar_url} alt="git picture" width={300} />
    
    </>
   
  )
}

export default Github