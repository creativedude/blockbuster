(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pa="158",Ei={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fc=0,Pa=1,pc=2,yl=1,Ml=2,Tn=3,ti=0,je=1,Ln=2,Kn=0,Gi=1,La=2,Ia=3,Da=4,mc=5,ci=100,vc=101,gc=102,Na=103,Ua=104,_c=200,xc=201,yc=202,Mc=203,ea=204,na=205,Ec=206,Sc=207,wc=208,bc=209,Ac=210,Tc=211,Rc=212,Cc=213,Pc=214,Lc=0,Ic=1,Dc=2,es=3,Nc=4,Uc=5,Fc=6,Bc=7,ma=0,Oc=1,zc=2,Zn=0,Vc=1,Hc=2,Gc=3,kc=4,Wc=5,El=300,qi=301,Yi=302,ia=303,ra=304,cs=306,sa=1e3,dn=1001,fr=1002,Oe=1003,Fa=1004,_s=1005,rn=1006,Xc=1007,pr=1008,Jn=1009,qc=1010,Yc=1011,va=1012,Sl=1013,jn=1014,$n=1015,mr=1016,wl=1017,bl=1018,ui=1020,jc=1021,fn=1023,$c=1024,Kc=1025,di=1026,ji=1027,Zc=1028,Al=1029,Jc=1030,Tl=1031,Rl=1033,xs=33776,ys=33777,Ms=33778,Es=33779,Ba=35840,Oa=35841,za=35842,Va=35843,Qc=36196,Ha=37492,Ga=37496,ka=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,ja=37813,$a=37814,Ka=37815,Za=37816,Ja=37817,Qa=37818,to=37819,eo=37820,no=37821,Ss=36492,io=36494,ro=36495,th=36283,so=36284,ao=36285,oo=36286,Cl=3e3,fi=3001,eh=3200,nh=3201,ga=0,ih=1,an="",De="srgb",On="srgb-linear",_a="display-p3",hs="display-p3-linear",ns="linear",_e="srgb",is="rec709",rs="p3",wi=7680,lo=519,rh=512,sh=513,ah=514,oh=515,lh=516,ch=517,hh=518,uh=519,co=35044,ho="300 es",aa=1035,Dn=2e3,ss=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uo=1234567;const lr=Math.PI/180,vr=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function xa(i,t){return(i%t+t)%t}function dh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fh(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function ph(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function mh(i,t=1){return t-Math.abs(xa(i,t*2)-t)}function vh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _h(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xh(i,t){return i+Math.random()*(t-i)}function yh(i){return i*(.5-Math.random())}function Mh(i){i!==void 0&&(uo=i);let t=uo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Eh(i){return i*lr}function Sh(i){return i*vr}function oa(i){return(i&i-1)===0&&i!==0}function wh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function as(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*d,o*u);break;case"YZY":i.set(c*d,o*h,c*l,o*u);break;case"ZXZ":i.set(c*l,c*d,o*h,o*u);break;case"XZX":i.set(o*h,c*v,c*p,o*u);break;case"YXY":i.set(c*p,o*h,c*v,o*u);break;case"ZYZ":i.set(c*v,c*p,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:lr,RAD2DEG:vr,generateUUID:Zi,clamp:ke,euclideanModulo:xa,mapLinear:dh,inverseLerp:fh,lerp:cr,damp:ph,pingpong:mh,smoothstep:vh,smootherstep:gh,randInt:_h,randFloat:xh,randFloatSpread:yh,seededRandom:Mh,degToRad:Eh,radToDeg:Sh,isPowerOfTwo:oa,ceilPowerOfTwo:wh,floorPowerOfTwo:as,setQuaternionFromProperEuler:bh,normalize:We,denormalize:Vi};class ae{constructor(t=0,e=0){ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,a,o,c,u){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],p=n[5],v=n[8],g=s[0],m=s[3],f=s[6],_=s[1],x=s[4],y=s[7],M=s[2],T=s[5],C=s[8];return r[0]=a*g+o*_+c*M,r[3]=a*m+o*x+c*T,r[6]=a*f+o*y+c*C,r[1]=u*g+h*_+l*M,r[4]=u*m+h*x+l*T,r[7]=u*f+h*y+l*C,r[2]=d*g+p*_+v*M,r[5]=d*m+p*x+v*T,r[8]=d*f+p*y+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*a-o*u,d=o*c-h*r,p=u*r-a*c,v=e*l+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*c-u*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ws.makeScale(t,e)),this}rotate(t){return this.premultiply(ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ws=new he;function Pl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Th(){const i=gr("canvas");return i.style.display="block",i}const fo={};function hr(i){i in fo||(fo[i]=!0,console.warn(i))}const po=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mo=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[On]:{transfer:ns,primaries:is,toReference:i=>i,fromReference:i=>i},[De]:{transfer:_e,primaries:is,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hs]:{transfer:ns,primaries:rs,toReference:i=>i.applyMatrix3(mo),fromReference:i=>i.applyMatrix3(po)},[_a]:{transfer:_e,primaries:rs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(mo),fromReference:i=>i.applyMatrix3(po).convertLinearToSRGB()}},Rh=new Set([On,hs]),ge={enabled:!0,_workingColorSpace:On,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Rh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=br[t].toReference,s=br[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return br[i].primaries},getTransfer:function(i){return i===an?ns:br[i].transfer}};function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Ll{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=gr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ki(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ch=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(As(s[a].image)):r.push(As(s[a]))}else r=As(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function As(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class $e extends Mi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=dn,s=dn,r=rn,a=pr,o=fn,c=Jn,u=$e.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Zi(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===fi?De:an),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==El)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sa:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sa:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?fi:Cl}set encoding(t){hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fi?De:an}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=El;$e.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,y=(p+1)/2,M=(f+1)/2,T=(h+d)/4,C=(l+g)/4,F=(v+m)/4;return x>y&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=F/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=F/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(d-h)/_,this.w=Math.acos((u+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lh extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fi?De:an),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Il(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dl extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==d||u!==p||h!==v){let m=1-o;const f=c*d+u*p+h*v+l*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const M=Math.sqrt(x),T=Math.atan2(M,f*_);m=Math.sin(m*T)/M,o=Math.sin(o*T)/M}const y=o*_;if(c=c*m+d*y,u=u*m+p*y,h=h*m+v*y,l=l*m+g*y,m===1-o){const M=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=M,u*=M,h*=M,l*=M}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],d=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*p-u*d,t[e+1]=c*v+h*d+u*l-o*p,t[e+2]=u*v+h*p+o*d-c*l,t[e+3]=h*v-o*l-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),d=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*h*l+u*p*v,this._y=u*p*l-d*h*v,this._z=u*h*v+d*p*l,this._w=u*h*l-d*p*v;break;case"YXZ":this._x=d*h*l+u*p*v,this._y=u*p*l-d*h*v,this._z=u*h*v-d*p*l,this._w=u*h*l+d*p*v;break;case"ZXY":this._x=d*h*l-u*p*v,this._y=u*p*l+d*h*v,this._z=u*h*v+d*p*l,this._w=u*h*l-d*p*v;break;case"ZYX":this._x=d*h*l-u*p*v,this._y=u*p*l+d*h*v,this._z=u*h*v-d*p*l,this._w=u*h*l+d*p*v;break;case"YZX":this._x=d*h*l+u*p*v,this._y=u*p*l+d*h*v,this._z=u*h*v-d*p*l,this._w=u*h*l-d*p*v;break;case"XZY":this._x=d*h*l-u*p*v,this._y=u*p*l-d*h*v,this._z=u*h*v+d*p*l,this._w=u*h*l+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+o+l;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=a*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,n=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*u+a*l-o*h,this.y=n+c*h+o*u-r*l,this.z=s+c*l+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new tt,vo=new gi;class Mr{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Tr.subVectors(this.max,er),Ai.subVectors(t.a,er),Ti.subVectors(t.b,er),Ri.subVectors(t.c,er),Hn.subVectors(Ti,Ai),Gn.subVectors(Ri,Ti),ri.subVectors(Ai,Ri);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ri.z,ri.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ri.z,0,-ri.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ri.y,ri.x,0];return!Rs(e,Ai,Ti,Ri,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Rs(e,Ai,Ti,Ri,Tr))?!1:(Rr.crossVectors(Hn,Gn),e=[Rr.x,Rr.y,Rr.z],Rs(e,Ai,Ti,Ri,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],ln=new tt,Ar=new Mr,Ai=new tt,Ti=new tt,Ri=new tt,Hn=new tt,Gn=new tt,ri=new tt,er=new tt,Tr=new tt,Rr=new tt,si=new tt;function Rs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),c=t.dot(si),u=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Dh=new Mr,nr=new tt,Cs=new tt;class Er{constructor(t=new tt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);const e=nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(Cs)),this.expandByPoint(nr.copy(t.center).sub(Cs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new tt,Ps=new tt,Cr=new tt,kn=new tt,Ls=new tt,Pr=new tt,Is=new tt;class us{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ps.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Ps);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Cr),o=kn.dot(this.direction),c=-kn.dot(Cr),u=kn.lengthSq(),h=Math.abs(1-a*a);let l,d,p,v;if(h>0)if(l=a*c-o,d=a*o-c,v=r*h,l>=0)if(d>=-v)if(d<=v){const g=1/h;l*=g,d*=g,p=l*(l+a*d+2*o)+d*(a*l+d+2*c)+u}else d=r,l=Math.max(0,-(a*d+o)),p=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(a*d+o)),p=-l*l+d*(d+2*c)+u;else d<=-v?(l=Math.max(0,-(-a*r+o)),d=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u):d<=v?(l=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(l=Math.max(0,-(a*r+o)),d=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u);else d=a>0?-r:r,l=Math.max(0,-(a*d+o)),p=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Ps).addScaledVector(Cr,d),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){Ls.subVectors(e,t),Pr.subVectors(n,t),Is.crossVectors(Ls,Pr);let a=this.direction.dot(Is),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,t);const c=o*this.direction.dot(Pr.crossVectors(kn,Pr));if(c<0)return null;const u=o*this.direction.dot(Ls.cross(kn));if(u<0||c+u>a)return null;const h=-o*kn.dot(Is);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,s,r,a,o,c,u,h,l,d,p,v,g,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,h,l,d,p,v,g,m)}set(t,e,n,s,r,a,o,c,u,h,l,d,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=l,f[14]=d,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=p+v*u,e[5]=d-g*u,e[9]=-o*c,e[2]=g-d*u,e[6]=v+p*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*l,v=u*h,g=u*l;e[0]=d+g*o,e[4]=v*o-p,e[8]=a*u,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*l,v=u*h,g=u*l;e[0]=d-g*o,e[4]=-a*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*u-p,e[8]=d*u+g,e[1]=c*l,e[5]=g*u+d,e[9]=p*u-v,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=g-d*l,e[8]=v*l+p,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=p*l+v,e[10]=d-g*l}else if(t.order==="XZY"){const d=a*c,p=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+g,e[5]=a*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nh,t,Uh)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Wn.crossVectors(n,Je),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Wn.crossVectors(n,Je)),Wn.normalize(),Lr.crossVectors(Je,Wn),s[0]=Wn.x,s[4]=Lr.x,s[8]=Je.x,s[1]=Wn.y,s[5]=Lr.y,s[9]=Je.y,s[2]=Wn.z,s[6]=Lr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],_=n[3],x=n[7],y=n[11],M=n[15],T=s[0],C=s[4],F=s[8],E=s[12],w=s[1],P=s[5],k=s[9],W=s[13],N=s[2],H=s[6],nt=s[10],B=s[14],O=s[3],Y=s[7],X=s[11],b=s[15];return r[0]=a*T+o*w+c*N+u*O,r[4]=a*C+o*P+c*H+u*Y,r[8]=a*F+o*k+c*nt+u*X,r[12]=a*E+o*W+c*B+u*b,r[1]=h*T+l*w+d*N+p*O,r[5]=h*C+l*P+d*H+p*Y,r[9]=h*F+l*k+d*nt+p*X,r[13]=h*E+l*W+d*B+p*b,r[2]=v*T+g*w+m*N+f*O,r[6]=v*C+g*P+m*H+f*Y,r[10]=v*F+g*k+m*nt+f*X,r[14]=v*E+g*W+m*B+f*b,r[3]=_*T+x*w+y*N+M*O,r[7]=_*C+x*P+y*H+M*Y,r[11]=_*F+x*k+y*nt+M*X,r[15]=_*E+x*W+y*B+M*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-s*u*l-r*o*d+n*u*d+s*o*p-n*c*p)+g*(+e*c*p-e*u*d+r*a*d-s*a*p+s*u*h-r*c*h)+m*(+e*u*l-e*o*p-r*a*l+n*a*p+r*o*h-n*u*h)+f*(-s*o*h-e*c*l+e*o*d+s*a*l-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],_=l*m*u-g*d*u+g*c*p-o*m*p-l*c*f+o*d*f,x=v*d*u-h*m*u-v*c*p+a*m*p+h*c*f-a*d*f,y=h*g*u-v*l*u+v*o*p-a*g*p-h*o*f+a*l*f,M=v*l*c-h*g*c-v*o*d+a*g*d+h*o*m-a*l*m,T=e*_+n*x+s*y+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=_*C,t[1]=(g*d*r-l*m*r-g*s*p+n*m*p+l*s*f-n*d*f)*C,t[2]=(o*m*r-g*c*r+g*s*u-n*m*u-o*s*f+n*c*f)*C,t[3]=(l*c*r-o*d*r-l*s*u+n*d*u+o*s*p-n*c*p)*C,t[4]=x*C,t[5]=(h*m*r-v*d*r+v*s*p-e*m*p-h*s*f+e*d*f)*C,t[6]=(v*c*r-a*m*r-v*s*u+e*m*u+a*s*f-e*c*f)*C,t[7]=(a*d*r-h*c*r+h*s*u-e*d*u-a*s*p+e*c*p)*C,t[8]=y*C,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*f-e*l*f)*C,t[10]=(a*g*r-v*o*r+v*n*u-e*g*u-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*l*r-h*n*u+e*l*u+a*n*p-e*o*p)*C,t[12]=M*C,t[13]=(h*g*s-v*l*s+v*n*d-e*g*d-h*n*m+e*l*m)*C,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*C,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,h=a+a,l=o+o,d=r*u,p=r*h,v=r*l,g=a*h,m=a*l,f=o*l,_=c*u,x=c*h,y=c*l,M=n.x,T=n.y,C=n.z;return s[0]=(1-(g+f))*M,s[1]=(p+y)*M,s[2]=(v-x)*M,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(d+f))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(v+x)*C,s[9]=(m-_)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ci.set(s[0],s[1],s[2]).length();const a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const u=1/r,h=1/a,l=1/o;return cn.elements[0]*=u,cn.elements[1]*=u,cn.elements[2]*=u,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=l,cn.elements[9]*=l,cn.elements[10]*=l,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Dn){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let p,v;if(o===Dn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ss)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(a-r),d=(e+t)*u,p=(n+s)*h;let v,g;if(o===Dn)v=(a+r)*l,g=-2*l;else if(o===ss)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new tt,cn=new be,Nh=new tt(0,0,0),Uh=new tt(1,1,1),Wn=new tt,Lr=new tt,Je=new tt,go=new be,_o=new gi;class ds{constructor(t=0,e=0,n=0,s=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return go.makeRotationFromQuaternion(t),this.setFromRotationMatrix(go,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _o.setFromEuler(this),this.setFromQuaternion(_o,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class Nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fh=0;const xo=new tt,Pi=new gi,Sn=new be,Ir=new tt,ir=new tt,Bh=new tt,Oh=new gi,yo=new tt(1,0,0),Mo=new tt(0,1,0),Eo=new tt(0,0,1),zh={type:"added"},Vh={type:"removed"};class Ue extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new tt,e=new ds,n=new gi,s=new tt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new he}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(yo,t)}rotateY(t){return this.rotateOnAxis(Mo,t)}rotateZ(t){return this.rotateOnAxis(Eo,t)}translateOnAxis(t,e){return xo.copy(t).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yo,t)}translateY(t){return this.translateOnAxis(Mo,t)}translateZ(t){return this.translateOnAxis(Eo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ir,Ir,this.up):Sn.lookAt(Ir,ir,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(zh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Oh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),l=a(t.shapes),d=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new tt(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new tt,wn=new tt,Ds=new tt,bn=new tt,Li=new tt,Ii=new tt,So=new tt,Ns=new tt,Us=new tt,Fs=new tt;let Dr=!1;class un{constructor(t=new tt,e=new tt,n=new tt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),wn.subVectors(n,e),Ds.subVectors(t,e);const a=hn.dot(hn),o=hn.dot(wn),c=hn.dot(Ds),u=wn.dot(wn),h=wn.dot(Ds),l=a*u-o*o;if(l===0)return r.set(-2,-1,-1);const d=1/l,p=(u*c-o*h)*d,v=(a*h-o*c)*d;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(t,e,n,s,r,a,o,c){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,bn),c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(a,bn.y),c.addScaledVector(o,bn.z),c}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),wn.subVectors(t,e),hn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),hn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Li.subVectors(s,n),Ii.subVectors(r,n),Ns.subVectors(t,n);const c=Li.dot(Ns),u=Ii.dot(Ns);if(c<=0&&u<=0)return e.copy(n);Us.subVectors(t,s);const h=Li.dot(Us),l=Ii.dot(Us);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Li,a);Fs.subVectors(t,r);const p=Li.dot(Fs),v=Ii.dot(Fs);if(v>=0&&p<=v)return e.copy(r);const g=p*u-c*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(Ii,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return So.subVectors(r,s),o=(l-h)/(l-h+(p-v)),e.copy(s).addScaledVector(So,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Li,a).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Bs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=xa(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bs(a,r,t+1/3),this.g=Bs(a,r,t),this.b=Bs(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Ul[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ge.fromWorkingColorSpace(Ge.copy(this),t),Math.round(ke(Ge.r*255,0,255))*65536+Math.round(ke(Ge.g*255,0,255))*256+Math.round(ke(Ge.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=De){ge.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Nr);const n=cr(Xn.h,Nr.h,e),s=cr(Xn.s,Nr.s,e),r=cr(Xn.l,Nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new ce;ce.NAMES=Ul;let Hh=0;class xn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Gi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fl extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new tt,Ur=new ae;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=co,this.updateRange={offset:0,count:-1},this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==co&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Bl extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ol extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Re extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gh=0;const en=new be,Os=new Ue,Di=new tt,Qe=new Mr,rr=new Mr,Ie=new tt;class tn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pl(t)?Ol:Bl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Os.lookAt(t),Os.updateMatrix(),this.applyMatrix4(Os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new tt,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Qe.min,rr.min),Qe.expandByPoint(Ie),Ie.addVectors(Qe.max,rr.max),Qe.expandByPoint(Ie)):(Qe.expandByPoint(rr.min),Qe.expandByPoint(rr.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ie.fromBufferAttribute(o,u),c&&(Di.fromBufferAttribute(t,u),Ie.add(Di)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let w=0;w<o;w++)u[w]=new tt,h[w]=new tt;const l=new tt,d=new tt,p=new tt,v=new ae,g=new ae,m=new ae,f=new tt,_=new tt;function x(w,P,k){l.fromArray(s,w*3),d.fromArray(s,P*3),p.fromArray(s,k*3),v.fromArray(a,w*2),g.fromArray(a,P*2),m.fromArray(a,k*2),d.sub(l),p.sub(l),g.sub(v),m.sub(v);const W=1/(g.x*m.y-m.x*g.y);isFinite(W)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(W),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(W),u[w].add(f),u[P].add(f),u[k].add(f),h[w].add(_),h[P].add(_),h[k].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,P=y.length;w<P;++w){const k=y[w],W=k.start,N=k.count;for(let H=W,nt=W+N;H<nt;H+=3)x(n[H+0],n[H+1],n[H+2])}const M=new tt,T=new tt,C=new tt,F=new tt;function E(w){C.fromArray(r,w*3),F.copy(C);const P=u[w];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),T.crossVectors(F,P);const W=T.dot(h[w])<0?-1:1;c[w*4]=M.x,c[w*4+1]=M.y,c[w*4+2]=M.z,c[w*4+3]=W}for(let w=0,P=y.length;w<P;++w){const k=y[w],W=k.start,N=k.count;for(let H=W,nt=W+N;H<nt;H+=3)E(n[H+0]),E(n[H+1]),E(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new tt,r=new tt,a=new tt,o=new tt,c=new tt,u=new tt,h=new tt,l=new tt;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,d=new u.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)d[v++]=u[p++]}return new vn(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const d=u[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const p=u[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,p=l.length;d<p;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wo=new be,ai=new us,Fr=new Er,bo=new tt,Ni=new tt,Ui=new tt,Fi=new tt,zs=new tt,Br=new tt,Or=new ae,zr=new ae,Vr=new ae,Ao=new tt,To=new tt,Ro=new tt,Hr=new tt,Gr=new tt;class ze extends Ue{constructor(t=new tn,e=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(zs.fromBufferAttribute(l,t),a?Br.addScaledVector(zs,h):Br.addScaledVector(zs.sub(e),h))}e.add(Br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(Fr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Fr,bo)===null||ai.origin.distanceToSquared(bo)>(t.far-t.near)**2))&&(wo.copy(r).invert(),ai.copy(t.ray).applyMatrix4(wo),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=x;y<M;y+=3){const T=o.getX(y),C=o.getX(y+1),F=o.getX(y+2);s=kr(this,f,t,n,u,h,l,T,C,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=kr(this,a,t,n,u,h,l,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=x;y<M;y+=3){const T=y,C=y+1,F=y+2;s=kr(this,f,t,n,u,h,l,T,C,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;s=kr(this,a,t,n,u,h,l,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function kh(i,t,e,n,s,r,a,o){let c;if(t.side===je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ti,o),c===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Gr);return u<e.near||u>e.far?null:{distance:u,point:Gr.clone(),object:i}}function kr(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,Ni),i.getVertexPosition(c,Ui),i.getVertexPosition(u,Fi);const h=kh(i,t,e,n,Ni,Ui,Fi,Hr);if(h){s&&(Or.fromBufferAttribute(s,o),zr.fromBufferAttribute(s,c),Vr.fromBufferAttribute(s,u),h.uv=un.getInterpolation(Hr,Ni,Ui,Fi,Or,zr,Vr,new ae)),r&&(Or.fromBufferAttribute(r,o),zr.fromBufferAttribute(r,c),Vr.fromBufferAttribute(r,u),h.uv1=un.getInterpolation(Hr,Ni,Ui,Fi,Or,zr,Vr,new ae),h.uv2=h.uv1),a&&(Ao.fromBufferAttribute(a,o),To.fromBufferAttribute(a,c),Ro.fromBufferAttribute(a,u),h.normal=un.getInterpolation(Hr,Ni,Ui,Fi,Ao,To,Ro,new tt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new tt,materialIndex:0};un.getNormal(Ni,Ui,Fi,l.normal),h.face=l}return h}class yn extends tn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let d=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(l,2));function v(g,m,f,_,x,y,M,T,C,F,E){const w=y/C,P=M/F,k=y/2,W=M/2,N=T/2,H=C+1,nt=F+1;let B=0,O=0;const Y=new tt;for(let X=0;X<nt;X++){const b=X*P-W;for(let U=0;U<H;U++){const D=U*w-k;Y[g]=D*_,Y[m]=b*x,Y[f]=N,u.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),l.push(U/C),l.push(1-X/F),B+=1}}for(let X=0;X<F;X++)for(let b=0;b<C;b++){const U=d+b+H*X,D=d+b+H*(X+1),I=d+(b+1)+H*(X+1),R=d+(b+1)+H*X;c.push(U,D,R),c.push(D,I,R),O+=6}o.addGroup(p,O,E),p+=O,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=$i(i[e]);for(const s in n)t[s]=n[s]}return t}function Wh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zl(i){return i.getRenderTarget()===null?i.outputColorSpace:ge.workingColorSpace}const Xh={clone:$i,merge:Xe};var qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qh,this.fragmentShader=Yh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vl extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Vl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,Oi=1;class jh extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(Bi,Oi,t,e);s.layers=this.layers,this.add(s);const r=new sn(Bi,Oi,t,e);r.layers=this.layers,this.add(r);const a=new sn(Bi,Oi,t,e);a.layers=this.layers,this.add(a);const o=new sn(Bi,Oi,t,e);o.layers=this.layers,this.add(o);const c=new sn(Bi,Oi,t,e);c.layers=this.layers,this.add(c);const u=new sn(Bi,Oi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const u of e)this.remove(u);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ya extends $e{constructor(t,e,n,s,r,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $h extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===fi?De:an),this.texture=new ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Kn});r.uniforms.tEquirect.value=e;const a=new ze(s,r),o=e.minFilter;return e.minFilter===pr&&(e.minFilter=rn),new jh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Vs=new tt,Kh=new tt,Zh=new he;class qn{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vs.subVectors(n,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zh.getNormalMatrix(t),s=this.coplanarPoint(Vs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Er,Wr=new tt;class Ma{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],p=s[8],v=s[9],g=s[10],m=s[11],f=s[12],_=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,d-u,m-p,y-f).normalize(),n[1].setComponents(c+r,d+u,m+p,y+f).normalize(),n[2].setComponents(c+a,d+h,m+v,y+_).normalize(),n[3].setComponents(c-a,d-h,m-v,y-_).normalize(),n[4].setComponents(c-o,d-l,m-g,y-x).normalize(),e===Dn)n[5].setComponents(c+o,d+l,m+g,y+x).normalize();else if(e===ss)n[5].setComponents(o,l,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jh(i,t){const e=t.isWebGL2,n=new WeakMap;function s(u,h){const l=u.array,d=u.usage,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,l,d),u.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,l){const d=h.array,p=h.updateRange;i.bindBuffer(l,u),p.count===-1?i.bufferSubData(l,0,d):(e?i.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,s(u,h)):l.version<u.version&&(r(l.buffer,u,h),l.version=u.version)}return{get:a,remove:o,update:c}}class Ea extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=t/o,d=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const _=f*d-a;for(let x=0;x<u;x++){const y=x*l-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const x=_+u*f,y=_+u*(f+1),M=_+1+u*(f+1),T=_+1+u*f;p.push(x,y,T),p.push(y,M,T)}this.setIndex(p),this.setAttribute("position",new Re(v,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,su=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ru=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ou=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ku=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Od=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ef=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Qh,alphahash_pars_fragment:tu,alphamap_fragment:eu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:ru,aomap_fragment:su,aomap_pars_fragment:au,begin_vertex:ou,beginnormal_vertex:lu,bsdfs:cu,iridescence_fragment:hu,bumpmap_pars_fragment:uu,clipping_planes_fragment:du,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:pu,clipping_planes_vertex:mu,color_fragment:vu,color_pars_fragment:gu,color_pars_vertex:_u,color_vertex:xu,common:yu,cube_uv_reflection_fragment:Mu,defaultnormal_vertex:Eu,displacementmap_pars_vertex:Su,displacementmap_vertex:wu,emissivemap_fragment:bu,emissivemap_pars_fragment:Au,colorspace_fragment:Tu,colorspace_pars_fragment:Ru,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Lu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Wu,envmap_vertex:Du,fog_vertex:Nu,fog_pars_vertex:Uu,fog_fragment:Fu,fog_pars_fragment:Bu,gradientmap_pars_fragment:Ou,lightmap_fragment:zu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Hu,lights_lambert_pars_fragment:Gu,lights_pars_begin:ku,lights_toon_fragment:Xu,lights_toon_pars_fragment:qu,lights_phong_fragment:Yu,lights_phong_pars_fragment:ju,lights_physical_fragment:$u,lights_physical_pars_fragment:Ku,lights_fragment_begin:Zu,lights_fragment_maps:Ju,lights_fragment_end:Qu,logdepthbuf_fragment:td,logdepthbuf_pars_fragment:ed,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:sd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphcolor_vertex:hd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:vd,normal_pars_vertex:gd,normal_vertex:_d,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:Ed,iridescence_pars_fragment:Sd,opaque_fragment:wd,packing:bd,premultiplied_alpha_fragment:Ad,project_vertex:Td,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Pd,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Dd,shadowmap_vertex:Nd,shadowmask_pars_fragment:Ud,skinbase_vertex:Fd,skinning_pars_vertex:Bd,skinning_vertex:Od,skinnormal_vertex:zd,specularmap_fragment:Vd,specularmap_pars_fragment:Hd,tonemapping_fragment:Gd,tonemapping_pars_fragment:kd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:Yd,uv_vertex:jd,worldpos_vertex:$d,background_vert:Kd,background_frag:Zd,backgroundCube_vert:Jd,backgroundCube_frag:Qd,cube_vert:tf,cube_frag:ef,depth_vert:nf,depth_frag:rf,distanceRGBA_vert:sf,distanceRGBA_frag:af,equirect_vert:of,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:vf,meshnormal_vert:gf,meshnormal_frag:_f,meshphong_vert:xf,meshphong_frag:yf,meshphysical_vert:Mf,meshphysical_frag:Ef,meshtoon_vert:Sf,meshtoon_frag:wf,points_vert:bf,points_frag:Af,shadow_vert:Tf,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},Ht={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},mn={basic:{uniforms:Xe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Xe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Xe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Xe([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Xe([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Xe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Xe([Ht.points,Ht.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Xe([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Xe([Ht.common,Ht.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Xe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Xe([Ht.sprite,Ht.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Xe([Ht.common,Ht.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Xe([Ht.lights,Ht.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};mn.physical={uniforms:Xe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Xr={r:0,b:0,g:0};function Lf(i,t,e,n,s,r,a){const o=new ce(0);let c=r===!0?0:1,u,h,l=null,d=0,p=null;function v(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,c):x&&x.isColor&&(g(x,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===cs)?(h===void 0&&(h=new ze(new yn(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:$i(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ge.getTransfer(x.colorSpace)!==_e,(l!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new ze(new Ea(2,2),new _i({name:"BackgroundMaterial",uniforms:$i(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ge.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Xr,zl(i)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function If(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let u=c,h=!1;function l(N,H,nt,B,O){let Y=!1;if(a){const X=g(B,nt,H);u!==X&&(u=X,p(u.object)),Y=f(N,B,nt,O),Y&&_(N,B,nt,O)}else{const X=H.wireframe===!0;(u.geometry!==B.id||u.program!==nt.id||u.wireframe!==X)&&(u.geometry=B.id,u.program=nt.id,u.wireframe=X,Y=!0)}O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,F(N,H,nt,B),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,H,nt){const B=nt.wireframe===!0;let O=o[N.id];O===void 0&&(O={},o[N.id]=O);let Y=O[H.id];Y===void 0&&(Y={},O[H.id]=Y);let X=Y[B];return X===void 0&&(X=m(d()),Y[B]=X),X}function m(N){const H=[],nt=[],B=[];for(let O=0;O<s;O++)H[O]=0,nt[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:B,object:N,attributes:{},index:null}}function f(N,H,nt,B){const O=u.attributes,Y=H.attributes;let X=0;const b=nt.getAttributes();for(const U in b)if(b[U].location>=0){const I=O[U];let R=Y[U];if(R===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),I===void 0||I.attribute!==R||R&&I.data!==R.data)return!0;X++}return u.attributesNum!==X||u.index!==B}function _(N,H,nt,B){const O={},Y=H.attributes;let X=0;const b=nt.getAttributes();for(const U in b)if(b[U].location>=0){let I=Y[U];I===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));const R={};R.attribute=I,I&&I.data&&(R.data=I.data),O[U]=R,X++}u.attributes=O,u.attributesNum=X,u.index=B}function x(){const N=u.newAttributes;for(let H=0,nt=N.length;H<nt;H++)N[H]=0}function y(N){M(N,0)}function M(N,H){const nt=u.newAttributes,B=u.enabledAttributes,O=u.attributeDivisors;nt[N]=1,B[N]===0&&(i.enableVertexAttribArray(N),B[N]=1),O[N]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),O[N]=H)}function T(){const N=u.newAttributes,H=u.enabledAttributes;for(let nt=0,B=H.length;nt<B;nt++)H[nt]!==N[nt]&&(i.disableVertexAttribArray(nt),H[nt]=0)}function C(N,H,nt,B,O,Y,X){X===!0?i.vertexAttribIPointer(N,H,nt,O,Y):i.vertexAttribPointer(N,H,nt,B,O,Y)}function F(N,H,nt,B){if(n.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const O=B.attributes,Y=nt.getAttributes(),X=H.defaultAttributeValues;for(const b in Y){const U=Y[b];if(U.location>=0){let D=O[b];if(D===void 0&&(b==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),b==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),D!==void 0){const I=D.normalized,R=D.itemSize,$=e.get(D);if($===void 0)continue;const at=$.buffer,et=$.type,K=$.bytesPerElement,ot=n.isWebGL2===!0&&(et===i.INT||et===i.UNSIGNED_INT||D.gpuType===Sl);if(D.isInterleavedBufferAttribute){const ht=D.data,q=ht.stride,Lt=D.offset;if(ht.isInstancedInterleavedBuffer){for(let ft=0;ft<U.locationSize;ft++)M(U.location+ft,ht.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<U.locationSize;ft++)y(U.location+ft);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ft=0;ft<U.locationSize;ft++)C(U.location+ft,R/U.locationSize,et,I,q*K,(Lt+R/U.locationSize*ft)*K,ot)}else{if(D.isInstancedBufferAttribute){for(let ht=0;ht<U.locationSize;ht++)M(U.location+ht,D.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ht=0;ht<U.locationSize;ht++)y(U.location+ht);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ht=0;ht<U.locationSize;ht++)C(U.location+ht,R/U.locationSize,et,I,R*K,R/U.locationSize*ht*K,ot)}}else if(X!==void 0){const I=X[b];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(U.location,I);break;case 3:i.vertexAttrib3fv(U.location,I);break;case 4:i.vertexAttrib4fv(U.location,I);break;default:i.vertexAttrib1fv(U.location,I)}}}}T()}function E(){k();for(const N in o){const H=o[N];for(const nt in H){const B=H[nt];for(const O in B)v(B[O].object),delete B[O];delete H[nt]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const H=o[N.id];for(const nt in H){const B=H[nt];for(const O in B)v(B[O].object),delete B[O];delete H[nt]}delete o[N.id]}function P(N){for(const H in o){const nt=o[H];if(nt[N.id]===void 0)continue;const B=nt[N.id];for(const O in B)v(B[O].object),delete B[O];delete nt[N.id]}}function k(){W(),h=!0,u!==c&&(u=c,p(u.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:k,resetDefaultState:W,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function Df(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,l){if(l===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,u,h,l),e.update(h,r,l)}this.setMode=a,this.render=o,this.renderInstances=c}function Nf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||t.has("OES_texture_float"),M=x&&y,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function Uf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qn,o=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const p=l.length!==0||d||n!==0||s;return s=d,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const _=r?0:n,x=_*4;let y=f.clippingState||null;c.value=y,y=h(v,d,x,p);for(let M=0;M!==x;++M)y[M]=e[M];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)a.copy(l[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ff(i){let t=new WeakMap;function e(a,o){return o===ia?a.mapping=qi:o===ra&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ia||o===ra)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new $h(c.height/2);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gl extends Vl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,Co=[.125,.215,.35,.446,.526,.582],hi=20,Hs=new Gl,Po=new ce;let Gs=null,ks=0,Ws=0;const li=(1+Math.sqrt(5))/2,zi=1/li,Lo=[new tt(1,1,1),new tt(-1,1,1),new tt(1,1,-1),new tt(-1,1,-1),new tt(0,li,zi),new tt(0,li,-zi),new tt(zi,0,li),new tt(-zi,0,li),new tt(li,zi,0),new tt(-li,zi,0)];class Io{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gs,ks,Ws),t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:mr,format:fn,colorSpace:On,depthBuffer:!1},s=Do(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bf(r)),this._blurMaterial=Of(r,t,e)}return s}_compileMaterial(t){const e=new ze(this._lodPlanes[0],t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,n,s){const o=new sn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Po),h.toneMapping=Zn,h.autoClear=!1;const p=new Fl({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),v=new ze(new yn,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Po),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,c[f],0),o.lookAt(u[f],0,0)):_===1?(o.up.set(0,0,c[f]),o.lookAt(0,u[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,u[f]));const x=this._cubeSize;qr(s,_*x,f>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;qr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Hs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lo[(s-1)%Lo.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new ze(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let _=0;for(let C=0;C<hi;++C){const F=C/g,E=Math.exp(-F*F/2);f.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[s],M=3*y*(s>x-Hi?s-x+Hi:0),T=4*(this._cubeSize-y);qr(e,M,T,3*y,2*y),c.setRenderTarget(e),c.render(l,Hs)}}function Bf(i){const t=[],e=[],n=[];let s=i;const r=i-Hi+1+Co.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Hi?c=Co[a-i+Hi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,F=T>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];_.set(E,g*v*T),x.set(d,m*v*T);const w=[T,T,T,T,T,T];y.set(w,f*v*T)}const M=new tn;M.setAttribute("position",new vn(_,g)),M.setAttribute("uv",new vn(x,m)),M.setAttribute("faceIndex",new vn(y,f)),t.push(M),s>Hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Do(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Of(i,t,e){const n=new Float32Array(hi),s=new tt(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function No(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Uo(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===ia||c===ra,h=c===qi||c===Yi;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new Io(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||h&&l&&s(l)){e===null&&(e=new Io(i));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hf(i,t,e,n){const s={},r=new WeakMap;function a(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(l){const d=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const M=_[x+0],T=_[x+1],C=_[x+2];d.push(M,T,T,C,C,M)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const M=x+0,T=x+1,C=x+2;d.push(M,T,T,C,C,M)}}else return;const m=new(Pl(d)?Ol:Bl)(d,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const d=r.get(l);if(d){const p=l.index;p!==null&&d.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function Gf(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function u(d){o=d.type,c=d.bytesPerElement}function h(d,p){i.drawElements(r,p,o,d*c),e.update(p,r,1)}function l(d,p,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*c,v),e.update(p,r,v)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=l}function kf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wf(i,t){return i[0]-t[0]}function Xf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function qf(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new Ne,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,l){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let N=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let F=0;_===!0&&(F=1),x===!0&&(F=2),y===!0&&(F=3);let E=h.attributes.position.count*F,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const P=new Float32Array(E*w*4*v),k=new Dl(P,E,w,v);k.type=$n,k.needsUpdate=!0;const W=F*4;for(let H=0;H<v;H++){const nt=M[H],B=T[H],O=C[H],Y=E*w*4*H;for(let X=0;X<nt.count;X++){const b=X*W;_===!0&&(a.fromBufferAttribute(nt,X),P[Y+b+0]=a.x,P[Y+b+1]=a.y,P[Y+b+2]=a.z,P[Y+b+3]=0),x===!0&&(a.fromBufferAttribute(B,X),P[Y+b+4]=a.x,P[Y+b+5]=a.y,P[Y+b+6]=a.z,P[Y+b+7]=0),y===!0&&(a.fromBufferAttribute(O,X),P[Y+b+8]=a.x,P[Y+b+9]=a.y,P[Y+b+10]=a.z,P[Y+b+11]=O.itemSize===4?a.w:1)}}g={count:v,texture:k,size:new ae(E,w)},r.set(h,g),h.addEventListener("dispose",N)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const f=h.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",d),l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=d===void 0?0:d.length;let v=n[h.id];if(v===void 0||v.length!==p){v=[];for(let x=0;x<p;x++)v[x]=[x,0];n[h.id]=v}for(let x=0;x<p;x++){const y=v[x];y[0]=x,y[1]=d[x]}v.sort(Xf);for(let x=0;x<8;x++)x<p&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Wf);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let f=0;for(let x=0;x<8;x++){const y=o[x],M=y[0],T=y[1];M!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+x)!==g[M]&&h.setAttribute("morphTarget"+x,g[M]),m&&h.getAttribute("morphNormal"+x)!==m[M]&&h.setAttribute("morphNormal"+x,m[M]),s[x]=T,f+=T):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}const _=h.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Yf(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const kl=new $e,Wl=new Dl,Xl=new Ih,ql=new ya,Fo=[],Bo=[],Oo=new Float32Array(16),zo=new Float32Array(9),Vo=new Float32Array(4);function Ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fo[s];if(r===void 0&&(r=new Float32Array(s),Fo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fs(i,t){let e=Bo[t];e===void 0&&(e=new Int32Array(t),Bo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $f(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Jf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Vo.set(n),i.uniformMatrix2fv(this.addr,!1,Vo),Pe(e,n)}}function Qf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;zo.set(n),i.uniformMatrix3fv(this.addr,!1,zo),Pe(e,n)}}function tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Oo.set(n),i.uniformMatrix4fv(this.addr,!1,Oo),Pe(e,n)}}function ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function sp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||kl,s)}function hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xl,s)}function up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ql,s)}function dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wl,s)}function fp(i){switch(i){case 5126:return jf;case 35664:return $f;case 35665:return Kf;case 35666:return Zf;case 35674:return Jf;case 35675:return Qf;case 35676:return tp;case 5124:case 35670:return ep;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,t){i.uniform1fv(this.addr,t)}function mp(i,t){const e=Ji(t,this.size,2);i.uniform2fv(this.addr,e)}function vp(i,t){const e=Ji(t,this.size,3);i.uniform3fv(this.addr,e)}function gp(i,t){const e=Ji(t,this.size,4);i.uniform4fv(this.addr,e)}function _p(i,t){const e=Ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xp(i,t){const e=Ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){const e=Ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mp(i,t){i.uniform1iv(this.addr,t)}function Ep(i,t){i.uniform2iv(this.addr,t)}function Sp(i,t){i.uniform3iv(this.addr,t)}function wp(i,t){i.uniform4iv(this.addr,t)}function bp(i,t){i.uniform1uiv(this.addr,t)}function Ap(i,t){i.uniform2uiv(this.addr,t)}function Tp(i,t){i.uniform3uiv(this.addr,t)}function Rp(i,t){i.uniform4uiv(this.addr,t)}function Cp(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||kl,r[a])}function Pp(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xl,r[a])}function Lp(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ql,r[a])}function Ip(i,t,e){const n=this.cache,s=t.length,r=fs(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wl,r[a])}function Dp(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return vp;case 35666:return gp;case 35674:return _p;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return Mp;case 35667:case 35671:return Ep;case 35668:case 35672:return Sp;case 35669:case 35673:return wp;case 5125:return bp;case 36294:return Ap;case 36295:return Tp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Np{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=fp(e.type)}}class Up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Dp(e.type)}}class Fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Xs=/(\w+)(\])?(\[|\.)?/g;function Ho(i,t){i.seq.push(t),i.map[t.id]=t}function Bp(i,t,e){const n=i.name,s=n.length;for(Xs.lastIndex=0;;){const r=Xs.exec(n),a=Xs.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Ho(e,u===void 0?new Np(o,i,t):new Up(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Fp(o),Ho(e,l)),e=l}}}class Qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Go(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Op=37297;let zp=0;function Vp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Hp(i){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(i);let n;switch(t===e?n="":t===rs&&e===is?n="LinearDisplayP3ToLinearSRGB":t===is&&e===rs&&(n="LinearSRGBToLinearDisplayP3"),i){case On:case hs:return[n,"LinearTransferOETF"];case De:case _a:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ko(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vp(i.getShaderSource(t),a)}else return s}function Gp(i,t){const e=Hp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function kp(i,t){let e;switch(t){case Vc:e="Linear";break;case Hc:e="Reinhard";break;case Gc:e="OptimizedCineon";break;case kc:e="ACESFilmic";break;case Wc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function Xp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sr(i){return i!==""}function Wo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace(Yp,$p)}const jp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $p(i,t){let e=oe[t];if(e===void 0){const n=jp.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return la(e)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(i){return i.replace(Kp,Zp)}function Zp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yo(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function em(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ma:t="ENVMAP_BLENDING_MULTIPLY";break;case Oc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function nm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function im(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Jp(e),u=Qp(e),h=tm(e),l=em(e),d=nm(e),p=e.isWebGL2?"":Wp(e),v=Xp(r),g=s.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(sr).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(sr).join(`
`),f.length>0&&(f+=`
`)):(m=[Yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),f=[p,Yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Zn?kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Gp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),a=la(a),a=Wo(a,e),a=Xo(a,e),o=la(o),o=Wo(o,e),o=Xo(o,e),a=qo(a),o=qo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ho?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ho?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+a,y=_+f+o,M=Go(s,s.VERTEX_SHADER,x),T=Go(s,s.FRAGMENT_SHADER,y);s.attachShader(g,M),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(g).trim(),W=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(T).trim();let H=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{const B=ko(s,M,"vertex"),O=ko(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+B+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(W===""||N==="")&&(nt=!1);nt&&(P.diagnostics={runnable:H,programLog:k,vertexShader:{log:W,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(M),s.deleteShader(T),F=new Qr(s,g),E=qp(s,g)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,Op)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let rm=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new am(t),e.set(t,n)),n}}class am{constructor(t){this.id=rm++,this.code=t,this.usedTimes=0}}function om(i,t,e,n,s,r,a){const o=new Nl,c=new sm,u=[],h=s.isWebGL2,l=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,w,P,k,W){const N=k.fog,H=W.geometry,nt=E.isMeshStandardMaterial?k.environment:null,B=(E.isMeshStandardMaterial?e:t).get(E.envMap||nt),O=B&&B.mapping===cs?B.image.height:null,Y=v[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,b=X!==void 0?X.length:0;let U=0;H.morphAttributes.position!==void 0&&(U=1),H.morphAttributes.normal!==void 0&&(U=2),H.morphAttributes.color!==void 0&&(U=3);let D,I,R,$;if(Y){const le=mn[Y];D=le.vertexShader,I=le.fragmentShader}else D=E.vertexShader,I=E.fragmentShader,c.update(E),R=c.getVertexShaderID(E),$=c.getFragmentShaderID(E);const at=i.getRenderTarget(),et=W.isInstancedMesh===!0,K=!!E.map,ot=!!E.matcap,ht=!!B,q=!!E.aoMap,Lt=!!E.lightMap,ft=!!E.bumpMap,it=!!E.normalMap,ct=!!E.displacementMap,Zt=!!E.emissiveMap,At=!!E.metalnessMap,kt=!!E.roughnessMap,Mt=E.anisotropy>0,ee=E.clearcoat>0,ie=E.iridescence>0,L=E.sheen>0,A=E.transmission>0,J=Mt&&!!E.anisotropyMap,vt=ee&&!!E.clearcoatMap,dt=ee&&!!E.clearcoatNormalMap,xt=ee&&!!E.clearcoatRoughnessMap,Gt=ie&&!!E.iridescenceMap,bt=ie&&!!E.iridescenceThicknessMap,Nt=L&&!!E.sheenColorMap,V=L&&!!E.sheenRoughnessMap,Et=!!E.specularMap,pt=!!E.specularColorMap,Jt=!!E.specularIntensityMap,qt=A&&!!E.transmissionMap,Yt=A&&!!E.thicknessMap,Wt=!!E.gradientMap,Ut=!!E.alphaMap,re=E.alphaTest>0,j=!!E.alphaHash,St=!!E.extensions,yt=!!H.attributes.uv1,ut=!!H.attributes.uv2,wt=!!H.attributes.uv3;let jt=Zn;return E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:D,fragmentShader:I,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:et,instancingColor:et&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:On,map:K,matcap:ot,envMap:ht,envMapMode:ht&&B.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:Lt,bumpMap:ft,normalMap:it,displacementMap:d&&ct,emissiveMap:Zt,normalMapObjectSpace:it&&E.normalMapType===ih,normalMapTangentSpace:it&&E.normalMapType===ga,metalnessMap:At,roughnessMap:kt,anisotropy:Mt,anisotropyMap:J,clearcoat:ee,clearcoatMap:vt,clearcoatNormalMap:dt,clearcoatRoughnessMap:xt,iridescence:ie,iridescenceMap:Gt,iridescenceThicknessMap:bt,sheen:L,sheenColorMap:Nt,sheenRoughnessMap:V,specularMap:Et,specularColorMap:pt,specularIntensityMap:Jt,transmission:A,transmissionMap:qt,thicknessMap:Yt,gradientMap:Wt,opaque:E.transparent===!1&&E.blending===Gi,alphaMap:Ut,alphaTest:re,alphaHash:j,combine:E.combine,mapUv:K&&g(E.map.channel),aoMapUv:q&&g(E.aoMap.channel),lightMapUv:Lt&&g(E.lightMap.channel),bumpMapUv:ft&&g(E.bumpMap.channel),normalMapUv:it&&g(E.normalMap.channel),displacementMapUv:ct&&g(E.displacementMap.channel),emissiveMapUv:Zt&&g(E.emissiveMap.channel),metalnessMapUv:At&&g(E.metalnessMap.channel),roughnessMapUv:kt&&g(E.roughnessMap.channel),anisotropyMapUv:J&&g(E.anisotropyMap.channel),clearcoatMapUv:vt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(E.sheenRoughnessMap.channel),specularMapUv:Et&&g(E.specularMap.channel),specularColorMapUv:pt&&g(E.specularColorMap.channel),specularIntensityMapUv:Jt&&g(E.specularIntensityMap.channel),transmissionMapUv:qt&&g(E.transmissionMap.channel),thicknessMapUv:Yt&&g(E.thicknessMap.channel),alphaMapUv:Ut&&g(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(it||Mt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:ut,vertexUv3s:wt,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(K||Ut),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:K&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===_e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ln,flipSided:E.side===je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:St&&E.extensions.derivatives===!0,extensionFragDepth:St&&E.extensions.fragDepth===!0,extensionDrawBuffers:St&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)w.push(P),w.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(_(w,E),x(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function _(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function x(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function y(E){const w=v[E.type];let P;if(w){const k=mn[w];P=Xh.clone(k.uniforms)}else P=E.uniforms;return P}function M(E,w){let P;for(let k=0,W=u.length;k<W;k++){const N=u[k];if(N.cacheKey===w){P=N,++P.usedTimes;break}}return P===void 0&&(P=new im(i,w,E,r),u.push(P)),P}function T(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:F}}function lm(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function cm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $o(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,d,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:d,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,d,p,v,g,m){const f=a(l,d,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(l,d,p,v,g,m){const f=a(l,d,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function u(l,d){e.length>1&&e.sort(l||cm),n.length>1&&n.sort(d||jo),s.length>1&&s.sort(d||jo)}function h(){for(let l=t,d=i.length;l<d;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function hm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new $o,i.set(n,[a])):s>=r.length?(a=new $o,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function um(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new ce};break;case"SpotLight":e={position:new tt,direction:new tt,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=e,e}}}function dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let fm=0;function pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mm(i,t){const e=new um,n=dm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new tt);const r=new tt,a=new be,o=new be;function c(h,l){let d=0,p=0,v=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let g=0,m=0,f=0,_=0,x=0,y=0,M=0,T=0,C=0,F=0,E=0;h.sort(pm);const w=l===!0?Math.PI:1;for(let k=0,W=h.length;k<W;k++){const N=h[k],H=N.color,nt=N.intensity,B=N.distance,O=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=H.r*nt*w,p+=H.g*nt*w,v+=H.b*nt*w;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(N.sh.coefficients[Y],nt);E++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const X=N.shadow,b=n.get(N);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,s.directionalShadow[g]=b,s.directionalShadowMap[g]=O,s.directionalShadowMatrix[g]=N.shadow.matrix,y++}s.directional[g]=Y,g++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(H).multiplyScalar(nt*w),Y.distance=B,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,s.spot[f]=Y;const X=N.shadow;if(N.map&&(s.spotLightMap[C]=N.map,C++,X.updateMatrices(N),N.castShadow&&F++),s.spotLightMatrix[f]=X.matrix,N.castShadow){const b=n.get(N);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,s.spotShadow[f]=b,s.spotShadowMap[f]=O,T++}f++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(H).multiplyScalar(nt),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=Y,_++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*w),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const X=N.shadow,b=n.get(N);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,b.shadowCameraNear=X.camera.near,b.shadowCameraFar=X.camera.far,s.pointShadow[m]=b,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=N.shadow.matrix,M++}s.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(nt*w),Y.groundColor.copy(N.groundColor).multiplyScalar(nt*w),s.hemi[x]=Y,x++}}_>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=v;const P=s.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==f||P.rectAreaLength!==_||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==C||P.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=T+C-F,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=E,P.directionalLength=g,P.pointLength=m,P.spotLength=f,P.rectAreaLength=_,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=C,P.numLightProbes=E,s.version=fm++)}function u(h,l){let d=0,p=0,v=0,g=0,m=0;const f=l.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const y=h[_];if(y.isDirectionalLight){const M=s.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(y.isSpotLight){const M=s.spot[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=s.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:c,setupView:u,state:s}}function Ko(i,t){const e=new mm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(l){n.push(l)}function o(l){s.push(l)}function c(l){e.setup(n,l)}function u(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function vm(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Ko(i,t),e.set(r,[c])):a>=o.length?(c=new Ko(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class gm extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _m extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mm(i,t,e){let n=new Ma;const s=new ae,r=new ae,a=new Ne,o=new gm({depthPacking:nh}),c=new _m,u={},h=e.maxTextureSize,l={[ti]:je,[je]:ti,[Ln]:Ln},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:xm,fragmentShader:ym}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new tn;v.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ze(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let f=this.type;this.render=function(M,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const F=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Kn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const k=f!==Tn&&this.type===Tn,W=f===Tn&&this.type!==Tn;for(let N=0,H=M.length;N<H;N++){const nt=M[N],B=nt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const O=B.getFrameExtents();if(s.multiply(O),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,B.mapSize.y=r.y)),B.map===null||k===!0||W===!0){const X=this.type!==Tn?{minFilter:Oe,magFilter:Oe}:{};B.map!==null&&B.map.dispose(),B.map=new vi(s.x,s.y,X),B.map.texture.name=nt.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Y=B.getViewportCount();for(let X=0;X<Y;X++){const b=B.getViewport(X);a.set(r.x*b.x,r.y*b.y,r.x*b.z,r.y*b.w),P.viewport(a),B.updateMatrices(nt,X),n=B.getFrustum(),y(T,C,B.camera,nt,this.type)}B.isPointLightShadow!==!0&&this.type===Tn&&_(B,C),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(F,E,w)};function _(M,T){const C=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new vi(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,C,p,g,null)}function x(M,T,C,F){let E=null;const w=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)E=w;else if(E=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=E.uuid,k=T.uuid;let W=u[P];W===void 0&&(W={},u[P]=W);let N=W[k];N===void 0&&(N=E.clone(),W[k]=N),E=N}if(E.visible=T.visible,E.wireframe=T.wireframe,F===Tn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:l[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const P=i.properties.get(E);P.light=C}return E}function y(M,T,C,F,E){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Tn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const k=t.update(M),W=M.material;if(Array.isArray(W)){const N=k.groups;for(let H=0,nt=N.length;H<nt;H++){const B=N[H],O=W[B.materialIndex];if(O&&O.visible){const Y=x(M,O,F,E);i.renderBufferDirect(C,null,k,Y,M,B)}}}else if(W.visible){const N=x(M,W,F,E);i.renderBufferDirect(C,null,k,N,M,null)}}const P=M.children;for(let k=0,W=P.length;k<W;k++)y(P[k],T,C,F,E)}}function Em(i,t,e){const n=e.isWebGL2;function s(){let j=!1;const St=new Ne;let yt=null;const ut=new Ne(0,0,0,0);return{setMask:function(wt){yt!==wt&&!j&&(i.colorMask(wt,wt,wt,wt),yt=wt)},setLocked:function(wt){j=wt},setClear:function(wt,jt,se,le,lt){lt===!0&&(wt*=le,jt*=le,se*=le),St.set(wt,jt,se,le),ut.equals(St)===!1&&(i.clearColor(wt,jt,se,le),ut.copy(St))},reset:function(){j=!1,yt=null,ut.set(-1,0,0,0)}}}function r(){let j=!1,St=null,yt=null,ut=null;return{setTest:function(wt){wt?K(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(wt){St!==wt&&!j&&(i.depthMask(wt),St=wt)},setFunc:function(wt){if(yt!==wt){switch(wt){case Lc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Nc:i.depthFunc(i.EQUAL);break;case Uc:i.depthFunc(i.GEQUAL);break;case Fc:i.depthFunc(i.GREATER);break;case Bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=wt}},setLocked:function(wt){j=wt},setClear:function(wt){ut!==wt&&(i.clearDepth(wt),ut=wt)},reset:function(){j=!1,St=null,yt=null,ut=null}}}function a(){let j=!1,St=null,yt=null,ut=null,wt=null,jt=null,se=null,le=null,lt=null;return{setTest:function(st){j||(st?K(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(st){St!==st&&!j&&(i.stencilMask(st),St=st)},setFunc:function(st,mt,gt){(yt!==st||ut!==mt||wt!==gt)&&(i.stencilFunc(st,mt,gt),yt=st,ut=mt,wt=gt)},setOp:function(st,mt,gt){(jt!==st||se!==mt||le!==gt)&&(i.stencilOp(st,mt,gt),jt=st,se=mt,le=gt)},setLocked:function(st){j=st},setClear:function(st){lt!==st&&(i.clearStencil(st),lt=st)},reset:function(){j=!1,St=null,yt=null,ut=null,wt=null,jt=null,se=null,le=null,lt=null}}}const o=new s,c=new r,u=new a,h=new WeakMap,l=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,M=null,T=null,C=null,F=null,E=new ce(0,0,0),w=0,P=!1,k=null,W=null,N=null,H=null,nt=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=Y>=2);let b=null,U={};const D=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),R=new Ne().fromArray(D),$=new Ne().fromArray(I);function at(j,St,yt,ut){const wt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(j,jt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<yt;se++)n&&(j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY)?i.texImage3D(St,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(St+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return jt}const et={};et[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),K(i.DEPTH_TEST),c.setFunc(es),At(!1),kt(Pa),K(i.CULL_FACE),ct(Kn);function K(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function ot(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function ht(j,St){return p[j]!==St?(i.bindFramebuffer(j,St),p[j]=St,n&&(j===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=St),j===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=St)),!0):!1}function q(j,St){let yt=g,ut=!1;if(j)if(yt=v.get(St),yt===void 0&&(yt=[],v.set(St,yt)),j.isWebGLMultipleRenderTargets){const wt=j.texture;if(yt.length!==wt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,se=wt.length;jt<se;jt++)yt[jt]=i.COLOR_ATTACHMENT0+jt;yt.length=wt.length,ut=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,ut=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,ut=!0);ut&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function Lt(j){return m!==j?(i.useProgram(j),m=j,!0):!1}const ft={[ci]:i.FUNC_ADD,[vc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};if(n)ft[Na]=i.MIN,ft[Ua]=i.MAX;else{const j=t.get("EXT_blend_minmax");j!==null&&(ft[Na]=j.MIN_EXT,ft[Ua]=j.MAX_EXT)}const it={[_c]:i.ZERO,[xc]:i.ONE,[yc]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[wc]:i.DST_COLOR,[Ec]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[bc]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[Tc]:i.CONSTANT_COLOR,[Rc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(j,St,yt,ut,wt,jt,se,le,lt,st){if(j===Kn){f===!0&&(ot(i.BLEND),f=!1);return}if(f===!1&&(K(i.BLEND),f=!0),j!==mc){if(j!==_||st!==P){if((x!==ci||T!==ci)&&(i.blendEquation(i.FUNC_ADD),x=ci,T=ci),st)switch(j){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}y=null,M=null,C=null,F=null,E.set(0,0,0),w=0,_=j,P=st}return}wt=wt||St,jt=jt||yt,se=se||ut,(St!==x||wt!==T)&&(i.blendEquationSeparate(ft[St],ft[wt]),x=St,T=wt),(yt!==y||ut!==M||jt!==C||se!==F)&&(i.blendFuncSeparate(it[yt],it[ut],it[jt],it[se]),y=yt,M=ut,C=jt,F=se),(le.equals(E)===!1||lt!==w)&&(i.blendColor(le.r,le.g,le.b,lt),E.copy(le),w=lt),_=j,P=!1}function Zt(j,St){j.side===Ln?ot(i.CULL_FACE):K(i.CULL_FACE);let yt=j.side===je;St&&(yt=!yt),At(yt),j.blending===Gi&&j.transparent===!1?ct(Kn):ct(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const ut=j.stencilWrite;u.setTest(ut),ut&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ee(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(j){k!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),k=j)}function kt(j){j!==fc?(K(i.CULL_FACE),j!==W&&(j===Pa?i.cullFace(i.BACK):j===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),W=j}function Mt(j){j!==N&&(O&&i.lineWidth(j),N=j)}function ee(j,St,yt){j?(K(i.POLYGON_OFFSET_FILL),(H!==St||nt!==yt)&&(i.polygonOffset(St,yt),H=St,nt=yt)):ot(i.POLYGON_OFFSET_FILL)}function ie(j){j?K(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function L(j){j===void 0&&(j=i.TEXTURE0+B-1),b!==j&&(i.activeTexture(j),b=j)}function A(j,St,yt){yt===void 0&&(b===null?yt=i.TEXTURE0+B-1:yt=b);let ut=U[yt];ut===void 0&&(ut={type:void 0,texture:void 0},U[yt]=ut),(ut.type!==j||ut.texture!==St)&&(b!==yt&&(i.activeTexture(yt),b=yt),i.bindTexture(j,St||et[j]),ut.type=j,ut.texture=St)}function J(){const j=U[b];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xt(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function V(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qt(j){R.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),R.copy(j))}function Yt(j){$.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function Wt(j,St){let yt=l.get(St);yt===void 0&&(yt=new WeakMap,l.set(St,yt));let ut=yt.get(j);ut===void 0&&(ut=i.getUniformBlockIndex(St,j.name),yt.set(j,ut))}function Ut(j,St){const ut=l.get(St).get(j);h.get(St)!==ut&&(i.uniformBlockBinding(St,ut,j.__bindingPointIndex),h.set(St,ut))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},b=null,U={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,M=null,T=null,C=null,F=null,E=new ce(0,0,0),w=0,P=!1,k=null,W=null,N=null,H=null,nt=null,R.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:K,disable:ot,bindFramebuffer:ht,drawBuffers:q,useProgram:Lt,setBlending:ct,setMaterial:Zt,setFlipSided:At,setCullFace:kt,setLineWidth:Mt,setPolygonOffset:ee,setScissorTest:ie,activeTexture:L,bindTexture:A,unbindTexture:J,compressedTexImage2D:vt,compressedTexImage3D:dt,texImage2D:pt,texImage3D:Jt,updateUBOMapping:Wt,uniformBlockBinding:Ut,texStorage2D:V,texStorage3D:Et,texSubImage2D:xt,texSubImage3D:Gt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Nt,scissor:qt,viewport:Yt,reset:re}}function Sm(i,t,e,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,l=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,A){return f?new OffscreenCanvas(L,A):gr("canvas")}function x(L,A,J,vt){let dt=1;if((L.width>vt||L.height>vt)&&(dt=vt/Math.max(L.width,L.height)),dt<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const xt=A?as:Math.floor,Gt=xt(dt*L.width),bt=xt(dt*L.height);g===void 0&&(g=_(Gt,bt));const Nt=J?_(Gt,bt):g;return Nt.width=Gt,Nt.height=bt,Nt.getContext("2d").drawImage(L,0,0,Gt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Gt+"x"+bt+")."),Nt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return oa(L.width)&&oa(L.height)}function M(L){return o?!1:L.wrapS!==dn||L.wrapT!==dn||L.minFilter!==Oe&&L.minFilter!==rn}function T(L,A){return L.generateMipmaps&&A&&L.minFilter!==Oe&&L.minFilter!==rn}function C(L){i.generateMipmap(L)}function F(L,A,J,vt,dt=!1){if(o===!1)return A;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt=A;if(A===i.RED&&(J===i.FLOAT&&(xt=i.R32F),J===i.HALF_FLOAT&&(xt=i.R16F),J===i.UNSIGNED_BYTE&&(xt=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(xt=i.R8UI),J===i.UNSIGNED_SHORT&&(xt=i.R16UI),J===i.UNSIGNED_INT&&(xt=i.R32UI),J===i.BYTE&&(xt=i.R8I),J===i.SHORT&&(xt=i.R16I),J===i.INT&&(xt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(xt=i.RG32F),J===i.HALF_FLOAT&&(xt=i.RG16F),J===i.UNSIGNED_BYTE&&(xt=i.RG8)),A===i.RGBA){const Gt=dt?ns:ge.getTransfer(vt);J===i.FLOAT&&(xt=i.RGBA32F),J===i.HALF_FLOAT&&(xt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(xt=Gt===_e?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(xt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(xt=i.RGB5_A1)}return(xt===i.R16F||xt===i.R32F||xt===i.RG16F||xt===i.RG32F||xt===i.RGBA16F||xt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function E(L,A,J){return T(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Oe&&L.minFilter!==rn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){return L===Oe||L===Fa||L===_s?i.NEAREST:i.LINEAR}function P(L){const A=L.target;A.removeEventListener("dispose",P),W(A),A.isVideoTexture&&v.delete(A)}function k(L){const A=L.target;A.removeEventListener("dispose",k),H(A)}function W(L){const A=n.get(L);if(A.__webglInit===void 0)return;const J=L.source,vt=m.get(J);if(vt){const dt=vt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&N(L),Object.keys(vt).length===0&&m.delete(J)}n.remove(L)}function N(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const J=L.source,vt=m.get(J);delete vt[A.__cacheKey],a.memory.textures--}function H(L){const A=L.texture,J=n.get(L),vt=n.get(A);if(vt.__webglTexture!==void 0&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(J.__webglFramebuffer[dt]))for(let xt=0;xt<J.__webglFramebuffer[dt].length;xt++)i.deleteFramebuffer(J.__webglFramebuffer[dt][xt]);else i.deleteFramebuffer(J.__webglFramebuffer[dt]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[dt])}else{if(Array.isArray(J.__webglFramebuffer))for(let dt=0;dt<J.__webglFramebuffer.length;dt++)i.deleteFramebuffer(J.__webglFramebuffer[dt]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let dt=0;dt<J.__webglColorRenderbuffer.length;dt++)J.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[dt]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let dt=0,xt=A.length;dt<xt;dt++){const Gt=n.get(A[dt]);Gt.__webglTexture&&(i.deleteTexture(Gt.__webglTexture),a.memory.textures--),n.remove(A[dt])}n.remove(A),n.remove(L)}let nt=0;function B(){nt=0}function O(){const L=nt;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),nt+=1,L}function Y(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function X(L,A){const J=n.get(L);if(L.isVideoTexture&&ee(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,L,A);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function b(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function U(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function D(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){ot(J,L,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const I={[sa]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[fr]:i.MIRRORED_REPEAT},R={[Oe]:i.NEAREST,[Fa]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Xc]:i.LINEAR_MIPMAP_NEAREST,[pr]:i.LINEAR_MIPMAP_LINEAR},$={[rh]:i.NEVER,[uh]:i.ALWAYS,[sh]:i.LESS,[oh]:i.LEQUAL,[ah]:i.EQUAL,[hh]:i.GEQUAL,[lh]:i.GREATER,[ch]:i.NOTEQUAL};function at(L,A,J){if(J?(i.texParameteri(L,i.TEXTURE_WRAP_S,I[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,I[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,I[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,R[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,R[A.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==dn||A.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,w(A.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Oe&&A.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Oe||A.minFilter!==_s&&A.minFilter!==pr||A.type===$n&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===mr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(L,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function et(L,A){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",P));const vt=A.source;let dt=m.get(vt);dt===void 0&&(dt={},m.set(vt,dt));const xt=Y(A);if(xt!==L.__cacheKey){dt[xt]===void 0&&(dt[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),dt[xt].usedTimes++;const Gt=dt[L.__cacheKey];Gt!==void 0&&(dt[L.__cacheKey].usedTimes--,Gt.usedTimes===0&&N(A)),L.__cacheKey=xt,L.__webglTexture=dt[xt].texture}return J}function K(L,A,J){let vt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(vt=i.TEXTURE_3D);const dt=et(L,A),xt=A.source;e.bindTexture(vt,L.__webglTexture,i.TEXTURE0+J);const Gt=n.get(xt);if(xt.version!==Gt.__version||dt===!0){e.activeTexture(i.TEXTURE0+J);const bt=ge.getPrimaries(ge.workingColorSpace),Nt=A.colorSpace===an?null:ge.getPrimaries(A.colorSpace),V=A.colorSpace===an||bt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const Et=M(A)&&y(A.image)===!1;let pt=x(A.image,Et,!1,h);pt=ie(A,pt);const Jt=y(pt)||o,qt=r.convert(A.format,A.colorSpace);let Yt=r.convert(A.type),Wt=F(A.internalFormat,qt,Yt,A.colorSpace,A.isVideoTexture);at(vt,A,Jt);let Ut;const re=A.mipmaps,j=o&&A.isVideoTexture!==!0,St=Gt.__version===void 0||dt===!0,yt=E(A,pt,Jt);if(A.isDepthTexture)Wt=i.DEPTH_COMPONENT,o?A.type===$n?Wt=i.DEPTH_COMPONENT32F:A.type===jn?Wt=i.DEPTH_COMPONENT24:A.type===ui?Wt=i.DEPTH24_STENCIL8:Wt=i.DEPTH_COMPONENT16:A.type===$n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===di&&Wt===i.DEPTH_COMPONENT&&A.type!==va&&A.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=jn,Yt=r.convert(A.type)),A.format===ji&&Wt===i.DEPTH_COMPONENT&&(Wt=i.DEPTH_STENCIL,A.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ui,Yt=r.convert(A.type))),St&&(j?e.texStorage2D(i.TEXTURE_2D,1,Wt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Wt,pt.width,pt.height,0,qt,Yt,null));else if(A.isDataTexture)if(re.length>0&&Jt){j&&St&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],j?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,Wt,Ut.width,Ut.height,0,qt,Yt,Ut.data);A.generateMipmaps=!1}else j?(St&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,pt.width,pt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,qt,Yt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,pt.width,pt.height,0,qt,Yt,pt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Wt,re[0].width,re[0].height,pt.depth);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],A.format!==fn?qt!==null?j?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Wt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Yt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Wt,Ut.width,Ut.height,pt.depth,0,qt,Yt,Ut.data)}else{j&&St&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],A.format!==fn?qt!==null?j?e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Wt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,Wt,Ut.width,Ut.height,0,qt,Yt,Ut.data)}else if(A.isDataArrayTexture)j?(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Wt,pt.width,pt.height,pt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(A.isData3DTexture)j?(St&&e.texStorage3D(i.TEXTURE_3D,yt,Wt,pt.width,pt.height,pt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(A.isFramebufferTexture){if(St)if(j)e.texStorage2D(i.TEXTURE_2D,yt,Wt,pt.width,pt.height);else{let ut=pt.width,wt=pt.height;for(let jt=0;jt<yt;jt++)e.texImage2D(i.TEXTURE_2D,jt,Wt,ut,wt,0,qt,Yt,null),ut>>=1,wt>>=1}}else if(re.length>0&&Jt){j&&St&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],j?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,qt,Yt,Ut):e.texImage2D(i.TEXTURE_2D,ut,Wt,qt,Yt,Ut);A.generateMipmaps=!1}else j?(St&&e.texStorage2D(i.TEXTURE_2D,yt,Wt,pt.width,pt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,Yt,pt)):e.texImage2D(i.TEXTURE_2D,0,Wt,qt,Yt,pt);T(A,Jt)&&C(vt),Gt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ot(L,A,J){if(A.image.length!==6)return;const vt=et(L,A),dt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const xt=n.get(dt);if(dt.version!==xt.__version||vt===!0){e.activeTexture(i.TEXTURE0+J);const Gt=ge.getPrimaries(ge.workingColorSpace),bt=A.colorSpace===an?null:ge.getPrimaries(A.colorSpace),Nt=A.colorSpace===an||Gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const V=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,pt=[];for(let ut=0;ut<6;ut++)!V&&!Et?pt[ut]=x(A.image[ut],!1,!0,u):pt[ut]=Et?A.image[ut].image:A.image[ut],pt[ut]=ie(A,pt[ut]);const Jt=pt[0],qt=y(Jt)||o,Yt=r.convert(A.format,A.colorSpace),Wt=r.convert(A.type),Ut=F(A.internalFormat,Yt,Wt,A.colorSpace),re=o&&A.isVideoTexture!==!0,j=xt.__version===void 0||vt===!0;let St=E(A,Jt,qt);at(i.TEXTURE_CUBE_MAP,A,qt);let yt;if(V){re&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ut,Jt.width,Jt.height);for(let ut=0;ut<6;ut++){yt=pt[ut].mipmaps;for(let wt=0;wt<yt.length;wt++){const jt=yt[wt];A.format!==fn?Yt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,jt.width,jt.height,Yt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,jt.width,jt.height,Yt,Wt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,jt.width,jt.height,0,Yt,Wt,jt.data)}}}else{yt=A.mipmaps,re&&j&&(yt.length>0&&St++,e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ut,pt[0].width,pt[0].height));for(let ut=0;ut<6;ut++)if(Et){re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,pt[ut].width,pt[ut].height,Yt,Wt,pt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,pt[ut].width,pt[ut].height,0,Yt,Wt,pt[ut].data);for(let wt=0;wt<yt.length;wt++){const se=yt[wt].image[ut].image;re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,se.width,se.height,Yt,Wt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,se.width,se.height,0,Yt,Wt,se.data)}}else{re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Yt,Wt,pt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,Yt,Wt,pt[ut]);for(let wt=0;wt<yt.length;wt++){const jt=yt[wt];re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,Yt,Wt,jt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,Yt,Wt,jt.image[ut])}}}T(A,qt)&&C(i.TEXTURE_CUBE_MAP),xt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ht(L,A,J,vt,dt,xt){const Gt=r.convert(J.format,J.colorSpace),bt=r.convert(J.type),Nt=F(J.internalFormat,Gt,bt,J.colorSpace);if(!n.get(A).__hasExternalTextures){const Et=Math.max(1,A.width>>xt),pt=Math.max(1,A.height>>xt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,xt,Nt,Et,pt,A.depth,0,Gt,bt,null):e.texImage2D(dt,xt,Nt,Et,pt,0,Gt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,n.get(J).__webglTexture,0,kt(A)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,n.get(J).__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(L,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let vt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Mt(A)){const dt=A.depthTexture;dt&&dt.isDepthTexture&&(dt.type===$n?vt=i.DEPTH_COMPONENT32F:dt.type===jn&&(vt=i.DEPTH_COMPONENT24));const xt=kt(A);Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,vt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,vt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const vt=kt(A);J&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,A.width,A.height):Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const vt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let dt=0;dt<vt.length;dt++){const xt=vt[dt],Gt=r.convert(xt.format,xt.colorSpace),bt=r.convert(xt.type),Nt=F(xt.internalFormat,Gt,bt,xt.colorSpace),V=kt(A);J&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,V,Nt,A.width,A.height):Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V,Nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const vt=n.get(A.depthTexture).__webglTexture,dt=kt(A);if(A.depthTexture.format===di)Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(A.depthTexture.format===ji)Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ft(L){const A=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Lt(A.__webglFramebuffer,L)}else if(J){A.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[vt]),A.__webglDepthbuffer[vt]=i.createRenderbuffer(),q(A.__webglDepthbuffer[vt],L,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),q(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,A,J){const vt=n.get(L);A!==void 0&&ht(vt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ft(L)}function ct(L){const A=L.texture,J=n.get(L),vt=n.get(A);L.addEventListener("dispose",k),L.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=A.version,a.memory.textures++);const dt=L.isWebGLCubeRenderTarget===!0,xt=L.isWebGLMultipleRenderTargets===!0,Gt=y(L)||o;if(dt){J.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[bt]=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)J.__webglFramebuffer[bt][Nt]=i.createFramebuffer()}else J.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let bt=0;bt<A.mipmaps.length;bt++)J.__webglFramebuffer[bt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(xt)if(s.drawBuffers){const bt=L.texture;for(let Nt=0,V=bt.length;Nt<V;Nt++){const Et=n.get(bt[Nt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Mt(L)===!1){const bt=xt?A:[A];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const V=bt[Nt];J.__webglColorRenderbuffer[Nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Nt]);const Et=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),Jt=F(V.internalFormat,Et,pt,V.colorSpace,L.isXRRenderTarget===!0),qt=kt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Jt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),q(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),at(i.TEXTURE_CUBE_MAP,A,Gt);for(let bt=0;bt<6;bt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ht(J.__webglFramebuffer[bt][Nt],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Nt);else ht(J.__webglFramebuffer[bt],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);T(A,Gt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){const bt=L.texture;for(let Nt=0,V=bt.length;Nt<V;Nt++){const Et=bt[Nt],pt=n.get(Et);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),at(i.TEXTURE_2D,Et,Gt),ht(J.__webglFramebuffer,L,Et,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,0),T(Et,Gt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?bt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(bt,vt.__webglTexture),at(bt,A,Gt),o&&A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ht(J.__webglFramebuffer[Nt],L,A,i.COLOR_ATTACHMENT0,bt,Nt);else ht(J.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,bt,0);T(A,Gt)&&C(bt),e.unbindTexture()}L.depthBuffer&&ft(L)}function Zt(L){const A=y(L)||o,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let vt=0,dt=J.length;vt<dt;vt++){const xt=J[vt];if(T(xt,A)){const Gt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(xt).__webglTexture;e.bindTexture(Gt,bt),C(Gt),e.unbindTexture()}}}function At(L){if(o&&L.samples>0&&Mt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,vt=L.height;let dt=i.COLOR_BUFFER_BIT;const xt=[],Gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(L),Nt=L.isWebGLMultipleRenderTargets===!0;if(Nt)for(let V=0;V<A.length;V++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let V=0;V<A.length;V++){xt.push(i.COLOR_ATTACHMENT0+V),L.depthBuffer&&xt.push(Gt);const Et=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(Et===!1&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Nt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[V]),Et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Gt])),Nt){const pt=n.get(A[V]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,J,vt,0,0,J,vt,dt,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Nt)for(let V=0;V<A.length;V++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,bt.__webglColorRenderbuffer[V]);const Et=n.get(A[V]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function kt(L){return Math.min(l,L.samples)}function Mt(L){const A=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ee(L){const A=a.render.frame;v.get(L)!==A&&(v.set(L,A),L.update())}function ie(L,A){const J=L.colorSpace,vt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===aa||J!==On&&J!==an&&(ge.getTransfer(J)===_e?o===!1?t.has("EXT_sRGB")===!0&&vt===fn?(L.format=aa,L.minFilter=rn,L.generateMipmaps=!1):A=Ll.sRGBToLinear(A):(vt!==fn||dt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=b,this.setTexture3D=U,this.setTextureCube=D,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Mt}function wm(i,t,e){const n=e.isWebGL2;function s(r,a=an){let o;const c=ge.getTransfer(a);if(r===Jn)return i.UNSIGNED_BYTE;if(r===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===qc)return i.BYTE;if(r===Yc)return i.SHORT;if(r===va)return i.UNSIGNED_SHORT;if(r===Sl)return i.INT;if(r===jn)return i.UNSIGNED_INT;if(r===$n)return i.FLOAT;if(r===mr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===jc)return i.ALPHA;if(r===fn)return i.RGBA;if(r===$c)return i.LUMINANCE;if(r===Kc)return i.LUMINANCE_ALPHA;if(r===di)return i.DEPTH_COMPONENT;if(r===ji)return i.DEPTH_STENCIL;if(r===aa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Zc)return i.RED;if(r===Al)return i.RED_INTEGER;if(r===Jc)return i.RG;if(r===Tl)return i.RG_INTEGER;if(r===Rl)return i.RGBA_INTEGER;if(r===xs||r===ys||r===Ms||r===Es)if(c===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ys)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ms)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Es)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ba||r===Oa||r===za||r===Va)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ba)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===za)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ha||r===Ga)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ha)return c===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ga)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ka||r===Wa||r===Xa||r===qa||r===Ya||r===ja||r===$a||r===Ka||r===Za||r===Ja||r===Qa||r===to||r===eo||r===no)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ka)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ya)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ja)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$a)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ka)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Za)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ja)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===to)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eo)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===no)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ss||r===io||r===ro)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ss)return c===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===io)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ro)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===th||r===so||r===ao||r===oo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ss)return o.COMPRESSED_RED_RGTC1_EXT;if(r===so)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ui?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class bm extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ar extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Tm extends $e{constructor(t,e,n,s,r,a,o,c,u,h){if(h=h!==void 0?h:di,h!==di&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=jn),n===void 0&&h===ji&&(n=ui),super(null,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rm extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,d=null,p=null,v=null;const g=e.getContextAttributes();let m=null,f=null;const _=[],x=[],y=new sn;y.layers.enable(1),y.viewport=new Ne;const M=new sn;M.layers.enable(2),M.viewport=new Ne;const T=[y,M],C=new bm;C.layers.enable(1),C.layers.enable(2);let F=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let U=_[b];return U===void 0&&(U=new qs,_[b]=U),U.getTargetRaySpace()},this.getControllerGrip=function(b){let U=_[b];return U===void 0&&(U=new qs,_[b]=U),U.getGripSpace()},this.getHand=function(b){let U=_[b];return U===void 0&&(U=new qs,_[b]=U),U.getHandSpace()};function w(b){const U=x.indexOf(b.inputSource);if(U===-1)return;const D=_[U];D!==void 0&&(D.update(b.inputSource,b.frame,u||a),D.dispatchEvent({type:b.type,data:b.inputSource}))}function P(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",k);for(let b=0;b<_.length;b++){const U=x[b];U!==null&&(x[b]=null,_[b].disconnect(U))}F=null,E=null,t.setRenderTarget(m),p=null,d=null,l=null,s=null,f=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(b){u=b},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(b){if(s=b,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",P),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:p}),f=new vi(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,D=null,I=null;g.depth&&(I=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=g.stencil?ji:di,D=g.stencil?ui:jn);const R={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(R),s.updateRenderState({layers:[d]}),f=new vi(d.textureWidth,d.textureHeight,{format:fn,type:Jn,depthTexture:new Tm(d.textureWidth,d.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const $=t.properties.get(f);$.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(b){for(let U=0;U<b.removed.length;U++){const D=b.removed[U],I=x.indexOf(D);I>=0&&(x[I]=null,_[I].disconnect(D))}for(let U=0;U<b.added.length;U++){const D=b.added[U];let I=x.indexOf(D);if(I===-1){for(let $=0;$<_.length;$++)if($>=x.length){x.push(D),I=$;break}else if(x[$]===null){x[$]=D,I=$;break}if(I===-1)break}const R=_[I];R&&R.connect(D)}}const W=new tt,N=new tt;function H(b,U,D){W.setFromMatrixPosition(U.matrixWorld),N.setFromMatrixPosition(D.matrixWorld);const I=W.distanceTo(N),R=U.projectionMatrix.elements,$=D.projectionMatrix.elements,at=R[14]/(R[10]-1),et=R[14]/(R[10]+1),K=(R[9]+1)/R[5],ot=(R[9]-1)/R[5],ht=(R[8]-1)/R[0],q=($[8]+1)/$[0],Lt=at*ht,ft=at*q,it=I/(-ht+q),ct=it*-ht;U.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ct),b.translateZ(it),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Zt=at+it,At=et+it,kt=Lt-ct,Mt=ft+(I-ct),ee=K*et/At*Zt,ie=ot*et/At*Zt;b.projectionMatrix.makePerspective(kt,Mt,ee,ie,Zt,At),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function nt(b,U){U===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(U.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(s===null)return;C.near=M.near=y.near=b.near,C.far=M.far=y.far=b.far,(F!==C.near||E!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,E=C.far);const U=b.parent,D=C.cameras;nt(C,U);for(let I=0;I<D.length;I++)nt(D[I],U);D.length===2?H(C,y,M):C.projectionMatrix.copy(y.projectionMatrix),B(b,C,U)};function B(b,U,D){D===null?b.matrix.copy(U.matrixWorld):(b.matrix.copy(D.matrixWorld),b.matrix.invert(),b.matrix.multiply(U.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(U.projectionMatrix),b.projectionMatrixInverse.copy(U.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=vr*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(b){c=b,d!==null&&(d.fixedFoveation=b),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=b)};let O=null;function Y(b,U){if(h=U.getViewerPose(u||a),v=U,h!==null){const D=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let I=!1;D.length!==C.cameras.length&&(C.cameras.length=0,I=!0);for(let R=0;R<D.length;R++){const $=D[R];let at=null;if(p!==null)at=p.getViewport($);else{const K=l.getViewSubImage(d,$);at=K.viewport,R===0&&(t.setRenderTargetTextures(f,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(f))}let et=T[R];et===void 0&&(et=new sn,et.layers.enable(R),et.viewport=new Ne,T[R]=et),et.matrix.fromArray($.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray($.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),R===0&&(C.matrix.copy(et.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),I===!0&&C.cameras.push(et)}}for(let D=0;D<_.length;D++){const I=x[D],R=_[D];I!==null&&R!==void 0&&R.update(I,U,u||a)}O&&O(b,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),v=null}const X=new Hl;X.setAnimationLoop(Y),this.setAnimationLoop=function(b){O=b},this.dispose=function(){}}}function Cm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,zl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,_,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pm(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function u(_,x){let y=s[_.id];y===void 0&&(v(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(_,M);const T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){const x=l();_.__bindingPointIndex=x;const y=i.createBuffer(),M=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function l(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=s[_.id],y=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=y.length;T<C;T++){const F=y[T];if(p(F,T,M)===!0){const E=F.__offset,w=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let k=0;k<w.length;k++){const W=w[k],N=g(W);typeof W=="number"?(F.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,E+P,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=W.elements[0],F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=W.elements[0],F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=W.elements[0]):(W.toArray(F.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,F.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,y){const M=_.value;if(y[x]===void 0){if(typeof M=="number")y[x]=M;else{const T=Array.isArray(M)?M:[M],C=[];for(let F=0;F<T.length;F++)C.push(T[F].clone());y[x]=C}return!0}else if(typeof M=="number"){if(y[x]!==M)return y[x]=M,!0}else{const T=Array.isArray(y[x])?y[x]:[y[x]],C=Array.isArray(M)?M:[M];for(let F=0;F<T.length;F++){const E=T[F];if(E.equals(C[F])===!1)return E.copy(C[F]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const M=16;let T=0;for(let C=0,F=x.length;C<F;C++){const E=x[C],w={boundary:0,storage:0},P=Array.isArray(E.value)?E.value:[E.value];for(let k=0,W=P.length;k<W;k++){const N=P[k],H=g(N);w.boundary+=H.boundary,w.storage+=H.storage}if(E.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=y,C>0){T=y%M;const k=M-T;T!==0&&k-w.boundary<0&&(y+=M-T,E.__offset=y)}y+=w.storage}return T=y%M,T>0&&(y+=M-T),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:u,dispose:f}}class Yl{constructor(t={}){const{canvas:e=Th(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const x=this;let y=!1,M=0,T=0,C=null,F=-1,E=null;const w=new Ne,P=new Ne;let k=null;const W=new ce(0);let N=0,H=e.width,nt=e.height,B=1,O=null,Y=null;const X=new Ne(0,0,H,nt),b=new Ne(0,0,H,nt);let U=!1;const D=new Ma;let I=!1,R=!1,$=null;const at=new be,et=new ae,K=new tt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?B:1}let q=n;function Lt(S,G){for(let Z=0;Z<S.length;Z++){const z=S[Z],Q=e.getContext(z,G);if(Q!==null)return Q}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pa}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",St,!1),q===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),q=Lt(G,S),q===null)throw Lt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ft,it,ct,Zt,At,kt,Mt,ee,ie,L,A,J,vt,dt,xt,Gt,bt,Nt,V,Et,pt,Jt,qt,Yt;function Wt(){ft=new Vf(q),it=new Nf(q,ft,t),ft.init(it),Jt=new wm(q,ft,it),ct=new Em(q,ft,it),Zt=new kf(q),At=new lm,kt=new Sm(q,ft,ct,At,it,Jt,Zt),Mt=new Ff(x),ee=new zf(x),ie=new Jh(q,it),qt=new If(q,ft,ie,it),L=new Hf(q,ie,Zt,qt),A=new Yf(q,L,ie,Zt),V=new qf(q,it,kt),Gt=new Uf(At),J=new om(x,Mt,ee,ft,it,qt,Gt),vt=new Cm(x,At),dt=new hm,xt=new vm(ft,it),Nt=new Lf(x,Mt,ee,ct,A,d,c),bt=new Mm(x,A,it),Yt=new Pm(q,Zt,it,ct),Et=new Df(q,ft,Zt,it),pt=new Gf(q,ft,Zt,it),Zt.programs=J.programs,x.capabilities=it,x.extensions=ft,x.properties=At,x.renderLists=dt,x.shadowMap=bt,x.state=ct,x.info=Zt}Wt();const Ut=new Rm(x,q);this.xr=Ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const S=ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(H,nt,!1))},this.getSize=function(S){return S.set(H,nt)},this.setSize=function(S,G,Z=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,nt=G,e.width=Math.floor(S*B),e.height=Math.floor(G*B),Z===!0&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(H*B,nt*B).floor()},this.setDrawingBufferSize=function(S,G,Z){H=S,nt=G,B=Z,e.width=Math.floor(S*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,G,Z,z){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,G,Z,z),ct.viewport(w.copy(X).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(b)},this.setScissor=function(S,G,Z,z){S.isVector4?b.set(S.x,S.y,S.z,S.w):b.set(S,G,Z,z),ct.scissor(P.copy(b).multiplyScalar(B).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(S){ct.setScissorTest(U=S)},this.setOpaqueSort=function(S){O=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,G=!0,Z=!0){let z=0;if(S){let Q=!1;if(C!==null){const _t=C.texture.format;Q=_t===Rl||_t===Tl||_t===Al}if(Q){const _t=C.texture.type,zt=_t===Jn||_t===jn||_t===va||_t===ui||_t===wl||_t===bl,It=Nt.getClearColor(),Ot=Nt.getClearAlpha(),Ct=It.r,Qt=It.g,te=It.b;zt?(p[0]=Ct,p[1]=Qt,p[2]=te,p[3]=Ot,q.clearBufferuiv(q.COLOR,0,p)):(v[0]=Ct,v[1]=Qt,v[2]=te,v[3]=Ot,q.clearBufferiv(q.COLOR,0,v))}else z|=q.COLOR_BUFFER_BIT}G&&(z|=q.DEPTH_BUFFER_BIT),Z&&(z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",St,!1),dt.dispose(),xt.dispose(),At.dispose(),Mt.dispose(),ee.dispose(),A.dispose(),qt.dispose(),Yt.dispose(),J.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",lt),Ut.removeEventListener("sessionend",st),$&&($.dispose(),$=null),mt.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Zt.autoReset,G=bt.enabled,Z=bt.autoUpdate,z=bt.needsUpdate,Q=bt.type;Wt(),Zt.autoReset=S,bt.enabled=G,bt.autoUpdate=Z,bt.needsUpdate=z,bt.type=Q}function St(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function yt(S){const G=S.target;G.removeEventListener("dispose",yt),ut(G)}function ut(S){wt(S),At.remove(S)}function wt(S){const G=At.get(S).programs;G!==void 0&&(G.forEach(function(Z){J.releaseProgram(Z)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,Z,z,Q,_t){G===null&&(G=ot);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Xt(S,G,Z,z,Q);ct.setMaterial(z,zt);let Ot=Z.index,Ct=1;if(z.wireframe===!0){if(Ot=L.getWireframeAttribute(Z),Ot===void 0)return;Ct=2}const Qt=Z.drawRange,te=Z.attributes.position;let de=Qt.start*Ct,Me=(Qt.start+Qt.count)*Ct;_t!==null&&(de=Math.max(de,_t.start*Ct),Me=Math.min(Me,(_t.start+_t.count)*Ct)),Ot!==null?(de=Math.max(de,0),Me=Math.min(Me,Ot.count)):te!=null&&(de=Math.max(de,0),Me=Math.min(Me,te.count));const pe=Me-de;if(pe<0||pe===1/0)return;qt.setup(Q,z,It,Z,Ot);let ue,me=Et;if(Ot!==null&&(ue=ie.get(Ot),me=pt,me.setIndex(ue)),Q.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*ht()),me.setMode(q.LINES)):me.setMode(q.TRIANGLES);else if(Q.isLine){let $t=z.linewidth;$t===void 0&&($t=1),ct.setLineWidth($t*ht()),Q.isLineSegments?me.setMode(q.LINES):Q.isLineLoop?me.setMode(q.LINE_LOOP):me.setMode(q.LINE_STRIP)}else Q.isPoints?me.setMode(q.POINTS):Q.isSprite&&me.setMode(q.TRIANGLES);if(Q.isInstancedMesh)me.renderInstances(de,pe,Q.count);else if(Z.isInstancedBufferGeometry){const $t=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ke=Math.min(Z.instanceCount,$t);me.renderInstances(de,pe,Ke)}else me.render(de,pe)};function jt(S,G,Z){S.transparent===!0&&S.side===Ln&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,rt(S,G,Z),S.side=ti,S.needsUpdate=!0,rt(S,G,Z),S.side=Ln):rt(S,G,Z)}this.compile=function(S,G,Z=null){Z===null&&(Z=S),m=xt.get(Z),m.init(),_.push(m),Z.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),S!==Z&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(x._useLegacyLights);const z=new Set;return S.traverse(function(Q){const _t=Q.material;if(_t)if(Array.isArray(_t))for(let zt=0;zt<_t.length;zt++){const It=_t[zt];jt(It,Z,Q),z.add(It)}else jt(_t,Z,Q),z.add(_t)}),_.pop(),m=null,z},this.compileAsync=function(S,G,Z=null){const z=this.compile(S,G,Z);return new Promise(Q=>{function _t(){if(z.forEach(function(zt){At.get(zt).currentProgram.isReady()&&z.delete(zt)}),z.size===0){Q(S);return}setTimeout(_t,10)}ft.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let se=null;function le(S){se&&se(S)}function lt(){mt.stop()}function st(){mt.start()}const mt=new Hl;mt.setAnimationLoop(le),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(S){se=S,Ut.setAnimationLoop(S),S===null?mt.stop():mt.start()},Ut.addEventListener("sessionstart",lt),Ut.addEventListener("sessionend",st),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(G),G=Ut.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,G,C),m=xt.get(S,_.length),m.init(),_.push(m),at.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),D.setFromProjectionMatrix(at),R=this.localClippingEnabled,I=Gt.init(this.clippingPlanes,R),g=dt.get(S,f.length),g.init(),f.push(g),gt(S,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(O,Y),this.info.render.frame++,I===!0&&Gt.beginShadows();const Z=m.state.shadowsArray;if(bt.render(Z,S,G),I===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Nt.render(g,S),m.setupLights(x._useLegacyLights),G.isArrayCamera){const z=G.cameras;for(let Q=0,_t=z.length;Q<_t;Q++){const zt=z[Q];ne(g,S,zt,zt.viewport)}}else ne(g,S,G);C!==null&&(kt.updateMultisampleRenderTarget(C),kt.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,G),qt.resetDefaultState(),F=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function gt(S,G,Z,z){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){z&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const zt=A.update(S),It=S.material;It.visible&&g.push(S,zt,It,Z,K.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||D.intersectsObject(S))){const zt=A.update(S),It=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),K.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),K.copy(zt.boundingSphere.center)),K.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(It)){const Ot=zt.groups;for(let Ct=0,Qt=Ot.length;Ct<Qt;Ct++){const te=Ot[Ct],de=It[te.materialIndex];de&&de.visible&&g.push(S,zt,de,Z,K.z,te)}}else It.visible&&g.push(S,zt,It,Z,K.z,null)}}const _t=S.children;for(let zt=0,It=_t.length;zt<It;zt++)gt(_t[zt],G,Z,z)}function ne(S,G,Z,z){const Q=S.opaque,_t=S.transmissive,zt=S.transparent;m.setupLightsView(Z),I===!0&&Gt.setGlobalState(x.clippingPlanes,Z),_t.length>0&&Vt(Q,_t,G,Z),z&&ct.viewport(w.copy(z)),Q.length>0&&Tt(Q,G,Z),_t.length>0&&Tt(_t,G,Z),zt.length>0&&Tt(zt,G,Z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Vt(S,G,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const _t=it.isWebGL2;$===null&&($=new vi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?mr:Jn,minFilter:pr,samples:_t?4:0})),x.getDrawingBufferSize(et),_t?$.setSize(et.x,et.y):$.setSize(as(et.x),as(et.y));const zt=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(W),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const It=x.toneMapping;x.toneMapping=Zn,Tt(S,Z,z),kt.updateMultisampleRenderTarget($),kt.updateRenderTargetMipmap($);let Ot=!1;for(let Ct=0,Qt=G.length;Ct<Qt;Ct++){const te=G[Ct],de=te.object,Me=te.geometry,pe=te.material,ue=te.group;if(pe.side===Ln&&de.layers.test(z.layers)){const me=pe.side;pe.side=je,pe.needsUpdate=!0,Ft(de,Z,z,Me,pe,ue),pe.side=me,pe.needsUpdate=!0,Ot=!0}}Ot===!0&&(kt.updateMultisampleRenderTarget($),kt.updateRenderTargetMipmap($)),x.setRenderTarget(zt),x.setClearColor(W,N),x.toneMapping=It}function Tt(S,G,Z){const z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,_t=S.length;Q<_t;Q++){const zt=S[Q],It=zt.object,Ot=zt.geometry,Ct=z===null?zt.material:z,Qt=zt.group;It.layers.test(Z.layers)&&Ft(It,G,Z,Ot,Ct,Qt)}}function Ft(S,G,Z,z,Q,_t){S.onBeforeRender(x,G,Z,z,Q,_t),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(x,G,Z,z,S,_t),Q.transparent===!0&&Q.side===Ln&&Q.forceSinglePass===!1?(Q.side=je,Q.needsUpdate=!0,x.renderBufferDirect(Z,G,z,Q,S,_t),Q.side=ti,Q.needsUpdate=!0,x.renderBufferDirect(Z,G,z,Q,S,_t),Q.side=Ln):x.renderBufferDirect(Z,G,z,Q,S,_t),S.onAfterRender(x,G,Z,z,Q,_t)}function rt(S,G,Z){G.isScene!==!0&&(G=ot);const z=At.get(S),Q=m.state.lights,_t=m.state.shadowsArray,zt=Q.state.version,It=J.getParameters(S,Q.state,_t,G,Z),Ot=J.getProgramCacheKey(It);let Ct=z.programs;z.environment=S.isMeshStandardMaterial?G.environment:null,z.fog=G.fog,z.envMap=(S.isMeshStandardMaterial?ee:Mt).get(S.envMap||z.environment),Ct===void 0&&(S.addEventListener("dispose",yt),Ct=new Map,z.programs=Ct);let Qt=Ct.get(Ot);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===zt)return Bt(S,It),Qt}else It.uniforms=J.getUniforms(S),S.onBuild(Z,It,x),S.onBeforeCompile(It,x),Qt=J.acquireProgram(It,Ot),Ct.set(Ot,Qt),z.uniforms=It.uniforms;const te=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(te.clippingPlanes=Gt.uniform),Bt(S,It),z.needsLights=Rt(S),z.lightsStateVersion=zt,z.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),z.currentProgram=Qt,z.uniformsList=null,Qt}function Pt(S){if(S.uniformsList===null){const G=S.currentProgram.getUniforms();S.uniformsList=Qr.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Bt(S,G){const Z=At.get(S);Z.outputColorSpace=G.outputColorSpace,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Xt(S,G,Z,z,Q){G.isScene!==!0&&(G=ot),kt.resetTextureUnits();const _t=G.fog,zt=z.isMeshStandardMaterial?G.environment:null,It=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:On,Ot=(z.isMeshStandardMaterial?ee:Mt).get(z.envMap||zt),Ct=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qt=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),te=!!Z.morphAttributes.position,de=!!Z.morphAttributes.normal,Me=!!Z.morphAttributes.color;let pe=Zn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=x.toneMapping);const ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,me=ue!==void 0?ue.length:0,$t=At.get(z),Ke=m.state.lights;if(I===!0&&(R===!0||S!==E)){const we=S===E&&z.id===F;Gt.setState(z,S,we)}let fe=!1;z.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ke.state.version||$t.outputColorSpace!==It||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||$t.envMap!==Ot||z.fog===!0&&$t.fog!==_t||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Gt.numPlanes||$t.numIntersection!==Gt.numIntersection)||$t.vertexAlphas!==Ct||$t.vertexTangents!==Qt||$t.morphTargets!==te||$t.morphNormals!==de||$t.morphColors!==Me||$t.toneMapping!==pe||it.isWebGL2===!0&&$t.morphTargetsCount!==me)&&(fe=!0):(fe=!0,$t.__version=z.version);let xe=$t.currentProgram;fe===!0&&(xe=rt(z,G,Q));let Ae=!1,Le=!1,Ze=!1;const Kt=xe.getUniforms(),Se=$t.uniforms;if(ct.useProgram(xe.program)&&(Ae=!0,Le=!0,Ze=!0),z.id!==F&&(F=z.id,Le=!0),Ae||E!==S){Kt.setValue(q,"projectionMatrix",S.projectionMatrix),Kt.setValue(q,"viewMatrix",S.matrixWorldInverse);const we=Kt.map.cameraPosition;we!==void 0&&we.setValue(q,K.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&Kt.setValue(q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Kt.setValue(q,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Le=!0,Ze=!0)}if(Q.isSkinnedMesh){Kt.setOptional(q,Q,"bindMatrix"),Kt.setOptional(q,Q,"bindMatrixInverse");const we=Q.skeleton;we&&(it.floatVertexTextures?(we.boneTexture===null&&we.computeBoneTexture(),Kt.setValue(q,"boneTexture",we.boneTexture,kt),Kt.setValue(q,"boneTextureSize",we.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ee=Z.morphAttributes;if((Ee.position!==void 0||Ee.normal!==void 0||Ee.color!==void 0&&it.isWebGL2===!0)&&V.update(Q,Z,xe),(Le||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,Kt.setValue(q,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Se.envMap.value=Ot,Se.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Le&&(Kt.setValue(q,"toneMappingExposure",x.toneMappingExposure),$t.needsLights&&Dt(Se,Ze),_t&&z.fog===!0&&vt.refreshFogUniforms(Se,_t),vt.refreshMaterialUniforms(Se,z,B,nt,$),Qr.upload(q,Pt($t),Se,kt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Qr.upload(q,Pt($t),Se,kt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Kt.setValue(q,"center",Q.center),Kt.setValue(q,"modelViewMatrix",Q.modelViewMatrix),Kt.setValue(q,"normalMatrix",Q.normalMatrix),Kt.setValue(q,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const we=z.uniformsGroups;for(let on=0,gs=we.length;on<gs;on++)if(it.isWebGL2){const wr=we[on];Yt.update(wr,xe),Yt.bind(wr,xe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xe}function Dt(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,G,Z){At.get(S.texture).__webglTexture=G,At.get(S.depthTexture).__webglTexture=Z;const z=At.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const Z=At.get(S);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,Z=0){C=S,M=G,T=Z;let z=!0,Q=null,_t=!1,zt=!1;if(S){const Ot=At.get(S);Ot.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(q.FRAMEBUFFER,null),z=!1):Ot.__webglFramebuffer===void 0?kt.setupRenderTarget(S):Ot.__hasExternalTextures&&kt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(zt=!0);const Qt=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qt[G])?Q=Qt[G][Z]:Q=Qt[G],_t=!0):it.isWebGL2&&S.samples>0&&kt.useMultisampledRTT(S)===!1?Q=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[Z]:Q=Qt,w.copy(S.viewport),P.copy(S.scissor),k=S.scissorTest}else w.copy(X).multiplyScalar(B).floor(),P.copy(b).multiplyScalar(B).floor(),k=U;if(ct.bindFramebuffer(q.FRAMEBUFFER,Q)&&it.drawBuffers&&z&&ct.drawBuffers(S,Q),ct.viewport(w),ct.scissor(P),ct.setScissorTest(k),_t){const Ot=At.get(S.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,Z)}else if(zt){const Ot=At.get(S.texture),Ct=G||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,Ct)}F=-1},this.readRenderTargetPixels=function(S,G,Z,z,Q,_t,zt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){ct.bindFramebuffer(q.FRAMEBUFFER,It);try{const Ot=S.texture,Ct=Ot.format,Qt=Ot.type;if(Ct!==fn&&Jt.convert(Ct)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=Qt===mr&&(ft.has("EXT_color_buffer_half_float")||it.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Qt!==Jn&&Jt.convert(Qt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===$n&&(it.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-z&&Z>=0&&Z<=S.height-Q&&q.readPixels(G,Z,z,Q,Jt.convert(Ct),Jt.convert(Qt),_t)}finally{const Ot=C!==null?At.get(C).__webglFramebuffer:null;ct.bindFramebuffer(q.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(S,G,Z=0){const z=Math.pow(2,-Z),Q=Math.floor(G.image.width*z),_t=Math.floor(G.image.height*z);kt.setTexture2D(G,0),q.copyTexSubImage2D(q.TEXTURE_2D,Z,0,0,S.x,S.y,Q,_t),ct.unbindTexture()},this.copyTextureToTexture=function(S,G,Z,z=0){const Q=G.image.width,_t=G.image.height,zt=Jt.convert(Z.format),It=Jt.convert(Z.type);kt.setTexture2D(Z,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,z,S.x,S.y,Q,_t,zt,It,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,z,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,zt,G.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,z,S.x,S.y,zt,It,G.image),z===0&&Z.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,G,Z,z,Q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=S.max.x-S.min.x+1,zt=S.max.y-S.min.y+1,It=S.max.z-S.min.z+1,Ot=Jt.convert(z.format),Ct=Jt.convert(z.type);let Qt;if(z.isData3DTexture)kt.setTexture3D(z,0),Qt=q.TEXTURE_3D;else if(z.isDataArrayTexture)kt.setTexture2DArray(z,0),Qt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,z.unpackAlignment);const te=q.getParameter(q.UNPACK_ROW_LENGTH),de=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Me=q.getParameter(q.UNPACK_SKIP_PIXELS),pe=q.getParameter(q.UNPACK_SKIP_ROWS),ue=q.getParameter(q.UNPACK_SKIP_IMAGES),me=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,me.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,S.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,S.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,S.min.z),Z.isDataTexture||Z.isData3DTexture?q.texSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,Ct,me.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,me.data)):q.texSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,Ct,me),q.pixelStorei(q.UNPACK_ROW_LENGTH,te),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,de),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Me),q.pixelStorei(q.UNPACK_SKIP_ROWS,pe),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ue),Q===0&&z.generateMipmaps&&q.generateMipmap(Qt),ct.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?kt.setTextureCube(S,0):S.isData3DTexture?kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?kt.setTexture2DArray(S,0):kt.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){M=0,T=0,C=null,ct.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===_a?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===hs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?fi:Cl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===fi?De:On}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Lm extends Yl{}Lm.prototype.isWebGL1Renderer=!0;class wa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(t),this.near=e,this.far=n}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Im extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ur extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zo=new tt,Jo=new tt,Qo=new be,Ys=new us,Yr=new Er;class Dm extends Ue{constructor(t=new tn,e=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Qo.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(Qo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new tt,h=new tt,l=new tt,d=new tt,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const f=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let x=f,y=_-1;x<y;x+=p){const M=v.getX(x),T=v.getX(x+1);if(u.fromBufferAttribute(m,M),h.fromBufferAttribute(m,T),Ys.distanceSqToSegment(u,h,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=f,y=_-1;x<y;x+=p){if(u.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Ys.distanceSqToSegment(u,h,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const tl=new tt,el=new tt;class ca extends Dm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)tl.fromBufferAttribute(e,s),el.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tl.distanceTo(el);t.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class or extends xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nl=new be,ha=new us,jr=new Er,$r=new tt;class js extends Ue{constructor(t=new tn,e=new or){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;nl.copy(s).invert(),ha.copy(t.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=d,g=p;v<g;v++){const m=u.getX(v);$r.fromBufferAttribute(l,m),il($r,m,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let v=d,g=p;v<g;v++)$r.fromBufferAttribute(l,v),il($r,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function il(i,t,e,n,s,r,a){const o=ha.distanceSqToPoint(i);if(o<e){const c=new tt;ha.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class ps extends tn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],l=new tt,d=new tt,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){const T=M/e;l.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),l.y=t*Math.cos(a+x*o),l.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),v.push(l.x,l.y,l.z),d.copy(l).normalize(),g.push(d.x,d.y,d.z),m.push(T+y,1-x),_.push(u++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=h[f][_+1],y=h[f][_],M=h[f+1][_],T=h[f+1][_+1];(f!==0||a>0)&&p.push(x,y,T),(f!==n-1||c<Math.PI)&&p.push(y,M,T)}this.setIndex(p),this.setAttribute("position",new Re(v,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fn extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nm extends xn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const os={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Um{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const p=u[l],v=u[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Fm=new Um;class Qi{constructor(t){this.manager=t!==void 0?t:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Bm extends Error{constructor(t,e){super(t),this.response=e}}class Om extends Qi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=os.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:n,onError:s});return}An[t]=[],An[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=An[t],l=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=d?parseInt(d):0,v=p!==0;let g=0;const m=new ReadableStream({start(f){_();function _(){l.read().then(({done:x,value:y})=>{if(x)f.close();else{g+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let T=0,C=h.length;T<C;T++){const F=h[T];F.onProgress&&F.onProgress(M)}f.enqueue(y),_()}})}}});return new Response(m)}else throw new Bm(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return u.json();default:if(o===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{os.add(t,u);const h=An[t];delete An[t];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=An[t];if(h===void 0)throw this.manager.itemError(t),u;delete An[t];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class jl extends Qi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=os.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=gr("img");function c(){h(),os.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class zm extends Qi{constructor(t){super(t)}load(t,e,n,s){const r=new ya;r.colorSpace=De;const a=new jl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(u){a.load(t[u],function(h){r.images[u]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let u=0;u<t.length;++u)c(u);return r}}class $l extends Qi{constructor(t){super(t)}load(t,e,n,s){const r=new $e,a=new jl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Kl extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const $s=new be,rl=new tt,sl=new tt;class Vm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(rl),sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sl),e.updateMatrixWorld(),$s.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($s)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hm extends Vm{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends Kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Hm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class km extends Kl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function al(){return(typeof performance>"u"?Date:performance).now()}class ol{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Xm extends ca{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new tn;s.setAttribute("position",new Re(e,3)),s.setAttribute("color",new Re(n,3));const r=new ur({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new ce,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pa);const ll={type:"change"},Ks={type:"start"},cl={type:"end"},Kr=new us,hl=new qn,qm=Math.cos(70*Ah.DEG2RAD);class Ym extends Mi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",A),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ll),n.update(),r=s.NONE},this.update=function(){const V=new tt,Et=new gi().setFromUnitVectors(t.up,new tt(0,1,0)),pt=Et.clone().invert(),Jt=new tt,qt=new gi,Yt=new tt,Wt=2*Math.PI;return function(re=null){const j=n.object.position;V.copy(j).sub(n.target),V.applyQuaternion(Et),o.setFromVector3(V),n.autoRotate&&r===s.NONE&&P(E(re)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let St=n.minAzimuthAngle,yt=n.maxAzimuthAngle;isFinite(St)&&isFinite(yt)&&(St<-Math.PI?St+=Wt:St>Math.PI&&(St-=Wt),yt<-Math.PI?yt+=Wt:yt>Math.PI&&(yt-=Wt),St<=yt?o.theta=Math.max(St,Math.min(yt,o.theta)):o.theta=o.theta>(St+yt)/2?Math.max(St,o.theta):Math.min(yt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*u),V.setFromSpherical(o),V.applyQuaternion(pt),j.copy(n.target).add(V),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ut=!1;if(n.zoomToCursor&&T){let wt=null;if(n.object.isPerspectiveCamera){const jt=V.length();wt=Y(jt*u);const se=jt-wt;n.object.position.addScaledVector(y,se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const jt=new tt(M.x,M.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ut=!0;const se=new tt(M.x,M.y,0);se.unproject(n.object),n.object.position.sub(se).add(jt),n.object.updateMatrixWorld(),wt=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(Kr.origin.copy(n.object.position),Kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Kr.direction))<qm?t.lookAt(n.target):(hl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Kr.intersectPlane(hl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ut=!0);return u=1,T=!1,ut||Jt.distanceToSquared(n.object.position)>a||8*(1-qt.dot(n.object.quaternion))>a||Yt.distanceToSquared(n.target)>0?(n.dispatchEvent(ll),Jt.copy(n.object.position),qt.copy(n.object.quaternion),Yt.copy(n.target),ut=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",dt),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",Mt),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",kt),n.domElement.removeEventListener("pointerup",Mt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new ol,c=new ol;let u=1;const h=new tt,l=new ae,d=new ae,p=new ae,v=new ae,g=new ae,m=new ae,f=new ae,_=new ae,x=new ae,y=new tt,M=new ae;let T=!1;const C=[],F={};function E(V){return V!==null?2*Math.PI/60*n.autoRotateSpeed*V:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function P(V){c.theta-=V}function k(V){c.phi-=V}const W=function(){const V=new tt;return function(pt,Jt){V.setFromMatrixColumn(Jt,0),V.multiplyScalar(-pt),h.add(V)}}(),N=function(){const V=new tt;return function(pt,Jt){n.screenSpacePanning===!0?V.setFromMatrixColumn(Jt,1):(V.setFromMatrixColumn(Jt,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(pt),h.add(V)}}(),H=function(){const V=new tt;return function(pt,Jt){const qt=n.domElement;if(n.object.isPerspectiveCamera){const Yt=n.object.position;V.copy(Yt).sub(n.target);let Wt=V.length();Wt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*pt*Wt/qt.clientHeight,n.object.matrix),N(2*Jt*Wt/qt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(pt*(n.object.right-n.object.left)/n.object.zoom/qt.clientWidth,n.object.matrix),N(Jt*(n.object.top-n.object.bottom)/n.object.zoom/qt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function nt(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(V){if(!n.zoomToCursor)return;T=!0;const Et=n.domElement.getBoundingClientRect(),pt=V.clientX-Et.left,Jt=V.clientY-Et.top,qt=Et.width,Yt=Et.height;M.x=pt/qt*2-1,M.y=-(Jt/Yt)*2+1,y.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function X(V){l.set(V.clientX,V.clientY)}function b(V){O(V),f.set(V.clientX,V.clientY)}function U(V){v.set(V.clientX,V.clientY)}function D(V){d.set(V.clientX,V.clientY),p.subVectors(d,l).multiplyScalar(n.rotateSpeed);const Et=n.domElement;P(2*Math.PI*p.x/Et.clientHeight),k(2*Math.PI*p.y/Et.clientHeight),l.copy(d),n.update()}function I(V){_.set(V.clientX,V.clientY),x.subVectors(_,f),x.y>0?nt(w()):x.y<0&&B(w()),f.copy(_),n.update()}function R(V){g.set(V.clientX,V.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),H(m.x,m.y),v.copy(g),n.update()}function $(V){O(V),V.deltaY<0?B(w()):V.deltaY>0&&nt(w()),n.update()}function at(V){let Et=!1;switch(V.code){case n.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),Et=!0;break;case n.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),Et=!0;break;case n.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),Et=!0;break;case n.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),Et=!0;break}Et&&(V.preventDefault(),n.update())}function et(){if(C.length===1)l.set(C[0].pageX,C[0].pageY);else{const V=.5*(C[0].pageX+C[1].pageX),Et=.5*(C[0].pageY+C[1].pageY);l.set(V,Et)}}function K(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const V=.5*(C[0].pageX+C[1].pageX),Et=.5*(C[0].pageY+C[1].pageY);v.set(V,Et)}}function ot(){const V=C[0].pageX-C[1].pageX,Et=C[0].pageY-C[1].pageY,pt=Math.sqrt(V*V+Et*Et);f.set(0,pt)}function ht(){n.enableZoom&&ot(),n.enablePan&&K()}function q(){n.enableZoom&&ot(),n.enableRotate&&et()}function Lt(V){if(C.length==1)d.set(V.pageX,V.pageY);else{const pt=Nt(V),Jt=.5*(V.pageX+pt.x),qt=.5*(V.pageY+pt.y);d.set(Jt,qt)}p.subVectors(d,l).multiplyScalar(n.rotateSpeed);const Et=n.domElement;P(2*Math.PI*p.x/Et.clientHeight),k(2*Math.PI*p.y/Et.clientHeight),l.copy(d)}function ft(V){if(C.length===1)g.set(V.pageX,V.pageY);else{const Et=Nt(V),pt=.5*(V.pageX+Et.x),Jt=.5*(V.pageY+Et.y);g.set(pt,Jt)}m.subVectors(g,v).multiplyScalar(n.panSpeed),H(m.x,m.y),v.copy(g)}function it(V){const Et=Nt(V),pt=V.pageX-Et.x,Jt=V.pageY-Et.y,qt=Math.sqrt(pt*pt+Jt*Jt);_.set(0,qt),x.set(0,Math.pow(_.y/f.y,n.zoomSpeed)),nt(x.y),f.copy(_)}function ct(V){n.enableZoom&&it(V),n.enablePan&&ft(V)}function Zt(V){n.enableZoom&&it(V),n.enableRotate&&Lt(V)}function At(V){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",kt),n.domElement.addEventListener("pointerup",Mt)),xt(V),V.pointerType==="touch"?J(V):ee(V))}function kt(V){n.enabled!==!1&&(V.pointerType==="touch"?vt(V):ie(V))}function Mt(V){Gt(V),C.length===0&&(n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",kt),n.domElement.removeEventListener("pointerup",Mt)),n.dispatchEvent(cl),r=s.NONE}function ee(V){let Et;switch(V.button){case 0:Et=n.mouseButtons.LEFT;break;case 1:Et=n.mouseButtons.MIDDLE;break;case 2:Et=n.mouseButtons.RIGHT;break;default:Et=-1}switch(Et){case Ei.DOLLY:if(n.enableZoom===!1)return;b(V),r=s.DOLLY;break;case Ei.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;U(V),r=s.PAN}else{if(n.enableRotate===!1)return;X(V),r=s.ROTATE}break;case Ei.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;X(V),r=s.ROTATE}else{if(n.enablePan===!1)return;U(V),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ks)}function ie(V){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;D(V);break;case s.DOLLY:if(n.enableZoom===!1)return;I(V);break;case s.PAN:if(n.enablePan===!1)return;R(V);break}}function L(V){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(V.preventDefault(),n.dispatchEvent(Ks),$(V),n.dispatchEvent(cl))}function A(V){n.enabled===!1||n.enablePan===!1||at(V)}function J(V){switch(bt(V),C.length){case 1:switch(n.touches.ONE){case Si.ROTATE:if(n.enableRotate===!1)return;et(),r=s.TOUCH_ROTATE;break;case Si.PAN:if(n.enablePan===!1)return;K(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(),r=s.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ks)}function vt(V){switch(bt(V),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(V),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ft(V),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(V),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Zt(V),n.update();break;default:r=s.NONE}}function dt(V){n.enabled!==!1&&V.preventDefault()}function xt(V){C.push(V)}function Gt(V){delete F[V.pointerId];for(let Et=0;Et<C.length;Et++)if(C[Et].pointerId==V.pointerId){C.splice(Et,1);return}}function bt(V){let Et=F[V.pointerId];Et===void 0&&(Et=new ae,F[V.pointerId]=Et),Et.set(V.pageX,V.pageY)}function Nt(V){const Et=V.pointerId===C[0].pointerId?C[1]:C[0];return F[Et.pointerId]}n.domElement.addEventListener("contextmenu",dt),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",Mt),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class gn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),gn.nextNameID=gn.nextNameID||0,this.$name.id=`lil-gui-name-${++gn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class jm extends gn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ua(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const $m={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ua,toHexString:ua},_r={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Km={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=_r.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return _r.toHexString(s)}},Zm={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=_r.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return _r.toHexString(s)}},Jm=[$m,_r,Km,Zm];function Qm(i){return Jm.find(t=>t.match(i))}class tv extends gn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Qm(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ua(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Zs extends gn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ev extends gn{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let a=!1,o,c,u,h,l;const d=5,p=_=>{o=_.clientX,c=u=_.clientY,a=!0,h=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(a){const x=_.clientX-o,y=_.clientY-c;Math.abs(y)>d?(_.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!a){const x=_.clientY-u;l-=x*this._step*this._arrowKeyMultiplier(_),h+l>this._max?l=this._max-h:h+l<this._min&&(l=this._min-h),this._snapClampSetValue(h+l)}u=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,_,x,y,M)=>(f-_)/(x-_)*(M-y)+y,e=f=>{const _=this.$slider.getBoundingClientRect();let x=t(f,_.left,_.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,c;const u=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,c=f.touches[0].clientY,a=!0):u(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d))},l=f=>{if(a){const _=f.touches[0].clientX-o,x=f.touches[0].clientY-c;Math.abs(_)>Math.abs(x)?u(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),v=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class nv extends gn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class iv extends gn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const rv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function sv(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ul=!1;class ba{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!ul&&o&&(sv(rv),ul=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,n,s,r){if(Object(n)===n)return new nv(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new ev(this,t,e,n,s,r);case"boolean":return new jm(this,t,e);case"string":return new iv(this,t,e);case"function":return new Zs(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new tv(this,t,e,n)}addFolder(t){const e=new ba({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Zs||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Zs)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const av=ba;function ov(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Zr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Zl={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,h){if(!s[u]){if(!n[u]){var l=typeof Zr=="function"&&Zr;if(!h&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=s[u]={exports:{}};n[u][0].call(d.exports,function(p){var v=n[u][1][p];return a(v||p)},d,d.exports,e,n,s,r)}return s[u].exports}for(var o=typeof Zr=="function"&&Zr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,h,l,d){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(u[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<u.length;m++){var f=u[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),d&&(p.x-=d,p.y-=d,p.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(u){var h=this.lowerBound,l=this.upperBound,d=u.lowerBound,p=u.upperBound;return(d.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(d.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(d.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},a.prototype.contains=function(u){var h=this.lowerBound,l=this.upperBound,d=u.lowerBound,p=u.upperBound;return h.x<=d.x&&l.x>=p.x&&h.y<=d.y&&l.y>=p.y&&h.z<=d.z&&l.z>=p.z},a.prototype.getCorners=function(u,h,l,d,p,v,g,m){var f=this.lowerBound,_=this.upperBound;u.copy(f),h.set(_.x,f.y,f.z),l.set(_.x,_.y,f.z),d.set(f.x,_.y,_.z),p.set(_.x,f.y,f.z),v.set(f.x,_.y,f.z),g.set(f.x,f.y,_.z),m.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,h){var l=c,d=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(d,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var M=l[y];u.pointToLocal(M,M)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(u,h){var l=c,d=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(d,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var M=l[y];u.pointToWorld(M,M)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,_):this.doBoundingSphereBroadphase(g,m,f,_)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,f,_){var x=h;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),M=x.norm2();M<y&&(f.push(g),_.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),_.push(m))};var l={keys:[]},d=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,_=d,x=p,y=g.length,M=0;M!==y;M++)_[M]=g[M],x[M]=m[M];g.length=0,m.length=0;for(var M=0;M!==y;M++){var T=_[M].id,C=x[M].id,F=T<C?T+","+C:C+","+T;f[F]=M,f.keys.push(F)}for(var M=0;M!==f.keys.length;M++){var F=f.keys.pop(),E=f[F];g.push(_[E]),m.push(x[E]),delete f[F]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,d,p,v){r.apply(this),this.nx=d||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var u=new a;new a,c.prototype.collisionPairs=function(h,l,d){var p=h.numObjects(),v=h.bodies,at=this.aabbMax,$=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,_=m*f,x=f,y=1,M=at.x,T=at.y,C=at.z,F=$.x,E=$.y,w=$.z,P=g/(M-F),k=m/(T-E),W=f/(C-w),N=(M-F)/g,H=(T-E)/m,nt=(C-w)/f,B=Math.sqrt(N*N+H*H+nt*nt)*.5,O=o.types,Y=O.SPHERE,X=O.PLANE;O.BOX,O.COMPOUND,O.CONVEXPOLYHEDRON;for(var b=this.bins,U=this.binLengths,D=this.bins.length,I=0;I!==D;I++)U[I]=0;var R=Math.ceil,$=Math.min,at=Math.max;function et(bt,Nt,V,Et,pt,Jt,qt){var Yt=(bt-F)*P|0,Wt=(Nt-E)*k|0,Ut=(V-w)*W|0,re=R((Et-F)*P),j=R((pt-E)*k),St=R((Jt-w)*W);Yt<0?Yt=0:Yt>=g&&(Yt=g-1),Wt<0?Wt=0:Wt>=m&&(Wt=m-1),Ut<0?Ut=0:Ut>=f&&(Ut=f-1),re<0?re=0:re>=g&&(re=g-1),j<0?j=0:j>=m&&(j=m-1),St<0?St=0:St>=f&&(St=f-1),Yt*=_,Wt*=x,Ut*=y,re*=_,j*=x,St*=y;for(var yt=Yt;yt<=re;yt+=_)for(var ut=Wt;ut<=j;ut+=x)for(var wt=Ut;wt<=St;wt+=y){var jt=yt+ut+wt;b[jt][U[jt]++]=qt}}for(var I=0;I!==p;I++){var K=v[I],ot=K.shape;switch(ot.type){case Y:var ht=K.position.x,q=K.position.y,Lt=K.position.z,ft=ot.radius;et(ht-ft,q-ft,Lt-ft,ht+ft,q+ft,Lt+ft,K);break;case X:ot.worldNormalNeedsUpdate&&ot.computeWorldNormal(K.quaternion);var it=ot.worldNormal,ct=F+N*.5-K.position.x,Zt=E+H*.5-K.position.y,At=w+nt*.5-K.position.z,kt=u;kt.set(ct,Zt,At);for(var Mt=0,ee=0;Mt!==g;Mt++,ee+=_,kt.y=Zt,kt.x+=N)for(var ie=0,L=0;ie!==m;ie++,L+=x,kt.z=At,kt.y+=H)for(var A=0,J=0;A!==f;A++,J+=y,kt.z+=nt)if(kt.dot(it)<B){var vt=ee+L+J;b[vt][U[vt]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),et(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var I=0;I!==D;I++){var dt=U[I];if(dt>1)for(var xt=b[I],Mt=0;Mt!==dt;Mt++)for(var K=xt[Mt],ie=0;ie!==Mt;ie++){var Gt=xt[ie];this.needBroadphaseCollision(K,Gt)&&this.intersectionTest(K,Gt,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,u,h){var l=c.bodies,d=l.length,p,v,g,m;for(p=0;p!==d;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new a,o.prototype.aabbQuery=function(c,u,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var d=c.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function l(D,I){this.from=D?D.clone():new r,this.to=I?I.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new h,p=[];l.prototype.intersectWorld=function(D,I){return this.mode=I.mode||l.ANY,this.result=I.result||new c,this.skipBackfaces=!!I.skipBackfaces,this.collisionFilterMask=typeof I.collisionFilterMask<"u"?I.collisionFilterMask:-1,this.collisionFilterGroup=typeof I.collisionFilterGroup<"u"?I.collisionFilterGroup:-1,I.from&&this.from.copy(I.from),I.to&&this.to.copy(I.to),this.callback=I.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),p.length=0,D.broadphase.aabbQuery(D,d,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(D,I,R,$){$.vsub(I,X),R.vsub(I,v),D.vsub(I,g);var at=X.dot(X),et=X.dot(v),K=X.dot(g),ot=v.dot(v),ht=v.dot(g),q,Lt;return(q=ot*K-et*ht)>=0&&(Lt=at*ht-et*K)>=0&&q+Lt<at*ot-et*et}var f=new r,_=new a;l.prototype.intersectBody=function(D,I){I&&(this.result=I,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!D.collisionResponse)&&!(!(this.collisionFilterGroup&D.collisionFilterMask)||!(D.collisionFilterGroup&this.collisionFilterMask)))for(var $=f,at=_,et=0,K=D.shapes.length;et<K;et++){var ot=D.shapes[et];if(!(R&&!ot.collisionResponse)&&(D.quaternion.mult(D.shapeOrientations[et],at),D.quaternion.vmult(D.shapeOffsets[et],$),$.vadd(D.position,$),this.intersectShape(ot,at,$,D),this.result._shouldStop))break}},l.prototype.intersectBodies=function(D,I){I&&(this.result=I,this._updateDirection());for(var R=0,$=D.length;!this.result._shouldStop&&R<$;R++)this.intersectBody(D[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(D,I,R,$){var at=this.from,et=U(at,this._direction,R);if(!(et>D.boundingSphereRadius)){var K=this[D.type];K&&K.call(this,D,I,R,$)}},new r,new r;var x=new r,y=new r,M=new r,T=new r;new r,new c,l.prototype.intersectBox=function(D,I,R,$){return this.intersectConvex(D.convexPolyhedronRepresentation,I,R,$)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(D,I,R,$){var at=this.from,et=this.to,K=this._direction,ot=new r(0,0,1);I.vmult(ot,ot);var ht=new r;at.vsub(R,ht);var q=ht.dot(ot);et.vsub(R,ht);var Lt=ht.dot(ot);if(!(q*Lt>0)&&!(at.distanceTo(et)<q)){var ft=ot.dot(K);if(!(Math.abs(ft)<this.precision)){var it=new r,ct=new r,Zt=new r;at.vsub(R,it);var At=-ot.dot(it)/ft;K.scale(At,ct),at.vadd(ct,Zt),this.reportIntersection(ot,Zt,D,$,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(D){var I=this.to,R=this.from;D.lowerBound.x=Math.min(I.x,R.x),D.lowerBound.y=Math.min(I.y,R.y),D.lowerBound.z=Math.min(I.z,R.z),D.upperBound.x=Math.max(I.x,R.x),D.upperBound.y=Math.max(I.y,R.y),D.upperBound.z=Math.max(I.z,R.z)};var C={faceList:[0]};l.prototype.intersectHeightfield=function(D,I,R,$){D.data,D.elementSize;var at=new r,et=new l(this.from,this.to);o.pointToLocalFrame(R,I,et.from,et.from),o.pointToLocalFrame(R,I,et.to,et.to);var K=[],ot=null,ht=null,q=null,Lt=null,ft=D.getIndexOfPosition(et.from.x,et.from.y,K,!1);if(ft&&(ot=K[0],ht=K[1],q=K[0],Lt=K[1]),ft=D.getIndexOfPosition(et.to.x,et.to.y,K,!1),ft&&((ot===null||K[0]<ot)&&(ot=K[0]),(q===null||K[0]>q)&&(q=K[0]),(ht===null||K[1]<ht)&&(ht=K[1]),(Lt===null||K[1]>Lt)&&(Lt=K[1])),ot!==null){var it=[];D.getRectMinMax(ot,ht,q,Lt,it),it[0],it[1];for(var ct=ot;ct<=q;ct++)for(var Zt=ht;Zt<=Lt;Zt++){if(this.result._shouldStop||(D.getConvexTrianglePillar(ct,Zt,!1),o.pointToWorldFrame(R,I,D.pillarOffset,at),this.intersectConvex(D.pillarConvex,I,at,$,C),this.result._shouldStop))return;D.getConvexTrianglePillar(ct,Zt,!0),o.pointToWorldFrame(R,I,D.pillarOffset,at),this.intersectConvex(D.pillarConvex,I,at,$,C)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var F=new r,E=new r;l.prototype.intersectSphere=function(D,I,R,$){var at=this.from,et=this.to,K=D.radius,ot=Math.pow(et.x-at.x,2)+Math.pow(et.y-at.y,2)+Math.pow(et.z-at.z,2),ht=2*((et.x-at.x)*(at.x-R.x)+(et.y-at.y)*(at.y-R.y)+(et.z-at.z)*(at.z-R.z)),q=Math.pow(at.x-R.x,2)+Math.pow(at.y-R.y,2)+Math.pow(at.z-R.z,2)-Math.pow(K,2),Lt=Math.pow(ht,2)-4*ot*q,ft=F,it=E;if(!(Lt<0))if(Lt===0)at.lerp(et,Lt,ft),ft.vsub(R,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1);else{var ct=(-ht-Math.sqrt(Lt))/(2*ot),Zt=(-ht+Math.sqrt(Lt))/(2*ot);if(ct>=0&&ct<=1&&(at.lerp(et,ct,ft),ft.vsub(R,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1)),this.result._shouldStop)return;Zt>=0&&Zt<=1&&(at.lerp(et,Zt,ft),ft.vsub(R,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var w=new r;new r,new r;var P=new r;l.prototype.intersectConvex=function(I,R,$,at,et){for(var K=w,ot=P,ht=et&&et.faceList||null,q=I.faces,Lt=I.vertices,ft=I.faceNormals,it=this._direction,ct=this.from,Zt=this.to,At=ct.distanceTo(Zt),kt=ht?ht.length:q.length,Mt=this.result,ee=0;!Mt._shouldStop&&ee<kt;ee++){var ie=ht?ht[ee]:ee,L=q[ie],A=ft[ie],J=R,vt=$;ot.copy(Lt[L[0]]),J.vmult(ot,ot),ot.vadd(vt,ot),ot.vsub(ct,ot),J.vmult(A,K);var dt=it.dot(K);if(!(Math.abs(dt)<this.precision)){var xt=K.dot(ot)/dt;if(!(xt<0)){it.mult(xt,x),x.vadd(ct,x),y.copy(Lt[L[0]]),J.vmult(y,y),vt.vadd(y,y);for(var Gt=1;!Mt._shouldStop&&Gt<L.length-1;Gt++){M.copy(Lt[L[Gt]]),T.copy(Lt[L[Gt+1]]),J.vmult(M,M),J.vmult(T,T),vt.vadd(M,M),vt.vadd(T,T);var bt=x.distanceTo(ct);!(m(x,y,M,T)||m(x,M,y,T))||bt>At||this.reportIntersection(K,x,I,at,ie)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var k=new r,W=new r,N=new r,H=new r,nt=new r,B=new r;new h;var O=[],Y=new o;l.prototype.intersectTrimesh=function(I,R,$,at,et){var K=k,ot=O,ht=Y,q=P,Lt=W,ft=N,it=H,ct=B,Zt=nt;et&&et.faceList;var At=I.indices;I.vertices,I.faceNormals;var kt=this.from,Mt=this.to,ee=this._direction;ht.position.copy($),ht.quaternion.copy(R),o.vectorToLocalFrame($,R,ee,Lt),o.pointToLocalFrame($,R,kt,ft),o.pointToLocalFrame($,R,Mt,it);var ie=ft.distanceSquared(it);I.tree.rayQuery(this,ht,ot);for(var L=0,A=ot.length;!this.result._shouldStop&&L!==A;L++){var J=ot[L];I.getNormal(J,K),I.getVertex(At[J*3],y),y.vsub(ft,q);var vt=Lt.dot(K),dt=K.dot(q)/vt;if(!(dt<0)){Lt.scale(dt,x),x.vadd(ft,x),I.getVertex(At[J*3+1],M),I.getVertex(At[J*3+2],T);var xt=x.distanceSquared(ft);!(m(x,M,y,T)||m(x,y,M,T))||xt>ie||(o.vectorToWorldFrame(R,K,Zt),o.pointToWorldFrame($,R,x,ct),this.reportIntersection(Zt,ct,I,at,J))}}ot.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(D,I,R,$,at){var et=this.from,K=this.to,ot=et.distanceTo(I),ht=this.result;if(!(this.skipBackfaces&&D.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof at<"u"?at:-1,this.mode){case l.ALL:this.hasHit=!0,ht.set(et,K,D,I,R,$,ot),ht.hasHit=!0,this.callback(ht);break;case l.CLOSEST:(ot<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(et,K,D,I,R,$,ot));break;case l.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(et,K,D,I,R,$,ot),ht._shouldStop=!0;break}};var X=new r,b=new r;function U(D,I,R){R.vsub(D,X);var $=X.dot(I);I.mult($,b),b.vadd(D,b);var at=R.distanceTo(b);return at}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,u,h,l,d,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=l,this.body=d,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var h=c.indexOf(u.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,u){var h=this.axisList,l=h.length,d=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,d))break;this.intersectionTest(g,m,c,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,u=o.length,h=0;h!==u;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,u){var h,l;u===0?(h=o.position.x,l=c.position.x):u===1?(h=o.position.y,l=c.position.y):u===2&&(h=o.position.z,l=c.position.z);var d=o.boundingRadius,p=c.boundingRadius,v=h+d,g=l-p;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,u=0,h=0,l=0,d=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],_=f.position.x;o+=_,c+=_*_;var x=f.position.y;u+=x,h+=x*x;var y=f.position.z;l+=y,d+=y*y}var M=c-o*o*g,T=h-u*u*g,C=d-l*l*g;M>T?M>C?this.axisIndex=0:this.axisIndex=2:T>C?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var d=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<d.length;p++){var v=d[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new c,g=d.pivotB?d.pivotB.clone():new c;this.axisA=d.axisA?d.axisA.clone():new c,this.axisB=d.axisB?d.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new a(h,l,d),f=this.twistEquation=new o(h,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}u.prototype=new r,u.constructor=u,new c,new c,u.prototype.update=function(){var h=this.bodyA,l=this.bodyB,d=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),d.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,u,h,l){r.call(this,c,u),typeof h>"u"&&(h=c.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=h;var d=this.distanceEquation=new a(c,u);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.distanceEquation,l=this.distance*.5,d=h.ni;u.position.vsub(c.position,d),d.normalize(),d.mult(l,h.ri),d.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(d,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,d,m,p,f,g);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);x.normalize();var y=this.rotationalEquation1=new a(d,p,v),M=this.rotationalEquation2=new a(d,p,v),T=this.motorEquation=new o(d,p,g);T.enabled=!1,this.equations.push(y,M,T)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new c,l=new c;u.prototype.update=function(){var d=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,_=l,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,f),p.quaternion.vmult(y,_),f.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(u,h,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,p),r.call(this,u,p,h,v,d);var m=this.rotationalEquation1=new a(u,h,l),f=this.rotationalEquation2=new a(u,h,l),_=this.rotationalEquation3=new a(u,h,l);this.equations.push(m,f,_)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),h.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(u,h,l,d,p){r.call(this,u,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(u,l),g=this.equationY=new a(u,l),m=this.equationZ=new a(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,l=this.equationX,d=this.equationY,p=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,d=this.b,p=this.axisA,v=this.axisB,g=c,m=u,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-p.dot(v),y=this.computeGW(),M=this.computeGiMf(),T=-x*l-y*d-h*M;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,f,_){_=typeof _<"u"?_:1e6,r.call(this,m,f,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a,h=new a;o.prototype.computeB=function(m){var f=this.a,_=this.b,x=this.bi,y=this.bj,M=this.ri,T=this.rj,C=c,F=u,E=x.velocity,w=x.angularVelocity;x.force,x.torque;var P=y.velocity,k=y.angularVelocity;y.force,y.torque;var W=h,N=this.jacobianElementA,H=this.jacobianElementB,nt=this.ni;M.cross(nt,C),T.cross(nt,F),nt.negate(N.spatial),C.negate(N.rotational),H.spatial.copy(nt),H.rotational.copy(F),W.copy(y.position),W.vadd(T,W),W.vsub(x.position,W),W.vsub(M,W);var B=nt.dot(W),O=this.restitution+1,Y=O*P.dot(nt)-O*E.dot(nt)+k.dot(F)-w.dot(C),X=this.computeGiMf(),b=-B*f-Y*_-m*X;return b};var l=new a,d=new a,p=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=d,_=p,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,f),m.vsub(f,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,f,_){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var _=m,x=g,y=f;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},o.prototype.computeB=function(g,m,f){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.velocity,y=_.velocity,M=f.angularVelocity||c,T=_.angularVelocity||c;return g.multiplyVectors(x,M)+m.multiplyVectors(y,T)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.vlambda,y=_.vlambda,M=f.wlambda||c,T=_.wlambda||c;return g.multiplyVectors(x,M)+m.multiplyVectors(y,T)};var u=new a,h=new a,l=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.force,y=f.torque,M=_.force,T=_.torque,C=f.invMassSolve,F=_.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(y,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(T,d):d.set(0,0,0),x.mult(C,u),M.mult(F,h),g.multiplyVectors(u,l)+m.multiplyVectors(h,d)};var p=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.invMassSolve,y=_.invMassSolve,M=f.invInertiaWorldSolve,T=_.invInertiaWorldSolve,C=x+y;return M&&(M.vmult(g.rotational,p),C+=p.dot(g.rotational)),T&&(T.vmult(m.rotational,p),C+=p.dot(m.rotational)),C};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),f.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,d){r.call(this,h,l,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,p=this.rj,v=c,g=u,m=this.t;d.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,_=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),M=-x*l-h*y;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,d=this.b,p=this.axisA,v=this.axisB,g=c,m=u,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-p.dot(v),y=this.computeGW(),M=this.computeGiMf(),T=-x*l-y*d-h*M;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,h){h=typeof h<"u"?h:1e6,a.call(this,c,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,d=this.jacobianElementA,p=this.jacobianElementB;d.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},a.prototype.vmult=function(o,c){c=c||new r;var u=this.elements,h=o.x,l=o.y,d=o.z;return c.x=u[0]*h+u[1]*l+u[2]*d,c.y=u[3]*h+u[4]*l+u[5]*d,c.z=u[6]*h+u[7]*l+u[8]*d,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var u=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var d=0,p=0;p<3;p++)d+=o.elements[h+p*3]*this.elements[p+l*3];u.elements[h+l*3]=d}return u},a.prototype.scale=function(o,c){c=c||new a;for(var u=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*u[3*l+0],h[3*l+1]=o.y*u[3*l+1],h[3*l+2]=o.z*u[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var u=3,h=4,l=[],d=0;d<u*h;d++)l.push(0);var d,p;for(d=0;d<3;d++)for(p=0;p<3;p++)l[d+h*p]=this.elements[d+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,_;do{if(d=g-v,l[d+h*d]===0){for(p=d+1;p<g;p++)if(l[d+h*p]!==0){m=f;do _=f-m,l[_+h*d]+=l[_+h*p];while(--m);break}}if(l[d+h*d]!==0)for(p=d+1;p<g;p++){var x=l[d+h*p]/l[d+h*d];m=f;do _=f-m,l[_+h*p]=_<=d?0:l[_+h*p]-l[_+h*d]*x;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,u){if(u===void 0)return this.elements[c+3*o];this.elements[c+3*o]=u},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",u=0;u<9;u++)o+=this.elements[u]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,u=6,h=[],l=0;l<c*u;l++)h.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)h[l+u*d]=this.elements[l+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=u,f;do{if(l=v-p,h[l+u*l]===0){for(d=l+1;d<v;d++)if(h[l+u*d]!==0){g=m;do f=m-g,h[f+u*l]+=h[f+u*d];while(--g);break}}if(h[l+u*l]!==0)for(d=l+1;d<v;d++){var _=h[l+u*d]/h[l+u*l];g=m;do f=m-g,h[f+u*d]=f<=l?0:h[f+u*d]-h[f+u*l]*_;while(--g)}}while(--p);l=2;do{d=l-1;do{var _=h[l+u*d]/h[l+u*l];g=u;do f=u-g,h[f+u*d]=h[f+u*d]-h[f+u*l]*_;while(--g)}while(d--)}while(--l);l=2;do{var _=1/h[l+u*l];g=u;do f=u-g,h[f+u*l]=h[f+u*l]*_;while(--g)}while(l--);l=2;do{d=2;do{if(f=h[c+d+u*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,f)}while(d--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,u=o.y,h=o.z,l=o.w,d=c+c,p=u+u,v=h+h,g=c*d,m=c*p,f=c*v,_=u*p,x=u*v,y=h*v,M=l*d,T=l*p,C=l*v,F=this.elements;return F[3*0+0]=1-(_+y),F[3*0+1]=m-C,F[3*0+2]=f+T,F[3*1+0]=m+C,F[3*1+1]=1-(g+y),F[3*1+2]=x-M,F[3*2+0]=f-T,F[3*2+1]=x+M,F[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,u=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=u[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(d,p,v,g){this.x=d!==void 0?d:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,p,v,g){this.x=d,this.y=p,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,p){var v=Math.sin(p*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(p*.5)},a.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,p]};var o=new r,c=new r;a.prototype.setFromVectors=function(d,p){if(d.isAntiparallelTo(p)){var v=o,g=c;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(p.norm(),2))+d.dot(p),this.normalize()}};var u=new r,h=new r,l=new r;a.prototype.mult=function(d,p){p=p||new a;var v=this.w,g=u,m=h,f=l;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),p.w=v*d.w-g.dot(m),g.cross(m,f),p.x=v*m.x+d.w*g.x+f.x,p.y=v*m.y+d.w*g.y+f.y,p.z=v*m.z+d.w*g.z+f.z,p},a.prototype.inverse=function(d){var p=this.x,v=this.y,g=this.z,m=this.w;d=d||new a,this.conjugate(d);var f=1/(p*p+v*v+g*g+m*m);return d.x*=f,d.y*=f,d.z*=f,d.w*=f,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,p){p=p||new r;var v=d.x,g=d.y,m=d.z,f=this.x,_=this.y,x=this.z,y=this.w,M=y*v+_*m-x*g,T=y*g+x*v-f*m,C=y*m+f*g-_*v,F=-f*v-_*g-x*m;return p.x=M*y+F*-f+T*-x-C*-_,p.y=T*y+F*-_+C*-f-M*-x,p.z=C*y+F*-x+M*-_-T*-f,p},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,p){p=p||"YZX";var v,g,m,f=this.x,_=this.y,x=this.z,y=this.w;switch(p){case"YZX":var M=f*_+x*y;if(M>.499&&(v=2*Math.atan2(f,y),g=Math.PI/2,m=0),M<-.499&&(v=-2*Math.atan2(f,y),g=-Math.PI/2,m=0),isNaN(v)){var T=f*f,C=_*_,F=x*x;v=Math.atan2(2*_*y-2*f*x,1-2*C-2*F),g=Math.asin(2*M),m=Math.atan2(2*f*y-2*_*x,1-2*T-2*F)}break;default:throw new Error("Euler order "+p+" not supported yet.")}d.y=v,d.z=g,d.x=m},a.prototype.setFromEuler=function(d,p,v,g){g=g||"XYZ";var m=Math.cos(d/2),f=Math.cos(p/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(p/2),M=Math.sin(v/2);return g==="XYZ"?(this.x=x*f*_+m*y*M,this.y=m*y*_-x*f*M,this.z=m*f*M+x*y*_,this.w=m*f*_-x*y*M):g==="YXZ"?(this.x=x*f*_+m*y*M,this.y=m*y*_-x*f*M,this.z=m*f*M-x*y*_,this.w=m*f*_+x*y*M):g==="ZXY"?(this.x=x*f*_-m*y*M,this.y=m*y*_+x*f*M,this.z=m*f*M+x*y*_,this.w=m*f*_-x*y*M):g==="ZYX"?(this.x=x*f*_-m*y*M,this.y=m*y*_+x*f*M,this.z=m*f*M-x*y*_,this.w=m*f*_+x*y*M):g==="YZX"?(this.x=x*f*_+m*y*M,this.y=m*y*_+x*f*M,this.z=m*f*M-x*y*_,this.w=m*f*_-x*y*M):g==="XZY"&&(this.x=x*f*_-m*y*M,this.y=m*y*_-x*f*M,this.z=m*f*M+x*y*_,this.w=m*f*_+x*y*M),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new a;o.pointToLocalFrame=function(u,h,l,p){var p=p||new r;return l.vsub(u,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(u,p),p},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,h,l){return u.vmult(h,l),l},o.vectorToLocalFrame=function(u,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,d){this.x=h||0,this.y=l||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var d=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return l=l||new a,l.x=m*v-f*p,l.y=f*d-g*v,l.z=g*p-m*d,l},a.prototype.set=function(h,l,d){return this.x=h,this.y=l,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,d=this.z,p=Math.sqrt(h*h+l*l+d*d);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},a.prototype.unit=function(h){h=h||new a;var l=this.x,d=this.y,p=this.z,v=Math.sqrt(l*l+d*d+p*p);return v>0?(v=1/v,h.x=l*v,h.y=d*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,d=this.z;return Math.sqrt(h*h+l*l+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,d=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-d)*(g-d)+(m-p)*(m-p))},a.prototype.distanceSquared=function(h){var l=this.x,d=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-d)*(g-d)+(m-p)*(m-p)},a.prototype.mult=function(h,l){l=l||new a;var d=this.x,p=this.y,v=this.z;return l.x=h*d,l.y=h*p,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var d=this.norm();if(d>0){var p=o,v=1/d;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,d){var p=this.x,v=this.y,g=this.z;d.x=p+(h.x-p)*l,d.y=v+(h.y-v)*l,d.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(u),u.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function l(P){P=P||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,P.position&&this.position.copy(P.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new a,this.force=new a;var k=typeof P.mass=="number"?P.mass:0;this.mass=k,this.invMass=k>0?1/k:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=k<=0?l.STATIC:l.DYNAMIC,typeof P.type==typeof l.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,P.shape&&this.addShape(P.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(P){if(this.allowSleep){var k=this.sleepState,W=this.velocity.norm2()+this.angularVelocity.norm2(),N=Math.pow(this.sleepSpeedLimit,2);k===l.AWAKE&&W<N?(this.sleepState=l.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(l.sleepyEvent)):k===l.SLEEPY&&W>N?this.wakeUp():k===l.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(P,W){var W=W||new a;return P.vsub(this.position,W),this.quaternion.conjugate().vmult(W,W),W},l.prototype.vectorToLocalFrame=function(P,W){var W=W||new a;return this.quaternion.conjugate().vmult(P,W),W},l.prototype.pointToWorldFrame=function(P,W){var W=W||new a;return this.quaternion.vmult(P,W),W.vadd(this.position,W),W},l.prototype.vectorToWorldFrame=function(P,W){var W=W||new a;return this.quaternion.vmult(P,W),W};var d=new a,p=new c;l.prototype.addShape=function(P,k,W){var N=new a,H=new c;return k&&N.copy(k),W&&H.copy(W),this.shapes.push(P),this.shapeOffsets.push(N),this.shapeOrientations.push(H),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var P=this.shapes,k=this.shapeOffsets,W=P.length,N=0,H=0;H!==W;H++){var nt=P[H];nt.updateBoundingSphereRadius();var B=k[H].norm(),O=nt.boundingSphereRadius;B+O>N&&(N=B+O)}this.boundingRadius=N};var v=new u;l.prototype.computeAABB=function(){for(var P=this.shapes,k=this.shapeOffsets,W=this.shapeOrientations,N=P.length,H=d,nt=p,B=this.quaternion,O=this.aabb,Y=v,X=0;X!==N;X++){var b=P[X];W[X].mult(B,nt),nt.vmult(k[X],H),H.vadd(this.position,H),b.calculateWorldAABB(H,nt,Y.lowerBound,Y.upperBound),X===0?O.copy(Y):O.extend(Y)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(P){var k=this.invInertia;if(!(k.x===k.y&&k.y===k.z&&!P)){var W=g,N=m;W.setRotationFromQuaternion(this.quaternion),W.transpose(N),W.scale(k,W),W.mmult(N,this.invInertiaWorld)}};var f=new a,_=new a;l.prototype.applyForce=function(P,k){if(this.type===l.DYNAMIC){var W=f;k.vsub(this.position,W);var N=_;W.cross(P,N),this.force.vadd(P,this.force),this.torque.vadd(N,this.torque)}};var x=new a,y=new a;l.prototype.applyLocalForce=function(P,k){if(this.type===l.DYNAMIC){var W=x,N=y;this.vectorToWorldFrame(P,W),this.pointToWorldFrame(k,N),this.applyForce(W,N)}};var M=new a,T=new a,C=new a;l.prototype.applyImpulse=function(P,k){if(this.type===l.DYNAMIC){var W=M;k.vsub(this.position,W);var N=T;N.copy(P),N.mult(this.invMass,N),this.velocity.vadd(N,this.velocity);var H=C;W.cross(P,H),this.invInertiaWorld.vmult(H,H),this.angularVelocity.vadd(H,this.angularVelocity)}};var F=new a,E=new a;l.prototype.applyLocalImpulse=function(P,k){if(this.type===l.DYNAMIC){var W=F,N=E;this.vectorToWorldFrame(P,W),this.pointToWorldFrame(k,N),this.applyImpulse(W,N)}};var w=new a;l.prototype.updateMassProperties=function(){var P=w;this.invMass=this.mass>0?1/this.mass:0;var k=this.inertia,W=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(P,this.mass,k),this.invInertia.set(k.x>0&&!W?1/k.x:0,k.y>0&&!W?1/k.y:0,k.z>0&&!W?1/k.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(P,k){var W=new a;return P.vsub(this.position,W),this.angularVelocity.cross(W,k),this.velocity.vadd(k,k),k}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(B){this.chassisBody=B.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof B.indexRightAxis<"u"?B.indexRightAxis:1,this.indexForwardAxis=typeof B.indexForwardAxis<"u"?B.indexForwardAxis:0,this.indexUpAxis=typeof B.indexUpAxis<"u"?B.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,d=new r;new o,u.prototype.addWheel=function(B){B=B||{};var O=new c(B),Y=this.wheelInfos.length;return this.wheelInfos.push(O),Y},u.prototype.setSteeringValue=function(B,O){var Y=this.wheelInfos[O];Y.steering=B},new r,u.prototype.applyEngineForce=function(B,O){this.wheelInfos[O].engineForce=B},u.prototype.setBrake=function(B,O){this.wheelInfos[O].brake=B},u.prototype.addToWorld=function(B){this.constraints,B.add(this.chassisBody);var O=this;this.preStepCallback=function(){O.updateVehicle(B.dt)},B.addEventListener("preStep",this.preStepCallback),this.world=B},u.prototype.getVehicleAxisWorld=function(B,O){O.set(B===0?1:0,B===1?1:0,B===2?1:0),this.chassisBody.vectorToWorldFrame(O,O)},u.prototype.updateVehicle=function(B){for(var O=this.wheelInfos,Y=O.length,X=this.chassisBody,b=0;b<Y;b++)this.updateWheelTransform(b);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var U=new r;this.getVehicleAxisWorld(this.indexForwardAxis,U),U.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var b=0;b<Y;b++)this.castRay(O[b]);this.updateSuspension(B);for(var D=new r,I=new r,b=0;b<Y;b++){var R=O[b],$=R.suspensionForce;$>R.maxSuspensionForce&&($=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale($*B,D),R.raycastResult.hitPointWorld.vsub(X.position,I),X.applyImpulse(D,R.raycastResult.hitPointWorld)}this.updateFriction(B);var at=new r,et=new r,K=new r;for(b=0;b<Y;b++){var R=O[b];X.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var ot=1;switch(this.indexUpAxis){case 1:ot=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var ht=et.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ht,at),et.vsub(at,et);var q=et.dot(K);R.deltaRotation=ot*q*B/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*B),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},u.prototype.updateSuspension=function(B){for(var O=this.chassisBody,Y=O.mass,X=this.wheelInfos,b=X.length,U=0;U<b;U++){var D=X[U];if(D.isInContact){var I,R=D.suspensionRestLength,$=D.suspensionLength,at=R-$;I=D.suspensionStiffness*at*D.clippedInvContactDotSuspension;var et=D.suspensionRelativeVelocity,K;et<0?K=D.dampingCompression:K=D.dampingRelaxation,I-=K*et,D.suspensionForce=I*Y,D.suspensionForce<0&&(D.suspensionForce=0)}else D.suspensionForce=0}},u.prototype.removeFromWorld=function(B){this.constraints,B.remove(this.chassisBody),B.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;u.prototype.castRay=function(B){var O=p,Y=v;this.updateWheelTransformWorld(B);var X=this.chassisBody,b=-1,U=B.suspensionRestLength+B.radius;B.directionWorld.scale(U,O);var D=B.chassisConnectionPointWorld;D.vadd(O,Y);var I=B.raycastResult;I.reset();var R=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(D,Y,I),X.collisionResponse=R;var $=I.body;if(B.raycastResult.groundObject=0,$){b=I.distance,B.raycastResult.hitNormalWorld=I.hitNormalWorld,B.isInContact=!0;var at=I.distance;B.suspensionLength=at-B.radius;var et=B.suspensionRestLength-B.maxSuspensionTravel,K=B.suspensionRestLength+B.maxSuspensionTravel;B.suspensionLength<et&&(B.suspensionLength=et),B.suspensionLength>K&&(B.suspensionLength=K,B.raycastResult.reset());var ot=B.raycastResult.hitNormalWorld.dot(B.directionWorld),ht=new r;X.getVelocityAtWorldPoint(B.raycastResult.hitPointWorld,ht);var q=B.raycastResult.hitNormalWorld.dot(ht);if(ot>=-.1)B.suspensionRelativeVelocity=0,B.clippedInvContactDotSuspension=1/.1;else{var Lt=-1/ot;B.suspensionRelativeVelocity=q*Lt,B.clippedInvContactDotSuspension=Lt}}else B.suspensionLength=B.suspensionRestLength+0*B.maxSuspensionTravel,B.suspensionRelativeVelocity=0,B.directionWorld.scale(-1,B.raycastResult.hitNormalWorld),B.clippedInvContactDotSuspension=1;return b},u.prototype.updateWheelTransformWorld=function(B){B.isInContact=!1;var O=this.chassisBody;O.pointToWorldFrame(B.chassisConnectionPointLocal,B.chassisConnectionPointWorld),O.vectorToWorldFrame(B.directionLocal,B.directionWorld),O.vectorToWorldFrame(B.axleLocal,B.axleWorld)},u.prototype.updateWheelTransform=function(B){var O=h,Y=l,X=d,b=this.wheelInfos[B];this.updateWheelTransformWorld(b),b.directionLocal.scale(-1,O),Y.copy(b.axleLocal),O.cross(Y,X),X.normalize(),Y.normalize();var U=b.steering,D=new a;D.setFromAxisAngle(O,U);var I=new a;I.setFromAxisAngle(Y,b.rotation);var R=b.worldTransform.quaternion;this.chassisBody.quaternion.mult(D,R),R.mult(I,R),R.normalize();var $=b.worldTransform.position;$.copy(b.directionWorld),$.scale(b.suspensionLength,$),$.vadd(b.chassisConnectionPointWorld,$)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(B){return this.wheelInfos[B].worldTransform};var m=new r,f=[],_=[],x=1;u.prototype.updateFriction=function(B){for(var O=m,Y=this.wheelInfos,X=Y.length,b=this.chassisBody,U=_,D=f,I=0;I<X;I++){var R=Y[I],$=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,U[I]||(U[I]=new r),D[I]||(D[I]=new r)}for(var I=0;I<X;I++){var R=Y[I],$=R.raycastResult.body;if($){var at=D[I],et=this.getWheelTransformWorld(I);et.vectorToWorldFrame(g[this.indexRightAxis],at);var K=R.raycastResult.hitNormalWorld,ot=at.dot(K);K.scale(ot,O),at.vsub(O,at),at.normalize(),K.cross(at,U[I]),U[I].normalize(),R.sideImpulse=nt(b,R.raycastResult.hitPointWorld,$,R.raycastResult.hitPointWorld,at),R.sideImpulse*=x}}var ht=1,q=.5;this.sliding=!1;for(var I=0;I<X;I++){var R=Y[I],$=R.raycastResult.body,Lt=0;if(R.slipInfo=1,$){var ft=0,it=R.brake?R.brake:ft;Lt=C(b,$,R.raycastResult.hitPointWorld,U[I],it),Lt+=R.engineForce*B;var ct=it/Lt;R.slipInfo*=ct}if(R.forwardImpulse=0,R.skidInfo=1,$){R.skidInfo=1;var Zt=R.suspensionForce*B*R.frictionSlip,At=Zt,kt=Zt*At;R.forwardImpulse=Lt;var Mt=R.forwardImpulse*q,ee=R.sideImpulse*ht,ie=Mt*Mt+ee*ee;if(R.sliding=!1,ie>kt){this.sliding=!0,R.sliding=!0;var ct=Zt/Math.sqrt(ie);R.skidInfo*=ct}}}if(this.sliding)for(var I=0;I<X;I++){var R=Y[I];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var I=0;I<X;I++){var R=Y[I],L=new r;if(L.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var A=new r;U[I].scale(R.forwardImpulse,A),b.applyImpulse(A,L)}if(R.sideImpulse!==0){var $=R.raycastResult.body,J=new r;J.copy(R.raycastResult.hitPointWorld);var vt=new r;D[I].scale(R.sideImpulse,vt),b.pointToLocalFrame(L,L),L["xyz"[this.indexUpAxis]]*=R.rollInfluence,b.pointToWorldFrame(L,L),b.applyImpulse(vt,L),vt.scale(-1,vt),$.applyImpulse(vt,J)}}};var y=new r,M=new r,T=new r;function C(B,O,Y,X,b){var U=0,D=Y,I=y,R=M,$=T;B.getVelocityAtWorldPoint(D,I),O.getVelocityAtWorldPoint(D,R),I.vsub(R,$);var at=X.dot($),et=k(B,Y,X),K=k(O,Y,X),ot=1,ht=ot/(et+K);return U=-at*ht,b<U&&(U=b),U<-b&&(U=-b),U}var F=new r,E=new r,w=new r,P=new r;function k(B,O,Y){var X=F,b=E,U=w,D=P;return O.vsub(B.position,X),X.cross(Y,b),B.invInertiaWorld.vmult(b,D),D.cross(X,U),B.invMass+Y.dot(U)}var W=new r,N=new r,H=new r;function nt(B,O,Y,X,b,ot){var D=b.norm2();if(D>1.1)return 0;var I=W,R=N,$=H;B.getVelocityAtWorldPoint(O,I),Y.getVelocityAtWorldPoint(X,R),I.vsub(R,$);var at=b.dot($),et=.2,K=1/(B.invMass+Y.invMass),ot=-et*at*K;return ot}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var _=new u(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-f*x,f*_+m*x,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var d=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,_=this.smoothingRadius*this.smoothingRadius,x=o,y=0;y!==m;y++){var M=this.particles[y];M.position.vsub(v.position,x),f!==M.id&&x.norm2()<_&&g.push(M)}};var c=new r,u=new r,h=new r,l=new r,d=new r,p=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var M=y.length,T=0,C=0;C!==M;C++){x.position.vsub(y[C].position,g);var F=g.norm(),E=this.w(F);T+=y[C].mass*E}this.densities[_]=T,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var w=u,P=h,k=l,W=d,N=p,_=0;_!==v;_++){var H=this.particles[_];w.set(0,0,0),P.set(0,0,0);for(var nt,B,y=this.neighbors[_],M=y.length,C=0;C!==M;C++){var O=y[C];H.position.vsub(O.position,W);var Y=W.norm();nt=-O.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+f)+this.pressures[C]/(this.densities[C]*this.densities[C]+f)),this.gradw(W,k),k.mult(nt,k),w.vadd(k,w),O.velocity.vsub(H.velocity,N),N.mult(1/(1e-4+this.densities[_]*this.densities[C])*this.viscosity*O.mass,N),B=this.nablaw(Y),N.mult(B,N),P.vadd(N,P)}P.mult(H.mass,P),w.mult(H.mass,w),H.force.vadd(P,H.force),H.force.vadd(w,H.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,c=new r,u=new r,h=new r,l=new r,d=new r,p=new r,v=new r,g=new r,m=new r,f=new r;a.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,M=this.bodyA,T=this.bodyB,C=o,F=c,E=u,w=h,P=f,k=l,W=d,N=p,H=v,nt=g,B=m;this.getWorldAnchorA(k),this.getWorldAnchorB(W),k.vsub(M.position,N),W.vsub(T.position,H),W.vsub(k,C);var O=C.norm();F.copy(C),F.normalize(),T.velocity.vsub(M.velocity,E),T.angularVelocity.cross(H,P),E.vadd(P,E),M.angularVelocity.cross(N,P),E.vsub(P,E),F.mult(-_*(O-y)-x*E.dot(F),w),M.force.vsub(w,M.force),T.force.vadd(w,T.force),N.cross(w,nt),H.cross(w,B),M.torque.vsub(nt,M.torque),T.torque.vadd(B,T.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(d){d=c.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;u.prototype.updateWheel=function(d){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,p=this.halfExtents.z,v=a,g=[new v(-l,-d,-p),new v(l,-d,-p),new v(l,d,-p),new v(-l,d,-p),new v(-l,-d,p),new v(l,-d,p),new v(l,d,p),new v(-l,d,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,d){return d=d||new a,c.calculateInertia(this.halfExtents,l,d),d},c.calculateInertia=function(l,d,p){var v=l;p.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,d){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==p.length;g++)d.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,c.prototype.forEachWorldCorner=function(l,d,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),l.vadd(u,u),p(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,d,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];d.vmult(m,m),l.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<p.x&&(p.x=_),x<p.y&&(p.y=x),y<p.z&&(p.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(b,U,D){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=b||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=U||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=D?D.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var u=new a;c.prototype.computeEdges=function(){var b=this.faces,U=this.vertices;U.length;var D=this.uniqueEdges;D.length=0;for(var I=u,R=0;R!==b.length;R++)for(var $=b[R],at=$.length,et=0;et!==at;et++){var K=(et+1)%at;U[$[et]].vsub(U[$[K]],I),I.normalize();for(var ot=!1,ht=0;ht!==D.length;ht++)if(D[ht].almostEquals(I)||D[ht].almostEquals(I)){ot=!0;break}ot||D.push(I.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var b=0;b<this.faces.length;b++){for(var U=0;U<this.faces[b].length;U++)if(!this.vertices[this.faces[b][U]])throw new Error("Vertex "+this.faces[b][U]+" not found!");var D=this.faceNormals[b]||new a;this.getFaceNormal(b,D),D.negate(D),this.faceNormals[b]=D;var I=this.vertices[this.faces[b][0]];if(D.dot(I)<0){console.error(".faceNormals["+b+"] = Vec3("+D.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var U=0;U<this.faces[b].length;U++)console.warn(".vertices["+this.faces[b][U]+"] = Vec3("+this.vertices[this.faces[b][U]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(b,U,D,I){U.vsub(b,l),D.vsub(U,h),h.cross(l,I),I.isZero()||I.normalize()},c.prototype.getFaceNormal=function(b,U){var D=this.faces[b],I=this.vertices[D[0]],R=this.vertices[D[1]],$=this.vertices[D[2]];return c.computeNormal(I,R,$,U)};var d=new a;c.prototype.clipAgainstHull=function(b,U,D,I,R,$,at,et,K){for(var ot=d,ht=-1,q=-Number.MAX_VALUE,Lt=0;Lt<D.faces.length;Lt++){ot.copy(D.faceNormals[Lt]),R.vmult(ot,ot);var ft=ot.dot($);ft>q&&(q=ft,ht=Lt)}for(var it=[],ct=D.faces[ht],Zt=ct.length,At=0;At<Zt;At++){var kt=D.vertices[ct[At]],Mt=new a;Mt.copy(kt),R.vmult(Mt,Mt),I.vadd(Mt,Mt),it.push(Mt)}ht>=0&&this.clipFaceAgainstHull($,b,U,it,at,et,K)};var p=new a,v=new a,g=new a,m=new a,f=new a,_=new a;c.prototype.findSeparatingAxis=function(b,U,D,I,R,$,at,et){var K=p,ot=v,ht=g,q=m,Lt=f,ft=_,it=Number.MAX_VALUE,ct=this;if(ct.uniqueAxes)for(var At=0;At!==ct.uniqueAxes.length;At++){D.vmult(ct.uniqueAxes[At],K);var Mt=ct.testSepAxis(K,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(K))}else for(var Zt=at?at.length:ct.faces.length,At=0;At<Zt;At++){var kt=at?at[At]:At;K.copy(ct.faceNormals[kt]),D.vmult(K,K);var Mt=ct.testSepAxis(K,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(K))}if(b.uniqueAxes)for(var At=0;At!==b.uniqueAxes.length;At++){R.vmult(b.uniqueAxes[At],ot);var Mt=ct.testSepAxis(ot,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(ot))}else for(var ee=et?et.length:b.faces.length,At=0;At<ee;At++){var kt=et?et[At]:At;ot.copy(b.faceNormals[kt]),R.vmult(ot,ot);var Mt=ct.testSepAxis(ot,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(ot))}for(var ie=0;ie!==ct.uniqueEdges.length;ie++){D.vmult(ct.uniqueEdges[ie],q);for(var L=0;L!==b.uniqueEdges.length;L++)if(R.vmult(b.uniqueEdges[L],Lt),q.cross(Lt,ft),!ft.almostZero()){ft.normalize();var A=ct.testSepAxis(ft,b,U,D,I,R);if(A===!1)return!1;A<it&&(it=A,$.copy(ft))}}return I.vsub(U,ht),ht.dot($)>0&&$.negate($),!0};var x=[],y=[];c.prototype.testSepAxis=function(b,U,D,I,R,$){var at=this;c.project(at,b,D,I,x),c.project(U,b,R,$,y);var et=x[0],K=x[1],ot=y[0],ht=y[1],q=et-ht,Lt=ot-K,ft=q<Lt?q:Lt;return ft};var M=new a,T=new a;c.prototype.calculateLocalInertia=function(b,U){this.computeLocalAABB(M,T);var D=T.x-M.x,I=T.y-M.y,R=T.z-M.z;U.x=1/12*b*(2*I*2*I+2*R*2*R),U.y=1/12*b*(2*D*2*D+2*R*2*R),U.z=1/12*b*(2*I*2*I+2*D*2*D)},c.prototype.getPlaneConstantOfFace=function(b){var U=this.faces[b],D=this.faceNormals[b],I=this.vertices[U[0]],R=-D.dot(I);return R};var C=new a,F=new a,E=new a,w=new a,P=new a,k=new a,W=new a,N=new a;c.prototype.clipFaceAgainstHull=function(b,U,D,I,R,$,at){for(var et=C,K=F,ot=E,ht=w,q=P,Lt=k,ft=W,it=N,ct=this,Zt=[],At=I,kt=Zt,Mt=-1,ee=Number.MAX_VALUE,ie=0;ie<ct.faces.length;ie++){et.copy(ct.faceNormals[ie]),D.vmult(et,et);var L=et.dot(b);L<ee&&(ee=L,Mt=ie)}if(!(Mt<0)){var A=ct.faces[Mt];A.connectedFaces=[];for(var J=0;J<ct.faces.length;J++)for(var vt=0;vt<ct.faces[J].length;vt++)A.indexOf(ct.faces[J][vt])!==-1&&J!==Mt&&A.connectedFaces.indexOf(J)===-1&&A.connectedFaces.push(J);At.length;for(var dt=A.length,xt=0;xt<dt;xt++){var Gt=ct.vertices[A[xt]],bt=ct.vertices[A[(xt+1)%dt]];Gt.vsub(bt,K),ot.copy(K),D.vmult(ot,ot),U.vadd(ot,ot),ht.copy(this.faceNormals[Mt]),D.vmult(ht,ht),U.vadd(ht,ht),ot.cross(ht,q),q.negate(q),Lt.copy(Gt),D.vmult(Lt,Lt),U.vadd(Lt,Lt),-Lt.dot(q);var Et;{var Nt=A.connectedFaces[xt];ft.copy(this.faceNormals[Nt]);var V=this.getPlaneConstantOfFace(Nt);it.copy(ft),D.vmult(it,it);var Et=V-it.dot(U)}for(this.clipFaceAgainstPlane(At,kt,it,Et);At.length;)At.shift();for(;kt.length;)At.push(kt.shift())}ft.copy(this.faceNormals[Mt]);var V=this.getPlaneConstantOfFace(Mt);it.copy(ft),D.vmult(it,it);for(var Et=V-it.dot(U),J=0;J<At.length;J++){var pt=it.dot(At[J])+Et;if(pt<=R&&(console.log("clamped: depth="+pt+" to minDist="+(R+"")),pt=R),pt<=$){var Jt=At[J];if(pt<=0){var qt={point:Jt,normal:it,depth:pt};at.push(qt)}}}}},c.prototype.clipFaceAgainstPlane=function(b,U,D,I){var R,$,at=b.length;if(at<2)return U;var et=b[b.length-1],K=b[0];R=D.dot(et)+I;for(var ot=0;ot<at;ot++){if(K=b[ot],$=D.dot(K)+I,R<0)if($<0){var ht=new a;ht.copy(K),U.push(ht)}else{var ht=new a;et.lerp(K,R/(R-$),ht),U.push(ht)}else if($<0){var ht=new a;et.lerp(K,R/(R-$),ht),U.push(ht),U.push(K)}et=K,R=$}return U},c.prototype.computeWorldVertices=function(b,U){for(var D=this.vertices.length;this.worldVertices.length<D;)this.worldVertices.push(new a);for(var I=this.vertices,R=this.worldVertices,$=0;$!==D;$++)U.vmult(I[$],R[$]),b.vadd(R[$],R[$]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(b,U){var D=this.vertices.length,I=this.vertices;b.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),U.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<D;R++){var $=I[R];$.x<b.x?b.x=$.x:$.x>U.x&&(U.x=$.x),$.y<b.y?b.y=$.y:$.y>U.y&&(U.y=$.y),$.z<b.z?b.z=$.z:$.z>U.z&&(U.z=$.z)}},c.prototype.computeWorldFaceNormals=function(b){for(var U=this.faceNormals.length;this.worldFaceNormals.length<U;)this.worldFaceNormals.push(new a);for(var D=this.faceNormals,I=this.worldFaceNormals,R=0;R!==U;R++)b.vmult(D[R],I[R]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var b=0,U=this.vertices,D=0,I=U.length;D!==I;D++){var R=U[D].norm2();R>b&&(b=R)}this.boundingSphereRadius=Math.sqrt(b)};var H=new a;c.prototype.calculateWorldAABB=function(b,U,D,I){for(var R=this.vertices.length,$=this.vertices,at,et,K,ot,ht,q,Lt=0;Lt<R;Lt++){H.copy($[Lt]),U.vmult(H,H),b.vadd(H,H);var ft=H;ft.x<at||at===void 0?at=ft.x:(ft.x>ot||ot===void 0)&&(ot=ft.x),ft.y<et||et===void 0?et=ft.y:(ft.y>ht||ht===void 0)&&(ht=ft.y),ft.z<K||K===void 0?K=ft.z:(ft.z>q||q===void 0)&&(q=ft.z)}D.set(at,et,K),I.set(ot,ht,q)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(b){b=b||new a;for(var U=this.vertices.length,D=this.vertices,I=0;I<U;I++)b.vadd(D[I],b);return b.mult(1/U,b),b},c.prototype.transformAllPoints=function(b,U){var D=this.vertices.length,I=this.vertices;if(U){for(var R=0;R<D;R++){var $=I[R];U.vmult($,$)}for(var R=0;R<this.faceNormals.length;R++){var $=this.faceNormals[R];U.vmult($,$)}}if(b)for(var R=0;R<D;R++){var $=I[R];$.vadd(b,$)}};var nt=new a,B=new a,O=new a;c.prototype.pointIsInside=function(b){var U=this.vertices.length,D=this.vertices,I=this.faces,R=this.faceNormals,$=null,at=this.faces.length,et=nt;this.getAveragePointLocal(et);for(var K=0;K<at;K++){this.faces[K].length;var U=R[K],ot=D[I[K][0]],ht=B;b.vsub(ot,ht);var q=U.dot(ht),Lt=O;et.vsub(ot,Lt);var ft=U.dot(Lt);if(q<0&&ft>0||q>0&&ft<0)return!1}return $?1:-1},new a;var Y=new a,X=new a;c.project=function(b,U,D,I,R){var $=b.vertices.length,at=Y,et=0,K=0,ot=X,ht=b.vertices;ot.setZero(),o.vectorToLocalFrame(D,I,U,at),o.pointToLocalFrame(D,I,ot,ot);var q=ot.dot(at);K=et=ht[0].dot(at);for(var Lt=1;Lt<$;Lt++){var ft=ht[Lt].dot(at);ft>et&&(et=ft),ft<K&&(K=ft)}if(K-=q,et-=q,K>et){var it=K;K=et,et=it}R[0]=et,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(u,h,l,d){var p=d,v=[],g=[],m=[],f=[],_=[],x=Math.cos,y=Math.sin;v.push(new a(h*x(0),h*y(0),-l*.5)),f.push(0),v.push(new a(u*x(0),u*y(0),l*.5)),_.push(1);for(var M=0;M<p;M++){var T=2*Math.PI/p*(M+1),C=2*Math.PI/p*(M+.5);M<p-1?(v.push(new a(h*x(T),h*y(T),-l*.5)),f.push(2*M+2),v.push(new a(u*x(T),u*y(T),l*.5)),_.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(p%2===1||M<p/2)&&g.push(new a(x(C),y(C),0))}m.push(_),g.push(new a(0,0,1));for(var F=[],M=0;M<f.length;M++)F.push(f[f.length-M-1]);m.push(F),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var v=h[d][p];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var v=h[d][p];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(h,l,d){var p=this.data;p[h][l]=d,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},u.prototype.getRectMinMax=function(h,l,d,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=d;f++)for(var _=l;_<=p;_++){var x=g[f][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,l,d,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(l/v);return d[0]=m,d[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},u.prototype.getHeightAt=function(h,l,d){var p=[];this.getIndexOfPosition(h,l,p,d);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,l,d){return h+"_"+l+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,l,d,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]={convex:p,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},u.prototype.getConvexTrianglePillar=function(h,l,d){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new a,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new o);f.length=5;for(var _=0;_<5;_++)f[_]||(f[_]=[]);var x=p.vertices,y=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(l+.75)*m,y),x[0].set(.25*m,.25*m,g[h+1][l+1]-y),x[1].set(-.75*m,.25*m,g[h][l+1]-y),x[2].set(.25*m,-.75*m,g[h+1][l]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,y),x[0].set(-.25*m,-.25*m,g[h][l]-y),x[1].set(.75*m,-.25*m,g[h+1][l]-y),x[2].set(-.25*m,.75*m,g[h][l+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,d,p,v)},u.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,l,d,p){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,u,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(u,h,l,d){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),d.set(p,p,p),c.x===1&&(d.x=u.x),c.y===1&&(d.y=u.y),c.z===1&&(d.z=u.z),c.x===-1&&(l.x=u.x),c.y===-1&&(l.y=u.y),c.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){u=u||new a;var h=2*c*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,u,h,l){for(var d=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-d,l[g]=c[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function h(F,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(F),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var F=this.tree;F.reset(),F.aabb.copy(this.aabb);var E=this.scale;F.aabb.lowerBound.x*=1/E.x,F.aabb.lowerBound.y*=1/E.y,F.aabb.lowerBound.z*=1/E.z,F.aabb.upperBound.x*=1/E.x,F.aabb.upperBound.y*=1/E.y,F.aabb.upperBound.z*=1/E.z;for(var w=new c,P=new a,k=new a,W=new a,N=[P,k,W],H=0;H<this.indices.length/3;H++){var nt=H*3;this._getUnscaledVertex(this.indices[nt],P),this._getUnscaledVertex(this.indices[nt+1],k),this._getUnscaledVertex(this.indices[nt+2],W),w.setFromPoints(N),F.insert(w,H)}F.removeEmptyNodes()};var d=new c;h.prototype.getTrianglesInAABB=function(F,E){d.copy(F);var w=this.scale,P=w.x,k=w.y,W=w.z,N=d.lowerBound,H=d.upperBound;return N.x/=P,N.y/=k,N.z/=W,H.x/=P,H.y/=k,H.z/=W,this.tree.aabbQuery(d,E)},h.prototype.setScale=function(F){var E=this.scale.x===this.scale.y===this.scale.z,w=F.x===F.y===F.z;E&&w||this.updateNormals(),this.scale.copy(F),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var F=l,E=this.normals,w=0;w<this.indices.length/3;w++){var P=w*3,k=this.indices[P],W=this.indices[P+1],N=this.indices[P+2];this.getVertex(k,f),this.getVertex(W,_),this.getVertex(N,x),h.computeNormal(_,f,x,F),E[P]=F.x,E[P+1]=F.y,E[P+2]=F.z}},h.prototype.updateEdges=function(){for(var F={},E=function(nt,B){var O=k<W?k+"_"+W:W+"_"+k;F[O]=!0},w=0;w<this.indices.length/3;w++){var P=w*3,k=this.indices[P],W=this.indices[P+1];this.indices[P+2],E(),E(),E()}var N=Object.keys(F);this.edges=new Int16Array(N.length*2);for(var w=0;w<N.length;w++){var H=N[w].split("_");this.edges[2*w]=parseInt(H[0],10),this.edges[2*w+1]=parseInt(H[1],10)}},h.prototype.getEdgeVertex=function(F,E,w){var P=this.edges[F*2+(E?1:0)];this.getVertex(P,w)};var p=new a,v=new a;h.prototype.getEdgeVector=function(F,E){var w=p,P=v;this.getEdgeVertex(F,0,w),this.getEdgeVertex(F,1,P),P.vsub(w,E)};var g=new a,m=new a;h.computeNormal=function(F,E,w,P){E.vsub(F,m),w.vsub(E,g),g.cross(m,P),P.isZero()||P.normalize()};var f=new a,_=new a,x=new a;h.prototype.getVertex=function(F,E){var w=this.scale;return this._getUnscaledVertex(F,E),E.x*=w.x,E.y*=w.y,E.z*=w.z,E},h.prototype._getUnscaledVertex=function(F,E){var w=F*3,P=this.vertices;return E.set(P[w],P[w+1],P[w+2])},h.prototype.getWorldVertex=function(F,E,w,P){return this.getVertex(F,P),o.pointToWorldFrame(E,w,P,P),P},h.prototype.getTriangleVertices=function(F,E,w,P){var k=F*3;this.getVertex(this.indices[k],E),this.getVertex(this.indices[k+1],w),this.getVertex(this.indices[k+2],P)},h.prototype.getNormal=function(F,E){var w=F*3;return E.set(this.normals[w],this.normals[w+1],this.normals[w+2])};var y=new c;h.prototype.calculateLocalInertia=function(F,E){this.computeLocalAABB(y);var w=y.upperBound.x-y.lowerBound.x,P=y.upperBound.y-y.lowerBound.y,k=y.upperBound.z-y.lowerBound.z;return E.set(1/12*F*(2*P*2*P+2*k*2*k),1/12*F*(2*w*2*w+2*k*2*k),1/12*F*(2*P*2*P+2*w*2*w))};var M=new a;h.prototype.computeLocalAABB=function(F){var E=F.lowerBound,w=F.upperBound,P=this.vertices.length;this.vertices;var k=M;this.getVertex(0,k),E.copy(k),w.copy(k);for(var W=0;W!==P;W++)this.getVertex(W,k),k.x<E.x?E.x=k.x:k.x>w.x&&(w.x=k.x),k.y<E.y?E.y=k.y:k.y>w.y&&(w.y=k.y),k.z<E.z?E.z=k.z:k.z>w.z&&(w.z=k.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var F=0,E=this.vertices,w=new a,P=0,k=E.length/3;P!==k;P++){this.getVertex(P,w);var W=w.norm2();W>F&&(F=W)}this.boundingSphereRadius=Math.sqrt(F)},new a;var T=new o,C=new c;h.prototype.calculateWorldAABB=function(F,E,w,P){var k=T,W=C;k.position=F,k.quaternion=E,this.aabb.toWorldFrame(k,W),w.copy(W.lowerBound),P.copy(W.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(F,E,w,P,k){F=F||1,E=E||.5,w=w||8,P=P||6,k=k||Math.PI*2;for(var W=[],N=[],H=0;H<=w;H++)for(var nt=0;nt<=P;nt++){var B=nt/P*k,O=H/w*Math.PI*2,Y=(F+E*Math.cos(O))*Math.cos(B),X=(F+E*Math.cos(O))*Math.sin(B),b=E*Math.sin(O);W.push(Y,X,b)}for(var H=1;H<=w;H++)for(var nt=1;nt<=P;nt++){var U=(P+1)*H+nt-1,D=(P+1)*(H-1)+nt-1,I=(P+1)*(H-1)+nt,R=(P+1)*H+nt;N.push(U,D,R),N.push(D,I,R)}return new h(W,N)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],u=[];a.prototype.solve=function(h,l){var d=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,_=f.length,x=h,y,M,T,C,F,E;if(m!==0)for(var w=0;w!==_;w++)f[w].updateSolveMassProperties();var P=c,k=u,W=o;P.length=m,k.length=m,W.length=m;for(var w=0;w!==m;w++){var N=g[w];W[w]=0,k[w]=N.computeB(x),P[w]=1/N.computeC()}if(m!==0){for(var w=0;w!==_;w++){var H=f[w],nt=H.vlambda,B=H.wlambda;nt.set(0,0,0),B&&B.set(0,0,0)}for(d=0;d!==p;d++){C=0;for(var O=0;O!==m;O++){var N=g[O];y=k[O],M=P[O],E=W[O],F=N.computeGWlambda(),T=M*(y-F-N.eps*E),E+T<N.minForce?T=N.minForce-E:E+T>N.maxForce&&(T=N.maxForce-E),W[O]+=T,C+=T>0?T:-T,N.addToWlambda(T)}if(C*C<v)break}for(var w=0;w!==_;w++){var H=f[w],Y=H.velocity,X=H.angularVelocity;Y.vadd(H.vlambda,Y),X&&X.vadd(H.wlambda,X)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],u=[],h={bodies:[]},l=a.STATIC;function d(f){for(var _=f.length,x=0;x!==_;x++){var y=f[x];if(!y.visited&&!(y.body.type&l))return y}return!1}var p=[];function v(f,_,x,y){for(p.push(f),f.visited=!0,_(f,x,y);p.length;)for(var M=p.pop(),T;T=d(M.children);)T.visited=!0,_(T,x,y),p.push(T)}function g(f,_,x){_.push(f.body);for(var y=f.eqs.length,M=0;M!==y;M++){var T=f.eqs[M];x.indexOf(T)===-1&&x.push(T)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,_){for(var x=c,y=this.nodePool,M=_.bodies,T=this.equations,C=T.length,F=M.length,E=this.subsolver;y.length<F;)y.push(this.createNode());x.length=F;for(var w=0;w<F;w++)x[w]=y[w];for(var w=0;w!==F;w++){var P=x[w];P.body=M[w],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var k=0;k!==C;k++){var W=T[k],w=M.indexOf(W.bi),N=M.indexOf(W.bj),H=x[w],nt=x[N];H.children.push(nt),H.eqs.push(W),nt.children.push(H),nt.eqs.push(W)}var B,O=0,Y=u;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var X=h;B=d(x);){Y.length=0,X.bodies.length=0,v(B,g,X.bodies,Y);var b=Y.length;Y=Y.sort(m);for(var w=0;w!==b;w++)E.addEquation(Y[w]);E.solve(f,X),E.removeAllEquations(),O++}return O};function m(f,_){return _.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var u=c[a].indexOf(o);return u!==-1&&c[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var u=0,h=c.length;u<h;u++)c[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,d,p+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new a;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),p.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var _=f.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(p,v.children)}return d};var h=new r;o.prototype.rayQuery=function(l,d,p){return l.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),p=d.children.length-1;p>=0;p--)d.children[p].data.length||d.children.splice(p,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,st,mt,gt,ne,Vt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=lt,Tt.bj=st):Tt=new d(lt,st),Tt.enabled=lt.collisionResponse&&st.collisionResponse&&mt.collisionResponse&&gt.collisionResponse;var Ft=this.currentContactMaterial;Tt.restitution=Ft.restitution,Tt.setSpookParams(Ft.contactEquationStiffness,Ft.contactEquationRelaxation,this.world.dt);var rt=mt.material||lt.material,Pt=gt.material||st.material;return rt&&Pt&&rt.restitution>=0&&Pt.restitution>=0&&(Tt.restitution=rt.restitution*Pt.restitution),Tt.si=ne||mt,Tt.sj=Vt||gt,Tt},v.prototype.createFrictionEquationsFromContact=function(lt,st){var mt=lt.bi,gt=lt.bj,ne=lt.si,Vt=lt.sj,Tt=this.world,Ft=this.currentContactMaterial,rt=Ft.friction,Pt=ne.material||mt.material,Bt=Vt.material||gt.material;if(Pt&&Bt&&Pt.friction>=0&&Bt.friction>=0&&(rt=Pt.friction*Bt.friction),rt>0){var Xt=rt*Tt.gravity.length(),Dt=mt.invMass+gt.invMass;Dt>0&&(Dt=1/Dt);var Rt=this.frictionEquationPool,S=Rt.length?Rt.pop():new p(mt,gt,Xt*Dt),G=Rt.length?Rt.pop():new p(mt,gt,Xt*Dt);return S.bi=G.bi=mt,S.bj=G.bj=gt,S.minForce=G.minForce=-Xt*Dt,S.maxForce=G.maxForce=Xt*Dt,S.ri.copy(lt.ri),S.rj.copy(lt.rj),G.ri.copy(lt.ri),G.rj.copy(lt.rj),lt.ni.tangents(S.t,G.t),S.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),G.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),S.enabled=G.enabled=lt.enabled,st.push(S,G),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(lt){var st=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(st,this.frictionResult)||lt===1)){var mt=this.frictionResult[this.frictionResult.length-2],gt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var ne=st.bi;st.bj;for(var Vt=0;Vt!==lt;Vt++)st=this.result[this.result.length-1-Vt],st.bodyA!==ne?(g.vadd(st.ni,g),m.vadd(st.ri,m),f.vadd(st.rj,f)):(g.vsub(st.ni,g),m.vadd(st.rj,m),f.vadd(st.ri,f));var Tt=1/lt;m.scale(Tt,mt.ri),f.scale(Tt,mt.rj),gt.ri.copy(mt.ri),gt.rj.copy(mt.rj),g.normalize(),g.tangents(mt.t,gt.t)}};var _=new c,x=new c,y=new h,M=new h;v.prototype.getContacts=function(lt,st,mt,gt,ne,Vt,Tt){this.contactPointPool=ne,this.frictionEquationPool=Tt,this.result=gt,this.frictionResult=Vt;for(var Ft=y,rt=M,Pt=_,Bt=x,Xt=0,Dt=lt.length;Xt!==Dt;Xt++){var Rt=lt[Xt],S=st[Xt],G=null;Rt.material&&S.material&&(G=mt.getContactMaterial(Rt.material,S.material)||null);for(var Z=0;Z<Rt.shapes.length;Z++){Rt.quaternion.mult(Rt.shapeOrientations[Z],Ft),Rt.quaternion.vmult(Rt.shapeOffsets[Z],Pt),Pt.vadd(Rt.position,Pt);for(var z=Rt.shapes[Z],Q=0;Q<S.shapes.length;Q++){S.quaternion.mult(S.shapeOrientations[Q],rt),S.quaternion.vmult(S.shapeOffsets[Q],Bt),Bt.vadd(S.position,Bt);var _t=S.shapes[Q];if(!(Pt.distanceTo(Bt)>z.boundingSphereRadius+_t.boundingSphereRadius)){var zt=null;z.material&&_t.material&&(zt=mt.getContactMaterial(z.material,_t.material)||null),this.currentContactMaterial=zt||G||mt.defaultContactMaterial;var It=this[z.type|_t.type];It&&(z.type<_t.type?It.call(this,z,_t,Pt,Bt,Ft,rt,Rt,S,z,_t):It.call(this,_t,z,Bt,Pt,rt,Ft,S,Rt,z,_t))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,st.convexPolyhedronRepresentation.material=st.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st.convexPolyhedronRepresentation,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.createContactEquation(Tt,Ft,lt,st);gt.vsub(mt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(lt.radius,rt.ri),rt.rj.mult(-st.radius,rt.rj),rt.ri.vadd(mt,rt.ri),rt.ri.vsub(Tt.position,rt.ri),rt.rj.vadd(gt,rt.rj),rt.rj.vsub(Ft.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var T=new c,C=new c,F=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=new c,Pt=T;Pt.set(0,0,1),ne.vmult(Pt,Pt);for(var Bt=0;Bt<st.vertices.length/3;Bt++){st.getVertex(Bt,rt);var Xt=new c;Xt.copy(rt),u.pointToWorldFrame(gt,Vt,Xt,rt);var Dt=C;rt.vsub(mt,Dt);var Rt=Pt.dot(Dt);if(Rt<=0){var S=this.createContactEquation(Tt,Ft,lt,st);S.ni.copy(Pt);var G=F;Pt.scale(Dt.dot(Pt),G),rt.vsub(G,G),S.ri.copy(G),S.ri.vsub(Tt.position,S.ri),S.rj.copy(rt),S.rj.vsub(Ft.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}}};var E=new c,w=new c;new c;var P=new c,k=new c,W=new c,N=new c,H=new c,nt=new c,B=new c,O=new c,Y=new c,X=new c,b=new c,U=new r,D=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=W,Pt=N,Bt=H,Xt=nt,Dt=B,Rt=O,S=U,G=k,Z=w,z=D;u.pointToLocalFrame(gt,Vt,mt,Dt);var Q=lt.radius;S.lowerBound.set(Dt.x-Q,Dt.y-Q,Dt.z-Q),S.upperBound.set(Dt.x+Q,Dt.y+Q,Dt.z+Q),st.getTrianglesInAABB(S,z);for(var _t=P,zt=lt.radius*lt.radius,It=0;It<z.length;It++)for(var Ot=0;Ot<3;Ot++)if(st.getVertex(st.indices[z[It]*3+Ot],_t),_t.vsub(Dt,Z),Z.norm2()<=zt){G.copy(_t),u.pointToWorldFrame(gt,Vt,G,_t),_t.vsub(mt,Z);var Ct=this.createContactEquation(Tt,Ft,lt,st);Ct.ni.copy(Z),Ct.ni.normalize(),Ct.ri.copy(Ct.ni),Ct.ri.scale(lt.radius,Ct.ri),Ct.ri.vadd(mt,Ct.ri),Ct.ri.vsub(Tt.position,Ct.ri),Ct.rj.copy(_t),Ct.rj.vsub(Ft.position,Ct.rj),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}for(var It=0;It<z.length;It++)for(var Ot=0;Ot<3;Ot++){st.getVertex(st.indices[z[It]*3+Ot],rt),st.getVertex(st.indices[z[It]*3+(Ot+1)%3],Pt),Pt.vsub(rt,Bt),Dt.vsub(Pt,Rt);var Qt=Rt.dot(Bt);Dt.vsub(rt,Rt);var te=Rt.dot(Bt);if(te>0&&Qt<0){Dt.vsub(rt,Rt),Xt.copy(Bt),Xt.normalize(),te=Rt.dot(Xt),Xt.scale(te,Rt),Rt.vadd(rt,Rt);var de=Rt.distanceTo(Dt);if(de<lt.radius){var Ct=this.createContactEquation(Tt,Ft,lt,st);Rt.vsub(Dt,Ct.ni),Ct.ni.normalize(),Ct.ni.scale(lt.radius,Ct.ri),u.pointToWorldFrame(gt,Vt,Rt,Rt),Rt.vsub(Ft.position,Ct.rj),u.vectorToWorldFrame(Vt,Ct.ni,Ct.ni),u.vectorToWorldFrame(Vt,Ct.ri,Ct.ri),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}}}for(var Me=Y,pe=X,ue=b,me=E,It=0,$t=z.length;It!==$t;It++){st.getTriangleVertices(z[It],Me,pe,ue),st.getNormal(z[It],me),Dt.vsub(Me,Rt);var de=Rt.dot(me);if(me.scale(de,Rt),Dt.vsub(Rt,Rt),de=Rt.distanceTo(Dt),o.pointInTriangle(Rt,Me,pe,ue)&&de<lt.radius){var Ct=this.createContactEquation(Tt,Ft,lt,st);Rt.vsub(Dt,Ct.ni),Ct.ni.normalize(),Ct.ni.scale(lt.radius,Ct.ri),u.pointToWorldFrame(gt,Vt,Rt,Rt),Rt.vsub(Ft.position,Ct.rj),u.vectorToWorldFrame(Vt,Ct.ni,Ct.ni),u.vectorToWorldFrame(Vt,Ct.ri,Ct.ri),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}}z.length=0};var I=new c,R=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.createContactEquation(Tt,Ft,lt,st);if(rt.ni.set(0,0,1),Vt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(lt.radius,rt.ri),mt.vsub(gt,I),rt.ni.mult(rt.ni.dot(I),R),I.vsub(R,rt.rj),-I.dot(rt.ni)<=lt.radius){var Pt=rt.ri,Bt=rt.rj;Pt.vadd(mt,Pt),Pt.vsub(Tt.position,Pt),Bt.vadd(gt,Bt),Bt.vsub(Ft.position,Bt),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var $=new c,at=new c,et=new c;function K(lt,st,mt){for(var gt=null,ne=lt.length,Vt=0;Vt!==ne;Vt++){var Tt=lt[Vt],Ft=$;lt[(Vt+1)%ne].vsub(Tt,Ft);var rt=at;Ft.cross(st,rt);var Pt=et;mt.vsub(Tt,Pt);var Bt=rt.dot(Pt);if(gt===null||Bt>0&&gt===!0||Bt<=0&&gt===!1){gt===null&&(gt=Bt>0);continue}else return!1}return!0}var ot=new c,ht=new c,q=new c,Lt=new c,ft=[new c,new c,new c,new c,new c,new c],it=new c,ct=new c,Zt=new c,At=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.v3pool,Pt=ft;mt.vsub(gt,ot),st.getSideNormals(Pt,Vt);for(var Bt=lt.radius,Xt=!1,Dt=ct,Rt=Zt,S=At,G=null,Z=0,z=0,Q=0,_t=null,zt=0,It=Pt.length;zt!==It&&Xt===!1;zt++){var Ot=ht;Ot.copy(Pt[zt]);var Ct=Ot.norm();Ot.normalize();var Qt=ot.dot(Ot);if(Qt<Ct+Bt&&Qt>0){var te=q,de=Lt;te.copy(Pt[(zt+1)%3]),de.copy(Pt[(zt+2)%3]);var Me=te.norm(),pe=de.norm();te.normalize(),de.normalize();var ue=ot.dot(te),me=ot.dot(de);if(ue<Me&&ue>-Me&&me<pe&&me>-pe){var Ee=Math.abs(Qt-Ct-Bt);(_t===null||Ee<_t)&&(_t=Ee,z=ue,Q=me,G=Ct,Dt.copy(Ot),Rt.copy(te),S.copy(de),Z++)}}}if(Z){Xt=!0;var Kt=this.createContactEquation(Tt,Ft,lt,st);Dt.mult(-Bt,Kt.ri),Kt.ni.copy(Dt),Kt.ni.negate(Kt.ni),Dt.mult(G,Dt),Rt.mult(z,Rt),Dt.vadd(Rt,Dt),S.mult(Q,S),Dt.vadd(S,Kt.rj),Kt.ri.vadd(mt,Kt.ri),Kt.ri.vsub(Tt.position,Kt.ri),Kt.rj.vadd(gt,Kt.rj),Kt.rj.vsub(Ft.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}for(var $t=rt.get(),Ke=it,fe=0;fe!==2&&!Xt;fe++)for(var xe=0;xe!==2&&!Xt;xe++)for(var Ae=0;Ae!==2&&!Xt;Ae++)if($t.set(0,0,0),fe?$t.vadd(Pt[0],$t):$t.vsub(Pt[0],$t),xe?$t.vadd(Pt[1],$t):$t.vsub(Pt[1],$t),Ae?$t.vadd(Pt[2],$t):$t.vsub(Pt[2],$t),gt.vadd($t,Ke),Ke.vsub(mt,Ke),Ke.norm2()<Bt*Bt){Xt=!0;var Kt=this.createContactEquation(Tt,Ft,lt,st);Kt.ri.copy(Ke),Kt.ri.normalize(),Kt.ni.copy(Kt.ri),Kt.ri.mult(Bt,Kt.ri),Kt.rj.copy($t),Kt.ri.vadd(mt,Kt.ri),Kt.ri.vsub(Tt.position,Kt.ri),Kt.rj.vadd(gt,Kt.rj),Kt.rj.vsub(Ft.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}rt.release($t),$t=null;for(var Le=rt.get(),Ze=rt.get(),Kt=rt.get(),Se=rt.get(),Ee=rt.get(),we=Pt.length,fe=0;fe!==we&&!Xt;fe++)for(var xe=0;xe!==we&&!Xt;xe++)if(fe%3!==xe%3){Pt[xe].cross(Pt[fe],Le),Le.normalize(),Pt[fe].vadd(Pt[xe],Ze),Kt.copy(mt),Kt.vsub(Ze,Kt),Kt.vsub(gt,Kt);var on=Kt.dot(Le);Le.mult(on,Se);for(var Ae=0;Ae===fe%3||Ae===xe%3;)Ae++;Ee.copy(mt),Ee.vsub(Se,Ee),Ee.vsub(Ze,Ee),Ee.vsub(gt,Ee);var gs=Math.abs(on),wr=Ee.norm();if(gs<Pt[Ae].norm()&&wr<Bt){Xt=!0;var ye=this.createContactEquation(Tt,Ft,lt,st);Ze.vadd(Se,ye.rj),ye.rj.copy(ye.rj),Ee.negate(ye.ni),ye.ni.normalize(),ye.ri.copy(ye.rj),ye.ri.vadd(gt,ye.ri),ye.ri.vsub(mt,ye.ri),ye.ri.normalize(),ye.ri.mult(Bt,ye.ri),ye.ri.vadd(mt,ye.ri),ye.ri.vsub(Tt.position,ye.ri),ye.rj.vadd(gt,ye.rj),ye.rj.vsub(Ft.position,ye.rj),this.result.push(ye),this.createFrictionEquationsFromContact(ye,this.frictionResult)}}rt.release(Le,Ze,Kt,Se,Ee)};var kt=new c,Mt=new c,ee=new c,ie=new c,L=new c,A=new c,J=new c,vt=new c,dt=new c,xt=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.v3pool;mt.vsub(gt,kt);for(var Pt=st.faceNormals,Bt=st.faces,Xt=st.vertices,Dt=lt.radius,Rt=0;Rt!==Xt.length;Rt++){var S=Xt[Rt],G=L;Vt.vmult(S,G),gt.vadd(G,G);var Z=ie;if(G.vsub(mt,Z),Z.norm2()<Dt*Dt){Q=!0;var z=this.createContactEquation(Tt,Ft,lt,st);z.ri.copy(Z),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Dt,z.ri),G.vsub(gt,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var Q=!1,Rt=0,_t=Bt.length;Rt!==_t&&Q===!1;Rt++){var zt=Pt[Rt],It=Bt[Rt],Ot=A;Vt.vmult(zt,Ot);var Ct=J;Vt.vmult(Xt[It[0]],Ct),Ct.vadd(gt,Ct);var Qt=vt;Ot.mult(-Dt,Qt),mt.vadd(Qt,Qt);var te=dt;Qt.vsub(Ct,te);var de=te.dot(Ot),Me=xt;if(mt.vsub(Ct,Me),de<0&&Me.dot(Ot)>0){for(var pe=[],ue=0,me=It.length;ue!==me;ue++){var $t=rt.get();Vt.vmult(Xt[It[ue]],$t),gt.vadd($t,$t),pe.push($t)}if(K(pe,Ot,mt)){Q=!0;var z=this.createContactEquation(Tt,Ft,lt,st);Ot.mult(-Dt,z.ri),Ot.negate(z.ni);var Ke=rt.get();Ot.mult(-de,Ke);var fe=rt.get();Ot.mult(-Dt,fe),mt.vsub(gt,z.rj),z.rj.vadd(fe,z.rj),z.rj.vadd(Ke,z.rj),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),rt.release(Ke),rt.release(fe),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var ue=0,xe=pe.length;ue!==xe;ue++)rt.release(pe[ue]);return}else for(var ue=0;ue!==It.length;ue++){var Ae=rt.get(),Le=rt.get();Vt.vmult(Xt[It[(ue+1)%It.length]],Ae),Vt.vmult(Xt[It[(ue+2)%It.length]],Le),gt.vadd(Ae,Ae),gt.vadd(Le,Le);var Ze=Mt;Le.vsub(Ae,Ze);var Kt=ee;Ze.unit(Kt);var Se=rt.get(),Ee=rt.get();mt.vsub(Ae,Ee);var we=Ee.dot(Kt);Kt.mult(we,Se),Se.vadd(Ae,Se);var on=rt.get();if(Se.vsub(mt,on),we>0&&we*we<Ze.norm2()&&on.norm2()<Dt*Dt){var z=this.createContactEquation(Tt,Ft,lt,st);Se.vsub(gt,z.rj),Se.vsub(mt,z.ni),z.ni.normalize(),z.ni.mult(Dt,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var ue=0,xe=pe.length;ue!==xe;ue++)rt.release(pe[ue]);rt.release(Ae),rt.release(Le),rt.release(Se),rt.release(on),rt.release(Ee);return}rt.release(Ae),rt.release(Le),rt.release(Se),rt.release(on),rt.release(Ee)}for(var ue=0,xe=pe.length;ue!==xe;ue++)rt.release(pe[ue])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.planeConvex(lt,st.convexPolyhedronRepresentation,mt,gt,ne,Vt,Tt,Ft)};var Gt=new c,bt=new c,Nt=new c,V=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Gt,Pt=bt;Pt.set(0,0,1),ne.vmult(Pt,Pt);for(var Bt=0,Xt=Nt,Dt=0;Dt!==st.vertices.length;Dt++){rt.copy(st.vertices[Dt]),Vt.vmult(rt,rt),gt.vadd(rt,rt),rt.vsub(mt,Xt);var Rt=Pt.dot(Xt);if(Rt<=0){var S=this.createContactEquation(Tt,Ft,lt,st),G=V;Pt.mult(Pt.dot(Xt),G),rt.vsub(G,G),G.vsub(mt,S.ri),S.ni.copy(Pt),rt.vsub(gt,S.rj),S.ri.vadd(mt,S.ri),S.ri.vsub(Tt.position,S.ri),S.rj.vadd(gt,S.rj),S.rj.vsub(Ft.position,S.rj),this.result.push(S),Bt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}}this.enableFrictionReduction&&Bt&&this.createFrictionFromAverage(Bt)};var Et=new c,pt=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft,rt,Pt,Bt,Xt){var Dt=Et;if(!(mt.distanceTo(gt)>lt.boundingSphereRadius+st.boundingSphereRadius)&&lt.findSeparatingAxis(st,mt,ne,gt,Vt,Dt,Bt,Xt)){var Rt=[],S=pt;lt.clipAgainstHull(mt,ne,st,gt,Vt,Dt,-100,100,Rt);for(var G=0,Z=0;Z!==Rt.length;Z++){var z=this.createContactEquation(Tt,Ft,lt,st,rt,Pt),Q=z.ri,_t=z.rj;Dt.negate(z.ni),Rt[Z].normal.negate(S),S.mult(Rt[Z].depth,S),Rt[Z].point.vadd(S,Q),_t.copy(Rt[Z].point),Q.vsub(mt,Q),_t.vsub(gt,_t),Q.vadd(mt,Q),Q.vsub(Tt.position,Q),_t.vadd(gt,_t),_t.vsub(Ft.position,_t),this.result.push(z),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var Jt=new c,qt=new c,Yt=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Jt;rt.set(0,0,1),Tt.quaternion.vmult(rt,rt);var Pt=qt;gt.vsub(Tt.position,Pt);var Bt=rt.dot(Pt);if(Bt<=0){var Xt=this.createContactEquation(Ft,Tt,st,lt);Xt.ni.copy(rt),Xt.ni.negate(Xt.ni),Xt.ri.set(0,0,0);var Dt=Yt;rt.mult(rt.dot(gt),Dt),gt.vsub(Dt,Dt),Xt.rj.copy(Dt),this.result.push(Xt),this.createFrictionEquationsFromContact(Xt,this.frictionResult)}};var Wt=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Wt;rt.set(0,0,1),gt.vsub(mt,rt);var Pt=rt.norm2();if(Pt<=lt.radius*lt.radius){var Bt=this.createContactEquation(Ft,Tt,st,lt);rt.normalize(),Bt.rj.copy(rt),Bt.rj.mult(lt.radius,Bt.rj),Bt.ni.copy(rt),Bt.ni.negate(Bt.ni),Bt.ri.set(0,0,0),this.result.push(Bt),this.createFrictionEquationsFromContact(Bt,this.frictionResult)}};var Ut=new h,re=new c;new c;var j=new c,St=new c,yt=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=-1,Pt=j,Bt=yt,Xt=null,Dt=re;if(Dt.copy(gt),Dt.vsub(mt,Dt),ne.conjugate(Ut),Ut.vmult(Dt,Dt),lt.pointIsInside(Dt)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(mt,ne),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(ne);for(var Rt=0,S=lt.faces.length;Rt!==S;Rt++){var G=[lt.worldVertices[lt.faces[Rt][0]]],Z=lt.worldFaceNormals[Rt];gt.vsub(G[0],St);var z=-Z.dot(St);(Xt===null||Math.abs(z)<Math.abs(Xt))&&(Xt=z,rt=Rt,Pt.copy(Z))}if(rt!==-1){var Q=this.createContactEquation(Ft,Tt,st,lt);Pt.mult(Xt,Bt),Bt.vadd(gt,Bt),Bt.vsub(mt,Bt),Q.rj.copy(Bt),Pt.negate(Q.ni),Q.ri.set(0,0,0);var _t=Q.ri,zt=Q.rj;_t.vadd(gt,_t),_t.vsub(Ft.position,_t),zt.vadd(mt,zt),zt.vsub(Tt.position,zt),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft)};var ut=new c,wt=new c,jt=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=st.data,Pt=st.elementSize,Bt=lt.boundingSphereRadius,Xt=wt,Dt=jt,Rt=ut;u.pointToLocalFrame(gt,Vt,mt,Rt);var S=Math.floor((Rt.x-Bt)/Pt)-1,G=Math.ceil((Rt.x+Bt)/Pt)+1,Z=Math.floor((Rt.y-Bt)/Pt)-1,z=Math.ceil((Rt.y+Bt)/Pt)+1;if(!(G<0||z<0||S>rt.length||Z>rt[0].length)){S<0&&(S=0),G<0&&(G=0),Z<0&&(Z=0),z<0&&(z=0),S>=rt.length&&(S=rt.length-1),G>=rt.length&&(G=rt.length-1),z>=rt[0].length&&(z=rt[0].length-1),Z>=rt[0].length&&(Z=rt[0].length-1);var Q=[];st.getRectMinMax(S,Z,G,z,Q);var _t=Q[0],zt=Q[1];if(!(Rt.z-Bt>zt||Rt.z+Bt<_t))for(var It=S;It<G;It++)for(var Ot=Z;Ot<z;Ot++)st.getConvexTrianglePillar(It,Ot,!1),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft,null,null,Dt,null),st.getConvexTrianglePillar(It,Ot,!0),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft,null,null,Dt,null)}};var se=new c,le=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=st.data,Pt=lt.radius,Bt=st.elementSize,Xt=le,Dt=se;u.pointToLocalFrame(gt,Vt,mt,Dt);var Rt=Math.floor((Dt.x-Pt)/Bt)-1,S=Math.ceil((Dt.x+Pt)/Bt)+1,G=Math.floor((Dt.y-Pt)/Bt)-1,Z=Math.ceil((Dt.y+Pt)/Bt)+1;if(!(S<0||Z<0||Rt>rt.length||Z>rt[0].length)){Rt<0&&(Rt=0),S<0&&(S=0),G<0&&(G=0),Z<0&&(Z=0),Rt>=rt.length&&(Rt=rt.length-1),S>=rt.length&&(S=rt.length-1),Z>=rt[0].length&&(Z=rt[0].length-1),G>=rt[0].length&&(G=rt[0].length-1);var z=[];st.getRectMinMax(Rt,G,S,Z,z);var Q=z[0],_t=z[1];if(!(Dt.z-Pt>_t||Dt.z+Pt<Q))for(var zt=this.result,It=Rt;It<S;It++)for(var Ot=G;Ot<Z;Ot++){var Ct=zt.length;st.getConvexTrianglePillar(It,Ot,!1),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft),st.getConvexTrianglePillar(It,Ot,!0),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft);var Qt=zt.length-Ct;if(Qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=y;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new x,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new h,new f;var M=new _;if(y.prototype.getContactMaterial=function(O,Y){return this.contactMaterialTable.get(O.id,Y.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var O=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=O,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(O){this.bodies.indexOf(O)===-1&&(O.index=this.bodies.length,this.bodies.push(O),O.world=this,O.initPosition.copy(O.position),O.initVelocity.copy(O.velocity),O.timeLastSleepy=this.time,O instanceof v&&(O.initAngularVelocity.copy(O.angularVelocity),O.initQuaternion.copy(O.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=O,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(O){this.constraints.push(O)},y.prototype.removeConstraint=function(O){var Y=this.constraints.indexOf(O);Y!==-1&&this.constraints.splice(Y,1)},y.prototype.rayTest=function(O,Y,X){X instanceof m?this.raycastClosest(O,Y,{skipBackfaces:!0},X):this.raycastAll(O,Y,{skipBackfaces:!0},X)},y.prototype.raycastAll=function(O,Y,X,b){return X.mode=_.ALL,X.from=O,X.to=Y,X.callback=b,M.intersectWorld(this,X)},y.prototype.raycastAny=function(O,Y,X,b){return X.mode=_.ANY,X.from=O,X.to=Y,X.result=b,M.intersectWorld(this,X)},y.prototype.raycastClosest=function(O,Y,X,b){return X.mode=_.CLOSEST,X.from=O,X.to=Y,X.result=b,M.intersectWorld(this,X)},y.prototype.remove=function(O){O.world=null;var Y=this.bodies.length-1,X=this.bodies,b=X.indexOf(O);if(b!==-1){X.splice(b,1);for(var U=0;U!==X.length;U++)X[U].index=U;this.collisionMatrix.setNumObjects(Y),this.removeBodyEvent.body=O,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(O){this.materials.push(O)},y.prototype.addContactMaterial=function(O){this.contactmaterials.push(O),this.contactMaterialTable.set(O.materials[0].id,O.materials[1].id,O)},typeof performance>"u"&&(performance={}),!performance.now){var T=Date.now();performance.timing&&performance.timing.navigationStart&&(T=performance.timing.navigationStart),performance.now=function(){return Date.now()-T}}var C=new a;y.prototype.step=function(O,Y,X){if(X=X||10,Y=Y||0,Y===0)this.internalStep(O),this.time+=O;else{var b=Math.floor((this.time+Y)/O)-Math.floor(this.time/O);b=Math.min(b,X);for(var U=performance.now(),D=0;D!==b&&(this.internalStep(O),!(performance.now()-U>O*1e3));D++);this.time+=Y;for(var I=this.time%O,R=I/O,$=C,at=this.bodies,et=0;et!==at.length;et++){var K=at[et];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,$),$.scale(R,$),K.position.vadd($,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var F={type:"postStep"},E={type:"preStep"},w={type:"collide",body:null,contact:null},P=[],k=[],W=[],N=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var H=new o,nt=new o,B=new a;y.prototype.internalStep=function(O){this.dt=O;var Y=this.contacts,X=W,b=N,U=this.numObjects(),D=this.bodies,I=this.solver,R=this.gravity,$=this.doProfiling,at=this.profile,et=v.DYNAMIC,K,ot=this.constraints,ht=k;R.norm();var q=R.x,Lt=R.y,ft=R.z,it=0;for($&&(K=performance.now()),it=0;it!==U;it++){var ct=D[it];if(ct.type&et){var Zt=ct.force,At=ct.mass;Zt.x+=At*q,Zt.y+=At*Lt,Zt.z+=At*ft}}for(var it=0,kt=this.subsystems.length;it!==kt;it++)this.subsystems[it].update();$&&(K=performance.now()),X.length=0,b.length=0,this.broadphase.collisionPairs(this,X,b),$&&(at.broadphase=performance.now()-K);var Et=ot.length;for(it=0;it!==Et;it++){var Mt=ot[it];if(!Mt.collideConnected)for(var ee=X.length-1;ee>=0;ee-=1)(Mt.bodyA===X[ee]&&Mt.bodyB===b[ee]||Mt.bodyB===X[ee]&&Mt.bodyA===b[ee])&&(X.splice(ee,1),b.splice(ee,1))}this.collisionMatrixTick(),$&&(K=performance.now());var ie=P,L=Y.length;for(it=0;it!==L;it++)ie.push(Y[it]);Y.length=0;var A=this.frictionEquations.length;for(it=0;it!==A;it++)ht.push(this.frictionEquations[it]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,b,this,Y,ie,this.frictionEquations,ht),$&&(at.narrowphase=performance.now()-K),$&&(K=performance.now());for(var it=0;it<this.frictionEquations.length;it++)I.addEquation(this.frictionEquations[it]);for(var J=Y.length,vt=0;vt!==J;vt++){var Mt=Y[vt],ct=Mt.bi,dt=Mt.bj;Mt.si,Mt.sj;var xt;if(ct.material&&dt.material?xt=this.getContactMaterial(ct.material,dt.material)||this.defaultContactMaterial:xt=this.defaultContactMaterial,xt.friction,ct.material&&dt.material&&(ct.material.friction>=0&&dt.material.friction>=0&&ct.material.friction*dt.material.friction,ct.material.restitution>=0&&dt.material.restitution>=0&&(Mt.restitution=ct.material.restitution*dt.material.restitution)),I.addEquation(Mt),ct.allowSleep&&ct.type===v.DYNAMIC&&ct.sleepState===v.SLEEPING&&dt.sleepState===v.AWAKE&&dt.type!==v.STATIC){var Gt=dt.velocity.norm2()+dt.angularVelocity.norm2(),bt=Math.pow(dt.sleepSpeedLimit,2);Gt>=bt*2&&(ct._wakeUpAfterNarrowphase=!0)}if(dt.allowSleep&&dt.type===v.DYNAMIC&&dt.sleepState===v.SLEEPING&&ct.sleepState===v.AWAKE&&ct.type!==v.STATIC){var Nt=ct.velocity.norm2()+ct.angularVelocity.norm2(),V=Math.pow(ct.sleepSpeedLimit,2);Nt>=V*2&&(dt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ct,dt,!0),this.collisionMatrixPrevious.get(ct,dt)||(w.body=dt,w.contact=Mt,ct.dispatchEvent(w),w.body=ct,dt.dispatchEvent(w))}for($&&(at.makeContactConstraints=performance.now()-K,K=performance.now()),it=0;it!==U;it++){var ct=D[it];ct._wakeUpAfterNarrowphase&&(ct.wakeUp(),ct._wakeUpAfterNarrowphase=!1)}var Et=ot.length;for(it=0;it!==Et;it++){var Mt=ot[it];Mt.update();for(var ee=0,pt=Mt.equations.length;ee!==pt;ee++){var Jt=Mt.equations[ee];I.addEquation(Jt)}}I.solve(O,this),$&&(at.solve=performance.now()-K),I.removeAllEquations();var qt=Math.pow;for(it=0;it!==U;it++){var ct=D[it];if(ct.type&et){var Yt=qt(1-ct.linearDamping,O),Wt=ct.velocity;Wt.mult(Yt,Wt);var Ut=ct.angularVelocity;if(Ut){var re=qt(1-ct.angularDamping,O);Ut.mult(re,Ut)}}}for(this.dispatchEvent(E),it=0;it!==U;it++){var ct=D[it];ct.preStep&&ct.preStep.call(ct)}$&&(K=performance.now());var j=H,St=nt,yt=this.stepnumber,ut=v.DYNAMIC|v.KINEMATIC,wt=yt%(this.quatNormalizeSkip+1)===0,jt=this.quatNormalizeFast,se=O*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,it=0;it!==U;it++){var le=D[it],lt=le.force,st=le.torque;if(le.type&ut&&le.sleepState!==v.SLEEPING){var mt=le.velocity,gt=le.angularVelocity,ne=le.position,Vt=le.quaternion,Tt=le.invMass,Ft=le.invInertiaWorld;mt.x+=lt.x*Tt*O,mt.y+=lt.y*Tt*O,mt.z+=lt.z*Tt*O,le.angularVelocity&&(Ft.vmult(st,B),B.mult(O,B),B.vadd(gt,gt)),ne.x+=mt.x*O,ne.y+=mt.y*O,ne.z+=mt.z*O,le.angularVelocity&&(j.set(gt.x,gt.y,gt.z,0),j.mult(Vt,St),Vt.x+=se*St.x,Vt.y+=se*St.y,Vt.z+=se*St.z,Vt.w+=se*St.w,wt&&(jt?Vt.normalizeFast():Vt.normalize())),le.aabb&&(le.aabbNeedsUpdate=!0),le.updateInertiaWorld&&le.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,$&&(at.integrate=performance.now()-K),this.time+=O,this.stepnumber+=1,this.dispatchEvent(F),it=0;it!==U;it++){var ct=D[it],rt=ct.postStep;rt&&rt.call(ct)}if(this.allowSleep)for(it=0;it!==U;it++)D[it].sleepTick(this.time)},y.prototype.clearForces=function(){for(var O=this.bodies,Y=O.length,X=0;X!==Y;X++){var b=O[X];b.force,b.torque,b.force.set(0,0,0),b.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Zl);var lv=Zl.exports;const ve=ov(lv);var dr=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++i%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var l=0;l<t.children.length;l++)t.children[l].style.display=l===h?"block":"none";i=h}var s=(performance||Date).now(),r=s,a=0,o=e(new dr.Panel("FPS","#0ff","#002")),c=e(new dr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=e(new dr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(c.update(h-s,200),h>=r+1e3&&(o.update(a*1e3/(h-r),100),r=h,a=0,u)){var l=performance.memory;u.update(l.usedJSHeapSize/1048576,l.jsHeapSizeLimit/1048576)}return h},update:function(){s=this.end()},domElement:t,setMode:n}};dr.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,c=48*a,u=3*a,h=2*a,l=3*a,d=15*a,p=74*a,v=30*a,g=document.createElement("canvas");g.width=o,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,o,c),m.fillStyle=t,m.fillText(i,u,h),m.fillRect(l,d,p,v),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(l,d,p,v),{dom:g,update:function(f,_){n=Math.min(n,f),s=Math.max(s,f),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=t,m.fillText(r(f)+" "+i+" ("+r(n)+"-"+r(s)+")",u,h),m.drawImage(g,l+a,d,p-a,v,l,d,p-a,v),m.fillRect(l+p-a,d,a,v),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(l+p-a,d,a,r((1-f/_)*v))}}};const cv=dr;new $l;const hv=new zm,tr=hv.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),ei=new ve.Material("plastic"),Jl=new ve.Material("target"),uv=new ve.Material("concrete"),Ql=new ve.Material("metal"),tc=new ve.ContactMaterial(uv,ei,{friction:.9,restitution:.4}),dv=new ve.ContactMaterial(ei,ei,{friction:.1,restitution:.7});new ve.ContactMaterial(Ql,Jl,{friction:.1,restitution:3});const fv=new ps(1,16,16),dl=new yn(1,1,1),ec=new Fn({metalness:.3,roughness:.4,envMap:tr,envMapIntensity:.5}),pv=(i,t,e,n,s,r)=>{const a=new ze(fv,ec);a.castShadow=!0,a.position.copy(r),a.scale.set(s,s,s),e.add(a);const o=new ve.Sphere(s),c=new ve.Body({mass:.5,shape:o,position:new ve.Vec3(0,3,0),material:ei});c.position.copy(r),c.addEventListener("collide",n),t.add(c),i.push({mesh:a,body:c})},da=(i,t,e,n,s,r,a,o,c)=>{let u;if(c){const p=new Fn({metalness:.3,roughness:.4,envMap:tr,envMapIntensity:.5,color:c});u=new ze(dl,p)}else u=new ze(dl,ec);o||(u.castShadow=!0,u.position.copy(r),u.scale.set(s,s,s),e.add(u));let h=a||a===0?a:.1;const l=new ve.Box(new ve.Vec3(s/2,s/2,s/2)),d=new ve.Body({mass:h,shape:l,position:new ve.Vec3(0,3,0),material:c&&!o?Jl:ei});d.position.copy(r),d.addEventListener("collide",n),i.push({mesh:u,body:d}),t.add(d)},Vn=new Gm(16777215,.6);Vn.castShadow=!0;Vn.shadow.mapSize.set(1024,1024);Vn.shadow.camera.far=45;Vn.shadow.camera.left=-20;Vn.shadow.camera.top=20;Vn.shadow.camera.right=20;Vn.shadow.camera.bottom=-20;Vn.position.set(5,5,5);const mv=new km(16777215,2.2),Yn={width:window.innerWidth,height:window.innerHeight},_n=new sn(56,Yn.width/Yn.height,.1,100);_n.position.set(0,5,10);_n.lookAt(new tt(0,10,-20));const vv=1.5;_n.setViewOffset(Yn.width*3,Yn.height*vv,Yn.width*1,Yn.height*0,Yn.width,Yn.height);const Fe=new ve.World;Fe.gravity.set(0,-9.82,0);Fe.broadphase=new ve.SAPBroadphase(Fe);Fe.allowSleep=!0;Fe.defaultContactMaterial=tc;Fe.addContactMaterial(tc);Fe.addContactMaterial(dv);const Ve=new Im;Ve.background="#0000ff";let gv="#fff";const _v=new wa(gv,20,70);Ve.fog=_v;const xv=new Audio("/sounds/hit.mp3"),yv=new Audio("/sounds/win.mp3");xv.preload="auto";yv.preload="auto";const zn=i=>{},Mv=/^[og]\s*(.+)?/,Ev=/^mtllib /,Sv=/^usemtl /,wv=/^usemap /,fl=/\s+/,pl=new tt,Js=new tt,ml=new tt,vl=new tt,nn=new tt,Jr=new ce;function bv(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const u={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;pl.fromArray(s,t),Js.fromArray(s,e),ml.fromArray(s,n),nn.subVectors(ml,Js),vl.subVectors(pl,Js),nn.cross(vl),nn.normalize(),r.push(nn.x,nn.y,nn.z),r.push(nn.x,nn.y,nn.z),r.push(nn.x,nn.y,nn.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,a,o,c,u){const h=this.vertices.length;let l=this.parseVertexIndex(t,h),d=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(l,d,p),this.addColor(l,d,p),o!==void 0&&o!==""){const v=this.normals.length;l=this.parseNormalIndex(o,v),d=this.parseNormalIndex(c,v),p=this.parseNormalIndex(u,v),this.addNormal(l,d,p)}else this.addFaceNormal(l,d,p);if(s!==void 0&&s!==""){const v=this.uvs.length;l=this.parseUVIndex(s,v),d=this.parseUVIndex(r,v),p=this.parseUVIndex(a,v),this.addUV(l,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class nc extends Qi{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,a=new Om(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new bv;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const u=n[o].trimStart();if(u.length===0)continue;const h=u.charAt(0);if(h!=="#")if(h==="v"){const l=u.split(fl);switch(l[0]){case"v":e.vertices.push(parseFloat(l[1]),parseFloat(l[2]),parseFloat(l[3])),l.length>=7?(Jr.setRGB(parseFloat(l[4]),parseFloat(l[5]),parseFloat(l[6])).convertSRGBToLinear(),e.colors.push(Jr.r,Jr.g,Jr.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(l[1]),parseFloat(l[2]),parseFloat(l[3]));break;case"vt":e.uvs.push(parseFloat(l[1]),parseFloat(l[2]));break}}else if(h==="f"){const d=u.slice(1).trim().split(fl),p=[];for(let g=0,m=d.length;g<m;g++){const f=d[g];if(f.length>0){const _=f.split("/");p.push(_)}}const v=p[0];for(let g=1,m=p.length-1;g<m;g++){const f=p[g],_=p[g+1];e.addFace(v[0],f[0],_[0],v[1],f[1],_[1],v[2],f[2],_[2])}}else if(h==="l"){const l=u.substring(1).trim().split(" ");let d=[];const p=[];if(u.indexOf("/")===-1)d=l;else for(let v=0,g=l.length;v<g;v++){const m=l[v].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(d,p)}else if(h==="p"){const d=u.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((s=Mv.exec(u))!==null){const l=(" "+s[0].slice(1).trim()).slice(1);e.startObject(l)}else if(Sv.test(u))e.object.startMaterial(u.substring(7).trim(),e.materialLibraries);else if(Ev.test(u))e.materialLibraries.push(u.substring(7).trim());else if(wv.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=u.split(" "),s.length>1){const d=s[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const l=e.object.currentMaterial();l&&(l.smooth=e.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}e.finalize();const r=new ar;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=e.objects.length;o<c;o++){const u=e.objects[o],h=u.geometry,l=u.materials,d=h.type==="Line",p=h.type==="Points";let v=!1;if(h.vertices.length===0)continue;const g=new tn;g.setAttribute("position",new Re(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new Re(h.normals,3)),h.colors.length>0&&(v=!0,g.setAttribute("color",new Re(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new Re(h.uvs,2));const m=[];for(let _=0,x=l.length;_<x;_++){const y=l[_],M=y.name+"_"+y.smooth+"_"+v;let T=e.materials[M];if(this.materials!==null){if(T=this.materials.create(y.name),d&&T&&!(T instanceof ur)){const C=new ur;xn.prototype.copy.call(C,T),C.color.copy(T.color),T=C}else if(p&&T&&!(T instanceof or)){const C=new or({size:10,sizeAttenuation:!1});xn.prototype.copy.call(C,T),C.color.copy(T.color),C.map=T.map,T=C}}T===void 0&&(d?T=new ur:p?T=new or({size:1,sizeAttenuation:!1}):T=new Nm,T.name=y.name,T.flatShading=!y.smooth,T.vertexColors=v,e.materials[M]=T),m.push(T)}let f;if(m.length>1){for(let _=0,x=l.length;_<x;_++){const y=l[_];g.addGroup(y.groupStart,y.groupCount,_)}d?f=new ca(g,m):p?f=new js(g,m):f=new ze(g,m)}else d?f=new ca(g,m[0]):p?f=new js(g,m[0]):f=new ze(g,m[0]);f.name=u.name,r.add(f)}else if(e.vertices.length>0){const o=new or({size:1,sizeAttenuation:!1}),c=new tn;c.setAttribute("position",new Re(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new Re(e.colors,3)),o.vertexColors=!0);const u=new js(c,o);r.add(u)}return r}}const Cn=.7,Av=(i,t,e)=>{const s=new ve.Sphere(.25),r=new ve.Body({mass:2,shape:s,position:new ve.Vec3(0,Cn+.25,0),material:Ql});r.allowSleep=!1,r.addEventListener("collide",e),i.addBody(r);const a=new ze(new ps(.25,32,32),new Fn({metalness:1,roughness:.4,envMap:tr,envMapIntensity:.5}));console.log("bullet",a),a.castShadow=!0,a.position.y=Cn,t.add(a);const o=new ze(new yn(.01,.01,6),new Fn({color:"#f00",metalness:.5,roughness:.4,transparent:!0,opacity:.5}));o.position.set(0,Cn+.25,0);const c=new ze(new yn(.1,.1,.1),new Fn({color:"#ff0",metalness:1,roughness:.4}));c.position.set(1,Cn+.25,0),t.add(o,c);const u=new ve.Box(new ve.Vec3(.2,Cn/2,.2)),h=new ve.Body({mass:0,shape:u,position:new ve.Vec3(0,Cn/2,0),material:ei});return i.add(h),{bulletBody:r,bullet:a,aimHelper:o,powerHelper:c,shotheight:Cn}},Tv=new Fn({metalness:.2,color:"#E3AF66",roughness:.4,envMapIntensity:.5}),ii=new $l().load("textures/wood.jpg");ii.generateMipmaps=!1;ii.minFilter=Oe;ii.magFilter=Oe;ii.repeat.x=.1;ii.repeat.y=.1;ii.wrapS=fr;ii.wrapT=fr;const Rv=new Fn({metalness:.2,roughness:.4,map:ii,envMap:tr,envMapIntensity:.5}),ic=new Fn({metalness:.9,color:"#fff",roughness:.2,envMap:tr,envMapIntensity:.15}),Cv=async i=>{const t=new nc;return new Promise((e,n)=>{t.load("models/sightedcannon.obj",function(s){s.traverse(r=>{r.castShadow=!0,r.isMesh&&(r.name==="Body1"?r.material=ic:r.material=Tv)}),s.scale.set(.15,.15,.15),s.position.y=Cn+.25,s.rotation.z=Math.PI*2,i.add(s),e(s)},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log("An error happened",s)})})},Pv=i=>{const t=new nc;return new Promise((e,n)=>{t.load("models/stand.obj",function(s){s.traverse(r=>{r.castShadow=!0,r.isMesh&&(r.name.includes("metal")?r.material=ic:r.material=Rv)}),console.log("object",s),s.scale.set(.15,.15,.15),s.position.y=Cn+.25,s.rotation.z=Math.PI*2,i.add(s),e(s)},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log("An error happened",s)})})},Lv=new URLSearchParams(window.location.search),rc=Lv.get("debug")==="true";console.log(rc);const xr=new av;var ls=new cv;rc?(xr.show(),document.body.appendChild(ls.dom),ls.showPanel(0)):xr.hide();let yr=0,In=1,Qn=0,ni=!1,Nn=3;const Ye={bullet:{diameter:.25,x:0,y:0,z:0},plane:{width:6,length:16}},Iv=i=>{i.body.material.name==="target"&&i.body.mass!==0&&Be.map((t,e)=>{i.body===t.body&&(In++,yr=yr+50*(Qn+1)*In,setTimeout(()=>{t.body.removeEventListener("collide",zn),Fe.removeBody(t.body),pi--,Ve.remove(t.mesh)},30))})};let Be=[];const sc=[],Aa={createBox:()=>{for(let i=0;i<10;i++)da(Be,Fe,Ve,zn,Math.random()*.1,{x:0,y:10,z:0})},createSphere:()=>{for(let i=0;i<1;i++)pv(sc,Fe,Ve,zn,Math.random(),{x:0,y:10,z:0})},levelUp:()=>{Ca()}};xr.add(Aa,"createBox");xr.add(Aa,"createSphere");xr.add(Aa,"levelUp");const Sr=Av(Fe,Ve,Iv),Qs=await Cv(Ve),gl=await Pv(Ve),Pn=Sr.bulletBody,Wi=Sr.bullet,_l=Sr.aimHelper,ta=Sr.powerHelper,Dv=Sr.shotheight;let pi=0;const Ta=()=>{pi=0;let i=.1-Qn*.005,t=.05+Qn*.02;if(Qn<40&&i>0)for(let e=0;e<Ye.plane.length-8;e++)for(let n=0;n<Ye.plane.width-1;n++){const s=-e-4,r=-n+Ye.plane.width/2-1,a=Math.random();a>1-i?(pi++,da(Be,Fe,Ve,zn,.9,{x:r,y:.5,z:s},.5,!1,"#f00")):a<t&&da(Be,Fe,Ve,zn,.9,{x:r,y:.5,z:s})}else ni=!0;pi<1&&i>0?(uc(),Ta()):fa=!1};let ts=new yn(Ye.plane.width,100,Ye.plane.length);const xi=new ze(ts,new Fn({color:"#34de78",metalness:.3,roughness:.4,envMap:tr,envMapIntensity:.5,opacity:.2}));xi.receiveShadow=!0;xi.position.y=-50;xi.position.z=-Ye.plane.length/2+4;Ve.add(xi);const Nv=new ve.Box(new ve.Vec3(Ye.plane.width/2,100/2,Ye.plane.length/2)),Ra=new ve.Body({mass:0,shape:Nv,material:ei});Ra.position.copy(xi.position);Ra.addEventListener("collide",zn);Fe.add(Ra);new Xm(5);Ve.add(mv);Ve.add(Vn);const qe={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{qe.width=window.innerWidth,qe.height=window.innerHeight,_n.aspect=qe.width/qe.height,_n.setViewOffset(qe.width*3,qe.height*1.5,qe.width*1,qe.height*0,qe.width,qe.height),_n.updateProjectionMatrix(),yi.setSize(qe.width,qe.height),yi.setPixelRatio(Math.min(window.devicePixelRatio,2))});Ve.add(_n);const ac=document.querySelector("canvas.webgl"),oc=new Ym(_n,ac);oc.enableDamping=!0;const yi=new Yl({canvas:ac});yi.shadowMap.enabled=!0;yi.shadowMap.type=Ml;yi.setSize(qe.width,qe.height);yi.setPixelRatio(Math.min(window.devicePixelRatio,2));let Bn={x:0,y:0,z:0},lc;const ms=()=>{if(console.log("firing, gamneover?",ni),!ni)if(Wi.position.x===0){Nn--,document.getElementById("bulletCounter").innerHTML=Nn,clearInterval(lc),setTimeout(()=>{const n=document.getElementById("firebtn"),s=1;n.style.transform=`scale(${s})`},250),Ki();const i=-2e3*Bn.x,t=-2e3*Bn.y,e=-2e3*Bn.z;Pn.applyForce(new ve.Vec3(i,t,e),Pn.position),mi=0,Ki()}else console.log("bullet not in position, cant fire",Wi.position.x)},vs=()=>{console.log("resetting"),ni?(console.log("game is over"),In=1,Pn.position.set(0,.95,0),Pn.velocity.set(0,0,0),Pn.angularVelocity.set(0,0,0)):(console.log("game is not over"),In>1&&Nn++,In>5&&Nn++,In>10&&Nn++,Nn<=0&&(ni=!0,zv(),console.log("game over")),In=1,Pn.position.set(0,.95,0),Pn.velocity.set(0,0,0),Pn.angularVelocity.set(0,0,0)),Ov()};let Un=0,pn=0,mi=0;const Ki=()=>{var i=(mi+.3)*Math.sin(pn),t=-(mi+.3)*Math.cos(pn)*Math.sin(Un),e=(mi+.3)*Math.cos(pn)*Math.cos(Un);Bn.x=i,Bn.y=t,Bn.z=e};Ki();const Uv=i=>{Un=Number(i.target.value),Ki()},Fv=i=>{pn=-Number(i.target.value),Ki()};function cc(i){i.preventDefault(),lc=setInterval(hc,100)}const hc=()=>{if(!Xi&&!ni)if(Wi.position.x!==0)console.log("not in place, cant fire");else{mi+=.05;const i=document.getElementById("firebtn"),t=1+mi;i.style.transform=`scale(${t})`,Ki(),mi>=2&&(Xi=!0,ms(),setTimeout(()=>{Xi=!1},2e3))}},Bv=()=>{console.log("restarting"),Qn=-1,yr=0,In=1,ni=!1,Nn=2,ni=!1,vs(),Ca(),document.getElementById("gameOverModal").classList.remove("visible")};document.getElementById("angleInput").addEventListener("input",Uv,!1);document.getElementById("windageInput").addEventListener("input",Fv,!1);document.getElementById("firebtn").addEventListener("mousedown",cc);document.getElementById("firebtn").addEventListener("touchstart",cc);document.getElementById("firebtn").addEventListener("touchend",ms);document.getElementById("firebtn").addEventListener("mouseup",ms);document.getElementById("resetbtn").addEventListener("click",vs);document.getElementById("restartBtn").addEventListener("click",Bv);let Xi=!1,Rn=0;document.addEventListener("keydown",function(i){i.keyCode==40?(Rn+=.005,Un<=1.57&&(Un+=Rn)):i.keyCode==38?(Rn+=.005,Un>=-1&&(Un-=Rn)):i.keyCode==37?(Rn+=.005,pn<=.7853&&(pn+=Rn)):i.keyCode==39?(Rn+=.005,pn>=-.7853&&(pn-=Rn)):i.keyCode==32&&hc()});document.addEventListener("keyup",function(i){Rn=0,Xi||i.keyCode==32&&(ms(),Xi=!0,setTimeout(()=>{Xi=!1},2e3))});const uc=()=>{Be.map(i=>{i.body.removeEventListener("collide",zn),Fe.removeBody(i.body),Ve.remove(i.mesh)}),Be=[]};let fa=!1;const Ca=()=>{Nn++,vs(),Qn++,Ye.plane.length=20+Qn*2,uc(),ts.dispose(),ts=new yn(Ye.plane.width,100,Ye.plane.length),xi.geometry=ts,xi.position.z=-Ye.plane.length/2+4;let i=new ve.Box(new ve.Vec3(Ye.plane.width/2,100/2,6/2)),t=new ve.Body({mass:0,shape:i,material:ei,position:new ve.Vec3(0,-50,-Ye.plane.length+7)});t.addEventListener("collide",zn),Fe.add(t),Ta()},Ov=()=>{console.log("updating details"),document.getElementById("levelnr").innerHTML=Qn,document.getElementById("scorenr").innerHTML=yr,document.getElementById("blocknr").innerHTML=pi,document.getElementById("multiplier").innerHTML=In,document.getElementById("bulletCounter").innerHTML=Nn};document.getElementById("infobtn").addEventListener("click",()=>{document.getElementById("infomodal").classList.toggle("visible")});document.getElementById("closebtn").addEventListener("click",()=>{document.getElementById("infomodal").classList.remove("visible")});const zv=()=>{console.log("showing game over"),document.getElementById("finScore").innerHTML=yr,document.getElementById("gameOverModal").classList.toggle("visible")},Vv=new Wm;let xl=0;const dc=()=>{ls.begin();const i=Vv.getElapsedTime();let t=i-xl;xl=i,oc.update(),Fe.step(1/60,t,3),Wi.position.copy(Pn.position),Wi.position.y<-10&&vs();for(var e=Be.length-1;e>=0;e--)Be[e].mesh.position.copy(Be[e].body.position),Be[e].mesh.quaternion.copy(Be[e].body.quaternion),Be[e].mesh.position.y<-10&&(Be[e].body.material.name==="target"&&pi--,Be[e].body.removeEventListener("collide",zn),Fe.removeBody(Be[e].body),Ve.remove(Be[e].mesh),Be.splice(e,1));sc.map(n=>{n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion)}),pi===0&&!fa&&(fa=!0,setTimeout(Ca,1e3)),_l.rotation.x=Un,_l.rotation.y=pn,Qs&&(Qs.rotation.y=pn+Math.PI,Qs.rotation.x=Un),gl&&(gl.rotation.y=pn+Math.PI),ta.position.x=Bn.x,ta.position.y=Bn.y+Dv+.25,ta.position.z=Bn.z,_n.lookAt(Wi.position),yi.render(Ve,_n),ls.end(),window.requestAnimationFrame(dc)};Ta();dc();
//# sourceMappingURL=index-7474b394.js.map
