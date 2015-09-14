$(function() {
    var $searchForm = $('form[name=search]'),
        $searchButton = $('.js-search--button'),
        $searchInput = $('.js-search--input'),
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
