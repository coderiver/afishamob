head.ready(function() {

	var btn_menu = $('.js-btn-menu'),
		btn_search = $('.js-btn-search'),
		btn_projects = $('.js-btn-projects'),
		menu = $('.js-menu'),
		menu_title = menu.find('.menu__title'),
		menu_list = menu.find('.menu__list'),
		search = $('.js-search'),
		search_select = search.find('.search__select'),
		projects = $('.js-projects'),
		projects_type = projects.find('.projects__type'),
		projects_list = projects.find('.projects__list'),
		projects_close = projects.find('.projects__close'),
		container = $('.js-container'),
		types = $('.js-types'),
		types_title = types.find('.types__title'),
		types_in = types.find('.types__in'),
		dp = $('.js-dp'),
		dp_el = dp.find('.dp__el'),
		dp_in = dp.find('.dp__in'),
		dp_close = dp.find('.dp__close'),
		btn_dp = $('.js-btn-dp'),
		text_toggle = $('.js-text-toggle'),
		slider = $('.js-slider'),
		body = $('body');

	// menu		
	btn_menu.on('click', function (event) {
		event.stopPropagation();
		// btn_menu.toggleClass('is-active');
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		// menu.toggleClass('is-open');
		// 
		if (btn_menu.hasClass('is-active')) {
			btn_menu.removeClass('is-active');
			menu.removeClass('is-open');
			container.removeClass('is-moved-menu');	
		}
		else {
			btn_menu.addClass('is-active');
			menu.addClass('is-open');	
			container.addClass('is-moved-menu');
		};
		if (!body.hasClass('no-scroll')) {
			var scroll_top = body.scrollTop();
			body.addClass('no-scroll');
			body.css('top', -scroll_top);
		}
		else {
			var pos_top = body.position().top,
					pos_top = -pos_top;
			body.css('top', 0);
			body.removeClass('no-scroll');
			body.scrollTop(pos_top);
		};
		return false;
	});
	$('.overlay').on('click', function () {
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		container.removeClass('is-moved-menu');
		menu.removeClass('is-open');
		btn_menu.removeClass('is-active');
	});
	// menu.on('click', function (event) {
	// 	event.stopPropagation();
	// });

	// projects		
	btn_projects.on('click', function () {
		btn_projects.toggleClass('is-active');
		menu.removeClass('is-open');
		container.removeClass('is-moved-menu');
		container.addClass('is-moved-projects');
		projects.toggleClass('is-open');
		// if ($('.js-btn-menu').hasClass('is-active')) {
		// 	$('.js-btn-menu').removeClass('is-active');
		// }
	});
	projects_close.on('click', function () {
		// btn_projects.trigger('click');
		projects.toggleClass('is-open');
		menu.addClass('is-open');
		// container.toggleClass('is-moved-projects');
	});

	// touch
	$('.touch body').swipe({
	  swipeLeft: function(event, direction, distance, duration, fingerCount) {
	  	menu.removeClass('is-open');
	  	projects.removeClass('is-open');
	  	container.removeClass('is-moved-menu is-moved-projects');
	  }
	});

	// orientationchange
	window.addEventListener('orientationchange', function() {
		$('.menu').removeClass('is-open');
		$('.projects').removeClass('is-open');
		btn_menu.removeClass('is-active');
		container.removeClass('is-moved-projects');
		container.removeClass('is-moved-menu');
	 }, false);

	// search
	btn_search.on('click', function () {
		btn_search.toggleClass('is-active');
		search.slideToggle();
		setTimeout(function () {
			types_item_size();
		}, 600);
		body.scrollTop(0);
	});

	// select
	search_select.on('change', function(){
		var option_selected = $(this).find('option:selected'),
	 	value_selected = option_selected.text();
	 	$(this).find('.search__select-head').text(value_selected);
	 	types_item_size();
	});

	// menu accordeon
	menu_title.on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).next().slideUp();
		}
		else {
			menu_title.removeClass('is-active');
			menu_list.slideUp();
			$(this).addClass('is-active');
			$(this).next().slideDown();
		}
	});

	// projects accordeon
	projects_type.on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).next().slideUp();
		}
		else {
			projects_type.removeClass('is-active');
			projects_list.slideUp();
			$(this).addClass('is-active');
			$(this).next().slideDown();
		}
	});

	// types
	function types_item_size () {
		if (types.length) {
			var types_item = types.find('.types__item'),
					types_top = types.offset().top,
					wnd_height = $(window).height();
			types_title.css('height', (wnd_height - types_top)/3);
		};
	}
	types_item_size();
	types_title.on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).next().slideUp();
		}
		else {
			types_title.removeClass('is-active');
			types_in.slideUp();
			$(this).addClass('is-active');
			$(this).next().slideDown();
		}
	});

	// datepicker
 	btn_dp.on('click', function () {
 		$.datepicker.regional['ru'] = { 
 			closeText: 'Закрыть', 
 			prevText: '&#x3c;Пред', 
 			nextText: 'След&#x3e;', 
 			currentText: 'Сегодня', 
 			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
 			monthNamesShort: ['января','февраля','марта','апреля','мая','июня', 'июля','августа','сентября','октября','ноября','декабря'], 
 			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
 			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
 			dayNamesMin: ['вс','пн','вт','ср','чт','пт','сб'], 
 			dateFormat: 'd MM yy', 
 			firstDay: 1, 
 			minDate: 0,
 			isRTL: false
 		}; 
 		$.datepicker.setDefaults($.datepicker.regional['ru']);
 		var this_btn = $(this),
 				top = body.scrollTop();
 		dp_el.datepicker({
 			dateFormat: 'd M',
 			onSelect: function(date) {
 				this_btn.text(date);
 				body.removeClass('no-scroll');
 				dp_in.slideUp(400, function () {
 					dp.hide();	
 				});
 			}
 		});
 		dp.css('top', top + 74);
 		dp.show();
 		dp_in.slideDown();
 	});
 	dp_close.on('click', function () {
 		dp_in.slideUp(400, function () {
 			dp.hide();	
 		});
 	});

 	// toggle text
 	text_toggle.on('click', function () {
 		var el = $(this).parent().prev();
		if (!el.hasClass('is-activated')) {
			cur_height = el.height();
			el.addClass('is-activated');
		};
		var	auto_height = el.css('height', 'auto').height(),
		    text_hide = $(this).data('text-hide'),
		    text_show = $(this).data('text-show');
 		if ($(this).hasClass('is-active')) {
 			$(this).removeClass('is-active');
 			$(this).find('span').text(text_show);
 			el.animate({height: cur_height}, 400);
 		}
 		else {
 			$(this).addClass('is-active');
 			$(this).find('span').text(text_hide);
 			el.height(cur_height).animate({height: auto_height}, 400);
 		}
 	});

 	// slider
 	if (slider.length) {
 		var slider_list = slider.find('.slider__list'),
 				slider_length = slider.find('.slider__item').length,
 				slider_all = slider.find('.slider__all'),
 				slider_current = slider.find('.slider__current');
 		slider_list.slick({
 			dots: false,
 			arrows: false,
 			infinite: true,
 			slidesToShow: 2,
 			slidesToScroll: 1,
			swipeToSlide: true,
			touchThreshold: 100,
 			slide: '.slider__item',
 			onInit: function() {
 				slider_all.text(slider_length);
 			},
 			onAfterChange: function(index) {
 			  var index = slider_list.slickCurrentSlide() + 1;
 			  slider_current.text(index);
 			}
 		});
 	};

 	// map
 	function map () {
 		var wnd_height = $(window).height(),
 				map = $('.js-map');
 		if (map.length) {
 			var map_in = map.find('.map__in'),
	 				map_in_height = map_in.height(),
	 				map_el = map.find('#map'),
	 				map_top = map.offset().top,
	 				map_btn_height = 60,
	 				map_height = wnd_height - map_top - map_btn_height,
	 				btn_map = map.find('.load button');
	 		map_el.height(map_height);
	 		btn_map.on('click', function () {
	 			var	text_hide = $(this).data('text-hide'),
	 			    text_show = $(this).data('text-show');
	 			if ($(this).hasClass('is-active')) {
	 				$(this).removeClass('is-active');
	 				$(this).find('span').text(text_show);
	 				map_in.animate({height: map_in_height}, 400);
	 			}
	 			else {
	 				$(this).addClass('is-active');
	 				$(this).find('span').text(text_hide);
	 				map_in.animate({height: map_height}, 400);
	 			}
	 		});
 		};
 	}
 	map();

 	// opera
 	if (navigator.userAgent.match(/Opera Mobi/i)) {
 		body.addClass('is-opera');
 	};
 	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
 	{
 	     body.addClass('is-ff');
 	     body.addClass('is-fox');
 	};
 	var ua = navigator.userAgent.toLowerCase();
 	if(navigator.userAgent.toLowerCase().indexOf("android") > -1)
 	{
 		body.addClass('is-ff');
 	};
});