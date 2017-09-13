'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview
 * @author jywang
 */

var title = 'exercises';
console.log("title--------------" + title);

console.log(function (x) {
  var f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return x;
  };

  var x;
  var y = x;
  x = 2;
  return [x, y, f()];
}(1));

console.log(function () {
  var _this = this;

  return [function () {
    return _this.x;
  }.bind({ x: 'inner' })(), function () {
    return _this.x;
  }()];
}.call({ x: 'outer' }));

(function () {
  var x = void 0,
      _x2 = { x: x },
      _x2$x = _x2.x,
      y = _x2$x === undefined ? 1 : _x2$x;
  y;
  console.log(x, y);
})();

console.log(_typeof(new (function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, [{
    key: 'class',
    value: function _class() {}
  }]);

  return _class;
}())()));

console.log(_typeof(new (function (_ref) {
  _inherits(F, _ref);

  function F() {
    _classCallCheck(this, F);

    return _possibleConstructorReturn(this, (F.__proto__ || Object.getPrototypeOf(F)).apply(this, arguments));
  }

  return F;
}((String, Array)))().substring));

console.log([].concat(_toConsumableArray('...')).concat().length);

console.log(_typeof(('' + { Object: Object }).prototype));

(function () {
  var arr = [];
  var _arr = [{ x: 1 }, 2, { y: y }];
  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _arr[_i],
        _arr$_i$x = _arr$_i.x,
        _x3 = _arr$_i$x === undefined ? 2 : _arr$_i$x,
        y = _arr$_i.y;

    arr.push(_x3, y);
  }
  console.log(arr);
})();
/**
 * @fileOverview
 * @author jywang
 */
'use strict';

var title = '忽略文件';

//# sourceMappingURL=ignore-compiled.js.map
/**
 * @fileOverview
 * @author jywang
 */

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var title = 'index';
console.log("title--------------" + title);

var a = 11111111111;
(function (a) {
  console.log("a-------------" + a);
})();

var name = 'asdffg';
while (true) {
  var _name = '对方水电费';
  console.log("name-------------" + _name);
  break;
}

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

var lis1 = document.getElementsByClassName('tap1');
for (var i = 0; i < lis1.length; i++) {
  lis1[i].onclick = function () {
    console.log(i); //5 5 5 5 5
  };
}

var lis2 = document.getElementsByClassName('tap2');
for (var j = 0; j < lis2.length; j++) {
  (function (j) {
    lis2[j].onclick = function () {
      console.log(j);
    };
  })(j);
}

//var btn=document.getElementsByTagName('button')[0]
var btn = document.getElementById('btn');
var btn1 = document.getElementsByTagName('button');
var btn2 = document.getElementsByClassName('btnC');
console.log(btn);
console.log(btn1[0]);
console.log(btn2[0]);
btn.onclick = function () {
  alert(1111);
};

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

var cccc = 11111111111;
var ccc = function ccc() {
  var cccc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1111;

  console.log("cccc-------------" + cccc);
};
ccc(222222);

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
"use strict";

/**
 * @fileOverview
 * @author jywang
 */
(function () {
  var title = 'in test';
  console.log("title--------------" + title);
})();
/**
 * @fileOverview
 * @author jywang
 */
'use strict';

var a = 'aaaaaaa';
var b = 'bbbbb';

//# sourceMappingURL=test-compiled.js.map
/**
 * @fileOverview
 * @author jywang
 */
'use strict';

var title = 'test';
console.log("title--------------" + title);
