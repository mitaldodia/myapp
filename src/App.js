
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Counter from './components/Counter';
import Industries from './components/Industries';
import Team from './components/Team';
import Request from './components/Request';
import Brand from './components/Brand';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About />
      <Counter/>
      <Industries/>
      <Team/>
      <Request/>
      <Brand/>
      <Footer/>
    </div>
  );
}

export default App;
