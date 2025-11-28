export interface Metric {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'neutral';
  inverse?: boolean; // If true, 'up' trend is bad (red)
}

export interface ChartDataPoint {
  date: string;
  value: number; // Cases
  severity: number; // Critical cases or another metric
}

export interface DistributionItem {
  name: string;
  value: number;
  color: string;
  [key: string]: any;
}

export interface RiskItem {
  name: string; // Neighborhood (Barrio)
  category: string;
  size: number; // Population density or total cases
  riskScore: number; // 0-100 or percentage change in cases
  [key: string]: any;
}

export interface PatientRecord {
  id: string;
  type: 'Ingreso' | 'Alta' | 'Urgencias';
  diagnosis: string;
  location: string; // Barrio
  date: string;
  status: 'Crítico' | 'Estable' | 'Recuperado';
}

export interface DashboardData {
  metrics: Metric[];
  history: ChartDataPoint[];
  allocation: DistributionItem[];
  riskHeatmap: RiskItem[];
  recentRecords: PatientRecord[];
}