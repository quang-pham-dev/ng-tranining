/*
 Highcharts JS v6.0.4 (2017-12-15)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a) {
    "object" === typeof module && module.exports ? module.exports = a : a(Highcharts)
})(function(a) {
    a.theme = {
        colors: "#058DC7 #50B432 #ED561B #DDDF00 #24CBE5 #64E572 #FF9655 #FFF263 #6AF9C4".split(" "),
        chart: {
            plotShadow: !0
        },
        title: {
            style: {
                color: "#000",
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        subtitle: {
            style: {
                color: "#666666",
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        xAxis: {
            gridLineWidth: 1,
            lineColor: "#000",
            tickColor: "#000",
            labels: {
                style: {
                    color: "#000",
                    font: "11px Trebuchet MS, Verdana, sans-serif"
                }
            },
            title: {
                style: {
                    color: "#333",
                    fontWeight: "bold",
                    fontSize: "12px",
                    fontFamily: "Trebuchet MS, Verdana, sans-serif"
                }
            }
        },
        yAxis: {
            minorTickInterval: "auto",
            lineColor: "#000",
            lineWidth: 1,
            tickWidth: 1,
            tickColor: "#000",
            labels: {
                style: {
                    color: "#000",
                    font: "11px Trebuchet MS, Verdana, sans-serif"
                }
            },
            title: {
                style: {
                    color: "#333",
                    fontWeight: "bold",
                    fontSize: "12px",
                    fontFamily: "Trebuchet MS, Verdana, sans-serif"
                }
            }
        },
        legend: {
            itemStyle: {
                font: "9pt Trebuchet MS, Verdana, sans-serif",
                color: "black"
            },
            itemHoverStyle: {
                color: "#039"
            },
            itemHiddenStyle: {
                color: "gray"
            }
        },
        labels: {
            style: {
                color: "#99b"
            }
        },
        navigation: {
            buttonOptions: {
                theme: {
                    stroke: "#CCCCCC"
                }
            }
        }
    };
    a.setOptions(a.theme)
});