let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = [];
Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    const vowelElements = word.split('').filter(elem => {
      return 'aeiou'.includes(elem);
    });
    vowels = vowels.concat(vowelElements);
  });
});

console.log(vowels);
