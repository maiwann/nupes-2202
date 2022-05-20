"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5668],{8552:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return Ke},default:function(){return Qe},frontMatter:function(){return Ve},metadata:function(){return Xe},toc:function(){return We}});var r,a,i,l,o,c,u,s,m,d,p,g,f,v,h,x,b,Z,k,E,y,w,P,C,S,N,A,M,j,I,T,D,L,q,z,H,R,J,_=t(7462),F=t(3366),U=t(7294),B=t(3905),V=t(5861),K=t(1880),X=t(7757),W=t.n(X),$=t(9218),Q=t(2125),Y=t(4571),G=Q.ZP.div(r||(r=(0,K.Z)(["\n  margin: 0 8px 16px;\n  border: 1px solid #eeeeee;\n  padding: 16px 12px;\n  min-width: 300px;\n  flex: 1 1 40%;\n"]))),O=Q.ZP.div(a||(a=(0,K.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  white-space: nowrap;\n"]))),ee=(0,Q.ZP)($.y$)(i||(i=(0,K.Z)(["\n  ::before {\n    left: 0;\n    right: 0;\n  }\n"]))),ne=(0,Q.ZP)($.DK)(l||(l=(0,K.Z)(['\n  flex: 1;\n  white-space: normal;\n  font-family: "Acumin Pro Condensed Black";\n  margin: 0;\n  text-align: right;\n']))),te=(0,Q.ZP)(Y.Z)(o||(o=(0,K.Z)(["\n  margin: 4px 8px 0 0;\n  line-height: 1.2em;\n"]))),re=(0,Q.ZP)(Y.Z)(c||(c=(0,K.Z)(['\n  margin: 5px 8px 0 0;\n  font-family: "Acumin Pro Condensed Black";\n']))),ae=(0,Q.ZP)(Y.Z)(u||(u=(0,K.Z)(["\n  margin-bottom: 2px;\n  font-style: italic;\n  line-height: 1.2em;\n"]))),ie=function(e){var n=e.event,t=new Date(Date.parse(n.start.dateTime)),r=new Date(Date.parse(n.end.dateTime)),a=n.location?n.location.replace(/, France$/,""):"";return U.createElement(G,{key:n.start.dateTime},U.createElement(O,null,U.createElement(te,null,U.createElement(ee,null,t.toLocaleDateString(void 0,{day:"2-digit",month:"long"}))),U.createElement(re,null,t.toLocaleTimeString(void 0,{timeStyle:"short"})," -"," ",r.toLocaleTimeString(void 0,{timeStyle:"short"})),U.createElement(ne,null,n.summary)),a&&U.createElement(ae,null,a))},le=function(e){return new Promise((function(n,t){window.gapi.load("client",(function(){window.gapi.client.setApiKey(e),oe(n,t)}))}))},oe=function(e,n){window.gapi.client.load("calendar","v3",(function(){e(!0)}))},ce=function(e){return window.gapi.client.calendar.events.list({calendarId:e,showDeleted:!1,singleEvents:!0,maxResults:6,orderBy:"startTime"})},ue=Q.ZP.div(s||(s=(0,K.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: -8px;\n  flex-wrap: wrap;\n"]))),se=function(e){return U.createElement(ie,{key:e.start.dateTime,event:e})},me=function(e){var n=e.calendarId,t=e.googleApiKey,r=(0,U.useState)(),a=r[0],i=r[1];return(0,U.useEffect)((function(){(function(e){return new Promise((function(n,t){var r=document.createElement("SCRIPT");r.setAttribute("type","text/javascript"),r.setAttribute("async","true"),r.setAttribute("defer","true"),r.setAttribute("src","https://apis.google.com/js/api.js"),r.addEventListener("load",(0,V.Z)(W().mark((function r(){return W().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,le(e);case 2:r.sent?n():t("unable to load calendar");case 4:case"end":return r.stop()}}),r)})))),document.head.appendChild(r)}))})(t).then((0,V.Z)(W().mark((function e(){var t;return W().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce(n);case 2:t=e.sent,i(t.result.items);case 4:case"end":return e.stop()}}),e)}))))}),[i]),a?U.createElement(ue,null,a.map(se)):U.createElement(Y.Z,null,"chargement du calendrier...")},de=function(e){var n,t=(n=e,Math.floor(n)-n!=0?2:0);return e.toLocaleString("fr",{style:"currency",currencyDisplay:"narrowSymbol",currency:"EUR",minimumFractionDigits:t})},pe=(0,Q.ZP)(Y.Z)(m||(m=(0,K.Z)(["\n  line-height: 1em;\n  margin: 0;\n"]))),ge=function(e){var n=e.value,t=e.target;return U.createElement(pe,null,U.createElement($.y$,{small:!0},de(n)),U.createElement("span",null," sur ",de(t)))},fe=t(2186),ve=(0,Q.ZP)(Y.Z)(d||(d=(0,K.Z)(["\n  font-weight: bold;\n"]))),he=Q.ZP.span(p||(p=(0,K.Z)(["\n  height: 24px;\n  vertical-align: middle;\n  padding: 3px 12px 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 1em;\n  border-radius: 8px;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(g||(g=(0,K.Z)(["\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n  "])),n.colors.primary.background,n.colors.primary.foreground)})),xe=(0,Q.ZP)($.zx)(f||(f=(0,K.Z)(["\n  display: block;\n  width: 100%;\n  margin: 16px 0 8px;\n  height: auto;\n  padding: 8px;\n"]))),be=Q.ZP.div(v||(v=(0,K.Z)(["\n  font-weight: bold;\n"]))),Ze=Q.ZP.div(h||(h=(0,K.Z)([""]))),ke=(0,Q.ZP)(Y.Z)(x||(x=(0,K.Z)(["\n  margin: 32px 0 16px;\n  font-size: 13px;\n  color: #696969;\n"]))),Ee=function(e){var n=e.selectedAmount,t=e.selectFinalAmount,r=(0,U.useMemo)((function(){return e=.34*n,Math.round(100*e)/100;var e}),[n]),a=(0,U.useMemo)((function(){return Math.floor(n/.34)}),[n]),i=(0,U.useCallback)((function(){t(n)}),[t,n]),l=(0,U.useCallback)((function(){t(a)}),[t,a]);return U.createElement("div",null,U.createElement(ve,null,"Gr\xe2ce \xe0 la r\xe9duction d'imp\xf4ts de 66%, votre don ne vous co\xfbtera que\xa0:"," ",U.createElement(he,null,de(r))),U.createElement(Y.Z,null,"En donnant maintenant ",de(a),", votre don ne vous co\xfbtera que les ",de(n),"\xa0 que vous souhaitiez donner initialement."),U.createElement(xe,{size:"big",variant:"primary-light",onClick:i},U.createElement(be,null,"Donner ",de(n)),U.createElement(Ze,null,"soit ",de(r)," apr\xe8s r\xe9duction d'imp\xf4t")),U.createElement(xe,{size:"big",variant:"primary",onClick:l},U.createElement(be,null,"Donner ",de(a)),U.createElement(Ze,null,"soit ",de(n)," apr\xe8s r\xe9duction d'imp\xf4t")),U.createElement(ke,null,"Les dons sont destin\xe9s \xe0 l\u2019AFE Julia Mignacca 2022, d\xe9clar\xe9e \xe0 la pr\xe9fecture de l'H\xe9rault, seule habilit\xe9e \xe0 recevoir les dons en faveur du candidate Julia Mignacca, dans le cadre de la campagne pour l\u2019\xe9lection l\xe9gislatives de 2022."))},ye=(Q.ZP.input(b||(b=(0,K.Z)(['\n  font-family: "Acumin Pro";\n  font-size: 18px;\n  border: 0;\n  border-bottom: 2px solid black;\n  height: 24px;\n  padding: 0;\n  margin: 0 0 24px;\n  display: block;\n  outline: 0;\n  width: 100%;\n  ',"\n"])),(function(e){var n=e.theme;return(0,Q.iv)(Z||(Z=(0,K.Z)(["\n    border-color: ",";\n  "])),n.colors.primary.background)})),(0,Q.ZP)($.zx)(k||(k=(0,K.Z)(["\n  width: 100%;\n  margin: 24px 0 16px;\n"])))),we=function(e){var n=e.close,t=e.selectedAmount,r=(0,U.useState)(""),a=r[0],i=r[1],l=(0,U.useState)(""),o=l[0],c=l[1],u=(0,U.useState)(""),s=u[0],m=u[1],d=(0,U.useState)(""),p=d[0],g=d[1],f=function(e,n){return(0,U.useCallback)((function(t,r,a,i){var l=Math.min(500,window.screen.availWidth),o=Math.min(600,window.screen.availHeight),c=window.screenLeft+window.screen.availWidth/2-l/2,u=window.screenTop+window.screen.availHeight/2-o/2,s=window.open("https://script.google.com/macros/s/AKfycbwPLxUkHeXSDjbQbSHXejWCKY1P0AuWk9oVm0XExQzuJYZJAI1mneojEuEUa2eIMcZ-/exec?lastName="+encodeURIComponent(r)+"&firstName="+encodeURIComponent(t)+"&amount="+encodeURIComponent(e)+"&email="+encodeURIComponent(a)+"&phone="+encodeURIComponent(i),"_blank","height="+o+",width="+l+",top="+u+",left="+c+",toolbar=no,titlebar=no,status=no,menubar=no");!function e(){s.closed?n():window.setTimeout(e,250)}()}),[e,n])}(t,n),v=(0,U.useCallback)((function(e){e.preventDefault(),f(a,o,s,p)}),[t,a,o,s,p,n]);return U.createElement("form",{onSubmit:v},U.createElement(Y.Z,null,"Merci de remplir le formulaire suivant, nous vous recontacterons prochainement pour finaliser votre don."),U.createElement($.II,{label:"Pr\xe9nom",type:"text",name:"firstName",value:a,onChange:function(e){i(e.currentTarget.value)},autoComplete:"on",autoFocus:!0}),U.createElement($.II,{type:"text",name:"lastName",label:"Nom",value:o,onChange:function(e){c(e.currentTarget.value)},autoComplete:"on"}),U.createElement($.II,{type:"email",name:"email",label:"adresse e-mail",value:s,onChange:function(e){m(e.currentTarget.value)},autoComplete:"on"}),U.createElement($.II,{type:"phone",name:"phone",label:"T\xe9l\xe9phone",value:p,onChange:function(e){g(e.currentTarget.value)},autoComplete:"on"}),U.createElement(ye,{type:"submit",variant:"primary",size:"big"},"Valider"))},Pe=function(e){var n=e.visible,t=e.close,r=e.selectedAmount,a=(0,U.useState)(),i=a[0],l=a[1];return(0,U.useEffect)((function(){n||l(void 0)}),[n,l]),U.createElement($.u_,{visible:n,close:t},U.createElement($.Dx,{variant:"light-primary"},"Soutenir la campagne"),i?U.createElement(we,{selectedAmount:i,close:t}):U.createElement(Ee,{selectedAmount:r,selectFinalAmount:l}))},Ce=Q.ZP.button(E||(E=(0,K.Z)(["\n  border: 0;\n  outline: 0;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  flex: 1 0 160px;\n  margin: 8px;\n  font-size: 18px;\n  padding: 6px;\n  box-sizing: border-box;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(y||(y=(0,K.Z)(["\n    background-color: ",";\n    color: ",";\n  "])),n.colors.primary.lightBackground,n.colors.primary.foreground)})),Se=(0,Q.ZP)(Ce)(w||(w=(0,K.Z)(["\n  cursor: pointer;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(P||(P=(0,K.Z)(["\n    :hover {\n      background-color: ",";\n    }\n  "])),n.colors.primary.background)})),Ne=function(e){var n=e.donation,t=e.index,r=e.setSelectedDonation,a=(0,U.useCallback)((function(){r(t)}),[r,t]);return U.createElement(Se,{onClick:a},de(n))},Ae=Q.ZP.div(C||(C=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Me=Q.ZP.div(S||(S=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 8px -8px;\n  flex-wrap: wrap;\n  align-self: stretch;\n"]))),je=Q.ZP.div(N||(N=(0,K.Z)(["\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  background-color: ",";\n  border-radius: 8px;\n  padding: 0 8px;\n"])),$.Oq.WHITE),Ie=Q.ZP.input(A||(A=(0,K.Z)(["\n  flex: 1;\n  width: 1%;\n  background: none;\n  border: 0;\n  min-width: 0;\n  align-self: stretch;\n  font-size: 18px;\n  line-height: 100%;\n  text-align: center;\n"]))),Te=Q.ZP.button(M||(M=(0,K.Z)(["\n  height: 43px;\n  flex: 0 0 43px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 0;\n  outline: 0;\n  margin: 0 0 0 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  ","\n"])),(function(e){var n=e.theme;return(0,Q.iv)(j||(j=(0,K.Z)(["\n    background-color: ",";\n  "])),n.colors.primary.background)})),De=function(e){var n=e.suggestions,t=e.value,r=e.target,a=e.children,i=(0,U.useState)(-1),l=i[0],o=i[1],c=(0,U.useState)(!1),u=c[0],s=c[1],m=(0,U.useState)(""),d=m[0],p=m[1],g=(0,U.useCallback)((function(){return s(!0)}),[s]),f=(0,U.useCallback)((function(){return s(!1)}),[s]),v=(0,U.useCallback)((function(e){o(e),g()}),[g,o]),h=(0,U.useMemo)((function(){if(l<0||l>=n.length){var e=parseFloat(d);return isNaN(e)?0:e}return n[l]}),[n,l,d]),x=(0,U.useCallback)((function(e,n){return U.createElement(Ne,{key:n,index:n,donation:e,setSelectedDonation:v,selectedDonation:l})}),[v,l]),b=(0,U.useCallback)((function(e){p(e.currentTarget.value)}),[p]),Z=(0,U.useCallback)((function(e){e.preventDefault(),g()}),[g]);return U.createElement(U.Fragment,null,U.createElement(Ae,null,U.createElement(Me,null,n&&n.map(x),U.createElement(Ce,{as:"form",onSubmit:Z},U.createElement(je,null,U.createElement(Ie,{value:d,onChange:b,type:"number"}),U.createElement("span",null,"\u20ac")),U.createElement(Te,null,U.createElement(fe.e,null)))),!!t&&!!r&&U.createElement($.aC,{value:t,target:r},U.createElement(ge,{value:t,target:r})),a,U.createElement(Pe,{visible:u,close:f,selectedAmount:h})))},Le=t(4996),qe=Q.ZP.picture(I||(I=(0,K.Z)(["\n  display: flex;\n  height: 40vh;\n  text-align: center;\n  justify-content: center;\n  align-items: flex-end;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  margin: 0 -1rem 24px;\n  ","\n  @media only screen and (max-width: 996px) {\n    height: 25vh;\n  }\n"])),(function(e){var n=e.backgroundImage;return(0,Q.iv)(T||(T=(0,K.Z)(['\n      background-image: url("','");\n    '])),n)})),ze=Q.ZP.img(D||(D=(0,K.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n"]))),He=function(){var e=(0,Le.Z)("/img/cover-background.jpg"),n=(0,Le.Z)("/img/julia-mignacca.webp"),t=(0,Le.Z)("/img/julia-mignacca.png");return U.createElement(qe,{backgroundImage:e},U.createElement("source",{srcSet:n,type:"image/webp"}),U.createElement("source",{srcSet:t,type:"image/png"}),U.createElement(ze,{src:t,alt:"Julia Mignacca"}))},Re=Q.ZP.div(L||(L=(0,K.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: 48px 0;\n  gap: 24px 54px;\n  width: 100%;\n"]))),Je=Q.ZP.div(q||(q=(0,K.Z)(["\n  flex: 1 0 150px;\n  text-align: center;\n"]))),_e=function(){return U.createElement(Re,null,U.createElement(Je,null,U.createElement($.Lh,{height:80})),U.createElement(Je,null,U.createElement($.VR,{height:70})),U.createElement(Je,null,U.createElement($.Uy,{height:70})),U.createElement(Je,null,U.createElement($.F1,{height:70})),U.createElement(Je,null,U.createElement($.iV,{width:150})),U.createElement(Je,null,U.createElement($.Ph,{height:60})))},Fe=Q.ZP.div(z||(z=(0,K.Z)(["\n  max-width: 500px;\n  width: 100%;\n  margin: auto;\n  display: block;\n"]))),Ue=function(){return U.createElement(Fe,null,U.createElement($.hb,{width:"100%"}))},Be=(Q.ZP.div(H||(H=(0,K.Z)(["\n  position: relative;\n  ","\n"])),(function(e){var n=e.ratio;return(0,Q.iv)(R||(R=(0,K.Z)(["\n    padding-top: ","%;\n  "])),100*(n||.5625))})),Q.ZP.div(J||(J=(0,K.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n"]))),["components"]),Ve={title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"les 12 et 19 juin votons Julia Mignacca",hide_table_of_contents:!0},Ke=void 0,Xe={type:"mdx",permalink:"/",source:"@site/src/pages/index.mdx",title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"les 12 et 19 juin votons Julia Mignacca",frontMatter:{title:"Julia Mignacca \xb7 \xc9lections L\xe9gislatives 2022 \xb7 3\xe8me circonscription de l'H\xe9rault",description:"les 12 et 19 juin votons Julia Mignacca",hide_table_of_contents:!0}},We=[{value:"Soutenir la campagne",id:"soutenir-la-campagne",level:2},{value:"Nous rencontrer",id:"nous-rencontrer",level:3},{value:"Notre programme",id:"notre-programme",level:2},{value:"Avec le soutien de\xa0:",id:"avec-le-soutien-de",level:3}],$e={toc:We};function Qe(e){var n=e.components,t=(0,F.Z)(e,Be);return(0,B.kt)("wrapper",(0,_.Z)({},$e,t,{components:n,mdxType:"MDXLayout"}),(0,B.kt)(Ue,{mdxType:"NupesLogo"}),(0,B.kt)(He,{mdxType:"Header"}),(0,B.kt)("p",null,(0,B.kt)("strong",{parentName:"p"},"Les 12 et 19 juin")," prochains ont lieu les \xe9lections l\xe9gislatives, le troisi\xe8me tour\nde l'\xe9lection pr\xe9sidentielle qui permettra d'\xe9lire vos d\xe9put\xe9s et de choisir le prochain\ngouvernement."),(0,B.kt)("p",null,"\xc0 cette occasion la gauche et les \xe9cologistes ont fait le choix historique\nde ",(0,B.kt)("strong",{parentName:"p"},"se pr\xe9senter unis")," devant vous dans tout le pays."),(0,B.kt)("p",null,"Je suis la candidate de cette\nnouvelle union sur ",(0,B.kt)("strong",{parentName:"p"},"notre 3\xe8me circonscription de l'H\xe9rault")," et j'en mesure toute la\nresponsabilit\xe9."),(0,B.kt)("p",null,"Face au changement climatique et \xe0 la casse du service public, ",(0,B.kt)("strong",{parentName:"p"},"ensemble nous pouvons gagner. ")),(0,B.kt)("blockquote",null,(0,B.kt)("p",{parentName:"blockquote"},"Ensemble construisons cet autre monde possible !")),(0,B.kt)("h2",{id:"soutenir-la-campagne"},"Soutenir la campagne"),(0,B.kt)(De,{suggestions:[20,50,100],value:2650,target:4e3,mdxType:"DonationForm"},(0,B.kt)("p",null,"Pour financer les d\xe9penses li\xe9es \xe0 l\u2019organisation d\u2019\xe9v\xe9nements, \xe0 l\u2019achat de mat\xe9riel, au fonctionnement de ce site, etc, nous avons besoin du soutien financier de chacun\xb7e d\u2019entre vous.")),(0,B.kt)("h3",{id:"nous-rencontrer"},"Nous rencontrer"),(0,B.kt)(me,{googleApiKey:"AIzaSyBB_V3txxLD4sjtR0xXayV2ZNcqD8Z_NIM",calendarId:"mldcdlabt7ku11r1jnpq65juos@group.calendar.google.com",mdxType:"Calendar"}),(0,B.kt)("h2",{id:"notre-programme"},"Notre programme"),(0,B.kt)("p",null,"Avec la majorit\xe9, soit 289 d\xe9put\xe9s, il est possible de gouverner le pays\net d\u2019imposer un Premier ministre \xe0 Macron\xa0!"),(0,B.kt)("ul",null,(0,B.kt)("li",{parentName:"ul"},"Retour \xe0 la ",(0,B.kt)("strong",{parentName:"li"},"retraite \xe0 60 ans")),(0,B.kt)("li",{parentName:"ul"},"Augmentation du ",(0,B.kt)("strong",{parentName:"li"},"SMIC \xe0 1 500 \u20ac")),(0,B.kt)("li",{parentName:"ul"},(0,B.kt)("strong",{parentName:"li"},"Reconstruire l'\xe9cole publique")," la\xefque et gratuite"),(0,B.kt)("li",{parentName:"ul"},"Passer \xe0 une ",(0,B.kt)("strong",{parentName:"li"},"agriculture \xe9cologique et paysanne")),(0,B.kt)("li",{parentName:"ul"},"Passer \xe0 la ",(0,B.kt)("strong",{parentName:"li"},"6\xe8me R\xe9publique")," pour une v\xe9ritable d\xe9mocratie")),(0,B.kt)("h3",{id:"avec-le-soutien-de"},"Avec le soutien de\xa0:"),(0,B.kt)(_e,{mdxType:"LogoSoup"}))}Qe.isMDXComponent=!0},2186:function(e,n,t){t.d(n,{e:function(){return o}});var r=t(7462),a=t(3366),i=t(7294),l=["color"],o=function(e){var n=e.color,t=void 0===n?"white":n,o=(0,a.Z)(e,l);return i.createElement("svg",(0,r.Z)({xmlns:"http://www.w3.org/2000/svg",width:"13",height:"12",viewBox:"0 0 13 12",fill:"none"},o),i.createElement("path",{d:"M6.3331 11.6362L12.0604 5.90891L6.3331 0.181641L5.01491 1.49414L8.47514 4.94869H0.367188V6.86914H8.47514L5.01491 10.3294L6.3331 11.6362Z",fill:t}))}},4571:function(e,n,t){var r,a=t(3366),i=t(1880),l=t(7294),o=t(9218),c=t(2125),u=["children"],s=(0,c.ZP)(o.xv)(r||(r=(0,i.Z)(["\n  font-size: 18px;\n"])));n.Z=function(e){var n=e.children,t=(0,a.Z)(e,u);return l.createElement(s,t,n)}}}]);