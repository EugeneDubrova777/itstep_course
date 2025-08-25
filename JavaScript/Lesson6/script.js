// let numbers = [3, 5, 7, -5, 54, 2];

// console.log(numbers[2]);

// for(let i = 0; i < numbers.length; i++) {
//   console.log(`Index ${i} - ${numbers[i] ** 2}`);
// }


//1

// class Product {
//   constructor(productName, productCount, productIsBuy) {
//     this.name = productName;
//     this.count = productCount;
//     this.isBuy = productIsBuy;
//   }
// }

// let shopList = [
//   new Product('apple', 3, true),
//   new Product('milk', 2, false),
//   new Product('bread', 1, false),
//   new Product('kiwi', 5, true),
//   new Product('beer', 8, true),
//   new Product('pineapple', 1, false),
// ];

// function showShopList(array) {
//   console.log('Non-bought products:');
//   for(let i = 0; i < array.length; i++) {
//     if(array[i].isBuy === false) {
//       console.log(`- ${array[i].name} in count ${array[i].count}`);
//     }
//   }
//   console.log('Bought products:');
//   for(let i = 0; i < array.length; i++) {
//     if(array[i].isBuy === true) {
//       console.log(`- ${array[i].name} in count ${array[i].count}`);
//     }
//   }
// }

// function addProduct(newProduct) {
//   let isProductExist = false;
//   shopList.forEach((product, index) => {
//     if(product.name == newProduct.name) {
//       isProductExist = true;
//       shopList[index].count += newProduct.count;
//     }
//   });

//   if(!isProductExist) {
//     shopList.push(newProduct);
//   }
// }

// function buy(productName) {
//   shopList.forEach((product, index) => {
//     if(product.name == productName) {
//       shopList[index].isBuy = true;
//     }
//   });
// }

// addProduct(new Product('meat', 2, true));
// addProduct(new Product('beer', 2, false));
// buy('bread');
// showShopList(shopList);

// let arr = [1];
// arr[10] = 3;
// console.log(arr);
// console.log(arr[2]);


//2

class Product {
  constructor(productName, productCount, productPrice) {
    this.name = productName;
    this.count = productCount;
    this.price = productPrice;
  }
}

let checkList = [
  new Product('apple', 3, 20),
  new Product('milk', 2, 10),
  new Product('bread', 1, 5),
  new Product('kiwi', 5, 24),
  new Product('beer', 8, 22),
  new Product('pineapple', 1, 40),
];

function printCheckList(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`${array[i].name} --- ${array[i].count} --- ${(array[i].price * array[i].count).toFixed(2)}$`);
  }
}
printCheckList(checkList);

function sum(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    result += array[i].count * array[i].price;
  }
  console.log(`${result}$`);
}
sum(checkList);

function theMostExpensive(array) {
  let resultProduct = null;
  let total = 0;
  array.forEach((product) => {
    let price = product.count * product.price;

    if (price > total) {
      resultProduct = product;
      total = price;
    }
  })
  console.log(`the most expensive is ${resultProduct.name}`);
}
theMostExpensive(checkList);

function middlePrice(array) {
  let result = 0;
  for(let i = 0; i < array.length; i++) {
    result += array[i].price;
  }
  console.log(`${(result / array.length).toFixed(2)}$`);  
}

middlePrice(checkList);



let str = 'hello WorLd!';
console.log(str[1]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.split(' '));

let str2 = new String('');
console.log(typeof(str2));
