function includeMenu() {
  fetch('nav-bar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu-placeholder').innerHTML = data;
    });
}