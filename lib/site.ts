export const site = {
  name: 'Touch of Saien',
  phone: '+916291949526',
  displayPhone: '+91 62919 49526',
  whatsapp: '916291949526',
  address: 'SN Banerjee Rd, Behind Great Eastern Trading, Near Vivo Service Centre, Barrackpore, West Bengal – 700120',
  mapQuery: 'Touch of Saien, SN Banerjee Rd, Behind Great Eastern Trading, Near Vivo Service Centre, Barrackpore, West Bengal 700120',
  mapsUrl: 'https://maps.app.goo.gl/ZokkiuUkXsUKKvg6A',
  // Set the real domain before a public production deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  hours: null as string | null,
  socials: [] as {label:string;url:string}[],
};
export const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
export const whatsapp = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
export const nav = [['Home','/'],['About','/our-story/'],['Services','/services/'],['Gallery','/the-edit/'],['Transformations','/#transformations'],['Academy','/academy/'],['Reviews','/#reviews'],['Contact','/visit/']];
export const services = [
  {name:'Hair',detail:'Cut. Colour. Character.',description:'Express yourself with precision cuts, dimensional colour, styling and restorative hair treatments.',image:'salon',items:'Haircuts · Styling · Colour · Treatments'},
  {name:'Skin',detail:'A little care. A lasting glow.',description:'Thoughtful skin care, tailored to your skin and a moment to slow down.',image:'lounge',items:'Facials · Skin care · Beauty rituals'},
  {name:'Makeup',detail:'You, in your best light.',description:'From softly polished to expressive evening looks, makeup that feels like you.',image:'reception',items:'Occasion makeup · Personal consultation'},
  {name:"Men’s grooming",detail:'Considered down to the detail.',description:'Clean cuts, considered styling and precisely shaped beards for your individual look.',image:'atelier',items:'Men’s haircuts · Beard grooming · Styling'},
  {name:'Nails',detail:'The finishing touch.',description:'Carefully shaped, beautifully finished nails, with the attention every small detail deserves.',image:'lounge',items:'Nail care · Manicure · Finishing'},
  {name:'Waxing',detail:'Smooth, with care.',description:'A comfortable, considered approach to waxing, with care and hygiene at its heart.',image:'reception',items:'Waxing · Personal care'},
  {name:'Bridal',detail:'For a day that is entirely yours.',description:'A personal bridal consultation to bring your hair and makeup vision together.',image:'entrance',items:'Bridal hair · Bridal makeup · Consultation'},
];
