var numbers = [6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 6, -2, 5, 3, 9, -5, -1, 0, -4, 4, 5];

var sumZero = function(array){
	var answers = [];
	for(var i = 0; i<array.length; i++){
		for(var j = i+1; j<array.length; j++){
			for(var k = j+1; k<array.length; k++){
				if(array[i]+array[j]+array[k]===0){
					var combo = array[i]+ ", "+array[j]+", "+array[k];
					answers.push(combo);
				}
			}
		}
	}
	return answers;
};

//Make a function that takes an array and checks to see if the sum any different three of it's numbers is equal to zero.