$(function() {
    var $selector = $(".js-selection"),
        selected = "+selected";

    $selector.on("click", function() {
        var self = $(this),
            isSelected = self.hasClass(selected),
            value = self.attr("value");

        if (isSelected) {
            self.removeClass(selected);
            filter(value, "remove");
        } else {
            self.addClass(selected);
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
