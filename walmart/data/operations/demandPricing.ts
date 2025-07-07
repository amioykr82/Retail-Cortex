// Walmart Demand & Pricing Data - Phase 5
// Real-world inspired demand forecasting and pricing intelligence data

import {
  DemandForecast,
  PricingStrategy,
  PromotionalCampaign,
  MarketIntelligence,
  CustomerSegment,
  SeasonalPattern,
  EconomicIndicator,
  WeatherImpact,
  DemandPricingKPI,
  CompetitorPrice,
  ExternalFactor,
  ForecastDataPoint,
  DashboardAlert
} from '../../types/demandPricing';

// Real Walmart Product Categories with Demand Forecasting
export const demandForecasts: DemandForecast[] = [
  {
    id: 'df-001',
    productId: 'wmt-tv-55-4k',
    productName: 'TCL 55" 4K Smart TV',
    category: 'Electronics',
    subcategory: 'Televisions',
    forecastPeriod: 'weekly',
    forecastData: [
      {
        date: new Date('2025-01-06'),
        predictedDemand: 2450,
        actualDemand: 2380,
        confidenceInterval: { lower: 2350, upper: 2550 },
        influencingFactors: ['CES tech show impact', 'post-holiday pricing']
      },
      {
        date: new Date('2025-01-13'),
        predictedDemand: 1890,
        actualDemand: 1920,
        confidenceInterval: { lower: 1820, upper: 1960 },
        influencingFactors: ['January spending decline', 'Super Bowl approach']
      },
      {
        date: new Date('2025-01-20'),
        predictedDemand: 2150,
        actualDemand: 2095,
        confidenceInterval: { lower: 2050, upper: 2250 },
        influencingFactors: ['Super Bowl prep', 'competitive pricing pressure']
      },
      {
        date: new Date('2025-01-27'),
        predictedDemand: 2800,
        actualDemand: 2875,
        confidenceInterval: { lower: 2700, upper: 2900 },
        influencingFactors: ['Super Bowl weekend', 'inventory clearance pricing']
      }
    ],
    accuracy: 96.2,
    confidence: 94.8,
    lastUpdated: new Date('2025-01-15T10:30:00Z'),
    externalFactors: [
      {
        type: 'seasonal',
        name: 'Super Bowl Season',
        value: 1.35,
        impact: 0.78,
        description: 'Traditional TV upgrade period before Super Bowl'
      },
      {
        type: 'competitive',
        name: 'Best Buy Price Match',
        value: 0.92,
        impact: -0.45,
        description: 'Competitor price matching affecting market dynamics'
      }
    ]
  },
  {
    id: 'df-002',
    productId: 'wmt-backpack-school',
    productName: 'Backpacks & School Supplies',
    category: 'Back to School',
    subcategory: 'School Supplies',
    forecastPeriod: 'weekly',
    forecastData: [
      {
        date: new Date('2025-07-14'),
        predictedDemand: 15800,
        actualDemand: 15420,
        confidenceInterval: { lower: 15200, upper: 16400 },
        influencingFactors: ['Tax-free weekend approach', 'back-to-school marketing launch']
      },
      {
        date: new Date('2025-07-21'),
        predictedDemand: 28500,
        actualDemand: 29150,
        confidenceInterval: { lower: 27800, upper: 29200 },
        influencingFactors: ['Tax-free weekend', 'school district announcements']
      },
      {
        date: new Date('2025-07-28'),
        predictedDemand: 35200,
        actualDemand: 34680,
        confidenceInterval: { lower: 34500, upper: 35900 },
        influencingFactors: ['Peak back-to-school season', 'competitor promotions']
      },
      {
        date: new Date('2025-08-04'),
        predictedDemand: 42800,
        actualDemand: 41950,
        confidenceInterval: { lower: 42200, upper: 43400 },
        influencingFactors: ['School start dates', 'last-minute shopping surge']
      }
    ],
    accuracy: 94.7,
    confidence: 93.2,
    lastUpdated: new Date('2025-07-15T08:45:00Z'),
    externalFactors: [
      {
        type: 'seasonal',
        name: 'Back to School Peak',
        value: 2.85,
        impact: 0.94,
        description: 'Annual back-to-school shopping surge in July-August'
      },
      {
        type: 'economic',
        name: 'Tax-Free Weekend',
        value: 1.45,
        impact: 0.67,
        description: 'State tax-free weekend driving increased demand'
      }
    ]
  },
  {
    id: 'df-003',
    productId: 'wmt-groceries-fresh',
    productName: 'Fresh Groceries',
    category: 'Grocery',
    subcategory: 'Fresh Food',
    forecastPeriod: 'daily',
    forecastData: [
      {
        date: new Date('2025-01-16'),
        predictedDemand: 185000,
        actualDemand: 182400,
        confidenceInterval: { lower: 182000, upper: 188000 },
        influencingFactors: ['Winter storm warning', 'healthy eating trends']
      },
      {
        date: new Date('2025-01-17'),
        predictedDemand: 198000,
        actualDemand: 201500,
        confidenceInterval: { lower: 195000, upper: 201000 },
        influencingFactors: ['Storm preparation shopping', 'weekend meal prep']
      },
      {
        date: new Date('2025-01-18'),
        predictedDemand: 165000,
        actualDemand: 163800,
        confidenceInterval: { lower: 162000, upper: 168000 },
        influencingFactors: ['Post-storm normalization', 'mid-week typical pattern']
      }
    ],
    accuracy: 97.8,
    confidence: 96.5,
    lastUpdated: new Date('2025-01-16T06:00:00Z'),
    externalFactors: [
      {
        type: 'weather',
        name: 'Winter Storm System',
        value: 1.25,
        impact: 0.73,
        description: 'Storm preparation driving increased grocery demand'
      }
    ]
  }
];

