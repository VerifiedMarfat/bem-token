$(function() {
    var $selector = $(".js-selector"),
        selected = "+selected";

    $selector.on("click", function() {
        var self = $(this),
            $selection = self.children(".js-selection"),
            isSelected = $selection.hasClass(selected),
            value = $selection.attr("value");

        if (isSelected) {
            $selection.removeClass(selected);
            filter(value, "remove");
        } else {
            $selection.addClass(selected);
            filter(value, "add");
        }
    });

    function filter(value, action) {
        $.ajax({
            url: "filter",
            type:'POST',
            data:
            {
                filter: value,
                action: action
            }
        });
    }
});
