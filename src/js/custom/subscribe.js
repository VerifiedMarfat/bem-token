$(function() {
    var $searchForm = $('form[name=subscribe]'),
        $searchButton = $('.js-subscribe--button'),
        $searchInput = $('.js-subscribe--input'),
        active = '+active--width',
        inactive = '+inactive--width';

    $searchButton.on("click", function(e) {
        e.preventDefault();

        var self = $(this),
            inputIsActive = $searchInput.hasClass(active) ? true : false,
            searchHasTerm = $searchInput.val() !== "" ? true : false;

        if(searchHasTerm && !inputIsActive) {
            make_inactive($searchInput);
        } else if(searchHasTerm && inputIsActive) {
            $searchForm.submit();
        }

        if(inputIsActive) {
            make_inactive($searchInput);
        } else {
            make_active($searchInput);
        }
    });

    function make_inactive(element) {
        element.removeClass(active).addClass(inactive);
    }

    function make_active(element) {
        element.removeClass(inactive).addClass(active);
    }
});
