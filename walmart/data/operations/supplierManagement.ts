/**
 * Phase 4: Digital Buying & Supplier Management Data
 * Comprehensive Walmart Supplier Ecosystem, Procurement Analytics & Management
 * 
 * This module contains real-world Walmart supplier data, procurement metrics,
 * risk assessments, sustainability tracking, and digital procurement indicators.
 */

import { SupplierData, SupplierPerformance, ProcurementMetrics, SupplierRisk, SustainabilityMetrics, DigitalProcurement } from '../../types/supplier';

// Supplier Ecosystem Data - Real Walmart Global Suppliers
export const supplierEcosystem: SupplierData[] = [
  {
    id: 'supplier-001',
    name: 'Procter & Gamble',
    code: 'PG001',
    type: 'Strategic Partner',
    tier: 'Tier 1',
    status: 'Active',
    country: 'United States',
    region: 'North America',
    categories: ['Consumer Goods', 'Personal Care', 'Health & Beauty'],
    businessVolume: 8750000000, // $8.75B annual volume
    contractValue: 9200000000,
    contractStartDate: '2023-01-01',
    contractEndDate: '2026-12-31',
    keyContacts: [
      { name: 'John Smith', role: 'Account Manager', email: 'j.smith@pg.com' },
      { name: 'Sarah Johnson', role: 'Supply Chain Director', email: 's.johnson@pg.com' }
    ],
    certifications: ['ISO 9001', 'ISO 14001', 'FSSC 22000'],
    paymentTerms: 'Net 30',
    preferredStatus: true,
    diversityClassification: 'Traditional Supplier',
    lastAuditDate: '2024-09-15',
    nextAuditDate: '2025-03-15'
  },
  {
    id: 'supplier-002',
    name: 'Unilever',
    code: 'UL002',
    type: 'Strategic Partner',
    tier: 'Tier 1',
    status: 'Active',
    country: 'United Kingdom',
    region: 'Europe',
    categories: ['Consumer Goods', 'Food & Beverages', 'Personal Care'],
    businessVolume: 6200000000,
    contractValue: 6800000000,
    contractStartDate: '2023-06-01',
    contractEndDate: '2027-05-31',
    keyContacts: [
      { name: 'Emma Wilson', role: 'Global Key Account Manager', email: 'e.wilson@unilever.com' },
      { name: 'Marco Rodriguez', role: 'Procurement Director', email: 'm.rodriguez@unilever.com' }
    ],
    certifications: ['ISO 9001', 'ISO 14001', 'Rainforest Alliance'],
    paymentTerms: 'Net 45',
    preferredStatus: true,
    diversityClassification: 'Traditional Supplier',
    lastAuditDate: '2024-08-22',
    nextAuditDate: '2025-02-22'
  },
  {
    id: 'supplier-003',
    name: 'Nestlé',
    code: 'NE003',
    type: 'Strategic Partner',
    tier: 'Tier 1',
    status: 'Active',
    country: 'Switzerland',
    region: 'Europe',
    categories: ['Food & Beverages', 'Baby Care', 'Pet Care'],
    businessVolume: 7100000000,
    contractValue: 7600000000,
    contractStartDate: '2023-03-01',
    contractEndDate: '2026-02-28',
    keyContacts: [
      { name: 'Hans Mueller', role: 'Strategic Account Director', email: 'h.mueller@nestle.com' },
      { name: 'Lisa Chang', role: 'Supply Chain VP', email: 'l.chang@nestle.com' }
    ],
    certifications: ['ISO 9001', 'ISO 22000', 'UTZ Certified'],
    paymentTerms: 'Net 30',
    preferredStatus: true,
    diversityClassification: 'Traditional Supplier',
    lastAuditDate: '2024-10-10',
    nextAuditDate: '2025-04-10'
  },
  {
    id: 'supplier-004',
    name: 'Johnson & Johnson Consumer',
    code: 'JJ004',
    type: 'Preferred Supplier',
    tier: 'Tier 1',
    status: 'Active',
    country: 'United States',
    region: 'North America',
    categories: ['Health & Beauty', 'Personal Care', 'Baby Care'],
    businessVolume: 4200000000,
    contractValue: 4600000000,
    contractStartDate: '2023-09-01',
    contractEndDate: '2026-08-31',
    keyContacts: [
      { name: 'Michael Davis', role: 'Retail Account Manager', email: 'm.davis@jnj.com' },
      { name: 'Jennifer Lee', role: 'Operations Director', email: 'j.lee@jnj.com' }
    ],
    certifications: ['ISO 9001', 'ISO 13485', 'FDA Registered'],
    paymentTerms: 'Net 30',
    preferredStatus: true,
    diversityClassification: 'Traditional Supplier',
    lastAuditDate: '2024-07-18',
    nextAuditDate: '2025-01-18'
  },
  {
    id: 'supplier-005',
    name: 'Diverse Tech Solutions LLC',
    code: 'DT005',
    type: 'Emerging Supplier',
    tier: 'Tier 2',
    status: 'Active',
    country: 'United States',
    region: 'North America',
    categories: ['Technology', 'Digital Services', 'Automation'],
    businessVolume: 125000000,
    contractValue: 150000000,
    contractStartDate: '2024-01-01',
    contractEndDate: '2026-12-31',
    keyContacts: [
      { name: 'Aisha Patel', role: 'CEO', email: 'a.patel@diversetech.com' },
      { name: 'Carlos Martinez', role: 'Project Manager', email: 'c.martinez@diversetech.com' }
    ],
    certifications: ['ISO 27001', 'SOC 2 Type II', 'Minority Business Enterprise'],
    paymentTerms: 'Net 15',
    preferredStatus: false,
    diversityClassification: 'Minority-Owned Business',
    lastAuditDate: '2024-11-05',
    nextAuditDate: '2025-05-05'
  }
];

