/**
 * Created by btt_9 on 17/01/2017.
 */

    $(document).ready(function(){ // Script de la Galeria
        $('#contenido_galeria div').css('position', 'absolute').not(':first').hide();
        $('#contenido_galeria div:first').addClass('aqui');
        $('.jMyCarousel a').click(function(){
            $('#contenido_galeria div.aqui').fadeOut(400);
            $('#contenido_galeria div').removeClass('aqui').filter(this.hash).fadeIn(400).addClass('aqui');
            return false;
        });

        $(".jMyCarousel").jMyCarousel({ // Script de los Thumbnails
            visible: '100%',
            eltByElt: true
        });
        $(".jMyCarousel img").fadeTo(100, 0.6);
        $(".jMyCarousel a img").hover(
            function(){ //mouse over
                $(this).fadeTo(400, 1);
            },
            function(){ //mouse out
                $(this).fadeTo(400, 0.6);
            });
    });
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
var firstTracker = _gat._getTracker("UA-2416079-4");
firstTracker._initData();
firstTracker._trackPageview();

var secondTracker = _gat._getTracker("UA-9217322-2");
secondTracker._initData();
secondTracker._trackPageview();