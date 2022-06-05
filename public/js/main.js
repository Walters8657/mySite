//Gets the current pages nav link and underlines it
currentLink = document.querySelectorAll('a[href="'+document.location.pathname+'"]');
currentLink.forEach(function(link) {
    link.className += ' navActivePage';
});
