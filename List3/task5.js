function createGenerator(end) {
    var _state = 0;
    return {
    next : function() {
    return {
    value : _state,
    done : _state++ >= end
                }
            }
        }
    }
var foo = {
    [Symbol.iterator]:function(){ return createGenerator(10);}
    };
for ( var f of foo )
    console.log(f);
var foo1 = {
    [Symbol.iterator]:function(){ return createGenerator(6);}
    };
for ( var f of foo1 )
console.log(f);
