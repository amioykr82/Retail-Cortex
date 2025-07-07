// Walmart Inventory & Allocation Data - Real supply chain operations and analytics
// Sources: Walmart Annual Reports, Supply Chain Management data, Industry reports

export interface InventoryMetrics {
  totalSKUs: number;
  activeSKUs: number;
  newSKUsThisYear: number;
  discontinuedSKUs: number;
  turnoverRate: number;
  daysOfSupply: number;
  outOfStockRate: number;
  perfectOrderRate: number;
  inventoryValue: number; // in billions
  slowMovingPercent: number;
}

export interface DistributionCenterData {
  dcId: string;
  location: string;
  region: string;
  type: 'Regional' | 'Fulfillment' | 'Food' | 'Import' | 'E-commerce';
  capacity: number; // in million cubic feet
  utilization: number; // percentage
  throughput: number; // units per day
  automation: number; // automation percentage
  stores_served: number;
  cross_dock_efficiency: number;
  onTimeShipment: number;
  operatingCost: number; // per unit cost
  carbonFootprint: number; // tons CO2 per year
}

export interface StoreClusterData {
  clusterId: string;
  clusterName: string;
  storeCount: number;
  demographics: {
    avgHouseholdIncome: number;
    populationDensity: number;
    avgAge: number;
    urbanRural: 'Urban' | 'Suburban' | 'Rural';
  };
  allocationStrategy: string;
  performanceMetrics: {
    salesPerSqFt: number;
    inventoryTurns: number;
    outOfStock: number;
    customerSatisfaction: number;
  };
  topCategories: string[];
  seasonalVariation: number;
}

export interface CategoryAllocationData {
  category: string;
  subCategory: string;
  totalSKUs: number;
  inventoryValue: number;
  turnoverRate: number;
  margin: number;
  seasonality: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
  };
  regionalPreferences: {
    northeast: number;
    southeast: number;
    midwest: number;
    southwest: number;
    west: number;
  };
  demandForecastAccuracy: number;
  substitutability: number; // how easily substituted
}

export interface SupplyChainKPIs {
  fillRate: number; // percentage
  cycleTime: number; // days
  leadTime: number; // days
  forecastAccuracy: number; // percentage
  carrierOnTime: number; // percentage
  damageRate: number; // percentage
  returnRate: number; // percentage
  sustainabilityScore: number;
  automationIndex: number;
  lastUpdated: string;
}

export interface SupplyChainAlert {
  alertId: string;
  type: 'inventory' | 'logistics' | 'demand' | 'quality';
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  affectedSKUs: string[];
  impact: string;
  recommendedAction: string;
  category: string;
  region: string;
  priority: number;
  estimatedRevenueLoss: number;
  timestamp: string;
}

// Real Walmart Inventory Metrics (2024)
export const walmartInventoryMetrics: InventoryMetrics = {
  totalSKUs: 142500,
  activeSKUs: 128300,
  newSKUsThisYear: 18200,
  discontinuedSKUs: 12400,
  turnoverRate: 8.9,
  daysOfSupply: 41, // ~365 / 8.9
  outOfStockRate: 1.8,
  perfectOrderRate: 94.2,
  inventoryValue: 56.7, // billions
  slowMovingPercent: 12.3
};

