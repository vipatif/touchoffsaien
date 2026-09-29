export function indiaToday(now=new Date()) { return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(now); }
export function validateBooking(data,now=new Date()) {
 /** @type {Record<string,string>} */
 const errors={};
 if(!data.name||data.name.trim().length<2||data.name.trim().length>80) errors.name='Please enter your name (2–80 characters).';
 const phone=(data.phone||'').replace(/[\s()-]/g,'');
 if(!/^\+?\d{10,15}$/.test(phone)) errors.phone='Please enter a valid phone number with 10–15 digits.';
 if(!['Hair','Skin','Makeup','Men’s grooming','Nails','Waxing','Bridal','Academy','Consultation'].includes(data.service)) errors.service='Please choose a service.';
 const parsedDate=new Date(`${data.date}T00:00:00Z`);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(data.date||'')||!Number.isFinite(parsedDate.getTime())||parsedDate.toISOString().slice(0,10)!==data.date||data.date<indiaToday(now)) errors.date='Please choose a valid date today or in the future.';
 if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(data.time||'')) errors.time='Please choose a preferred time.';
 if(!errors.date&&!errors.time&&new Date(`${data.date}T${data.time}:00+05:30`).getTime()<=now.getTime()) errors.time='Please choose a time in the future (India time).';
 if((data.message||'').length>1000) errors.message='Please keep your message within 1,000 characters.';
 return errors;
}
export function composeBooking(data){return `Hello Touch of Saien, I would like to request an appointment.\n\nName: ${data.name.trim()}\nPhone: ${data.phone.trim()}\nService: ${data.service}\nPreferred date: ${data.date}\nPreferred time: ${data.time} IST\nMessage: ${data.message?.trim()||'No additional notes'}\n\nPlease confirm availability. Thank you!`;}
