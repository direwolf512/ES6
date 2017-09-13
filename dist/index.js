/**
 * @fileOverview
 * @author jywang
 */

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var title = 'index';
console.log("title--------------" + title);

/* 块级作用域 */
var name2 = 'asdffg';
while (true) {
  var name2 = 'var';
  console.log("name-var-------------" + name2);
  break;
}
console.log("name-------------" + name2);

var name1 = 'asdffg';
while (true) {
  var _name = 'let';
  console.log("name-let-------------" + _name);
  break;
}
console.log("name-------------" + name1);

var b = [];
for (var i = 0; i < 5; i++) {
  b[i] = function () {
    console.log("i-var-------------" + i); //5
  };
}
b[3]();

var c = [];

var _loop = function _loop(_i) {
  c[_i] = function () {
    console.log("i-let-------------" + _i); //3
  };
};

for (var _i = 0; _i < 5; _i++) {
  _loop(_i);
}
c[3]();

/* 变量提升 */
console.log(up1);
var up1 = 'aaaa'; //undefined

console.log(up2);
var up2 = 'aaaa'; //报错

var lis1 = document.getElementsByClassName('tap1');
for (var i = 0; i < lis1.length; i++) {
  lis1[i].onclick = function () {
    alert(i); //5 5 5 5 5
  };
}
/* 闭包 */
var lis2 = document.getElementsByClassName('tap2');
for (var j = 0; j < lis2.length; j++) {
  (function (j) {
    lis2[j].onclick = function () {
      alert(j);
    };
  })(j);
}
/* 作用域 */
var lis3 = document.getElementsByClassName('tap3');

var _loop2 = function _loop2(k) {
  lis3[k].onclick = function () {
    alert(k);
  };
};

for (var k = 0; k < lis3.length; k++) {
  _loop2(k);
}

/* 解构赋值 */
/* 数组 */
var arg1 = 1,
    arg2 = 2,
    arg3 = 3;

console.log(arg1);
console.log(arg2);
console.log(arg3);

var arg21 = 1,
    _ref = [2, 3, 4],
    arg22 = _ref[0],
    arg23 = 5;

console.log(arg21);
console.log(arg22); //不完全解构
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
var _obj1$obj = {
  obj1: 111111,
  obj2: 222222
},
    obj1 = _obj1$obj.obj1,
    obj2 = _obj1$obj.obj2;

console.log(obj1); //111111
console.log(obj2); //222222

//不同名
var _obj3$obj = {
  obj3: 111111,
  obj4: 222222
},
    obja = _obj3$obj.obj3,
    objb = _obj3$obj.obj4;
/*console.log(obj3);//报错
console.log(obj4);//报错*/

console.log(obja); //111111
console.log(objb); //222222

/* 字符串 */

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    str1 = _hello2[0],
    str2 = _hello2[1],
    str3 = _hello2[2],
    str4 = _hello2[3],
    str5 = _hello2[4];

console.log(str1); //h
console.log(str2); //e
console.log(str3); //l
console.log(str4); //l
console.log(str5); //o

var _hello3 = 'hello',
    len = _hello3.length;

console.log(len); //5


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

var Animal = function () {
  function Animal() {
    _classCallCheck(this, Animal);

    this.type = 'animal';
  }

  _createClass(Animal, [{
    key: "says",
    value: function says(say) {
      console.log(this.type + ' says ' + say);
    }
  }]);

  return Animal;
}();

var animal = new Animal();
animal.says('hello');

var Cat = function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    _classCallCheck(this, Cat);

    var _this2 = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this));

    _this2.type = 'cat';
    return _this2;
  }

  return Cat;
}(Animal);

var cat = new Cat();
cat.says('hello');

var Hehe = function () {
  function Hehe() {
    _classCallCheck(this, Hehe);

    this.type = 'animal';
  }

  /*says(say){
   setTimeout(() => {
   console.log(this.type + 'says' + say)
   },1000)
   }*/


  _createClass(Hehe, [{
    key: "says",
    value: function says(say) {
      var _this = this;
      setTimeout(function () {
        console.log(_this.type + 'says:' + say);
      }, 1000);
    }
  }]);

  return Hehe;
}();

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

$('#box').append("\n  There are <h2>" + con1 + "<h2><h3>" + con2 + "<h3><p>" + con3 + "</p>\n");

/* 箭头函数 */
var a = 11111;
var aaa = function aaa(a) {
  return console.log('a---------' + a);
};
aaa(a); //11111

var cccc = 'ccc111';
var ccc = function ccc() {
  var cccc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ccc222';

  console.log("cccc-------------" + cccc);
};
ccc('ccc333'); //ccc333


function nums() {
  for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  console.log(types);
}
nums(1, 2, 3, 4);

/*var bbbb='cat'
 (bbbb)=>{console.log(bbbb)}
 */

var ee = 7;
var ff = 73;
console.log(Number(ee)); //7
console.log(Number(ff)); //73

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