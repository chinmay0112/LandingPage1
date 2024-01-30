function toggleInfo(button) {
  var infoDiv = button.parentElement.nextElementSibling;
  button.classList.toggle('visible');
  infoDiv.classList.toggle('visible');
  button.textContent = button.textContent === '+' ? '-' : '+';
}