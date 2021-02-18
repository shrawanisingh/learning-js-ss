const arr = [1, 2, 3, 4, 5];

const returnArr = arr.filter(function (eachElem) {
  return eachElem === 9;
});

console.log(returnArr);

const arr2 = ['Rohit', 'Dipu', 'Badmash'];

const returnArr2 = arr2.filter(function (eachElem) {
  return eachElem === 'Badmash';
});

console.log(returnArr2);
