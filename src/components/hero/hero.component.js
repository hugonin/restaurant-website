import React from "react";
import Navbar from "../navbar/navbar.component";
import Sidebar from "../sidebar/sidebar.component";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./hero.styles";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <HeroContainer>
        <Navbar toggle={this.toggle} />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    );
  }
}

export default Hero;
