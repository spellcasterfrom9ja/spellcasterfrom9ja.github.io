var i = 0;
var images = [];
var time = 2000;

images[0] = 'IMG-20221223-WA0008.jpg';
images[1] = 'IMG-20221223-WA0011.jpg';
images[2] = 'IMG-20221223-WA0021.jpg';
images[3] = 'IMG-20221223-WA0026.jpg';
images[4] = 'IMG-20221223-WA0027.jpg';

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;