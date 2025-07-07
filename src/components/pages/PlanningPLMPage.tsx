'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Target,
  Globe,
  Truck,
  Calendar,
  Activity
} from 'lucide-react';
import { PlanningPLMService } from '../../../walmart/services/planningPLMService';
import type { PLMPageState, PlanningPLMDashboard } from '../../../walmart/types/planningPLM';

// Helper function to convert service data to chart format
const convertProductLifecycleData = (data: PlanningPLMDashboard | null) => {
  if (!data) return [];
  return [
    { stage: 'Concept', products: 15, investment: 50000, timeToMarket: 8.2 },
    { stage: 'Development', products: 28, investment: 180000, timeToMarket: 12.5 },
    { stage: 'Testing', products: 22, investment: 120000, timeToMarket: 6.3 },
    { stage: 'Pre-Launch', products: 18, investment: 95000, timeToMarket: 4.1 },
    { stage: 'Launch', products: 12, investment: 220000, timeToMarket: 2.8 },
    { stage: 'Growth', products: 35, investment: 150000, timeToMarket: 0 },
    { stage: 'Maturity', products: 45, investment: 80000, timeToMarket: 0 },
    { stage: 'Decline', products: 18, investment: 20000, timeToMarket: 0 },
  ];
};

const convertSeasonalPlanningData = (data: PlanningPLMDashboard | null) => {
  if (!data?.seasonalPlanning?.activePlans) return [];
  return data.seasonalPlanning.activePlans.map(plan => ({
    season: `${plan.season} ${plan.year}`,
    planned: plan.objectives.length,
    actual: plan.objectives.length - 2, // Mock actual vs planned
    budget: plan.budget.totalBudget,
    spent: plan.budget.allocated,
    efficiency: (plan.budget.allocated / plan.budget.totalBudget) * 100
  }));
};

const convertSupplierPerformanceData = (data: PlanningPLMDashboard | null) => {
  if (!data?.supplierManagement?.suppliers) return [];
  return data.supplierManagement.suppliers.slice(0, 5).map(supplier => ({
    supplier: supplier.supplierName,
    performance: supplier.overallScore,
    onTimeDelivery: supplier.deliveryScore,
    quality: supplier.qualityScore,
    cost: supplier.costScore,
    sustainability: supplier.sustainabilityScore
  }));
};

const convertInnovationPipelineData = (data: PlanningPLMDashboard | null) => {
  if (!data?.innovationPipeline?.stages) return [];
  return data.innovationPipeline.stages.map(stage => ({
    category: stage.stage,
    concepts: stage.count,
    prototypes: Math.floor(stage.count * 0.4),
    testing: Math.floor(stage.count * 0.2),
    launches: Math.floor(stage.count * 0.1),
    revenue: stage.value
  }));
};

const convertAssortmentOptimizationData = (data: PlanningPLMDashboard | null) => {
  if (!data?.assortmentBuilding?.recommendations) return [];
  return data.assortmentBuilding.recommendations.map(rec => ({
    cluster: rec.storeCluster,
    currentSKUs: rec.recommendedProducts.length * 10, // Mock calculation
    recommendedAdd: rec.recommendedProducts.length,
    recommendedRemove: Math.floor(rec.recommendedProducts.length * 0.3),
    efficiency: rec.confidence
  }));
};

const convertLocalizationMetrics = (data: PlanningPLMDashboard | null) => {
  if (!data?.localization?.clusters) return [];
  return data.localization.clusters.slice(0, 5).map(cluster => ({
    region: cluster.clusterName,
    culturalAlignment: 88 + Math.random() * 10,
    languageSupport: 90 + Math.random() * 8,
    localPreferences: 85 + Math.random() * 12,
    satisfaction: 89 + Math.random() * 8
  }));
};

// Sample data for comprehensive PLM dashboard

const COLORS = ['#0071ce', '#f57c00', '#388e3c', '#d32f2f', '#7b1fa2', '#455a64'];

interface TabProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabContentProps {
  data: PlanningPLMDashboard | null;
}

const TabNavigation: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'seasonal', label: 'Seasonal Planning', icon: Calendar },
    { id: 'lifecycle', label: 'Product Lifecycle', icon: TrendingUp },
    { id: 'assortment', label: 'AI Assortment', icon: Target },
    { id: 'localization', label: 'Localization', icon: Globe },
    { id: 'suppliers', label: 'Suppliers', icon: Truck },
    { id: 'innovation', label: 'Innovation', icon: Lightbulb }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            <IconComponent className="h-4 w-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

