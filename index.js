// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
function writeCards(names, event) {
  return names.map(
    (name) => `Thank you, ${name}, for the wonderful ${event} gift!`
  );
}
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countDown(10);
