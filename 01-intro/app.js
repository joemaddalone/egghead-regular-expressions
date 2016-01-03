// https://jsbin.com/wiguhu/edit?js,output

'use strict';

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str => `<span>${str}</span>`);
}

var str = `Is this This?`;

//var regex = new RegExp("is", "g");
var regex = /is/gi;

output(str, regex, document.querySelector('pre'))

// console.log(regex.test(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));
// console.log(regex.exec(str));

//console.log(str.match(regex));

//console.log(str.replace(regex, str => "XX"));

//console.log(str.search(regex));
