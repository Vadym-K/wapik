$(function(){
	$(".btn_menu").on('click', function(){
		var $this = $(this).parents(".nav");

		if($this.hasClass("open")){
			$this.removeClass("open");
		} else {
			$this.addClass('open');
		}
	});
	 $(".wrapper").on('click', function(event) {
		if(!$(event.target).closest('.nav ul, .btn_menu').length) {
			if($(".nav").hasClass('open')) {
				$(".nav").removeClass('open');
			}
		}
	});
});