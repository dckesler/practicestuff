

var reversed = function(string) {
	var reversedString = [];
	for (var i = string.length-1; i >= 0; i--){
		reversedString.push(string[i]);
	}
	var done = reversedString.join("");
	return done;
};

/*This method was for fun and doesn't work

var reversed2 = function(string, j){
	var reversee;
	if(!j){
		j = 0;
	}
	for (var i = j; i<string.length; i++){
		var end = string.length-(1+i);
		if (i === string.length-1){
			reversee = string;
		}
		var first = string.charAt(i);
		var last = string.charAt(end);
		var progress = string.replace(first, last);
		var progesser = progress.replace(last, first);
		debugger;
		reversed2(progresser, i+1);

	}
	return reversee;
};
*/