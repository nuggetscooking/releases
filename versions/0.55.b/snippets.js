

const loaded = null!== document.querySelector("[data-id='nuggets']");
GetPlayer().SetVar('nuggetsLoaded',loaded);





(()=>{let e=t=>{if("nuggets"===t.data.origin){if(void 0===t.data.lib||null===t.data.lib)t.source.postMessage({nuggetsID:GetPlayer().GetVar("nuggetsID"),courseID:GetPlayer().GetVar("Project.ActivityId")},"*");else{window.removeEventListener("message",e,!1);let a=e=>{let s=document.createElement("script");document.querySelector("head").appendChild(s);for(let d=0;d<e.length;d+=2)s.setAttribute(e[d],e[d+1]||`${t.data.lib.shift()}`);s.addEventListener("load",()=>{t.data.lib.length?a(t.data.attr):GetPlayer().SetVar("nuggetsLoaded",!0)},!1)};a(t.data.attr)}}};window.addEventListener("message",e,!1)})();