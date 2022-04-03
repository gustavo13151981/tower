import React, {useEffect, useState} from 'react';
import * as Falcons from 'react-icons/fa';
import * as Aicons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SliderData, SliderData_chinese } from './SidebarData';
import './sidebar.scss';
import * as Faicons from 'react-icons/fa'
import * as Ai from 'react-icons/ai'
import logo from '../../images/logo.png'
import '../landing/landing.scss';

const Sidebar = (props) => {



    useEffect(()=>{
        if(window.innerWidth >= 1024){
            setSidebar(true)    

           
        }
    }, [])

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
  return (
      <>
      <div className='navbar_fixed'>
    <div className='navbar'>
        <div to="" className='menu-bars'>
          <div className='logo_Container'>
        <Falcons.FaBars onClick={showSidebar} color="#fff" className='bars'/>
        <img src={logo} alt='logo' className='logo'/>
        </div>
        </div>

        <div>
        <div className='socials_select_nav'>
        <a href="https://t.me/TowerofGodbsc"><Faicons.FaTelegram className="social_icon"/></a>
        <a href="https://twitter.com/TowerofGodbsc"> <Faicons.FaTwitter className="social_icon"/> </a>
            <a href="https://towerofgod.herokuapp.com/" className='english_text'><button className='dapp' style={{display: props.data ? 'block' : 'none' }}>DAPP</button></a>
            <a href="https://towerofgod.herokuapp.com/" className='chinese_text'><button className='dapp' style={{display: props.data ? 'none' : 'block' }} >去中心化APP</button></a>
                    
            </div>


        </div>  
    </div>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                </Link>
            </li>



            {/* <h2 className='sidebar_title'>LINKS</h2> */}

        {   
                 props.data ?      <div className='section1_sidebar'>
                 {SliderData.map((items, index)=>{
                     return(
                         <li key={index} className="nav-text"><a href={items.link}>
                         {items.icon}
                         <span className='nav_text_name'>{items.title}</span>
                         </a></li>
                     )
                 })}
                 </div>
       :       <div className='section1_sidebar'>
       {SliderData_chinese.map((items, index)=>{
           return(
               <li key={index} className="nav-text"><a href={items.link}>
               {items.icon}
               <span className='nav_text_name'>{items.title}</span>
               </a></li>
           )
       })}
       </div>

        }                   
      



            <div className='socials_select'>
           <a href="https://t.me/TowerofGodbsc"> <Faicons.FaTelegram className="social_icons"/></a>
           <a href="https://twitter.com/TowerofGodbsc"><Faicons.FaTwitter className="social_icons"/></a> 
            </div>

        </ul>
    </nav>


    </>

  )
}

export default Sidebar