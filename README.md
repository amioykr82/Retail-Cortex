# 🧠 Retail Cortex

**Enterprise-grade retail operations platform with AI-driven analytics and insights**

A comprehensive, scalable retail operations dashboard built with Next.js, TypeScript, and Tailwind CSS. This enterprise-level application provides advanced analytics, AI-driven insights, and strategic decision-making tools across all aspects of retail operations.

## 🚀 Live Demo
- **Local Development**: `http://localhost:3000`
- **Production**: Ready for custom domain deployment
- **Repository**: [Retail-Insights](https://github.com/amioykr82/Retail-Insights-)
- **Domain Setup**: See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for custom domain configuration

## ✨ Features

### 🎯 Core Modules
- **📊 Dashboard**: Real-time KPIs and performance metrics with Walmart data integration
- **🏢 Market Intelligence**: Competitive analysis, SWOT analysis, and market positioning  
- **📋 Planning & PLM**: Product lifecycle management and strategic planning
- **💰 Demand & Pricing**: AI-driven demand forecasting and intelligent pricing optimization
- **📦 Inventory & Allocation**: Advanced inventory management and allocation optimization
- **🛒 Digital Buying**: Comprehensive supplier management and procurement analytics

### 🛠 Technical Stack
- **Framework**: Next.js 15.3.5 with Turbopack
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Runtime**: React 19
- **Utilities**: clsx for conditional styling

### 📱 Enterprise Features
- ✅ Responsive design for desktop and mobile
- ✅ Interactive charts and real-time data visualizations
- ✅ Modular component architecture
- ✅ Real Walmart data integration (100,000+ suppliers, $412B procurement)
- ✅ Enterprise-ready UI components
- ✅ 6-phase implementation methodology
- ✅ Comprehensive documentation

## 🚀 Quick Start

### Prerequisites
- **Node.js**: 18+ (recommended: 20+)
- **Package Manager**: npm, yarn, pnpm, or bun

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amioykr82/Retail-Insights-.git
   cd Retail-Insights-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🎯 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

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
