/* Accessible shared navigation and honest local-preview form behavior. */
document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.site-nav .nav-item'));
  const closeAll = except => items.forEach(item => {
    if (item !== except) item.querySelector('.nav-link')?.setAttribute('aria-expanded', 'false');
  });
  items.forEach(item => {
    const button = item.querySelector('button.nav-link');
    if (!button) return;
    item.addEventListener('mouseenter', () => {
      if (window.matchMedia('(hover: hover)').matches) {
        closeAll(item);
        button.setAttribute('aria-expanded', 'true');
      }
    });
    item.addEventListener('mouseleave', () => {
      if (!item.contains(document.activeElement)) button.setAttribute('aria-expanded', 'false');
    });
    button.addEventListener('click', event => {
      const open = event.detail > 0 || button.getAttribute('aria-expanded') !== 'true';
      closeAll(item);
      button.setAttribute('aria-expanded', String(open));
    });
    item.addEventListener('focusout', event => {
      if (!item.contains(event.relatedTarget)) button.setAttribute('aria-expanded', 'false');
    });
    item.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        button.setAttribute('aria-expanded', 'false');
        button.focus();
      }
      if (event.key === 'ArrowDown' && event.target === button) {
        event.preventDefault();
        closeAll(item);
        button.setAttribute('aria-expanded', 'true');
        item.querySelector('.nav-dropdown a')?.focus();
      }
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-item')) closeAll();
  });

  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    const sync = () => {
      const open = mobileMenu.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', sync);
    mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', sync));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        sync();
        toggle.focus();
      }
    });
  }

  document.querySelectorAll('form[data-preview-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const note = document.getElementById('preview-form-status');
      if (note) {
        note.hidden = false;
        note.textContent = 'This is a website preview. Your message has not been sent. Use the current Envoy contact page to reach the team.';
        note.focus();
      }
    });
  });
});
