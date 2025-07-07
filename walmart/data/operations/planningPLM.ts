// Planning & PLM Data - Walmart Retail OS
// Real-world inspired product lifecycle management and strategic planning data
// Phase 6: Comprehensive PLM data model

import {
  Product,
  WalmartBrand,
  ProductLifecycleStage,
  SeasonalPlan,
  Season,
  AssortmentRecommendation,
  StoreCluster,
  InnovationPipeline,
  Concept,
  Prototype,
  Testing,
  Launch,
  PlanningPLMDashboard,
  PLMAlert,
  PLMDashboardKPI,
  SupplierPerformance,
  SupplierRelationship
} from '../../types/planningPLM';

// Real Walmart Product Portfolio with PLM Data
export const walmartProducts: Product[] = [
  {
    id: 'wmt-plm-001',
    sku: 'GV-BREAD-001',
    name: 'Great Value White Bread',
    brand: 'Great Value',
    category: 'Grocery',
    subcategory: 'Bakery',
    lifecycleStage: 'maturity',
    developmentTimeline: {
      conceptDate: new Date('2018-03-15'),
      developmentStart: new Date('2018-05-01'),
      testingPhase: new Date('2018-08-15'),
      launchDate: new Date('2018-10-01'),
      totalTimeToMarket: 199,
      stageGates: [
        {
          stage: 'concept',
          status: 'completed',
          completionDate: new Date('2018-04-30'),
          approvers: ['Category Manager', 'Nutrition Team'],
          requirements: ['Consumer research', 'Nutritional analysis', 'Cost modeling'],
          risks: []
        },
        {
          stage: 'development',
          status: 'completed',
          completionDate: new Date('2018-08-14'),
          approvers: ['R&D Team', 'Quality Assurance'],
          requirements: ['Recipe optimization', 'Production scaling', 'Packaging design'],
          risks: []
        }
      ]
    },
    performanceMetrics: {
      salesVolume: 2450000,
      revenue: 3675000,
      grossMargin: 28.5,
      marketShare: 18.3,
      customerSatisfaction: 4.2,
      returnRate: 0.8,
      reviewRating: 4.1,
      reviewCount: 15680,
      velocityScore: 85.2,
      competitivePosition: 78.5
    },
    supplierInfo: {
      primarySupplierId: 'SUP-BAKERY-001',
      supplierName: 'American Baking Company',
      country: 'United States',
      region: 'Midwest',
      supplierScore: 92.5,
      qualityRating: 94.2,
      deliveryPerformance: 98.7,
      costCompetitiveness: 88.3,
      innovationCapability: 82.1,
      sustainabilityScore: 89.4,
      contractDetails: {
        contractId: 'CTR-BAKERY-2024-001',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-12-31'),
        terms: ['Exclusive Great Value bread supplier', '24-hour delivery guarantee', 'Quality compliance 99.5%'],
        pricing: {
          basePrice: 0.85,
          tieredPricing: [
            { minQuantity: 10000, maxQuantity: 50000, price: 0.82 },
            { minQuantity: 50001, maxQuantity: 100000, price: 0.79 },
            { minQuantity: 100001, maxQuantity: 999999, price: 0.76 }
          ],
          currency: 'USD',
          paymentTerms: 'Net 30',
          discounts: [
            { type: 'volume', percentage: 3, conditions: ['Annual volume > 1M units'] },
            { type: 'early_payment', percentage: 1.5, conditions: ['Payment within 15 days'] }
          ]
        },
        minimumOrderQuantity: 5000,
        leadTime: 2,
        qualityStandards: ['FDA compliance', 'USDA organic certification', 'Walmart quality standards'],
        complianceRequirements: ['Food safety certification', 'Sustainability reporting', 'Diversity tracking']
      }
    },
    marketingInfo: {
      targetDemographic: ['Value-conscious families', 'Budget shoppers', 'Bulk buyers'],
      positioningStrategy: 'Quality nutrition at unbeatable value',
      keyMessages: ['Same great taste for less', 'Family-friendly nutrition', 'Trusted Great Value quality'],
      launchCampaign: {
        campaignName: 'Great Value Bakery Excellence',
        budget: 2500000,
        channels: ['In-store displays', 'Digital advertising', 'Social media', 'Walmart app'],
        timeline: {
          prelaunch: new Date('2018-09-01'),
          launch: new Date('2018-10-01'),
          sustaining: new Date('2018-11-01'),
          evaluation: new Date('2019-01-01')
        },
        expectedReach: 45000000,
        projectedROI: 4.2
      },
      digitalPresence: {
        website: true,
        socialMedia: ['Facebook', 'Instagram', 'Pinterest'],
        onlineAdvertising: true,
        influencerPartnerships: 12,
        contentMarketing: true
      },
      inStorePromotion: {
        endcapDisplay: true,
        sampling: false,
        coupons: true,
        bundleOffers: ['Bread + Peanut Butter + Jelly combo'],
        crossMerchandising: ['Sandwich fixings', 'Breakfast items']
      }
    },
    financialInfo: {
      developmentCost: 485000,
      launchInvestment: 1200000,
      manufacturingCost: 0.62,
      logisticsCost: 0.08,
      marketingSpend: 2500000,
      projectedRevenue: 3200000,
      actualRevenue: 3675000,
      roi: 145.2,
      paybackPeriod: 8,
      npv: 12500000
    },
    qualityMetrics: {
      defectRate: 0.15,
      customerComplaints: 12,
      recalls: 0,
      complianceScore: 98.5,
      testingResults: [
        {
          testType: 'Nutritional Analysis',
          testDate: new Date('2024-12-15'),
          result: 'pass',
          score: 96.8,
          details: 'All nutritional claims verified and compliant',
          tester: 'Walmart Quality Labs'
        }
      ],
      certifications: ['FDA Approved', 'Non-GMO Verified', 'Kosher Certified'],
      auditResults: [
        {
          auditType: 'Food Safety',
          auditDate: new Date('2024-11-20'),
          score: 98.2,
          findings: ['Minor documentation gaps'],
          correctiveActions: ['Update labeling procedures'],
          followUpDate: new Date('2025-02-20')
        }
      ]
    },
    sustainabilityInfo: {
      carbonFootprint: 1.2,
      recyclableContent: 85,
      packagingScore: 92.5,
      energyEfficiency: 88.3,
      waterUsage: 45.2,
      sustainabilityCertifications: ['Rainforest Alliance', 'Sustainable Packaging Coalition'],
      environmentalImpact: {
        scope1Emissions: 0.8,
        scope2Emissions: 1.1,
        scope3Emissions: 2.3,
        wasteGeneration: 0.05,
        renewableEnergyUsage: 65.8
      }
    },
    createdDate: new Date('2018-03-15'),
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'wmt-plm-002',
    sku: 'EQ-VITAMINS-001',
    name: 'Equate Daily Multivitamins',
    brand: 'Equate',
    category: 'Health & Wellness',
    subcategory: 'Vitamins & Supplements',
    lifecycleStage: 'growth',
    developmentTimeline: {
      conceptDate: new Date('2023-01-15'),
      developmentStart: new Date('2023-03-01'),
      testingPhase: new Date('2023-08-15'),
      launchDate: new Date('2023-11-01'),
      totalTimeToMarket: 290,
      stageGates: [
        {
          stage: 'concept',
          status: 'completed',
          completionDate: new Date('2023-02-28'),
          approvers: ['Health Category Manager', 'Regulatory Affairs'],
          requirements: ['Market research', 'Regulatory clearance', 'Competitive analysis'],
          risks: []
        },
        {
          stage: 'testing',
          status: 'completed',
          completionDate: new Date('2023-10-15'),
          approvers: ['Clinical Research', 'Quality Team'],
          requirements: ['Clinical testing', 'Stability testing', 'Consumer trials'],
          risks: []
        }
      ]
    },
    performanceMetrics: {
      salesVolume: 1250000,
      revenue: 18750000,
      grossMargin: 42.8,
      marketShare: 12.7,
      customerSatisfaction: 4.4,
      returnRate: 0.3,
      reviewRating: 4.3,
      reviewCount: 8940,
      velocityScore: 91.2,
      competitivePosition: 84.3
    },
    supplierInfo: {
      primarySupplierId: 'SUP-PHARMA-001',
      supplierName: 'Nature\'s Bounty Manufacturing',
      country: 'United States',
      region: 'East Coast',
      supplierScore: 95.8,
      qualityRating: 97.5,
      deliveryPerformance: 99.2,
      costCompetitiveness: 91.4,
      innovationCapability: 94.7,
      sustainabilityScore: 88.9,
      contractDetails: {
        contractId: 'CTR-PHARMA-2023-001',
        startDate: new Date('2023-01-01'),
        endDate: new Date('2025-12-31'),
        terms: ['FDA-compliant manufacturing', 'GMP certification required', 'Exclusive Equate vitamins'],
        pricing: {
          basePrice: 8.50,
          tieredPricing: [
            { minQuantity: 5000, maxQuantity: 25000, price: 8.20 },
            { minQuantity: 25001, maxQuantity: 50000, price: 7.90 },
            { minQuantity: 50001, maxQuantity: 999999, price: 7.60 }
          ],
          currency: 'USD',
          paymentTerms: 'Net 45',
          discounts: [
            { type: 'volume', percentage: 5, conditions: ['Annual volume > 500K units'] }
          ]
        },
        minimumOrderQuantity: 2000,
        leadTime: 14,
        qualityStandards: ['FDA GMP', 'NSF International', 'USP Verified'],
        complianceRequirements: ['FDA registration', 'cGMP compliance', 'Third-party testing']
      }
    },
    marketingInfo: {
      targetDemographic: ['Health-conscious adults', 'Senior citizens', 'Budget-minded wellness shoppers'],
      positioningStrategy: 'Doctor-recommended quality at everyday low prices',
      keyMessages: ['Same potency, better price', 'Trusted by pharmacists', 'Daily wellness made affordable'],
      launchCampaign: {
        campaignName: 'Equate Health Value',
        budget: 5200000,
        channels: ['Pharmacy displays', 'Health & Wellness app', 'Doctor partnerships', 'Digital health platforms'],
        timeline: {
          prelaunch: new Date('2023-10-01'),
          launch: new Date('2023-11-01'),
          sustaining: new Date('2023-12-01'),
          evaluation: new Date('2024-03-01')
        },
        expectedReach: 25000000,
        projectedROI: 3.8
      },
      digitalPresence: {
        website: true,
        socialMedia: ['Facebook', 'Instagram', 'YouTube'],
        onlineAdvertising: true,
        influencerPartnerships: 8,
        contentMarketing: true
      },
      inStorePromotion: {
        endcapDisplay: true,
        sampling: true,
        coupons: true,
        bundleOffers: ['Multivitamin + Omega-3 combo', 'Family wellness pack'],
        crossMerchandising: ['Health foods', 'Wellness devices']
      }
    },
    financialInfo: {
      developmentCost: 1250000,
      launchInvestment: 3800000,
      manufacturingCost: 4.25,
      logisticsCost: 0.85,
      marketingSpend: 5200000,
      projectedRevenue: 15000000,
      actualRevenue: 18750000,
      roi: 125.0,
      paybackPeriod: 12,
      npv: 35000000
    },
    qualityMetrics: {
      defectRate: 0.08,
      customerComplaints: 5,
      recalls: 0,
      complianceScore: 99.2,
      testingResults: [
        {
          testType: 'Potency Testing',
          testDate: new Date('2024-12-10'),
          result: 'pass',
          score: 98.5,
          details: 'All vitamins meet labeled potency requirements',
          tester: 'NSF International'
        }
      ],
      certifications: ['FDA Registered', 'GMP Certified', 'NSF Verified', 'USP Grade'],
      auditResults: [
        {
          auditType: 'GMP Compliance',
          auditDate: new Date('2024-10-15'),
          score: 99.1,
          findings: ['Exceptional compliance standards'],
          correctiveActions: [],
          followUpDate: new Date('2025-10-15')
        }
      ]
    },
    sustainabilityInfo: {
      carbonFootprint: 2.1,
      recyclableContent: 95,
      packagingScore: 94.8,
      energyEfficiency: 92.1,
      waterUsage: 28.5,
      sustainabilityCertifications: ['Sustainable Packaging Coalition', 'Carbon Neutral Certified'],
      environmentalImpact: {
        scope1Emissions: 1.2,
        scope2Emissions: 1.8,
        scope3Emissions: 3.1,
        wasteGeneration: 0.03,
        renewableEnergyUsage: 78.5
      }
    },
    createdDate: new Date('2023-01-15'),
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'wmt-plm-003',
    sku: 'MS-FURNITURE-001',
    name: 'Mainstays 5-Shelf Bookcase',
    brand: 'Mainstays',
    category: 'Home & Garden',
    subcategory: 'Furniture',
    lifecycleStage: 'launch',
    developmentTimeline: {
      conceptDate: new Date('2024-03-15'),
      developmentStart: new Date('2024-05-01'),
      testingPhase: new Date('2024-09-15'),
      launchDate: new Date('2024-12-01'),
      totalTimeToMarket: 261,
      stageGates: [
        {
          stage: 'development',
          status: 'completed',
          completionDate: new Date('2024-09-14'),
          approvers: ['Furniture Category Manager', 'Engineering Team'],
          requirements: ['Structural testing', 'Assembly optimization', 'Cost validation'],
          risks: []
        },
        {
          stage: 'launch',
          status: 'in_progress',
          approvers: ['Merchandising', 'Supply Chain'],
          requirements: ['Production ramp-up', 'Distribution setup', 'Marketing launch'],
          risks: [
            {
              id: 'RISK-001',
              type: 'supply_chain',
              description: 'Potential wood supply shortage due to seasonal demand',
              probability: 0.3,
              impact: 0.6,
              severity: 'medium',
              mitigation: ['Alternative wood sources identified', 'Inventory buffer established'],
              owner: 'Supply Chain Manager',
              status: 'mitigating'
            }
          ]
        }
      ]
    },
    performanceMetrics: {
      salesVolume: 45000,
      revenue: 2250000,
      grossMargin: 35.2,
      marketShare: 8.9,
      customerSatisfaction: 4.1,
      returnRate: 2.3,
      reviewRating: 4.0,
      reviewCount: 1250,
      velocityScore: 76.8,
      competitivePosition: 82.1
    },
    supplierInfo: {
      primarySupplierId: 'SUP-FURNITURE-001',
      supplierName: 'Global Furniture Manufacturing',
      country: 'Vietnam',
      region: 'Southeast Asia',
      supplierScore: 88.5,
      qualityRating: 91.2,
      deliveryPerformance: 94.8,
      costCompetitiveness: 95.3,
      innovationCapability: 79.1,
      sustainabilityScore: 82.4,
      contractDetails: {
        contractId: 'CTR-FURNITURE-2024-001',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-12-31'),
        terms: ['Sustainable wood sourcing', 'FSC certification required', 'Quality standards compliance'],
        pricing: {
          basePrice: 32.50,
          tieredPricing: [
            { minQuantity: 1000, maxQuantity: 5000, price: 31.20 },
            { minQuantity: 5001, maxQuantity: 10000, price: 29.90 },
            { minQuantity: 10001, maxQuantity: 999999, price: 28.60 }
          ],
          currency: 'USD',
          paymentTerms: 'Net 30',
          discounts: [
            { type: 'volume', percentage: 4, conditions: ['Annual volume > 25K units'] }
          ]
        },
        minimumOrderQuantity: 500,
        leadTime: 45,
        qualityStandards: ['CARB compliance', 'FSC certification', 'ANSI safety standards'],
        complianceRequirements: ['Social compliance audit', 'Environmental impact assessment']
      }
    },
    marketingInfo: {
      targetDemographic: ['Young professionals', 'College students', 'Budget-conscious homeowners'],
      positioningStrategy: 'Stylish, functional furniture that fits any budget and space',
      keyMessages: ['Easy assembly guaranteed', 'Quality that lasts', 'Perfect for any room'],
      launchCampaign: {
        campaignName: 'Mainstays Home Solutions',
        budget: 1800000,
        channels: ['Home & Garden displays', 'Social media', 'Influencer partnerships', 'Assembly videos'],
        timeline: {
          prelaunch: new Date('2024-11-01'),
          launch: new Date('2024-12-01'),
          sustaining: new Date('2025-01-01'),
          evaluation: new Date('2025-04-01')
        },
        expectedReach: 18000000,
        projectedROI: 2.8
      },
      digitalPresence: {
        website: true,
        socialMedia: ['Instagram', 'Pinterest', 'TikTok', 'YouTube'],
        onlineAdvertising: true,
        influencerPartnerships: 25,
        contentMarketing: true
      },
      inStorePromotion: {
        endcapDisplay: true,
        sampling: false,
        coupons: false,
        bundleOffers: ['Bookcase + Storage bins combo', 'Home office furniture set'],
        crossMerchandising: ['Books', 'Storage solutions', 'Desk accessories']
      }
    },
    financialInfo: {
      developmentCost: 680000,
      launchInvestment: 2200000,
      manufacturingCost: 28.60,
      logisticsCost: 4.20,
      marketingSpend: 1800000,
      projectedRevenue: 2000000,
      actualRevenue: 2250000,
      roi: 112.5,
      paybackPeriod: 14,
      npv: 8500000
    },
    qualityMetrics: {
      defectRate: 1.2,
      customerComplaints: 18,
      recalls: 0,
      complianceScore: 96.8,
      testingResults: [
        {
          testType: 'Structural Load Testing',
          testDate: new Date('2024-09-01'),
          result: 'pass',
          score: 95.2,
          details: 'Exceeds ANSI safety requirements for furniture stability',
          tester: 'Walmart Product Testing Lab'
        }
      ],
      certifications: ['CARB Phase 2 Compliant', 'FSC Certified', 'ANSI Approved'],
      auditResults: [
        {
          auditType: 'Product Safety',
          auditDate: new Date('2024-08-15'),
          score: 96.5,
          findings: ['Minor labeling updates needed'],
          correctiveActions: ['Update assembly instructions clarity'],
          followUpDate: new Date('2025-02-15')
        }
      ]
    },
    sustainabilityInfo: {
      carbonFootprint: 15.8,
      recyclableContent: 78,
      packagingScore: 89.2,
      energyEfficiency: 85.6,
      waterUsage: 125.3,
      sustainabilityCertifications: ['FSC Certified', 'Sustainable Furnishings Council'],
      environmentalImpact: {
        scope1Emissions: 8.2,
        scope2Emissions: 12.5,
        scope3Emissions: 25.8,
        wasteGeneration: 2.1,
        renewableEnergyUsage: 45.8
      }
    },
    createdDate: new Date('2024-03-15'),
    lastUpdated: new Date('2025-01-15')
  }
];

