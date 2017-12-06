import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import RestaurantsRequest from './restaurantsRequest.js';

class MapComponent extends Component {

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
								<p className = "Location">Getting your location</p>
       				</div>
			 			</div>;

  	}

}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MapComponent);
