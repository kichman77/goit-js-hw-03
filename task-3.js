const findBestEmployee = function (employees) {
  const array = Object.entries(employees);
  let bestName = array[0][0];
  let bestScore = array[0][1];
 // console.log(bestName, bestScore);

  for (let i = 1; i < array.length; i += 1) {
   // console.log(array[i]);
    const innerArray = array[i];
   // console.log(innerArray);
    let name = innerArray[0];
   // console.log(name);
    let score = innerArray[1];
   // console.log(score);
    if (bestScore < score) {
      bestScore = score;
      bestName = name;
     // console.log(bestScore, bestName);
    }

  }
  return bestName;

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux