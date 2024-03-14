import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface ChartComponentProps {
  data: { label: string; value: number }[] | number[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current && chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((point, index) =>
            typeof point === "number" ? index.toString() : point.label
          ),
          datasets: [
            {
              label: "Dummy Data",
              data: data.map((point) =>
                typeof point === "number" ? point : point.value
              ),
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default ChartComponent;
