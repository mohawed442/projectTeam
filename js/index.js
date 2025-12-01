
// أضفت مثال بسيط لتنبيه عند الضغط على زر "Buy Now".

document.addEventListener('click', function(e){
  if (e.target && e.target.classList.contains('action-btn')) {
    const card = e.target.closest('.card');
    const location = card.querySelector('.location').innerText;
    alert('تم اختيار: ' + location);
  }
});