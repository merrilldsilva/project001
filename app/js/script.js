const btn = document.querySelector('#btnham');
btn.addEventListener('click',function(){
    console.log('click initiated');

    if(btn.classList.contains('open')){

        btn.classList.remove('open');
    }

    else{
        btn.classList.add('open');
    }

});