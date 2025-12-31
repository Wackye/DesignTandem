import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function VisionChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy previous chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['技術前瞻性', '人文關懷', '商業邏輯', '敘事魅力', '實作可能性'],
        datasets: [{
          label: '實驗探索深度',
          data: [9, 8, 7, 10, 6],
          backgroundColor: 'rgba(225, 179, 130, 0.2)',
          borderColor: '#E1B382',
          borderWidth: 2,
          pointBackgroundColor: '#E1B382',
          pointHoverRadius: 8
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(255,255,255,0.1)' },
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { display: false },
            pointLabels: {
              font: { size: 12, family: "'Noto Sans TC', sans-serif", weight: '500' },
              color: '#999'
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}
