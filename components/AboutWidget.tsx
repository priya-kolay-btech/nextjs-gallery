'use client'
import React, { useState } from 'react'
const tabs = ['About Me','Experiences','Recommended']
export default function AboutWidget(){
 const [active,setActive]=useState(0)
 return(<div className="bg-[#2f3436] rounded-2xl p-6 shadow-neumorph-out border border-gray-700/40">
 <div className="flex gap-3">{tabs.map((t,i)=>(<button key={t} onClick={()=>setActive(i)} className={active===i?'bg-[#1f2022] text-white px-6 py-2 rounded-full':'text-gray-300 px-6 py-2'}>{t}</button>))}</div>
 <div className="mt-6 bg-[#2a2f30] p-6 rounded-xl text-gray-300 text-sm leading-relaxed h-56 overflow-hidden">
 {active===0&&<p>As a third-year student at the Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, I have a deep interest in Full Stack, Data Science, Machine Learning.  I like investigating the relationship between data, algorithms, and practical problem-solving.  I'm interested in end-to-end development of intelligent systems, as well as data analysis, predictive modelling, and AI-driven applications.  In addition to my proficiency with Python, SQL, and web technologies, I am constantly improving my knowledge of **ML frameworks** such as TensorFlow, Scikit-learn, and PyTorch.  I enjoy working on projects that turn unprocessed data into insights that can be put to use.  My approach to technology is motivated by teamwork, creativity, and ongoing education.  My goal is to help create meaningful, data-driven solutions that have an impact.  I'm currently using hackathons, open-source projects, and internships to expand my portfolio.</p>}{active===1&&<p>investigating every stage of the development of data-driven applications, from gathering and preprocessing data to deploying models.

 obtaining practical experience in Full Stack Web Development, Deep Learning, and Machine Learning.

 competent in Scikit-learn, TensorFlow, Flask, Pandas, NumPy, Python, SQL, and React.

 constructing and implementing complete machine learning projects and incorporating models into dynamic web applications.

 working on initiatives that enhance decision-making by drawing conclusions from data.

 taking part in cooperative research projects, open-source contributions, and hackathons.

 enthusiastic about applying AI and data-driven technologies to solve practical issues.

 continuously gaining knowledge of new frameworks and tools to improve technical and analytical abilities.</p>}{active===2&&<p>enthusiastic about using Full Stack Development and Machine Learning to create data-driven, intelligent solutions.
 competent in Scikit-learn, TensorFlow, Flask, Pandas, NumPy, Python, SQL, and React.
 knowledgeable about ML projects from start to finish, including data preprocessing, model training, and deployment.
 competent in extracting useful insights through model optimisation, data analysis, and visualisation.
 actively participating in hackathons, open-source projects, and cooperative efforts to expand technical knowledge.
 devoted to lifelong learning and innovation, using AI to address practical problems.
 investigating how web technologies, product development, and data science can work together to produce significant solutions.</p>}
 </div></div>) }