(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[11],{68:function(e,t,n){"use strict";n.r(t);var a,i=n(85),r=n(86),o=n(87),s=n(88),l=n(11),c=n(84),u=n(23),h=(a=c.b.Cartesian3).fromDegrees.apply(a,[-117,36,2e3]),b=255,d=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={x:0,y:0,z:0},e.resetCamera=function(){e.viewer.camera.flyTo({destination:h,orientation:{heading:c.b.Math.toRadians(0),pitch:c.b.Math.toRadians(0),roll:c.b.Math.toRadians(0)}})},e.getRandomIntInclusive=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},e.createPointAndFlyTo=function(t,n,a){var i=null!==t&&void 0!==t?t:e.getRandomIntInclusive(-255,b),r=null!==n&&void 0!==n?n:e.getRandomIntInclusive(-255,b),o=null!==a&&void 0!==a?a:e.getRandomIntInclusive(-255,b);e.setState({x:i,y:r,z:o});var s=e.getNewPosition(h,i,r,o);e.createPoint(s.Cartesian3);var l=s.prev,u=s.next,d=e.getHeadingPitchRoll(l,u);console.log({x:i,y:r,z:o},d),e.viewer.camera.flyTo({destination:h,orientation:{heading:c.b.Math.toRadians(d.heading),pitch:c.b.Math.toRadians(d.pitch),roll:c.b.Math.toRadians(d.roll)}})},e.getHeadingPitchRoll=function(t,n){var a=t.x,i=t.y,r=t.z,o=n.x,s=n.y,l=n.z;return{heading:e.getHeadingDegree(a,i,o,s),pitch:e.getPitchDegree(a,i,r,o,s,l),roll:0}},e.getHeadingDegree=function(e,t,n,a){var i=n-e,r=a-t;if(0===i)return r>=0?0:180;if(0===r)return i>0?90:-90;var o=(n-e)/(a-t),s=Math.atan(o)/Math.PI*180;if(r>0)return s;var l=n-e>0?1:-1;return(180-Math.abs(s))*l},e.getPitchDegree=function(e,t,n,a,i,r){var o=r-n;if(0===o)return 0;if(0===a-e&&0===i-t)return o>0?90:-90;var s=new c.b.Cartesian3(a,i,n),l=new c.b.Cartesian3(e,t,n),u=(r-n)/c.b.Cartesian3.distance(s,l),h=Math.abs(Math.atan(u))/Math.PI*180;return o>0?h:-h},e.createPoint=function(t,n){return e.entities.add({position:t,ellipsoid:{radii:new c.b.Cartesian3(10,10,10),material:null!==n&&void 0!==n?n:c.b.Color.fromBytes(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z),255)}})},e.getNewPosition=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=c.b.Transforms.eastNorthUpToFixedFrame(e),r=c.b.Matrix4.inverse(i,new c.b.Matrix4),o=c.b.Matrix4.multiplyByPoint(r,e,new c.b.Cartesian3),s=c.b.clone(o,!0);return s.x+=t,s.y+=n,s.z+=a,{Cartesian3:c.b.Matrix4.multiplyByPoint(i,s,new c.b.Cartesian3),prev:o,next:s}},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.viewer=new c.b.Viewer("stage",{shadows:!0,shouldAnimate:!0}),this.scene=this.viewer.scene,this.entities=this.viewer.entities,this.scene.debugShowFramesPerSecond=!0,this.scene.globe.depthTestAgainstTerrain=!0,Object(c.a)(this.viewer,{}),this.createPoint(h,c.b.Color.WHITE)}},{key:"render",value:function(){var e=this,t=this.state,n=t.x,a=t.y,i=t.z;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"toolbar",children:[Object(u.jsx)("button",{className:"vtb",onClick:function(){return e.createPointAndFlyTo()},children:"Create Random Point"}),Object(u.jsx)("button",{className:"vtb",onClick:this.resetCamera,children:"Reset Camera"}),Object(u.jsx)("label",{htmlFor:"x",children:"x"}),Object(u.jsx)("input",{min:-255,max:b,id:"x",type:"number",value:n,onChange:function(t){return e.setState({x:parseFloat(t.target.value)})}}),Object(u.jsx)("label",{htmlFor:"y",children:"y"}),Object(u.jsx)("input",{min:-255,max:b,id:"y",type:"number",value:a,onChange:function(t){return e.setState({y:parseFloat(t.target.value)})}}),Object(u.jsx)("label",{htmlFor:"z",children:"z"}),Object(u.jsx)("input",{min:-255,max:b,id:"z",type:"number",value:i,onChange:function(t){return e.setState({z:parseFloat(t.target.value)})}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"vtb",onClick:function(){return e.createPointAndFlyTo(n,a,i)},children:"Create Point"})]}),Object(u.jsx)("div",{id:"stage"})]})}}]),n}(l.Component);t.default=d}}]);