// Seasonal Planning Data
export const seasonalPlans: SeasonalPlan[] = [
  {
    id: 'SP-2025-SPRING',
    name: 'Spring 2025 Planning Initiative',
    season: 'spring',
    year: 2025,
    categories: ['Home & Garden', 'Apparel', 'Outdoor Living', 'Spring Cleaning'],
    timeline: {
      planningStart: new Date('2024-10-01'),
      conceptDeadline: new Date('2024-12-15'),
      developmentDeadline: new Date('2025-01-31'),
      launchDate: new Date('2025-03-01'),
      seasonEnd: new Date('2025-05-31'),
      reviewDate: new Date('2025-06-15'),
      milestones: [
        {
          name: 'Category Planning Complete',
          date: new Date('2024-11-15'),
          status: 'completed',
          dependencies: ['Market research', 'Trend analysis'],
          owner: 'Category Manager'
        },
        {
          name: 'Product Development Start',
          date: new Date('2024-12-01'),
          status: 'completed',
          dependencies: ['Concept approval', 'Budget allocation'],
          owner: 'Product Development'
        },
        {
          name: 'Launch Readiness Review',
          date: new Date('2025-02-15'),
          status: 'pending',
          dependencies: ['Inventory buildup', 'Marketing campaigns'],
          owner: 'Launch Committee'
        }
      ]
    },
    budget: {
      totalBudget: 125000000,
      developmentBudget: 25000000,
      marketingBudget: 45000000,
      inventoryBudget: 50000000,
      contingencyBudget: 5000000,
      allocated: 118500000,
      remaining: 6500000
    },
    teamAssignments: [
      {
        teamId: 'TEAM-HOME-GARDEN',
        teamName: 'Home & Garden Category Team',
        role: 'Category Leadership',
        responsibility: ['Product assortment planning', 'Seasonal merchandising', 'Vendor coordination'],
        members: [
          {
            employeeId: 'EMP-001',
            name: 'Sarah Johnson',
            role: 'Category Manager',
            department: 'Merchandising',
            allocation: 100,
            skills: ['Category Management', 'Vendor Relations', 'Data Analysis'],
            experience: 8
          },
          {
            employeeId: 'EMP-002',
            name: 'Mike Chen',
            role: 'Senior Buyer',
            department: 'Buying',
            allocation: 75,
            skills: ['Sourcing', 'Negotiation', 'Quality Assurance'],
            experience: 6
          }
        ],
        budget: 35000000,
        timeline: [new Date('2024-10-01'), new Date('2025-05-31')]
      }
    ],
    objectives: [
      {
        id: 'OBJ-001',
        description: 'Achieve 15% growth in spring seasonal revenue',
        category: 'Financial',
        targetMetric: 'Revenue Growth',
        targetValue: 15.0,
        currentValue: 8.2,
        progress: 54.7,
        priority: 'high',
        owner: 'Category Manager'
      },
      {
        id: 'OBJ-002',
        description: 'Launch 50 new seasonal products',
        category: 'Product',
        targetMetric: 'New Product Launches',
        targetValue: 50,
        currentValue: 32,
        progress: 64.0,
        priority: 'high',
        owner: 'Product Development'
      }
    ],
    dependencies: [
      {
        id: 'DEP-001',
        type: 'external',
        description: 'Weather forecast accuracy for spring demand planning',
        dependentOn: 'Weather Service Data',
        impact: 'medium',
        status: 'resolved',
        resolution: 'Long-range forecast obtained through weather partnership'
      }
    ],
    status: 'executing',
    lastUpdated: new Date('2025-01-15')
  }
];

