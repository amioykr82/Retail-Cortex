'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardPage from '@/components/pages/DashboardPage';
import MarketIntelligencePage from '@/components/pages/MarketIntelligencePage';
import PlanningPLMPage from '@/components/pages/PlanningPLMPage';
import DemandPricingPage from '@/components/pages/DemandPricingPage';
import InventoryAllocationPage from '@/components/pages/InventoryAllocationPage';
import DigitalBuyingPage from '@/components/pages/DigitalBuyingPage';

export default function Home() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardPage />;
      case 'market-intelligence':
        return <MarketIntelligencePage />;
      case 'planning-plm':
        return <PlanningPLMPage />;
      case 'demand-pricing':
        return <DemandPricingPage />;
      case 'inventory-allocation':
        return <InventoryAllocationPage />;
      case 'digital-buying':
        return <DigitalBuyingPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      
      <main className="flex-1 overflow-auto lg:ml-0">
        <div className="p-6 lg:p-8 pt-16 lg:pt-6">
          {renderActiveModule()}
        </div>
      </main>
    </div>
  );
}