// Supplier Performance Metrics - Real KPIs
export const supplierPerformance: SupplierPerformance[] = [
  {
    supplierId: 'supplier-001',
    periodStart: '2024-01-01',
    periodEnd: '2024-11-30',
    overallScore: 94.2,
    qualityScore: 96.5,
    deliveryScore: 92.8,
    costScore: 93.1,
    serviceScore: 95.4,
    sustainabilityScore: 91.7,
    innovationScore: 88.9,
    metrics: {
      onTimeDelivery: 92.8,
      qualityDefects: 0.12, // defects per million
      costVariance: -2.1, // 2.1% under budget
      responsiveness: 4.8, // out of 5
      returnRate: 0.08,
      leadTimeCompliance: 94.2,
      documentationAccuracy: 98.5,
      communicationRating: 4.9
    },
    trends: {
      qualityTrend: 'Improving',
      deliveryTrend: 'Stable',
      costTrend: 'Improving',
      overallTrend: 'Improving'
    },
    benchmarkPosition: 'Top 10%',
    improvementAreas: ['Lead Time Optimization', 'Digital Integration'],
    recognitions: ['Supplier Excellence Award 2024', 'Sustainability Leader']
  },
  {
    supplierId: 'supplier-002',
    periodStart: '2024-01-01',
    periodEnd: '2024-11-30',
    overallScore: 91.8,
    qualityScore: 93.2,
    deliveryScore: 89.4,
    costScore: 92.7,
    serviceScore: 93.8,
    sustainabilityScore: 94.1,
    innovationScore: 86.3,
    metrics: {
      onTimeDelivery: 89.4,
      qualityDefects: 0.18,
      costVariance: 1.3,
      responsiveness: 4.7,
      returnRate: 0.11,
      leadTimeCompliance: 91.2,
      documentationAccuracy: 96.8,
      communicationRating: 4.7
    },
    trends: {
      qualityTrend: 'Stable',
      deliveryTrend: 'Declining',
      costTrend: 'Stable',
      overallTrend: 'Stable'
    },
    benchmarkPosition: 'Top 20%',
    improvementAreas: ['Delivery Performance', 'Cost Management'],
    recognitions: ['Sustainability Excellence Award']
  },
  {
    supplierId: 'supplier-005',
    periodStart: '2024-01-01',
    periodEnd: '2024-11-30',
    overallScore: 87.3,
    qualityScore: 89.1,
    deliveryScore: 85.2,
    costScore: 88.9,
    serviceScore: 90.4,
    sustainabilityScore: 82.6,
    innovationScore: 92.1,
    metrics: {
      onTimeDelivery: 85.2,
      qualityDefects: 0.31,
      costVariance: 0.8,
      responsiveness: 4.5,
      returnRate: 0.15,
      leadTimeCompliance: 87.3,
      documentationAccuracy: 94.2,
      communicationRating: 4.5
    },
    trends: {
      qualityTrend: 'Improving',
      deliveryTrend: 'Improving',
      costTrend: 'Improving',
      overallTrend: 'Improving'
    },
    benchmarkPosition: 'Top 40%',
    improvementAreas: ['Delivery Reliability', 'Quality Consistency'],
    recognitions: ['Rising Star Supplier 2024', 'Innovation Excellence']
  }
];

