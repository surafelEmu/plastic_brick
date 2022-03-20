window.onload = function () {
    
    window.onclick = function (event) {
        var path = event.path || (event.composedPath && event.composedPath());
        if(event.target.className == 'plus') {
            console.log('plus')

            path[3].classList.add('on')
        }else if(event.target.className == 'minus'){
            path[3].classList.remove('on') ;
        }
    }




}