$(document).ready(function() {
	//Mah functions
	function is1col() {
		if (mql.matches) {
			$deets.show();
			$("#storyboard").find("a").removeClass("fancybox");
		} else {
			$deets.hide();
			$("#storyboard").find("a").addClass("fancybox").attr('rel', 'gallery');
			$("#storyboard").find(".fancybox").fancybox({
				beforeLoad: function() {
					var el = $(this.element).siblings(".deets");
					if (el.length) {
						this.title = el.html();
					}
				},
				scrolling: 'auto'
			});
		}
	}
	
	// Mah vars.
	var resizeTimeout;
	var mql = window.matchMedia("screen and (max-width:33.3125em)");
	var $deets = $("#storyboard").find(".deets");

	// Run this shit.
	is1col();

	//Things to recalc on window resize
	$(window).resize(function(){
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function(){
			is1col();
		}, 500);
	});
});