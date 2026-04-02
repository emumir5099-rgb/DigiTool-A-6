import React from 'react';

const StatsSection = () => {
    return (
        <div className='bg-[#7C3AED] py-12'>
            <div className='container mx-auto px-4 md:px-10'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20'>
                    
                    {/* Active Users */}
                    <div className='text-center text-white'>
                        <h2 className='text-4xl md:text-5xl font-bold'>50K+</h2>
                        <p className='text-purple-100 mt-2 font-medium'>Active Users</p>
                    </div>

                    {/* Divider (Only for Desktop) */}
                    <div className='hidden md:block h-16 w-[1px] bg-purple-300 opacity-50'></div>

                    {/* Premium Tools */}
                    <div className='text-center text-white'>
                        <h2 className='text-4xl md:text-5xl font-bold'>200+</h2>
                        <p className='text-purple-100 mt-2 font-medium'>Premium Tools</p>
                    </div>

                    {/* Divider (Only for Desktop) */}
                    <div className='hidden md:block h-16 w-[1px] bg-purple-300 opacity-50'></div>

                    {/* Rating */}
                    <div className='text-center text-white'>
                        <h2 className='text-4xl md:text-5xl font-bold'>4.9</h2>
                        <p className='text-purple-100 mt-2 font-medium'>Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatsSection;