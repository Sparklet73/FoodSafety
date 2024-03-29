$(document).ready(function () {
    $(function () {
        $('#chemCharts').highcharts({
            chart: {
                marginBottom: 75,
            },
            title: {
                text: '化學物質擁有量變化',
                style: {
                    fontFamily: 'Microsoft YaHei',
                    fontSize: '14px'
                },
                verticalAlign: 'bottom',
                y: -5
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                    showInLegend: false,
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }]
        });
    });
});