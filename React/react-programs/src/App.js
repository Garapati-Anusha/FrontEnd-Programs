import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Lists from './components/Lists';

function App() {
  return (
    <div className="App">
      <Header/>
      <Lists/>
      {/* <Content/>
      <Footer/> */}
    </div>
  );
}

export default App;
