'use client';
import {useEffect,useState} from 'react';

/** A brief, once-per-session arrival. The page is never blocked from loading. */
export default function SignatureArrival(){
 const [dismissed,setDismissed]=useState(false);
 useEffect(()=>{
   if(!document.documentElement.hasAttribute('data-saien-arrival'))return;
   const timer=window.setTimeout(()=>{setDismissed(true);document.documentElement.removeAttribute('data-saien-arrival')},1650);
   return()=>window.clearTimeout(timer);
 },[]);
 function dismiss(){setDismissed(true);document.documentElement.removeAttribute('data-saien-arrival')}
 if(dismissed)return null;
 return <div className="signature-arrival" aria-label="Welcome to Touch of Saien">
   <span className="arrival-corner">BARRACKPORE / A MOMENT FOR YOU</span>
   <div className="arrival-signature"><div className="arrival-mark"><img src="/media/original-mark.webp" width="390" height="675" alt="Original Touch of Saien TS logo"/></div><p>TOUCH OF SAIEN</p><span>FAMILY SALON & ACADEMY</span><em>Make yourself beautifully at home.</em><i/></div>
   <button onClick={dismiss} className="arrival-skip">Enter the experience <span aria-hidden="true">↗</span></button>
 </div>
}
