import React from 'react';
import Cards from './cards';
import './Welcome.css';

const Welcome = () => {

    const signout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    const mob= window.matchMedia("(max-width: 1010px)");
    const tab= window.matchMedia("(max-width: 760px)");
    
    const openSideBar = () => {
        if(mob.matches){
        document.getElementById('sideBar').style.width='30%';
        document.getElementById('bar').style.display='none';
        document.getElementById('cross').style.display='inline-block';
        }
        else if(tab.matches){
        document.getElementById('sideBar').style.width='20%';
        document.getElementById('bar').style.display='none';
        document.getElementById('cross').style.display='inline-block';
        }
        else{
        document.getElementById('sideBar').style.width='20%';
        document.getElementById('bar').style.display='inline-block';
        document.getElementById('cross').style.display='none';
        }
    }

    const closeSideBar = () => {
        if(mob.matches){
        document.getElementById('sideBar').style.width='0%';
        document.getElementById('bar').style.display='inline-block';
        document.getElementById('cross').style.display='none';
        }
        else if(tab.matches){
            document.getElementById('sideBar').style.width='0%';
        document.getElementById('bar').style.display='inline-block';
        document.getElementById('cross').style.display='none';
        }
        else{
        document.getElementById('sideBar').style.width='20%';
        document.getElementById('bar').style.display='inline-block';
        document.getElementById('cross').style.display='none';
        }
    }

    return (
        <div className='fullPage'>
            <div className='header'>
                <div id='logo' style={{width:'10%', float:'left'}}><img src='#' alt='logo'></img></div>
                <h2 style={{fontFamily:'inherit'}}>Page Heading</h2>
            </div>

        <div className='nav'>
            <span id='bar' className='bar' style={{fontSize:'30px'}}><a href="#" onClick={openSideBar}><i className="fa fa-bars" aria-hidden="true"></i></a></span>
            <span id='cross' className='cross' style={{fontSize:'25px'}}><a href="#" onClick={closeSideBar}><i className="fa fa-times" aria-hidden="true"></i></a></span>
            <button className='signout' style={{float:'right', height:'30px'}} onClick={signout} >Signout</button>            
        </div>
        <div className='main'>
            <div className='sidebar' id='sideBar'>
            
            
                <a href='#'>Heading</a>
                <a href='#'>Heading</a>
                <a href='#'>Heading</a>
                
            </div>
            <div className='content'>
                <h3 style={{borderBottom:'1px solid rgba(255, 255, 255, 0.3)', paddingBottom:'15px'}}>Welcome</h3>
               
                < Cards />< Cards />
                < Cards />< Cards />
            </div>
            </div>

        </div>
    );
}

export default Welcome;
