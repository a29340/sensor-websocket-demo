(function(e){function t(t){for(var o,s,r=t[0],c=t[1],l=t[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showRoom?e._e():n("section",{staticClass:"section"},[n("div",{staticClass:"container box"},[n("h1",{staticClass:"title"},[e._v("Room settings")]),n("h2",{staticClass:"subtitle"},[e._v("Create or enter a room.")]),n("b-field",{attrs:{label:"Room name","label-position":"on-border"}},[n("b-input",{model:{value:e.room,callback:function(t){e.room=t},expression:"room"}}),n("p",{staticClass:"control"},[n("b-button",{attrs:{type:"is-primary is-light"},on:{click:function(t){return e.createRoom()}}},[e._v("Create")])],1)],1),n("b-field",{attrs:{label:"Client","label-position":"on-border"}},[n("b-input",{model:{value:e.clientId,callback:function(t){e.clientId=t},expression:"clientId"}}),n("p",{staticClass:"control"},[n("b-button",{attrs:{type:"is-primary is-light"},on:{click:function(t){return e.enterRoom()}}},[e._v("Enter")])],1)],1)],1)]),e.showRoom?n("section",{staticClass:"section"},[n("RoomComponent",{attrs:{"room-name":e.room,"client-id":e.clientId},on:{leave:function(t){return e.leaveRoom()}}})],1):e._e()])},a=[],s=(n("e9c4"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container box"},[n("h1",{staticClass:"title"},[e._v(e._s(e.roomName))]),n("h2",{staticClass:"subtitle"},[e._v("Display the room's clients and their state.")]),n("h2",{staticClass:"subtitle"},[e._v("You are the client "+e._s(e.clientId))]),n("div",{staticClass:"is-flex is-flex-direction-column is-justify-content-center"},[n("div",{staticClass:"is-flex is-flex-wrap-wrap"},e._l(e.clients,(function(e){return n("client-component",{key:e.id,attrs:{client:e}})})),1),n("b-button",{staticClass:"m-3",attrs:{type:"is-primary is-light"},on:{click:function(t){return e.leaveRoom()}}},[e._v("Leave Room")])],1)])}),r=[],c=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card m-3"},[n("header",{staticClass:"card-header has-background-primary"},[n("p",{staticClass:"card-header-title has-text-primary-light"},[e._v(e._s(e.client.id))])]),n("div",{staticClass:"card-content has-background-primary-light\t"},[n("div",{ref:"webglviewer",staticClass:"content"})])])}),l=[],u=n("5a89"),d={name:"ClientComponent",props:["client"],data:function(){var e=new u["h"],t=new u["g"](75,1,.1,500),n=new u["i"];n.setSize(250,250);var o=new u["b"](.5,1,.2),i=new u["f"]({side:u["d"],color:"hsl(0, 100%, 50%)",wireframe:!1}),a=new u["a"](5),s=new u["c"]("hsl(0, 100%, 100%)");s.position.set(0,0,10);var r=new u["e"](o,i);e.add(r),e.add(s),e.add(a),t.position.z=5;var c=function(){};return{scene:e,camera:t,renderer:n,geometry:o,light:s,material:i,cube:r,animate:c}},created:function(){var e=this;e.$data.animate=function(){requestAnimationFrame(e.$data.animate),e.$data.cube.rotation.x=e.$props.client.alpha,e.$data.cube.rotation.y=e.$props.client.beta,e.$data.renderer.render(e.$data.scene,e.$data.camera)}},mounted:function(){this.$refs.webglviewer.appendChild(this.$data.renderer.domElement),this.$data.animate()}},f=d,p=(n("d149"),n("2877")),m=Object(p["a"])(f,c,l,!1,null,"4bb34873",null),h=m.exports,b=n("d4ec"),y=n("bee2"),v=n("ade3"),g=n("cc7d"),$=n.n(g),w=n("c6e1"),C=n.n(w),R=function(){function e(){Object(b["a"])(this,e),Object(v["a"])(this,"client",void 0),Object(v["a"])(this,"socket",void 0),Object(v["a"])(this,"connected",!1)}return Object(y["a"])(e,[{key:"connect",value:function(e,t,n,o){var i=this;this.socket=new $.a("sensors"),this.client=C.a.over(this.socket),this.client.debug=function(){},this.client.connect({},(function(){i.connected=!0,t(),i.client.subscribe(e,(function(e){n(JSON.parse(e.body))}))}),(function(e){console.log(e),i.connected=!1,o()}))}},{key:"disconnect",value:function(e){this.client&&this.client.disconnect(),this.connected=!1,e()}},{key:"send",value:function(e){this.client&&this.client.connected&&this.client.send("/app/sensors",JSON.stringify(e))}}]),e}(),_=new R,O=n("8dfe"),k={name:"RoomComponent",props:{roomName:String,clientId:String},emits:["leave"],data:function(){return{clients:[],sensor:{}}},mounted:function(){var e=this,t=this;_.connect("/topic/room/"+this.$props.roomName,(function(){e.$buefy.notification.open({message:"Websocket connected to room ".concat(e.$props.roomName),type:"is-success is-light"});try{t.$data.sensor=new O["a"]({frequency:30}),t.$data.sensor.addEventListener("error",(function(e){"NotAllowedError"===e.error.name||"NotReadableError"===e.error.name&&t.notifyError("Cannot connect to the sensor.")})),t.$data.sensor.addEventListener("reading",(function(){_.send({id:t.$props.clientId,alpha:t.$data.sensor.y,beta:t.$data.sensor.x,gamma:t.$data.sensor.z})})),t.$data.sensor.start()}catch(n){if("SecurityError"===n.name)t.notifyError("Sensor construction was blocked by a feature policy.");else{if("ReferenceError"!==n.name)throw n;t.notifyError("Sensor is not supported by the User Agent.")}}}),(function(t){e.$data.clients=t.clients}),(function(t){e.notifyError("Websocket error: ".concat(t))}))},components:{ClientComponent:h},methods:{leaveRoom:function(){this.$data.sensor.stop&&this.$data.sensor.stop(),_.disconnect((function(){return console.log("disconnected websocket")})),this.$emit("leave")},notifyError:function(e){this.$buefy.notification.open({message:e,type:"is-danger is-light"})}}},j=k,x=Object(p["a"])(j,s,r,!1,null,"79e603b6",null),S=x.exports,E={name:"App",data:function(){return{room:"",clientId:"",showRoom:!1}},components:{RoomComponent:S},methods:{enterRoom:function(){var e=this,t="room/"+e.$data.room+"/enter",n=new Request(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.$data.clientId,alpha:0,beta:0,gamma:0})});fetch(n).then((function(t){200===t.status?(e.$buefy.notification.open({message:"Room entered.",type:"is-success is-light"}),e.$data.showRoom=!0):(console.log(t),e.$buefy.notification.open({message:t.status,type:"is-danger is-light"}))}))},createRoom:function(){var e=this,t="room/"+this.$data.room;fetch(new Request(t),{method:"POST"}).then((function(t){200===t.status?e.$buefy.notification.open({message:"Room created.",type:"is-success"}):e.$buefy.notification.open({message:t.status,type:"is-danger"})}))},leaveRoom:function(){var e=this,t="room/"+e.$data.room+"/leave",n=new Request(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.$data.clientId,alpha:0,beta:0,gamma:0})});fetch(n).then((function(t){200===t.status?(e.$buefy.notification.open({message:"Room leaved.",type:"is-success is-light"}),e.$data.showRoom=!1):(console.log(t),e.$buefy.notification.open({message:t.status,type:"is-danger is-light"}))}))}}},I=E,N=(n("034f"),Object(p["a"])(I,i,a,!1,null,null,null)),P=N.exports,T=n("289d");n("5abe");o["a"].use(T["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(P)}}).$mount("#app")},"7bb1":function(e,t,n){},"85ec":function(e,t,n){},d149:function(e,t,n){"use strict";n("7bb1")}});
//# sourceMappingURL=app.9cc637a4.js.map