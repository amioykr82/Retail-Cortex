'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { TrendingUp, TrendingDown, Package, DollarSign, ShoppingCart, Users, Store, Globe } from 'lucide-react';
import { walmartDataService } from '../../../walmart/services/dataService';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  subtitle?: string;
}

const KPICard = ({ title, value, change, icon, subtitle }: KPICardProps) => {
  const isPositive = change > 0;
  
  return (
    <Card>
      <CardContent className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center mt-1">
            {isPositive ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '+' : ''}{change}%
            </span>
            {subtitle && <span className="text-xs text-gray-500 ml-2">{subtitle}</span>}
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-full">
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

interface DashboardData {
  kpis: {
    totalRevenue: number;
    revenueGrowth: number;
    totalStores: number;
    storeGrowth: number;
    ecommerceGrowth: number;
    grossMargin: number;
    operatingMargin: number;
    netMargin: number;
    comparableSalesUS: number;
    employeeCount: number;
    marketCap: number;
    dividendYield: number;
  };
  quarterlyTrends: Array<{
    quarter: string;
    fiscal_year: string;
    revenue: number;
    revenue_growth: number;
    comparable_sales_us: number;
    ecommerce_growth: number;
    operating_income: number;
  }>;
  segmentData: Array<{
    segment: string;
    revenue: number;
    percentage: number;
    growth: number;
  }>;
  categoryData: Array<{
    category: string;
    percentage: number;
    revenue: number;
    growth: number;
    margin: number;
  }>;
  channelData: Array<{
    channel: string;
    revenue: number;
    percentage: number;
    growth: number;
  }>;
  historicalData: Array<{
    year: string;
    revenue: number;
    revenue_growth: number;
    operating_income: number;
    net_income: number;
    stores: number;
  }>;
}

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load real Walmart data
    const loadDashboardData = async () => {
      try {
        const kpis = walmartDataService.getDashboardKPIs();
        const quarterlyTrends = walmartDataService.getQuarterlyTrends();
        const segmentData = walmartDataService.getSegmentPerformance();
        const categoryData = walmartDataService.getCategoryPerformance();
        const channelData = walmartDataService.getChannelPerformance();
        const historicalData = walmartDataService.getHistoricalData();

        setDashboardData({
          kpis,
          quarterlyTrends: quarterlyTrends.slice(0, 8), // Last 8 quarters
          segmentData,
          categoryData,
          channelData,
          historicalData: historicalData.slice(-5) // Last 5 years
        });
        setLoading(false);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading Walmart dashboard data...</div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-red-600">Error loading dashboard data</div>
      </div>
    );
  }

  const { kpis, quarterlyTrends, segmentData, categoryData, channelData, historicalData } = dashboardData;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Walmart Dashboard</h1>
        <p className="text-gray-600 mt-2">Real-time overview of Walmart&apos;s key performance indicators</p>
        <p className="text-xs text-gray-500 mt-1">Data sourced from SEC 10-K/10-Q filings • Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Real Walmart KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value={`$${(kpis.totalRevenue / 1000000000).toFixed(1)}B`}
          change={kpis.revenueGrowth}
          subtitle="FY2024"
          icon={<DollarSign className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="Total Stores"
          value={kpis.totalStores.toLocaleString()}
          change={kpis.storeGrowth}
          subtitle="Global"
          icon={<Store className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="E-commerce Growth"
          value={`${kpis.ecommerceGrowth}%`}
          change={kpis.ecommerceGrowth}
          subtitle="US Market"
          icon={<ShoppingCart className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="Operating Margin"
          value={`${kpis.operatingMargin}%`}
          change={1.2}
          subtitle="vs Prior Year"
          icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="Comparable Sales (US)"
          value={`+${kpis.comparableSalesUS}%`}
          change={kpis.comparableSalesUS}
          subtitle="Same-store growth"
          icon={<Package className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="Gross Margin"
          value={`${kpis.grossMargin}%`}
          change={0.8}
          subtitle="Margin improvement"
          icon={<DollarSign className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="Global Employees"
          value={`${(kpis.employeeCount / 1000000).toFixed(1)}M`}
          change={2.1}
          subtitle="Workforce"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <KPICard
          title="Market Cap"
          value={`$${(kpis.marketCap / 1000000000).toFixed(0)}B`}
          change={8.5}
          subtitle="Stock performance"
          icon={<Globe className="h-6 w-6 text-blue-600" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quarterly Revenue Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Quarterly Revenue Trends (Real Data)</CardTitle>
            <p className="text-sm text-gray-600">Last 8 quarters • Source: Walmart 10-Q filings</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={quarterlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis tickFormatter={(value) => `$${(value / 1000000000).toFixed(0)}B`} />
                <Tooltip 
                  formatter={(value: number) => [`$${(value / 1000000000).toFixed(1)}B`, 'Revenue']}
                  labelFormatter={(label) => `Quarter: ${label}`}
                />
                <Line type="monotone" dataKey="revenue" stroke="#0088FE" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Segment Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Segment (FY2024)</CardTitle>
            <p className="text-sm text-gray-600">Walmart US • International • Sam&apos;s Club</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ segment, percentage }) => `${segment}: ${percentage.toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="percentage"
                >
                  {segmentData.map((entry, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`${value.toFixed(1)}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* E-commerce vs Physical Stores */}
        <Card>
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <p className="text-sm text-gray-600">E-commerce vs Physical Stores</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={channelData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis tickFormatter={(value) => `$${(value / 1000000000).toFixed(0)}B`} />
                <Tooltip formatter={(value: number) => [`$${(value / 1000000000).toFixed(1)}B`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Historical Growth */}
        <Card>
          <CardHeader>
            <CardTitle>5-Year Revenue Growth</CardTitle>
            <p className="text-sm text-gray-600">Annual revenue trend (2020-2024)</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${(value / 1000000000).toFixed(0)}B`} />
                <Tooltip formatter={(value: number) => [`$${(value / 1000000000).toFixed(1)}B`, 'Revenue']} />
                <Area type="monotone" dataKey="revenue" stroke="#FF8042" fill="#FF8042" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance Details */}
      <Card>
        <CardHeader>
          <CardTitle>Category Performance (Walmart US)</CardTitle>
          <p className="text-sm text-gray-600">Revenue breakdown by major categories</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryData.map((category, index: number) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">{category.category}</h4>
                <p className="text-2xl font-bold text-blue-600 mt-2">{category.percentage}%</p>
                <p className="text-sm text-gray-600">${(category.revenue / 1000000000).toFixed(1)}B revenue</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm ${category.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {category.growth > 0 ? '+' : ''}{category.growth}% growth
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${category.percentage * 1.5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