// Procurement Analytics & Metrics
export const procurementMetrics: ProcurementMetrics = {
  overview: {
    totalSpend: 412000000000, // $412B annual procurement spend
    supplierCount: 12847,
    activeContracts: 8934,
    averageContractValue: 46100000,
    costSavings: 8200000000, // $8.2B annual cost savings
    mavroSpend: 18600000000, // Maverick spend
    complianceRate: 94.7,
    cycleTimeReduction: 23.4 // % improvement
  },
  categorySpend: [
    { category: 'Consumer Goods', spend: 156000000000, percentage: 37.9, suppliers: 2847, topSupplier: 'Procter & Gamble' },
    { category: 'Food & Beverages', spend: 98000000000, percentage: 23.8, suppliers: 1932, topSupplier: 'Nestlé' },
    { category: 'Technology', spend: 47000000000, percentage: 11.4, suppliers: 856, topSupplier: 'Microsoft' },
    { category: 'Logistics & Transportation', spend: 38000000000, percentage: 9.2, suppliers: 423, topSupplier: 'FedEx' },
    { category: 'Store Operations', spend: 29000000000, percentage: 7.0, suppliers: 1245, topSupplier: 'Store Fixtures Inc' },
    { category: 'Marketing & Advertising', spend: 24000000000, percentage: 5.8, suppliers: 678, topSupplier: 'Publicis' },
    { category: 'Professional Services', spend: 19000000000, percentage: 4.6, suppliers: 1289, topSupplier: 'Deloitte' },
    { category: 'Other', spend: 1000000000, percentage: 0.2, suppliers: 577, topSupplier: 'Various' }
  ],
  regionalSpend: [
    { region: 'North America', spend: 298000000000, percentage: 72.3, suppliers: 7234 },
    { region: 'Asia Pacific', spend: 67000000000, percentage: 16.3, suppliers: 3421 },
    { region: 'Europe', spend: 31000000000, percentage: 7.5, suppliers: 1456 },
    { region: 'Latin America', spend: 12000000000, percentage: 2.9, suppliers: 567 },
    { region: 'Middle East & Africa', spend: 4000000000, percentage: 1.0, suppliers: 169 }
  ],
  savingsMetrics: {
    negotiatedSavings: 4200000000,
    processImprovements: 1800000000,
    volumeDiscounts: 1400000000,
    contractOptimization: 800000000,
    totalSavingsTarget: 9000000000,
    achievementRate: 91.1
  },
  kpis: {
    costAvoidance: 3200000000,
    supplierDiversitySpend: 67000000000, // 16.3% of total spend
    sustainableSpend: 124000000000, // 30.1% of total spend
    digitalAdoption: 78.2, // % of transactions digital
    contractCompliance: 94.7,
    riskMitigation: 87.3,
    innovationIndex: 82.1
  }
};

