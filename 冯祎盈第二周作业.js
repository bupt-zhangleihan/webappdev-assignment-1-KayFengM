//1-数据类型
let product = {
    id: '100053981526',        // id编码不属于数值，数据类型为字符串(String)，用于存储唯一标识符
    name: '华为 P60 Pro',     // 字符串(String)，用于存储商品名称
    model: 'MNA-AL00',       // 字符串(String)，用于存储商品型号
    price: 8888.00,      // 数字(Number)，用于存储商品价格
    quantity: 1,       // 数字(Number)，用于存储商品数量
    discount: 0.99,     // 数字(Number)，用于存储折扣信息
};
//商品信息可以存储为一个对象,购物车可以被视为一个商品对象的集合,可以使用数组（Array）来存储这个集合。
let cart = [
    {
        id: '100053981526',
        name: '华为 P60 Pro',
        model: 'MNA-AL00',
        price: 8888.00,
        quantity: 1,
        discount: 0.99
    },
    {
        id: '10044722489792',
        name: '佳能相机',
        model: 'sx740h',
        price: 4599.00,
        quantity: 1,
        discount: 0.99
    },
    // 更多商品...
];
//在这个购物车模型中，主要使用了三种JavaScript的数据类型：字符串（String）、数字（Number）和对象（Object）。它们分别用来存储商品的文本信息、数值信息和整体商品信息，购物车则被设计为存储商品对象的数组。



//2-函数
//创建一个能够计算三角形面积的函数，再创建一个在控制台打印给定两个数值之间所有素数的函数。试试看让它们有多种参数，并且让其中一部分参数有默认值。
function calculateTriangleArea(base, height, unit = "平方单位") {
  const area = 0.5 * base * height;
  console.log(`三角形的面积为：${area} ${unit}`);
  return area;
}
calculateTriangleArea(2, 7, "平方米"); // 输出：三角形的面积为：7 平方米

function printPrimeNumbers(start, end) {
  console.log(`在 ${start} 和 ${end} 之间的素数为：`);
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
printPrimeNumbers(1, 10);//输出结果：在1和10之间的素数为：2 3 5 7

//Create different functions, both functions that return something and functions that don't return anything.See if you can create a function that has a mix of parameters and parameters with default values.
// 返回某些内容的函数
function greet(name) {
    return 'Hello, ' + name + '!';
  }
  console.log(greet('John')); // 输出: Hello, John!
  // 不返回任何内容的函数
  function sayHello() {
    console.log('Hello!');
  }
  sayHello(); // 输出: Hello!
  // 混合参数和具有默认值的参数的函数
  function BMI(weight, height = 1.70) {
    return weight / (height * height);
  }
  console.log(BMI(60, 1.75)); // 输出: 19.591836734693878，使用提供的参数值计算BMI
  console.log(BMI(60));    // 输出: 20.761245674740486，使用默认的身高值计算BMI



  //3-决策
let allStudents = ['A', 'B-', 1, 4, 5, 2];
let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++) {
  let grade = allStudents[i];

  // 判断成绩是否通过第一评分系统
  if (typeof grade === 'number' && grade >= 3) {
    studentsWhoPass.push(grade);
  }

  // 判断成绩是否通过二次评分制度
  if (typeof grade === 'string') {
    if (grade === 'A' || grade === 'A-' || grade === 'B' || grade === 'B-' || grade === 'C' || grade === 'C-') {
      studentsWhoPass.push(grade);
    }
  }
}
console.log(studentsWhoPass); // 输出: ['A', 'B-', 4, 5]



//4-循环
//编写一段程序，列出 1-20 中所有 3 的倍数，将它们输出到控制台。
for (let i = 1; i <= 20;i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}
//Create a program that lists every 3rd number between 1-20 and prints it to the console.
for (let i = 1; i <= 20; i += 3) {
    console.log(i);
  }