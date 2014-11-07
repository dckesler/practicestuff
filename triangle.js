var triangle = function(num){
	var total = 0;
	for(var i = 1; i<=num; i++){
		total += i;
	}
	return total;
};

//Give the number of blocks in a triangle given the number of rows. The triangle grows by one for each row.

var blocks = function(num){
	var left = num;
	var rows = 0;
	for(var i = 1; num >= 0; i++){
		if ( left >= i){
			left -= i;
			rows += 1;
		}
		else {
			return rows+" "+left;
		}
	}
};