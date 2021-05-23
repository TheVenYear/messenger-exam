(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{476:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),s=n(19),o=n(122),u=n(121),l=n(518),j=n(261),b=n(519),d=n(520),p=n(521),h=n(522),f=n(48),x=(n(280),n(89)),m=n.n(x),O=n(9),v=n.n(O),g=n(18),y=n(14),w=n(120),k=n.n(w),S="https://messenger-exam.herokuapp.com/",C={baseURL:S+"api/",withCredentials:!0,validateStatus:function(e){return e<500},transformResponse:function(e){var t=JSON.parse(e);if(t.errors.length<1)return t;var n={data:t.data,errors:{}};return t.errors.forEach((function(e){Object.keys(e).forEach((function(t){n.errors[t]||(n.errors[t]=[]),n.errors[t].push(e[t])}))})),n}},F=k.a.create(C),E=function(e){F.interceptors.response.use(function(){var t=Object(g.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(401!==n.status){t.next=8;break}return t.next=3,k.a.request(Object(y.a)(Object(y.a)({},C),{},{url:"auth/refresh",method:"GET"}));case 3:if(401!==t.sent.status){t.next=7;break}return e(null),t.abrupt("return",n);case 7:return t.abrupt("return",k.a.request(n.config));case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},T=F,z=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("auth/sign-in",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("auth/sign-up",t,{headers:{"content-type":"multipart/form-data"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("auth/change-profile",t,{headers:{"content-type":"multipart/form-data"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("auth/logout");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V="app/user/SET",q="app/isInitialized/SET",B={user:null,isInitialized:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(y.a)(Object(y.a)({},e),{},{user:t.payload});case q:return Object(y.a)(Object(y.a)({},e),{},{isInitialized:t.payload});default:return e}},A=function(e){return{type:V,payload:e}},D=function(e){return{type:q,payload:e}},J=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:if(!e.sent.errors.length){e.next=5;break}return e.abrupt("return");case 5:t(A(null));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=n(525),U=n(506),G=n(12),H=n(70),N=n(504),K=n(507),Q=n(508),X=n(92),Y=n(509),Z=n(527),$=n(249),_=n.n($),ee=n(2),te=function(){var e=Object(s.c)((function(e){return e.app.user})),t=Object(s.b)(),n=Object(H.a)();return Object(ee.jsx)(N.a,{color:"secondary",children:Object(ee.jsx)(U.a,{maxWidth:"md",children:Object(ee.jsx)(K.a,{disableGutters:!0,variant:"dense",children:Object(ee.jsxs)(P.a,{display:"flex",width:"100%",justifyContent:"space-between",children:[Object(ee.jsxs)(P.a,{display:"flex",alignItems:"center",children:[Object(ee.jsx)(Q.a,{children:Object(ee.jsx)(_.a,{})}),Object(ee.jsx)(X.a,{align:"center",variant:"h6",children:Object(ee.jsx)(P.a,{fontWeight:600,children:Object(ee.jsx)(Y.a,{color:"inherit",component:f.b,to:"/",children:"Readeractive"})})})]}),e&&Object(ee.jsx)(Y.a,{color:n.palette.background.default,children:Object(ee.jsxs)(P.a,{display:"flex",alignItems:"center",onClick:function(){return t(J())},style:{cursor:"pointer"},children:[Object(ee.jsx)(P.a,{marginRight:"8px",fontWeight:500,children:"\u0412\u044b\u0439\u0442\u0438"}),Object(ee.jsx)(Z.a,{src:e.profile.avatar,alt:"User avatar",style:{width:"30px",height:"30px"}})]})})]})})})})},ne=n(22),re=n(43),ae=n(510),ce=n(512),ie=n(514),se=n(523),oe=n(516),ue=n(258),le=n.n(ue),je=n(250),be=n(51),de=n(74),pe=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.post("messages/",{message:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=n(262),fe=(n(473),n(511)),xe=n(513),me=function(e){var t=e.user,n=e.message;return Object(ee.jsx)(ae.a,{elevation:0,children:Object(ee.jsxs)(fe.a,{children:[Object(ee.jsx)(ce.a,{avatar:Object(ee.jsx)(Z.a,{src:t.profile.avatar||"/broken-image.jpg"}),title:t.profile.nickname||t.email,subheader:Object(ee.jsx)(X.a,{style:{fontSize:"13px",wordWrap:"break-word"},color:"primary",children:m()(n.postedAt).format("LLLL")})}),Object(ee.jsx)(xe.a,{children:Object(ee.jsx)(X.a,{component:"div",style:{wordWrap:"break-word"},children:n.text})})]})})},Oe=function(){var e=Object(r.useState)([]),t=Object(re.a)(e,2),n=t[0],a=t[1],c=Object(r.useRef)(null),i=Object(de.a)({initialValues:{message:""},validationSchema:be.b({message:be.c().required()}),onSubmit:function(e){var t=e.message;pe(t)}}),s=function(){var e,t=null===(e=c.current)||void 0===e?void 0:e.getScrollElement();t&&t.scrollTo({top:t.scrollHeight,behavior:"smooth"})};return Object(r.useEffect)((function(){var e=Object(je.io)(S,{withCredentials:!0});e.on("message",(function(e){a((function(t){return[].concat(Object(ne.a)(t),[e])})),s()})),e.on("connection",(function(e){a((function(t){var n;return[].concat(Object(ne.a)(t),["".concat((null===(n=e.profile)||void 0===n?void 0:n.nickname)||e.email," \u0437\u0430\u0448\u0451\u043b \u0432 \u0447\u0430\u0442")])})),s()})),e.on("user-leave",(function(e){a((function(t){var n;return[].concat(Object(ne.a)(t),["".concat((null===(n=e.profile)||void 0===n?void 0:n.nickname)||e.email," \u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0447\u0430\u0442")])})),s()}))}),[]),Object(ee.jsxs)(ae.a,{style:{height:"100%"},children:[Object(ee.jsx)(ce.a,{style:{height:"10%"},title:"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0443"}),Object(ee.jsx)(he.a,{style:{height:"80%"},ref:c,children:n.map((function(e,t){return"string"===typeof e?Object(ee.jsx)(X.a,{style:{margin:"40px 0px"},color:"textSecondary",align:"center",children:e}):Object(ee.jsx)(me,{user:e.user,message:e.message},t)}))}),Object(ee.jsx)(ie.a,{disableSpacing:!0,style:{justifyContent:"space-between",height:"10%"},children:Object(ee.jsxs)(P.a,{display:"flex",component:"form",onSubmit:i.handleSubmit,alignItems:"center",width:"100%",children:[Object(ee.jsx)(se.a,{fullWidth:!0,name:"message",value:i.values.message,onChange:i.handleChange,variant:"outlined",size:"small",margin:"none",style:{marginRight:"10px"}}),Object(ee.jsx)(oe.a,{variant:"contained",color:"primary",size:"small",type:"submit",endIcon:Object(ee.jsx)(le.a,{})})]})})]})},ve=n(517),ge=n(515),ye=n(526),we=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app.user})),n=Object(de.a)({initialValues:{email:"",password:""},onSubmit:function(){var t=Object(g.a)(v.a.mark((function t(n,r){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.setErrors,t.next=3,z(n);case 3:if((c=t.sent).data){t.next=8;break}return a(c.errors),console.log(c),t.abrupt("return");case 8:e(A(c.data));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()});return t?Object(ee.jsx)(G.a,{to:"/"}):Object(ee.jsxs)(U.a,{maxWidth:"xs",children:[Object(ee.jsx)(X.a,{variant:"h5",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(ee.jsx)("form",{onSubmit:n.handleSubmit,children:Object(ee.jsxs)(ve.a,{children:[Object(ee.jsx)(se.a,{error:!!n.errors.email,helperText:n.errors.email,value:n.values.email,onChange:n.handleChange,label:"Email",name:"email",type:"email"}),Object(ee.jsx)(se.a,{error:!!n.errors.password,helperText:n.errors.password,value:n.values.password,onChange:n.handleChange,label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password"}),Object(ee.jsx)(ge.a,{margin:"normal",children:Object(ee.jsx)(oe.a,{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})}),Object(ee.jsx)(ge.a,{children:Object(ee.jsx)(P.a,{mx:"auto",children:Object(ee.jsx)(Y.a,{style:{textAlign:"center"},component:f.b,to:"/sign-up",children:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441!"})})}),n.errors.global&&Object(ee.jsx)(ge.a,{margin:"normal",children:Object(ee.jsx)(ye.a,{variant:"outlined",severity:"error",children:n.errors.global})})]})})]})},ke=n(118),Se=function(e){var t=e.children,n=Object(ke.a)(e,["children"]),r=Object(s.c)((function(e){return e.app.user}));return Object(ee.jsx)(G.b,Object(y.a)(Object(y.a)({},n),{},{children:r?t:Object(ee.jsx)(G.a,{to:"sign-in"})}))},Ce=n(259),Fe=n.n(Ce),Ee=function(e){var t=e.image,n=Object(ke.a)(e,["image"]),a=Object(r.useState)(null),c=Object(re.a)(a,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){if(t instanceof Blob){var e=new FileReader;e.onloadend=function(){s(e.result)},e.readAsDataURL(t)}else s(t)}),[t]),Object(ee.jsx)(Z.a,Object(y.a)(Object(y.a)({},n),{},{style:{height:"150px",width:"150px"},src:i||"/broken-image.jpg",alt:null===t||void 0===t?void 0:t.name}))},Te=function(e){var t=e.helperValues,n=e.onFinish,r=e.validationSchema,a=Object(de.a)({validationSchema:r,onSubmit:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);n(t)},initialValues:{}});return Object(ee.jsxs)(U.a,{maxWidth:"xs",children:[Object(ee.jsx)(X.a,{variant:"h5",children:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object(ee.jsx)("form",{onSubmit:a.handleSubmit,children:Object(ee.jsxs)(ve.a,{children:[Object(ee.jsx)(se.a,{onChange:a.handleChange,error:a.touched&&!!a.errors.email,helperText:a.errors.email,value:a.values.email,name:"email",placeholder:null===t||void 0===t?void 0:t.email,label:"Email"}),Object(ee.jsx)(se.a,{onChange:a.handleChange,value:a.values.password,error:a.touched&&!!a.errors.password,helperText:a.errors.password,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"}),Object(ee.jsx)(se.a,{onChange:a.handleChange,value:a.values.nickname,name:"nickname",placeholder:null===t||void 0===t?void 0:t.nickname,label:"\u041f\u0440\u043e\u0437\u0432\u0438\u0449\u0435"}),Object(ee.jsx)(Fe.a,{onChange:a.handleChange,mask:"+7 (999) 999 99 99",value:a.values.phone,name:"phone",placeholder:null===t||void 0===t?void 0:t.phone,label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",maskChar:"",children:function(e){return Object(ee.jsx)(se.a,Object(y.a)({},e))}}),Object(ee.jsx)(ge.a,{children:Object(ee.jsx)(P.a,{mx:"auto",children:Object(ee.jsx)(Ee,{image:a.values.avatar})})}),Object(ee.jsxs)(ge.a,{margin:"dense",children:[Object(ee.jsx)("input",{accept:"image/*",id:"avatar",onChange:function(e){a.setFieldValue("avatar",e.currentTarget.files[0])},name:"avatar",multiple:!0,type:"file",style:{display:"none"}}),Object(ee.jsx)(P.a,{mx:"auto",children:Object(ee.jsx)("label",{htmlFor:"avatar",children:Object(ee.jsx)(oe.a,{style:{marginRight:"10px"},variant:"outlined",color:"primary",size:"small",component:"span",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})})})]}),Object(ee.jsx)(ge.a,{children:Object(ee.jsx)(oe.a,{variant:"contained",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})]})};Te.defaultProps={initialValues:{avatar:null}};var ze=Te,Ie=function(){var e=Object(s.c)((function(e){return e.app.user})),t=Object(s.b)(),n=Object(y.a)(Object(y.a)({},e),e.profile);return console.log(n),Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(ze,{initialValues:n,onFinish:function(e){return t(function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(e);case 2:if(t.sent.errors.length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,R();case 7:if((r=t.sent).data){t.next=10;break}return t.abrupt("return");case 10:n(A(r.data));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}}),Object(ee.jsx)(P.a,{mt:1,display:"flex",justifyContent:"center",children:Object(ee.jsx)(oe.a,{variant:"outlined",color:"secondary",onClick:function(){return t(J())},children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})})]})},Re=function(){var e=be.b({avatar:be.a(),email:be.c().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email").required("Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),password:be.c().min(10,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")});return Object(ee.jsx)(ze,{validationSchema:e,onFinish:function(e){I(e),history.push("/")}})},We=function(){return Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(te,{}),Object(ee.jsx)(P.a,{height:"calc(100vh - 70px)",marginTop:"60px",mb:"10px",children:Object(ee.jsx)(U.a,{style:{height:"inherit"},maxWidth:"md",children:Object(ee.jsxs)(G.d,{children:[Object(ee.jsx)(G.b,{path:"/sign-in",children:Object(ee.jsx)(we,{})}),Object(ee.jsx)(Se,{path:"/update",children:Object(ee.jsx)(ze,{type:"update"})}),Object(ee.jsx)(G.b,{path:"/sign-up",children:Object(ee.jsx)(Re,{})}),Object(ee.jsx)(Se,{path:"/change-profile",children:Object(ee.jsx)(Ie,{})}),Object(ee.jsx)(Se,{path:"/",children:Object(ee.jsx)(Oe,{})})]})})})]})},Le=function(){var e=Object(s.b)();Object(r.useEffect)((function(){setTimeout((function(){return e(function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E((function(e){return t(A(e))})),e.next=3,R();case 3:if((n=e.sent).data){e.next=7;break}return t(D(!0)),e.abrupt("return");case 7:t(A(n.data)),t(D(!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),2e3)}),[]);var t=Object(s.c)((function(e){return e.app.isInitialized})),n=Object(l.a)("(prefers-color-scheme: dark)"),a=Object(j.a)({palette:{type:n?"dark":"light",primary:{main:o.a[800]},secondary:{main:n?u.a[50]:u.a[900]}},overrides:{MuiButton:{sizeSmall:{height:"40px"}}},props:{MuiTextField:{size:"small",variant:"outlined",color:"primary"},MuiFormControl:{margin:"normal"},MuiButton:{variant:"contained",color:"primary",size:"small"}}});return m.a.locale("ru"),Object(ee.jsxs)(b.a,{theme:a,children:[Object(ee.jsx)(d.a,{}),Object(ee.jsx)(f.a,{children:t?Object(ee.jsx)(We,{}):Object(ee.jsx)(p.a,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"80vh"},children:Object(ee.jsx)(p.a,{item:!0,children:Object(ee.jsx)(h.a,{})})})})]})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,529)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},qe=n(76),Be=n(260),Me={app:M},Ae=Object(qe.c)(Me),De=Object(qe.d)(Ae,Object(qe.a)(Be.a));i.a.render(Object(ee.jsx)(a.a.StrictMode,{children:Object(ee.jsx)(s.a,{store:De,children:Object(ee.jsx)(Le,{})})}),document.getElementById("root")),window.getState=De.getState,Ve()}},[[476,1,2]]]);
//# sourceMappingURL=main.416b89b3.chunk.js.map