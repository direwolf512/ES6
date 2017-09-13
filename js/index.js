/**
 * @fileOverview
 * @author jywang
 */

"use strict";

let title = 'index';
console.log("title--------------" + title)

let a = 11111111111;
((a) => {
  console.log("a-------------" + a);
})();

let name = 'asdffg';
while (true) {
  let name = '对方水电费';
  console.log("name-------------" + name);
  break;
}

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

var lis1 = document.getElementsByClassName('tap1');
for (var i = 0; i < lis1.length; i++) {
  lis1[i].onclick = function() {
    console.log(i);//5 5 5 5 5
  }
}

var lis2 = document.getElementsByClassName('tap2');
for (var j = 0; j < lis2.length; j++) {
  (function(j) {
    lis2[j].onclick = function() {
      console.log(j)
    }
  })(j);
}

//var btn=document.getElementsByTagName('button')[0]
var btn = document.getElementById('btn');
var btn1 = document.getElementsByTagName('button');
var btn2 = document.getElementsByClassName('btnC');
console.log(btn);
console.log(btn1[0]);
console.log(btn2[0]);
btn.onclick = function() {
  alert(1111);
};

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

function nums (...types) {
  console.log(types);
}
nums(1, 2, 3, 4);

/*var bbbb='cat'
 (bbbb)=>{console.log(bbbb)}
 */

let cccc = 11111111111;
let ccc = (cccc = 1111)=> {
  console.log("cccc-------------" + cccc);
};
ccc(222222);


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