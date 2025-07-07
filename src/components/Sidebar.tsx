'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Package, 
  ShoppingCart,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui';

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'market-intelligence', label: 'Market Intelligence', icon: TrendingUp },
  { id: 'planning-plm', label: 'Planning & PLM', icon: Calendar },
  { id: 'demand-pricing', label: 'Demand & Pricing', icon: DollarSign },
  { id: 'inventory-allocation', label: 'Inventory & Allocation', icon: Package },
  { id: 'digital-buying', label: 'Digital Buying', icon: ShoppingCart },
];

export default function Sidebar({ activeModule, onModuleChange }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <h1 className="text-xl font-bold">Retail-Insight</h1>
        </div>
        
        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeModule === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onModuleChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }
                    `}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
