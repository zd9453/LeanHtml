// 在页面输出
document.writeln("this is javascript print message !");
//一个输入弹窗
// var inputMsg = window.prompt("input your message:");
//控制台打印log
// console.log("your input : " + inputMsg);
//一个提示弹窗
// alert("please chose console see your input");

//立即执行函数asa
// (function aab(a, c, g) {
//     console.log("立即执行函数，执行之后就被回收，再也调用不到了！")
// })(1, 1, 2);

// sum(null, 1, undefined, 4, NaN);
//
// function sum() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
//     console.log("sum method is end ");
// }

// console.log(bar());
// var person = {
//     name: undefined,
//     age: undefined,
//     eat: function () {
//         console.log("eat some " + this.name);
//     }
// };

//父类属性（原型属性）
// Person.prototype.firstName = "wang";
// Person.prototype.home = "siChuan";
// Person.prototype.eat = function () {
//     console.log(this.home + " eat function ");
// };

Person.prototype = {
    firstName: "wang",
    home: "siChuan",
    eat: function () {
        console.log(this.home + " eat function ");
    }
    // toString: function () {
    //     console.log("重写的toString() Method")
    // }
};

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sleepT = function () {
        console.log("sleep time ")
    }
}

var child = {};
var m = new Person('zhang', 18);

Person.call(child, "z", 1);
console.log(child);
// m.eat.call();//方法执行,参数undefined
m.eat();

child.sleepT();
console.log(m.toString());