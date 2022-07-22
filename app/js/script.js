const btn = document.querySelector('#btnham');
const over = document.querySelector('#over');
btn.addEventListener('click',function(){
    console.log('click initiated');
    
    if(btn.classList.contains('open')){

        btn.classList.remove('open');
        over.classList.remove('overlay');
    }

    else{
        btn.classList.add('open');
        over.classList.add('overlay');
    }

});