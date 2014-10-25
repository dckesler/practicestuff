var paren = function(string){
	var array = [];
	for(var i = 0; i<string.length; i++){
		if(string[i]==="("){
			for(var j = i; j<string.length; j++){
				if(string[j]===")"){
					array.push(string[j]);
					return stringify(array);
				}
				else{
					array.push(string[j]);
				}
			}
		}
	}
};

var stringify = function(array){
	var string = array.join("");
	return string;
};

var parenTwo = function(string){
	var array = [];
	var check = false;
	for(var i = 0; i<string.length; i++){
		if(string[i]==="("){
			check = true;
			array.push(string[i]);
		}
		else if(check && string[i]===")"){
			array.push(string[i]);
			return stringify(array);
		}
		else if(check){
			array.push(string[i]);
		}
	}
};


//Given a string that contains a single pair of parenthesis, compute a new string made of only the parenthesis and
//their contents, so "xyz(abc)123" yields "(abc)"