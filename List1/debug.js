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
DivNums(5,10)
// https://code.visualstudio.com/docs/nodejs/browser-debugging#_launch-configuration