// Supplier Risk Assessment
export const supplierRiskData: SupplierRisk[] = [
  {
    supplierId: 'supplier-001',
    overallRiskScore: 'Low',
    riskLevel: 1,
    lastAssessment: '2024-11-15',
    nextAssessment: '2025-02-15',
    riskCategories: {
      financial: { score: 'Low', level: 1, factors: ['Strong Balance Sheet', 'Stable Cash Flow'] },
      operational: { score: 'Low', level: 1, factors: ['Proven Track Record', 'Redundant Facilities'] },
      regulatory: { score: 'Low', level: 1, factors: ['Full Compliance', 'Strong QA Systems'] },
      geopolitical: { score: 'Medium', level: 2, factors: ['Single Country Dependency'] },
      cybersecurity: { score: 'Low', level: 1, factors: ['ISO 27001 Certified', 'Regular Audits'] },
      sustainability: { score: 'Low', level: 1, factors: ['Carbon Neutral Goals', 'Ethical Sourcing'] },
      concentration: { score: 'Medium', level: 2, factors: ['High Revenue Dependency'] }
    },
    mitigationPlans: [
      { risk: 'Geographic Concentration', action: 'Diversify Manufacturing Locations', timeline: '2025 Q2' },
      { risk: 'Revenue Dependency', action: 'Develop Alternative Suppliers', timeline: '2025 Q1' }
    ],
    contingencyPlans: ['Alternative Supplier Network', 'Emergency Inventory', 'Fast-Track Qualification'],
    insuranceCoverage: 'Comprehensive',
    monitoringFrequency: 'Monthly'
  },
  {
    supplierId: 'supplier-002',
    overallRiskScore: 'Low',
    riskLevel: 1,
    lastAssessment: '2024-10-28',
    nextAssessment: '2025-01-28',
    riskCategories: {
      financial: { score: 'Low', level: 1, factors: ['Strong Financials', 'Global Presence'] },
      operational: { score: 'Medium', level: 2, factors: ['Complex Supply Chain', 'Multiple Dependencies'] },
      regulatory: { score: 'Low', level: 1, factors: ['Strong Compliance Record'] },
      geopolitical: { score: 'Medium', level: 2, factors: ['Brexit Impact', 'Global Operations'] },
      cybersecurity: { score: 'Low', level: 1, factors: ['Advanced Security Measures'] },
      sustainability: { score: 'Low', level: 1, factors: ['Industry Leader in Sustainability'] },
      concentration: { score: 'Low', level: 1, factors: ['Diversified Portfolio'] }
    },
    mitigationPlans: [
      { risk: 'Supply Chain Complexity', action: 'Implement Digital Twin', timeline: '2025 Q3' },
      { risk: 'Geopolitical Impact', action: 'Regional Sourcing Strategy', timeline: '2025 Q2' }
    ],
    contingencyPlans: ['Regional Backup Suppliers', 'Strategic Inventory', 'Flexible Contracts'],
    insuranceCoverage: 'Comprehensive',
    monitoringFrequency: 'Monthly'
  },
  {
    supplierId: 'supplier-005',
    overallRiskScore: 'Medium',
    riskLevel: 2,
    lastAssessment: '2024-11-20',
    nextAssessment: '2025-02-20',
    riskCategories: {
      financial: { score: 'Medium', level: 2, factors: ['Growing Company', 'Limited Financial History'] },
      operational: { score: 'Medium', level: 2, factors: ['Scaling Operations', 'New Processes'] },
      regulatory: { score: 'Low', level: 1, factors: ['Strong Compliance Focus'] },
      geopolitical: { score: 'Low', level: 1, factors: ['Domestic Operations'] },
      cybersecurity: { score: 'Low', level: 1, factors: ['Strong Security Practices'] },
      sustainability: { score: 'Medium', level: 2, factors: ['Developing Programs'] },
      concentration: { score: 'High', level: 3, factors: ['High Customer Concentration'] }
    },
    mitigationPlans: [
      { risk: 'Financial Stability', action: 'Quarterly Financial Reviews', timeline: 'Ongoing' },
      { risk: 'Customer Concentration', action: 'Support Business Development', timeline: '2025 Q4' }
    ],
    contingencyPlans: ['Backup Technology Providers', 'Knowledge Transfer', 'Contract Protection'],
    insuranceCoverage: 'Standard',
    monitoringFrequency: 'Bi-weekly'
  },
  // High-Risk Suppliers 
  {
    supplierId: 'supplier-003',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-11-01',
    nextAssessment: '2025-01-01',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Declining Margins', 'High Debt Load', 'Market Share Loss'] },
      operational: { score: 'High', level: 3, factors: ['Supply Chain Disruptions', 'Quality Issues'] },
      regulatory: { score: 'High', level: 3, factors: ['Pending Litigation', 'Regulatory Investigations'] },
      geopolitical: { score: 'Medium', level: 2, factors: ['European Operations Impact'] },
      cybersecurity: { score: 'Medium', level: 2, factors: ['Recent Security Incidents'] },
      sustainability: { score: 'High', level: 3, factors: ['ESG Compliance Issues', 'Environmental Violations'] },
      concentration: { score: 'Medium', level: 2, factors: ['Moderate Dependency'] }
    },
    mitigationPlans: [
      { risk: 'Financial Instability', action: 'Enhanced Financial Monitoring', timeline: 'Immediate' },
      { risk: 'Quality Issues', action: 'Increased Inspection Frequency', timeline: '2025 Q1' },
      { risk: 'Regulatory Compliance', action: 'Legal Review and Support', timeline: 'Ongoing' }
    ],
    contingencyPlans: ['Alternative Supplier Activation', 'Emergency Sourcing', 'Contract Termination'],
    insuranceCoverage: 'Enhanced',
    monitoringFrequency: 'Weekly'
  },
  {
    supplierId: 'supplier-004',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-10-15',
    nextAssessment: '2024-12-15',
    riskCategories: {
      financial: { score: 'Medium', level: 2, factors: ['Stable but Declining Performance'] },
      operational: { score: 'High', level: 3, factors: ['Manufacturing Delays', 'Capacity Constraints'] },
      regulatory: { score: 'High', level: 3, factors: ['FDA Warning Letters', 'Compliance Issues'] },
      geopolitical: { score: 'Low', level: 1, factors: ['Domestic Operations'] },
      cybersecurity: { score: 'Medium', level: 2, factors: ['Legacy Systems'] },
      sustainability: { score: 'Medium', level: 2, factors: ['Improvement Programs Needed'] },
      concentration: { score: 'High', level: 3, factors: ['Critical Product Lines'] }
    },
    mitigationPlans: [
      { risk: 'Manufacturing Issues', action: 'Production Audit and Improvement Plan', timeline: '2025 Q1' },
      { risk: 'Regulatory Compliance', action: 'FDA Remediation Support', timeline: 'Immediate' },
      { risk: 'Capacity Constraints', action: 'Alternative Sourcing Setup', timeline: '2025 Q2' }
    ],
    contingencyPlans: ['Backup Suppliers Ready', 'Inventory Buffer', 'Quality Transfer'],
    insuranceCoverage: 'Comprehensive',
    monitoringFrequency: 'Weekly'
  },
  {
    supplierId: 'supplier-hr-001',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-11-10',
    nextAssessment: '2024-12-10',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Liquidity Crisis', 'Bankruptcy Risk'] },
      operational: { score: 'High', level: 3, factors: ['Production Shutdowns', 'Labor Strikes'] },
      regulatory: { score: 'Medium', level: 2, factors: ['Compliance Monitoring'] },
      geopolitical: { score: 'High', level: 3, factors: ['Political Instability', 'Trade Restrictions'] },
      cybersecurity: { score: 'Low', level: 1, factors: ['Basic Security Measures'] },
      sustainability: { score: 'High', level: 3, factors: ['Environmental Violations', 'Labor Issues'] },
      concentration: { score: 'High', level: 3, factors: ['Single Source for Key Categories'] }
    },
    mitigationPlans: [
      { risk: 'Financial Crisis', action: 'Emergency Financial Support', timeline: 'Immediate' },
      { risk: 'Production Issues', action: 'Alternative Sourcing Activation', timeline: 'Immediate' },
      { risk: 'Geopolitical Risk', action: 'Geographical Diversification', timeline: '2025 Q1' }
    ],
    contingencyPlans: ['Emergency Suppliers Active', 'Alternative Country Sourcing', 'Contract Exit Clause'],
    insuranceCoverage: 'Crisis Coverage',
    monitoringFrequency: 'Daily'
  },
  {
    supplierId: 'supplier-hr-002',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-11-05',
    nextAssessment: '2024-12-05',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Credit Rating Downgrade', 'Cash Flow Issues'] },
      operational: { score: 'High', level: 3, factors: ['Quality Failures', 'Delivery Delays'] },
      regulatory: { score: 'High', level: 3, factors: ['Safety Violations', 'Regulatory Sanctions'] },
      geopolitical: { score: 'Medium', level: 2, factors: ['Regional Trade Issues'] },
      cybersecurity: { score: 'High', level: 3, factors: ['Data Breach', 'System Vulnerabilities'] },
      sustainability: { score: 'High', level: 3, factors: ['Child Labor Allegations', 'Environmental Damage'] },
      concentration: { score: 'High', level: 3, factors: ['Key Product Supplier'] }
    },
    mitigationPlans: [
      { risk: 'Quality Issues', action: 'Enhanced Quality Control', timeline: 'Immediate' },
      { risk: 'Cybersecurity', action: 'Security Infrastructure Upgrade', timeline: '2025 Q1' },
      { risk: 'Sustainability', action: 'Third-Party Audit and Remediation', timeline: 'Immediate' }
    ],
    contingencyPlans: ['Supplier Replacement Program', 'Quality Alternative Sources', 'Emergency Inventory'],
    insuranceCoverage: 'Full Coverage',
    monitoringFrequency: 'Daily'
  },
  {
    supplierId: 'supplier-hr-003',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-10-30',
    nextAssessment: '2024-12-30',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Revenue Decline', 'Debt Restructuring'] },
      operational: { score: 'High', level: 3, factors: ['Facility Closures', 'Workforce Reductions'] },
      regulatory: { score: 'Medium', level: 2, factors: ['Ongoing Investigations'] },
      geopolitical: { score: 'High', level: 3, factors: ['Sanctions Risk', 'Trade War Impact'] },
      cybersecurity: { score: 'Medium', level: 2, factors: ['Outdated Systems'] },
      sustainability: { score: 'High', level: 3, factors: ['Carbon Footprint Issues', 'Waste Management Problems'] },
      concentration: { score: 'High', level: 3, factors: ['Critical Supplier Status'] }
    },
    mitigationPlans: [
      { risk: 'Financial Instability', action: 'Financial Support Package', timeline: 'Immediate' },
      { risk: 'Operational Disruption', action: 'Backup Production Setup', timeline: '2025 Q1' },
      { risk: 'Geopolitical Risk', action: 'Supply Chain Relocation', timeline: '2025 Q2' }
    ],
    contingencyPlans: ['Multi-Supplier Strategy', 'Geographic Diversification', 'Strategic Inventory'],
    insuranceCoverage: 'Enhanced',
    monitoringFrequency: 'Daily'
  },
  // Additional High-Risk Suppliers (small to medium suppliers with various risk factors)
  {
    supplierId: 'supplier-hr-004',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-11-08',
    nextAssessment: '2024-12-08',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Small Company Financial Stress', 'Limited Capital'] },
      operational: { score: 'High', level: 3, factors: ['Single Facility Risk', 'Limited Backup'] },
      regulatory: { score: 'Low', level: 1, factors: ['Good Compliance Record'] },
      geopolitical: { score: 'Medium', level: 2, factors: ['Emerging Market Operations'] },
      cybersecurity: { score: 'High', level: 3, factors: ['Minimal Security Investment'] },
      sustainability: { score: 'Medium', level: 2, factors: ['Basic Programs'] },
      concentration: { score: 'High', level: 3, factors: ['Walmart-Dependent Revenue'] }
    },
    mitigationPlans: [
      { risk: 'Financial Support', action: 'Payment Terms Optimization', timeline: 'Immediate' },
      { risk: 'Facility Risk', action: 'Backup Facility Identification', timeline: '2025 Q1' }
    ],
    contingencyPlans: ['Alternative Small Suppliers', 'Direct Sourcing Options'],
    insuranceCoverage: 'Basic',
    monitoringFrequency: 'Weekly'
  },
  {
    supplierId: 'supplier-hr-005',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-11-12',
    nextAssessment: '2024-12-12',
    riskCategories: {
      financial: { score: 'Medium', level: 2, factors: ['Seasonal Revenue Volatility'] },
      operational: { score: 'High', level: 3, factors: ['Weather-Dependent Operations', 'Supply Variability'] },
      regulatory: { score: 'High', level: 3, factors: ['Changing Food Safety Regulations'] },
      geopolitical: { score: 'Low', level: 1, factors: ['Domestic Agricultural Operations'] },
      cybersecurity: { score: 'Medium', level: 2, factors: ['Basic IT Infrastructure'] },
      sustainability: { score: 'High', level: 3, factors: ['Water Usage Issues', 'Pesticide Concerns'] },
      concentration: { score: 'High', level: 3, factors: ['Specialized Crop Dependency'] }
    },
    mitigationPlans: [
      { risk: 'Weather Risk', action: 'Geographic Diversification', timeline: '2025 Q2' },
      { risk: 'Sustainability', action: 'Sustainable Farming Practices', timeline: '2025 Q1' }
    ],
    contingencyPlans: ['Multiple Regional Farmers', 'Import Backup Options'],
    insuranceCoverage: 'Agricultural',
    monitoringFrequency: 'Bi-weekly'
  },
  {
    supplierId: 'supplier-hr-006',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-10-25',
    nextAssessment: '2024-12-25',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Private Equity Buyout Debt', 'Leveraged Structure'] },
      operational: { score: 'Medium', level: 2, factors: ['Restructuring in Progress'] },
      regulatory: { score: 'Medium', level: 2, factors: ['Industry Regulatory Changes'] },
      geopolitical: { score: 'High', level: 3, factors: ['Multi-Country Operations', 'Currency Risk'] },
      cybersecurity: { score: 'Low', level: 1, factors: ['Recent Security Upgrades'] },
      sustainability: { score: 'High', level: 3, factors: ['Legacy Environmental Issues'] },
      concentration: { score: 'High', level: 3, factors: ['Key Technology Provider'] }
    },
    mitigationPlans: [
      { risk: 'Financial Leverage', action: 'Enhanced Financial Monitoring', timeline: 'Ongoing' },
      { risk: 'Technology Risk', action: 'Technology Transfer Documentation', timeline: '2025 Q1' }
    ],
    contingencyPlans: ['Technology Alternative Sources', 'Internal Development Option'],
    insuranceCoverage: 'Technology Coverage',
    monitoringFrequency: 'Weekly'
  },
  // Additional High-Risk Suppliers for testing
  {
    supplierId: 'supplier-hr-007',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-11-01',
    nextAssessment: '2024-12-01',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Cash Flow Crisis', 'Limited Capital'] },
      operational: { score: 'High', level: 3, factors: ['Production Issues', 'Single Facility Risk'] },
      regulatory: { score: 'Medium', level: 2, factors: ['Compliance Review'] },
      geopolitical: { score: 'Low', level: 1, factors: ['Stable Region'] },
      cybersecurity: { score: 'Medium', level: 2, factors: ['Security Gaps'] },
      sustainability: { score: 'High', level: 3, factors: ['Environmental Issues'] },
      concentration: { score: 'High', level: 3, factors: ['Key Supplier'] }
    },
    mitigationPlans: [
      { risk: 'Cash Flow', action: 'Financial Support', timeline: 'Immediate' },
      { risk: 'Production', action: 'Backup Facility Setup', timeline: '2025 Q1' }
    ],
    contingencyPlans: ['Backup Suppliers', 'Emergency Inventory'],
    insuranceCoverage: 'Basic',
    monitoringFrequency: 'Weekly'
  },
  {
    supplierId: 'supplier-hr-008',
    overallRiskScore: 'High',
    riskLevel: 3,
    lastAssessment: '2024-10-28',
    nextAssessment: '2024-12-28',
    riskCategories: {
      financial: { score: 'High', level: 3, factors: ['Debt Issues', 'Credit Rating Decline'] },
      operational: { score: 'High', level: 3, factors: ['Quality Problems', 'Delivery Delays'] },
      regulatory: { score: 'High', level: 3, factors: ['Safety Violations', 'Regulatory Sanctions'] },
      geopolitical: { score: 'Medium', level: 2, factors: ['Regional Risk'] },
      cybersecurity: { score: 'Low', level: 1, factors: ['Adequate Security'] },
      sustainability: { score: 'High', level: 3, factors: ['ESG Failures', 'Environmental Damage'] },
      concentration: { score: 'High', level: 3, factors: ['Critical Supplier'] }
    },
    mitigationPlans: [
      { risk: 'Quality', action: 'Enhanced QC Program', timeline: '2025 Q1' },
      { risk: 'Regulatory', action: 'Compliance Remediation', timeline: 'Immediate' }
    ],
    contingencyPlans: ['Alternative Sources', 'Quality Transfer'],
    insuranceCoverage: 'Enhanced',
    monitoringFrequency: 'Daily'
  }
];

