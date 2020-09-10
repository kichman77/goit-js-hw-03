
const countTotalSalary = function (employees) {
 // const arr = Object.values(employees);
 // console.log(arr);
  let total = 0;
  for (let elem of Object.values(employees)) {
    total += elem;
  }
  return total
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
