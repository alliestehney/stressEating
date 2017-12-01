import { Component } from 'react';
import { connect } from 'react-redux';
// import { nextTurn, newGame } from '../actions';


class WatchForScroll extends Component {

	constructor(props) {
		super(props);
		// this.handleScroll = this.handleScroll.bind(this);
	}

	render() {
		return null;
	}

	// add event listener to listen for scroll
	componentDidMount() {
		document.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll(event) {
		// take action when the page scrolls DOWN
		console.log("scroll handled.");
		console.log(event);

	}
}

export default WatchForScroll;