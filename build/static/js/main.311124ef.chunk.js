(this["webpackJsonptechpit-forum"]=this["webpackJsonptechpit-forum"]||[]).push([[0],{63:function(e,t,a){e.exports=a(78)},73:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=a(57),i=a(115),u=a(114),s=a(25),d=a(11),m=a(105),p=a(109),f=a(110),b=function(){return r.a.createElement(m.a,{color:"default",position:"sticky"},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"inherit",component:s.b,to:"/",variant:"h5"},"Forum")))},h=a(10),E=a(14),v=a(40),g=a(111),j=a(112),O=a(117),w=Object(O.a)((function(e){return{content:{display:"grid",gridRowGap:(0,e.spacing)(1)}}})),x=function(e){var t=e.thread,a=w();return r.a.createElement(g.a,null,r.a.createElement(s.b,{to:"/threads/".concat(t.id)},r.a.createElement(j.a,{className:a.content},r.a.createElement(f.a,{variant:"h6"},"".concat(t.title," (").concat(t.responseCount,")")),r.a.createElement(f.a,{variant:"caption"},t.updatedAt.toDate().toLocaleString()))))},y=a(116),k=a(118),C=a(28),S=a.n(C),I=a(41),A=Object(O.a)((function(e){return{actions:{display:"grid",justifyContent:"flex-end"},form:{display:"grid",gridRowGap:(0,e.spacing)(2)}}})),N=function(){var e=A(),t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),i=Object(h.a)(l,2),u=i[0],s=i[1],d=Object(n.useState)(""),m=Object(h.a)(d,2),p=m[0],f=m[1],b=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return[function(){var e=Object(I.a)(S.a.mark((function e(t){var n,c,o,l,i,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.text,c=t.title,o=t.username,!a){e.next=3;break}return e.abrupt("return");case 3:return r(!0),l=E.firestore.Timestamp.now(),i=Object(E.firestore)().collection("threads").doc(),e.next=8,i.set({createdAt:l,updatedAt:l,title:c,responseCount:1});case 8:return u=i.collection("responses").doc(),e.next=11,u.set({createdAt:l,updatedAt:l,threadId:i.id,username:o,text:n});case 11:r(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a]}(),v=Object(h.a)(b,2),g=v[0],j=v[1];return r.a.createElement("form",{className:e.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement(y.a,{disabled:j,fullWidth:!0,onChange:function(e){return s(e.target.value)},placeholder:"New thread",value:u,variant:"outlined"}),u&&r.a.createElement(y.a,{disabled:j,fullWidth:!0,multiline:!0,onChange:function(e){return o(e.target.value)},placeholder:"Content",rows:2,rowsMax:8,value:c,variant:"outlined"}),u&&r.a.createElement(y.a,{disabled:j,fullWidth:!0,onChange:function(e){return f(e.target.value)},placeholder:"Username (optional)",value:p,variant:"outlined"}),r.a.createElement("div",{className:e.actions},r.a.createElement(k.a,{color:"primary",disabled:j||!u||!c,onClick:function(){g({text:c,title:u,username:p}),o(""),s(""),f("")},variant:"contained"},"Create")))},D=Object(O.a)((function(e){var t=e.breakpoints,a=e.spacing;return{root:{display:"grid",gridRowGap:a(2),margin:"auto",maxWidth:t.values.md,padding:a(2)}}})),W=function(e){var t=e.children,a=D();return r.a.createElement("main",{className:a.root},t)},B=a(113),G=Object(O.a)({root:{display:"grid",justifyContent:"center"}}),M=function(){var e=G();return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,null))},R=function(){var e=Object(E.firestore)().collection("threads").orderBy("updatedAt","desc"),t=Object(v.a)(e,{idField:"id"}),a=Object(h.a)(t,2),n=a[0],c=void 0===n?[]:n,o=a[1];return r.a.createElement(W,null,r.a.createElement("h1",null,"Home"),r.a.createElement(N,null),c.map((function(e){return r.a.createElement(x,{key:e.id,thread:e})})),o&&r.a.createElement(M,null))},F=function(){return r.a.createElement(W,null,r.a.createElement("h1",null,"404"))},U=Object(O.a)((function(e){return{root:{display:"grid",gridRowGap:(0,e.spacing)(1)},text:{whiteSpace:"pre-wrap",wordBreak:"break-word"}}})),L=function(e){var t=e.index,a=e.response,n=U(),c=a.createdAt.toDate().toLocaleString();return r.a.createElement(g.a,null,r.a.createElement(j.a,{className:n.root},r.a.createElement(f.a,null,"".concat(t," [").concat(a.username||"Unknown","] ").concat(c)),r.a.createElement(f.a,{className:n.text},a.text)))},T=Object(O.a)((function(e){return{actions:{display:"grid",justifyContent:"flex-end"},form:{display:"grid",gridRowGap:(0,e.spacing)(2)}}})),Q=function(e){var t=e.threadId,a=T(),c=Object(n.useState)(""),o=Object(h.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)(""),s=Object(h.a)(u,2),d=s[0],m=s[1],p=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return[function(){var e=Object(I.a)(S.a.mark((function e(t){var n,c,o,l,i,u;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.text,c=t.threadId,o=t.username,!a){e.next=3;break}return e.abrupt("return");case 3:return r(!0),l=E.firestore.Timestamp.now(),i=Object(E.firestore)().collection("threads").doc(c),e.next=8,i.update({responseCount:E.firestore.FieldValue.increment(1),updatedAt:l});case 8:return u=i.collection("responses").doc(),e.next=11,u.set({createdAt:l,updatedAt:l,text:n,threadId:c,username:o});case 11:r(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a]}(),f=Object(h.a)(p,2),b=f[0],v=f[1];return r.a.createElement("form",{className:a.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement(y.a,{disabled:v,fullWidth:!0,multiline:!0,onChange:function(e){return i(e.target.value)},placeholder:"New response",rows:2,rowsMax:8,value:l,variant:"outlined"}),l&&r.a.createElement(y.a,{disabled:v,fullWidth:!0,onChange:function(e){return m(e.target.value)},placeholder:"Username (Optional)",value:d,variant:"outlined"}),r.a.createElement("div",{className:a.actions},r.a.createElement(k.a,{color:"primary",disabled:v||!l,onClick:function(){b({text:l,threadId:t,username:d}),i(""),m("")},variant:"contained"},"Create")))},z=function(){var e=Object(d.f)().threadId,t=Object(E.firestore)().collection("threads").doc(e).collection("responses").orderBy("createdAt","asc"),a=Object(v.a)(t,{idField:"id"}),n=Object(h.a)(a,2),c=n[0],o=void 0===c?[]:c,l=n[1];return r.a.createElement(W,null,r.a.createElement("h1",null,"Thread"),o.map((function(e,t){return r.a.createElement(L,{key:e.id,index:t,response:e})})),l&&r.a.createElement(M,null),r.a.createElement(Q,{threadId:e}))},J=function(){var e=Object(l.a)();return r.a.createElement(u.a,{theme:e},r.a.createElement(i.a,null),r.a.createElement(s.a,null,r.a.createElement(b,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/"},r.a.createElement(R,null)),r.a.createElement(d.a,{exact:!0,path:"/threads/:threadId"},r.a.createElement(z,null)),r.a.createElement(d.a,{path:"*"},r.a.createElement(F,null)))))};a(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);Object(E.initializeApp)({apiKey:"AIzaSyCDfF9YSSLpiMQgugTZSMnUI-Dkb0E5QMM",authDomain:"bulletinboard-39bae.firebaseapp.com",databaseURL:"https://bulletinboard-39bae.firebaseio.com",projectId:"bulletinboard-39bae",storageBucket:"bulletinboard-39bae.appspot.com",messagingSenderId:"206500042925",appId:"1:206500042925:web:64417cb4932ee6172c4e24",measurementId:"G-615Q1BZD43"}),o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.311124ef.chunk.js.map