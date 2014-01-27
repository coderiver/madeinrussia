$(document).ready(function() {
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
});