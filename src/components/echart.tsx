import { useRef, useEffect } from "react";
import type { CSSProperties } from "react";
import { CanvasRenderer } from "echarts/renderers";
import { init, getInstanceByDom, use } from "echarts/core";
import { HeatmapChart, ScatterChart, LineChart, GraphChart, BarChart } from "echarts/charts";
import {
  LegendComponent,
  GridComponent,
  TooltipComponent,
  ToolboxComponent,
  VisualMapComponent,
  TitleComponent,
  DataZoomComponent,
} from "echarts/components";
import type { ECharts, ComposeOption, SetOptionOpts } from "echarts/core";
import type {
  BarSeriesOption,
  LineSeriesOption,
  ScatterSeriesOption,
} from "echarts/charts";
import type { TitleComponentOption, GridComponentOption } from "echarts/components";

// Register the required components
use([
  LegendComponent,
  ScatterChart,
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  ToolboxComponent, // A group of utility tools, which includes export, data view, dynamic type switching, data area zooming, and reset.
  DataZoomComponent, // Used in Line Graph Charts
  CanvasRenderer, // If you only need to use the canvas rendering mode, the bundle will not include the SVGRenderer module, which is not needed.
]);

// Combine an Option type with only required components and charts via ComposeOption
export type EChartsOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | ScatterSeriesOption
>;

export interface ReactEChartsProps {
  option?: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  height?: number | string,
  theme?: "light" | "dark";
}

export default function ReactECharts({
  // option,
  settings,
  loading,
  theme,
  height,
  ...style
}: ReactEChartsProps): JSX.Element {
  const chartRef = useRef<HTMLDivElement>(null);

  const option: ReactEChartsProps["option"] = {
    dataset: {
      source: [
        ["Commodity", "Owned", "Financed"],
        ["Commodity 1", 4, 1],
        ["Commodity 2", 2, 4],
        ["Commodity 3", 3, 6],
        ["Commodity 4", 5, 3],
      ],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Owned", "Financed"],
    },
    grid: {
      left: "10%",
      right: "0%",
      top: "20%",
      bottom: "20%",
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
    },
    series: [
      {
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
      },
      {
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
      },
    ],
  }
  

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  return <div ref={chartRef} style={{ width: "100%", height: height, ...style }} />;
}
