
function copy(obj) {
  let objCopy = {};
  let key;
  for (key in obj) {
      objCopy[key] = obj[key];
  }
  return objCopy;
}

const number = {
  a:2,
  b:5,
  c: {
    x:7,
    y:5
  }
};

const newNumber = copy(number);
newNumber.a = 22;
console.log(newNumber);
console.log(number);

const add = {
  d:18,
  e:20
}

console.log(Object.assign(number,add));

const  oldArray = ['a','b','c'];
const  newArray = oldArray.slice();

newArray[2] ='sadasdsad';


const video = ['youtube', 'vimeo', 'rutube'],
      blogs  = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a,b,c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const  num = [2,5,3,2];
log(...num);

const array = ['a','b'];
const  newAarray = [...array];


const q = {
  one:1,
  two: 2
}

const newObj = {...q};

console.log(newObj);