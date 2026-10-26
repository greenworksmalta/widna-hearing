// Trial dark look: open any page with ?look=dark to switch it on, ?look=light to switch it off.
(function () {
  var q = location.search, dark = /[?&]look=dark/.test(q);
  try {
    if (dark) sessionStorage.setItem('look', 'dark');
    else if (/[?&]look=light/.test(q)) sessionStorage.removeItem('look');
    dark = sessionStorage.getItem('look') === 'dark';
  } catch (e) {}
  if (!dark) return;
  document.documentElement.classList.add('dark');
})();
