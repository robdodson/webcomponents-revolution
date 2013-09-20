(function (window, document, undefined) {

  util = {};

  util.emptyNode = function emptyNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  window.util = util;

}(window, document));


(function (util) {

  // <chart-pie> demo
  var showPie = function showPie(e) {
    if (Boolean(e.fragment.getAttribute('data-pie'))) {
      var slide = Reveal.getCurrentSlide();
      var pie = document.createElement('chart-pie');
      slide.appendChild(pie);
      Reveal.removeEventListener('fragmentshown', showPie);
    }
  };

  Reveal.addEventListener('fragmentshown', showPie);


  var demos = {};

  demos.template = function template() {
    var section = Reveal.getCurrentSlide();
    var template = section.querySelector('#my-widget');
    template.content.querySelector('img').src = 'http://localhost:3000/img/corgi.gif';
    section.appendChild(template.content.cloneNode(true));
  };

  demos.shadowRoot = function shadowRoot() {
    var section = Reveal.getCurrentSlide();
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    root.textContent = 'Im inside yr div!';
  };

  demos.styleEncapsulation = function styleEncapsulation() {
    var section = document.querySelector('#demo-style-encapsulation');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget div');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.styleEncapsulation();

  demos.doResetStyles = true;
  demos.resetStyleInheritance = function resetStyleInheritance() {
    var section = document.querySelector('#demo-resetStyleInheritance');
    var output = section.querySelector('#isStyleInheritance');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget div');
    var root = host.createShadowRoot();
    util.emptyNode(root);
    this.doResetStyles = !this.doResetStyles;
    root.resetStyleInheritance = this.doResetStyles;
    output.textContent = this.doResetStyles;
    root.appendChild(template.content.cloneNode(true));
  };
  demos.resetStyleInheritance();

  demos.doAuthorStyles = true;
  demos.applyAuthorStyles = function applyAuthorStyles() {
    var section = document.querySelector('#demo-applyAuthorStyles');
    var output = section.querySelector('#isAuthorStyles');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget div');
    var root = host.createShadowRoot();
    util.emptyNode(root);
    this.doAuthorStyles = !this.doAuthorStyles;
    root.applyAuthorStyles = this.doAuthorStyles;
    output.textContent = this.doAuthorStyles;
    root.appendChild(template.content.cloneNode(true));
  };
  demos.applyAuthorStyles();

  demos.parts = function parts() {
    var section = document.querySelector('#demo-parts');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget .blog-post');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.parts();

  window.demos = demos;

}(window.util));


(function () {
  
  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 74) { // j key
      var fragments = Reveal.getCurrentSlide().querySelectorAll('.fragment');
      Array.prototype.forEach.call(fragments, function(fragment) {
        fragment.classList.toggle('force-focus');
      });
    }
  });

}());