$(function() {
    var sideClass = '.js-item__side',
        $items = $('.js-expander'),
        $sides = $( sideClass ),
        blur = 'item--blur';

    var sliderTimer;
    var delay = 200;

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
        var index = self.index(),
            gridCount = Math.round(parseFloat(self.parent().css('width'))/parseFloat(self.css('width'))),
            $side = self.find(sideClass),
            thisSideClass = classRight;

        $side.height(self.outerHeight());
        $side.width(self.outerWidth(true));

        if((index+1)%(gridCount)===0) thisSideClass = classLeft;

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
