(this["webpackJsonpwebapp-tech-project-assessment"]=this["webpackJsonpwebapp-tech-project-assessment"]||[]).push([[0],{149:function(e,t,n){"use strict";var r=n(170);n.d(t,"LOCAL_STORAGE_KEY",(function(){return r.a}));n(171),n(172)},150:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(t,n,r){var a;if(void 0!==(null===(a=e.document)||void 0===a?void 0:a.cookie)){var i=r||new Date((new Date).getTime()+864e5);e.document.cookie="".concat(t,"=").concat(n,";Path=/;Expires=").concat(i.toString())}},a=function(t,n){var a;(null===(a=e)||void 0===a?void 0:a.localStorage)?e.localStorage.setItem(t,n):r(t,n)},i=function(t){var n,r,a;return(null===(n=e)||void 0===n?void 0:n.localStorage)?null!==(a=e.localStorage.getItem(t))&&void 0!==a?a:"":null!==(r=function(t){var n,r,a=null===(n=e.document)||void 0===n?void 0:n.cookie.split(";");if(!a||!a.length)return"";var i=(a.find((function(e){return e.includes(t)}))||"").split("=");return null!==(r=null===i||void 0===i?void 0:i[1])&&void 0!==r?r:""}(t))&&void 0!==r?r:""}}).call(this,n(61))},16:function(e,t,n){"use strict";var r=n(168);n.o(r,"Granularity")&&n.d(t,"Granularity",(function(){return r.Granularity})),n.o(r,"PullRequestMetric")&&n.d(t,"PullRequestMetric",(function(){return r.PullRequestMetric})),n.o(r,"Repository")&&n.d(t,"Repository",(function(){return r.Repository}));var a=n(169);n.d(t,"Granularity",(function(){return a.a})),n.d(t,"PullRequestMetric",(function(){return a.b})),n.d(t,"Repository",(function(){return a.c}))},168:function(e,t){},169:function(e,t,n){"use strict";var r,a,i;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),function(e){e.all="all",e.alignedWeek="aligned week",e.alignedMonth="aligned month",e.alignedYear="aligned year",e.day="day",e.week="month",e.month="year",e.year="year"}(r||(r={})),function(e){e.prLeadTime="pr-lead-time",e.prLeadCount="pr-lead-count",e.prLeadCountQ="pr-lead-count-q",e.prAllCount="pr-all-count",e.prCycleTime="pr-cycle-time",e.prWipTime="pr-wip-time",e.prWipCount="pr-wip-count",e.prWipCountQ="pr-wip-count-q",e.prWipPendingCount="pr-wip-pending-count",e.prReviewTime="pr-review-time",e.prReviewCount="pr-review-count",e.prReviewCountQ="pr-review-count-q",e.prReviewPendingCount="pr-review-pending-count",e.prMergingTime="pr-merging-time",e.prMergingCount="pr-merging-count",e.prMergingCountQ="pr-merging-count-q",e.prMergingPendingCount="pr-merging-pending-count",e.prReleaseTime="pr-release-time",e.prReleaseCount="pr-release-count",e.prReleaseCountQ="pr-release-count-q",e.prReleasePendingCount="pr-release-pending-count",e.prRejected="pr-rejected",e.prOpened="pr-opened"}(a||(a={})),function(e){e.athenianApi="github.com/athenianco/athenian-api",e.athenianWebapp="github.com/athenianco/athenian-webapp",e.infraestructure="github.com/athenianco/infrastructure",e.metadata="github.com/athenianco/metadata"}(i||(i={}))},170:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.tabs="reposStats_tabs"}(r||(r={}))},171:function(e,t){},172:function(e,t){},452:function(e,t,n){},455:function(e,t,n){"use strict";n.r(t);var r,a=n(3),i=n(0),c=n.n(i),o=n(43),l=n.n(o),u=n(227),s=n(25),d=n(13),p="#FFF",b="#FAFAFB",m="#F3F3F5",g="#DBDBDB",h="#8889A1",f="#858796",v="#121343",O="#FFA008",j="#FF7427",x=b,w=f,y=g,C=h,k=v,R=j,M="#E4E7E7",T="#C4C4C4",P="#757575",F="#E7E7EC",_=O,S=h,A=v,N=g,z=v,D=p,q=g,E="#C0C1CE",L=v,I=b,B=L,W=h,H=O,G=j,K="#484848",Q="#CACCCD",U=m,Y=h,J=b,V=L,X=q,Z=h,$=j,ee=q,te=j,ne="#147EEC",re=b,ae=f,ie=v,ce=function(){return Object(a.b)("&,& *{color:",k,";font-size:2.1rem;font-weight:400;letter-spacing:-0.4px;line-height:31.5px;margin:0;}&{margin-bottom:20px;}","")},oe=function(e){var t=e.children,n=function(e){switch(e){case"title1":return ce;default:return function(){}}}(e.type);return Object(a.c)("div",{css:n},t)},le=n(41),ue=n.n(le),se=n(90),de=n(24),pe=n(207),be=n.n(pe),me={method:"post",path:"".concat("/metrics","/pull_requests")},ge=be.a.create(Object(de.a)(Object(de.a)({},r),{},{baseURL:"https://api.athenian.co/v1",headers:Object(de.a)(Object(de.a)({},null===r||void 0===r?void 0:r.headers),{},{"Content-Type":"application/json"})})),he={metrics:{getRepositoryPullRequestsMetrics:function(){var e=Object(se.a)(ue.a.mark((function e(t){var n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ge[me.method](me.path,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},fe=n(16),ve=function(e){return e.calculated},Oe=function(e){var t=e.getFullYear().toString().padStart(4,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(r)},je=function(e,t){var n=e.dateFrom,r=e.dateTo,a=e.metric,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{for:[{repositories:[fe.Repository.athenianApi,fe.Repository.metadata,fe.Repository.infraestructure,fe.Repository.athenianWebapp],repogroups:i?[[0],[1],[2],[3]]:void 0}],metrics:[a],granularities:t,account:1,exclude_inactive:!0,timezone:60,date_from:Oe(n),date_to:Oe(r)}},xe=function(e){var t=Object(i.useState)({screenWidth:0,screenHeight:0,ratiowh:0,ratiohw:0,rect:void 0}),n=Object(d.a)(t,2),r=n[0],a=n[1],c=function(){var t,n=window.innerWidth,r=window.innerHeight,i=n/r,c=r/n;if(null===e||void 0===e?void 0:e.current){var o=e.current.getBoundingClientRect();t={width:o.width,height:o.height>300?300:o.height,left:o.left,right:o.right,top:o.top,bottom:o.bottom}}a({screenWidth:n,screenHeight:r,ratiowh:i,ratiohw:c,rect:t})};return Object(i.useEffect)((function(){return window.addEventListener("resize",c,!1),c(),function(){window.removeEventListener("resize",c,!1)}}),[]),r},we=n(228),ye=function(){return Object(a.b)("&.Button,&.react-datepicker__navigation{align-items:center;background-color:","#FFF",";border:1px solid ",M,";border-radius:3px;color:",P,";cursor:pointer;display:flex;font-size:1.2rem;height:32px;justify-content:center;padding:6px 9px;&:hover{border-color:",T,";}&--primary{background-color:",R,";border-color:",R,";color:","#FFF",";&:hover{border-color:",R,";opacity:0.7;text-decoration:none!important;}}&--small{border:none;height:28px;padding:0.375rem 1.5rem;&:hover{opacity:0.7;text-decoration:underline;}}}","")},Ce=function(e){var t=e.children,n=e.onClick,r=e.primary,i=void 0!==r&&r,c=e.small,o=void 0!==c&&c;return Object(a.c)("button",{css:ye,className:"Button".concat(i?" Button--primary":"").concat(o?" Button--small":""),onClick:n},t)},ke=function(){return Object(a.b)("&.Tabs-tab{align-items:center;display:inline-flex;border-bottom:0.3rem solid transparent;color:",S,";cursor:pointer;height:",52,"px;margin:0 2rem;padding:1.2rem 0;transition:border-bottom 0.2s;&:not(.Tabs-tab--active):hover{border-bottom-color:",F,";}&--active{border-bottom:0.3rem solid ",_,";color:",A,";cursor:default;}}","")},Re=function(e){var t=e.active,n=void 0!==t&&t,r=e.children,i=e.onClick;return Object(a.c)("div",{css:ke,className:"Tabs-tab".concat(n?" Tabs-tab--active":""),onClick:i},r)},Me=function(){return Object(a.b)("&.Tabs{align-items:center;border-bottom:1px solid ",F,";display:flex;font-size:1.2rem;height:",52,"px;justify-content:center;line-height:1.4rem;margin:0px auto;margin-bottom:20px;text-transform:capitalize;width:100%;}","")},Te=function(e){var t=e.children;return Object(a.c)("div",{className:"Tabs",css:Me},t({Tab:Re}))},Pe=n(149),Fe=n(150),_e=function(e){return e.split("-").map((function(e){return e.toUpperCase()})).join(" ")},Se=function(e){return null===e||void 0===e?void 0:e.toLowerCase().replace(/ /g,"-")};var Ae={name:"p8ymcr",styles:"align-items:center;display:flex;flex:1;justify-content:center"},Ne=function(){return Ae},ze=function(e){var t=(null===e||void 0===e?void 0:e.toLowerCase())||"",n=t.length>0,r=Se(t).includes("tab-#");return n&&!r},De=function(){var e=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){var e=Object(Fe.a)(Pe.LOCAL_STORAGE_KEY.tabs);if(e)try{var t=JSON.parse(e);r(t)}catch(n){}}),[]),{persistedTabs:n,persistTabs:function(e){Object(Fe.b)(Pe.LOCAL_STORAGE_KEY.tabs,JSON.stringify(e)),r(e)}}}(),t=e.persistedTabs,n=e.persistTabs,r=Object(i.useState)([]),o=Object(d.a)(r,2),l=o[0],u=o[1],s=Object(i.useState)(),p=Object(d.a)(s,2),b=p[0],m=p[1],g=function(e){m(e)},h=function(){var e="Tab #".concat(l.length+1);u([].concat(Object(we.a)(l),[e])),g(e)};return Object(i.useEffect)((function(){u(t),b||m(t[0])}),[t]),{activeTab:ze(b)?Se(b):b,removeActiveTab:function(){var e=l.findIndex((function(e){return e===b})),t=l.filter((function(e){return e!==b}));u(t),g(t[0===e?e:e-1]),n(t)},renderTabs:function(){return Object(a.c)(Te,null,(function(e){var t=e.Tab;return Object(a.c)(c.a.Fragment,null,Object(a.c)("div",{css:Ne},l.map((function(e){return Object(a.c)(t,{key:e,active:b===e,onClick:function(){return g(e)}},e)}))),Object(a.c)(Ce,{onClick:h},"Add"))}))},renameTab:function(e,t){var r=l.map((function(n){return n===e?t:n}));n(r),b===e&&g(t)},tabs:l}},qe=n.p+"static/media/logo.dc7c6f56.svg",Ee=["BACKGROUND","CONTENT","SIDEBAR","HEADER","MODAL","NOTIFICATION","TUTORIAL"],Le=function(e){return Ee.findIndex((function(t){return t===e}))},Ie=function(){return Object(a.b)("&.Header{align-items:center;background-color:","#FFF",";border-bottom:1px solid ",y,";color:",C,";display:flex;height:",42,"px;justify-content:space-between;padding:0 20px;position:fixed;top:0;left:0;width:100vw;z-index:",Le("HEADER"),";&>*{margin-right:10px;max-height:100%;&:last-child{margin-right:0;}}.Header-logo{height:24px;}}","")},Be=function(){return Object(a.b)("&.Header-spacer{height:",42,"px;width:100%;}","")},We=function(){return Object(a.c)(c.a.Fragment,null,Object(a.c)("header",{css:Ie,className:"Header"},Object(a.c)("a",{className:"Header-logoLink",href:"https://athenian.co",target:"_blank",rel:"noopener noreferrer"},Object(a.c)("img",{className:"Header-logo",src:qe,alt:"Athenian logo"})),Object(a.c)("span",{className:"Header-text"},"Athenian WebApp Tech Assessment")),Object(a.c)("div",{css:Be,className:"Header-spacer"}))};var He={name:"1y1xl1c",styles:"&.MainLayout{.MainLayout-content{margin:0 auto;max-width:1280px;}}"},Ge=function(){return He},Ke=function(e){var t=e.children;return Object(a.c)("div",{css:Ge,className:"MainLayout"},Object(a.c)(We,null),Object(a.c)("main",{className:"MainLayout-content"},t))},Qe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2?arguments[2]:void 0;return e.toLocaleString("en-EN",{maximumFractionDigits:t,minimumFractionDigits:null!==n&&void 0!==n?n:t})},Ue=function(){var e=new Date(Date.now());return{startDate:new Date(e.getTime()-11232e5),endDate:e}},Ye=function(e){var t=86400;if(e<=60)return"".concat(Qe(e,1,0),"s");if(e<=3600)return"".concat(Qe(e/60,1,0)," min");if(e<=t)return"".concat(Qe(e/60/60,1,0)," h");if(e<=2592e3){var n=Qe(e/60/60/24,0),r=Number(n)*t,a=Qe((e-r)/60/60,1,0);return"".concat(n," days").concat(Number(a)>0?", ".concat(a," h"):"")}return"".concat(Qe(e/60/60/24/30,1,0)," months")},Je=n(208),Ve=n.n(Je),Xe=(n(261),function(){return Object(a.c)("svg",{focusable:"false",viewBox:"0 0 1393.1 1500"},Object(a.c)("path",{d:"m107 1393h241v-241h-241zm295 0h268v-241h-268zm-295-295h241v-268h-241zm295 0h268v-268h-268zm-295-321h241v-241h-241zm616 616h268v-241h-268zm-321-616h268v-241h-268zm643 616h241v-241h-241zm-322-295h268v-268h-268zm-294-723v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm616 723h241v-268h-241zm-322-321h268v-241h-268zm322 0h241v-241h-241zm27-402v-241c0-7-3-14-8-19-6-5-12-8-19-8h-54c-7 0-13 3-19 8-5 5-8 12-8 19v241c0 7 3 14 8 19 6 5 12 8 19 8h54c7 0 13-3 19-8 5-5 8-12 8-19zm321-54v1072c0 29-11 54-32 75s-46 32-75 32h-1179c-29 0-54-11-75-32s-32-46-32-75v-1072c0-29 11-54 32-75s46-32 75-32h107v-80c0-37 13-68 40-95s57-39 94-39h54c37 0 68 13 95 39 26 26 39 58 39 95v80h321v-80c0-37 13-69 40-95 26-26 57-39 94-39h54c37 0 68 13 94 39s40 58 40 95v80h107c29 0 54 11 75 32s32 46 32 75z"}))}),Ze=function(){return Object(a.b)(Object(a.b)("align-items:center;background-color:",D,";border:1px solid ",q,";border-radius:0.4rem;color:inherit;display:inline-flex;font-size:12px;&>svg{display:inline-block;fill:currentColor;margin:10px;width:16px;}","")," &.Datepicker{min-width:278px;.react-datepicker-wrapper{.react-datepicker__input-container{align-items:center;display:flex;flex:1;input{background:transparent;border:none;color:",L,";flex:1;padding:10px;text-align:center;}}button.react-datepicker__close-icon{background:transparent;border-radius:50%;color:inherit;color:rgb(133, 135, 150);height:28px;font-size:11px;margin:4px;padding:6px;position:initial;text-align:center;width:28px;&:hover{background-color:",q,";}::after{background-color:transparent;border-radius:0;color:inherit;display:inline-block;font-size:24px;height:14px;line-height:8px;margin:0 auto;margin-left:-1px;margin-top:4px;padding:0;vertical-align:top;width:14px;}}}.react-datepicker{background-color:",I,";border-color:",q,";.react-datepicker__triangle{&::before{border-bottom-color:",q,";}&::after{border-bottom-color:",I,";}}.react-datepicker__header{background-color:transparent;border-bottom:none;padding:0;}.react-datepicker__navigation{",ye()," top:18px;width:40px;>.react-datepicker__navigation-icon{height:19px;width:19px;&::before{border-color:currentColor;border-width:1px 1px 0 0;left:4px;}}}.react-datepicker__navigation--previous{left:22px;}.react-datepicker__navigation--next{right:22px;}.react-datepicker__current-month{color:",B,";font-size:1.2rem;font-weight:bolder;padding-top:22px;padding-bottom:37px;}.react-datepicker__day-names{margin-bottom:-2px;padding:0 13px;}.react-datepicker__week,.react-datepicker__day{height:29px;}.react-datepicker__week{align-items:center;display:flex;justify-content:center;}.react-datepicker__day-name,.react-datepicker__day{border-top:1px solid ",I,";border-right:1px solid ",I,";font-size:1rem;font-weight:300;margin:0;width:30px;}.react-datepicker__day-name{color:",W,";}.react-datepicker__day{align-items:center;background-color:","transparent",";border-radius:0;color:",K,";display:inline-flex;justify-content:center;&:hover{opacity:0.7;}&--disabled{color:",Q,";}&--in-selecting-range,&--in-range{background-color:",H,";color:","#FFF",";}&--selecting-range-start,&--selecting-range-end,&--range-start,&--range-end{background-color:",G,";color:","#FFF",";}&--outside-month{visibility:hidden;}}.react-datepicker__footer{align-items:center;background-color:","#FFF",";border-top:1px solid ",q,";clear:left;display:flex;flex-direction:'row';float:left;justify-content:flex-end;margin-top:16px;padding:1.2rem 2rem;width:100%;}.react-datepicker__error-msg{color:","#EF3837",";font-size:1.2rem;font-weight:700;flex:1;}.react-datepicker__action-buttons{display:flex;}}}","")},$e=Ue(),et=$e.startDate,tt=$e.endDate,nt=function(e){var t=e.error,n=e.isClearable,r=e.onChange,o=e.range,l=void 0!==o&&o,u=Object(i.useState)(et),s=Object(d.a)(u,2),p=s[0],b=s[1],m=Object(i.useState)(tt),g=Object(d.a)(m,2),h=g[0],f=g[1],v=Object(i.useState)([et,l?tt:void 0]),O=Object(d.a)(v,2),j=Object(d.a)(O[0],2),x=j[0],w=j[1],y=O[1],C=Object(i.useState)(!1),k=Object(d.a)(C,2),R=k[0],M=k[1],T=Object(i.useState)(""),P=Object(d.a)(T,2),F=P[0],_=P[1],S=function(e){if(e instanceof Date)y([e,void 0]);else{var t=Object(d.a)(e,2),n=t[0],a=t[1];if(n||a)n&&!a||n&&a&&function(e,t,n){var r=e.getTime()-t.getTime();return r>=0&&r<=n||r<0&&-r<=n}(n,a,7776e6)?(y([n,a]),_("")):_("Invalid dates");else b(et),f(tt),y([et,tt]),r(et,tt),M(!1)}},A=function(){S(l?[p,h]:p),M(!1)};return Object(a.c)(c.a.Fragment,null,Object(a.c)("div",{css:Ze,className:"Datepicker"},Object(a.c)(Xe,null),Object(a.c)(Ve.a,{dateFormat:"MMM dd, yyyy",endDate:l?w:void 0,isClearable:n,maxDate:function(){var e=x?new Date((null===x||void 0===x?void 0:x.getTime())+7776e6):tt;return e.getTime()>=Date.now()?new Date(Date.now()):e}(),monthsShown:2,onChange:S,onClickOutside:A,onInputClick:function(){M(!0)},open:R,showDisabledMonthNavigation:!0,selected:p,selectsRange:l,startDate:l?x:void 0},Object(a.c)("div",{className:"react-datepicker__footer"},(t||F)&&Object(a.c)("p",{className:"react-datepicker__error-msg"},t||F),Object(a.c)("div",{className:"react-datepicker__action-buttons"},Object(a.c)(Ce,{onClick:A,small:!0},"Cancel"),Object(a.c)(Ce,{onClick:function(){x&&w&&(b(x),f(w),r(x,w),M(!1))},primary:!0,small:!0},"Apply"))))))};var rt,at={name:"hwauno",styles:"&.Toolbar{align-items:center;display:flex;justify-content:space-between;margin:2rem 0;min-height:40px;padding:0 20px;&--no-padding{padding:0;}}"},it=function(){return at},ct=function(e){var t=e.fullWidth,n=void 0!==t&&t,r=e.left,i=e.right;return Object(a.c)("div",{className:"Toolbar".concat(n?" Toolbar--no-padding":""),css:it},Object(a.c)("div",{className:"Toolbar-left"},r),Object(a.c)("div",{className:"Toolbar-right"},i))},ot=function(e){var t=e.onDateRangeChange;return Object(a.c)(ct,{right:Object(a.c)(nt,{isClearable:!0,onChange:t,range:!0})})},lt=function(){return Object(a.b)("&.Card{align-items:center;background-color:","#FFF",";border:1px solid ",N,";border-radius:0.35rem;display:flex;flex-direction:column;width:100%;.Card-title,.Card-content{align-items:center;display:flex;width:100%;}.Card-title{border-bottom:1px solid ",N,";color:",z,";font-size:1.4rem;font-weight:400;padding:2rem;line-height:2rem;}.Card-content{flex-idrection:column;flex:1;padding:3.2rem 2rem;}}","")},ut=function(e){var t=e.children,n=e.title;return Object(a.c)("div",{css:lt,className:"Card"},!!n&&Object(a.c)("div",{className:"Card-title"},n),Object(a.c)("div",{className:"Card-content"},t))},st=n(19),dt=n(463),pt=n(467),bt=n(117),mt=n(118),gt=n(96),ht=n(215),ft=n(222),vt=(rt={},Object(st.a)(rt,fe.PullRequestMetric.prLeadTime,"s"),Object(st.a)(rt,fe.PullRequestMetric.prLeadCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prLeadCountQ," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prAllCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prCycleTime,"s"),Object(st.a)(rt,fe.PullRequestMetric.prWipTime,"s"),Object(st.a)(rt,fe.PullRequestMetric.prWipCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prWipCountQ," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prWipPendingCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prReviewTime,"s"),Object(st.a)(rt,fe.PullRequestMetric.prReviewCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prReviewCountQ," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prReviewPendingCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prMergingTime,"s"),Object(st.a)(rt,fe.PullRequestMetric.prMergingCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prMergingCountQ," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prMergingPendingCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prReleaseTime,"s"),Object(st.a)(rt,fe.PullRequestMetric.prReleaseCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prReleaseCountQ," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prReleasePendingCount," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prRejected," PRs"),Object(st.a)(rt,fe.PullRequestMetric.prOpened," PRs"),rt),Ot=function(e){return vt[e]},jt=function(e){var t=e.children,n=e.columns,r=void 0===n?2:n;return Object(a.c)("div",{css:function(){return function(e){return Object(a.b)("&.Grid{display:grid;grid-template-columns:repeat(",e,", ",100/e,"%);grid-template-rows:1fr;grid-gap:20px;padding:20px;width:100%;}","")}(r)},className:"Grid"},t)},xt=function(){return Object(a.b)("&.KPI{background-color:",re,";border-radius:0.35rem;color:",ae,";display:inline-flex;flex-direction:column;padding:2rem;max-width:320px;width:100%;word-wrap:break-word;.KPI-label,.KPI-value{font-weight:500;}.KPI-label{font-size:1.1rem;line-height:1.4rem;margin-bottom:0.75rem;text-transform:uppercase;}.KPI-value{color:",ie,";font-size:2.1rem;letter-spacing:-0.04rem;line-height:2.1rem;}}","")},wt=function(e){var t=e.label,n=e.value;return Object(a.c)("div",{css:xt,className:"KPI"},Object(a.c)("span",{className:"KPI-label"},t),Object(a.c)("span",{className:"KPI-value"},n))},yt=function(e,t){return"s"===t?Ye(e):"".concat(e).concat(t)},Ct=function(e,t,n){return"s"===n.unit?Ye(e):e},kt=function(){return Object(a.b)("&.AreaChart{height:100%;width:100%;.recharts-wrapper{padding-top:20px;}.recharts-rectangle.recharts-tooltip-cursor{display:none!important;}.recharts-cartesian-axis-tick-value tspan{color:",Z,";display:block;font-size:1rem;max-width:45px!important;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}}","")},Rt=function(e){var t,n,r,c,o=e.data,l=e.metric,u=Object(i.useRef)(null),s=xe(u).rect,d=_e(l),p=Ot(l),b=null===(t=null!==(n=null===o||void 0===o?void 0:o[0].values)&&void 0!==n?n:[])||void 0===t?void 0:t.map((function(e){var t,n=null===e||void 0===e||null===(t=e.values)||void 0===t?void 0:t[0];return Object(st.a)({},l,n?parseInt(n,10):0)})),m=b.reduce((function(e,t){return e+t[l]}),0)/b.length,g="s"===p?Ye(m):"".concat(Qe(m,2,0)).concat(p),h=b.reduce((function(e,t){return t[l]>e?t[l]:e}),0),f="s"===p?Ye(h):"".concat(Qe(h,2,0)).concat(p);return Object(a.c)("div",{css:kt,className:"AreaChart",ref:u},Object(a.c)(jt,{columns:2},Object(a.c)(wt,{label:"Average ".concat(d),value:g}),Object(a.c)(wt,{label:"Maximum ".concat(d),value:f})),Object(a.c)(dt.a,{data:b,height:null!==(r=null===s||void 0===s?void 0:s.height)&&void 0!==r?r:300,width:null!==(c=null===s||void 0===s?void 0:s.width)&&void 0!==c?c:400},Object(a.c)("defs",null,Object(a.c)("linearGradient",{id:"lineGradient",x1:"0",y1:"0",x2:"0",y2:"1"},Object(a.c)("stop",{offset:"0%",stopColor:te,stopOpacity:.2}),Object(a.c)("stop",{offset:"100%",stopColor:te,stopOpacity:.2}))),Object(a.c)(pt.a,{stroke:ee}),Object(a.c)(bt.a,{dataKey:"name",tickCount:5,tickLine:!1}),Object(a.c)(mt.a,{tickCount:4,tickFormatter:function(e){return yt(e,p)},tickLine:!1}),Object(a.c)(gt.a,{formatter:Ct}),Object(a.c)(ht.a,{stroke:ne,strokeDasharray:"6 2",strokeWidth:2,y:m}),Object(a.c)(ft.a,{dataKey:l,dot:{stroke:"red",strokeWidth:2},fill:"url(#lineGradient)",fillOpacity:1,name:d,stroke:te,type:"monotone",unit:p})))},Mt=n(468),Tt=n(229),Pt=function(){return Object(a.b)("&.BarChart{height:100%;width:100%;.recharts-wrapper{padding-top:20px;}.recharts-rectangle.recharts-tooltip-cursor{display:none!important;}.recharts-cartesian-axis-tick-value tspan{color:",Z,";display:block;font-size:1rem;max-width:45px!important;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}}","")},Ft=function(e){var t,n,r,c=e.data,o=e.metric,l=Object(i.useRef)(null),u=xe(l).rect,s=_e(o),d=Ot(o),p=null===(t=null!==c&&void 0!==c?c:[])||void 0===t?void 0:t.map((function(e){var t,n,r,a;return Object(st.a)({name:(a=e.for.repositories[0],a.replace("github.com/athenianco/",""))},o,parseInt(null===(t=e.values)||void 0===t||null===(n=t[0])||void 0===n||null===(r=n.values)||void 0===r?void 0:r[0],10))})),b=p.reduce((function(e,t){return e+t[o]}),0)/p.length,m="s"===d?Ye(b):"".concat(Qe(b,2,0)).concat(d),g=p.reduce((function(e,t){return t[o]>e?t[o]:e}),0),h="s"===d?Ye(g):"".concat(Qe(g,2,0)).concat(d);return Object(a.c)("div",{css:Pt,className:"BarChart",ref:l},Object(a.c)(jt,{columns:2},Object(a.c)(wt,{label:"Average ".concat(s),value:m}),Object(a.c)(wt,{label:"Maximum ".concat(s),value:h})),Object(a.c)(Mt.a,{data:p,height:null!==(n=null===u||void 0===u?void 0:u.height)&&void 0!==n?n:300,width:null!==(r=null===u||void 0===u?void 0:u.width)&&void 0!==r?r:400},Object(a.c)(pt.a,{vertical:!1,stroke:X}),Object(a.c)(bt.a,{dataKey:"name",tickLine:!1}),Object(a.c)(mt.a,{tickCount:9,tickFormatter:function(e){return yt(e,d)},tickLine:!1}),Object(a.c)(gt.a,{formatter:Ct}),Object(a.c)(Tt.a,{dataKey:o,fill:$,name:s,maxBarSize:50,unit:d})))},_t=function(){return Object(a.c)("p",null,"Some fancy loading indicator...")},St=function(e){var t=e.aggregatedMetrics,n=e.groupedMetrics,r=e.loadingAggregated,i=e.loadingGrouped,c=e.metric;return Object(a.c)(jt,{columns:2},Object(a.c)(ut,null,"loading"===r&&Object(a.c)(_t,null),"success"===r&&Object(a.c)(Rt,{data:t,metric:c})),Object(a.c)(ut,null,"loading"===i&&Object(a.c)(_t,null),"success"===i&&Object(a.c)(Ft,{data:n,metric:c})))},At=n(225),Nt=function(e){var t=e.isMultiple,n=void 0!==t&&t,r=e.onChange,i=e.options,c=e.placeholder;return Object(a.c)(At.a,{className:"Dropdown",isMulti:n,onChange:function(e,t){n||e instanceof Array||!e||r(e,t),n&&e instanceof Array&&r(e,t)},options:i,placeholder:c,styles:{control:function(e,t){return Object(de.a)(Object(de.a)({},e),{},{backgroundColor:D,border:"1px solid ".concat(t.isFocused||t.menuIsOpen?E:q),borderRadius:"0.4rem",boxShadow:"none",height:40,fontSize:"1.2rem",maxWidth:190,":hover":{borderColor:E}})},valueContainer:function(e){return Object(de.a)(Object(de.a)({},e),{},{color:V})},placeholder:function(e){return Object(de.a)(Object(de.a)({},e),{},{color:"inherit"})},indicatorsContainer:function(e){return Object(de.a)(Object(de.a)({},e),{},{color:Y})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(e){return Object(de.a)(Object(de.a)({},e),{},{color:"inherit"})},menu:function(e){return Object(de.a)(Object(de.a)({},e),{},{border:"none",boxShadow:"none",borderRadius:0,backgroundColor:U,minWidth:240,width:240})},menuList:function(e,t){return Object(de.a)(Object(de.a)({},e),{},{border:"1px solid ".concat(q),borderRadius:"0.4rem",paddingBottom:0,paddingTop:t.isMulti?void 0:0})},option:function(e,t){return Object(de.a)(Object(de.a)({},e),{},{alignItems:"center",backgroundColor:"#FFF",borderBottom:"1px solid ".concat(q),color:V,cursor:"pointer",display:"flex",fontSize:"1.2rem",lineHeight:1.4,minHeight:36,padding:"0 1.2rem",wordBreak:"break-word",overflow:"hidden",":hover":{backgroundColor:J},":first-child":{borderTop:t.isMulti?"1px solid ".concat(q):void 0},":last-child":{borderBottom:t.isMulti?void 0:"none"}})}}})},zt=function(e){var t=e.activeTab,n=e.activeTabHasBeenSetup,r=e.children,o=e.onMetricChange,l=e.removeActiveTab,u=e.renderTabs,s=e.tabs,d=Object(i.useMemo)((function(){return(e=fe.PullRequestMetric,Object.values(e).map((function(e){return{label:_e(e),value:e}}))).filter((function(e){return!s.includes(e.label)}));var e}),[s]);return Object(a.c)(c.a.Fragment,null,u(),!!t&&Object(a.c)(c.a.Fragment,null,Object(a.c)(ct,{fullWidth:!0,left:Object(a.c)(c.a.Fragment,null,!n&&Object(a.c)(Nt,{onChange:o,options:d,placeholder:"Select a metric..."})),right:Object(a.c)(Ce,{onClick:l},"Close")})),r)};var Dt={name:"16gts2u",styles:"&.Homescreen{.Content{padding:0 20px;}}"},qt=function(){return Dt},Et=[{Component:function(){var e=Ue(),t=e.startDate,n=e.endDate,r=De(),c=r.activeTab,o=r.removeActiveTab,l=r.renameTab,u=r.renderTabs,s=r.tabs,p=ze(c),b=Object(i.useState)([t,n]),m=Object(d.a)(b,2),g=m[0],h=m[1],f=function(e){var t=Object(d.a)(e.dateRange,2),n=t[0],r=t[1],a=e.metric,c=Object(i.useState)("idle"),o=Object(d.a)(c,2),l=o[0],u=o[1],s=Object(i.useState)(),p=Object(d.a)(s,2),b=p[0],m=p[1],g=function(){var e=Object(se.a)(ue.a.mark((function e(t){var n,r,a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u("loading"),n=je(t,[fe.Granularity.alignedWeek],!1),e.next=5,he.metrics.getRepositoryPullRequestsMetrics(n);case 5:r=e.sent,a=ve(r),m(a),u("success"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),u("error"),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),h=Object(i.useState)("idle"),f=Object(d.a)(h,2),v=f[0],O=f[1],j=Object(i.useState)(),x=Object(d.a)(j,2),w=x[0],y=x[1],C=function(){var e=Object(se.a)(ue.a.mark((function e(t){var n,r,a;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O("loading"),n=je(t,[fe.Granularity.all],!0),e.next=5,he.metrics.getRepositoryPullRequestsMetrics(n);case 5:r=e.sent,a=ve(r),y(a),O("success"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),O("error"),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){n&&r&&a&&(g({dateFrom:n,dateTo:r,metric:a}),C({dateFrom:n,dateTo:r,metric:a}))}),[n,r,a]),{loadingAggregated:l,aggregatedMetrics:b,loadingGrouped:v,groupedMetrics:w}}({dateRange:g,metric:p?c:void 0}),v=f.loadingAggregated,O=f.aggregatedMetrics,j=f.loadingGrouped,x=f.groupedMetrics;return Object(a.c)(Ke,null,Object(a.c)("div",{css:qt,className:"Homescreen"},Object(a.c)(ot,{onDateRangeChange:function(e,t){h([e,t])}}),Object(a.c)("div",{className:"Content"},Object(a.c)(oe,{type:"title1"},Object(a.c)("h2",null,"Insights")),Object(a.c)(zt,{activeTab:c,activeTabHasBeenSetup:p,onMetricChange:function(e){l(c,null===e||void 0===e?void 0:e.label)},removeActiveTab:o,renderTabs:u,tabs:s},!!p&&Object(a.c)(St,{aggregatedMetrics:O,groupedMetrics:x,loadingAggregated:v,loadingGrouped:j,metric:c})))))},exact:!0,path:"/"}],Lt=(n(452),function(){return Object(a.c)(u.a,null,Object(a.c)(s.c,null,Et.map((function(e){var t=e.Component,n=e.exact,r=e.path;return Object(a.c)(s.a,{key:r,component:t,exact:n,path:r})}))))}),It=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,470)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};l.a.render(Object(a.c)(c.a.StrictMode,null,Object(a.c)(a.a,{styles:function(){return Object(a.b)("*,*::before,*::after{box-sizing:border-box;}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0;}ul[role='list'],ol[role='list']{list-style:none;}html{font-size:62.5%;font-family:sans-serif;line-height:1.15;}html:focus-within{scroll-behavior:smooth;}body{background-color:",x,";min-height:100vh;color:",w,";font-family:'Cerebri',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-size:1.2rem;font-weight:400;line-height:1.5;text-align:left;text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);}a:not([class]){text-decoration-skip-ink:auto;}img,picture{max-width:100%;display:block;}input,button,textarea,select{font:inherit;}@media (prefers-reduced-motion: reduce){html:focus-within{scroll-behavior:auto;}*,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important;scroll-behavior:auto!important;}}","")}}),Object(a.c)(Lt,null)),document.getElementById("root")),It()}},[[455,1,2]]]);
//# sourceMappingURL=main.86f5d537.chunk.js.map