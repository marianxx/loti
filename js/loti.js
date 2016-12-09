function init(){
    //adds maximize event on all browser badges
    var bs = document.getElementsByClassName('browserbadge');
    for(i = 0; i < bs.length; i++){
        bs[i].addEventListener('click', popupMax);
    }
    //minimizes intial popup
    document.getElementById('popup').style.transform.scale(0,0);

}

function popupMin(){
    var p = document.getElementById('popup');
    p.style.animationName = 'minimize';
}

function popupMax(){
    var p = document.getElementById('popup');
    p.style.animationName = 'maximize';
}