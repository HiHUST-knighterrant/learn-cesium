(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[18],{126:function(e,t,r){"use strict";r.r(t);r(268);var a,n,i=r(272),o=r.n(i),c=r(263),s=r(257),l=r.n(s),u=r(297),d=r(259),p=r(298),b=r(85),h=r(86),v=r(87),f=r(88),m=r(11),y=r(84),g=r(271),w=r.n(g),j=r(23),O=[-85,36],x=[-84.9,36.1],M=(a=y.b.Cartesian3).fromDegrees.apply(a,O),P=(n=y.b.Cartesian3).fromDegrees.apply(n,x),C=[];function D(e,t){var r=w()(),a=r.clone().add(20,"s"),n=r.toISOString(),i=a.toISOString();return[{id:"document",name:"\u89c2\u5149\u8def\u7ebf",version:"1.0",clock:{interval:"".concat(n,"/").concat(i),currentTime:n,multiplier:1,range:"UNBOUNDED"}},{id:"path",name:"\u89c2\u5149\u8def\u7ebf",description:"<p>\u89c2\u5149\u8def\u7ebf</p>",availability:"".concat(n,"/").concat(i),path:{material:{polylineOutline:{color:{rgba:[0,0,0,255]},outlineColor:{rgba:[0,0,0,255]},outlineWidth:5}},width:8,leadTime:0,trailTime:1e3,resolution:5},point:{pixelSize:0,color:{rgba:[0,0,0,255]}},viewFrom:{cartesian:t},position:{epoch:n,cartographicDegrees:k(e)}}]}function k(e){return e.flatMap((function(e,t){return[20*t/80,y.b.Math.toDegrees(e.longitude),y.b.Math.toDegrees(e.latitude),e.height+30]}))}var T=function(e){Object(v.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(b.a)(this,r);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={viewDisabled:!0},e.getXYZ=function(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-45,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,i=e.getLocalPositions(t,r),o=Object(p.a)(i,2),c=o[0],s=o[1],l=e.getHeadingDegree(c.x,c.y,s.x,s.y),u=s.x-c.x,d=s.y-c.y,b=n*Math.abs(Math.sin(l))*(u>0?-1:1),h=n*Math.abs(Math.cos(l))*(d>0?-1:1),v=n/Math.abs(Math.tan(a));return[b,h,v]},e.getLocalPositions=function(e,t){var r=y.b.Transforms.eastNorthUpToFixedFrame(e),a=y.b.Matrix4.inverse(r,new y.b.Matrix4);return[y.b.Matrix4.multiplyByPoint(a,e,new y.b.Cartesian3),y.b.Matrix4.multiplyByPoint(a,t,new y.b.Cartesian3)]},e.getHeadingDegree=function(e,t,r,a){var n=r-e,i=a-t;if(0===n)return i>=0?0:180;if(0===i)return n>0?90:-90;var o=(r-e)/(a-t),c=Math.atan(o)/Math.PI*180;if(i>0)return c;var s=r-e>0?1:-1;return(180-Math.abs(c))*s},e.getPathPositions=Object(d.a)(l.a.mark((function t(){var r,a,n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=[],a=0;a<=80;++a)n=a/80,r.push(y.b.Cartographic.fromCartesian(y.b.Cartesian3.lerp(M,P,n,new y.b.Cartesian3)));return t.prev=2,t.next=5,y.b.sampleTerrain(e.terrainProvider,12,r);case 5:return i=t.sent,C=Object(u.a)(i),e.setState({viewDisabled:!1}),t.abrupt("return",C);case 11:return t.prev=11,t.t0=t.catch(2),console.error(t.t0),t.abrupt("return",[]);case 15:case"end":return t.stop()}}),t,null,[[2,11]])}))),e.clearPrevDataSource=function(){e.ds&&(e.viewer.dataSources.remove(e.ds,!0),e.viewer.trackedEntity=void 0)},e.loadCZML=function(){var t=Object(d.a)(l.a.mark((function t(r){var a,n,i,o,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.clearPrevDataSource(),n=r?C:Object(u.a)(C).reverse(),i=r?[M,P]:[P,M],o=(a=e).getXYZ.apply(a,i),console.log(o),t.prev=5,t.next=8,e.viewer.dataSources.add(y.b.CzmlDataSource.load(D(n,o)));case 8:e.ds=t.sent,c=e.ds.entities.getById("path"),e.viewer.zoomTo(c),e.viewer.trackedEntity=c,t.next=18;break;case 14:t.prev=14,t.t0=t.catch(5),console.error(t.t0),e.flyTo(r);case 18:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}(),e.flyTo=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.clearPrevDataSource(),e.camera.flyTo({destination:Object(c.a)(y.b.Cartesian3.fromDegrees,Object(u.a)(t?x:O).concat([1e3])),orientation:{heading:y.b.Math.toRadians(0),pitch:y.b.Math.toRadians(-90),roll:y.b.Math.toRadians(0)}})},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.terrainProvider=y.b.createWorldTerrain(),this.viewer=new y.b.Viewer("stage",{terrainProvider:this.terrainProvider,shouldAnimate:!0}),new y.a(this.viewer,{}),this.scene=this.viewer.scene,this.camera=this.scene.camera,this.scene.groundPrimitives.add(new y.b.GroundPolylinePrimitive({geometryInstances:new y.b.GeometryInstance({geometry:new y.b.GroundPolylineGeometry({positions:[M,P],width:4})})})),this.flyTo(),this.getPathPositions();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.viewDisabled;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"toolbar",children:[Object(j.jsx)(o.a,{className:"vtb",disabled:t,type:"primary",onClick:function(){return e.loadCZML()},children:"view to start"}),Object(j.jsx)(o.a,{className:"vtb",disabled:t,type:"primary",onClick:function(){return e.loadCZML(!0)},children:"view to end"}),Object(j.jsx)(o.a,{className:"vtb",type:"primary",onClick:function(){return e.flyTo()},children:"Fly to Start"}),Object(j.jsx)(o.a,{className:"vtb",type:"primary",onClick:function(){return e.flyTo(!0)},children:"Fly to end"})]}),Object(j.jsx)("div",{id:"stage"})]})}}]),r}(m.Component);t.default=T},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(93),n=r(94);function i(e,t,r){return(i=Object(n.a)()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&Object(a.a)(i,r.prototype),i}).apply(null,arguments)}}}]);