// Load the header from components/header.html
// and insert it into the element with id 'header-placeholder'
fetch('/src/components/header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
    });

// Load the footer from components/footer.html
// and insert it into the element with id 'footer-placeholder'
fetch('/src/components/footer.html')
    .then(response => response.text())
    .then(html => {
        const footer = document.getElementById('footer-placeholder')
        if(footer) {
            footer.innerHTML = html
        }
    });
