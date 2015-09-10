$(function() {
    var $searchButton = $('.js-search--button'),
        $searchInput = $('.js-search--input'),
        active = '+active--width';
        inactive = '+inactive--width';

    $searchButton.on("click", function(e) {
        e.preventDefault();
        var self = $(this);
        if($searchInput.hasClass(active)) {
            $searchInput.removeClass(active).addClass(inactive);
        } else {
            $searchInput.removeClass(inactive).addClass(active);
        }
    });
});
