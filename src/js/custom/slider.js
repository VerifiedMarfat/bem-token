$(function() {
    var $activator = $(".js-slider-activator"),
        $activation = $(".js-slider-activation"),
        $collapsible = $("[collapsible]"),
        groupName = "slideName",
        groupID = "slideID",
        active = "+active",
        inactive = "+inactive";

    $activator.on("click", function() {
        var self = $(this),
            isCollapsible = self.is($collapsible),
            activatorGroup = self.attr(groupName),
            activatorID = self.attr(groupID);

        $activation.each(function(index) {
            var self = $(this),
                activationGroup = self.attr(groupName),
                activationID = self.attr(groupID);

            if (activatorID === activationID) {
                if (self.hasClass(active) && isCollapsible) {
                    hide(self);
                } else {
                    show(self);
                }
            } else if(activatorGroup === activationGroup) {
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

