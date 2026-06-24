 document.querySelectorAll('[data-target]').forEach(function (el) {
    el.addEventListener('click', function () {
      var target = document.getElementById(el.getAttribute('data-target'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Highlight the active nav button based on scroll position
  var navButtons = document.querySelectorAll('.nav-btn');
  var sections = Array.from(navButtons).map(function (btn) {
    return document.getElementById(btn.getAttribute('data-target'));
  });

  function setActiveNav() {
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec && sec.getBoundingClientRect().top <= 120) current = sec;
    });
    navButtons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-target') === (current && current.id));
    });
  }

  window.addEventListener('scroll', setActiveNav);
  setActiveNav();
