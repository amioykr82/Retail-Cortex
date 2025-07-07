'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { 
  Package, AlertTriangle, RotateCcw, MapPin, Activity,
  TrendingUp, CheckCircle, Clock, Truck, BarChart3, Target, Users,
  Zap, DollarSign, Shield, Leaf, ArrowUpRight, ArrowDownRight, 
  Minus, ChevronRight, Globe
} from 'lucide-react';
import { WalmartDataService } from '../../../walmart/services/dataService';

// Import types for better type safety
import type { 
  InventoryMetrics, 
  DistributionCenterData, 
  StoreClusterData, 
  CategoryAllocationData,
  SupplyChainKPIs,
  SupplyChainAlert 
} from '../../../walmart/data/operations/inventoryAllocation';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  trend?: number;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, value, subtitle, icon, trend, className = "" 
}) => {
  const getTrendIcon = () => {
    if (trend === undefined) return null;
    if (trend > 0) return <ArrowUpRight className="h-4 w-4 text-green-600" />;
    if (trend < 0) return <ArrowDownRight className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  const getTrendText = () => {
    if (trend === undefined) return '';
    const absValue = Math.abs(trend);
    return `${trend > 0 ? '+' : ''}${absValue.toFixed(1)}%`;
  };

  return (
    <Card className={className}>
      <CardContent className="flex items-center justify-between p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <div className="flex items-center space-x-2 mt-1">
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {trend !== undefined && (
              <div className="flex items-center space-x-1">
                {getTrendIcon()}
                <span className={`text-sm font-medium ${
                  trend > 0 ? 'text-green-600' : trend < 0 ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {getTrendText()}
                </span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div className="ml-4">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export default function InventoryAllocationPage() {
  const [dataService] = useState(() => WalmartDataService.getInstance());
  const [selectedView, setSelectedView] = useState<'overview' | 'distribution' | 'allocation' | 'analytics'>('overview');
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('30d');
  
  // Real Walmart data
  const [inventoryMetrics, setInventoryMetrics] = useState<InventoryMetrics | null>(null);
  const [distributionCenters, setDistributionCenters] = useState<DistributionCenterData[]>([]);
  const [storeClusters, setStoreClusters] = useState<StoreClusterData[]>([]);
  const [categoryAllocation, setCategoryAllocation] = useState<CategoryAllocationData[]>([]);
  const [supplyChainKPIs, setSupplyChainKPIs] = useState<SupplyChainKPIs | null>(null);
  const [supplyChainAlerts, setSupplyChainAlerts] = useState<SupplyChainAlert[]>([]);
  const [inventoryOptimization, setInventoryOptimization] = useState<{
    abcAnalysis?: Record<string, { percent: number; revenueContribution: number; managementFocus: string }>;
    safetyStockOptimization?: {
      averageReduction: number;
      serviceLevelMaintained: number;
      costSavings: number;
    };
    demandSensing?: {
      accuracy: number;
      leadTimeReduction: number;
      inventoryReduction: number;
    };
  } | null>(null);

  useEffect(() => {
    // Load real Walmart data
    setInventoryMetrics(dataService.getInventoryMetrics());
    setDistributionCenters(dataService.getDistributionCenters());
    setStoreClusters(dataService.getStoreClusters());
    setCategoryAllocation(dataService.getCategoryAllocation());
    setSupplyChainKPIs(dataService.getSupplyChainKPIs());
    setSupplyChainAlerts(dataService.getSupplyChainAlerts());
    setInventoryOptimization(dataService.getInventoryOptimization());
  }, [dataService]);

  if (!inventoryMetrics || !supplyChainKPIs) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading inventory data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory & Allocation</h1>
          <p className="text-gray-600 mt-2">Real-time supply chain operations and allocation optimization</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range as '24h' | '7d' | '30d' | '90d')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  timeRange === range 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { key: 'overview', label: 'Overview', icon: BarChart3 },
            { key: 'distribution', label: 'Distribution Network', icon: Truck },
            { key: 'allocation', label: 'Allocation Strategy', icon: Target },
            { key: 'analytics', label: 'Advanced Analytics', icon: Activity }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSelectedView(key as 'overview' | 'distribution' | 'allocation' | 'analytics')}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedView === key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {selectedView === 'overview' && (
        <>
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total SKUs"
              value={inventoryMetrics.totalSKUs.toLocaleString()}
              subtitle={`${inventoryMetrics.activeSKUs.toLocaleString()} active`}
              icon={<Package className="h-8 w-8 text-blue-600" />}
              trend={2.3}
            />
            <MetricCard
              title="Inventory Value"
              value={`$${inventoryMetrics.inventoryValue.toFixed(1)}B`}
              subtitle="Total inventory worth"
              icon={<DollarSign className="h-8 w-8 text-green-600" />}
              trend={1.8}
            />
            <MetricCard
              title="Turnover Rate"
              value={`${inventoryMetrics.turnoverRate}x`}
              subtitle={`${inventoryMetrics.daysOfSupply} days of supply`}
              icon={<RotateCcw className="h-8 w-8 text-purple-600" />}
              trend={0.5}
            />
            <MetricCard
              title="Perfect Order Rate"
              value={`${inventoryMetrics.perfectOrderRate}%`}
              subtitle={`${inventoryMetrics.outOfStockRate}% out-of-stock`}
              icon={<CheckCircle className="h-8 w-8 text-emerald-600" />}
              trend={-0.3}
            />
          </div>

          {/* Supply Chain KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Fill Rate"
              value={`${supplyChainKPIs.fillRate}%`}
              subtitle="Order fulfillment"
              icon={<Target className="h-8 w-8 text-blue-600" />}
              trend={0.8}
            />
            <MetricCard
              title="Cycle Time"
              value={`${supplyChainKPIs.cycleTime}d`}
              subtitle="Average cycle time"
              icon={<Clock className="h-8 w-8 text-orange-600" />}
              trend={-2.1}
            />
            <MetricCard
              title="Forecast Accuracy"
              value={`${supplyChainKPIs.forecastAccuracy}%`}
              subtitle="Demand prediction"
              icon={<TrendingUp className="h-8 w-8 text-indigo-600" />}
              trend={1.2}
            />
            <MetricCard
              title="Sustainability Score"
              value={supplyChainKPIs.sustainabilityScore}
              subtitle="ESG performance"
              icon={<Leaf className="h-8 w-8 text-green-600" />}
              trend={3.5}
            />
          </div>

          {/* Charts and Alerts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Supply Chain Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <span>Supply Chain Alerts</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    {supplyChainAlerts.length}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {supplyChainAlerts.slice(0, 5).map((alert) => (
                    <div
                      key={alert.alertId}
                      className={`p-3 rounded-lg border-l-4 ${
                        alert.severity === 'high' 
                          ? 'border-red-500 bg-red-50' 
                          : alert.severity === 'medium'
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-blue-500 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded uppercase font-medium ${
                              alert.severity === 'high' 
                                ? 'bg-red-200 text-red-800' 
                                : alert.severity === 'medium'
                                ? 'bg-yellow-200 text-yellow-800'
                                : 'bg-blue-200 text-blue-800'
                            }`}>
                              {alert.severity}
                            </span>
                            <span className="text-xs text-gray-500 uppercase">{alert.type}</span>
                          </div>
                          <h4 className="font-medium text-gray-900 mt-1">{alert.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                          <div className="mt-2 text-xs text-gray-500">
                            Impact: {alert.impact} | Revenue Loss: ${alert.estimatedRevenueLoss.toLocaleString()}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Allocation Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Category Allocation Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryAllocation.slice(0, 6)}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="inventoryValue"
                      nameKey="category"
                    >
                      {categoryAllocation.slice(0, 6).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => [`$${value.toFixed(1)}B`, 'Value']} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {categoryAllocation.slice(0, 6).map((category, index) => (
                    <div key={category.category} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-sm text-gray-600">{category.category}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Performance Details */}
          <Card>
            <CardHeader>
              <CardTitle>Category Performance Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Category</th>
                      <th className="text-right py-2">SKUs</th>
                      <th className="text-right py-2">Value ($B)</th>
                      <th className="text-right py-2">Turnover</th>
                      <th className="text-right py-2">Margin (%)</th>
                      <th className="text-right py-2">Forecast Acc.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryAllocation.map((category, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-2 font-medium">{category.category}</td>
                        <td className="py-2 text-right">{category.totalSKUs.toLocaleString()}</td>
                        <td className="py-2 text-right">${category.inventoryValue.toFixed(1)}B</td>
                        <td className="py-2 text-right">{category.turnoverRate.toFixed(1)}x</td>
                        <td className="py-2 text-right">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            category.margin > 25 ? 'bg-green-100 text-green-800' :
                            category.margin > 20 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {category.margin.toFixed(1)}%
                          </span>
                        </td>
                        <td className="py-2 text-right">{category.demandForecastAccuracy.toFixed(1)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {selectedView === 'distribution' && (
        <>
          {/* Distribution Center Network */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Distribution Center Network</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* DC Performance Chart */}
                <div>
                  <h4 className="text-lg font-medium mb-4">DC Performance Metrics</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={distributionCenters.slice(0, 5)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="dcId" />
                      <YAxis />
                      <Tooltip 
                        formatter={(value: number, name: string) => [
                          name === 'utilization' ? `${value}%` : value.toLocaleString(),
                          name === 'utilization' ? 'Utilization' : 'Throughput'
                        ]}
                      />
                      <Bar dataKey="utilization" fill="#0088FE" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* DC Details List */}
                <div>
                  <h4 className="text-lg font-medium mb-4">Distribution Centers</h4>
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {distributionCenters.slice(0, 5).map((dc) => (
                      <div key={dc.dcId} className="p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h5 className="font-medium text-gray-900">{dc.location}</h5>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                dc.type === 'Regional' ? 'bg-blue-100 text-blue-800' :
                                dc.type === 'E-commerce' ? 'bg-purple-100 text-purple-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {dc.type}
                              </span>
                            </div>
                            <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                              <div>Capacity: {dc.capacity}M ft³</div>
                              <div>Utilization: {dc.utilization}%</div>
                              <div>Throughput: {dc.throughput.toLocaleString()}/day</div>
                              <div>Automation: {dc.automation}%</div>
                            </div>
                            <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                              <span>On-time: {dc.onTimeShipment}%</span>
                              <span>Cost: ${dc.operatingCost}/unit</span>
                              <span>Carbon: {dc.carbonFootprint.toLocaleString()}t CO₂/yr</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Distribution Performance Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Automation vs Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={distributionCenters}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="automation" name="Automation %" />
                    <YAxis dataKey="onTimeShipment" name="On-time Shipment %" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="utilization" fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost vs Carbon Footprint</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={distributionCenters}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="operatingCost" name="Operating Cost $/unit" />
                    <YAxis dataKey="carbonFootprint" name="Carbon Footprint (tons/yr)" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="capacity" fill="#82ca9d" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {selectedView === 'allocation' && (
        <>
          {/* Store Clusters Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>Store Clustering & Allocation Strategy</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Cluster Performance Chart */}
                <div>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={storeClusters}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="clusterId" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="performanceMetrics.salesPerSqFt" fill="#0088FE" name="Sales/sq ft" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Cluster Details */}
                <div className="space-y-4">
                  {storeClusters.map((cluster) => (
                    <div key={cluster.clusterId} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">{cluster.clusterName}</h5>
                        <span className="text-sm text-gray-600">{cluster.storeCount} stores</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{cluster.allocationStrategy}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Avg Income: ${cluster.demographics.avgHouseholdIncome.toLocaleString()}</div>
                        <div>Density: {cluster.demographics.populationDensity.toLocaleString()}/mi²</div>
                        <div>Sales/ft²: ${cluster.performanceMetrics.salesPerSqFt}</div>
                        <div>Satisfaction: {cluster.performanceMetrics.customerSatisfaction}%</div>
                      </div>
                      <div className="mt-2">
                        <div className="flex flex-wrap gap-1">
                          {cluster.topCategories.slice(0, 3).map((category) => (
                            <span key={category} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {selectedView === 'analytics' && (
        <>
          {/* Advanced Analytics Dashboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-purple-600" />
                <span>Next-Generation Inventory Intelligence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
                {/* AI-Driven Replenishment */}
                <MetricCard
                  title="AI Automation"
                  value={`${dataService.getRealTimeInventoryIndicators().aiDrivenReplenishment.automationRate}%`}
                  subtitle="Replenishment decisions"
                  icon={<Zap className="h-8 w-8 text-purple-600" />}
                  trend={5.2}
                />
                {/* IoT Sensor Network */}
                <MetricCard
                  title="IoT Visibility"
                  value={`${dataService.getRealTimeInventoryIndicators().iotSensorNetwork.realTimeVisibility}%`}
                  subtitle={`${dataService.getRealTimeInventoryIndicators().iotSensorNetwork.activeSensors.toLocaleString()} sensors`}
                  icon={<Activity className="h-8 w-8 text-blue-600" />}
                  trend={3.8}
                />
                {/* Digital Twin Accuracy */}
                <MetricCard
                  title="Digital Twin"
                  value={`${dataService.getInventoryDigitalTwin().virtualInventoryAccuracy}%`}
                  subtitle="Virtual accuracy"
                  icon={<Globe className="h-8 w-8 text-green-600" />}
                  trend={2.1}
                />
                {/* Blockchain Tracking */}
                <MetricCard
                  title="Blockchain SKUs"
                  value={dataService.getRealTimeInventoryIndicators().blockchainTracking.skusTracked.toLocaleString()}
                  subtitle="Tracked with blockchain"
                  icon={<Shield className="h-8 w-8 text-indigo-600" />}
                  trend={12.4}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* ABC Analysis */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">ABC Analysis</h4>
                  <div className="space-y-3">
                    {inventoryOptimization?.abcAnalysis ? Object.entries(inventoryOptimization.abcAnalysis).map(([key, item]: [string, { percent: number; revenueContribution: number; managementFocus: string }]) => (
                      <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <div>
                          <span className={`text-xs px-2 py-1 rounded font-medium ${
                            key === 'aItems' ? 'bg-green-200 text-green-800' :
                            key === 'bItems' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-red-200 text-red-800'
                          }`}>
                            Class {key.charAt(0).toUpperCase()}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">{item.managementFocus} Focus</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{item.revenueContribution}%</p>
                          <p className="text-xs text-gray-500">of revenue</p>
                        </div>
                      </div>
                    )) : (
                      <div className="text-center text-gray-500 py-8">
                        ABC Analysis data loading...
                      </div>
                    )}
                  </div>
                </div>

                {/* Real-time Demand Signals */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">AI-Powered Insights</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Dynamic Safety Stock</span>
                        <span className="text-xs px-2 py-1 rounded bg-blue-200 text-blue-800">
                          {dataService.getRealTimeInventoryIndicators().dynamicSafetyStock.realTimeAdjustments}/hr
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        {dataService.getRealTimeInventoryIndicators().dynamicSafetyStock.adaptiveModels} ML models running
                      </div>
                    </div>

                    <div className="p-3 bg-green-50 rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Demand Shaping</span>
                        <span className="text-xs px-2 py-1 rounded bg-green-200 text-green-800">
                          ${dataService.getRealTimeInventoryIndicators().demandShaping.revenueImpact}M
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        {dataService.getRealTimeInventoryIndicators().demandShaping.activePromotions} active promotions
                      </div>
                    </div>

                    <div className="p-3 bg-purple-50 rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Circular Supply Chain</span>
                        <span className="text-xs px-2 py-1 rounded bg-purple-200 text-purple-800">
                          {dataService.getRealTimeInventoryIndicators().circularSupplyChain.returnedItemsReprocessed}%
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        {dataService.getRealTimeInventoryIndicators().circularSupplyChain.wasteReduction}% waste reduction
                      </div>
                    </div>
                  </div>
                </div>

                {/* Space & Robotics Optimization */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Robotics & Space Optimization</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Robotic Automation</span>
                        <span className="text-xs px-2 py-1 rounded bg-indigo-200 text-indigo-800">
                          {dataService.getSpaceOptimization().roboticAutomation.robotsDeployed.toLocaleString()} robots
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        {dataService.getSpaceOptimization().roboticAutomation.pickingAccuracy}% accuracy
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        +{dataService.getSpaceOptimization().roboticAutomation.throughputImprovement}% throughput
                      </div>
                    </div>

                    <div className="p-3 border rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Dark Stores</span>
                        <span className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-800">
                          {dataService.getSpaceOptimization().darkStoreOperations.activeLocations} locations
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        {dataService.getSpaceOptimization().darkStoreOperations.orderFulfillmentSpeed} min avg fulfillment
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        ${dataService.getSpaceOptimization().darkStoreOperations.costPerOrder} cost per order
                      </div>
                    </div>

                    <div className="p-3 border rounded">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Warehouse Utilization</span>
                        <span className="text-xs px-2 py-1 rounded bg-green-200 text-green-800">
                          {dataService.getSpaceOptimization().warehouseUtilization}%
                        </span>
                      </div>
                      <div className="mt-2 text-xs text-gray-600">
                        +{dataService.getSpaceOptimization().slottingEfficiency}% slotting efficiency
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        -{dataService.getSpaceOptimization().pickPathOptimization}% pick path time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supply Chain Resilience & Digital Twin */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Supply Chain Resilience */}
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Resilience Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-medium">Overall Score</span>
                    <span className="text-2xl font-bold text-green-600">
                      {dataService.getSupplyChainResilience().diversificationScore}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full" 
                      style={{ width: `${dataService.getSupplyChainResilience().diversificationScore}%` }}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <div className="text-2xl font-bold text-blue-600">
                        {dataService.getSupplyChainResilience().riskMitigation.alternativeSuppliers}
                      </div>
                      <div className="text-xs text-gray-600">Alt. Suppliers/SKU</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <div className="text-2xl font-bold text-green-600">
                        {dataService.getSupplyChainResilience().agilityMetrics.responseTime}h
                      </div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="text-2xl font-bold text-purple-600">
                        {dataService.getSupplyChainResilience().networkRedundancy.backupRoutes}%
                      </div>
                      <div className="text-xs text-gray-600">Backup Routes</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded">
                      <div className="text-2xl font-bold text-orange-600">
                        {dataService.getSupplyChainResilience().networkRedundancy.inventoryBuffers}
                      </div>
                      <div className="text-xs text-gray-600">Strategic Buffers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Twin Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Digital Twin Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={[
                    { month: 'Jan', scenarios: 12500, accuracy: 97.8, recommendations: 450 },
                    { month: 'Feb', scenarios: 13200, accuracy: 98.1, recommendations: 520 },
                    { month: 'Mar', scenarios: 14100, accuracy: 98.4, recommendations: 567 },
                    { month: 'Apr', scenarios: 15780, accuracy: 98.4, recommendations: 567 },
                    { month: 'May', scenarios: 16200, accuracy: 98.6, recommendations: 590 },
                    { month: 'Jun', scenarios: 15780, accuracy: 98.4, recommendations: 567 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="scenarios" stroke="#0088FE" strokeWidth={2} name="Daily Scenarios" />
                    <Line type="monotone" dataKey="accuracy" stroke="#00C49F" strokeWidth={2} name="Accuracy %" />
                    <Line type="monotone" dataKey="recommendations" stroke="#FF8042" strokeWidth={2} name="Recommendations" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-blue-600">
                      {dataService.getInventoryDigitalTwin().scenarioSimulations.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Daily Simulations</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">
                      {dataService.getInventoryDigitalTwin().whatIfAnalyses}
                    </div>
                    <div className="text-xs text-gray-600">Active Scenarios</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">
                      {dataService.getInventoryDigitalTwin().optimizationRecommendations}
                    </div>
                    <div className="text-xs text-gray-600">Daily Recommendations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Predictive Analytics & Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Optimization Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h5 className="font-medium text-green-900">AI-Driven Working Capital Optimization</h5>
                    </div>
                    <p className="text-sm text-green-700 mt-2">
                      Potential $2.3B working capital reduction through AI-optimized inventory levels
                    </p>
                    <div className="mt-3 text-xs text-green-600">
                      Impact: High | Confidence: 89% | Timeline: 6 months | AI Automation: 67.8%
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <h5 className="font-medium text-blue-900">IoT-Enhanced Cross-docking</h5>
                    </div>
                    <p className="text-sm text-blue-700 mt-2">
                      15% efficiency improvement with IoT sensors and AI-powered routing
                    </p>
                    <div className="mt-3 text-xs text-blue-600">
                      Impact: Medium | Confidence: 76% | Timeline: 3 months | IoT Coverage: 71.4%
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-purple-600" />
                      <h5 className="font-medium text-purple-900">Blockchain Transparency</h5>
                    </div>
                    <p className="text-sm text-purple-700 mt-2">
                      89.3% fraud reduction and enhanced supply chain visibility
                    </p>
                    <div className="mt-3 text-xs text-purple-600">
                      Impact: High | Confidence: 84% | Timeline: 12 months | SKUs Tracked: 89.2K
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <h5 className="font-medium text-yellow-900">Predictive Maintenance ROI</h5>
                    </div>
                    <p className="text-sm text-yellow-700 mt-2">
                      34.6% maintenance cost reduction with 97.8% equipment uptime
                    </p>
                    <div className="mt-3 text-xs text-yellow-600">
                      Risk: Low | Action Required: Ongoing | Downtime: 4.2hrs/month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next-Gen Performance Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={[
                    { month: 'Jan', actual: 94.2, aiPredicted: 94.8, traditional: 94.1, target: 95.0 },
                    { month: 'Feb', actual: 93.8, aiPredicted: 94.5, traditional: 93.9, target: 95.0 },
                    { month: 'Mar', actual: 94.5, aiPredicted: 95.1, traditional: 94.2, target: 95.0 },
                    { month: 'Apr', actual: null, aiPredicted: 95.3, traditional: 94.1, target: 95.0 },
                    { month: 'May', actual: null, aiPredicted: 95.2, traditional: 94.3, target: 95.0 },
                    { month: 'Jun', actual: null, aiPredicted: 95.4, traditional: 94.2, target: 95.0 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[93, 96]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="actual" stroke="#0088FE" strokeWidth={2} name="Actual" />
                    <Line type="monotone" dataKey="aiPredicted" stroke="#00C49F" strokeWidth={2} strokeDasharray="5 5" name="AI Predicted" />
                    <Line type="monotone" dataKey="traditional" stroke="#FF8042" strokeWidth={2} strokeDasharray="3 3" name="Traditional" />
                    <Line type="monotone" dataKey="target" stroke="#FFA500" strokeWidth={1} name="Target" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 text-sm text-gray-600">
                  Perfect Order Rate prediction: AI models 94% accuracy vs 78% traditional forecasting
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="text-lg font-bold text-green-600">94%</div>
                    <div className="text-xs text-gray-600">AI Accuracy</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded">
                    <div className="text-lg font-bold text-orange-600">78%</div>
                    <div className="text-xs text-gray-600">Traditional</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
