
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
//console.log(user);
user.hobby = 'skydiving';
user.premium = false;
//console.log(user);

let keys = (Object.keys(user));
//console.log(keys);

for (let key of keys) {
  console.log(`${key}: ${user[key]}`);
};