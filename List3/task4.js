function add(...x){
    return x.reduce(function (a,b){
        return a + b;
    })
}
console.log(add(1,2,3,4,5));

