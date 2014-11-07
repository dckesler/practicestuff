var add = function(x, y){
	if(!y){
		return function(y){
			return x + y;
		};
	}
	else {
		return x+y;
	}
	
};

//Make a function that can sum two numbers written both as add(5, 6) or add(5)(6)