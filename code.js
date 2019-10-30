var navElements = undefined;
var sectionElements = undefined;
var header = undefined;

function getNavElements() {
  var idRegex = /^nav-/;
  var out = [];

  var allElements = document.getElementsByTagName('a');
  for (var i = 0; i < allElements.length; i++) {
    if (idRegex.test(allElements[i].id)) {
      out.push(allElements[i]);
    }
  }

  return out;
}

function getSectionElements() {
  var out = [];

  for (var i = 0; i < navElements.length; i++) {
    out.push(document.getElementById(navElements[i].id.replace('nav-', '')));
  }

  return out;
}

function navActive(element) {
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].className = '';
  }

  if (element) {
    element.className = 'active';
  }
}

function load() {
  navElements = getNavElements();
  sectionElements = getSectionElements();
  header = document.getElementsByClassName('header')[0];

  document.body.onscroll = function (e) {
    for (var i = 0; i < sectionElements.length; i++) {
      var offset = header.offsetHeight + 80;

      var currentLimit = sectionElements[i].offsetTop - offset;
      var nextLimit = sectionElements[i + 1] ? sectionElements[i + 1].offsetTop - offset : 9999;

      if (window.scrollY > currentLimit && window.scrollY < nextLimit) {
        navActive(navElements[i]);

        break;
      } else {
        if (window.scrollY < currentLimit) {
          navActive(undefined);

          break;
        }
      }
    }
  };
}