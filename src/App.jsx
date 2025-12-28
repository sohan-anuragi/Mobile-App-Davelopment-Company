import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header-components/header'
import ImageSlider from './components/carousel-component/image-slider'
import Footer from './components/footer-component/footer'
import Main2 from './components/main-component/main2'

function App() {
  return (
    <>
      <Header />
      <ImageSlider></ImageSlider>
      <Main2></Main2>
      <Footer></Footer>
    </>
  )
}
export default App
