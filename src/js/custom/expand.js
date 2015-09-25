$(function() {
    var mainClass = '.js-tile__main',
        sideClass = '.js-tile__expand',
        $items = $('.js-tile--expandable'),
        leftClass = 'expand--left',
        rightClass = 'expand--right',
        blur = 'blur',
        sliderTimer,
        delay = 200;

    $items.hover(function() {
        // on mouse in, start a timeout
        var self = $(this);

        sliderTimer = setTimeout(function() {
            addBlurOnAll();
            self.removeClass(blur);
            expand(self);
        }, delay);

    }, function() {

        var self = $(this);
        // on mouse out, cancel the timer
        clearTimeout(sliderTimer);

        shrink(self);

        setTimeout(function() {
            clearBlurOnAll();
        }, delay/2);
    });

    function expand(self) {
        var index = self.parent().index(),
            gridCount = Math.round(
                parseFloat(self.parent().parent().css('width'))/
                parseFloat(self.parent().css('width'))
            );

        self.width(self.parent().outerWidth()+self.outerWidth());
        self.find(mainClass).width(self.parent().width());
        self.find(sideClass).width(self.parent().width());

        if((index+1)%(gridCount)===0) {
            self.addClass(leftClass);
        } else self.addClass(rightClass);
    }

    function shrink(self) {
        self.removeClass(leftClass).removeClass(rightClass);
        self.css({
                width: ''
            });
        self.find(mainClass).css({
                width: ''
            });
    }

    function addBlurOnAll() {
        $items.addClass(blur);
    }

    function clearBlurOnAll() {
        $items.removeClass(blur);
    }

});
