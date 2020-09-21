$('.nav-header a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav-header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});

$('.mapasite ul li a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav-header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});

$('.btn-fixed-home').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav-header').innerHeight();

    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 900);
});