// Walmart Intelligent Pricing Strategies
export const pricingStrategies: PricingStrategy[] = [
  {
    id: 'ps-001',
    productId: 'wmt-tv-55-4k',
    productName: 'TCL 55" 4K Smart TV',
    category: 'Electronics',
    currentPrice: 398.00,
    optimalPrice: 429.00,
    competitorPrices: [
      {
        competitor: 'Amazon',
        price: 399.99,
        lastChecked: new Date('2025-01-15T14:30:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Best Buy',
        price: 449.99,
        lastChecked: new Date('2025-01-15T14:32:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Target',
        price: 419.99,
        lastChecked: new Date('2025-01-15T14:31:00Z'),
        availability: 'limited'
      },
      {
        competitor: 'Costco',
        price: 389.99,
        lastChecked: new Date('2025-01-15T14:29:00Z'),
        availability: 'in-stock'
      }
    ],
    elasticity: {
      coefficient: -1.35,
      category: 'elastic',
      confidenceLevel: 94.2,
      historicalData: [
        { price: 450, demand: 1850, revenue: 832500, date: new Date('2024-12-01') },
        { price: 425, demand: 2150, revenue: 913750, date: new Date('2024-12-15') },
        { price: 399, demand: 2380, revenue: 949620, date: new Date('2025-01-01') },
        { price: 375, demand: 2650, revenue: 993750, date: new Date('2025-01-15') }
      ]
    },
    marginAnalysis: {
      currentMargin: 18.5,
      optimalMargin: 22.8,
      cost: 324.50,
      markup: 22.6,
      profitImpact: 12400,
      volumeImpact: -8.2
    },
    recommendedAction: {
      type: 'increase',
      amount: 31.00,
      percentage: 7.8,
      reason: 'Competitive positioning allows for premium pricing while maintaining market share',
      expectedImpact: {
        revenue: 98500,
        volume: -190,
        margin: 4.3
      },
      urgency: 'medium'
    },
    lastUpdated: new Date('2025-01-15T15:00:00Z')
  },
  {
    id: 'ps-002',
    productId: 'wmt-gv-bread',
    productName: 'Great Value White Bread',
    category: 'Grocery',
    currentPrice: 1.24,
    optimalPrice: 1.24,
    competitorPrices: [
      {
        competitor: 'Kroger Brand',
        price: 1.29,
        lastChecked: new Date('2025-01-15T12:00:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Safeway Brand',
        price: 1.39,
        lastChecked: new Date('2025-01-15T12:02:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Target Brand',
        price: 1.19,
        lastChecked: new Date('2025-01-15T12:01:00Z'),
        availability: 'in-stock'
      }
    ],
    elasticity: {
      coefficient: -0.65,
      category: 'inelastic',
      confidenceLevel: 97.8,
      historicalData: [
        { price: 1.19, demand: 45000, revenue: 53550, date: new Date('2024-12-01') },
        { price: 1.24, demand: 43800, revenue: 54312, date: new Date('2024-12-15') },
        { price: 1.29, demand: 42500, revenue: 54825, date: new Date('2025-01-01') }
      ]
    },
    marginAnalysis: {
      currentMargin: 24.2,
      optimalMargin: 24.2,
      cost: 0.94,
      markup: 31.9,
      profitImpact: 0,
      volumeImpact: 0
    },
    recommendedAction: {
      type: 'maintain',
      amount: 0,
      percentage: 0,
      reason: 'Optimal price point for private label positioning and volume maximization',
      expectedImpact: {
        revenue: 0,
        volume: 0,
        margin: 0
      },
      urgency: 'low'
    },
    lastUpdated: new Date('2025-01-15T12:30:00Z')
  },
  {
    id: 'ps-003',
    productId: 'wmt-winter-coat',
    productName: 'Winter Coats & Outerwear',
    category: 'Apparel',
    currentPrice: 89.97,
    optimalPrice: 65.00,
    competitorPrices: [
      {
        competitor: 'Target',
        price: 79.99,
        lastChecked: new Date('2025-01-15T11:00:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Kohls',
        price: 119.99,
        lastChecked: new Date('2025-01-15T11:02:00Z'),
        availability: 'limited'
      },
      {
        competitor: 'Macys',
        price: 149.99,
        lastChecked: new Date('2025-01-15T11:01:00Z'),
        availability: 'in-stock'
      }
    ],
    elasticity: {
      coefficient: -2.15,
      category: 'elastic',
      confidenceLevel: 89.5,
      historicalData: [
        { price: 119.99, demand: 850, revenue: 101992, date: new Date('2024-11-01') },
        { price: 89.97, demand: 1250, revenue: 112463, date: new Date('2024-12-01') },
        { price: 65.00, demand: 1850, revenue: 120250, date: new Date('2025-01-01') }
      ]
    },
    marginAnalysis: {
      currentMargin: 31.5,
      optimalMargin: 18.2,
      cost: 61.65,
      markup: 45.9,
      profitImpact: -15500,
      volumeImpact: 48.0
    },
    recommendedAction: {
      type: 'markdown',
      amount: -24.97,
      percentage: -27.7,
      reason: 'End-of-season clearance to optimize inventory turnover and maximize total revenue',
      expectedImpact: {
        revenue: 7787,
        volume: 600,
        margin: -13.3
      },
      urgency: 'high'
    },
    lastUpdated: new Date('2025-01-15T11:30:00Z')
  },
  {
    id: 'ps-004',
    productId: 'wmt-iphone-15',
    productName: 'iPhone 15 128GB',
    category: 'Electronics',
    currentPrice: 799.00,
    optimalPrice: 799.00,
    competitorPrices: [
      {
        competitor: 'Apple Store',
        price: 799.00,
        lastChecked: new Date('2025-01-15T16:00:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Best Buy',
        price: 799.00,
        lastChecked: new Date('2025-01-15T16:01:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Target',
        price: 799.00,
        lastChecked: new Date('2025-01-15T16:02:00Z'),
        availability: 'in-stock'
      },
      {
        competitor: 'Amazon',
        price: 799.00,
        lastChecked: new Date('2025-01-15T16:03:00Z'),
        availability: 'in-stock'
      }
    ],
    elasticity: {
      coefficient: -0.95,
      category: 'inelastic',
      confidenceLevel: 96.8,
      historicalData: [
        { price: 829, demand: 2450, revenue: 2031205, date: new Date('2024-12-01') },
        { price: 799, demand: 2580, revenue: 2061420, date: new Date('2025-01-01') },
        { price: 769, demand: 2650, revenue: 2037850, date: new Date('2025-01-15') }
      ]
    },
    marginAnalysis: {
      currentMargin: 8.2,
      optimalMargin: 8.2,
      cost: 733.43,
      markup: 8.9,
      profitImpact: 0,
      volumeImpact: 0
    },
    recommendedAction: {
      type: 'maintain',
      amount: 0,
      percentage: 0,
      reason: 'MAP pricing agreement and competitive parity required for authorized retailer status',
      expectedImpact: {
        revenue: 0,
        volume: 0,
        margin: 0
      },
      urgency: 'low'
    },
    lastUpdated: new Date('2025-01-15T16:15:00Z')
  }
];

// Walmart Promotional Campaigns
export const promotionalCampaigns: PromotionalCampaign[] = [
  {
    id: 'pc-001',
    name: 'Rollback Revolution - Electronics',
    type: 'rollback',
    products: ['wmt-tv-55-4k', 'wmt-laptop-hp', 'wmt-tablet-ipad', 'wmt-headphones-sony'],
    startDate: new Date('2025-01-20'),
    endDate: new Date('2025-02-16'),
    discountPercentage: 15,
    status: 'planned',
    performance: {
      targetLift: 25,
      actualLift: 0,
      unitsMovedTarget: 15000,
      unitsMovedActual: 0,
      revenueImpact: 0,
      marginImpact: 0,
      roi: 0,
      customerAcquisition: 0
    }
  },
  {
    id: 'pc-002',
    name: 'Fresh Food Flash Sale',
    type: 'competitive',
    products: ['wmt-groceries-fresh', 'wmt-organic-produce', 'wmt-meat-poultry'],
    startDate: new Date('2025-01-10'),
    endDate: new Date('2025-01-17'),
    discountPercentage: 8,
    status: 'completed',
    performance: {
      targetLift: 18,
      actualLift: 22,
      unitsMovedTarget: 85000,
      unitsMovedActual: 92500,
      revenueImpact: 125000,
      marginImpact: -15000,
      roi: 3.8,
      customerAcquisition: 2850
    }
  },
  {
    id: 'pc-003',
    name: 'Winter Clearance Blowout',
    type: 'clearance',
    products: ['wmt-winter-coat', 'wmt-winter-boots', 'wmt-holiday-decor'],
    startDate: new Date('2025-01-02'),
    endDate: new Date('2025-02-28'),
    discountPercentage: 40,
    status: 'active',
    performance: {
      targetLift: 65,
      actualLift: 78,
      unitsMovedTarget: 25000,
      unitsMovedActual: 31200,
      revenueImpact: 485000,
      marginImpact: -125000,
      roi: 2.1,
      customerAcquisition: 4200
    }
  }
];

// Market Intelligence Data
export const marketIntelligence: MarketIntelligence[] = [
  {
    category: 'Electronics',
    marketShare: 23.8,
    pricePosition: 'follower',
    competitiveIndex: 87.5,
    trendDirection: 'up',
    threats: [
      {
        competitor: 'Amazon',
        type: 'price_war',
        severity: 'medium',
        description: 'Aggressive pricing on smart TVs and tablets',
        recommendedResponse: 'Maintain rollback strategy and bundle promotions'
      },
      {
        competitor: 'Best Buy',
        type: 'promotion',
        severity: 'low',
        description: 'Extended warranty promotions on high-value electronics',
        recommendedResponse: 'Consider extended protection plan enhancements'
      }
    ],
    opportunities: [
      {
        type: 'pricing',
        description: 'Premium TV segment showing price elasticity for quality brands',
        potentialImpact: 2.3,
        investmentRequired: 0.8,
        timeframe: '6 months',
        probability: 78
      }
    ]
  },
  {
    category: 'Grocery',
    marketShare: 26.4,
    pricePosition: 'leader',
    competitiveIndex: 94.2,
    trendDirection: 'stable',
    threats: [
      {
        competitor: 'Kroger',
        type: 'new_product',
        severity: 'low',
        description: 'Expanding private label organic offerings',
        recommendedResponse: 'Accelerate Great Value organic expansion'
      }
    ],
    opportunities: [
      {
        type: 'market_gap',
        description: 'Premium organic segment underserved in rural markets',
        potentialImpact: 1.8,
        investmentRequired: 1.2,
        timeframe: '12 months',
        probability: 65
      }
    ]
  }
];

// Customer Segmentation for Demand & Pricing
export const customerSegments: CustomerSegment[] = [
  {
    id: 'cs-001',
    name: 'Price-Conscious Families',
    size: 45000000,
    characteristics: ['Budget-focused', 'Bulk buyers', 'Promotion-sensitive', 'Store brand loyal'],
    priceElasticity: 2.35,
    averageOrderValue: 127.50,
    frequency: 2.8,
    lifetimeValue: 8450,
    pricingSensitivity: 'high'
  },
  {
    id: 'cs-002',
    name: 'Convenience Shoppers',
    size: 28000000,
    characteristics: ['Time-constrained', 'Higher income', 'Quality-focused', 'Brand loyal'],
    priceElasticity: 0.85,
    averageOrderValue: 89.25,
    frequency: 4.2,
    lifetimeValue: 12500,
    pricingSensitivity: 'low'
  },
  {
    id: 'cs-003',
    name: 'Digital Natives',
    size: 35000000,
    characteristics: ['Mobile-first', 'Research-heavy', 'Price comparison', 'Review-dependent'],
    priceElasticity: 1.65,
    averageOrderValue: 156.80,
    frequency: 3.1,
    lifetimeValue: 9850,
    pricingSensitivity: 'medium'
  }
];

// Seasonal Patterns
export const seasonalPatterns: SeasonalPattern[] = [
  {
    category: 'Back to School',
    season: 'back-to-school',
    demandMultiplier: 2.85,
    peakWeeks: [30, 31, 32, 33],
    priceElasticity: 1.45,
    historicalPerformance: [
      {
        year: 2024,
        seasonStart: new Date('2024-07-15'),
        seasonEnd: new Date('2024-08-31'),
        demandIncrease: 285,
        revenueImpact: 2.8,
        optimalPricingStrategy: 'Competitive pricing with value bundles'
      },
      {
        year: 2023,
        seasonStart: new Date('2023-07-17'),
        seasonEnd: new Date('2023-09-02'),
        demandIncrease: 275,
        revenueImpact: 2.6,
        optimalPricingStrategy: 'Early bird promotions with price matching'
      }
    ]
  },
  {
    category: 'Holiday',
    season: 'winter',
    demandMultiplier: 1.95,
    peakWeeks: [47, 48, 49, 50],
    priceElasticity: 1.85,
    historicalPerformance: [
      {
        year: 2024,
        seasonStart: new Date('2024-11-01'),
        seasonEnd: new Date('2024-12-31'),
        demandIncrease: 195,
        revenueImpact: 3.2,
        optimalPricingStrategy: 'Tiered discounting with rollback emphasis'
      }
    ]
  }
];

// Economic Indicators Affecting Walmart Demand & Pricing
export const economicIndicators: EconomicIndicator[] = [
  {
    name: 'Consumer Price Index (CPI)',
    value: 3.4,
    trend: 'decreasing',
    impact: -0.78,
    category: 'inflation',
    lastUpdated: new Date('2025-01-15T09:00:00Z')
  },
  {
    name: 'Unemployment Rate',
    value: 3.7,
    trend: 'stable',
    impact: -0.62,
    category: 'employment',
    lastUpdated: new Date('2025-01-15T09:00:00Z')
  },
  {
    name: 'Median Household Income',
    value: 72500,
    trend: 'increasing',
    impact: 0.45,
    category: 'income',
    lastUpdated: new Date('2025-01-15T09:00:00Z')
  },
  {
    name: 'Consumer Confidence Index',
    value: 114.8,
    trend: 'increasing',
    impact: 0.58,
    category: 'consumer_confidence',
    lastUpdated: new Date('2025-01-15T09:00:00Z')
  },
  {
    name: 'Federal Interest Rate',
    value: 5.25,
    trend: 'stable',
    impact: -0.23,
    category: 'interest_rates',
    lastUpdated: new Date('2025-01-15T09:00:00Z')
  }
];

// Weather Impact Analysis
export const weatherImpacts: WeatherImpact[] = [
  {
    location: 'Southeast Region',
    weatherType: 'storm',
    severity: 7.5,
    affectedCategories: ['Grocery', 'Emergency Supplies', 'Generators', 'Batteries'],
    demandImpact: 2.35,
    duration: 5,
    forecast: [
      {
        date: new Date('2025-01-18'),
        condition: 'Heavy Rain',
        temperature: 45,
        precipitation: 85,
        expectedDemandChange: 1.8
      },
      {
        date: new Date('2025-01-19'),
        condition: 'Severe Thunderstorms',
        temperature: 42,
        precipitation: 95,
        expectedDemandChange: 2.4
      }
    ]
  },
  {
    location: 'Midwest Region',
    weatherType: 'temperature',
    severity: 8.2,
    affectedCategories: ['Winter Apparel', 'Heating Supplies', 'Snow Equipment'],
    demandImpact: 1.85,
    duration: 10,
    forecast: [
      {
        date: new Date('2025-01-16'),
        condition: 'Arctic Blast',
        temperature: -12,
        precipitation: 20,
        expectedDemandChange: 1.9
      }
    ]
  }
];

// Performance KPIs
export const demandPricingKPIs: DemandPricingKPI[] = [
  {
    period: '2025-Q1',
    forecastAccuracy: 95.2,
    revenueOptimization: 2.8,
    marginImprovement: 1.4,
    competitiveResponseTime: 12.5,
    promotionalROI: 4.2,
    customerSatisfaction: 94.1,
    marketShare: 25.8,
    inventoryTurnover: 8.4
  },
  {
    period: '2024-Q4',
    forecastAccuracy: 93.8,
    revenueOptimization: 2.3,
    marginImprovement: 1.1,
    competitiveResponseTime: 15.2,
    promotionalROI: 3.9,
    customerSatisfaction: 93.5,
    marketShare: 25.3,
    inventoryTurnover: 7.9
  }
];

// Dashboard Alerts
export const dashboardAlerts: DashboardAlert[] = [
  {
    id: 'alert-001',
    type: 'opportunity',
    title: 'Premium TV Pricing Opportunity',
    description: 'Price elasticity analysis shows 15% revenue upside potential for 55"+ TVs',
    priority: 'high',
    actionable: true,
    createdAt: new Date('2025-01-15T14:30:00Z')
  },
  {
    id: 'alert-002',
    type: 'threat',
    title: 'Amazon Aggressive Pricing',
    description: 'Amazon reduced prices on 150+ electronics items, potential market share impact',
    priority: 'medium',
    actionable: true,
    createdAt: new Date('2025-01-15T16:15:00Z')
  },
  {
    id: 'alert-003',
    title: 'Winter Storm Demand Surge',
    type: 'action_required',
    description: 'Weather forecast indicates 48-hour demand spike for emergency supplies',
    priority: 'critical',
    actionable: true,
    createdAt: new Date('2025-01-16T08:00:00Z')
  },
  {
    id: 'alert-004',
    type: 'success',
    title: 'Rollback Campaign Exceeding Targets',
    description: 'Fresh Food Flash Sale delivered 22% lift vs 18% target',
    priority: 'low',
    actionable: false,
    createdAt: new Date('2025-01-17T10:45:00Z')
  }
];

// Export aggregated dashboard data
export const demandPricingDashboardData = {
  overview: {
    totalRevenue: 2850000000,
    revenueGrowth: 8.7,
    forecastAccuracy: 95.2,
    pricingOptimization: 2.8,
    promotionalROI: 4.2,
    marketShare: 25.8,
    alerts: dashboardAlerts
  },
  demandForecasting: {
    forecasts: demandForecasts,
    accuracy: 95.2,
    externalFactors: economicIndicators.map(indicator => ({
      type: 'economic' as const,
      name: indicator.name,
      value: indicator.value,
      impact: indicator.impact,
      description: `${indicator.category} indicator affecting consumer demand`
    })),
    seasonalPatterns
  },
  intelligentPricing: {
    strategies: pricingStrategies,
    optimizationOpportunities: 15.8,
    competitivePosition: {
      overall: 'leading' as const,
      categories: [
        {
          category: 'Grocery',
          position: 1,
          gap: 0,
          trend: 'stable' as const
        },
        {
          category: 'Electronics',
          position: 2,
          gap: 2.3,
          trend: 'improving' as const
        }
      ],
      threatLevel: 'medium' as const
    }
  },
  marketIntelligence: {
    intelligence: marketIntelligence,
    competitorTracking: [
      {
        competitor: 'Amazon',
        priceChanges: 245,
        marketShare: 22.1,
        threat: 8.5,
        lastActivity: new Date('2025-01-15T16:00:00Z')
      },
      {
        competitor: 'Target',
        priceChanges: 156,
        marketShare: 18.3,
        threat: 6.2,
        lastActivity: new Date('2025-01-15T14:30:00Z')
      }
    ]
  },
  promotionalAnalytics: {
    campaigns: promotionalCampaigns,
    roi: 4.2,
    effectiveness: {
      rollbackSuccess: 87.5,
      clearanceEfficiency: 92.8,
      seasonalPerformance: 94.2,
      competitiveResponse: 78.3
    }
  },
  performanceMetrics: {
    kpis: demandPricingKPIs,
    trends: [
      {
        metric: 'Forecast Accuracy',
        direction: 'up' as const,
        changePercent: 1.4,
        timeframe: 'QoQ'
      },
      {
        metric: 'Revenue Optimization',
        direction: 'up' as const,
        changePercent: 21.7,
        timeframe: 'QoQ'
      }
    ]
  }
};
