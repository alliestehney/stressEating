import { Component } from 'react';
import { connect } from 'react-redux';
import { createLoadingList } from '../actions';


class WatchForScroll extends Component {

	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}

	render() {
		return null;
	}

	// add event listener to listen for scroll
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll(event) {
		// take action when the page scrolls DOWN
		console.log("scroll handled.");
		console.log(event);

		console.log("DOCUMENT HEIGHT: " + document.body.clientHeight); // document height
		console.log("BROWSER HEIGHT: " + window.innerHeight); // browser height

		console.log("PIXELS FROM TOP: " + window.pageYOffset);
		console.log("TOTAL PIXELS FROM TOP RELATIVE TO BOTTOM: ", window.pageYOffset + window.innerHeight);
		console.log("PIXELS FROM BOTTOM: ", document.body.clientHeight - (window.pageYOffset + window.innerHeight) );
		var pixelsFromBottom = document.body.clientHeight - (window.pageYOffset + window.innerHeight);
		// if 200px from bottom, add more content
		// if (pixelsFromBottom <= 300) {
			// call loading action
			this.props.createLoadingList();

		// }

	}

	// include logic to handle the scroll ... ?
}

const mapActionsToProps = {
	createLoadingList
}

export default connect(null, mapActionsToProps)(WatchForScroll);
