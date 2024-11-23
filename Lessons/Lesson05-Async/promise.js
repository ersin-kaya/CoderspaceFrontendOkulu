const getData = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") resolve(number * 2);
      else reject("Please enter a number.");
    }, 2000);
  });
};

getData(10)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
