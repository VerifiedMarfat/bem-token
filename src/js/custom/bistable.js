$(function() {
    var $bistable = $(".js-bistable"),
        check = "icon-check--after",
        $checkElement = $(document.createElement('span')).addClass(check),
        on = "js-on",
        off = "js-off",
        activeBtn = "btn--active";

    $bistable.on("click", function() {
        var self = $(this);

        if(self.hasClass(on)) {
            self.removeClass(on).removeClass(activeBtn).addClass(off).find('.' + check).remove();
        } else {
            self.addClass(on).addClass(activeBtn).removeClass(off).append($checkElement);
        }
    });
});