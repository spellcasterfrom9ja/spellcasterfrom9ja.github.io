var i = 0;
var images = [];
var time = 2000;

images[0] = 'banner1.png';
images[1] = 'banner2.png';

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