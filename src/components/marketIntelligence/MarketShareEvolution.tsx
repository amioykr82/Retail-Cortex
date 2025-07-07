// Market Share Evolution Chart Component
'use client';

import React from 'react';
import { Card } from '@/components/ui';

interface MarketShareData {
  year: string;
  walmart: number;
  amazon: number;
  costco: number;
  target: number;
  homedepot: number;
  others: number;
}

interface MarketShareEvolutionProps {
  data: MarketShareData[];
}

export const MarketShareEvolution: React.FC<MarketShareEvolutionProps> = ({ data }) => {
  const companies = [
    { key: 'walmart', name: 'Walmart', color: 'bg-blue-600' },
    { key: 'amazon', name: 'Amazon', color: 'bg-orange-500' },
    { key: 'costco', name: 'Costco', color: 'bg-red-500' },
    { key: 'target', name: 'Target', color: 'bg-red-600' },
    { key: 'homedepot', name: 'Home Depot', color: 'bg-orange-600' },
    { key: 'others', name: 'Others', color: 'bg-gray-400' }
  ];

  // Get latest year data for current standings
  const latestData = data[data.length - 1];
  
  // Calculate market share changes
  const firstData = data[0];
  const shareChanges = companies.map(company => ({
    ...company,
    currentShare: latestData[company.key as keyof MarketShareData] as number,
    change: (latestData[company.key as keyof MarketShareData] as number) - 
            (firstData[company.key as keyof MarketShareData] as number)
  })).sort((a, b) => b.currentShare - a.currentShare);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Market Share Evolution (2020-2024)</h3>
      
      {/* Current Market Share */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">Current Market Position ({latestData.year})</h4>
        <div className="space-y-3">
          {shareChanges.map((company, index) => (
            <div key={company.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-sm font-medium text-gray-600">#{index + 1}</div>
                <div className={`w-3 h-3 rounded-full ${company.color}`} />
                <span className="font-medium text-gray-800">{company.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">{company.currentShare.toFixed(1)}%</div>
                  <div className="text-xs text-gray-600">Market Share</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${
                    company.change > 0 ? 'text-green-600' : 
                    company.change < 0 ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {company.change > 0 ? '+' : ''}{company.change.toFixed(1)}%
                  </div>
                  <div className="text-xs text-gray-600">vs 2020</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Historical Trend */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">5-Year Trend</h4>
        <div className="relative h-64 bg-gray-50 rounded-lg p-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-600 w-8">
            <span>25%</span>
            <span>20%</span>
            <span>15%</span>
            <span>10%</span>
            <span>5%</span>
            <span>0%</span>
          </div>
          
          {/* Chart area */}
          <div className="ml-8 h-full relative">
            {/* Grid lines */}
            <div className="absolute inset-0">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <div key={i} className="absolute w-full border-t border-gray-200" 
                     style={{ top: `${i * 20}%` }} />
              ))}
            </div>
            
            {/* Data lines for major competitors */}
            {companies.slice(0, 5).map((company) => (
              <div key={company.key} className="absolute inset-0">
                <svg className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke={company.color.replace('bg-', '').replace('blue-600', '#2563eb').replace('orange-500', '#f97316').replace('red-500', '#ef4444').replace('red-600', '#dc2626').replace('orange-600', '#ea580c')}
                    strokeWidth="2"
                    points={data.map((item, index) => {
                      const x = (index / (data.length - 1)) * 100;
                      const y = 100 - ((item[company.key as keyof MarketShareData] as number) / 25) * 100;
                      return `${x}%,${y}%`;
                    }).join(' ')}
                  />
                  {/* Data points */}
                  {data.map((item, index) => {
                    const x = (index / (data.length - 1)) * 100;
                    const y = 100 - ((item[company.key as keyof MarketShareData] as number) / 25) * 100;
                    return (
                      <circle
                        key={index}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="3"
                        fill={company.color.replace('bg-', '').replace('blue-600', '#2563eb').replace('orange-500', '#f97316').replace('red-500', '#ef4444').replace('red-600', '#dc2626').replace('orange-600', '#ea580c')}
                      />
                    );
                  })}
                </svg>
              </div>
            ))}
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-600">
              {data.map(item => (
                <span key={item.year}>{item.year}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div>
        <h4 className="text-md font-medium mb-3 text-gray-700">Key Market Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="text-sm font-semibold text-blue-800 mb-1">Walmart Leadership</div>
            <div className="text-sm text-blue-700">
              Maintains #1 position with {latestData.walmart.toFixed(1)}% market share, 
              {shareChanges[0].change > 0 ? ' growing ' : ' declining '} 
              {Math.abs(shareChanges[0].change).toFixed(1)}% since 2020
            </div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <div className="text-sm font-semibold text-orange-800 mb-1">Amazon Growth</div>
            <div className="text-sm text-orange-700">
              Strong #2 position at {latestData.amazon.toFixed(1)}% share, 
              gaining {(latestData.amazon - firstData.amazon).toFixed(1)}% market share over 5 years
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MarketShareEvolution;
