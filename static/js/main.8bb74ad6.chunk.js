(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{476:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),s=n(19),o=n(122),u=n(121),l=n(518),j=n(261),d=n(519),b=n(520),p=n(521),h=n(522),f=n(48),x=(n(280),n(89)),m=n.n(x),O=n(9),v=n.n(O),g=n(18),y=n(14),w=n(120),k=n.n(w),S={baseURL:"api/",withCredentials:!0,validateStatus:function(e){return e<500},transformResponse:function(e){var t=JSON.parse(e);if(t.errors.length<1)return t;var n={data:t.data,errors:{}};return t.errors.forEach((function(e){Object.keys(e).forEach((function(t){n.errors[t]||(n.errors[t]=[]),n.errors[t].push(e[t])}))})),n}},C=k.a.create(S),F=function(e){C.interceptors.response.use(function(){var t=Object(g.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(401!==n.status){t.next=8;break}return t.next=3,k.a.request(Object(y.a)(Object(y.a)({},S),{},{url:"auth/refresh",method:"GET"}));case 3:if(401!==t.sent.status){t.next=7;break}return e(null),t.abrupt("return",n);case 7:return t.abrupt("return",k.a.request(n.config));case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},E=C,T=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("auth/sign-in",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("auth/sign-up",t,{headers:{"content-type":"multipart/form-data"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("auth/change-profile",t,{headers:{"content-type":"multipart/form-data"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("auth/logout");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W="app/user/SET",V="app/isInitialized/SET",L={user:null,isInitialized:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(y.a)(Object(y.a)({},e),{},{user:t.payload});case V:return Object(y.a)(Object(y.a)({},e),{},{isInitialized:t.payload});default:return e}},M=function(e){return{type:W,payload:e}},A=function(e){return{type:V,payload:e}},q=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:if(!e.sent.errors.length){e.next=5;break}return e.abrupt("return");case 5:t(M(null));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=n(525),J=n(506),N=n(12),G=n(70),P=n(504),_=n(507),H=n(508),K=n(92),Y=n(509),X=n(527),Z=n(249),Q=n.n(Z),$=n(2),ee=function(){var e=Object(s.c)((function(e){return e.app.user})),t=Object(s.b)(),n=Object(G.a)();return Object($.jsx)(P.a,{color:"secondary",children:Object($.jsx)(J.a,{maxWidth:"md",children:Object($.jsx)(_.a,{disableGutters:!0,variant:"dense",children:Object($.jsxs)(U.a,{display:"flex",width:"100%",justifyContent:"space-between",children:[Object($.jsxs)(U.a,{display:"flex",alignItems:"center",children:[Object($.jsx)(H.a,{children:Object($.jsx)(Q.a,{})}),Object($.jsx)(K.a,{align:"center",variant:"h6",children:Object($.jsx)(U.a,{fontWeight:600,children:Object($.jsx)(Y.a,{color:"inherit",component:f.b,to:"/",children:"Readeractive"})})})]}),e&&Object($.jsx)(Y.a,{color:n.palette.background.default,children:Object($.jsxs)(U.a,{display:"flex",alignItems:"center",onClick:function(){return t(q())},style:{cursor:"pointer"},children:[Object($.jsx)(U.a,{marginRight:"8px",fontWeight:500,children:"\u0412\u044b\u0439\u0442\u0438"}),Object($.jsx)(X.a,{src:"https://downloader.disk.yandex.ru/preview/8a80898bd81798d6e169d6c785ae687f02cc03cd5e6a197078977d7d86ef7f3b/inf/SwB6_YWF0FrN8z4AMEExymej2pMZYjs2vvzabBnref7-vjBdOsTe2NDxJ88UdhA5K4x4RXzAVlGrDjpkKVNvkg%3D%3D?uid=235723948&filename=4BasTBUdyy8.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=235723948&tknv=v2&size=S&crop=1",alt:"User avatar",style:{width:"30px",height:"30px"}})]})})]})})})})},te=n(22),ne=n(43),re=n(510),ae=n(512),ce=n(514),ie=n(523),se=n(516),oe=n(258),ue=n.n(oe),le=n(250),je=n(51),de=n(74),be=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.post("messages/",{message:t}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=n(262),he=(n(473),n(511)),fe=n(513),xe=function(e){var t=e.user,n=e.message;return Object($.jsx)(re.a,{elevation:0,children:Object($.jsxs)(he.a,{children:[Object($.jsx)(ae.a,{avatar:Object($.jsx)(X.a,{src:t.profile.avatar||"/broken-image.jpg"}),title:t.profile.nickname||t.email,subheader:Object($.jsx)(K.a,{style:{fontSize:"13px",wordWrap:"break-word"},color:"primary",children:m()(n.postedAt).format("LLLL")})}),Object($.jsx)(fe.a,{children:Object($.jsx)(K.a,{component:"div",style:{wordWrap:"break-word"},children:n.text})})]})})},me=function(){var e=Object(r.useState)([]),t=Object(ne.a)(e,2),n=t[0],a=t[1],c=Object(r.useRef)(null),i=Object(de.a)({initialValues:{message:""},validationSchema:je.b({message:je.c().required()}),onSubmit:function(e){var t=e.message;be(t)}}),s=function(){var e,t=null===(e=c.current)||void 0===e?void 0:e.getScrollElement();t&&t.scrollTo({top:t.scrollHeight,behavior:"smooth"})};return Object(r.useEffect)((function(){var e=Object(le.io)("",{withCredentials:!0});e.on("message",(function(e){a((function(t){return[].concat(Object(te.a)(t),[e])})),s()})),e.on("connection",(function(e){a((function(t){var n;return[].concat(Object(te.a)(t),["".concat((null===(n=e.profile)||void 0===n?void 0:n.nickname)||e.email," \u0437\u0430\u0448\u0451\u043b \u0432 \u0447\u0430\u0442")])})),s()})),e.on("user-leave",(function(e){a((function(t){var n;return[].concat(Object(te.a)(t),["".concat((null===(n=e.profile)||void 0===n?void 0:n.nickname)||e.email," \u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0447\u0430\u0442")])})),s()}))}),[]),Object($.jsxs)(re.a,{style:{height:"100%"},children:[Object($.jsx)(ae.a,{style:{height:"10%"},title:"\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0443"}),Object($.jsx)(pe.a,{style:{height:"80%"},ref:c,children:n.map((function(e,t){return"string"===typeof e?Object($.jsx)(K.a,{style:{margin:"40px 0px"},color:"textSecondary",align:"center",children:e}):Object($.jsx)(xe,{user:e.user,message:e.message},t)}))}),Object($.jsx)(ce.a,{disableSpacing:!0,style:{justifyContent:"space-between",height:"10%"},children:Object($.jsxs)(U.a,{display:"flex",component:"form",onSubmit:i.handleSubmit,alignItems:"center",width:"100%",children:[Object($.jsx)(ie.a,{fullWidth:!0,name:"message",value:i.values.message,onChange:i.handleChange,variant:"outlined",size:"small",margin:"none",style:{marginRight:"10px"}}),Object($.jsx)(se.a,{variant:"contained",color:"primary",size:"small",type:"submit",endIcon:Object($.jsx)(ue.a,{})})]})})]})},Oe=n(517),ve=n(515),ge=n(526),ye=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app.user})),n=Object(de.a)({initialValues:{email:"",password:""},onSubmit:function(){var t=Object(g.a)(v.a.mark((function t(n,r){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.setErrors,t.next=3,T(n);case 3:if((c=t.sent).data){t.next=8;break}return a(c.errors),console.log(c),t.abrupt("return");case 8:e(M(c.data));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()});return t?Object($.jsx)(N.a,{to:"/"}):Object($.jsxs)(J.a,{maxWidth:"xs",children:[Object($.jsx)(K.a,{variant:"h5",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object($.jsx)("form",{onSubmit:n.handleSubmit,children:Object($.jsxs)(Oe.a,{children:[Object($.jsx)(ie.a,{error:!!n.errors.email,helperText:n.errors.email,value:n.values.email,onChange:n.handleChange,label:"Email",name:"email",type:"email"}),Object($.jsx)(ie.a,{error:!!n.errors.password,helperText:n.errors.password,value:n.values.password,onChange:n.handleChange,label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",type:"password"}),Object($.jsx)(ve.a,{margin:"normal",children:Object($.jsx)(se.a,{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})}),Object($.jsx)(ve.a,{children:Object($.jsx)(U.a,{mx:"auto",children:Object($.jsx)(Y.a,{style:{textAlign:"center"},component:f.b,to:"/sign-up",children:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441!"})})}),n.errors.global&&Object($.jsx)(ve.a,{margin:"normal",children:Object($.jsx)(ge.a,{variant:"outlined",severity:"error",children:n.errors.global})})]})})]})},we=n(118),ke=function(e){var t=e.children,n=Object(we.a)(e,["children"]),r=Object(s.c)((function(e){return e.app.user}));return Object($.jsx)(N.b,Object(y.a)(Object(y.a)({},n),{},{children:r?t:Object($.jsx)(N.a,{to:"sign-in"})}))},Se=n(259),Ce=n.n(Se),Fe=function(e){var t=e.image,n=Object(we.a)(e,["image"]),a=Object(r.useState)(null),c=Object(ne.a)(a,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){if(t instanceof Blob){var e=new FileReader;e.onloadend=function(){s(e.result)},e.readAsDataURL(t)}else s(t)}),[t]),Object($.jsx)(X.a,Object(y.a)(Object(y.a)({},n),{},{style:{height:"150px",width:"150px"},src:i||"/broken-image.jpg",alt:null===t||void 0===t?void 0:t.name}))},Ee=function(e){var t=e.helperValues,n=e.onFinish,r=e.validationSchema,a=Object(de.a)({validationSchema:r,onSubmit:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);n(t)},initialValues:{}});return Object($.jsxs)(J.a,{maxWidth:"xs",children:[Object($.jsx)(K.a,{variant:"h5",children:"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"}),Object($.jsx)("form",{onSubmit:a.handleSubmit,children:Object($.jsxs)(Oe.a,{children:[Object($.jsx)(ie.a,{onChange:a.handleChange,error:a.touched&&!!a.errors.email,helperText:a.errors.email,value:a.values.email,name:"email",placeholder:null===t||void 0===t?void 0:t.email,label:"Email"}),Object($.jsx)(ie.a,{onChange:a.handleChange,value:a.values.password,error:a.touched&&!!a.errors.password,helperText:a.errors.password,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"}),Object($.jsx)(ie.a,{onChange:a.handleChange,value:a.values.nickname,name:"nickname",placeholder:null===t||void 0===t?void 0:t.nickname,label:"\u041f\u0440\u043e\u0437\u0432\u0438\u0449\u0435"}),Object($.jsx)(Ce.a,{onChange:a.handleChange,mask:"+7 (999) 999 99 99",value:a.values.phone,name:"phone",placeholder:null===t||void 0===t?void 0:t.phone,label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",maskChar:"",children:function(e){return Object($.jsx)(ie.a,Object(y.a)({},e))}}),Object($.jsx)(ve.a,{children:Object($.jsx)(U.a,{mx:"auto",children:Object($.jsx)(Fe,{image:a.values.avatar})})}),Object($.jsxs)(ve.a,{margin:"dense",children:[Object($.jsx)("input",{accept:"image/*",id:"avatar",onChange:function(e){a.setFieldValue("avatar",e.currentTarget.files[0])},name:"avatar",multiple:!0,type:"file",style:{display:"none"}}),Object($.jsx)(U.a,{mx:"auto",children:Object($.jsx)("label",{htmlFor:"avatar",children:Object($.jsx)(se.a,{style:{marginRight:"10px"},variant:"outlined",color:"primary",size:"small",component:"span",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})})})]}),Object($.jsx)(ve.a,{children:Object($.jsx)(se.a,{variant:"contained",type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})]})};Ee.defaultProps={initialValues:{avatar:null}};var Te=Ee,ze=function(){var e=Object(s.c)((function(e){return e.app.user})),t=Object(s.b)(),n=Object(y.a)(Object(y.a)({},e),e.profile);return console.log(n),Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Te,{initialValues:n,onFinish:function(e){return t(function(e){return function(){var t=Object(g.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:if(t.sent.errors.length){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,I();case 7:if((r=t.sent).data){t.next=10;break}return t.abrupt("return");case 10:n(M(r.data));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}}),Object($.jsx)(U.a,{mt:1,display:"flex",justifyContent:"center",children:Object($.jsx)(se.a,{variant:"outlined",color:"secondary",onClick:function(){return t(q())},children:"\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430"})})]})},Ie=function(){var e=je.b({avatar:je.a(),email:je.c().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email").required("Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),password:je.c().min(10,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")});return Object($.jsx)(Te,{validationSchema:e,onFinish:function(e){z(e),history.push("/")}})},Be=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ee,{}),Object($.jsx)(U.a,{height:"calc(100vh - 70px)",marginTop:"60px",mb:"10px",children:Object($.jsx)(J.a,{style:{height:"inherit"},maxWidth:"md",children:Object($.jsxs)(N.d,{children:[Object($.jsx)(N.b,{path:"/sign-in",children:Object($.jsx)(ye,{})}),Object($.jsx)(ke,{path:"/update",children:Object($.jsx)(Te,{type:"update"})}),Object($.jsx)(N.b,{path:"/sign-up",children:Object($.jsx)(Ie,{})}),Object($.jsx)(ke,{path:"/change-profile",children:Object($.jsx)(ze,{})}),Object($.jsx)(ke,{path:"/",children:Object($.jsx)(me,{})})]})})})]})},Re=function(){var e=Object(s.b)();Object(r.useEffect)((function(){setTimeout((function(){return e(function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F((function(e){return t(M(e))})),e.next=3,I();case 3:if((n=e.sent).data){e.next=7;break}return t(A(!0)),e.abrupt("return");case 7:t(M(n.data)),t(A(!0));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),2e3)}),[]);var t=Object(s.c)((function(e){return e.app.isInitialized})),n=Object(l.a)("(prefers-color-scheme: dark)"),a=Object(j.a)({palette:{type:n?"dark":"light",primary:{main:o.a[800]},secondary:{main:n?u.a[50]:u.a[900]}},overrides:{MuiButton:{sizeSmall:{height:"40px"}}},props:{MuiTextField:{size:"small",variant:"outlined",color:"primary"},MuiFormControl:{margin:"normal"},MuiButton:{variant:"contained",color:"primary",size:"small"}}});return m.a.locale("ru"),Object($.jsxs)(d.a,{theme:a,children:[Object($.jsx)(b.a,{}),Object($.jsx)(f.a,{children:t?Object($.jsx)(Be,{}):Object($.jsx)(p.a,{container:!0,alignItems:"center",justify:"center",style:{minHeight:"80vh"},children:Object($.jsx)(p.a,{item:!0,children:Object($.jsx)(h.a,{})})})})]})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,529)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},Ve=n(76),Le=n(260),De={app:D},Me=Object(Ve.c)(De),Ae=Object(Ve.d)(Me,Object(Ve.a)(Le.a));i.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(s.a,{store:Ae,children:Object($.jsx)(Re,{})})}),document.getElementById("root")),window.getState=Ae.getState,We()}},[[476,1,2]]]);
//# sourceMappingURL=main.8bb74ad6.chunk.js.map