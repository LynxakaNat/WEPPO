function *fib(){
    let current = 0;
    let next = 1;
    while(true) {
        const reset = yield current; // The yield operator is used to pause and resume a generator function.
        [current,next] = [next, next + current]
        if (reset) {
            current = 0;
            next = 1;
        }
    }
}

var _it = fib();
//for ( var _result; _result = _it.next(), !_result.done; ) {
//console.log( _result.value );}
//}
//for ( var i of fib() ) {
//    console.log( i ); < === WORKS (check)
//    }

/*function fib() {
    let prev_prev = 0;
    let prev = 1;
    return {
    next : function() {
        const val = prev_prev;
        const next = prev_prev + prev;
        prev_prev = prev;
        prev = next;
    return {
    value : val,
    done : false
    }
    }
    }
    }
var _it = fib();
for ( var _result; _result = _it.next(), !_result.done; ) {
    console.log( _result.value );}*/


function* take(it,top){
    for (let i = 0; i< top; i++){
    const {value,done} = it.next();
    if (done){
        break; // jesli iteracja skonczona breakujemy
    }
    else{
    yield value;
        } // jesli nie jest skonczone -> wypluwamy naszego fiba
    }
    }
for (let num of take( fib(), 10 ) ) {
    console.log(num);
    }
