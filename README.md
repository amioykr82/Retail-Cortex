# Retail OS Dashboard

A comprehensive, scalable retail operations dashboard built with Next.js, TypeScript, and Tailwind CSS. This enterprise-level application provides multiple business modules for retail management including dashboard analytics, market intelligence, planning & PLM, demand & pricing, inventory & allocation, and digital buying.

## Features

### 🎯 Core Modules
- **Dashboard**: Overview of key retail metrics and KPIs
- **Market Intelligence**: Competitive analysis and market insights  
- **Planning & PLM**: Product lifecycle management and planning
- **Demand & Pricing**: Demand forecasting and pricing optimization
- **Inventory & Allocation**: Inventory management and allocation optimization
- **Digital Buying**: Supplier management and procurement analytics

### 🛠 Technical Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Utilities**: clsx for conditional styling

### 📱 Features
- Responsive design for desktop and mobile
- Interactive charts and data visualizations
- Modular component architecture
- Mock data services for development
- Enterprise-ready UI components

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main application page
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   │   ├── Card.tsx       # Card component
│   │   ├── Button.tsx     # Button component
│   │   └── index.ts       # Component exports
│   ├── pages/             # Module pages
│   │   ├── DashboardPage.tsx
│   │   ├── MarketIntelligencePage.tsx
│   │   ├── PlanningPLMPage.tsx
│   │   ├── DemandPricingPage.tsx
│   │   ├── InventoryAllocationPage.tsx
│   │   └── DigitalBuyingPage.tsx
│   └── Sidebar.tsx        # Navigation sidebar
└── data/
    └── mockData.ts        # Mock data for development
```

## Module Details

### Dashboard
- Revenue trends and KPI cards
- Sales performance charts
- Market segment analysis
- Inventory overview by category

### Market Intelligence
- Competitive landscape analysis
- Market trend tracking
- Segment performance metrics
- Position monitoring

### Planning & PLM
- Product lifecycle distribution
- Seasonal planning overview
- Development timeline tracking
- Budget vs actual analysis

### Demand & Pricing
- Demand forecasting with confidence intervals
- Price elasticity analysis
- Pricing optimization recommendations
- Revenue opportunity identification

### Inventory & Allocation
- Stock levels by location
- Category performance tracking
- Allocation vs received analysis
- Turnover rate monitoring

### Digital Buying
- Supplier performance metrics
- Order volume and value trends
- Quality and delivery tracking
- Procurement spend analysis

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Technologies

- **Next.js 15**: Latest version with App Router and Turbopack support
- **Tailwind CSS v4**: Latest version with improved PostCSS integration
- **TypeScript**: Full type safety throughout the application
- **Recharts**: Comprehensive charting library for data visualization
- **Lucide React**: Beautiful, customizable icons

### Design System

The application uses a custom design system built on Tailwind CSS with:
- Consistent color palette (blue primary, gray neutrals)
- Responsive grid layouts
- Standardized spacing and typography
- Accessible UI components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team.
