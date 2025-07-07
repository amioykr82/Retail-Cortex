// Demand & Pricing Type Definitions for Walmart Retail OS
// Phase 5: Advanced demand forecasting and intelligent pricing

export interface DemandForecast {
  id: string;
  productId: string;
  productName: string;
  category: string;
  subcategory: string;
  forecastPeriod: 'daily' | 'weekly' | 'monthly' | 'seasonal';
  forecastData: ForecastDataPoint[];
  accuracy: number;
  confidence: number;
  lastUpdated: Date;
  externalFactors: ExternalFactor[];
}

export interface ForecastDataPoint {
  date: Date;
  predictedDemand: number;
  actualDemand?: number;
  confidenceInterval: {
    lower: number;
    upper: number;
  };
  influencingFactors: string[];
}

export interface ExternalFactor {
  type: 'weather' | 'economic' | 'seasonal' | 'promotional' | 'competitive';
  name: string;
  value: number;
  impact: number; // correlation coefficient
  description: string;
}

export interface PricingStrategy {
  id: string;
  productId: string;
  productName: string;
  category: string;
  currentPrice: number;
  optimalPrice: number;
  competitorPrices: CompetitorPrice[];
  elasticity: PriceElasticity;
  marginAnalysis: MarginAnalysis;
  recommendedAction: PricingAction;
  lastUpdated: Date;
}

export interface CompetitorPrice {
  competitor: string;
  price: number;
  lastChecked: Date;
  url?: string;
  availability: 'in-stock' | 'out-of-stock' | 'limited';
}

export interface PriceElasticity {
  coefficient: number;
  category: 'elastic' | 'inelastic' | 'unitary';
  confidenceLevel: number;
  historicalData: ElasticityDataPoint[];
}

export interface ElasticityDataPoint {
  price: number;
  demand: number;
  revenue: number;
  date: Date;
}

export interface MarginAnalysis {
  currentMargin: number;
  optimalMargin: number;
  cost: number;
  markup: number;
  profitImpact: number;
  volumeImpact: number;
}

export interface PricingAction {
  type: 'increase' | 'decrease' | 'maintain' | 'rollback' | 'markdown';
  amount: number;
  percentage: number;
  reason: string;
  expectedImpact: {
    revenue: number;
    volume: number;
    margin: number;
  };
  urgency: 'low' | 'medium' | 'high' | 'critical';
}

export interface PromotionalCampaign {
  id: string;
  name: string;
  type: 'rollback' | 'clearance' | 'seasonal' | 'competitive' | 'bundle';
  products: string[];
  startDate: Date;
  endDate: Date;
  discountPercentage: number;
  status: 'planned' | 'active' | 'completed' | 'cancelled';
  performance: PromotionalPerformance;
}

export interface PromotionalPerformance {
  targetLift: number;
  actualLift: number;
  unitsMovedTarget: number;
  unitsMovedActual: number;
  revenueImpact: number;
  marginImpact: number;
  roi: number;
  customerAcquisition: number;
}

export interface MarketIntelligence {
  category: string;
  marketShare: number;
  pricePosition: 'leader' | 'follower' | 'premium' | 'discount';
  competitiveIndex: number;
  trendDirection: 'up' | 'down' | 'stable';
  threats: CompetitiveThreat[];
  opportunities: MarketOpportunity[];
}

export interface CompetitiveThreat {
  competitor: string;
  type: 'price_war' | 'new_product' | 'promotion' | 'market_expansion';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  recommendedResponse: string;
}

export interface MarketOpportunity {
  type: 'pricing' | 'promotion' | 'new_product' | 'market_gap';
  description: string;
  potentialImpact: number;
  investmentRequired: number;
  timeframe: string;
  probability: number;
}

export interface CustomerSegment {
  id: string;
  name: string;
  size: number;
  characteristics: string[];
  priceElasticity: number;
  averageOrderValue: number;
  frequency: number;
  lifetimeValue: number;
  pricingSensitivity: 'low' | 'medium' | 'high';
}

export interface SeasonalPattern {
  category: string;
  season: 'spring' | 'summer' | 'fall' | 'winter' | 'holiday' | 'back-to-school';
  demandMultiplier: number;
  peakWeeks: number[];
  priceElasticity: number;
  historicalPerformance: SeasonalPerformanceData[];
}

export interface SeasonalPerformanceData {
  year: number;
  seasonStart: Date;
  seasonEnd: Date;
  demandIncrease: number;
  revenueImpact: number;
  optimalPricingStrategy: string;
}

export interface EconomicIndicator {
  name: string;
  value: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  impact: number;
  category: 'inflation' | 'employment' | 'income' | 'consumer_confidence' | 'interest_rates';
  lastUpdated: Date;
}

export interface WeatherImpact {
  location: string;
  weatherType: 'temperature' | 'precipitation' | 'storm' | 'seasonal';
  severity: number;
  affectedCategories: string[];
  demandImpact: number;
  duration: number;
  forecast: WeatherForecast[];
}

