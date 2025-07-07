// Planning & PLM Type Definitions for Walmart Retail OS
// Phase 6: Product Lifecycle Management and Strategic Planning

export interface Product {
  id: string;
  sku: string;
  name: string;
  brand: WalmartBrand;
  category: string;
  subcategory: string;
  lifecycleStage: ProductLifecycleStage;
  developmentTimeline: ProductTimeline;
  performanceMetrics: ProductMetrics;
  supplierInfo: SupplierInfo;
  marketingInfo: MarketingInfo;
  financialInfo: ProductFinancials;
  qualityMetrics: QualityMetrics;
  sustainabilityInfo: SustainabilityInfo;
  createdDate: Date;
  lastUpdated: Date;
}

export type WalmartBrand = 
  | 'Great Value' 
  | 'Equate' 
  | 'Mainstays' 
  | 'Ozark Trail' 
  | 'Parent\'s Choice' 
  | 'Spring Valley'
  | 'Marketside'
  | 'Time and Tru'
  | 'Terra & Sky'
  | 'Wonder Nation'
  | 'Athletic Works'
  | 'Hyper Tough'
  | 'Better Homes & Gardens'
  | 'Pen+Gear'
  | 'Special Kitty'
  | 'Ol\' Roy'
  | 'Freshpet'
  | 'Sam\'s Choice'
  | 'No Boundaries'
  | 'Faded Glory'
  | 'Other';

export type ProductLifecycleStage = 
  | 'concept'
  | 'development' 
  | 'testing'
  | 'pre_launch'
  | 'launch'
  | 'growth'
  | 'maturity'
  | 'decline'
  | 'phase_out'
  | 'discontinued';

export interface ProductTimeline {
  conceptDate: Date;
  developmentStart: Date;
  testingPhase: Date;
  launchDate: Date;
  phaseOutDate?: Date;
  totalTimeToMarket: number; // in days
  stageGates: StageGate[];
}

export interface StageGate {
  stage: ProductLifecycleStage;
  status: 'pending' | 'in_progress' | 'completed' | 'blocked';
  completionDate?: Date;
  approvers: string[];
  requirements: string[];
  risks: Risk[];
}

export interface ProductMetrics {
  salesVolume: number;
  revenue: number;
  grossMargin: number;
  marketShare: number;
  customerSatisfaction: number;
  returnRate: number;
  reviewRating: number;
  reviewCount: number;
  velocityScore: number;
  competitivePosition: number;
}

export interface SupplierInfo {
  primarySupplierId: string;
  supplierName: string;
  country: string;
  region: string;
  supplierScore: number;
  qualityRating: number;
  deliveryPerformance: number;
  costCompetitiveness: number;
  innovationCapability: number;
  sustainabilityScore: number;
  contractDetails: SupplierContract;
}

export interface SupplierContract {
  contractId: string;
  startDate: Date;
  endDate: Date;
  terms: string[];
  pricing: PricingStructure;
  minimumOrderQuantity: number;
  leadTime: number;
  qualityStandards: string[];
  complianceRequirements: string[];
}

export interface PricingStructure {
  basePrice: number;
  tieredPricing: TierPrice[];
  currency: string;
  paymentTerms: string;
  discounts: Discount[];
}

export interface TierPrice {
  minQuantity: number;
  maxQuantity: number;
  price: number;
}

export interface Discount {
  type: 'volume' | 'early_payment' | 'seasonal' | 'loyalty';
  percentage: number;
  conditions: string[];
}

export interface MarketingInfo {
  targetDemographic: string[];
  positioningStrategy: string;
  keyMessages: string[];
  launchCampaign: LaunchCampaign;
  digitalPresence: DigitalPresence;
  inStorePromotion: InStorePromotion;
}

export interface LaunchCampaign {
  campaignName: string;
  budget: number;
  channels: string[];
  timeline: CampaignTimeline;
  expectedReach: number;
  projectedROI: number;
}

export interface CampaignTimeline {
  prelaunch: Date;
  launch: Date;
  sustaining: Date;
  evaluation: Date;
}

export interface DigitalPresence {
  website: boolean;
  socialMedia: string[];
  onlineAdvertising: boolean;
  influencerPartnerships: number;
  contentMarketing: boolean;
}

