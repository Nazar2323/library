$(document).ready(function(){
    
        //SCROLL MENU
     var $menu = $(".scrollMenu");
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.css("display","none") ){
                $menu.css("display","block");
            } else if($(this).scrollTop() <= 100 && $menu.css("display","block") ) {
                $menu.css("display","none");
            }
        });//scroll menu
    
        //HEADER SLIDER
var p =[];
    p[0] = "images/library1.jpg";
    p[1] = "images/library2.jpg";
    p[2] = "images/library3.jpg";
    
    var text = [];
        text[1] = "<h2>CREATE YOUR OWN TUTOR PROFILE FOR FREE</h2><p>at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non</p>";
        text[2] = "<h2>THE WONDERFUL WORLD OF READING</h2><p>se et accumsan et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent clari</p>";
        text[3] = "<h2>CREATE YOUR FUTURE WITH US!</h2><p>et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insita</p>";
    
    var i = 0;
    
     $("#slider > div > div > ul > li > img").click(function(){
                          var a = $(this).attr("src");
                          $("header").css("background","url("+a+")"); 
                          i = parseInt(a.replace(/\D+/g,"")); //!!!! ПЕРЕРОБИТИ ПІД ІНДЕКС !!!!!

                          
         
         
         
                       });
    
function timeout() {
                   setTimeout(function () {
                       if(i >= p.length){
                          i = 0; 
                        }
                       
                      
                       
                        $("header").css("background","url("+p[i++]+")");
                       
                        $("#sliderText").append(text[i]);
                       timeout();
                   }, 5000);
                        setTimeout(function () {
                        $("h2").remove();
                        $("p").remove();
                        }, 10000);
               }
            timeout();
    
    
    
    
/*

  $("#slider > div > div > ul > li > img").click(function(){
                          var a = $(this).attr("src");
                          $("header").css("background","url("+a+")"); 
                          i = parseInt(a.replace(/\D+/g,""));

                       });

*/    
    
/*

    var i = 0;
    
function timeout() {
               setTimeout(function () {
                   if(i >= p.length){
                      i = 0; 
                    }
                    $("header").css("background","url("+p[i++]+")");
                   timeout();
               }, 5000);
               }
    
    timeout();
    

*/    
    
    
    
    
    
    
    
    
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
