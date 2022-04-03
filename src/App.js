import react, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './component/sidebar/Sidebar';
import Landing from './component/landing/Landing';


function App() {
  const [trys, setTrys] = useState(true)

  const news = () => {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedValue)
    if(selectedValue == 'eng'){
      setTrys(true)
    }

    else{
      setTrys(false)

    }
  }
  return (
    <>
    <Router>
    <select id="selectBox" onChange={news}>
                  <option className='select_english' value='eng'>English</option>
                  <option className='select_chinese' value='chi'>Chinese</option>
          </select>
      <Sidebar data={trys}/>
      <Routes>
        <Route  path='/'  exact element={<Landing data={trys}/>}/>
      
      </Routes>
    </Router>

    </>
  );
}

export default App;