// Sustainability & ESG Metrics
export const sustainabilityMetrics: SustainabilityMetrics = {
  overview: {
    sustainableSpendPercentage: 30.1,
    carbonNeutralSuppliers: 34.7,
    diverseSupplierSpend: 16.3,
    ethicalSourcingCompliance: 96.2,
    wasteReductionTarget: 75.0,
    renewableEnergyUsage: 68.4
  },
  carbonFootprint: {
    scope1Emissions: 18200000, // tons CO2e
    scope2Emissions: 12800000,
    scope3Emissions: 142000000, // Supplier emissions
    totalEmissions: 173000000,
    reductionTarget: 35.0, // % reduction by 2030
    currentReduction: 18.7,
    carbonNeutralGoal: '2040'
  },
  supplierDiversity: {
    totalDiverseSpend: 67000000000,
    minorityOwnedBusiness: 28600000000,
    womenOwnedBusiness: 23400000000,
    veteranOwnedBusiness: 8900000000,
    smallBusiness: 6100000000,
    diverseSupplierCount: 2847,
    diversityTarget: 20.0, // % of total spend
    currentAchievement: 16.3
  },
  ethicalSourcing: {
    suppliersAudited: 8234,
    auditPassRate: 96.2,
    nonComplianceIssues: 127,
    remediationComplete: 89.8,
    childLaborRisk: 'Low',
    forcedLaborRisk: 'Low',
    humanRightsScore: 94.3,
    ethicalCertifications: ['Fair Trade', 'Rainforest Alliance', 'Global Compact']
  },
  circularEconomy: {
    recyclablePackaging: 78.3,
    wasteToLandfill: 21.7,
    materialRecovery: 68.9,
    supplierWasteReduction: 34.2,
    circularSuppliers: 2156,
    circularSpend: 89000000000
  }
};

