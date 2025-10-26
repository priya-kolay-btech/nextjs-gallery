'use client'
import React,{useRef,useState}from'react'
import ImageCard from'./ImageCard'
export default function GalleryWidget(){
const[images,setImages]=useState(['/images/sample1.jpg','/images/sample2.jpg','/images/sample3.jpg'])
const scrollerRef=useRef(null)
const fileRef=useRef(null)
function handleAdd(){fileRef.current?.click()}
//function handleFile(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=(ev)=>setImages(s=>[ev.target.result,...s]);r.readAsDataURL(f)}
function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
  const f = e.target.files && e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = (ev) => {
    // The 'result' is (string | ArrayBuffer) | null, so type guard is required
    const result = ev.target && ev.target.result;
    if (typeof result === "string") {
      setImages(s => [result, ...s]);
    }
  };
  r.readAsDataURL(f);
}








function scroll(d){const el=scrollerRef.current;if(!el)return;const step=el.clientWidth/2;el.scrollBy({left:d==='left'?-step:step,behavior:'smooth'})}
return(<div className="bg-[#2f3436] rounded-2xl p-6 shadow-neumorph-out border border-gray-700/40">
<div className="flex items-center justify-between"><div className="flex gap-3"><div className="w-7 h-7 bg-gray-700/20 rounded-full flex items-center justify-center text-gray-300">?</div><div className="px-5 py-2 rounded-full bg-[#131516] text-white font-semibold">Gallery</div></div>
<div className="flex gap-3"><button onClick={handleAdd} className="px-4 py-2 rounded-full bg-[#3a3f42] text-sm">+ ADD IMAGE</button>
<input ref={fileRef} type='file' accept='image/*' onChange={handleFile} className='hidden'/>
<button onClick={()=>scroll('left')} className='w-10 h-10 rounded-full bg-[#2b2f31]'>◀</button>
<button onClick={()=>scroll('right')} className='w-10 h-10 rounded-full bg-[#2b2f31]'>▶</button></div></div>
<div className="mt-5 border-t border-gray-700/40 pt-6"><div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-4">{images.map((src,i)=><div key={i}><ImageCard src={src}/></div>)}</div></div></div>) }