// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('wpcf7mailsent', function( event ) {
		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById("thanks"),
			type: 'inline'
		}])

		if(event.detail.contactFormId == '173') {
	    	ym(91687085,'reachGoal','container')
	    }

	    if(event.detail.contactFormId == '171') {
	    	ym(91687085,'reachGoal','modal')
	    }

	    if(event.detail.contactFormId == '304') {
	     	ym(91687085,'reachGoal','whatsapp')
	    }

	    if(event.detail.contactFormId == '172') {
	     	ym(91687085,'reachGoal','footer')
	    }
    }, false );

	$('#city_modal .quike_links .btn').click(function(e) {
		Fancybox.close()
		let phone = $(this).data("phone");
		let text = $(this).text();
		$("header .phone a").prop("href", "tel:"+phone);
		$("header .phone a").text(phone);
		$("header .city .btn span").text(text);
	});

	// Локации
	let locations = document.querySelector('.locations .images .swiper')

	if (locations) {
		new Swiper('.locations .images .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			/*autoplay: {
				delay: 6000,
				disableOnInteraction: false
			},*/
			on: {
				beforeTransitionStart: swiper => {
					!swiper.realIndex
						? $(swiper.$el).find('.swiper-pagination-bullet').removeClass('passed')
						: $(swiper.$el).find('.swiper-pagination-bullet:nth-child(-n+'+ swiper.realIndex +')').addClass('passed')
				}
			}
		})
	}


	// Вопросы
	const fewQuestionsSliders = [],
		fewQuestions = document.querySelectorAll('.few_questions .swiper')

	fewQuestions.forEach(function (el, i) {
		el.classList.add('few_questions_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				beforeTransitionStart: swiper => {
					!swiper.realIndex
						? $(swiper.$el).find('.swiper-pagination-bullet').removeClass('passed')
						: $(swiper.$el).find('.swiper-pagination-bullet:nth-child(-n+'+ swiper.realIndex +')').addClass('passed')
				}
			}
		}

		fewQuestionsSliders.push(new Swiper('.few_questions_s' + i, options))
	})


	// Наша команда
	const teamSliders = [],
		team = document.querySelectorAll('.team .swiper')

	team.forEach(function (el, i) {
		el.classList.add('team_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 28,
					slidesPerView: 'auto'
				}
			},
			on: {
				beforeTransitionStart: swiper => {
					!swiper.realIndex
						? $(swiper.$el).find('.swiper-pagination-bullet').removeClass('passed')
						: $(swiper.$el).find('.swiper-pagination-bullet:nth-child(-n+'+ swiper.realIndex +')').addClass('passed')
				}
			}
		}

		teamSliders.push(new Swiper('.team_s' + i, options))
	})


	// Решения
	const solutionsSliders = [],
		solutions = document.querySelectorAll('.solutions .swiper')

	solutions.forEach(function (el, i) {
		el.classList.add('solutions_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			/*autoplay: {
				delay: 6000,
				disableOnInteraction: false
			},*/
			on: {
				beforeTransitionStart: swiper => {
					!swiper.realIndex
						? $(swiper.$el).find('.swiper-pagination-bullet').removeClass('passed')
						: $(swiper.$el).find('.swiper-pagination-bullet:nth-child(-n+'+ swiper.realIndex +')').addClass('passed')
				}
			}
		}

		solutionsSliders.push(new Swiper('.solutions_s' + i, options))
	})

	$('.solutions .prev_next .btn.prev').click(function(e) {
		e.preventDefault()

		const $parent = $(this).closest('.tabs_container'),
			$activeBtn = $parent.find('.tabs:first .btn.active').prev('.btn').length ? $parent.find('.tabs:first .btn.active').prev() : $parent.find('.tabs:first .btn:nth-child('+ ($parent.find('.tabs:first .btn').length) +')'),
			activeTab = $activeBtn.data('content'),
			$activeTabContent = $(activeTab),
			level = $activeBtn.data('level')

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeBtn.addClass('active')
		$activeTabContent.addClass('active')

		$parent.find('.roller').css({
			width: $parent.find('.tabs:first .btn.active').outerWidth(),
			left: $parent.find('.tabs:first .btn.active').position().left + parseFloat($parent.find('.tabs:first .btn.active').css('margin-left'))
		})
	})

	$('.solutions .prev_next .btn.next').click(function(e) {
		e.preventDefault()

		const $parent = $(this).closest('.tabs_container'),
			$activeBtn = $parent.find('.btn.active').next('.btn').length ? $parent.find('.btn.active').next('.btn') : $parent.find('.btn:first'),
			activeTab = $activeBtn.data('content'),
			$activeTabContent = $(activeTab),
			level = $activeBtn.data('level')

			console.log($activeBtn)

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeBtn.addClass('active')
		$activeTabContent.addClass('active')

		$parent.find('.roller').css({
			width: $parent.find('.tabs:first .btn.active').outerWidth(),
			left: $parent.find('.tabs:first .btn.active').position().left + parseFloat($parent.find('.tabs:first .btn.active').css('margin-left'))
		})
	})


	// Товары
	const productImagesSliders = [],
		productImages = document.querySelectorAll('.product .images .big .swiper')

	productImages.forEach(function (el, i) {
		el.classList.add('product_images_s' + i)

		let options = {
			loop: false,
			speed: 500,
			nested: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.images-swiper-button-next',
				prevEl: '.images-swiper-button-prev'
			},
			autoplay: {
			    enabled: false,
			},
			breakpoints: {
			    320: {
				    pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					},
					/*autoplay: {
						enabled: true,
						delay: 6000,
						disableOnInteraction: false
					},*/
			    },
			    767: {
			        pagination: false,
			        autoplay: false
			    }
		    },

			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				beforeTransitionStart: swiper => {
					!swiper.realIndex
						? $(swiper.$el).find('.swiper-pagination-bullet').removeClass('passed')
						: $(swiper.$el).find('.swiper-pagination-bullet:nth-child(-n+'+ swiper.realIndex +')').addClass('passed')
				},
				init: swiper => {
					$(swiper.$el).closest('.images').find('.thumbs .btn').attr('data-slider-index', i)
				},
				slideChange: swiper => {
					setTimeout(() => {
						$(swiper.$el).closest('.images').find('.thumbs .btn').removeClass('active')
						$(swiper.$el).closest('.images').find('.thumbs .btn').eq(swiper.activeIndex).addClass('active')
					})
				}
			}
		}

		productImagesSliders.push(new Swiper('.product_images_s' + i, options))


		$('.products .product .images .thumbs .btn').click(function (e) {
			e.preventDefault()

			productImagesSliders[$(this).data('slider-index')].slideTo($(this).data('slide-index'), 500)
		})
	})


	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper.main')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			threshold: 50,
			navigation: {
				nextEl: '.products-swiper-button-next',
				prevEl: '.products-swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 24,
			slidesPerView: 1
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Отзывы
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 28,
					slidesPerView: 'auto'
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Отзывы
	const turnkeySliders = [],
		turnkey = document.querySelectorAll('.turnkey .swiper')

	turnkey.forEach(function (el, i) {
		el.classList.add('turnkey_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 16,
			slidesPerView: 1
		}

		turnkeySliders.push(new Swiper('.turnkey_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Выбор города из выпад списка
	$('.locations .city .mini_modal .btn').click(function(e) {
		e.preventDefault()

		let text = $(this).find('span').text(),
			parent = $(this).closest('.locations')

		$(this).closest('.mini_modal').find('.btn').removeClass('selected')
		$(this).addClass('selected').closest('.city').find('> .btn span').text(text)

		console.log($(this).index() + 1);

		parent.find('.data .item .val').hide()
		parent.find('.data .item .val' + ($(this).index() + 1)).fadeIn(300)

		parent.find('.swiper').hide()
		parent.find('.swiper' + ($(this).index() + 1)).fadeIn(300)

		parent.find('.map').hide()
		parent.find('.map' + ($(this).index() + 1)).fadeIn(300)

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Табы
	var locationHash = window.location.hash

	$('.tabs .roller').each(function() {
		let parent = $(this).closest('.tabs')

		$(this).css({
			width: parent.find('.btn.active').outerWidth(),
			left: parent.find('.btn.active').position().left
		})
	})

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				  activeTab = $(this).data('content'),
				  $activeTabContent = $(activeTab),
				  level = $(this).data('level')

			$parent.find('.tabs:first .btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')

			$parent.find('.roller').css({
				width: $parent.find('.tabs:first .btn.active').outerWidth(),
				left: $parent.find('.tabs:first .btn.active').position().left + parseFloat($parent.find('.tabs:first .btn.active').css('margin-left'))
			})
		}
	})

	$('body').on('click', '.mob_tabs .mini_modal .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.mob_tabs .mini_modal .btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')

			$parent.find('.mob_tabs > .btn span').text($(this).text())

			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			  $activeTabContent = $(locationHash),
			  $parent = $activeTab.closest('.tabs_container'),
			  level = $activeTab.data('level')

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header').toggleClass('show')
	})


	// Кнопка 'Вверх'
	$('.buttonUp .btn').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Фокус при клике на название поля
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Выбор файла
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label .path').innerText = el.value)
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Закрываем под. меню при клике за её пределами
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Как мы будем работать
	/*let currentStep = 2

	const InitInterval = () => {
		interval = setInterval(() => {
			if(currentStep == ($('.steps .tabs .btn').length + 1)) {
				currentStep = 1
			}

			const $parent = $('.steps'),
				  activeTab = '#steps_tab' + currentStep,
				  $activeTabContent = $(activeTab)

			$parent.find('.tabs .btn').removeClass('active')
			$parent.find('.tab_content').removeClass('active')

			$('.steps .tabs .btn[data-content="'+ activeTab +'"]').addClass('active')
			$activeTabContent.addClass('active')

			currentStep++
		}, 5000)
	}*/

	//InitInterval()


	$('.steps .tabs .btn').click(function(e) {
		e.preventDefault()

		//InitInterval()

		//clearInterval(interval)

		currentStep = $(this).index()

		currentStep = currentStep + 1

		//InitInterval()
	})


	// Дополнительная комплектация
	$('.products .product .additional_equipment .label').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').closest('.additional_equipment').find('.hide').slideToggle(300)
	})


	// Видео
	initVideosSliders()

	// Варианты
	initVariantsSliders()

	// Какие-то гарантии?
	initWhatGuaranteesSliders()


	// Проекты - Лайк
	$('.projects .project .like_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Проекты - Фильтр
	$('.projects .filter .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Страница проектв
	if ($('.project_info .images').length) {
		const projectSlider = new Swiper('.project_info .images .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			on: {
				slideChange: swiper => {
					setTimeout(() => {
						$('.project_info .images .thumbs .btn').removeClass('active')
						$('.project_info .images .thumbs .btn').eq(swiper.activeIndex).addClass('active')
					})
				}
			}
		})

		$('.project_info .images .thumbs .btn').click(function (e) {
			e.preventDefault()

			projectSlider.slideTo($(this).data('slide-index'), 500)
		})
	}


	// Галерея
	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach(function (el, i) {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 1,
			breakpoints: {
				0: {
					spaceBetween: 15
				},
				768: {
					spaceBetween: 24
				}
			},
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// World phones
	$('.phone_input').intlTelInput({
		showSelectedDialCode: true,
		initialCountry: 'ru'
	})
})



