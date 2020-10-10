define(["jquery","jquery-cookie"], function($){
    function body(){
        $(function(){
           $("#small").mouseenter(function(){
               $("#mark,#big").show();
           }).mouseleave(function(){
               $("#mark,#big").hide();
           }).mousemove(function(ev){
                var l = ev.clientX - $(this).offset().left - 100;
                var t = ev.clientY - $(this).offset().top - 100;
                //限制出界
                l = Math.max(0, l);
                l = Math.min(200, l);
                t = Math.max(0, t);
                t = Math.min(200, t);

                $("#mark").css({
                    left : l,
                    top : t,
                })
                $("#big img").css({
                    left : -2 * l,
                    top : -2 * t
                })
           }) 

           var smallImg = $("#small").find("ul");
           var midImg = $(".smallbox ol").find("li");
           var bigImg = $("#big").find("ul");
           var iNow = 0;
           $(midImg).mouseenter(function(){
                iNow = $(this).index();
                tab();
                console.log("111")
           })
           function tab(){
               smallImg.animate({
                   left : iNow * - 400,
               },20),
               bigImg.animate({
                left : iNow * - 800,
            },20)
           }
        })
    }
    return {
        body : body
    }
})