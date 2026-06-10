import { Factory } from 'lucide-react';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-12 selection:bg-indigo-200">
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 p-2.5 rounded-xl shadow-inner shadow-indigo-400/20">
            <Factory className="text-white w-5 h-5" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800 leading-tight">
              Atlas Distribution
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">
              Wholesale Portal
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-sm font-semibold text-slate-700">Administrator Console</span>
            <span className="text-xs text-slate-500">Algiers Central Warehouse</span>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-indigo-100 bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold overflow-hidden">
            A
          </div>
        </div>
      </header>
      
      <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
        <Dashboard />
      </main>
    </div>
  );
}