// Store Clustering and Localization Data
export const storeClusters: StoreCluster[] = [
  {
    clusterId: 'CLUSTER-URBAN-NORTHEAST',
    clusterName: 'Urban Northeast Markets',
    description: 'High-density urban areas in northeastern United States with educated, higher-income demographics',
    storeCount: 245,
    stores: [
      {
        storeId: 'WMT-NYC-001',
        storeName: 'Walmart Supercenter - Brooklyn',
        city: 'Brooklyn',
        state: 'NY',
        zipCode: '11201',
        size: 'supercenter',
        format: 'supercenter',
        demographics: {
          averageAge: 34.2,
          medianIncome: 68500,
          educationLevel: 'College Graduate',
          familySize: 2.8,
          ethnicComposition: {
            white: 42.5,
            hispanic: 28.3,
            black: 18.7,
            asian: 8.9,
            other: 1.6
          },
          urbanicity: 'urban',
          trafficPattern: {
            peakDays: ['Saturday', 'Sunday'],
            peakHours: [10, 11, 14, 15, 19, 20],
            averageDailyTraffic: 8500,
            seasonalMultiplier: [
              { season: 'spring', multiplier: 1.1 },
              { season: 'summer', multiplier: 0.9 },
              { season: 'fall', multiplier: 1.2 },
              { season: 'winter', multiplier: 1.3 }
            ]
          },
          seasonalVariation: 15.8,
          competitionLevel: 'high'
        }
      }
    ],
    demographics: {
      averageAge: 35.8,
      medianIncome: 72000,
      educationLevel: 'College Graduate',
      familySize: 2.9,
      ethnicComposition: {
        white: 45.2,
        hispanic: 25.8,
        black: 17.3,
        asian: 9.8,
        other: 1.9
      },
      urbanicity: 'urban'
    },
    preferences: {
      priceConsciousness: 0.6,
      brandLoyalty: 0.7,
      organicPreference: 0.8,
      privateLabel: 0.5,
      categoryPreferences: [
        {
          category: 'Organic Foods',
          preference: 0.85,
          frequency: 'weekly',
          seasonality: 0.1
        },
        {
          category: 'Home Office',
          preference: 0.78,
          frequency: 'monthly',
          seasonality: 0.15
        },
        {
          category: 'Health & Wellness',
          preference: 0.82,
          frequency: 'weekly',
          seasonality: 0.05
        }
      ],
      shoppingBehavior: {
        basketSize: 85.50,
        frequency: 2.8,
        digitalEngagement: 0.75,
        loyaltyProgram: 0.68,
        mobileShopping: 0.82
      }
    },
    performance: {
      averageRevenue: 125000000,
      averageMargin: 24.8,
      customerSatisfaction: 4.3,
      marketShare: 22.5,
      growthRate: 8.2,
      efficiency: {
        salesPerSquareFoot: 485,
        inventoryTurnover: 11.2,
        laborProductivity: 94.5,
        energyEfficiency: 87.8,
        wasteReduction: 82.1
      }
    },
    assortmentStrategy: 'Premium value with organic and wellness focus'
  }
];

