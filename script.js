const carousel = document.querySelector('.carousel');
let index = 0;

function showNextImage() {
    const items = document.querySelectorAll('.carousel-item');
    items[index].style.display = 'none';
    index = (index + 1) % items.length;
    items[index].style.display = 'block';
}

setInterval(showNextImage, 3000);


document.querySelectorAll('.carousel-item').forEach((item, i) => {
    item.style.display = i === 0 ? 'block' : 'none';
});