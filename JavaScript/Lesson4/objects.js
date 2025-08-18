const user = {
  name: 'Ivan',
  age: 96,
  job: {
    name: 'cooker',
    experience: 12,
  },
  gender: 'male',
  // hello: function() {
  //   console.log(`Hello, my name is ${this.name}`);
  // },
  hello: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
  // hello() {
  //   console.log(`Hello, my name is ${this.name}`);
  // }
}

user.hello();

console.log(`${user.name} works ${user.job.name} for ${user.job.experience}`);

user.login = 'N12';

console.log(user);
delete user.age;
user.gender = 'female';
console.log(user['job']['name']);

// if(['gender'] in user) {
//   console.log(user.gender);
// }

// if(user.age != undefined) {
//   console.log(user.age);
// }

console.log(['gender'] in user);

// for(key in user) {
//   console.log(key);
//   console.log(user[key]);
// }


function isEmpty(obj) {
  for(key in obj) {
    return false
  }
  return true;
}

const obj = {}
console.log(isEmpty(obj));
obj.name = 'Hello';
console.log(isEmpty(obj));


const obj1 = {
  a: 1
}
const obj2 = {}
for(key in obj1) {
  obj2[key] = obj1[key];
}
// Object.assign(obj2, obj1);
obj2.a = 3;
console.log(obj1);
console.log(obj2);




const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sum(obj) {
  let result = 0;
  for(key in obj) {
    result += obj[key];
  }
  return result;
}

console.log(sum(salaries));



function multiplyNumeric(obj) {
  for(key in obj) {
    if (typeof(obj[key] == 'number')) {
      obj[key] *= 2;
    }
  }
  return obj;
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log(multiplyNumeric(menu));



let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().up().up().showStep();