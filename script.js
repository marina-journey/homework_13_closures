// Task 1
function sum(a,b,c,d) { return a+b+c+d; }

function curry(f, ...args) {
    return (...args1) => {
      return f(...args, ...args1);
    }
}

const curriedFunction = curry(sum, 1,2); // запоминает для вызова sum 2 параметра

console.log(curriedFunction(3,4)) // выводит 10 т.е. выполняется функционал sum(1,2,3,4).

// Task 2
function counter() {
    let value = 0;
    return {
        inc: () => {
            return ++value;
        },
        dec: () => {
            return --value;
        },
        value: () => {
            return value;
        },
    }
}
const iterator = counter();
iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec() // уменьшает на 1

console.log(iterator.value()) // выводит 1