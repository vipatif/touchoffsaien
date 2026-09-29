import type {Metadata} from 'next';
import PageHero from '@/components/PageHero';
import Gallery from '@/components/Gallery';
import {FeaturedFilm,Transformations} from '@/components/Editorial';
export const metadata:Metadata={title:'The Saien Edit | Touch of Saien Gallery & Films',description:'Explore Touch of Saien salon interiors, real work videos, photo stories and transformation inspiration from this premium unisex salon in Barrackpore.',alternates:{canonical:'/the-edit/'}};
export default function EditPage(){return <><PageHero label="THE SAIEN EDIT" title="Work in motion" italic="beautifully framed." description="Salon films, editorial interiors and space for fresh client work as the Touch of Saien portfolio grows." image="lounge"/><Gallery standalone/><FeaturedFilm/><Transformations/></>}
