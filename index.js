jQuery(document).ready(()=>{

    $(window).bind('scroll',function() {
        if($(window).scrollTop() > 100) {
            $('.doublearrows').fadeOut(500)
        } else {
            $('.doublearrows').show()
        }
    })

})

    
