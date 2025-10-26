'use client'
export default function ImageCard({src}:{src:string}){
 return(<div className="relative w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-neumorph-in">
 <img src={src} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
 <div className="absolute inset-0 image-overlay hover:bg-[rgba(66,153,225,0.12)] transition-all"/> </div>) }