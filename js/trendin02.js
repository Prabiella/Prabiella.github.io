var dom = document.getElementById('chartTrending');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};

var sourceData = [
  ['amount', 'has'],
  [58212, '#México'],
  [38254, '#Contoversia'],
  [20112, '#Lider']
];

var amounts = sourceData.slice(1).map(row => row[0]);
var minAmount = Math.min(...amounts);
var maxAmount = Math.max(...amounts);

var option = {
  dataset: { source: sourceData },

  grid: { containLabel: true },

  // ⭐ EJE X MOSTRANDO SOLO LA LINEA
  xAxis: { 
    type: 'value',
    axisLabel: { show: false },   // Oculta números
    axisTick: { show: false },    // Oculta marcas
    splitLine: { show: false },   // Oculta líneas internas
    axisLine: { show: true }      // Muestra la línea principal
  },

  yAxis: { type: 'category' },

  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: minAmount,
    max: maxAmount,
    dimension: 0,
    inRange: {
      color: ['#F6EEFF', '#AD6BF8', '#6418C4']
    }
  },

  series: [
    {
      type: 'bar',
      encode: { x: 'amount', y: 'has' },
      itemStyle: {
        borderRadius: [0, 50, 50, 0] // <--- aquí está el radius
      },
      label: {
        show: true,
        position: 'right',
        formatter: p => p.value[0],
        color: '#000',
        fontSize: 12
      }
    }
  ]
};

myChart.setOption(option);
window.addEventListener('resize', myChart.resize);
