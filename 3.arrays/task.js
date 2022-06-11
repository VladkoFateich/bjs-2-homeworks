function compareArrays(arr1, arr2) {
  let result;

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