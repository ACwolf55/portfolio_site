jQuery(document).ready(()=>{

    $(window).bind("scroll",function() {
        if($(window).scrollTop() > 120) {
            $(".doublearrows").fadeOut(20)
        } else {
            $(".doublearrows").show()
        }
    })

})

    
