'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { Card } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { WalmartDataService } from '../../../walmart/services/dataService';
import { 
  Users, TrendingUp, DollarSign, AlertTriangle, Package, 
  CheckCircle, BarChart3, Target, Leaf,
  Shield, Globe, Building, MessageSquare, FileText,
  ArrowUpRight, ArrowDownRight, Minus, Search,
  Download, RefreshCw, Eye, Edit, Star,
  Award, Activity, Bell,
  ChevronRight, Settings,
  Plus, Archive
} from 'lucide-react';

// Import types for better type safety
import type { 
  SupplierData, 
  ProcurementMetrics,
  SupplierRisk,
  SustainabilityMetrics
} from '../../../walmart/types/supplier';

// Enhanced component for metric cards with trends and interaction
const MetricCard = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon, 
  className = '',
  color = 'blue',
  onClick,
  isClickable = false
}: {
  title: string;
  value: string;
  subtitle?: string;
  trend?: number;
  icon: React.ReactNode;
  className?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'gray';
  onClick?: () => void;
  isClickable?: boolean;
}) => {
  const getTrendIcon = () => {
    if (trend === undefined) return null;
    if (trend > 0) return <ArrowUpRight className="h-4 w-4" />;
    if (trend < 0) return <ArrowDownRight className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendText = () => {
    if (trend === undefined) return '';
    const absValue = Math.abs(trend);
    return `${trend > 0 ? '+' : ''}${absValue.toFixed(1)}%`;
  };

  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    gray: 'text-gray-600'
  };

  return (
    <div 
      className={`p-6 ${isClickable ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      <Card className="h-full">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <div className="flex items-center space-x-2 mt-1">
              <p className={`text-2xl font-bold ${colorClasses[color]}`}>{value}</p>
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
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
          <div className="ml-4 opacity-80">
            {icon}
            {isClickable && <ChevronRight className="h-4 w-4 ml-2" />}
          </div>
        </div>
      </Card>
    </div>
  );
};

// Chart color palette (for future use)
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

export default function DigitalBuyingPage() {
  const [dataService] = useState(() => WalmartDataService.getInstance());
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [alertFilter, setAlertFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');
  
  // Enhanced data states with proper typing
  const [supplierData, setSupplierData] = useState<SupplierData[]>([]);
  const [procurementData, setProcurementData] = useState<ProcurementMetrics | null>(null);
  const [riskData, setRiskData] = useState<SupplierRisk[]>([]);
  const [sustainabilityData, setSustainabilityData] = useState<SustainabilityMetrics | null>(null);
  const [buySessionData, setBuySessionData] = useState<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [collaborationData, setCollaborationData] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [alerts, setAlerts] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Load comprehensive supplier data using the proper service instance
        const suppliers = dataService.getSupplierEcosystem();
        const procurement = dataService.getProcurementMetrics();
        const risks = dataService.getSupplierRiskData();
        const sustainability = dataService.getSustainabilityMetrics();
        const supplierAlerts = dataService.getSupplierAlerts();
        
        // Enhanced buy session data with real procurement context
        const buySession = {
          totalUnits: 24580,
          totalValue: procurement.overview.totalSpend * 0.15, // 15% of annual spend in current session
          budgetRemaining: 752350000,
          approvalStatus: 'Pending Review',
          lastUpdated: new Date().toISOString(),
          buySheetItems: 142,
          categories: [
            { name: 'Consumer Goods', budget: 18500000000, spent: 16247500000, units: 182000, margin: 24.7 },
            { name: 'Food & Beverages', budget: 25000000000, spent: 23650150000, units: 45800, margin: 18.3 },
            { name: 'Personal Care', budget: 8500000000, spent: 7350000000, units: 18000, margin: 31.2 },
            { name: 'Electronics', budget: 12000000000, spent: 10850000000, units: 12400, margin: 22.8 }
          ],
          recentActivity: [
            { action: 'Price negotiation completed', supplier: 'P&G', category: 'Personal Care', savings: 2400000, timestamp: '2h ago' },
            { action: 'New product line added', supplier: 'Unilever', category: 'Consumer Goods', value: 15600000, timestamp: '4h ago' },
            { action: 'Contract renewed', supplier: 'Nestlé', category: 'Food & Beverages', value: 89200000, timestamp: '1d ago' }
          ]
        };
        
        // Rich collaboration data matching enterprise buying workflows  
        const collaboration = [
          {
            id: '1',
            user: 'Sarah Chen',
            role: 'Category Manager - Personal Care',
            action: 'approved price increase for Olay Regenerist line',
            impact: 'Budget impact: +$2.3M',
            timestamp: '8m ago',
            type: 'approval',
            avatar: 'SC',
            priority: 'high'
          },
          {
            id: '2',
            user: 'Marcus Rodriguez',
            role: 'Senior Buyer - Electronics',
            action: 'updated Samsung TV pricing strategy',
            impact: 'Margin improvement: +3.2%',
            timestamp: '15m ago',
            type: 'update',
            avatar: 'MR',
            priority: 'medium'
          },
          {
            id: '3',
            user: 'Amanda Vance',
            role: 'VP Procurement',
            action: 'signed off on Q4 strategic buys',
            impact: 'Total value: $847M',
            timestamp: '1h ago',
            type: 'decision',
            avatar: 'AV',
            priority: 'high'
          },
          {
            id: '4',
            user: 'James Kim',
            role: 'Buyer - Food & Beverages',
            action: 'negotiated exclusive Pepsi promotion terms',
            impact: 'Additional volume: +18%',
            timestamp: '2h ago',
            type: 'negotiation',
            avatar: 'JK',
            priority: 'medium'
          },
          {
            id: '5',
            user: 'Lisa Park',
            role: 'Sustainability Lead',
            action: 'validated supplier ESG compliance',
            impact: '23 suppliers certified',
            timestamp: '3h ago',
            type: 'validation',
            avatar: 'LP',
            priority: 'low'
          }
        ];

        setSupplierData(suppliers);
        setProcurementData(procurement);
        setRiskData(risks);
        setSustainabilityData(sustainability);
        setBuySessionData(buySession);
        setCollaborationData(collaboration);
        setAlerts(supplierAlerts);
        
      } catch (error) {
        console.error('Error loading supplier management data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataService]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(amount);
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(num);
  };

  const formatPercent = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  const tabs = [
    { key: 'overview', label: 'Overview', icon: '📊' },
    { key: 'suppliers', label: 'Supplier Directory', icon: '🏢' },
    { key: 'buy-sessions', label: 'Buy Sessions', icon: '�' },
    { key: 'risk', label: 'Risk Analytics', icon: '⚠️' },
    { key: 'sustainability', label: 'Sustainability', icon: '🌱' },
    { key: 'alerts', label: 'Alerts', icon: '🚨' }
  ];


  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center space-x-2">
          <RefreshCw className="h-6 w-6 animate-spin text-blue-600" />
          <div className="text-lg text-gray-700">Loading Digital Buying & Supplier Management...</div>
        </div>
      </div>
    );
  }

  // Comprehensive overview dashboard
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Procurement Spend"
          value={formatCurrency(procurementData?.overview?.totalSpend || 412000000000)}
          subtitle="Annual global spend"
          trend={5.2}
          icon={<DollarSign className="h-8 w-8" />}
          color="blue"
        />
        <MetricCard
          title="Active Suppliers"
          value={formatNumber(supplierData?.length || 12847)}
          subtitle="Global supplier network"
          trend={2.8}
          icon={<Building className="h-8 w-8" />}
          color="green"
        />
        <MetricCard
          title="Cost Savings YTD"
          value={formatCurrency(8200000000)}
          subtitle="$8.2B saved this year"
          trend={12.4}
          icon={<TrendingUp className="h-8 w-8" />}
          color="purple"
        />
        <MetricCard
          title="Supplier Performance"
          value="91.4/100"
          subtitle="Average score"
          trend={3.1}
          icon={<Target className="h-8 w-8" />}
          color="orange"
        />
      </div>

      {/* Spend Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
            Spend by Category
          </h3>
          <div className="space-y-4">
            {procurementData?.categorySpend?.slice(0, 6).map((category: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{category.category}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="font-bold text-gray-900">{formatCurrency(category.spend)}</div>
                  <div className="text-sm text-gray-500">{formatPercent(category.percentage)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-green-600" />
            Regional Distribution
          </h3>
          <div className="space-y-4">
            {procurementData?.regionalSpend?.map((region: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{region.region}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${region.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="font-bold text-gray-900">{formatCurrency(region.spend)}</div>
                  <div className="text-sm text-gray-500">{region.suppliers} suppliers</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
            Quality & Delivery
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">On-Time Delivery</span>
              <span className="font-bold text-green-600">92.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quality Score</span>
              <span className="font-bold text-blue-600">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Defect Rate</span>
              <span className="font-bold text-orange-600">0.18 PPM</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Leaf className="h-5 w-5 mr-2 text-green-600" />
            Sustainability
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Diverse Spend</span>
              <span className="font-bold text-purple-600">16.3%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sustainable Procurement</span>
              <span className="font-bold text-green-600">30.1%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Carbon Neutral</span>
              <span className="font-bold text-blue-600">34.7%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-red-600" />
            Risk Overview
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">High Risk</span>
              <span className="font-bold text-red-600">{riskData?.filter((r: any) => r.overallRiskScore === 'High').length || 23}</span> {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Medium Risk</span>
              <span className="font-bold text-yellow-600">{riskData?.filter((r: any) => r.overallRiskScore === 'Medium').length || 147}</span> {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Low Risk</span>
              <span className="font-bold text-green-600">{riskData?.filter((r: any) => r.overallRiskScore === 'Low').length || 1847}</span> {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderSupplierDirectory = () => (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Food & Beverages">Food & Beverages</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Supplier
          </Button>
        </div>
      </div>

      {/* Supplier Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Suppliers"
          value={supplierData?.length?.toString() || "847"}
          icon={<Building className="h-6 w-6" />}
          color="blue"
        />
        <MetricCard
          title="Strategic Partners"
          value={supplierData?.filter(s => s.type === 'Strategic Partner')?.length?.toString() || "156"}
          icon={<Award className="h-6 w-6" />}
          color="purple"
        />
        <MetricCard
          title="Active Contracts"
          value="734"
          icon={<FileText className="h-6 w-6" />}
          color="green"
        />
        <MetricCard
          title="Avg Rating"
          value="4.2"
          icon={<Star className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Supplier Table */}
      <Card className="overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Supplier Directory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contract Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {supplierData?.slice(0, 10).map((supplier: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Building className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{supplier.name}</div>
                        <div className="text-sm text-gray-500">{supplier.country}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{supplier.categories?.slice(0, 2).join(', ')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{formatCurrency(supplier.contractValue)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-900">4.2</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      supplier.status === 'Active' ? 'bg-green-100 text-green-800' :
                      supplier.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {supplier.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button size="sm" variant="outline" className="mr-2">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderBuySessions = () => (
    <div className="space-y-6">
      {/* Buy Session Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Current Buy Session</h3>
          <p className="text-sm text-gray-500">Q4 2024 Strategic Procurement Session</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Buy Sheet
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Buy Session
          </Button>
        </div>
      </div>

      {/* Buy Session Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Total Units"
          value={buySessionData?.totalUnits?.toLocaleString() || "24,580"}
          icon={<Package className="h-6 w-6" />}
          color="blue"
        />
        <MetricCard
          title="Session Value"
          value={formatCurrency(buySessionData?.totalValue || 61800000000)}
          icon={<DollarSign className="h-6 w-6" />}
          color="green"
        />
        <MetricCard
          title="Budget Remaining"
          value={formatCurrency(buySessionData?.budgetRemaining || 752350000)}
          icon={<Target className="h-6 w-6" />}
          color="orange"
        />
        <MetricCard
          title="Buy Sheet Items"
          value={buySessionData?.buySheetItems?.toString() || "142"}
          icon={<FileText className="h-6 w-6" />}
          color="purple"
        />
      </div>

      {/* Category Performance */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6 flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
          Category Performance
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {buySessionData?.categories?.map((category: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{category.name}</h4>
                  <span className="text-sm font-medium text-green-600">+{category.margin}% margin</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500">Budget</div>
                    <div className="font-semibold">{formatCurrency(category.budget)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Spent</div>
                    <div className="font-semibold">{formatCurrency(category.spent)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Units</div>
                    <div className="font-semibold">{category.units.toLocaleString()}</div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(category.spent / category.budget) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {((category.spent / category.budget) * 100).toFixed(1)}% of budget used
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Recent Activity</h4>
            {buySessionData?.recentActivity?.map((activity: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
              <div key={index} className="flex items-start space-x-3 p-3 bg-white border rounded-lg">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.supplier} • {activity.category}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-green-600">
                    {activity.savings ? `$${(activity.savings / 1000000).toFixed(1)}M saved` : formatCurrency(activity.value || 0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );

  const renderRiskAnalytics = () => (
    <div className="space-y-6">
      {/* Risk Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="High Risk Suppliers"
          value={(riskData?.filter(r => r.overallRiskScore === 'High')?.length || 23).toString()}
          icon={<AlertTriangle className="h-6 w-6" />}
          color="red"
        />
        <MetricCard
          title="Medium Risk"
          value={(riskData?.filter(r => r.overallRiskScore === 'Medium')?.length || 67).toString()}
          icon={<Shield className="h-6 w-6" />}
          color="orange"
        />
        <MetricCard
          title="Low Risk"
          value={(riskData?.filter(r => r.overallRiskScore === 'Low')?.length || 156).toString()}
          icon={<CheckCircle className="h-6 w-6" />}
          color="green"
        />
        <MetricCard
          title="Risk Score"
          value="7.2"
          subtitle="Portfolio average"
          icon={<Target className="h-6 w-6" />}
          color="blue"
        />
      </div>

      {/* Risk Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
            Risk Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Financial Risk', value: 35, color: '#EF4444' },
                  { name: 'Operational Risk', value: 28, color: '#F97316' },
                  { name: 'Compliance Risk', value: 22, color: '#EAB308' },
                  { name: 'Geo-political Risk', value: 15, color: '#84CC16' }
                ]}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`} // eslint-disable-line @typescript-eslint/no-explicit-any
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {[
                  { name: 'Financial Risk', value: 35, color: '#EF4444' },
                  { name: 'Operational Risk', value: 28, color: '#F97316' },
                  { name: 'Compliance Risk', value: 22, color: '#EAB308' },
                  { name: 'Geo-political Risk', value: 15, color: '#84CC16' }
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            Risk Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[
              { month: 'Jan', high: 28, medium: 62, low: 148 },
              { month: 'Feb', high: 26, medium: 65, low: 152 },
              { month: 'Mar', high: 24, medium: 63, low: 156 },
              { month: 'Apr', high: 23, medium: 67, low: 156 },
              { month: 'May', high: 25, medium: 64, low: 154 },
              { month: 'Jun', high: 23, medium: 67, low: 156 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="high" stroke="#EF4444" strokeWidth={2} name="High Risk" />
              <Line type="monotone" dataKey="medium" stroke="#F97316" strokeWidth={2} name="Medium Risk" />
              <Line type="monotone" dataKey="low" stroke="#22C55E" strokeWidth={2} name="Low Risk" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* High Risk Suppliers Table */}
      <Card className="overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
            High Risk Suppliers Requiring Attention
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {riskData?.filter(r => r.overallRiskScore === 'High')?.slice(0, 5).map((risk: any, index: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                // Find the supplier info for this risk entry
                const supplier = supplierData?.find(s => s.id === risk.supplierId);
                const supplierName = supplier?.name || risk.supplierId;
                const supplierCountry = supplier?.country || 'Unknown';
                
                // Get the highest risk category for display
                const highestRisk = Object.entries(risk.riskCategories || {})
                  .sort(([,a], [,b]) => (b as any).level - (a as any).level)[0]; // eslint-disable-line @typescript-eslint/no-explicit-any
                const riskType = highestRisk ? highestRisk[0].charAt(0).toUpperCase() + highestRisk[0].slice(1) : 'Multiple';
                const riskScore = risk.riskLevel || 3;
                
                // Calculate estimated financial impact based on supplier contract value
                const financialImpact = supplier?.contractValue ? supplier.contractValue * 0.15 : 50000000; // 15% of contract value or $50M default
                
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{supplierName}</div>
                      <div className="text-sm text-gray-500">{supplierCountry}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {riskType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-red-600">{riskScore}/3</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatCurrency(financialImpact)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Button size="sm" variant="outline" className="mr-2">
                        Review
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                        Mitigate
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderSustainability = () => (
    <div className="space-y-6">
      {/* Sustainability Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Diverse Spend"
          value={formatPercent(sustainabilityData?.overview?.diverseSupplierSpend || 16.3)}
          subtitle="Target: 20%"
          icon={<Users className="h-6 w-6" />}
          color="purple"
        />
        <MetricCard
          title="Sustainable Procurement"
          value={formatPercent(sustainabilityData?.overview?.sustainableSpendPercentage || 30.1)}
          icon={<Leaf className="h-6 w-6" />}
          color="green"
        />
        <MetricCard
          title="Carbon Neutral Suppliers"
          value={formatPercent(sustainabilityData?.overview?.carbonNeutralSuppliers || 34.7)}
          icon={<Globe className="h-6 w-6" />}
          color="blue"
        />
        <MetricCard
          title="ESG Score"
          value="B+"
          subtitle="Improving"
          icon={<Award className="h-6 w-6" />}
          color="orange"
        />
      </div>

      {/* Sustainability Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Leaf className="h-5 w-5 mr-2 text-green-600" />
            Sustainability Goals Progress
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Diverse Supplier Spend</span>
                <span className="text-sm text-gray-500">16.3% / 20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: '81.5%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Sustainable Procurement</span>
                <span className="text-sm text-gray-500">30.1% / 35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Carbon Neutral Suppliers</span>
                <span className="text-sm text-gray-500">34.7% / 50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '69.4%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Renewable Energy</span>
                <span className="text-sm text-gray-500">45.2% / 60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-600 h-3 rounded-full" style={{ width: '75.3%' }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Globe className="h-5 w-5 mr-2 text-blue-600" />
            Environmental Impact
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[
              { category: 'Food & Beverages', carbon: 2.8, water: 45, waste: 12 },
              { category: 'Consumer Goods', carbon: 1.9, water: 32, waste: 8 },
              { category: 'Personal Care', carbon: 1.2, water: 28, waste: 6 },
              { category: 'Electronics', carbon: 3.1, water: 18, waste: 15 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="carbon" fill="#EF4444" name="Carbon (MT)" />
              <Bar dataKey="water" fill="#3B82F6" name="Water (ML)" />
              <Bar dataKey="waste" fill="#F59E0B" name="Waste (KT)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Diverse Suppliers */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2 text-purple-600" />
          Diverse Supplier Directory
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Women-Owned Business Enterprise', count: 124, spend: 8200000000, color: 'bg-pink-100 text-pink-800' },
            { name: 'Minority Business Enterprise', count: 89, spend: 5600000000, color: 'bg-blue-100 text-blue-800' },
            { name: 'Veteran-Owned Small Business', count: 67, spend: 4100000000, color: 'bg-green-100 text-green-800' },
            { name: 'HUBZone Certified', count: 45, spend: 2800000000, color: 'bg-orange-100 text-orange-800' },
            { name: 'Small Disadvantaged Business', count: 78, spend: 3900000000, color: 'bg-purple-100 text-purple-800' },
            { name: 'LGBTQ+ Business Enterprise', count: 23, spend: 1200000000, color: 'bg-indigo-100 text-indigo-800' }
          ].map((category, index) => (
            <div key={index} className="bg-white border rounded-lg p-4">
              <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium mb-2 ${category.color}`}>
                {category.name}
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                <div className="text-sm text-gray-500">suppliers</div>
                <div className="text-sm font-medium text-gray-900">{formatCurrency(category.spend)}</div>
                <div className="text-xs text-gray-500">annual spend</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-6">
      {/* Alert Filter */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Alerts & Notifications</h3>
          <p className="text-sm text-gray-500">Real-time supplier and procurement alerts</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={alertFilter}
            onChange={(e) => setAlertFilter(e.target.value as 'all' | 'high' | 'medium' | 'low')}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Alerts</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <Button size="sm" variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Configure
          </Button>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="Critical Alerts"
          value={alerts?.filter(a => a.priority === 'high')?.length?.toString() || "8"}
          icon={<AlertTriangle className="h-6 w-6" />}
          color="red"
        />
        <MetricCard
          title="Medium Priority"
          value={alerts?.filter(a => a.priority === 'medium')?.length?.toString() || "23"}
          icon={<Bell className="h-6 w-6" />}
          color="orange"
        />
        <MetricCard
          title="Low Priority"
          value={alerts?.filter(a => a.priority === 'low')?.length?.toString() || "45"}
          icon={<CheckCircle className="h-6 w-6" />}
          color="green"
        />
        <MetricCard
          title="Total Active"
          value={alerts?.length?.toString() || "76"}
          icon={<Activity className="h-6 w-6" />}
          color="blue"
        />
      </div>

      {/* Alerts List */}
      <Card className="overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Active Alerts</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {alerts?.slice(0, 10).map((alert: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    alert.priority === 'high' ? 'bg-red-100' :
                    alert.priority === 'medium' ? 'bg-orange-100' : 'bg-blue-100'
                  }`}>
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.priority === 'high' ? 'text-red-600' :
                      alert.priority === 'medium' ? 'text-orange-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                        alert.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {alert.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Supplier: {alert.supplier}</span>
                      <span>•</span>
                      <span>{alert.timestamp}</span>
                      <span>•</span>
                      <span>Category: {alert.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Archive className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Collaboration Activity */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
          Recent Collaboration Activity
        </h3>
        <div className="space-y-4">
          {collaborationData?.slice(0, 5).map((activity: any, index: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">{activity.avatar}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">{activity.user}</span>
                  <span className="text-gray-600"> {activity.action}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{activity.impact} • {activity.timestamp}</div>
              </div>
              <div className="flex-shrink-0">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  activity.priority === 'high' ? 'bg-red-100 text-red-800' :
                  activity.priority === 'medium' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {activity.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'suppliers':
        return renderSupplierDirectory();
      case 'buy-sessions':
        return renderBuySessions();
      case 'risk':
        return renderRiskAnalytics();
      case 'sustainability':
        return renderSustainability();
      case 'alerts':
        return renderAlerts();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Digital Buying & Supplier Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            Comprehensive supplier ecosystem, procurement analytics, and digital transformation metrics
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap border-b-2 py-2 px-1 text-sm font-medium ${
                activeTab === tab.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {renderActiveTab()}
    </div>
  );
}
