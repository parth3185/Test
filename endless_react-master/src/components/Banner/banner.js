import React, { Component } from 'react';
import { Environment } from './../environment';

class Banner extends Component {
constructor(props) {
    super(props);

    this.state = {
      data: "",
     
    }


  }

render() {
	  
    return (
       
			<section class="slider">
				<div class="homeBanner">
					<div class="bannerImg">
							<img src="assets/img/slide01.jpg" alt="Banner Image" />
						</div>
						<div class="bannerContent">
							<div class="wrapper">
								<div class="bannerText" >
									<h3 class="wow animate__fadeInUp" data-wow-duration="1.5s">New Games & Accessories</h3>
									<h1 class="wow animate__fadeInUp" data-wow-duration="1.5s">Monthly packages. Excitement delivered daily.</h1>
									<p class="wow animate__fadeInUp" data-wow-duration="1.5s">What’s the best way to shop for the latest video games  and peripherals? How about never shopping at all? <span>You’ll get new stuff on your doorstep — every month.</span></p>
									<a herf="" class="btn up-case">Get started</a>
								</div>
							</div>
						</div>
					</div>
			</section>
        
    );
  }
 
}

export default Banner;

