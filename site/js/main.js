/* TOTAL HEALTHCARE CLINIC — main.js
   Vanilla JS: nav, scroll reveal, count-up, FAQ, form
*/

(function(){
  'use strict';

  /* ---------- NAV: scrolled state ---------- */
  const nav = document.querySelector('.nav');
  function onScroll(){
    if(!nav) return;
    if(window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- NAV: mobile drawer ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  const body   = document.body;

  function setOpen(open){
    if(!toggle || !links) return;
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
    body.classList.toggle('no-scroll', open);
  }
  if(toggle){
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });
  }
  if(links){
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setOpen(false));
    });
  }
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', () => {
    if(window.innerWidth > 720) setOpen(false);
  });

  /* ---------- REVEAL on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => io.observe(el));

    // Mid-tier fallback: anything within 2× viewport gets revealed at 600ms
    setTimeout(() => {
      const vh = window.innerHeight * 2;
      revealEls.forEach(el => {
        const r = el.getBoundingClientRect();
        if(r.top < vh) el.classList.add('in');
      });
    }, 600);
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // Final safety net: 3s force-reveal everything regardless
  setTimeout(() => {
    revealEls.forEach(el => el.classList.add('in'));
  }, 3000);

  /* ---------- COUNT-UP numbers ---------- */
  const counters = document.querySelectorAll('[data-count]');

  function settle(el){
    const target = Number(el.dataset.count);
    el.textContent = target.toLocaleString();
    el.dataset.done = '1';
  }

  function animateCount(el){
    const target = Number(el.dataset.count);
    if(isNaN(target)){ el.dataset.done = '1'; return; }
    const duration = 1600;
    const start = performance.now();
    function tick(now){
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = val.toLocaleString();
      if(t < 1 && !el.dataset.done) requestAnimationFrame(tick);
      else { el.textContent = target.toLocaleString(); el.dataset.done = '1'; }
    }
    requestAnimationFrame(tick);
  }

  if('IntersectionObserver' in window){
    const cio = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !entry.target.dataset.done){
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(el => cio.observe(el));
  } else {
    counters.forEach(settle);
  }
  // Settle fallback
  setTimeout(() => {
    counters.forEach(el => { if(!el.dataset.done) settle(el); });
  }, 2000);

  /* ---------- FAQ: only one open at a time ---------- */
  const details = document.querySelectorAll('.faq-item');
  details.forEach(d => {
    d.addEventListener('toggle', () => {
      if(d.open){
        details.forEach(other => { if(other !== d) other.open = false; });
      }
    });
  });

  /* ---------- FORM stub ---------- */
  const form = document.querySelector('#booking-form');
  if(form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const original = btn.innerHTML;
      btn.innerHTML = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '✓ Thanks — we\'ll call you back shortly';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4000);
      }, 900);
    });
  }
})();
