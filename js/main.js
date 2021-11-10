$(window).scroll( function () {
    if($(this).scrollTop () > 300)
    {
        $('#nav_sticky').addClass('sticky_nav')
        $('#back_top').css({
            'display': 'block'
        });
    }
    else
    {
        $('#nav_sticky').removeClass('sticky_nav')
        $('#back_top').css({
            'display': 'none'
        });
    }
});

$('.dropdown').click( function () {
    $('.dropdown-menu').toggleClass('slow')
    $(this).toggleClass("dropdown-tran")
})

$('.nav-mobile-button').click( function () {

    $(".button-show").toggleClass("nav-hide");

    $('.nav-mobile').fadeToggle('slow')
})


$('#back_top').click( function () {
    $('html').animate( {scrollTop: 0}, 5000)
})

var scroll_img = document.querySelector('.image-scroll');
$(window).scroll( function () {
    var scroll_test = 1000 - window.scrollY / 2.8;
    scroll_img.style.transform = `translateY(${scroll_test}px)`;
})

var test = document.querySelector('.image1_1');
$(window).scroll( function () {
    var scroll_test_1 = 450 - window.scrollY / 8;
    test.style.transform = `translateY(${scroll_test_1}px)`;
})

var test_1 = document.querySelector('.image1_scroll-1');
$(window).scroll( function () {
    var kiemtra = 2000 - window.scrollY / 2;
    test_1.style.transform = `translateY(${kiemtra}px)`;
})

var test_2 = document.querySelector('.image1_scroll-2');
$(window).scroll( function () {
    var kiemtra = 2000 - window.scrollY/ 2;
    test_2.style.transform = `translateY(${kiemtra}px)`;
})

var test_3 = document.querySelector('.image1_scroll-3');
$(window).scroll( function () {
    var kiemtra = 2000 - window.scrollY / 2;
    test_3.style.transform = `translateY(${kiemtra}px)`;
})

