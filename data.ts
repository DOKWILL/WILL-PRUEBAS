import { DashboardData } from './types';

// Simulation constants
const BARRIOS = ['Atalaya', 'La Libertad', 'Centro', 'Aeropuerto', 'San Luis', 'Belén', 'Comuneros', 'Prados Norte', 'Caobos', 'Guaimaral'];
const DIAGNOSES = ['IRA (Gripe)', 'COVID-19', 'Bronquitis', 'Neumonía', 'Asma', 'Influenza'];

export const MOCK_DATA: DashboardData = {
  metrics: [
    { label: 'Casos Totales 2024', value: '1,245', change: 15.3, trend: 'up', inverse: true },
    { label: 'Casos Activos', value: '184', change: 5.2, trend: 'up', inverse: true },
    { label: 'Recuperados', value: '982', change: 12.1, trend: 'up', inverse: false },
    { label: 'Ocupación UCI', value: '42%', change: -3.5, trend: 'down', inverse: true },
  ],
  history: [
    { date: 'Ene', value: 85, severity: 10 },
    { date: 'Feb', value: 92, severity: 12 },
    { date: 'Mar', value: 105, severity: 15 },
    { date: 'Abr', value: 145, severity: 25 }, // First rainy season peak
    { date: 'May', value: 160, severity: 30 },
    { date: 'Jun', value: 120, severity: 20 },
    { date: 'Jul', value: 95, severity: 15 },
    { date: 'Ago', value: 88, severity: 12 },
    { date: 'Sep', value: 110, severity: 18 },
    { date: 'Oct', value: 135, severity: 22 }, // Second rainy season start
    { date: 'Nov', value: 110, severity: 15 }, // Simulated current partial month
  ],
  allocation: [
    { name: 'IRA (Gripe)', value: 450, color: '#3b82f6' }, // Blue
    { name: 'Influenza', value: 280, color: '#8b5cf6' }, // Violet
    { name: 'COVID-19', value: 150, color: '#ef4444' }, // Red
    { name: 'Asma', value: 120, color: '#f59e0b' }, // Amber
    { name: 'Neumonía', value: 95, color: '#10b981' }, // Emerald
    { name: 'Bronquitis', value: 150, color: '#64748b' }, // Slate
  ],
  riskHeatmap: [
    { name: 'Atalaya', category: 'Zona Norte', size: 100, riskScore: 8.5 }, // High risk
    { name: 'La Libertad', category: 'Zona Oriente', size: 85, riskScore: 6.2 },
    { name: 'Centro', category: 'Zona Centro', size: 90, riskScore: -2.1 },
    { name: 'Aeropuerto', category: 'Zona Norte', size: 70, riskScore: 4.5 },
    { name: 'San Luis', category: 'Zona Oriente', size: 60, riskScore: 1.2 },
    { name: 'Belén', category: 'Zona Sur', size: 50, riskScore: -5.4 },
    { name: 'Comuneros', category: 'Zona Norte', size: 80, riskScore: 5.8 },
    { name: 'Prados Norte', category: 'Zona Este', size: 40, riskScore: -1.5 },
    { name: 'Caobos', category: 'Zona Este', size: 35, riskScore: 0.5 },
    { name: 'Guaimaral', category: 'Zona Centro', size: 45, riskScore: 2.3 },
    { name: 'Cundinamarca', category: 'Zona Sur', size: 55, riskScore: -3.2 },
    { name: 'Loma de Bolívar', category: 'Zona Oeste', size: 30, riskScore: 1.8 },
  ],
  recentRecords: [
    { id: 'REC-100', type: 'Ingreso', diagnosis: 'Neumonía', location: 'Atalaya', date: 'Hace 1h', status: 'Crítico' },
    { id: 'REC-099', type: 'Urgencias', diagnosis: 'Asma Severo', location: 'Centro', date: 'Hace 2h', status: 'Estable' },
    { id: 'REC-098', type: 'Alta', diagnosis: 'IRA (Gripe)', location: 'La Libertad', date: 'Hace 4h', status: 'Recuperado' },
    { id: 'REC-097', type: 'Ingreso', diagnosis: 'COVID-19', location: 'Aeropuerto', date: 'Hace 6h', status: 'Estable' },
    { id: 'REC-096', type: 'Urgencias', diagnosis: 'Bronquitis', location: 'San Luis', date: 'Ayer', status: 'Estable' },
    { id: 'REC-095', type: 'Alta', diagnosis: 'Influenza', location: 'Belén', date: 'Ayer', status: 'Recuperado' },
    { id: 'REC-094', type: 'Ingreso', diagnosis: 'Neumonía', location: 'Atalaya', date: 'Ayer', status: 'Crítico' },
    { id: 'REC-093', type: 'Urgencias', diagnosis: 'IRA (Gripe)', location: 'Comuneros', date: 'Hace 2d', status: 'Estable' },
  ]
};