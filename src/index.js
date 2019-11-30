import _ from 'lodash';
import $ from 'jquery';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

$(() => {

  let a = $(`<a>`);
  console.log(a);
  a.text("Some jQuery Link");
  a.attr('href', "www.google.com");
  a.css({
    fontStyle: "italic",
    fontWeight: "bold",
  });

  $("body").append(a);

});
