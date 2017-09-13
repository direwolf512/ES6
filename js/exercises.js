/**
 * @fileOverview
 * @author jywang
 */


let title = 'exercises';
console.log("title--------------" + title)

console.log((function(x, f = () => x) {
  var x;
  var y = x;
  x = 2;
  return [x, y, f()];
})(1));

console.log((function() {
  return [
    (() => this.x).bind({ x: 'inner' })(),
    (() => this.x)()
  ]
}).call({ x: 'outer' }));

(function () {
  let x, { x: y = 1 } = { x };
  y;
  console.log(x, y);
})();

console.log(typeof (new (class { class () {} })));

console.log(typeof (new (class F extends (String, Array) { })).substring);

console.log([...[...'...']].length);

console.log(typeof `${{Object}}`.prototype);

(function () {
  let arr = [ ];
  for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) {
    arr.push(x, y);
  }
  console.log(arr)
})();
