(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{30:function(e,t,c){},32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(22),r=c.n(a),i=(c(30),c(5)),l=c.n(i),o=c(8),u=c(2),j=c.p+"static/media/Slogo.d3a08cd8.png",b=(c(32),c(3)),d=c(4),h=c(0),O=Object(n.createContext)(),p=Object(n.createContext)();function m(e){var t=Object(n.useReducer)(v,null),c=Object(u.a)(t,2),s=c[0],a=c[1];return Object(h.jsx)(p.Provider,{value:s,children:Object(h.jsx)(O.Provider,{value:a,children:e.children})})}function x(){return Object(n.useContext)(p)}function f(){return Object(n.useContext)(O)}function v(e,t){switch(t.type){case"save":return t.payload;case"logout":return null}}function g(){var e=Object(b.f)(),t=f(),c=Object(n.useState)(""),s=Object(u.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),O=Object(u.a)(i,2),p=O[0],m=O[1],x=Object(n.useState)(null),v=Object(u.a)(x,2),g=v[0],N=v[1],y=Object(n.useState)(!1),_=Object(u.a)(y,2),k=_[0],w=_[1];function S(){return(S=Object(o.a)(l.a.mark((function c(n){var s,r,i,o,u,j;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),a||p){c.next=3;break}return c.abrupt("return");case 3:return c.prev=3,s={email:a,password:p},"http://206.189.91.54//api/v1/auth/sign_in",r={method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(s)},N(null),w(!0),c.next=11,fetch("http://206.189.91.54//api/v1/auth/sign_in",r);case 11:return i=c.sent,c.next=14,i.json();case 14:if(o=c.sent,200!==i.status){c.next=22;break}u={"access-token":i.headers.get("access-token"),expiry:i.headers.get("expiry"),uid:i.headers.get("uid"),id:o.data.id,client:i.headers.get("client")},t({type:"save",payload:u}),w(!1),e.push("/client"),c.next=23;break;case 22:throw{custom:(null===o||void 0===o||null===(j=o.errors)||void 0===j?void 0:j[0])||"failed to login"};case 23:c.next=29;break;case 25:c.prev=25,c.t0=c.catch(3),N((null===c.t0||void 0===c.t0?void 0:c.t0.custom)||"something wen't wrong"),w(!1);case 29:case"end":return c.stop()}}),c,null,[[3,25]])})))).apply(this,arguments)}return Object(h.jsxs)("form",{className:"login-form",onSubmit:function(e){return S.apply(this,arguments)},children:[Object(h.jsx)("img",{className:"login__slack-logo",src:j,alt:"logo"}),Object(h.jsxs)("p",{className:"login__status",children:[k?"..loading":"",g||""]}),Object(h.jsxs)("div",{className:"login-container",children:[Object(h.jsx)("label",{className:"login__label",children:"Email"}),Object(h.jsx)("input",{placeholder:"enter email",required:!0,onChange:function(e){r(e.target.value)},className:"login__input",type:"email"}),Object(h.jsx)("label",{className:"login__label",children:"Password"}),Object(h.jsx)("input",{onChange:function(e){m(e.target.value)},className:"login__input",type:"password",placeholder:"enter password",title:"Must contain at least 8 or more characters",required:!0})]}),Object(h.jsxs)("div",{className:"login__btns",children:[Object(h.jsxs)("button",{type:"submit",className:"login__action btn",children:["Sign In ",Object(h.jsx)("i",{className:"fas fa-sign-in-alt"})]}),Object(h.jsx)(d.b,{to:"/signup",children:Object(h.jsxs)("button",{type:"button",className:"signup btn",children:["Sign Up ",Object(h.jsx)("i",{className:"fab fa-slack"})]})})]})]})}var N=c(20),y=c.n(N);c(41);function _(){return Object(h.jsxs)("div",{className:"moment-container",children:[Object(h.jsx)(y.a,{className:"Time moment",interval:1e3,format:"LT"}),Object(h.jsx)(y.a,{className:"Date moment",format:"(dddd)LL"}),Object(h.jsx)("div",{className:"welcome-container",children:Object(h.jsx)("h1",{className:"welcome",children:"Welcome to Slacks"})})]})}c(42);function k(){return Object(h.jsxs)("div",{className:"Log-in",children:[Object(h.jsx)(g,{}),Object(h.jsx)(_,{})]})}function w(e){var t=x(),c=Object(n.useState)(!0),s=Object(u.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)([]),j=Object(u.a)(i,2),b=j[0],O=j[1],p=Object(n.useState)(null),m=Object(u.a)(p,2),f=m[0],v=m[1];return Object(n.useEffect)((function(){var e={headers:t};Object(o.a)(l.a.mark((function t(){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://206.189.91.54//api/v1/channels",e);case 3:return c=t.sent,t.next=6,c.json();case 6:if(n=t.sent,200!==c.status){t.next=12;break}O(n.data),r(!1),t.next=14;break;case 12:throw r(!1),{custom:"failed to get channels"};case 14:t.next=21;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0),v((null===t.t0||void 0===t.t0?void 0:t.t0.custom)||"something went wrong"),r(!1);case 21:case"end":return t.stop()}}),t,null,[[0,16]])})))()}),[e]),Object(h.jsxs)("div",{className:"channels",children:[Object(h.jsxs)("p",{children:[" ",f||""]}),!a&&Object(h.jsx)("ul",{className:"channels__list",children:null===b||void 0===b?void 0:b.map((function(e){var t=e.name,c=e.id;return Object(h.jsxs)(d.b,{to:"/client/Channel/".concat(c),children:[Object(h.jsx)("i",{className:"fas fa-users iconic"}),t]},c)}))})||"...loading"]})}c(43);var S=Object(n.createContext)(),C=Object(n.createContext)();function I(e){var t=Object(n.useReducer)(P,null),c=Object(u.a)(t,2),s=c[0],a=c[1];return Object(h.jsx)(C.Provider,{value:s,children:Object(h.jsx)(S.Provider,{value:a,children:e.children})})}function P(e,t){switch(t.type){case"get users":return t.payload}}c(44);function D(){var e=x(),t=Object(n.useContext)(S),c=Object(n.useState)(!1),s=Object(u.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)([]),j=Object(u.a)(i,2),b=j[0],O=j[1],p=Object(n.useState)(null),m=Object(u.a)(p,2),f=m[0],v=m[1];return Object(n.useEffect)((function(){var c={headers:e};Object(o.a)(l.a.mark((function e(){var n,s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,fetch("http://206.189.91.54//api/v1/users",c);case 4:return n=e.sent,e.next=7,n.json();case 7:if(s=e.sent,200!==n.status){e.next=15;break}O(s.data),a=s.data,t({type:"get users",payload:a}),r(!1),e.next=16;break;case 15:throw{custom:"failed to get users"};case 16:e.next=23;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0),v((null===e.t0||void 0===e.t0?void 0:e.t0.custom)||"something went wrong"),r(!1);case 23:case"end":return e.stop()}}),e,null,[[0,18]])})))()}),[]),Object(h.jsxs)("div",{className:"users-wrapper",children:[Object(h.jsx)("p",{children:f||""}),!a&&Object(h.jsx)("ul",{className:"users__list",style:{overflowX:"hidden"},children:b.map((function(e){var t=e.id,c=e.uid;return Object(h.jsxs)(d.b,{to:"/client/User/".concat(t),children:[Object(h.jsx)("i",{className:"fas fa-user iconic"}),c]},t)}))})||"...LOADING"]})}function E(e){var t=Object(b.h)().url,c=f();return Object(h.jsxs)("div",{className:"Aside-container",children:[Object(h.jsx)(d.b,{to:"/client",children:Object(h.jsxs)("h1",{className:"home-C",children:[Object(h.jsx)("i",{className:"fab fa-slack ico"}),"Avion School"]})}),Object(h.jsxs)("div",{className:"aside-btn-container",children:[Object(h.jsxs)("div",{className:"aside-btn",children:[Object(h.jsx)("h4",{children:"Channels"}),Object(h.jsx)(d.b,{to:"".concat(t,"/new-channel"),children:Object(h.jsx)("button",{className:"fas fa-plus action"})})]}),Object(h.jsx)(w,{flag:e})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"aside-btn",children:Object(h.jsx)("h4",{children:"Direct Messages"})}),Object(h.jsx)(D,{})]}),Object(h.jsx)("button",{className:"sub-button",onClick:function(){c({type:"log out"})},children:"Sign Out"})]})}var L=c(7),q=c(25);c(45);function J(e){var t=Object(n.useContext)(C),c=Object(n.useState)(""),s=Object(u.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),j=Object(u.a)(i,2),b=j[0],O=j[1],p=Object(n.useState)(t),m=Object(u.a)(p,2),f=m[0],v=m[1],g=Object(n.useState)([]),N=Object(u.a)(g,2),y=N[0],_=N[1],k=x(),w=Object(n.useState)(!1),S=Object(u.a)(w,2),I=S[0],P=S[1],D=Object(n.useState)(null),E=Object(u.a)(D,2),J=E[0],M=E[1],z=new q.a(f,{keys:["uid"]}),A=k;function B(){return(B=Object(o.a)(l.a.mark((function t(c){var n,s,r,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),!(a.length<=0||y.length<=0)){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,n={name:a,user_ids:y.map((function(e){return e.id}))},"http://206.189.91.54//api/v1/channels",s={method:"post",headers:Object(L.a)({"content-type":"application/json"},A),body:JSON.stringify(n)},M(null),P(!0),t.next=11,fetch("http://206.189.91.54//api/v1/channels",s);case 11:return r=t.sent,t.next=14,r.json();case 14:if(i=t.sent,200!==r.status||i.errors){t.next=21;break}alert("create channel success!"),e(),P(!1),t.next=23;break;case 21:throw P(!1),{custom:(null===i||void 0===i||null===(o=i.errors)||void 0===o?void 0:o[0])||"failed to submit"};case 23:t.next=30;break;case 25:t.prev=25,t.t0=t.catch(3),console.log(t.t0),M((null===t.t0||void 0===t.t0?void 0:t.t0.custom)||"something wen't wrong"),P(!1);case 30:case"end":return t.stop()}}),t,null,[[3,25]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"maker_container",children:Object(h.jsxs)("form",{className:"maker",onSubmit:function(e){return B.apply(this,arguments)},children:[Object(h.jsx)(d.b,{to:"/client/chats",children:Object(h.jsx)("div",{className:"close-creator",children:Object(h.jsx)("i",{className:"fas fa-times"})})}),Object(h.jsx)("h1",{className:"header",children:"Create Channel"}),Object(h.jsxs)("p",{className:"login__status",children:[I?"..loading":"",J||""]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"channel-maker__name",children:[Object(h.jsx)("label",{children:"Channel Name"}),Object(h.jsx)("input",{className:"maker__name",type:"text",placeholder:"type channel name",value:a,onChange:function(e){r(e.target.value)},required:!0})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["selected: ",y.length]}),Object(h.jsx)("button",{className:"maker__action",type:"button",onClick:function(){_(t),v([])},children:"select all"}),Object(h.jsx)("button",{className:"maker__action",type:"button",onClick:function(){_([]),v(t)},children:"reset"})]}),Object(h.jsx)("ul",{className:"maker__selection",onClick:function(e){var t=parseInt(e.target.dataset.id);t&&(_((function(e){return e.filter((function(e){return e.id!==t}))})),v((function(e){var c=e.map((function(e){return Object(L.a)({},e)}));return c.push(Object(L.a)({},y.find((function(e){return e.id===t})))),c})))},children:y.map((function(e){return Object(h.jsxs)("li",{style:{cursor:"pointer"},"data-id":e.id,className:"maker__select",children:[Object(h.jsx)("i",{className:"fas fa-user icon"}),e.uid]},e.id)}))}),Object(h.jsxs)("div",{className:"search",children:[Object(h.jsx)("label",{className:"maker_label",children:"Search Users"}),Object(h.jsx)("input",{className:"maker__search",type:"search",placeholder:"search here",value:b,onChange:function(e){O(e.target.value)}})]}),Object(h.jsx)("ul",{className:"maker__options",onClick:function(e){var t=parseInt(e.target.dataset.id);t&&(v((function(e){return e.filter((function(e){return e.id!==t}))})),_((function(e){var c=e.map((function(e){return Object(L.a)({},e)}));return c.push(Object(L.a)({},f.find((function(e){return e.id===t})))),c})))},children:z.search(b).map((function(e){var t=e.item;return Object(h.jsxs)("li",{style:{cursor:"pointer"},"data-id":t.id,className:"maker__option",children:[Object(h.jsx)("i",{className:"fas fa-user icon"}),t.uid]},t.id)}))})]}),Object(h.jsx)("div",{className:"action__submit",children:Object(h.jsx)("button",{className:"maker__action",type:"submit",children:"submit"})})]})]})})}c(46);var M=c(12);c(47);function z(e){var t,c=e.changeFlag,s=e.receiverId,a=e.type,r=x(),i=Object(n.useState)(""),j=Object(u.a)(i,2),b=j[0],d=j[1],O=Object(n.useState)(null),p=Object(u.a)(O,2),m=p[0],f=p[1],v=Object(n.useState)(!1),g=Object(u.a)(v,2),N=(g[0],g[1]),y=r;function _(){return(_=Object(o.a)(l.a.mark((function e(t){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),b){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,"http://206.189.91.54//api/v1/messages",n={receiver_id:s,receiver_class:a,body:b},r={method:"post",headers:Object(L.a)({"content-type":"application/json"},y),body:JSON.stringify(n)},N(!0),e.next=10,fetch("http://206.189.91.54//api/v1/messages",r);case 10:return i=e.sent,e.next=13,i.json();case 13:if(e.sent,console.log(i.status),200!==i.status){e.next=20;break}N(!1),c(),e.next=22;break;case 20:throw N(!1),{custom:"failed to send message"};case 22:e.next=29;break;case 24:e.prev=24,e.t0=e.catch(3),console.log(e.t0),f((null===e.t0||void 0===e.t0?void 0:e.t0.custom)||"something wen't wrong"),N(!1);case 29:d("");case 30:case"end":return e.stop()}}),e,null,[[3,24]])})))).apply(this,arguments)}return Object(h.jsxs)("form",{className:"chatbar",onSubmit:function(e){return _.apply(this,arguments)},style:{margin:"0 10px 40px 5px"},children:[Object(h.jsx)("p",{className:"err",children:m||""}),Object(h.jsx)("input",(t={className:"chatbar-container",type:"text"},Object(M.a)(t,"className","chatbar__field"),Object(M.a)(t,"style",{width:"85%",marginLeft:"20px",height:"30px",marginRight:"10px",marginBottom:"10px"}),Object(M.a)(t,"value",b),Object(M.a)(t,"onChange",(function(e){d(e.target.value)})),t)),Object(h.jsx)("button",{className:"chatbar__action",type:"submit",style:{backgroundColor:"#148567",color:"whitesmoke",height:"2.2rem",width:"5rem",fontSize:"15px",padding:"0",marginLeft:"5px"},children:Object(h.jsx)("i",{className:"fas fa-paper-plane"})})]})}c(48);function A(e){var t=e.flag,c=e.receiverId,s=e.type,a=x(),r=Object(n.useState)(!0),i=Object(u.a)(r,2),j=i[0],b=i[1],O=Object(n.useState)([]),p=Object(u.a)(O,2),m=p[0],f=p[1],v=Object(n.useState)(null),g=Object(u.a)(v,2),N=(g[0],g[1]);return Object(n.useEffect)((function(){var e="http://206.189.91.54//api/v1/messages?receiver_class=".concat(s,"&receiver_id=").concat(c,"&sender_id=").concat(null===a||void 0===a?void 0:a.id),t={headers:a};Object(o.a)(l.a.mark((function c(){var n,s;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(e,t);case 3:return n=c.sent,c.next=6,n.json();case 6:if(s=c.sent,200!==n.status){c.next=13;break}b(!1),f(s.data),console.log("hahhaha",s.data),c.next=15;break;case 13:throw b(!1),{custom:"failed to get messages"};case 15:c.next=22;break;case 17:c.prev=17,c.t0=c.catch(0),console.log(c.t0),N((null===c.t0||void 0===c.t0?void 0:c.t0.custom)||"something went wrong"),b(!1);case 22:case"end":return c.stop()}}),c,null,[[0,17]])})))()}),[t,c]),Object(h.jsxs)("div",{className:"messages",children:[Object(h.jsx)(d.b,{to:"/client",children:Object(h.jsx)("h2",{className:"close-chat",style:{textAlign:"right",paddingRight:".7rem",margin:"0"},children:"X"})}),!j&&Object(h.jsx)("ul",{className:"messages__list",style:{height:"85vh"},children:null===m||void 0===m?void 0:m.map((function(e){return console.log(e),Object(h.jsxs)("div",{className:"user_icon",children:[Object(h.jsx)("i",{className:"fas fa-user icon",style:{color:e.sender.uid!==a.uid?"green":"darkcyan"}}),Object(h.jsx)("li",{className:"messages__message",children:Object(h.jsxs)("div",{className:"msg_container",style:{backgroundColor:e.sender.uid!==a.uid?"green":"darkcyan"},children:[Object(h.jsx)("p",{className:"msg-uid",style:{fontSize:"10px"},children:e.sender.uid}),Object(h.jsx)("p",{className:"msg",style:{margin:"0"},children:e.body})]})},e.id)]},e.id)}))})||"...loading"]})}function B(){var e=Object(b.g)(),t=Object(n.useState)("initial"),c=Object(u.a)(t,2),s=c[0],a=c[1];return Object(h.jsxs)("div",{className:"chat-container",children:[Object(h.jsx)(A,{receiverId:e.id,type:e.type,flag:s}),Object(h.jsx)(z,{receiverId:e.id,changeFlag:function(){a((Math.random()+1).toString(36).substring(7))},type:e.type})]})}function R(){var e=x(),t=Object(n.useState)("initial"),c=Object(u.a)(t,2),s=c[0],a=c[1];var r=Object(b.h)().url;return e?Object(h.jsxs)("div",{className:"client-container",children:[Object(h.jsx)(E,{flag:s}),Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"".concat(r,"/:type/:id/"),component:B}),Object(h.jsx)(b.a,{path:"".concat(r,"/new-channel"),children:Object(h.jsx)(J,{changeFlag:function(){a((Math.random()+1).toString(36).substring(7))}})})]})]}):Object(h.jsx)("div",{className:"no-user_container",children:Object(h.jsxs)("div",{className:"no-user",children:[Object(h.jsx)("h1",{className:"no-user_title",children:"Account has Sign Out"}),Object(h.jsx)(d.b,{to:"/",children:"Back to Sign In"})]})})}c(49);function T(){var e=Object(b.f)(),t=Object(n.useState)(""),c=Object(u.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),O=i[0],p=i[1],m=Object(n.useState)(""),x=Object(u.a)(m,2),f=x[0],v=x[1],g=Object(n.useState)(null),N=Object(u.a)(g,2),y=N[0],_=N[1],k=Object(n.useState)(!1),w=Object(u.a)(k,2),S=w[0],C=w[1];function I(){return(I=Object(o.a)(l.a.mark((function t(c){var n,r,i,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),s||O||f){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,n={email:s,password:O,password_confirmation:f},"http://206.189.91.54//api/v1/auth/",r={method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(n)},_(null),C(!0),t.next=11,fetch("http://206.189.91.54//api/v1/auth/",r);case 11:return i=t.sent,t.next=14,i.json();case 14:if(o=t.sent,200!==i.status){t.next=21;break}alert("sign up success!"),e.push("/"),C(!1),t.next=22;break;case 21:throw{custom:(null===o||void 0===o||null===(u=o.errors)||void 0===u?void 0:u.full_messages[0])||"failed to signup"};case 22:t.next=29;break;case 24:t.prev=24,t.t0=t.catch(3),console.log(t.t0),_((null===t.t0||void 0===t.t0?void 0:t.t0.custom)||"something went wrong"),C(!1);case 29:a(""),p(""),v("");case 32:case"end":return t.stop()}}),t,null,[[3,24]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"signup-container",children:Object(h.jsxs)("form",{class:"ui form purple",onSubmit:function(e){return I.apply(this,arguments)},style:{marginTop:"75px"},children:[Object(h.jsx)("i",{class:"chevron circle left"}),Object(h.jsx)("img",{src:j,class:"image",alt:"logo"}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"signup__status",children:S?"..loading":""}),Object(h.jsx)("p",{className:"signup__error",children:y||""}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("label",{style:{color:"whitesmoke",fontWeight:"bolder",fontSize:"22px"},children:"Email"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"input",type:"email",onChange:function(e){a(e.target.value)},value:s,placeholder:"Email",style:{width:"370px"},required:!0})]}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{style:{color:"whitesmoke",fontWeight:"bolder",fontSize:"22px"},children:"Password"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"input",type:"password",onChange:function(e){p(e.target.value)},value:O,placeholder:"Password",style:{width:"370px"},required:!0}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsxs)("label",{style:{color:"whitesmoke",fontWeight:"bolder",fontSize:"22px"},children:[" ","Confirm Password"]})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"input",type:"password",onChange:function(e){v(e.target.value)},value:f,placeholder:"Confirm password",style:{width:"370px"},required:!0}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"signup-btn",type:"submit",children:"SUBMIT"}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsx)(d.b,{to:"/",children:"back to Sign In"})]})})}function U(){return Object(h.jsx)("div",{children:Object(h.jsx)(T,{})})}var W=function(){return Object(h.jsx)(d.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(h.jsx)(b.a,{path:"/signup",component:U}),Object(h.jsx)(b.a,{path:"/client",component:R})]})})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{children:Object(h.jsx)(m,{children:Object(h.jsx)(d.a,{children:Object(h.jsx)(W,{})})})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f54f92f6.chunk.js.map