export interface InStorePromotion {
  endcapDisplay: boolean;
  sampling: boolean;
  coupons: boolean;
  bundleOffers: string[];
  crossMerchandising: string[];
}

export interface ProductFinancials {
  developmentCost: number;
  launchInvestment: number;
  manufacturingCost: number;
  logisticsCost: number;
  marketingSpend: number;
  projectedRevenue: number;
  actualRevenue: number;
  roi: number;
  paybackPeriod: number; // in months
  npv: number; // Net Present Value
}

export interface QualityMetrics {
  defectRate: number;
  customerComplaints: number;
  recalls: number;
  complianceScore: number;
  testingResults: TestResult[];
  certifications: string[];
  auditResults: AuditResult[];
}

export interface TestResult {
  testType: string;
  testDate: Date;
  result: 'pass' | 'fail' | 'conditional';
  score: number;
  details: string;
  tester: string;
}

export interface AuditResult {
  auditType: string;
  auditDate: Date;
  score: number;
  findings: string[];
  correctiveActions: string[];
  followUpDate: Date;
}

export interface SustainabilityInfo {
  carbonFootprint: number;
  recyclableContent: number;
  packagingScore: number;
  energyEfficiency: number;
  waterUsage: number;
  sustainabilityCertifications: string[];
  environmentalImpact: EnvironmentalImpact;
}

export interface EnvironmentalImpact {
  scope1Emissions: number;
  scope2Emissions: number;
  scope3Emissions: number;
  wasteGeneration: number;
  renewableEnergyUsage: number;
}

export interface Risk {
  id: string;
  type: 'technical' | 'market' | 'regulatory' | 'supply_chain' | 'financial';
  description: string;
  probability: number; // 0-1
  impact: number; // 0-1
  severity: 'low' | 'medium' | 'high' | 'critical';
  mitigation: string[];
  owner: string;
  status: 'open' | 'mitigating' | 'closed';
}

// Seasonal Planning Types
export interface SeasonalPlan {
  id: string;
  name: string;
  season: Season;
  year: number;
  categories: string[];
  timeline: PlanTimeline;
  budget: SeasonalBudget;
  teamAssignments: TeamAssignment[];
  objectives: PlanObjective[];
  dependencies: Dependency[];
  status: 'planning' | 'approved' | 'executing' | 'completed' | 'cancelled';
  lastUpdated: Date;
}

export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'holiday' | 'back_to_school';

export interface PlanTimeline {
  planningStart: Date;
  conceptDeadline: Date;
  developmentDeadline: Date;
  launchDate: Date;
  seasonEnd: Date;
  reviewDate: Date;
  milestones: Milestone[];
}

export interface Milestone {
  name: string;
  date: Date;
  status: 'pending' | 'completed' | 'delayed' | 'at_risk';
  dependencies: string[];
  owner: string;
}

export interface SeasonalBudget {
  totalBudget: number;
  developmentBudget: number;
  marketingBudget: number;
  inventoryBudget: number;
  contingencyBudget: number;
  allocated: number;
  remaining: number;
}

export interface TeamAssignment {
  teamId: string;
  teamName: string;
  role: string;
  responsibility: string[];
  members: TeamMember[];
  budget: number;
  timeline: Date[];
}

export interface TeamMember {
  employeeId: string;
  name: string;
  role: string;
  department: string;
  allocation: number; // percentage
  skills: string[];
  experience: number; // years
}

export interface PlanObjective {
  id: string;
  description: string;
  category: string;
  targetMetric: string;
  targetValue: number;
  currentValue: number;
  progress: number; // percentage
  priority: 'low' | 'medium' | 'high' | 'critical';
  owner: string;
}

export interface Dependency {
  id: string;
  type: 'internal' | 'external';
  description: string;
  dependentOn: string;
  impact: 'low' | 'medium' | 'high' | 'critical';
  status: 'waiting' | 'in_progress' | 'resolved' | 'blocked';
  resolution: string;
}

// Assortment Building Types
export interface AssortmentRecommendation {
  id: string;
  storeCluster: string;
  clusterDescription: string;
  category: string;
  recommendedProducts: ProductAssortment[];
  predictedPerformance: AssortmentPerformance;
  localFactors: LocalFactor[];
  competitiveAnalysis: CompetitiveAnalysis;
  confidence: number;
  lastUpdated: Date;
}

