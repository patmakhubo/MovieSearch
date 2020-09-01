const button = document.querySelector('#slide');
button.onclick = function () {
    const container = document.querySelector('.section');
    sideScroll(container,'right',25,100,10);
};

const back = document.querySelector('#slideBack');
back.onclick = function () {
    console.log('hefrgh');
    const container = document.querySelector('.section');
    sideScroll(container,'left',25,100,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}