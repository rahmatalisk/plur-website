import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Introduction from './Components/Introduction/Introduction';
import 'swiper/css';
import Slider from './Components/Slider/Slider';
import Collection from './Components/Collection/Collection';
import Purpose from './Components/Purpose/Purpose';
import Partner from './Components/Partner/Partner';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div>
      <Header></Header>
      <Introduction></Introduction>
      <Slider></Slider>
      <Collection></Collection>
      <Purpose></Purpose>
      <Partner></Partner>
      <Footer></Footer>
    </div>
  );
}

export default App;
