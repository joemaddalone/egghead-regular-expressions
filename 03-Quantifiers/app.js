// https://jsbin.com/yexuju/edit?js,output

'use strict';

var str = `http://egghead.io
not a web address
http://
https://egghead.io more`;
var regex = /https?:\/\/.+/g

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