export interface ProductAssortment {
  productId: string;
  productName: string;
  brand: string;
  priority: 'core' | 'seasonal' | 'opportunistic' | 'test';
  predictedSales: number;
  predictedMargin: number;
  spaceAllocation: number; // shelf space percentage
  pricingRecommendation: number;
  inventory: InventoryRecommendation;
}

export interface InventoryRecommendation {
  initialStock: number;
  reorderPoint: number;
  maxStock: number;
  turnoverRate: number;
  seasonalAdjustment: number;
}

export interface AssortmentPerformance {
  projectedRevenue: number;
  projectedMargin: number;
  projectedTurnover: number;
  marketShare: number;
  customerSatisfaction: number;
  riskScore: number;
}

export interface LocalFactor {
  type: 'demographic' | 'economic' | 'cultural' | 'geographic' | 'competitive';
  name: string;
  value: string | number;
  impact: number; // -1 to 1
  confidence: number; // 0 to 1
  description: string;
}

export interface CompetitiveAnalysis {
  primaryCompetitors: string[];
  marketPosition: string;
  pricingComparison: PricingComparison[];
  assortmentGaps: string[];
  opportunities: string[];
  threats: string[];
}

export interface PricingComparison {
  competitor: string;
  productCategory: string;
  ourPrice: number;
  competitorPrice: number;
  priceDifference: number;
  recommendation: string;
}

// Store Clustering Types
export interface StoreCluster {
  clusterId: string;
  clusterName: string;
  description: string;
  storeCount: number;
  stores: ClusterStore[];
  demographics: Demographics;
  preferences: CustomerPreferences;
  performance: ClusterPerformance;
  assortmentStrategy: string;
}

export interface ClusterStore {
  storeId: string;
  storeName: string;
  city: string;
  state: string;
  zipCode: string;
  size: 'small' | 'medium' | 'large' | 'supercenter';
  format: 'neighborhood_market' | 'supercenter' | 'discount_store';
  demographics: StoreDemographics;
}

export interface Demographics {
  averageAge: number;
  medianIncome: number;
  educationLevel: string;
  familySize: number;
  ethnicComposition: EthnicBreakdown;
  urbanicity: 'urban' | 'suburban' | 'rural';
}

export interface EthnicBreakdown {
  white: number;
  hispanic: number;
  black: number;
  asian: number;
  other: number;
}

export interface StoreDemographics extends Demographics {
  trafficPattern: TrafficPattern;
  seasonalVariation: number;
  competitionLevel: 'low' | 'medium' | 'high';
}

export interface TrafficPattern {
  peakDays: string[];
  peakHours: number[];
  averageDailyTraffic: number;
  seasonalMultiplier: SeasonalMultiplier[];
}

export interface SeasonalMultiplier {
  season: string;
  multiplier: number;
}

export interface CustomerPreferences {
  priceConsciousness: number; // 0-1
  brandLoyalty: number; // 0-1
  organicPreference: number; // 0-1
  privateLabel: number; // 0-1
  categoryPreferences: CategoryPreference[];
  shoppingBehavior: ShoppingBehavior;
}

export interface CategoryPreference {
  category: string;
  preference: number; // 0-1
  frequency: 'daily' | 'weekly' | 'monthly' | 'seasonal';
  seasonality: number; // seasonal variation
}

export interface ShoppingBehavior {
  basketSize: number;
  frequency: number; // visits per month
  digitalEngagement: number; // 0-1
  loyaltyProgram: number; // participation rate
  mobileShopping: number; // mobile usage rate
}

export interface ClusterPerformance {
  averageRevenue: number;
  averageMargin: number;
  customerSatisfaction: number;
  marketShare: number;
  growthRate: number;
  efficiency: EfficiencyMetrics;
}

export interface EfficiencyMetrics {
  salesPerSquareFoot: number;
  inventoryTurnover: number;
  laborProductivity: number;
  energyEfficiency: number;
  wasteReduction: number;
}

// Innovation Pipeline Types
export interface InnovationPipeline {
  concepts: Concept[];
  prototypes: Prototype[];
  testing: Testing[];
  launches: Launch[];
  performance: PipelinePerformance;
}

export interface Concept {
  id: string;
  name: string;
  description: string;
  category: string;
  innovationType: 'incremental' | 'breakthrough' | 'disruptive';
  submissionDate: Date;
  submitter: string;
  status: 'submitted' | 'under_review' | 'approved' | 'rejected' | 'on_hold';
  businessCase: BusinessCase;
  technicalFeasibility: TechnicalFeasibility;
  marketPotential: MarketPotential;
}

