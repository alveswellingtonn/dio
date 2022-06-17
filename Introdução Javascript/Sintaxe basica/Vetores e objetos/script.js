//declara um array
//let array = ['string', 1, true];
//console.log(array);

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3]);

//manipular um array

//forEach
array.forEach(function(item, index) {console.log(item, index)});

//push

array.push('novo item');
console.log(array);

//pop
array.pop(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift();
console.log(array);

//indexof
console.log(array.indexOf(true));

//splice
array.splice(0,3);
console.log(array);

//slice
let novoArray = array.slice(0,3);
console.log(novoArray);

//objetos

let object = {String: 'string', number: 1, Boolean: true, array: ['array'], objectInterno: { objectInterno: 'Objeto interno'}};
console.log(object.Boolean);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno);