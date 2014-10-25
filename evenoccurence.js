var evenOccurence = function(array){
	for( var i = 0; i < array.length ; i++){
		var counter = 0;
		for( var j = i; j < array.length; j++){
			if(array[j]===array[i]){
				counter+=1;
			}
			else if(j===array.length-1 && counter%2===0){
				return array[i];
			}
		}
	}
	return evenNumbers;
};

//Write a function that takes an array and return the first one that is even.