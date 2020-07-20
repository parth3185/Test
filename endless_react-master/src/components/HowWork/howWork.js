import React, { Component } from 'react';
import axios from 'axios';
import { Environment } from './../environment';
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}
class HowWork extends Component {
constructor(props) {
    super(props);

   this.state = {
            getPageContent: [],
        }
        
       


  }
  componentDidMount() {
     axios.get(Environment.apiurl)
        .then(result => {
            if(result.status==200){
                var objs = result.data
                this.setState({getPageContent: objs.sort(compareValues('stepNumber'))});
            }
        });
  }

  

  render() {
	  
    return (
        <main>
		    <section class="servicesWrap">
				<div class="wrapper">
					<h2 class="title wow animate__fadeInDown" data-wow-duration="0.2s" >How It Works</h2>
					<div class="boxWrap">
					    {this.state.getPageContent.map((item, index) =>
                            <div class={index===0?"itemBox wow animate__slideInLeft":(index===3?"itemBox wow animate__slideInRight":"itemBox wow animate__fadeInUp")} data-wow-duration="1s">
							<div class="servicesText">
								<span class="num">0{item.stepNumber}</span>
								<h3>{item.versionContent[0].title}</h3>
								<p>{item.versionContent[0].body}</p>
							</div>
						</div>
            )}
						
					</div>
				</div>
			</section>

       </main>
      
    );
  }
 
}

export default HowWork;

