"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[388],{8388:(s,t,e)=>{e.r(t),e.d(t,{default:()=>b});var r=e(5917);const a="profileInfo_descriptionBlock__5jksC";var i=e(9270),o=e(393);const u=s=>{let{status:t,updateUserStatus:e}=s;const[a,i]=(0,r.useState)(!1),[u,n]=(0,r.useState)(t),l=(0,r.useRef)(null);(0,r.useEffect)((()=>{n(t)}),[t]),(0,r.useEffect)((()=>{a&&l.current&&l.current.focus()}),[a]);const d=()=>{i(!0)};return(0,o.jsx)(o.Fragment,{children:a?(0,o.jsx)("div",{children:(0,o.jsx)("input",{ref:l,value:u,onBlur:()=>{i(!1),e(u)},onChange:s=>{n(s.target.value)}})}):(0,o.jsx)("div",{children:u?(0,o.jsx)("span",{onClick:d,children:u}):(0,o.jsx)("span",{onClick:d,children:"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})})})},n=s=>{let{profile:t,status:e,updateUserStatus:r}=s;return t?(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("img",{src:t.photos.large,alt:"big photo"}),(0,o.jsx)(u,{status:e,updateUserStatus:r})]})}):(0,o.jsx)(i.Z,{})};var l=e(7005);const d="myposts_postsBlock__7Rm2g",c="myposts_posts__V84SD",p="post_item__OT0dI";var h=e(4285);const v=s=>{let{id:t,message:e,count:r}=s;return(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("img",{src:h,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),(0,o.jsx)("div",{children:e}),(0,o.jsx)("div",{children:(0,o.jsxs)("span",{children:["like: ",r]})})]})};var x=e(1972),f=e(3346),j=e(51),m=e(9559);const g=(0,j.d)(10),S=s=>{let{posts:t,addPost:e}=s;const r=t.map((s=>(0,o.jsx)(v,{id:s.id,message:s.message,count:s.count},s.id)));return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("h3",{children:"My post"}),(0,o.jsx)(U,{onSubmit:s=>{s.newPostText&&e(s.newPostText)}}),(0,o.jsx)("div",{className:c,children:r})]})},U=(0,f.A)({form:"profileAddPostMessageForm"})((s=>(0,o.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)(x.A,{component:m.T,name:"newPostText",placeholder:"Post message...",validate:[j.m,g]})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{children:"add post"})})]}))),_=r.memo(S);var P=e(1500);const k=(0,l.Ng)((s=>{var t;return{posts:null===(t=s.profilePage)||void 0===t?void 0:t.posts}}),(s=>({addPost:t=>{s((0,P._N)(t))}})))(_),w=s=>{let{profile:t,status:e,updateUserStatus:r}=s;return(0,o.jsxs)("div",{children:[(0,o.jsx)(n,{profile:t,status:e,updateUserStatus:r}),(0,o.jsx)(k,{})]})};var A=e(8766),I=e(5797),N=e(607);const b=(0,I.Zz)((0,l.Ng)((s=>{var t,e,r,a;return{profile:null===(t=s.profilePage)||void 0===t?void 0:t.profile,status:null===(e=s.profilePage)||void 0===e?void 0:e.status,autorizedUserId:null===(r=s.auth)||void 0===r?void 0:r.userId,isAuth:null===(a=s.auth)||void 0===a?void 0:a.isAuth}}),{getUserProfile:P.VM,getUserStatus:P.CD,updateUserStatus:P.pU}),N.$)((s=>{const{getUserProfile:t,getUserStatus:e,updateUserStatus:a,profile:i,status:u,isAuth:n,autorizedUserId:l}=s,{userId:d}=(0,A.g)();return(0,r.useEffect)((()=>{(async()=>{try{if(console.log("Fetching profile with ID:",d),!d){if(!l)throw new Error("ID \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");return void t(l)}t(d),e(d)}catch(s){}})()}),[d,t,e]),(0,o.jsx)(w,{profile:i,status:u,updateUserStatus:a})}))},607:(s,t,e)=>{e.d(t,{$:()=>u});e(5917);var r=e(8766),a=e(7005),i=e(393);let o=s=>{var t;return{isAuth:null===(t=s.auth)||void 0===t?void 0:t.isAuth}};function u(s){return(0,a.Ng)(o)((t=>{let{isAuth:e,...a}=t;return e?(0,i.jsx)(s,{...a}):(0,i.jsx)(r.rd,{to:"/login"})}))}}}]);
//# sourceMappingURL=388.cb251357.chunk.js.map