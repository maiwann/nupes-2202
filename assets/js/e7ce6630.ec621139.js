"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5668],{2676:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return Ue},default:function(){return Xe},frontMatter:function(){return Fe},metadata:function(){return Be},toc:function(){return Ve}});var r,a,i,o,l,c,u,s,m,d,p,g,f,v,h,x,b,Z,k,y,E,w,P,C,S,N,A,M,j,I,T,D,L,q,z,H,R,J=t(7462),_=t(3366),F=t(7294),U=t(3905),B=t(5861),V=t(1880),K=t(7757),X=t.n(K),W=t(9218),Q=t(2125),Y=t(4571),$=Q.ZP.div(r||(r=(0,V.Z)(["\n  margin: 0 8px 16px;\n  border: 1px solid #eeeeee;\n  padding: 16px 12px;\n  min-width: 300px;\n  flex: 1 1 auto;\n"]))),G=Q.ZP.div(a||(a=(0,V.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  white-space: nowrap;\n"]))),O=(0,Q.ZP)(W.y$)(i||(i=(0,V.Z)(["\n  ::before {\n    left: 0;\n    right: 0;\n  }\n"]))),ee=(0,Q.ZP)(W.DK)(o||(o=(0,V.Z)(['\n  flex: 1;\n  white-space: normal;\n  font-family: "Acumin Pro Condensed Black";\n  margin: 0;\n  text-align: right;\n']))),ne=(0,Q.ZP)(Y.Z)(l||(l=(0,V.Z)(["\n  margin: 4px 8px 0 0;\n  line-height: 1.2em;\n"]))),te=(0,Q.ZP)(Y.Z)(c||(c=(0,V.Z)(['\n  margin: 5px 8px 0 0;\n  font-family: "Acumin Pro Condensed Black";\n']))),re=(0,Q.ZP)(Y.Z)(u||(u=(0,V.Z)(["\n  margin-bottom: 2px;\n  font-style: italic;\n  line-height: 1.2em;\n"]))),ae=function(e){var n=e.event,t=new Date(Date.parse(n.start.dateTime)),r=new Date(Date.parse(n.end.dateTime)),a=n.location?n.location.replace(/, France$/,""):"";return F.createElement($,{key:n.start.dateTime},F.createElement(G,null,F.createElement(ne,null,F.createElement(O,null,t.toLocaleDateString(void 0,{day:"2-digit",month:"long"}))),F.createElement(te,null,t.toLocaleTimeString(void 0,{timeStyle:"short"})," -"," ",r.toLocaleTimeString(void 0,{timeStyle:"short"})),F.createElement(ee,null,n.summary)),a&&F.createElement(re,null,a))},ie=function(e){return new Promise((function(n,t){window.gapi.load("client",(function(){window.gapi.client.setApiKey(e),oe(n,t)}))}))},oe=function(e,n){window.gapi.client.load("calendar","v3",(function(){e(!0)}))},le=function(e){return window.gapi.client.calendar.events.list({calendarId:e,showDeleted:!1,singleEvents:!0,maxResults:1e3,orderBy:"startTime"})},ce=Q.ZP.div(s||(s=(0,V.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: -8px;\n  flex-wrap: wrap;\n"]))),ue=function(e){return F.createElement(ae,{key:e.start.dateTime,event:e})},se=function(e){var n=e.calendarId,t=e.googleApiKey,r=(0,F.useState)(),a=r[0],i=r[1];return(0,F.useEffect)((function(){(function(e){return new Promise((function(n,t){var r=document.createElement("SCRIPT");r.setAttribute("type","text/javascript"),r.setAttribute("async","true"),r.setAttribute("defer","true"),r.setAttribute("src","https://apis.google.com/js/api.js"),r.addEventListener("load",(0,B.Z)(X().mark((function r(){return X().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ie(e);case 2:r.sent?n():t("unable to load calendar");case 4:case"end":return r.stop()}}),r)})))),document.head.appendChild(r)}))})(t).then((0,B.Z)(X().mark((function e(){var t;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le(n);case 2:t=e.sent,i(t.result.items);case 4:case"end":return e.stop()}}),e)}))))}),[i]),a?F.createElement(ce,null,a.map(ue)):F.createElement(Y.Z,null,"chargement du calendrier...")},me=t(2186),de=function(e){var n,t=(n=e,Math.floor(n)-n!=0?2:0);return e.toLocaleString("fr",{style:"currency",currencyDisplay:"narrowSymbol",currency:"EUR",minimumFractionDigits:t})},pe=(0,Q.ZP)(Y.Z)(m||(m=(0,V.Z)(["\n  font-weight: bold;\n"]))),ge=Q.ZP.span(d||(d=(0,V.Z)(["\n  height: 24px;\n  vertical-align: middle;\n  padding: 3px 12px 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1em;\n  border-radius: 8px;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(p||(p=(0,V.Z)(["\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n  "])),n.colors.primary.background,n.colors.primary.foreground)})),fe=(0,Q.ZP)(W.zx)(g||(g=(0,V.Z)(["\n  display: block;\n  width: 100%;\n  margin: 16px 0 8px;\n  height: auto;\n  padding: 8px;\n"]))),ve=Q.ZP.div(f||(f=(0,V.Z)(["\n  font-weight: bold;\n"]))),he=Q.ZP.div(v||(v=(0,V.Z)([""]))),xe=(0,Q.ZP)(Y.Z)(h||(h=(0,V.Z)(["\n  margin: 32px 0 16px;\n  font-size: 13px;\n  color: #696969;\n"]))),be=function(e){var n=e.selectedAmount,t=e.selectFinalAmount,r=(0,F.useMemo)((function(){return e=.34*n,Math.round(100*e)/100;var e}),[n]),a=(0,F.useMemo)((function(){return Math.floor(n/.34)}),[n]),i=(0,F.useCallback)((function(){t(n)}),[t,n]),o=(0,F.useCallback)((function(){t(a)}),[t,a]);return F.createElement("div",null,F.createElement(pe,null,"Gr\xe2ce \xe0 la r\xe9duction d'imp\xf4ts de 66%, votre don ne vous co\xfbtera que\xa0:"," ",F.createElement(ge,null,de(r))),F.createElement(Y.Z,null,"En donnant maintenant ",de(a),", votre don ne vous co\xfbtera que les ",de(n),"\xa0 que vous souhaitiez donner initialement."),F.createElement(fe,{size:"big",variant:"primary-light",onClick:i},F.createElement(ve,null,"Donner ",de(n)),F.createElement(he,null,"soit ",de(r)," apr\xe8s r\xe9duction d'imp\xf4t")),F.createElement(fe,{size:"big",variant:"primary",onClick:o},F.createElement(ve,null,"Donner ",de(a)),F.createElement(he,null,"soit ",de(n)," apr\xe8s r\xe9duction d'imp\xf4t")),F.createElement(xe,null,"Les dons sont destin\xe9s \xe0 l\u2019AFE Julia Mignacca 2022, d\xe9clar\xe9e \xe0 la pr\xe9fecture de l'H\xe9rault, seule habilit\xe9e \xe0 recevoir les dons en faveur du candidate Julia Mignacca, dans le cadre de la campagne pour l\u2019\xe9lection l\xe9gislatives de 2022."))},Ze=(Q.ZP.input(x||(x=(0,V.Z)(['\n  font-family: "Acumin Pro";\n  font-size: 18px;\n  border: 0;\n  border-bottom: 2px solid black;\n  height: 24px;\n  padding: 0;\n  margin: 0 0 24px;\n  display: block;\n  outline: 0;\n  width: 100%;\n  ',"\n"])),(function(e){var n=e.theme;return(0,Q.iv)(b||(b=(0,V.Z)(["\n    border-color: ",";\n  "])),n.colors.primary.background)})),(0,Q.ZP)(W.zx)(Z||(Z=(0,V.Z)(["\n  width: 100%;\n  margin: 24px 0 16px;\n"])))),ke=function(e){var n=e.close,t=e.selectedAmount,r=(0,F.useState)(""),a=r[0],i=r[1],o=(0,F.useState)(""),l=o[0],c=o[1],u=(0,F.useState)(""),s=u[0],m=u[1],d=(0,F.useState)(""),p=d[0],g=d[1],f=function(e,n){return(0,F.useCallback)((function(t,r,a,i){var o=Math.min(500,window.screen.availWidth),l=Math.min(600,window.screen.availHeight),c=window.screenLeft+window.screen.availWidth/2-o/2,u=window.screenTop+window.screen.availHeight/2-l/2,s=window.open("https://script.google.com/macros/s/AKfycbwPLxUkHeXSDjbQbSHXejWCKY1P0AuWk9oVm0XExQzuJYZJAI1mneojEuEUa2eIMcZ-/exec?lastName="+encodeURIComponent(r)+"&firstName="+encodeURIComponent(t)+"&amount="+encodeURIComponent(e)+"&email="+encodeURIComponent(a)+"&phone="+encodeURIComponent(i),"_blank","height="+l+",width="+o+",top="+u+",left="+c+",toolbar=no,titlebar=no,status=no,menubar=no");!function e(){s.closed?n():window.setTimeout(e,250)}()}),[e,n])}(t,n),v=(0,F.useCallback)((function(e){e.preventDefault(),f(a,l,s,p)}),[t,a,l,s,p,n]);return F.createElement("form",{onSubmit:v},F.createElement(Y.Z,null,"Merci de remplir le formulaire suivant, nous vous recontacterons prochainement pour finaliser votre don."),F.createElement(W.II,{label:"Pr\xe9nom",type:"text",name:"firstName",value:a,onChange:function(e){i(e.currentTarget.value)},autoComplete:"on",autoFocus:!0}),F.createElement(W.II,{type:"text",name:"lastName",label:"Nom",value:l,onChange:function(e){c(e.currentTarget.value)},autoComplete:"on"}),F.createElement(W.II,{type:"email",name:"email",label:"adresse e-mail",value:s,onChange:function(e){m(e.currentTarget.value)},autoComplete:"on"}),F.createElement(W.II,{type:"phone",name:"phone",label:"T\xe9l\xe9phone",value:p,onChange:function(e){g(e.currentTarget.value)},autoComplete:"on"}),F.createElement(Ze,{type:"submit",variant:"primary",size:"big"},"Valider"))},ye=function(e){var n=e.visible,t=e.close,r=e.selectedAmount,a=(0,F.useState)(),i=a[0],o=a[1];return(0,F.useEffect)((function(){n||o(void 0)}),[n,o]),F.createElement(W.u_,{visible:n,close:t},F.createElement(W.Dx,{variant:"light-primary"},"Soutenir la campagne"),i?F.createElement(ke,{selectedAmount:i,close:t}):F.createElement(be,{selectedAmount:r,selectFinalAmount:o}))},Ee=Q.ZP.button(k||(k=(0,V.Z)(["\n  border: 0;\n  outline: 0;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  flex: 1 0 160px;\n  margin: 8px;\n  font-size: 18px;\n  padding: 6px;\n  box-sizing: border-box;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(y||(y=(0,V.Z)(["\n    background-color: ",";\n    color: ",";\n  "])),n.colors.primary.lightBackground,n.colors.primary.foreground)})),we=(0,Q.ZP)(Ee)(E||(E=(0,V.Z)(["\n  cursor: pointer;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(w||(w=(0,V.Z)(["\n    :hover {\n      background-color: ",";\n    }\n  "])),n.colors.primary.background)})),Pe=function(e){var n=e.donation,t=e.index,r=e.setSelectedDonation,a=(0,F.useCallback)((function(){r(t)}),[r,t]);return F.createElement(we,{onClick:a},de(n))},Ce=Q.ZP.div(P||(P=(0,V.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Se=Q.ZP.div(C||(C=(0,V.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px -8px;\n  flex-wrap: wrap;\n  align-self: stretch;\n"]))),Ne=Q.ZP.div(S||(S=(0,V.Z)(["\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  background-color: ",";\n  border-radius: 8px;\n  padding: 0 8px;\n"])),W.Oq.WHITE),Ae=Q.ZP.input(N||(N=(0,V.Z)(["\n  flex: 1;\n  width: 1%;\n  background: none;\n  border: 0;\n  min-width: 0;\n  align-self: stretch;\n  font-size: 18px;\n  line-height: 100%;\n  text-align: center;\n"]))),Me=Q.ZP.button(A||(A=(0,V.Z)(["\n  height: 43px;\n  flex: 0 0 43px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  outline: 0;\n  margin: 0 0 0 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(M||(M=(0,V.Z)(["\n    background-color: ",";\n  "])),n.colors.primary.background)})),je=function(e){var n=e.suggestions,t=e.children,r=(0,F.useState)(-1),a=r[0],i=r[1],o=(0,F.useState)(!1),l=o[0],c=o[1],u=(0,F.useState)(""),s=u[0],m=u[1],d=(0,F.useCallback)((function(){return c(!0)}),[c]),p=(0,F.useCallback)((function(){return c(!1)}),[c]),g=(0,F.useCallback)((function(e){i(e),d()}),[d,i]),f=(0,F.useMemo)((function(){if(a<0||a>=n.length){var e=parseFloat(s);return isNaN(e)?0:e}return n[a]}),[n,a,s]),v=(0,F.useCallback)((function(e,n){return F.createElement(Pe,{key:n,index:n,donation:e,setSelectedDonation:g,selectedDonation:a})}),[g,a]),h=(0,F.useCallback)((function(e){m(e.currentTarget.value)}),[m]),x=(0,F.useCallback)((function(e){e.preventDefault(),d()}),[d]);return F.createElement(F.Fragment,null,F.createElement(Ce,null,F.createElement(Se,null,n&&n.map(v),F.createElement(Ee,{as:"form",onSubmit:x},F.createElement(Ne,null,F.createElement(Ae,{value:s,onChange:h,type:"number"}),F.createElement("span",null,"\u20ac")),F.createElement(Me,null,F.createElement(me.e,null)))),t,F.createElement(ye,{visible:l,close:p,selectedAmount:f})))},Ie=t(4996),Te=Q.ZP.picture(j||(j=(0,V.Z)(["\n  display: flex;\n  height: 40vh;\n  text-align: center;\n  justify-content: center;\n  align-items: flex-end;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  margin: 0 -1rem 24px;\n  ","\n  @media only screen and (max-width: 996px) {\n    height: 25vh;\n  }\n"])),(function(e){var n=e.backgroundImage;return(0,Q.iv)(I||(I=(0,V.Z)(['\n      background-image: url("','");\n    '])),n)})),De=Q.ZP.img(T||(T=(0,V.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n"]))),Le=function(){var e=(0,Ie.Z)("/img/cover-background.jpg"),n=(0,Ie.Z)("/img/julia-mignacca.webp"),t=(0,Ie.Z)("/img/julia-mignacca.png");return F.createElement(Te,{backgroundImage:e},F.createElement("source",{srcSet:n,type:"image/webp"}),F.createElement("source",{srcSet:t,type:"image/png"}),F.createElement(De,{src:t,alt:"Julia Mignacca"}))},qe=Q.ZP.div(D||(D=(0,V.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: 48px 0;\n  gap: 24px 54px;\n  width: 100%;\n"]))),ze=Q.ZP.div(L||(L=(0,V.Z)(["\n  flex: 1 0 150px;\n  text-align: center;\n"]))),He=function(){return F.createElement(qe,null,F.createElement(ze,null,F.createElement(W.Lh,{height:80})),F.createElement(ze,null,F.createElement(W.VR,{height:70})),F.createElement(ze,null,F.createElement(W.Uy,{height:70})),F.createElement(ze,null,F.createElement(W.F1,{height:70})),F.createElement(ze,null,F.createElement(W.iV,{width:150})),F.createElement(ze,null,F.createElement(W.Ph,{height:60})))},Re=Q.ZP.div(q||(q=(0,V.Z)(["\n  max-width: 500px;\n  width: 100%;\n  margin: auto;\n  display: block;\n"]))),Je=function(){return F.createElement(Re,null,F.createElement(W.hb,{width:"100%"}))},_e=(Q.ZP.div(z||(z=(0,V.Z)(["\n  position: relative;\n  ","\n"])),(function(e){var n=e.ratio;return(0,Q.iv)(H||(H=(0,V.Z)(["\n    padding-top: ","%;\n  "])),100*(n||.5625))})),Q.ZP.div(R||(R=(0,V.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"]))),["components"]),Fe={title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"les 12 et 19 juin votons Julia Mignacca",hide_table_of_contents:!0},Ue=void 0,Be={type:"mdx",permalink:"/",source:"@site/src/pages/index.mdx",title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"les 12 et 19 juin votons Julia Mignacca",frontMatter:{title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"les 12 et 19 juin votons Julia Mignacca",hide_table_of_contents:!0}},Ve=[{value:"Soutenir la campagne",id:"soutenir-la-campagne",level:2},{value:"Nous rencontrer",id:"nous-rencontrer",level:3},{value:"Notre programme",id:"notre-programme",level:2},{value:"Avec le soutien de\xa0:",id:"avec-le-soutien-de",level:3}],Ke={toc:Ve};function Xe(e){var n=e.components,t=(0,_.Z)(e,_e);return(0,U.kt)("wrapper",(0,J.Z)({},Ke,t,{components:n,mdxType:"MDXLayout"}),(0,U.kt)(Je,{mdxType:"NupesLogo"}),(0,U.kt)(Le,{mdxType:"Header"}),(0,U.kt)("p",null,(0,U.kt)("strong",{parentName:"p"},"Les 12 et 19 juin")," prochains ont lieu les \xe9lections l\xe9gislatives, le troisi\xe8me tour\nde l'\xe9lection pr\xe9sidentielle qui permettra d'\xe9lire vos d\xe9put\xe9s et de choisir le prochain\ngouvernement."),(0,U.kt)("p",null,"\xc0 cette occasion la gauche et les \xe9cologistes ont fait le choix historique\nde ",(0,U.kt)("strong",{parentName:"p"},"se pr\xe9senter unis")," devant vous dans tout le pays."),(0,U.kt)("p",null,"Je suis la candidate de cette\nnouvelle union sur ",(0,U.kt)("strong",{parentName:"p"},"notre 3\xe8me circonscription de l'H\xe9rault")," et j'en mesure toute la\nresponsabilit\xe9."),(0,U.kt)("p",null,"Face au changement climatique et \xe0 la casse du service public, ",(0,U.kt)("strong",{parentName:"p"},"ensemble nous pouvons gagner. ")),(0,U.kt)("blockquote",null,(0,U.kt)("p",{parentName:"blockquote"},"Ensemble construisons cet autre monde possible !")),(0,U.kt)("h2",{id:"soutenir-la-campagne"},"Soutenir la campagne"),(0,U.kt)(je,{suggestions:[20,50,100],mdxType:"DonationForm"},(0,U.kt)("p",null,"Pour financer les d\xe9penses li\xe9es \xe0 l\u2019organisation d\u2019\xe9v\xe9nements, \xe0 l\u2019achat de mat\xe9riel, au fonctionnement de ce site, etc, nous avons besoin du soutien financier de chacun\xb7e d\u2019entre vous.")),(0,U.kt)("h3",{id:"nous-rencontrer"},"Nous rencontrer"),(0,U.kt)(se,{googleApiKey:"AIzaSyBB_V3txxLD4sjtR0xXayV2ZNcqD8Z_NIM",calendarId:"mldcdlabt7ku11r1jnpq65juos@group.calendar.google.com",mdxType:"Calendar"}),(0,U.kt)("h2",{id:"notre-programme"},"Notre programme"),(0,U.kt)("p",null,"Avec la majorit\xe9, soit 289 d\xe9put\xe9s, il est possible de gouverner le pays\net d\u2019imposer un Premier ministre \xe0 Macron\xa0!"),(0,U.kt)("ul",null,(0,U.kt)("li",{parentName:"ul"},"Retour \xe0 la ",(0,U.kt)("strong",{parentName:"li"},"retraite \xe0 60 ans")),(0,U.kt)("li",{parentName:"ul"},"Augmentation du ",(0,U.kt)("strong",{parentName:"li"},"SMIC \xe0 1 500 \u20ac")),(0,U.kt)("li",{parentName:"ul"},(0,U.kt)("strong",{parentName:"li"},"Reconstruire l'\xe9cole publique")," la\xefque et gratuite"),(0,U.kt)("li",{parentName:"ul"},"Passer \xe0 une ",(0,U.kt)("strong",{parentName:"li"},"agriculture \xe9cologique et paysanne")),(0,U.kt)("li",{parentName:"ul"},"Passer \xe0 la ",(0,U.kt)("strong",{parentName:"li"},"6\xe8me R\xe9publique")," pour une v\xe9ritable d\xe9mocratie")),(0,U.kt)("h3",{id:"avec-le-soutien-de"},"Avec le soutien de\xa0:"),(0,U.kt)(He,{mdxType:"LogoSoup"}))}Xe.isMDXComponent=!0},2186:function(e,n,t){t.d(n,{e:function(){return l}});var r=t(7462),a=t(3366),i=t(7294),o=["color"],l=function(e){var n=e.color,t=void 0===n?"white":n,l=(0,a.Z)(e,o);return i.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:"13",height:"12",viewBox:"0 0 13 12",fill:"none"},l),i.createElement("path",{d:"M6.3331 11.6362L12.0604 5.90891L6.3331 0.181641L5.01491 1.49414L8.47514 4.94869H0.367188V6.86914H8.47514L5.01491 10.3294L6.3331 11.6362Z",fill:t}))}},4571:function(e,n,t){var r,a=t(3366),i=t(1880),o=t(7294),l=t(9218),c=t(2125),u=["children"],s=(0,c.ZP)(l.xv)(r||(r=(0,i.Z)(["\n  font-size: 18px;\n"])));n.Z=function(e){var n=e.children,t=(0,a.Z)(e,u);return o.createElement(s,t,n)}}}]);