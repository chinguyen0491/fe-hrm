import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import bannerimage from "./assets/image/banner-04.jpg"
import Footer from "./Components/Footer/Footer";
import CardDesignSecond from "./Components/Card/CardDesignSecond/CardDesignSecond";
import CardDesignThree from "./Components/Card/CardDesignThree/CardDesignThree";
import c1 from './assets/image/c1.jpg'
import c2 from './assets/image/c2.jpg'
import c3 from './assets/image/c3.jpg'
import c4 from './assets/image/c4.jpg'
import f1 from './assets/image/f1.jpg'
import f2 from './assets/image/f2.jpg'
import f3 from './assets/image/f3.jpg'
import Partner from "./Components/Partner/Partner";
function App() {
  const dataShare = [
    {
      image:c1,
      content:'Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...',
      link:'/'
    },
    {
      image:c2,
      content:'Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...',
      link:'/'
    },
    {
      image:c3,
      content:'Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...',
      link:'/'
    },
    {
      image:c4,
      content:'Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...',
      link:'/'
    }
  ];
  const dataCard = [
    {
      image:f1,
      content:'Môi trường làm việc'
    },
    {
      image:f2,
      content:'Văn hoá doanh nghiệp'
    },
    {
      image:f3,
      content:'Chính sách phúc lợi & thăng tiến'
    }
  ]
  return (
    <>
      <Header />
      <Banner image={bannerimage} />
      <div className='container'>
      <h3 className="text-center title mb-5" style={{ marginTop: "150px" }}>
       Điều gì hấp dẫn ở Diligo Holdings đang chờ đón bạn
      </h3>
      <div className='row mt-4'>
      {dataCard.map((ele,index) => {
            return   <div className="col-sm-4 px-3" key={index}>
              <CardDesignThree image={ele.image} content={ele.content}/>
            </div>
          })}</div>
        </div>
      <div className="container"> 
      <h3 className="text-center title" style={{ marginTop: "100px" }}>
      Góc chia sẻ
      </h3>
        <div className="row mt-5">
          {dataShare.map((ele,index) => {
            return   <div className="col-sm-3 px-3" key={index}>
              <CardDesignSecond image={ele.image} content={ele.content} link={ele.link}/>
            </div>
          })}
        </div>
      </div>
      <Partner />
      <div className="mt-4 pt-4">
      <Footer /></div>
    </>
  );
}

export default App;
