let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// output on separate lines
let vowelz = 'aeiou';
Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split("").forEach(elem => {
    if (vowelz.includes(elem)) {
    console.log(elem);
    }
  });
  });
});

// output in an array
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