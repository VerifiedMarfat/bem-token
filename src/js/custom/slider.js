$(function() {
    var $activater = $(".js-slider-activater"),
        $activation = $(".js-slider-activation"),
        groupAttr = "slideGroup",
        matchAttr = "slideID",
        actionAttr = "deactivateAction",
        active = "+active",
        inactive = "+inactive";

    $activater.on("click", function() {
        var self = $(this),
            activaterGroup = self.attr(groupAttr),
            activaterID = self.attr(matchAttr),
            $thisActivater = self;

        $activation.each(function(index) {
            var self = $(this),
                activationGroup = self.attr(groupAttr),
                activationID = self.attr(matchAttr);

            if (activaterID == activationID) {
                if (self.hasClass(active)) {
                    if ($thisActivater.attr(actionAttr) == 'hide') hide(self);
                } else {
                    show(self);
                }
            } else if(activaterGroup == activationGroup) {
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

