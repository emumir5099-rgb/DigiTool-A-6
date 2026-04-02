import ProductCard from "./ProductCard";

const ProductContainer = ({ handleAddToCart }) => {

  const products = [
    { 
      id: 1, 
      name: "AI Writing Pro", 
      description: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      price: 29, 
      billing: "/Mo", 
      badge: "Best Seller", 
      icon: "/my-devTool-assignment/src/assets/products/writing.png",
      features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"]
    },
    { 
      id: 2, 
      name: "Design Templates Pack", 
      description: "2000+ premium templates for social media, presentations, and marketing materials.",
      price: 49, 
      billing: "/One-Time", 
      badge: "Popular", 
      icon: "/my-devTool-assignment/src/assets/products/writing_2327400 1.png",
      features: ["2000+ templates", "Monthly updates", "Commercial license"]
    },
    { 
      id: 3, 
      name: "Premium Stock Assets", 
      description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: 19, 
      billing: "/Mo", 
      badge: "New", 
      icon: "/my-devTool-assignment/src/assets/products/writing_2327400 1.png",
      features: ["10M+ assets", "Commercial use", "No attribution"]
    },
    { 
      id: 4, 
      name: "Automation Toolkit", 
      description: "Automate repetitive tasks and streamline your workflow with powerful tools.", 
      price: 79, 
      billing: "/Mo", 
      badge: "Popular", 
      icon: "/my-devTool-assignment/src/assets/products/writing_2327400 1.png", 
      features: ["50+ automations", "API access", "Custom workflows"] 
    }, 
    { 
      id: 5, 
      name: "Resume Builder Pro", 
      description: "Create professional resumes and cover letters that land interviews.", 
      price: 15, 
      billing: "/One-Time", 
      badge: "New", 
      icon: "/my-devTool-assignment/src/assets/products/writing_2327400 1.png", 
      features: ["100+ templates", "ATS optimization", "Export to PDF"] 
    }, 
    { 
      id: 6, 
      name: "Social Media Content Kit", 
      description: "Complete toolkit for creating engaging social media content across all platforms.", 
      price: 39, 
      billing: "/Mo", 
      badge: "Best Seller", 
      icon: "/my-devTool-assignment/src/assets/products/writing_2327400 1.png", 
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"]  
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {products.map(product => (
        <ProductCard 
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductContainer;