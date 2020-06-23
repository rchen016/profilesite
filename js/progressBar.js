var progressed = false;
$(window).scroll(function(){
    function progressBarring(elem){
        var top_of_element = $(elem).offset().top;
        var bottom_of_element = $(elem).offset().top + $(elem).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();
        return (bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element);
    }
    if(progressBarring("#trio") && !progressed){
        setTimeout(function(){
            var top_of_element = $("#trio").offset().top;
            var bottom_of_element = $("#trio").offset().top + $("#trio").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
            var top_of_screen = $(window).scrollTop();
            if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                var setBar1 = setInterval(function(){
                    document.getElementById("pb1").style.width = Number(document.getElementById("pb1").style.width.split("%")[0])+1+"%";
                    if(document.getElementById("pb1").style.width.split("%")[0]>=42){
                        clearInterval(setBar1);
                        document.getElementById("pro1").style.visibility = "visible";
                        var setBar2 = setInterval(function(){
                            document.getElementById("pb2").style.width = Number(document.getElementById("pb2").style.width.split("%")[0])+1+"%";
                            if(document.getElementById("pb2").style.width.split("%")[0]>=50){
                                clearInterval(setBar2);
                                document.getElementById("pro2").style.visibility = "visible";
                                var setBar3 = setInterval(function(){
                                    document.getElementById("pb3").style.width = Number(document.getElementById("pb3").style.width.split("%")[0])+1+"%";
                                    if(document.getElementById("pb3").style.width.split("%")[0]>=83){
                                        clearInterval(setBar3);
                                        document.getElementById("pro3").style.visibility = "visible";
                                        var setBar4 = setInterval(function(){
                                            document.getElementById("pb4").style.width = Number(document.getElementById("pb4").style.width.split("%")[0])+1+"%";
                                            if(document.getElementById("pb4").style.width.split("%")[0]>=68){
                                                clearInterval(setBar4);
                                                document.getElementById("pro4").style.visibility = "visible";
                                                var setBar5 = setInterval(function(){
                                                    document.getElementById("pb5").style.width = Number(document.getElementById("pb5").style.width.split("%")[0])+1+"%";
                                                    if(document.getElementById("pb5").style.width.split("%")[0]>=40){
                                                        clearInterval(setBar5);
                                                        document.getElementById("pro5").style.visibility = "visible";
                                                        $(window).off('scroll.custom',scroll);
                                                    }
                                                },10);
                                            }
                                        },10);
                                    }
                                },10);
                            }
                        },10);
                    }
                },10);
            }

        },500);
        progressed = true;
    }
})
