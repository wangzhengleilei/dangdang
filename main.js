console.log("加载成功");

//head location
$(function(){
    var Spana = $(".div1").find("a");
    Spana.mouseenter(function(){
        $(".location").css("display", "block")
    })

    Spana.mouseleave(function(){
        $(".location").css("display", "none")
    })

    //banner mydangdang
    var Lia = $(".banner2").find("ul .my")
    Lia.mouseenter(function(){
        $(".mydangdang").css("display", "block")
    })
    Lia.mouseleave(function(){
        $(".mydangdang").css("display", "none")
    })

    //shop
    var Shop = $(".banner2").find("ul .shop")
    Shop.mouseenter(function(){
        $(".shopping").css("display", "block")
    })
    Shop.mouseleave(function(){
        $(".shopping").css("display", "none")
    })

    //purchase
    var Purchase = $(".banner2").find("ul .purchase")
    Purchase.mouseenter(function(){
        $(".purchasebox").css("display", "block")
    })
    Purchase.mouseleave(function(){
        $(".purchasebox").css("display", "none")
    })


    
    //servise
    var Servise = $(".banner2").find("ul .servise")
    Servise.mouseenter(function(){
        $(".servisebox").css("display", "block")
    })
    Servise.mouseleave(function(){
        $(".servisebox").css("display", "none")
    })
})

//bodybox1
$(function(){
    var Cl2 = $(".bodybox1").find(".cl2")
    var Art2 = $(".bodybox1").find(".cl2 article");
    Cl2.mouseenter(function(){
        Art2.css("display", "block");
    })
    Cl2.mouseleave(function(){
        Art2.css("display", "none");
    });

    var Cl3 = $(".bodybox1").find(".cl3")
    var Art3 = $(".bodybox1").find(".cl3 article");
    Cl3.mouseenter(function(){
        Art3.css("display", "block");
    })
    Cl3.mouseleave(function(){
        Art3.css("display", "none");
    });

    var Cl4 = $(".bodybox1").find(".cl4")
    var Art4 = $(".bodybox1").find(".cl4 article");
    Cl4.mouseenter(function(){
        Art4.css("display", "block");
    })
    Cl4.mouseleave(function(){
        Art4.css("display", "none");
    });

    var Cl5 = $(".bodybox1").find(".cl5")
    var Art5 = $(".bodybox1").find(".cl5 article");
    Cl5.mouseenter(function(){
        Art5.css("display", "block");
    })
    Cl5.mouseleave(function(){
        Art5.css("display", "none");
    })
    var Cl6 = $(".bodybox1").find(".cl6")
    var Art6 = $(".bodybox1").find(".cl6 article");
    Cl6.mouseenter(function(){
        Art6.css("display", "block");
    })
    Cl6.mouseleave(function(){
        Art6.css("display", "none");
    })
    var Cl7 = $(".bodybox1").find(".cl7")
    var Art7 = $(".bodybox1").find(".cl7 article");
    Cl7.mouseenter(function(){
        Art7.css("display", "block");
    })
    Cl7.mouseleave(function(){
        Art7.css("display", "none");
    })
    var Cl8 = $(".bodybox1").find(".cl8")
    var Art8 = $(".bodybox1").find(".cl8 article");
    Cl8.mouseenter(function(){
        Art8.css("display", "block");
    })
    Cl8.mouseleave(function(){
        Art8.css("display", "none");
    })
    var Cl9 = $(".bodybox1").find(".cl9")
    var Art9 = $(".bodybox1").find(".cl9 article");
    Cl9.mouseenter(function(){
        Art9.css("display", "block");
    })
    Cl9.mouseleave(function(){
        Art9.css("display", "none");
    })
    var Cl10 = $(".bodybox1").find(".cl10")
    var Art10 = $(".bodybox1").find(".cl10 article");
    Cl10.mouseenter(function(){
        Art10.css("display", "block");
    })
    Cl10.mouseleave(function(){
        Art10.css("display", "none");
    })
    var Cl11 = $(".bodybox1").find(".cl11")
    var Art11 = $(".bodybox1").find(".cl11 article");
    Cl11.mouseenter(function(){
        Art11.css("display", "block");
    })
    Cl11.mouseleave(function(){
        Art11.css("display", "none");
    })
    var Cl12 = $(".bodybox1").find(".cl12")
    var Art12 = $(".bodybox1").find(".cl12 article");
    Cl12.mouseenter(function(){
        Art12.css("display", "block");
    })
    Cl12.mouseleave(function(){
        Art12.css("display", "none");
    })
    var Cl13 = $(".bodybox1").find(".cl13")
    var Art13 = $(".bodybox1").find(".cl13 article");
    Cl13.mouseenter(function(){
        Art13.css("display", "block");
    })
    Cl13.mouseleave(function(){
        Art13.css("display", "none");
    })
    var Cl14 = $(".bodybox1").find(".cl14")
    var Art14 = $(".bodybox1").find(".cl14 article");
    Cl14.mouseenter(function(){
        Art14.css("display", "block");
    })
    Cl14.mouseleave(function(){
        Art14.css("display", "none");
    })
    var Cl15 = $(".bodybox1").find(".cl15")
    var Art15 = $(".bodybox1").find(".cl15 article");
    Cl15.mouseenter(function(){
        Art15.css("display", "block");
    })
    Cl15.mouseleave(function(){
        Art15.css("display", "none");
    })
    var Cl16 = $(".bodybox1").find(".cl16")
    var Art16 = $(".bodybox1").find(".cl16 article");
    Cl16.mouseenter(function(){
        Art16.css("display", "block");
    })
    Cl16.mouseleave(function(){
        Art16.css("display", "none");
    })
})

