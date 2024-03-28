"use strict";(self.webpackChunk_koko_libs=self.webpackChunk_koko_libs||[]).push([[433],{34468:function(Fe,L,s){s.r(L),s.d(L,{default:function(){return Ae}});var Y=s(27424),U=s.n(Y),q=s(42122),Q=s.n(q),_=s(50204),ee=s(78957),o=s(67294),ne=s(13144),T=s.n(ne),w=s(53124),V=s(45091),te=s(47673),oe=e=>{const{getPrefixCls:a,direction:t}=(0,o.useContext)(w.E_),{prefixCls:n,className:r}=e,l=a("input-group",n),f=a("input"),[c,d]=(0,te.ZP)(f),O=T()(l,{[`${l}-lg`]:e.size==="large",[`${l}-sm`]:e.size==="small",[`${l}-compact`]:e.compact,[`${l}-rtl`]:t==="rtl"},d,r),x=(0,o.useContext)(V.aM),g=(0,o.useMemo)(()=>Object.assign(Object.assign({},x),{isFormItemInput:!1}),[x]);return c(o.createElement("span",{className:O,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},o.createElement(V.aM.Provider,{value:g},e.children)))},$=s(82586),G=s(87462),se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},re=se,k=s(42135),ae=function(a,t){return o.createElement(k.Z,(0,G.Z)({},a,{ref:t,icon:re}))},ie=o.forwardRef(ae),le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},ue=le,ce=function(a,t){return o.createElement(k.Z,(0,G.Z)({},a,{ref:t,icon:ue}))},fe=o.forwardRef(ce),de=s(98423),W=s(42550),ve=s(72922),me=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ce=e=>e?o.createElement(fe,null):o.createElement(ie,null),ge={click:"onClick",hover:"onMouseOver"};var he=o.forwardRef((e,a)=>{const{visibilityToggle:t=!0}=e,n=typeof t=="object"&&t.visible!==void 0,[r,l]=(0,o.useState)(()=>n?t.visible:!1),f=(0,o.useRef)(null);o.useEffect(()=>{n&&l(t.visible)},[n,t]);const c=(0,ve.Z)(f),d=()=>{const{disabled:A}=e;A||(r&&c(),l(m=>{var C;const P=!m;return typeof t=="object"&&((C=t.onVisibleChange)===null||C===void 0||C.call(t,P)),P}))},O=A=>{const{action:m="click",iconRender:C=Ce}=e,P=ge[m]||"",S=C(r),B={[P]:d,className:`${A}-icon`,key:"passwordIcon",onMouseDown:M=>{M.preventDefault()},onMouseUp:M=>{M.preventDefault()}};return o.cloneElement(o.isValidElement(S)?S:o.createElement("span",null,S),B)},{className:x,prefixCls:g,inputPrefixCls:Z,size:h}=e,z=me(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:F}=o.useContext(w.E_),N=F("input",Z),b=F("input-password",g),I=t&&O(b),p=T()(b,x,{[`${b}-${h}`]:!!h}),D=Object.assign(Object.assign({},(0,de.Z)(z,["suffix","iconRender","visibilityToggle"])),{type:r?"text":"password",className:p,prefixCls:N,suffix:I});return h&&(D.size=h),o.createElement($.Z,Object.assign({ref:(0,W.sQ)(a,f)},D))}),pe=s(68795),H=s(96159),J=s(15867),xe=s(98675),ye=s(4173),Ee=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t},Oe=o.forwardRef((e,a)=>{const{prefixCls:t,inputPrefixCls:n,className:r,size:l,suffix:f,enterButton:c=!1,addonAfter:d,loading:O,disabled:x,onSearch:g,onChange:Z,onCompositionStart:h,onCompositionEnd:z}=e,F=Ee(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:N,direction:b}=o.useContext(w.E_),I=o.useRef(!1),p=N("input-search",t),D=N("input",n),{compactSize:A}=(0,ye.ri)(p,b),m=(0,xe.Z)(i=>{var u;return(u=l!=null?l:A)!==null&&u!==void 0?u:i}),C=o.useRef(null),P=i=>{i&&i.target&&i.type==="click"&&g&&g(i.target.value,i,{source:"clear"}),Z&&Z(i)},S=i=>{var u;document.activeElement===((u=C.current)===null||u===void 0?void 0:u.input)&&i.preventDefault()},B=i=>{var u,E;g&&g((E=(u=C.current)===null||u===void 0?void 0:u.input)===null||E===void 0?void 0:E.value,i,{source:"input"})},M=i=>{I.current||O||B(i)},Be=typeof c=="boolean"?o.createElement(pe.Z,null):null,K=`${p}-button`;let R;const y=c||{},X=y.type&&y.type.__ANT_BUTTON===!0;X||y.type==="button"?R=(0,H.Tm)(y,Object.assign({onMouseDown:S,onClick:i=>{var u,E;(E=(u=y==null?void 0:y.props)===null||u===void 0?void 0:u.onClick)===null||E===void 0||E.call(u,i),B(i)},key:"enterButton"},X?{className:K,size:m}:{})):R=o.createElement(J.ZP,{className:K,type:c?"primary":void 0,size:m,disabled:x,key:"enterButton",onMouseDown:S,onClick:B,loading:O,icon:Be},c),d&&(R=[R,(0,H.Tm)(d,{key:"addonAfter"})]);const Me=T()(p,{[`${p}-rtl`]:b==="rtl",[`${p}-${m}`]:!!m,[`${p}-with-button`]:!!c},r),Re=i=>{I.current=!0,h==null||h(i)},Ze=i=>{I.current=!1,z==null||z(i)};return o.createElement($.Z,Object.assign({ref:(0,W.sQ)(C,a),onPressEnter:M},F,{size:m,onCompositionStart:Re,onCompositionEnd:Ze,prefixCls:D,addonAfter:R,suffix:f,onChange:P,className:Me,disabled:x}))}),be=s(22913);const j=$.Z;j.Group=oe,j.Search=Oe,j.TextArea=be.Z,j.Password=he;var Pe=j,Se=s(96974),v=s(85893);function je(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,t=(0,o.useContext)(Se.Us),n=t.navigator;console.log(n),(0,o.useEffect)(function(){if(!a)return;window.addEventListener("beforeunload",l);var r=n.block(function(f){var c=Q()(Q()({},f),{},{retry:function(){r(),f.retry()}});e(c)});function l(){r()}return function(){r(),window.removeEventListener("beforeunload",l)}},[a])}function ze(e){var a=e.when,t=(0,o.useState)(!1),n=U()(t,2),r=n[0],l=n[1],f=(0,o.useRef)(null);return je(function(c){l(!0),f.current=c},a),(0,v.jsx)(_.Z,{title:"\u63D0\u793A",open:r,onCancel:function(){return l(!1)},onOk:function(){var d;(d=f.current)===null||d===void 0||d.retry()},children:(0,v.jsx)("p",{children:"\u60A8\u5C1A\u672A\u4FDD\u5B58\u53D8\u66F4\uFF0C\u70B9\u51FB\u786E\u5B9A\u5C06\u76F4\u63A5\u8DF3\u8F6C\u5E76\u6E05\u9664\u60A8\u521A\u8FDB\u884C\u7684\u64CD\u4F5C"})})}var Ie=function(a){var t=a.whenChange;return(0,v.jsxs)(ee.Z,{children:[(0,v.jsx)(Pe,{onChange:function(){console.log("\u672A\u4FDD\u5B58\u56DE\u5F39\u7A97"),t(!0)}}),(0,v.jsx)(J.ZP,{onClick:function(){return t(!1)},children:"\u4FDD\u5B58"})]})},Ae=function(){var e=(0,o.useState)(!1),a=U()(e,2),t=a[0],n=a[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ie,{whenChange:n}),(0,v.jsx)(ze,{when:t})]})}}}]);
