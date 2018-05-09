$(function() {


    let $menu = $(".menu");
    let $pages = $(".page");
    let $menuLi = $menu.find("li").not(".to-home");
    let $toHome = $menu.find(".to-home");

    let currentPage = "";

    $toHome.on("click", function() {
        currentPage = "";
        TweenMax.to($pages, 0.5, {
            left: "-70%"
        });
        TweenLite.to($menuLi.filter(".active"), 0.5, {
            className: "-=active"
        });
    });

    $menuLi.on("click", function(event) {

        let $this = $(this);
        let thisHref = $this.find("a").attr("href");

        if (currentPage !== thisHref && $pages.filter(thisHref).length > 0) {
            currentPage = thisHref;
            TweenMax.to($pages, 0.5, {
                left: "-70%"
            });
            TweenMax.to($pages.filter(thisHref), 0.5, {
                left: 0
            });
            TweenLite.to($menuLi.filter(".active"), 0.5, {
                className: "-=active"
            });
            TweenLite.to($this, 0.5, {
                className: "+=active"
            });
        }

        event.preventDefault();
    });
});



//CLOCK



function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let mins = fullDate.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ":" + mins;
}

setInterval(clock,100);

// date