export interface WeatherForecast {
  date: Date;
  condition: string;
  temperature: number;
  precipitation: number;
  expectedDemandChange: number;
}

export interface DemandPricingKPI {
  period: string;
  forecastAccuracy: number;
  revenueOptimization: number;
  marginImprovement: number;
  competitiveResponseTime: number;
  promotionalROI: number;
  customerSatisfaction: number;
  marketShare: number;
  inventoryTurnover: number;
}

export interface InventoryOptimization {
  productId: string;
  currentStock: number;
  optimalStock: number;
  reorderPoint: number;
  safetyStock: number;
  forecastedDemand: number;
  stockoutRisk: number;
  carryingCost: number;
  turnoverRate: number;
}

export interface PriceTestResult {
  testId: string;
  productId: string;
  testType: 'a_b_test' | 'multivariate' | 'gradual_rollout';
  variants: PriceVariant[];
  duration: number;
  results: TestResults;
  significance: number;
  recommendation: string;
}

export interface PriceVariant {
  name: string;
  price: number;
  trafficAllocation: number;
  performance: VariantPerformance;
}

export interface VariantPerformance {
  conversionRate: number;
  revenue: number;
  units: number;
  margin: number;
  customerSatisfaction: number;
}

export interface TestResults {
  winner: string;
  confidenceLevel: number;
  statisticalSignificance: boolean;
  revenueImpact: number;
  recommendedAction: string;
}

// Dashboard aggregation types
export interface DemandPricingDashboard {
  overview: DashboardOverview;
  demandForecasting: DemandForecastingPanel;
  intelligentPricing: IntelligentPricingPanel;
  marketIntelligence: MarketIntelligencePanel;
  promotionalAnalytics: PromotionalAnalyticsPanel;
  performanceMetrics: PerformanceMetricsPanel;
}

export interface DashboardOverview {
  totalRevenue: number;
  revenueGrowth: number;
  forecastAccuracy: number;
  pricingOptimization: number;
  promotionalROI: number;
  marketShare: number;
  alerts: DashboardAlert[];
}

export interface DashboardAlert {
  id: string;
  type: 'opportunity' | 'threat' | 'action_required' | 'success';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  actionable: boolean;
  createdAt: Date;
}

export interface DemandForecastingPanel {
  forecasts: DemandForecast[];
  accuracy: number;
  trends: ForecastTrend[];
  externalFactors: ExternalFactor[];
  seasonalPatterns: SeasonalPattern[];
}

export interface ForecastTrend {
  category: string;
  direction: 'up' | 'down' | 'stable';
  strength: number;
  timeframe: string;
  confidence: number;
}

export interface IntelligentPricingPanel {
  strategies: PricingStrategy[];
  optimizationOpportunities: number;
  competitivePosition: CompetitivePosition;
  elasticityAnalysis: CategoryElasticity[];
}

export interface CompetitivePosition {
  overall: 'leading' | 'competitive' | 'following';
  categories: CategoryPosition[];
  threatLevel: 'low' | 'medium' | 'high';
}

export interface CategoryPosition {
  category: string;
  position: number; // 1 = price leader
  gap: number; // percentage difference from leader
  trend: 'improving' | 'declining' | 'stable';
}

export interface CategoryElasticity {
  category: string;
  elasticity: number;
  classification: 'elastic' | 'inelastic' | 'unitary';
  opportunity: number;
}

export interface MarketIntelligencePanel {
  intelligence: MarketIntelligence[];
  competitorTracking: CompetitorTracking[];
  marketTrends: MarketTrend[];
  opportunities: MarketOpportunity[];
}

export interface CompetitorTracking {
  competitor: string;
  priceChanges: number;
  marketShare: number;
  threat: number;
  lastActivity: Date;
}

export interface MarketTrend {
  name: string;
  impact: number;
  timeframe: string;
  confidence: number;
  description: string;
}

export interface PromotionalAnalyticsPanel {
  campaigns: PromotionalCampaign[];
  performance: PromotionalPerformance[];
  roi: number;
  effectiveness: PromotionalEffectiveness;
}

export interface PromotionalEffectiveness {
  rollbackSuccess: number;
  clearanceEfficiency: number;
  seasonalPerformance: number;
  competitiveResponse: number;
}

export interface PerformanceMetricsPanel {
  kpis: DemandPricingKPI[];
  trends: KPITrend[];
  benchmarks: Benchmark[];
  goals: PerformanceGoal[];
}

export interface KPITrend {
  metric: string;
  direction: 'up' | 'down' | 'stable';
  changePercent: number;
  timeframe: string;
}

export interface Benchmark {
  metric: string;
  internal: number;
  industry: number;
  performance: 'above' | 'at' | 'below';
}

export interface PerformanceGoal {
  metric: string;
  current: number;
  target: number;
  deadline: Date;
  progress: number;
}
