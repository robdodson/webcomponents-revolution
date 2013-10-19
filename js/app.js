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
    root.innerHTML = '<em>I\'m inside yr div!</em>';
  };

  demos.styleEncapsulation = function styleEncapsulation() {
    var section = document.querySelector('#demo-style-encapsulation');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.styleEncapsulation();

  demos.doAuthorStyles = true;
  demos.applyAuthorStyles = function applyAuthorStyles() {
    var section = document.querySelector('#demo-applyAuthorStyles');
    var output = section.querySelector('#isAuthorStyles');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    util.emptyNode(root);
    this.doAuthorStyles = !this.doAuthorStyles;
    root.applyAuthorStyles = this.doAuthorStyles;
    output.textContent = this.doAuthorStyles;
    root.appendChild(template.content.cloneNode(true));
  };
  demos.applyAuthorStyles();

  demos.doResetStyles = true;
  demos.resetStyleInheritance = function resetStyleInheritance() {
    var section = document.querySelector('#demo-resetStyleInheritance');
    var output = section.querySelector('#isStyleInheritance');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    util.emptyNode(root);
    this.doResetStyles = !this.doResetStyles;
    root.resetStyleInheritance = this.doResetStyles;
    output.textContent = this.doResetStyles;
    root.appendChild(template.content.cloneNode(true));
  };
  demos.resetStyleInheritance();

  demos.parts = function parts() {
    var section = document.querySelector('#demo-parts');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.parts();

  demos.hostStyle = function hostStyle() {
    var section = document.querySelector('#demo-host');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget-borderless');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.hostStyle();

  demos.theming = function theming() {
    var section = document.querySelector('#demo-theming');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.theming();

  demos.customProps = function customProps() {
    var section = document.querySelector('#demo-custom-props');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.customProps();

  demos.insertionPoints = function insertionPoints() {
    var section = document.querySelector('#demo-insertion-points');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget .pokemon');
    host.classList.remove('hidden');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
    // var jigglypuff = section.querySelector('.jigglypuff');
    // setTimeout(function() {
    //   jigglypuff.classList.add('in');
    // }, 2000);
  };
  demos.insertionPoints();

  demos.select = function select() {
    var section = document.querySelector('#demo-select');
    var template = section.querySelector('template');
    var host = section.querySelector('.widget');
    var root = host.createShadowRoot();
    root.appendChild(template.content.cloneNode(true));
  };
  demos.select();

  // demos.retargetedEvents = function retargetedEvents() {
  //   var section = document.querySelector('#demo-retargeted-events');
  //   var clickable = section.querySelector('.clickable');
  //   var template = section.querySelector('template');
  //   var host = section.querySelector('.widget #host');
  //   var root = host.createShadowRoot();
  //   root.applyAuthorStyles = true;
  //   root.appendChild(template.content.cloneNode(true));

  //   var logElement = function(e) {
  //     alert('#' + e.target.id + ' clicked!');
  //   };

  //   clickable.addEventListener('click', logElement);
  // };
  // demos.retargetedEvents();

  // demos.basicImports = function() {
  //   var section = document.querySelector('#demo-basic-import');
  //   var link = document.querySelector('link[href="./imports/blog-post.html"]');
  //   var template = link.import.querySelector('#blog-post');
  //   var host = section.querySelector('.widget');
  //   host.appendChild(template.content.cloneNode(true));
  // };
  // demos.basicImports();

  window.demos = demos;

}(window.util));


(function () {
  
  document.addEventListener('keydown', function(e) {
    // Kill keyboard events on slides with text input
    if (e.target.getAttribute('data-disable-events')) {
      e.stopImmediatePropagation();
      return;
    }

    // Make all fragments visible
    if (e.keyCode === 74) { // j key
      var fragments = Reveal.getCurrentSlide().querySelectorAll('.fragment');
      Array.prototype.forEach.call(fragments, function(fragment) {
        fragment.classList.toggle('force-focus');
      });
    }

  }, true);

}());