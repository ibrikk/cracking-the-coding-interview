// const isUnique = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) return false;
//     }
//   }
//   return true;
// };

// const isUnique = (str) => {
//   const sortedArray = str.split("").sort();
//   for (let i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] === sortedArray[i + 1]) return false;
//   }
//   return true;
// };

const isUnique = (str) => {
  const MAX_CHAR = 256;
  if (str.length > MAX_CHAR) return false;
  let newArray = new Array(MAX_CHAR);
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = false;
  }
  for (let i = 0; i < str.length; i++) {
    let index = str[i].charCodeAt();
    if (newArray[index] === true) return false;
    newArray[index] = true;
  }
  return true;
};

console.log(isUnique("abcd"));
console.log(isUnique("abad"));
