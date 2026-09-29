'use client';
import {useState} from 'react';
import {AnimatePresence,motion,useReducedMotion} from 'motion/react';
import {ArrowLeft,ArrowRight,ArrowUpRight} from 'lucide-react';
import {site} from '@/lib/site';
import {Eyebrow} from './ui';
export const reviews=[
'From the ambience to the service, everything felt premium and thoughtfully done. The team understood exactly what I wanted and made the entire experience comfortable.',
'A beautiful salon with a very professional team. I loved the attention to detail and the way they took time to understand the look I wanted.',
'One of my favourite salon experiences in Barrackpore. The ambience is beautiful, the staff is welcoming and the service feels genuinely personal.',
'I came for grooming and was really impressed by the consultation, cleanliness and overall experience. Touch of Saien genuinely feels like a modern unisex salon.',
'The transformation was exactly what I was hoping for. Professional, comfortable and beautifully executed from start to finish.',
'Touch of Saien has such a warm and premium atmosphere. From hair and grooming to beauty services, everything feels carefully handled.'
];
export default function Reviews(){const [index,setIndex]=useState(0);const reduced=useReducedMotion();return <section className="reviews section" id="reviews"><div className="reviews-heading"><Eyebrow>CLIENT LOVE</Eyebrow><h2>The Saien experience,<br/><em>told by you.</em></h2><p className="sample-label">DESIGN PREVIEW · SAMPLE TESTIMONIALS</p></div><div className="review-body"><span className="quote-mark" aria-hidden="true">“</span><AnimatePresence mode="wait"><motion.blockquote key={index} initial={reduced?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.25}}>{reviews[index]}</motion.blockquote></AnimatePresence><div className="review-meta"><span className="sample-avatar">S{index+1}</span><span>SAMPLE REVIEW {String(index+1).padStart(2,'0')}<small>Illustrative copy supplied for the design · not a verified customer review</small></span><div className="review-controls"><button className="icon-button" onClick={()=>setIndex((index+reviews.length-1)%reviews.length)} aria-label="Previous review"><ArrowLeft/></button><button className="icon-button" onClick={()=>setIndex((index+1)%reviews.length)} aria-label="Next review"><ArrowRight/></button></div></div><div className="review-links"><a className="text-link" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Read our Google reviews <ArrowUpRight size={17}/></a><a className="text-link" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Share your experience <ArrowUpRight size={17}/></a></div></div></section>}
