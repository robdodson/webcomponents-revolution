(function () {
  var showPie = function showPie(e) {
    if (Boolean(e.fragment.getAttribute('data-pie'))) {
      var slide = Reveal.getCurrentSlide();
      var pie = document.createElement('chart-pie');
      slide.appendChild(pie);
      Reveal.removeEventListener('fragmentshown', showPie);
    }
  };

  Reveal.addEventListener('fragmentshown', showPie);
}());