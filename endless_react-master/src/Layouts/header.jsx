import React, { Component } from 'react';
import { Environment } from '../../src/components/environment'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      


    }
    

  }

  render() {

    return (
      <div>
       <header class="header">
		<div class="wrapper">
			<div class="logo">
				<a href="/"><img src="assets/img/logo-endless.svg" alt="Official Logo"/></a>
			</div>
		</div>
	</header>
      </div>
    );
  }
}
export default Header;
