import React from 'react'

function CardDesignThree({image,content}) {
  return (
    <div className="w-100" style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'}}>
        <div style={{height: '200px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat:'no-repeat' }}/>
        <div className={`p-4 d-flex justify-content-center  align-items-center`}>
            <p className={''} style={{fontWeight:'700',fontSize:'16px'}}>{content}</p> 
        </div>
    </div>
  )
}

export default CardDesignThree