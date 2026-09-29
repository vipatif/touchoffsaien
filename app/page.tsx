import SignatureArrival from '@/components/SignatureArrival';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Reviews from '@/components/Reviews';
import {HorizontalEdit,FeaturedFilm,Transformations,Unisex,Experience,Academy} from '@/components/Editorial';
import {Location} from '@/components/Footer';
import Hero from '@/components/Hero';
import {Reveal,Eyebrow,Photo,LinkButton} from '@/components/ui';
export default function Home(){return <><SignatureArrival/><Hero/><Marquee/><section id="about" className="story section"><Reveal className="story-photo"><Photo name="reception" alt="Blush arches, marble and the original Touch of Saien reception desk"/><span className="image-note">A SPACE TO FEEL LIKE YOURSELF.</span></Reveal><Reveal className="story-copy"><Eyebrow>01 / DISCOVER SAIEN</Eyebrow><h2>More than<br/>just a <em>salon.</em></h2><p className="lead">A little time for yourself.<br/>A beautiful way to feel more you.</p><p>Welcome to Touch of Saien. A warm, considered space in Barrackpore where expert styling meets personal care. For her, for him, for the whole family.</p><p>From the first consultation to the finishing touch, we bring together modern techniques, thoughtful hygiene and an eye for what makes you, you.</p><LinkButton href="#services" className="underlined">Discover your experience</LinkButton></Reveal></section><Services/><Gallery/><HorizontalEdit/><Transformations/><FeaturedFilm/><Unisex/><Experience/><Academy/><Reviews/><Booking/><Location/></>}
