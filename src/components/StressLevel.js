import React, { Component } from 'react';

class StressLevel extends Component {

  constructor(props) {
      super(props);
      this.state = {
        stressLevel:"",
        currentComponent:""
      };
  }

  render() {
        return (
          <div className="StressForm">
            <h1 className="Welcome">Welcome, how do you feel?</h1>
            <ul className="StressIcon" >
              <li><button className="StressLevelIcon" type="button" value="low" onClick={this.handleClick.bind(this)}><img className="Cool" src="cool.png" alt="not stressed" /></button> </li>
              <li><button className="StressLevelIcon" type="button" value="medium" onClick={this.handleClick.bind(this)}><img className="Cool" src="confused.png" alt="not stressed" /></button></li>
              <li><button className="StressLevelIcon" type="button" value="high" onClick={this.handleClick.bind(this)}><img className="Cool" src="nervous.png" alt="not stressed" /></button> </li>
            </ul>
          </div>

        );
      }

      handleClick(event) {
        event.preventDefault();
        this.props.onClick(event.currentTarget.value);

      }

}


export default StressLevel;
