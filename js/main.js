(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.nav-header',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 2561
    })
})()