'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui';
import { TrendingUp, Target, AlertCircle, BarChart3, Globe } from 'lucide-react';
import { WalmartDataService } from '../../../walmart/services/dataService';
import CompetitiveLandscape from '../marketIntelligence/CompetitiveLandscape';
import MarketShareEvolution from '../marketIntelligence/MarketShareEvolution';
import MarketTrends from '../marketIntelligence/MarketTrends';
import SWOTAnalysis from '../marketIntelligence/SWOTAnalysis';
import CompetitivePositioning from '../marketIntelligence/CompetitivePositioning';
import RealTimeInsights from '../marketIntelligence/RealTimeInsights';
import {
  CompetitorData,
  MarketTrendData,
  WalmartSWOTData
} from '../../../walmart/data/competitive/marketIntelligence';

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

interface MarketShareData {
  year: string;
  walmart: number;
  amazon: number;
  costco: number;
  target: number;
  homedepot: number;
  others: number;
}

interface CompetitivePositioningData {
  company: string;
  customerSatisfaction: number;
  priceCompetitiveness: number;
  digitalCapability: number;
  marketReach: number;
  brandStrength: number;
  innovation: number;
}

export default function MarketIntelligencePage() {
  const [loading, setLoading] = useState(true);
  const [competitors, setCompetitors] = useState<CompetitorData[]>([]);
  const [marketTrends, setMarketTrends] = useState<MarketTrendData[]>([]);
  const [swotData, setSWOTData] = useState<WalmartSWOTData | null>(null);
  const [marketShareData, setMarketShareData] = useState<MarketShareData[]>([]);
  const [positioningData, setPositioningData] = useState<CompetitivePositioningData[]>([]);
  const [realTimeMetrics, setRealTimeMetrics] = useState<RealTimeMetrics | null>(null);
  const [competitiveAlerts, setCompetitiveAlerts] = useState<CompetitiveAlert[]>([]);
  const [marketOpportunities, setMarketOpportunities] = useState<MarketOpportunity[]>([]);

  useEffect(() => {
    const dataService = WalmartDataService.getInstance();
    
    try {
      // Load all market intelligence data
      const competitorData = dataService.getRetailCompetitors();
      const trendsData = dataService.getMarketTrends();
      const swotAnalysis = dataService.getSWOTAnalysis();
      const shareEvolution = dataService.getMarketShareEvolution();
      const positioning = dataService.getCompetitivePositioning();
      
      // Load real-time data
      const realTimeData = dataService.getRealTimeMetrics();
      const alertsData = dataService.getCompetitiveAlerts();
      const opportunitiesData = dataService.getMarketOpportunities();

      setCompetitors(competitorData);
      setMarketTrends(trendsData);
      setSWOTData(swotAnalysis);
      setMarketShareData(shareEvolution);
      setPositioningData(positioning);
      setRealTimeMetrics(realTimeData);
      setCompetitiveAlerts(alertsData);
      setMarketOpportunities(opportunitiesData);
    } catch (error) {
      console.error('Error loading market intelligence data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Calculate key metrics from real data
  const walmartData = competitors.find(c => c.company === 'Walmart');
  const marketPosition = competitors.sort((a, b) => b.marketShare - a.marketShare)
    .findIndex(c => c.company === 'Walmart') + 1;
  
  const walmartGrowthVsAvg = walmartData ? 
    walmartData.growth - (competitors.reduce((sum, c) => sum + c.growth, 0) / competitors.length) : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Market Intelligence</h1>
        <p className="text-gray-600 mt-2">Real-time competitive analysis and market insights for Walmart</p>
      </div>

      {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Market Position</p>
              <p className="text-2xl font-bold text-gray-900">#{marketPosition}</p>
              <p className="text-sm text-blue-600">Retail Industry</p>
            </div>
            <Target className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Market Share</p>
              <p className="text-2xl font-bold text-gray-900">{walmartData?.marketShare.toFixed(1)}%</p>
              <p className="text-sm text-green-600">
                {walmartGrowthVsAvg > 0 ? '↑' : '↓'} vs competitors
              </p>
            </div>
            <BarChart3 className="h-8 w-8 text-green-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue Growth</p>
              <p className="text-2xl font-bold text-gray-900">{walmartData?.growth.toFixed(1)}%</p>
              <p className="text-sm text-yellow-600">YoY Growth Rate</p>
            </div>
            <TrendingUp className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Global Presence</p>
              <p className="text-2xl font-bold text-gray-900">{walmartData?.storeCount.toLocaleString()}</p>
              <p className="text-sm text-purple-600">Store Locations</p>
            </div>
            <Globe className="h-8 w-8 text-purple-600" />
          </div>
        </Card>
      </div>

      {/* Real-Time Market Insights */}
      {realTimeMetrics && competitiveAlerts.length > 0 && marketOpportunities.length > 0 && (
        <RealTimeInsights 
          metrics={realTimeMetrics as RealTimeMetrics}
          alerts={competitiveAlerts}
          opportunities={marketOpportunities}
        />
      )}

      {/* Competitive Landscape */}
      <CompetitiveLandscape competitors={competitors} />

      {/* Market Share Evolution */}
      <MarketShareEvolution data={marketShareData} />

      {/* Market Trends Analysis */}
      <MarketTrends trends={marketTrends} />

      {/* Competitive Positioning Matrix */}
      <CompetitivePositioning data={positioningData} />

      {/* SWOT Analysis */}
      {swotData && <SWOTAnalysis swotData={swotData} />}

      {/* Real-time Insights */}
      {realTimeMetrics && (
        <RealTimeInsights 
          metrics={realTimeMetrics} 
          alerts={competitiveAlerts} 
          opportunities={marketOpportunities} 
        />
      )}

      {/* Strategic Action Items */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
          Strategic Action Items
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
            <div className="font-medium text-red-800 mb-1">High Priority</div>
            <div className="text-sm text-red-700">
              Accelerate digital transformation to close the gap with Amazon&apos;s e-commerce capabilities
            </div>
          </div>
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <div className="font-medium text-yellow-800 mb-1">Medium Priority</div>
            <div className="text-sm text-yellow-700">
              Expand advertising business to monetize customer data and compete with retail media networks
            </div>
          </div>
          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <div className="font-medium text-green-800 mb-1">Long-term Focus</div>
            <div className="text-sm text-green-700">
              Leverage sustainability leadership and automation to strengthen competitive moat
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