// Assortment Recommendations
export const assortmentRecommendations: AssortmentRecommendation[] = [
  {
    id: 'ASSORT-REC-001',
    storeCluster: 'CLUSTER-URBAN-NORTHEAST',
    clusterDescription: 'Urban Northeast Markets',
    category: 'Health & Wellness',
    recommendedProducts: [
      {
        productId: 'wmt-plm-002',
        productName: 'Equate Daily Multivitamins',
        brand: 'Equate',
        priority: 'core',
        predictedSales: 2500,
        predictedMargin: 42.8,
        spaceAllocation: 15.5,
        pricingRecommendation: 14.97,
        inventory: {
          initialStock: 500,
          reorderPoint: 150,
          maxStock: 800,
          turnoverRate: 8.5,
          seasonalAdjustment: 1.1
        }
      }
    ],
    predictedPerformance: {
      projectedRevenue: 875000,
      projectedMargin: 38.5,
      projectedTurnover: 9.2,
      marketShare: 18.7,
      customerSatisfaction: 4.2,
      riskScore: 0.15
    },
    localFactors: [
      {
        type: 'demographic',
        name: 'Health-conscious population',
        value: 0.82,
        impact: 0.65,
        confidence: 0.88,
        description: 'High education and income correlate with wellness spending'
      },
      {
        type: 'competitive',
        name: 'CVS and Walgreens proximity',
        value: 'High competition',
        impact: -0.25,
        confidence: 0.92,
        description: 'Strong pharmacy competition requires competitive pricing'
      }
    ],
    competitiveAnalysis: {
      primaryCompetitors: ['CVS Pharmacy', 'Walgreens', 'Rite Aid'],
      marketPosition: 'Value leader with quality',
      pricingComparison: [
        {
          competitor: 'CVS Pharmacy',
          productCategory: 'Daily Multivitamins',
          ourPrice: 14.97,
          competitorPrice: 18.99,
          priceDifference: -4.02,
          recommendation: 'Maintain price advantage'
        }
      ],
      assortmentGaps: ['Specialized vitamins for seniors', 'Sport nutrition supplements'],
      opportunities: ['Expand organic supplement line', 'Partner with local wellness brands'],
      threats: ['Amazon pharmacy expansion', 'Direct-to-consumer vitamin brands']
    },
    confidence: 0.87,
    lastUpdated: new Date('2025-01-15')
  }
];

