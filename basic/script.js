const arr = [1, 2, 3, 4, 5];

const returnArr = arr.filter(function (eachElem) {
  return eachElem === 9;
});

// console.log(returnArr);

const arr2 = ['Rohit', 'Dipu', 'Badmash'];

// const returnArr2 = arr2.filter(
//     function (eachElem) {
//        return eachElem === 'Badmash';
//     }
// );

const returnArr2 = arr2.filter((eachElem) => eachElem === 'Badmash');

// console.log(returnArr2);

// for in  { key: value }
/**
 *  const person = {
 *  name: "Rohit",
 *  roll: 3,
 *  location: "Bihar"
 * }
 */

const person = {
  name: 'Rohit',
  roll: 3,
  location: 'Bihar',
};

for (let key in person) {
  console.log(person[key]);
}

// For of

const arr3 = [1, 2, 3, 5, 8];

for (let value of arr3) {
  console.log(value);
}
