function clickContact(){
	let contactTelegramm = document.getElementById("contTelegramm");
	contactTelegramm.style.display = "block";
}
function clickTelegramm(){
	let contactTelegramm = document.getElementById("contTelegramm");
	contactTelegramm.style.display = "none";
}

function loginclick(){
	let contactlog = document.getElementById("logHide");
	contactlog.style.display = "block";
}


$(document).ready(function() {

	let element = $(".blackstr");
	let height_el = element.offset().top;
	let element_stop = $(".secondmain");
	let height_el_stop = element_stop.offset().top;
	
	$(".blackD").css({
		"width": element.outerWidth(),
		"height": element.outerHeight()
	});
	
	$(window).scroll(function() {
		
		if($(window).scrollTop() > height_el_stop - element.outerHeight() - 20) {
			
			element.css({
				"top": element.offset().top,
				"left": element.offset().left
			}).removeClass("fixed").addClass("absolute");
		
		} else {

			if($(window).scrollTop() > height_el) {
				
				element.addClass("fixed").removeClass("absolute").attr("style", "");
			
			} else {
				
				element.removeClass("fixed absolute").attr("style", "");
			
			}
			
		}

	});

});




$(document).ready(function() {

	let element = $(".blackar");
	let height_el = element.offset().top;
	let element_stop = $(".grdiv");
	let height_el_stop = element_stop.offset().top;
	
	$(".blackard").css({
		"width": element.outerWidth(),
		"height": element.outerHeight()
	});
	
	$(window).scroll(function() {
		
		if($(window).scrollTop() > height_el_stop - element.outerHeight() - 20) {
			
			element.css({
				"top": element.offset().top,
				"left": element.offset().left
			}).removeClass("fixedr").addClass("absoluter");
		
		} else {

			if($(window).scrollTop() > height_el) {
				
				element.addClass("fixedr").removeClass("absoluter").attr("style", "");
			
			} else {
				
				element.removeClass("fixedr absoluter").attr("style", "");
			
			}
			
		}

	});

});

