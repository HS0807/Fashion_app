"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-neutral-primary w-full z-20 top-0 inset-s-0">
            <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="self-center text-lg sm:text-2xl md:text-3xl text-heading font-black">
                        FASHION
                    </Link>
                </div>

                <div className="flex items-center">
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-tertiary"
                        aria-controls="mobile-menu"
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className={`hidden md:block`}>
                        <ul className="flex items-center space-x-6 text-sm md:text-base font-medium">
                            <li>
                                <a href="#" className="py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand">CATALOGS</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 hover:text-fg-brand">FASHION</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 hover:text-fg-brand">FAVOURITE</a>
                            </li>
                            <li>
                                <a href="#" className="py-2 px-3 hover:text-fg-brand">LIFESTYLE</a>
                            </li>
                            <li>
                                <Link href="/signup" className="py-2 px-3 bg-black text-white rounded">SIGN UP</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`${open ? 'block' : 'hidden'} md:hidden px-4 pb-4`} id="mobile-menu">
                <ul className="space-y-2 font-medium bg-neutral-secondary-soft rounded-md p-3">
                    <li>
                        <a href="#" className="block py-2 px-3 rounded bg-brand">CATALOGS</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded">FASHION</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded">FAVOURITE</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded">LIFESTYLE</a>
                    </li>
                    <li>
                        <Link href="/signup" className="block py-2 px-3 bg-black text-white rounded">SIGN UP</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