export interface BusinessCase {
  investmentRequired: number;
  projectedRevenue: number;
  projectedMargin: number;
  paybackPeriod: number;
  npv: number;
  irr: number; // Internal Rate of Return
  risks: string[];
  assumptions: string[];
}

export interface TechnicalFeasibility {
  complexity: 'low' | 'medium' | 'high' | 'very_high';
  requiredCapabilities: string[];
  technicalRisks: string[];
  resourceRequirements: ResourceRequirement[];
  timeline: number; // months
  feasibilityScore: number; // 0-1
}

export interface ResourceRequirement {
  type: 'personnel' | 'equipment' | 'materials' | 'technology';
  description: string;
  quantity: number;
  cost: number;
  availability: 'available' | 'limited' | 'unavailable';
}

export interface MarketPotential {
  targetMarket: string;
  marketSize: number;
  expectedMarketShare: number;
  customerNeed: string;
  competitiveLandscape: string[];
  differentiationFactors: string[];
  marketReadiness: number; // 0-1
}

export interface Prototype {
  id: string;
  conceptId: string;
  version: string;
  description: string;
  developmentCost: number;
  timeline: PrototypeTimeline;
  specifications: Specification[];
  testResults: PrototypeTestResult[];
  stakeholderFeedback: StakeholderFeedback[];
  status: 'in_development' | 'testing' | 'approved' | 'rejected' | 'iteration_required';
}

export interface PrototypeTimeline {
  startDate: Date;
  targetCompletion: Date;
  actualCompletion?: Date;
  milestones: PrototypeMilestone[];
}

export interface PrototypeMilestone {
  name: string;
  targetDate: Date;
  actualDate?: Date;
  status: 'pending' | 'completed' | 'delayed';
  deliverables: string[];
}

export interface Specification {
  category: string;
  parameter: string;
  targetValue: string | number;
  actualValue?: string | number;
  tolerance: string;
  critical: boolean;
}

export interface PrototypeTestResult {
  testType: string;
  testDate: Date;
  result: 'pass' | 'fail' | 'marginal';
  score: number;
  details: string;
  recommendations: string[];
}

export interface StakeholderFeedback {
  stakeholder: string;
  role: string;
  feedbackDate: Date;
  rating: number; // 1-5
  comments: string;
  recommendations: string[];
  approved: boolean;
}

export interface Testing {
  id: string;
  prototypeId: string;
  testType: 'consumer' | 'market' | 'technical' | 'regulatory';
  description: string;
  methodology: string;
  sampleSize: number;
  timeline: TestingTimeline;
  results: TestingResults;
  conclusions: string[];
  recommendations: string[];
}

export interface TestingTimeline {
  planningStart: Date;
  executionStart: Date;
  executionEnd: Date;
  analysisComplete: Date;
  reportComplete: Date;
}

export interface TestingResults {
  overallScore: number;
  acceptanceRate: number;
  purchaseIntent: number;
  priceAcceptance: number;
  keyFindings: Finding[];
  demographics: TestDemographics;
  feedback: TestFeedback[];
}

export interface Finding {
  category: string;
  finding: string;
  significance: 'low' | 'medium' | 'high' | 'critical';
  impact: string;
  recommendation: string;
}

export interface TestDemographics {
  ageGroups: AgeGroup[];
  incomeGroups: IncomeGroup[];
  genderSplit: GenderSplit;
  geography: Geography[];
}

export interface AgeGroup {
  range: string;
  percentage: number;
  score: number;
}

export interface IncomeGroup {
  range: string;
  percentage: number;
  score: number;
}

export interface GenderSplit {
  male: number;
  female: number;
  other: number;
}

export interface Geography {
  region: string;
  percentage: number;
  score: number;
}

export interface TestFeedback {
  respondentId: string;
  rating: number;
  positives: string[];
  negatives: string[];
  suggestions: string[];
  purchaseIntent: number;
  pricePoint: number;
}

export interface Launch {
  id: string;
  productId: string;
  launchType: 'full' | 'limited' | 'test' | 'regional';
  launchDate: Date;
  markets: string[];
  stores: number;
  launchPlan: LaunchPlan;
  performance: LaunchPerformance;
  postLaunchActions: PostLaunchAction[];
}

