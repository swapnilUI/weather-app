(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(250)},250:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(8),s=n(6),u=n(10),l=n(9),d=n(11),p=n(53),f=n(30),h=n(95),b=n(25),m={data:{cod:"",message:0,cnt:0},isLoading:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVED_WEATHER_DATA":return t.payload?Object(b.a)({},e,{data:Object(b.a)({},e.data,t.payload),isLoading:!1}):Object(b.a)({},e,{isLoading:!1});case"INPROGRESS_WEATHER_DATA":return Object(b.a)({},e,{isLoading:!0});default:return e}},g=function(){var e=Object(f.c)({weather:v});return Object(f.d)(e,{},Object(f.a)(h.a))},E=n(31),O=n.n(E),j=n(50),C=n(12),y=n(13),x=n(96),R=n.n(x);function w(){var e=Object(C.a)(["\n    position:fixed;\n    width:100%;\n    height:100%\n    background:rgba(255,255,255, .5);\n    display:flex;\n    justify-content:center;\n    align-items:center\n"]);return w=function(){return e},e}var k,A=function(){return r.a.createElement(D,null,r.a.createElement("img",{src:R.a,alt:"",width:200}))},D=y.a.section(w()),U=n(99),I=n.n(U),S="https://api.openweathermap.org/data/2.5/forecast?q=".concat("Munich",",").concat("de","&APPID=").concat("75f972b80e26f14fe6c920aa6a85ad57","&cnt=").concat("40","&units={unit}");!function(e){e.ERROR="ERRROR",e.SUCCESS="SUCCESS",e.UNAUTHORIZED="UNAUTHORIZED",e.FORBIDDEN="FORBIDDEN"}(k||(k={}));var T,N=[{label:"Celcius",value:"metric"},{label:"Fahrenheit",value:"imperial"}];!function(e){e.CELECIUS="Celcius",e.FAHRENHEIT="Fahrenheit",e.METRIC="metric",e.IMPERIAL="imperial"}(T||(T={}));var P=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],F=function(e){return function(){var t=Object(j.a)(O.a.mark(function t(n){var a;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(L()),t.next=3,H(e);case 3:a=t.sent,n(M(a));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},H=function(e){var t=function(e){return S.replace("{unit}",e)}(e);return I.a.get(t).then(function(e){return 200===e.status?e.data:{status:k.ERROR,message:"Unkown error"}}).catch(function(e){if(e.response&&e.response.status){if(403===e.response.status)return{status:k.FORBIDDEN,message:e.response.data};if(401===e.response.status)return{status:k.UNAUTHORIZED,message:e.response.data}}return{status:k.ERROR,message:e.response.data}})},L=function(){return{type:"INPROGRESS_WEATHER_DATA"}},M=function(e){return{type:"RECEIVED_WEATHER_DATA",payload:e}},W=n(272),_=n(273),B=n(274),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){n.setState({value:e.target.value}),n.props.onRadioChange(e.target.value)},n.state={value:n.props.defaultValue},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_.a,{style:{flexDirection:"row"},value:this.state.value,onChange:this.handleChange},this.props.options.map(function(e){return r.a.createElement(B.a,{key:e.value,value:e.value,control:r.a.createElement(W.a,null),label:e.label})}))}}]),t}(r.a.PureComponent),J=n(101),V=n.n(J),G=(n(157),n(158),n(68)),Z=n.n(G);function Y(){var e=Object(C.a)(["\n  display: block;\n  &.slick-disabled {\n    display: none !important;\n  }\n"]);return Y=function(){return e},e}function q(){var e=Object(C.a)(["\n  display: block;\n  img {\n    transform: rotate(180deg);\n  }\n  &.slick-disabled {\n    display: none !important;\n  }\n"]);return q=function(){return e},e}var $=y.a.div(q()),K=y.a.div(Y()),Q=n(275);function X(){var e=Object(C.a)(["\n  font-size:20px;\n  @media(max-width:375px){\n    font-size:15px\n  }\n"]);return X=function(){return e},e}function ee(){var e=Object(C.a)(["\n  padding: 20px;\n  box-sizing: border-box;\n  height:100%;\n  cursor:pointer;\n  &:hover{\n    box-shadow: 4px 4px 9px -5px rgba(0,0,0,0.75);\n  }\n  &.selected{\n    border:1px solid #ff0\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(C.a)(["\n  padding: 10px;\n  box-sizing: border-box;\n  height:100%;\n  p{\n    @media(max-width:375px){\n      font-size:13px\n    }\n  }\n"]);return te=function(){return e},e}var ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).onCardChange=function(){n.props.onCardChange(n.props.date)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.date,n=e.daysData,a=e.isSelected,c=n.filter(function(e){return e.date===t})[0];return r.a.createElement(ae,{key:t},r.a.createElement(re,{onClick:this.onCardChange,className:a?"selected":""},r.a.createElement(ce,null,Math.round(c.temp)," \xb0",c.tempUnit),r.a.createElement("p",null,function(e){var t=new Date(e);return t.getDate()+" "+P[t.getMonth()]+" "+t.getFullYear()}(t))))}}]),t}(r.a.PureComponent),ae=y.a.div(te()),re=Object(y.a)(Q.a)(ee()),ce=y.a.h3(X());function oe(){var e=Object(C.a)(["\n    padding-top:50px;\n    .slick-next{\n      top:-50px;\n      right:22px\n    }\n    .slick-prev{\n      top:-50px;\n      left:22px\n    }\n"]);return oe=function(){return e},e}var ie={dots:!1,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1,nextArrow:r.a.createElement(function(e){var t=e.className,n=e.style,a=e.onClick;return r.a.createElement(K,{className:t,style:Object(b.a)({},n,{display:"block"}),onClick:a},r.a.createElement("img",{src:Z.a,alt:""}))},null),prevArrow:r.a.createElement(function(e){var t=e.className,n=e.style,a=e.onClick;return r.a.createElement($,{className:t,style:Object(b.a)({},n),onClick:a},r.a.createElement("img",{src:Z.a,alt:""}))},null)},se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.dates,a=t.daysData,c=t.selected;return r.a.createElement(ue,null,r.a.createElement(V.a,ie,n.map(function(t){return r.a.createElement(ne,{onCardChange:e.props.onCardChange,isSelected:c===t,key:t,date:t,daysData:a})})))}}]),t}(r.a.PureComponent),ue=y.a.div(oe()),le=n(41),de=n(102),pe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.labels,n=e.data,a=e.chartLabel,c=e.selectedUnit,o={labels:Object(le.a)(t),datasets:[{label:a,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:Object(le.a)(n)}]},i=c&&c===T.METRIC?"C":"F";return r.a.createElement("div",null,r.a.createElement(de.a,{data:o,width:100,height:300,options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{callback:function(e){return"".concat(e," \xb0 ").concat(i)}}}]}}}))}}]),t}(r.a.PureComponent);function fe(){var e=Object(C.a)(["\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1;\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n    border-radius: 4px;\n"]);return fe=function(){return e},e}var he=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.error;return r.a.createElement(be,null,e)}}]),t}(r.a.PureComponent),be=y.a.div(fe());function me(){var e=Object(C.a)(["\n        display:flex;\n        justify-content:center;\n        margin-bottom:50px\n"]);return me=function(){return e},e}function ve(){var e=Object(C.a)(['\n        max-width:960px;\n        margin:0 auto;\n        font-family:"Roboto", "Helvetica", "Arial", sans-serif\n']);return ve=function(){return e},e}var ge=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={selected:n.props.dates[0]},n.onCardChange=function(e){n.setState({selected:e})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.daysData,n=e.dates,a=e.selectedUnit,c=this.state.selected,o=t.filter(function(e){return e.date===c}),i=o.map(function(e){return e.time}),s=o.map(function(e){return e.temp});return r.a.createElement(Ee,null,r.a.createElement(Oe,null,r.a.createElement(z,{defaultValue:a,options:N,onRadioChange:this.props.onUnitChange})),t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{onCardChange:this.onCardChange,selected:c,dates:n,daysData:t}),r.a.createElement(pe,{selectedUnit:a,chartLabel:"Temparature in ".concat(a===T.METRIC?T.CELECIUS:T.FAHRENHEIT),labels:i,data:s})):r.a.createElement(he,{error:"No weather data available"}))}}]),t}(r.a.PureComponent),Ee=y.a.section(ve()),Oe=y.a.div(me()),je=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={selectedUnit:""},n.onUnitChange=function(e){n.setState({selectedUnit:e}),n.props.getWeatherDataRemoteAction(e)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({selectedUnit:"metric"}),this.props.getWeatherDataRemoteAction("metric")}},{key:"render",value:function(){var e=this.props.weatherData,t=this.state.selectedUnit,n=t===T.METRIC?"C":"F",a=e&&e.data.list&&null!==e.data.list&&0!==e.data.list.length?e.data.list.map(function(e){return{date:e.dt_txt.split(" ")[0],time:e.dt_txt.split(" ")[1].slice(0,5),tempUnit:"".concat(n),temp:e.main.temp}}):[],c=a&&0!==a.length?Array.from(new Set(a.map(function(e){return e.date.split(" ")[0]}))):[];return e&&!e.isLoading?r.a.createElement(ge,{selectedUnit:t,dates:c,daysData:a,onUnitChange:this.onUnitChange}):r.a.createElement(A,null)}}]),t}(r.a.PureComponent),Ce=Object(p.b)(function(e){return{weatherData:e.weather}},function(e,t){return{getWeatherDataRemoteAction:function(){var t=Object(j.a)(O.a.mark(function t(n){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(F(n));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(je),ye=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Ce,null))},xe=function(){var e=g();return function(t){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(d.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,{store:e},r.a.createElement(ye,null))}}]),n}(r.a.Component)}();o.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,n){e.exports=n.p+"static/media/arrow.1eb74ee1.svg"},96:function(e,t,n){e.exports=n.p+"static/media/loader.7171bba4.gif"}},[[108,1,2]]]);
//# sourceMappingURL=main.d878c9a4.chunk.js.map