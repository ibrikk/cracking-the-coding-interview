let a = {
  name: "John Smith",
  age: "27",
  lovesApplyboard: "true",
  hair: "null",
  favouriteNumbers: ["1", "2", "3"],
  address: {
    houseNumber: "1234",
    street: "Grey Road"
  }
};

const parser = obj => {
  let parsedObj = {};
  parsedObj.name = obj.name;
  parsedObj.age = Number(obj.age)
  parsedObj.lovesApplyboard = obj.lovesApplyboard === "true" ? true : false;
  parsedObj.hair = obj.hair === "null" ? null : obj.hair;
  parsedObj.favouriteNumbers = [];
  for (let i = 0; i < obj.favouriteNumbers.length; i++) {
    parsedObj.favouriteNumbers.push(Number(obj.favouriteNumbers[i]));
  }
  parsedObj.address = {};
  parsedObj.address.houseNumber = Number(obj.address.houseNumber);
  parsedObj.address.street = obj.address.street;
  return parsedObj;
}
console.log(parser(a));