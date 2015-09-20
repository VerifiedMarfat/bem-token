$(function() {

    // The word "bistable" can be quite vague. Can you think
    // of a different word to describe the element that you are
    // selecting?
    var $bistable = $(".js-bistable"),
        check = "+selected",

        // Not sure I like injecting DOM elements. Why cant we just
        // show and hide? This behaviour is then consistent across
        // all actions.
        $checkElement = $(document.createElement('span')).addClass(check),

        // These need to be called active/inactivate or something,
        // similar, so we are consistent across our entire code base.
        on = "js-on",
        off = "js-off",
        activeBtn = "btn--active";

    $bistable.on("click", function() {
        var self = $(this);

        if(self.hasClass(on)) {
            // There is way too much going on in this single line of code.
            // Can you break it down into smaller actions?
            self.removeClass(on).removeClass(activeBtn).addClass(off).find('.' + check).remove();
        } else {
            self.addClass(on).addClass(activeBtn).removeClass(off).append($checkElement);
        }
    });
});
