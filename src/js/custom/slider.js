$(function() {
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
});

