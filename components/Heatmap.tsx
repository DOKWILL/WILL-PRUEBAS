import React from 'react';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';
import { RiskItem } from '../types';

interface HeatmapProps {
  data: RiskItem[];
}

// Custom Content Render for the Treemap Cells
const CustomizedContent = (props: any) => {
  const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;

  // Use the riskScore from the payload to determine color
  const risk = payload?.riskScore || 0;
  
  // Color Logic for Risk (Higher is bad/red, Lower is good/green)
  let bgColor = '#334155'; // Neutral
  let textColor = '#f8fafc';

  if (risk > 0) {
    // High Risk - Red Scale
    if (risk > 5) bgColor = '#e11d48'; // Rose 600
    else if (risk > 2) bgColor = '#f43f5e'; // Rose 500
    else bgColor = '#fb7185'; // Rose 400
    
    if (risk < 2 && risk > 0) textColor = '#4c0519'; 
  } else if (risk < 0) {
    // Decreasing Risk - Green Scale
    if (risk < -5) bgColor = '#059669'; // Emerald 600
    else if (risk < -2) bgColor = '#10b981'; // Emerald 500
    else bgColor = '#34d399'; // Emerald 400

    if (risk > -2) textColor = '#022c22';
  }

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: bgColor,
          stroke: '#0f172a', 
          strokeWidth: 2,
          rx: 4, 
          ry: 4,
        }}
      />
      {width > 30 && height > 30 && (
        <>
          <text
            x={x + width / 2}
            y={y + height / 2 - 6}
            textAnchor="middle"
            fill={textColor}
            fontSize={Math.min(width / 5, 14)}
            fontWeight="bold"
          >
            {name}
          </text>
          <text
            x={x + width / 2}
            y={y + height / 2 + 10}
            textAnchor="middle"
            fill={textColor}
            fontSize={Math.min(width / 6, 12)}
          >
            {risk > 0 ? '+' : ''}{risk}%
          </text>
        </>
      )}
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-800 border border-slate-700 p-2 rounded shadow-lg text-sm">
        <p className="font-bold text-white">{data.name}</p>
        <p className="text-slate-400 text-xs italic">{data.category}</p>
        <p className={`${data.riskScore >= 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
          Tendencia: {data.riskScore > 0 ? '+' : ''}{data.riskScore}%
        </p>
        <p className="text-slate-400 text-xs">Casos: {data.size}</p>
      </div>
    );
  }
  return null;
};

export const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={data}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
          content={<CustomizedContent />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};