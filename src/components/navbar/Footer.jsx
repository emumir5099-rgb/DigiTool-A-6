import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white pt-20 pb-10 px-4 lg:px-10 border-t border-purple-900/30">
      <div className="container mx-auto max-w-7xl">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight">
              DigiTools
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 Digitools. All rights reserved.
          </p>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;