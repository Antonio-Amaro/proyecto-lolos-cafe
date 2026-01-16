// Carga el header desde el archivo components/header.html
// y lo inserta en el elemento con id 'header-placeholder'
fetch('./components/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
    });
