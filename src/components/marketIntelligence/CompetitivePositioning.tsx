// Competitive Positioning Matrix Component
'use client';

import React from 'react';
import { Card } from '@/components/ui';

interface CompetitivePositioningData {
  company: string;
  customerSatisfaction: number;
  priceCompetitiveness: number;
  digitalCapability: number;
  marketReach: number;
  brandStrength: number;
  innovation: number;
}

interface CompetitivePositioningProps {
  data: CompetitivePositioningData[];
}

export const CompetitivePositioning: React.FC<CompetitivePositioningProps> = ({ data }) => {
  const metrics = [
    { key: 'customerSatisfaction', label: 'Customer Satisfaction', weight: 0.2 },
    { key: 'priceCompetitiveness', label: 'Price Competitiveness', weight: 0.2 },
    { key: 'digitalCapability', label: 'Digital Capability', weight: 0.2 },
    { key: 'marketReach', label: 'Market Reach', weight: 0.15 },
    { key: 'brandStrength', label: 'Brand Strength', weight: 0.15 },
    { key: 'innovation', label: 'Innovation', weight: 0.1 }
  ];

  // Calculate overall competitive score
  const dataWithScores = data.map(company => {
    const overallScore = metrics.reduce((sum, metric) => {
      return sum + (company[metric.key as keyof CompetitivePositioningData] as number) * metric.weight;
    }, 0);
    
    return {
      ...company,
      overallScore: overallScore
    };
  }).sort((a, b) => b.overallScore - a.overallScore);

  const getCompanyColor = (company: string) => {
    switch (company) {
      case 'Walmart': return 'bg-blue-600';
      case 'Amazon': return 'bg-orange-500';
      case 'Costco': return 'bg-red-500';
      case 'Target': return 'bg-red-600';
      case 'Home Depot': return 'bg-orange-600';
      default: return 'bg-gray-400';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-blue-600 bg-blue-50';
    if (score >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Competitive Positioning Matrix</h3>
      
      {/* Overall Rankings */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">Overall Competitive Ranking</h4>
        <div className="space-y-2">
          {dataWithScores.map((company, index) => (
            <div key={company.company} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-sm font-bold text-gray-600">#{index + 1}</div>
                <div className={`w-3 h-3 rounded-full ${getCompanyColor(company.company)}`} />
                <span className="font-medium text-gray-800">{company.company}</span>
              </div>
              <div className={`text-lg font-bold px-3 py-1 rounded ${getScoreColor(company.overallScore)}`}>
                {company.overallScore.toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Metrics Matrix */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">Detailed Performance Matrix</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 font-medium text-gray-700">Company</th>
                {metrics.map(metric => (
                  <th key={metric.key} className="text-center py-3 px-2 font-medium text-gray-700 text-xs">
                    {metric.label}
                  </th>
                ))}
                <th className="text-center py-3 px-2 font-medium text-gray-700">Overall</th>
              </tr>
            </thead>
            <tbody>
              {dataWithScores.map((company) => (
                <tr key={company.company} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getCompanyColor(company.company)}`} />
                      <span className="font-medium text-gray-800">{company.company}</span>
                    </div>
                  </td>
                  {metrics.map(metric => {
                    const score = company[metric.key as keyof CompetitivePositioningData] as number;
                    return (
                      <td key={metric.key} className="text-center py-3 px-2">
                        <div className={`inline-block px-2 py-1 rounded text-sm font-medium ${getScoreColor(score)}`}>
                          {score}
                        </div>
                      </td>
                    );
                  })}
                  <td className="text-center py-3 px-2">
                    <div className={`inline-block px-3 py-1 rounded font-bold ${getScoreColor(company.overallScore)}`}>
                      {company.overallScore.toFixed(1)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Radar Chart Alternative - Performance Comparison */}
      <div className="mb-6">
        <h4 className="text-md font-medium mb-3 text-gray-700">Walmart vs Competition Comparison</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map(metric => {
            const walmartScore = data.find(c => c.company === 'Walmart')?.[metric.key as keyof CompetitivePositioningData] as number || 0;
            const avgScore = data.reduce((sum, c) => sum + (c[metric.key as keyof CompetitivePositioningData] as number), 0) / data.length;
            const maxScore = Math.max(...data.map(c => c[metric.key as keyof CompetitivePositioningData] as number));
            const isLeading = walmartScore === maxScore;
            
            return (
              <div key={metric.key} className="p-4 border border-gray-200 rounded-lg">
                <div className="text-sm font-medium text-gray-800 mb-2">{metric.label}</div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>0</span>
                    <span>100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full relative"
                      style={{ width: `${walmartScore}%` }}
                    >
                      <div 
                        className="absolute top-0 h-2 bg-gray-400 opacity-50"
                        style={{ 
                          width: `${(avgScore / walmartScore) * 100}%`,
                          right: 0
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <div className={`font-bold ${isLeading ? 'text-green-600' : 'text-blue-600'}`}>
                      {walmartScore}
                      {isLeading && ' 👑'}
                    </div>
                    <div className="text-xs text-gray-600">Walmart</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-600">{avgScore.toFixed(1)}</div>
                    <div className="text-xs text-gray-600">Industry Avg</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Insights */}
      <div>
        <h4 className="text-md font-medium mb-3 text-gray-700">Key Strategic Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(() => {
            const walmart = dataWithScores.find(c => c.company === 'Walmart');
            const strongest = metrics.reduce((max, metric) => 
              (walmart?.[metric.key as keyof CompetitivePositioningData] as number || 0) > 
              (walmart?.[max.key as keyof CompetitivePositioningData] as number || 0) ? metric : max
            );
            const weakest = metrics.reduce((min, metric) => 
              (walmart?.[metric.key as keyof CompetitivePositioningData] as number || 100) < 
              (walmart?.[min.key as keyof CompetitivePositioningData] as number || 0) ? metric : min
            );
            
            return (
              <>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm font-semibold text-green-800 mb-1">Strongest Capability</div>
                  <div className="text-sm text-green-700">
                    {strongest.label}: {walmart?.[strongest.key as keyof CompetitivePositioningData]}/100
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="text-sm font-semibold text-orange-800 mb-1">Improvement Opportunity</div>
                  <div className="text-sm text-orange-700">
                    {weakest.label}: {walmart?.[weakest.key as keyof CompetitivePositioningData]}/100
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </Card>
  );
};

export default CompetitivePositioning;
