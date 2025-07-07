// Real-Time Market Insights Component
'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { AlertTriangle, TrendingUp, Clock, Target, Zap } from 'lucide-react';

interface RealTimeMetrics {
  ecommerceGrowth: {
    walmart: number;
    industryAverage: number;
    amazonBenchmark: number;
    trend: string;
  };
  omnichannel: {
    clickAndCollect: {
      walmart: number;
      industry: number;
      growthRate: number;
    };
    sameDayDelivery: {
      walmart: number;
      amazon: number;
      target: number;
      growthRate: number;
    };
  };
  customerSatisfaction: {
    walmart: number;
    amazon: number;
    costco: number;
    target: number;
    industryAverage: number;
  };
  sustainability: {
    carbonReduction: {
      walmart: number;
      target2030: number;
      industryLeader: boolean;
    };
    renewableEnergy: {
      walmart: number;
      target2025: number;
      progress: string;
    };
  };
}

interface CompetitiveAlert {
  type: string;
  severity: string;
  competitor: string;
  alert: string;
  impact: string;
  recommendedAction: string;
  timeframe: string;
  date: string;
}

interface MarketOpportunity {
  opportunity: string;
  marketSize: number;
  walmartCurrentShare: number;
  potentialShare: number;
  timeframe: string;
  confidence: string;
  keyFactors: string[];
}

interface RealTimeInsightsProps {
  metrics: RealTimeMetrics;
  alerts: CompetitiveAlert[];
  opportunities: MarketOpportunity[];
}

export const RealTimeInsights: React.FC<RealTimeInsightsProps> = ({ 
  metrics, 
  alerts, 
  opportunities 
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-50 text-red-800';
      case 'medium': return 'border-yellow-500 bg-yellow-50 text-yellow-800';
      case 'low': return 'border-green-500 bg-green-50 text-green-800';
      default: return 'border-gray-500 bg-gray-50 text-gray-800';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'threat': return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'opportunity': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'trend': return <Zap className="h-4 w-4 text-blue-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-Time Performance Metrics */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <Clock className="h-5 w-5 mr-2 text-blue-600" />
          Real-Time Performance Metrics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* E-commerce Growth */}
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-blue-800">E-commerce Growth</div>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-900 mb-1">
              {metrics.ecommerceGrowth.walmart}%
            </div>
            <div className="text-xs text-blue-700">
              vs {metrics.ecommerceGrowth.industryAverage}% industry avg
            </div>
            <div className="text-xs text-blue-600 mt-1">
              📈 {metrics.ecommerceGrowth.trend}
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-green-800">Customer Satisfaction</div>
              <Target className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-900 mb-1">
              {metrics.customerSatisfaction.walmart}
            </div>
            <div className="text-xs text-green-700">
              Industry: {metrics.customerSatisfaction.industryAverage}
            </div>
            <div className="text-xs text-green-600 mt-1">
              Gap to leader: -{(metrics.customerSatisfaction.costco - metrics.customerSatisfaction.walmart).toFixed(1)}
            </div>
          </div>

          {/* Same-Day Delivery Coverage */}
          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-purple-800">Same-Day Delivery</div>
              <Zap className="h-4 w-4 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-900 mb-1">
              {metrics.omnichannel.sameDayDelivery.walmart}%
            </div>
            <div className="text-xs text-purple-700">
              Market coverage
            </div>
            <div className="text-xs text-purple-600 mt-1">
              Growing +{metrics.omnichannel.sameDayDelivery.growthRate}%
            </div>
          </div>

          {/* Sustainability Progress */}
          <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-emerald-800">Carbon Reduction</div>
              <div className="text-xs text-emerald-600">🌱</div>
            </div>
            <div className="text-2xl font-bold text-emerald-900 mb-1">
              {metrics.sustainability.carbonReduction.walmart}%
            </div>
            <div className="text-xs text-emerald-700">
              Since 2015 baseline
            </div>
            <div className="text-xs text-emerald-600 mt-1">
              Target 2030: {metrics.sustainability.carbonReduction.target2030}%
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">Renewable Energy Progress</span>
              <span className="text-gray-600">{metrics.sustainability.renewableEnergy.walmart}% / {metrics.sustainability.renewableEnergy.target2025}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${(metrics.sustainability.renewableEnergy.walmart / metrics.sustainability.renewableEnergy.target2025) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Competitive Alerts */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
          Competitive Intelligence Alerts
        </h3>
        
        <div className="space-y-3">
          {alerts.slice(0, 3).map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <div className="font-medium mb-1">{alert.alert}</div>
                    <div className="text-sm opacity-80 mb-2">{alert.impact}</div>
                    <div className="text-sm font-medium">
                      Recommended Action: {alert.recommendedAction}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium px-2 py-1 bg-white rounded">
                  {alert.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Market Opportunities */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <Target className="h-5 w-5 mr-2 text-green-600" />
          Strategic Market Opportunities
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-medium text-gray-800">{opportunity.opportunity}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  opportunity.confidence === 'High' ? 'bg-green-100 text-green-800' :
                  opportunity.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {opportunity.confidence}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Market Size:</span>
                  <span className="font-medium">${opportunity.marketSize}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Current Share:</span>
                  <span className="font-medium">${opportunity.walmartCurrentShare}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Potential:</span>
                  <span className="font-medium text-green-600">${opportunity.potentialShare}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-medium">{opportunity.timeframe}</span>
                </div>
              </div>

              <div className="text-xs text-gray-600">
                <div className="font-medium mb-1">Key Success Factors:</div>
                <ul className="space-y-1">
                  {opportunity.keyFactors.slice(0, 2).map((factor: string, i: number) => (
                    <li key={i}>• {factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RealTimeInsights;
