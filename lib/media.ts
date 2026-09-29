import workVideos from './work-videos.json';
export type Category = 'ALL'|'HAIR'|'MAKEUP'|'BRIDAL'|'MEN'|'NAILS'|'SKIN'|'VIDEO';
export type Media = {id:string;type:'photo'|'video';image:string;title:string;category:string;description:string;tags:Category[];src?:string;credit?:string;preview?:string;duration?:number;hasAudio?:boolean;width?:number;height?:number;collection?:'work'|'space'};
export const spaceMedia:Media[]=[
 {id:'welcome',type:'photo',image:'reception',title:'The art of arriving',category:'THE SPACE / RECEPTION',description:'Blush arches, warm light and a personal welcome. A photograph supplied by Touch of Saien.',tags:['ALL']},
 {id:'salon-film',type:'video',image:'stations',title:'A portrait of our space',category:'THE SAIEN FILM / 18 SECONDS',description:'A moving photo story made from the supplied salon images. A quiet introduction to Touch of Saien.',tags:['ALL','VIDEO'],src:'/media/saien-space.mp4',hasAudio:false,duration:18},
 {id:'styling',type:'photo',image:'salon',title:'Where your next look begins',category:'THE SPACE / STYLING FLOOR',description:'An inside look at the salon’s styling floor. Salon interior, not a client transformation.',tags:['ALL','HAIR','MEN']},
 {id:'lounge',type:'photo',image:'lounge',title:'A moment, just for you',category:'THE SPACE / LOUNGE',description:'A quiet corner to pause before your appointment.',tags:['ALL','SKIN']},
 {id:'atelier',type:'photo',image:'atelier',title:'Considered in every detail',category:'THE SPACE / BEAUTY ATELIER',description:'The beauty stations and product shelves at Touch of Saien. Salon interior, not a service result.',tags:['ALL','MAKEUP','NAILS']},
 {id:'entrance',type:'photo',image:'entrance',title:'Your destination in Barrackpore',category:'THE SPACE / THE ENTRANCE',description:'The Touch of Saien entrance and original brand signage.',tags:['ALL']},
 {id:'detail-film',type:'video',image:'reception',title:'In the details',category:'A MOVING PHOTO STORY / 12 SECONDS',description:'Light, texture and care. A short film composed from the supplied interior photographs.',tags:['ALL','VIDEO'],src:'/media/saien-details.mp4',hasAudio:false,duration:12},
 {id:'stations',type:'photo',image:'stations',title:'A seat for every signature',category:'THE SPACE / THE CHAIRS',description:'The salon’s styling stations, photographed across the room.',tags:['ALL','HAIR','MEN']},
];
export const workPhotos:Media[]=[];
const orderedVideos = [14,6,13,3,15,1,12,0,2,4,5,7,8,9,10,11].map(i=>workVideos[i] as Media);
export const media:Media[]=[orderedVideos[0],orderedVideos[1],...workPhotos, {...spaceMedia[0],collection:'space'}, orderedVideos[2],orderedVideos[3],{...spaceMedia[2],collection:'space'},...orderedVideos.slice(4),...spaceMedia.filter((_,i)=>i!==0&&i!==2).map(m=>({...m,collection:'space' as const}))];
export const filters:Category[]=['ALL','HAIR','MAKEUP','BRIDAL','MEN','NAILS','SKIN','VIDEO'];
// Add only genuine paired client photographs here. The live fallback is a clearly labeled interior comparison.
export type Transformation={title:string;category:string;before:string;after:string;beforeLabel?:string;afterLabel?:string;description:string};
export const transformations:Transformation[]=[];