window.addEventListener('scroll', function () {
	// Кнопка 'Вверх'
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Видео
		initVideosSliders()

		// Варианты
		initVariantsSliders()

		// Какие-то гарантии?
		initWhatGuaranteesSliders()


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Видео
videosSliders = []

function initVideosSliders() {
	if ($(window).width() > 767) {
		if ($('.videos .swiper .row').length) {
			$('.videos .swiper .row > *').addClass('swiper-slide')
			$('.videos .swiper .row').addClass('swiper-wrapper').removeClass('row')

			$('.videos .swiper').each(function (i) {
				$(this).addClass('videos_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					preloadImages: false,
					lazy: {
						enabled: true,
						checkInView: true,
						loadOnTransitionStart: true,
						loadPrevNext: true
					},
					slidesPerView: 'auto',
					breakpoints: {
						0: {
							spaceBetween: 16
						},
						768: {
							spaceBetween: 28
						}
					}
				}

				videosSliders.push(new Swiper('.videos_s' + i, options))
			})
		}
	} else {
		videosSliders.forEach(element => element.destroy(true, true))

		videosSliders = []

		$('.videos .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.videos .swiper .row > *').removeClass('swiper-slide')
	}
}



// Варианты
variantsSliders = []

function initVariantsSliders() {
	if ($(window).width() > 767) {
		if ($('.variants .swiper .row').length) {
			$('.variants .swiper .row > *').addClass('swiper-slide')
			$('.variants .swiper .row').addClass('swiper-wrapper').removeClass('row')

			$('.variants .swiper').each(function (i) {
				$(this).addClass('variants_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					spaceBetween: 28,
					slidesPerView: 3
				}

				variantsSliders.push(new Swiper('.variants_s' + i, options))
			})
		}
	} else {
		variantsSliders.forEach(element => element.destroy(true, true))

		variantsSliders = []

		$('.variants .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.variants .swiper .row > *').removeClass('swiper-slide')
	}
}


// Какие-то гарантии?
whatGuaranteesSliders = []

function initWhatGuaranteesSliders() {
	if ($(window).width() > 767) {
		if ($('.what_guarantees .swiper .row').length) {
			$('.what_guarantees .swiper .row > *').addClass('swiper-slide')
			$('.what_guarantees .swiper .row').addClass('swiper-wrapper').removeClass('row')

			$('.what_guarantees .swiper').each(function (i) {
				$(this).addClass('what_guarantees_s' + i)

				let options = {
					loop: true,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					},
					spaceBetween: 14,
					slidesPerView: 1
				}

				whatGuaranteesSliders.push(new Swiper('.what_guarantees_s' + i, options))
			})
		}
	} else {
		whatGuaranteesSliders.forEach(element => element.destroy(true, true))

		whatGuaranteesSliders = []

		$('.what_guarantees .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.what_guarantees .swiper .row > *').removeClass('swiper-slide')
	}
}