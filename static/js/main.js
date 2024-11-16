var Main = function() {
	"use strict";
	var runManiNav = function() {
		//响应式导航--infinitypush.js
		function responsive() {
			if($(window).width() <= 767){
				console.log('mobile navigation');
				$('#mobile-navigation').infinitypush({
					offcanvasleft: false
				});
				$('body').addClass('mobile');
				$('body').removeClass('desktop');
				
			} else {
				console.log('desktop navigation');
				$('#mobile-navigation').infinitypush({
					destroy:true
				});
				$('body').removeClass('mobile');
				$('body').addClass('desktop');
			}
			
		}
		function windowResize(){
			$(window).resize(function(){
				responsive();
			});
		}
		responsive();
		windowResize();
		
		$(".radius-bg,.title-click").click(function(){
            $('.xuf-kuang').toggle();
		});
	};

	return {
		//main function to initiate template pages
		init : function() {
			runManiNav();
		}
	};
}();
jQuery(document).ready(function () {
	Main.init()
})