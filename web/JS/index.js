$(function(){
    var a = 0;
    var i = 0;
    var sum_ = 0;
    var num = 5;

    function css_ (if_,src_,top_){
        if(if_){
            $('.win').delay(1300).fadeIn();
            $('.win-son img').attr('src',src_);
            $('.win-per').delay(1300).show().animate({'margin-top': top_})
        }
    }


    function hide_ (){
        $('.win').fadeOut();
        $('.win-per').animate({'margin-top': -100});
    }
    $('.coin').on('click',function(){
        if(a == 0 && num > 0){
            math_ = Math.floor(Math.random()*360 + 720);
            console.log(math_);
            num--
            set = setInterval(function(){
                if(i < math_){
                    i += 5
                    $('p[title] span').text(num);
                    $('.circle').css({'transform': 'rotate('+ i +'deg)'});
                    a = 1;
                }else{
                    i = 0;
                    clearInterval(set);
                    a = 0;
                }
            })
        }
        var b = math_ - 720;
        css_ (b < 22.5 || b > 337.5,'../image/30yuanhuafei.png',30);
        css_ (b > 22.5 && b < 67.5,'../image/300Mshengneiliuliang.png',30);
        css_ (b > 67.5 && b < 112.5,'../image/100Mshengneiliuliang.png',30);
        css_ (b > 112.5 && b < 157.5,'../image/500Mshengneiliuliang.png',30);
        css_ (b > 157.5 && b < 202.5,'../image/30yuanhuafei.png',30);
        css_ (b > 202.5 && b < 247.5,'../image/300Mshengneiliuliang.png',30);
        css_ (b > 247.5 && b < 292.5,'../image/100Mshengneiliuliang.png',30);
        css_ (b > 292.5 && b < 337.5,'../image/500Mshengneiliuliang.png',30);
    })

    $('.win-son span').on('click',function(){
        hide_()
    })

    $('.button').on('click',function(){
        hide_()
    })

    $('.btn-left').on('click',function(){
        $(this).attr('src','image/hdrk-but3.png');
    })

    $('.btn-right').on('click',function(){
        $(this).attr('src','image/hdrk-but4.png');
    })
})