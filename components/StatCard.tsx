import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Metric } from '../types';

interface StatCardProps {
  metric: Metric;
}

export const StatCard: React.FC<StatCardProps> = ({ metric }) => {
  const isInverse = metric.inverse || false;

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': 
        return isInverse 
          ? 'text-rose-400 bg-rose-400/10' // Up is Bad
          : 'text-emerald-400 bg-emerald-400/10'; // Up is Good
      case 'down': 
        return isInverse
          ? 'text-emerald-400 bg-emerald-400/10' // Down is Good
          : 'text-rose-400 bg-rose-400/10'; // Down is Bad
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const getIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUpRight className="w-4 h-4" />;
      case 'down': return <ArrowDownRight className="w-4 h-4" />;
      default: return <Minus className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:border-slate-600 hover:shadow-lg hover:shadow-cyan-900/10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-slate-400 text-sm font-medium tracking-wide uppercase">{metric.label}</h3>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getTrendColor(metric.trend)}`}>
          {getIcon(metric.trend)}
          <span>{Math.abs(metric.change)}%</span>
        </div>
      </div>
      <div className="text-3xl font-bold text-white tracking-tight">
        {metric.value}
      </div>
    </div>
  );
};