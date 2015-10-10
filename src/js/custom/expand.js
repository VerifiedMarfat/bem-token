$(function() {
    var $mainClass = '.js-tile--main',
        $sideClass = '.js-tile--expand',
        $items = $('.js-tile--expandable'),
        slideLeft = 'expand--left',
        slideRight = 'expand--right',
        // TODO check whether its really necessary to define this variable
        // as the variable name and value is the same and therefore
        // unlikely to change. With a change we might be required to change
        // the variable name, leading to the same issue as having to replace
        // it in multiple places for it to still make sense.

        // DON'T GET THIS??? the name is used in multiple (3) places, in the
        // code so I think it is fair enough to have it defined in here.
        // Anyways I thought it is a good practice to have all the classes
        // defined at the start, so that you don't need to look for them in
        // the code.
        blur = 'tile--blur',
        delay = 200,
        sliderTimer;

    $items.on('mouseenter', function() {
        var self = $(this);

        sliderTimer = setTimeout(function() {
            addBlur();
            self.removeClass(blur);
            expand(self);
        }, delay);
    });

    $items.on('mouseleave', function() {
        var self = $(this),
            delay = delay / 2;

        clearTimeout(sliderTimer);

        shrink(self);

        setTimeout(function() {
            clearBlur();
        }, delay);
    });

    function expand(self) {
        var index = self.parent().index(),
            tileCount = Math.round(
                // TODO replace the call to parent().parent() element. This is currently too ambiguous.
                parseFloat(self.parent().parent().css('width'))/parseFloat(self.parent().css('width'))
            ),
            tilePosition = (index + 1) % (tileCount);

        // TODO: check if we can set these widths using classes instead.
        self.width(self.parent().outerWidth()+self.outerWidth());
        self.find($mainClass).width(self.parent().width());
        self.find($sideClass).width(self.parent().width());

        if (0 === tilePosition) {
            self.addClass(slideLeft);
        } else {
            self.addClass(slideRight);
        }
    }

    function shrink(self) {
        self.removeClass(slideLeft).removeClass(slideRight);
        // TODO check if we can remove these style settings via JS.
        self.css({
            width: ''
        });
        self.find($mainClass).css({
            width: ''
        });
    }

    // TODO rethink whether this method being called once and only contains
    // a single line needs to be seperated as such.
    function addBlur() {
        $items.addClass(blur);
    }

    // TODO see previous comment!
    function clearBlur() {
        $items.removeClass(blur);
    }
});
