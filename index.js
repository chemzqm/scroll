var raf = require('raf');
var Tween = require('tween');

function Scroll(el, opts) {
  if (!(this instanceof Scroll)) return new Scroll(el, opts);
  opts = opts || {};
  this.el = el;
  this.ease = opts.ease || 'out-circ';
  this.duration = opts.duration || 1000;
}

Scroll.prototype.left = function (n) {
  this._left = n;
  return this;
}

Scroll.prototype.top = function (n) {
  this._top = n;
  return this;
}

Scroll.prototype.end = function (cb) {
  var o = {};
  var el = this.el;
  var l = (typeof this._left !== 'undefined');
  var t = (typeof this._top !== 'undefined');
  if (l) o.left = el.scrollLeft;
  if (t) o.top = el.scrollTop;
  var des = { left: this._left, top: this._top };
  var tween = Tween(o)
    .ease(this.ease)
    .to(des)
    .duration(this.duration);

  tween.update(function(o){
    if (l) el.scrollLeft = o.left;
    if (t) el.scrollTop = o.top;
  });

  tween.on('end', function(){
    animate = function(){};
    if (cb) cb();
  });

  function animate() {
    raf(animate);
    tween.update();
  }

  animate();
}

module.exports = Scroll;