// bodybox2banner1
$(function(){
    var oBtns = $(".box2top").find("ol li");
    var oUl = $(".box2top").find("ul");
    var iNow = 0;
    var timer = null;
    $(".box2top").mouseenter(function(){
        clearInterval(timer);
    })
    $(".box2top").mouseleave(function(){
        timer = setInterval(function(){
            iNow++
            tab();               
        },2000)
    })

    oBtns.mouseenter(function(){
        iNow = $(this).index() + 1;
        tab();
    })

    timer = setInterval(function(){
        iNow++;
        tab();
    },2000)

        function tab(){
        oBtns.removeClass("active").eq(iNow - 1).addClass("active");
        if(iNow == oBtns.size()){
            oBtns.eq(9).addClass("active");
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
})

// bodybox2banner2
$(function(){
    var oBtns = $(".ban").find("ol li");
    var oUl = $(".ban").find("ul");
    var iNow = 0;
    var timer = null;
    $(".leftRight a:eq(0)").click(function(){
        iNow--;
        tab();
        return false;
    })
    $(".leftRight a:eq(1)").click(function(){
        iNow++;
        tab();
        return false;
    })

    oBtns.mouseenter(function(){
        iNow = $(this).index();
        tab();
    })
        function tab(){
        oBtns.removeClass("active").eq(iNow).addClass("active");
        if(iNow == oBtns.size()){
            oBtns.eq(0).addClass("active");
        }
    
        oUl.animate({
            left: iNow * -238,
        },
        500,
        function(){
            if(iNow >= oBtns.size()){
                iNow = 0;
                oUl.css("left", 0);
            }else if(iNow <= 0){
                iNow = 5;
                oUl.css("left", iNow * -238);
            }
        })
    }

    $.ajax({
        url: "../data/data1.json",
        success: function(arr){
            var str2 = ``;
            var str = ``;
            for(var i = 0; i < arr.length; i++){
                
                for(var j = 0; j < arr[i].childs.length; j++){
                   
                    str += `
                        <div class="banner3box_box">
                            <div>
                                <img src="${arr[i].childs[j].img}" alt="">
                                <p>${arr[i].childs[j].bookname}</p>
                            </div>
                            <div class="price">
                                <p>$${arr[i].childs[j].writer}</p>
                                <span>${arr[i].childs[j].price1}</span>
                                <span>${arr[i].childs[j].price2}</span>
                            </div>
                        </div>
                        `
                }
                str2 += `<li>${str}</li>`
                str = ``;
               
            }
            var node = $(str2);
                node.appendTo($(".banner3box ul"));             
        },
        error:function(msg){
            console.log(msg)
        }
    })


})

//bodybox3banner3
$(function(){
    var oBtns = $(".banner3box").find("ol li");
    var oUl = $(".banner3box").find("ul");
    var iNow = 0;
    $(".leftright a:eq(0)").click(function(){
        iNow--;
        tab();
        return false;
    })
    $(".leftright a:eq(1)").click(function(){
        iNow++;
        tab();
        console.log(iNow)
        return false;
    })

    oBtns.mouseenter(function(){
            iNow = $(this).index();
            tab();

    })
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
            }else if(iNow == 0){
                iNow = 4;
                oUl.css("left", iNow * -750);
            }
            
        })
    }

})

