var fibonacci = function(length){
	var fibonacciArray = [0];
	var fibonacciNumber = 1;
	for(var i = 0; i < length; i++){
		fibonacciArray.push(fibonacciNumber);
		fibonacciNumber+=(fibonacciArray[fibonacciArray.length-2]);
	}
	console.log(fibonacciArray);
	return fibonacciArray;
};

var fibCheck = function(num, length){
	var checkArray = fibonacci(length);
	return checkArray.indexOf(num)!==-1;
};

 //Design a function that generates the first 100 numbers in the fibonacci sequence and then another function that
 //checks to see if a number is in that sequence.

 fibCheck(/*Some Number*/, /*Some Length*/);

 var fibonacciNumb = function(returnNum){
	var fibonacciArray = [0];
	var fibonacciNumber = 1;
	for(var i = 0; i < returnNum-1; i++){
		fibonacciArray.push(fibonacciNumber);
		fibonacciNumber+=(fibonacciArray[fibonacciArray.length-2]);
	}
	return fibonacciArray[fibonacciArray.length-1];
};

//Design a function that retuns the nth number in a fibonacci sequence.