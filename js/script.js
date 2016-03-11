$(document).ready(function () {

   $("main").load("ajax/home.html");

    //SCROLL MENU
    var $menu = $(".scrollMenu");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.css("display", "none")) {
            $menu.css("display", "block");
        } else if ($(this).scrollTop() <= 100 && $menu.css("display", "block")) {
            $menu.css("display", "none");
        }
    }); //scroll menu display

    //AJAX MENU

    var ajax = [];
    ajax[0] = "ajax/home.html";
    ajax[1] = "ajax/about.html";
    ajax[2] = "ajax/catalog.html";
    ajax[3] = "ajax/news.html";
    ajax[4] = "ajax/contacts.html";

    var s = 0;
    $(".menuMain").on('click', 'li', function () {
        s = $('.menuMain li').index(this);
        $.ajax({
            url: ajax[s],
            type: "GET",
            dataType: "html"
        }).done(function (data) {
            $("main").html(data)
        });
        $(".menuMain li").removeClass("active");
        $(this).addClass("active");
    });

    $(".menuScroll").on('click', 'li', function () {
        s = $('.menuScroll li').index(this);
        $.ajax({
            url: ajax[s],
            type: "GET",
            dataType: "html"
        }).done(function (data) {
            $("main").html(data)
        });
        $(".scrollMenu li").removeClass("active");
        $(this).addClass("active");
    });

    $(".select_menu").change(function () {
        s = $(".select_menu option:selected").index();
         $.ajax({
            url: ajax[s],
            type: "GET",
            dataType: "html"
        }).done(function (data) {
            $("main").html(data)
        });
    });

    //AJAX loginForm
    $("#signInMobile").click(function () {
        $("#signInMobile").toggleClass("toggle");
        if ($("#signInMobile").hasClass("toggle")) {
            $(".loginForm").load("ajax/login.html");
            //scrool to loginForm
            $('html, body').animate({
                scrollTop: $($(this)).offset().top
            }, 500);
        } else {
            $(".loginForm").empty();
        }
    });

    //HEADER SLIDER
    // масив з картинками
    var p = [];
    p[0] = "images/library1.jpg";
    p[1] = "images/library2.jpg";
    p[2] = "images/library3.jpg";

    //масив з текстом
    var text = [];
    text[0] = "<h2>CREATE YOUR OWN TUTOR PROFILE FOR FREE</h2><p>at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non</p>";
    text[1] = "<h2>THE WONDERFUL WORLD OF READING</h2><p>se et accumsan et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent clari</p>";
    text[2] = "<h2>CREATE YOUR FUTURE WITH US!</h2><p>et iusto odio dignissim qui blandit praesent luptaum zzelenit augue duis dolore te feugait nulla facilisi. Typi non habent claritatem insita</p>";

    //Slider Buttons

    var i = 0;
    $(".siderPict").on('click', 'li', function () {
        var i = $('.siderPict li').index(this);
        $("header").css("background", "url(" + p[i] + ")");

        $("#sliderText").empty();

        $("#sliderText").append(text[i]);
    });

    // змінює картинку в хедері і текст

    function timeout() {
        setTimeout(function () {
            if (i >= p.length) {
                i = 0;
            }
            $("header").css("background", "url(" + p[i] + ")");
            $("#sliderText").append(text[i]);
            i++;
            timeout();
        }, 3000);

        setTimeout(function () {
            $("#sliderText").empty();
        }, 6000);
    }
    timeout();
    
});