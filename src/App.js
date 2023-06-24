//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Detail from './components/Detail';

function App() {
  const Data=[
    {
      id:Math.random(),name:"Mibro Smart Watch Watch C2 White",
      pic:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/0047/1.jpg?5707",
      price: 99.00,
    },
    {
      id:Math.random(),name:"Infinix ÉCOUTEURS BLUETOOTH XE27- BLEU",
      pic:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/24/7827/1.jpg?7947",
      price: 129.00,
    },
    {
    id:Math.random(),name:"Samsung Câble USB - Type C - Original - Black",
    pic:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2931/1.jpg?3204",
    price: 45.00,
  }
    ]

  
  return (
    <div className="App">
    <Router>
    <NavBar/>
      <Routes>
      <Route path="/" element={<Home list= {Data}/>} />
      <Route path="/about" element= {<About/>} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/detail/:id" element= {<Detail list={Data} />} />
   
      </Routes>
    </Router>
    </div>
  );
}

export default App;
