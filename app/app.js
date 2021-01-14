const h2Handle = document.querySelector('h2')
const incBtn = document.getElementById('inc')
const decBtn = document.getElementById('dec')
const resetBtn = document.getElementById('reset')



incBtn.addEventListener("click", function () {
    h2Handle.textContent = parseInt(h2Handle.innerHTML) + 1;
  });
decBtn.addEventListener("click", function () {
    h2Handle.textContent = parseInt(h2Handle.innerHTML) - 1;
  });
resetBtn.addEventListener("click", function () {
    h2Handle.textContent = 0;
  });