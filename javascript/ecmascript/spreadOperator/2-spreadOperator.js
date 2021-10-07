//Shallow Copying / Cloning Objects in JavaScript

const obj = {
  test: 123,
  subObj: {
    test:456,
    subSubObj: {
      test: 789
    }
  }
}

const obj2 = {
  ...obj,
  subObj: {
    ...obj.subObj,
    subSubObj: { ...obj.subObj.subSubObj }
  }
} // Spread operator

//const obj2 = Object.assign({}, obj); // Old-school JS

obj2.subObj.test = 654
obj2.subObj.subSubObj.test = 987

console.log(obj)
console.log(obj2)
