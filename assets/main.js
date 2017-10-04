$(function () {

    if (!$('.bigChart:visible').length)
        return false;

    $('.bigChart').append('<div class="sideArrow active"></div>');

    $(document).on('click', '.sideArrow', function (e) {

        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.side').show('slide', {direction: 'left'}, 100);
            resizeCharts();
        } else {
            $('.side').hide('slide', {direction: 'right'}, 100);
            setTimeout(resizeCharts, 101);
        }
    });
});
