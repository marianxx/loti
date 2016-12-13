function init(){
    //adds maximize event on all browser badges
    var bs = document.getElementsByClassName('browserbadge');
    for(i = 0; i < bs.length; i++){
        bs[i].addEventListener('click', popupMax);
    }
}

function popupMin(){
    var p = document.getElementById('popup');
    p.style.animationName = 'minimize';
}

function popupMax(){
    var title = document.getElementById('browserTitle');
    var support = document.getElementById('browserSupport');
    var b = window.event.srcElement;

    switch (b.dataset.browser) {
        case 'sb':
            title.innerText = 'Samsung Internet';
            break;
        case 'ff':
            title.innerText = 'Mozilla Firefox';
            break;
        case 'e':
            title.innerText = 'Microsoft Edge';
            break;
        case 'c':
            title.innerText = 'Google Chrome';
            break;
        case 'o':
            title.innerText = 'Opera';
            break;
        case 's':
            title.innerText = 'Apple Safari';
            break;
    }
    
    var ss = document.getElementById('screenshot');
    var p = document.getElementById('popup');
    p.style.animationName = 'maximize';
}