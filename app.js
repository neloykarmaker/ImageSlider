var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 10){
        counter = 1;
    }
}, 1000);

// var audio = new Audio('Happy birthday song 1.mp3');
// audio.play();
