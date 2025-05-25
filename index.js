import{a as m,i as n,S as d}from"./assets/vendor-QQhsBNEi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="50348932-e8606ea56be3b9c13822f278e",p="https://pixabay.com/api/";function g(o){return m.get(p,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>(t.data.hits.length===0&&n.show({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter",class:"custom-toast",iconUrl:"../img/izi.svg"}),t.data)).catch(t=>{throw n.show({title:"Error",message:"Something went wrong!",position:"bottomCenter",class:"custom-toast"}),t})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function y(){c.innerHTML=""}function b(o){const{webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:u}=o;return`
        <li class="gallery-item">
<a class='gallery-link' href="${s}" target='_blank'>
  <img src='${t}' alt="${i}" class="gallery-image">
</a>
<div class='info'>
  <p>Likes: </br><b></b>${e}</b></p>
  <p>Views: </br><b>${r}</b></p>
  <p>Comments: </br><b>${a}</b></p>
  <p>Downloads: </br><b>${u}</b></p>
</div>
</li>
`}function L(o){return o.map(b).join("")}function w(o){const t=L(o);c.insertAdjacentHTML("beforeend",t),h.refresh()}function S(){l.classList.remove("is-hidden")}function v(){l.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",$);function $(o){o.preventDefault();const t=o.target.elements["search-text"].value.trim();t&&(y(),S(),g(t).then(s=>{w(s.hits)}).catch(s=>{console.error(s)}).finally(()=>{v()}),o.target.reset())}
//# sourceMappingURL=index.js.map
