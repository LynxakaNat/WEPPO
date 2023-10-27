var a = [1,2,3,4]
// console.log(a[0]);
let sum = 0;
function forEach(a,f){
    for (let i = 0; i< a.length; i++) {
        a[i] == f(a[i]);
    }

}

forEach( a, _ => { console.log( _ ); } );
function f1(item) {
    console.log(2);
}
forEach(a,f1);

function map(a,f){ // map creates a new array!!!!!!
    var b = [];
    for (let i = 0; i< a.length; i++){
        b.push(f(a[i]));
    }
    return b;
}
console.log(map( a, _ => _ * 2 ));
// [2,4,6,8]

function filter(a,f){
    var c = [];
    for (let i = 0; i< a.length; i++){
    if(f(a[i]) == true){
        c.push(a[i])
    }
}
    return c;}
console.log(filter( a, _ => _ < 3 ));
