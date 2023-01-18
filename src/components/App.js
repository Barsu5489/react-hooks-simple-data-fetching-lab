// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
const [dog,setDog]= useState(null)


    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDog(data)
        })

    },)
  if(dog===null){
    return <p>Loading...</p>
  }
  console.log(dog)
  return (
    <div>
        <img src={dog.message} alt="A Random Dog" />
        
    </div>
  )
}

export default App
