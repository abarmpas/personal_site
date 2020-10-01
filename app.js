const header = document.querySelector('.header.container');

document.addEventListener('scroll', function() {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#fff";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
})
