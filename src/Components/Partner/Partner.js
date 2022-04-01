import React from 'react'
import Slider from "react-slick";
import './Partner.css';  
import l1 from '../../assets/image/l1.png'
import l2 from '../../assets/image/l2.png'
import l3 from '../../assets/image/l3.png'
import l4 from '../../assets/image/l4.png'
import l5 from '../../assets/image/l5.png'
import l6 from '../../assets/image/l6.png'
function Partner() {
    const data =[
        {
            image:l1,
        },
        {
            image:l2,
        },
        {
            image:l3,
        },
        {
            image:l4,
        },
        {
            image:l5,
        },
        {
            image:l6,
        }  
    ]
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        padding: "200px",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      let listPartner = data.map((ele,index) => {
          return    <div key={index} style={{padding:"0 20px"}}> 
                     <div className="position-relative w-100" style={{border:'1px solid red', borderRadius:'10px',height: '100px', backgroundImage: `url(${ele.image})`, backgroundSize: '80%', backgroundPosition: 'center' ,backgroundRepeat:'no-repeat' }}></div>
                </div>  
      })
  return (
    <>
    <div className="container"> 
      <h3 className="text-center title" style={{ margin: "115px 0 80px 0" }}>
       Những người bạn đồng hành
      </h3>
        <Slider {...settings}>
            {listPartner}
        </Slider> 
    </div>
    </>
  )
}

export default Partner