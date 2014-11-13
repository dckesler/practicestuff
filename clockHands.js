var angle = function(time){
	var two = time.split(":");
	var hours = (parseInt(two[0])*30) + 30/(60/(parseInt(two[1])));
	if (hours>360){
		hours -= 360;
	}
	var minutes = 360/(60/parseInt(two[1]));
	if((hours-minutes)>=360){
		return hours-minutes-360;
	}
	else {
		return Math.abs(hours - minutes);
	}
};

//Return the angle of the two hands of a clock given the time