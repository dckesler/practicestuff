var flatten = function(array, flattenedArray){
	if(!flattenedArray){
		flattenedArray = [];
	}
	var flattened = flattenedArray;
	for(var i = 0; i<array.length; i++){
		if(Array.isArray(array[i])){
			flatten(array[i], flattened);
		}
		else {
			flattened.push(array[i]);
		}
	}
	return flattened;
};

//Create a function that takes an array and flattens it