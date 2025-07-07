// Walmart Data Service - Robust data access layer with real Walmart data
// Supports dynamic updates, validation, and multiple data sources

import {
  WalmartFinancialData,
  WalmartOperationalData,
  WalmartQuarterlyData,
  walmartFinancials,
  walmartOperations,
  walmartQuarterlyData,
  walmartHistoricalData,
  walmartCategoryData,
  walmartChannelData,
  walmartDashboardKPIs
} from '../data/financial/walmartFinancials';

import {
  CompetitorData,
  MarketTrendData,
  WalmartSWOTData,
  retailCompetitors,
  marketTrends,
  walmartSWOT,
  marketShareEvolution,
  competitivePositioning
} from '../data/competitive/marketIntelligence';

import {
  realTimeMetrics,
  enhancedTrends,
  competitiveAlerts,
  marketOpportunities,
  stockPerformance
} from '../data/competitive/realTimeIntelligence';

import {
  InventoryMetrics,
  DistributionCenterData,
  StoreClusterData,
  CategoryAllocationData,
  SupplyChainKPIs,
  SupplyChainAlert,
  walmartInventoryMetrics,
  distributionCenters,
  storeClusters,
  categoryAllocation,
  supplyChainKPIs,
  inventoryOptimization,
  supplyChainAlerts,
  realTimeInventoryIndicators,
  inventoryDigitalTwin,
  spaceOptimization,
  supplyChainResilience
} from '../data/operations/inventoryAllocation';

import {
  SupplierData,
  SupplierPerformance,
  ProcurementMetrics,
  SupplierRisk,
  SustainabilityMetrics,
  DigitalProcurement,
  SupplierAlert
} from '../types/supplier';

import {
  supplierEcosystem,
  supplierPerformance,
  procurementMetrics,
  supplierRiskData,
  sustainabilityMetrics,
  digitalProcurement,
  supplierAlerts,
  supplierInsights
} from '../data/operations/supplierManagement';

export interface DataValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export class WalmartDataService {
  private static instance: WalmartDataService;
  private cache: Map<string, any> = new Map();
  private lastUpdated: Map<string, Date> = new Map();
  private readonly CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

  public static getInstance(): WalmartDataService {
    if (!WalmartDataService.instance) {
      WalmartDataService.instance = new WalmartDataService();
    }
    return WalmartDataService.instance;
  }

  /**
   * Get Dashboard KPIs with real-time data validation
   */
  public getDashboardKPIs(): typeof walmartDashboardKPIs {
    const cacheKey = 'dashboard_kpis';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Validate data before returning
    const validation = this.validateKPIData(walmartDashboardKPIs);
    if (!validation.isValid) {
      console.warn('KPI data validation warnings:', validation.warnings);
    }

    this.cache.set(cacheKey, walmartDashboardKPIs);
    this.lastUpdated.set(cacheKey, new Date());
    
    return walmartDashboardKPIs;
  }

  /**
   * Get quarterly revenue trends for charts
   */
  public getQuarterlyTrends(): WalmartQuarterlyData[] {
    const cacheKey = 'quarterly_trends';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Sort by most recent first and validate
    const sortedData = [...walmartQuarterlyData].sort((a, b) => 
      new Date(b.fiscal_year + b.quarter).getTime() - new Date(a.fiscal_year + a.quarter).getTime()
    );

    this.cache.set(cacheKey, sortedData);
    this.lastUpdated.set(cacheKey, new Date());
    
    return sortedData;
  }

  /**
   * Get historical annual data (2020-2024)
   */
  public getHistoricalData() {
    const cacheKey = 'historical_data';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, walmartHistoricalData);
    this.lastUpdated.set(cacheKey, new Date());
    
