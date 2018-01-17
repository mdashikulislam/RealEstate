(function($) {

    "use strict";

    // caching selectors
    var mainWindow           = $(window),
        mainHeader           = $('header'),
        mainBody             = $('body'),
        mainStatus           = $('#status'),
        mainPreloader        = $('#preloader'),
        miuContainer         = $('#mix-container'),
        slideCarousel        = $('.slide-carousel'),
        teacherCarousel      = $('.teacher-carousel'),
        newsCarousel         = $('.news-carousel'),
        testimonialCarousel  = $('.testimonial-carousel'),
        testimonialCarousel2 = $('.testimonial-carousel-2'),
        partnerCarousel      = $('.partner-carousel'),
        galleryCarousel      = $('.gallery-carousel'),
        slickNavMenu         = $('#menu'),
        sfMenuExample        = jQuery("#sf-example"),
        galleryPhoto         = $('.gallery-photo'),
        scrollUp             = $('.scrollup'),
        mainCounter          = $('.counter'),
        dtPicker             = $('.datepicker');


    mainWindow.on('load', function() {

        // Datepicker
        dtPicker.datepicker({
            format: 'dd/mm/yyyy',
            startDate: '-3d'
        });

        // Preloader
        mainStatus.fadeOut();
        mainPreloader.delay(350).fadeOut('slow');
        mainBody.delay(350).css({
            'overflow': 'visible'
        });

        // Mix It Up
        miuContainer.mixItUp();

        // Slider
        slideCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            responsiveClass: true,
            mouseDrag: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });


        slideCarousel.on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item h3').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        slideCarousel.on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item h3').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();
        });

        

        // Carousel - Testimonial (Version 1)
        testimonialCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 15,
            dots: false,
            animateIn: true,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });

        // Carousel - Testimonial (Version 2)
        testimonialCarousel2.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 15,
            dots: true,
            animateIn: true,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false,
                    loop: true
                }
            }
        });

        

        // Carousel - Gallery
        galleryCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 15,
            dots: false,
            animateIn: true,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });

        
        slickNavMenu.slicknav();
      

        // Superfish Menu
        sfMenuExample.superfish({
            pathLevels: 1,
            delay: 1000,
            animation: {opacity: 'show'},
            animationOut: {opacity: 'hide'},
            speed: 'fast',
            speedOut: 'fast',
            cssArrows: true,
            disableHI: false,
        });

        // Magnific Popup
        galleryPhoto.magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });

        // Scroll to Top
        mainWindow.on("scroll", function() {
            if ($(this).scrollTop() > 98){  
                mainHeader.addClass("sticky");
                mainBody.addClass("sticky");
                scrollUp.show();
            }
            else{
                mainHeader.removeClass("sticky");
                mainBody.removeClass("sticky");
                scrollUp.hide();
            }
        });

        // Click event to scroll to top
        scrollUp.on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        // Counter
        mainCounter.counterUp({
            delay: 10,
            time: 1000
        });

    });

})(jQuery);