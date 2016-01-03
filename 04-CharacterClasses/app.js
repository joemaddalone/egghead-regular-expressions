'use strict';


var str = `cat mat bat Hat ?at 0at`;
var regex = /[a-zA-Z0-9?]at/g


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
