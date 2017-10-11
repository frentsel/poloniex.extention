var bigChart = {
    setStatus: function (status) {

        $('.sideArrow').toggleClass('active', status);

        localStorage['bigChartStatus'] = status ? 'short' : 'full';

        if (status) {
            $('.side').show('slide', {direction: 'left'}, 100);
            resizeCharts();
        } else {
            $('.side').hide('slide', {direction: 'right'}, 100);
            setTimeout(resizeCharts, 101);
        }
    },
    toggle: function () {
        this.setStatus(localStorage['bigChartStatus'] === 'full');
    },
    init: function () {

        if (!$('.bigChart:visible').length)
            return false;

        $('.bigChart')
            .append(`<div class="sideArrow active" title="Full Width" onclick="bigChart.toggle()"></div>`);

        if(localStorage['bigChartStatus'] === 'full') {
            this.setStatus(false);
        }
    },
};

var buySellStopLimit = {
    setStatus: function (status) {

        $('.switchBuySellStopLimit').toggleClass('active', status);

        localStorage['buySellStopLimit'] = status ? 'short' : 'full';

        if (status) {
            $('.cols').slideDown(150);
        } else {
            $('.cols').slideUp(150);
        }
    },
    toggle: function () {
        this.setStatus(localStorage['buySellStopLimit'] === 'full');
    },
    init: function () {

        if (!$('.bigChart:visible').length)
            return false;

        let content =
            `<div class="switchBuySellStopLimit active" title="Show or Hide Buy, Sell and Stop-Limit blocks" onclick="buySellStopLimit.toggle()">
                <i class="fa fa-chevron-up"></i>
                <i class="fa fa-chevron-down"></i>
            </div>`.replace("\n", '');

        $('.bigChart').append(content);

        if(localStorage['buySellStopLimit'] && localStorage['buySellStopLimit'] === 'full') {
            this.setStatus(false);
        }
    },
};

$(document).on('keyup', function (e) {

    // Toggle Big Chart
    if (e.altKey && (e.keyCode === 90)) {
        bigChart.toggle();
    }

    // Toggle Buy-Sell blocks
    if (e.altKey && (e.keyCode === 88)) {
        buySellStopLimit.toggle();
    }
});

$(function () {
    bigChart.init();
    buySellStopLimit.init();
});
