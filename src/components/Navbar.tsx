'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Haider Wain</div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>        
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  )
}
