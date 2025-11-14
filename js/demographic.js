var dom = document.getElementById('demographic');
var myChart = echarts.init(dom);

var option = {
  grid: {
    left: 40,
    right: 150,   // espacio para la leyenda a la derecha
    top: 20,
    bottom: 40
  },

  xAxis: {
    type: 'category',
    data: ['Mujeres', 'Hombres'],
    axisLabel: { fontSize: 12 }
  },

  yAxis: {
    type: 'value',
    axisLabel: { fontSize: 12 }
  },

  // ⭐ Leyenda a la derecha
  legend: {
    orient: 'vertical',
    right: 50,
    top: 'middle',
    itemWidth: 14,
    itemHeight: 14,
    textStyle: {
      fontSize: 13
    },
    data: ['Mujeres', 'Hombres']
  },

  series: [
    {
      name: 'Mujeres',
      type: 'bar',
      barWidth: 170,        // antes 140 → más delgado
      barGap: '-80%',      // acerca las barras
      data: [
        {
          value: 128,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#D53BD9' },
              { offset: 1, color: '#A21CC8' }
            ]),
            borderRadius: [5, 5, 0, 0]
          }
        },
        null
      ]
    },
  
    {
      name: 'Hombres',
      type: 'bar',
      barWidth: 170,        // mismo ancho
      barGap: '-80%',      // emparejado
      data: [
        null,
        {
          value: 167,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#8EE7FF' },
              { offset: 1, color: '#45C3FF' }
            ]),
            borderRadius: [5, 5, 0, 0]
          }
        }
      ]
    }
  ]
  
};

myChart.setOption(option);
window.addEventListener('resize', myChart.resize);
