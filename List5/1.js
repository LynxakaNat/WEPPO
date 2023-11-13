// z wykladu
// main.js
let a = require('./a');
a.work_a(5);
// a.js
module.exports = { work_a };
let b = require('./b');
function work_a(n) {
 if ( n > 0 ) {
 console.log( `a: ${n}`);
 b.work_b(n-1);
 }
}
// b.js
module.exports = { work_b };
let a = require('./a');
function work_b(n) {
 if ( n > 0 ) {
 console.log( `b: ${n}`);
 a.work_a(n-1);
 }
}
