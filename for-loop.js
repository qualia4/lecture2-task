function sum(...args)
{
  let sum = 0;
  for (const number of args)
  {
    sum += number;
  }
  return sum
};

let first_num = 2;
let second_num = 3;
alert(sum(first_num, second_num));