    return walmartHistoricalData;
  }

  /**
   * Get segment performance (US vs International vs Sam's Club)
   */
  public getSegmentPerformance() {
    const cacheKey = 'segment_performance';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const segmentData = [
      {
        segment: 'Walmart US',
        revenue: walmartFinancials.segments.walmart_us,
        percentage: (walmartFinancials.segments.walmart_us / walmartFinancials.total_revenue) * 100,
        growth: 6.4
      },
      {
        segment: 'Walmart International',
        revenue: walmartFinancials.segments.walmart_international,
        percentage: (walmartFinancials.segments.walmart_international / walmartFinancials.total_revenue) * 100,
        growth: 10.9
      },
      {
        segment: 'Sams Club',
        revenue: walmartFinancials.segments.sams_club,
        percentage: (walmartFinancials.segments.sams_club / walmartFinancials.total_revenue) * 100,
        growth: 4.9
      }
    ];

    this.cache.set(cacheKey, segmentData);
    this.lastUpdated.set(cacheKey, new Date());
    
    return segmentData;
  }

  /**
   * Get category performance data
   */
  public getCategoryPerformance() {
    const cacheKey = 'category_performance';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, walmartCategoryData);
    this.lastUpdated.set(cacheKey, new Date());
    
    return walmartCategoryData;
  }

  /**
   * Get channel performance (E-commerce vs Physical)
   */
  public getChannelPerformance() {
    const cacheKey = 'channel_performance';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, walmartChannelData);
    this.lastUpdated.set(cacheKey, new Date());
    
    return walmartChannelData;
  }

  /**
   * Add new data entry (for future updates)
   */
  public addQuarterlyData(data: WalmartQuarterlyData): boolean {
    try {
      const validation = this.validateQuarterlyData(data);
      if (!validation.isValid) {
        throw new Error(`Data validation failed: ${validation.errors.join(', ')}`);
      }

      walmartQuarterlyData.unshift(data); // Add to beginning
      this.invalidateCache('quarterly_trends');
      return true;
    } catch (error) {
      console.error('Failed to add quarterly data:', error);
      return false;
    }
  }

  /**
   * Update KPI data
   */
  public updateKPIs(updates: Partial<typeof walmartDashboardKPIs>): boolean {
    try {
      Object.assign(walmartDashboardKPIs, updates);
      this.invalidateCache('dashboard_kpis');
      return true;
    } catch (error) {
      console.error('Failed to update KPIs:', error);
      return false;
    }
  }

  /**
   * Validate KPI data
   */
  private validateKPIData(data: typeof walmartDashboardKPIs): DataValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Revenue validation
    if (data.totalRevenue <= 0) {
      errors.push('Total revenue must be positive');
    }
    if (data.totalRevenue < 500000000000) { // Less than $500B seems low for Walmart
      warnings.push('Total revenue seems unusually low for Walmart');
    }

    // Growth rate validation
    if (Math.abs(data.revenueGrowth) > 50) {
      warnings.push('Revenue growth rate seems unusually high');
    }

    // Margin validation
    if (data.grossMargin < 0 || data.grossMargin > 100) {
      errors.push('Gross margin must be between 0 and 100');
    }
    if (data.operatingMargin < 0 || data.operatingMargin > data.grossMargin) {
      errors.push('Operating margin cannot exceed gross margin');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate quarterly data
   */
  private validateQuarterlyData(data: WalmartQuarterlyData): DataValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (data.revenue <= 0) {
      errors.push('Revenue must be positive');
    }
    if (!data.quarter.match(/^Q[1-4] FY\d{4}$/)) {
      errors.push('Quarter format must be "Q1 FY2024"');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Check if cache is still valid
   */
  private isCacheValid(key: string): boolean {
    const cached = this.cache.has(key);
    const lastUpdate = this.lastUpdated.get(key);
    
    if (!cached || !lastUpdate) {
      return false;
    }

    return (Date.now() - lastUpdate.getTime()) < this.CACHE_DURATION;
  }

  /**
   * Invalidate specific cache entry
   */
  private invalidateCache(key: string): void {
    this.cache.delete(key);
    this.lastUpdated.delete(key);
  }

  /**
   * Clear all cache
   */
  public clearCache(): void {
    this.cache.clear();
    this.lastUpdated.clear();
  }

  /**
   * Get data freshness information
   */
  public getDataFreshness(): { [key: string]: Date | null } {
    const freshness: { [key: string]: Date | null } = {};
    
    for (const [key, date] of this.lastUpdated.entries()) {
      freshness[key] = date;
    }
    
    return freshness;
  }

  /**
   * Export all data for backup/analysis
   */
  public exportData() {
    return {
      financials: walmartFinancials,
      operations: walmartOperations,
      quarterly: walmartQuarterlyData,
      historical: walmartHistoricalData,
      categories: walmartCategoryData,
      channels: walmartChannelData,
      kpis: walmartDashboardKPIs,
      competitors: retailCompetitors,
      marketTrends: marketTrends,
      swot: walmartSWOT,
      marketShare: marketShareEvolution,
      positioning: competitivePositioning,
      metadata: {
        lastUpdated: this.getDataFreshness(),
        dataVersion: '1.0.0',
        source: 'Walmart SEC 10-K/10-Q Filings'
      }
    };
  }

  /**
   * Get retail competitor data
   */
  public getRetailCompetitors(): CompetitorData[] {
    const cacheKey = 'retail_competitors';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, retailCompetitors);
    this.lastUpdated.set(cacheKey, new Date());
    
    return retailCompetitors;
  }

  /**
   * Get market trend data
   */
  public getMarketTrends(): MarketTrendData[] {
    const cacheKey = 'market_trends';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    const validation = this.validateMarketTrendData(marketTrends);
    if (!validation.isValid) {
      console.warn('Market trend data validation warnings:', validation.warnings);
    }

    this.cache.set(cacheKey, marketTrends);
    this.lastUpdated.set(cacheKey, new Date());
    
    return marketTrends;
  }

  /**
   * Get Walmart SWOT analysis
   */
  public getSWOTAnalysis(): WalmartSWOTData {
    const cacheKey = 'swot_analysis';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, walmartSWOT);
    this.lastUpdated.set(cacheKey, new Date());
    
    return walmartSWOT;
  }

  /**
   * Get market share evolution data
   */
  public getMarketShareEvolution(): typeof marketShareEvolution {
    const cacheKey = 'market_share_evolution';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, marketShareEvolution);
    this.lastUpdated.set(cacheKey, new Date());
    
    return marketShareEvolution;
  }

  /**
   * Get competitive positioning matrix
   */
  public getCompetitivePositioning(): typeof competitivePositioning {
    const cacheKey = 'competitive_positioning';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, competitivePositioning);
    this.lastUpdated.set(cacheKey, new Date());
    
    return competitivePositioning;
  }

  /**
   * Get real-time market metrics
   */
  public getRealTimeMetrics(): typeof realTimeMetrics {
    const cacheKey = 'real_time_metrics';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, realTimeMetrics);
    this.lastUpdated.set(cacheKey, new Date());
    
    return realTimeMetrics;
  }

  /**
   * Get enhanced market trends
   */
  public getEnhancedTrends(): typeof enhancedTrends {
    const cacheKey = 'enhanced_trends';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, enhancedTrends);
    this.lastUpdated.set(cacheKey, new Date());
    
    return enhancedTrends;
  }

  /**
   * Get competitive alerts
   */
  public getCompetitiveAlerts(): typeof competitiveAlerts {
    const cacheKey = 'competitive_alerts';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, competitiveAlerts);
    this.lastUpdated.set(cacheKey, new Date());
    
    return competitiveAlerts;
  }

  /**
   * Get market opportunities
   */
  public getMarketOpportunities(): typeof marketOpportunities {
    const cacheKey = 'market_opportunities';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, marketOpportunities);
    this.lastUpdated.set(cacheKey, new Date());
    
    return marketOpportunities;
  }

  /**
   * Get stock performance data
   */
  public getStockPerformance(): typeof stockPerformance {
    const cacheKey = 'stock_performance';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, stockPerformance);
    this.lastUpdated.set(cacheKey, new Date());
    
    return stockPerformance;
  }

  /**
   * Get inventory metrics
   */
  public getInventoryMetrics(): InventoryMetrics {
    const cacheKey = 'inventory_metrics';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, walmartInventoryMetrics);
    this.lastUpdated.set(cacheKey, new Date());
    
    return walmartInventoryMetrics;
  }

  /**
   * Get distribution centers data
   */
  public getDistributionCenters(): DistributionCenterData[] {
    const cacheKey = 'distribution_centers';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, distributionCenters);
    this.lastUpdated.set(cacheKey, new Date());
    
    return distributionCenters;
  }

  /**
   * Get store clusters data
   */
  public getStoreClusters(): StoreClusterData[] {
    const cacheKey = 'store_clusters';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, storeClusters);
    this.lastUpdated.set(cacheKey, new Date());
    
    return storeClusters;
  }

  /**
   * Get category allocation data
   */
  public getCategoryAllocation(): CategoryAllocationData[] {
    const cacheKey = 'category_allocation';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, categoryAllocation);
    this.lastUpdated.set(cacheKey, new Date());
    
    return categoryAllocation;
  }

  /**
   * Get supply chain KPIs
   */
  public getSupplyChainKPIs(): SupplyChainKPIs {
    const cacheKey = 'supply_chain_kpis';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplyChainKPIs);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplyChainKPIs;
  }

  /**
   * Get inventory optimization data
   */
  public getInventoryOptimization(): typeof inventoryOptimization {
    const cacheKey = 'inventory_optimization';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, inventoryOptimization);
    this.lastUpdated.set(cacheKey, new Date());
    
    return inventoryOptimization;
  }

  /**
   * Get supply chain alerts
   */
  public getSupplyChainAlerts(): SupplyChainAlert[] {
    const cacheKey = 'supply_chain_alerts';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplyChainAlerts);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplyChainAlerts;
  }

  /**
   * Get real-time inventory indicators with advanced AI metrics
   */
  public getRealTimeInventoryIndicators(): typeof realTimeInventoryIndicators {
    const cacheKey = 'realtime_inventory_indicators';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, realTimeInventoryIndicators);
    this.lastUpdated.set(cacheKey, new Date());
    
    return realTimeInventoryIndicators;
  }

  /**
   * Get inventory digital twin analytics
   */
  public getInventoryDigitalTwin(): typeof inventoryDigitalTwin {
    const cacheKey = 'inventory_digital_twin';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, inventoryDigitalTwin);
    this.lastUpdated.set(cacheKey, new Date());
    
    return inventoryDigitalTwin;
  }

  /**
   * Get space optimization metrics
   */
  public getSpaceOptimization(): typeof spaceOptimization {
    const cacheKey = 'space_optimization';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, spaceOptimization);
    this.lastUpdated.set(cacheKey, new Date());
    
    return spaceOptimization;
  }

  /**
   * Get supply chain resilience metrics
   */
  public getSupplyChainResilience(): typeof supplyChainResilience {
    const cacheKey = 'supply_chain_resilience';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplyChainResilience);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplyChainResilience;
  }

  /**
   * Validate competitor data
   */
  private validateCompetitorData(data: CompetitorData[]): DataValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    data.forEach((competitor, index) => {
      if (!competitor.company || competitor.revenue <= 0) {
        errors.push(`Invalid competitor data at index ${index}`);
      }
      if (competitor.marketShare < 0 || competitor.marketShare > 100) {
        warnings.push(`Market share out of range for ${competitor.company}`);
      }
      if (competitor.operatingMargin < 0 || competitor.operatingMargin > 50) {
        warnings.push(`Operating margin seems unusual for ${competitor.company}`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate market trend data
   */
  private validateMarketTrendData(data: MarketTrendData[]): DataValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    data.forEach((trend, index) => {
      if (!trend.trend || !trend.category || !trend.data || trend.data.length === 0) {
        errors.push(`Invalid trend data at index ${index}`);
      }
      
      if (trend.data) {
        const hasIncreasingValues = trend.data.some((item, idx) => 
          idx > 0 && item.value < trend.data[idx - 1].value
        );
        
        if (hasIncreasingValues && trend.direction === 'Growing') {
          warnings.push(`Trend ${trend.trend} shows declining values but marked as growing`);
        }
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Get supplier ecosystem data
   */
  public getSupplierEcosystem(): SupplierData[] {
    const cacheKey = 'supplier_ecosystem';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Validate data before returning
    const validation = this.validateSupplierData(supplierEcosystem);
    if (!validation.isValid) {
      console.warn('Supplier data validation warnings:', validation.warnings);
    }

    this.cache.set(cacheKey, supplierEcosystem);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplierEcosystem;
  }

  /**
   * Get supplier by ID
   */
  public getSupplierById(supplierId: string): SupplierData | undefined {
    return this.getSupplierEcosystem().find(supplier => supplier.id === supplierId);
  }

  /**
   * Get suppliers by category
   */
  public getSuppliersByCategory(category: string): SupplierData[] {
    return this.getSupplierEcosystem().filter(supplier => 
      supplier.categories.includes(category)
    );
  }

  /**
   * Get strategic suppliers
   */
  public getStrategicSuppliers(): SupplierData[] {
    return this.getSupplierEcosystem().filter(supplier => 
      supplier.type === 'Strategic Partner'
    );
  }

  /**
   * Get supplier performance data
   */
  public getSupplierPerformance(): SupplierPerformance[] {
    const cacheKey = 'supplier_performance';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplierPerformance);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplierPerformance;
  }

  /**
   * Get performance for specific supplier
   */
  public getSupplierPerformanceById(supplierId: string): SupplierPerformance | undefined {
    return this.getSupplierPerformance().find(perf => perf.supplierId === supplierId);
  }

  /**
   * Get procurement metrics
   */
  public getProcurementMetrics(): ProcurementMetrics {
    const cacheKey = 'procurement_metrics';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, procurementMetrics);
    this.lastUpdated.set(cacheKey, new Date());
    
    return procurementMetrics;
  }

  /**
   * Get supplier risk assessments
   */
  public getSupplierRiskData(): SupplierRisk[] {
    const cacheKey = 'supplier_risk';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplierRiskData);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplierRiskData;
  }

  /**
   * Get risk assessment for specific supplier
   */
  public getSupplierRiskById(supplierId: string): SupplierRisk | undefined {
    return this.getSupplierRiskData().find(risk => risk.supplierId === supplierId);
  }

  /**
   * Get high-risk suppliers
   */
  public getHighRiskSuppliers(): SupplierRisk[] {
    return this.getSupplierRiskData().filter(risk => 
      risk.overallRiskScore === 'High' || risk.riskLevel === 3
    );
  }

  /**
   * Get sustainability metrics
   */
  public getSustainabilityMetrics(): SustainabilityMetrics {
    const cacheKey = 'sustainability_metrics';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, sustainabilityMetrics);
    this.lastUpdated.set(cacheKey, new Date());
    
    return sustainabilityMetrics;
  }

  /**
   * Get digital procurement data
   */
  public getDigitalProcurement(): DigitalProcurement {
    const cacheKey = 'digital_procurement';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, digitalProcurement);
    this.lastUpdated.set(cacheKey, new Date());
    
    return digitalProcurement;
  }

  /**
   * Get supplier alerts
   */
  public getSupplierAlerts(): typeof supplierAlerts {
    const cacheKey = 'supplier_alerts';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplierAlerts);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplierAlerts;
  }

  /**
   * Get active supplier alerts
   */
  public getActiveSupplierAlerts(): typeof supplierAlerts {
    return this.getSupplierAlerts().filter(alert => alert.status === 'Active');
  }

  /**
   * Get high-priority supplier alerts
   */
  public getHighPrioritySupplierAlerts(): typeof supplierAlerts {
    return this.getSupplierAlerts().filter(alert => 
      alert.severity === 'High' || alert.severity === 'Critical'
    );
  }

  /**
   * Get supplier insights
   */
  public getSupplierInsights(): typeof supplierInsights {
    const cacheKey = 'supplier_insights';
    
    if (this.isCacheValid(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    this.cache.set(cacheKey, supplierInsights);
    this.lastUpdated.set(cacheKey, new Date());
    
    return supplierInsights;
  }

  /**
   * Get diverse suppliers
   */
  public getDiverseSuppliers(): SupplierData[] {
    return this.getSupplierEcosystem().filter(supplier => 
      supplier.diversityClassification !== 'Traditional Supplier'
    );
  }

  /**
   * Get suppliers by region
   */
  public getSuppliersByRegion(region: string): SupplierData[] {
    return this.getSupplierEcosystem().filter(supplier => 
      supplier.region === region
    );
  }

  /**
   * Get supplier count by status
   */
  public getSupplierCountByStatus(): { [key: string]: number } {
    const suppliers = this.getSupplierEcosystem();
    return suppliers.reduce((acc, supplier) => {
      acc[supplier.status] = (acc[supplier.status] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
  }

  /**
   * Validate supplier data
   */
  private validateSupplierData(data: SupplierData[]): DataValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    data.forEach((supplier, index) => {
      if (!supplier.id || !supplier.name || !supplier.code) {
        errors.push(`Invalid supplier data at index ${index}: missing required fields`);
      }
      
      if (supplier.businessVolume <= 0) {
        warnings.push(`Supplier ${supplier.name} has invalid business volume`);
      }
      
      if (new Date(supplier.contractEndDate) <= new Date()) {
        warnings.push(`Supplier ${supplier.name} contract has expired`);
      }
      
      if (!supplier.keyContacts || supplier.keyContacts.length === 0) {
        warnings.push(`Supplier ${supplier.name} has no key contacts`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}

// Export singleton instance
export const walmartDataService = WalmartDataService.getInstance();
