(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__1Ue-9",element_1:"Message_element_1__3ysPM",img:"Message_img__29ur5",element_2:"Message_element_2__S338i",element_2_name:"Message_element_2_name__3IgyH",element_2_time:"Message_element_2_time__13Lmy"}},,,,,,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2SLwJ",spanClassName:"SuperCheckbox_spanClassName__1ovKZ"}},function(e,a,t){e.exports={App:"App_App__2mRe7",wrapper:"App_wrapper__39hPX"}},,function(e,a,t){e.exports={wrapper:"Affair_wrapper__2z3Wg",button:"Affair_button__3MYcu"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__1wxLU",wrapper:"Affairs_wrapper__1T1ay",button:"Affairs_button__1O3dF"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2swuh",errorInput:"SuperInputText_errorInput__PiSSl",error:"SuperInputText_error__2XRFa"}},function(e,a,t){e.exports={blue:"HW4_blue__1M-c5",column:"HW4_column__5CNx3",testSpanError:"HW4_testSpanError__13fR1"}},,function(e,a,t){e.exports={someClass:"Greeting_someClass__lcu_9",error:"Greeting_error__Uz3RT"}},function(e,a,t){e.exports={default:"SuperButton_default__13-fq",red:"SuperButton_red__3-Y4c"}},,,,,,,,function(e,a,t){e.exports=t(36)},,,,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n,r,l,c,o,s,u=t(0),i=t.n(u),m=t(23),d=t.n(m),f=(t(33),t(12)),p=t.n(f),E=t(2),_=t(6),b=t(9),v=t(7),h=Object(v.a)("div")(n||(n=Object(_.a)(["\n  font-family: sans-serif;\n/*  background: #f0f0f0;\n  height: 100vh;*/\n"]))),g=Object(v.a)("div")(r||(r=Object(_.a)(["\n  width: 10.5em;\n  margin: 0 auto;\n"]))),k=Object(v.a)("div")(l||(l=Object(_.a)(["\n  margin-bottom: 0.8em;\n  padding: 0.4em 2em 0.4em 1em;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);\n  font-weight: 500;\n  font-size: 1.3rem;\n  color: #3faffa;\n  background: #ffffff;\n"]))),C=Object(v.a)("div")(c||(c=Object(_.a)([""]))),j=Object(v.a)("ul")(o||(o=Object(_.a)(["\n  padding: 0;\n  margin: 0;\n  padding-left: 1em;\n  background: #ffffff;\n  border: 2px solid #e5e5e5;\n  box-sizing: border-box;\n  color: #3faffa;\n  font-size: 1.3rem;\n  font-weight: 500;\n  &:first-child {\n    padding-top: 0.8em;\n  }\n"]))),O=Object(v.a)("li")(s||(s=Object(_.a)(["\n  list-style: none;\n  margin-bottom: 0.8em;\n"]))),N=["pre-junior","junior","juniorplus"];var w=function(){var e=Object(u.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(u.useState)(null),l=Object(E.a)(r,2),c=l[0],o=l[1];return i.a.createElement("div",{className:"App"},i.a.createElement(h,null,i.a.createElement(g,null,i.a.createElement(k,{onClick:function(){return n(!t)}},c||"SelectPage"),t&&i.a.createElement(C,null,i.a.createElement(j,null,N.map((function(e){return i.a.createElement(O,{onClick:function(){return o(e),n(!1),void console.log(c)},key:Math.random()},i.a.createElement(b.b,{to:"/".concat(e)},e))})))))))},y=t(1),x=t(5),S=t.n(x);function A(e){return i.a.createElement("div",{className:S.a.message},i.a.createElement("div",{className:S.a.element_1},i.a.createElement("img",{className:S.a.img,src:e.tasks.avatar})),i.a.createElement("div",{className:S.a.element_2},i.a.createElement("p",{className:S.a.element_2_name},e.tasks.name),i.a.createElement("p",{className:S.a.element_2_message},e.tasks.message),i.a.createElement("p",{className:S.a.element_2_time},e.tasks.time)))}var P={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Pavel ",message:"Learning, learning and learning",time:"11:00"};var F=function(){return i.a.createElement("div",null,i.a.createElement(A,{tasks:P}))},I=t(14),T=t.n(I);var M=function(e){return i.a.createElement("div",{className:T.a.wrapper},i.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority)),i.a.createElement("div",{className:T.a.button},i.a.createElement("div",{className:T.a.pos},i.a.createElement("div",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))))},U=t(15),H=t.n(U);var W=function(e){var a=e.data.map((function(a){return i.a.createElement(M,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return i.a.createElement("div",{className:H.a.wrapper},i.a.createElement("div",{className:H.a.affairs},a),i.a.createElement("div",{className:H.a.button},i.a.createElement("div",{onClick:function(){e.setFilter("all")}},"All"),i.a.createElement("div",{onClick:function(){e.setFilter("high")}},"High"),i.a.createElement("div",{onClick:function(){e.setFilter("middle")}},"Middle"),i.a.createElement("div",{onClick:function(){e.setFilter("low")}},"Low")))},B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(u.useState)(B),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(u.useState)("all"),l=Object(E.a)(r,2),c=l[0],o=l[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,c);return i.a.createElement("div",null,i.a.createElement("hr",null),"homeworks 2",i.a.createElement(W,{data:s,setFilter:o,deleteAffairCallback:function(e){return n(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),i.a.createElement("hr",null),i.a.createElement("hr",null))},L=t(27),z=t(19),K=t.n(z),R=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,r=e.error,l=e.totalUsers,c=e.keyPressAddUser,o=e.onFocusHandler,s=r?K.a.error:K.a.someClass;return i.a.createElement("div",null,i.a.createElement("input",{value:a,onChange:t,onKeyPress:c,onFocus:o,className:s}),i.a.createElement("span",null,r),i.a.createElement("button",{onClick:n},"add"),i.a.createElement("span",null,l))},X=function(e){var a=e.users,t=e.addUserCallback,n=Object(u.useState)(""),r=Object(E.a)(n,2),l=r[0],c=r[1],o=Object(u.useState)(""),s=Object(E.a)(o,2),m=s[0],d=s[1],f=function(){return l.match(/\d/)?(c(""),d("name cannot contain numbers")):0===l.length?d("Enter correct name"):(alert("Hello ".concat(l,"!")),t(l),void c(""))},p=a.length;return i.a.createElement(R,{name:l,setNameCallback:function(e){c(e.currentTarget.value.trim().toLowerCase()),d("")},addUser:f,error:m,totalUsers:p,keyPressAddUser:function(e){"Enter"==e.key&&f()},onFocusHandler:function(){d("")}})},D=t(38);var G=function(){var e=Object(u.useState)([]),a=Object(E.a)(e,2),t=a[0],n=a[1];return i.a.createElement("div",null,i.a.createElement("hr",null),"homeworks 3",i.a.createElement(X,{users:t,addUserCallback:function(e){var a={_id:Object(D.a)(),name:e};n([a].concat(Object(L.a)(t)))}}),i.a.createElement("hr",null),i.a.createElement("hr",null))},Y=t(4),q=t(16),Z=t.n(q),$=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],Q=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,r=e.onEnter,l=e.error,c=e.className,o=e.spanClassName,s=Object(Y.a)(e,$),u="".concat(Z.a.error," ").concat(o||""),m="".concat(Z.a.errorInput," ").concat(c||Z.a.superInput);return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:m},s)),l&&i.a.createElement("span",{className:u},l))},V=t(17),ee=t.n(V),ae=t(20),te=t.n(ae),ne=["red","className"],re=function(e){var a=e.red,t=e.className,n=Object(Y.a)(e,ne),r="".concat(a?te.a.red:te.a.default," ").concat(t);return i.a.createElement("button",Object.assign({className:r},n))},le=t(11),ce=t.n(le),oe=["type","onChange","onChangeChecked","className","spanClassName","children"],se=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),l=Object(Y.a)(e,oe),c="".concat(ce.a.checkbox," ").concat(n||"");return i.a.createElement("label",null,i.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t?t(e.currentTarget.checked):a&&a(e)},className:c},l)),r&&i.a.createElement("span",{className:ce.a.spanClassName},r))};var ue=function(){var e=Object(u.useState)(""),a=Object(E.a)(e,2),t=a[0],n=a[1],r=t?"":"error",l=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),n(""))},c=Object(u.useState)(!1),o=Object(E.a)(c,2),s=(o[0],o[1]);return i.a.createElement("div",null,i.a.createElement("hr",null),"homeworks 4",i.a.createElement("div",{className:ee.a.column},i.a.createElement(Q,{value:t,onChangeText:n,onEnter:l,error:r,spanClassName:ee.a.testSpanError}),i.a.createElement(Q,{className:ee.a.blue}),i.a.createElement(re,null,"default"),i.a.createElement(re,{red:!0,onClick:l},"delete "),i.a.createElement(re,{disabled:!0},"disabled"),i.a.createElement(se,{onChangeChecked:s},"clear and simple code from Ignat "),i.a.createElement(se,{onChange:function(e){s(e.currentTarget.checked)}},'What the fuck. I\'m only on stage "Monday"')),i.a.createElement("hr",null),i.a.createElement("hr",null))},ie=["autoFocus","onBlur","onEnter","spanProps"],me=["children","onDoubleClick","className"],de=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,n=e.spanProps,r=Object(Y.a)(e,ie),l=Object(u.useState)(!1),c=Object(E.a)(l,2),o=c[0],s=c[1],m=n||{},d=m.children,f=m.onDoubleClick,p=m.className,_=Object(Y.a)(m,me),b="".concat(ce.a.spanClassName," ").concat(p);return i.a.createElement(i.a.Fragment,null,o?i.a.createElement(Q,Object.assign({autoFocus:!0,onBlur:function(e){s(!o),a&&a(e)},onEnter:function(){s(!o),t&&t()}},r)):i.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!o),f&&f(e)},className:b},_),d||r.value))};function fe(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function pe(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}fe("test",{x:"A",y:1});pe("test",{x:"",y:0});var Ee=function(){var e=Object(u.useState)(""),a=Object(E.a)(e,2),t=a[0],n=a[1];return i.a.createElement("div",{className:p.a.wrapper},i.a.createElement("hr",null),i.a.createElement("div",null,"homeworks 6"),i.a.createElement("div",null,i.a.createElement(de,{value:t,onChangeText:n,spanProps:{children:t?void 0:"enter text..."}})),i.a.createElement("div",null,i.a.createElement(re,{onClick:function(){fe("editable-span-value",t)}},"save"),i.a.createElement(re,{onClick:function(){n(pe("editable-span-value",t))}},"restore")),i.a.createElement("hr",null),i.a.createElement("hr",null))};var _e=function(){return i.a.createElement("div",null,i.a.createElement(F,null),i.a.createElement(J,null),i.a.createElement(G,null),i.a.createElement(ue,null),i.a.createElement(Ee,null))},be=function(){return i.a.createElement("div",null,"Junior")},ve=function(){return i.a.createElement("div",null,"JuniorPlus")};var he=function(){return i.a.createElement("div",null,i.a.createElement("div",null,"404"),i.a.createElement("div",null,"Page not found!"),i.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ge="/pre-junior",ke="/junior",Ce="/juniorplus";function je(){return i.a.createElement("div",null,i.a.createElement(y.c,null,i.a.createElement(y.a,{path:"/",element:i.a.createElement("div",null," ")}),i.a.createElement(y.a,{path:ge,element:i.a.createElement(_e,null)}),i.a.createElement(y.a,{path:ke,element:i.a.createElement(be,null)}),i.a.createElement(y.a,{path:Ce,element:i.a.createElement(ve,null)}),i.a.createElement(y.a,{path:"/*",element:i.a.createElement(he,null)})))}var Oe=function(){return i.a.createElement("div",null,i.a.createElement(b.a,{basename:"IgnatHomeTasks"},i.a.createElement(w,null),i.a.createElement(je,null)))};var Ne=function(){return i.a.createElement("div",{className:p.a.App},i.a.createElement(Oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.475454d4.chunk.js.map