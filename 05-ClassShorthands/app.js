// https://jsbin.com/buqihu/edit?js,output
'use strict';

var str = `Aeiou $100 55.5%`;
var regex = /\S/g

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
