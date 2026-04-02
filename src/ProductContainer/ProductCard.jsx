import React from 'react';

const ProductCard = ({ product, handleAddToCart }) => {
    const { name, description, price, billing, badge, icon, features } = product;

    // ব্যাজের নাম অনুযায়ী আলাদা আলাদা কালার সেট করার ফাংশন
    const getBadgeColor = (badgeName) => {
        switch (badgeName) {
            case 'Best Seller':
                return 'bg-orange-100 text-orange-600'; // কমলা রঙ
            case 'Popular':
                return 'bg-purple-100 text-purple-600'; // বেগুনি রঙ
            case 'New':
                return 'bg-green-100 text-green-600';   // সবুজ রঙ
            default:
                return 'bg-blue-100 text-blue-600';    // ডিফল্ট নীল রঙ
        }
    };

    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border relative flex flex-col h-full hover:shadow-md transition-shadow">
            {/* ডাইনামিক ব্যাজ কালার এখানে অ্যাপ্লাই করা হয়েছে */}
            {badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${getBadgeColor(badge)}`}>
                    {badge}
                </span>
            )}

            <div className="mb-4">
                <img src={icon} alt={name} className="w-12 h-12 mb-4 object-contain" />
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4 flex-grow">
                {description}
            </p>

            <div className="mb-4">
                <span className="text-2xl font-bold">${price}</span>
                <span className="text-gray-400 text-sm">{billing}</span>
            </div>

            <ul className="space-y-2 mb-6">
                {features?.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <button 
                onClick={() => handleAddToCart(product)}
                className="w-full py-3 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 transition-colors"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;