import React from "react";

export default function ModeForm({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="bg-white w-full py-20 max-w-3xl mx-4 rounded-lg shadow-lg relative p-20">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black text-3xl"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-secondary">Contact us</h2>
              <p className="text-gray-600 mt-2 text-sm">
                Are you interested in our services? Fill out the short form and
                we will contact you soon.
              </p>
            </div>

            <form
              action="https://formsubmit.co/c1d43152b428ec51129c2dd47b1799b0"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone contact*"
                  required
                  className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <textarea
                name="report"
                placeholder="Report"
                rows="4"
                className="w-full border border-primary px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="policy" required />
                <label htmlFor="policy" className="text-sm text-gray-700">
                  I have read the Personal Data Processing Policy
                </label>
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Request from RabotaNet"
              />
              <input type="hidden" name="_next" value="https://rabotanet.com" />

              <button
                type="submit"
                className="bg-primary cursor-pointer text-white px-8 py-2 rounded hover:bg-secondary duration-300"
              >
                Send →
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
