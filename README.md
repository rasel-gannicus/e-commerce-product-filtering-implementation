# E-commerce Product Filtering System

A modern, responsive e-commerce product filtering system built with Next.js and TypeScript. This project demonstrates advanced filtering capabilities, state management, and shopping cart functionality.


## 🌟 Features

### Product Filtering
- Multi-criteria filtering system (Category, Brand, Price Range, Rating, etc.)
- Combinable filters with real-time updates
- Active filters display with individual removal
- Clear all filters functionality
- Dynamic filter count updates

### Product Display & Sorting
- Multiple sorting options (Price, Newest, Rating, Popularity)
- Grid/List view toggle
- Flexible items per page (12/24/36/48)
- Responsive product cards with detailed information

### Shopping Features
- Shopping cart functionality with quantity management
- Wishlist system with persistent state
- Real-time cart count updates
- Prevent duplicate items in cart

### Technical Features
- Redux state management
- TypeScript implementation
- Responsive design
- Performance optimized filtering
- SEO friendly

## 🚀 Live Demo

[View Live Demo](https://softwind-tech-product-filtering-web-page.vercel.app/)

## 🛠 Tech Stack

- Next.js 13
- TypeScript
- Redux Toolkit
- Tailwind CSS
- React Icons
- React Hot Toast

## 💻 Getting Started

### Prerequisites

- Node.js (v16.8 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/rasel-gannicus/e-commerce-product-filtering-implementation.git
```


2. Rename the .env.example file to .env.local

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
 ```

5. Open http://localhost:3000 in your browser
## 🏗 Project Structure
```plaintext
src/
├── app/                 # Next.js app directory
│   ├── _components/    # Shared components
│   ├── _container/     # Container components
│   └── page.tsx        # Main page
├── Redux/              # Redux store and slices
├── utils/              # Utility functions
└── types/              # TypeScript types
 ```

 ## 🔧 Configuration
The project uses various configuration files:

- next.config.js - Next.js configuration
- tailwind.config.js - Tailwind CSS configuration
- tsconfig.json - TypeScript configuration
## 📱 Responsive Design
The application is fully responsive and works across:

- Desktop (1024px and above)
- Tablet (768px to 1023px)
- Mobile (below 768px)
## ⚡ Performance
- Optimized filtering logic
- Lazy loading images
- Memoized components
- Efficient state updates
## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.


## 👤 Author
Shafiqul Hasan Rasel

- GitHub: @rasel-gannicus
- LinkedIn: https://www.linkedin.com/in/shafiq5russell/