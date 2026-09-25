// Verifies process sections after the category-alignment change (jsdom, real bundle).
import { JSDOM, ResourceLoader, VirtualConsole } from './node_modules/jsdom/lib/api.js';
const BASE='http://127.0.0.1:8000';
async function load(path, wait=4000){
  const errs=[];const vc=new VirtualConsole();
  vc.on('jsdomError',e=>{const m=String(e.message||e);if(/Not implemented|Could not parse CSS/.test(m))return;errs.push(m.slice(0,160));});
  class L extends ResourceLoader{fetch(u,o){if(/fonts\.(googleapis|gstatic)|fontshare|vercel|calendly|formspree/.test(u))return Promise.resolve(Buffer.from(''));return super.fetch(u,o);}}
  const html=(await (await fetch(BASE+path)).text()).replace(/<script type="module"([^>]*)src="([^"]+)"([^>]*)><\/script>/g,'<script src="$2"$3></script>');
  const replaced=[];
  const dom=new JSDOM(html,{url:BASE+path,runScripts:'dangerously',resources:new L(),pretendToBeVisual:true,virtualConsole:vc,beforeParse(w){
    w.matchMedia=q=>({matches:false,media:q,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
    w.IntersectionObserver=class{constructor(cb){this.cb=cb}observe(el){setTimeout(()=>this.cb([{target:el,isIntersecting:true}],this),0)}unobserve(){}disconnect(){}};
    w.scrollTo=()=>{};
    try{Object.defineProperty(w.location,'replace',{value:u=>replaced.push(u)});}catch(e){}
    w.__replaced=replaced;
    w.addEventListener('error',e=>errs.push('window: '+e.message));
  }});
  await new Promise(r=>setTimeout(r,wait));
  return {doc:dom.window.document,win:dom.window,errs,replaced};
}
const ids=['employee-engagement-app-redesign','foodiezone-pwa','africa-cuisine-pwa','nerdma-website','addmoredigital-website','designops-design-system','lula-trustshield','brand-strategy-programme'];
for(const id of ids){
  const {doc,errs}=await load('/project/'+id+'.html');
  const h=[...doc.querySelectorAll('h2')].find(x=>/How this one was made/.test(x.textContent));
  const steps=h?[...h.parentElement.querySelectorAll('h4')].map(x=>x.textContent):null;
  console.log('\n'+id+'\n  '+(steps?steps.join('\n  '):'!! NO PROCESS SECTION')+(errs.length?'\n  ERR '+errs.slice(0,2).join(' | '):''));
}
{const {doc,errs,replaced,win}=await load('/project/snb-website/');
 const h=[...doc.querySelectorAll('h2')].find(x=>/How this one was made/.test(x.textContent));
 console.log('\nSNB direct: path='+win.location.pathname+' replaced='+JSON.stringify(replaced)+' h1="'+doc.querySelector('h1')?.textContent+'" live-btn='+!!doc.querySelector('.lm-live-btn a')+' steps='+(h?h.parentElement.querySelectorAll('h4').length:0), errs.slice(0,2));}
{const {doc,win}=await load('/website-design-conversion');
 const a=[...doc.querySelectorAll('a')].filter(a=>/snb/.test(a.getAttribute('href')||''));
 console.log('\nWebsite page SNB links:',a.map(x=>x.getAttribute('href')+(x.target?' target='+x.target:'')));}
{const {doc,win,replaced}=await load('/microfinance-impact-consulting');
 const cards=[...doc.querySelectorAll('a[href*="/project/"]')].map(a=>a.getAttribute('href')+' :: '+(a.querySelector('h3')?.textContent||''));
 console.log('\nMicrofinance cards:\n  '+cards.join('\n  '));
 const sw=doc.querySelector('a[href*="/project/service-waze"]');
 if(sw){sw.dispatchEvent(new win.MouseEvent('click',{bubbles:true,cancelable:true,button:0}));await new Promise(r=>setTimeout(r,1500));
 console.log('  click ServiceWaze -> pathname='+win.location.pathname+' location.replace='+JSON.stringify(replaced));}}
process.exit(0);
