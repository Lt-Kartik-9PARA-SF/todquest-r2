//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Navbar from './components/Navbar';

import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{height:'400px', display:'flex',justifyContent:'center',alignItems:'center'}} > 
      <h1>main section </h1>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
