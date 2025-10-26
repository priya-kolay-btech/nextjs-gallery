'use client'
import AboutWidget from '../components/AboutWidget'
import GalleryWidget from '../components/GalleryWidget'

export default function Page() {
  return (
    <main className="grid grid-cols-12 gap-6">
      <div className="col-span-7 p-6 rounded-2xl border border-gray-600/40 h-[800px] hidden md:block"/>
      <div className="col-span-5 space-y-6"><AboutWidget/><GalleryWidget/></div>
    </main>
  )
}