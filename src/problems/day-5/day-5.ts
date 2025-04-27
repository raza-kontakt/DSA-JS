// Write a debounce function in JavaScript that delays invoking a function until after a specified wait time has elapsed since the last time it was called.
// The debounced function should also accept an optional immediate parameter that triggers the function on the leading edge instead of the trailing edge.

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number = 1000
): (...args: Parameters<T>) => void {
  let timerId: number | null = null;

  return (...args: Parameters<T>) => {
    if (timerId !== null) {
      clearInterval(timerId);
    }

    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const doSomething = () => {
  const eventsFunc = (id: number) => {
    console.log(id);
  };
  const debounceFunc = debounce(eventsFunc);

  debounceFunc(1);
  debounceFunc(2);
  debounceFunc(3);
  debounceFunc(4);
  debounceFunc(5);

  setTimeout(() => debounceFunc(6), 800);
  setTimeout(() => debounceFunc(7), 1500);
  setTimeout(() => debounceFunc(8), 2000);
  setTimeout(() => debounceFunc(8), 2000);
  setTimeout(() => debounceFunc(88), 2000);
  setTimeout(() => debounceFunc(888), 2000);
  setTimeout(() => debounceFunc(8888), 2000);
  setTimeout(() => debounceFunc(88888), 2000);
  setTimeout(() => debounceFunc(9), 2500);
  setTimeout(() => debounceFunc(10), 2800);
  setTimeout(() => debounceFunc(11), 4000);
};

doSomething();
