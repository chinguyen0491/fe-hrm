import React from 'react'
import { useHistory } from 'react-router-dom'; 
function Index({ match }) { 
    let id  = useHistory(); 
    console.log(id)
  return (
    <h1>Name: {id.location.hash}</h1>
  )
}

export default Index