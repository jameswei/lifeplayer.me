$(document).ready(function(){
    $(window).scroll(function(){
        $(this).scrollTop() > 100 ? $("#scrollup").fadeIn(100) : $("#scrollup").fadeOut(100);
    });
    $("#scrollup").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
