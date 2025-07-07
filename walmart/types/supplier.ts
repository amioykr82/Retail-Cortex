/**
 * Supplier Management Type Definitions
 * Comprehensive types for Walmart's Digital Buying & Supplier Management
 */

export interface SupplierContact {
  name: string;
  role: string;
  email: string;
  phone?: string;
}

export interface SupplierData {
  id: string;
  name: string;
  code: string;
  type: 'Strategic Partner' | 'Preferred Supplier' | 'Approved Supplier' | 'Emerging Supplier';
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  status: 'Active' | 'Inactive' | 'Under Review' | 'Suspended';
  country: string;
  region: string;
  categories: string[];
  businessVolume: number;
  contractValue: number;
  contractStartDate: string;
  contractEndDate: string;
  keyContacts: SupplierContact[];
  certifications: string[];
  paymentTerms: string;
  preferredStatus: boolean;
  diversityClassification: string;
  lastAuditDate: string;
  nextAuditDate: string;
}

export interface SupplierMetrics {
  onTimeDelivery: number;
  qualityDefects: number;
  costVariance: number;
  responsiveness: number;
  returnRate: number;
  leadTimeCompliance: number;
  documentationAccuracy: number;
  communicationRating: number;
}

export interface SupplierPerformance {
  supplierId: string;
  periodStart: string;
  periodEnd: string;
  overallScore: number;
  qualityScore: number;
  deliveryScore: number;
  costScore: number;
  serviceScore: number;
  sustainabilityScore: number;
  innovationScore: number;
  metrics: SupplierMetrics;
  trends: {
    qualityTrend: 'Improving' | 'Stable' | 'Declining';
    deliveryTrend: 'Improving' | 'Stable' | 'Declining';
    costTrend: 'Improving' | 'Stable' | 'Declining';
    overallTrend: 'Improving' | 'Stable' | 'Declining';
  };
  benchmarkPosition: string;
  improvementAreas: string[];
  recognitions: string[];
}

export interface CategorySpend {
  category: string;
  spend: number;
  percentage: number;
  suppliers: number;
  topSupplier: string;
}

export interface RegionalSpend {
  region: string;
  spend: number;
  percentage: number;
  suppliers: number;
}

export interface SavingsMetrics {
  negotiatedSavings: number;
  processImprovements: number;
  volumeDiscounts: number;
  contractOptimization: number;
  totalSavingsTarget: number;
  achievementRate: number;
}

export interface ProcurementKPIs {
  costAvoidance: number;
  supplierDiversitySpend: number;
  sustainableSpend: number;
  digitalAdoption: number;
  contractCompliance: number;
  riskMitigation: number;
  innovationIndex: number;
}

export interface ProcurementMetrics {
  overview: {
    totalSpend: number;
    supplierCount: number;
    activeContracts: number;
    averageContractValue: number;
    costSavings: number;
    mavroSpend: number;
    complianceRate: number;
    cycleTimeReduction: number;
  };
  categorySpend: CategorySpend[];
  regionalSpend: RegionalSpend[];
  savingsMetrics: SavingsMetrics;
  kpis: ProcurementKPIs;
}

export interface RiskCategory {
  score: 'Low' | 'Medium' | 'High';
  level: 1 | 2 | 3;
  factors: string[];
}

export interface MitigationPlan {
  risk: string;
  action: string;
  timeline: string;
}

export interface SupplierRisk {
  supplierId: string;
  overallRiskScore: 'Low' | 'Medium' | 'High';
  riskLevel: 1 | 2 | 3;
  lastAssessment: string;
  nextAssessment: string;
  riskCategories: {
    financial: RiskCategory;
    operational: RiskCategory;
    regulatory: RiskCategory;
    geopolitical: RiskCategory;
    cybersecurity: RiskCategory;
    sustainability: RiskCategory;
    concentration: RiskCategory;
  };
  mitigationPlans: MitigationPlan[];
  contingencyPlans: string[];
  insuranceCoverage: string;
  monitoringFrequency: string;
}

export interface CarbonFootprint {
  scope1Emissions: number;
  scope2Emissions: number;
  scope3Emissions: number;
  totalEmissions: number;
  reductionTarget: number;
  currentReduction: number;
  carbonNeutralGoal: string;
}

