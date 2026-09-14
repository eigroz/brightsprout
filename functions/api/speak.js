const SPEAKERS=new Set(['pandora','draco']);
export async function onRequestGet(context){
  const url=new URL(context.request.url);
  const text=(url.searchParams.get('text')||'').trim();
  const speaker=SPEAKERS.has(url.searchParams.get('speaker'))?url.searchParams.get('speaker'):'pandora';
  if(!text||text.length>240||!/[a-z]/i.test(text))return new Response('Invalid speech request',{status:400});
  try{
    const audio=await context.env.AI.run('@cf/deepgram/aura-2-en',{text,speaker,encoding:'mp3'});
    return new Response(audio,{headers:{'content-type':'audio/mpeg','cache-control':'public, max-age=604800, s-maxage=2592000','x-content-type-options':'nosniff'}});
  }catch(error){
    console.error(JSON.stringify({event:'tts_error',message:error instanceof Error?error.message:'unknown'}));
    return new Response('Speech unavailable',{status:503});
  }
}
