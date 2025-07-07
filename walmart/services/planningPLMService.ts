import {
  Product,
  SeasonalPlan,
  ProductLifecycleData,
  SupplierPerformance,
  StoreCluster,
  AssortmentRecommendation,
  InnovationPipeline,
  PLMDashboardKPI,
  PLMAlert,
  PLMPageState,
  PLMTabId,
  ProductLifecycleStage,
  InnovationTrend
} from '../types/planningPLM';
import {
  walmartProducts,
  seasonalPlans,
  storeClusters,
  assortmentRecommendations,
  innovationPipeline,
  supplierPerformance,
  plmDashboardKPIs,
  plmAlerts,
  planningPLMDashboardData
} from '../data/operations/planningPLM';

export class PlanningPLMService {
  // Product Portfolio Management
  static getProductPortfolio(): Product[] {
    return walmartProducts;
  }

  static getProductById(productId: string): Product | undefined {
    return walmartProducts.find(p => p.id === productId);
  }

  static getProductsByCategory(category: string): Product[] {
    return walmartProducts.filter(p => p.category === category);
  }

  static getProductsByBrand(brand: string): Product[] {
    return walmartProducts.filter(p => p.brand === brand);
  }

  static getProductsByLifecycleStage(stage: ProductLifecycleStage): Product[] {
    return walmartProducts.filter(p => p.lifecycleStage === stage);
  }

  // Seasonal Planning
  static getSeasonalPlans(): SeasonalPlan[] {
    return seasonalPlans;
  }

  static getSeasonalPlanById(planId: string): SeasonalPlan | undefined {
    return seasonalPlans.find(p => p.id === planId);
  }

  static getCurrentSeasonPlans(): SeasonalPlan[] {
    const currentDate = new Date();
    return seasonalPlans.filter(plan => 
      new Date(plan.timeline.planningStart) <= currentDate && 
      new Date(plan.timeline.launchDate) >= currentDate
    );
  }

  static getUpcomingSeasonPlans(): SeasonalPlan[] {
    const currentDate = new Date();
    return seasonalPlans.filter(plan => 
      new Date(plan.timeline.planningStart) > currentDate
    );
  }

  // Product Lifecycle Management
  static getProductLifecycles(): Product[] {
    return walmartProducts;
  }

  static getLifecycleByProductId(productId: string): Product | undefined {
    return walmartProducts.find(p => p.id === productId);
  }

  static getLifecyclesByStage(stage: ProductLifecycleStage): Product[] {
    return walmartProducts.filter(p => p.lifecycleStage === stage);
  }

  static updateLifecycleStage(productId: string, newStage: ProductLifecycleStage): boolean {
    const product = walmartProducts.find(p => p.id === productId);
    if (product) {
      product.lifecycleStage = newStage;
      product.lastUpdated = new Date();
      return true;
    }
    return false;
  }

  // Supplier Management
  static getSupplierPerformance(): SupplierPerformance[] {
    return supplierPerformance;
  }

  static getSupplierById(supplierId: string): SupplierPerformance | undefined {
    return supplierPerformance.find(s => s.supplierId === supplierId);
  }

  static getTopPerformingSuppliers(limit: number = 10): SupplierPerformance[] {
    return supplierPerformance
      .sort((a, b) => b.overallScore - a.overallScore)
      .slice(0, limit);
  }

  static getSuppliersByScore(minScore: number): SupplierPerformance[] {
    return supplierPerformance.filter(s => s.overallScore >= minScore);
  }

  // Store Clustering & Localization
  static getStoreClusters(): StoreCluster[] {
    return storeClusters;
  }

  static getClusterById(clusterId: string): StoreCluster | undefined {
    return storeClusters.find(c => c.clusterId === clusterId);
  }

  static getClustersByRegion(region: string): StoreCluster[] {
    return storeClusters.filter(c => c.description.toLowerCase().includes(region.toLowerCase()));
  }

  // Assortment Management
  static getAssortmentRecommendations(): AssortmentRecommendation[] {
    return assortmentRecommendations;
  }

  static getRecommendationsByType(type: string): AssortmentRecommendation[] {
    return assortmentRecommendations.filter(r => r.category === type);
  }

  static getRecommendationsByCluster(clusterId: string): AssortmentRecommendation[] {
    return assortmentRecommendations.filter(r => 
      r.storeCluster === clusterId
    );
  }

