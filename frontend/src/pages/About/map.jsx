import React from 'react'

const Map = () => {
  return (
    <section className='bg-slate-900 bg-opacity-40'>
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 lg:py-20 lg:px-8 h-auto md:h-[88vh]">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-300">Visit Our Location | Foodie</h2>
          <p className="mt-4 text-lg md:text-xl text-white font-semibold">Search us on Map</p>
        </div>
        <div className="mt-8 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%" height="400" style={{ border: 'none' }} loading="lazy"></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden bg-opacity-10 bg-gray-800 p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-white">Our Address</h3>
                  <p className="mt-1 text-slate-200">G.B.P.U.A.T Pantnagar</p>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="text-lg font-medium text-white">Hours</h3>
                  <p className="mt-1 text-slate-200">Monday - Friday: 9am - 5pm</p>
                  <p className="mt-1 text-slate-200">Saturday: 10am - 4pm</p>
                  <p className="mt-1 text-slate-200">Sunday: Closed</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-medium text-white">Contact</h3>
                  <p className="mt-1 text-slate-200">Email: rawatisha001@gmail.com</p>
                  <p className="mt-1 text-slate-200">Phone: +91 8193064679</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map
