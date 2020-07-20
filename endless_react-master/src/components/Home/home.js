import React, { Component } from 'react';
import { Environment } from './../environment';
import Banner from '../Banner/banner';
import HowWork from '../HowWork/howWork';

class Home extends Component {
constructor(props) {
    super(props);
    this.state = {
      data: "",
     
    }


  }


  

  render() {
	  
    return (
      <div>
       <Banner />
       <HowWork />

      
      </div>
    );
  }
 
}

export default Home;

