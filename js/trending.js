const topics = [
    { name: "#Lider", value: 452 },
    { name: "#Controversia", value: 97 },
    { name: "#México", value: 61 }
];

var chartTrending = echarts.init(document.getElementById('chartTrending'));

const labels = topics.map(t => t.name);
const values = topics.map(t => t.value);
const maxValue = Math.max(...values);

chartTrending.setOption({

    grid: {
        left: 10,
        right: 40,
        top: 10,
        bottom: 60
    },

    xAxis: { show: false },
    yAxis: {
        type: "category",
        data: labels,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false }   // Ocultamos nombres aquí
    },

    series: [
        {
            type: "bar",
            data: values,
            barWidth: 14,
            itemStyle: {
                color: "#6418C4",
                borderRadius: 20
            },
            label: {
                show: true,
                position: "bottom",  // puedes cambiar a "top" si quieres
                offset: [50, 10],  
                formatter: function (p) {
                    const label = labels[p.dataIndex];
                    const num = values[p.dataIndex];
                    // {left|texto} {right|número}
                    return `{left|${label}}{right|${num} veces}`;
                },
                rich: {
                    left: {
                        color: "#000",
                        fontSize: 12,
                        align: "left",
                        with: 100
                    },
                    right: {
                        color: "#000",
                        fontSize: 13,
                        align: "right",
                        width: 100  // ancho para alinear a la derecha
                    }
                }
            }
        }
    ]
    
    
});

window.addEventListener("resize", () => {
    if (chartTrending) chartTrending.resize();
});
