$(function() {
    var $activator = $(".js-slider-activator"),
        $button = $(".js-button"),
        active = "+active",
        inactive = "+inactive",
        activateButton = "btn--active";

    $button.on("click", function() {
        var self = $(this),
            isActive = self.hasClass(activateButton);

        if (isActive) {
            deactivate(self);
        } else {
            $button.each(function() {
                var self = $(this);
                deactivate(self);
            });
            activate(self);
        }
    });

    $activator.on("click", function() {
        var clickedButton = $(this),
            groupID = "slideID",
            groupName = "slideName",
            $collapsible = $("[collapsible]"),
            $activation = $(".js-slider-activation"),
            isCollapsible = clickedButton.is($collapsible),
            activatorGroup = clickedButton.attr(groupName),
            activatorID = clickedButton.attr(groupID);

        $activation.each(function() {
            var self = $(this),
                activationGroup = self.attr(groupName),
                activationID = self.attr(groupID),
                isActive = self.hasClass(active);

            if (activatorID === activationID) {
                if (isActive && isCollapsible) {
                    hide(self);
                } else {
                    show(self);
                }
            } else if (activatorGroup === activationGroup) {
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

    function activate(element) {
        element.addClass(activateButton);
    }

    function deactivate(element) {
        element.removeClass(activateButton);
    }
});

