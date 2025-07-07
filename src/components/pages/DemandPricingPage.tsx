'use client';

import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart,
  Area
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  AlertCircle, 
  Brain, 
  BarChart3,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Globe,
  Percent,
  Activity,
  LineChart as LineChartIcon
} from 'lucide-react';

// Import Walmart data services
import { demandPricingService } from '../../../walmart/services/demandPricingService';
import {
  DemandForecast,
  PricingStrategy,
  DashboardAlert
} from '../../../walmart/types/demandPricing';

// Color palette for Walmart branding
const COLORS = {
  primary: '#0071ce',      // Walmart Blue
  secondary: '#ffc220',    // Walmart Yellow
  success: '#00a862',      // Green
  warning: '#ff6b35',      // Orange
  danger: '#e53e3e',       // Red
  gray: '#6b7280',         // Gray
  light: '#f3f4f6'         // Light Gray
};

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: React.ReactNode;
  color?: string;
  subtitle?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon, 
  color = COLORS.primary,
  subtitle 
}) => {
  const getChangeIcon = () => {
    if (changeType === 'increase') return <ArrowUp className="h-3 w-3" />;
    if (changeType === 'decrease') return <ArrowDown className="h-3 w-3" />;
    return <Minus className="h-3 w-3" />;
  };

  const getChangeColor = () => {
    if (changeType === 'increase') return 'text-green-600';
    if (changeType === 'decrease') return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
            {subtitle && (
              <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
            )}
            {change !== undefined && (
              <div className={`flex items-center text-sm ${getChangeColor()}`}>
                {getChangeIcon()}
                <span className="ml-1">{Math.abs(change)}%</span>
                <span className="ml-1 text-gray-500">vs last period</span>
              </div>
            )}
          </div>
          <div className="ml-4">
            <div className="p-3 rounded-lg" style={{ backgroundColor: `${color}20`, color: color }}>
              {icon}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface AlertBadgeProps {
  alert: DashboardAlert;
  onDismiss?: (id: string) => void;
}

const AlertBadge: React.FC<AlertBadgeProps> = ({ alert, onDismiss }) => {
  const getAlertIcon = () => {
    switch (alert.type) {
      case 'action_required': return <AlertTriangle className="h-4 w-4" />;
      case 'opportunity': return <TrendingUp className="h-4 w-4" />;
      case 'threat': return <AlertTriangle className="h-4 w-4" />;
      case 'success': return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getAlertColor = () => {
    switch (alert.priority) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-800';
      case 'high': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default: return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  return (
    <div className={`p-3 rounded-lg border ${getAlertColor()} mb-2 last:mb-0`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-2">
          {getAlertIcon()}
          <div className="flex-1">
            <p className="font-medium text-sm">{alert.title}</p>
            <p className="text-xs mt-1 opacity-90">{alert.description}</p>
          </div>
        </div>
        {onDismiss && (
          <button 
            onClick={() => onDismiss(alert.id)}
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default function DemandPricingPage() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Data state
  const [demandForecasts, setDemandForecasts] = useState<DemandForecast[]>([]);
  const [pricingStrategies, setPricingStrategies] = useState<PricingStrategy[]>([]);
  const [dashboardAlerts, setDashboardAlerts] = useState<DashboardAlert[]>([]);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        forecastsData,
        strategiesData,
        alertsData
      ] = await Promise.all([
        demandPricingService.getDemandForecasts(),
        demandPricingService.getPricingStrategies(),
        demandPricingService.getDashboardAlerts()
      ]);

      setDemandForecasts(forecastsData);
      setPricingStrategies(strategiesData);
      setDashboardAlerts(alertsData);
    } catch (err) {
      setError('Failed to load demand and pricing data');
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  const dismissAlert = async (alertId: string) => {
    try {
      await demandPricingService.markAlertAsRead(alertId);
      setDashboardAlerts(prev => prev.filter(alert => alert.id !== alertId));
    } catch (err) {
      console.error('Error dismissing alert:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Demand & Pricing Intelligence...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <p className="text-red-600 text-lg font-medium">{error}</p>
          <button 
            onClick={loadAllData}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'demand-forecasting', label: 'AI Demand Prediction', icon: <Brain className="h-4 w-4" /> },
    { id: 'intelligent-pricing', label: 'Intelligent Pricing', icon: <DollarSign className="h-4 w-4" /> },
    { id: 'market-intelligence', label: 'Market Intelligence', icon: <Globe className="h-4 w-4" /> },
    { id: 'promotional-analytics', label: 'Promotional Analytics', icon: <Percent className="h-4 w-4" /> },
    { id: 'performance-metrics', label: 'Performance Metrics', icon: <Target className="h-4 w-4" /> }
  ];

  const renderTabNavigation = () => (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  // Calculate overview metrics
  const totalOptimizationOpportunity = pricingStrategies.reduce((sum, strategy) => {
    return sum + ((strategy.optimalPrice - strategy.currentPrice) * 100); // Assuming 100 units per product
  }, 0);

  const avgMargin = pricingStrategies.length > 0 
    ? pricingStrategies.reduce((sum, strategy) => sum + strategy.marginAnalysis.currentMargin, 0) / pricingStrategies.length 
    : 0;

  const avgElasticity = pricingStrategies.length > 0
    ? pricingStrategies.reduce((sum, strategy) => sum + Math.abs(strategy.elasticity.coefficient), 0) / pricingStrategies.length
    : 0;

  const forecastAccuracy = demandForecasts.length > 0
    ? demandForecasts.reduce((sum, forecast) => sum + forecast.accuracy, 0) / demandForecasts.length
    : 0;

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Revenue Opportunity"
          value={`$${totalOptimizationOpportunity.toLocaleString()}`}
          change={15.8}
          changeType="increase"
          icon={<DollarSign className="h-6 w-6" />}
          color={COLORS.success}
          subtitle="Price optimization potential"
        />
        <MetricCard
          title="Forecast Accuracy"
          value={`${forecastAccuracy.toFixed(1)}%`}
          change={1.4}
          changeType="increase"
          icon={<Brain className="h-6 w-6" />}
          color={COLORS.primary}
          subtitle="AI prediction performance"
        />
        <MetricCard
          title="Avg Margin"
          value={`${avgMargin.toFixed(1)}%`}
          change={0.8}
          changeType="increase"
          icon={<Target className="h-6 w-6" />}
          color={COLORS.warning}
          subtitle="Across all categories"
        />
        <MetricCard
          title="Price Elasticity"
          value={avgElasticity.toFixed(1)}
          change={-2.1}
          changeType="decrease"
          icon={<TrendingUp className="h-6 w-6" />}
          color={COLORS.secondary}
          subtitle="Market responsiveness"
        />
      </div>

      {/* Alerts and Quick Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Demand Forecast Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={demandForecasts[0]?.forecastData.map(point => ({
                  date: new Date(point.date).toLocaleDateString(),
                  predicted: point.predictedDemand,
                  actual: point.actualDemand,
                  confidence: point.confidenceInterval.upper
                })) || []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke={COLORS.primary} 
                    strokeWidth={2} 
                    name="Predicted Demand" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke={COLORS.success} 
                    strokeWidth={2} 
                    name="Actual Demand" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="confidence" 
                    stroke={COLORS.gray} 
                    strokeWidth={1} 
                    strokeDasharray="5 5"
                    name="Upper Confidence" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Priority Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {dashboardAlerts.slice(0, 5).map((alert) => (
                  <AlertBadge key={alert.id} alert={alert} onDismiss={dismissAlert} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Price Optimization Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Price Optimization Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pricingStrategies.slice(0, 4).map((strategy, index) => {
              const priceDiff = strategy.optimalPrice - strategy.currentPrice;
              const isIncrease = priceDiff > 0;
              
              return (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{strategy.productName}</h4>
                    <div className="flex space-x-4 mt-2">
                      <span className="text-sm text-gray-600">Current: ${strategy.currentPrice}</span>
                      <span className="text-sm text-blue-600">Optimal: ${strategy.optimalPrice}</span>
                      <span className="text-sm text-gray-600">Margin: {strategy.marginAnalysis.currentMargin.toFixed(1)}%</span>
                      <span className="text-sm text-gray-600">Elasticity: {strategy.elasticity.coefficient.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
                      {isIncrease ? '+' : ''}${priceDiff.toFixed(2)}
                    </p>
                    <p className={`text-sm ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
                      {strategy.recommendedAction.type} by {Math.abs((priceDiff / strategy.currentPrice) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDemandForecasting = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Forecast Accuracy"
          value={`${forecastAccuracy.toFixed(1)}%`}
          change={1.4}
          changeType="increase"
          icon={<Brain className="h-6 w-6" />}
          color={COLORS.primary}
        />
        <MetricCard
          title="Active Forecasts"
          value={demandForecasts.length}
          icon={<LineChartIcon className="h-6 w-6" />}
          color={COLORS.success}
        />
        <MetricCard
          title="Avg Confidence"
          value={`${(demandForecasts.reduce((sum, f) => sum + f.confidence, 0) / Math.max(demandForecasts.length, 1)).toFixed(1)}%`}
          icon={<Target className="h-6 w-6" />}
          color={COLORS.warning}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {demandForecasts.map((forecast) => (
          <Card key={forecast.id}>
            <CardHeader>
              <CardTitle className="text-lg">{forecast.productName}</CardTitle>
              <p className="text-sm text-gray-600">{forecast.category} • Accuracy: {forecast.accuracy}%</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={forecast.forecastData.map(point => ({
                  date: new Date(point.date).toLocaleDateString(),
                  predicted: point.predictedDemand,
                  actual: point.actualDemand,
                  upper: point.confidenceInterval.upper,
                  lower: point.confidenceInterval.lower
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="upper" 
                    stroke="none" 
                    fill={`${COLORS.primary}20`} 
                    name="Confidence Range"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="lower" 
                    stroke="none" 
                    fill="white" 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke={COLORS.primary} 
                    strokeWidth={2} 
                    name="Predicted" 
                  />
                  {forecast.forecastData.some(p => p.actualDemand) && (
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke={COLORS.success} 
                      strokeWidth={2} 
                      name="Actual" 
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
              
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">External Factors</h4>
                <div className="space-y-1">
                  {forecast.externalFactors.map((factor, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{factor.name}</span>
                      <span className={`font-medium ${factor.impact > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {factor.impact > 0 ? '+' : ''}{(factor.impact * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderIntelligentPricing = () => (
    <div className="space-y-6">
      {/* Pricing Strategy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingStrategies.slice(0, 3).map((strategy) => (
          <Card key={strategy.id}>
            <CardHeader>
              <CardTitle className="text-lg">{strategy.productName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Price</span>
                  <span className="font-bold">${strategy.currentPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Optimized Price</span>
                  <span className="font-bold text-green-600">${strategy.optimalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Lift</span>
                  <span className="font-bold text-blue-600">+{((strategy.optimalPrice - strategy.currentPrice) / strategy.currentPrice * 100).toFixed(1)}%</span>
                </div>
                <div className="pt-2">
                  <div className="text-sm text-gray-600 mb-1">Confidence Score</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${strategy.elasticity.confidenceLevel}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{strategy.elasticity.confidenceLevel.toFixed(0)}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Price Elasticity Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <LineChartIcon className="h-5 w-5" />
            <span>Price Elasticity Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={pricingStrategies[0]?.elasticity.historicalData || []}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="price" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="demand" 
                stroke={COLORS.primary} 
                strokeWidth={2} 
                name="Demand Volume" 
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke={COLORS.success} 
                strokeWidth={2} 
                name="Revenue" 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Dynamic Pricing Rules */}
      <Card>
        <CardHeader>
          <CardTitle>Dynamic Pricing Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { rule: "Competitor Price Match", status: "Active", trigger: "< $0.50 difference", action: "Auto-adjust within 1 hour" },
              { rule: "Inventory Velocity", status: "Active", trigger: "< 30 days stock", action: "Increase price by 2-5%" },
              { rule: "Seasonal Demand", status: "Active", trigger: "Peak season", action: "Premium pricing enabled" },
              { rule: "Weather Impact", status: "Monitoring", trigger: "Weather events", action: "Category-specific adjustments" }
            ].map((rule, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{rule.rule}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    rule.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rule.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1"><strong>Trigger:</strong> {rule.trigger}</p>
                <p className="text-sm text-gray-600"><strong>Action:</strong> {rule.action}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderMarketIntelligence = () => (
    <div className="space-y-6">
      {/* Competitor Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Competitor Price Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { competitor: "Target", category: "Electronics", avgPrice: "$299.99", position: "2% higher", trend: "stable" },
                { competitor: "Amazon", category: "Home & Garden", avgPrice: "$45.87", position: "8% lower", trend: "decreasing" },
                { competitor: "Costco", category: "Groceries", avgPrice: "$125.50", position: "5% higher", trend: "increasing" },
                { competitor: "Best Buy", category: "Electronics", avgPrice: "$899.99", position: "12% higher", trend: "stable" }
              ].map((comp, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{comp.competitor}</h4>
                    <p className="text-sm text-gray-600">{comp.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{comp.avgPrice}</p>
                    <p className={`text-sm ${comp.position.includes('lower') ? 'text-red-600' : 'text-green-600'}`}>
                      {comp.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Market Share Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Groceries", share: 23.4, change: +0.8 },
                { category: "Electronics", share: 18.7, change: -0.3 },
                { category: "Home & Garden", share: 31.2, change: +1.2 },
                { category: "Clothing", share: 15.9, change: +0.5 }
              ].map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{cat.category}</span>
                    <span className="text-sm">{cat.share}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${cat.share}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Market Share</span>
                    <span className={cat.change > 0 ? 'text-green-600' : 'text-red-600'}>
                      {cat.change > 0 ? '+' : ''}{cat.change}% vs last quarter
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { region: "Southwest", revenue: "$2.3B", growth: +12.5, topCategory: "Home & Garden" },
              { region: "Northeast", revenue: "$1.9B", growth: +8.2, topCategory: "Electronics" },
              { region: "Southeast", revenue: "$2.1B", growth: +15.1, topCategory: "Groceries" },
              { region: "West Coast", revenue: "$1.8B", growth: +6.9, topCategory: "Clothing" },
              { region: "Midwest", revenue: "$1.7B", growth: +11.3, topCategory: "Auto & Tools" },
              { region: "Mountain", revenue: "$1.2B", growth: +18.7, topCategory: "Sports & Outdoors" }
            ].map((region, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-lg">{region.region}</h4>
                <p className="text-2xl font-bold text-blue-600 mt-1">{region.revenue}</p>
                <p className={`text-sm mt-1 ${region.growth > 10 ? 'text-green-600' : 'text-gray-600'}`}>
                  +{region.growth}% YoY Growth
                </p>
                <p className="text-xs text-gray-500 mt-2">Top: {region.topCategory}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPromotionalAnalytics = () => (
    <div className="space-y-6">
      {/* Active Promotions Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Active Promotions Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                name: "Black Friday Preview", 
                type: "Rollback", 
                discount: "25%", 
                revenue: "$1.2M", 
                units: "45K", 
                roi: 3.8,
                status: "active" 
              },
              { 
                name: "Electronics Flash Sale", 
                type: "Limited Time", 
                discount: "15%", 
                revenue: "$890K", 
                units: "28K", 
                roi: 2.9,
                status: "active" 
              },
              { 
                name: "Grocery BOGO", 
                type: "Buy One Get One", 
                discount: "50%", 
                revenue: "$2.1M", 
                units: "156K", 
                roi: 4.2,
                status: "active" 
              }
            ].map((promo, idx) => (
              <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium">{promo.name}</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {promo.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{promo.type} • {promo.discount} off</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm">Revenue</span>
                    <span className="font-bold">{promo.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Units Sold</span>
                    <span className="font-bold">{promo.units}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">ROI</span>
                    <span className="font-bold text-green-600">{promo.roi}x</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Seasonal Promotion Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Seasonal Promotion Effectiveness</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={[
              { month: 'Jan', revenue: 1200000, promotions: 8 },
              { month: 'Feb', revenue: 980000, promotions: 6 },
              { month: 'Mar', revenue: 1450000, promotions: 12 },
              { month: 'Apr', revenue: 1320000, promotions: 9 },
              { month: 'May', revenue: 1680000, promotions: 15 },
              { month: 'Jun', revenue: 1550000, promotions: 11 },
              { month: 'Jul', revenue: 1890000, promotions: 18 },
              { month: 'Aug', revenue: 1720000, promotions: 14 },
              { month: 'Sep', revenue: 1980000, promotions: 16 },
              { month: 'Oct', revenue: 2340000, promotions: 22 },
              { month: 'Nov', revenue: 3100000, promotions: 35 },
              { month: 'Dec', revenue: 2850000, promotions: 28 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value: number | string, name: string) => [
                name === 'revenue' ? `$${(Number(value) / 1000000).toFixed(1)}M` : value,
                name === 'revenue' ? 'Revenue' : 'Active Promotions'
              ]} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke={COLORS.primary} 
                fill={`${COLORS.primary}30`}
                name="revenue"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Promotion ROI Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Best Performing Promotion Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "BOGO (Buy One Get One)", avgROI: 4.2, count: 45 },
                { type: "Percentage Discounts", avgROI: 3.8, count: 128 },
                { type: "Rollback Pricing", avgROI: 3.5, count: 89 },
                { type: "Bundle Deals", avgROI: 3.1, count: 67 },
                { type: "Flash Sales", avgROI: 2.9, count: 34 }
              ].map((type, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium">{type.type}</h4>
                    <p className="text-sm text-gray-600">{type.count} campaigns</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">{type.avgROI}x ROI</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Promotional Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { event: "Cyber Monday", date: "Nov 27", prep: "Ready", impact: "High" },
                { event: "Holiday Electronics", date: "Dec 1", prep: "Planning", impact: "High" },
                { event: "New Year Clearance", date: "Jan 2", prep: "Scheduled", impact: "Medium" },
                { event: "Valentine's Day", date: "Feb 14", prep: "Early Planning", impact: "Medium" },
                { event: "Spring Home & Garden", date: "Mar 15", prep: "Concept", impact: "High" }
              ].map((event, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium">{event.event}</h4>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm px-2 py-1 rounded-full ${
                      event.prep === 'Ready' ? 'bg-green-100 text-green-800' :
                      event.prep === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {event.prep}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{event.impact} Impact</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPerformanceMetrics = () => (
    <div className="space-y-6">
      {/* KPI Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Revenue Growth"
          value="$847.2M"
          change={12.5}
          icon={<DollarSign className="h-6 w-6" />}
          color={COLORS.success}
        />
        <MetricCard
          title="Price Optimization Savings"
          value="$23.4M"
          change={18.9}
          icon={<Target className="h-6 w-6" />}
          color={COLORS.primary}
        />
        <MetricCard
          title="Demand Forecast Accuracy"
          value="94.2%"
          change={2.1}
          icon={<Brain className="h-6 w-6" />}
          color={COLORS.secondary}
        />
        <MetricCard
          title="Market Share"
          value="23.7%"
          change={0.8}
          icon={<TrendingUp className="h-6 w-6" />}
          color={COLORS.warning}
        />
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Trends (Last 12 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={[
              { month: 'Nov 22', revenue: 720, optimization: 18.2, accuracy: 91.5, share: 22.1 },
              { month: 'Dec 22', revenue: 890, optimization: 19.8, accuracy: 92.1, share: 22.3 },
              { month: 'Jan 23', revenue: 650, optimization: 20.5, accuracy: 92.8, share: 22.5 },
              { month: 'Feb 23', revenue: 680, optimization: 21.1, accuracy: 93.2, share: 22.7 },
              { month: 'Mar 23', revenue: 750, optimization: 21.8, accuracy: 93.6, share: 22.9 },
              { month: 'Apr 23', revenue: 720, optimization: 22.2, accuracy: 93.9, share: 23.1 },
              { month: 'May 23', revenue: 780, optimization: 22.7, accuracy: 94.1, share: 23.2 },
              { month: 'Jun 23', revenue: 760, optimization: 23.0, accuracy: 94.3, share: 23.4 },
              { month: 'Jul 23', revenue: 820, optimization: 23.2, accuracy: 94.5, share: 23.5 },
              { month: 'Aug 23', revenue: 790, optimization: 23.5, accuracy: 94.7, share: 23.6 },
              { month: 'Sep 23', revenue: 810, optimization: 23.8, accuracy: 94.9, share: 23.7 },
              { month: 'Oct 23', revenue: 847, optimization: 23.4, accuracy: 94.2, share: 23.7 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke={COLORS.primary} strokeWidth={2} name="Revenue ($M)" />
              <Line type="monotone" dataKey="optimization" stroke={COLORS.success} strokeWidth={2} name="Optimization Savings ($M)" />
              <Line type="monotone" dataKey="accuracy" stroke={COLORS.warning} strokeWidth={2} name="Forecast Accuracy (%)" />
              <Line type="monotone" dataKey="share" stroke={COLORS.secondary} strokeWidth={2} name="Market Share (%)" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Category Performance Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Groceries", score: 94.5, trend: "up", revenue: "$2.1B" },
                { category: "Electronics", score: 91.2, trend: "up", revenue: "$1.8B" },
                { category: "Home & Garden", score: 89.8, trend: "stable", revenue: "$1.5B" },
                { category: "Clothing", score: 87.3, trend: "down", revenue: "$1.2B" },
                { category: "Auto & Tools", score: 85.9, trend: "up", revenue: "$980M" }
              ].map((cat, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="font-bold text-gray-500">#{idx + 1}</div>
                    <div>
                      <h4 className="font-medium">{cat.category}</h4>
                      <p className="text-sm text-gray-600">{cat.revenue} revenue</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center space-x-2">
                    <span className="font-bold">{cat.score}</span>
                    {cat.trend === 'up' && <ArrowUp className="h-4 w-4 text-green-600" />}
                    {cat.trend === 'down' && <ArrowDown className="h-4 w-4 text-red-600" />}
                    {cat.trend === 'stable' && <Minus className="h-4 w-4 text-gray-600" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Operational Efficiency Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { metric: "Price Update Speed", value: "< 15 min", target: "< 30 min", status: "excellent" },
                { metric: "Forecast Processing Time", value: "2.3 sec", target: "< 5 sec", status: "excellent" },
                { metric: "Data Freshness", value: "Real-time", target: "< 1 hour", status: "excellent" },
                { metric: "System Uptime", value: "99.97%", target: "> 99.5%", status: "excellent" },
                { metric: "Alert Response Time", value: "4.2 min", target: "< 10 min", status: "good" }
              ].map((metric, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium">{metric.metric}</h4>
                    <p className="text-sm text-gray-600">Target: {metric.target}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{metric.value}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      metric.status === 'excellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'demand-forecasting': return renderDemandForecasting();
      case 'intelligent-pricing': return renderIntelligentPricing();
      case 'market-intelligence': return renderMarketIntelligence();
      case 'promotional-analytics': return renderPromotionalAnalytics();
      case 'performance-metrics': return renderPerformanceMetrics();
      default: return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Demand & Pricing Intelligence</h1>
        <p className="text-gray-600 mt-2">AI-driven demand forecasting and intelligent pricing optimization</p>
      </div>

      {renderTabNavigation()}
      {renderActiveTab()}
    </div>
  );
}
