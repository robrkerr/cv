if (Modernizr.csstransforms3d) {
	$(".cv_full").each(function() {
		var shift = $(this).outerHeight()*0.5;
		$(this).css({'-webkit-transform': 'rotateX(90deg) translateZ(' + shift + 'px) translateY(-' + shift + 'px) rotateY(180deg) rotateZ(180deg)'});
		$(this).css({'transform': 'rotateX(90deg) translateZ(' + shift + 'px) translateY(-' + shift + 'px) rotateY(180deg) rotateZ(180deg)'});
	});
	$(".cv_basic").each(function() {
			var shift = $(this).outerHeight()*0.5;
			$(this).parent(".cv_item").css({'-webkit-transform-origin': '0px ' + shift + 'px -' + shift + 'px'});
			$(this).parent(".cv_item").css({'-transform-origin': '0px ' + shift + 'px -' + shift + 'px'});
		});
	$("#expand_all").parent(".button_area").parent(".full_width_container").css({'height': 100});
	$(".cv_item").each(function() {
		var new_height = $(this).find(".cv_basic").outerHeight();
		$(this).parent(".cv_item_area").parent(".full_width_container").css({'height': new_height});
		$(this).bind('transitionend', function() {
			$(this).removeClass('transitioning');
		});
		$(this).bind('webkitTransitionEnd', function() {
			$(this).removeClass('transitioning');
		});
	});
	$(window).resize(function() {
		$(".cv_full").each(function() {
			var shift = $(this).outerHeight()*0.5;
			$(this).css({'-webkit-transform': 'rotateX(90deg) translateZ(' + shift + 'px) translateY(-' + shift + 'px) rotateY(180deg) rotateZ(180deg)'});
			$(this).css({'transform': 'rotateX(90deg) translateZ(' + shift + 'px) translateY(-' + shift + 'px) rotateY(180deg) rotateZ(180deg)'});
		});
		$(".cv_basic").each(function() {
			var shift = $(this).outerHeight()*0.5;
			$(this).parent(".cv_item").css({'-webkit-transform-origin': '0px ' + shift + 'px -' + shift + 'px'});
			$(this).parent(".cv_item").css({'-transform-origin': '0px ' + shift + 'px -' + shift + 'px'});
		});
		$(".cv_item").each(function() {
			var new_height;
			if ($(this).hasClass("basic_showing")) {
				new_height = $(this).find(".cv_basic").outerHeight();
			} else {
				new_height = $(this).find(".cv_full").outerHeight();
			}
			$(this).parent(".cv_item_area").parent(".full_width_container").css({'height': new_height});
		});
	});
	$(document).ready(function() {
		if (!Modernizr.touch) {
			$(".cv_basic .heading").hover(function() {
				var cv_item = $(this).parent(".cv_basic").parent(".cv_item");
				cv_item.addClass('hovering');
				if (cv_item.hasClass('button')) {
					$(".cv_item").each(function() {
						$(this).addClass('hovering');
					});
				}
			}, function() {
				var cv_item = $(this).parent(".cv_basic").parent(".cv_item");
				cv_item.removeClass('hovering');
				if (cv_item.hasClass('button')) {
					$(".cv_item").each(function() {
						$(this).removeClass('hovering');
					});
				}
			});
			$(".cv_full .heading").hover(function() {
				var cv_item = $(this).parent(".cv_full").parent(".cv_item");
				cv_item.addClass('hovering');
				if (cv_item.hasClass('button')) {
					$(".cv_item").each(function() {
						if ($(this).hasClass("full_showing")) {
							$(this).addClass('hovering');
						}
					});
				}
			}, function() {
				var cv_item = $(this).parent(".cv_full").parent(".cv_item");
				cv_item.removeClass('hovering');
				if (cv_item.hasClass('button')) {
					$(".cv_item").each(function() {
						$(this).removeClass('hovering');
					});
				}
			});
		}
		$(".cv_basic .heading").click(function(event) {
			var cv_item = $(this).parent(".cv_basic").parent(".cv_item");
			cv_item.toggleClass('basic_showing full_showing');
			cv_item.addClass('transitioning');
			var new_height = cv_item.find(".cv_full").outerHeight();
			cv_item.parent(".cv_item_area").parent(".full_width_container").css({'height': new_height});
			if (cv_item.hasClass("button")) {
				$(".cv_item").each(function() {
					if ($(this).hasClass('basic_showing')) {
						$(this).removeClass('basic_showing');
						$(this).addClass('full_showing');
						$(this).addClass('transitioning');
					}
					var new_height = $(this).find(".cv_full").outerHeight();
					$(this).parent(".cv_item_area").parent(".full_width_container").css({'height': new_height});
				});
			}
			if ($("#expand_all").hasClass('basic_showing')) {
				$("#expand_all").removeClass('basic_showing');
				$("#expand_all").addClass('full_showing');
				$("#expand_all").addClass('transitioning');	
			}
		});
		$(".cv_full .heading").click(function(event) {
			if ($(event.target).is("a")) return;
			var cv_item = $(this).parent(".cv_full").parent(".cv_item");
			cv_item.toggleClass('basic_showing full_showing');
			cv_item.addClass('transitioning');
			var new_height = cv_item.find(".cv_basic").outerHeight();
			cv_item.parent(".cv_item_area").parent(".full_width_container").css({'height': new_height});
			if (cv_item.hasClass("button")) {
				$(".cv_item").each(function() {
					if ($(this).hasClass('full_showing')) {
						$(this).removeClass('full_showing');
						$(this).addClass('basic_showing');
						$(this).addClass('transitioning');
					}
					var new_height = $(this).find(".cv_basic").outerHeight();
					$(this).parent(".cv_item_area").parent(".full_width_container").css({'height': new_height});
				});
			} else if ($('.cv_item.full_showing').length == 1) {
				if ($("#expand_all").hasClass('full_showing')) {
					$("#expand_all").removeClass('full_showing');
					$("#expand_all").addClass('basic_showing');	
					$("#expand_all").addClass('transitioning');
				}
			}
		});
	});	
} else {
	
}
