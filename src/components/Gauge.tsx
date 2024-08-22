import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { Box } from "@mui/material";

const GaugeComponent: React.FC<{
  value: number;
  startAngle: number;
  endAngle: number;
}> = ({ value, startAngle, endAngle }) => {
  return (
    <Box>
      <Gauge
        width={60}
        height={60}
        value={value}
        startAngle={startAngle}
        endAngle={endAngle}
        sx={() => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 12,
            fontWeight: 500,
            color: "#333333",
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#062982",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "#F0E5FC",
          },
        })}
        cornerRadius="50%"
        innerRadius="80%"
        outerRadius="100%"
        viewBox={{ width: 60, height: 60 }}
      />
    </Box>
  );
};

export default GaugeComponent;
