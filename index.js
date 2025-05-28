import{a as S,i as u,S as v}from"./assets/vendor-QQhsBNEi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const M="50348932-e8606ea56be3b9c13822f278e",P="https://pixabay.com/api/";async function m(t,e){try{const a=await S.get(P,{params:{key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:e}});return a.data.hits.length===0&&u.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter",class:"custom-toast",iconUrl:"../img/izi.svg"}),a.data}catch(a){throw u.show({title:"Error",message:"Something went wrong!",position:"bottomCenter",class:"custom-toast"}),a}}const f=document.querySelector(".gallery"),p=document.querySelector(".loader");let q=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function E(){f.innerHTML=""}function $(t){const{webformatURL:e,largeImageURL:a,tags:i,likes:r,views:o,comments:n,downloads:w}=t;return`
  
        <li class="gallery-item">
<a class='gallery-link' href="${a}" target='_blank'>
  <img src='${e}' alt="${i}" class="gallery-image">
</a>
<div class='info'>
  <p>Likes: </br><b></b>${r}</b></p>
  <p>Views: </br><b>${o}</b></p>
  <p>Comments: </br><b>${n}</b></p>
  <p>Downloads: </br><b>${w}</b></p>
</div>
</li>

`}function x(t){return t.map($).join("")}function g(t){const e=x(t);f.insertAdjacentHTML("beforeend",e),q.refresh()}function h(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function O(){document.querySelector(".load-more").classList.remove("hidden")}function d(){document.querySelector(".load-more").classList.add("hidden")}function b(t,e){t<e?O():d()}let s=0,c,l=0;const L=15,U=document.querySelector(".form");U.addEventListener("submit",D);async function D(t){if(t.preventDefault(),d(),c=t.target.elements["search-text"].value.trim(),s=1,!!c){E(),h();try{const e=await m(c,s);l=Math.ceil(e.totalHits/L),g(e.hits),b(s,l)}catch(e){console.error(e)}y(),t.target.reset()}}const I=document.querySelector(".load-more");I.addEventListener("click",T);async function T(t){t.preventDefault(),s+=1,d(),h();try{const e=await m(c,s);l=Math.ceil(e.totalHits/L),b(s,l),g(e.hits)}catch(e){console.error(e)}y()}
//# sourceMappingURL=index.js.map
