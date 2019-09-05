/* datepicker */
function datepicker() {
    // date-from
    if ($('.date-from').length) {
        $('.date-from').datepicker({
            dateFormat: 'dd_mm_yy',
            onClose: function (selectedDate) {
                if (selectedDate)
                    sendTimeFn();
            }
        });
    }

    // date-to
    if ($('.date-to').length) {
        $('.date-to').datepicker({
            maxDate: 0,
            dateFormat: 'dd_mm_yy',
            onClose: function (selectedDate) {
                if (selectedDate)
                    sendTimeFn();
            }
        });
    }

    $('.open-from').on('click', function () {
        $('.date-from').datepicker('show');
    });

    $('.open-to').on('click', function () {
        $('.date-to').datepicker('show');
    });

    $('.close-from').on('click', function () {
        $('.date-from').val('');
    });

    $('.close-to').on('click', function () {
        $('.date-to').val('');
    });

}
/* datepicker end */

/* sendTimeFn */
function sendTimeFn() {
    if ($('.date-from').val() && $('.date-to').val()) {
        // get array dates
        $.ajax({
            url: 'ajax/posts.json',
            dataType: 'json',
            success: function (data) {
                alert('success');

                let postsArray = data.posts;
                let posts_out = '';
                let post_class = '';

                $.each(postsArray, function () {
                    if (this['type'] == "video") {
                        post_class = ' video';
                    }
                    posts_out += '<div class="content__item' + post_class + '">' +
                        '<img src="' + this['image'] + '" alt="" />' +
                        '<span>лайков: ' + this['likes1'] + '</span></div>';
                });

                $('.content').html(posts_out);
            }
        });
    }
}
/* sendTimeFn end */

$(document).ready(function () {
    datepicker();
});