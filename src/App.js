
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Counter from './components/Counter';
import Industries from './components/Industries';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About />
      <Counter/>
      <Industries/>
    </div>
  );
}

export default App;
