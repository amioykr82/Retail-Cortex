# Retail OS Dashboard - Copilot Instructions

## Project Overview
This is a comprehensive retail operations dashboard built with Next.js 15, TypeScript, and Tailwind CSS v4. The application provides enterprise-level business intelligence across six core modules: Dashboard, Market Intelligence, Planning & PLM, Demand & Pricing, Inventory & Allocation, and Digital Buying.

## Architecture & Code Organization

### Project Structure
- **src/app/**: Next.js App Router with layout.tsx and page.tsx
- **src/components/ui/**: Reusable UI components (Card, Button)
- **src/components/pages/**: Module-specific page components
- **src/components/Sidebar.tsx**: Main navigation component
- **src/data/mockData.ts**: Mock data for development and demos

### Key Technologies
- **Next.js 15**: App Router, Turbopack for dev server
- **TypeScript**: Strict typing throughout
- **Tailwind CSS v4**: Utility-first styling with PostCSS
- **Recharts**: Data visualization and charting
- **Lucide React**: Icon library
- **clsx**: Conditional class name utility

## Component Guidelines

### UI Components
- All UI components are in `src/components/ui/`
- Use TypeScript interfaces for all props
- Include proper accessibility attributes
- Use clsx for conditional styling
- Export components through `index.ts` barrel files

### Page Components
- Each module has its own page component in `src/components/pages/`
- Use 'use client' directive for client-side interactivity
- Follow consistent layout patterns with Cards and responsive grids
- Include proper loading states and error handling

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use consistent color palette: blue primary, gray neutrals
- Standard spacing: 4, 6, 8 for components; 16, 24 for layout
- Card components use shadow-sm and rounded-lg

### Data Management
- Mock data is centralized in `src/data/mockData.ts`
- Export data objects with TypeScript interfaces
- Use realistic data that represents enterprise scenarios
- Include growth percentages, trends, and comparative metrics

## Development Patterns

### State Management
- Use React useState for local component state
- Pass state down through props for module switching
- Consider React Context for complex shared state

### Error Handling
- Use TypeScript for compile-time error prevention
- Include proper error boundaries for runtime errors
- Validate data props with TypeScript interfaces

### Performance
- Use Next.js built-in optimizations
- Lazy load charts and heavy components
- Optimize images with Next.js Image component
- Use React.memo for expensive re-renders

## Specific Module Guidelines

### Dashboard Module
- Overview page with KPI cards and trend charts
- Use grid layouts for responsive design
- Include revenue, orders, margins, and customer metrics
- Mix of bar charts, line charts, and pie charts

### Market Intelligence
- Competitive analysis and market trends
- Include competitor comparisons and market share
- Use horizontal bar charts for competitor data
- Show growth trends and market positioning

### Planning & PLM
- Product lifecycle and seasonal planning
- Timeline visualizations and progress tracking
- Show planned vs actual metrics
- Include product development stages

### Demand & Pricing
- Forecasting and pricing optimization
- Use scatter plots for price elasticity
- Show confidence intervals in forecasts
- Include pricing recommendations with impact analysis

### Inventory & Allocation
- Stock levels and allocation performance
- Location-based inventory tracking
- Use progress bars for utilization
- Include turnover rates and stock alerts

### Digital Buying
- Supplier performance and procurement analytics
- Order volume trends and supplier scorecards
- Quality and delivery metrics
- Include cost savings and diversity metrics

## Code Quality Standards

### TypeScript
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use proper typing for React components and props
- Avoid `any` types; use specific interfaces

### React Best Practices
- Use functional components with hooks
- Implement proper key props for lists
- Use React.Fragment to avoid unnecessary divs
- Follow React naming conventions

### Accessibility
- Include proper ARIA labels
- Use semantic HTML elements
- Ensure keyboard navigation works
- Maintain proper color contrast ratios

### Testing Considerations
- Write tests for utility functions
- Test component rendering with different props
- Include integration tests for module switching
- Test responsive behavior across screen sizes

## File Naming Conventions
- Components: PascalCase (e.g., `DashboardPage.tsx`)
- Utilities: camelCase (e.g., `mockData.ts`)
- Use descriptive names that indicate component purpose
- Include `.tsx` extension for React components

## Comments and Documentation
- Include JSDoc comments for complex functions
- Document props interfaces with descriptions
- Add inline comments for complex business logic
- Keep README.md updated with setup instructions

## Future Enhancements
- Add real API integration points
- Implement user authentication and authorization
- Add data export capabilities
- Include real-time data updates
- Add customizable dashboard layouts
- Implement advanced filtering and search
