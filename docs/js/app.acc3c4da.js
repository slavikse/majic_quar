(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],u=0,h=[];u<s.length;u++)i=s[u],n[i]&&h.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={0:0},a=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/magic_quar/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([0,1]),o()})({0:function(t,e,o){t.exports=o("Vtdi")},Vtdi:function(t,e,o){"use strict";o.r(e);o("yt8O"),o("VRzm"),o("sEhn"),o("MsAy"),o("RQMZ"),o("YeD5");var r=o("Kw5r"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-scene",{attrs:{arjs:"",physics:"debug: false; iterations: 1000; maxInterval: 0.01","vr-mode-ui":"enabled: false",stats:"false",background:"color: #333"}},[o("a-assets",[o("img",{attrs:{id:"background",src:"/textures/background.jpg"}}),o("img",{attrs:{id:"roof",src:"/textures/roof.jpg"}}),o("img",{attrs:{id:"floor",src:"/textures/floor.jpg"}}),o("img",{attrs:{id:"wall",src:"/textures/wall.jpg"}})]),o("a-sky",{attrs:{radius:"500",src:"#background"}}),o("a-light",{attrs:{type:"ambient",color:"white"}}),o("a-entity",{attrs:{position:"-6 1 -5",rotation:"0 -60 0",light:"type: directional; decay: 2; color: #ffc18f; intensity: 0.67; castShadow: true"}}),o("a-box",{attrs:{position:"11 4 -12",width:"2",height:"3",depth:"0.5","dynamic-body":"mass: 4",shadow:"castShadow: true",color:"cyan"}}),o("a-box",{attrs:{position:"9 4 -10",width:"2",height:"3",depth:"0.5","dynamic-body":"mass: 4",shadow:"castShadow: true",color:"cyan"}}),o("a-box",{attrs:{position:"7 4 -8",width:"2",height:"3",depth:"0.5","dynamic-body":"mass: 4",shadow:"castShadow: true",color:"cyan"}}),o("a-box",{attrs:{position:"5 4 -6",width:"2",height:"3",depth:"0.5","dynamic-body":"mass: 4",shadow:"castShadow: true",color:"cyan"}}),o("Balls"),o("Mobs"),o("Player"),o("Walls"),o("a-box",{attrs:{constraint:"target: #player; type: distance; distance: 4","dynamic-body":"",color:"teal"}})],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",t._l(t.balls,function(e){var r=e.id,n=e.isShown;return n?o("Ball",{key:r,attrs:{id:r}}):t._e()}))},s=[],l=o("iv4g"),c=(o("ls82"),o("MECJ")),d=o("xDdU"),u=o.n(d),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-sphere",{attrs:{radius:"0.04","dynamic-body":"mass: 1",color:"teal",shadow:"castShadow: true"}})},p=[],f={name:"Ball"},b=f,y=o("KHd+"),m=Object(y["a"])(b,h,p,!1,null,null,null),g=m.exports,w={name:"Balls",components:{Ball:g},data:function(){return{balls:[],lifeTime:5e3,interval:null,clearTime:6e4}},mounted:function(){document.addEventListener("fire",this.fire),this.interval=setInterval(this.cleaner,this.clearTime)},destroyed:function(){document.removeEventListener("fire",this.fire),clearInterval(this.interval)},methods:{fire:function(t){var e=t.detail,o=e.position,r=e.direction,n=u()();setTimeout(this.hide.bind(this,n),this.lifeTime),this.balls.push({id:n,isShown:!0}),this.$nextTick(this.acceleration.bind(null,n,o,r))},hide:function(t){var e=this;this.balls.some(function(o,r){var n=o.id;return n===t&&(e.balls[r].isShown=!1,!0)})},acceleration:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,o,r){var n,a,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,document.getElementById(e);case 2:i=t.sent,(n=i.body.position).set.apply(n,Object(l["a"])(o)),(a=i.body.velocity).set.apply(a,Object(l["a"])(r));case 5:case"end":return t.stop()}},t,this)}));return function(e,o,r){return t.apply(this,arguments)}}(),cleaner:function(){this.balls=this.balls.filter(function(t){var e=t.isShown;return e})}}},v=w,x=Object(y["a"])(v,i,s,!1,null,null,null),j=x.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",{attrs:{position:"0 1 -2",raycaster:"",shadow:"receive: true"},on:{"raycaster-intersected":t.intersected}},[o("a-box",{attrs:{position:"0 1.5 0",width:"0.4",height:"0.4",depth:"0.4",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"0 0.4 0",width:"0.7",height:"1.5",depth:"0.7","static-body":"",id:"body",color:"#955"}}),o("a-box",{attrs:{position:"-0.7 0.6 0",width:"0.3",height:"1",depth:"0.3",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"0.7 0.6 0",width:"0.3",height:"1",depth:"0.3",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"-0.4 -0.8 0",width:"0.5",height:"0.3",depth:"0.5",constraint:"target: #body","static-body":"",color:"#755"}}),o("a-box",{attrs:{position:"0.4 -0.8 0",width:"0.5",height:"0.3",depth:"0.5",constraint:"target: #body","static-body":"",color:"#755"}})],1)},O=[],k={name:"Mob",methods:{intersected:function(){}}},E=k,S=Object(y["a"])(E,_,O,!1,null,null,null),M=S.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",{attrs:{id:"player","movement-controls":"fly: false; speed: 0.35","jump-ability":"maxJumps: 1; distance: 1.2","kinematic-body":"","mesh-smooth":""}},[o("a-entity",{attrs:{position:"0 1.5 0","look-controls":"pointerLockEnabled: true",camera:""},on:{click:t.click,collide:t.collide}},[o("a-cursor",{ref:"cursor",attrs:{geometry:"primitive: ring; radiusInner: 0.0001; radiusOuter: 0.003",material:"shader: flat; color: black",cursor:"fuse: false"}})],1)],1)},T=[],$={name:"Player",data:function(){return{click:Function,rate:100}},mounted:function(){this.click=window.AFRAME.utils.throttle(this.fire,this.rate,null)},methods:{fire:function(){var t=this.$refs.cursor.object3D,e=t.getWorldPosition(),o=e.x,r=e.y,n=e.z,a=t.getWorldDirection(),i=a.x,s=a.y,l=a.z,c=-15,d=new CustomEvent("fire",{detail:{position:[o,r,n],direction:[i*c,s*c,l*c]}});document.dispatchEvent(d)},collide:function(t){},intersection:function(t){}}},B=$,A=Object(y["a"])(B,P,T,!1,null,null,null),I=A.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-entity",[o("a-box",{attrs:{position:"0 5 0",rotation:"-90 0 0",height:"30",width:"30",depth:"0.5",material:"side: double",repeat:"20 20",roughness:"1",src:"#roof","static-body":""}}),o("a-plane",{attrs:{rotation:"-90 0 0",height:"100",width:"100",repeat:"50 50",roughness:"1",src:"#floor","static-body":"",shadow:"receive: true"}}),o("a-box",{attrs:{position:"0 2 -15",rotation:"0 0 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"15 2",roughness:"1",src:"#wall","static-body":""}}),o("a-box",{attrs:{position:"0 2 15",rotation:"0 180 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"15 2",roughness:"1",src:"#wall","static-body":""}}),o("a-box",{attrs:{position:"15 2 0",rotation:"0 -90 0",height:"6",width:"30",depth:"0.5",material:"side: double",repeat:"15 2",roughness:"1",src:"#wall","static-body":""}})],1)},R=[],W={name:"Walls",components:{}},C=W,D=Object(y["a"])(C,J,R,!1,null,null,null),L=D.exports,z={name:"App",components:{Balls:j,Mobs:M,Player:I,Walls:L},data:function(){return{color:"#000"}},methods:{fire:function(){this.changeColor()},changeColor:function(){this.color="#".concat((155*Math.random()+100).toFixed(0))}}},F=z,V=Object(y["a"])(F,n,a,!1,null,null,null),K=V.exports,U=o("jE9Z");r["a"].use(U["a"]);var Z=new U["a"]({routes:[{path:"/",name:"App",component:K}]}),q=o("L2JU");r["a"].use(q["a"]);var H=new q["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:Z,store:H,render:function(t){return t(K)}}).$mount("#app")}});
//# sourceMappingURL=app.acc3c4da.js.map