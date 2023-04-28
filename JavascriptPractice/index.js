// function topDouble(value, top) {
//   let mul = 2;
//   let arr = [value];
//   for (let i = 1; i < top; i++) {
//     arr.push((value *= mul));
//   }
//   // console.log(arr);
//   let double = [];
//   for (const i of arr) {
//     if (i < top) {
//       double.push(i);
//     }
//   }
//   return double.slice(-1)[0];
// }

function topDouble(value, top) {
  let double = value;
  while (double * 2 < top) {
    double *= 2;
  }
  return double;
}

// function checkNumber(num) {
//   if (num < 0) {
//     return "negative";
//   } else if (num > 0) {
//     return "positive";
//   } else {
//     return "zero";
//   }
// }

// console.log(checkNumber(-3)); // negative
// console.log(checkNumber(0)); // zero
// console.log(checkNumber(2)); // positive

// function maxSum(num) {
//   let arr = [];
//   if (num < 0) return false;
//   for (let i = 0; i <= num; i++) {
//     arr.push(i);
//   }
//   return arr.reduce((a, b) => a + b);
// }

// function startsWithX(string) {
//   return string.charAt(string.length - 1).toLowerCase() === "x";
// }
// console.log(startsWithX("HelloX"));

// function isAllX(string) {
//   return /^x*$/i.test(string);
// }

// function splitAtX(string) {
//   if (string.split("x")[0].length > string.split("x")[1].length) {
//     return string.split("x")[0];
//   }
//   return string.split("x")[1];
// }

// console.log("🚀 ~ splitAtX ~ splitAtX", splitAtX("Happyxdays"));
// console.log("🚀 ~ splitAtX ~ splitAtX", splitAtX("10xDeveloper"));

const array = [1, 2, 3]; // <-- create an array here!

// function sumEven(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       total += array[i];
//     }
//   }
//   return total;
// }

// function addOne(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += 1;
//   }
// }

// function removeOccurrences(arr, num) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] === num) {
//       arr.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
// }

// const orders = [{ pizzas: 3 }, { pizzas: 5 }, { pizzas: 10 }];

// function numberOfPizzas(orders) {
//   return orders.map((i) => i.pizzas).reduce((a, b) => a + b);
// }

const ORDER_TYPES = {
  PIZZA: 0,
  WINGS: 1,
  SALAD: 2,
  BURGER: 3,
  FRIES: 4,
  SANDWICH: 5,
};

// function numberOfPizzas(orders) {
//   let totalPizzas = 0;
//   for (let order of orders) {
//     if (order.type === ORDER_TYPES.PIZZA) {
//       totalPizzas += order.pizzas;
//     }
//   }
//   return totalPizzas;
// }

// function numberOfKeys(object) {
//   const arr = [];
//   for (let key in object) {
//     arr.push(key);
//   }
//   return arr.length;
// }

// const removeSecret = (obj) => {
//   delete obj.secret;
// };

// function shortestString(str1, str2) {
//   if (str1.length < str2.length) {
//     return str1;
//   } else {
//     return str2;
//   }
// }

// function halfValue(numbers) {
//   return numbers.map((x) => Math.ceil(x / 2));
// }
// function countC(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "c" || str[i] === "C") {
//       count++;
//     }
//   }

//   return count;
// }

function countC(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "A" ||
      str[i] === "e" ||
      str[i] === "E" ||
      str[i] === "i" ||
      str[i] === "I" ||
      str[i] === "o" ||
      str[i] === "O" ||
      str[i] === "u" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  return count;
}

function reverse(string) {
  return string.split("").reverse().join("");
}

// program to check if the string is palindrome or not

// function isPalindrome(string) {
//   // loop through half of the string
//   for (let i = 0; i <= string.length / 2; i++) {
//     // check if first and last string are same
//     if (string[i] !== string[string.length - i]) {
//       return true;
//     }
//   }
//   return false;
// }

function isPalindrome(string) {
  console.log(string.split("").reverse().join(""));
  return string.split("").reverse().join("") === string;
}
console.log(isPalindrome("pop"));

// sum = [...array1].map((e,i)=> e+array2[i])

function countElements(elements) {
  const occurrences = elements.reduce((accumulator, value) => {
    accumulator[value] = ++accumulator[value] || 1;

    return accumulator;
  }, {});

  return occurrences;
}

// function playerHandScore(hand) {
//   let score = 0;
//   for (const card of hand) {
//     if (card === "K") {
//       score += 4;
//     } else if (card === "Q") {
//       score += 3;
//     } else if (card === "J") {
//       score += 2;
//     }
//   }
//   return score;
// }

// const res = topDouble(5, 100);
// console.log("🚀 ~ res", res)

function toHex(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

function toCamelCase(str) {
  const regExp = /[-_]\w/gi;
  return str.replace(regExp, (match) => {
    return match[1].toString().toUpperCase();
  });
}

const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var romanToInt = function (S) {
  let ans = 0;
  for (let i = S.length - 1; ~i; i--) {
    console.log("first", i);
    let num = roman[S.charAt(i)];
    console.log("🚀 ~ romanToInt ~ num:", num);
    if (4 * num < ans) ans -= num;
    else ans += num;
  }
  return ans;
};

const sliceLongString = (data, length = 5) => {
  if (!data) return;
  data = data.toString();
  if (data.length > 7) {
    return data.slice(0, length) + "..." + data.slice(length * -1);
  } else {
    return data;
  }
};

const sliceLongString1 = (data, length = 15) => {
  if (!data) return;
  data = data.toString();
  if (data.length > 20) {
    return data.slice(0, length) + "...";
  } else {
    return data;
  }
};
