const arr = ["item"];

const largeArr = new Array(10000).fill("item");

function findArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "item") console.log("found");
  }
}

findArr(largeArr);
