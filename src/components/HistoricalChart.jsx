import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function HistoricalChart({ from, to }) {
  const [chartData, setChartData] = useState([]);

  // Generate realistic 7-day mock data since free APIs restrict historical endpoints
  useEffect(() => {
    const generateMockData = () => {
      const data = [];
      let baseRate = 1.25; // Starting arbitrary rate
      const today = new Date();

      for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // Create a realistic-looking random fluctuation
        const fluctuation = (Math.random() - 0.5) * 0.05; 
        baseRate = Math.abs(baseRate + fluctuation);

        data.push({
          day: date.toLocaleDateString("en-US", { weekday: "short" }),
          rate: Number(baseRate.toFixed(4)),
        });
      }
      setChartData(data);
    };

    generateMockData();
  }, [from, to]); // Re-run the generation whenever currencies change

  // Custom Tooltip for Dark/Light mode support
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-[#1C2333] border border-slate-200 dark:border-slate-700 p-3 rounded-xl shadow-lg">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{label}</p>
          <p className="text-lg font-bold text-violet-600 dark:text-violet-400">
            {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-[#151B2B] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-none transition-colors duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-violet-100 dark:bg-violet-500/10 rounded-lg">
          <svg className="w-5 h-5 text-violet-600 dark:text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            7-Day Trend
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {from} to {to}
          </p>
        </div>
      </div>

      {/* Recharts Graph */}
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#64748b" opacity={0.15} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              dy={10} 
            />
            <YAxis 
              domain={['auto', 'auto']} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="rate" 
              stroke="#8B5CF6" /* Tailwind Violet-500 */
              strokeWidth={3} 
              dot={{ r: 4, fill: '#8B5CF6', strokeWidth: 2, stroke: '#fff' }} 
              activeDot={{ r: 6, fill: '#8B5CF6', stroke: '#fff', strokeWidth: 2 }} 
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}