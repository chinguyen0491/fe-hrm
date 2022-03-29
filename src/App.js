import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import bannerimage from "./assets/image/banner-04.jpg"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner image={bannerimage} />
      <Footer />
    </>
  );
}

export default App;
