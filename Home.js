import React, { Component } from 'react';
import Nav from './Nav'
import Nav2 from './Nav2';
import '../Home.css'
class HomePage extends Component {
    render() {
      return (
    <div className='All'>
    <div className='Navv'><Nav/></div>  
        
    <div className='Menu'><Nav2/></div>  
    
    </div>  
      );
    }
  }
export default HomePage;
  