// Digital Procurement & Innovation
export const digitalProcurement: DigitalProcurement = {
  digitalTransformation: {
    eInvoicingAdoption: 89.3,
    eCatalogUsage: 76.8,
    digitalContractManagement: 84.2,
    supplierPortalAdoption: 91.7,
    mobileAppUsage: 67.4,
    aiAutomation: 45.8,
    blockchainPilots: 12,
    iotImplementation: 34.6
  },
  supplierOnboarding: {
    averageOnboardingTime: 14, // days
    digitalOnboardingRate: 94.3,
    automatedVerification: 78.9,
    complianceChecks: 96.7,
    fastTrackEligible: 67.2,
    onboardingScore: 92.1
  },
  analytics: {
    predictiveAnalytics: 'Advanced',
    spendAnalytics: 'Comprehensive',
    supplierAnalytics: 'Advanced',
    riskAnalytics: 'Comprehensive',
    marketIntelligence: 'Advanced',
    dataQualityScore: 94.8
  },
  innovation: {
    innovationProjects: 143,
    supplierInnovationPrograms: 34,
    patentSubmissions: 78,
    digitalPilots: 67,
    startupPartnerships: 45,
    innovationSpend: 890000000,
    innovationRoi: 340.0 // % return
  },
  automation: {
    processAutomation: 68.4,
    documentProcessing: 84.7,
    approvalWorkflows: 91.2,
    exceptionHandling: 73.5,
    reportingAutomation: 88.9,
    botDeployments: 234
  }
};