// Innovation Pipeline Data
export const innovationPipeline: InnovationPipeline = {
  concepts: [
    {
      id: 'CONCEPT-001',
      name: 'Great Value Plant-Based Protein Bars',
      description: 'Affordable plant-based protein bars targeting health-conscious budget shoppers',
      category: 'Health & Wellness',
      innovationType: 'incremental',
      submissionDate: new Date('2024-11-15'),
      submitter: 'Wellness Category Team',
      status: 'approved',
      businessCase: {
        investmentRequired: 2500000,
        projectedRevenue: 15000000,
        projectedMargin: 35.5,
        paybackPeriod: 18,
        npv: 8500000,
        irr: 28.5,
        risks: ['Plant protein supply volatility', 'Taste acceptance challenges'],
        assumptions: ['Growing plant-based market trend', 'Price sensitivity maintains']
      },
      technicalFeasibility: {
        complexity: 'medium',
        requiredCapabilities: ['Plant protein sourcing', 'Flavor optimization', 'Texture engineering'],
        technicalRisks: ['Protein binding challenges', 'Shelf stability requirements'],
        resourceRequirements: [
          {
            type: 'personnel',
            description: 'Food scientists and flavor experts',
            quantity: 4,
            cost: 480000,
            availability: 'available'
          },
          {
            type: 'equipment',
            description: 'Protein bar production line modifications',
            quantity: 1,
            cost: 750000,
            availability: 'limited'
          }
        ],
        timeline: 8,
        feasibilityScore: 0.78
      },
      marketPotential: {
        targetMarket: 'Health-conscious consumers seeking affordable protein options',
        marketSize: 125000000,
        expectedMarketShare: 12.0,
        customerNeed: 'Affordable plant-based protein without compromising taste',
        competitiveLandscape: ['KIND', 'RXBAR', 'Clif Bar', 'Quest'],
        differentiationFactors: ['Lowest price point', 'Great Value brand trust', 'Wide distribution'],
        marketReadiness: 0.85
      }
    }
  ],
  prototypes: [
    {
      id: 'PROTO-001',
      conceptId: 'CONCEPT-001',
      version: 'v2.1',
      description: 'Refined plant-based protein bar with improved taste and texture',
      developmentCost: 125000,
      timeline: {
        startDate: new Date('2024-12-01'),
        targetCompletion: new Date('2025-02-15'),
        milestones: [
          {
            name: 'Initial formulation',
            targetDate: new Date('2024-12-15'),
            actualDate: new Date('2024-12-14'),
            status: 'completed',
            deliverables: ['Base recipe', 'Nutritional analysis']
          },
          {
            name: 'Taste optimization',
            targetDate: new Date('2025-01-15'),
            status: 'pending',
            deliverables: ['Flavor profiles', 'Consumer testing']
          }
        ]
      },
      specifications: [
        {
          category: 'Nutrition',
          parameter: 'Protein content',
          targetValue: '20g',
          actualValue: '19.5g',
          tolerance: '±0.5g',
          critical: true
        },
        {
          category: 'Sensory',
          parameter: 'Taste rating',
          targetValue: 4.0,
          actualValue: 3.8,
          tolerance: '±0.2',
          critical: true
        }
      ],
      testResults: [
        {
          testType: 'Nutritional Analysis',
          testDate: new Date('2024-12-20'),
          result: 'pass',
          score: 95.2,
          details: 'Protein content and macro balance meet targets',
          recommendations: ['Minor sodium reduction possible']
        }
      ],
      stakeholderFeedback: [
        {
          stakeholder: 'Category Manager',
          role: 'Business Lead',
          feedbackDate: new Date('2024-12-22'),
          rating: 4,
          comments: 'Strong nutritional profile, competitive cost structure',
          recommendations: ['Focus on taste improvement for v3.0'],
          approved: true
        }
      ],
      status: 'testing'
    }
  ],
  testing: [
    {
      id: 'TEST-001',
      prototypeId: 'PROTO-001',
      testType: 'consumer',
      description: 'Consumer taste testing and purchase intent study',
      methodology: 'Blind taste test with 200 target consumers',
      sampleSize: 200,
      timeline: {
        planningStart: new Date('2025-01-01'),
        executionStart: new Date('2025-01-15'),
        executionEnd: new Date('2025-01-25'),
        analysisComplete: new Date('2025-02-01'),
        reportComplete: new Date('2025-02-05')
      },
      results: {
        overallScore: 3.8,
        acceptanceRate: 72.5,
        purchaseIntent: 68.0,
        priceAcceptance: 85.5,
        keyFindings: [
          {
            category: 'Taste',
            finding: 'Chocolate flavor most preferred',
            significance: 'high',
            impact: 'Strong preference for chocolate variant',
            recommendation: 'Lead with chocolate flavor for launch'
          }
        ],
        demographics: {
          ageGroups: [
            { range: '18-34', percentage: 45, score: 4.1 },
            { range: '35-54', percentage: 35, score: 3.6 },
            { range: '55+', percentage: 20, score: 3.4 }
          ],
          incomeGroups: [
            { range: '$30K-$50K', percentage: 40, score: 3.9 },
            { range: '$50K-$75K', percentage: 35, score: 3.8 },
            { range: '$75K+', percentage: 25, score: 3.6 }
          ],
          genderSplit: { male: 48, female: 51, other: 1 },
          geography: [
            { region: 'Northeast', percentage: 25, score: 3.9 },
            { region: 'Southeast', percentage: 30, score: 3.8 },
            { region: 'Midwest', percentage: 25, score: 3.7 },
            { region: 'West', percentage: 20, score: 3.9 }
          ]
        },
        feedback: [
          {
            respondentId: 'RESP-001',
            rating: 4,
            positives: ['Good protein content', 'Reasonable price'],
            negatives: ['Slightly chalky texture'],
            suggestions: ['Improve texture smoothness'],
            purchaseIntent: 4,
            pricePoint: 2.99
          }
        ]
      },
      conclusions: ['Product shows strong market potential', 'Texture improvements needed for mass market appeal'],
      recommendations: ['Proceed to v3.0 with texture optimization', 'Focus initial launch on chocolate flavor']
    }
  ],
  launches: [
    {
      id: 'LAUNCH-001',
      productId: 'wmt-plm-002',
      launchType: 'full',
      launchDate: new Date('2023-11-01'),
      markets: ['National US'],
      stores: 4700,
      launchPlan: {
        prelaunchActivities: [
          {
            name: 'Inventory buildup',
            description: 'Build initial inventory across distribution centers',
            owner: 'Supply Chain',
            startDate: new Date('2023-09-01'),
            endDate: new Date('2023-10-15'),
            budget: 5000000,
            status: 'completed',
            dependencies: ['Production capacity confirmed']
          }
        ],
        launchActivities: [
          {
            name: 'National advertising campaign',
            description: 'Multi-channel advertising campaign launch',
            owner: 'Marketing',
            startDate: new Date('2023-11-01'),
            endDate: new Date('2023-12-31'),
            budget: 8000000,
            status: 'completed',
            dependencies: ['Creative assets approved']
          }
        ],
        postlaunchActivities: [
          {
            name: 'Performance review',
            description: 'Comprehensive launch performance analysis',
            owner: 'Category Manager',
            startDate: new Date('2024-02-01'),
            endDate: new Date('2024-02-15'),
            budget: 50000,
            status: 'completed',
            dependencies: ['3 months sales data']
          }
        ],
        budget: {
          totalBudget: 15000000,
          marketing: 8000000,
          inventory: 5000000,
          operations: 1500000,
          contingency: 500000,
          actualSpend: 14200000
        },
        timeline: {
          announcementDate: new Date('2023-10-15'),
          distributionStart: new Date('2023-10-25'),
          marketingStart: new Date('2023-11-01'),
          salesStart: new Date('2023-11-01'),
          fullAvailability: new Date('2023-11-15'),
          firstReview: new Date('2024-02-01')
        },
        successMetrics: [
          {
            metric: 'First year revenue',
            target: 15000000,
            actual: 18750000,
            period: '12 months',
            status: 'exceeded'
          },
          {
            metric: 'Market share',
            target: 10.0,
            actual: 12.7,
            period: '12 months',
            status: 'exceeded'
          }
        ]
      },
      performance: {
        salesVolume: 1250000,
        revenue: 18750000,
        marketShare: 12.7,
        customerSatisfaction: 4.4,
        distributionLevel: 98.5,
        marketingReach: 25000000,
        successRate: 1.25,
        roi: 132.0
      },
      postLaunchActions: [
        {
          action: 'Expand flavor variety',
          reason: 'Strong consumer demand for additional flavors',
          timeline: 'Q2 2024',
          owner: 'Product Development',
          budget: 500000,
          expectedOutcome: 'Increase market share to 15%',
          status: 'completed'
        }
      ]
    }
  ],
  performance: {
    totalConcepts: 45,
    conceptsApproved: 28,
    prototypesSuccessful: 22,
    testingPassRate: 78.6,
    launchSuccessRate: 65.0,
    averageTimeToMarket: 12.5,
    totalInvestment: 85000000,
    totalRevenue: 245000000,
    pipelineROI: 288.2
  }
};

