function move() {
    let carousel = document.getElementById("myCarousel");
    let firstIndex = parseInt(carousel.dataset.first);
    if (firstIndex < carousel.children.length) {
        carousel.children[firstIndex].style.order = 1;
        carousel.dataset.first = (firstIndex + 1).toString();
    } else {
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].style.order = 0;
        }
        carousel.children[0].style.order = 1;
        carousel.dataset.first = "1";
    }
}

function back() {
    let carousel = document.getElementById("myCarousel");
    let firstIndex = parseInt(carousel.dataset.first);
    if (firstIndex > 0) {
        carousel.children[firstIndex - 1].style.order = 0;
        carousel.dataset.first = (firstIndex - 1).toString();
    } else {
       for (let i = 0; i < carousel.children.length - 1; i++) {
           carousel.children[i].style.order = 1;
       }
       carousel.children[carousel.children.length - 1].style.order = 0;
       carousel.dataset.first = (carousel.children.length - 1).toString();
    }
}