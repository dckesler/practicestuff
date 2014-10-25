var evens = function(array){
	var obj = {};
	for(var i = 0; i<array.length; i++){
		if(obj[array[i]]){
			obj[array[i]]+=1;
		}
		else{
			obj[array[i]] = 1;
		}
	}
	for(var key in obj){
		if (obj[key] % 2 === 0){
			return key;
		}
	}
};

//Return the integer that occurs an even number of times in an array

//More complicated way

var evens = function(array){
	array.sort(function(a,b){
		if(a>b){
			return -1;
		}
		else if (b>a){
			return 1;
		}
		else{
			return 0;
		}
	});
	var current = array[0];
	var count = 0;
	for(var i = 0; i<array.length; i++){
		if(array[i]===current){
			count += 1;
		}
		else {
			if(count%2===0){
				return array[i-1];
			}
			else{
				current = array[i];
				count = 1;
			}
		}
	}
	if(count%2===0){
		return current;
	}
};