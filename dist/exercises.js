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