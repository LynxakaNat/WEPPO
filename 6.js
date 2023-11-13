var fs = require('fs'),
readline = require('readline'),
stream = require('stream');

var instream = fs.createReadStream('./logs.txt');
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});
// Dictionary to store IP addresses and their request counts
var ipCounts = {};

rl.on('line', function(line) {
    let lin_sp = line.split(" ");
    let ip = lin_sp[1]
    //console.log(log)
    ipCounts[ip] = (ipCounts[ip] || 0) + 1;
});
rl.on('close', function() {
    // Create an array of objects containing IP and request count
    var ipArray = [];
    for (let ip in ipCounts) {
        ipArray.push({ ip: ip, count: ipCounts[ip] });
    }

    // Sort the array based on request count in descending order
    ipArray.sort((a, b) => b.count - a.count);

    // Print the top 3 IP addresses and their request counts
    for (let i = 0; i < Math.min(3, ipArray.length); i++) {
        console.log(`#${i + 1}: IP Address: ${ipArray[i].ip}, Requests: ${ipArray[i].count}`);
    }
});