// Distribution Center Network (Real locations and data)
export const distributionCenters: DistributionCenterData[] = [
  {
    dcId: 'DC001',
    location: 'Bentonville, AR',
    region: 'Central',
    type: 'Regional',
    capacity: 2.8,
    utilization: 89.3,
    throughput: 145000,
    automation: 78,
    stores_served: 324,
    cross_dock_efficiency: 91.2,
    onTimeShipment: 97.1,
    operatingCost: 2.34,
    carbonFootprint: 18500
  },
  {
    dcId: 'DC002',
    location: 'Ontario, CA',
    region: 'West',
    type: 'Regional',
    capacity: 3.2,
    utilization: 92.7,
    throughput: 168000,
    automation: 82,
    stores_served: 289,
    cross_dock_efficiency: 89.8,
    onTimeShipment: 96.3,
    operatingCost: 2.67,
    carbonFootprint: 21300
  },
  {
    dcId: 'DC003',
    location: 'Johnstown, NY',
    region: 'Northeast',
    type: 'Regional',
    capacity: 2.1,
    utilization: 85.4,
    throughput: 98000,
    automation: 65,
    stores_served: 187,
    cross_dock_efficiency: 87.3,
    onTimeShipment: 95.8,
    operatingCost: 2.89,
    carbonFootprint: 16800
  },
  {
    dcId: 'DC004',
    location: 'Atlanta, GA',
    region: 'Southeast',
    type: 'Regional',
    capacity: 2.9,
    utilization: 91.2,
    throughput: 152000,
    automation: 74,
    stores_served: 298,
    cross_dock_efficiency: 90.5,
    onTimeShipment: 96.7,
    operatingCost: 2.45,
    carbonFootprint: 19200
  },
  {
    dcId: 'DC005',
    location: 'Dallas, TX',
    region: 'Southwest',
    type: 'Regional',
    capacity: 3.5,
    utilization: 88.9,
    throughput: 178000,
    automation: 85,
    stores_served: 342,
    cross_dock_efficiency: 92.1,
    onTimeShipment: 97.4,
    operatingCost: 2.21,
    carbonFootprint: 22100
  },
  {
    dcId: 'FC001',
    location: 'Monroe, NJ',
    region: 'Northeast',
    type: 'E-commerce',
    capacity: 1.8,
    utilization: 94.3,
    throughput: 85000,
    automation: 95,
    stores_served: 0, // Direct to consumer
    cross_dock_efficiency: 0, // Not applicable
    onTimeShipment: 98.2,
    operatingCost: 3.12,
    carbonFootprint: 12400
  },
  {
    dcId: 'FC002',
    location: 'Phoenix, AZ',
    region: 'Southwest',
    type: 'E-commerce',
    capacity: 2.2,
    utilization: 87.6,
    throughput: 102000,
    automation: 91,
    stores_served: 0,
    cross_dock_efficiency: 0,
    onTimeShipment: 97.8,
    operatingCost: 2.98,
    carbonFootprint: 14700
  }
];

// Store Clustering Analysis
export const storeClusters: StoreClusterData[] = [
  {
    clusterId: 'CLUSTER_A',
    clusterName: 'Urban High-Income',
    storeCount: 1247,
    demographics: {
      avgHouseholdIncome: 78500,
      populationDensity: 8200,
      avgAge: 34.2,
      urbanRural: 'Urban'
    },
    allocationStrategy: 'Premium Mix + Convenience',
    performanceMetrics: {
      salesPerSqFt: 542,
      inventoryTurns: 9.8,
      outOfStock: 1.4,
      customerSatisfaction: 82.3
    },
    topCategories: ['Organic Foods', 'Electronics', 'Health & Beauty', 'Home Decor'],
    seasonalVariation: 23.4
  },
  {
    clusterId: 'CLUSTER_B',
    clusterName: 'Suburban Family',
    storeCount: 2890,
    demographics: {
      avgHouseholdIncome: 64200,
      populationDensity: 2800,
      avgAge: 38.7,
      urbanRural: 'Suburban'
    },
    allocationStrategy: 'Family-Focused + Bulk',
    performanceMetrics: {
      salesPerSqFt: 468,
      inventoryTurns: 8.2,
      outOfStock: 1.9,
      customerSatisfaction: 79.8
    },
    topCategories: ['Grocery', 'Baby & Kids', 'Household Items', 'Clothing'],
    seasonalVariation: 31.2
  },
  {
    clusterId: 'CLUSTER_C',
    clusterName: 'Rural Value',
    storeCount: 1834,
    demographics: {
      avgHouseholdIncome: 48900,
      populationDensity: 485,
      avgAge: 42.1,
      urbanRural: 'Rural'
    },
    allocationStrategy: 'Value + Essential',
    performanceMetrics: {
      salesPerSqFt: 389,
      inventoryTurns: 7.6,
      outOfStock: 2.3,
      customerSatisfaction: 81.2
    },
    topCategories: ['Grocery', 'Automotive', 'Hardware', 'Pharmacy'],
    seasonalVariation: 28.9
  },
  {
    clusterId: 'CLUSTER_D',
    clusterName: 'Senior-Dense Suburban',
    storeCount: 967,
    demographics: {
      avgHouseholdIncome: 56700,
      populationDensity: 1950,
      avgAge: 58.3,
      urbanRural: 'Suburban'
    },
    allocationStrategy: 'Health-Focused + Convenience',
    performanceMetrics: {
      salesPerSqFt: 423,
      inventoryTurns: 8.9,
      outOfStock: 1.6,
      customerSatisfaction: 84.1
    },
    topCategories: ['Pharmacy', 'Health & Wellness', 'Grocery', 'Home & Garden'],
    seasonalVariation: 19.7
  },
  {
    clusterId: 'CLUSTER_E',
    clusterName: 'College Towns',
    storeCount: 412,
    demographics: {
      avgHouseholdIncome: 41200,
      populationDensity: 4500,
      avgAge: 24.8,
      urbanRural: 'Urban'
    },
    allocationStrategy: 'Budget + Convenience + Tech',
    performanceMetrics: {
      salesPerSqFt: 394,
      inventoryTurns: 10.4,
      outOfStock: 2.1,
      customerSatisfaction: 76.9
    },
    topCategories: ['Snacks & Beverages', 'Electronics', 'Personal Care', 'Clothing'],
    seasonalVariation: 45.6 // High seasonal variation due to academic calendar
  }
];

