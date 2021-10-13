import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
//import About from './components/About';
import React, {useState} from "react";
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/

function App() {
  const[mode, setmode] = useState('light');
  const[alert,setAlert] = useState('null');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert('null');
    },1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
  

    

  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled","success");
     // document.title='Textutilis-DarkMode';
      //setInterval(()=>{
       // document.title='Textutilis is Amazing Mode';
     // },2000);
      //setInterval(()=>{
       // document.title='Install Textutilis Now'
     // },1500);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
  } 

  return (
<> 
{/* <Router>*/}
  <Navbar title="Textutilis" mode={mode}  Abouttext="About" toggleMode = {toggleMode} 
  />
  
  <Alert alert={alert} />
  
  
  {/*<div className="container my-3">
  <Switch>
    <Route exact path="/about">
      <About />
      </Route>
      <Route path="/">*/}
      <TextForm title="TextArea To Write Your Comments" mode={mode} showAlert={showAlert}/> 
   { /*</Route>
  </Switch>
  </div>
   </Router>*/}
</>
);
}
export default App;
