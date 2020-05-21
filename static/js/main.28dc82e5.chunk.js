(this["webpackJsonpch0-3d-animated-button"]=this["webpackJsonpch0-3d-animated-button"]||[]).push([[0],{46:function(e,t,a){e.exports=a(65)},50:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),r=a.n(o),c=(a(50),a(7)),l=a(80),s=a(40),m=a(35);a(56);function u(e){return i.a.createElement("a",{href:e.social.url,title:e.social.alt},i.a.createElement("div",{className:"Project-social"},i.a.createElement(m.a,{icon:e.social.icon,alt:e.social.alt})))}var f=function(e){return i.a.createElement("section",{className:"Project-presentation"},e.body,i.a.createElement("section",{className:"Project-presentation-socials"},e.socials.map((function(e){return i.a.createElement(u,{key:e.alt,social:e})}))))},p=a(17),E=a(5),b=a(12);var h=function(e){return i.a.createElement(b.a.meshLambertMaterial,{attach:"material",color:2966113,opacity:e.opacity,transparent:!0})};var y=function(e){var t=E.Math.degToRad,a=Object(b.b)({position:e.fireAnimation?[1,3.25,-2]:[1,2.25,-4],opacity:e.fireAnimation?1:0,rotation:e.fireAnimation?[t(-25),t(-20),0]:[t(-35),t(10),0]}),n=a.position,o=a.rotation,r=a.opacity;return i.a.createElement(b.a.mesh,Object.assign({},e,{position:n,rotation:o}),i.a.createElement("torusBufferGeometry",{attach:"geometry",args:[1.05,.4,100,100]}),i.a.createElement(h,{opacity:r}))};var g=function(e){var t=Object(n.useRef)(),a=E.Math.degToRad,o=Object(b.b)({position:e.fireAnimation?[-4.5,1.5,-4]:[-4.25,1,-10],opacity:e.fireAnimation?1:0,rotation:e.fireAnimation?[a(-28),a(220),a(-42)]:[a(-27),a(75),a(-19)]}),r=o.position,c=o.rotation,l=o.opacity;return i.a.createElement(b.a.mesh,Object.assign({},e,{ref:t,position:r,rotation:c}),i.a.createElement("coneBufferGeometry",{attach:"geometry",args:[.75,1.5,100]}),i.a.createElement(h,{opacity:l}))};var v=function(e){var t=Object(n.useRef)(),a=Object(b.b)({position:e.fireAnimation?[-1,-1.25,1]:[-.5,-.8,-1],opacity:e.fireAnimation?1:0}),o=a.position,r=a.opacity;return i.a.createElement(b.a.mesh,Object.assign({},e,{ref:t,position:o,opacity:r}),i.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[1,32,32]}),i.a.createElement(h,{opacity:r}))};var d=function(e){var t=Object(n.useRef)(),a=E.Math.degToRad,o=Object(b.b)({position:e.fireAnimation?[3.5,1.5,-1.2]:[2.5,.3,-3],opacity:e.fireAnimation?1:0,rotation:e.fireAnimation?[a(-111),a(0),a(25)]:[a(-141),a(-25),a(2)]}),r=o.position,c=o.rotation,l=o.opacity;return i.a.createElement(b.a.mesh,Object.assign({},e,{ref:t,position:r,rotation:c}),i.a.createElement("icosahedronBufferGeometry",{attach:"geometry",args:[1,0]}),i.a.createElement(h,{opacity:l}))};var A=function(e){return i.a.createElement(p.a,{className:"Button-canvas"},i.a.createElement("ambientLight",null),i.a.createElement("pointLight",{intensity:5,position:[-180,-180,-180]}),i.a.createElement("pointLight",{intensity:3,color:16659574,position:[51,-25,-7]}),i.a.createElement("pointLight",{intensity:3,color:16659574,position:[69,49,-20]}),i.a.createElement("pointLight",{intensity:3,color:3225931,position:[-180,180,147]}),i.a.createElement("pointLight",{intensity:3,color:13007615,position:[-1e3,444,547]}),i.a.createElement(y,{fireAnimation:e.fireAnimation}),i.a.createElement(g,{fireAnimation:e.fireAnimation}),i.a.createElement(v,{fireAnimation:e.fireAnimation}),i.a.createElement(d,{fireAnimation:e.fireAnimation}))},j=a(24);a(61);var O=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],r=a[1],l=Object(j.b)({transform:o?"scale(1.0)":"scale(0.8)"}).transform;return Object(n.useEffect)((function(){r(e.forceHover)}),[e.forceHover]),i.a.createElement("div",{className:"Button-container"},i.a.createElement(j.a.div,{onMouseEnter:function(e){e.preventDefault(),r(!0)},onMouseLeave:function(e){e.preventDefault(),r(!1)},className:"Button-hoverable-area ".concat(o?"hovered":""),style:{transform:l}}),i.a.createElement(j.a.label,{className:"Button-label",style:{transform:l}},"play"),i.a.createElement(A,{fireAnimation:o}),i.a.createElement(j.a.div,{className:"Button-background ".concat(o?"hovered":""),style:{transform:l}}))};a(62);var N=function(e){var t=[{alt:"GitHub",url:"https://github.com/UI-Challenges/ch0-3d-animated-button",icon:s.a}],a=Object(n.useState)(!1),o=Object(c.a)(a,2),r=o[0],m=o[1];return i.a.createElement("div",{className:"App"},i.a.createElement(f,{socials:t,body:i.a.createElement(O,{forceHover:r})}),i.a.createElement("section",{className:"Mobile-view"},i.a.createElement("h1",null,"On mobile?"),i.a.createElement("p",null,"Trigger an animation with the switch beneath",i.a.createElement("span",{role:"img","aria-label":"much-love"},"\ud83d\ude4c")),i.a.createElement("div",{className:"Mobile-animation-trigger-container"},i.a.createElement(l.a,{className:"Mobile-animation-trigger",type:"checkbox",checked:r,onChange:function(e){e.preventDefault(),m(e.target.checked)},color:"secondary",name:"".concat(r?"Disable":"Trigger"," animation")}))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.28dc82e5.chunk.js.map