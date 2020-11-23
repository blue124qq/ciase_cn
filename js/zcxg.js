// JavaScript Document\

    var oTop = $(".menuzj").offset().top;	
    var sTop = 0;
	

	
	
    $(window).scroll(function () {
        sTop = $(this).scrollTop();
		
		var gTop = $(".centerl").height();	
		var mainTop = $(".centert").height();
		var ming=mainTop-gTop-10;	
		var oBottomTop=$(".friendly-link").offset().top;
		
        if (sTop >= oTop) {
		     if(sTop>=oBottomTop-gTop-90&&ming>0)
		     {
		         $(".menuzj").css({ "position": "absolute", "top":ming  });
		     }			 
		     else
			 {
				 $(".menuzj").css({ "position": "fixed", "top": "0" });
			 }
                 
				 
        } else {
            //$(".menuzj").css({ "position": "static" });
		
		 $(".menuzj").css({ "position": "static" });
        }
    });