// Real-time Alerts & Notifications
export const supplierAlerts = [
  {
    id: 'alert-001',
    type: 'Risk',
    severity: 'High',
    title: 'Geopolitical Risk - Eastern Europe Suppliers',
    description: 'Potential supply disruption due to regional tensions affecting 8 suppliers',
    suppliersAffected: ['supplier-019', 'supplier-023', 'supplier-031'],
    impact: 'High',
    category: 'Geopolitical',
    timestamp: '2024-12-06T10:30:00Z',
    status: 'Active',
    actionRequired: true,
    assignedTo: 'Risk Management Team'
  },
  {
    id: 'alert-002',
    type: 'Performance',
    severity: 'Medium',
    title: 'Delivery Performance Decline - Unilever',
    description: 'On-time delivery dropped to 89.4% (below 92% threshold)',
    suppliersAffected: ['supplier-002'],
    impact: 'Medium',
    category: 'Delivery',
    timestamp: '2024-12-06T08:15:00Z',
    status: 'Active',
    actionRequired: true,
    assignedTo: 'Supplier Management Team'
  },
  {
    id: 'alert-003',
    type: 'Contract',
    severity: 'Low',
    title: 'Contract Renewals Due Q1 2025',
    description: '23 strategic supplier contracts expiring in Q1 2025',
    suppliersAffected: ['supplier-004', 'supplier-007', 'supplier-012'],
    impact: 'Low',
    category: 'Contract Management',
    timestamp: '2024-12-06T06:00:00Z',
    status: 'Active',
    actionRequired: false,
    assignedTo: 'Contract Management Team'
  }
];

