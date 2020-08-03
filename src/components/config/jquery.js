const $ = require('jquery/dist/jquery.min.js')

$(window).scroll(function () {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        const y = $(this).scrollTop()
        if (y > 50) {
            $('#header').addClass('headersmart')
            $('.lateral').addClass('lateralup')
            
        } else {
            $('#header').removeClass('headersmart')
            $('.lateral').removeClass('lateralup')
            
        }
    }
    else {
        const y = $(this).scrollTop()
        if (y > 50) {
            $('#header').addClass('headerscroll').removeClass('header')
            setTimeout(function () {
                $('#header').addClass('headerscrollact')
            }, 500)
        } else {
            $('#header').removeClass('headerscroll').addClass('header')
            setTimeout(function () {
                $('#header').removeClass('headerscrollact')
            })
        }
    }

})