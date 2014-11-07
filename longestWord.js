var longest = function(str){
	var newArr = str.split(' ');
	var longWord = [];
	for(var i =0; i<newArr.length; i++){
		if(longWord.length === 0){
			longWord.push(newArr[i]);
		}
		else if (newArr[i].length > longWord[0].length){
			longWord = [newArr[i]];
		}
		else if (newArr[i].toLowerCase()===longWord[0].toLowerCase()){
			continue;
		}
		else if (newArr[i].length === longWord[0].length){
			longWord.push(newArr[i]);
		}
	}
	return longWord;
};