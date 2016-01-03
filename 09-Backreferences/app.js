// https://jsbin.com/pixova/edit?js,console
'use strict';

var str = `<b>Bold</b><i>italics</i>`;
var regex = /<(\w+)>(.*)<\/\1>/g;

console.log(str.replace(regex, '$2\n'));

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
