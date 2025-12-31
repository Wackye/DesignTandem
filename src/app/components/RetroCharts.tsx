import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);

export function ImpactChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['心理狀態', '知識提升', '關係連結', '工作表現', '信任程度'],
        datasets: [{
          label: '得分',
          data: [9, 8, 8, 6, 8.5],
          backgroundColor: 'rgba(107, 142, 153, 0.2)',
          borderColor: '#6B8E99',
          pointBackgroundColor: '#6B8E99'
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: { 
          r: { 
            suggestedMin: 0, 
            suggestedMax: 10, 
            ticks: { display: false } 
          } 
        },
        plugins: { 
          legend: { display: false },
          datalabels: {
            display: true,
            color: '#1A2B34',
            font: {
              weight: 'bold',
              size: 14
            },
            formatter: (value: number) => {
              return `${value}/10`;
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}

export function RoleChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['標竿', '軍師', '鏡子', '教練', '共犯'],
        datasets: [{
          data: [9, 9, 8, 7, 2],
          backgroundColor: ['#6B8E99', '#6B8E99', '#6B8E99', '#9FB6BC', '#D4A373']
        }]
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: { 
          x: { display: false }, 
          y: { grid: { display: false } } 
        },
        plugins: { 
          legend: { display: false },
          datalabels: {
            display: true,
            color: '#FFFFFF',
            font: {
              weight: 'bold',
              size: 14
            },
            anchor: 'end',
            align: 'start',
            offset: 10,
            formatter: (value: number) => {
              return `${value}/10`;
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}