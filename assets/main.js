var switchBuySellStopLimit =
    `<div class="switchBuySellStopLimit" title="Show or Hide Buy, Sell and Stop-Limit blocks" onclick="toggleBuySellStopLimit(this)">
        <i class="fa fa-chevron-up show"></i>
        <i class="fa fa-chevron-down hide"></i>
    </div>`.replace("\n", '');

var toggleBigChart = function (_obj) {

    var obj = _obj || $('.sideArrow')[0];

    $(obj).toggleClass('active');

    if ($(obj).hasClass('active')) {
        $('.side').show('slide', {direction: 'left'}, 100);
        resizeCharts();
    } else {
        $('.side').hide('slide', {direction: 'right'}, 100);
        setTimeout(resizeCharts, 101);
    }
};

var toggleBuySellStopLimit = function (_obj) {

    var obj = _obj || $('.switchBuySellStopLimit')[0];

    $(obj)
        .closest('.switchBuySellStopLimit')
        .toggleClass('active');

    $('.cols').slideToggle(150);
};

$(document).on('keyup', function (e) {

    // Toggle Big Chart
    if (e.altKey && (e.keyCode === 90)) {
        toggleBigChart();
    }

    // Toggle Buy-Sell blocks
    if (e.altKey && (e.keyCode === 88)) {
        toggleBuySellStopLimit();
    }
});

$(function () {

    if (!$('.bigChart:visible').length)
        return false;

    $('.bigChart')
        .append('<div class="sideArrow active" title="Full Width" onclick="toggleBigChart(this)"></div>')
        .append(switchBuySellStopLimit);
});
