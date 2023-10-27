function createFs(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    for ( let i=0; i<n; i++ ) { // this is where the fix was (!)
        fs[i] =
        function() {
            return i;
        };
    };
    return fs;
}
var myfs = createFs(10);
console.log( myfs[0]() ); // zerowa funkcja miała zwrócić 0
console.log( myfs[2]() ); // druga miała zwrócić 2
console.log( myfs[7]() );
// 10 10 10 // ale wszystkie zwracają 10!?

//Variables declared by let are only available inside the block where they're defined.
//Variables declared by var are available throughout the function in which they're declared.

function createFs2(n) { // tworzy tablicę n funkcji
    var fs = []; // i-ta funkcja z tablicy ma zwrócić i
    for ( var i=0; i<n; i++ ) {
        fs[i] = // change here
        function(i) {
            return function(){ // IIFE - immediately invoked function expressions
                return i;
            }}(i);
        };

    return fs;
}
var myfs1 = createFs2(10);
console.log( myfs1[0]() ); // zerowa funkcja miała zwrócić 0
console.log( myfs1[2]() ); // druga miała zwrócić 2
console.log( myfs1[7]() );
