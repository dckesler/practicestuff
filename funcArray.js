var funcArray = [];
var funcCreate = function(num){
	var thing = function(){
		return num;
	}
	funcArray.push(thing);
}
for(var i = 0; i < 5; i++){
	funcCreate(i);
}

//funcArray[0] === 0
//funcArray[1] === 1 and so on