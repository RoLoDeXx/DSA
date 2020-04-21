// let arr1 = ["a", "b", "c", "x"];
// let arr2 = ["e", "f", "x"];

// const itemsht = {};

// const constains = (arr1, arr2) => {
//   arr1.forEach((element) => {
//     if (!itemsht[element]) itemsht[element] = "false";
//   });

//   arr2.forEach((element) => {
//     if (itemsht[element]) itemsht[element] = "true";
//   });
// };

// constains(arr1, arr2);

// console.log(itemsht);

const valley =
  "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD";
let arr = [...s];
var c = 0;
var l = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "U") {
    level++;
  } else if (arr[i] === "D") {
    level--;
    if (level === -1) {
      c++;
    }
  }
}
console.log(c);

// for (let i of Object.keys(drawer)) {
//   if (drawer[i] % 2 === 0) count++;
// }
