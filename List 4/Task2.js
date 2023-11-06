var p = {
    name: 'jan'
    }
var q = {
    surname: 'kowalski'
}
Object.setPrototypeOf(p, q);
console.log( p.name );
console.log( p.surname );
console.log(p.hasOwnProperty('name'));
function OwnProp(obj,property){
    return obj.hasOwnProperty(property)
}
console.log(OwnProp(p,'surname'))
console.log(p.toString())


