var switchBuySellStopLimit =
    `<div class="switchBuySellStopLimit" onclick="toggleBuySellStopLimit(this)">
        <i class="fa fa-chevron-up show"></i>
        <i class="fa fa-chevron-down hide"></i>
    </div>`.replace("\n", '');

var toggleBigChart = function (obj) {

    $(obj).toggleClass('active');

    if ($(obj).hasClass('active')) {
        $('.side').show('slide', {direction: 'left'}, 100);
        resizeCharts();
    } else {
        $('.side').hide('slide', {direction: 'right'}, 100);
        setTimeout(resizeCharts, 101);
    }
};

var toggleBuySellStopLimit = function (obj) {

    $(obj)
        .closest('.switchBuySellStopLimit')
        .toggleClass('active');

    $('.cols').slideToggle(150);
};

$(function () {

    if (!$('.bigChart:visible').length)
        return false;

    $('.bigChart')
        .append('<div class="sideArrow active" onclick="toggleBigChart(this)"></div>')
        .append(switchBuySellStopLimit);
});
