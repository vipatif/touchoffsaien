import type {Metadata} from 'next';
import Booking from '@/components/Booking';
import PageHero from '@/components/PageHero';
import {Location,Map} from '@/components/Footer';
export const metadata:Metadata={title:'Visit & Book | Touch of Saien, Barrackpore',description:'Request your salon appointment on WhatsApp or call 6291949526. Visit Touch of Saien on SN Banerjee Rd, behind Great Eastern Trading, Barrackpore 700120.',alternates:{canonical:'/visit/'}};
export default function VisitPage(){return <><PageHero label="VISIT & BOOK" title="Make time" italic="for yourself." description="Your next look starts with a conversation. Find us in Barrackpore, and let us take care of the details." image="entrance"/><Booking/><Location/><Map/></>}
