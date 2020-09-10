const countProps = function (obj) {
  const array = Object.keys(obj);
 // console.log(array);
  const array2 = Object.values(obj);
//  console.log(array2);
   return array.length, array2.length

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