// Supplier Performance Data
export const supplierPerformance: SupplierPerformance[] = [
  {
    supplierId: 'SUP-BAKERY-001',
    supplierName: 'American Baking Company',
    overallScore: 92.5,
    qualityScore: 94.2,
    deliveryScore: 98.7,
    costScore: 88.3,
    innovationScore: 82.1,
    sustainabilityScore: 89.4,
    trend: 'improving',
    riskLevel: 'low'
  },
  {
    supplierId: 'SUP-PHARMA-001',
    supplierName: 'Nature\'s Bounty Manufacturing',
    overallScore: 95.8,
    qualityScore: 97.5,
    deliveryScore: 99.2,
    costScore: 91.4,
    innovationScore: 94.7,
    sustainabilityScore: 88.9,
    trend: 'stable',
    riskLevel: 'low'
  },
  {
    supplierId: 'SUP-FURNITURE-001',
    supplierName: 'Global Furniture Manufacturing',
    overallScore: 88.5,
    qualityScore: 91.2,
    deliveryScore: 94.8,
    costScore: 95.3,
    innovationScore: 79.1,
    sustainabilityScore: 82.4,
    trend: 'stable',
    riskLevel: 'medium'
  }
];

// PLM Dashboard KPIs
export const plmDashboardKPIs: PLMDashboardKPI[] = [
  {
    id: 'KPI-TIME-TO-MARKET',
    name: 'Average Time to Market',
    category: 'Development Efficiency',
    value: 12.5,
    target: 12.0,
    previous: 13.2,
    unit: 'months',
    trend: 'down',
    status: 'good',
    description: 'Average time from concept to launch for new products',
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'KPI-LAUNCH-SUCCESS',
    name: 'Launch Success Rate',
    category: 'Product Performance',
    value: 65.0,
    target: 70.0,
    previous: 62.8,
    unit: '%',
    trend: 'up',
    status: 'warning',
    description: 'Percentage of launches meeting first-year targets',
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'KPI-INNOVATION-ROI',
    name: 'Innovation Pipeline ROI',
    category: 'Financial Performance',
    value: 288.2,
    target: 250.0,
    previous: 245.8,
    unit: '%',
    trend: 'up',
    status: 'excellent',
    description: 'Return on investment for innovation pipeline',
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'KPI-SUPPLIER-SCORE',
    name: 'Average Supplier Score',
    category: 'Supply Chain',
    value: 92.3,
    target: 90.0,
    previous: 91.1,
    unit: 'points',
    trend: 'up',
    status: 'excellent',
    description: 'Weighted average supplier performance score',
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'KPI-PRIVATE-LABEL-SHARE',
    name: 'Private Label Revenue Share',
    category: 'Portfolio Management',
    value: 28.5,
    target: 30.0,
    previous: 27.8,
    unit: '%',
    trend: 'up',
    status: 'good',
    description: 'Private label revenue as percentage of total revenue',
    lastUpdated: new Date('2025-01-15')
  },
  {
    id: 'KPI-SUSTAINABILITY-SCORE',
    name: 'Portfolio Sustainability Score',
    category: 'Sustainability',
    value: 86.8,
    target: 85.0,
    previous: 84.2,
    unit: 'points',
    trend: 'up',
    status: 'excellent',
    description: 'Weighted sustainability score across product portfolio',
    lastUpdated: new Date('2025-01-15')
  }
];

