// SWOT Analysis Component
'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { WalmartSWOTData } from '../../../walmart/data/competitive/marketIntelligence';

interface SWOTAnalysisProps {
  swotData: WalmartSWOTData;
}

export const SWOTAnalysis: React.FC<SWOTAnalysisProps> = ({ swotData }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case 'High': return 'bg-green-100 text-green-700 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Low': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">SWOT Analysis: Walmart Strategic Position</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="text-md font-semibold text-green-800 mb-3 flex items-center">
            <span className="mr-2">💪</span>
            Strengths
          </h4>
          <div className="space-y-3">
            {swotData.strengths.map((strength, index) => (
              <div key={index} className="bg-white p-3 rounded border border-green-100">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-gray-800">{strength.factor}</h5>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getImpactColor(strength.impact)}`}>
                    {strength.impact}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{strength.description}</p>
                {strength.data && (
                  <div className="text-lg font-bold text-green-600">
                    {typeof strength.data === 'number' && strength.data > 1000 
                      ? strength.data.toLocaleString() 
                      : strength.data}
                    {strength.factor.includes('Revenue') || strength.factor.includes('Scale') ? 'B' : ''}
                    {strength.factor.includes('Margin') || strength.factor.includes('Price') ? '%' : ''}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-md font-semibold text-red-800 mb-3 flex items-center">
            <span className="mr-2">⚠️</span>
            Weaknesses
          </h4>
          <div className="space-y-3">
            {swotData.weaknesses.map((weakness, index) => (
              <div key={index} className="bg-white p-3 rounded border border-red-100">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-gray-800">{weakness.factor}</h5>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getImpactColor(weakness.impact)}`}>
                    {weakness.impact}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{weakness.description}</p>
                {weakness.data && (
                  <div className="text-lg font-bold text-red-600">
                    {typeof weakness.data === 'number' && weakness.data > 100 
                      ? weakness.data.toLocaleString() 
                      : weakness.data}%
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-md font-semibold text-blue-800 mb-3 flex items-center">
            <span className="mr-2">🚀</span>
            Opportunities
          </h4>
          <div className="space-y-3">
            {swotData.opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-3 rounded border border-blue-100">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-gray-800">{opportunity.factor}</h5>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium border ${getPotentialColor(opportunity.potential)}`}>
                      {opportunity.potential}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{opportunity.description}</p>
                <div className="text-sm font-medium text-blue-600">
                  Timeline: {opportunity.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Threats */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h4 className="text-md font-semibold text-orange-800 mb-3 flex items-center">
            <span className="mr-2">🛡️</span>
            Threats
          </h4>
          <div className="space-y-3">
            {swotData.threats.map((threat, index) => (
              <div key={index} className="bg-white p-3 rounded border border-orange-100">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-medium text-gray-800">{threat.factor}</h5>
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${getSeverityColor(threat.severity)}`}>
                    {threat.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{threat.description}</p>
                <div className="text-sm font-medium text-orange-600">
                  Timeline: {threat.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
        <h4 className="text-md font-semibold text-gray-800 mb-3">Strategic Summary</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{swotData.strengths.length}</div>
            <div className="text-gray-600">Key Strengths</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{swotData.weaknesses.length}</div>
            <div className="text-gray-600">Critical Weaknesses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{swotData.opportunities.length}</div>
            <div className="text-gray-600">Growth Opportunities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{swotData.threats.length}</div>
            <div className="text-gray-600">External Threats</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SWOTAnalysis;