export interface LaunchPlan {
  prelaunchActivities: Activity[];
  launchActivities: Activity[];
  postlaunchActivities: Activity[];
  budget: LaunchBudget;
  timeline: LaunchTimeline;
  successMetrics: SuccessMetric[];
}

export interface Activity {
  name: string;
  description: string;
  owner: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  status: 'planned' | 'in_progress' | 'completed' | 'cancelled';
  dependencies: string[];
}

export interface LaunchBudget {
  totalBudget: number;
  marketing: number;
  inventory: number;
  operations: number;
  contingency: number;
  actualSpend: number;
}

export interface LaunchTimeline {
  announcementDate: Date;
  distributionStart: Date;
  marketingStart: Date;
  salesStart: Date;
  fullAvailability: Date;
  firstReview: Date;
}

export interface SuccessMetric {
  metric: string;
  target: number;
  actual?: number;
  period: string;
  status: 'on_track' | 'at_risk' | 'missed' | 'exceeded';
}

export interface LaunchPerformance {
  salesVolume: number;
  revenue: number;
  marketShare: number;
  customerSatisfaction: number;
  distributionLevel: number;
  marketingReach: number;
  successRate: number; // 0-1
  roi: number;
}

export interface PostLaunchAction {
  action: string;
  reason: string;
  timeline: string;
  owner: string;
  budget: number;
  expectedOutcome: string;
  status: 'planned' | 'executing' | 'completed';
}

export interface PipelinePerformance {
  totalConcepts: number;
  conceptsApproved: number;
  prototypesSuccessful: number;
  testingPassRate: number;
  launchSuccessRate: number;
  averageTimeToMarket: number;
  totalInvestment: number;
  totalRevenue: number;
  pipelineROI: number;
}

// Dashboard and Alert Types
export interface PlanningPLMDashboard {
  id: string;
  lastUpdated: Date;
  user: string;
  seasonalPlanning: SeasonalPlanningData;
  productLifecycle: ProductLifecycleData;
  assortmentBuilding: AssortmentBuildingData;
  localization: LocalizationData;
  supplierManagement: SupplierManagementData;
  innovationPipeline: InnovationPipelineData;
  alerts: PLMAlert[];
  kpis: PLMDashboardKPI[];
}

export interface SeasonalPlanningData {
  activePlans: SeasonalPlan[];
  upcomingMilestones: Milestone[];
  budgetUtilization: number;
  teamUtilization: number;
  planningEfficiency: number;
}

export interface ProductLifecycleData {
  activeProducts: Product[];
  stageDistribution: StageDistribution[];
  riskProducts: Product[];
  performanceMetrics: LifecycleMetrics;
}

export interface StageDistribution {
  stage: ProductLifecycleStage;
  count: number;
  percentage: number;
  revenue: number;
  trend: 'increasing' | 'stable' | 'decreasing';
}

export interface LifecycleMetrics {
  averageTimeToMarket: number;
  launchSuccessRate: number;
  portfolioROI: number;
  innovation: number;
}

export interface AssortmentBuildingData {
  recommendations: AssortmentRecommendation[];
  clusters: StoreCluster[];
  performance: AssortmentAnalytics;
  opportunities: AssortmentOpportunity[];
}

export interface AssortmentAnalytics {
  totalRevenue: number;
  averageMargin: number;
  assortmentEfficiency: number;
  localizationScore: number;
  customerSatisfaction: number;
}

export interface AssortmentOpportunity {
  type: 'new_product' | 'localization' | 'optimization' | 'elimination';
  description: string;
  impact: number;
  effort: number;
  priority: number;
  timeline: string;
}

export interface LocalizationData {
  clusters: StoreCluster[];
  customizations: LocalCustomization[];
  performance: LocalizationPerformance;
  insights: LocalizationInsight[];
}

export interface LocalCustomization {
  clusterId: string;
  category: string;
  customization: string;
  impact: number;
  adoptionRate: number;
  performance: number;
}

export interface LocalizationPerformance {
  customizationRate: number;
  performanceImprovement: number;
  customerSatisfaction: number;
  operationalComplexity: number;
}

export interface LocalizationInsight {
  type: 'demographic' | 'cultural' | 'economic' | 'competitive';
  description: string;
  clusters: string[];
  recommendation: string;
  priority: number;
}

