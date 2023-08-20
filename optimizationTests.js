// array copy
// slice method is faster than spread operator

(() => {
  const array = Array.from({ length: 10000000 }, (_, index) => index + 1);

  const time1 = new Date().getTime();
  const arrayA = [...array];
  console.log("A", new Date().getTime() - time1);

  const time2 = new Date().getTime();
  const arrayB = array.slice();
  console.log("B", new Date().getTime() - time2);
})();
