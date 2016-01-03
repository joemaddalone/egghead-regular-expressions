// https://jsbin.com/xucapaw/edit?js,console,output
'use strict';

var str = `800-456-7890
(555) 456-7890
4564567890`;

var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

console.log(str.replace(regex, 'area code: $1'))

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
