(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,n){e.exports={message:"Message_message__1Ue-9",element_1:"Message_element_1__3ysPM",img:"Message_img__29ur5",element_2:"Message_element_2__S338i",element_2_name:"Message_element_2_name__3IgyH",element_2_time:"Message_element_2_time__13Lmy"}},,,,,,,,function(e,a,n){e.exports={wrapper:"Affair_wrapper__2z3Wg",button:"Affair_button__3MYcu"}},function(e,a,n){e.exports={someClass:"Affairs_someClass__1wxLU",wrapper:"Affairs_wrapper__1T1ay",button:"Affairs_button__1O3dF"}},function(e,a,n){e.exports={superInput:"SuperInputText_superInput__2swuh",errorInput:"SuperInputText_errorInput__PiSSl",error:"SuperInputText_error__2XRFa"}},function(e,a,n){e.exports={blue:"HW4_blue__1M-c5",column:"HW4_column__5CNx3",testSpanError:"HW4_testSpanError__13fR1"}},,function(e,a,n){e.exports={someClass:"Greeting_someClass__lcu_9",error:"Greeting_error__Uz3RT"}},function(e,a,n){e.exports={default:"SuperButton_default__13-fq",red:"SuperButton_red__3-Y4c"}},function(e,a,n){e.exports={checkbox:"SuperCheckbox_checkbox__2SLwJ",spanClassName:"SuperCheckbox_spanClassName__1ovKZ"}},,,,,,function(e,a,n){e.exports={App:"App_App__2mRe7"}},,,,,,function(e,a,n){e.exports=n(41)},,,,,function(e,a,n){},,,,,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(24),c=n.n(l),o=(n(36),n(25)),s=n.n(o),i=n(2),u=n(5),m=n(9),f=n(6);function d(){var e=Object(u.a)(["\n  list-style: none;\n  margin-bottom: 0.8em;\n"]);return d=function(){return e},e}function p(){var e=Object(u.a)(["\n  padding: 0;\n  margin: 0;\n  padding-left: 1em;\n  background: #ffffff;\n  border: 2px solid #e5e5e5;\n  box-sizing: border-box;\n  color: #3faffa;\n  font-size: 1.3rem;\n  font-weight: 500;\n  &:first-child {\n    padding-top: 0.8em;\n  }\n"]);return p=function(){return e},e}function _(){var e=Object(u.a)([""]);return _=function(){return e},e}function E(){var e=Object(u.a)(["\n  margin-bottom: 0.8em;\n  padding: 0.4em 2em 0.4em 1em;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);\n  font-weight: 500;\n  font-size: 1.3rem;\n  color: #3faffa;\n  background: #ffffff;\n"]);return E=function(){return e},e}function v(){var e=Object(u.a)(["\n  width: 10.5em;\n  margin: 0 auto;\n"]);return v=function(){return e},e}function b(){var e=Object(u.a)(["\n  font-family: sans-serif;\n/*  background: #f0f0f0;\n  height: 100vh;*/\n"]);return b=function(){return e},e}Object(f.a)("div")(b()),Object(f.a)("div")(v()),Object(f.a)("div")(E()),Object(f.a)("div")(_()),Object(f.a)("ul")(p()),Object(f.a)("li")(d());var h=function(){var e=Object(t.useState)(!1),a=Object(i.a)(e,2),n=(a[0],a[1],Object(t.useState)(null)),r=Object(i.a)(n,2);r[0],r[1]},g=n(1),k=n(4),C=n.n(k);function j(e){return r.a.createElement("div",{className:C.a.message},r.a.createElement("div",{className:C.a.element_1},r.a.createElement("img",{className:C.a.img,src:e.tasks.avatar})),r.a.createElement("div",{className:C.a.element_2},r.a.createElement("p",{className:C.a.element_2_name},e.tasks.name),r.a.createElement("p",{className:C.a.element_2_message},e.tasks.message),r.a.createElement("p",{className:C.a.element_2_time},e.tasks.time)))}var O={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Pavel ",message:"Learning, learning and learning",time:"11:00"};var N=function(){return r.a.createElement("div",null,r.a.createElement(j,{tasks:O}))},w=n(12),y=n.n(w);var x=function(e){return r.a.createElement("div",{className:y.a.wrapper},r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority)),r.a.createElement("div",{className:y.a.button},r.a.createElement("div",{className:y.a.pos},r.a.createElement("div",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))))},S=n(13),A=n.n(S);var I=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:A.a.wrapper},r.a.createElement("div",{className:A.a.affairs},a),r.a.createElement("div",{className:A.a.button},r.a.createElement("div",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("div",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("div",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("div",{onClick:function(){e.setFilter("low")}},"Low")))},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(t.useState)(T),a=Object(i.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)("all"),o=Object(i.a)(c,2),s=o[0],u=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(n,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(I,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(n,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=n(30),P=n(17),U=n.n(P),H=function(e){var a=e.name,n=e.setNameCallback,t=e.addUser,l=e.error,c=e.totalUsers,o=e.keyPressAddUser,s=e.onFocusHandler,i=l?U.a.error:U.a.someClass;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:n,onKeyPress:o,onFocus:s,className:i}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:t},"add"),r.a.createElement("span",null,c))},W=function(e){var a=e.users,n=e.addUserCallback,l=Object(t.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],u=Object(t.useState)(""),m=Object(i.a)(u,2),f=m[0],d=m[1],p=function(){return o.match(/\d/)?(s(""),d("name cannot contain numbers")):0===o.length?d("Enter correct name"):(alert("Hello ".concat(o,"!")),n(o),void s(""))},_=a.length;return r.a.createElement(H,{name:o,setNameCallback:function(e){s(e.currentTarget.value.trim().toLowerCase()),d("")},addUser:p,error:f,totalUsers:_,keyPressAddUser:function(e){"Enter"==e.key&&p()},onFocusHandler:function(){d("")}})},J=n(29);var L=function(){var e=Object(t.useState)([]),a=Object(i.a)(e,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:n,addUserCallback:function(e){var a={_id:Object(J.v1)(),name:e};l([a].concat(Object(M.a)(n)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=n(8),B=n(14),K=n.n(B),R=function(e){e.type;var a=e.onChange,n=e.onChangeText,t=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(z.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(K.a.error," ").concat(s||""),m="".concat(K.a.errorInput," ").concat(o||K.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:u},c))},G=n(15),X=n.n(G),Y=n(18),q=n.n(Y),Z=function(e){var a=e.red,n=e.className,t=Object(z.a)(e,["red","className"]),l="".concat(a?q.a.red:q.a.default," ").concat(n);return r.a.createElement("button",Object.assign({className:l},t))},$=n(19),D=n.n($),Q=function(e){e.type;var a=e.onChange,n=e.onChangeChecked,t=e.className,l=(e.spanClassName,e.children),c=Object(z.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(D.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n?n(e.currentTarget.checked):a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:D.a.spanClassName},l))};var V=function(){var e=Object(t.useState)(""),a=Object(i.a)(e,2),n=a[0],l=a[1],c=n?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(n),l(""))},s=Object(t.useState)(!1),u=Object(i.a)(s,2),m=(u[0],u[1]);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:X.a.column},r.a.createElement(R,{value:n,onChangeText:l,onEnter:o,error:c,spanClassName:X.a.testSpanError}),r.a.createElement(R,{className:X.a.blue}),r.a.createElement(Z,null,"default"),r.a.createElement(Z,{red:!0,onClick:o},"delete "),r.a.createElement(Z,{disabled:!0},"disabled"),r.a.createElement(Q,{onChangeChecked:m},"clear and simple code from Ignat "),r.a.createElement(Q,{onChange:function(e){m(e.currentTarget.checked)}},'What the fuck. I\'m only on stage "Monday"')),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ee=function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(F,null),r.a.createElement(L,null),r.a.createElement(V,null))},ae=function(){return r.a.createElement("div",null,"Junior")},ne=function(){return r.a.createElement("div",null,"JuniorPlus")};var te=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},re="/pre-junior",le="/junior",ce="/juniorplus";function oe(){return r.a.createElement("div",null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:re,element:r.a.createElement(ee,null)}),r.a.createElement(g.a,{path:le,element:r.a.createElement(ae,null)}),r.a.createElement(g.a,{path:ce,element:r.a.createElement(ne,null)}),r.a.createElement(g.a,{path:"/*",element:r.a.createElement(te,null)})))}var se=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(h,null),r.a.createElement(oe,null)))};var ie=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.ef9cb065.chunk.js.map