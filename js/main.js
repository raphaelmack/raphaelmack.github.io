// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* Detect if loading of page is finished and remove above-the-fold.css */
   /*jQuery(window).load(function () {
        alert('page is loaded');

        setTimeout(function () {
            alert('page is loaded and 1 minute has passed');   
        }, 60000);

    });*/

    /*==============================================
    Panel Collapsing on click
    =============================================== */ 
   jQuery(function ($) {
        $('.clickable').on("click", function (e) {
            if ($(this).hasClass('panel-collapsed')) {
                // expand the panel
                $(this).parents('.panel').find('.panel-body').slideDown();
                $(this).removeClass('panel-collapsed');
                $(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
            else {
                // collapse the panel
                $(this).parents('.panel').find('.panel-body').slideUp();
                $(this).addClass('panel-collapsed');
                $(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
        });
    });

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        /*var navHeight = $(window).height() - 300;*/
        var navHeight = $('#menu').height();
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

    // Close navbar in mobile after clicking on menu point
    $('.nav a').on('click', function(){
        var $navbar = $(".navbar-collapse");               
        var _opened = $navbar.hasClass("in");
        if (_opened){
          $('.navbar-toggle').click();
        }
    });

  	$(document).ready(function() {

      $("#owl-demo").owlCarousel({
 
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
 
      });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
          var selector;
          var textGeneral = "Reparatur und Ersatzteile anderer Marken auf Anfrage";


            if($(this).hasClass('category')){
              document.getElementById("panel-title").textContent=textGeneral;
              $('.panel').find('.panel-body.information').slideUp();
            }       

            if($(this).hasClass('active')){
              $('.cat .active').removeClass('active');
              $('.cat .all').addClass('active');
              selector = '*';
              
              // Collapsing element
              document.getElementById("panel-title").textContent=textGeneral;
              $('.panel').find('.panel-body.information').slideUp();
            }else{
              $('.cat .active').removeClass('active');
              $(this).addClass('active');
              selector = $(this).attr('data-filter');

              // Uncollapsing element
              if($('.panel').find('.panel-body'+$(this).attr('data-filter')).length ==1){
                var paneltitle;
                switch($(this).attr('data-filter')){
                  case '.aeg': paneltitle = "Reparaturwerkstatt für AEG"; break;
                  case '.bosch': paneltitle = "Reparaturwerkstatt für Bosch"; break;
                  case '.delonghi': paneltitle = "Reparaturwerkstatt für De'Longhi"; break;
                  case '.jura': paneltitle = "Reparaturwerkstatt für Jura"; break;
                  case '.krups': paneltitle = "Autorisierte Reparaturwerkstatt für KRUPS"; break;
                  case '.moulinex': paneltitle = "Autorisierte Servicestützpunkt für Moulinex"; break;
                  case '.nivona': paneltitle = "Reparaturwerkstatt für Nivona"; break;
                  case '.panasonic': paneltitle = "Reparaturwerkstatt für Panasonic"; break;
                  case '.philips': paneltitle = "Reparaturwerkstatt für Philips"; break;
                  case '.rowenta': paneltitle = "Reparaturwerkstatt für Rowenta"; break;
                  case '.saeco': paneltitle = "Reparaturwerkstatt für Saeco"; break;
                  case '.sharp': paneltitle = "Reparaturwerkstatt für Sharp"; break;
                  case '.siemens': paneltitle = "Reparaturwerkstatt für Siemens"; break;
                  case '.spidem': paneltitle = "Reparaturwerkstatt für SPIDEM"; break;
                  case '.tefal': paneltitle = "Autorisierte Reparaturwerkstatt für Tefal"; break;
                  default: paneltitle="Weitere Informationen";
                }
                document.getElementById("panel-title").textContent=paneltitle;
                $('.panel').find('.panel-body'+$(this).attr('data-filter')).slideDown();
              }
              
            }

            // Scroll 
            $('html, body').animate({
               scrollTop: $('#tf-selection').offset().top -75
             }, 200, function(){
               //window.location.hash = hash;
            });
            
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            return false;
        });

    });



}());


}
main();

/* Change color of first element at selection */

$(document).ready(function() {
   $('#select_manufacturer').css('color','#999');
   $('#select_manufacturer').change(function() {
      var current = $('#select').val();
      if (current != 'keine Angabe') {
          $('#select_manufacturer').css('color','black');
      } else {
          $('#select_manufacturer').css('color','#999');
      }
   }); 
});