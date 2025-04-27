// Write a debounce function in JavaScript that delays invoking a function until after a specified wait time has elapsed since the last time it was called.
// The debounced function should also accept an optional immediate parameter that triggers the function on the leading edge instead of the trailing edge.
function debounce(func, delay) {
    if (delay === void 0) { delay = 1000; }
    var timerId = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timerId !== null) {
            clearInterval(timerId);
        }
        timerId = setTimeout(function () {
            func.apply(void 0, args);
        }, delay);
    };
}
var doSomething = function () {
    var eventsFunc = function (id) {
        console.log(id);
    };
    var debounceFunc = debounce(eventsFunc);
    debounceFunc(1);
    debounceFunc(2);
    debounceFunc(3);
    debounceFunc(4);
    debounceFunc(5);
    setTimeout(function () { return debounceFunc(6); }, 800);
    setTimeout(function () { return debounceFunc(7); }, 1500);
    setTimeout(function () { return debounceFunc(8); }, 2000);
    setTimeout(function () { return debounceFunc(8); }, 2000);
    setTimeout(function () { return debounceFunc(88); }, 2000);
    setTimeout(function () { return debounceFunc(888); }, 2000);
    setTimeout(function () { return debounceFunc(8888); }, 2000);
    setTimeout(function () { return debounceFunc(88888); }, 2000);
    setTimeout(function () { return debounceFunc(9); }, 2500);
    setTimeout(function () { return debounceFunc(10); }, 2800);
    setTimeout(function () { return debounceFunc(11); }, 4000);
};
doSomething();
