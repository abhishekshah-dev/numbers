// const items = [...document.querySelectorAll(".number")];

// console.log(items);

// const updateCount = (el) => {
//   const value = parseInt(el.dataset.value);
//   const increment = Math.ceil(value / 1000);
//   let initialValue = 0;

//   const increaseCount = setInterval(() => {
//     initialValue += increment;
//     if (initialValue > value) {
//       el.textContent = `${value}+`;
//       clearInterval(increaseCount);
//       return;
//     }
//     el.textContent = `${initialValue}+`;
//   }, 1);
// };

// items.forEach((item) => {
//   updateCount(item);
// });

const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = el.dataset.value;
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
