function compareArrays(arr1, arr2) {
  let result;
<<<<<<< HEAD

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] === arr2[i] && arr1.length === arr2.length) {
    result = true
  } else {
    result = false
  } 
  }
  return result; // boolean
}
compareArrays([8, 1, 2], [8, 1, 2])

function advancedFilter(arr) {
  let resultArr;
arr.forEach(element => {
  
});

  return resultArr; // array
}
advancedFilter([-10,-21,12,123])
=======
for(let i = 0; i < arr1.length; i++) {
  if(arr1[i] === arr2[i] && arr1.length === arr2.length) {
  result = true
} else {
  result = false
} 
}

  return result; // boolean
}
console.log(compareArrays([1, 2], [1, 2, 3]))

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr
    .filter((elem) => elem > 0 && elem % 3 === 0)
    .map((newElem) => {
      return newElem * 10;
    });

  return resultArr;
}
console.log(advancedFilter([-10,-21,12,123]))
>>>>>>> 2b485fe8271126d3f1164cb9c7cca372d3832347
