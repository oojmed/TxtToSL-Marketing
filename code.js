function navActive(element) {
  document.getElementById('nav-what').className = '';
  document.getElementById('nav-why').className = '';
  document.getElementById('nav-how').className = '';

  if (element) {
    element.className = 'active';
  }
}

function load() {
  document.body.onscroll = function (e) {
    if (this.scrollY > 800) {
      if (this.scrollY > 1350) {
        navActive(document.getElementById('nav-how'));
      } else {
        navActive(document.getElementById('nav-why'));
      }
    } else {
      if (this.scrollY > 250) {
        navActive(document.getElementById('nav-what'));
      } else {
        navActive(undefined);
      }
    }
  };
}