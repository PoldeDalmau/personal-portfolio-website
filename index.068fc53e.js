window.toggleMenu=function(){let n=document.querySelector(".menu-links"),t=document.querySelector(".hamburger-icon");n.classList.toggle("open"),t.classList.toggle("open"),n.classList.contains("open")?document.addEventListener("click",e):document.removeEventListener("click",e)};function e(n){let t=document.querySelector(".menu-links"),o=document.querySelector(".hamburger-icon");t.contains(n.target)||o.contains(n.target)||(t.classList.remove("open"),o.classList.remove("open"),document.removeEventListener("click",e))}
//# sourceMappingURL=index.068fc53e.js.map
