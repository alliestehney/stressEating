import React, { Component } from 'react';

class StressLevel extends Component {

  constructor(props) {
      super(props);
      this.state = {
          lowStress: " ",
          medStress: " ",
          highStress: " ",
      };
  }

  render() {
        return (
          <div className="StressForm">
            <h1>Welcome, how do you feel?</h1>
            <form >
              <button type="submitlow" value="Low">😎</button>
              <button type="submitmed" value="Medium">😨</button>
              <button type="submithigh" value="High">😫</button>
            </form>
          </div>
        );
      }

          lowStress(event) {
              this.setState({
                  lowStress: event.target.value
              });
          }

          medStress(event) {
              this.setState({
                  medStress: event.target.value
              });
          }

          highStress(event) {
              this.setState({
                  highStress: event.target.value
              });
          

// //
//     onSubmit(event) {
//         // by default a form submission will refresh the page. preventDefault stops that from happening.
//         event.preventDefault();
//         // Call the function that App.js passes into the onSubmit attribute.
//         // Pass it a new contact object.
//         this.props.onSubmit({
//             email: this.state.email,
//             password: this.state.password
//         })
        // Clear the form by simply updating the state with empty form values.

    }
}
export default StressLevel;
