var bracket = function (str){
	var obj = {
		paren: 0,
		brack: 0,
		square: 0,
		alli: 0
	};
	for(var i = 0; i<str.length; i++){
		switch (str[i]){
		case "(":
			obj.paren += 1;
			break;
		case ")":
			obj.paren -= 1;
			break;
		case "{":
			obj.brack += 1
			break;
		case "}":
			obj.brack -= 1;
			break;
		case "[":
			obj.square += 1;
			break;
		case "]":
			obj.square -= 1;
			break;
		case "<":
			obj.alli += 1;
			break;
		case ">":
			obj.alli -= 1;
		}
	}
	for(var key in obj){
		if (obj[key] !== 0){
			return false;
		}
	}
	return true;
}

//Make a function that checks to see if in a string all of the opening parentheses/brackets/etc.. have their matching
//closing pair

