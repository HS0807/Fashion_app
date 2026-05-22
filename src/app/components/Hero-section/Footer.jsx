import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start">
          <div className="space-y-6 lg:col-span-2 text-center md:text-left mx-auto md:mx-0">
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-[0.12em] text-white">
                FASHION
              </h2>
              <p className="mt-4 max-w-full sm:max-w-sm md:max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-base text-[#8E8E8E] leading-6 md:leading-7">
                Complete your style with awesome <br/>clothes from us.
              </p>
            </div>
            <div className="space-y-3">
            
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3  ">
                <a href="#" className="inline-flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-[#EBD96B] text-black transition hover:bg-slate-700 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
                </a>
                <a href="#" className="inline-flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-[#EBD96B] text-black transition hover:bg-slate-700 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
                </a>
                <a href="#" className="inline-flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-[#EBD96B] text-black transition hover:bg-slate-700 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
                </a>
                <a href="#" className="inline-flex h-10 sm:h-11 w-10 sm:w-11 items-center justify-center rounded-xl bg-[#EBD96B] text-black transition hover:bg-slate-700 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn className="h-4 sm:h-5 w-4 sm:w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="">
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-sm font-roboto tracking-[0.16em] text-[#D9D9D9]">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm text-[#8E8E8E]">
              <li><a href="#" className="transition hover:text-white hover:underline">About</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">Contact us</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">Support</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">Careers</a></li>
            </ul>
          </div>

          <div className="">
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-sm font-roboto tracking-[0.16em] text-[#D9D9D9]">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm text-[#8E8E8E]">
              <li><a href="#" className="transition hover:text-white hover:underline">Share Location</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">Orders Tracking</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">Size Guide</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div className="">
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-sm font-roboto tracking-[0.16em] text-[#D9D9D9]">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-sm text-[#8E8E8E]">
              <li><a href="#" className="transition hover:text-white hover:underline">Terms &amp; Conditions</a></li>
              <li><a href="#" className="transition hover:text-white hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  )
}
