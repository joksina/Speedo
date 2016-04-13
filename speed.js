angular.module('speedoApp', [])
  .directive('pie', function () {
  return {
    restrict: 'C',
    replace: true,
    scope: {
      items: '='
    }, 

    link: function (scope) {
      
      var chart = new Highcharts.Chart({
  
      chart: {
        renderTo: 'container',
        type: 'gauge'
      },
      
      title: {
        text: 'The Speedometer'
      },

      credits: {
        enabled: false
      },
      
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#b2b2b2'],
              [1, '#1919']
            ]
          },
          borderWidth: 0,
          outerRadius: '100%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#1919'],
              [1, '#b2b2b2']
            ]
          },
        borderWidth: 1,
        outerRadius: '117%'
      }, {
      }, {
        backgroundColor: '#7f7f7f',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }]
    },
         
      yAxis: {
          min: 0,
          max: 180,
          
          minorTickInterval: 'auto',
          minorTickWidth: 0,
          minorTickLength: 5,
  
          tickPixelInterval: 30,
          tickWidth: 4,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
              step: 2,
              rotation: 'auto'
          },
          
          //setting the treshold color
          plotBands: [{
              from: 0,
              to: 60,
              color: '#55BF3B',
              opacity: 0.2
          }, {
              from: 61,
              to: 120,
              color: '#FF8000',
              opacity: 0.2
          }, {
              from: 121,
              to: 180,
              color: '#DF5353',
              opacity: 0.2
          }]        
      },
  
      series: [{
        name: 'Speed',
        data: [90],
        tooltip: {
          valueSuffix: ' km/h'
        }
      }]
  
    },

    function (charts) {
      if (!charts.renderer.forExport) {
        setInterval(function () {
          var newPointer;
          var pointer = charts.series[0].points[0];
          var random = Math.floor(Math.random() * 100);

          newPointer = pointer.y + random;
          if (newPointer < 0 || newPointer > 180) {
            newPointer = pointer.y - random;
          }

          pointer.update(newPointer);
        }, 4000);
      }
    });
      
  },

  //seting up the template for Angular directives
  template: '<div id="container"></div>',

  }
});
