import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Banner from "./components/navbar/banner/Banner";
import StatsSection from "./components/navbar/banner/StateSection";
import ProductContainer from "./ProductContainer/ProductContainer";
import GetStarted from "./components/navbar/GetStarted";
import Pricing from "./components/navbar/Pricing";

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.error("Already added!");
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed from cart!");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout complete!");
  };

  return (
    <>
      <Navbar cart={cart} setActiveTab={setActiveTab} />
      <Banner />
      <StatsSection />

      <div className="container mx-auto px-4 lg:px-10 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-6">Premium Digital Tools</h2>

          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2 rounded-full font-bold border ${
                activeTab === 'products' ? 'bg-purple-600 text-white' : ''
              }`}
            >
              Products
            </button>

            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-8 py-2 rounded-full font-bold border ${
                activeTab === 'cart' ? 'bg-purple-600 text-white' : ''
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        
        {activeTab === 'products' ? (
          <ProductContainer handleAddToCart={handleAddToCart} />
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-center py-10">Cart is empty!</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center bg-white p-5 rounded-2xl shadow border">
                    <div className="flex items-center gap-4">
                      <img src={item.icon} className="w-12 h-12" alt="" />
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-purple-600">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="btn btn-sm btn-error text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="text-center mt-6">
                  <button onClick={handleCheckout} className="px-8 py-3 bg-green-600 text-white rounded-full font-bold">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}

       
        <div className="mt-20">
             <GetStarted />
        </div>

        <div className="mt-20">
             <Pricing/>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
}

export default App;