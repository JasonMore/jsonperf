var fs = require('fs');

var json = fs.readFileSync('../cities.json');
var times = [];

for (var i = 0; i < 20; i++){
	var ts = parseJson(json);
	times.push(ts);
}

console.log("average: " + average(times));

function parseJson(json){
	var stopWatch = process.hrtime();
	var cities = JSON.parse(json);
	console.log("Number of cities: " + cities.length);
	var ts = process.hrtime(stopWatch);
	var nanoseconds = ts[0] * 1e9 + ts[1];
	var ms = nanoseconds * 1e-6;
	console.log(ms, "RunTime")
	return ms;
}

function average(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}