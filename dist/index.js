"use strict";(()=>{function i(r){return new Promise((t,e)=>{let o=document.createElement("script");o.src=r,o.async=!0,o.onload=()=>t(),o.onerror=()=>e(new Error(`Failed to load script: ${r}`)),document.head.appendChild(o)})}i("https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js");function s(){return new Promise((r,t)=>{let e=document.createElement("script");e.type="module",e.src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js",e.onload=()=>r(),e.onerror=()=>t(new Error("Failed to load model-viewer script")),document.head.appendChild(e)})}function n(){return new Promise((r,t)=>{let e=document.createElement("script");e.type="module",e.src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",e.onload=()=>r(),e.onerror=()=>t(new Error("Failed to load swiper script")),document.head.appendChild(e)})}function l(){$(".slider_component").each(function(r){let t=!1;$(this).attr("loop-mode")==="true"&&(t=!0);let e=300;$(this).attr("slider-duration")!==void 0&&(e=+$(this).attr("slider-duration"));let o=new Swiper($(this).find(".swiper")[0],{speed:e,autoHeight:!1,followFinger:!0,freeMode:!0,slideToClickedSlide:!0,slidesPerView:"auto",spaceBetween:12,rewind:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},mousewheel:{forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:1,spaceBetween:"4%"},768:{slidesPerView:1,spaceBetween:"4%"},992:{slidesPerView:3.5,spaceBetween:12}},scrollbar:{el:$(this).find(".swiper-drag-wrapper")[0],draggable:!0,dragClass:"swiper-drag",snapOnRelease:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})})}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{s().then(()=>{console.log("Model viewer script loaded successfully")}).catch(t=>{console.error("Error loading model viewer script:",t)}),document.querySelector(".button.is-submit").addEventListener("click",()=>{window.location.href="#unlock"}),n().then(()=>{console.log("Swiper script loaded successfully"),l()}).catch(t=>{console.error("Error loading Swiper script:",t)}),Promise.all([i("https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js")]).then(()=>{console.log("All Finsweet Attributes scripts loaded")}).catch(t=>{console.error(t)})});})();
