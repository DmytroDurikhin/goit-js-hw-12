import{a as d,i,S as p}from"./assets/vendor-QQhsBNEi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const f="50348932-e8606ea56be3b9c13822f278e",g="https://pixabay.com/api/";async function y(t,r){try{const s=await d.get(g,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:1}});return s.data.hits.length===0&&i.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter",class:"custom-toast",iconUrl:"../img/izi.svg"}),s.data}catch(s){throw i.show({title:"Error",message:"Something went wrong!",position:"bottomCenter",class:"custom-toast"}),s}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function b(){c.innerHTML=""}function L(t){const{webformatURL:r,largeImageURL:s,tags:a,likes:e,views:o,comments:n,downloads:m}=t;return`
  
        <li class="gallery-item">
<a class='gallery-link' href="${s}" target='_blank'>
  <img src='${r}' alt="${a}" class="gallery-image">
</a>
<div class='info'>
  <p>Likes: </br><b></b>${e}</b></p>
  <p>Views: </br><b>${o}</b></p>
  <p>Comments: </br><b>${n}</b></p>
  <p>Downloads: </br><b>${m}</b></p>
</div>
</li>

`}function w(t){return t.map(L).join("")}function v(t){const r=w(t);c.insertAdjacentHTML("beforeend",r),h.refresh()}function S(){l.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);u.addEventListener("submit",$);async function P(t){t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(r){b(),S();try{const a=await y(r,1);v(a.hits)}catch(s){console.error(s)}q(),t.target.reset()}}function $(t){t.preventDefault();const r=t.target.elements.query.value;console.log(r)}
//# sourceMappingURL=index.js.map
