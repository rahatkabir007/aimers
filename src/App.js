import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HomeAbout from './components/home-about/HomeAbout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomeAbout></HomeAbout>
      <Footer></Footer>
    </div>
  );
}

export default App;
