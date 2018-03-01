Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: "Browsers mais populares em 2017"
    },
    xAxis: {
        categories: ["Firefox", "Chrome", "IE/Edge", "Safari", "Opera"]
    },
    subtitle: {
        text: "Source: Site W3Counter (www.w3counter.com) - Dados em %"
    },
    yAxis: {
        title: {
            text: "Porcentagem"
        }
    },
    legends: {
        enabled: false
    },
    series: [{
        data: [9.3, 58.8, 8, 14.5, 4],
        showInLegend: false,
        colorByPoint: true
    }]
})
