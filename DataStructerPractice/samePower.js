// function same(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1.length === arr2.length) {
//       if (arr1[i] ** 2 === arr2[i]) {
//         return true;
//       }
//       return false;
//     } else {
//       return false;
//     }
//   }
//   return false;
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correntIndex = arr2.indexOf(arr1[i] ** 2);
    if (correntIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correntIndex, 1);
  }
  return true;
}

console.log(same([2, 1, 2, 3], [9, 1, 4, 6]));