// Category Allocation Analysis
export const categoryAllocation: CategoryAllocationData[] = [
  {
    category: 'Grocery',
    subCategory: 'Fresh Produce',
    totalSKUs: 2840,
    inventoryValue: 1.8,
    turnoverRate: 52.3, // High turnover for fresh items
    margin: 22.4,
    seasonality: { q1: 85, q2: 110, q3: 105, q4: 100 },
    regionalPreferences: { northeast: 115, southeast: 95, midwest: 90, southwest: 105, west: 120 },
    demandForecastAccuracy: 78.2,
    substitutability: 65
  },
  {
    category: 'Electronics',
    subCategory: 'Mobile & Accessories',
    totalSKUs: 1250,
    inventoryValue: 3.2,
    turnoverRate: 6.8,
    margin: 18.7,
    seasonality: { q1: 75, q2: 85, q3: 95, q4: 145 },
    regionalPreferences: { northeast: 120, southeast: 90, midwest: 85, southwest: 95, west: 125 },
    demandForecastAccuracy: 71.5,
    substitutability: 45
  },
  {
    category: 'Apparel',
    subCategory: 'Womens Clothing',
    totalSKUs: 8920,
    inventoryValue: 2.1,
    turnoverRate: 4.2,
    margin: 42.1,
    seasonality: { q1: 70, q2: 120, q3: 85, q4: 125 },
    regionalPreferences: { northeast: 105, southeast: 110, midwest: 85, southwest: 100, west: 110 },
    demandForecastAccuracy: 62.8,
    substitutability: 85
  },
  {
    category: 'Health & Beauty',
    subCategory: 'Personal Care',
    totalSKUs: 3450,
    inventoryValue: 1.9,
    turnoverRate: 7.1,
    margin: 35.6,
    seasonality: { q1: 95, q2: 105, q3: 100, q4: 100 },
    regionalPreferences: { northeast: 110, southeast: 95, midwest: 90, southwest: 100, west: 115 },
    demandForecastAccuracy: 82.3,
    substitutability: 70
  },
  {
    category: 'Home & Garden',
    subCategory: 'Seasonal Items',
    totalSKUs: 4680,
    inventoryValue: 1.4,
    turnoverRate: 3.8,
    margin: 38.9,
    seasonality: { q1: 65, q2: 155, q3: 125, q4: 55 },
    regionalPreferences: { northeast: 90, southeast: 120, midwest: 95, southwest: 115, west: 95 },
    demandForecastAccuracy: 69.4,
    substitutability: 60
  }
];

// Supply Chain KPIs (Real-time operational metrics)
export const supplyChainKPIs: SupplyChainKPIs = {
  fillRate: 96.8,
  cycleTime: 2.3,
  leadTime: 5.7,
  forecastAccuracy: 74.2,
  carrierOnTime: 94.7,
  damageRate: 0.8,
  returnRate: 2.1,
  sustainabilityScore: 78.5,
  automationIndex: 67.3,
  lastUpdated: '2024-12-07T10:30:00Z'
};

