// https://jsbin.com/zageza/edit?js,output
'use strict';

var str = `This history is his, it is`;
var regex = /\Bis\B/g

/**
 * @param  String str
 * @param  RegExp regex
 * @param  HTMLElement target
 */
const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str =>
      `<span>${str}</span>`
    );
}
output(str, regex, document.querySelector('pre'));
