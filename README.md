# EcoBottle - Eco-Friendly Smart Water Bottles

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A modern e-commerce platform for premium eco-friendly water bottles with smart hydration technology. Every purchase helps plant trees and promote sustainable living.

## 🌟 Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse 6 different bottle models with detailed specifications
- **Smart Filtering**: Filter by color and sort by price or name
- **Shopping Cart**: Add to cart and seamless checkout process
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🌱 Eco-Friendly Mission
- **Sustainable Materials**: Made from recycled stainless steel and biodegradable components
- **Social Impact**: Every purchase plants a tree through our partnership with environmental organizations
- **Carbon Neutral**: Environmentally conscious manufacturing and shipping processes

### 💧 Smart Technology
- **24-Hour Insulation**: Advanced double-wall vacuum insulation keeps drinks cold
- **Hydration Reminders**: Built-in LED indicators with customizable intervals
- **Mobile Integration**: Pro models sync with our mobile app for personalized hydration tracking

## 🛒 Product Line

| Model | Price | Capacity | Key Features | Color Options |
|-------|-------|----------|-------------|---------------|
| **EcoBottle Classic** | $49.99 | 500ml | 24-hour cold retention, Smart LED reminder, BPA-free | Ocean Blue |
| **EcoBottle Pro** | $69.99 | 750ml | 36-hour temperature retention, Mobile app sync, Premium finish | Forest Green |
| **EcoBottle Mini** | $34.99 | 350ml | 18-hour cold retention, Kid-friendly design, Leak-proof | Sunset Orange |
| **EcoBottle Sport** | $59.99 | 600ml | 24-hour cold retention, Anti-slip grip, Quick-flow spout | Midnight Black |
| **EcoBottle Luxury** | $89.99 | 500ml | 48-hour temperature retention, Gold-plated accents, Custom engraving | Rose Gold |
| **EcoBottle Travel** | $54.99 | 400ml | 20-hour insulation, Collapsible design, TSA-friendly | Arctic White |

## 🚀 Technology Stack

### Frontend
- **React 18.3.1** - Component-based UI library
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Fast build tool and dev server

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer** - Vendor prefixing

### Routing & State Management
- **React Router DOM 7.8.2** - Client-side routing
- **React Context API** - State management (Auth & Cart contexts)

### Icons & UI
- **Lucide React 0.344.0** - Beautiful icon library

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eco_bottle
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Contact.tsx     # Contact form component
│   ├── Features.tsx    # Product features showcase
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── ProtectedRoute.tsx # Route protection
│   └── Testimonials.tsx # Customer testimonials
├── contexts/           # React Context providers
│   ├── AuthContext.tsx # Authentication state
│   └── CartContext.tsx # Shopping cart state
├── pages/              # Page components
│   ├── Checkout.tsx    # Checkout page
│   ├── Home.tsx        # Home/Landing page
│   ├── Login.tsx       # Login page
│   ├── Products.tsx    # Product catalog
│   └── Register.tsx    # Registration page
├── App.tsx             # Main application component
├── index.css           # Global styles
├── main.tsx            # Application entry point
└── vite-env.d.ts       # Vite environment types
```

## 🛠️ Development

### Building for Production

```bash
npm run build
```

This command creates a `dist` folder with optimized production files ready for deployment.

### Code Quality

```bash
npm run lint
```

Runs ESLint to ensure code quality and consistency.

## 🤝 Contributing

We welcome contributions to make EcoBottle even better! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌍 Our Impact

Since launch, EcoBottle has:
- 🌳 Planted over 1,000,000 trees worldwide
- 🤝 Served 50,000+ happy customers
- 🌟 Maintained a 99% customer satisfaction rate
- ⚡ Provided 24/7 customer support

Join us in our mission to make hydration sustainable and smart!

---

**EcoBottle** - Hydrate Smart, Live Green 🌱💧
# eco_bottle
