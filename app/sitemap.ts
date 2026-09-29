import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','/services/','/the-edit/','/academy/','/our-story/','/visit/','/privacy/'].map(path=>({url:`${site.url}${path||'/'}`,changeFrequency:'monthly',priority:path?0.7:1}))}
