// Navigation, progressive reveal, and lightweight scroll effects
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const nav = document.getElementById('site-nav');
const menu = document.querySelector('.menu-toggle');
const header = document.getElementById('site-header');
const topBtn = document.getElementById('backToTop');
const progressBar = document.getElementById('progress-bar');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');}
menu?.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));menu.setAttribute('aria-label',opened?'Close navigation':'Open navigation');});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',event=>{const href=anchor.getAttribute('href');if(!href||href==='#')return;const target=document.getElementById(href.slice(1));if(!target)return;event.preventDefault();closeMenu();target.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth'});history.replaceState(null,'',href);});});
const sections=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window&&!reducedMotion.matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active');observer.unobserve(entry.target);}});},{threshold:0.08,rootMargin:'0px 0px -35px 0px'});sections.forEach(section=>observer.observe(section));}else{sections.forEach(section=>section.classList.add('active'));}
let ticking=false;
function updateScroll(){const y=window.scrollY;const max=document.documentElement.scrollHeight-window.innerHeight;if(progressBar)progressBar.style.width=(max>0?Math.min(100,y/max*100):0)+'%';header?.classList.toggle('scrolled',y>20);topBtn?.classList.toggle('visible',y>500);ticking=false;}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});window.addEventListener('resize',updateScroll);updateScroll();
topBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:reducedMotion.matches?'auto':'smooth'}));
