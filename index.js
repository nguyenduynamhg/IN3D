let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.left = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 1 + 'px';
})

//lightbox

const images = document.querySelectorAll('.image img');
images.forEach(item => item.addEventListener('click', handleZoomImage));
function handleZoomImage(event) {
    let image = event.target.getAttribute('src');
    var template = `<div class="lightbox">
                    <div class="lightbox-content">
                    <i class="fa fa-angle-left lightbox-prev"></i>

                        <img class="lightbox-image" src="${image}" alt="">
                        <i class="fa fa-angle-right lightbox-next"></i>

                    </div>
                </div>`;
    document.body.insertAdjacentHTML('beforeend', template);
}
let index = 0;
document.body.addEventListener("click", function (e) {
    const lightImage = document.querySelector('.lightbox-image');
    let lightSrc = "";
    if (e.target.matches('.lightbox')) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches('.lightbox-next')) {

        lightSrc = lightImage.getAttribute("src");
        console.log(lightSrc)
        index = [...images].findIndex((item) => item.getAttribute('src') === lightSrc);
        index = index + 1;
        if(index > images.length-1) index = 0;
        const newSrc = [...images][index].getAttribute('src');
        lightImage.setAttribute('src', newSrc);
    } else if (e.target.matches('.lightbox-prev')) {
        lightSrc = lightImage.getAttribute("src");
        console.log(lightSrc)
        index = [...images].findIndex((item) => item.getAttribute('src') === lightSrc);
        index = index - 1;
        if(index < 0) index = images.length-1;
        const newSrc = [...images][index].getAttribute('src');
        lightImage.setAttribute('src', newSrc);
    }

})
