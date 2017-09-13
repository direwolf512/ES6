/**
 * @fileOverview
 * @author jywang
 */

"use strict";

let title = 'index';
console.log("title--------------" + title);

/* 块级作用域 */
var name2 = 'asdffg';
while (true) {
  var name2 = 'var';
  console.log("name-var-------------" + name2);
  break;
}
console.log("name-------------" + name2);

let name1 = 'asdffg';
while (true) {
  let name1 = 'let';
  console.log("name-let-------------" + name1);
  break;
}
console.log("name-------------" + name1);

var b = [];
for (var i = 0; i < 5; i++) {
  b[i] = function() {
    console.log("i-var-------------" + i);//5
  }
}
b[3]();

var c = []
for (let i = 0; i < 5; i++) {
  c[i] = function() {
    console.log("i-let-------------" + i);//3
  }
}
c[3]();

/* 变量提升 */
console.log(up1);
var up1 = 'aaaa';//undefined

console.log(up2);
let up2 = 'aaaa';//报错

var lis1 = document.getElementsByClassName('tap1');
for (var i = 0; i < lis1.length; i++) {
  lis1[i].onclick = function() {
    alert(i);//5 5 5 5 5
  }
}
/* 闭包 */
var lis2 = document.getElementsByClassName('tap2');
for (var j = 0; j < lis2.length; j++) {
  (function(j) {
    lis2[j].onclick = function() {
      alert(j)
    }
  })(j);
}
/* 作用域 */
var lis3 = document.getElementsByClassName('tap3');
for (let k = 0; k < lis3.length; k++) {
  lis3[k].onclick = function() {
    alert(k);
  }
}

/* 解构赋值 */
/* 数组 */
let [arg1, arg2, arg3] = [1, 2, 3];
console.log(arg1);
console.log(arg2);
console.log(arg3);

let [arg21, [arg22], arg23] = [1, [2, 3, 4], 5];
console.log(arg21);
console.log(arg22);//不完全解构
console.log(arg23);

//报错，因为右侧不是数组
/*let [arg31] = 1;
let [arg41] = false;
let [arg51] = NaN;
let [arg61] = undefined;
let [arg71] = null;
let [arg81] = {};*/

/* 对象 */
//同名
var {obj1, obj2} = {
  obj1: 111111,
  obj2: 222222
};
console.log(obj1);//111111
console.log(obj2);//222222

//不同名
var {obj3: obja, obj4: objb} = {
  obj3: 111111,
  obj4: 222222
};
/*console.log(obj3);//报错
console.log(obj4);//报错*/
console.log(obja);//111111
console.log(objb);//222222

/* 字符串 */
let [str1, str2, str3, str4, str5] = 'hello';
console.log(str1);//h
console.log(str2);//e
console.log(str3);//l
console.log(str4);//l
console.log(str5);//o

let {length: len} = 'hello';
console.log(len);//5


//var btn=document.getElementsByTagName('button')[0]
/*var btn = document.getElementById('btn');
var btn1 = document.getElementsByTagName('button');
var btn2 = document.getElementsByClassName('btnC');
console.log(btn);
console.log(btn1[0]);
console.log(btn2[0]);
btn.onclick = function() {
  alert(1111);
};*/

class Animal {
  constructor () {
    this.type = 'animal'
  }
  says (say) {
    console.log(this.type + ' says ' + say)
  }
}
let animal = new Animal();
animal.says('hello');

class Cat extends Animal {
  constructor () {
    super();
    this.type = 'cat'
  }
}
let cat = new Cat();
cat.says('hello');

class Hehe {
  constructor () {
    this.type = 'animal'
  }

  /*says(say){
   setTimeout(() => {
   console.log(this.type + 'says' + say)
   },1000)
   }*/
  says (say) {
    var _this = this;
    setTimeout(function() {
      console.log(_this.type + 'says:' + say)
    }, 1000)
  }

}
var hehe = new Hehe();
hehe.says('hi');

/* 模板字符串 */
var box = document.getElementById('box');
var h1Con = document.createElement('h1');
h1Con.innerHTML = 'h1';
box.appendChild(h1Con);
var con1 = 'aaaaaaaaaa';
var con2 = 'bbbbbbb';
var con3 = 'cccccccc';
var con4 = 'dddddddddddd';
var con5 = 'eeeeeeeee';

$('#box').append('There are <h2>' + con1 + '<h2><h3>' + con2 + '<h3><p>' + con3 + '</p>');

$('#box').append(`
  There are <h2>${con1}<h2><h3>${con2}<h3><p>${con3}</p>
`)

/* 箭头函数 */
let a = 11111;
let aaa = (a) => {
  return console.log('a---------' + a);
};
aaa(a);//11111

let cccc = 'ccc111';
let ccc = (cccc = 'ccc222') => {
  console.log("cccc-------------" + cccc);
};
ccc('ccc333');//ccc333


function nums (...types) {
  console.log(types);
}
nums(1, 2, 3, 4);

/*var bbbb='cat'
 (bbbb)=>{console.log(bbbb)}
 */




let ee = 0b111;
let ff = 0o111;
console.log(Number(ee));//7
console.log(Number(ff));//73

Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
console.log("15------" + Number.isFinite(15));
console.log("0.8------" + Number.isFinite(0.8));
console.log("NaN------" + Number.isFinite(NaN));
console.log("Infinity------" + Number.isFinite(Infinity));
console.log("-Infinity------" + Number.isFinite(-Infinity));
console.log("'foo'------" + Number.isFinite('foo'));
console.log("'15'------" + Number.isFinite('15'));
console.log("true------" + Number.isFinite(true));

Number.isNaN(NaN); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9 / NaN); // true
Number.isNaN('true' / 0); // true
Number.isNaN('true' / 'true'); // true
console.log("NaN------" + Number.isNaN(NaN));
console.log("15------" + Number.isNaN(15));
console.log("'15'------" + Number.isNaN('15'));
console.log("true------" + Number.isNaN(true));
console.log("9/NaN------" + Number.isNaN(9 / NaN));
console.log("'true'/0------" + Number.isNaN('true' / 0));
console.log("'true'/'true'------" + Number.isNaN('true' / 'true'));