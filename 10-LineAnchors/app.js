// https://jsbin.com/lucava/edit?js,output
'use strict';

var str = `12/1/16
12-16-13
11/12/16
12-12-2016`;
var regex = /^12.+16$/gm;

console.log(regex.exec(str))

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
