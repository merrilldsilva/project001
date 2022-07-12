const btnh = document.querySelector('#btnham');
btnh.addEventListener('click',function(){
    console.log('click initiated');

    if(btnh.classList.contains('open')){

        btnh.classList.remove('open');
    }

    else{
        btnh.classList.add('open');
    }

});