// PLM Alerts
export const plmAlerts: PLMAlert[] = [
  {
    id: 'ALERT-PLM-001',
    type: 'deadline',
    priority: 'high',
    title: 'Spring 2025 Launch Readiness Review Due',
    description: 'Critical milestone for Spring seasonal planning approaching deadline',
    category: 'Seasonal Planning',
    source: 'Planning System',
    targetDate: new Date('2025-02-15'),
    impact: 'Potential delay in spring product launches affecting seasonal revenue',
    recommendations: ['Expedite inventory buildup', 'Confirm marketing campaign readiness', 'Review supplier delivery schedules'],
    assignee: 'Launch Committee',
    status: 'new',
    createdDate: new Date('2025-01-10'),
    updatedDate: new Date('2025-01-15')
  },
  {
    id: 'ALERT-PLM-002',
    type: 'performance',
    priority: 'medium',
    title: 'Launch Success Rate Below Target',
    description: 'Current launch success rate of 65% is below 70% target',
    category: 'Product Performance',
    source: 'Performance Analytics',
    impact: 'Reduced ROI on product development investments',
    recommendations: ['Enhanced market research for new concepts', 'Improved consumer testing protocols', 'Stronger launch support programs'],
    assignee: 'Product Development Director',
    status: 'acknowledged',
    createdDate: new Date('2025-01-05'),
    updatedDate: new Date('2025-01-12')
  },
  {
    id: 'ALERT-PLM-003',
    type: 'opportunity',
    priority: 'medium',
    title: 'Plant-Based Category Growth Opportunity',
    description: 'Market analysis shows 35% growth in plant-based products category',
    category: 'Market Intelligence',
    source: 'Market Research',
    impact: 'Potential for significant revenue growth in emerging category',
    recommendations: ['Accelerate plant-based product development', 'Evaluate acquisition opportunities', 'Expand Great Value plant-based line'],
    assignee: 'Category Strategy Team',
    status: 'in_progress',
    createdDate: new Date('2024-12-20'),
    updatedDate: new Date('2025-01-08')
  },
  {
    id: 'ALERT-PLM-004',
    type: 'risk',
    priority: 'medium',
    title: 'Furniture Supply Chain Risk',
    description: 'Potential wood supply shortage affecting furniture category',
    category: 'Supply Chain',
    source: 'Supplier Management',
    impact: 'Possible inventory shortages and increased costs for furniture products',
    recommendations: ['Identify alternative suppliers', 'Increase inventory buffer', 'Explore material substitutions'],
    assignee: 'Supply Chain Manager',
    status: 'in_progress',
    createdDate: new Date('2025-01-03'),
    updatedDate: new Date('2025-01-14')
  },
  {
    id: 'ALERT-PLM-005',
    type: 'quality',
    priority: 'low',
    title: 'Supplier Audit Follow-up Required',
    description: 'Minor compliance updates needed for American Baking Company',
    category: 'Quality Management',
    source: 'Quality Assurance',
    targetDate: new Date('2025-02-20'),
    impact: 'Minor compliance gap that needs attention',
    recommendations: ['Schedule follow-up audit', 'Review labeling procedures', 'Update documentation'],
    assignee: 'Quality Manager',
    status: 'acknowledged',
    createdDate: new Date('2024-11-25'),
    updatedDate: new Date('2025-01-10')
  }
];

