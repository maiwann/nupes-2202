"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5668],{5656:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return je},default:function(){return Ie},frontMatter:function(){return Le},metadata:function(){return Ae},toc:function(){return qe}});var r,a,i,o,l,c=t(7462),u=t(3366),s=t(7294),m=t(3905),d=t(5861),p=t(1880),g=t(7757),f=t.n(g),h=t(9218),v=t(2125),x=v.ZP.div(r||(r=(0,p.Z)(["\n  margin: 0 0 32px;\n"]))),b=(0,v.ZP)(h.DK)(a||(a=(0,p.Z)(["\n  margin-bottom: 4px;\n"]))),k=(0,v.ZP)(h.xv)(i||(i=(0,p.Z)(["\n  font-weight: bold;\n  margin-bottom: 2px;\n  line-height: 1.2em;\n"]))),Z=(0,v.ZP)(h.xv)(o||(o=(0,p.Z)(["\n  margin-bottom: 2px;\n  line-height: 1.2em;\n"]))),y=(0,v.ZP)(h.xv)(l||(l=(0,p.Z)(["\n  margin-bottom: 2px;\n  font-style: italic;\n  line-height: 1.2em;\n"]))),w=function(e,n){window.gapi.client.load("calendar","v3",(function(){e(!0)}))};var E,P,C,S,T,N,D,M,L,j,A,q,z,I,H,R,_,F,J,U,V,X,B,W,K,Q,Y,G,O=function(e){var n=new Date(Date.parse(e.start.dateTime)),t=new Date(Date.parse(e.end.dateTime));console.log("event",e);var r=e.location?e.location.replace(/, France$/,""):"";return s.createElement(x,{key:e.start.dateTime},s.createElement(b,null,e.summary),s.createElement(k,null,n.toLocaleDateString(),":"," ",n.toLocaleTimeString(void 0,{timeStyle:"short"})," -"," ",t.toLocaleTimeString(void 0,{timeStyle:"short"})),r&&s.createElement(y,null,r),e.description&&s.createElement(Z,null,e.description))},$=function(){var e=(0,s.useState)(),n=e[0],t=e[1];return(0,s.useEffect)((function(){var e=document.createElement("SCRIPT");e.setAttribute("type","text/javascript"),e.setAttribute("async","true"),e.setAttribute("defer","true"),e.setAttribute("src","https://apis.google.com/js/api.js"),e.addEventListener("load",(0,d.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,n){window.gapi.load("client",(function(){window.gapi.client.setApiKey("AIzaSyBB_V3txxLD4sjtR0xXayV2ZNcqD8Z_NIM"),w(e,n)}))}));case 2:if(!e.sent){e.next=8;break}return e.next=6,r="mldcdlabt7ku11r1jnpq65juos@group.calendar.google.com",window.gapi.client.calendar.events.list({calendarId:r,showDeleted:!1,singleEvents:!0,maxResults:1e3,orderBy:"startTime"});case 6:n=e.sent,t(n.result.items);case 8:case"end":return e.stop()}var r}),e)})))),document.head.appendChild(e)}),[t]),n?s.createElement(s.Fragment,null,n.map(O)):s.createElement("div",null,"chargement...")},ee=t(2186),ne=t(4571),te=function(e){var n,t=(n=e,Math.floor(n)-n!=0?2:0);return e.toLocaleString("fr",{style:"currency",currencyDisplay:"narrowSymbol",currency:"EUR",minimumFractionDigits:t})},re=(0,v.ZP)(ne.Z)(E||(E=(0,p.Z)(["\n  font-weight: bold;\n"]))),ae=v.ZP.span(P||(P=(0,p.Z)(["\n  height: 24px;\n  vertical-align: middle;\n  padding: 3px 12px 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1em;\n  border-radius: 8px;\n  ","\n"])),(function(e){var n=e.theme;return(0,v.iv)(C||(C=(0,p.Z)(["\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n  "])),n.colors.primary.background,n.colors.primary.foreground)})),ie=(0,v.ZP)(h.zx)(S||(S=(0,p.Z)(["\n  display: block;\n  width: 100%;\n  margin: 16px 0 8px;\n  height: auto;\n  padding: 8px;\n"]))),oe=v.ZP.div(T||(T=(0,p.Z)(["\n  font-weight: bold;\n"]))),le=v.ZP.div(N||(N=(0,p.Z)([""]))),ce=(0,v.ZP)(ne.Z)(D||(D=(0,p.Z)(["\n  margin: 32px 0 16px;\n  font-size: 13px;\n  color: #696969;\n"]))),ue=function(e){var n=e.selectedAmount,t=e.selectFinalAmount,r=(0,s.useMemo)((function(){return e=.34*n,Math.round(100*e)/100;var e}),[n]),a=(0,s.useMemo)((function(){return Math.floor(n/.34)}),[n]),i=(0,s.useCallback)((function(){t(n)}),[t,n]),o=(0,s.useCallback)((function(){t(a)}),[t,a]);return s.createElement("div",null,s.createElement(re,null,"Gr\xe2ce \xe0 la r\xe9duction d'imp\xf4ts de 66%, votre don ne vous co\xfbtera que\xa0:"," ",s.createElement(ae,null,te(r))),s.createElement(ne.Z,null,"En donnant maintenant ",te(a),", votre don ne vous co\xfbtera que les ",te(n),"\xa0 que vous souhaitiez donner initialement."),s.createElement(ie,{size:"big",variant:"primary-light",onClick:i},s.createElement(oe,null,"Donner ",te(n)),s.createElement(le,null,"soit ",te(r)," apr\xe8s r\xe9duction d'imp\xf4t")),s.createElement(ie,{size:"big",variant:"primary",onClick:o},s.createElement(oe,null,"Donner ",te(a)),s.createElement(le,null,"soit ",te(n)," apr\xe8s r\xe9duction d'imp\xf4t")),s.createElement(ce,null,"Les dons sont destin\xe9s \xe0 l\u2019AFE Julia Mignacca 2022, d\xe9clar\xe9e \xe0 la pr\xe9fecture de l'H\xe9rault, seule habilit\xe9e \xe0 recevoir les dons en faveur du candidate Julia Mignacca, dans le cadre de la campagne pour l\u2019\xe9lection l\xe9gislatives de 2022."))},se=v.ZP.input(M||(M=(0,p.Z)(['\n  font-family: "Acumin Pro";\n  font-size: 18px;\n  border: 0;\n  border-bottom: 2px solid black;\n  height: 24px;\n  padding: 0;\n  margin: 0 0 24px;\n  display: block;\n  outline: 0;\n  width: 100%;\n  ',"\n"])),(function(e){var n=e.theme;return(0,v.iv)(L||(L=(0,p.Z)(["\n    border-color: ",";\n  "])),n.colors.primary.background)})),me=(0,v.ZP)(h.zx)(j||(j=(0,p.Z)(["\n  width: 100%;\n  margin: 24px 0 16px;\n"]))),de=function(e){var n=e.close,t=e.selectedAmount,r=(0,s.useState)(""),a=r[0],i=r[1],o=(0,s.useState)(""),l=o[0],c=o[1],u=(0,s.useState)(""),m=u[0],d=u[1],p=(0,s.useState)(""),g=p[0],f=p[1],h=function(e,n){return(0,s.useCallback)((function(t,r,a,i){var o=Math.min(500,window.screen.availWidth),l=Math.min(600,window.screen.availHeight),c=window.screenLeft+window.screen.availWidth/2-o/2,u=window.screenTop+window.screen.availHeight/2-l/2,s=window.open("https://script.google.com/macros/s/AKfycbwPLxUkHeXSDjbQbSHXejWCKY1P0AuWk9oVm0XExQzuJYZJAI1mneojEuEUa2eIMcZ-/exec?lastName="+encodeURIComponent(r)+"&firstName="+encodeURIComponent(t)+"&amount="+encodeURIComponent(e)+"&email="+encodeURIComponent(a)+"&phone="+encodeURIComponent(i),"_blank","height="+l+",width="+o+",top="+u+",left="+c+",toolbar=no,titlebar=no,status=no,menubar=no");!function e(){s.closed?n():window.setTimeout(e,250)}()}),[e,n])}(t,n),v=(0,s.useCallback)((function(e){e.preventDefault(),h(a,l,m,g)}),[t,a,l,m,g,n]);return s.createElement("form",{onSubmit:v},s.createElement(ne.Z,null,"Merci de remplir de formulaire suivant, nous vous recontacterons prochainement pour finaliser votre don."),s.createElement(se,{type:"text",name:"firstName",placeholder:"Pr\xe9nom",value:a,onChange:function(e){i(e.currentTarget.value)},autoComplete:"on",autoFocus:!0}),s.createElement(se,{type:"text",name:"lastName",placeholder:"Nom",value:l,onChange:function(e){c(e.currentTarget.value)},autoComplete:"on"}),s.createElement(se,{type:"email",name:"email",placeholder:"adresse e-mail",value:m,onChange:function(e){d(e.currentTarget.value)},autoComplete:"on"}),s.createElement(se,{type:"phone",name:"phone",placeholder:"T\xe9l\xe9phone",value:g,onChange:function(e){f(e.currentTarget.value)},autoComplete:"on"}),s.createElement(me,{type:"submit",variant:"primary",size:"big"},"Valider"))},pe=function(e){var n=e.visible,t=e.close,r=e.selectedAmount,a=(0,s.useState)(),i=a[0],o=a[1];return(0,s.useEffect)((function(){n||o(void 0)}),[n,o]),s.createElement(h.u_,{visible:n,close:t},s.createElement(h.Dx,{variant:"primary"},"Soutenir la campagne"),i?s.createElement(de,{selectedAmount:i,close:t}):s.createElement(ue,{selectedAmount:r,selectFinalAmount:o}))},ge=v.ZP.button(A||(A=(0,p.Z)(["\n  border: 0;\n  outline: 0;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  flex: 1 0 160px;\n  margin: 8px;\n  font-size: 18px;\n  padding: 6px;\n  box-sizing: border-box;\n  ","\n"])),(function(e){var n=e.theme;return(0,v.iv)(q||(q=(0,p.Z)(["\n    background-color: ",";\n    color: ",";\n  "])),n.colors.primary.lightBackground,n.colors.primary.foreground)})),fe=(0,v.ZP)(ge)(z||(z=(0,p.Z)(["\n  cursor: pointer;\n  ","\n"])),(function(e){var n=e.theme;return(0,v.iv)(I||(I=(0,p.Z)(["\n    :hover {\n      background-color: ",";\n    }\n  "])),n.colors.primary.background)})),he=function(e){var n=e.donation,t=e.index,r=e.setSelectedDonation,a=(0,s.useCallback)((function(){r(t)}),[r,t]);return s.createElement(fe,{onClick:a},te(n))},ve=v.ZP.div(H||(H=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),xe=v.ZP.div(R||(R=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px -8px;\n  flex-wrap: wrap;\n  align-self: stretch;\n"]))),be=v.ZP.div(_||(_=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  background-color: ",";\n  border-radius: 8px;\n  padding: 0 8px;\n"])),h.Oq.WHITE),ke=v.ZP.input(F||(F=(0,p.Z)(["\n  flex: 1;\n  width: 1%;\n  background: none;\n  border: 0;\n  min-width: 0;\n  align-self: stretch;\n  font-size: 18px;\n  line-height: 100%;\n  text-align: center;\n"]))),Ze=v.ZP.button(J||(J=(0,p.Z)(["\n  height: 43px;\n  flex: 0 0 43px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  outline: 0;\n  margin: 0 0 0 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  ","\n"])),(function(e){var n=e.theme;return(0,v.iv)(U||(U=(0,p.Z)(["\n    background-color: ",";\n  "])),n.colors.primary.background)})),ye=function(e){var n=e.suggestions,t=e.children,r=(0,s.useState)(-1),a=r[0],i=r[1],o=(0,s.useState)(!1),l=o[0],c=o[1],u=(0,s.useState)(""),m=u[0],d=u[1],p=(0,s.useCallback)((function(){return c(!0)}),[c]),g=(0,s.useCallback)((function(){return c(!1)}),[c]),f=(0,s.useCallback)((function(e){i(e),p()}),[p,i]),h=(0,s.useMemo)((function(){if(a<0||a>=n.length){var e=parseFloat(m);return isNaN(e)?0:e}return n[a]}),[n,a,m]),v=(0,s.useCallback)((function(e,n){return s.createElement(he,{key:n,index:n,donation:e,setSelectedDonation:f,selectedDonation:a})}),[f,a]),x=(0,s.useCallback)((function(e){d(e.currentTarget.value)}),[d]),b=(0,s.useCallback)((function(e){e.preventDefault(),p()}),[p]);return s.createElement(s.Fragment,null,s.createElement(ve,null,s.createElement(xe,null,n&&n.map(v),s.createElement(ge,{as:"form",onSubmit:b},s.createElement(be,null,s.createElement(ke,{value:m,onChange:x,type:"number"}),s.createElement("span",null,"\u20ac")),s.createElement(Ze,null,s.createElement(ee.e,null)))),t,s.createElement(pe,{visible:l,close:g,selectedAmount:h})))},we=t(4996),Ee=v.ZP.picture(V||(V=(0,p.Z)(["\n  display: flex;\n  height: 40vh;\n  text-align: center;\n  justify-content: center;\n  align-items: flex-end;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  margin: 0 -1rem 24px;\n  ","\n  @media only screen and (max-width: 996px) {\n    height: 25vh;\n  }\n"])),(function(e){var n=e.backgroundImage;return(0,v.iv)(X||(X=(0,p.Z)(['\n      background-image: url("','");\n    '])),n)})),Pe=v.ZP.img(B||(B=(0,p.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n"]))),Ce=function(){var e=(0,we.Z)("/img/cover-background.jpg"),n=(0,we.Z)("/img/julia-mignacca.webp"),t=(0,we.Z)("/img/julia-mignacca.png");return s.createElement(Ee,{backgroundImage:e},s.createElement("source",{srcSet:n,type:"image/webp"}),s.createElement("source",{srcSet:t,type:"image/png"}),s.createElement(Pe,{src:t,alt:"Julia Mignacca"}))},Se=v.ZP.div(W||(W=(0,p.Z)(["\n  display: flex;\n  flex-wrap; wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 48px 0;\n"]))),Te=function(){return s.createElement(Se,null,s.createElement(h.Lh,{height:80}),s.createElement(h.VR,{height:70}))},Ne=v.ZP.div(K||(K=(0,p.Z)(["\n  max-width: 500px;\n  width: 100%;\n  margin: auto;\n  display: block;\n"]))),De=function(){return s.createElement(Ne,null,s.createElement(h.hb,{width:"100%"}))},Me=(v.ZP.div(Q||(Q=(0,p.Z)(["\n  position: relative;\n  ","\n"])),(function(e){var n=e.ratio;return(0,v.iv)(Y||(Y=(0,p.Z)(["\n    padding-top: ","%;\n  "])),100*(n||.5625))})),v.ZP.div(G||(G=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"]))),["components"]),Le={title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"my hello page description",hide_table_of_contents:!0},je=void 0,Ae={type:"mdx",permalink:"/nupes-mignacca/",source:"@site/src/pages/index.mdx",title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"my hello page description",frontMatter:{title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"my hello page description",hide_table_of_contents:!0}},qe=[],ze={toc:qe};function Ie(e){var n=e.components,t=(0,u.Z)(e,Me);return(0,m.kt)("wrapper",(0,c.Z)({},ze,t,{components:n,mdxType:"MDXLayout"}),(0,m.kt)(De,{mdxType:"NupesLogo"}),(0,m.kt)(Ce,{mdxType:"Header"}),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Les 12 et 19 juin")," prochains ont lieu les \xe9lections l\xe9gislatives, le troisi\xe8me tour\nde l'\xe9lection pr\xe9sidentielle qui permettra d'\xe9lire vos d\xe9put\xe9s et de choisir le prochain\ngouvernement."),(0,m.kt)("p",null,"\xc0 cette occasion la gauche et les \xe9cologistes ont fait le choix historique\nde ",(0,m.kt)("strong",{parentName:"p"},"se pr\xe9senter unis")," devant vous dans tout le pays."),(0,m.kt)("p",null,"Je suis la candidate de cette\nnouvelle union sur ",(0,m.kt)("strong",{parentName:"p"},"notre 3\xe8me circonscription de l'H\xe9rault")," et j'en mesure toute la\nresponsabilit\xe9."),(0,m.kt)("p",null,"Face au changement climatique et \xe0 la casse du service public, ",(0,m.kt)("strong",{parentName:"p"},"ensemble nous pouvons gagner. ")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"Ensemble construisons cet autre monde possible !")),(0,m.kt)(h.Dx,{variant:"light-primary",mdxType:"Title"},"Soutenir la campagne"),(0,m.kt)(ye,{suggestions:[20,50,100],mdxType:"DonationForm"},(0,m.kt)("p",null,"Pour financer les d\xe9penses li\xe9es \xe0 l\u2019organisation d\u2019\xe9v\xe9nements, \xe0 l\u2019achat de mat\xe9riel, au fonctionnement de ce site, etc, nous avons besoin du soutien financier de chacun\xb7e d\u2019entre vous.")),(0,m.kt)(h.Dx,{variant:"light-secondary",mdxType:"Title"},"Nous rencontrer"),(0,m.kt)($,{mdxType:"Calendar"}),(0,m.kt)(h.Dx,{variant:"light-primary",mdxType:"Title"},"Notre programme"),(0,m.kt)("p",null,"Avec la majorit\xe9, soit 289 d\xe9put\xe9s, il est possible de gouverner le pays\net d\u2019imposer un Premier ministre \xe0 Macron\xa0!"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Retour \xe0 la ",(0,m.kt)("strong",{parentName:"li"},"retraite \xe0 60 ans")),(0,m.kt)("li",{parentName:"ul"},"Augmentation du ",(0,m.kt)("strong",{parentName:"li"},"SMIC \xe0 1 500 \u20ac")),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("strong",{parentName:"li"},"Reconstruire l'\xe9cole publique")," la\xefque et gratuite"),(0,m.kt)("li",{parentName:"ul"},"Passer \xe0 une ",(0,m.kt)("strong",{parentName:"li"},"agriculture \xe9cologique et payasanne")),(0,m.kt)("li",{parentName:"ul"},"Passer \xe0 la ",(0,m.kt)("strong",{parentName:"li"},"6\xe8me R\xe9publique")," pour une v\xe9ritable d\xe9mocratie")),(0,m.kt)(Te,{mdxType:"LogoSoup"}))}Ie.isMDXComponent=!0},2186:function(e,n,t){t.d(n,{e:function(){return l}});var r=t(7462),a=t(3366),i=t(7294),o=["color"],l=function(e){var n=e.color,t=void 0===n?"white":n,l=(0,a.Z)(e,o);return i.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:"13",height:"12",viewBox:"0 0 13 12",fill:"none"},l),i.createElement("path",{d:"M6.3331 11.6362L12.0604 5.90891L6.3331 0.181641L5.01491 1.49414L8.47514 4.94869H0.367188V6.86914H8.47514L5.01491 10.3294L6.3331 11.6362Z",fill:t}))}},4571:function(e,n,t){var r,a=t(3366),i=t(1880),o=t(7294),l=t(9218),c=t(2125),u=["children"],s=(0,c.ZP)(l.xv)(r||(r=(0,i.Z)(["\n  font-size: 18px;\n"])));n.Z=function(e){var n=e.children,t=(0,a.Z)(e,u);return o.createElement(s,t,n)}}}]);