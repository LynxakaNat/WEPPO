//  TASK 1 DONE

// TASK 2
function DivNums(p1,p2){
    let Set = [];
    for(let i=p1; i<p2; i++){
        let dig_list;
        dig_list = String(i).split(''); // this returns a [] of all the digits as Strings 12 == ['1', '2']
        let sum = 0;
         // we are defining a sum = 0
        for(item in dig_list){
            if(i % dig_list[item] == 0){
                sum += Number(dig_list[item]);
                continue
            }
            else{
                sum = 0;
                break // we break out
            }
        }
        //console.log("This is my sum", sum);
        if(i % sum == 0){
        Set.push(i);
        }
        }
    return Set;
}
//}
// TASK 3
function PrimeNums(p1,p2){
    for(let x = p1; x < p2; x++){
        let IsPrime = true;
        for (let i =2; i < x; i++){
            if(x % i == 0){
                IsPrime = false;
                break // it is not a prime number because it is divisable by a different number
            }
            }
        if (IsPrime){
            console.log(x);
        }}
}
///divisable through every consecutive digit + sum
// console.log(DivNums(1,1000));
//PrimeNums(2,100);
// TASK 4 - TO BE DONE
//TASK 5 Fib Sequences
function FibRec(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return (FibRec(n-1) + FibRec(n-2));
}
// console.log(FibRec(4));
function FibIt(n){
    let prev_prev = 0;
    let prev = 1;
    let number = 0;
    if (n==0) {
        return prev_prev;
    }
    if(n==1){
        return prev;
    }
    for(let i = 2; i< n; i++){
        number = prev_prev + prev;
        prev_prev = prev;
        prev = number;

    }
    return number
}
/// My range will be from 10 to 40, why?
/// So for the first element we have the base time. Assume we have to now calculate the 40th number,
/// and we know our algorithm grows in O(n^2) so compared to the first element the 40fh will take us 1600 times as long.

//console.time('Execution Time');
//FibIt(25);
//console.timeEnd('Execution Time');

function Output(K){
    for (let n = 10; n <= K; n++) {
    console.time("FibIt");
    FibIt(n);
    console.timeEnd("FibIt");

    console.time("FibRec");
    FibRec(n);
    console.timeEnd("FibRec");
}}

Output(40)
