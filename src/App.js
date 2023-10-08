import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Textbox from './component/Textbox';
import About from './component/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  const [alerts,setalerts] = useState(null)
  const showalert=(message,type)=>{
    setalerts({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalerts(null);
    },1500)
  }
  // const removecolor =()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  // }
  const [mode,setmode]=useState('light')//tell us whether the dark mode is enabl or not
  const togglemode=(cls)=>{
    // removecolor();
    // document.body.classList.add('bg-'+cls)
    if (mode==='light'){
      setmode('dark')
      document.body.style.background="#151B54"
      document.body.style.color="white"
      showalert("Dark Mode is Enable","success")
      document.title="Text Formator-Dark Mode"
      // setInterval(()=>{
      //   document.title="text formator is amazing"
      // },2000)
      // setInterval(()=>{
      //   document.title="install text formator"
      // },1500)
    }
    else{
      setmode('light')
      document.body.style.background="white"
      document.body.style.color="black"
      showalert("Light Mode is Enable","success")
      document.title="Text Formator-Light Mode"

    }
  }
  return (
    <>
    <Router basename="/Formator2">
    <Navbar title="Text Formator" Abouttext="About-us" Toggleevent={togglemode} Mode={mode}/>
    <Alert alert={alerts}/>
    <div className="container my-3">
      <Switch>
        <Route exact path="/">
          <Textbox heading="Try Formator to Count Word, Count Characters and Remove extra space" showalerts={showalert} mode={mode}/>
        </Route>
        <Route exact path="/about">
          <About Mode={mode}/>
        </Route>
      </Switch>
      </div>
    </Router>
    </>
    
  );
}

export default App;
