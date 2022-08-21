'use strict';

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');

      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.slide');

  targets.forEach(target => {
    observer.observe(target);
  });

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('tar'));
}