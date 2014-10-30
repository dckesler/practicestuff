var longest = function(str){
	var newArr = str.split(' ');
	var longest = [];
	for(var i =0; i<newArr.length; i++){
		debugger;
		if(!longest){
			longest.push(newArr[i]);
		}
		else if (newArr[i].length > longest[0].length){
			longest = [newArr[i]];
		}
		else if (newArr[i].toLowerCase()===longest[0].toLowerCase()){
			continue;
		}
		else if (newArr[i] === longest[0].length){
			longest.push(newArr[i]);
		}
	}
	return longest;
};