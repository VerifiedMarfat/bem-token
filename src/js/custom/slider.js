$(function() {

    /*** nav button slider ***/

    var $activater = $(".js-slider-activater"),
        $activation = $(".js-slider-activation"),
        matchAttr = "slideID",
        active = "+active",
        inactive = "+inactive";

    $activater.on("click", function() {
        var self = $(this),
            activaterID = self.attr(matchAttr);

        $activation.each(function(index) {
            var self = $(this),
                activationID = self.attr(matchAttr);

            if (activaterID == activationID) {
                if (self.hasClass(active)) {
                    hide(self);
                } else {
                    show(self);
                }
            } else {
                hide(self);
            }
        });
    });


    function hide(element) {
        element.addClass(inactive).removeClass(active);
    }

    function show(element) {
        element.removeClass(inactive).addClass(active);
    }


    /*** item list slider ***/

    var sideClass = '.item__side',
        $items = $('.js-grid__slider'),
        $sides = $( sideClass ),
        blur = 'item--blur';

    var sliderTimer;
    var delay = 600;

    $items.hover(function() {
        // on mouse in, start a timeout
        var self = $(this);

        sliderTimer = setTimeout(function() {
            addBlurOnAll();
            self.removeClass(blur);
            showSide(self);
        }, delay);

    }, function() {

        var self = $(this);
        // on mouse out, cancel the timer
        clearTimeout(sliderTimer);

        hideSide(self);

        setTimeout(function() {
            clearBlurOnAll();
        }, delay/2);
    });

    var classRight = 'item__side--right',
        classLeft = 'item__side--left',
        gridPadding = 26; //padding+1

    function showSide(self) {
        var width = parseFloat(self.css('width'))/parseFloat(self.parent().css('width'))*100,
            index = self.index(),
            $side = self.find(sideClass),
            thisSideClass = classRight;

        $side.height(self.outerHeight());
        $side.width(self.outerWidth(true));

        if(width<30){
            if((index+1)%4===0) thisSideClass = classLeft;
        } else if(width<49){
            if((index+1)%3===0) thisSideClass = classLeft;
        } else {
            if((index+1)%2===0) thisSideClass = classLeft;
        }

        $side.addClass(thisSideClass);
    }

    function hideSide(self) {
        var index = self.index(),
            $side = self.find(sideClass);

        $side.width(self.outerWidth(true) - gridPadding);

        // reset size so it doesn't show up when resizing window
        setTimeout(function() {
            $side.css({
                width: '',
                height: ''
            });
        }, delay);

        $side.removeClass(classLeft).removeClass(classRight);
    }

    function addBlurOnAll() {
        $items.addClass(blur);
    }

    function clearBlurOnAll() {
        $items.removeClass(blur);
    }

});

