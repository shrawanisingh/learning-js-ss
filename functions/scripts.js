const age = 20;

const changeAge = () => {
  const age = 30;
  console.log(age);

  return function getAge() {
    return age * 2;
  };
};

changeAge();
console.log(changeAge()());
