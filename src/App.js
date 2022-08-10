import './App.css';
import About from './components/About';
import FollowUs from './components/FollowUs';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { SliderData } from './components/SliderData';
import TeamPartners from './components/TeamPartners';
import Teams from './components/Teams';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent slides={SliderData} />
      <About />
      <Teams />
      <VideoGallery />
      <TeamPartners />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
