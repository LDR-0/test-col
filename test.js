//1
function findLongestWord(words) {
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord(["Java", "Python", "JavaScript"]));
  console.log(findLongestWord(["football", "basketball", "tennis"]));
  console.log(findLongestWord(["sun", "moon", "stars"]));

//2
function sumUniqueNumbers(numbers) {
    const uniqueNumbers = {};
    let sum = 0;
    for (const num of numbers) {
      if (!uniqueNumbers[num]) {
        uniqueNumbers[num] = true;
        sum += num;
      }
    }
    return sum;
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5]));
console.log(sumUniqueNumbers([10, 20, 10, 20, 30]));
console.log(sumUniqueNumbers([0, -1, -2, -1, -3]));

//3
function mergeArrays(...arrays) {
    const mergedArray = [];
    for (const array of arrays) {
      for (const element of array) {
        if (!mergedArray.includes(element)) {
          mergedArray.push(element);
        }
      }
    }
    return mergedArray;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4]));
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7]));

//4
function hasProperty(object, propertyName) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && key === propertyName) {
        return true;
      }
    }
    return false;
}
  
console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color"));