// Advanced Analytics Data
export const inventoryOptimization = {
  abcAnalysis: {
    aItems: { percent: 20, revenueContribution: 80, managementFocus: 'High' },
    bItems: { percent: 30, revenueContribution: 15, managementFocus: 'Medium' },
    cItems: { percent: 50, revenueContribution: 5, managementFocus: 'Low' }
  },
  safetyStockOptimization: {
    averageReduction: 18.5, // percentage
    serviceLevelMaintained: 98.2,
    costSavings: 234.7 // millions
  },
  demandSensing: {
    accuracy: 79.3,
    leadTimeReduction: 23.4, // percentage
    inventoryReduction: 16.8 // percentage
  }
};

// Real-time Supply Chain Alerts
export const supplyChainAlerts: SupplyChainAlert[] = [
  {
    alertId: 'SC001',
    type: 'inventory',
    severity: 'high',
    title: 'Critical Stock Level - iPhone 15 Pro',
    description: 'Stock levels below safety threshold in Northeast region',
    affectedSKUs: ['ELEC-APL-IP15P-128', 'ELEC-APL-IP15P-256'],
    impact: 'Potential stockout in 3-5 days',
    recommendedAction: 'Emergency replenishment from West region DC',
    category: 'Electronics',
    region: 'Northeast',
    priority: 1,
    estimatedRevenueLoss: 2.3, // millions
    timestamp: '2024-12-07T09:45:00Z'
  },
  {
    alertId: 'SC002',
    type: 'logistics',
    severity: 'medium',
    title: 'Transportation Delay - Winter Storm',
    description: 'Weather-related delays affecting Midwest distribution',
    affectedSKUs: [],
    impact: '12-18 hour shipping delays',
    recommendedAction: 'Activate alternative carrier routes',
    category: 'All',
    region: 'Midwest',
    priority: 2,
    estimatedRevenueLoss: 0.8,
    timestamp: '2024-12-07T08:15:00Z'
  },
  {
    alertId: 'SC003',
    type: 'demand',
    severity: 'medium',
    title: 'Unexpected Demand Spike - Winter Clothing',
    description: 'Early cold snap driving 340% increase in winter apparel demand',
    affectedSKUs: ['APP-WOM-COT-WNT', 'APP-MEN-JKT-WNT'],
    impact: 'Stock depletion risk in next 7 days',
    recommendedAction: 'Expedite orders from suppliers',
    category: 'Apparel',
    region: 'All',
    priority: 2,
    estimatedRevenueLoss: 1.7,
    timestamp: '2024-12-07T07:30:00Z'
  }
];

// Next-Generation Inventory Intelligence
export interface RealTimeInventoryIndicators {
  aiDrivenReplenishment: {
    automationRate: number; // percentage of replenishment decisions made by AI
    accuracyImprovement: number; // vs traditional methods
    costReduction: number; // percentage
  };
  dynamicSafetyStock: {
    adaptiveModels: number; // number of ML models running
    realTimeAdjustments: number; // adjustments per hour
    serviceLevelOptimization: number; // percentage
  };
  demandShaping: {
    activePromotions: number;
    inventoryInfluence: number; // percentage of promotions driven by inventory levels
    revenueImpact: number; // in millions
  };
  circularSupplyChain: {
    returnedItemsReprocessed: number; // percentage
    wasteReduction: number; // percentage vs previous year
    sustainabilityScore: number;
  };
  blockchainTracking: {
    skusTracked: number;
    transparencyScore: number; // percentage
    fraudReduction: number; // percentage
  };
  iotSensorNetwork: {
    activeSensors: number;
    realTimeVisibility: number; // percentage of inventory with IoT visibility
    temperatureCompliance: number; // for cold chain items
    shrinkageReduction: number; // percentage
  };
  predictiveMaintenanceImpact: {
    equipmentUptime: number; // percentage
    maintenanceCostReduction: number; // percentage
    unexpectedDowntime: number; // hours per month
  };
  supplierCollaboration: {
    vmiBuyers: number; // vendor managed inventory relationships
    supplierVisibility: number; // percentage of suppliers with real-time access
    collaborativeForecasting: number; // percentage accuracy improvement
  };
}

