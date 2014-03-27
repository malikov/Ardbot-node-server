'use strict';

//var db = require('./db');

var robotModel = function(){};

robotModel.move = function(type){
	var type = type || 1;
	var output = "";

	switch(type){
		case 1 :
			output = "forward";
			break;

		case 2 :
			output = "backward";
			break;

		case 3 :
			output = "rotate clockwise";
			break;

		case 4 :
			output = "rotate counter clockwise";
			break;

		default :
			// move forward
			output = "forward"
			break;
	}
	return output;
}

robotModel.getDistance = function(){
	return 25;
}

robotModel.getTemperature = function(){
	return 20;
}

module.exports = robotModel;