//rankinglistbox2
$(function(){
    var Lis = $(".rankinglistbox").find(".rankinglistbox1 li");
    var Ranks = $(".rankinglistbox").find(".rankinglistbox2");
    Lis.mouseenter(function(){
        Lis.attr("class", "");
        Ranks.css("display", "none").eq($(this).index()).css("display", "block");
        $(this).attr("class", "list");
    })
    


})

// release
//release1
$(function(){    
    $.ajax({
        url : "../data/data2.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="http://10.30.163.130/dangdang/dist/details.html">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_book1").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })
    //数据
    $.ajax({
        url : "../data/data3.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box2").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })

    $.ajax({
        url : "../data/data4.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box3").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data5.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box4").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data6.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box5").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data7.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box6").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data8.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box7").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data9.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box8").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data10.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box9").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data11.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box10").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data12.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom1 #goods_box11").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })



    var menuLis1 = $(".menu").find("ul li");
    var goodsLis1 = $(".leftbottom1").find(".goodsbox");

    menuLis1.mouseenter(function(){
        menuLis1.attr("class", "");
        goodsLis1.css("display", "none").eq($(this).index()).css("display", "block");
        $(this).attr("class", "active3")
    });

    var Lis = $(".release1box").find(".release1box1 li");
    var Rele1 = $(".release1box").find(".release1box2");
    Lis.mouseenter(function(){
        Lis.attr("class", "");
        Rele1.css("display", "none").eq($(this).index()).css("display", "block");
        $(this).attr("class", "list");
    })

})

//release2
$(function(){
    var menuLis2 = $(".menu2").find("ul li");
    var goodsLis2 = $(".leftbottom2").find(".goodsbox2");

    menuLis2.mouseenter(function(){
        menuLis2.attr("class", "");
        goodsLis2.css("display", "none").eq($(this).index()).css("display", "block");
        $(this).attr("class", "active3")
    });

    var LIs = $(".release2box").find(".release2box1 li");
    var Rele2 = $(".release2box").find(".release2box2");
    LIs.mouseenter(function(){
        LIs.attr("class", "");
        Rele2.css("display", "none").eq($(this).index()).css("display", "block");
        $(this).attr("class", "list");
    })
    //数据
    $.ajax({
        url : "../data/data2.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_book1").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })

    $.ajax({
        url : "../data/data3.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box2").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })

    $.ajax({
        url : "../data/data4.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box3").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data5.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box4").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data6.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box5").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data7.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box6").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data8.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box7").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data9.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box8").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data10.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box9").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data11.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box10").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })


    $.ajax({
        url : "../data/data12.json",
        success : function(arr){
            var str = ``;
                for(var i = 0; i < arr.length; i++){
                    str +=`<li class="goodsbox1_box">
                    <div>
                       <a href="#">
                            <img src="${arr[i].img}" alt="">
                            <p class="act">${arr[i].bookname}</p>
                       </a>
                    </div>
                    <div class="price">
                        <p>${arr[i].writer}</p>
                        <span>${arr[i].price1}</span>
                        <span>${arr[i].price2}</span>
                    </div>
                </li>`
                }
                $(".leftbottom2 #goods2_box11").html(`<ul>${str}</ul>`);
        },error : function(msg){
            console.log(msg);
        }
    })
})