Array.prototype.unsplit = function(a){
	var str = "";
	for(var i = 0; i<this.length; i++){
		str += arr[i];
		if(!a && a!==""){
			str += ",";
		}
		else if(a){
			str+=a;
		}
	}
	return str;
};

//Create your own join() function;