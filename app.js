var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 6){
        counter = 1;
    }
}, 5000);

var audio = new Audio('Happy birthday song 1.mp3');
audio.play();