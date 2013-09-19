(function (window, document, undefined) {

  document.addEventListener('keyup', function(e) {
    if (e.keyCode === 74) { // j key
      var fragments = Reveal.getCurrentSlide().querySelectorAll('.fragment');
      Array.prototype.forEach.call(fragments, function(fragment) {
        fragment.classList.toggle('force-focus');
      });
    }
  });

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

  window.demos = demos;

}(window, document));