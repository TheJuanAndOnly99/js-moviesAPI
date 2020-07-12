// De-bouncing an input
// Stop fetch from sending request on every key press by setting
// a timeout function to run X seconds after the last user input is received

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
