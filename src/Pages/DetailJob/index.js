import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
function Index() { 
    let id  = useParams(); 
    console.log(id)
  return (
    <h1>Name: {id.name}</h1>
  )
}

export default Index