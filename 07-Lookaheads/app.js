// https://jsbin.com/pasogu/edit?js,output
'use strict';

var str = `foo
foobar
foobaz
fooboo`

var regex = /foo(?!bar|boo)/g

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
