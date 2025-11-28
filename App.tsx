import React from 'react';
import { LayoutDashboard, PieChart, Activity, Bell, Search, Map, FileText, Ambulance } from 'lucide-react';
import { MOCK_DATA } from './data';
import { StatCard } from './components/StatCard';
import { PortfolioChart } from './components/PortfolioChart';
import { Heatmap } from './components/Heatmap';
import { AllocationChart } from './components/AllocationChart';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-rose-500/30">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-rose-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Salud Cúcuta
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-rose-400 text-sm font-medium flex items-center gap-1">
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                <Map className="w-4 h-4" /> Zonas
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                <FileText className="w-4 h-4" /> Reportes
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600">
                <span className="text-xs font-bold text-slate-300">MS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Vigilancia Epidemiológica</h1>
            <p className="text-slate-400">Enfermedades Respiratorias - Cúcuta 2024</p>
          </div>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-700">
            Descargar CSV
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {MOCK_DATA.metrics.map((metric, idx) => (
            <StatCard key={idx} metric={metric} />
          ))}
        </div>

        {/* Charts Section 1: History & Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-slate-800 border border-slate-700/50 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-amber-500" />
                Curva Epidemiológica
              </h2>
              <div className="flex gap-2">
                {['1S', '1M', '3M', '1A'].map((period) => (
                  <button 
                    key={period} 
                    className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                      period === '1A' 
                      ? 'bg-slate-700 text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <PortfolioChart data={MOCK_DATA.history} />
          </div>

          {/* Allocation Donut */}
          <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 shadow-lg">
             <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-500" />
                Tipos de Enfermedad
              </h2>
            </div>
            <AllocationChart data={MOCK_DATA.allocation} />
          </div>
        </div>

        {/* Heatmap Section */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 shadow-lg overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <Map className="w-5 h-5 text-emerald-500" />
                Mapa de Riesgo por Barrio
              </h2>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Top Zonas Afectadas</span>
            </div>
            <div className="w-full">
              <Heatmap data={MOCK_DATA.riskHeatmap} />
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-slate-800 border border-slate-700/50 rounded-xl p-6 shadow-lg overflow-hidden">
          <h2 className="text-lg font-semibold text-white mb-6">Últimos Registros Clínicos</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 text-xs uppercase tracking-wider">
                  <th className="pb-4 pl-4 font-medium">ID / Tipo</th>
                  <th className="pb-4 font-medium">Diagnóstico</th>
                  <th className="pb-4 font-medium">Barrio</th>
                  <th className="pb-4 font-medium">Fecha</th>
                  <th className="pb-4 font-medium text-right pr-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {MOCK_DATA.recentRecords.map((record) => (
                  <tr key={record.id} className="group hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 pl-4">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">{record.id}</span>
                        <span className={`inline-flex w-fit mt-1 items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase
                          ${record.type === 'Ingreso' ? 'bg-amber-500/10 text-amber-400' : 
                            record.type === 'Urgencias' ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                          {record.type}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-200 font-medium">{record.diagnosis}</td>
                    <td className="py-4 text-slate-200">{record.location}</td>
                    <td className="py-4 text-slate-400 text-sm">{record.date}</td>
                    <td className="py-4 text-right pr-4">
                       <span className={`text-xs font-semibold ${
                         record.status === 'Crítico' ? 'text-rose-400' : 
                         record.status === 'Estable' ? 'text-blue-400' : 'text-emerald-400'
                       }`}>
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;