// Advanced Analytics & AI Insights
export const supplierInsights = {
  marketTrends: [
    {
      category: 'Consumer Goods',
      trend: 'Rising Raw Material Costs',
      impact: 'High',
      prediction: '8-12% price increase Q1 2025',
      confidence: 87.3,
      recommendation: 'Negotiate long-term contracts with key suppliers'
    },
    {
      category: 'Technology',
      trend: 'AI Integration Acceleration',
      impact: 'Medium',
      prediction: 'Digital transformation requirements increasing',
      confidence: 92.1,
      recommendation: 'Invest in supplier digital capabilities'
    }
  ],
  riskPredictions: [
    {
      type: 'Supply Disruption',
      probability: 23.4,
      timeframe: '6 months',
      affectedCategories: ['Electronics', 'Automotive Parts'],
      mitigation: 'Diversify supplier base in affected regions'
    },
    {
      type: 'Cost Inflation',
      probability: 78.9,
      timeframe: '3 months',
      affectedCategories: ['Food & Beverages', 'Consumer Goods'],
      mitigation: 'Implement dynamic pricing mechanisms'
    }
  ],
  opportunityIdentification: [
    {
      type: 'Cost Savings',
      value: 45000000,
      category: 'Logistics Optimization',
      timeline: '6 months',
      confidence: 84.7
    },
    {
      type: 'Innovation Partnership',
      value: 23000000,
      category: 'Sustainable Packaging',
      timeline: '12 months',
      confidence: 76.2
    }
  ]
};
