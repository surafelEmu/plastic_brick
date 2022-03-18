window.onload = function () {
    
    window.onclick = function (event) {
        if(event.target.className == 'plus') {
            console.log('plus')

            event.path[3].classList.add('on')
        }else if(event.target.className == 'minus'){
            event.path[3].classList.remove('on') ;
        }
    }




}