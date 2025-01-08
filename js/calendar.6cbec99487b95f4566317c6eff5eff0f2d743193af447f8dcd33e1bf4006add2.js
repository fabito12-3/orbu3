(()=>{var l=new Date().getMonth(),e=new Date().getFullYear(),g=[{inicio:"2024-12-01",fin:"2025-01-14"},{inicio:"2025-03-21",fin:"2025-03-25"},{inicio:"2025-04-14",fin:"2025-04-22"},{inicio:"2025-05-01",fin:"2025-05-06"},{inicio:"2025-05-30",fin:"2025-09-01"},{inicio:"2025-10-10",fin:"2025-10-14"},{inicio:"2025-10-31",fin:"2025-11-04"},{inicio:"2025-11-14",fin:"2025-11-18"},{inicio:"2025-12-01",fin:"2026-01-13"},{inicio:"2026-03-20",fin:"2026-03-24"}];function f(n,o,s){let d=new Date(s,o,n);return g.some(c=>{let t=new Date(c.inicio),r=new Date(c.fin);return d>=t&&d<=r})}function D(){let n=document.getElementById("calendar"),o=document.getElementById("mes"),s=new Date(e,l,1).getDay(),d=s===0?7:s,c=new Date(e,l+1,0).getDate(),t=new Date;o.textContent=`${new Date(e,l).toLocaleString("default",{month:"long"})} ${e}`,n.innerHTML=`
    <div class="grid-cell grid-cell-days">L</div>
    <div class="grid-cell grid-cell-days">M</div>
    <div class="grid-cell grid-cell-days">M</div>
    <div class="grid-cell grid-cell-days">J</div>
    <div class="grid-cell grid-cell-days">V</div>
    <div class="grid-cell grid-cell-days">S</div>
    <div class="grid-cell grid-cell-days">D</div>
  `;for(let i=1;i<d;i++)n.innerHTML+='<div class="grid-cell"></div>';for(let i=1;i<=c;i++){let a=document.createElement("div");a.classList.add("grid-cell"),a.textContent=i,t.getDate()===i&&t.getMonth()===l&&t.getFullYear()===e&&a.classList.add("today"),new Date(e,l,i)<t&&a.classList.add("past"),f(i,l,e)&&a.classList.add("high-season"),n.appendChild(a)}let r=42-(d+c);for(let i=0;i<r;i++)n.innerHTML+='<div class="grid-cell"></div>'}D();})();