// Main Dashboard Data Export
export const planningPLMDashboardData: PlanningPLMDashboard = {
  id: 'DASHBOARD-PLM-MAIN',
  lastUpdated: new Date('2025-01-15T10:30:00Z'),
  user: 'Walmart PLM System',
  seasonalPlanning: {
    activePlans: seasonalPlans,
    upcomingMilestones: seasonalPlans[0]?.timeline.milestones.filter(m => m.status === 'pending') || [],
    budgetUtilization: 94.8,
    teamUtilization: 87.2,
    planningEfficiency: 91.5
  },
  productLifecycle: {
    activeProducts: walmartProducts,
    stageDistribution: [
      { stage: 'concept', count: 12, percentage: 8.5, revenue: 0, trend: 'increasing' },
      { stage: 'development', count: 18, percentage: 12.8, revenue: 0, trend: 'stable' },
      { stage: 'testing', count: 8, percentage: 5.7, revenue: 0, trend: 'stable' },
      { stage: 'launch', count: 15, percentage: 10.6, revenue: 125000000, trend: 'increasing' },
      { stage: 'growth', count: 25, percentage: 17.7, revenue: 485000000, trend: 'increasing' },
      { stage: 'maturity', count: 58, percentage: 41.1, revenue: 1250000000, trend: 'stable' },
      { stage: 'decline', count: 5, percentage: 3.5, revenue: 85000000, trend: 'decreasing' }
    ],
    riskProducts: walmartProducts.filter(p => p.performanceMetrics.returnRate > 2.0),
    performanceMetrics: {
      averageTimeToMarket: 12.5,
      launchSuccessRate: 65.0,
      portfolioROI: 145.8,
      innovation: 28.5
    }
  },
  assortmentBuilding: {
    recommendations: assortmentRecommendations,
    clusters: storeClusters,
    performance: {
      totalRevenue: 2450000000,
      averageMargin: 32.8,
      assortmentEfficiency: 88.5,
      localizationScore: 85.2,
      customerSatisfaction: 4.2
    },
    opportunities: [
      {
        type: 'new_product',
        description: 'Plant-based protein expansion in urban markets',
        impact: 15000000,
        effort: 5,
        priority: 85,
        timeline: '6 months'
      },
      {
        type: 'localization',
        description: 'Regional flavor preferences optimization',
        impact: 8500000,
        effort: 3,
        priority: 78,
        timeline: '3 months'
      }
    ]
  },
  localization: {
    clusters: storeClusters,
    customizations: [
      {
        clusterId: 'CLUSTER-URBAN-NORTHEAST',
        category: 'Health & Wellness',
        customization: 'Enhanced organic and natural product selection',
        impact: 12.5,
        adoptionRate: 0.85,
        performance: 108.2
      }
    ],
    performance: {
      customizationRate: 68.5,
      performanceImprovement: 12.8,
      customerSatisfaction: 4.3,
      operationalComplexity: 2.8
    },
    insights: [
      {
        type: 'demographic',
        description: 'Higher education correlates with organic preference',
        clusters: ['CLUSTER-URBAN-NORTHEAST'],
        recommendation: 'Expand organic private label offerings in educated markets',
        priority: 85
      }
    ]
  },
  supplierManagement: {
    suppliers: supplierPerformance,
    relationships: [
      {
        supplierId: 'SUP-BAKERY-001',
        relationshipType: 'strategic',
        duration: 6,
        products: 45,
        revenue: 125000000,
        innovations: 8,
        riskFactors: ['Commodity price volatility'],
        opportunities: ['Expand organic line', 'Automation partnership']
      }
    ],
    contracts: [
      {
        contractId: 'CTR-BAKERY-2024-001',
        supplier: 'American Baking Company',
        value: 125000000,
        startDate: new Date('2024-01-01'),
        endDate: new Date('2026-12-31'),
        status: 'active',
        performance: 92.5,
        issues: []
      }
    ],
    opportunities: [
      {
        type: 'cost_reduction',
        supplier: 'Global Furniture Manufacturing',
        description: 'Volume consolidation opportunity for 15% cost reduction',
        potential: 2500000,
        effort: 4,
        timeline: '4 months',
        priority: 82
      }
    ]
  },
  innovationPipeline: {
    pipeline: innovationPipeline,
    stages: [
      {
        stage: 'Concept',
        count: 45,
        value: 125000000,
        successRate: 62.2,
        averageTime: 2.5,
        trend: 'increasing'
      },
      {
        stage: 'Development',
        count: 28,
        value: 185000000,
        successRate: 78.6,
        averageTime: 8.5,
        trend: 'stable'
      },
      {
        stage: 'Testing',
        count: 22,
        value: 145000000,
        successRate: 81.8,
        averageTime: 3.5,
        trend: 'increasing'
      },
      {
        stage: 'Launch',
        count: 18,
        value: 245000000,
        successRate: 65.0,
        averageTime: 2.0,
        trend: 'stable'
      }
    ],
    performance: {
      totalInvestment: 85000000,
      expectedReturns: 245000000,
      roi: 288.2,
      timeToMarket: 12.5,
      successRate: 65.0,
      portfolioValue: 485000000
    },
    trends: [
      {
        category: 'Health & Wellness',
        direction: 'increasing',
        velocity: 35.8,
        impact: 'High consumer demand for natural and organic products',
        recommendation: 'Accelerate health-focused product development'
      },
      {
        category: 'Sustainability',
        direction: 'increasing',
        velocity: 28.5,
        impact: 'Growing regulatory and consumer pressure for sustainable products',
        recommendation: 'Integrate sustainability into all product development'
      }
    ]
  },
  alerts: plmAlerts,
  kpis: plmDashboardKPIs
};
