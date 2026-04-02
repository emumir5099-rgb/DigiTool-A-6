import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar'
import Banner from "./components/navbar/banner/Banner";
import StatsSection from "./components/navbar/banner/StateSection";
import ProductContainer from "./ProductContainer/ProductContainer";

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products'); // 'products' অথবা 'cart'

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart!");
  };

  return (
    <>
      {/* Navbar-এ setActiveTab পাঠিয়েছি যাতে আইকনে ক্লিক করলে কাজ হয় */}
      <Navbar cart={cart} setActiveTab={setActiveTab} />
      
      <Banner />
      <StatsSection />

      {/* মেইন সেকশন: এখানে বাটন দিয়ে টগল হবে */}
      <div className="container mx-auto px-4 lg:px-10 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6">Premium Digital Tools</h2>
          
          {/* তোমার সেই কাঙ্ক্ষিত ২টা বাটন */}
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2 rounded-full font-bold border ${activeTab === 'products' ? 'bg-purple-600 text-white' : 'bg-white text-gray-500 border-gray-200'}`}
            >
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2 rounded-full font-bold border ${activeTab === 'cart' ? 'bg-purple-600 text-white' : 'bg-white text-gray-500 border-gray-200'}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* কন্টেন্ট টগল লজিক */}
        {activeTab === 'products' ? (
          <ProductContainer handleAddToCart={handleAddToCart} />
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {cart.length === 0 ? <p className="text-center py-10">Cart is empty!</p> : 
              cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-sm border">
                  <div className="flex items-center gap-4">
                    <img src={item.icon} className="w-12 h-12" alt="" />
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-purple-600">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-error text-white">Delete</button>
                </div>
              ))
            }
          </div>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default App;