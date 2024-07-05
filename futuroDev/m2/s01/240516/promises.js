new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
}).then((value) => {
  console.log(value);
});     



