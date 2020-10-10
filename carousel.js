function tab(){
    oBtns.removeClass("active").eq(iNow).addClass("active");
    if(iNow == oBtns.size()){
        oBtns.eq(0).addClass("active");
    }

    oUl.animate({
        left: iNow * -750,
    },
    500,
    function(){
        if(iNow == oBtns.size()){
            iNow = 0;
            oUl.css("left", 0);
        }
    })
}