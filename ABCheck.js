var ABCheck = function(string){
	var check = false;
	var newString = string.toLowerCase();
	for(var i = 0; i < newString.length; i++){
		if(newString[i]==="a"||newString[i]==="b"){
			for(var j = i+1; j<=i+4; j++){
				if(newString[j]==="a"||newString[j]==="b"){
					if(j===i+4){
						check = true;
						return check;
					}
				}
			}
		}
	}
	return check;
};

/* Make a function that takes a string and returns true if anywhere in the string the letters a and b are seperated
by exactly three characters*/