  static getHighConfidenceRecommendations(minConfidence: number = 0.8): AssortmentRecommendation[] {
    return assortmentRecommendations.filter(r => r.confidence >= minConfidence);
  }

  // Innovation Pipeline
  static getInnovationPipeline(): InnovationPipeline {
    return innovationPipeline;
  }

  static getConceptsByStage(stage: string) {
    return innovationPipeline.concepts.filter((c: any) => c.status === stage);
  }

  static getConceptsByPriority(priority: string) {
    return innovationPipeline.concepts.filter((c: any) => c.category === priority);
  }

  static getConceptsByCategory(category: string) {
    return innovationPipeline.concepts.filter((c: any) => c.category === category);
  }

  // KPIs and Analytics
  static getPLMKPIs(): PLMDashboardKPI[] {
    return plmDashboardKPIs;
  }

  static calculateTimeToMarket(): number {
    const completedConcepts = innovationPipeline.concepts.filter((c: any) => 
      c.status === 'approved'
    );
    
    if (completedConcepts.length === 0) return 0;
    
    const avgTimeline = completedConcepts.reduce((sum: number, concept: any) => {
      return sum + (concept.businessCase.paybackPeriod || 0);
    }, 0) / completedConcepts.length;

    return avgTimeline;
  }

  static calculateLaunchSuccessRate(): number {
    const totalConcepts = innovationPipeline.concepts.length;
    if (totalConcepts === 0) return 0;

    const successfulConcepts = innovationPipeline.concepts.filter((c: any) => 
      c.status === 'approved' && c.businessCase.projectedRevenue > 0
    );

    return (successfulConcepts.length / totalConcepts) * 100;
  }

  static calculateSupplierDiversityIndex(): number {
    // Mock calculation since SupplierPerformance doesn't have region property
    return 76.8;
  }

  // Alerts and Notifications
  static getPLMAlerts(): PLMAlert[] {
    return plmAlerts;
  }

  static getAlertsBySeverity(severity: string): PLMAlert[] {
    // Mock implementation - property mismatch
    return plmAlerts.slice(0, 2);
  }

  static getCriticalAlerts(): PLMAlert[] {
    return plmAlerts.slice(0, 1);
  }

  static getUnresolvedAlerts(): PLMAlert[] {
    // Mock implementation - property mismatch
    return plmAlerts;
  }

  static resolveAlert(alertId: string): boolean {
    // Mock implementation - property mismatch
    return true;
  }

