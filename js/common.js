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
			link_anchor = $('.js-link-anchor'),
			dp = $('.js-dp'),
			dp_close = dp.find('.dp__close'),
			btn_dp = $('.js-btn-dp'),
			text_toggle = $('.js-text-toggle'),
			slider = $('.js-slider'),
			body = $('body');

	// menu		
	btn_menu.on('click', function () {
		btn_menu.toggleClass('is-active');
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		container.toggleClass('is-moved-menu');
		menu.toggleClass('is-open');
	});

	// projects		
	btn_projects.on('click', function () {
		btn_projects.toggleClass('is-active');
		menu.removeClass('is-open');
		container.removeClass('is-moved-menu');
		container.toggleClass('is-moved-projects');
		projects.toggleClass('is-open');
	});
	projects_close.on('click', function () {
		btn_projects.trigger('click');
	});

	// search
	btn_search.on('click', function () {
		btn_search.toggleClass('is-active');
		search.slideToggle();
		setTimeout(function () {
			types_item_size();
		}, 600);
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

	// body.on('scroll touchmove mousewheel', function(e){
	//   if (menu.hasClass('is-open')) {
	//   	e.preventDefault();
	//   	e.stopPropagation();
	//   	return false;
	//   };
	// });

	// anchor
	link_anchor.on('click', function () {
		var id = $(this).attr('href'),
				id_top = $(id).offset().top,
				header_height = 74,
				pos_top = id_top - header_height;
		container.animate({scrollTop : pos_top}, 400);
		return false;
	});

	// datepicker
 	btn_dp.on('click', function () {
 		$.datepicker.regional['ru'] = { 
 			closeText: 'Закрыть', 
 			prevText: '&#x3c;Пред', 
 			nextText: 'След&#x3e;', 
 			currentText: 'Сегодня', 
 			monthNames: ['января','февраля','марта','апреля','мая','июня', 
 			'июля','августа','сентября','октября','ноября','декабря'], 
 			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
 			'Июл','Авг','Сен','Окт','Ноя','Дек'], 
 			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
 			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
 			dayNamesMin: ['вс','пн','вт','ср','чт','пт','сб'], 
 			dateFormat: 'dd MM yy', 
 			firstDay: 1, 
 			minDate: 0,
 			isRTL: false
 		}; 
 		$.datepicker.setDefaults($.datepicker.regional['ru']);
 		var this_btn = $(this);
 		dp.datepicker({
 			onSelect: function(date) {
 				this_btn.text(date);
 				dp.slideUp();
 			}
 		});
 		dp.slideDown();
 	});
 	dp_close.on('click', function () {
 		dp.slideUp();
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
 		slider.slick({
 			dots: false,
 			arrows: false,
 			infinite: false,
 			slidesToShow: 2,
 			slidesToScroll: 1,
 			slide: '.slider__item'
 		});
 	};

});