var converter = function(arr, string){
	var obj = {};
	for(var i = 0; i<arr.length; i++){
		if(!obj[arr[i][string]]){
			obj[arr[i][string]] = [];
		}
	}
	for(var key in obj){
		for(i = 0; i<arr.length; i++){
			if(arr[i][string]===key){
				obj[key].push(arr[i]);
			}
		}
	}
	return obj;
};

//This does what it's supposed to do, but it's hard to give a general description.
//If it works arr becomes obj.

var arr = [
    {name: 'Joe Montana', team: '49ers'},
    {name: 'Jerry Rice', team: '49ers'},
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];

obj = {
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
};