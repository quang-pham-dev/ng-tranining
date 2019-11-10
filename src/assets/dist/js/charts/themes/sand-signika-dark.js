/*
 Highcharts JS v6.0.4 (2017-12-15)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b) {
    "object" === typeof module && module.exports ? module.exports = b : b(Highcharts)
})(function(b) {
    (function(a) {
        a.createElement("link", {
            rel: "stylesheet",
            type: "text/css"
        }, null, document.getElementsByTagName("head")[0]);
        a.wrap(a.Chart.prototype, "getContainer", function(a) {
            a.call(this);
            this.container.style.background = "22252a"
        });
        a.theme = {
            colors: "#e95f71 #CF53F9".split(" "),
            chart: {
                backgroundColor: null,
                style: {
                    fontFamily: "Signika, serif"
                }
            },
            title: {
                style: {
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "bold"
                }
            },
            subtitle: {
                style: {
                    color: "black"
                }
            },
            tooltip: {
                borderWidth: 0
            },
            legend: {
                itemStyle: {
                    fontWeight: "bold",
                    fontSize: "13px",
					color: "#8a8d93"
                }
            },
            xAxis: {
                labels: {
                    style: {
                        color: "#6e6e70"
                    }
                }
            },
            yAxis: {
                labels: {
                    style: {
                        color: "#6e6e70"
                    }
                }
            },
            plotOptions: {
                series: {
                    shadow: !0
                },
                candlestick: {
                    lineColor: "#404048"
                },
                map: {
                    shadow: !1
                }
            },
            navigator: {
                xAxis: {
                    gridLineColor: "#D0D0D8"
                }
            },
            rangeSelector: {
                buttonTheme: {
                    fill: "white",
                    stroke: "#C0C0C8",
                    "stroke-width": 1,
                    states: {
                        select: {
                            fill: "#D0D0D8"
                        }
                    }
                }
            },
            scrollbar: {
                trackBorderColor: "#C0C0C8"
            },
            background2: "#E0E0E8"
        };
        a.setOptions(a.theme)
    })(b)
});