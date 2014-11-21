function bucket2(num) {
    var MAX = 1000;
    var counts = [];
    var randomList = [];
    for(var i = 0; i<num; i++){
		randomList.push(Math.floor(Math.random()*1000));
	}
	//Time Start
    var start = window.performance.now()
    for (var i=0; i<=MAX; i++) {
        counts.push(0);
    }

    for (var i=0; i<randomList.length; i++) {
        var number = randomList[i];
        counts[number]++;
    }

    var output = [];
    for (var i=0; i<=MAX; i++) {
        var count = counts[i];
        for (var j=0; j<count; j++) {
            output.push(i);
        }
    }
    var end = window.performance.now();
    return end - start;
}

function bucket3(num) {
    var MAX = 1000;
    var counts = [];
    var randomList = [];
    for(var i = 0; i<num; i++){
		randomList.push(Math.floor(Math.random()*1000));
	}
	//Time Start
    var start = window.performance.now()
    for (var i=0; i<=MAX; i++) {
        counts.push(0);
    }

    for (var i=0; i<randomList.length; i++) {
        var number = randomList[i];
        counts[number]++;
    }

    var output = [];
    for (var i=0; i<=MAX; i++) {
        var count = counts[i];
        for (var j=0; j<count; j++) {
            output.push(i);
        }
    }
    var end = window.performance.now();
    return end - start;
}

var bucket = function(num){
	var MAX = 1000;
    var counts = [];
    var randomList = [];
    for(var i = 0; i<num; i++){
		randomList.push(Math.floor(Math.random()*1000));
	}
	//Time Start
    var start = window.performance.now()
    for (var i=0; i<=MAX; i++) {
        counts.push(0);
    }

    for (var i=0; i<randomList.length; i++) {
        var number = randomList[i];
        counts[number]++;
    }

    var output = [];
    for (var i=0; i<=MAX; i++) {
        var count = counts[i];
        for (var j=0; j<count; j++) {
            output.push(i);
        }
    }
    var end = window.performance.now();
    return end - start;
}

var runner = function(run, ran, func){
	var averaging = 0;
	for (var i = 0; i<run; i++){
		averaging += func(ran);
	}
	return averaging / run;
}

//Timer for bucket sort. And other sort functions as well...