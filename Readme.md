# Scroll

High performance scroll to component with easy to use API.

## Install

    component install chemzqm/scroll

## Example

``` js
var scroll = require('scroll');
var btn = document.querySelector('.btn');
var scrollable = document.querySelector('.scrollable');

btn.addEventListener('touchend', function() {
  scroll(scrollable, {
      ease: 'linear',
      duration: 1000
    })
    .top(100)
    .left(100)
    .end(function() {
    })
});
```

## API

### Scroll(el, [opts])

`el` is the scrollable element.
`opts` contains the options for the animation, which include:

* `ease` the ease function to use, default to `out-circ`, list could be found at <https://github.com/component/ease>

* `duration` animation duration in millisecond, default `1000`.

### .top(number)

optional scrollTop in pixes.

### .left(number)

optional scrollLeft in pixes.

### .end([callback])

Optional animation callback function, must be called to start animation.
