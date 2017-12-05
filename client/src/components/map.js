import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import { connect } from 'react-redux';
import RestaurantsRequest from './restaurantsRequest.js';

class MapComponent extends React.Component {

	render() {
	    return !this.props.isGeolocationAvailable
	      ? <div>Your browser does not support Geolocation</div>
	      : !this.props.isGeolocationEnabled
	        ? <div>Geolocation is not enabled</div>
	        : this.props.coords
	          ?
	          <RestaurantsRequest lat={this.props.coords.latitude} long={this.props.coords.longitude} />

	          : <div className="GettingData">
							<div className = "LoadingSquare">
							 <div className="sk-folding-cube">
               <div className="sk-cube1 sk-cube"></div>
							  <div className="sk-cube2 sk-cube"></div>
							  <div className="sk-cube4 sk-cube"></div>
							  <div className="sk-cube3 sk-cube"></div>
								</div>
       				</div>
			 			&hellip;</div>;

  	}

}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MapComponent);
