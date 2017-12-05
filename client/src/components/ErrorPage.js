import React, { Component } from 'react';
import { connect } from 'react-redux';

class ErrorPage extends Component {

    render() {



        return (
        	<div>
                <div className="ErrorPage">
                  <h2 className="TITLE">NO RESULTS</h2>
                </div>
			  </div>
          );
    }

}

// function mapStateToProps(state) {
// 	return {
// 		restaurants: state.restaurants
// 	}
// }

// export default connect(mapStateToProps)(Restaurant);
export default ErrorPage ;
