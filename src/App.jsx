import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header-components/header.jsx";
import ImageSlider from "./components/carousel-component/image-slider.jsx";
import Footer from "./components/footer-component/footer.jsx";
import Main2 from "./components/main-component/main2.jsx";

function App() {
  return (
    <>
      <Header />
      <ImageSlider></ImageSlider>
      <Main2></Main2>
      <Footer></Footer>
    </>
  );
}
export default App;
