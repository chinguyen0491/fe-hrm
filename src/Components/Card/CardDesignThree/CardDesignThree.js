import React from 'react'

function CardDesignThree({image,content}) {
  return (
    <div className="w-100" style={{boxShadow: 'rgb(17 17 26 / 5%) 0px 1px 0px, rgb(17 17 26 / 59%) 0px 0px 8px'}}>
        <div style={{height: '200px', backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat:'no-repeat' }}/>
        <div className={`p-4 d-flex justify-content-center  align-items-center`}>
            <p className={''} style={{fontWeight:'700',fontSize:'16px'}}>{content}</p> 
        </div>
    </div>
  )
}

export default CardDesignThree