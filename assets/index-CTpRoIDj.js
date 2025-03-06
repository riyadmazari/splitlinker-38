import{r as o,t as fe,c as je,j as e,V as G,R as X,A as J,C as Z,X as ee,T as te,D as se,a as ge,P as ye,b as be,d as Ne,e as re,f as ve,g as ae,m as f,u as I,h as Y,E as w,U as ie,i as E,L as we,k as ne,S as Se,l as D,n as B,o as oe,p as Ce,q as Te,s as Pe,v as ke,w as Ae,x as Ee,H as Ie,Q as Oe,y as ze,B as Le,z as Re,F as T,G as H}from"./vendor-DXOlX2mJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();const Fe=1,De=1e6;let M=0;function Me(){return M=(M+1)%Number.MAX_SAFE_INTEGER,M.toString()}const V=new Map,q=t=>{if(V.has(t))return;const s=setTimeout(()=>{V.delete(t),P({type:"REMOVE_TOAST",toastId:t})},De);V.set(t,s)},Ve=(t,s)=>{switch(s.type){case"ADD_TOAST":return{...t,toasts:[s.toast,...t.toasts].slice(0,Fe)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(r=>r.id===s.toast.id?{...r,...s.toast}:r)};case"DISMISS_TOAST":{const{toastId:r}=s;return r?q(r):t.toasts.forEach(a=>{q(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===r||r===void 0?{...a,open:!1}:a)}}case"REMOVE_TOAST":return s.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==s.toastId)}}},k=[];let A={toasts:[]};function P(t){A=Ve(A,t),k.forEach(s=>{s(A)})}function _e({...t}){const s=Me(),r=i=>P({type:"UPDATE_TOAST",toast:{...i,id:s}}),a=()=>P({type:"DISMISS_TOAST",toastId:s});return P({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:i=>{i||a()}}}),{id:s,dismiss:a,update:r}}function S(){const[t,s]=o.useState(A);return o.useEffect(()=>(k.push(s),()=>{const r=k.indexOf(s);r>-1&&k.splice(r,1)}),[t]),{...t,toast:_e,dismiss:r=>P({type:"DISMISS_TOAST",toastId:r})}}function N(...t){return fe(je(t))}const $e=ye,le=o.forwardRef(({className:t,...s},r)=>e.jsx(G,{ref:r,className:N("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...s}));le.displayName=G.displayName;const Ye=ge("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),de=o.forwardRef(({className:t,variant:s,...r},a)=>e.jsx(X,{ref:a,className:N(Ye({variant:s}),t),...r}));de.displayName=X.displayName;const Ue=o.forwardRef(({className:t,...s},r)=>e.jsx(J,{ref:r,className:N("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...s}));Ue.displayName=J.displayName;const ce=o.forwardRef(({className:t,...s},r)=>e.jsx(Z,{ref:r,className:N("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...s,children:e.jsx(ee,{className:"h-4 w-4"})}));ce.displayName=Z.displayName;const me=o.forwardRef(({className:t,...s},r)=>e.jsx(te,{ref:r,className:N("text-sm font-semibold",t),...s}));me.displayName=te.displayName;const ue=o.forwardRef(({className:t,...s},r)=>e.jsx(se,{ref:r,className:N("text-sm opacity-90",t),...s}));ue.displayName=se.displayName;function Be(){const{toasts:t}=S();return e.jsxs($e,{children:[t.map(function({id:s,title:r,description:a,action:i,...n}){return e.jsxs(de,{...n,children:[e.jsxs("div",{className:"grid gap-1",children:[r&&e.jsx(me,{children:r}),a&&e.jsx(ue,{children:a})]}),i,e.jsx(ce,{})]},s)}),e.jsx(le,{})]})}const He=({...t})=>{const{theme:s="system"}=be();return e.jsx(Ne,{theme:s,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},qe=ve,Qe=o.forwardRef(({className:t,sideOffset:s=4,...r},a)=>e.jsx(re,{ref:a,sideOffset:s,className:N("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r}));Qe.displayName=re.displayName;const Ke=(t="demo",s=window.location.origin)=>`${s}/pay/${t}`,xe=()=>Math.random().toString(36).substring(2,10),We=(t,s)=>{if(t.length===0)return[];const r=s/t.length;return t.map(a=>({...a,amount:parseFloat(r.toFixed(2))}))},Ge=(t,s)=>{const r=t.reduce((a,i)=>a+i.amount,0);return parseFloat((s-r).toFixed(2))},j=({children:t,isVisible:s=!0,direction:r="up",duration:a=.5,delay:i=0,className:n=""})=>e.jsx(ae,{children:s&&e.jsx(f.div,{initial:{opacity:0,...Q(r)},animate:{opacity:1,...Xe(r),transition:{duration:a,delay:i,ease:"easeOut"}},exit:{opacity:0,...Q(r),transition:{duration:a*.8,ease:"easeIn"}},className:n,children:t})});function Q(t){switch(t){case"up":return{y:20};case"down":return{y:-20};case"left":return{x:20};case"right":return{x:-20}}}function Xe(t){switch(t){case"up":return{y:0};case"down":return{y:0};case"left":return{x:0};case"right":return{x:0}}}const pe=({children:t})=>{const s=o.useRef(null);return o.useEffect(()=>{s.current&&s.current.scrollTo(0,0)},[t]),e.jsx("div",{ref:s,className:"h-full w-full overflow-y-auto",children:e.jsx(f.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.4,ease:"easeInOut"},className:"min-h-full",children:t})})},Je=({children:t,staggerDelay:s=.1,className:r=""})=>e.jsx("div",{className:r,children:e.jsx(ae,{children:t.map((a,i)=>e.jsx(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.4,delay:i*s,ease:"easeOut"},children:a},i))})}),g=({children:t,duration:s=.5,delay:r=0,className:a=""})=>e.jsx(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:s,delay:r,ease:"easeInOut"},className:a,children:t}),v=({children:t,duration:s=.3,delay:r=0,className:a=""})=>e.jsx(f.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:s,delay:r,ease:"easeOut"},className:a,children:t}),Ze=({children:t,scale:s=1.03,className:r=""})=>e.jsx(f.div,{whileHover:{scale:s},whileTap:{scale:.98},transition:{duration:.2},className:r,children:t}),he=({size:t=48,className:s=""})=>e.jsxs(f.svg,{width:t,height:t,viewBox:"0 0 50 50",className:s,children:[e.jsx(f.circle,{cx:"25",cy:"25",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.5,ease:"easeInOut"}}),e.jsx(f.path,{d:"M15 25 L22 32 L35 18",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:1},transition:{duration:.5,delay:.3,ease:"easeInOut"}})]}),K=()=>{const[t,s]=o.useState(""),[r,a]=o.useState(!1),i=I(),{toast:n}=S(),c=m=>{m.preventDefault();const d=parseFloat(t);if(!t||isNaN(d)||d<=0){n({title:"Invalid amount",description:"Please enter a valid payment amount",variant:"destructive"});return}a(!0);const l=xe();setTimeout(()=>{i(`/collect/${l}?amount=${d}`)},500)};return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx("header",{className:"py-6 px-4 border-b border-border",children:e.jsx("div",{className:"container max-w-6xl",children:e.jsx("img",{src:"onepoolwebsite/webpage/images/OnePool.png",alt:"OnePool Logo",className:"logo-image primary-logo"})})}),e.jsx("main",{className:"flex-1 flex items-center justify-center px-4 py-12",children:e.jsxs(j,{className:"w-full max-w-lg",children:[e.jsx("div",{className:"text-center mb-8",children:e.jsxs(g,{children:[e.jsx("h1",{className:"text-4xl font-bold mb-3",children:"Split Payments Simplified"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Easily split payments among friends, family, or colleagues"})]})}),e.jsx(v,{delay:.1,children:e.jsxs("div",{className:"glass-card p-8 mb-6",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Create a Payment Pool"}),e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium mb-2",children:"Total Amount"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground",children:e.jsx(Y,{size:20})}),e.jsx("input",{id:"amount",type:"number",min:"0.01",step:"0.01",value:t,onChange:m=>s(m.target.value),className:"input-field pl-12 pr-12 text-lg w-full",placeholder:"0.00",required:!0}),e.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground",children:e.jsx(w,{size:20})})]})]}),e.jsx("button",{type:"submit",className:"btn-primary w-full text-base",disabled:r,children:r?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsx("div",{className:"w-5 h-5 border-2 border-t-white/0 border-white rounded-full animate-spin mr-2"}),"Creating..."]}):"Create Payment Pool"})]})]})}),e.jsx(g,{delay:.3,className:"text-center",children:e.jsx("p",{className:"text-muted-foreground",children:"Simple payment splitting for any occasion"})})]})}),e.jsx("footer",{className:"py-6 px-4 border-t border-border",children:e.jsxs("div",{className:"container max-w-6xl text-center text-sm text-muted-foreground",children:["OnePool © ",new Date().getFullYear()," — All rights reserved"]})})]})},$=({contributor:t,totalAmount:s,onRemove:r,onEdit:a,onNameChange:i,isCollector:n=!0,index:c=0})=>{const m=t.amount/s*100;return e.jsx(g,{delay:c*.1,children:e.jsx(Ze,{scale:1.02,children:e.jsxs("div",{className:"glass-card p-4 mb-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary",children:e.jsx(ie,{size:18})}),n&&t.isEditing?e.jsx("input",{className:"input-field py-1 px-2 text-sm w-[120px]",value:t.name||"",onChange:d=>i==null?void 0:i(t.id,d.target.value),placeholder:"Name",autoFocus:!0}):e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:t.name||"Unnamed"}),e.jsxs("div",{className:"flex items-center mt-1 text-xs text-muted-foreground",children:[t.hasVerified&&e.jsxs("div",{className:"flex items-center text-emerald-600",children:[e.jsx(E,{size:12,className:"mr-1"}),e.jsx("span",{children:"Verified"})]}),t.hasPaid&&e.jsxs("div",{className:"flex items-center text-emerald-600 ml-2",children:[e.jsx(E,{size:12,className:"mr-1"}),e.jsx("span",{children:"Paid"})]})]})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[n&&t.isEditing?e.jsx("input",{type:"number",min:"0",step:"0.01",className:"input-field py-1 px-2 text-sm w-[100px]",value:t.amount,onChange:d=>a==null?void 0:a(t.id,parseFloat(d.target.value)||0)}):e.jsxs("div",{className:"flex items-center px-3 py-1.5 bg-primary/5 rounded-lg",children:[e.jsx("span",{className:"font-medium",children:t.amount.toFixed(2)}),e.jsx(w,{size:14,className:"ml-1 text-muted-foreground"})]}),n&&r&&e.jsx("button",{onClick:()=>r(t.id),className:"w-8 h-8 flex items-center justify-center rounded-full text-destructive hover:bg-destructive/10 transition-colors",children:e.jsx(ee,{size:16})})]})]}),n&&e.jsxs("div",{className:"mt-3",children:[e.jsx("div",{className:"relative h-2 bg-secondary rounded-full overflow-hidden",children:e.jsx(f.div,{initial:{width:0},animate:{width:`${m}%`},transition:{duration:.5,ease:"easeOut"},className:"absolute top-0 left-0 h-full bg-primary"})}),e.jsxs("div",{className:"flex justify-between mt-1 text-xs text-muted-foreground",children:[e.jsxs("span",{children:[m.toFixed(1),"%"]}),e.jsxs("span",{children:["of $",s.toFixed(2)]})]})]})]})})})},et=({link:t,title:s="Payment Link",description:r="Share this link with others to collect payment",showCopyButton:a=!0,showShareButton:i=!0,className:n=""})=>{const[c,m]=o.useState(!1),{toast:d}=S(),l=()=>{navigator.clipboard.writeText(t),m(!0),d({title:"Link copied!",description:"Payment link copied to clipboard"}),setTimeout(()=>m(!1),2e3)},C=async()=>{if(navigator.share)try{await navigator.share({title:"OnePool Payment",text:"Here's your payment link",url:t}),d({title:"Link shared!",description:"You've successfully shared the payment link"})}catch(y){console.error("Error sharing:",y)}else l()};return e.jsxs(v,{className:`glass-card p-4 ${n}`,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("div",{className:"p-2 rounded-full bg-primary/10",children:e.jsx(we,{size:16,className:"text-primary"})}),e.jsx("h3",{className:"font-medium",children:s})]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:r}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex-1 p-2.5 bg-secondary/50 rounded-l-lg border-y border-l border-border truncate text-sm",children:t.length>40?`${t.substring(0,40)}...`:t}),a&&e.jsx("button",{onClick:l,className:"p-2.5 bg-secondary border-y border-r border-l-0 border-border text-primary hover:bg-secondary/80 transition-colors","aria-label":"Copy link",children:c?e.jsx(E,{size:18}):e.jsx(ne,{size:18})}),i&&e.jsx("button",{onClick:C,className:"p-2.5 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors","aria-label":"Share link",children:e.jsx(Se,{size:18})})]})]})},tt=({totalAmount:t,poolId:s="demo",subscriptionName:r="Payment"})=>{const[a,i]=o.useState([]),[n,c]=o.useState(t),[m,d]=o.useState(null),{toast:l}=S(),C=I();o.useEffect(()=>{c(Ge(a,t))},[a,t]);const y=()=>{const x={id:xe(),name:`Person ${a.length+1}`,amount:0,isEditing:!0};i(u=>[...u,x]),d(x.id),setTimeout(()=>{const u=document.getElementById(`contributor-${x.id}`);u==null||u.scrollIntoView({behavior:"smooth",block:"end"})},100)},O=x=>{i(u=>u.filter(h=>h.id!==x))},z=(x,u)=>{i(h=>h.map(b=>b.id===x?{...b,amount:u}:b))},L=(x,u)=>{i(h=>h.map(b=>b.id===x?{...b,name:u}:b))},R=()=>{if(a.length===0){l({title:"No contributors",description:"Add contributors first to distribute the amount",variant:"destructive"});return}i(We(a,t))},F=x=>{i(u=>u.map(h=>h.id===x?{...h,isEditing:!h.isEditing}:h))},p=()=>{if(a.length===0){l({title:"No contributors",description:"Add contributors first to save",variant:"destructive"});return}if(a.some(u=>!u.name||u.name.trim()==="")){l({title:"Missing names",description:"Please provide names for all contributors",variant:"destructive"});return}l({title:"Contributors saved",description:`Saved ${a.length} contributors to the pool`})},U=()=>Ke(s);return e.jsx("div",{className:"max-w-2xl mx-auto px-4 py-8",children:e.jsxs(j,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("div",{className:"chip mb-2 bg-primary/10 text-primary",children:"PAYMENT REQUEST"}),e.jsxs("h1",{className:"text-3xl font-semibold mb-2",children:["Split ",r]}),e.jsx("p",{className:"text-muted-foreground",children:"Add contributors and distribute the payment amount"})]}),e.jsxs("div",{className:"glass-card p-5 mb-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2.5 rounded-full bg-primary/10 text-primary mr-3",children:e.jsx(Y,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Total Amount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-2xl font-semibold",children:t.toFixed(2)}),e.jsx(w,{size:16,className:"ml-1 text-muted-foreground"})]})]})]}),e.jsx("div",{children:e.jsx("button",{onClick:()=>C("/"),className:"px-4 py-2 border border-input rounded-lg text-sm font-medium hover:bg-secondary transition-colors",children:"Edit"})})]}),e.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-border",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"p-2.5 rounded-full bg-primary/10 text-primary mr-3 mt-1",children:e.jsx(D,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Contributors"}),e.jsx("p",{className:"text-xl font-medium",children:a.length})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Remaining"}),e.jsxs("div",{className:`text-xl font-medium ${n!==0?"text-amber-500":"text-emerald-500"}`,children:[n.toFixed(2)," €"]})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-medium",children:"Contributors"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:R,className:"px-4 py-2 border border-input rounded-lg text-sm font-medium hover:bg-secondary transition-colors flex items-center",disabled:a.length===0,children:[e.jsx(D,{size:16,className:"mr-2"}),"Split Evenly"]}),e.jsxs("button",{onClick:y,className:"btn-primary flex items-center",children:[e.jsx(B,{size:16,className:"mr-2"}),"Add Person"]})]})]}),a.length===0?e.jsx(g,{children:e.jsxs("div",{className:"glass-card p-6 text-center",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3",children:e.jsx(D,{size:24})}),e.jsx("h3",{className:"text-lg font-medium mb-2",children:"No Contributors Yet"}),e.jsx("p",{className:"text-muted-foreground mb-4",children:"Add people to split the payment amount"}),e.jsxs("button",{onClick:y,className:"btn-primary inline-flex items-center",children:[e.jsx(B,{size:16,className:"mr-2"}),"Add Person"]})]})}):e.jsxs(e.Fragment,{children:[e.jsx(Je,{staggerDelay:.05,className:"mb-6",children:a.map((x,u)=>e.jsx("div",{id:`contributor-${x.id}`,className:"relative mb-4 group",onClick:()=>F(x.id),children:e.jsx($,{contributor:x,totalAmount:t,onRemove:O,onEdit:z,onNameChange:L,index:u})},x.id))}),n===0&&e.jsx("div",{className:"flex justify-end mb-6",children:e.jsx("button",{onClick:p,className:"btn-primary",children:"Save Contributors"})})]}),a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(v,{className:"mb-6",children:e.jsx(et,{link:window.location.href,title:"Payment Collection Link",description:"Share this link with others to manage this payment split"})}),e.jsx(g,{children:e.jsxs("div",{className:"glass-card p-5 mb-6",children:[e.jsx("h3",{className:"font-medium mb-3",children:"Contributor Payment Link"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Share this link with all contributors to collect their payments"}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-secondary/30 rounded-lg",children:[e.jsxs("div",{className:"font-medium",children:[r," Payment Link"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"text-xs truncate max-w-[150px] text-muted-foreground",children:[U().substring(0,20),"..."]}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(U()),l({title:"Link copied",description:"Payment link copied to clipboard"})},className:"p-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors",children:e.jsx(ne,{size:14})})]})]})]})})]})]})})},st={netflix:{id:"netflix",name:"Netflix",amount:19.99},spotify:{id:"spotify",name:"Spotify",amount:9.99},amazon:{id:"amazon",name:"Amazon Prime",amount:14.99},disney:{id:"disney",name:"Disney+",amount:8.99}},rt=()=>{const{poolId:t="demo"}=oe(),[s]=Ce(),r=I(),[a,i]=o.useState(0),[n,c]=o.useState("Payment");return o.useEffect(()=>{const m=st[t];if(m){i(m.amount),c(m.name);return}const d=s.get("amount"),l=d?parseFloat(d):0;if(!d||isNaN(l)||l<=0){r("/");return}i(l)},[s,r,t]),a<=0?null:e.jsx(pe,{children:e.jsx(tt,{totalAmount:a,poolId:t,subscriptionName:n})})},at=({onSuccess:t,onCancel:s})=>{const[r,a]=o.useState("initial"),{toast:i}=S(),n=()=>{a("processing"),setTimeout(()=>{a("success"),i({title:"Verification successful",description:"Your payment method has been verified"}),setTimeout(()=>{t()},1500)},2e3)};return e.jsxs("div",{className:"w-full max-w-md mx-auto",children:[r==="initial"&&e.jsx(j,{children:e.jsxs("div",{className:"glass-card p-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4",children:e.jsx(Te,{size:24})}),e.jsx("h3",{className:"text-xl font-medium text-center mb-2",children:"Verification Payment"}),e.jsx("p",{className:"text-muted-foreground text-center mb-6",children:"We'll make a temporary 0€ verification charge to confirm your payment method"}),e.jsx("div",{className:"flex items-center justify-center mb-6",children:e.jsxs("div",{className:"px-5 py-3 bg-primary/5 rounded-lg flex items-center justify-center",children:[e.jsx("span",{className:"font-medium text-2xl",children:"0.00"}),e.jsx(w,{size:20,className:"ml-1 text-muted-foreground"})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:s,className:"px-4 py-2.5 border border-input rounded-lg text-sm font-medium hover:bg-secondary transition-colors",children:"Cancel"}),e.jsx("button",{onClick:n,className:"btn-primary",children:"Verify"})]})]})}),r==="processing"&&e.jsx(j,{children:e.jsxs("div",{className:"glass-card p-6 flex flex-col items-center",children:[e.jsx("div",{className:"w-16 h-16 rounded-full border-4 border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/30 animate-spin mb-6"}),e.jsx("h3",{className:"text-xl font-medium mb-2",children:"Processing"}),e.jsx("p",{className:"text-muted-foreground text-center",children:"Verifying your payment method..."})]})}),r==="success"&&e.jsx(j,{children:e.jsxs("div",{className:"glass-card p-6 flex flex-col items-center",children:[e.jsx("div",{className:"text-emerald-500 mb-4",children:e.jsx(he,{size:64})}),e.jsx("h3",{className:"text-xl font-medium mb-2",children:"Verification Complete!"}),e.jsx("p",{className:"text-muted-foreground text-center",children:"Your payment method has been successfully verified"})]})})]})},it=({contributorId:t,poolId:s,amount:r,availableContributors:a=[]})=>{const[i,n]=o.useState("details"),[c,m]=o.useState(""),[d,l]=o.useState(!1),{toast:C}=S(),y={id:t,name:c||"You",amount:r,hasVerified:i==="success",hasPaid:i==="success"},O=p=>{if(p.preventDefault(),!c){C({title:"Name required",description:"Please select your name to continue",variant:"destructive"});return}n("verification")},z=()=>{n("success")},L=()=>{n("details")},R=()=>{l(!d)},F=p=>{m(p),l(!1)};return e.jsxs("div",{className:"max-w-md mx-auto px-4 py-8",children:[i==="details"&&e.jsxs(j,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("div",{className:"chip mb-2 bg-primary/10 text-primary",children:"PAYMENT REQUEST"}),e.jsx("h1",{className:"text-3xl font-semibold mb-2",children:"Your Payment"}),e.jsx("p",{className:"text-muted-foreground",children:"Complete the form below to make your payment"})]}),e.jsx(v,{children:e.jsx("div",{className:"glass-card p-5 mb-6",children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2.5 rounded-full bg-primary/10 text-primary mr-3",children:e.jsx(Y,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your Amount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-2xl font-semibold",children:r.toFixed(2)}),e.jsx(w,{size:18,className:"ml-1 text-muted-foreground"})]})]})]})})})}),e.jsx(v,{delay:.1,children:e.jsx("form",{onSubmit:O,className:"mb-6",children:e.jsxs("div",{className:"glass-card p-5",children:[e.jsx("h2",{className:"text-lg font-medium mb-4",children:"Who Are You?"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-1",children:"Select Your Name"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",children:e.jsx(ie,{size:18})}),a.length>0?e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",className:"input-field pl-10 pr-10 w-full text-left flex justify-between items-center",onClick:R,children:[c||"Select your name",e.jsx(Pe,{size:18,className:`transition-transform ${d?"rotate-180":""}`})]}),d&&e.jsx("div",{className:"absolute top-full left-0 right-0 mt-1 bg-background border border-input rounded-lg shadow-lg z-10",children:a.map(p=>e.jsx("button",{type:"button",className:"w-full text-left px-4 py-2 hover:bg-secondary transition-colors",onClick:()=>F(p.name),children:p.name},p.id))})]}):e.jsx("input",{id:"name",type:"text",value:c,onChange:p=>m(p.target.value),className:"input-field pl-10 w-full",placeholder:"Enter your name",required:!0})]}),a.length>0&&e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Choose from the names provided by the collector"})]}),e.jsxs("button",{type:"submit",className:"btn-primary w-full flex items-center justify-center",children:["Continue to Payment",e.jsx(ke,{size:16,className:"ml-2"})]})]})})}),e.jsx(g,{delay:.2,children:e.jsx($,{contributor:y,totalAmount:r,isCollector:!1})})]}),i==="verification"&&e.jsxs(j,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("div",{className:"chip mb-2 bg-primary/10 text-primary",children:"PAYMENT VERIFICATION"}),e.jsx("h1",{className:"text-3xl font-semibold mb-2",children:"Verify Payment"}),e.jsx("p",{className:"text-muted-foreground",children:"Complete a 0€ verification to confirm your payment method"})]}),e.jsx(at,{onSuccess:z,onCancel:L})]}),i==="success"&&e.jsxs(j,{children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"text-emerald-500 mb-4 inline-block",children:e.jsx(he,{size:80})}),e.jsx("h1",{className:"text-3xl font-semibold mb-2",children:"Payment Complete!"}),e.jsxs("p",{className:"text-muted-foreground",children:["Thank you, ",c,". Your payment has been successfully processed."]})]}),e.jsx(v,{children:e.jsx("div",{className:"glass-card p-5 mb-6",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"p-2.5 rounded-full bg-emerald-100 text-emerald-600 mr-3",children:e.jsx(E,{size:18})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Paid Amount"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"text-2xl font-semibold",children:r.toFixed(2)}),e.jsx(w,{size:18,className:"ml-1 text-muted-foreground"})]})]})]}),e.jsx("div",{className:"chip bg-emerald-100 text-emerald-700",children:"Complete"})]})})}),e.jsx(g,{delay:.2,children:e.jsx($,{contributor:y,totalAmount:r,isCollector:!1})})]})]})},nt=()=>{const{poolId:t="demo"}=oe(),s=I(),[r,a]=o.useState(0),[i,n]=o.useState([]),[c,m]=o.useState("Payment");return o.useEffect(()=>{if(!t){s("/");return}const l={netflix:{name:"Netflix",amount:19.99},spotify:{name:"Spotify",amount:9.99},amazon:{name:"Amazon Prime",amount:14.99},disney:{name:"Disney+",amount:8.99}}[t];if(l){a(l.amount),m(l.name),n([{id:"mock1",name:"Alice",amount:l.amount/4},{id:"mock2",name:"Bob",amount:l.amount/4},{id:"mock3",name:"Charlie",amount:l.amount/4},{id:"mock4",name:"Dana",amount:l.amount/4}]);return}a(25),n([{id:"mock1",name:"Alice",amount:25/4},{id:"mock2",name:"Bob",amount:25/4},{id:"mock3",name:"Charlie",amount:25/4},{id:"mock4",name:"Dana",amount:25/4}])},[t,s]),r<=0?null:e.jsx(pe,{children:e.jsx(it,{poolId:t||"demo",amount:r,availableContributors:i})})},ot=()=>{const t=Ae();return o.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),e.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 bg-background",children:e.jsxs(g,{className:"text-center",children:[e.jsx("h1",{className:"text-9xl font-bold text-primary/20",children:"404"}),e.jsx("h2",{className:"text-2xl font-bold mt-6 mb-3",children:"Page Not Found"}),e.jsx("p",{className:"text-muted-foreground mb-8 max-w-md mx-auto",children:"The page you're looking for doesn't exist or has been removed."}),e.jsxs(Ee,{to:"/",className:"btn-primary inline-flex items-center px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90",children:[e.jsx(Ie,{size:18,className:"mr-2"}),"Return Home"]})]})})},lt=new Oe,W=()=>e.jsx(ze,{client:lt,children:e.jsxs(qe,{children:[e.jsx(Be,{}),e.jsx(He,{}),e.jsx(Le,{children:e.jsxs(Re,{children:[e.jsx(T,{path:"/app",element:e.jsx(K,{})}),e.jsx(T,{path:"/app/*",element:e.jsx(K,{})}),e.jsx(T,{path:"/collect/:poolId",element:e.jsx(rt,{})}),e.jsx(T,{path:"/pay/:poolId",element:e.jsx(nt,{})}),e.jsx(T,{path:"*",element:e.jsx(ot,{})})]})})]})}),_=document.getElementById("root");if(_){const t=H(_);try{t.render(e.jsx(W,{}))}catch(s){console.error("Error rendering the app:",s),_.innerHTML='<div style="color: red; padding: 20px;">An error occurred while loading the application. Please refresh the page or check the console for more details.</div>'}}else{console.error("Failed to find the root element");const t=document.createElement("div");t.id="root",document.body.appendChild(t);const s=H(t);try{s.render(e.jsx(W,{}))}catch(r){console.error("Error rendering the app:",r),t.innerHTML='<div style="color: red; padding: 20px;">An error occurred while loading the application. Please refresh the page or check the console for more details.</div>'}}
//# sourceMappingURL=index-CTpRoIDj.js.map
