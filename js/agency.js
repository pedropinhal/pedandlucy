(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"],[href="#carouselControl"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Countdown

    /* ======= Countdown ========= */
    // set the date we're counting down to
    var target_date = new Date("April 7, 2018").getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag elementq
    var countdown = document.getElementById("countdown-box");
    var days_span = document.createElement("li");
    days_span.className = 'list-inline-item';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("li");
    hours_span.className = 'list-inline-item';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("li");
    minutes_span.className = 'list-inline-item';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("li");
    secs_span.className = 'list-inline-item';
    countdown.appendChild(secs_span);

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // format countdown string + set tag value.
        days_span.innerHTML = '<h2>' + days + '</h2><h3>Days</h3>';
        hours_span.innerHTML = '<h2>' + hours + '</h2><h3>Hrs</h3>';
        minutes_span.innerHTML = '<h2>' + minutes + '</h2><h3>Mins</h3>';
        secs_span.innerHTML = '<h2>' + seconds + '</h2><h3>Secs</h3>';


        //countdown.innerHTML = days + "d, " + hours + "h, "
        // + minutes + "m, " + seconds + "s";  

    }, 1000);


})(jQuery); // End of use strict