$(document).ready(function() {
	
	// tabs

	function tab() {
       	$(".js-tab").each(function(){
         	var tab_link = $(this).find("a");
         	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         	tab_cont.hide();
         	$(this).parents(".js-tab-group").find(".js-tab1").show();
            	tab_link.bind("click", function() {
            	var index = $(this).attr("href");
            	tab_link.removeClass("is-active");
            	tab_link.parent().removeClass("is-active");
            	$(this).addClass("is-active");
            	$(this).parent().addClass("is-active");
            	tab_cont.hide();
            	$(this).parents(".js-tab-group").find("."+index).show();
            	return false;
            });
        });
    } 
    tab();

    // member popup toggle
    function member_popup(){
    	var popup = $(".team-member__popup");
    	var popup_close = $(".team-member__close");	
    	var popup_call = $(".team-member__img")
    	
    	popup.hide();

    	popup_call.click(function(event){
    		popup.hide();	
    		$(this).parent().find(popup).show();
    		event.stopPropagation();
    	});
    	popup_close.click(function(){
    		$(this).parent().hide();
    	});
    	popup.click(function(event){
    		event.stopPropagation();
    	});
    }
    member_popup();

    // request alert hide

    $(".request-form__close").click(function(){
    	$(this).parent().hide();
    });

    // nav scroll 
    function scroll_top() {

        var nav = $(".nav");
        var top = ($(".nav-wrap").offset().top);

        if ($(window).scrollTop() >= top) {
            nav.addClass('fixed');
        }
        else{
            nav.removeClass('fixed');
        } 
    }
    scroll_top();

    $(".nav__link a").click(function (){
        var page = $(this).attr("href");
    
        $('html, body').animate({
            scrollTop: $(page).offset().top - 35
        }, 500);
        return false;
    });

    // window scroll
    
    $(window).scroll(function(){
        scroll_top();
    });

    $(document).click(function(event){
		$(".team-member__popup").hide();
	});

});