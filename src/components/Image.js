import React, {Component} from 'react';
import './Image.css';

class Image extends Component{
  render(){
    return(
        <div className = "hedd">
            <img className='logo-image' 
            alt='logo' 
            src={require('../images/logo.png')} />
            <h2>Contact</h2>
        </div>
   );
  }
}

export default Image;