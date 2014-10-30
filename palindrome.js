var palindrome = function(string){
	var lowerString = string.toLowerCase();
	var newString = lowerString.replace(/\W/g, '');
	for(i = 0; i <= (newString.length/2); i++){
		if(newString[i]===newString[newString.length-(i+1)]) {
			continue;
		}
		else {
			return false;
		}
	}
	return true;
};


//Make a function that checks whether or not a string is a palindrome.