export interface SupplierDiversity {
  totalDiverseSpend: number;
  minorityOwnedBusiness: number;
  womenOwnedBusiness: number;
  veteranOwnedBusiness: number;
  smallBusiness: number;
  diverseSupplierCount: number;
  diversityTarget: number;
  currentAchievement: number;
}

export interface EthicalSourcing {
  suppliersAudited: number;
  auditPassRate: number;
  nonComplianceIssues: number;
  remediationComplete: number;
  childLaborRisk: 'Low' | 'Medium' | 'High';
  forcedLaborRisk: 'Low' | 'Medium' | 'High';
  humanRightsScore: number;
  ethicalCertifications: string[];
}

export interface CircularEconomy {
  recyclablePackaging: number;
  wasteToLandfill: number;
  materialRecovery: number;
  supplierWasteReduction: number;
  circularSuppliers: number;
  circularSpend: number;
}

export interface SustainabilityMetrics {
  overview: {
    sustainableSpendPercentage: number;
    carbonNeutralSuppliers: number;
    diverseSupplierSpend: number;
    ethicalSourcingCompliance: number;
    wasteReductionTarget: number;
    renewableEnergyUsage: number;
  };
  carbonFootprint: CarbonFootprint;
  supplierDiversity: SupplierDiversity;
  ethicalSourcing: EthicalSourcing;
  circularEconomy: CircularEconomy;
}

export interface DigitalTransformation {
  eInvoicingAdoption: number;
  eCatalogUsage: number;
  digitalContractManagement: number;
  supplierPortalAdoption: number;
  mobileAppUsage: number;
  aiAutomation: number;
  blockchainPilots: number;
  iotImplementation: number;
}

export interface SupplierOnboarding {
  averageOnboardingTime: number;
  digitalOnboardingRate: number;
  automatedVerification: number;
  complianceChecks: number;
  fastTrackEligible: number;
  onboardingScore: number;
}

export interface Analytics {
  predictiveAnalytics: 'Basic' | 'Advanced' | 'Comprehensive';
  spendAnalytics: 'Basic' | 'Advanced' | 'Comprehensive';
  supplierAnalytics: 'Basic' | 'Advanced' | 'Comprehensive';
  riskAnalytics: 'Basic' | 'Advanced' | 'Comprehensive';
  marketIntelligence: 'Basic' | 'Advanced' | 'Comprehensive';
  dataQualityScore: number;
}

export interface Innovation {
  innovationProjects: number;
  supplierInnovationPrograms: number;
  patentSubmissions: number;
  digitalPilots: number;
  startupPartnerships: number;
  innovationSpend: number;
  innovationRoi: number;
}

export interface Automation {
  processAutomation: number;
  documentProcessing: number;
  approvalWorkflows: number;
  exceptionHandling: number;
  reportingAutomation: number;
  botDeployments: number;
}

export interface DigitalProcurement {
  digitalTransformation: DigitalTransformation;
  supplierOnboarding: SupplierOnboarding;
  analytics: Analytics;
  innovation: Innovation;
  automation: Automation;
}

export interface SupplierAlert {
  id: string;
  type: 'Risk' | 'Performance' | 'Contract' | 'Compliance' | 'Innovation';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  title: string;
  description: string;
  suppliersAffected: string[];
  impact: 'Low' | 'Medium' | 'High';
  category: string;
  timestamp: string;
  status: 'Active' | 'Resolved' | 'In Progress';
  actionRequired: boolean;
  assignedTo: string;
}

export interface MarketTrend {
  category: string;
  trend: string;
  impact: 'Low' | 'Medium' | 'High';
  prediction: string;
  confidence: number;
  recommendation: string;
}

export interface RiskPrediction {
  type: string;
  probability: number;
  timeframe: string;
  affectedCategories: string[];
  mitigation: string;
}

export interface OpportunityIdentification {
  type: string;
  value: number;
  category: string;
  timeline: string;
  confidence: number;
}

export interface SupplierInsights {
  marketTrends: MarketTrend[];
  riskPredictions: RiskPrediction[];
  opportunityIdentification: OpportunityIdentification[];
}
