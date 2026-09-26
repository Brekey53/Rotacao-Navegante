'use client';

import { useState } from 'react';

export default function Simulator() {
  const [hours, setHours] = useState(40);
  
  // Exemplo de cálculo (ajustável)
  const averagePerHour = 15; // 15€/hora
  const weeklyQuota = 35; // 35€/semana
  
  const grossIncome = hours * averagePerHour;
  const netIncome = grossIncome - weeklyQuota;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 text-slate-800 dark:text-slate-100 shadow-2xl dark:shadow-white/5 relative border border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="mb-8">
        <label htmlFor="hours" className="block text-lg font-medium text-slate-700 dark:text-slate-300 mb-4 text-left">
          Quantas horas planeia conduzir por semana? <span className="font-bold text-[#F1B631] ml-2">{hours}h</span>
        </label>
        <div className="flex items-center justify-between mb-2 text-sm text-slate-500 dark:text-slate-400 font-medium" aria-hidden="true">
          <span>10h</span>
          <span>40h</span>
          <span>80h</span>
        </div>
        <input 
          type="range" 
          min="10" 
          max="80"
          step="5"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#F1B631] focus:outline-none focus:ring-2 focus:ring-[#F1B631] focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-shadow"
          id="hours"
          aria-label={`Deslize para selecionar as horas semanais. Atualmente: ${hours} horas`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left border-t border-slate-100 dark:border-slate-800 pt-8 transition-colors">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Faturação Bruta Est.</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">~ {grossIncome}€</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Quota Semanal</p>
          <p className="text-2xl font-bold text-red-500 dark:text-red-400">- {weeklyQuota}€</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Lucro Líquido Est.</p>
          <p className="text-3xl font-extrabold text-green-600 dark:text-green-400">{netIncome}€</p>
        </div>
      </div>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 text-left leading-relaxed">
        * Valores meramente indicativos baseados numa média de {averagePerHour}€/hora faturados. Os ganhos reais dependem da eficiência, zona, horário e da procura nas plataformas.
      </p>

      <a 
        href="#contactos"
        className="block w-full bg-[#F1B631] text-[#0D2b45] font-bold text-lg px-8 py-4 rounded-xl hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
        aria-label="Quero este rendimento - Ir para os contactos"
      >
        Quero este rendimento
      </a>
    </div>
  );
}
