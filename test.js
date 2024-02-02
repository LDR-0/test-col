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
  
console.log(hasProperty({name: "Alice", age: 25}, "age"));

//5
function getPropertyValue(object, propertyName) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && key === propertyName) {
        return object[key];
      }
    }
    return undefined;
}
  
console.log(getPropertyValue({name: "Alice", age: 25}, "name"));

//6
function invertObject(obj) {
    const inverted = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        inverted[obj[key]] = key;
      }
    }
    return inverted;
}
const originalObject1 = { a: 1, b: 2, c: 1 };
const invertedObject1 = invertObject(originalObject1);
console.log(invertedObject1);
