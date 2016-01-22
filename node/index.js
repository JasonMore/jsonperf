var fs = require('fs');

var json = fs.readFileSync('../cities.json');
var times = [];

for (var i = 0; i < 20; i++){
	var stopWatch = process.hrtime();
	var cities = JSON.parse(json);
	var duration = process.hrtime(stopWatch);

	var ms = (duration[0] * 1e9 + duration[1]) * 1e-6;

	console.log("Number of cities: " + cities.length);
	console.log(ms, "RunTime");
	times.push(ms);
}

var sum = times.reduce((sum, val) => sum + val);
console.log("average: " +  sum / times.length);