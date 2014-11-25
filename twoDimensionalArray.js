/* defining my function */

function findPath(z){
	var sequence = z;
	var lengthCheck = [];
	var bestLength = [];
	function stopChain(a,b){
		lengthCheck.push(sequence[a][b]);
			if(lengthCheck.length>bestLength.length){
				bestLength = lengthCheck.slice(0);
				lengthCheck.pop();
			}
			else {
				lengthCheck.pop();
			}
	}


	function lookAround(a,b,c,d,h){
		for (var ishift = -1; ishift < 2; ishift++){
			var ib = ishift + a;
			if (ib < 0){
				continue;
			}
			else{
				for (var eshift = -1; eshift < 2; eshift++){
					var eb = eshift + b;
					if (eb < 0 ){
						continue;
					}
					else if (a == ib && b == eb){
						continue;
					}
					else if(ib >= sequence.length){
							stopChain(a,b);
							eshift = 1;
						}
					else if (eb >= sequence[ib].length && ishift != 1){
						continue;
					}
					else if (ishift == 1 && eb>=sequence[ib].length){
						stopChain(a,b);
					}
					else if (sequence[ib][eb] == "*"){
						continue;
					}
					else if (ishift+eshift==2 && sequence[a][b]>sequence[ib][eb]){
						stopChain(a,b);
					}
					else if (sequence[ib][eb] >= sequence[a][b]){
						lengthCheck.push(sequence[a][b]);
						var x = sequence[a][b];
						sequence[a][b] = "*";
						lookAround(ib,eb,a,b,x);
					}
					else {
						continue;
					}
				}
			}
		}
		lengthCheck.pop();
		if (a == c && b == d){
		}
		else {
			sequence[c][d] = h;
		}
	}

	for (var i = 0; i<sequence.length; i++){
		for (var e = 0; e<sequence[i].length; e++){
			lookAround(i,e,i,e);
		}
	}
	console.log(bestLength);
	console.log(bestLength.length);
	return bestLength.length;
}

/* Put array in here */

findPath([[1,2,3],[7,6,5,4],[8,9,10]]);

//Find the longest chain of increasing or equal values in a two dimensional array.


