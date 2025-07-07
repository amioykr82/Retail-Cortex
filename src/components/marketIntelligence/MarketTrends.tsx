// Market Trends Component
'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { MarketTrendData } from '../../../walmart/data/competitive/marketIntelligence';

interface MarketTrendsProps {
  trends: MarketTrendData[];
}

export const MarketTrends: React.FC<MarketTrendsProps> = ({ trends }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDirectionIcon = (direction: string) => {
    switch (direction) {
      case 'Growing': return '↗️';
      case 'Declining': return '↘️';
      case 'Stable': return '→';
      default: return '?';
    }
  };

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'Leading': return 'text-green-600 bg-green-50';
      case 'Following': return 'text-yellow-600 bg-yellow-50';
      case 'Emerging': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Market Trends Analysis</h3>
      
      {/* Trends Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {trends.map((trend, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            {/* Trend Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-md font-semibold text-gray-800 mb-1">{trend.trend}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{trend.category}</span>
                  <span className="text-lg">{getDirectionIcon(trend.direction)}</span>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-md text-xs font-medium border ${getImpactColor(trend.impact)}`}>
                {trend.impact} Impact
              </div>
            </div>

            {/* Walmart Position */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Walmart Position:</span>
                <span className={`px-2 py-1 rounded-md text-xs font-medium ${getPositionColor(trend.walmartPosition)}`}>
                  {trend.walmartPosition}
                </span>
              </div>
            </div>

            {/* Trend Data Chart */}
            <div className="mb-4">
              <div className="text-sm font-medium text-gray-700 mb-2">Performance Trend ({trend.timeframe})</div>
              <div className="relative h-20 bg-gray-50 rounded p-2">
                {/* Simple line chart representation */}
                <div className="relative h-full">
                  {trend.data.map((dataPoint, dataIndex) => {
                    const maxValue = Math.max(...trend.data.map(d => Math.max(d.value, d.benchmark || 0)));
                    const minValue = Math.min(...trend.data.map(d => Math.min(d.value, d.benchmark || 0)));
                    const range = maxValue - minValue;
                    
                    const x = (dataIndex / (trend.data.length - 1)) * 100;
                    const walmartY = 100 - ((dataPoint.value - minValue) / range) * 80;
                    const benchmarkY = dataPoint.benchmark ? 100 - ((dataPoint.benchmark - minValue) / range) * 80 : null;
                    
                    return (
                      <div key={dataIndex} className="absolute" style={{ left: `${x}%`, transform: 'translateX(-50%)' }}>
                        {/* Walmart data point */}
                        <div 
                          className="w-2 h-2 bg-blue-600 rounded-full absolute"
                          style={{ top: `${walmartY}%`, transform: 'translateY(-50%)' }}
                          title={`${dataPoint.period}: ${dataPoint.value}`}
                        />
                        {/* Benchmark data point */}
                        {benchmarkY && (
                          <div 
                            className="w-2 h-2 bg-gray-400 rounded-full absolute"
                            style={{ top: `${benchmarkY}%`, transform: 'translateY(-50%)' }}
                            title={`${dataPoint.period} Benchmark: ${dataPoint.benchmark}`}
                          />
                        )}
                        {/* Year label */}
                        <div className="text-xs text-gray-600 absolute top-full mt-1 transform -translate-x-1/2">
                          {dataPoint.period}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center space-x-4 mt-2 text-xs">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-600">Walmart</span>
                </div>
                {trend.data.some(d => d.benchmark) && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    <span className="text-gray-600">Industry</span>
                  </div>
                )}
              </div>
            </div>

            {/* Latest Performance */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-2 bg-blue-50 rounded">
                <div className="text-lg font-bold text-blue-600">
                  {trend.data[trend.data.length - 1].value}
                  {trend.trend.includes('Penetration') || trend.trend.includes('Growth') ? '%' : ''}
                </div>
                <div className="text-gray-600">Current (2024)</div>
              </div>
              {trend.data[trend.data.length - 1].benchmark && (
                <div className="text-center p-2 bg-gray-50 rounded">
                  <div className="text-lg font-bold text-gray-600">
                    {trend.data[trend.data.length - 1].benchmark}
                    {trend.trend.includes('Penetration') || trend.trend.includes('Growth') ? '%' : ''}
                  </div>
                  <div className="text-gray-600">Industry Avg</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MarketTrends;
