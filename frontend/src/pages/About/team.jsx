import React from 'react'

const team = () => {
  return (
    <>
    
    <div className="text-gray-700 body-font mt-10 bg-slate-800 bg-opacity-60">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-center text-4xl text-purple-200 font-bold md:text-4xl font-serif">Our Team</h2>
                <p className="text-purple-200 lg:w-8/12 lg:mx-auto">Foodie is not just a team its an emotion😌.
                We share special bond among ourselves.</p>
            </div>
            <div className="grid gap-12 items-center md:grid-cols-3">
                <div className="space-y-4 text-center">
                    <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                        src="src/assets/isha.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                    <div>
                        <h4 className="text-2xl font-bold text-slate-300">Isha Rawat</h4>
                        <span className="block text-sm text-gray-300 font-semibold ">CEO-Founder</span>
                    </div>
                </div>
                <div className="space-y-4 text-center">
                    <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                        src="src/assets/isha.jpg" alt="women" loading="lazy" width="1000" height="667"/>
                    <div>
                        <h4 className="text-2xl font-bold text-slate-300">Soniya Rawat</h4>
                        <span className="block text-sm text-gray-300 font-semibold">Managing Head</span>
                    </div>
                </div>
                <div className="space-y-4 text-center">
                    <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                        src="src/assets/isha.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                    <div>
                        <h4 className="text-2xl font-bold text-slate-300">Aastha Singh</h4>
                        <span className="block text-sm text-gray-300 font-semibold">Co-founder</span>
                    </div>
                </div>
            </div>
        </div>
    </div></>
  )
}

export default team;
