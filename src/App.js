import "./App.css";
import Header from "./Components/Header/Header";
import BannerNoAction from "./Components/Banner/BannerNoAction";
import bannerimage from "./assets/image/banner-04.jpg"
import Footer from "./Components/Footer/Footer";
import CardDesignSecond from "./Components/Card/CardDesignSecond/CardDesignSecond";
import CardDesignThree from "./Components/Card/CardDesignThree/CardDesignThree";
import CardDesignFour from "./Components/Card/CardDesignFour/CardDesignFour";
import a1 from './assets/image/a1.png'
import a2 from './assets/image/a2.png'
import a3 from './assets/image/a3.png'
import c1 from './assets/image/c1.jpg'
import c2 from './assets/image/c2.jpg'
import c3 from './assets/image/c3.jpg'
import c4 from './assets/image/c4.jpg'
import f1 from './assets/image/f1.jpg'
import f2 from './assets/image/f2.jpg'
import f3 from './assets/image/f3.jpg'
import j1 from './assets/image/j1.jpg'
import j2 from './assets/image/j2.png'
import j3 from './assets/image/j3.jpg'
import j4 from './assets/image/j4.jpg'
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
  const listJob = [ 
    {
      title:"Việc làm khối văn phòng",
      image:j1,
      dataJob: ["Chuyên viên tuyển dụng [HOT]","Chuyên viên thiết kế","Trưởng nhãn Niva","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video"]
    },
    
    {
      title:"Việc làm khối văn phòng",
      image:j2,
      dataJob: ["Chuyên viên tuyển dụng [HOT]","Chuyên viên thiết kế","Trưởng nhãn Niva","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video"]
    },
    
    {
      title:"Việc làm khối văn phòng",
      image:j3,
      dataJob: ["Chuyên viên tuyển dụng [HOT]","Chuyên viên thiết kế","Trưởng nhãn Niva","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video"]
    },
    
    {
      title:"Việc làm khối văn phòng",
      image:j4,
      dataJob: ["Chuyên viên tuyển dụng [HOT]","Chuyên viên thiết kế","Trưởng nhãn Niva","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video","Biên kịch video"]
    }
  ]
  return (
    <>
      <Header />
      <BannerNoAction image={bannerimage} />
      <div className="container mb-5" style={{marginTop: "-100px" }}>
        
      <div className='row px-4 py-5' style={{backgroundColor:"#fff",boxShadow: 'rgb(0 0 0 / 8%) 8px 7px 7px'}}>
          {listJob.map((ele,index)=>{
            return <div className='col-sm-3'  key={index}>
              <CardDesignFour title={ele.title} image={ele.image} dataJob={ele.dataJob}/>
            </div>
          })}
        </div>
      </div>
      <div className='container' style={{marginTop:'100px'}}>
        <div className='row' style={{minHeight: '350px'}}>
          <div className='col-sm-6 p-3'>
            <div className=''  style={{backgroundColor:"#ebeff0"}}>
            <h6 className='text-center p-3 text-uppercase'>Thông điệp chào mừng ban lãnh đạo</h6>
            <div className='boxFeature'>
              <div className='thumnailBox' style={{ backgroundImage: "url(" + a3 + ")", backgroundSize:"cover" }}> 
              </div>
            </div></div>
          </div>
          <div className='col-sm-6 p-3' >
            <div className=''  style={{backgroundColor:"#ebeff0"}}>
            <h6 className='text-center p-3 text-uppercase'>Vinh danh nhân sự tiêu biểu</h6>
            <div className='boxFeature row m-0' style={{ 
background:' linear-gradient(90deg, rgba(186,218,233,1) 0%, rgba(255,255,255,1) 59%, rgba(186,218,233,1) 100%)'}}>
              <div className='col-6 p-0 position-relative thumnailBox' style={{ backgroundImage: "url(" + a1 + ")" ,backgroundPosition:"right"}}>
                <div className='position-absolute d-flex justify-content-center align-items-center w-100 bg-white opacity-75' style={{ height: '40px',bottom:"0"}}>
                  <div className='me-2' style={{ fontSize:'10px'}}>Hồ Chí Minh(15)</div>
                  <div style={{ fontSize:'15px',fontWeight:'700'}}>Nguyễn Thị Thơm</div>
                </div>
              </div>
              <div className='col-6  p-0  position-relative thumnailBox' style={{ backgroundImage: "url(" + a2 + ")"  ,backgroundPosition:"left"}}>
              <div className='position-absolute d-flex justify-content-center align-items-center w-100 bg-white opacity-75' style={{ height: '40px',bottom:"0"}}>
                 
              <div style={{ fontSize:'15px',fontWeight:'700'}}>Nguyễn Thị Thơm</div>
               <div className='ms-2' style={{ fontSize:'10px'}}>Hồ Chí Minh(15)</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      <h3 className="text-center title" style={{ marginTop: "100px",marginBottom: '100px' }}>
       Điều gì hấp dẫn ở Diligo Holdings đang chờ đón bạn
      </h3>
      <div className='row' >
      {dataCard.map((ele,index) => {
            return   <div className="col-sm-4 px-3" key={index}>
              <CardDesignThree image={ele.image} content={ele.content}/>
            </div>
          })}</div>
        </div>
      <div className="container"> 
      <h3 className="text-center title" style={{ margin: "100px 0" }}>
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
      <div className="" style={{marginTop:'100px'}}>
      <Footer /></div>
    </>
  );
}

export default App;
