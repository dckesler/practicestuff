var shuffle = function(str1, str2, str3){
	for(var i = 0; i<str1; i++){
		if(i+1===str1.length){
			break;
		}
		else if (str3.indexOf(str1[i])>str3.indexOf(str1[i+1])){
			return false;
		}
	}
	for(i = 0; i<str2.length; i++){
		if(i+1===str2.length){
			break;
		}
		else if (str3.indexOf(str2[i])>str3.indexOf(str2[i+1])){
			return false;
		}
	}
	return true;
};

//Write a function that checks to see if a string is a mixture of two strings that retains both string's order.
//"abc" + "def" could be "abdefc" would be valid.