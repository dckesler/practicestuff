var count = function() {
	var counter = 0;
	var notYet;
	return function(){
		if (counter % 5 === 0 && !notYet && counter!==0){
			counter += 10;
			notYet = true;
		}
		else{
			notYet = false;
			counter += 1;
		}
		return counter;
	};
};

//Make a function that counts to multiples of fives and then jumps up by ten. Use closures.