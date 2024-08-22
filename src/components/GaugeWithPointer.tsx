import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
  gaugeClasses,
} from "@mui/x-charts/Gauge";

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="#FF9053" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="#FF9053"
        strokeWidth={3}
      />
    </g>
  );
}

const GaugeWithPointer = () => {
  return (
    <GaugeContainer
      width={130}
      height={130}
      startAngle={-150}
      endAngle={150}
      value={30}
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
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
};
export default GaugeWithPointer;
