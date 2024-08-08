// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    
<Navbar title="Textutils" About="About Us" />
<div className="container my-3">
<TextForm heading = "ENTER THE TEXT"/>
</div>
    </>
    
  );
}

export default App;