export interface SupplierManagementData {
  suppliers: SupplierPerformance[];
  relationships: SupplierRelationship[];
  contracts: ContractSummary[];
  opportunities: SupplierOpportunity[];
}

export interface SupplierPerformance {
  supplierId: string;
  supplierName: string;
  overallScore: number;
  qualityScore: number;
  deliveryScore: number;
  costScore: number;
  innovationScore: number;
  sustainabilityScore: number;
  trend: 'improving' | 'stable' | 'declining';
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface SupplierRelationship {
  supplierId: string;
  relationshipType: 'strategic' | 'preferred' | 'standard' | 'conditional';
  duration: number; // years
  products: number;
  revenue: number;
  innovations: number;
  riskFactors: string[];
  opportunities: string[];
}

export interface ContractSummary {
  contractId: string;
  supplier: string;
  value: number;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'expiring' | 'renewing' | 'terminated';
  performance: number;
  issues: string[];
}

export interface SupplierOpportunity {
  type: 'cost_reduction' | 'quality_improvement' | 'innovation' | 'sustainability';
  supplier: string;
  description: string;
  potential: number;
  effort: number;
  timeline: string;
  priority: number;
}

export interface InnovationPipelineData {
  pipeline: InnovationPipeline;
  stages: PipelineStageMetrics[];
  performance: InnovationPerformance;
  trends: InnovationTrend[];
}

export interface PipelineStageMetrics {
  stage: string;
  count: number;
  value: number;
  successRate: number;
  averageTime: number;
  trend: 'increasing' | 'stable' | 'decreasing';
}

export interface InnovationPerformance {
  totalInvestment: number;
  expectedReturns: number;
  roi: number;
  timeToMarket: number;
  successRate: number;
  portfolioValue: number;
}

export interface InnovationTrend {
  category: string;
  direction: 'increasing' | 'stable' | 'decreasing';
  velocity: number;
  impact: string;
  recommendation: string;
}

export interface PLMAlert {
  id: string;
  type: 'deadline' | 'budget' | 'quality' | 'performance' | 'risk' | 'opportunity';
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  category: string;
  source: string;
  targetDate?: Date;
  impact: string;
  recommendations: string[];
  assignee: string;
  status: 'new' | 'acknowledged' | 'in_progress' | 'resolved' | 'dismissed';
  createdDate: Date;
  updatedDate: Date;
}

export interface PLMDashboardKPI {
  id: string;
  name: string;
  category: string;
  value: number;
  target: number;
  previous: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  status: 'excellent' | 'good' | 'warning' | 'critical';
  description: string;
  lastUpdated: Date;
}

// Additional Utility Types
export type PLMTabId = 
  | 'seasonal-planning'
  | 'product-lifecycle'
  | 'ai-assortment'
  | 'localization'
  | 'supplier-management'
  | 'innovation-pipeline';

export interface PLMTab {
  id: PLMTabId;
  label: string;
  icon: React.ReactNode;
  description: string;
}

export interface PLMPageState {
  activeTab: PLMTabId;
  loading: boolean;
  error: string | null;
  data: PlanningPLMDashboard | null;
  filters: PLMFilters;
  preferences: PLMPreferences;
}

export interface PLMFilters {
  dateRange: DateRange;
  categories: string[];
  brands: string[];
  lifecycleStages: ProductLifecycleStage[];
  clusters: string[];
  suppliers: string[];
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface PLMPreferences {
  defaultTab: PLMTabId;
  chartPreferences: ChartPreferences;
  alertPreferences: AlertPreferences;
  displayOptions: DisplayOptions;
}

export interface ChartPreferences {
  defaultChartType: 'line' | 'bar' | 'area' | 'pie';
  colorScheme: 'walmart' | 'professional' | 'colorful';
  showTrendlines: boolean;
  showConfidenceIntervals: boolean;
}

export interface AlertPreferences {
  enableNotifications: boolean;
  priorityThreshold: 'low' | 'medium' | 'high' | 'critical';
  categories: string[];
  frequency: 'real_time' | 'hourly' | 'daily' | 'weekly';
}

export interface DisplayOptions {
  density: 'compact' | 'comfortable' | 'spacious';
  theme: 'light' | 'dark' | 'auto';
  language: string;
  timezone: string;
}
