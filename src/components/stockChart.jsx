import React, { Component } from 'react';
import CanvasJSReact from '../assets/libraries/canvasjs.stock.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class StockChart extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            dataPoints1: [],
            dataPoints2: [],
            dataPoints3: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        //Reference: https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state
        fetch('https://canvasjs.com/data/docs/ltcusd2018.json')
            .then(res => res.json())
            .then(data => {
                var dps1 = [], dps2 = [], dps3 = [];
                for (var i = 0; i < data.length; i++) {
                    dps1.push({
                        x: new Date(data[i].date),
                        y: [
                            Number(data[i].open),
                            Number(data[i].high),
                            Number(data[i].low),
                            Number(data[i].close),
                        ],
                    });
                    dps2.push({
                        x: new Date(data[i].date),
                        y: Number(data[i].volume_usd),
                    });
                    dps3.push({ x: new Date(data[i].date), y: Number(data[i].close) });
                }
                this.setState({
                    isLoaded: true,
                    dataPoints1: dps1,
                    dataPoints2: dps2,
                    dataPoints3: dps3,
                });
            });

        //    var canvas = document.getElementById("canvasjs-react-stockchart-container-19");
        // // var canvas = this.myRef.current;
        // console.log('CanvasJS', CanvasJS)
        // const ctx = CanvasJS.getContext('2d');
        // var context = CanvasJSStockChart.getContext('2d');
        // context.clearRect(0, 0, CanvasJSStockChart.width, CanvasJSStockChart.height); //clear html5 canvas
    }

    render() {
        const options = {
            theme: 'dark1',    // "light1", "light2", "dark1", "dark2"
            // title: {
            //     text: 'React StockChart with Date-Time Axis',
            // },
            // subtitles: [
            //     {
            //         text: 'Price-Volume Trend',
            //     },
            // ],
            charts: [
                {
                    axisX: {
                        lineThickness: 5,
                        tickLength: 0,
                        labelFormatter: function (e) {
                            return '';
                        },
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true,
                            labelFormatter: function (e) {
                                return '';
                            },
                        },
                    },
                    axisY: {
                        title: 'Litecoin Price',
                        prefix: '$',
                        tickLength: 0,
                    },
                    toolTip: {
                        shared: true,
                    },
                    data: [
                        {
                            name: 'Price (in USD)',
                            yValueFormatString: '$#,###.##',
                            type: 'candlestick',
                            dataPoints: this.state.dataPoints1,
                        },
                    ],
                },
                {
                    height: 100,
                    axisX: {
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true,
                        },
                    },
                    axisY: {
                        title: 'Volume',
                        prefix: '$',
                        tickLength: 0,
                    },
                    toolTip: {
                        shared: true,
                    },
                    data: [
                        {
                            name: 'Volume',
                            yValueFormatString: '$#,###.##',
                            type: 'column',
                            dataPoints: this.state.dataPoints2,
                        },
                    ],
                },
            ],
            navigator: {
                data: [
                    {
                        dataPoints: this.state.dataPoints3,
                    },
                ],
                slider: {
                    minimum: new Date('2018-05-01'),
                    maximum: new Date('2018-07-01'),
                },
            },
        };

        const containerProps = {
            gridArea: 'main',
            maxWidth: '100%',
            height: '406px',
            margin: 'auto',
            id: 'EscherStockChart',
        };

        // var chart = new CanvasJS.Chart("chartContainer", {
        //     title: {
        //       text: "Setting ID for Chart Canvas"
        //   },
        //     data: [
        //     {
        //         type: "column",
        //         dataPoints: [
        //             { x: 10, y: 71 },
        //             { x: 20, y: 55 },
        //             { x: 30, y: 50 },
        //             { x: 40, y: 65 },
        //             { x: 50, y: 95 },
        //             { x: 60, y: 68 },
        //             { x: 70, y: 28 },
        //             { x: 80, y: 34 },
        //             { x: 90, y: 14 }
        //         ]
        //     }					
        //     ]
        // });
        
        // chart.canvas.setAttribute("id", "chartCanvas");
        // chart.render();

        return (
            <div>
                <div>
                    {// Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
                        this.state.isLoaded &&
                        <>
                        {/* <div id="chartContainer" style="height: 360px; width: 100%;"></div> */}
                        <CanvasJSStockChart
                            // id="EscherStockChart"
                            // ref={this.myRef} 
                            containerProps={containerProps}
                            options={options}
                        /* onRef = {ref => this.chart = ref} */
                        /></>}
                </div>
            </div>
        );
    }
}
export default StockChart;
