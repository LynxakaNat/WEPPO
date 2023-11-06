var n = 1;
// liczba ma prototyp? nie
console.log( typeof Object.getPrototypeOf( n ) );
// można jej dopisać pole/funkcję? powoduje error
n.foo = 'foo';
console.log( n.foo );
