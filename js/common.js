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

});