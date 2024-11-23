let count = 0;

setTimeout(() => {
  console.log("Timeout executed: Kachi");
}, 5000);

setInterval(() => {
  count++;
  console.log(count);
}, 1000);

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Kachi");
  }, 5000);
});

p.then((value) => console.log(value)).catch((err) => console.log(err));
