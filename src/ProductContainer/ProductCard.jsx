const ProductCard = ({ product, handleAddToCart }) => {

    const badgeStyle = 
        product.badge === 'Best Seller' ? 'bg-orange-100 text-orange-600' :
        product.badge === 'Popular' ? 'bg-purple-100 text-purple-600' :
        'bg-green-100 text-green-600';

    return (
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 relative flex flex-col justify-between hover:shadow-md transition-all">
            <span className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold ${badgeStyle}`}>
                {product.badge}
            </span>

            <div>
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                    <img src={product.icon} alt="" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-black text-gray-900">${product.price}</span>
                    <span className="text-gray-400">/Mo</span>
                </div>
            </div>

            <button 
                onClick={() => handleAddToCart(product)}
                className="w-full py-4 rounded-2xl font-bold bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-all"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;