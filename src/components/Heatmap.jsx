import {useState, useEffect} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsExporting(Highcharts);
HighchartsHeatmap(Highcharts);

const Heatmap = ({lineChart, year}) => {
  const [data, setData] = useState([]);
  const [heatData, setHeatData] = useState([]);

  const WEEK_DAYS = [
    'Midnight',
    'Morning',
    'Noon',
    'Afternoon',
    'Evening'
  ];

  useEffect(() => {
    fetch('http://localhost:4000/data ')
    .then((response) => response.json())
    .then((data) => {
        setData(data);
    })
    .catch((err) => {
        console.log(err.message)
    })

    fetch('http://localhost:4000/heat')
    .then((response) => response.json())
    .then((data) => {
        setHeatData(data);
    })
    .catch((err) => {
        console.log(err.message)
    })
  }, []);

 const filteredData = heatData[`${year}`] ? heatData[`${year}`] : {};
 const filteredLineData = data[`${year}`] ? data[`${year}`] : {};
 

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 
  const getOptionsHeatmap = {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 1,
      width: 980,
      height: 500,
      borderRadius: 20,
      marginTop: 50,
      marginLeft: 60,
      marginRight: 20
    },
    title: {
      text: '',
    },
    boost: {
      useGPUTranslations: true,
    },
    xAxis: {
      type: 'datetime',
      min: Date.UTC(`${year}`, 0, 1),
      max: Date.UTC(`${year}`, 11, 31, 23, 59, 59),
      tickInterval: 1,
      labels: {
        step: 1,
        x:-10,
        align: 'center',
        style: {
          fontSize: '12px',
          fontFamily: 'Open Sans',
        },
      },
      gridLineWidth: 0,
      lineWidth: 0.5,
      lineColor: 'rgba(0,0,0,0.75)',
      tickWidth: 0.5,
      tickLength: 1,
      tickColor: 'rgba(0,0,0,0.75)',
      title: {
        text: 'Carbon_Intensity',
      },
    },
    yAxis: {
      title: {
        text: 'Time of Day',
      },
  // 5- Set the categories of Y-axis to WEEK_DAYS
      min: 1,
      max: 24,
      tickInterval: 6,
      name: 'Hours',
      startOnTick: false,
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Open Sans',
        },
      },
    },
  // 7- Add colors range to the heatmap values
    colorAxis: {
      stops: [
        [0, '#59A45E'],
        [0.5, '#DEEEE4'],
        [0.7, '#B5BCB4'],
        [0.9, '#6E7474'],
        [1, '#111']
      ],
      startOnTick: false,
      endOnTick: false
    },
    series: [
      {
        enableMouseTracking: false,
        borderWidth: 0,
        colsize: 420 * 36e5,
        boostThreshold: 100,
        nullColor: '#EFEFEF',
        states: { hover: { 
          enabled: false 
        },
          inactive: {
            opacity: 1
        }

        },
        turboThreshold: Number.MAX_VALUE, // #3404, remove after 4.0.5 release
        dataLabels: {
          enabled: false,
          color: '#000000',
        },
        data: filteredData,
      },
    ],
    credits: {
      enabled: false
  },
  };
  
  const getOptions = (type) => ({
    chart: {
      type: 'area' ,
      width: 1000,
      height: 500,
      zoomType: 'xy',
      styledMode: false,
      borderRadius: 20,
      marginTop: 50,

    },
    boost: {
      useGPUTranslations: true,
    },
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: ''
      },
      categories: [0, 200, 400, 600],
      labels: {
        padding: 20
    },
      tickInterval: 100,
    },
    plotOptions: {
      series: {
        states: {
          hover: {
              enabled: true,
              lineWidth: 2.5,
          }
        },
        fillColor: {
          linearGradient: [0, 0, 0, 420],
          stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
         },
          marker: {
          enabled: false,
          lineWidth: 1,
        }
      }
    },
    xAxis: {
      type: 'datetime',
      categories: Object.keys(filteredLineData),
      tickInterval: year == 'all' ? 5 : 30,
      labels: {
        align: 'left',
        x: 10,
        rotation: 0,
        step: 60
    },
    },
    series: [{
      name: "Carbon Intensity",
      data: Object.values(filteredLineData),
      color: '#538BF5',
      colsize: 420 * 36e5
      }],
      credits: {
      enabled: false,
    },
    boostThreshold: 100,
    turboThreshold: Number.MAX_VALUE, // #3404, remove after 4.0.5 release
  });

    return (
      <>
      <div className="chartHolder" id={lineChart ? 'cover' : ''}>
        <HighchartsReact id='container' highcharts={Highcharts} options={getOptionsHeatmap} /> 
      </div>

      <div className="chartHolder" id={lineChart ? '' : 'cover'}>
         <HighchartsReact highcharts={Highcharts} options={getOptions('spline')} /> 
      </div>
      </>
    )
};

export default Heatmap;
