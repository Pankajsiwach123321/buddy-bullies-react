import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Buddynav from './components/Buddynav';
import Hedaer from './components/Hedaer';
import Mintbat from './components/Mintbat';
import Infoabout from './components/Infoabout';
import Roadmap from './components/Roadmap';
import MYaccordion from './components/MYaccordion';
import Ourteam from './components/Ourteam';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App  ">
      <div className='bg-header min-vh-100 d-flex flex-column position-relative  '>
        <Buddynav />
        <Hedaer />
      </div>
      <Mintbat />
      <Infoabout />
      <Roadmap />
      <MYaccordion />
      <Ourteam />
      <Footer />
    </div>
  );
}

export default App;