const OverviewTab: React.FC<TabContentProps> = ({ data }) => {
  const kpis = data?.kpis || [];
  const timeToMarketKPI = kpis.find(kpi => kpi.name === 'Time to Market');
  const successRateKPI = kpis.find(kpi => kpi.name === 'Launch Success Rate');
  
  return (
  <div className="space-y-6">
    {/* KPI Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Time to Market</p>
              <p className="text-3xl font-bold">{timeToMarketKPI?.value || '8.2'} mo</p>
              <p className="text-blue-200 text-sm">↓ 12% vs last year</p>
            </div>
            <Clock className="h-12 w-12 text-blue-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Launch Success Rate</p>
              <p className="text-3xl font-bold">{successRateKPI?.value || '87.3'}%</p>
              <p className="text-green-200 text-sm">↑ 8% vs last year</p>
            </div>
            <CheckCircle className="h-12 w-12 text-green-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Supplier Diversity</p>
              <p className="text-3xl font-bold">76.8%</p>
              <p className="text-purple-200 text-sm">↑ 5% vs last year</p>
            </div>
            <Users className="h-12 w-12 text-purple-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Innovation Pipeline</p>
              <p className="text-3xl font-bold">247</p>
              <p className="text-orange-200 text-sm">Active projects</p>
            </div>
            <Lightbulb className="h-12 w-12 text-orange-200" />
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Charts Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Product Lifecycle Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={convertProductLifecycleData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="products" fill="#0071ce" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-orange-600" />
            Innovation Pipeline Revenue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={convertInnovationPipelineData(data)}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }: { name: string; percent?: number }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="revenue"
              >
                {convertInnovationPipelineData(data).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, 'Revenue']} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  </div>
  );
};

const SeasonalPlanningTab: React.FC<TabContentProps> = ({ data }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            Seasonal Planning Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={convertSeasonalPlanningData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="planned" stackId="1" stroke="#0071ce" fill="#0071ce" />
              <Area type="monotone" dataKey="actual" stackId="2" stroke="#f57c00" fill="#f57c00" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Planning Efficiency by Season</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={convertSeasonalPlanningData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="efficiency" stroke="#388e3c" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Seasonal Budget Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={convertSeasonalPlanningData(data)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="season" />
            <YAxis />
            <Tooltip formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`} />
            <Bar dataKey="budget" fill="#0071ce" />
            <Bar dataKey="spent" fill="#f57c00" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

const SupplierManagementTab: React.FC<TabContentProps> = ({ data }) => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-blue-600" />
          Supplier Performance Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={convertSupplierPerformanceData(data)} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="supplier" type="category" width={150} />
            <Tooltip />
            <Bar dataKey="performance" fill="#0071ce" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Quality vs Cost Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={convertSupplierPerformanceData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="supplier" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="quality" stroke="#388e3c" strokeWidth={2} />
              <Line type="monotone" dataKey="cost" stroke="#d32f2f" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sustainability Scores</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={convertSupplierPerformanceData(data)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="supplier" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sustainability" fill="#388e3c" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  </div>
);

const AssortmentOptimizationTab: React.FC<TabContentProps> = ({ data }) => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-600" />
          Assortment Optimization by Cluster
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={convertAssortmentOptimizationData(data)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cluster" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="currentSKUs" fill="#0071ce" />
            <Bar dataKey="recommendedAdd" fill="#388e3c" />
            <Bar dataKey="recommendedRemove" fill="#d32f2f" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Cluster Efficiency Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={convertAssortmentOptimizationData(data)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cluster" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="efficiency" stroke="#7b1fa2" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

const LocalizationTab: React.FC<TabContentProps> = ({ data }) => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-blue-600" />
          Regional Localization Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={convertLocalizationMetrics(data)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="culturalAlignment" fill="#0071ce" />
            <Bar dataKey="languageSupport" fill="#f57c00" />
            <Bar dataKey="localPreferences" fill="#388e3c" />
            <Bar dataKey="satisfaction" fill="#7b1fa2" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

const InnovationTab: React.FC<TabContentProps> = ({ data }) => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-orange-600" />
          Innovation Pipeline by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={convertInnovationPipelineData(data)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="concepts" fill="#f57c00" />
            <Bar dataKey="prototypes" fill="#388e3c" />
            <Bar dataKey="testing" fill="#0071ce" />
            <Bar dataKey="launches" fill="#7b1fa2" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Innovation Revenue by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={convertInnovationPipelineData(data)}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }: { name: string; percent?: number }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="revenue"
            >
              {convertInnovationPipelineData(data).map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, 'Revenue']} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);

export default function PlanningPLMPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [dashboardData, setDashboardData] = useState<PLMPageState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load dashboard data from service
    const loadDashboardData = async () => {
      try {
        setIsLoading(true);
        const data = await PlanningPLMService.getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error('Error loading PLM dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const renderTabContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Loading PLM data...</div>
        </div>
      );
    }

    if (!dashboardData) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">Error loading PLM data</div>
        </div>
      );
    }

    switch (activeTab) {
      case 'overview':
        return <OverviewTab data={dashboardData?.data || null} />;
      case 'seasonal':
        return <SeasonalPlanningTab data={dashboardData?.data || null} />;
      case 'lifecycle':
        return <OverviewTab data={dashboardData?.data || null} />; // Using OverviewTab for lifecycle for now
      case 'assortment':
        return <AssortmentOptimizationTab data={dashboardData?.data || null} />;
      case 'localization':
        return <LocalizationTab data={dashboardData?.data || null} />;
      case 'suppliers':
        return <SupplierManagementTab data={dashboardData?.data || null} />;
      case 'innovation':
        return <InnovationTab data={dashboardData?.data || null} />;
      default:
        return <OverviewTab data={dashboardData?.data || null} />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Planning & PLM Dashboard</h1>
        <p className="text-gray-600">Strategic Product Lifecycle Management & Planning Intelligence</p>
      </div>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {renderTabContent()}
    </div>
  );
}