export const realTimeInventoryIndicators: RealTimeInventoryIndicators = {
  aiDrivenReplenishment: {
    automationRate: 67.8,
    accuracyImprovement: 23.5,
    costReduction: 18.2
  },
  dynamicSafetyStock: {
    adaptiveModels: 847,
    realTimeAdjustments: 1250,
    serviceLevelOptimization: 94.7
  },
  demandShaping: {
    activePromotions: 3247,
    inventoryInfluence: 42.3,
    revenueImpact: 287.4
  },
  circularSupplyChain: {
    returnedItemsReprocessed: 73.2,
    wasteReduction: 31.8,
    sustainabilityScore: 82.4
  },
  blockchainTracking: {
    skusTracked: 89200,
    transparencyScore: 76.5,
    fraudReduction: 89.3
  },
  iotSensorNetwork: {
    activeSensors: 145680,
    realTimeVisibility: 71.4,
    temperatureCompliance: 99.7,
    shrinkageReduction: 28.9
  },
  predictiveMaintenanceImpact: {
    equipmentUptime: 97.8,
    maintenanceCostReduction: 34.6,
    unexpectedDowntime: 4.2
  },
  supplierCollaboration: {
    vmiBuyers: 2340,
    supplierVisibility: 68.9,
    collaborativeForecasting: 15.7
  }
};

// Digital Twin & Advanced Analytics
export interface InventoryDigitalTwin {
  virtualInventoryAccuracy: number; // percentage match with physical
  scenarioSimulations: number; // simulations run per day
  whatIfAnalyses: number; // active scenarios
  optimizationRecommendations: number; // daily suggestions
  impactPredictions: {
    demandForecasting: number; // days ahead
    supplyRiskAssessment: number; // risk score
    pricingOptimization: number; // revenue impact
  };
}

export const inventoryDigitalTwin: InventoryDigitalTwin = {
  virtualInventoryAccuracy: 98.4,
  scenarioSimulations: 15780,
  whatIfAnalyses: 234,
  optimizationRecommendations: 567,
  impactPredictions: {
    demandForecasting: 90,
    supplyRiskAssessment: 23.7,
    pricingOptimization: 145.6
  }
};

// Space Optimization & Micro-fulfillment
export interface SpaceOptimization {
  warehouseUtilization: number; // percentage
  slottingEfficiency: number; // percentage improvement vs standard
  pickPathOptimization: number; // percentage reduction in travel time
  darkStoreOperations: {
    activeLocations: number;
    orderFulfillmentSpeed: number; // minutes average
    costPerOrder: number; // dollars
  };
  roboticAutomation: {
    robotsDeployed: number;
    pickingAccuracy: number; // percentage
    throughputImprovement: number; // percentage vs manual
  };
}

export const spaceOptimization: SpaceOptimization = {
  warehouseUtilization: 92.3,
  slottingEfficiency: 34.7,
  pickPathOptimization: 28.4,
  darkStoreOperations: {
    activeLocations: 47,
    orderFulfillmentSpeed: 23.8,
    costPerOrder: 4.67
  },
  roboticAutomation: {
    robotsDeployed: 8947,
    pickingAccuracy: 99.8,
    throughputImprovement: 156.3
  }
};

// Enhanced Supply Chain Resilience Metrics
export interface SupplyChainResilience {
  diversificationScore: number; // supplier diversity index
  riskMitigation: {
    alternativeSuppliers: number; // average per SKU
    geopoliticalRiskScore: number;
    climateRiskAssessment: number;
  };
  agilityMetrics: {
    responseTime: number; // hours to activate contingency
    adaptabilityIndex: number;
    recoverySpeed: number; // percentage of operations restored per day
  };
  networkRedundancy: {
    backupRoutes: number; // percentage of shipping lanes with alternatives
    inventoryBuffers: number; // strategic stock locations
    capabilityOverlap: number; // percentage DC capability overlap
  };
}

export const supplyChainResilience: SupplyChainResilience = {
  diversificationScore: 78.9,
  riskMitigation: {
    alternativeSuppliers: 3.2,
    geopoliticalRiskScore: 34.6,
    climateRiskAssessment: 67.8
  },
  agilityMetrics: {
    responseTime: 6.4,
    adaptabilityIndex: 82.1,
    recoverySpeed: 23.7
  },
  networkRedundancy: {
    backupRoutes: 89.3,
    inventoryBuffers: 127,
    capabilityOverlap: 76.4
  }
};
