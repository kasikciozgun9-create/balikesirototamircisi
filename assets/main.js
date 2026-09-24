document.getElementById('y').textContent = new Date().getFullYear();
const lb = document.getElementById('lb'), li = lb.querySelector('img');
document.querySelectorAll('.gal button').forEach(b => b.addEventListener('click', () => {
  const i = b.querySelector('img'); li.src = i.src; li.alt = i.alt; lb.classList.add('on');
}));
lb.addEventListener('click', e => { if (e.target !== li) lb.classList.remove('on'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });
(function(){
  var c = document.getElementById('cookie'); if (!c) return;
  var ok = false; try { ok = localStorage.getItem('cerez-onay') === '1'; } catch (e) {}
  if (!ok) c.hidden = false;
  document.getElementById('cookie-ok').addEventListener('click', function(){
    try { localStorage.setItem('cerez-onay', '1'); } catch (e) {}
    c.hidden = true;
  });
})();
