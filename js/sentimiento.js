var value = 90.3; // <<< Puedes cambiar este valor dinámicamente (0–100)

// Colocamos el valor también en el HTML
document.querySelector(".sent-valor").textContent = value.toFixed(1) + "%";

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

          axisLine: {
              lineStyle: {
                  width: 40,
                  color: [
                      [0.25, "#E53935"], 
                      [0.50, "#FF8C00"], 
                      [0.75, "#FFD633"],    
                      [1.00, "#4CAF50"]     
                  ]
              }
          },

          progress: {
              show: true,
              width: 40,
              itemStyle: {
                  color: "transparent"
              }
          },

          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },

         /*  data: [{ value }] */
      }
  ]
});


// ------------------------------
//     ROTACIÓN DE LA FLECHA
// ------------------------------
function updateNeedleRotation(val) {

    // Limitar entre 0 y 100
    val = Math.max(0, Math.min(100, val));

    // Conversión correcta:
    // 0%   →   0°
    // 100% → 180°
    const angle = val * 1.8;

    const needle = document.querySelector('.center-icon img');

    if (needle) {
        needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    }
}

updateNeedleRotation(value);


// ------------------------------
//     RESIZE DEL CHART
// ------------------------------
window.addEventListener("resize", () => {
  if (chart) chart.resize();
  updateNeedleRotation(value);
});


// ------------------------------
//     RESIZE OBSERVER
// ------------------------------
const gaugeContainer = document.querySelector(".gauge-wrapper");

if (gaugeContainer) {
    const ro = new ResizeObserver(() => {
        if (chart) chart.resize();
        updateNeedleRotation(value);
    });

    ro.observe(gaugeContainer);
}


// ------------------------------
//     RESIZE AL ABRIR/CERRAR SIDEBAR
// ------------------------------
const toggleSidebar = document.getElementById("toggleSidebar");

if (toggleSidebar) {
    toggleSidebar.addEventListener("click", () => {
        setTimeout(() => {
            if (chart) chart.resize();
            updateNeedleRotation(value);
        }, 350); 
    });
}