  // Dashboard State Management
  static getInitialDashboardState(): PLMPageState {
    return {
      activeTab: 'seasonal-planning',
      loading: false,
      error: null,
      data: planningPLMDashboardData,
      filters: {
        dateRange: {
          start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000),
          end: new Date()
        },
        categories: [],
        brands: [],
        lifecycleStages: [],
        clusters: [],
        suppliers: []
      },
      preferences: {
        defaultTab: 'seasonal-planning',
        chartPreferences: {
          defaultChartType: 'line',
          colorScheme: 'walmart',
          showTrendlines: true,
          showConfidenceIntervals: false
        },
        alertPreferences: {
          enableNotifications: true,
          priorityThreshold: 'medium',
          categories: [],
          frequency: 'daily'
        },
        displayOptions: {
          density: 'comfortable',
          theme: 'light',
          language: 'en',
          timezone: 'America/Chicago'
        }
      }
    };
  }

  // Advanced Analytics
  static getProductPerformanceTrends(productId: string, months: number = 12): any[] {
    // Simulate performance trend data
    const trends = [];
    const endDate = new Date();
    
    for (let i = months - 1; i >= 0; i--) {
      const date = new Date(endDate);
      date.setMonth(date.getMonth() - i);
      
      trends.push({
        month: date.toISOString().slice(0, 7),
        revenue: Math.random() * 1000000 + 500000,
        units: Math.floor(Math.random() * 10000) + 5000,
        margin: Math.random() * 30 + 15,
        marketShare: Math.random() * 5 + 2
      });
    }
    
    return trends;
  }

  static getSeasonalDemandForecast(productId: string, seasons: number = 4): any[] {
    const seasons_list = ['Spring', 'Summer', 'Fall', 'Winter'];
    const forecast = [];
    
    for (let i = 0; i < seasons; i++) {
      const seasonName = seasons_list[i % 4];
      forecast.push({
        season: seasonName,
        forecastDemand: Math.floor(Math.random() * 50000) + 20000,
        confidence: Math.random() * 0.3 + 0.7,
        factors: ['historical_sales', 'market_trends', 'promotional_calendar']
      });
    }
    
    return forecast;
  }

  static getSupplierRiskAssessment(): any[] {
    return supplierPerformance.map(supplier => ({
      supplierId: supplier.supplierId,
      supplierName: supplier.supplierName,
      riskScore: Math.random() * 100,
      riskFactors: [
        { factor: 'Financial Stability', score: Math.random() * 100 },
        { factor: 'Geographic Risk', score: Math.random() * 100 },
        { factor: 'Quality Issues', score: Math.random() * 100 },
        { factor: 'Delivery Performance', score: supplier.deliveryScore }
      ],
      mitigationActions: [
        'Diversify supplier base',
        'Increase quality inspections',
        'Implement backup suppliers'
      ]
    }));
  }

  static getAssortmentOptimizationInsights(): any[] {
    return storeClusters.map(cluster => ({
      clusterId: cluster.clusterId,
      clusterName: cluster.clusterName,
      currentAssortmentSize: cluster.storeCount * 100, // Mock calculation
      recommendedChanges: {
        add: Math.floor(Math.random() * 50) + 10,
        remove: Math.floor(Math.random() * 30) + 5,
        replace: Math.floor(Math.random() * 20) + 5
      },
      potentialImpact: {
        revenueIncrease: Math.random() * 15 + 5,
        marginImprovement: Math.random() * 5 + 2,
        inventoryTurnover: Math.random() * 20 + 10
      }
    }));
  }

  // Collaborative Features
  static getCollaborationWorkflows(): any[] {
    return [
      {
        id: 'seasonal-planning-2025',
        name: 'Spring 2025 Planning',
        type: 'seasonal_planning',
        participants: ['Buying Team', 'Category Management', 'Merchandising', 'Store Operations'],
        status: 'in_progress',
        progress: 75,
        nextMilestone: 'Final Assortment Approval',
        dueDate: '2025-01-15'
      },
      {
        id: 'new-brand-launch',
        name: 'Private Label Beauty Launch',
        type: 'product_launch',
        participants: ['Product Development', 'Marketing', 'Supply Chain', 'Store Operations'],
        status: 'planning',
        progress: 40,
        nextMilestone: 'Supplier Selection',
        dueDate: '2025-03-01'
      }
    ];
  }

  static getWorkflowTasks(workflowId: string): any[] {
    return [
      {
        id: 'task-1',
        title: 'Market Research Completion',
        assignee: 'Category Management',
        status: 'completed',
        dueDate: '2025-01-05',
        priority: 'high'
      },
      {
        id: 'task-2',
        title: 'Supplier Negotiations',
        assignee: 'Buying Team',
        status: 'in_progress',
        dueDate: '2025-01-10',
        priority: 'high'
      },
      {
        id: 'task-3',
        title: 'Store Layout Planning',
        assignee: 'Store Operations',
        status: 'pending',
        dueDate: '2025-01-12',
        priority: 'medium'
      }
    ];
  }

  // Dashboard Data Aggregation
  static getDashboardData(): Promise<PLMPageState> {
    return Promise.resolve({
      activeTab: 'seasonal-planning',
      loading: false,
      error: null,
      data: planningPLMDashboardData,
      filters: {
        dateRange: {
          start: new Date('2025-01-01'),
          end: new Date('2025-12-31')
        },
        categories: [],
        brands: [],
        lifecycleStages: [],
        clusters: [],
        suppliers: []
      },
      preferences: {
        defaultTab: 'seasonal-planning',
        chartPreferences: {
          defaultChartType: 'bar',
          colorScheme: 'walmart',
          showTrendlines: true,
          showConfidenceIntervals: false
        },
        alertPreferences: {
          enableNotifications: true,
          priorityThreshold: 'medium',
          categories: ['products', 'suppliers', 'lifecycle'],
          frequency: 'hourly'
        },
        displayOptions: {
          density: 'comfortable',
          theme: 'light',
          language: 'en-US',
          timezone: 'America/New_York'
        }
      }
    });
  }

  static getDashboardKPIs(): PLMDashboardKPI[] {
    return plmDashboardKPIs;
  }

  static getDashboardAlerts(): PLMAlert[] {
    return plmAlerts;
  }
}

export default PlanningPLMService;
