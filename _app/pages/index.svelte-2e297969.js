import{S as Gt,i as Jt,s as qt,e as l,t as u,k as p,c as r,a as o,g as f,d as a,n as m,b as s,f as B,E as t,J as $t,T as Rt,j as zt,K as Kt,m as Ut,L as Bt,o as Yt,x as Dt,u as Ft,v as Mt}from"../chunks/vendor-fe6d085e.js";let d={};{d.init=()=>{d.parts=document.querySelectorAll(".scrolljs"),d.num=window.innerHeight/100,window.addEventListener("scroll",d.scroll_function),d.scroll_function(),d.scroll_function()},d.mutationInit=()=>{d.init(),new MutationObserver(()=>{d.init()}).observe(document.body,{childList:!0})};let $=null;window.addEventListener("scroll",function(){$!==null&&clearTimeout($),$=setTimeout(function(){d.scroll_function()},150)},!1),window.addEventListener("resize",()=>{d.num=window.innerHeight/100}),d.scroll_function=()=>{for(var n of d.parts){let e=n.getAttribute("data-range").split("to");if(window.pageYOffset>e[0]*d.num&&window.pageYOffset<e[1]*d.num){let c=(window.pageYOffset-e[0]*d.num)/(e[1]*d.num-e[0]*d.num);n.style.animationDelay="-"+c.toString()+"s"}else window.pageYOffset>e[0]*d.num?n.style.animationDelay="-0.999s":n.style.animationDelay="0s"}}}function Qt($){let n,e,c,w,C,g,N,E,I,x,O,i;return{c(){n=l("section"),e=l("a"),c=l("span"),w=u("Contact Ian"),C=p(),g=l("span"),N=p(),E=l("span"),I=p(),x=l("span"),O=p(),i=l("span"),this.h()},l(_){n=r(_,"SECTION",{class:!0});var S=o(n);e=r(S,"A",{href:!0,class:!0});var y=o(e);c=r(y,"SPAN",{class:!0});var J=o(c);w=f(J,"Contact Ian"),J.forEach(a),C=m(y),g=r(y,"SPAN",{class:!0}),o(g).forEach(a),N=m(y),E=r(y,"SPAN",{class:!0}),o(E).forEach(a),I=m(y),x=r(y,"SPAN",{class:!0}),o(x).forEach(a),O=m(y),i=r(y,"SPAN",{class:!0}),o(i).forEach(a),y.forEach(a),S.forEach(a),this.h()},h(){s(c,"class","text svelte-1b8dvt2"),s(g,"class","line -right svelte-1b8dvt2"),s(E,"class","line -top svelte-1b8dvt2"),s(x,"class","line -left svelte-1b8dvt2"),s(i,"class","line -bottom svelte-1b8dvt2"),s(e,"href","mailto:code3@vivaldi.net"),s(e,"class","svelte-1b8dvt2"),s(n,"class","portfolio-experiment mx-auto svelte-1b8dvt2")},m(_,S){B(_,n,S),t(n,e),t(e,c),t(c,w),t(e,C),t(e,g),t(e,N),t(e,E),t(e,I),t(e,x),t(e,O),t(e,i)},p:$t,i:$t,o:$t,d(_){_&&a(n)}}}class Wt extends Gt{constructor(n){super();Jt(this,n,null,Qt,qt,{})}}function Xt($){let n,e;return{c(){n=l("p"),e=u("I'm Ian, and I make cool websites and stuff."),this.h()},l(c){n=r(c,"P",{class:!0});var w=o(n);e=f(w,"I'm Ian, and I make cool websites and stuff."),w.forEach(a),this.h()},h(){s(n,"class","m-5 mt-10")},m(c,w){B(c,n,w),t(n,e)},d(c){c&&a(n)}}}function Zt($){let n,e,c,w,C,g,N,E,I,x,O,i,_,S,y,J,Q,k,U,W,X,Z,L,Y,tt,et,at,j,D,st,nt,lt,T,F,rt,ot,it,H,M,ct,dt,ut,A,R,ft,ht,pt,P,mt,q,V,G,xt,vt,K;return g=new Rt({props:{$$slots:{default:[Xt]},$$scope:{ctx:$}}}),P=new Wt({}),{c(){n=p(),e=l("section"),c=l("h1"),w=u("Hey, there!"),C=p(),zt(g.$$.fragment),N=p(),E=l("p"),I=l("span"),x=u("The stack:"),O=p(),i=l("ol"),_=l("li"),S=l("h3"),y=u("\u2615 Javascript"),J=u(`
			An easy language for building great apps, sites, and servers.`),Q=p(),k=l("li"),U=l("h3"),W=u("\u{1F468}\u200D\u{1F4BB} Typescript"),X=u(`
			Javascript with type safety. Typescript brings many benefits for projects in the long term, it's
			probably a good idea to have your app coded in typescript instead of Javascript.`),Z=p(),L=l("li"),Y=l("h3"),tt=u("\u26F0\uFE0F Vue"),et=u(`
			Vue, pronounced 'view,' is a library like react for creating great user interfaces. Unlike react,
			it is fairly small and has a cleaner syntax.`),at=p(),j=l("li"),D=l("h3"),st=u("\u26F0\uFE0F Vuetify"),nt=u(`
			Vuetify is a popular library of pre-made components that allow developers to make apps much more
			quickly.`),lt=p(),T=l("li"),F=l("h3"),rt=u("\u{1F52B} GUN"),ot=u(`
			GUN is a decentralized graph database, great for building apps without having to build a backend.`),it=p(),H=l("li"),M=l("h3"),ct=u("\u{1F58C}\uFE0F CSS"),dt=u(`
			CSS is used to create beatiful website styles. In addition to plain CSS, I have experience with utility libraries like Tailwind.`),ut=p(),A=l("li"),R=l("h3"),ft=u("\u{1F427}Linux"),ht=u(`
			Linux is an operating system used for most online servers, among many other things.`),pt=p(),zt(P.$$.fragment),mt=p(),q=l("p"),V=l("a"),G=l("img"),vt=u(" Follow @code3z on Github"),this.h()},l(h){Kt('[data-svelte="svelte-1anpopb"]',document.head).forEach(a),n=m(h),e=r(h,"SECTION",{});var v=o(e);c=r(v,"H1",{class:!0,"data-range":!0});var kt=o(c);w=f(kt,"Hey, there!"),kt.forEach(a),C=m(v),Ut(g.$$.fragment,v),N=m(v),E=r(v,"P",{class:!0});var Lt=o(E);I=r(Lt,"SPAN",{class:!0});var jt=o(I);x=f(jt,"The stack:"),jt.forEach(a),Lt.forEach(a),O=m(v),i=r(v,"OL",{class:!0});var b=o(i);_=r(b,"LI",{class:!0,"data-range":!0});var gt=o(_);S=r(gt,"H3",{});var Tt=o(S);y=f(Tt,"\u2615 Javascript"),Tt.forEach(a),J=f(gt,`
			An easy language for building great apps, sites, and servers.`),gt.forEach(a),Q=m(b),k=r(b,"LI",{class:!0,"data-range":!0});var _t=o(k);U=r(_t,"H3",{});var Ht=o(U);W=f(Ht,"\u{1F468}\u200D\u{1F4BB} Typescript"),Ht.forEach(a),X=f(_t,`
			Javascript with type safety. Typescript brings many benefits for projects in the long term, it's
			probably a good idea to have your app coded in typescript instead of Javascript.`),_t.forEach(a),Z=m(b),L=r(b,"LI",{class:!0,"data-range":!0});var yt=o(L);Y=r(yt,"H3",{});var At=o(Y);tt=f(At,"\u26F0\uFE0F Vue"),At.forEach(a),et=f(yt,`
			Vue, pronounced 'view,' is a library like react for creating great user interfaces. Unlike react,
			it is fairly small and has a cleaner syntax.`),yt.forEach(a),at=m(b),j=r(b,"LI",{class:!0,"data-range":!0});var bt=o(j);D=r(bt,"H3",{});var Ct=o(D);st=f(Ct,"\u26F0\uFE0F Vuetify"),Ct.forEach(a),nt=f(bt,`
			Vuetify is a popular library of pre-made components that allow developers to make apps much more
			quickly.`),bt.forEach(a),lt=m(b),T=r(b,"LI",{class:!0,"data-range":!0});var wt=o(T);F=r(wt,"H3",{});var Nt=o(F);rt=f(Nt,"\u{1F52B} GUN"),Nt.forEach(a),ot=f(wt,`
			GUN is a decentralized graph database, great for building apps without having to build a backend.`),wt.forEach(a),it=m(b),H=r(b,"LI",{class:!0,"data-range":!0});var Et=o(H);M=r(Et,"H3",{});var Ot=o(M);ct=f(Ot,"\u{1F58C}\uFE0F CSS"),Ot.forEach(a),dt=f(Et,`
			CSS is used to create beatiful website styles. In addition to plain CSS, I have experience with utility libraries like Tailwind.`),Et.forEach(a),ut=m(b),A=r(b,"LI",{class:!0,"data-range":!0});var It=o(A);R=r(It,"H3",{});var Pt=o(R);ft=f(Pt,"\u{1F427}Linux"),Pt.forEach(a),ht=f(It,`
			Linux is an operating system used for most online servers, among many other things.`),It.forEach(a),b.forEach(a),pt=m(v),Ut(P.$$.fragment,v),mt=m(v),q=r(v,"P",{class:!0});var Vt=o(q);V=r(Vt,"A",{href:!0});var St=o(V);G=r(St,"IMG",{alt:!0,class:!0,src:!0}),vt=f(St," Follow @code3z on Github"),St.forEach(a),Vt.forEach(a),v.forEach(a),this.h()},h(){document.title="Home",s(c,"class","m-3 font-extrabold text-5xl scrolljs animate__animated animate__fadeOutRight svelte-1nsf87g"),s(c,"data-range","1to30"),s(I,"class","orange-underline"),s(E,"class","ml-5 mt-20 text-base"),s(_,"class","scrolljs svelte-1nsf87g"),s(_,"data-range","0to10"),s(k,"class","scrolljs svelte-1nsf87g"),s(k,"data-range","15to30"),s(L,"class","scrolljs svelte-1nsf87g"),s(L,"data-range","30to45"),s(j,"class","scrolljs svelte-1nsf87g"),s(j,"data-range","45to65"),s(T,"class","scrolljs svelte-1nsf87g"),s(T,"data-range","65to90"),s(H,"class","scrolljs svelte-1nsf87g"),s(H,"data-range","90to120"),s(A,"class","scrolljs svelte-1nsf87g"),s(A,"data-range","120to150"),s(i,"class","m-5 svelte-1nsf87g"),s(G,"alt","github"),s(G,"class","icon svelte-1nsf87g"),Bt(G.src,xt="/icons8-github.gif")||s(G,"src",xt),s(V,"href","https://github.com/code3z"),s(q,"class","flex justify-center font-sans mt-20 m-5 text-underline")},m(h,z){B(h,n,z),B(h,e,z),t(e,c),t(c,w),t(e,C),Yt(g,e,null),t(e,N),t(e,E),t(E,I),t(I,x),t(e,O),t(e,i),t(i,_),t(_,S),t(S,y),t(_,J),t(i,Q),t(i,k),t(k,U),t(U,W),t(k,X),t(i,Z),t(i,L),t(L,Y),t(Y,tt),t(L,et),t(i,at),t(i,j),t(j,D),t(D,st),t(j,nt),t(i,lt),t(i,T),t(T,F),t(F,rt),t(T,ot),t(i,it),t(i,H),t(H,M),t(M,ct),t(H,dt),t(i,ut),t(i,A),t(A,R),t(R,ft),t(A,ht),t(e,pt),Yt(P,e,null),t(e,mt),t(e,q),t(q,V),t(V,G),t(V,vt),K=!0},p(h,[z]){const v={};z&1&&(v.$$scope={dirty:z,ctx:h}),g.$set(v)},i(h){K||(Dt(g.$$.fragment,h),Dt(P.$$.fragment,h),K=!0)},o(h){Ft(g.$$.fragment,h),Ft(P.$$.fragment,h),K=!1},d(h){h&&a(n),h&&a(e),Mt(g),Mt(P)}}}const ee=!0;d.mutationInit();class ae extends Gt{constructor(n){super();Jt(this,n,null,Zt,qt,{})}}export{ae as default,ee as prerender};