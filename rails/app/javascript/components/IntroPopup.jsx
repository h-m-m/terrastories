import React, { PureComponent } from "react";

class IntroPopup extends PureComponent {

  constructor(props){
    super(props);
    this.state = { isPopped: true }
  }

  handleIntroPopup = () => {
    this.setState(prevState =>({
      isPopped: !prevState.isPopped
    }));
  }

  render(){
    return(
      <div className={this.state.isPopped ? 'intro-card isShown' : 'intro-card isHidden'}>
        <h2>Buta a kama</h2>
        <h3>Andi na wan terrastory?</h3>
        <p>Terrastories sa de wan fillong naso wan audio dus soso jee i ta jee an de sembe ta konda aba wan soni di pasa a wan kamia. Di 'applicatie' aki so bakaa kai eng de tak hii de gemeenschap o mang fu konda de egi histori over de belangrijk kamia fu a sa kon a di kaita.</p>

        <div className="intro-card--actions">
          <span className="count" onClick={this.handleIntroPopup}>Tapa</span>
        </div>
      </div>
    );
  }

}

export default IntroPopup;