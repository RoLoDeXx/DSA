// let input = [1, 2, 3, 4, 5, 6, 7];

// add things in front
// input.unshift(0);

// add in between

// first parameters are
// start,delete how many after,item to be added

// input.splice(4, 0, 55);

let arr1 = [3, 5, 6, 10, 11, 20],
  arr2 = [1, 2, 7, 8, 15, 19];

const sortArr = (arr1, arr2) => {
  let i = 0,
    j = 0;
  for (i = 0, j = 0; i < arr1.length && j < arr2.length; ) {
    if (arr1[i] < arr2[j]) {
      console.log(arr1[i]);
      i++;
    } else if (arr1[i] === arr2[j]) {
      console.log(arr1[i], arr1[i]);
      i++;
      j++;
    } else {
      console.log(arr2[j]);
      j++;
    }
  }
  if (i !== arr1.length) {
    for (let m = i; i < arr1.length; i++) console.log(arr1[m]);
  }
  if (j !== arr2.length) {
    for (let m = j; j < arr2.length; j++) console.log(arr2[m]);
  }
};

sortArr(arr1, arr2);
