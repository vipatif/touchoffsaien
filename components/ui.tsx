'use client';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function Reveal({children,className=''}:{children:ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.8,ease:[.2,.65,.3,1]}}>{children}</motion.div>}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow">{children}</p>}
export function LinkButton({children,href,className=''}:{children:ReactNode;href:string;className?:string}){return <a className={`button ${className}`} href={href}>{children}<ArrowUpRight size={18}/></a>}
export function Photo({name,alt,className='',eager=false}:{name:string;alt:string;className?:string;eager?:boolean}){return <img className={className} src={`/media/${name}-1200.webp`} srcSet={`/media/${name}-640.webp 640w, /media/${name}-1200.webp 1200w, /media/${name}-1920.webp 1920w`} sizes="(max-width: 700px) 100vw, 60vw" alt={alt} loading={eager?'eager':'lazy'} decoding="async"/>}
