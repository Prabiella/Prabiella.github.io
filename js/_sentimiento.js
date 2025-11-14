/* var chart = echarts.init(document.getElementById('chartSentimiento'));

chart.setOption({
    series: [
        {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            radius: "95%",
            center: ["50%", "80%"],

            pointer: { show: false },

            progress: {
                show: true,
                width: 40,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: "#4CAF50" },
                        { offset: 0.5, color: "#FFD633" },
                        { offset: 1, color: "#E53935" }
                    ])
                }
            },

            axisLine: {
                lineStyle: {
                    width: 40,
                    color: [[1, "#eee"]]
                }
            },

            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },

            data: [{ value: 65.3 }]
        }
    ]
});
 */

var chart = echarts.init(document.getElementById('chartSentimiento'));

chart.setOption({
  series: [
      {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          radius: "95%",
          center: ["50%", "80%"],

          pointer: { show: false },

          // 4 colores en 4 tramos de 25%
          axisLine: {
              lineStyle: {
                  width: 40,
                  color: [
                      [0.25, "#4CAF50"], // 0% - 25% Verde
                      [0.50, "#FFD633"], // 25% - 50% Amarillo
                      [0.75, "#FF8C00"], // 50% - 75% Naranja
                      [1.00, "#E53935"]  // 75% - 100% Rojo
                  ]
              }
          },

          // Progreso → también puede ser multicolor, pero lo dejamos uniforme o lo quitamos
          progress: {
              show: true,
              width: 40,
              itemStyle: {
                  color: "#99900000" // transparente para que no tape los colores
              }
          },

          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },

          data: [{ value: 65.3 }]
      }
  ]
});

window.addEventListener("resize", () => {
  if (chart) chart.resize();
});


const gaugeContainer = document.querySelector(".gauge-wrapper");

if (gaugeContainer) {
    const ro = new ResizeObserver(() => {
        if (chart) chart.resize();
    });

    ro.observe(gaugeContainer);
}


const toggleSidebar = document.getElementById("toggleSidebar");

if (toggleSidebar) {
    toggleSidebar.addEventListener("click", () => {
        setTimeout(() => {
            if (chart) chart.resize();
        }, 350); // espera la animación del sidebar
    });
}
