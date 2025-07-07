// Walmart Competitive Landscape Component
'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { CompetitorData } from '../../../walmart/data/competitive/marketIntelligence';

interface CompetitiveLandscapeProps {
  competitors: CompetitorData[];
}

export const CompetitiveLandscape: React.FC<CompetitiveLandscapeProps> = ({ competitors }) => {
  // Sort competitors by revenue for display
  const sortedCompetitors = [...competitors].sort((a, b) => b.revenue - a.revenue);
  
  const formatCurrency = (value: number) => `$${value.toFixed(1)}B`;
  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Competitive Landscape</h3>
      
      {/* Revenue & Market Share Comparison */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">Revenue & Market Share</h4>
        <div className="space-y-3">
          {sortedCompetitors.map((competitor) => (
            <div key={competitor.company} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  competitor.company === 'Walmart' ? 'bg-blue-600' :
                  competitor.company === 'Amazon' ? 'bg-orange-500' :
                  competitor.company === 'Costco' ? 'bg-red-500' :
                  competitor.company === 'Target' ? 'bg-red-600' :
                  'bg-orange-600'
                }`} />
                <span className="font-medium text-gray-800">{competitor.company}</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-right">
                  <div className="font-semibold text-gray-800">{formatCurrency(competitor.revenue)}</div>
                  <div className="text-gray-600">Revenue</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-800">{formatPercentage(competitor.marketShare)}</div>
                  <div className="text-gray-600">Market Share</div>
                </div>
                <div className="text-right">
                  <div className={`font-semibold ${competitor.growth >= 5 ? 'text-green-600' : 'text-yellow-600'}`}>
                    {formatPercentage(competitor.growth)}
                  </div>
                  <div className="text-gray-600">Growth</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Performance */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">E-commerce Performance</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedCompetitors.map((competitor) => (
            <div key={`digital-${competitor.company}`} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border">
              <div className="text-sm font-medium text-gray-800 mb-2">{competitor.company}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {formatCurrency(competitor.ecommerceRevenue)}
              </div>
              <div className="text-sm text-gray-600 mb-2">E-commerce Revenue</div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Growth:</span>
                <span className={`font-semibold ${competitor.ecommerceGrowth >= 15 ? 'text-green-600' : 'text-yellow-600'}`}>
                  {formatPercentage(competitor.ecommerceGrowth)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">% of Total:</span>
                <span className="font-semibold text-gray-800">
                  {formatPercentage((competitor.ecommerceRevenue / competitor.revenue) * 100)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Metrics */}
      <div>
        <h4 className="text-md font-medium mb-3 text-gray-700">Operational Scale</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sortedCompetitors.map((competitor) => (
            <div key={`ops-${competitor.company}`} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-800 mb-2">{competitor.company}</div>
              <div className="text-lg font-bold text-indigo-600">{competitor.storeCount.toLocaleString()}</div>
              <div className="text-xs text-gray-600 mb-1">Stores</div>
              <div className="text-lg font-bold text-green-600">{(competitor.employees / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-gray-600">Employees</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CompetitiveLandscape;
