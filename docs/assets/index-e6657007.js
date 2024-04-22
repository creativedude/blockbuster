(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const js="158",ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gl=0,ca=1,Wl=2,Yo=1,$o=2,wn=3,qn=0,Ye=1,bn=2,Wn=0,Ii=1,ha=2,ua=3,da=4,kl=5,Qn=100,Xl=101,ql=102,fa=103,pa=104,Yl=200,$l=201,jl=202,Kl=203,Bs=204,Os=205,Zl=206,Jl=207,Ql=208,tc=209,ec=210,nc=211,ic=212,rc=213,sc=214,ac=0,oc=1,lc=2,zr=3,cc=4,hc=5,uc=6,dc=7,jo=0,fc=1,pc=2,kn=0,mc=1,vc=2,gc=3,_c=4,xc=5,Ko=300,Bi=301,Oi=302,zs=303,Vs=304,qr=306,Hs=1e3,hn=1001,Gs=1002,Ge=1003,ma=1004,is=1005,en=1006,yc=1007,tr=1008,Xn=1009,Mc=1010,Ec=1011,Ks=1012,Zo=1013,zn=1014,Vn=1015,er=1016,Jo=1017,Qo=1018,ei=1020,Sc=1021,un=1023,wc=1024,bc=1025,ni=1026,zi=1027,Ac=1028,tl=1029,Tc=1030,el=1031,nl=1033,rs=33776,ss=33777,as=33778,os=33779,va=35840,ga=35841,_a=35842,xa=35843,Rc=36196,ya=37492,Ma=37496,Ea=37808,Sa=37809,wa=37810,ba=37811,Aa=37812,Ta=37813,Ra=37814,Ca=37815,Pa=37816,La=37817,Ia=37818,Da=37819,Na=37820,Ua=37821,ls=36492,Fa=36494,Ba=36495,Cc=36283,Oa=36284,za=36285,Va=36286,il=3e3,ii=3001,Pc=3200,Lc=3201,rl=0,Ic=1,rn="",De="srgb",Pn="srgb-linear",Zs="display-p3",Yr="display-p3-linear",Vr="linear",_e="srgb",Hr="rec709",Gr="p3",fi=7680,Ha=519,Dc=512,Nc=513,Uc=514,Fc=515,Bc=516,Oc=517,zc=518,Vc=519,Ga=35044,Wa="300 es",Ws=1035,An=2e3,Wr=2001;class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const Ki=Math.PI/180,nr=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Js(i,t){return(i%t+t)%t}function Hc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gc(i,t,e){return i!==t?(e-i)/(t-i):0}function Zi(i,t,e){return(1-e)*i+e*t}function Wc(i,t,e,n){return Zi(i,t,1-Math.exp(-e*n))}function kc(i,t=1){return t-Math.abs(Js(i,t*2)-t)}function Xc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $c(i,t){return i+Math.random()*(t-i)}function jc(i){return i*(.5-Math.random())}function Kc(i){i!==void 0&&(ka=i);let t=ka+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zc(i){return i*Ki}function Jc(i){return i*nr}function ks(i){return(i&i-1)===0&&i!==0}function Qc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function th(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),u=r((t+n)/2),h=a((t+n)/2),l=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*l,c*d,o*u);break;case"YZY":i.set(c*d,o*h,c*l,o*u);break;case"ZXZ":i.set(c*l,c*d,o*h,o*u);break;case"XZX":i.set(o*h,c*v,c*p,o*u);break;case"YXY":i.set(c*p,o*h,c*v,o*u);break;case"ZYZ":i.set(c*v,c*p,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const eh={DEG2RAD:Ki,RAD2DEG:nr,generateUUID:Gi,clamp:ze,euclideanModulo:Js,mapLinear:Hc,inverseLerp:Gc,lerp:Zi,damp:Wc,pingpong:kc,smoothstep:Xc,smootherstep:qc,randInt:Yc,randFloat:$c,randFloatSpread:jc,seededRandom:Kc,degToRad:Zc,radToDeg:Jc,isPowerOfTwo:ks,ceilPowerOfTwo:Qc,floorPowerOfTwo:kr,setQuaternionFromProperEuler:th,normalize:Ve,denormalize:Pi};class ae{constructor(t=0,e=0){ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,s,r,a,o,c,u){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u)}set(t,e,n,s,r,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],p=n[5],v=n[8],g=s[0],m=s[3],f=s[6],_=s[1],x=s[4],y=s[7],E=s[2],R=s[5],C=s[8];return r[0]=a*g+o*_+c*E,r[3]=a*m+o*x+c*R,r[6]=a*f+o*y+c*C,r[1]=u*g+h*_+l*E,r[4]=u*m+h*x+l*R,r[7]=u*f+h*y+l*C,r[2]=d*g+p*_+v*E,r[5]=d*m+p*x+v*R,r[8]=d*f+p*y+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=h*a-o*u,d=o*c-h*r,p=u*r-a*c,v=e*l+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*u-h*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(h*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*c-u*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-s*u,s*c,-s*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(cs.makeScale(t,e)),this}rotate(t){return this.premultiply(cs.makeRotation(-t)),this}translate(t,e){return this.premultiply(cs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cs=new ce;function sl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nh(){const i=ir("canvas");return i.style.display="block",i}const Xa={};function Ji(i){i in Xa||(Xa[i]=!0,console.warn(i))}const qa=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ya=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[Pn]:{transfer:Vr,primaries:Hr,toReference:i=>i,fromReference:i=>i},[De]:{transfer:_e,primaries:Hr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Yr]:{transfer:Vr,primaries:Gr,toReference:i=>i.applyMatrix3(Ya),fromReference:i=>i.applyMatrix3(qa)},[Zs]:{transfer:_e,primaries:Gr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ya),fromReference:i=>i.applyMatrix3(qa).convertLinearToSRGB()}},ih=new Set([Pn,Yr]),ge={enabled:!0,_workingColorSpace:Pn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ih.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=cr[t].toReference,s=cr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return cr[i].primaries},getTransfer:function(i){return i===rn?Vr:cr[i].transfer}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class al{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=ir("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rh=0;class ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Gi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(us(s[a].image)):r.push(us(s[a]))}else r=us(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0;class $e extends hi{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=hn,s=hn,r=en,a=tr,o=un,c=Xn,u=$e.DEFAULT_ANISOTROPY,h=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Gi(),this.name="",this.source=new ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ii?De:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ko)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?ii:il}set encoding(t){Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ii?De:rn}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Ko;$e.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,y=(p+1)/2,E=(f+1)/2,R=(h+d)/4,C=(l+g)/4,B=(v+m)/4;return x>y&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=B/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=B/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(d-h)/_,this.w=Math.acos((u+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ah extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ii?De:rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends ah{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ll extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==d||u!==p||h!==v){let m=1-o;const f=c*d+u*p+h*v+l*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const E=Math.sqrt(x),R=Math.atan2(E,f*_);m=Math.sin(m*R)/E,o=Math.sin(o*R)/E}const y=o*_;if(c=c*m+d*y,u=u*m+p*y,h=h*m+v*y,l=l*m+g*y,m===1-o){const E=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=E,u*=E,h*=E,l*=E}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],d=r[a+1],p=r[a+2],v=r[a+3];return t[e]=o*v+h*l+c*p-u*d,t[e+1]=c*v+h*d+u*l-o*p,t[e+2]=u*v+h*p+o*d-c*l,t[e+3]=h*v-o*l-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),d=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*h*l+u*p*v,this._y=u*p*l-d*h*v,this._z=u*h*v+d*p*l,this._w=u*h*l-d*p*v;break;case"YXZ":this._x=d*h*l+u*p*v,this._y=u*p*l-d*h*v,this._z=u*h*v-d*p*l,this._w=u*h*l+d*p*v;break;case"ZXY":this._x=d*h*l-u*p*v,this._y=u*p*l+d*h*v,this._z=u*h*v+d*p*l,this._w=u*h*l-d*p*v;break;case"ZYX":this._x=d*h*l-u*p*v,this._y=u*p*l+d*h*v,this._z=u*h*v-d*p*l,this._w=u*h*l+d*p*v;break;case"YZX":this._x=d*h*l+u*p*v,this._y=u*p*l+d*h*v,this._z=u*h*v-d*p*l,this._w=u*h*l-d*p*v;break;case"XZY":this._x=d*h*l-u*p*v,this._y=u*p*l-d*h*v,this._z=u*h*v+d*p*l,this._w=u*h*l+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+o+l;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(a-s)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+u)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-u)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(a-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=a*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,n=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+c*u+a*l-o*h,this.y=n+c*h+o*u-r*l,this.z=s+c*l+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ds.copy(this).projectOnVector(t),this.sub(ds)}reflect(t){return this.sub(ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new nt,$a=new ai;class ar{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),ur.subVectors(this.max,Xi),mi.subVectors(t.a,Xi),vi.subVectors(t.b,Xi),gi.subVectors(t.c,Xi),In.subVectors(vi,mi),Dn.subVectors(gi,vi),$n.subVectors(mi,gi);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-$n.z,$n.y,In.z,0,-In.x,Dn.z,0,-Dn.x,$n.z,0,-$n.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-$n.y,$n.x,0];return!fs(e,mi,vi,gi,ur)||(e=[1,0,0,0,1,0,0,0,1],!fs(e,mi,vi,gi,ur))?!1:(dr.crossVectors(In,Dn),e=[dr.x,dr.y,dr.z],fs(e,mi,vi,gi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],an=new nt,hr=new ar,mi=new nt,vi=new nt,gi=new nt,In=new nt,Dn=new nt,$n=new nt,Xi=new nt,ur=new nt,dr=new nt,jn=new nt;function fs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){jn.fromArray(i,r);const o=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),c=t.dot(jn),u=e.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const lh=new ar,qi=new nt,ps=new nt;class $r{constructor(t=new nt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ps.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(ps)),this.expandByPoint(qi.copy(t.center).sub(ps))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new nt,ms=new nt,fr=new nt,Nn=new nt,vs=new nt,pr=new nt,gs=new nt;class Qs{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ms.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(ms);const r=t.distanceTo(e)*.5,a=-this.direction.dot(fr),o=Nn.dot(this.direction),c=-Nn.dot(fr),u=Nn.lengthSq(),h=Math.abs(1-a*a);let l,d,p,v;if(h>0)if(l=a*c-o,d=a*o-c,v=r*h,l>=0)if(d>=-v)if(d<=v){const g=1/h;l*=g,d*=g,p=l*(l+a*d+2*o)+d*(a*l+d+2*c)+u}else d=r,l=Math.max(0,-(a*d+o)),p=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(a*d+o)),p=-l*l+d*(d+2*c)+u;else d<=-v?(l=Math.max(0,-(-a*r+o)),d=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u):d<=v?(l=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(l=Math.max(0,-(a*r+o)),d=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u);else d=a>0?-r:r,l=Math.max(0,-(a*d+o)),p=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(ms).addScaledVector(fr,d),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){vs.subVectors(e,t),pr.subVectors(n,t),gs.crossVectors(vs,pr);let a=this.direction.dot(gs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const c=o*this.direction.dot(pr.crossVectors(Nn,pr));if(c<0)return null;const u=o*this.direction.dot(vs.cross(Nn));if(u<0||c+u>a)return null;const h=-o*Nn.dot(gs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,n,s,r,a,o,c,u,h,l,d,p,v,g,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,u,h,l,d,p,v,g,m)}set(t,e,n,s,r,a,o,c,u,h,l,d,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=l,f[14]=d,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),a=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=p+v*u,e[5]=d-g*u,e[9]=-o*c,e[2]=g-d*u,e[6]=v+p*u,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,p=c*l,v=u*h,g=u*l;e[0]=d+g*o,e[4]=v*o-p,e[8]=a*u,e[1]=a*l,e[5]=a*h,e[9]=-o,e[2]=p*o-v,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,p=c*l,v=u*h,g=u*l;e[0]=d-g*o,e[4]=-a*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,p=a*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*u-p,e[8]=d*u+g,e[1]=c*l,e[5]=g*u+d,e[9]=p*u-v,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=g-d*l,e[8]=v*l+p,e[1]=l,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=p*l+v,e[10]=d-g*l}else if(t.order==="XZY"){const d=a*c,p=a*u,v=o*c,g=o*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+g,e[5]=a*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ch,t,hh)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Un.crossVectors(n,Je),Un.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Un.crossVectors(n,Je)),Un.normalize(),mr.crossVectors(Je,Un),s[0]=Un.x,s[4]=mr.x,s[8]=Je.x,s[1]=Un.y,s[5]=mr.y,s[9]=Je.y,s[2]=Un.z,s[6]=mr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],_=n[3],x=n[7],y=n[11],E=n[15],R=s[0],C=s[4],B=s[8],M=s[12],w=s[1],L=s[5],V=s[9],W=s[13],U=s[2],k=s[6],tt=s[10],F=s[14],O=s[3],K=s[7],X=s[11],b=s[15];return r[0]=a*R+o*w+c*U+u*O,r[4]=a*C+o*L+c*k+u*K,r[8]=a*B+o*V+c*tt+u*X,r[12]=a*M+o*W+c*F+u*b,r[1]=h*R+l*w+d*U+p*O,r[5]=h*C+l*L+d*k+p*K,r[9]=h*B+l*V+d*tt+p*X,r[13]=h*M+l*W+d*F+p*b,r[2]=v*R+g*w+m*U+f*O,r[6]=v*C+g*L+m*k+f*K,r[10]=v*B+g*V+m*tt+f*X,r[14]=v*M+g*W+m*F+f*b,r[3]=_*R+x*w+y*U+E*O,r[7]=_*C+x*L+y*k+E*K,r[11]=_*B+x*V+y*tt+E*X,r[15]=_*M+x*W+y*F+E*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-s*u*l-r*o*d+n*u*d+s*o*p-n*c*p)+g*(+e*c*p-e*u*d+r*a*d-s*a*p+s*u*h-r*c*h)+m*(+e*u*l-e*o*p-r*a*l+n*a*p+r*o*h-n*u*h)+f*(-s*o*h-e*c*l+e*o*d+s*a*l-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],_=l*m*u-g*d*u+g*c*p-o*m*p-l*c*f+o*d*f,x=v*d*u-h*m*u-v*c*p+a*m*p+h*c*f-a*d*f,y=h*g*u-v*l*u+v*o*p-a*g*p-h*o*f+a*l*f,E=v*l*c-h*g*c-v*o*d+a*g*d+h*o*m-a*l*m,R=e*_+n*x+s*y+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=_*C,t[1]=(g*d*r-l*m*r-g*s*p+n*m*p+l*s*f-n*d*f)*C,t[2]=(o*m*r-g*c*r+g*s*u-n*m*u-o*s*f+n*c*f)*C,t[3]=(l*c*r-o*d*r-l*s*u+n*d*u+o*s*p-n*c*p)*C,t[4]=x*C,t[5]=(h*m*r-v*d*r+v*s*p-e*m*p-h*s*f+e*d*f)*C,t[6]=(v*c*r-a*m*r-v*s*u+e*m*u+a*s*f-e*c*f)*C,t[7]=(a*d*r-h*c*r+h*s*u-e*d*u-a*s*p+e*c*p)*C,t[8]=y*C,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*f-e*l*f)*C,t[10]=(a*g*r-v*o*r+v*n*u-e*g*u-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*l*r-h*n*u+e*l*u+a*n*p-e*o*p)*C,t[12]=E*C,t[13]=(h*g*s-v*l*s+v*n*d-e*g*d-h*n*m+e*l*m)*C,t[14]=(v*o*s-a*g*s-v*n*c+e*g*c+a*n*m-e*o*m)*C,t[15]=(a*l*s-h*o*s+h*n*c-e*l*c-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,u=r+r,h=a+a,l=o+o,d=r*u,p=r*h,v=r*l,g=a*h,m=a*l,f=o*l,_=c*u,x=c*h,y=c*l,E=n.x,R=n.y,C=n.z;return s[0]=(1-(g+f))*E,s[1]=(p+y)*E,s[2]=(v-x)*E,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(d+f))*R,s[6]=(m+_)*R,s[7]=0,s[8]=(v+x)*C,s[9]=(m-_)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const a=_i.set(s[4],s[5],s[6]).length(),o=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);const u=1/r,h=1/a,l=1/o;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=l,on.elements[9]*=l,on.elements[10]*=l,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let p,v;if(o===An)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Wr)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(a-r),d=(e+t)*u,p=(n+s)*h;let v,g;if(o===An)v=(a+r)*l,g=-2*l;else if(o===Wr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new nt,on=new Re,ch=new nt(0,0,0),hh=new nt(1,1,1),Un=new nt,mr=new nt,Je=new nt,ja=new Re,Ka=new ai;class jr{constructor(t=0,e=0,n=0,s=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uh=0;const Za=new nt,xi=new ai,Mn=new Re,vr=new nt,Yi=new nt,dh=new nt,fh=new ai,Ja=new nt(1,0,0),Qa=new nt(0,1,0),to=new nt(0,0,1),ph={type:"added"},mh={type:"removed"};class Fe extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new nt,e=new jr,n=new ai,s=new nt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ce}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(to,t)}translateOnAxis(t,e){return Za.copy(t).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(to,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Yi,vr,this.up):Mn.lookAt(vr,Yi,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(Mn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,dh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,fh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),l=a(t.shapes),d=a(t.skeletons),p=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new nt(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new nt,En=new nt,_s=new nt,Sn=new nt,yi=new nt,Mi=new nt,eo=new nt,xs=new nt,ys=new nt,Ms=new nt;let gr=!1;class cn{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),En.subVectors(n,e),_s.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(En),c=ln.dot(_s),u=En.dot(En),h=En.dot(_s),l=a*u-o*o;if(l===0)return r.set(-2,-1,-1);const d=1/l,p=(u*c-o*h)*d,v=(a*h-o*c)*d;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(t,e,n,s,r,a,o,c){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Sn),c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),En.subVectors(t,e),ln.cross(En).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),En.subVectors(this.a,this.b),ln.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return gr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gr=!0),cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;yi.subVectors(s,n),Mi.subVectors(r,n),xs.subVectors(t,n);const c=yi.dot(xs),u=Mi.dot(xs);if(c<=0&&u<=0)return e.copy(n);ys.subVectors(t,s);const h=yi.dot(ys),l=Mi.dot(ys);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(yi,a);Ms.subVectors(t,r);const p=yi.dot(Ms),v=Mi.dot(Ms);if(v>=0&&p<=v)return e.copy(r);const g=p*u-c*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(Mi,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return eo.subVectors(r,s),o=(l-h)/(l-h+(p-v)),e.copy(s).addScaledVector(eo,o);const f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(yi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Es(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class fe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Js(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Es(a,r,t+1/3),this.g=Es(a,r,t),this.b=Es(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=hl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ge.fromWorkingColorSpace(Oe.copy(this),t),Math.round(ze(Oe.r*255,0,255))*65536+Math.round(ze(Oe.g*255,0,255))*256+Math.round(ze(Oe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=De){ge.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(_r);const n=Zi(Fn.h,_r.h,e),s=Zi(Fn.s,_r.s,e),r=Zi(Fn.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new fe;fe.NAMES=hl;let vh=0;class Wi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Ii,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=Os,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bs&&(n.blendSrc=this.blendSrc),this.blendDst!==Os&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ul extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new nt,xr=new ae;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ga,this.updateRange={offset:0,count:-1},this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ga&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class dl extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fl extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gh=0;const tn=new Re,Ss=new Fe,Ei=new nt,Qe=new ar,$i=new ar,Ie=new nt;class _n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sl(t)?fl:dl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Ss.lookAt(t),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new je(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new nt,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];$i.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(Qe.min,$i.min),Qe.expandByPoint(Ie),Ie.addVectors(Qe.max,$i.max),Qe.expandByPoint(Ie)):(Qe.expandByPoint($i.min),Qe.expandByPoint($i.max))}Qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ie.fromBufferAttribute(o,u),c&&(Ei.fromBufferAttribute(t,u),Ie.add(Ei)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],h=[];for(let w=0;w<o;w++)u[w]=new nt,h[w]=new nt;const l=new nt,d=new nt,p=new nt,v=new ae,g=new ae,m=new ae,f=new nt,_=new nt;function x(w,L,V){l.fromArray(s,w*3),d.fromArray(s,L*3),p.fromArray(s,V*3),v.fromArray(a,w*2),g.fromArray(a,L*2),m.fromArray(a,V*2),d.sub(l),p.sub(l),g.sub(v),m.sub(v);const W=1/(g.x*m.y-m.x*g.y);isFinite(W)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(W),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(W),u[w].add(f),u[L].add(f),u[V].add(f),h[w].add(_),h[L].add(_),h[V].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,L=y.length;w<L;++w){const V=y[w],W=V.start,U=V.count;for(let k=W,tt=W+U;k<tt;k+=3)x(n[k+0],n[k+1],n[k+2])}const E=new nt,R=new nt,C=new nt,B=new nt;function M(w){C.fromArray(r,w*3),B.copy(C);const L=u[w];E.copy(L),E.sub(C.multiplyScalar(C.dot(L))).normalize(),R.crossVectors(B,L);const W=R.dot(h[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=W}for(let w=0,L=y.length;w<L;++w){const V=y[w],W=V.start,U=V.count;for(let k=W,tt=W+U;k<tt;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new nt,r=new nt,a=new nt,o=new nt,c=new nt,u=new nt,h=new nt,l=new nt;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(h),c.add(h),u.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,l=o.normalized,d=new u.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)d[v++]=u[p++]}return new fn(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=t(c,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const d=u[h],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const p=u[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,p=l.length;d<p;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new Re,Kn=new Qs,yr=new $r,io=new nt,Si=new nt,wi=new nt,bi=new nt,ws=new nt,Mr=new nt,Er=new ae,Sr=new ae,wr=new ae,ro=new nt,so=new nt,ao=new nt,br=new nt,Ar=new nt;class We extends Fe{constructor(t=new _n,e=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(ws.fromBufferAttribute(l,t),a?Mr.addScaledVector(ws,h):Mr.addScaledVector(ws.sub(e),h))}e.add(Mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(yr.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(yr,io)===null||Kn.origin.distanceToSquared(io)>(t.far-t.near)**2))&&(no.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(no),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=x;y<E;y+=3){const R=o.getX(y),C=o.getX(y+1),B=o.getX(y+2);s=Tr(this,f,t,n,u,h,l,R,C,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=Tr(this,a,t,n,u,h,l,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,E=x;y<E;y+=3){const R=y,C=y+1,B=y+2;s=Tr(this,f,t,n,u,h,l,R,C,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;s=Tr(this,a,t,n,u,h,l,_,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _h(i,t,e,n,s,r,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===qn,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Ar);return u<e.near||u>e.far?null:{distance:u,point:Ar.clone(),object:i}}function Tr(i,t,e,n,s,r,a,o,c,u){i.getVertexPosition(o,Si),i.getVertexPosition(c,wi),i.getVertexPosition(u,bi);const h=_h(i,t,e,n,Si,wi,bi,br);if(h){s&&(Er.fromBufferAttribute(s,o),Sr.fromBufferAttribute(s,c),wr.fromBufferAttribute(s,u),h.uv=cn.getInterpolation(br,Si,wi,bi,Er,Sr,wr,new ae)),r&&(Er.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,c),wr.fromBufferAttribute(r,u),h.uv1=cn.getInterpolation(br,Si,wi,bi,Er,Sr,wr,new ae),h.uv2=h.uv1),a&&(ro.fromBufferAttribute(a,o),so.fromBufferAttribute(a,c),ao.fromBufferAttribute(a,u),h.normal=cn.getInterpolation(br,Si,wi,bi,ro,so,ao,new nt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const l={a:o,b:c,c:u,normal:new nt,materialIndex:0};cn.getNormal(Si,wi,bi,l.normal),h.face=l}return h}class vn extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let d=0,p=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(l,2));function v(g,m,f,_,x,y,E,R,C,B,M){const w=y/C,L=E/B,V=y/2,W=E/2,U=R/2,k=C+1,tt=B+1;let F=0,O=0;const K=new nt;for(let X=0;X<tt;X++){const b=X*L-W;for(let N=0;N<k;N++){const D=N*w-V;K[g]=D*_,K[m]=b*x,K[f]=U,u.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[f]=R>0?1:-1,h.push(K.x,K.y,K.z),l.push(N/C),l.push(1-X/B),F+=1}}for(let X=0;X<B;X++)for(let b=0;b<C;b++){const N=d+b+k*X,D=d+b+k*(X+1),I=d+(b+1)+k*(X+1),T=d+(b+1)+k*X;c.push(N,D,T),c.push(D,I,T),O+=6}o.addGroup(p,O,M),p+=O,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=Vi(i[e]);for(const s in n)t[s]=n[s]}return t}function xh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pl(i){return i.getRenderTarget()===null?i.outputColorSpace:ge.workingColorSpace}const yh={clone:Vi,merge:He};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ml extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends ml{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ti=1;class Sh extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ai,Ti,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ai,Ti,t,e);r.layers=this.layers,this.add(r);const a=new nn(Ai,Ti,t,e);a.layers=this.layers,this.add(a);const o=new nn(Ai,Ti,t,e);o.layers=this.layers,this.add(o);const c=new nn(Ai,Ti,t,e);c.layers=this.layers,this.add(c);const u=new nn(Ai,Ti,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const u of e)this.remove(u);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ta extends $e{constructor(t,e,n,s,r,a,o,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:Bi,super(t,e,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wh extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ii?De:rn),this.texture=new ta(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Wn});r.uniforms.tEquirect.value=e;const a=new We(s,r),o=e.minFilter;return e.minFilter===tr&&(e.minFilter=en),new Sh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const bs=new nt,bh=new nt,Ah=new ce;class Bn{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=bs.subVectors(n,e).cross(bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ah.getNormalMatrix(t),s=this.coplanarPoint(bs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new $r,Rr=new nt;class ea{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],p=s[8],v=s[9],g=s[10],m=s[11],f=s[12],_=s[13],x=s[14],y=s[15];if(n[0].setComponents(c-r,d-u,m-p,y-f).normalize(),n[1].setComponents(c+r,d+u,m+p,y+f).normalize(),n[2].setComponents(c+a,d+h,m+v,y+_).normalize(),n[3].setComponents(c-a,d-h,m-v,y-_).normalize(),n[4].setComponents(c-o,d-l,m-g,y-x).normalize(),e===An)n[5].setComponents(c+o,d+l,m+g,y+x).normalize();else if(e===Wr)n[5].setComponents(o,l,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rr.x=s.normal.x>0?t.max.x:t.min.x,Rr.y=s.normal.y>0?t.max.y:t.min.y,Rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Th(i,t){const e=t.isWebGL2,n=new WeakMap;function s(u,h){const l=u.array,d=u.usage,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,l,d),u.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function r(u,h,l){const d=h.array,p=h.updateRange;i.bindBuffer(l,u),p.count===-1?i.bufferSubData(l,0,d):(e?i.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(l,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h&&(i.deleteBuffer(h.buffer),n.delete(u))}function c(u,h){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,s(u,h)):l.version<u.version&&(r(l.buffer,u,h),l.version=u.version)}return{get:a,remove:o,update:c}}class na extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=t/o,d=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const _=f*d-a;for(let x=0;x<u;x++){const y=x*l-r;v.push(y,-_,0),g.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const x=_+u*f,y=_+u*(f+1),E=_+1+u*(f+1),R=_+1+u*f;p.push(x,y,R),p.push(y,E,R)}this.setIndex(p),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ch=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zh=`#ifdef USE_IRIDESCENCE
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
#endif`,Vh=`#ifdef USE_BUMPMAP
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
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jh=`#define PI 3.141592653589793
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
} // validated`,Kh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zh=`vec3 transformedNormal = objectNormal;
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
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",iu=`
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
}`,ru=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
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
}`,pu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_u=`uniform bool receiveShadow;
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
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wu=`PhysicalMaterial material;
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
#endif`,bu=`struct PhysicalMaterial {
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
}`,Au=`
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fu=`#if defined( USE_POINTS_UV )
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
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
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
#endif`,Hu=`#ifdef USE_MORPHTARGETS
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
#endif`,Gu=`#ifdef USE_MORPHTARGETS
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
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
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
#endif`,ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ku=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hd=`float getShadowMask() {
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
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
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
#endif`,fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
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
}`,Id=`#if DEPTH_PACKING == 3200
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
}`,Dd=`#define DISTANCE
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
}`,Nd=`#define DISTANCE
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
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
}`,Od=`uniform vec3 diffuse;
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
}`,zd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Hd=`#define LAMBERT
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
}`,Gd=`#define LAMBERT
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
}`,Wd=`#define MATCAP
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
}`,kd=`#define MATCAP
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
}`,Xd=`#define NORMAL
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
}`,qd=`#define NORMAL
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
}`,Yd=`#define PHONG
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
}`,$d=`#define PHONG
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
}`,jd=`#define STANDARD
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
}`,Kd=`#define STANDARD
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
}`,Zd=`#define TOON
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
}`,Jd=`#define TOON
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
}`,Qd=`uniform float size;
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
}`,tf=`uniform vec3 diffuse;
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
}`,ef=`#include <common>
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
}`,nf=`uniform vec3 color;
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
}`,rf=`uniform float rotation;
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
}`,sf=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:Rh,alphahash_pars_fragment:Ch,alphamap_fragment:Ph,alphamap_pars_fragment:Lh,alphatest_fragment:Ih,alphatest_pars_fragment:Dh,aomap_fragment:Nh,aomap_pars_fragment:Uh,begin_vertex:Fh,beginnormal_vertex:Bh,bsdfs:Oh,iridescence_fragment:zh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Hh,clipping_planes_pars_fragment:Gh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:kh,color_fragment:Xh,color_pars_fragment:qh,color_pars_vertex:Yh,color_vertex:$h,common:jh,cube_uv_reflection_fragment:Kh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Jh,displacementmap_vertex:Qh,emissivemap_fragment:tu,emissivemap_pars_fragment:eu,colorspace_fragment:nu,colorspace_pars_fragment:iu,envmap_fragment:ru,envmap_common_pars_fragment:su,envmap_pars_fragment:au,envmap_pars_vertex:ou,envmap_physical_pars_fragment:xu,envmap_vertex:lu,fog_vertex:cu,fog_pars_vertex:hu,fog_fragment:uu,fog_pars_fragment:du,gradientmap_pars_fragment:fu,lightmap_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:vu,lights_lambert_pars_fragment:gu,lights_pars_begin:_u,lights_toon_fragment:yu,lights_toon_pars_fragment:Mu,lights_phong_fragment:Eu,lights_phong_pars_fragment:Su,lights_physical_fragment:wu,lights_physical_pars_fragment:bu,lights_fragment_begin:Au,lights_fragment_maps:Tu,lights_fragment_end:Ru,logdepthbuf_fragment:Cu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Lu,logdepthbuf_vertex:Iu,map_fragment:Du,map_pars_fragment:Nu,map_particle_fragment:Uu,map_particle_pars_fragment:Fu,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:Ou,morphcolor_vertex:zu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Gu,normal_fragment_begin:Wu,normal_fragment_maps:ku,normal_pars_fragment:Xu,normal_pars_vertex:qu,normal_vertex:Yu,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:ju,clearcoat_normal_fragment_maps:Ku,clearcoat_pars_fragment:Zu,iridescence_pars_fragment:Ju,opaque_fragment:Qu,packing:td,premultiplied_alpha_fragment:ed,project_vertex:nd,dithering_fragment:id,dithering_pars_fragment:rd,roughnessmap_fragment:sd,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:od,shadowmap_pars_vertex:ld,shadowmap_vertex:cd,shadowmask_pars_fragment:hd,skinbase_vertex:ud,skinning_pars_vertex:dd,skinning_vertex:fd,skinnormal_vertex:pd,specularmap_fragment:md,specularmap_pars_fragment:vd,tonemapping_fragment:gd,tonemapping_pars_fragment:_d,transmission_fragment:xd,transmission_pars_fragment:yd,uv_pars_fragment:Md,uv_pars_vertex:Ed,uv_vertex:Sd,worldpos_vertex:wd,background_vert:bd,background_frag:Ad,backgroundCube_vert:Td,backgroundCube_frag:Rd,cube_vert:Cd,cube_frag:Pd,depth_vert:Ld,depth_frag:Id,distanceRGBA_vert:Dd,distanceRGBA_frag:Nd,equirect_vert:Ud,equirect_frag:Fd,linedashed_vert:Bd,linedashed_frag:Od,meshbasic_vert:zd,meshbasic_frag:Vd,meshlambert_vert:Hd,meshlambert_frag:Gd,meshmatcap_vert:Wd,meshmatcap_frag:kd,meshnormal_vert:Xd,meshnormal_frag:qd,meshphong_vert:Yd,meshphong_frag:$d,meshphysical_vert:jd,meshphysical_frag:Kd,meshtoon_vert:Zd,meshtoon_frag:Jd,points_vert:Qd,points_frag:tf,shadow_vert:ef,shadow_frag:nf,sprite_vert:rf,sprite_frag:sf},Ht={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},dn={basic:{uniforms:He([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:He([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:He([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:He([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:He([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:He([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:He([Ht.points,Ht.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:He([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:He([Ht.common,Ht.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:He([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:He([Ht.sprite,Ht.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:He([Ht.common,Ht.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:He([Ht.lights,Ht.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};dn.physical={uniforms:He([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Cr={r:0,b:0,g:0};function af(i,t,e,n,s,r,a){const o=new fe(0);let c=r===!0?0:1,u,h,l=null,d=0,p=null;function v(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,c):x&&x.isColor&&(g(x,1),_=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qr)?(h===void 0&&(h=new We(new vn(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Vi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ge.getTransfer(x.colorSpace)!==_e,(l!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new We(new na(2,2),new oi({name:"BackgroundMaterial",uniforms:Vi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=ge.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||d!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=x,d=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Cr,pl(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(o,c)},render:v}}function of(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let u=c,h=!1;function l(U,k,tt,F,O){let K=!1;if(a){const X=g(F,tt,k);u!==X&&(u=X,p(u.object)),K=f(U,F,tt,O),K&&_(U,F,tt,O)}else{const X=k.wireframe===!0;(u.geometry!==F.id||u.program!==tt.id||u.wireframe!==X)&&(u.geometry=F.id,u.program=tt.id,u.wireframe=X,K=!0)}O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,B(U,k,tt,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,k,tt){const F=tt.wireframe===!0;let O=o[U.id];O===void 0&&(O={},o[U.id]=O);let K=O[k.id];K===void 0&&(K={},O[k.id]=K);let X=K[F];return X===void 0&&(X=m(d()),K[F]=X),X}function m(U){const k=[],tt=[],F=[];for(let O=0;O<s;O++)k[O]=0,tt[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:tt,attributeDivisors:F,object:U,attributes:{},index:null}}function f(U,k,tt,F){const O=u.attributes,K=k.attributes;let X=0;const b=tt.getAttributes();for(const N in b)if(b[N].location>=0){const I=O[N];let T=K[N];if(T===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(T=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(T=U.instanceColor)),I===void 0||I.attribute!==T||T&&I.data!==T.data)return!0;X++}return u.attributesNum!==X||u.index!==F}function _(U,k,tt,F){const O={},K=k.attributes;let X=0;const b=tt.getAttributes();for(const N in b)if(b[N].location>=0){let I=K[N];I===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(I=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(I=U.instanceColor));const T={};T.attribute=I,I&&I.data&&(T.data=I.data),O[N]=T,X++}u.attributes=O,u.attributesNum=X,u.index=F}function x(){const U=u.newAttributes;for(let k=0,tt=U.length;k<tt;k++)U[k]=0}function y(U){E(U,0)}function E(U,k){const tt=u.newAttributes,F=u.enabledAttributes,O=u.attributeDivisors;tt[U]=1,F[U]===0&&(i.enableVertexAttribArray(U),F[U]=1),O[U]!==k&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,k),O[U]=k)}function R(){const U=u.newAttributes,k=u.enabledAttributes;for(let tt=0,F=k.length;tt<F;tt++)k[tt]!==U[tt]&&(i.disableVertexAttribArray(tt),k[tt]=0)}function C(U,k,tt,F,O,K,X){X===!0?i.vertexAttribIPointer(U,k,tt,O,K):i.vertexAttribPointer(U,k,tt,F,O,K)}function B(U,k,tt,F){if(n.isWebGL2===!1&&(U.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const O=F.attributes,K=tt.getAttributes(),X=k.defaultAttributeValues;for(const b in K){const N=K[b];if(N.location>=0){let D=O[b];if(D===void 0&&(b==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),b==="instanceColor"&&U.instanceColor&&(D=U.instanceColor)),D!==void 0){const I=D.normalized,T=D.itemSize,$=e.get(D);if($===void 0)continue;const at=$.buffer,et=$.type,j=$.bytesPerElement,ot=n.isWebGL2===!0&&(et===i.INT||et===i.UNSIGNED_INT||D.gpuType===Zo);if(D.isInterleavedBufferAttribute){const ht=D.data,q=ht.stride,Lt=D.offset;if(ht.isInstancedInterleavedBuffer){for(let ft=0;ft<N.locationSize;ft++)E(N.location+ft,ht.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<N.locationSize;ft++)y(N.location+ft);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ft=0;ft<N.locationSize;ft++)C(N.location+ft,T/N.locationSize,et,I,q*j,(Lt+T/N.locationSize*ft)*j,ot)}else{if(D.isInstancedBufferAttribute){for(let ht=0;ht<N.locationSize;ht++)E(N.location+ht,D.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ht=0;ht<N.locationSize;ht++)y(N.location+ht);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ht=0;ht<N.locationSize;ht++)C(N.location+ht,T/N.locationSize,et,I,T*j,T/N.locationSize*ht*j,ot)}}else if(X!==void 0){const I=X[b];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(N.location,I);break;case 3:i.vertexAttrib3fv(N.location,I);break;case 4:i.vertexAttrib4fv(N.location,I);break;default:i.vertexAttrib1fv(N.location,I)}}}}R()}function M(){V();for(const U in o){const k=o[U];for(const tt in k){const F=k[tt];for(const O in F)v(F[O].object),delete F[O];delete k[tt]}delete o[U]}}function w(U){if(o[U.id]===void 0)return;const k=o[U.id];for(const tt in k){const F=k[tt];for(const O in F)v(F[O].object),delete F[O];delete k[tt]}delete o[U.id]}function L(U){for(const k in o){const tt=o[k];if(tt[U.id]===void 0)continue;const F=tt[U.id];for(const O in F)v(F[O].object),delete F[O];delete tt[U.id]}}function V(){W(),h=!0,u!==c&&(u=c,p(u.object))}function W(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:V,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:y,disableUnusedAttributes:R}}function lf(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,l){if(l===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,u,h,l),e.update(h,r,l)}this.setMode=a,this.render=o,this.renderInstances=c}function cf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=a||t.has("OES_texture_float"),E=x&&y,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:l,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:R}}function hf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bn,o=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const p=l.length!==0||d||n!==0||s;return s=d,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?h(null):u();else{const _=r?0:n,x=_*4;let y=f.clippingState||null;c.value=y,y=h(v,d,x,p);for(let E=0;E!==x;++E)y[E]=e[E];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)a.copy(l[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function uf(i){let t=new WeakMap;function e(a,o){return o===zs?a.mapping=Bi:o===Vs&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===zs||o===Vs)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new wh(c.height/2);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gl extends ml{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,oo=[.125,.215,.35,.446,.526,.582],ti=20,As=new gl,lo=new fe;let Ts=null,Rs=0,Cs=0;const Jn=(1+Math.sqrt(5))/2,Ri=1/Jn,co=[new nt(1,1,1),new nt(-1,1,1),new nt(1,1,-1),new nt(-1,1,-1),new nt(0,Jn,Ri),new nt(0,Jn,-Ri),new nt(Ri,0,Jn),new nt(-Ri,0,Jn),new nt(Jn,Ri,0),new nt(-Jn,Ri,0)];class ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ts=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ts,Rs,Cs),t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ts=this._renderer.getRenderTarget(),Rs=this._renderer.getActiveCubeFace(),Cs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:er,format:un,colorSpace:Pn,depthBuffer:!1},s=uo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(r)),this._blurMaterial=ff(r,t,e)}return s}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,As)}_sceneToCubeUV(t,e,n,s){const o=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(lo),h.toneMapping=kn,h.autoClear=!1;const p=new ul({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),v=new We(new vn,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(lo),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,c[f],0),o.lookAt(u[f],0,0)):_===1?(o.up.set(0,0,c[f]),o.lookAt(0,u[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,u[f]));const x=this._cubeSize;Pr(s,_*x,f>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Bi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,As)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=co[(s-1)%co.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new We(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const f=[];let _=0;for(let C=0;C<ti;++C){const B=C/g,M=Math.exp(-B*B/2);f.push(M),C===0?_+=M:C<m&&(_+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-n;const y=this._sizeLods[s],E=3*y*(s>x-Li?s-x+Li:0),R=4*(this._cubeSize-y);Pr(e,E,R,3*y,2*y),c.setRenderTarget(e),c.render(l,As)}}function df(i){const t=[],e=[],n=[];let s=i;const r=i-Li+1+oo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Li?c=oo[a-i+Li-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,B=R>2?0:-1,M=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];_.set(M,g*v*R),x.set(d,m*v*R);const w=[R,R,R,R,R,R];y.set(w,f*v*R)}const E=new _n;E.setAttribute("position",new fn(_,g)),E.setAttribute("uv",new fn(x,m)),E.setAttribute("faceIndex",new fn(y,f)),t.push(E),s>Li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uo(i,t,e){const n=new si(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ff(i,t,e){const n=new Float32Array(ti),s=new nt(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ia(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function fo(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ia(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function po(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ia(){return`

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
	`}function pf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===zs||c===Vs,h=c===Bi||c===Oi;if(u||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new ho(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||h&&l&&s(l)){e===null&&(e=new ho(i));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function r(o){const c=o.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vf(i,t,e,n){const s={},r=new WeakMap;function a(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const p=l.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(l){const d=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const E=_[x+0],R=_[x+1],C=_[x+2];d.push(E,R,R,C,C,E)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const E=x+0,R=x+1,C=x+2;d.push(E,R,R,C,C,E)}}else return;const m=new(sl(d)?fl:dl)(d,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const d=r.get(l);if(d){const p=l.index;p!==null&&d.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function gf(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function u(d){o=d.type,c=d.bytesPerElement}function h(d,p){i.drawElements(r,p,o,d*c),e.update(p,r,1)}function l(d,p,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,d*c,v),e.update(p,r,v)}this.setMode=a,this.setIndex=u,this.render=h,this.renderInstances=l}function _f(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xf(i,t){return i[0]-t[0]}function yf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Mf(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new Ne,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,h,l){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let k=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),E===!0&&(M=3);let w=h.attributes.position.count*M,L=1;w>t.maxTextureSize&&(L=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const V=new Float32Array(w*L*4*g),W=new ll(V,w,L,g);W.type=Vn,W.needsUpdate=!0;const U=M*4;for(let tt=0;tt<g;tt++){const F=R[tt],O=C[tt],K=B[tt],X=w*L*4*tt;for(let b=0;b<F.count;b++){const N=b*U;x===!0&&(a.fromBufferAttribute(F,b),V[X+N+0]=a.x,V[X+N+1]=a.y,V[X+N+2]=a.z,V[X+N+3]=0),y===!0&&(a.fromBufferAttribute(O,b),V[X+N+4]=a.x,V[X+N+5]=a.y,V[X+N+6]=a.z,V[X+N+7]=0),E===!0&&(a.fromBufferAttribute(K,b),V[X+N+8]=a.x,V[X+N+9]=a.y,V[X+N+10]=a.z,V[X+N+11]=K.itemSize===4?a.w:1)}}m={count:g,texture:W,size:new ae(w,L)},r.set(h,m),h.addEventListener("dispose",k)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const _=h.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",d),l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<v;y++){const E=g[y];E[0]=y,E[1]=d[y]}g.sort(yf);for(let y=0;y<8;y++)y<v&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(xf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const E=o[y],R=E[0],C=E[1];R!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+y)!==m[R]&&h.setAttribute("morphTarget"+y,m[R]),f&&h.getAttribute("morphNormal"+y)!==f[R]&&h.setAttribute("morphNormal"+y,f[R]),s[y]=C,_+=C):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const x=h.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Ef(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function a(){s=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const _l=new $e,xl=new ll,yl=new oh,Ml=new ta,mo=[],vo=[],go=new Float32Array(16),_o=new Float32Array(9),xo=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mo[s];if(r===void 0&&(r=new Float32Array(s),mo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=vo[t];e===void 0&&(e=new Int32Array(t),vo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;xo.set(n),i.uniformMatrix2fv(this.addr,!1,xo),Pe(e,n)}}function Rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;_o.set(n),i.uniformMatrix3fv(this.addr,!1,_o),Pe(e,n)}}function Cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;go.set(n),i.uniformMatrix4fv(this.addr,!1,go),Pe(e,n)}}function Pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function Nf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Of(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||_l,s)}function zf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yl,s)}function Vf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ml,s)}function Hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xl,s)}function Gf(i){switch(i){case 5126:return Sf;case 35664:return wf;case 35665:return bf;case 35666:return Af;case 35674:return Tf;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Pf;case 35667:case 35671:return Lf;case 35668:case 35672:return If;case 35669:case 35673:return Df;case 5125:return Nf;case 36294:return Uf;case 36295:return Ff;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Of;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Wf(i,t){i.uniform1fv(this.addr,t)}function kf(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Xf(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function qf(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Yf(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $f(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jf(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kf(i,t){i.uniform1iv(this.addr,t)}function Zf(i,t){i.uniform2iv(this.addr,t)}function Jf(i,t){i.uniform3iv(this.addr,t)}function Qf(i,t){i.uniform4iv(this.addr,t)}function tp(i,t){i.uniform1uiv(this.addr,t)}function ep(i,t){i.uniform2uiv(this.addr,t)}function np(i,t){i.uniform3uiv(this.addr,t)}function ip(i,t){i.uniform4uiv(this.addr,t)}function rp(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||_l,r[a])}function sp(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yl,r[a])}function ap(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ml,r[a])}function op(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xl,r[a])}function lp(i){switch(i){case 5126:return Wf;case 35664:return kf;case 35665:return Xf;case 35666:return qf;case 35674:return Yf;case 35675:return $f;case 35676:return jf;case 5124:case 35670:return Kf;case 35667:case 35671:return Zf;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return tp;case 36294:return ep;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}class cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Gf(e.type)}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=lp(e.type)}}class up{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function yo(i,t){i.seq.push(t),i.map[t.id]=t}function dp(i,t,e){const n=i.name,s=n.length;for(Ps.lastIndex=0;;){const r=Ps.exec(n),a=Ps.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){yo(e,u===void 0?new cp(o,i,t):new hp(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new up(o),yo(e,l)),e=l}}}class Ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);dp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fp=37297;let pp=0;function mp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function vp(i){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(i);let n;switch(t===e?n="":t===Gr&&e===Hr?n="LinearDisplayP3ToLinearSRGB":t===Hr&&e===Gr&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case Yr:return[n,"LinearTransferOETF"];case De:case Zs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Eo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mp(i.getShaderSource(t),a)}else return s}function gp(i,t){const e=vp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _p(i,t){let e;switch(t){case mc:e="Linear";break;case vc:e="Reinhard";break;case gc:e="OptimizedCineon";break;case _c:e="ACESFilmic";break;case xc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function xp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function yp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ji(i){return i!==""}function So(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xs(i){return i.replace(Ep,wp)}const Sp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wp(i,t){let e=oe[t];if(e===void 0){const n=Sp.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xs(e)}const bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bo(i){return i.replace(bp,Ap)}function Ap(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ao(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Oi:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Pp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case fc:t="ENVMAP_BLENDING_MIX";break;case pc:t="ENVMAP_BLENDING_ADD";break}return t}function Lp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ip(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Tp(e),u=Rp(e),h=Cp(e),l=Pp(e),d=Lp(e),p=e.isWebGL2?"":xp(e),v=yp(r),g=s.createProgram();let m,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ji).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(m=[Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[p,Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?oe.tonemapping_pars_fragment:"",e.toneMapping!==kn?_p("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,gp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=Xs(a),a=So(a,e),a=wo(a,e),o=Xs(o),o=So(o,e),o=wo(o,e),a=bo(a),o=bo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+a,y=_+f+o,E=Mo(s,s.VERTEX_SHADER,x),R=Mo(s,s.FRAGMENT_SHADER,y);s.attachShader(g,E),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(L){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(g).trim(),W=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(R).trim();let k=!0,tt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,E,R);else{const F=Eo(s,E,"vertex"),O=Eo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+F+`
`+O)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||U==="")&&(tt=!1);tt&&(L.diagnostics={runnable:k,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(E),s.deleteShader(R),B=new Ur(s,g),M=Mp(s,g)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,fp)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=R,this}let Dp=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Up(t),e.set(t,n)),n}}class Up{constructor(t){this.id=Dp++,this.code=t,this.usedTimes=0}}function Fp(i,t,e,n,s,r,a){const o=new cl,c=new Np,u=[],h=s.isWebGL2,l=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,w,L,V,W){const U=V.fog,k=W.geometry,tt=M.isMeshStandardMaterial?V.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||tt),O=F&&F.mapping===qr?F.image.height:null,K=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,b=X!==void 0?X.length:0;let N=0;k.morphAttributes.position!==void 0&&(N=1),k.morphAttributes.normal!==void 0&&(N=2),k.morphAttributes.color!==void 0&&(N=3);let D,I,T,$;if(K){const le=dn[K];D=le.vertexShader,I=le.fragmentShader}else D=M.vertexShader,I=M.fragmentShader,c.update(M),T=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const at=i.getRenderTarget(),et=W.isInstancedMesh===!0,j=!!M.map,ot=!!M.matcap,ht=!!F,q=!!M.aoMap,Lt=!!M.lightMap,ft=!!M.bumpMap,it=!!M.normalMap,ct=!!M.displacementMap,Zt=!!M.emissiveMap,At=!!M.metalnessMap,Wt=!!M.roughnessMap,Mt=M.anisotropy>0,ee=M.clearcoat>0,ie=M.iridescence>0,P=M.sheen>0,A=M.transmission>0,J=Mt&&!!M.anisotropyMap,vt=ee&&!!M.clearcoatMap,dt=ee&&!!M.clearcoatNormalMap,xt=ee&&!!M.clearcoatRoughnessMap,Gt=ie&&!!M.iridescenceMap,bt=ie&&!!M.iridescenceThicknessMap,Nt=P&&!!M.sheenColorMap,H=P&&!!M.sheenRoughnessMap,Et=!!M.specularMap,pt=!!M.specularColorMap,Jt=!!M.specularIntensityMap,qt=A&&!!M.transmissionMap,Yt=A&&!!M.thicknessMap,kt=!!M.gradientMap,Ut=!!M.alphaMap,re=M.alphaTest>0,Y=!!M.alphaHash,St=!!M.extensions,yt=!!k.attributes.uv1,ut=!!k.attributes.uv2,wt=!!k.attributes.uv3;let $t=kn;return M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&($t=i.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:D,fragmentShader:I,defines:M.defines,customVertexShaderID:T,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:et,instancingColor:et&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pn,map:j,matcap:ot,envMap:ht,envMapMode:ht&&F.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:Lt,bumpMap:ft,normalMap:it,displacementMap:d&&ct,emissiveMap:Zt,normalMapObjectSpace:it&&M.normalMapType===Ic,normalMapTangentSpace:it&&M.normalMapType===rl,metalnessMap:At,roughnessMap:Wt,anisotropy:Mt,anisotropyMap:J,clearcoat:ee,clearcoatMap:vt,clearcoatNormalMap:dt,clearcoatRoughnessMap:xt,iridescence:ie,iridescenceMap:Gt,iridescenceThicknessMap:bt,sheen:P,sheenColorMap:Nt,sheenRoughnessMap:H,specularMap:Et,specularColorMap:pt,specularIntensityMap:Jt,transmission:A,transmissionMap:qt,thicknessMap:Yt,gradientMap:kt,opaque:M.transparent===!1&&M.blending===Ii,alphaMap:Ut,alphaTest:re,alphaHash:Y,combine:M.combine,mapUv:j&&g(M.map.channel),aoMapUv:q&&g(M.aoMap.channel),lightMapUv:Lt&&g(M.lightMap.channel),bumpMapUv:ft&&g(M.bumpMap.channel),normalMapUv:it&&g(M.normalMap.channel),displacementMapUv:ct&&g(M.displacementMap.channel),emissiveMapUv:Zt&&g(M.emissiveMap.channel),metalnessMapUv:At&&g(M.metalnessMap.channel),roughnessMapUv:Wt&&g(M.roughnessMap.channel),anisotropyMapUv:J&&g(M.anisotropyMap.channel),clearcoatMapUv:vt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:H&&g(M.sheenRoughnessMap.channel),specularMapUv:Et&&g(M.specularMap.channel),specularColorMapUv:pt&&g(M.specularColorMap.channel),specularIntensityMapUv:Jt&&g(M.specularIntensityMap.channel),transmissionMapUv:qt&&g(M.transmissionMap.channel),thicknessMapUv:Yt&&g(M.thicknessMap.channel),alphaMapUv:Ut&&g(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(it||Mt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:yt,vertexUv2s:ut,vertexUv3s:wt,pointsUvs:W.isPoints===!0&&!!k.attributes.uv&&(j||Ut),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:W.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:N,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:$t,useLegacyLights:i._useLegacyLights,decodeVideoTexture:j&&M.map.isVideoTexture===!0&&ge.getTransfer(M.map.colorSpace)===_e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bn,flipSided:M.side===Ye,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:St&&M.extensions.derivatives===!0,extensionFragDepth:St&&M.extensions.fragDepth===!0,extensionDrawBuffers:St&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)w.push(L),w.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(_(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const w=v[M.type];let L;if(w){const V=dn[w];L=yh.clone(V.uniforms)}else L=M.uniforms;return L}function E(M,w){let L;for(let V=0,W=u.length;V<W;V++){const U=u[V];if(U.cacheKey===w){L=U,++L.usedTimes;break}}return L===void 0&&(L=new Ip(i,w,M,r),u.push(L)),L}function R(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function C(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:B}}function Bp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function To(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ro(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,d,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:d,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,d,p,v,g,m){const f=a(l,d,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(l,d,p,v,g,m){const f=a(l,d,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function u(l,d){e.length>1&&e.sort(l||Op),n.length>1&&n.sort(d||To),s.length>1&&s.sort(d||To)}function h(){for(let l=t,d=i.length;l<d;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:u}}function zp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ro,i.set(n,[a])):s>=r.length?(a=new Ro,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new fe};break;case"SpotLight":e={position:new nt,direction:new nt,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return i[t.id]=e,e}}}function Hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gp=0;function Wp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kp(i,t){const e=new Vp,n=Hp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new nt);const r=new nt,a=new Re,o=new Re;function c(h,l){let d=0,p=0,v=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let g=0,m=0,f=0,_=0,x=0,y=0,E=0,R=0,C=0,B=0,M=0;h.sort(Wp);const w=l===!0?Math.PI:1;for(let V=0,W=h.length;V<W;V++){const U=h[V],k=U.color,tt=U.intensity,F=U.distance,O=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=k.r*tt*w,p+=k.g*tt*w,v+=k.b*tt*w;else if(U.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(U.sh.coefficients[K],tt);M++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const X=U.shadow,b=n.get(U);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,s.directionalShadow[g]=b,s.directionalShadowMap[g]=O,s.directionalShadowMatrix[g]=U.shadow.matrix,y++}s.directional[g]=K,g++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(k).multiplyScalar(tt*w),K.distance=F,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,s.spot[f]=K;const X=U.shadow;if(U.map&&(s.spotLightMap[C]=U.map,C++,X.updateMatrices(U),U.castShadow&&B++),s.spotLightMatrix[f]=X.matrix,U.castShadow){const b=n.get(U);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,s.spotShadow[f]=b,s.spotShadowMap[f]=O,R++}f++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(k).multiplyScalar(tt),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),s.rectArea[_]=K,_++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity*w),K.distance=U.distance,K.decay=U.decay,U.castShadow){const X=U.shadow,b=n.get(U);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,b.shadowCameraNear=X.camera.near,b.shadowCameraFar=X.camera.far,s.pointShadow[m]=b,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=U.shadow.matrix,E++}s.point[m]=K,m++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(tt*w),K.groundColor.copy(U.groundColor).multiplyScalar(tt*w),s.hemi[x]=K,x++}}_>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=v;const L=s.hash;(L.directionalLength!==g||L.pointLength!==m||L.spotLength!==f||L.rectAreaLength!==_||L.hemiLength!==x||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==C||L.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=_,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=R+C-B,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=M,L.directionalLength=g,L.pointLength=m,L.spotLength=f,L.rectAreaLength=_,L.hemiLength=x,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=C,L.numLightProbes=M,s.version=Gp++)}function u(h,l){let d=0,p=0,v=0,g=0,m=0;const f=l.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const y=h[_];if(y.isDirectionalLight){const E=s.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),d++}else if(y.isSpotLight){const E=s.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const E=s.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=s.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=s.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:c,setupView:u,state:s}}function Co(i,t){const e=new kp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(l){n.push(l)}function o(l){s.push(l)}function c(l){e.setup(n,l)}function u(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function Xp(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Co(i,t),e.set(r,[c])):a>=o.length?(c=new Co(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class qp extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yp extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $p=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
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
}`;function Kp(i,t,e){let n=new ea;const s=new ae,r=new ae,a=new Ne,o=new qp({depthPacking:Lc}),c=new Yp,u={},h=e.maxTextureSize,l={[qn]:Ye,[Ye]:qn,[bn]:bn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:$p,fragmentShader:jp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new _n;v.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new We(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let f=this.type;this.render=function(E,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const B=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Wn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const V=f!==wn&&this.type===wn,W=f===wn&&this.type!==wn;for(let U=0,k=E.length;U<k;U++){const tt=E[U],F=tt.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const O=F.getFrameExtents();if(s.multiply(O),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/O.x),s.x=r.x*O.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/O.y),s.y=r.y*O.y,F.mapSize.y=r.y)),F.map===null||V===!0||W===!0){const X=this.type!==wn?{minFilter:Ge,magFilter:Ge}:{};F.map!==null&&F.map.dispose(),F.map=new si(s.x,s.y,X),F.map.texture.name=tt.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const K=F.getViewportCount();for(let X=0;X<K;X++){const b=F.getViewport(X);a.set(r.x*b.x,r.y*b.y,r.x*b.z,r.y*b.w),L.viewport(a),F.updateMatrices(tt,X),n=F.getFrustum(),y(R,C,F.camera,tt,this.type)}F.isPointLightShadow!==!0&&this.type===wn&&_(F,C),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(B,M,w)};function _(E,R){const C=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,C,d,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,C,p,g,null)}function x(E,R,C,B){let M=null;const w=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const L=M.uuid,V=R.uuid;let W=u[L];W===void 0&&(W={},u[L]=W);let U=W[V];U===void 0&&(U=M.clone(),W[V]=U),M=U}if(M.visible=R.visible,M.wireframe=R.wireframe,B===wn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:l[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=C}return M}function y(E,R,C,B,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const V=t.update(E),W=E.material;if(Array.isArray(W)){const U=V.groups;for(let k=0,tt=U.length;k<tt;k++){const F=U[k],O=W[F.materialIndex];if(O&&O.visible){const K=x(E,O,B,M);i.renderBufferDirect(C,null,V,K,E,F)}}}else if(W.visible){const U=x(E,W,B,M);i.renderBufferDirect(C,null,V,U,E,null)}}const L=E.children;for(let V=0,W=L.length;V<W;V++)y(L[V],R,C,B,M)}}function Zp(i,t,e){const n=e.isWebGL2;function s(){let Y=!1;const St=new Ne;let yt=null;const ut=new Ne(0,0,0,0);return{setMask:function(wt){yt!==wt&&!Y&&(i.colorMask(wt,wt,wt,wt),yt=wt)},setLocked:function(wt){Y=wt},setClear:function(wt,$t,se,le,lt){lt===!0&&(wt*=le,$t*=le,se*=le),St.set(wt,$t,se,le),ut.equals(St)===!1&&(i.clearColor(wt,$t,se,le),ut.copy(St))},reset:function(){Y=!1,yt=null,ut.set(-1,0,0,0)}}}function r(){let Y=!1,St=null,yt=null,ut=null;return{setTest:function(wt){wt?j(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(wt){St!==wt&&!Y&&(i.depthMask(wt),St=wt)},setFunc:function(wt){if(yt!==wt){switch(wt){case ac:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case lc:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case cc:i.depthFunc(i.EQUAL);break;case hc:i.depthFunc(i.GEQUAL);break;case uc:i.depthFunc(i.GREATER);break;case dc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=wt}},setLocked:function(wt){Y=wt},setClear:function(wt){ut!==wt&&(i.clearDepth(wt),ut=wt)},reset:function(){Y=!1,St=null,yt=null,ut=null}}}function a(){let Y=!1,St=null,yt=null,ut=null,wt=null,$t=null,se=null,le=null,lt=null;return{setTest:function(st){Y||(st?j(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(st){St!==st&&!Y&&(i.stencilMask(st),St=st)},setFunc:function(st,mt,gt){(yt!==st||ut!==mt||wt!==gt)&&(i.stencilFunc(st,mt,gt),yt=st,ut=mt,wt=gt)},setOp:function(st,mt,gt){($t!==st||se!==mt||le!==gt)&&(i.stencilOp(st,mt,gt),$t=st,se=mt,le=gt)},setLocked:function(st){Y=st},setClear:function(st){lt!==st&&(i.clearStencil(st),lt=st)},reset:function(){Y=!1,St=null,yt=null,ut=null,wt=null,$t=null,se=null,le=null,lt=null}}}const o=new s,c=new r,u=new a,h=new WeakMap,l=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,E=null,R=null,C=null,B=null,M=new fe(0,0,0),w=0,L=!1,V=null,W=null,U=null,k=null,tt=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=K>=2);let b=null,N={};const D=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),T=new Ne().fromArray(D),$=new Ne().fromArray(I);function at(Y,St,yt,ut){const wt=new Uint8Array(4),$t=i.createTexture();i.bindTexture(Y,$t),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<yt;se++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(St,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(St+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return $t}const et={};et[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),j(i.DEPTH_TEST),c.setFunc(zr),At(!1),Wt(ca),j(i.CULL_FACE),ct(Wn);function j(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function ot(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function ht(Y,St){return p[Y]!==St?(i.bindFramebuffer(Y,St),p[Y]=St,n&&(Y===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=St),Y===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=St)),!0):!1}function q(Y,St){let yt=g,ut=!1;if(Y)if(yt=v.get(St),yt===void 0&&(yt=[],v.set(St,yt)),Y.isWebGLMultipleRenderTargets){const wt=Y.texture;if(yt.length!==wt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let $t=0,se=wt.length;$t<se;$t++)yt[$t]=i.COLOR_ATTACHMENT0+$t;yt.length=wt.length,ut=!0}}else yt[0]!==i.COLOR_ATTACHMENT0&&(yt[0]=i.COLOR_ATTACHMENT0,ut=!0);else yt[0]!==i.BACK&&(yt[0]=i.BACK,ut=!0);ut&&(e.isWebGL2?i.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function Lt(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}const ft={[Qn]:i.FUNC_ADD,[Xl]:i.FUNC_SUBTRACT,[ql]:i.FUNC_REVERSE_SUBTRACT};if(n)ft[fa]=i.MIN,ft[pa]=i.MAX;else{const Y=t.get("EXT_blend_minmax");Y!==null&&(ft[fa]=Y.MIN_EXT,ft[pa]=Y.MAX_EXT)}const it={[Yl]:i.ZERO,[$l]:i.ONE,[jl]:i.SRC_COLOR,[Bs]:i.SRC_ALPHA,[ec]:i.SRC_ALPHA_SATURATE,[Ql]:i.DST_COLOR,[Zl]:i.DST_ALPHA,[Kl]:i.ONE_MINUS_SRC_COLOR,[Os]:i.ONE_MINUS_SRC_ALPHA,[tc]:i.ONE_MINUS_DST_COLOR,[Jl]:i.ONE_MINUS_DST_ALPHA,[nc]:i.CONSTANT_COLOR,[ic]:i.ONE_MINUS_CONSTANT_COLOR,[rc]:i.CONSTANT_ALPHA,[sc]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(Y,St,yt,ut,wt,$t,se,le,lt,st){if(Y===Wn){f===!0&&(ot(i.BLEND),f=!1);return}if(f===!1&&(j(i.BLEND),f=!0),Y!==kl){if(Y!==_||st!==L){if((x!==Qn||R!==Qn)&&(i.blendEquation(i.FUNC_ADD),x=Qn,R=Qn),st)switch(Y){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case da:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}y=null,E=null,C=null,B=null,M.set(0,0,0),w=0,_=Y,L=st}return}wt=wt||St,$t=$t||yt,se=se||ut,(St!==x||wt!==R)&&(i.blendEquationSeparate(ft[St],ft[wt]),x=St,R=wt),(yt!==y||ut!==E||$t!==C||se!==B)&&(i.blendFuncSeparate(it[yt],it[ut],it[$t],it[se]),y=yt,E=ut,C=$t,B=se),(le.equals(M)===!1||lt!==w)&&(i.blendColor(le.r,le.g,le.b,lt),M.copy(le),w=lt),_=Y,L=!1}function Zt(Y,St){Y.side===bn?ot(i.CULL_FACE):j(i.CULL_FACE);let yt=Y.side===Ye;St&&(yt=!yt),At(yt),Y.blending===Ii&&Y.transparent===!1?ct(Wn):ct(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const ut=Y.stencilWrite;u.setTest(ut),ut&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ee(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(Y){V!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),V=Y)}function Wt(Y){Y!==Gl?(j(i.CULL_FACE),Y!==W&&(Y===ca?i.cullFace(i.BACK):Y===Wl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),W=Y}function Mt(Y){Y!==U&&(O&&i.lineWidth(Y),U=Y)}function ee(Y,St,yt){Y?(j(i.POLYGON_OFFSET_FILL),(k!==St||tt!==yt)&&(i.polygonOffset(St,yt),k=St,tt=yt)):ot(i.POLYGON_OFFSET_FILL)}function ie(Y){Y?j(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function P(Y){Y===void 0&&(Y=i.TEXTURE0+F-1),b!==Y&&(i.activeTexture(Y),b=Y)}function A(Y,St,yt){yt===void 0&&(b===null?yt=i.TEXTURE0+F-1:yt=b);let ut=N[yt];ut===void 0&&(ut={type:void 0,texture:void 0},N[yt]=ut),(ut.type!==Y||ut.texture!==St)&&(b!==yt&&(i.activeTexture(yt),b=yt),i.bindTexture(Y,St||et[Y]),ut.type=Y,ut.texture=St)}function J(){const Y=N[b];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function H(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(Y){T.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),T.copy(Y))}function Yt(Y){$.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),$.copy(Y))}function kt(Y,St){let yt=l.get(St);yt===void 0&&(yt=new WeakMap,l.set(St,yt));let ut=yt.get(Y);ut===void 0&&(ut=i.getUniformBlockIndex(St,Y.name),yt.set(Y,ut))}function Ut(Y,St){const ut=l.get(St).get(Y);h.get(St)!==ut&&(i.uniformBlockBinding(St,ut,Y.__bindingPointIndex),h.set(St,ut))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},b=null,N={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,E=null,R=null,C=null,B=null,M=new fe(0,0,0),w=0,L=!1,V=null,W=null,U=null,k=null,tt=null,T.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:j,disable:ot,bindFramebuffer:ht,drawBuffers:q,useProgram:Lt,setBlending:ct,setMaterial:Zt,setFlipSided:At,setCullFace:Wt,setLineWidth:Mt,setPolygonOffset:ee,setScissorTest:ie,activeTexture:P,bindTexture:A,unbindTexture:J,compressedTexImage2D:vt,compressedTexImage3D:dt,texImage2D:pt,texImage3D:Jt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:H,texStorage3D:Et,texSubImage2D:xt,texSubImage3D:Gt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Nt,scissor:qt,viewport:Yt,reset:re}}function Jp(i,t,e,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,u=s.maxCubemapSize,h=s.maxTextureSize,l=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,A){return f?new OffscreenCanvas(P,A):ir("canvas")}function x(P,A,J,vt){let dt=1;if((P.width>vt||P.height>vt)&&(dt=vt/Math.max(P.width,P.height)),dt<1||A===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const xt=A?kr:Math.floor,Gt=xt(dt*P.width),bt=xt(dt*P.height);g===void 0&&(g=_(Gt,bt));const Nt=J?_(Gt,bt):g;return Nt.width=Gt,Nt.height=bt,Nt.getContext("2d").drawImage(P,0,0,Gt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Gt+"x"+bt+")."),Nt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return ks(P.width)&&ks(P.height)}function E(P){return o?!1:P.wrapS!==hn||P.wrapT!==hn||P.minFilter!==Ge&&P.minFilter!==en}function R(P,A){return P.generateMipmaps&&A&&P.minFilter!==Ge&&P.minFilter!==en}function C(P){i.generateMipmap(P)}function B(P,A,J,vt,dt=!1){if(o===!1)return A;if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let xt=A;if(A===i.RED&&(J===i.FLOAT&&(xt=i.R32F),J===i.HALF_FLOAT&&(xt=i.R16F),J===i.UNSIGNED_BYTE&&(xt=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(xt=i.R8UI),J===i.UNSIGNED_SHORT&&(xt=i.R16UI),J===i.UNSIGNED_INT&&(xt=i.R32UI),J===i.BYTE&&(xt=i.R8I),J===i.SHORT&&(xt=i.R16I),J===i.INT&&(xt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(xt=i.RG32F),J===i.HALF_FLOAT&&(xt=i.RG16F),J===i.UNSIGNED_BYTE&&(xt=i.RG8)),A===i.RGBA){const Gt=dt?Vr:ge.getTransfer(vt);J===i.FLOAT&&(xt=i.RGBA32F),J===i.HALF_FLOAT&&(xt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(xt=Gt===_e?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(xt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(xt=i.RGB5_A1)}return(xt===i.R16F||xt===i.R32F||xt===i.RG16F||xt===i.RG32F||xt===i.RGBA16F||xt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function M(P,A,J){return R(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==Ge&&P.minFilter!==en?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){return P===Ge||P===ma||P===is?i.NEAREST:i.LINEAR}function L(P){const A=P.target;A.removeEventListener("dispose",L),W(A),A.isVideoTexture&&v.delete(A)}function V(P){const A=P.target;A.removeEventListener("dispose",V),k(A)}function W(P){const A=n.get(P);if(A.__webglInit===void 0)return;const J=P.source,vt=m.get(J);if(vt){const dt=vt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&U(P),Object.keys(vt).length===0&&m.delete(J)}n.remove(P)}function U(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const J=P.source,vt=m.get(J);delete vt[A.__cacheKey],a.memory.textures--}function k(P){const A=P.texture,J=n.get(P),vt=n.get(A);if(vt.__webglTexture!==void 0&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(J.__webglFramebuffer[dt]))for(let xt=0;xt<J.__webglFramebuffer[dt].length;xt++)i.deleteFramebuffer(J.__webglFramebuffer[dt][xt]);else i.deleteFramebuffer(J.__webglFramebuffer[dt]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[dt])}else{if(Array.isArray(J.__webglFramebuffer))for(let dt=0;dt<J.__webglFramebuffer.length;dt++)i.deleteFramebuffer(J.__webglFramebuffer[dt]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let dt=0;dt<J.__webglColorRenderbuffer.length;dt++)J.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[dt]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let dt=0,xt=A.length;dt<xt;dt++){const Gt=n.get(A[dt]);Gt.__webglTexture&&(i.deleteTexture(Gt.__webglTexture),a.memory.textures--),n.remove(A[dt])}n.remove(A),n.remove(P)}let tt=0;function F(){tt=0}function O(){const P=tt;return P>=c&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+c),tt+=1,P}function K(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function X(P,A){const J=n.get(P);if(P.isVideoTexture&&ee(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const vt=P.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(J,P,A);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function b(P,A){const J=n.get(P);if(P.version>0&&J.__version!==P.version){j(J,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function N(P,A){const J=n.get(P);if(P.version>0&&J.__version!==P.version){j(J,P,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function D(P,A){const J=n.get(P);if(P.version>0&&J.__version!==P.version){ot(J,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const I={[Hs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Gs]:i.MIRRORED_REPEAT},T={[Ge]:i.NEAREST,[ma]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[yc]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},$={[Dc]:i.NEVER,[Vc]:i.ALWAYS,[Nc]:i.LESS,[Fc]:i.LEQUAL,[Uc]:i.EQUAL,[zc]:i.GEQUAL,[Bc]:i.GREATER,[Oc]:i.NOTEQUAL};function at(P,A,J){if(J?(i.texParameteri(P,i.TEXTURE_WRAP_S,I[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,I[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,I[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,T[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,T[A.minFilter])):(i.texParameteri(P,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(P,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==hn||A.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(P,i.TEXTURE_MAG_FILTER,w(A.magFilter)),i.texParameteri(P,i.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Ge&&A.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ge||A.minFilter!==is&&A.minFilter!==tr||A.type===Vn&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===er&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(P,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function et(P,A){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",L));const vt=A.source;let dt=m.get(vt);dt===void 0&&(dt={},m.set(vt,dt));const xt=K(A);if(xt!==P.__cacheKey){dt[xt]===void 0&&(dt[xt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),dt[xt].usedTimes++;const Gt=dt[P.__cacheKey];Gt!==void 0&&(dt[P.__cacheKey].usedTimes--,Gt.usedTimes===0&&U(A)),P.__cacheKey=xt,P.__webglTexture=dt[xt].texture}return J}function j(P,A,J){let vt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(vt=i.TEXTURE_3D);const dt=et(P,A),xt=A.source;e.bindTexture(vt,P.__webglTexture,i.TEXTURE0+J);const Gt=n.get(xt);if(xt.version!==Gt.__version||dt===!0){e.activeTexture(i.TEXTURE0+J);const bt=ge.getPrimaries(ge.workingColorSpace),Nt=A.colorSpace===rn?null:ge.getPrimaries(A.colorSpace),H=A.colorSpace===rn||bt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const Et=E(A)&&y(A.image)===!1;let pt=x(A.image,Et,!1,h);pt=ie(A,pt);const Jt=y(pt)||o,qt=r.convert(A.format,A.colorSpace);let Yt=r.convert(A.type),kt=B(A.internalFormat,qt,Yt,A.colorSpace,A.isVideoTexture);at(vt,A,Jt);let Ut;const re=A.mipmaps,Y=o&&A.isVideoTexture!==!0,St=Gt.__version===void 0||dt===!0,yt=M(A,pt,Jt);if(A.isDepthTexture)kt=i.DEPTH_COMPONENT,o?A.type===Vn?kt=i.DEPTH_COMPONENT32F:A.type===zn?kt=i.DEPTH_COMPONENT24:A.type===ei?kt=i.DEPTH24_STENCIL8:kt=i.DEPTH_COMPONENT16:A.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ni&&kt===i.DEPTH_COMPONENT&&A.type!==Ks&&A.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=zn,Yt=r.convert(A.type)),A.format===zi&&kt===i.DEPTH_COMPONENT&&(kt=i.DEPTH_STENCIL,A.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ei,Yt=r.convert(A.type))),St&&(Y?e.texStorage2D(i.TEXTURE_2D,1,kt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,kt,pt.width,pt.height,0,qt,Yt,null));else if(A.isDataTexture)if(re.length>0&&Jt){Y&&St&&e.texStorage2D(i.TEXTURE_2D,yt,kt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],Y?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,kt,Ut.width,Ut.height,0,qt,Yt,Ut.data);A.generateMipmaps=!1}else Y?(St&&e.texStorage2D(i.TEXTURE_2D,yt,kt,pt.width,pt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,qt,Yt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,pt.width,pt.height,0,qt,Yt,pt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Y&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,kt,re[0].width,re[0].height,pt.depth);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],A.format!==un?qt!==null?Y?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,kt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Yt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,kt,Ut.width,Ut.height,pt.depth,0,qt,Yt,Ut.data)}else{Y&&St&&e.texStorage2D(i.TEXTURE_2D,yt,kt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],A.format!==un?qt!==null?Y?e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,kt,Ut.width,Ut.height,0,qt,Yt,Ut.data)}else if(A.isDataArrayTexture)Y?(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,kt,pt.width,pt.height,pt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(A.isData3DTexture)Y?(St&&e.texStorage3D(i.TEXTURE_3D,yt,kt,pt.width,pt.height,pt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(A.isFramebufferTexture){if(St)if(Y)e.texStorage2D(i.TEXTURE_2D,yt,kt,pt.width,pt.height);else{let ut=pt.width,wt=pt.height;for(let $t=0;$t<yt;$t++)e.texImage2D(i.TEXTURE_2D,$t,kt,ut,wt,0,qt,Yt,null),ut>>=1,wt>>=1}}else if(re.length>0&&Jt){Y&&St&&e.texStorage2D(i.TEXTURE_2D,yt,kt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],Y?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,qt,Yt,Ut):e.texImage2D(i.TEXTURE_2D,ut,kt,qt,Yt,Ut);A.generateMipmaps=!1}else Y?(St&&e.texStorage2D(i.TEXTURE_2D,yt,kt,pt.width,pt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,Yt,pt)):e.texImage2D(i.TEXTURE_2D,0,kt,qt,Yt,pt);R(A,Jt)&&C(vt),Gt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ot(P,A,J){if(A.image.length!==6)return;const vt=et(P,A),dt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+J);const xt=n.get(dt);if(dt.version!==xt.__version||vt===!0){e.activeTexture(i.TEXTURE0+J);const Gt=ge.getPrimaries(ge.workingColorSpace),bt=A.colorSpace===rn?null:ge.getPrimaries(A.colorSpace),Nt=A.colorSpace===rn||Gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const H=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,pt=[];for(let ut=0;ut<6;ut++)!H&&!Et?pt[ut]=x(A.image[ut],!1,!0,u):pt[ut]=Et?A.image[ut].image:A.image[ut],pt[ut]=ie(A,pt[ut]);const Jt=pt[0],qt=y(Jt)||o,Yt=r.convert(A.format,A.colorSpace),kt=r.convert(A.type),Ut=B(A.internalFormat,Yt,kt,A.colorSpace),re=o&&A.isVideoTexture!==!0,Y=xt.__version===void 0||vt===!0;let St=M(A,Jt,qt);at(i.TEXTURE_CUBE_MAP,A,qt);let yt;if(H){re&&Y&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ut,Jt.width,Jt.height);for(let ut=0;ut<6;ut++){yt=pt[ut].mipmaps;for(let wt=0;wt<yt.length;wt++){const $t=yt[wt];A.format!==un?Yt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,$t.width,$t.height,Yt,$t.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,$t.width,$t.height,Yt,kt,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,$t.width,$t.height,0,Yt,kt,$t.data)}}}else{yt=A.mipmaps,re&&Y&&(yt.length>0&&St++,e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ut,pt[0].width,pt[0].height));for(let ut=0;ut<6;ut++)if(Et){re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,pt[ut].width,pt[ut].height,Yt,kt,pt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,pt[ut].width,pt[ut].height,0,Yt,kt,pt[ut].data);for(let wt=0;wt<yt.length;wt++){const se=yt[wt].image[ut].image;re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,se.width,se.height,Yt,kt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,se.width,se.height,0,Yt,kt,se.data)}}else{re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Yt,kt,pt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,Yt,kt,pt[ut]);for(let wt=0;wt<yt.length;wt++){const $t=yt[wt];re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,Yt,kt,$t.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,Yt,kt,$t.image[ut])}}}R(A,qt)&&C(i.TEXTURE_CUBE_MAP),xt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ht(P,A,J,vt,dt,xt){const Gt=r.convert(J.format,J.colorSpace),bt=r.convert(J.type),Nt=B(J.internalFormat,Gt,bt,J.colorSpace);if(!n.get(A).__hasExternalTextures){const Et=Math.max(1,A.width>>xt),pt=Math.max(1,A.height>>xt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,xt,Nt,Et,pt,A.depth,0,Gt,bt,null):e.texImage2D(dt,xt,Nt,Et,pt,0,Gt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,n.get(J).__webglTexture,0,Wt(A)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,n.get(J).__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(P,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer&&!A.stencilBuffer){let vt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Mt(A)){const dt=A.depthTexture;dt&&dt.isDepthTexture&&(dt.type===Vn?vt=i.DEPTH_COMPONENT32F:dt.type===zn&&(vt=i.DEPTH_COMPONENT24));const xt=Wt(A);Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,vt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,vt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,P)}else if(A.depthBuffer&&A.stencilBuffer){const vt=Wt(A);J&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,A.width,A.height):Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,P)}else{const vt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let dt=0;dt<vt.length;dt++){const xt=vt[dt],Gt=r.convert(xt.format,xt.colorSpace),bt=r.convert(xt.type),Nt=B(xt.internalFormat,Gt,bt,xt.colorSpace),H=Wt(A);J&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,Nt,A.width,A.height):Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,Nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const vt=n.get(A.depthTexture).__webglTexture,dt=Wt(A);if(A.depthTexture.format===ni)Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(A.depthTexture.format===zi)Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ft(P){const A=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Lt(A.__webglFramebuffer,P)}else if(J){A.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[vt]),A.__webglDepthbuffer[vt]=i.createRenderbuffer(),q(A.__webglDepthbuffer[vt],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),q(A.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(P,A,J){const vt=n.get(P);A!==void 0&&ht(vt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ft(P)}function ct(P){const A=P.texture,J=n.get(P),vt=n.get(A);P.addEventListener("dispose",V),P.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=A.version,a.memory.textures++);const dt=P.isWebGLCubeRenderTarget===!0,xt=P.isWebGLMultipleRenderTargets===!0,Gt=y(P)||o;if(dt){J.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[bt]=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)J.__webglFramebuffer[bt][Nt]=i.createFramebuffer()}else J.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let bt=0;bt<A.mipmaps.length;bt++)J.__webglFramebuffer[bt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(xt)if(s.drawBuffers){const bt=P.texture;for(let Nt=0,H=bt.length;Nt<H;Nt++){const Et=n.get(bt[Nt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Mt(P)===!1){const bt=xt?A:[A];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const H=bt[Nt];J.__webglColorRenderbuffer[Nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Nt]);const Et=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),Jt=B(H.internalFormat,Et,pt,H.colorSpace,P.isXRRenderTarget===!0),qt=Wt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Jt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),q(J.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),at(i.TEXTURE_CUBE_MAP,A,Gt);for(let bt=0;bt<6;bt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ht(J.__webglFramebuffer[bt][Nt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Nt);else ht(J.__webglFramebuffer[bt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);R(A,Gt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){const bt=P.texture;for(let Nt=0,H=bt.length;Nt<H;Nt++){const Et=bt[Nt],pt=n.get(Et);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),at(i.TEXTURE_2D,Et,Gt),ht(J.__webglFramebuffer,P,Et,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,0),R(Et,Gt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?bt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(bt,vt.__webglTexture),at(bt,A,Gt),o&&A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ht(J.__webglFramebuffer[Nt],P,A,i.COLOR_ATTACHMENT0,bt,Nt);else ht(J.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,bt,0);R(A,Gt)&&C(bt),e.unbindTexture()}P.depthBuffer&&ft(P)}function Zt(P){const A=y(P)||o,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let vt=0,dt=J.length;vt<dt;vt++){const xt=J[vt];if(R(xt,A)){const Gt=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(xt).__webglTexture;e.bindTexture(Gt,bt),C(Gt),e.unbindTexture()}}}function At(P){if(o&&P.samples>0&&Mt(P)===!1){const A=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,vt=P.height;let dt=i.COLOR_BUFFER_BIT;const xt=[],Gt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(P),Nt=P.isWebGLMultipleRenderTargets===!0;if(Nt)for(let H=0;H<A.length;H++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let H=0;H<A.length;H++){xt.push(i.COLOR_ATTACHMENT0+H),P.depthBuffer&&xt.push(Gt);const Et=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(Et===!1&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Nt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[H]),Et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Gt])),Nt){const pt=n.get(A[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,J,vt,0,0,J,vt,dt,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Nt)for(let H=0;H<A.length;H++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,bt.__webglColorRenderbuffer[H]);const Et=n.get(A[H]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function Wt(P){return Math.min(l,P.samples)}function Mt(P){const A=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ee(P){const A=a.render.frame;v.get(P)!==A&&(v.set(P,A),P.update())}function ie(P,A){const J=P.colorSpace,vt=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ws||J!==Pn&&J!==rn&&(ge.getTransfer(J)===_e?o===!1?t.has("EXT_sRGB")===!0&&vt===un?(P.format=Ws,P.minFilter=en,P.generateMipmaps=!1):A=al.sRGBToLinear(A):(vt!==un||dt!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=b,this.setTexture3D=N,this.setTextureCube=D,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Mt}function Qp(i,t,e){const n=e.isWebGL2;function s(r,a=rn){let o;const c=ge.getTransfer(a);if(r===Xn)return i.UNSIGNED_BYTE;if(r===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Mc)return i.BYTE;if(r===Ec)return i.SHORT;if(r===Ks)return i.UNSIGNED_SHORT;if(r===Zo)return i.INT;if(r===zn)return i.UNSIGNED_INT;if(r===Vn)return i.FLOAT;if(r===er)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Sc)return i.ALPHA;if(r===un)return i.RGBA;if(r===wc)return i.LUMINANCE;if(r===bc)return i.LUMINANCE_ALPHA;if(r===ni)return i.DEPTH_COMPONENT;if(r===zi)return i.DEPTH_STENCIL;if(r===Ws)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ac)return i.RED;if(r===tl)return i.RED_INTEGER;if(r===Tc)return i.RG;if(r===el)return i.RG_INTEGER;if(r===nl)return i.RGBA_INTEGER;if(r===rs||r===ss||r===as||r===os)if(c===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===rs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===as)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===rs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ss)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===as)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===va||r===ga||r===_a||r===xa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===va)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_a)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ya||r===Ma)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ya)return c===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ma)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ea||r===Sa||r===wa||r===ba||r===Aa||r===Ta||r===Ra||r===Ca||r===Pa||r===La||r===Ia||r===Da||r===Na||r===Ua)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ea)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ba)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Aa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ta)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ra)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ca)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pa)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===La)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ia)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Da)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Na)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ua)return c===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ls||r===Fa||r===Ba)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ls)return c===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fa)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ba)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cc||r===Oa||r===za||r===Va)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ls)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Oa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===za)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Va)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ei?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class tm extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lr extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(em)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Lr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class nm extends $e{constructor(t,e,n,s,r,a,o,c,u,h){if(h=h!==void 0?h:ni,h!==ni&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=zn),n===void 0&&h===zi&&(n=ei),super(null,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=c!==void 0?c:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class im extends hi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,d=null,p=null,v=null;const g=e.getContextAttributes();let m=null,f=null;const _=[],x=[],y=new nn;y.layers.enable(1),y.viewport=new Ne;const E=new nn;E.layers.enable(2),E.viewport=new Ne;const R=[y,E],C=new tm;C.layers.enable(1),C.layers.enable(2);let B=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let N=_[b];return N===void 0&&(N=new Ls,_[b]=N),N.getTargetRaySpace()},this.getControllerGrip=function(b){let N=_[b];return N===void 0&&(N=new Ls,_[b]=N),N.getGripSpace()},this.getHand=function(b){let N=_[b];return N===void 0&&(N=new Ls,_[b]=N),N.getHandSpace()};function w(b){const N=x.indexOf(b.inputSource);if(N===-1)return;const D=_[N];D!==void 0&&(D.update(b.inputSource,b.frame,u||a),D.dispatchEvent({type:b.type,data:b.inputSource}))}function L(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",V);for(let b=0;b<_.length;b++){const N=x[b];N!==null&&(x[b]=null,_[b].disconnect(N))}B=null,M=null,t.setRenderTarget(m),p=null,d=null,l=null,s=null,f=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(b){u=b},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(b){if(s=b,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",L),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,N),s.updateRenderState({baseLayer:p}),f=new si(p.framebufferWidth,p.framebufferHeight,{format:un,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,D=null,I=null;g.depth&&(I=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=g.stencil?zi:ni,D=g.stencil?ei:zn);const T={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(T),s.updateRenderState({layers:[d]}),f=new si(d.textureWidth,d.textureHeight,{format:un,type:Xn,depthTexture:new nm(d.textureWidth,d.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const $=t.properties.get(f);$.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function V(b){for(let N=0;N<b.removed.length;N++){const D=b.removed[N],I=x.indexOf(D);I>=0&&(x[I]=null,_[I].disconnect(D))}for(let N=0;N<b.added.length;N++){const D=b.added[N];let I=x.indexOf(D);if(I===-1){for(let $=0;$<_.length;$++)if($>=x.length){x.push(D),I=$;break}else if(x[$]===null){x[$]=D,I=$;break}if(I===-1)break}const T=_[I];T&&T.connect(D)}}const W=new nt,U=new nt;function k(b,N,D){W.setFromMatrixPosition(N.matrixWorld),U.setFromMatrixPosition(D.matrixWorld);const I=W.distanceTo(U),T=N.projectionMatrix.elements,$=D.projectionMatrix.elements,at=T[14]/(T[10]-1),et=T[14]/(T[10]+1),j=(T[9]+1)/T[5],ot=(T[9]-1)/T[5],ht=(T[8]-1)/T[0],q=($[8]+1)/$[0],Lt=at*ht,ft=at*q,it=I/(-ht+q),ct=it*-ht;N.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ct),b.translateZ(it),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Zt=at+it,At=et+it,Wt=Lt-ct,Mt=ft+(I-ct),ee=j*et/At*Zt,ie=ot*et/At*Zt;b.projectionMatrix.makePerspective(Wt,Mt,ee,ie,Zt,At),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function tt(b,N){N===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(N.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(s===null)return;C.near=E.near=y.near=b.near,C.far=E.far=y.far=b.far,(B!==C.near||M!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,M=C.far);const N=b.parent,D=C.cameras;tt(C,N);for(let I=0;I<D.length;I++)tt(D[I],N);D.length===2?k(C,y,E):C.projectionMatrix.copy(y.projectionMatrix),F(b,C,N)};function F(b,N,D){D===null?b.matrix.copy(N.matrixWorld):(b.matrix.copy(D.matrixWorld),b.matrix.invert(),b.matrix.multiply(N.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(N.projectionMatrix),b.projectionMatrixInverse.copy(N.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=nr*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(b){c=b,d!==null&&(d.fixedFoveation=b),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=b)};let O=null;function K(b,N){if(h=N.getViewerPose(u||a),v=N,h!==null){const D=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let I=!1;D.length!==C.cameras.length&&(C.cameras.length=0,I=!0);for(let T=0;T<D.length;T++){const $=D[T];let at=null;if(p!==null)at=p.getViewport($);else{const j=l.getViewSubImage(d,$);at=j.viewport,T===0&&(t.setRenderTargetTextures(f,j.colorTexture,d.ignoreDepthValues?void 0:j.depthStencilTexture),t.setRenderTarget(f))}let et=R[T];et===void 0&&(et=new nn,et.layers.enable(T),et.viewport=new Ne,R[T]=et),et.matrix.fromArray($.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray($.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),T===0&&(C.matrix.copy(et.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),I===!0&&C.cameras.push(et)}}for(let D=0;D<_.length;D++){const I=x[D],T=_[D];I!==null&&T!==void 0&&T.update(I,N,u||a)}O&&O(b,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),v=null}const X=new vl;X.setAnimationLoop(K),this.setAnimationLoop=function(b){O=b},this.dispose=function(){}}}function rm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,pl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,_,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sm(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function u(_,x){let y=s[_.id];y===void 0&&(v(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(_,E);const R=t.render.frame;r[_.id]!==R&&(d(_),r[_.id]=R)}function h(_){const x=l();_.__bindingPointIndex=x;const y=i.createBuffer(),E=_.__size,R=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function l(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=s[_.id],y=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,C=y.length;R<C;R++){const B=y[R];if(p(B,R,E)===!0){const M=B.__offset,w=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let V=0;V<w.length;V++){const W=w[V],U=g(W);typeof W=="number"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,M+L,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=W.elements[0],B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=W.elements[0],B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=W.elements[0]):(W.toArray(B.__data,L),L+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,B.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,y){const E=_.value;if(y[x]===void 0){if(typeof E=="number")y[x]=E;else{const R=Array.isArray(E)?E:[E],C=[];for(let B=0;B<R.length;B++)C.push(R[B].clone());y[x]=C}return!0}else if(typeof E=="number"){if(y[x]!==E)return y[x]=E,!0}else{const R=Array.isArray(y[x])?y[x]:[y[x]],C=Array.isArray(E)?E:[E];for(let B=0;B<R.length;B++){const M=R[B];if(M.equals(C[B])===!1)return M.copy(C[B]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const E=16;let R=0;for(let C=0,B=x.length;C<B;C++){const M=x[C],w={boundary:0,storage:0},L=Array.isArray(M.value)?M.value:[M.value];for(let V=0,W=L.length;V<W;V++){const U=L[V],k=g(U);w.boundary+=k.boundary,w.storage+=k.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,C>0){R=y%E;const V=E-R;R!==0&&V-w.boundary<0&&(y+=E-R,M.__offset=y)}y+=w.storage}return R=y%E,R>0&&(y+=E-R),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:u,dispose:f}}class El{constructor(t={}){const{canvas:e=nh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const x=this;let y=!1,E=0,R=0,C=null,B=-1,M=null;const w=new Ne,L=new Ne;let V=null;const W=new fe(0);let U=0,k=e.width,tt=e.height,F=1,O=null,K=null;const X=new Ne(0,0,k,tt),b=new Ne(0,0,k,tt);let N=!1;const D=new ea;let I=!1,T=!1,$=null;const at=new Re,et=new ae,j=new nt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?F:1}let q=n;function Lt(S,G){for(let Z=0;Z<S.length;Z++){const z=S[Z],Q=e.getContext(z,G);if(Q!==null)return Q}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${js}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",St,!1),q===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),q=Lt(G,S),q===null)throw Lt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ft,it,ct,Zt,At,Wt,Mt,ee,ie,P,A,J,vt,dt,xt,Gt,bt,Nt,H,Et,pt,Jt,qt,Yt;function kt(){ft=new mf(q),it=new cf(q,ft,t),ft.init(it),Jt=new Qp(q,ft,it),ct=new Zp(q,ft,it),Zt=new _f(q),At=new Bp,Wt=new Jp(q,ft,ct,At,it,Jt,Zt),Mt=new uf(x),ee=new pf(x),ie=new Th(q,it),qt=new of(q,ft,ie,it),P=new vf(q,ie,Zt,qt),A=new Ef(q,P,ie,Zt),H=new Mf(q,it,Wt),Gt=new hf(At),J=new Fp(x,Mt,ee,ft,it,qt,Gt),vt=new rm(x,At),dt=new zp,xt=new Xp(ft,it),Nt=new af(x,Mt,ee,ct,A,d,c),bt=new Kp(x,A,it),Yt=new sm(q,Zt,it,ct),Et=new lf(q,ft,Zt,it),pt=new gf(q,ft,Zt,it),Zt.programs=J.programs,x.capabilities=it,x.extensions=ft,x.properties=At,x.renderLists=dt,x.shadowMap=bt,x.state=ct,x.info=Zt}kt();const Ut=new im(x,q);this.xr=Ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const S=ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(k,tt,!1))},this.getSize=function(S){return S.set(k,tt)},this.setSize=function(S,G,Z=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,tt=G,e.width=Math.floor(S*F),e.height=Math.floor(G*F),Z===!0&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(k*F,tt*F).floor()},this.setDrawingBufferSize=function(S,G,Z){k=S,tt=G,F=Z,e.width=Math.floor(S*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,G,Z,z){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,G,Z,z),ct.viewport(w.copy(X).multiplyScalar(F).floor())},this.getScissor=function(S){return S.copy(b)},this.setScissor=function(S,G,Z,z){S.isVector4?b.set(S.x,S.y,S.z,S.w):b.set(S,G,Z,z),ct.scissor(L.copy(b).multiplyScalar(F).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){ct.setScissorTest(N=S)},this.setOpaqueSort=function(S){O=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,G=!0,Z=!0){let z=0;if(S){let Q=!1;if(C!==null){const _t=C.texture.format;Q=_t===nl||_t===el||_t===tl}if(Q){const _t=C.texture.type,zt=_t===Xn||_t===zn||_t===Ks||_t===ei||_t===Jo||_t===Qo,It=Nt.getClearColor(),Ot=Nt.getClearAlpha(),Ct=It.r,Qt=It.g,te=It.b;zt?(p[0]=Ct,p[1]=Qt,p[2]=te,p[3]=Ot,q.clearBufferuiv(q.COLOR,0,p)):(v[0]=Ct,v[1]=Qt,v[2]=te,v[3]=Ot,q.clearBufferiv(q.COLOR,0,v))}else z|=q.COLOR_BUFFER_BIT}G&&(z|=q.DEPTH_BUFFER_BIT),Z&&(z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",St,!1),dt.dispose(),xt.dispose(),At.dispose(),Mt.dispose(),ee.dispose(),A.dispose(),qt.dispose(),Yt.dispose(),J.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",lt),Ut.removeEventListener("sessionend",st),$&&($.dispose(),$=null),mt.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Zt.autoReset,G=bt.enabled,Z=bt.autoUpdate,z=bt.needsUpdate,Q=bt.type;kt(),Zt.autoReset=S,bt.enabled=G,bt.autoUpdate=Z,bt.needsUpdate=z,bt.type=Q}function St(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function yt(S){const G=S.target;G.removeEventListener("dispose",yt),ut(G)}function ut(S){wt(S),At.remove(S)}function wt(S){const G=At.get(S).programs;G!==void 0&&(G.forEach(function(Z){J.releaseProgram(Z)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,Z,z,Q,_t){G===null&&(G=ot);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Xt(S,G,Z,z,Q);ct.setMaterial(z,zt);let Ot=Z.index,Ct=1;if(z.wireframe===!0){if(Ot=P.getWireframeAttribute(Z),Ot===void 0)return;Ct=2}const Qt=Z.drawRange,te=Z.attributes.position;let ue=Qt.start*Ct,Me=(Qt.start+Qt.count)*Ct;_t!==null&&(ue=Math.max(ue,_t.start*Ct),Me=Math.min(Me,(_t.start+_t.count)*Ct)),Ot!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Ot.count)):te!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,te.count));const pe=Me-ue;if(pe<0||pe===1/0)return;qt.setup(Q,z,It,Z,Ot);let he,me=Et;if(Ot!==null&&(he=ie.get(Ot),me=pt,me.setIndex(he)),Q.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*ht()),me.setMode(q.LINES)):me.setMode(q.TRIANGLES);else if(Q.isLine){let jt=z.linewidth;jt===void 0&&(jt=1),ct.setLineWidth(jt*ht()),Q.isLineSegments?me.setMode(q.LINES):Q.isLineLoop?me.setMode(q.LINE_LOOP):me.setMode(q.LINE_STRIP)}else Q.isPoints?me.setMode(q.POINTS):Q.isSprite&&me.setMode(q.TRIANGLES);if(Q.isInstancedMesh)me.renderInstances(ue,pe,Q.count);else if(Z.isInstancedBufferGeometry){const jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ke=Math.min(Z.instanceCount,jt);me.renderInstances(ue,pe,Ke)}else me.render(ue,pe)};function $t(S,G,Z){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Ye,S.needsUpdate=!0,rt(S,G,Z),S.side=qn,S.needsUpdate=!0,rt(S,G,Z),S.side=bn):rt(S,G,Z)}this.compile=function(S,G,Z=null){Z===null&&(Z=S),m=xt.get(Z),m.init(),_.push(m),Z.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),S!==Z&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(x._useLegacyLights);const z=new Set;return S.traverse(function(Q){const _t=Q.material;if(_t)if(Array.isArray(_t))for(let zt=0;zt<_t.length;zt++){const It=_t[zt];$t(It,Z,Q),z.add(It)}else $t(_t,Z,Q),z.add(_t)}),_.pop(),m=null,z},this.compileAsync=function(S,G,Z=null){const z=this.compile(S,G,Z);return new Promise(Q=>{function _t(){if(z.forEach(function(zt){At.get(zt).currentProgram.isReady()&&z.delete(zt)}),z.size===0){Q(S);return}setTimeout(_t,10)}ft.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let se=null;function le(S){se&&se(S)}function lt(){mt.stop()}function st(){mt.start()}const mt=new vl;mt.setAnimationLoop(le),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(S){se=S,Ut.setAnimationLoop(S),S===null?mt.stop():mt.start()},Ut.addEventListener("sessionstart",lt),Ut.addEventListener("sessionend",st),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(G),G=Ut.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,G,C),m=xt.get(S,_.length),m.init(),_.push(m),at.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),D.setFromProjectionMatrix(at),T=this.localClippingEnabled,I=Gt.init(this.clippingPlanes,T),g=dt.get(S,f.length),g.init(),f.push(g),gt(S,G,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(O,K),this.info.render.frame++,I===!0&&Gt.beginShadows();const Z=m.state.shadowsArray;if(bt.render(Z,S,G),I===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Nt.render(g,S),m.setupLights(x._useLegacyLights),G.isArrayCamera){const z=G.cameras;for(let Q=0,_t=z.length;Q<_t;Q++){const zt=z[Q];ne(g,S,zt,zt.viewport)}}else ne(g,S,G);C!==null&&(Wt.updateMultisampleRenderTarget(C),Wt.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(x,S,G),qt.resetDefaultState(),B=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function gt(S,G,Z,z){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){z&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const zt=A.update(S),It=S.material;It.visible&&g.push(S,zt,It,Z,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||D.intersectsObject(S))){const zt=A.update(S),It=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),j.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),j.copy(zt.boundingSphere.center)),j.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(It)){const Ot=zt.groups;for(let Ct=0,Qt=Ot.length;Ct<Qt;Ct++){const te=Ot[Ct],ue=It[te.materialIndex];ue&&ue.visible&&g.push(S,zt,ue,Z,j.z,te)}}else It.visible&&g.push(S,zt,It,Z,j.z,null)}}const _t=S.children;for(let zt=0,It=_t.length;zt<It;zt++)gt(_t[zt],G,Z,z)}function ne(S,G,Z,z){const Q=S.opaque,_t=S.transmissive,zt=S.transparent;m.setupLightsView(Z),I===!0&&Gt.setGlobalState(x.clippingPlanes,Z),_t.length>0&&Vt(Q,_t,G,Z),z&&ct.viewport(w.copy(z)),Q.length>0&&Tt(Q,G,Z),_t.length>0&&Tt(_t,G,Z),zt.length>0&&Tt(zt,G,Z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Vt(S,G,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const _t=it.isWebGL2;$===null&&($=new si(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?er:Xn,minFilter:tr,samples:_t?4:0})),x.getDrawingBufferSize(et),_t?$.setSize(et.x,et.y):$.setSize(kr(et.x),kr(et.y));const zt=x.getRenderTarget();x.setRenderTarget($),x.getClearColor(W),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const It=x.toneMapping;x.toneMapping=kn,Tt(S,Z,z),Wt.updateMultisampleRenderTarget($),Wt.updateRenderTargetMipmap($);let Ot=!1;for(let Ct=0,Qt=G.length;Ct<Qt;Ct++){const te=G[Ct],ue=te.object,Me=te.geometry,pe=te.material,he=te.group;if(pe.side===bn&&ue.layers.test(z.layers)){const me=pe.side;pe.side=Ye,pe.needsUpdate=!0,Ft(ue,Z,z,Me,pe,he),pe.side=me,pe.needsUpdate=!0,Ot=!0}}Ot===!0&&(Wt.updateMultisampleRenderTarget($),Wt.updateRenderTargetMipmap($)),x.setRenderTarget(zt),x.setClearColor(W,U),x.toneMapping=It}function Tt(S,G,Z){const z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,_t=S.length;Q<_t;Q++){const zt=S[Q],It=zt.object,Ot=zt.geometry,Ct=z===null?zt.material:z,Qt=zt.group;It.layers.test(Z.layers)&&Ft(It,G,Z,Ot,Ct,Qt)}}function Ft(S,G,Z,z,Q,_t){S.onBeforeRender(x,G,Z,z,Q,_t),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(x,G,Z,z,S,_t),Q.transparent===!0&&Q.side===bn&&Q.forceSinglePass===!1?(Q.side=Ye,Q.needsUpdate=!0,x.renderBufferDirect(Z,G,z,Q,S,_t),Q.side=qn,Q.needsUpdate=!0,x.renderBufferDirect(Z,G,z,Q,S,_t),Q.side=bn):x.renderBufferDirect(Z,G,z,Q,S,_t),S.onAfterRender(x,G,Z,z,Q,_t)}function rt(S,G,Z){G.isScene!==!0&&(G=ot);const z=At.get(S),Q=m.state.lights,_t=m.state.shadowsArray,zt=Q.state.version,It=J.getParameters(S,Q.state,_t,G,Z),Ot=J.getProgramCacheKey(It);let Ct=z.programs;z.environment=S.isMeshStandardMaterial?G.environment:null,z.fog=G.fog,z.envMap=(S.isMeshStandardMaterial?ee:Mt).get(S.envMap||z.environment),Ct===void 0&&(S.addEventListener("dispose",yt),Ct=new Map,z.programs=Ct);let Qt=Ct.get(Ot);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===zt)return Bt(S,It),Qt}else It.uniforms=J.getUniforms(S),S.onBuild(Z,It,x),S.onBeforeCompile(It,x),Qt=J.acquireProgram(It,Ot),Ct.set(Ot,Qt),z.uniforms=It.uniforms;const te=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(te.clippingPlanes=Gt.uniform),Bt(S,It),z.needsLights=Rt(S),z.lightsStateVersion=zt,z.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),z.currentProgram=Qt,z.uniformsList=null,Qt}function Pt(S){if(S.uniformsList===null){const G=S.currentProgram.getUniforms();S.uniformsList=Ur.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Bt(S,G){const Z=At.get(S);Z.outputColorSpace=G.outputColorSpace,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Xt(S,G,Z,z,Q){G.isScene!==!0&&(G=ot),Wt.resetTextureUnits();const _t=G.fog,zt=z.isMeshStandardMaterial?G.environment:null,It=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pn,Ot=(z.isMeshStandardMaterial?ee:Mt).get(z.envMap||zt),Ct=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qt=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),te=!!Z.morphAttributes.position,ue=!!Z.morphAttributes.normal,Me=!!Z.morphAttributes.color;let pe=kn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pe=x.toneMapping);const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,me=he!==void 0?he.length:0,jt=At.get(z),Ke=m.state.lights;if(I===!0&&(T===!0||S!==M)){const be=S===M&&z.id===B;Gt.setState(z,S,be)}let de=!1;z.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ke.state.version||jt.outputColorSpace!==It||Q.isInstancedMesh&&jt.instancing===!1||!Q.isInstancedMesh&&jt.instancing===!0||Q.isSkinnedMesh&&jt.skinning===!1||!Q.isSkinnedMesh&&jt.skinning===!0||Q.isInstancedMesh&&jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&jt.instancingColor===!1&&Q.instanceColor!==null||jt.envMap!==Ot||z.fog===!0&&jt.fog!==_t||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Gt.numPlanes||jt.numIntersection!==Gt.numIntersection)||jt.vertexAlphas!==Ct||jt.vertexTangents!==Qt||jt.morphTargets!==te||jt.morphNormals!==ue||jt.morphColors!==Me||jt.toneMapping!==pe||it.isWebGL2===!0&&jt.morphTargetsCount!==me)&&(de=!0):(de=!0,jt.__version=z.version);let xe=jt.currentProgram;de===!0&&(xe=rt(z,G,Q));let Ae=!1,Le=!1,Ze=!1;const Kt=xe.getUniforms(),we=jt.uniforms;if(ct.useProgram(xe.program)&&(Ae=!0,Le=!0,Ze=!0),z.id!==B&&(B=z.id,Le=!0),Ae||M!==S){Kt.setValue(q,"projectionMatrix",S.projectionMatrix),Kt.setValue(q,"viewMatrix",S.matrixWorldInverse);const be=Kt.map.cameraPosition;be!==void 0&&be.setValue(q,j.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&Kt.setValue(q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Kt.setValue(q,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Le=!0,Ze=!0)}if(Q.isSkinnedMesh){Kt.setOptional(q,Q,"bindMatrix"),Kt.setOptional(q,Q,"bindMatrixInverse");const be=Q.skeleton;be&&(it.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),Kt.setValue(q,"boneTexture",be.boneTexture,Wt),Kt.setValue(q,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ee=Z.morphAttributes;if((Ee.position!==void 0||Ee.normal!==void 0||Ee.color!==void 0&&it.isWebGL2===!0)&&H.update(Q,Z,xe),(Le||jt.receiveShadow!==Q.receiveShadow)&&(jt.receiveShadow=Q.receiveShadow,Kt.setValue(q,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(we.envMap.value=Ot,we.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Le&&(Kt.setValue(q,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&Dt(we,Ze),_t&&z.fog===!0&&vt.refreshFogUniforms(we,_t),vt.refreshMaterialUniforms(we,z,F,tt,$),Ur.upload(q,Pt(jt),we,Wt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ur.upload(q,Pt(jt),we,Wt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Kt.setValue(q,"center",Q.center),Kt.setValue(q,"modelViewMatrix",Q.modelViewMatrix),Kt.setValue(q,"normalMatrix",Q.normalMatrix),Kt.setValue(q,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const be=z.uniformsGroups;for(let sn=0,ns=be.length;sn<ns;sn++)if(it.isWebGL2){const lr=be[sn];Yt.update(lr,xe),Yt.bind(lr,xe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xe}function Dt(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,G,Z){At.get(S.texture).__webglTexture=G,At.get(S.depthTexture).__webglTexture=Z;const z=At.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const Z=At.get(S);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,Z=0){C=S,E=G,R=Z;let z=!0,Q=null,_t=!1,zt=!1;if(S){const Ot=At.get(S);Ot.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(q.FRAMEBUFFER,null),z=!1):Ot.__webglFramebuffer===void 0?Wt.setupRenderTarget(S):Ot.__hasExternalTextures&&Wt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(zt=!0);const Qt=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qt[G])?Q=Qt[G][Z]:Q=Qt[G],_t=!0):it.isWebGL2&&S.samples>0&&Wt.useMultisampledRTT(S)===!1?Q=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[Z]:Q=Qt,w.copy(S.viewport),L.copy(S.scissor),V=S.scissorTest}else w.copy(X).multiplyScalar(F).floor(),L.copy(b).multiplyScalar(F).floor(),V=N;if(ct.bindFramebuffer(q.FRAMEBUFFER,Q)&&it.drawBuffers&&z&&ct.drawBuffers(S,Q),ct.viewport(w),ct.scissor(L),ct.setScissorTest(V),_t){const Ot=At.get(S.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,Z)}else if(zt){const Ot=At.get(S.texture),Ct=G||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,Ct)}B=-1},this.readRenderTargetPixels=function(S,G,Z,z,Q,_t,zt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){ct.bindFramebuffer(q.FRAMEBUFFER,It);try{const Ot=S.texture,Ct=Ot.format,Qt=Ot.type;if(Ct!==un&&Jt.convert(Ct)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=Qt===er&&(ft.has("EXT_color_buffer_half_float")||it.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Qt!==Xn&&Jt.convert(Qt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===Vn&&(it.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-z&&Z>=0&&Z<=S.height-Q&&q.readPixels(G,Z,z,Q,Jt.convert(Ct),Jt.convert(Qt),_t)}finally{const Ot=C!==null?At.get(C).__webglFramebuffer:null;ct.bindFramebuffer(q.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(S,G,Z=0){const z=Math.pow(2,-Z),Q=Math.floor(G.image.width*z),_t=Math.floor(G.image.height*z);Wt.setTexture2D(G,0),q.copyTexSubImage2D(q.TEXTURE_2D,Z,0,0,S.x,S.y,Q,_t),ct.unbindTexture()},this.copyTextureToTexture=function(S,G,Z,z=0){const Q=G.image.width,_t=G.image.height,zt=Jt.convert(Z.format),It=Jt.convert(Z.type);Wt.setTexture2D(Z,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,z,S.x,S.y,Q,_t,zt,It,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,z,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,zt,G.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,z,S.x,S.y,zt,It,G.image),z===0&&Z.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,G,Z,z,Q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=S.max.x-S.min.x+1,zt=S.max.y-S.min.y+1,It=S.max.z-S.min.z+1,Ot=Jt.convert(z.format),Ct=Jt.convert(z.type);let Qt;if(z.isData3DTexture)Wt.setTexture3D(z,0),Qt=q.TEXTURE_3D;else if(z.isDataArrayTexture)Wt.setTexture2DArray(z,0),Qt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,z.unpackAlignment);const te=q.getParameter(q.UNPACK_ROW_LENGTH),ue=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Me=q.getParameter(q.UNPACK_SKIP_PIXELS),pe=q.getParameter(q.UNPACK_SKIP_ROWS),he=q.getParameter(q.UNPACK_SKIP_IMAGES),me=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,me.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,S.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,S.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,S.min.z),Z.isDataTexture||Z.isData3DTexture?q.texSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,Ct,me.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,me.data)):q.texSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,Ct,me),q.pixelStorei(q.UNPACK_ROW_LENGTH,te),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ue),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Me),q.pixelStorei(q.UNPACK_SKIP_ROWS,pe),q.pixelStorei(q.UNPACK_SKIP_IMAGES,he),Q===0&&z.generateMipmaps&&q.generateMipmap(Qt),ct.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){E=0,R=0,C=null,ct.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zs?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===Yr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?ii:il}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ii?De:Pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class am extends El{}am.prototype.isWebGL1Renderer=!0;class ra{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=e,this.far=n}clone(){return new ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class om extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Sl extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Po=new nt,Lo=new nt,Io=new Re,Is=new Qs,Ir=new $r;class lm extends Fe{constructor(t=new _n,e=new Sl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Po.fromBufferAttribute(e,s-1),Lo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Lo);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Io.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new nt,h=new nt,l=new nt,d=new nt,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const f=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let x=f,y=_-1;x<y;x+=p){const E=v.getX(x),R=v.getX(x+1);if(u.fromBufferAttribute(m,E),h.fromBufferAttribute(m,R),Is.distanceSqToSegment(u,h,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(d);B<t.near||B>t.far||e.push({distance:B,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=f,y=_-1;x<y;x+=p){if(u.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Is.distanceSqToSegment(u,h,d,l)>c)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Do=new nt,No=new nt;class cm extends lm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Do.fromBufferAttribute(e,s),No.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Do.distanceTo(No);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zr extends _n{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],l=new nt,d=new nt,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const R=E/e;l.x=-t*Math.cos(s+R*r)*Math.sin(a+x*o),l.y=t*Math.cos(a+x*o),l.z=t*Math.sin(s+R*r)*Math.sin(a+x*o),v.push(l.x,l.y,l.z),d.copy(l).normalize(),g.push(d.x,d.y,d.z),m.push(R+y,1-x),_.push(u++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=h[f][_+1],y=h[f][_],E=h[f+1][_],R=h[f+1][_+1];(f!==0||a>0)&&p.push(x,y,R),(f!==n-1||c<Math.PI)&&p.push(y,E,R)}this.setIndex(p),this.setAttribute("position",new je(v,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ni extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Uo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hm{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const p=u[l],v=u[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const um=new hm;class Jr{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";class wl extends Jr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Uo.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=ir("img");function c(){h(),Uo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class dm extends Jr{constructor(t){super(t)}load(t,e,n,s){const r=new ta;r.colorSpace=De;const a=new wl(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(u){a.load(t[u],function(h){r.images[u]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let u=0;u<t.length;++u)c(u);return r}}class fm extends Jr{constructor(t){super(t)}load(t,e,n,s){const r=new $e,a=new wl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class bl extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ds=new Re,Fo=new nt,Bo=new nt;class pm{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),Bo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bo),e.updateMatrixWorld(),Ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mm extends pm{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new mm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class gm extends bl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _m{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oo(){return(typeof performance>"u"?Date:performance).now()}class zo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xm extends cm{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new _n;s.setAttribute("position",new je(e,3)),s.setAttribute("color",new je(n,3));const r=new Sl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new fe,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);const Vo={type:"change"},Ns={type:"start"},Ho={type:"end"},Dr=new Qs,Go=new Bn,ym=Math.cos(70*eh.DEG2RAD);class Mm extends hi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",A),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vo),n.update(),r=s.NONE},this.update=function(){const H=new nt,Et=new ai().setFromUnitVectors(t.up,new nt(0,1,0)),pt=Et.clone().invert(),Jt=new nt,qt=new ai,Yt=new nt,kt=2*Math.PI;return function(re=null){const Y=n.object.position;H.copy(Y).sub(n.target),H.applyQuaternion(Et),o.setFromVector3(H),n.autoRotate&&r===s.NONE&&L(M(re)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let St=n.minAzimuthAngle,yt=n.maxAzimuthAngle;isFinite(St)&&isFinite(yt)&&(St<-Math.PI?St+=kt:St>Math.PI&&(St-=kt),yt<-Math.PI?yt+=kt:yt>Math.PI&&(yt-=kt),St<=yt?o.theta=Math.max(St,Math.min(yt,o.theta)):o.theta=o.theta>(St+yt)/2?Math.max(St,o.theta):Math.min(yt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*u),H.setFromSpherical(o),H.applyQuaternion(pt),Y.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ut=!1;if(n.zoomToCursor&&R){let wt=null;if(n.object.isPerspectiveCamera){const $t=H.length();wt=K($t*u);const se=$t-wt;n.object.position.addScaledVector(y,se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const $t=new nt(E.x,E.y,0);$t.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ut=!0;const se=new nt(E.x,E.y,0);se.unproject(n.object),n.object.position.sub(se).add($t),n.object.updateMatrixWorld(),wt=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(Dr.origin.copy(n.object.position),Dr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Dr.direction))<ym?t.lookAt(n.target):(Go.setFromNormalAndCoplanarPoint(n.object.up,n.target),Dr.intersectPlane(Go,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ut=!0);return u=1,R=!1,ut||Jt.distanceToSquared(n.object.position)>a||8*(1-qt.dot(n.object.quaternion))>a||Yt.distanceToSquared(n.target)>0?(n.dispatchEvent(Vo),Jt.copy(n.object.position),qt.copy(n.object.quaternion),Yt.copy(n.target),ut=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",dt),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",Mt),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Mt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new zo,c=new zo;let u=1;const h=new nt,l=new ae,d=new ae,p=new ae,v=new ae,g=new ae,m=new ae,f=new ae,_=new ae,x=new ae,y=new nt,E=new ae;let R=!1;const C=[],B={};function M(H){return H!==null?2*Math.PI/60*n.autoRotateSpeed*H:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function L(H){c.theta-=H}function V(H){c.phi-=H}const W=function(){const H=new nt;return function(pt,Jt){H.setFromMatrixColumn(Jt,0),H.multiplyScalar(-pt),h.add(H)}}(),U=function(){const H=new nt;return function(pt,Jt){n.screenSpacePanning===!0?H.setFromMatrixColumn(Jt,1):(H.setFromMatrixColumn(Jt,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(pt),h.add(H)}}(),k=function(){const H=new nt;return function(pt,Jt){const qt=n.domElement;if(n.object.isPerspectiveCamera){const Yt=n.object.position;H.copy(Yt).sub(n.target);let kt=H.length();kt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*pt*kt/qt.clientHeight,n.object.matrix),U(2*Jt*kt/qt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(pt*(n.object.right-n.object.left)/n.object.zoom/qt.clientWidth,n.object.matrix),U(Jt*(n.object.top-n.object.bottom)/n.object.zoom/qt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(H){if(!n.zoomToCursor)return;R=!0;const Et=n.domElement.getBoundingClientRect(),pt=H.clientX-Et.left,Jt=H.clientY-Et.top,qt=Et.width,Yt=Et.height;E.x=pt/qt*2-1,E.y=-(Jt/Yt)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(H){return Math.max(n.minDistance,Math.min(n.maxDistance,H))}function X(H){l.set(H.clientX,H.clientY)}function b(H){O(H),f.set(H.clientX,H.clientY)}function N(H){v.set(H.clientX,H.clientY)}function D(H){d.set(H.clientX,H.clientY),p.subVectors(d,l).multiplyScalar(n.rotateSpeed);const Et=n.domElement;L(2*Math.PI*p.x/Et.clientHeight),V(2*Math.PI*p.y/Et.clientHeight),l.copy(d),n.update()}function I(H){_.set(H.clientX,H.clientY),x.subVectors(_,f),x.y>0?tt(w()):x.y<0&&F(w()),f.copy(_),n.update()}function T(H){g.set(H.clientX,H.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),k(m.x,m.y),v.copy(g),n.update()}function $(H){O(H),H.deltaY<0?F(w()):H.deltaY>0&&tt(w()),n.update()}function at(H){let Et=!1;switch(H.code){case n.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),Et=!0;break;case n.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),Et=!0;break;case n.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),Et=!0;break;case n.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),Et=!0;break}Et&&(H.preventDefault(),n.update())}function et(){if(C.length===1)l.set(C[0].pageX,C[0].pageY);else{const H=.5*(C[0].pageX+C[1].pageX),Et=.5*(C[0].pageY+C[1].pageY);l.set(H,Et)}}function j(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const H=.5*(C[0].pageX+C[1].pageX),Et=.5*(C[0].pageY+C[1].pageY);v.set(H,Et)}}function ot(){const H=C[0].pageX-C[1].pageX,Et=C[0].pageY-C[1].pageY,pt=Math.sqrt(H*H+Et*Et);f.set(0,pt)}function ht(){n.enableZoom&&ot(),n.enablePan&&j()}function q(){n.enableZoom&&ot(),n.enableRotate&&et()}function Lt(H){if(C.length==1)d.set(H.pageX,H.pageY);else{const pt=Nt(H),Jt=.5*(H.pageX+pt.x),qt=.5*(H.pageY+pt.y);d.set(Jt,qt)}p.subVectors(d,l).multiplyScalar(n.rotateSpeed);const Et=n.domElement;L(2*Math.PI*p.x/Et.clientHeight),V(2*Math.PI*p.y/Et.clientHeight),l.copy(d)}function ft(H){if(C.length===1)g.set(H.pageX,H.pageY);else{const Et=Nt(H),pt=.5*(H.pageX+Et.x),Jt=.5*(H.pageY+Et.y);g.set(pt,Jt)}m.subVectors(g,v).multiplyScalar(n.panSpeed),k(m.x,m.y),v.copy(g)}function it(H){const Et=Nt(H),pt=H.pageX-Et.x,Jt=H.pageY-Et.y,qt=Math.sqrt(pt*pt+Jt*Jt);_.set(0,qt),x.set(0,Math.pow(_.y/f.y,n.zoomSpeed)),tt(x.y),f.copy(_)}function ct(H){n.enableZoom&&it(H),n.enablePan&&ft(H)}function Zt(H){n.enableZoom&&it(H),n.enableRotate&&Lt(H)}function At(H){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",Wt),n.domElement.addEventListener("pointerup",Mt)),xt(H),H.pointerType==="touch"?J(H):ee(H))}function Wt(H){n.enabled!==!1&&(H.pointerType==="touch"?vt(H):ie(H))}function Mt(H){Gt(H),C.length===0&&(n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Mt)),n.dispatchEvent(Ho),r=s.NONE}function ee(H){let Et;switch(H.button){case 0:Et=n.mouseButtons.LEFT;break;case 1:Et=n.mouseButtons.MIDDLE;break;case 2:Et=n.mouseButtons.RIGHT;break;default:Et=-1}switch(Et){case ui.DOLLY:if(n.enableZoom===!1)return;b(H),r=s.DOLLY;break;case ui.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;N(H),r=s.PAN}else{if(n.enableRotate===!1)return;X(H),r=s.ROTATE}break;case ui.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;X(H),r=s.ROTATE}else{if(n.enablePan===!1)return;N(H),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ns)}function ie(H){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;D(H);break;case s.DOLLY:if(n.enableZoom===!1)return;I(H);break;case s.PAN:if(n.enablePan===!1)return;T(H);break}}function P(H){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(H.preventDefault(),n.dispatchEvent(Ns),$(H),n.dispatchEvent(Ho))}function A(H){n.enabled===!1||n.enablePan===!1||at(H)}function J(H){switch(bt(H),C.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;et(),r=s.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;j(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(),r=s.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ns)}function vt(H){switch(bt(H),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(H),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ft(H),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(H),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Zt(H),n.update();break;default:r=s.NONE}}function dt(H){n.enabled!==!1&&H.preventDefault()}function xt(H){C.push(H)}function Gt(H){delete B[H.pointerId];for(let Et=0;Et<C.length;Et++)if(C[Et].pointerId==H.pointerId){C.splice(Et,1);return}}function bt(H){let Et=B[H.pointerId];Et===void 0&&(Et=new ae,B[H.pointerId]=Et),Et.set(H.pageX,H.pageY)}function Nt(H){const Et=H.pointerId===C[0].pointerId?C[1]:C[0];return B[Et.pointerId]}n.domElement.addEventListener("contextmenu",dt),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",Mt),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class pn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),pn.nextNameID=pn.nextNameID||0,this.$name.id=`lil-gui-name-${++pn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Em extends pn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function qs(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Sm={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:qs,toHexString:qs},rr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},wm={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=rr.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return rr.toHexString(s)}},bm={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=rr.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return rr.toHexString(s)}},Am=[Sm,rr,wm,bm];function Tm(i){return Am.find(t=>t.match(i))}class Rm extends pn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Tm(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=qs(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Us extends pn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Cm extends pn{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let a=!1,o,c,u,h,l;const d=5,p=_=>{o=_.clientX,c=u=_.clientY,a=!0,h=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(a){const x=_.clientX-o,y=_.clientY-c;Math.abs(y)>d?(_.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&g()}if(!a){const x=_.clientY-u;l-=x*this._step*this._arrowKeyMultiplier(_),h+l>this._max?l=this._max-h:h+l<this._min&&(l=this._min-h),this._snapClampSetValue(h+l)}u=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,_,x,y,E)=>(f-_)/(x-_)*(E-y)+y,e=f=>{const _=this.$slider.getBoundingClientRect();let x=t(f,_.left,_.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,c;const u=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,c=f.touches[0].clientY,a=!0):u(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d))},l=f=>{if(a){const _=f.touches[0].clientX-o,x=f.touches[0].clientY-c;Math.abs(_)>Math.abs(x)?u(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),v=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Pm extends pn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Lm extends pn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Im=`.lil-gui {
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
}`;function Dm(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Wo=!1;class sa{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Wo&&o&&(Dm(Im),Wo=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,n,s,r){if(Object(n)===n)return new Pm(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Cm(this,t,e,n,s,r);case"boolean":return new Em(this,t,e);case"string":return new Lm(this,t,e);case"function":return new Us(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Rm(this,t,e,n)}addFolder(t){const e=new sa({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Us||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Us)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Nm=sa;function Um(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Nr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Al={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,h){if(!s[u]){if(!n[u]){var l=typeof Nr=="function"&&Nr;if(!h&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=s[u]={exports:{}};n[u][0].call(d.exports,function(p){var v=n[u][1][p];return a(v||p)},d,d.exports,e,n,s,r)}return s[u].exports}for(var o=typeof Nr=="function"&&Nr,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,h,l,d){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(u[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<u.length;m++){var f=u[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),d&&(p.x-=d,p.y-=d,p.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var h=u.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=u.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=u.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(u){var h=this.lowerBound,l=this.upperBound,d=u.lowerBound,p=u.upperBound;return(d.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(d.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(d.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},a.prototype.contains=function(u){var h=this.lowerBound,l=this.upperBound,d=u.lowerBound,p=u.upperBound;return h.x<=d.x&&l.x>=p.x&&h.y<=d.y&&l.y>=p.y&&h.z<=d.z&&l.z>=p.z},a.prototype.getCorners=function(u,h,l,d,p,v,g,m){var f=this.lowerBound,_=this.upperBound;u.copy(f),h.set(_.x,f.y,f.z),l.set(_.x,_.y,f.z),d.set(f.x,_.y,_.z),p.set(_.x,f.y,f.z),v.set(f.x,_.y,f.z),g.set(f.x,f.y,_.z),m.copy(_)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,h){var l=c,d=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(d,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var E=l[y];u.pointToLocal(E,E)}return h.setFromPoints(l)},a.prototype.toWorldFrame=function(u,h){var l=c,d=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],_=l[6],x=l[7];this.getCorners(d,p,v,g,m,f,_,x);for(var y=0;y!==8;y++){var E=l[y];u.pointToWorld(E,E)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var c=o;o=a,a=c}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,c){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,_):this.doBoundingSphereBroadphase(g,m,f,_)};var h=new a;new a,new o,new a,c.prototype.doBoundingSphereBroadphase=function(g,m,f,_){var x=h;m.position.vsub(g.position,x);var y=Math.pow(g.boundingRadius+m.boundingRadius,2),E=x.norm2();E<y&&(f.push(g),_.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),_.push(m))};var l={keys:[]},d=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,_=d,x=p,y=g.length,E=0;E!==y;E++)_[E]=g[E],x[E]=m[E];g.length=0,m.length=0;for(var E=0;E!==y;E++){var R=_[E].id,C=x[E].id,B=R<C?R+","+C:C+","+R;f[B]=E,f.keys.push(B)}for(var E=0;E!==f.keys.length;E++){var B=f.keys.pop(),M=f[B];g.push(_[M]),m.push(x[M]),delete f[B]}},c.prototype.setWorld=function(g){};var v=new a;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=c;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,d,p,v){r.apply(this),this.nx=d||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var u=new a;new a,c.prototype.collisionPairs=function(h,l,d){var p=h.numObjects(),v=h.bodies,at=this.aabbMax,$=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,_=m*f,x=f,y=1,E=at.x,R=at.y,C=at.z,B=$.x,M=$.y,w=$.z,L=g/(E-B),V=m/(R-M),W=f/(C-w),U=(E-B)/g,k=(R-M)/m,tt=(C-w)/f,F=Math.sqrt(U*U+k*k+tt*tt)*.5,O=o.types,K=O.SPHERE,X=O.PLANE;O.BOX,O.COMPOUND,O.CONVEXPOLYHEDRON;for(var b=this.bins,N=this.binLengths,D=this.bins.length,I=0;I!==D;I++)N[I]=0;var T=Math.ceil,$=Math.min,at=Math.max;function et(bt,Nt,H,Et,pt,Jt,qt){var Yt=(bt-B)*L|0,kt=(Nt-M)*V|0,Ut=(H-w)*W|0,re=T((Et-B)*L),Y=T((pt-M)*V),St=T((Jt-w)*W);Yt<0?Yt=0:Yt>=g&&(Yt=g-1),kt<0?kt=0:kt>=m&&(kt=m-1),Ut<0?Ut=0:Ut>=f&&(Ut=f-1),re<0?re=0:re>=g&&(re=g-1),Y<0?Y=0:Y>=m&&(Y=m-1),St<0?St=0:St>=f&&(St=f-1),Yt*=_,kt*=x,Ut*=y,re*=_,Y*=x,St*=y;for(var yt=Yt;yt<=re;yt+=_)for(var ut=kt;ut<=Y;ut+=x)for(var wt=Ut;wt<=St;wt+=y){var $t=yt+ut+wt;b[$t][N[$t]++]=qt}}for(var I=0;I!==p;I++){var j=v[I],ot=j.shape;switch(ot.type){case K:var ht=j.position.x,q=j.position.y,Lt=j.position.z,ft=ot.radius;et(ht-ft,q-ft,Lt-ft,ht+ft,q+ft,Lt+ft,j);break;case X:ot.worldNormalNeedsUpdate&&ot.computeWorldNormal(j.quaternion);var it=ot.worldNormal,ct=B+U*.5-j.position.x,Zt=M+k*.5-j.position.y,At=w+tt*.5-j.position.z,Wt=u;Wt.set(ct,Zt,At);for(var Mt=0,ee=0;Mt!==g;Mt++,ee+=_,Wt.y=Zt,Wt.x+=U)for(var ie=0,P=0;ie!==m;ie++,P+=x,Wt.z=At,Wt.y+=k)for(var A=0,J=0;A!==f;A++,J+=y,Wt.z+=tt)if(Wt.dot(it)<F){var vt=ee+P+J;b[vt][N[vt]++]=j}break;default:j.aabbNeedsUpdate&&j.computeAABB(),et(j.aabb.lowerBound.x,j.aabb.lowerBound.y,j.aabb.lowerBound.z,j.aabb.upperBound.x,j.aabb.upperBound.y,j.aabb.upperBound.z,j);break}}for(var I=0;I!==D;I++){var dt=N[I];if(dt>1)for(var xt=b[I],Mt=0;Mt!==dt;Mt++)for(var j=xt[Mt],ie=0;ie!==Mt;ie++){var Gt=xt[ie];this.needBroadphaseCollision(j,Gt)&&this.intersectionTest(j,Gt,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,u,h){var l=c.bodies,d=l.length,p,v,g,m;for(p=0;p!==d;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,h)},new a,o.prototype.aabbQuery=function(c,u,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var d=c.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&h.push(d)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var c=o;o=a,a=c}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,c){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}c?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),u=e("../shapes/Shape"),h=e("../collision/AABB");function l(D,I){this.from=D?D.clone():new r,this.to=I?I.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(T){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new h,p=[];l.prototype.intersectWorld=function(D,I){return this.mode=I.mode||l.ANY,this.result=I.result||new c,this.skipBackfaces=!!I.skipBackfaces,this.collisionFilterMask=typeof I.collisionFilterMask<"u"?I.collisionFilterMask:-1,this.collisionFilterGroup=typeof I.collisionFilterGroup<"u"?I.collisionFilterGroup:-1,I.from&&this.from.copy(I.from),I.to&&this.to.copy(I.to),this.callback=I.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),p.length=0,D.broadphase.aabbQuery(D,d,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(D,I,T,$){$.vsub(I,X),T.vsub(I,v),D.vsub(I,g);var at=X.dot(X),et=X.dot(v),j=X.dot(g),ot=v.dot(v),ht=v.dot(g),q,Lt;return(q=ot*j-et*ht)>=0&&(Lt=at*ht-et*j)>=0&&q+Lt<at*ot-et*et}var f=new r,_=new a;l.prototype.intersectBody=function(D,I){I&&(this.result=I,this._updateDirection());var T=this.checkCollisionResponse;if(!(T&&!D.collisionResponse)&&!(!(this.collisionFilterGroup&D.collisionFilterMask)||!(D.collisionFilterGroup&this.collisionFilterMask)))for(var $=f,at=_,et=0,j=D.shapes.length;et<j;et++){var ot=D.shapes[et];if(!(T&&!ot.collisionResponse)&&(D.quaternion.mult(D.shapeOrientations[et],at),D.quaternion.vmult(D.shapeOffsets[et],$),$.vadd(D.position,$),this.intersectShape(ot,at,$,D),this.result._shouldStop))break}},l.prototype.intersectBodies=function(D,I){I&&(this.result=I,this._updateDirection());for(var T=0,$=D.length;!this.result._shouldStop&&T<$;T++)this.intersectBody(D[T])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(D,I,T,$){var at=this.from,et=N(at,this._direction,T);if(!(et>D.boundingSphereRadius)){var j=this[D.type];j&&j.call(this,D,I,T,$)}},new r,new r;var x=new r,y=new r,E=new r,R=new r;new r,new c,l.prototype.intersectBox=function(D,I,T,$){return this.intersectConvex(D.convexPolyhedronRepresentation,I,T,$)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(D,I,T,$){var at=this.from,et=this.to,j=this._direction,ot=new r(0,0,1);I.vmult(ot,ot);var ht=new r;at.vsub(T,ht);var q=ht.dot(ot);et.vsub(T,ht);var Lt=ht.dot(ot);if(!(q*Lt>0)&&!(at.distanceTo(et)<q)){var ft=ot.dot(j);if(!(Math.abs(ft)<this.precision)){var it=new r,ct=new r,Zt=new r;at.vsub(T,it);var At=-ot.dot(it)/ft;j.scale(At,ct),at.vadd(ct,Zt),this.reportIntersection(ot,Zt,D,$,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(D){var I=this.to,T=this.from;D.lowerBound.x=Math.min(I.x,T.x),D.lowerBound.y=Math.min(I.y,T.y),D.lowerBound.z=Math.min(I.z,T.z),D.upperBound.x=Math.max(I.x,T.x),D.upperBound.y=Math.max(I.y,T.y),D.upperBound.z=Math.max(I.z,T.z)};var C={faceList:[0]};l.prototype.intersectHeightfield=function(D,I,T,$){D.data,D.elementSize;var at=new r,et=new l(this.from,this.to);o.pointToLocalFrame(T,I,et.from,et.from),o.pointToLocalFrame(T,I,et.to,et.to);var j=[],ot=null,ht=null,q=null,Lt=null,ft=D.getIndexOfPosition(et.from.x,et.from.y,j,!1);if(ft&&(ot=j[0],ht=j[1],q=j[0],Lt=j[1]),ft=D.getIndexOfPosition(et.to.x,et.to.y,j,!1),ft&&((ot===null||j[0]<ot)&&(ot=j[0]),(q===null||j[0]>q)&&(q=j[0]),(ht===null||j[1]<ht)&&(ht=j[1]),(Lt===null||j[1]>Lt)&&(Lt=j[1])),ot!==null){var it=[];D.getRectMinMax(ot,ht,q,Lt,it),it[0],it[1];for(var ct=ot;ct<=q;ct++)for(var Zt=ht;Zt<=Lt;Zt++){if(this.result._shouldStop||(D.getConvexTrianglePillar(ct,Zt,!1),o.pointToWorldFrame(T,I,D.pillarOffset,at),this.intersectConvex(D.pillarConvex,I,at,$,C),this.result._shouldStop))return;D.getConvexTrianglePillar(ct,Zt,!0),o.pointToWorldFrame(T,I,D.pillarOffset,at),this.intersectConvex(D.pillarConvex,I,at,$,C)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var B=new r,M=new r;l.prototype.intersectSphere=function(D,I,T,$){var at=this.from,et=this.to,j=D.radius,ot=Math.pow(et.x-at.x,2)+Math.pow(et.y-at.y,2)+Math.pow(et.z-at.z,2),ht=2*((et.x-at.x)*(at.x-T.x)+(et.y-at.y)*(at.y-T.y)+(et.z-at.z)*(at.z-T.z)),q=Math.pow(at.x-T.x,2)+Math.pow(at.y-T.y,2)+Math.pow(at.z-T.z,2)-Math.pow(j,2),Lt=Math.pow(ht,2)-4*ot*q,ft=B,it=M;if(!(Lt<0))if(Lt===0)at.lerp(et,Lt,ft),ft.vsub(T,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1);else{var ct=(-ht-Math.sqrt(Lt))/(2*ot),Zt=(-ht+Math.sqrt(Lt))/(2*ot);if(ct>=0&&ct<=1&&(at.lerp(et,ct,ft),ft.vsub(T,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1)),this.result._shouldStop)return;Zt>=0&&Zt<=1&&(at.lerp(et,Zt,ft),ft.vsub(T,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var w=new r;new r,new r;var L=new r;l.prototype.intersectConvex=function(I,T,$,at,et){for(var j=w,ot=L,ht=et&&et.faceList||null,q=I.faces,Lt=I.vertices,ft=I.faceNormals,it=this._direction,ct=this.from,Zt=this.to,At=ct.distanceTo(Zt),Wt=ht?ht.length:q.length,Mt=this.result,ee=0;!Mt._shouldStop&&ee<Wt;ee++){var ie=ht?ht[ee]:ee,P=q[ie],A=ft[ie],J=T,vt=$;ot.copy(Lt[P[0]]),J.vmult(ot,ot),ot.vadd(vt,ot),ot.vsub(ct,ot),J.vmult(A,j);var dt=it.dot(j);if(!(Math.abs(dt)<this.precision)){var xt=j.dot(ot)/dt;if(!(xt<0)){it.mult(xt,x),x.vadd(ct,x),y.copy(Lt[P[0]]),J.vmult(y,y),vt.vadd(y,y);for(var Gt=1;!Mt._shouldStop&&Gt<P.length-1;Gt++){E.copy(Lt[P[Gt]]),R.copy(Lt[P[Gt+1]]),J.vmult(E,E),J.vmult(R,R),vt.vadd(E,E),vt.vadd(R,R);var bt=x.distanceTo(ct);!(m(x,y,E,R)||m(x,E,y,R))||bt>At||this.reportIntersection(j,x,I,at,ie)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var V=new r,W=new r,U=new r,k=new r,tt=new r,F=new r;new h;var O=[],K=new o;l.prototype.intersectTrimesh=function(I,T,$,at,et){var j=V,ot=O,ht=K,q=L,Lt=W,ft=U,it=k,ct=F,Zt=tt;et&&et.faceList;var At=I.indices;I.vertices,I.faceNormals;var Wt=this.from,Mt=this.to,ee=this._direction;ht.position.copy($),ht.quaternion.copy(T),o.vectorToLocalFrame($,T,ee,Lt),o.pointToLocalFrame($,T,Wt,ft),o.pointToLocalFrame($,T,Mt,it);var ie=ft.distanceSquared(it);I.tree.rayQuery(this,ht,ot);for(var P=0,A=ot.length;!this.result._shouldStop&&P!==A;P++){var J=ot[P];I.getNormal(J,j),I.getVertex(At[J*3],y),y.vsub(ft,q);var vt=Lt.dot(j),dt=j.dot(q)/vt;if(!(dt<0)){Lt.scale(dt,x),x.vadd(ft,x),I.getVertex(At[J*3+1],E),I.getVertex(At[J*3+2],R);var xt=x.distanceSquared(ft);!(m(x,E,y,R)||m(x,y,E,R))||xt>ie||(o.vectorToWorldFrame(T,j,Zt),o.pointToWorldFrame($,T,x,ct),this.reportIntersection(Zt,ct,I,at,J))}}ot.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(D,I,T,$,at){var et=this.from,j=this.to,ot=et.distanceTo(I),ht=this.result;if(!(this.skipBackfaces&&D.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof at<"u"?at:-1,this.mode){case l.ALL:this.hasHit=!0,ht.set(et,j,D,I,T,$,ot),ht.hasHit=!0,this.callback(ht);break;case l.CLOSEST:(ot<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(et,j,D,I,T,$,ot));break;case l.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(et,j,D,I,T,$,ot),ht._shouldStop=!0;break}};var X=new r,b=new r;function N(D,I,T){T.vsub(D,X);var $=X.dot(I);I.mult($,b),b.vadd(D,b);var at=T.distanceTo(b);return at}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,c,u,h,l,d,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(h),this.shape=l,this.body=d,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(u){c.push(u.body)},this._removeBodyHandler=function(u){var h=c.indexOf(u.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortY=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},a.insertionSortZ=function(o){for(var c=1,u=o.length;c<u;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},a.prototype.collisionPairs=function(o,c,u){var h=this.axisList,l=h.length,d=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,d))break;this.intersectionTest(g,m,c,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,u=o.length,h=0;h!==u;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?a.insertionSortX(o):c===1?a.insertionSortY(o):c===2&&a.insertionSortZ(o)},a.checkBounds=function(o,c,u){var h,l;u===0?(h=o.position.x,l=c.position.x):u===1?(h=o.position.y,l=c.position.y):u===2&&(h=o.position.z,l=c.position.z);var d=o.boundingRadius,p=c.boundingRadius,v=h+d,g=l-p;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,c=0,u=0,h=0,l=0,d=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],_=f.position.x;o+=_,c+=_*_;var x=f.position.y;u+=x,h+=x*x;var y=f.position.z;l+=y,d+=y*y}var E=c-o*o*g,R=h-u*u*g,C=d-l*l*g;E>R?E>C?this.axisIndex=0:this.axisIndex=2:R>C?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,c,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var d=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<d.length;p++){var v=d[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new c,g=d.pivotB?d.pivotB.clone():new c;this.axisA=d.axisA?d.axisA.clone():new c,this.axisB=d.axisB?d.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new a(h,l,d),f=this.twistEquation=new o(h,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}u.prototype=new r,u.constructor=u,new c,new c,u.prototype.update=function(){var h=this.bodyA,l=this.bodyB,d=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),d.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,c,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(c,u,h,l){r.call(this,c,u),typeof h>"u"&&(h=c.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=h;var d=this.distanceEquation=new a(c,u);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,u=this.bodyB,h=this.distanceEquation,l=this.distance*.5,d=h.ni;u.position.vsub(c.position,d),d.normalize(),d.mult(l,h.ri),d.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function u(d,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,d,m,p,f,g);var _=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);_.normalize();var x=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);x.normalize();var y=this.rotationalEquation1=new a(d,p,v),E=this.rotationalEquation2=new a(d,p,v),R=this.motorEquation=new o(d,p,g);R.enabled=!1,this.equations.push(y,E,R)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var h=new c,l=new c;u.prototype.update=function(){var d=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,_=l,x=this.axisA,y=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(x,f),p.quaternion.vmult(y,_),f.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(u,h,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;u.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),u.pointToLocalFrame(g,p),r.call(this,u,p,h,v,d);var m=this.rotationalEquation1=new a(u,h,l),f=this.rotationalEquation2=new a(u,h,l),_=this.rotationalEquation3=new a(u,h,l);this.equations.push(m,f,_)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),h.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=c;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(u,h,l,d,p){r.call(this,u,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(u,l),g=this.equationY=new a(u,l),m=this.equationZ=new a(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var u=this.bodyA,h=this.bodyB,l=this.equationX,d=this.equationY,p=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,d=this.b,p=this.axisA,v=this.axisB,g=c,m=u,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.angle)-p.dot(v),y=this.computeGW(),E=this.computeGiMf(),R=-x*l-y*d-h*E;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,f,_){_=typeof _<"u"?_:1e6,r.call(this,m,f,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a,h=new a;o.prototype.computeB=function(m){var f=this.a,_=this.b,x=this.bi,y=this.bj,E=this.ri,R=this.rj,C=c,B=u,M=x.velocity,w=x.angularVelocity;x.force,x.torque;var L=y.velocity,V=y.angularVelocity;y.force,y.torque;var W=h,U=this.jacobianElementA,k=this.jacobianElementB,tt=this.ni;E.cross(tt,C),R.cross(tt,B),tt.negate(U.spatial),C.negate(U.rotational),k.spatial.copy(tt),k.rotational.copy(B),W.copy(y.position),W.vadd(R,W),W.vsub(x.position,W),W.vsub(E,W);var F=tt.dot(W),O=this.restitution+1,K=O*L.dot(tt)-O*M.dot(tt)+V.dot(B)-w.dot(C),X=this.computeGiMf(),b=-F*f-K*_-m*X;return b};var l=new a,d=new a,p=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=d,_=p,x=v,y=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,x),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(x,f),m.vsub(f,y),this.ni.dot(y)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,f,_){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var _=m,x=g,y=f;this.a=4/(y*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(y*y*x*(1+4*_))},o.prototype.computeB=function(g,m,f){var _=this.computeGW(),x=this.computeGq(),y=this.computeGiMf();return-x*g-_*m-y*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.position,y=_.position;return g.spatial.dot(x)+m.spatial.dot(y)};var c=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.velocity,y=_.velocity,E=f.angularVelocity||c,R=_.angularVelocity||c;return g.multiplyVectors(x,E)+m.multiplyVectors(y,R)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.vlambda,y=_.vlambda,E=f.wlambda||c,R=_.wlambda||c;return g.multiplyVectors(x,E)+m.multiplyVectors(y,R)};var u=new a,h=new a,l=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.force,y=f.torque,E=_.force,R=_.torque,C=f.invMassSolve,B=_.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(y,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(R,d):d.set(0,0,0),x.mult(C,u),E.mult(B,h),g.multiplyVectors(u,l)+m.multiplyVectors(h,d)};var p=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,_=this.bj,x=f.invMassSolve,y=_.invMassSolve,E=f.invInertiaWorldSolve,R=_.invInertiaWorldSolve,C=x+y;return E&&(E.vmult(g.rotational,p),C+=p.dot(g.rotational)),R&&(R.vmult(m.rotational,p),C+=p.dot(m.rotational)),C};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,_=this.bi,x=this.bj,y=v;m.spatial.mult(_.invMassSolve*g,y),_.vlambda.vadd(y,_.vlambda),f.spatial.mult(x.invMassSolve*g,y),x.vlambda.vadd(y,x.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,y),y.mult(g,y),_.wlambda.vadd(y,_.wlambda)),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(f.rotational,y),y.mult(g,y),x.wlambda.vadd(y,x.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(h,l,d){r.call(this,h,l,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var c=new a,u=new a;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,p=this.rj,v=c,g=u,m=this.t;d.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,_=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),_.spatial.copy(m),_.rotational.copy(g);var x=this.computeGW(),y=this.computeGiMf(),E=-x*l-h*y;return E}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,l,d){d=d||{};var p=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,h,l,-p,p),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var c=new r,u=new r;o.prototype.computeB=function(h){var l=this.a,d=this.b,p=this.axisA,v=this.axisB,g=c,m=u,f=this.jacobianElementA,_=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),_.rotational.copy(g);var x=Math.cos(this.maxAngle)-p.dot(v),y=this.computeGW(),E=this.computeGiMf(),R=-x*l-y*d-h*E;return R}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,u,h){h=typeof h<"u"?h:1e6,a.call(this,c,u,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var u=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,d=this.jacobianElementA,p=this.jacobianElementB;d.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,c,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,c],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},a.prototype.getTrace=function(c){var c=c||new r,u=this.elements;c.x=u[0],c.y=u[4],c.z=u[8]},a.prototype.vmult=function(o,c){c=c||new r;var u=this.elements,h=o.x,l=o.y,d=o.z;return c.x=u[0]*h+u[1]*l+u[2]*d,c.y=u[3]*h+u[4]*l+u[5]*d,c.z=u[6]*h+u[7]*l+u[8]*d,c},a.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},a.prototype.mmult=function(o,c){for(var u=c||new a,h=0;h<3;h++)for(var l=0;l<3;l++){for(var d=0,p=0;p<3;p++)d+=o.elements[h+p*3]*this.elements[p+l*3];u.elements[h+l*3]=d}return u},a.prototype.scale=function(o,c){c=c||new a;for(var u=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*u[3*l+0],h[3*l+1]=o.y*u[3*l+1],h[3*l+2]=o.z*u[3*l+2];return c},a.prototype.solve=function(o,c){c=c||new r;for(var u=3,h=4,l=[],d=0;d<u*h;d++)l.push(0);var d,p;for(d=0;d<3;d++)for(p=0;p<3;p++)l[d+h*p]=this.elements[d+3*p];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,f=4,_;do{if(d=g-v,l[d+h*d]===0){for(p=d+1;p<g;p++)if(l[d+h*p]!==0){m=f;do _=f-m,l[_+h*d]+=l[_+h*p];while(--m);break}}if(l[d+h*d]!==0)for(p=d+1;p<g;p++){var x=l[d+h*p]/l[d+h*d];m=f;do _=f-m,l[_+h*p]=_<=d?0:l[_+h*p]-l[_+h*d]*x;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},a.prototype.e=function(o,c,u){if(u===void 0)return this.elements[c+3*o];this.elements[c+3*o]=u},a.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},a.prototype.toString=function(){for(var o="",c=",",u=0;u<9;u++)o+=this.elements[u]+c;return o},a.prototype.reverse=function(o){o=o||new a;for(var c=3,u=6,h=[],l=0;l<c*u;l++)h.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)h[l+u*d]=this.elements[l+3*d];h[3+6*0]=1,h[3+6*1]=0,h[3+6*2]=0,h[4+6*0]=0,h[4+6*1]=1,h[4+6*2]=0,h[5+6*0]=0,h[5+6*1]=0,h[5+6*2]=1;var p=3,v=p,g,m=u,f;do{if(l=v-p,h[l+u*l]===0){for(d=l+1;d<v;d++)if(h[l+u*d]!==0){g=m;do f=m-g,h[f+u*l]+=h[f+u*d];while(--g);break}}if(h[l+u*l]!==0)for(d=l+1;d<v;d++){var _=h[l+u*d]/h[l+u*l];g=m;do f=m-g,h[f+u*d]=f<=l?0:h[f+u*d]-h[f+u*l]*_;while(--g)}}while(--p);l=2;do{d=l-1;do{var _=h[l+u*d]/h[l+u*l];g=u;do f=u-g,h[f+u*d]=h[f+u*d]-h[f+u*l]*_;while(--g)}while(d--)}while(--l);l=2;do{var _=1/h[l+u*l];g=u;do f=u-g,h[f+u*l]=h[f+u*l]*_;while(--g)}while(l--);l=2;do{d=2;do{if(f=h[c+d+u*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,f)}while(d--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var c=o.x,u=o.y,h=o.z,l=o.w,d=c+c,p=u+u,v=h+h,g=c*d,m=c*p,f=c*v,_=u*p,x=u*v,y=h*v,E=l*d,R=l*p,C=l*v,B=this.elements;return B[3*0+0]=1-(_+y),B[3*0+1]=m-C,B[3*0+2]=f+R,B[3*1+0]=m+C,B[3*1+1]=1-(g+y),B[3*1+2]=x-E,B[3*2+0]=f-R,B[3*2+1]=x+E,B[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var c=o.elements,u=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=u[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(d,p,v,g){this.x=d!==void 0?d:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,p,v,g){this.x=d,this.y=p,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,p){var v=Math.sin(p*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(p*.5)},a.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,p]};var o=new r,c=new r;a.prototype.setFromVectors=function(d,p){if(d.isAntiparallelTo(p)){var v=o,g=c;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(p.norm(),2))+d.dot(p),this.normalize()}};var u=new r,h=new r,l=new r;a.prototype.mult=function(d,p){p=p||new a;var v=this.w,g=u,m=h,f=l;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),p.w=v*d.w-g.dot(m),g.cross(m,f),p.x=v*m.x+d.w*g.x+f.x,p.y=v*m.y+d.w*g.y+f.y,p.z=v*m.z+d.w*g.z+f.z,p},a.prototype.inverse=function(d){var p=this.x,v=this.y,g=this.z,m=this.w;d=d||new a,this.conjugate(d);var f=1/(p*p+v*v+g*g+m*m);return d.x*=f,d.y*=f,d.z*=f,d.w*=f,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,p){p=p||new r;var v=d.x,g=d.y,m=d.z,f=this.x,_=this.y,x=this.z,y=this.w,E=y*v+_*m-x*g,R=y*g+x*v-f*m,C=y*m+f*g-_*v,B=-f*v-_*g-x*m;return p.x=E*y+B*-f+R*-x-C*-_,p.y=R*y+B*-_+C*-f-E*-x,p.z=C*y+B*-x+E*-_-R*-f,p},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,p){p=p||"YZX";var v,g,m,f=this.x,_=this.y,x=this.z,y=this.w;switch(p){case"YZX":var E=f*_+x*y;if(E>.499&&(v=2*Math.atan2(f,y),g=Math.PI/2,m=0),E<-.499&&(v=-2*Math.atan2(f,y),g=-Math.PI/2,m=0),isNaN(v)){var R=f*f,C=_*_,B=x*x;v=Math.atan2(2*_*y-2*f*x,1-2*C-2*B),g=Math.asin(2*E),m=Math.atan2(2*f*y-2*_*x,1-2*R-2*B)}break;default:throw new Error("Euler order "+p+" not supported yet.")}d.y=v,d.z=g,d.x=m},a.prototype.setFromEuler=function(d,p,v,g){g=g||"XYZ";var m=Math.cos(d/2),f=Math.cos(p/2),_=Math.cos(v/2),x=Math.sin(d/2),y=Math.sin(p/2),E=Math.sin(v/2);return g==="XYZ"?(this.x=x*f*_+m*y*E,this.y=m*y*_-x*f*E,this.z=m*f*E+x*y*_,this.w=m*f*_-x*y*E):g==="YXZ"?(this.x=x*f*_+m*y*E,this.y=m*y*_-x*f*E,this.z=m*f*E-x*y*_,this.w=m*f*_+x*y*E):g==="ZXY"?(this.x=x*f*_-m*y*E,this.y=m*y*_+x*f*E,this.z=m*f*E+x*y*_,this.w=m*f*_-x*y*E):g==="ZYX"?(this.x=x*f*_-m*y*E,this.y=m*y*_+x*f*E,this.z=m*f*E-x*y*_,this.w=m*f*_+x*y*E):g==="YZX"?(this.x=x*f*_+m*y*E,this.y=m*y*_+x*f*E,this.z=m*f*E-x*y*_,this.w=m*f*_-x*y*E):g==="XZY"&&(this.x=x*f*_-m*y*E,this.y=m*y*_-x*f*E,this.z=m*f*E+x*y*_,this.w=m*f*_+x*y*E),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var c=new a;o.pointToLocalFrame=function(u,h,l,p){var p=p||new r;return l.vsub(u,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(u,h){return o.pointToLocalFrame(this.position,this.quaternion,u,h)},o.pointToWorldFrame=function(u,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(u,p),p},o.prototype.pointToWorld=function(u,h){return o.pointToWorldFrame(this.position,this.quaternion,u,h)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,h,l){return u.vmult(h,l),l},o.vectorToLocalFrame=function(u,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(h,l,d){this.x=h||0,this.y=l||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(h,l){var d=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return l=l||new a,l.x=m*v-f*p,l.y=f*d-g*v,l.z=g*p-m*d,l},a.prototype.set=function(h,l,d){return this.x=h,this.y=l,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new a(this.x+h.x,this.y+h.y,this.z+h.z)},a.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new a(this.x-h.x,this.y-h.y,this.z-h.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var h=this.x,l=this.y,d=this.z,p=Math.sqrt(h*h+l*l+d*d);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},a.prototype.unit=function(h){h=h||new a;var l=this.x,d=this.y,p=this.z,v=Math.sqrt(l*l+d*d+p*p);return v>0?(v=1/v,h.x=l*v,h.y=d*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},a.prototype.norm=function(){var h=this.x,l=this.y,d=this.z;return Math.sqrt(h*h+l*l+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(h){var l=this.x,d=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-d)*(g-d)+(m-p)*(m-p))},a.prototype.distanceSquared=function(h){var l=this.x,d=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-d)*(g-d)+(m-p)*(m-p)},a.prototype.mult=function(h,l){l=l||new a;var d=this.x,p=this.y,v=this.z;return l.x=h*d,l.y=h*p,l.z=h*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(h){return h=h||new a,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new a,c=new a;a.prototype.tangents=function(h,l){var d=this.norm();if(d>0){var p=o,v=1/d;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},a.prototype.lerp=function(h,l,d){var p=this.x,v=this.y,g=this.z;d.x=p+(h.x-p)*l,d.y=v+(h.y-v)*l,d.z=g+(h.z-g)*l},a.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},a.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var u=new a;a.prototype.isAntiparallelTo=function(h,l){return this.negate(u),u.almostEquals(h,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),h=e("../shapes/Box");function l(L){L=L||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof L.collisionFilterGroup=="number"?L.collisionFilterGroup:1,this.collisionFilterMask=typeof L.collisionFilterMask=="number"?L.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,L.position&&this.position.copy(L.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,L.velocity&&this.velocity.copy(L.velocity),this.initVelocity=new a,this.force=new a;var V=typeof L.mass=="number"?L.mass:0;this.mass=V,this.invMass=V>0?1/V:0,this.material=L.material||null,this.linearDamping=typeof L.linearDamping=="number"?L.linearDamping:.01,this.type=V<=0?l.STATIC:l.DYNAMIC,typeof L.type==typeof l.STATIC&&(this.type=L.type),this.allowSleep=typeof L.allowSleep<"u"?L.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof L.sleepSpeedLimit<"u"?L.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof L.sleepTimeLimit<"u"?L.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new c,L.quaternion&&this.quaternion.copy(L.quaternion),this.initQuaternion=new c,this.angularVelocity=new a,L.angularVelocity&&this.angularVelocity.copy(L.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof L.fixedRotation<"u"?L.fixedRotation:!1,this.angularDamping=typeof L.angularDamping<"u"?L.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,L.shape&&this.addShape(L.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var L=this.sleepState;this.sleepState=0,L===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(L){if(this.allowSleep){var V=this.sleepState,W=this.velocity.norm2()+this.angularVelocity.norm2(),U=Math.pow(this.sleepSpeedLimit,2);V===l.AWAKE&&W<U?(this.sleepState=l.SLEEPY,this.timeLastSleepy=L,this.dispatchEvent(l.sleepyEvent)):V===l.SLEEPY&&W>U?this.wakeUp():V===l.SLEEPY&&L-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(L,W){var W=W||new a;return L.vsub(this.position,W),this.quaternion.conjugate().vmult(W,W),W},l.prototype.vectorToLocalFrame=function(L,W){var W=W||new a;return this.quaternion.conjugate().vmult(L,W),W},l.prototype.pointToWorldFrame=function(L,W){var W=W||new a;return this.quaternion.vmult(L,W),W.vadd(this.position,W),W},l.prototype.vectorToWorldFrame=function(L,W){var W=W||new a;return this.quaternion.vmult(L,W),W};var d=new a,p=new c;l.prototype.addShape=function(L,V,W){var U=new a,k=new c;return V&&U.copy(V),W&&k.copy(W),this.shapes.push(L),this.shapeOffsets.push(U),this.shapeOrientations.push(k),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var L=this.shapes,V=this.shapeOffsets,W=L.length,U=0,k=0;k!==W;k++){var tt=L[k];tt.updateBoundingSphereRadius();var F=V[k].norm(),O=tt.boundingSphereRadius;F+O>U&&(U=F+O)}this.boundingRadius=U};var v=new u;l.prototype.computeAABB=function(){for(var L=this.shapes,V=this.shapeOffsets,W=this.shapeOrientations,U=L.length,k=d,tt=p,F=this.quaternion,O=this.aabb,K=v,X=0;X!==U;X++){var b=L[X];W[X].mult(F,tt),tt.vmult(V[X],k),k.vadd(this.position,k),b.calculateWorldAABB(k,tt,K.lowerBound,K.upperBound),X===0?O.copy(K):O.extend(K)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(L){var V=this.invInertia;if(!(V.x===V.y&&V.y===V.z&&!L)){var W=g,U=m;W.setRotationFromQuaternion(this.quaternion),W.transpose(U),W.scale(V,W),W.mmult(U,this.invInertiaWorld)}};var f=new a,_=new a;l.prototype.applyForce=function(L,V){if(this.type===l.DYNAMIC){var W=f;V.vsub(this.position,W);var U=_;W.cross(L,U),this.force.vadd(L,this.force),this.torque.vadd(U,this.torque)}};var x=new a,y=new a;l.prototype.applyLocalForce=function(L,V){if(this.type===l.DYNAMIC){var W=x,U=y;this.vectorToWorldFrame(L,W),this.pointToWorldFrame(V,U),this.applyForce(W,U)}};var E=new a,R=new a,C=new a;l.prototype.applyImpulse=function(L,V){if(this.type===l.DYNAMIC){var W=E;V.vsub(this.position,W);var U=R;U.copy(L),U.mult(this.invMass,U),this.velocity.vadd(U,this.velocity);var k=C;W.cross(L,k),this.invInertiaWorld.vmult(k,k),this.angularVelocity.vadd(k,this.angularVelocity)}};var B=new a,M=new a;l.prototype.applyLocalImpulse=function(L,V){if(this.type===l.DYNAMIC){var W=B,U=M;this.vectorToWorldFrame(L,W),this.pointToWorldFrame(V,U),this.applyImpulse(W,U)}};var w=new a;l.prototype.updateMassProperties=function(){var L=w;this.invMass=this.mass>0?1/this.mass:0;var V=this.inertia,W=this.fixedRotation;this.computeAABB(),L.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(L,this.mass,V),this.invInertia.set(V.x>0&&!W?1/V.x:0,V.y>0&&!W?1/V.y:0,V.z>0&&!W?1/V.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(L,V){var W=new a;return L.vsub(this.position,W),this.angularVelocity.cross(W,V),this.velocity.vadd(V,V),V}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=u;function u(F){this.chassisBody=F.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof F.indexRightAxis<"u"?F.indexRightAxis:1,this.indexForwardAxis=typeof F.indexForwardAxis<"u"?F.indexForwardAxis:0,this.indexUpAxis=typeof F.indexUpAxis<"u"?F.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,d=new r;new o,u.prototype.addWheel=function(F){F=F||{};var O=new c(F),K=this.wheelInfos.length;return this.wheelInfos.push(O),K},u.prototype.setSteeringValue=function(F,O){var K=this.wheelInfos[O];K.steering=F},new r,u.prototype.applyEngineForce=function(F,O){this.wheelInfos[O].engineForce=F},u.prototype.setBrake=function(F,O){this.wheelInfos[O].brake=F},u.prototype.addToWorld=function(F){this.constraints,F.add(this.chassisBody);var O=this;this.preStepCallback=function(){O.updateVehicle(F.dt)},F.addEventListener("preStep",this.preStepCallback),this.world=F},u.prototype.getVehicleAxisWorld=function(F,O){O.set(F===0?1:0,F===1?1:0,F===2?1:0),this.chassisBody.vectorToWorldFrame(O,O)},u.prototype.updateVehicle=function(F){for(var O=this.wheelInfos,K=O.length,X=this.chassisBody,b=0;b<K;b++)this.updateWheelTransform(b);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var N=new r;this.getVehicleAxisWorld(this.indexForwardAxis,N),N.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var b=0;b<K;b++)this.castRay(O[b]);this.updateSuspension(F);for(var D=new r,I=new r,b=0;b<K;b++){var T=O[b],$=T.suspensionForce;$>T.maxSuspensionForce&&($=T.maxSuspensionForce),T.raycastResult.hitNormalWorld.scale($*F,D),T.raycastResult.hitPointWorld.vsub(X.position,I),X.applyImpulse(D,T.raycastResult.hitPointWorld)}this.updateFriction(F);var at=new r,et=new r,j=new r;for(b=0;b<K;b++){var T=O[b];X.getVelocityAtWorldPoint(T.chassisConnectionPointWorld,j);var ot=1;switch(this.indexUpAxis){case 1:ot=-1;break}if(T.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var ht=et.dot(T.raycastResult.hitNormalWorld);T.raycastResult.hitNormalWorld.scale(ht,at),et.vsub(at,et);var q=et.dot(j);T.deltaRotation=ot*q*F/T.radius}(T.sliding||!T.isInContact)&&T.engineForce!==0&&T.useCustomSlidingRotationalSpeed&&(T.deltaRotation=(T.engineForce>0?1:-1)*T.customSlidingRotationalSpeed*F),Math.abs(T.brake)>Math.abs(T.engineForce)&&(T.deltaRotation=0),T.rotation+=T.deltaRotation,T.deltaRotation*=.99}},u.prototype.updateSuspension=function(F){for(var O=this.chassisBody,K=O.mass,X=this.wheelInfos,b=X.length,N=0;N<b;N++){var D=X[N];if(D.isInContact){var I,T=D.suspensionRestLength,$=D.suspensionLength,at=T-$;I=D.suspensionStiffness*at*D.clippedInvContactDotSuspension;var et=D.suspensionRelativeVelocity,j;et<0?j=D.dampingCompression:j=D.dampingRelaxation,I-=j*et,D.suspensionForce=I*K,D.suspensionForce<0&&(D.suspensionForce=0)}else D.suspensionForce=0}},u.prototype.removeFromWorld=function(F){this.constraints,F.remove(this.chassisBody),F.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;u.prototype.castRay=function(F){var O=p,K=v;this.updateWheelTransformWorld(F);var X=this.chassisBody,b=-1,N=F.suspensionRestLength+F.radius;F.directionWorld.scale(N,O);var D=F.chassisConnectionPointWorld;D.vadd(O,K);var I=F.raycastResult;I.reset();var T=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(D,K,I),X.collisionResponse=T;var $=I.body;if(F.raycastResult.groundObject=0,$){b=I.distance,F.raycastResult.hitNormalWorld=I.hitNormalWorld,F.isInContact=!0;var at=I.distance;F.suspensionLength=at-F.radius;var et=F.suspensionRestLength-F.maxSuspensionTravel,j=F.suspensionRestLength+F.maxSuspensionTravel;F.suspensionLength<et&&(F.suspensionLength=et),F.suspensionLength>j&&(F.suspensionLength=j,F.raycastResult.reset());var ot=F.raycastResult.hitNormalWorld.dot(F.directionWorld),ht=new r;X.getVelocityAtWorldPoint(F.raycastResult.hitPointWorld,ht);var q=F.raycastResult.hitNormalWorld.dot(ht);if(ot>=-.1)F.suspensionRelativeVelocity=0,F.clippedInvContactDotSuspension=1/.1;else{var Lt=-1/ot;F.suspensionRelativeVelocity=q*Lt,F.clippedInvContactDotSuspension=Lt}}else F.suspensionLength=F.suspensionRestLength+0*F.maxSuspensionTravel,F.suspensionRelativeVelocity=0,F.directionWorld.scale(-1,F.raycastResult.hitNormalWorld),F.clippedInvContactDotSuspension=1;return b},u.prototype.updateWheelTransformWorld=function(F){F.isInContact=!1;var O=this.chassisBody;O.pointToWorldFrame(F.chassisConnectionPointLocal,F.chassisConnectionPointWorld),O.vectorToWorldFrame(F.directionLocal,F.directionWorld),O.vectorToWorldFrame(F.axleLocal,F.axleWorld)},u.prototype.updateWheelTransform=function(F){var O=h,K=l,X=d,b=this.wheelInfos[F];this.updateWheelTransformWorld(b),b.directionLocal.scale(-1,O),K.copy(b.axleLocal),O.cross(K,X),X.normalize(),K.normalize();var N=b.steering,D=new a;D.setFromAxisAngle(O,N);var I=new a;I.setFromAxisAngle(K,b.rotation);var T=b.worldTransform.quaternion;this.chassisBody.quaternion.mult(D,T),T.mult(I,T),T.normalize();var $=b.worldTransform.position;$.copy(b.directionWorld),$.scale(b.suspensionLength,$),$.vadd(b.chassisConnectionPointWorld,$)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(F){return this.wheelInfos[F].worldTransform};var m=new r,f=[],_=[],x=1;u.prototype.updateFriction=function(F){for(var O=m,K=this.wheelInfos,X=K.length,b=this.chassisBody,N=_,D=f,I=0;I<X;I++){var T=K[I],$=T.raycastResult.body;T.sideImpulse=0,T.forwardImpulse=0,N[I]||(N[I]=new r),D[I]||(D[I]=new r)}for(var I=0;I<X;I++){var T=K[I],$=T.raycastResult.body;if($){var at=D[I],et=this.getWheelTransformWorld(I);et.vectorToWorldFrame(g[this.indexRightAxis],at);var j=T.raycastResult.hitNormalWorld,ot=at.dot(j);j.scale(ot,O),at.vsub(O,at),at.normalize(),j.cross(at,N[I]),N[I].normalize(),T.sideImpulse=tt(b,T.raycastResult.hitPointWorld,$,T.raycastResult.hitPointWorld,at),T.sideImpulse*=x}}var ht=1,q=.5;this.sliding=!1;for(var I=0;I<X;I++){var T=K[I],$=T.raycastResult.body,Lt=0;if(T.slipInfo=1,$){var ft=0,it=T.brake?T.brake:ft;Lt=C(b,$,T.raycastResult.hitPointWorld,N[I],it),Lt+=T.engineForce*F;var ct=it/Lt;T.slipInfo*=ct}if(T.forwardImpulse=0,T.skidInfo=1,$){T.skidInfo=1;var Zt=T.suspensionForce*F*T.frictionSlip,At=Zt,Wt=Zt*At;T.forwardImpulse=Lt;var Mt=T.forwardImpulse*q,ee=T.sideImpulse*ht,ie=Mt*Mt+ee*ee;if(T.sliding=!1,ie>Wt){this.sliding=!0,T.sliding=!0;var ct=Zt/Math.sqrt(ie);T.skidInfo*=ct}}}if(this.sliding)for(var I=0;I<X;I++){var T=K[I];T.sideImpulse!==0&&T.skidInfo<1&&(T.forwardImpulse*=T.skidInfo,T.sideImpulse*=T.skidInfo)}for(var I=0;I<X;I++){var T=K[I],P=new r;if(P.copy(T.raycastResult.hitPointWorld),T.forwardImpulse!==0){var A=new r;N[I].scale(T.forwardImpulse,A),b.applyImpulse(A,P)}if(T.sideImpulse!==0){var $=T.raycastResult.body,J=new r;J.copy(T.raycastResult.hitPointWorld);var vt=new r;D[I].scale(T.sideImpulse,vt),b.pointToLocalFrame(P,P),P["xyz"[this.indexUpAxis]]*=T.rollInfluence,b.pointToWorldFrame(P,P),b.applyImpulse(vt,P),vt.scale(-1,vt),$.applyImpulse(vt,J)}}};var y=new r,E=new r,R=new r;function C(F,O,K,X,b){var N=0,D=K,I=y,T=E,$=R;F.getVelocityAtWorldPoint(D,I),O.getVelocityAtWorldPoint(D,T),I.vsub(T,$);var at=X.dot($),et=V(F,K,X),j=V(O,K,X),ot=1,ht=ot/(et+j);return N=-at*ht,b<N&&(N=b),N<-b&&(N=-b),N}var B=new r,M=new r,w=new r,L=new r;function V(F,O,K){var X=B,b=M,N=w,D=L;return O.vsub(F.position,X),X.cross(K,b),F.invInertiaWorld.vmult(b,D),D.cross(X,N),F.invMass+K.dot(N)}var W=new r,U=new r,k=new r;function tt(F,O,K,X,b,ot){var D=b.norm2();if(D>1.1)return 0;var I=W,T=U,$=k;F.getVelocityAtWorldPoint(O,I),K.getVelocityAtWorldPoint(X,T),I.vsub(T,$);var at=b.dot($),et=.2,j=1/(F.invMass+K.invMass),ot=-et*at*j;return ot}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var _=new u(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),_=g.x,x=g.y;this.constraints[v].axisA.set(m*_-f*x,f*_+m*x,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var d=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,_=this.smoothingRadius*this.smoothingRadius,x=o,y=0;y!==m;y++){var E=this.particles[y];E.position.vsub(v.position,x),f!==E.id&&x.norm2()<_&&g.push(E)}};var c=new r,u=new r,h=new r,l=new r,d=new r,p=new r;a.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,_=0;_!==v;_++){var x=this.particles[_],y=this.neighbors[_];y.length=0,this.getNeighbors(x,y),y.push(this.particles[_]);for(var E=y.length,R=0,C=0;C!==E;C++){x.position.vsub(y[C].position,g);var B=g.norm(),M=this.w(B);R+=y[C].mass*M}this.densities[_]=R,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var w=u,L=h,V=l,W=d,U=p,_=0;_!==v;_++){var k=this.particles[_];w.set(0,0,0),L.set(0,0,0);for(var tt,F,y=this.neighbors[_],E=y.length,C=0;C!==E;C++){var O=y[C];k.position.vsub(O.position,W);var K=W.norm();tt=-O.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+f)+this.pressures[C]/(this.densities[C]*this.densities[C]+f)),this.gradw(W,V),V.mult(tt,V),w.vadd(V,w),O.velocity.vsub(k.velocity,U),U.mult(1/(1e-4+this.densities[_]*this.densities[C])*this.viscosity*O.mass,U),F=this.nablaw(K),U.mult(F,U),L.vadd(U,L)}L.mult(k.mass,L),w.mult(k.mass,w),k.force.vadd(L,k.force),k.force.vadd(w,k.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(_,x,y){y=y||{},this.restLength=typeof y.restLength=="number"?y.restLength:1,this.stiffness=y.stiffness||100,this.damping=y.damping||1,this.bodyA=_,this.bodyB=x,this.localAnchorA=new r,this.localAnchorB=new r,y.localAnchorA&&this.localAnchorA.copy(y.localAnchorA),y.localAnchorB&&this.localAnchorB.copy(y.localAnchorB),y.worldAnchorA&&this.setWorldAnchorA(y.worldAnchorA),y.worldAnchorB&&this.setWorldAnchorB(y.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,c=new r,u=new r,h=new r,l=new r,d=new r,p=new r,v=new r,g=new r,m=new r,f=new r;a.prototype.applyForce=function(){var _=this.stiffness,x=this.damping,y=this.restLength,E=this.bodyA,R=this.bodyB,C=o,B=c,M=u,w=h,L=f,V=l,W=d,U=p,k=v,tt=g,F=m;this.getWorldAnchorA(V),this.getWorldAnchorB(W),V.vsub(E.position,U),W.vsub(R.position,k),W.vsub(V,C);var O=C.norm();B.copy(C),B.normalize(),R.velocity.vsub(E.velocity,M),R.angularVelocity.cross(k,L),M.vadd(L,M),E.angularVelocity.cross(U,L),M.vsub(L,M),B.mult(-_*(O-y)-x*M.dot(B),w),E.force.vsub(w,E.force),R.force.vadd(w,R.force),U.cross(w,tt),k.cross(w,F),E.torque.vsub(tt,E.torque),R.torque.vadd(F,R.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=u;function u(d){d=c.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,h=new r,l=new r;u.prototype.updateWheel=function(d){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(d.position,h),d.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,p=this.halfExtents.z,v=a,g=[new v(-l,-d,-p),new v(l,-d,-p),new v(l,d,-p),new v(-l,d,-p),new v(-l,-d,p),new v(l,-d,p),new v(l,d,p),new v(-l,d,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,d){return d=d||new a,c.calculateInertia(this.halfExtents,l,d),d},c.calculateInertia=function(l,d,p){var v=l;p.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,d){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==p.length;g++)d.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,c.prototype.forEachWorldCorner=function(l,d,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),l.vadd(u,u),p(u.x,u.y,u.z)};var h=[new a,new a,new a,new a,new a,new a,new a,new a];c.prototype.calculateWorldAABB=function(l,d,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];d.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];d.vmult(m,m),l.vadd(m,m);var _=m.x,x=m.y,y=m.z;_>v.x&&(v.x=_),x>v.y&&(v.y=x),y>v.z&&(v.z=y),_<p.x&&(p.x=_),x<p.y&&(p.y=x),y<p.z&&(p.z=y)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(b,N,D){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=b||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=N||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=D?D.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var u=new a;c.prototype.computeEdges=function(){var b=this.faces,N=this.vertices;N.length;var D=this.uniqueEdges;D.length=0;for(var I=u,T=0;T!==b.length;T++)for(var $=b[T],at=$.length,et=0;et!==at;et++){var j=(et+1)%at;N[$[et]].vsub(N[$[j]],I),I.normalize();for(var ot=!1,ht=0;ht!==D.length;ht++)if(D[ht].almostEquals(I)||D[ht].almostEquals(I)){ot=!0;break}ot||D.push(I.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var b=0;b<this.faces.length;b++){for(var N=0;N<this.faces[b].length;N++)if(!this.vertices[this.faces[b][N]])throw new Error("Vertex "+this.faces[b][N]+" not found!");var D=this.faceNormals[b]||new a;this.getFaceNormal(b,D),D.negate(D),this.faceNormals[b]=D;var I=this.vertices[this.faces[b][0]];if(D.dot(I)<0){console.error(".faceNormals["+b+"] = Vec3("+D.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var N=0;N<this.faces[b].length;N++)console.warn(".vertices["+this.faces[b][N]+"] = Vec3("+this.vertices[this.faces[b][N]].toString()+")")}}};var h=new a,l=new a;c.computeNormal=function(b,N,D,I){N.vsub(b,l),D.vsub(N,h),h.cross(l,I),I.isZero()||I.normalize()},c.prototype.getFaceNormal=function(b,N){var D=this.faces[b],I=this.vertices[D[0]],T=this.vertices[D[1]],$=this.vertices[D[2]];return c.computeNormal(I,T,$,N)};var d=new a;c.prototype.clipAgainstHull=function(b,N,D,I,T,$,at,et,j){for(var ot=d,ht=-1,q=-Number.MAX_VALUE,Lt=0;Lt<D.faces.length;Lt++){ot.copy(D.faceNormals[Lt]),T.vmult(ot,ot);var ft=ot.dot($);ft>q&&(q=ft,ht=Lt)}for(var it=[],ct=D.faces[ht],Zt=ct.length,At=0;At<Zt;At++){var Wt=D.vertices[ct[At]],Mt=new a;Mt.copy(Wt),T.vmult(Mt,Mt),I.vadd(Mt,Mt),it.push(Mt)}ht>=0&&this.clipFaceAgainstHull($,b,N,it,at,et,j)};var p=new a,v=new a,g=new a,m=new a,f=new a,_=new a;c.prototype.findSeparatingAxis=function(b,N,D,I,T,$,at,et){var j=p,ot=v,ht=g,q=m,Lt=f,ft=_,it=Number.MAX_VALUE,ct=this;if(ct.uniqueAxes)for(var At=0;At!==ct.uniqueAxes.length;At++){D.vmult(ct.uniqueAxes[At],j);var Mt=ct.testSepAxis(j,b,N,D,I,T);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(j))}else for(var Zt=at?at.length:ct.faces.length,At=0;At<Zt;At++){var Wt=at?at[At]:At;j.copy(ct.faceNormals[Wt]),D.vmult(j,j);var Mt=ct.testSepAxis(j,b,N,D,I,T);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(j))}if(b.uniqueAxes)for(var At=0;At!==b.uniqueAxes.length;At++){T.vmult(b.uniqueAxes[At],ot);var Mt=ct.testSepAxis(ot,b,N,D,I,T);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(ot))}else for(var ee=et?et.length:b.faces.length,At=0;At<ee;At++){var Wt=et?et[At]:At;ot.copy(b.faceNormals[Wt]),T.vmult(ot,ot);var Mt=ct.testSepAxis(ot,b,N,D,I,T);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(ot))}for(var ie=0;ie!==ct.uniqueEdges.length;ie++){D.vmult(ct.uniqueEdges[ie],q);for(var P=0;P!==b.uniqueEdges.length;P++)if(T.vmult(b.uniqueEdges[P],Lt),q.cross(Lt,ft),!ft.almostZero()){ft.normalize();var A=ct.testSepAxis(ft,b,N,D,I,T);if(A===!1)return!1;A<it&&(it=A,$.copy(ft))}}return I.vsub(N,ht),ht.dot($)>0&&$.negate($),!0};var x=[],y=[];c.prototype.testSepAxis=function(b,N,D,I,T,$){var at=this;c.project(at,b,D,I,x),c.project(N,b,T,$,y);var et=x[0],j=x[1],ot=y[0],ht=y[1],q=et-ht,Lt=ot-j,ft=q<Lt?q:Lt;return ft};var E=new a,R=new a;c.prototype.calculateLocalInertia=function(b,N){this.computeLocalAABB(E,R);var D=R.x-E.x,I=R.y-E.y,T=R.z-E.z;N.x=1/12*b*(2*I*2*I+2*T*2*T),N.y=1/12*b*(2*D*2*D+2*T*2*T),N.z=1/12*b*(2*I*2*I+2*D*2*D)},c.prototype.getPlaneConstantOfFace=function(b){var N=this.faces[b],D=this.faceNormals[b],I=this.vertices[N[0]],T=-D.dot(I);return T};var C=new a,B=new a,M=new a,w=new a,L=new a,V=new a,W=new a,U=new a;c.prototype.clipFaceAgainstHull=function(b,N,D,I,T,$,at){for(var et=C,j=B,ot=M,ht=w,q=L,Lt=V,ft=W,it=U,ct=this,Zt=[],At=I,Wt=Zt,Mt=-1,ee=Number.MAX_VALUE,ie=0;ie<ct.faces.length;ie++){et.copy(ct.faceNormals[ie]),D.vmult(et,et);var P=et.dot(b);P<ee&&(ee=P,Mt=ie)}if(!(Mt<0)){var A=ct.faces[Mt];A.connectedFaces=[];for(var J=0;J<ct.faces.length;J++)for(var vt=0;vt<ct.faces[J].length;vt++)A.indexOf(ct.faces[J][vt])!==-1&&J!==Mt&&A.connectedFaces.indexOf(J)===-1&&A.connectedFaces.push(J);At.length;for(var dt=A.length,xt=0;xt<dt;xt++){var Gt=ct.vertices[A[xt]],bt=ct.vertices[A[(xt+1)%dt]];Gt.vsub(bt,j),ot.copy(j),D.vmult(ot,ot),N.vadd(ot,ot),ht.copy(this.faceNormals[Mt]),D.vmult(ht,ht),N.vadd(ht,ht),ot.cross(ht,q),q.negate(q),Lt.copy(Gt),D.vmult(Lt,Lt),N.vadd(Lt,Lt),-Lt.dot(q);var Et;{var Nt=A.connectedFaces[xt];ft.copy(this.faceNormals[Nt]);var H=this.getPlaneConstantOfFace(Nt);it.copy(ft),D.vmult(it,it);var Et=H-it.dot(N)}for(this.clipFaceAgainstPlane(At,Wt,it,Et);At.length;)At.shift();for(;Wt.length;)At.push(Wt.shift())}ft.copy(this.faceNormals[Mt]);var H=this.getPlaneConstantOfFace(Mt);it.copy(ft),D.vmult(it,it);for(var Et=H-it.dot(N),J=0;J<At.length;J++){var pt=it.dot(At[J])+Et;if(pt<=T&&(console.log("clamped: depth="+pt+" to minDist="+(T+"")),pt=T),pt<=$){var Jt=At[J];if(pt<=0){var qt={point:Jt,normal:it,depth:pt};at.push(qt)}}}}},c.prototype.clipFaceAgainstPlane=function(b,N,D,I){var T,$,at=b.length;if(at<2)return N;var et=b[b.length-1],j=b[0];T=D.dot(et)+I;for(var ot=0;ot<at;ot++){if(j=b[ot],$=D.dot(j)+I,T<0)if($<0){var ht=new a;ht.copy(j),N.push(ht)}else{var ht=new a;et.lerp(j,T/(T-$),ht),N.push(ht)}else if($<0){var ht=new a;et.lerp(j,T/(T-$),ht),N.push(ht),N.push(j)}et=j,T=$}return N},c.prototype.computeWorldVertices=function(b,N){for(var D=this.vertices.length;this.worldVertices.length<D;)this.worldVertices.push(new a);for(var I=this.vertices,T=this.worldVertices,$=0;$!==D;$++)N.vmult(I[$],T[$]),b.vadd(T[$],T[$]);this.worldVerticesNeedsUpdate=!1},new a,c.prototype.computeLocalAABB=function(b,N){var D=this.vertices.length,I=this.vertices;b.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),N.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var T=0;T<D;T++){var $=I[T];$.x<b.x?b.x=$.x:$.x>N.x&&(N.x=$.x),$.y<b.y?b.y=$.y:$.y>N.y&&(N.y=$.y),$.z<b.z?b.z=$.z:$.z>N.z&&(N.z=$.z)}},c.prototype.computeWorldFaceNormals=function(b){for(var N=this.faceNormals.length;this.worldFaceNormals.length<N;)this.worldFaceNormals.push(new a);for(var D=this.faceNormals,I=this.worldFaceNormals,T=0;T!==N;T++)b.vmult(D[T],I[T]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var b=0,N=this.vertices,D=0,I=N.length;D!==I;D++){var T=N[D].norm2();T>b&&(b=T)}this.boundingSphereRadius=Math.sqrt(b)};var k=new a;c.prototype.calculateWorldAABB=function(b,N,D,I){for(var T=this.vertices.length,$=this.vertices,at,et,j,ot,ht,q,Lt=0;Lt<T;Lt++){k.copy($[Lt]),N.vmult(k,k),b.vadd(k,k);var ft=k;ft.x<at||at===void 0?at=ft.x:(ft.x>ot||ot===void 0)&&(ot=ft.x),ft.y<et||et===void 0?et=ft.y:(ft.y>ht||ht===void 0)&&(ht=ft.y),ft.z<j||j===void 0?j=ft.z:(ft.z>q||q===void 0)&&(q=ft.z)}D.set(at,et,j),I.set(ot,ht,q)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(b){b=b||new a;for(var N=this.vertices.length,D=this.vertices,I=0;I<N;I++)b.vadd(D[I],b);return b.mult(1/N,b),b},c.prototype.transformAllPoints=function(b,N){var D=this.vertices.length,I=this.vertices;if(N){for(var T=0;T<D;T++){var $=I[T];N.vmult($,$)}for(var T=0;T<this.faceNormals.length;T++){var $=this.faceNormals[T];N.vmult($,$)}}if(b)for(var T=0;T<D;T++){var $=I[T];$.vadd(b,$)}};var tt=new a,F=new a,O=new a;c.prototype.pointIsInside=function(b){var N=this.vertices.length,D=this.vertices,I=this.faces,T=this.faceNormals,$=null,at=this.faces.length,et=tt;this.getAveragePointLocal(et);for(var j=0;j<at;j++){this.faces[j].length;var N=T[j],ot=D[I[j][0]],ht=F;b.vsub(ot,ht);var q=N.dot(ht),Lt=O;et.vsub(ot,Lt);var ft=N.dot(Lt);if(q<0&&ft>0||q>0&&ft<0)return!1}return $?1:-1},new a;var K=new a,X=new a;c.project=function(b,N,D,I,T){var $=b.vertices.length,at=K,et=0,j=0,ot=X,ht=b.vertices;ot.setZero(),o.vectorToLocalFrame(D,I,N,at),o.pointToLocalFrame(D,I,ot,ot);var q=ot.dot(at);j=et=ht[0].dot(at);for(var Lt=1;Lt<$;Lt++){var ft=ht[Lt].dot(at);ft>et&&(et=ft),ft<j&&(j=ft)}if(j-=q,et-=q,j>et){var it=j;j=et,et=it}T[0]=et,T[1]=j}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(u,h,l,d){var p=d,v=[],g=[],m=[],f=[],_=[],x=Math.cos,y=Math.sin;v.push(new a(h*x(0),h*y(0),-l*.5)),f.push(0),v.push(new a(u*x(0),u*y(0),l*.5)),_.push(1);for(var E=0;E<p;E++){var R=2*Math.PI/p*(E+1),C=2*Math.PI/p*(E+.5);E<p-1?(v.push(new a(h*x(R),h*y(R),-l*.5)),f.push(2*E+2),v.push(new a(u*x(R),u*y(R),l*.5)),_.push(2*E+3),m.push([2*E+2,2*E+3,2*E+1,2*E])):m.push([0,1,2*E+1,2*E]),(p%2===1||E<p/2)&&g.push(new a(x(C),y(C),0))}m.push(_),g.push(new a(0,0,1));for(var B=[],E=0;E<f.length;E++)B.push(f[f.length-E-1]);m.push(B),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=u;function u(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var v=h[d][p];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],d=0;d!==h.length;d++)for(var p=0;p!==h[d].length;p++){var v=h[d][p];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(h,l,d){var p=this.data;p[h][l]=d,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},u.prototype.getRectMinMax=function(h,l,d,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=d;f++)for(var _=l;_<=p;_++){var x=g[f][_];x>m&&(m=x)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(h,l,d,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(l/v);return d[0]=m,d[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},u.prototype.getHeightAt=function(h,l,d){var p=[];this.getIndexOfPosition(h,l,p,d);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(h,l,d){return h+"_"+l+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(h,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},u.prototype.setCachedConvexTrianglePillar=function(h,l,d,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]={convex:p,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(h,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,d)]},u.prototype.getConvexTrianglePillar=function(h,l,d){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new a,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var _=0;_<6;_++)p.vertices[_]||(p.vertices[_]=new o);f.length=5;for(var _=0;_<5;_++)f[_]||(f[_]=[]);var x=p.vertices,y=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;d?(v.set((h+.75)*m,(l+.75)*m,y),x[0].set(.25*m,.25*m,g[h+1][l+1]-y),x[1].set(-.75*m,.25*m,g[h][l+1]-y),x[2].set(.25*m,-.75*m,g[h+1][l]-y),x[3].set(.25*m,.25*m,-y-1),x[4].set(-.75*m,.25*m,-y-1),x[5].set(.25*m,-.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,y),x[0].set(-.25*m,-.25*m,g[h][l]-y),x[1].set(.75*m,-.25*m,g[h+1][l]-y),x[2].set(-.25*m,.75*m,g[h][l+1]-y),x[3].set(-.25*m,-.25*m,-y-1),x[4].set(.75*m,-.25*m,-y-1),x[5].set(-.25*m,.75*m,-y-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,d,p,v)},u.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(h,l,d,p){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,u,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var h=this.worldNormal;h.set(0,0,1),u.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,h){return h=h||new a,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new a;o.prototype.calculateWorldAABB=function(u,h,l,d){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),d.set(p,p,p),c.x===1&&(d.x=u.x),c.y===1&&(d.y=u.y),c.z===1&&(d.z=u.z),c.x===-1&&(l.x=u.x),c.y===-1&&(l.y=u.y),c.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,u){u=u||new a;var h=2*c*this.radius*this.radius/5;return u.x=h,u.y=h,u.z=h,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,u,h,l){for(var d=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-d,l[g]=c[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),u=e("../utils/Octree");function h(B,M){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(B),this.indices=new Int16Array(M),this.normals=new Float32Array(M.length),this.aabb=new c,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new a;h.prototype.updateTree=function(){var B=this.tree;B.reset(),B.aabb.copy(this.aabb);var M=this.scale;B.aabb.lowerBound.x*=1/M.x,B.aabb.lowerBound.y*=1/M.y,B.aabb.lowerBound.z*=1/M.z,B.aabb.upperBound.x*=1/M.x,B.aabb.upperBound.y*=1/M.y,B.aabb.upperBound.z*=1/M.z;for(var w=new c,L=new a,V=new a,W=new a,U=[L,V,W],k=0;k<this.indices.length/3;k++){var tt=k*3;this._getUnscaledVertex(this.indices[tt],L),this._getUnscaledVertex(this.indices[tt+1],V),this._getUnscaledVertex(this.indices[tt+2],W),w.setFromPoints(U),B.insert(w,k)}B.removeEmptyNodes()};var d=new c;h.prototype.getTrianglesInAABB=function(B,M){d.copy(B);var w=this.scale,L=w.x,V=w.y,W=w.z,U=d.lowerBound,k=d.upperBound;return U.x/=L,U.y/=V,U.z/=W,k.x/=L,k.y/=V,k.z/=W,this.tree.aabbQuery(d,M)},h.prototype.setScale=function(B){var M=this.scale.x===this.scale.y===this.scale.z,w=B.x===B.y===B.z;M&&w||this.updateNormals(),this.scale.copy(B),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var B=l,M=this.normals,w=0;w<this.indices.length/3;w++){var L=w*3,V=this.indices[L],W=this.indices[L+1],U=this.indices[L+2];this.getVertex(V,f),this.getVertex(W,_),this.getVertex(U,x),h.computeNormal(_,f,x,B),M[L]=B.x,M[L+1]=B.y,M[L+2]=B.z}},h.prototype.updateEdges=function(){for(var B={},M=function(tt,F){var O=V<W?V+"_"+W:W+"_"+V;B[O]=!0},w=0;w<this.indices.length/3;w++){var L=w*3,V=this.indices[L],W=this.indices[L+1];this.indices[L+2],M(),M(),M()}var U=Object.keys(B);this.edges=new Int16Array(U.length*2);for(var w=0;w<U.length;w++){var k=U[w].split("_");this.edges[2*w]=parseInt(k[0],10),this.edges[2*w+1]=parseInt(k[1],10)}},h.prototype.getEdgeVertex=function(B,M,w){var L=this.edges[B*2+(M?1:0)];this.getVertex(L,w)};var p=new a,v=new a;h.prototype.getEdgeVector=function(B,M){var w=p,L=v;this.getEdgeVertex(B,0,w),this.getEdgeVertex(B,1,L),L.vsub(w,M)};var g=new a,m=new a;h.computeNormal=function(B,M,w,L){M.vsub(B,m),w.vsub(M,g),g.cross(m,L),L.isZero()||L.normalize()};var f=new a,_=new a,x=new a;h.prototype.getVertex=function(B,M){var w=this.scale;return this._getUnscaledVertex(B,M),M.x*=w.x,M.y*=w.y,M.z*=w.z,M},h.prototype._getUnscaledVertex=function(B,M){var w=B*3,L=this.vertices;return M.set(L[w],L[w+1],L[w+2])},h.prototype.getWorldVertex=function(B,M,w,L){return this.getVertex(B,L),o.pointToWorldFrame(M,w,L,L),L},h.prototype.getTriangleVertices=function(B,M,w,L){var V=B*3;this.getVertex(this.indices[V],M),this.getVertex(this.indices[V+1],w),this.getVertex(this.indices[V+2],L)},h.prototype.getNormal=function(B,M){var w=B*3;return M.set(this.normals[w],this.normals[w+1],this.normals[w+2])};var y=new c;h.prototype.calculateLocalInertia=function(B,M){this.computeLocalAABB(y);var w=y.upperBound.x-y.lowerBound.x,L=y.upperBound.y-y.lowerBound.y,V=y.upperBound.z-y.lowerBound.z;return M.set(1/12*B*(2*L*2*L+2*V*2*V),1/12*B*(2*w*2*w+2*V*2*V),1/12*B*(2*L*2*L+2*w*2*w))};var E=new a;h.prototype.computeLocalAABB=function(B){var M=B.lowerBound,w=B.upperBound,L=this.vertices.length;this.vertices;var V=E;this.getVertex(0,V),M.copy(V),w.copy(V);for(var W=0;W!==L;W++)this.getVertex(W,V),V.x<M.x?M.x=V.x:V.x>w.x&&(w.x=V.x),V.y<M.y?M.y=V.y:V.y>w.y&&(w.y=V.y),V.z<M.z?M.z=V.z:V.z>w.z&&(w.z=V.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var B=0,M=this.vertices,w=new a,L=0,V=M.length/3;L!==V;L++){this.getVertex(L,w);var W=w.norm2();W>B&&(B=W)}this.boundingSphereRadius=Math.sqrt(B)},new a;var R=new o,C=new c;h.prototype.calculateWorldAABB=function(B,M,w,L){var V=R,W=C;V.position=B,V.quaternion=M,this.aabb.toWorldFrame(V,W),w.copy(W.lowerBound),L.copy(W.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(B,M,w,L,V){B=B||1,M=M||.5,w=w||8,L=L||6,V=V||Math.PI*2;for(var W=[],U=[],k=0;k<=w;k++)for(var tt=0;tt<=L;tt++){var F=tt/L*V,O=k/w*Math.PI*2,K=(B+M*Math.cos(O))*Math.cos(F),X=(B+M*Math.cos(O))*Math.sin(F),b=M*Math.sin(O);W.push(K,X,b)}for(var k=1;k<=w;k++)for(var tt=1;tt<=L;tt++){var N=(L+1)*k+tt-1,D=(L+1)*(k-1)+tt-1,I=(L+1)*(k-1)+tt,T=(L+1)*k+tt;U.push(N,D,T),U.push(D,I,T)}return new h(W,U)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],c=[],u=[];a.prototype.solve=function(h,l){var d=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,_=f.length,x=h,y,E,R,C,B,M;if(m!==0)for(var w=0;w!==_;w++)f[w].updateSolveMassProperties();var L=c,V=u,W=o;L.length=m,V.length=m,W.length=m;for(var w=0;w!==m;w++){var U=g[w];W[w]=0,V[w]=U.computeB(x),L[w]=1/U.computeC()}if(m!==0){for(var w=0;w!==_;w++){var k=f[w],tt=k.vlambda,F=k.wlambda;tt.set(0,0,0),F&&F.set(0,0,0)}for(d=0;d!==p;d++){C=0;for(var O=0;O!==m;O++){var U=g[O];y=V[O],E=L[O],M=W[O],B=U.computeGWlambda(),R=E*(y-B-U.eps*M),M+R<U.minForce?R=U.minForce-M:M+R>U.maxForce&&(R=U.maxForce-M),W[O]+=R,C+=R>0?R:-R,U.addToWlambda(R)}if(C*C<v)break}for(var w=0;w!==_;w++){var k=f[w],K=k.velocity,X=k.angularVelocity;K.vadd(k.vlambda,K),X&&X.vadd(k.wlambda,X)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,c=o.indexOf(a);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],u=[],h={bodies:[]},l=a.STATIC;function d(f){for(var _=f.length,x=0;x!==_;x++){var y=f[x];if(!y.visited&&!(y.body.type&l))return y}return!1}var p=[];function v(f,_,x,y){for(p.push(f),f.visited=!0,_(f,x,y);p.length;)for(var E=p.pop(),R;R=d(E.children);)R.visited=!0,_(R,x,y),p.push(R)}function g(f,_,x){_.push(f.body);for(var y=f.eqs.length,E=0;E!==y;E++){var R=f.eqs[E];x.indexOf(R)===-1&&x.push(R)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,_){for(var x=c,y=this.nodePool,E=_.bodies,R=this.equations,C=R.length,B=E.length,M=this.subsolver;y.length<B;)y.push(this.createNode());x.length=B;for(var w=0;w<B;w++)x[w]=y[w];for(var w=0;w!==B;w++){var L=x[w];L.body=E[w],L.children.length=0,L.eqs.length=0,L.visited=!1}for(var V=0;V!==C;V++){var W=R[V],w=E.indexOf(W.bi),U=E.indexOf(W.bj),k=x[w],tt=x[U];k.children.push(tt),k.eqs.push(W),tt.children.push(k),tt.eqs.push(W)}var F,O=0,K=u;M.tolerance=this.tolerance,M.iterations=this.iterations;for(var X=h;F=d(x);){K.length=0,X.bodies.length=0,v(F,g,X.bodies,K);var b=K.length;K=K.sort(m);for(var w=0;w!==b;w++)M.addEquation(K[w]);M.solve(f,X),M.removeAllEquations(),O++}return O};function m(f,_){return _.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[a]===void 0&&(c[a]=[]),c[a].indexOf(o)===-1&&c[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[a]!==void 0&&c[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[a]===void 0)return this;var u=c[a].indexOf(o);return u!==-1&&c[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,c=o[a.type];if(c!==void 0){a.target=this;for(var u=0,h=c.length;u<h;u++)c[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,d,p+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new a;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),p.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var _=f.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(p,v.children)}return d};var h=new r;o.prototype.rayQuery=function(l,d,p){return l.getAABB(h),h.toLocalFrame(d,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),p=d.children.length-1;p>=0;p--)d.children[p].data.length||d.children.splice(p,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var c=o;o=a,a=c}return this.data[a+"-"+o]},r.prototype.set=function(a,o,c){if(a>o){var u=o;o=a,a=u}var h=a+"-"+o;this.get(a,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var c=o.pop();delete a[c]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var c in o)c in a||(a[c]=o[c]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,st,mt,gt,ne,Vt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=lt,Tt.bj=st):Tt=new d(lt,st),Tt.enabled=lt.collisionResponse&&st.collisionResponse&&mt.collisionResponse&&gt.collisionResponse;var Ft=this.currentContactMaterial;Tt.restitution=Ft.restitution,Tt.setSpookParams(Ft.contactEquationStiffness,Ft.contactEquationRelaxation,this.world.dt);var rt=mt.material||lt.material,Pt=gt.material||st.material;return rt&&Pt&&rt.restitution>=0&&Pt.restitution>=0&&(Tt.restitution=rt.restitution*Pt.restitution),Tt.si=ne||mt,Tt.sj=Vt||gt,Tt},v.prototype.createFrictionEquationsFromContact=function(lt,st){var mt=lt.bi,gt=lt.bj,ne=lt.si,Vt=lt.sj,Tt=this.world,Ft=this.currentContactMaterial,rt=Ft.friction,Pt=ne.material||mt.material,Bt=Vt.material||gt.material;if(Pt&&Bt&&Pt.friction>=0&&Bt.friction>=0&&(rt=Pt.friction*Bt.friction),rt>0){var Xt=rt*Tt.gravity.length(),Dt=mt.invMass+gt.invMass;Dt>0&&(Dt=1/Dt);var Rt=this.frictionEquationPool,S=Rt.length?Rt.pop():new p(mt,gt,Xt*Dt),G=Rt.length?Rt.pop():new p(mt,gt,Xt*Dt);return S.bi=G.bi=mt,S.bj=G.bj=gt,S.minForce=G.minForce=-Xt*Dt,S.maxForce=G.maxForce=Xt*Dt,S.ri.copy(lt.ri),S.rj.copy(lt.rj),G.ri.copy(lt.ri),G.rj.copy(lt.rj),lt.ni.tangents(S.t,G.t),S.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),G.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),S.enabled=G.enabled=lt.enabled,st.push(S,G),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(lt){var st=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(st,this.frictionResult)||lt===1)){var mt=this.frictionResult[this.frictionResult.length-2],gt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var ne=st.bi;st.bj;for(var Vt=0;Vt!==lt;Vt++)st=this.result[this.result.length-1-Vt],st.bodyA!==ne?(g.vadd(st.ni,g),m.vadd(st.ri,m),f.vadd(st.rj,f)):(g.vsub(st.ni,g),m.vadd(st.rj,m),f.vadd(st.ri,f));var Tt=1/lt;m.scale(Tt,mt.ri),f.scale(Tt,mt.rj),gt.ri.copy(mt.ri),gt.rj.copy(mt.rj),g.normalize(),g.tangents(mt.t,gt.t)}};var _=new c,x=new c,y=new h,E=new h;v.prototype.getContacts=function(lt,st,mt,gt,ne,Vt,Tt){this.contactPointPool=ne,this.frictionEquationPool=Tt,this.result=gt,this.frictionResult=Vt;for(var Ft=y,rt=E,Pt=_,Bt=x,Xt=0,Dt=lt.length;Xt!==Dt;Xt++){var Rt=lt[Xt],S=st[Xt],G=null;Rt.material&&S.material&&(G=mt.getContactMaterial(Rt.material,S.material)||null);for(var Z=0;Z<Rt.shapes.length;Z++){Rt.quaternion.mult(Rt.shapeOrientations[Z],Ft),Rt.quaternion.vmult(Rt.shapeOffsets[Z],Pt),Pt.vadd(Rt.position,Pt);for(var z=Rt.shapes[Z],Q=0;Q<S.shapes.length;Q++){S.quaternion.mult(S.shapeOrientations[Q],rt),S.quaternion.vmult(S.shapeOffsets[Q],Bt),Bt.vadd(S.position,Bt);var _t=S.shapes[Q];if(!(Pt.distanceTo(Bt)>z.boundingSphereRadius+_t.boundingSphereRadius)){var zt=null;z.material&&_t.material&&(zt=mt.getContactMaterial(z.material,_t.material)||null),this.currentContactMaterial=zt||G||mt.defaultContactMaterial;var It=this[z.type|_t.type];It&&(z.type<_t.type?It.call(this,z,_t,Pt,Bt,Ft,rt,Rt,S,z,_t):It.call(this,_t,z,Bt,Pt,rt,Ft,S,Rt,z,_t))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,st.convexPolyhedronRepresentation.material=st.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st.convexPolyhedronRepresentation,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.createContactEquation(Tt,Ft,lt,st);gt.vsub(mt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(lt.radius,rt.ri),rt.rj.mult(-st.radius,rt.rj),rt.ri.vadd(mt,rt.ri),rt.ri.vsub(Tt.position,rt.ri),rt.rj.vadd(gt,rt.rj),rt.rj.vsub(Ft.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var R=new c,C=new c,B=new c;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=new c,Pt=R;Pt.set(0,0,1),ne.vmult(Pt,Pt);for(var Bt=0;Bt<st.vertices.length/3;Bt++){st.getVertex(Bt,rt);var Xt=new c;Xt.copy(rt),u.pointToWorldFrame(gt,Vt,Xt,rt);var Dt=C;rt.vsub(mt,Dt);var Rt=Pt.dot(Dt);if(Rt<=0){var S=this.createContactEquation(Tt,Ft,lt,st);S.ni.copy(Pt);var G=B;Pt.scale(Dt.dot(Pt),G),rt.vsub(G,G),S.ri.copy(G),S.ri.vsub(Tt.position,S.ri),S.rj.copy(rt),S.rj.vsub(Ft.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}}};var M=new c,w=new c;new c;var L=new c,V=new c,W=new c,U=new c,k=new c,tt=new c,F=new c,O=new c,K=new c,X=new c,b=new c,N=new r,D=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=W,Pt=U,Bt=k,Xt=tt,Dt=F,Rt=O,S=N,G=V,Z=w,z=D;u.pointToLocalFrame(gt,Vt,mt,Dt);var Q=lt.radius;S.lowerBound.set(Dt.x-Q,Dt.y-Q,Dt.z-Q),S.upperBound.set(Dt.x+Q,Dt.y+Q,Dt.z+Q),st.getTrianglesInAABB(S,z);for(var _t=L,zt=lt.radius*lt.radius,It=0;It<z.length;It++)for(var Ot=0;Ot<3;Ot++)if(st.getVertex(st.indices[z[It]*3+Ot],_t),_t.vsub(Dt,Z),Z.norm2()<=zt){G.copy(_t),u.pointToWorldFrame(gt,Vt,G,_t),_t.vsub(mt,Z);var Ct=this.createContactEquation(Tt,Ft,lt,st);Ct.ni.copy(Z),Ct.ni.normalize(),Ct.ri.copy(Ct.ni),Ct.ri.scale(lt.radius,Ct.ri),Ct.ri.vadd(mt,Ct.ri),Ct.ri.vsub(Tt.position,Ct.ri),Ct.rj.copy(_t),Ct.rj.vsub(Ft.position,Ct.rj),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}for(var It=0;It<z.length;It++)for(var Ot=0;Ot<3;Ot++){st.getVertex(st.indices[z[It]*3+Ot],rt),st.getVertex(st.indices[z[It]*3+(Ot+1)%3],Pt),Pt.vsub(rt,Bt),Dt.vsub(Pt,Rt);var Qt=Rt.dot(Bt);Dt.vsub(rt,Rt);var te=Rt.dot(Bt);if(te>0&&Qt<0){Dt.vsub(rt,Rt),Xt.copy(Bt),Xt.normalize(),te=Rt.dot(Xt),Xt.scale(te,Rt),Rt.vadd(rt,Rt);var ue=Rt.distanceTo(Dt);if(ue<lt.radius){var Ct=this.createContactEquation(Tt,Ft,lt,st);Rt.vsub(Dt,Ct.ni),Ct.ni.normalize(),Ct.ni.scale(lt.radius,Ct.ri),u.pointToWorldFrame(gt,Vt,Rt,Rt),Rt.vsub(Ft.position,Ct.rj),u.vectorToWorldFrame(Vt,Ct.ni,Ct.ni),u.vectorToWorldFrame(Vt,Ct.ri,Ct.ri),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}}}for(var Me=K,pe=X,he=b,me=M,It=0,jt=z.length;It!==jt;It++){st.getTriangleVertices(z[It],Me,pe,he),st.getNormal(z[It],me),Dt.vsub(Me,Rt);var ue=Rt.dot(me);if(me.scale(ue,Rt),Dt.vsub(Rt,Rt),ue=Rt.distanceTo(Dt),o.pointInTriangle(Rt,Me,pe,he)&&ue<lt.radius){var Ct=this.createContactEquation(Tt,Ft,lt,st);Rt.vsub(Dt,Ct.ni),Ct.ni.normalize(),Ct.ni.scale(lt.radius,Ct.ri),u.pointToWorldFrame(gt,Vt,Rt,Rt),Rt.vsub(Ft.position,Ct.rj),u.vectorToWorldFrame(Vt,Ct.ni,Ct.ni),u.vectorToWorldFrame(Vt,Ct.ri,Ct.ri),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}}z.length=0};var I=new c,T=new c;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.createContactEquation(Tt,Ft,lt,st);if(rt.ni.set(0,0,1),Vt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(lt.radius,rt.ri),mt.vsub(gt,I),rt.ni.mult(rt.ni.dot(I),T),I.vsub(T,rt.rj),-I.dot(rt.ni)<=lt.radius){var Pt=rt.ri,Bt=rt.rj;Pt.vadd(mt,Pt),Pt.vsub(Tt.position,Pt),Bt.vadd(gt,Bt),Bt.vsub(Ft.position,Bt),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var $=new c,at=new c,et=new c;function j(lt,st,mt){for(var gt=null,ne=lt.length,Vt=0;Vt!==ne;Vt++){var Tt=lt[Vt],Ft=$;lt[(Vt+1)%ne].vsub(Tt,Ft);var rt=at;Ft.cross(st,rt);var Pt=et;mt.vsub(Tt,Pt);var Bt=rt.dot(Pt);if(gt===null||Bt>0&&gt===!0||Bt<=0&&gt===!1){gt===null&&(gt=Bt>0);continue}else return!1}return!0}var ot=new c,ht=new c,q=new c,Lt=new c,ft=[new c,new c,new c,new c,new c,new c],it=new c,ct=new c,Zt=new c,At=new c;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.v3pool,Pt=ft;mt.vsub(gt,ot),st.getSideNormals(Pt,Vt);for(var Bt=lt.radius,Xt=!1,Dt=ct,Rt=Zt,S=At,G=null,Z=0,z=0,Q=0,_t=null,zt=0,It=Pt.length;zt!==It&&Xt===!1;zt++){var Ot=ht;Ot.copy(Pt[zt]);var Ct=Ot.norm();Ot.normalize();var Qt=ot.dot(Ot);if(Qt<Ct+Bt&&Qt>0){var te=q,ue=Lt;te.copy(Pt[(zt+1)%3]),ue.copy(Pt[(zt+2)%3]);var Me=te.norm(),pe=ue.norm();te.normalize(),ue.normalize();var he=ot.dot(te),me=ot.dot(ue);if(he<Me&&he>-Me&&me<pe&&me>-pe){var Ee=Math.abs(Qt-Ct-Bt);(_t===null||Ee<_t)&&(_t=Ee,z=he,Q=me,G=Ct,Dt.copy(Ot),Rt.copy(te),S.copy(ue),Z++)}}}if(Z){Xt=!0;var Kt=this.createContactEquation(Tt,Ft,lt,st);Dt.mult(-Bt,Kt.ri),Kt.ni.copy(Dt),Kt.ni.negate(Kt.ni),Dt.mult(G,Dt),Rt.mult(z,Rt),Dt.vadd(Rt,Dt),S.mult(Q,S),Dt.vadd(S,Kt.rj),Kt.ri.vadd(mt,Kt.ri),Kt.ri.vsub(Tt.position,Kt.ri),Kt.rj.vadd(gt,Kt.rj),Kt.rj.vsub(Ft.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}for(var jt=rt.get(),Ke=it,de=0;de!==2&&!Xt;de++)for(var xe=0;xe!==2&&!Xt;xe++)for(var Ae=0;Ae!==2&&!Xt;Ae++)if(jt.set(0,0,0),de?jt.vadd(Pt[0],jt):jt.vsub(Pt[0],jt),xe?jt.vadd(Pt[1],jt):jt.vsub(Pt[1],jt),Ae?jt.vadd(Pt[2],jt):jt.vsub(Pt[2],jt),gt.vadd(jt,Ke),Ke.vsub(mt,Ke),Ke.norm2()<Bt*Bt){Xt=!0;var Kt=this.createContactEquation(Tt,Ft,lt,st);Kt.ri.copy(Ke),Kt.ri.normalize(),Kt.ni.copy(Kt.ri),Kt.ri.mult(Bt,Kt.ri),Kt.rj.copy(jt),Kt.ri.vadd(mt,Kt.ri),Kt.ri.vsub(Tt.position,Kt.ri),Kt.rj.vadd(gt,Kt.rj),Kt.rj.vsub(Ft.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}rt.release(jt),jt=null;for(var Le=rt.get(),Ze=rt.get(),Kt=rt.get(),we=rt.get(),Ee=rt.get(),be=Pt.length,de=0;de!==be&&!Xt;de++)for(var xe=0;xe!==be&&!Xt;xe++)if(de%3!==xe%3){Pt[xe].cross(Pt[de],Le),Le.normalize(),Pt[de].vadd(Pt[xe],Ze),Kt.copy(mt),Kt.vsub(Ze,Kt),Kt.vsub(gt,Kt);var sn=Kt.dot(Le);Le.mult(sn,we);for(var Ae=0;Ae===de%3||Ae===xe%3;)Ae++;Ee.copy(mt),Ee.vsub(we,Ee),Ee.vsub(Ze,Ee),Ee.vsub(gt,Ee);var ns=Math.abs(sn),lr=Ee.norm();if(ns<Pt[Ae].norm()&&lr<Bt){Xt=!0;var ye=this.createContactEquation(Tt,Ft,lt,st);Ze.vadd(we,ye.rj),ye.rj.copy(ye.rj),Ee.negate(ye.ni),ye.ni.normalize(),ye.ri.copy(ye.rj),ye.ri.vadd(gt,ye.ri),ye.ri.vsub(mt,ye.ri),ye.ri.normalize(),ye.ri.mult(Bt,ye.ri),ye.ri.vadd(mt,ye.ri),ye.ri.vsub(Tt.position,ye.ri),ye.rj.vadd(gt,ye.rj),ye.rj.vsub(Ft.position,ye.rj),this.result.push(ye),this.createFrictionEquationsFromContact(ye,this.frictionResult)}}rt.release(Le,Ze,Kt,we,Ee)};var Wt=new c,Mt=new c,ee=new c,ie=new c,P=new c,A=new c,J=new c,vt=new c,dt=new c,xt=new c;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.v3pool;mt.vsub(gt,Wt);for(var Pt=st.faceNormals,Bt=st.faces,Xt=st.vertices,Dt=lt.radius,Rt=0;Rt!==Xt.length;Rt++){var S=Xt[Rt],G=P;Vt.vmult(S,G),gt.vadd(G,G);var Z=ie;if(G.vsub(mt,Z),Z.norm2()<Dt*Dt){Q=!0;var z=this.createContactEquation(Tt,Ft,lt,st);z.ri.copy(Z),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Dt,z.ri),G.vsub(gt,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var Q=!1,Rt=0,_t=Bt.length;Rt!==_t&&Q===!1;Rt++){var zt=Pt[Rt],It=Bt[Rt],Ot=A;Vt.vmult(zt,Ot);var Ct=J;Vt.vmult(Xt[It[0]],Ct),Ct.vadd(gt,Ct);var Qt=vt;Ot.mult(-Dt,Qt),mt.vadd(Qt,Qt);var te=dt;Qt.vsub(Ct,te);var ue=te.dot(Ot),Me=xt;if(mt.vsub(Ct,Me),ue<0&&Me.dot(Ot)>0){for(var pe=[],he=0,me=It.length;he!==me;he++){var jt=rt.get();Vt.vmult(Xt[It[he]],jt),gt.vadd(jt,jt),pe.push(jt)}if(j(pe,Ot,mt)){Q=!0;var z=this.createContactEquation(Tt,Ft,lt,st);Ot.mult(-Dt,z.ri),Ot.negate(z.ni);var Ke=rt.get();Ot.mult(-ue,Ke);var de=rt.get();Ot.mult(-Dt,de),mt.vsub(gt,z.rj),z.rj.vadd(de,z.rj),z.rj.vadd(Ke,z.rj),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),rt.release(Ke),rt.release(de),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var he=0,xe=pe.length;he!==xe;he++)rt.release(pe[he]);return}else for(var he=0;he!==It.length;he++){var Ae=rt.get(),Le=rt.get();Vt.vmult(Xt[It[(he+1)%It.length]],Ae),Vt.vmult(Xt[It[(he+2)%It.length]],Le),gt.vadd(Ae,Ae),gt.vadd(Le,Le);var Ze=Mt;Le.vsub(Ae,Ze);var Kt=ee;Ze.unit(Kt);var we=rt.get(),Ee=rt.get();mt.vsub(Ae,Ee);var be=Ee.dot(Kt);Kt.mult(be,we),we.vadd(Ae,we);var sn=rt.get();if(we.vsub(mt,sn),be>0&&be*be<Ze.norm2()&&sn.norm2()<Dt*Dt){var z=this.createContactEquation(Tt,Ft,lt,st);we.vsub(gt,z.rj),we.vsub(mt,z.ni),z.ni.normalize(),z.ni.mult(Dt,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var he=0,xe=pe.length;he!==xe;he++)rt.release(pe[he]);rt.release(Ae),rt.release(Le),rt.release(we),rt.release(sn),rt.release(Ee);return}rt.release(Ae),rt.release(Le),rt.release(we),rt.release(sn),rt.release(Ee)}for(var he=0,xe=pe.length;he!==xe;he++)rt.release(pe[he])}}},new c,new c,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.planeConvex(lt,st.convexPolyhedronRepresentation,mt,gt,ne,Vt,Tt,Ft)};var Gt=new c,bt=new c,Nt=new c,H=new c;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Gt,Pt=bt;Pt.set(0,0,1),ne.vmult(Pt,Pt);for(var Bt=0,Xt=Nt,Dt=0;Dt!==st.vertices.length;Dt++){rt.copy(st.vertices[Dt]),Vt.vmult(rt,rt),gt.vadd(rt,rt),rt.vsub(mt,Xt);var Rt=Pt.dot(Xt);if(Rt<=0){var S=this.createContactEquation(Tt,Ft,lt,st),G=H;Pt.mult(Pt.dot(Xt),G),rt.vsub(G,G),G.vsub(mt,S.ri),S.ni.copy(Pt),rt.vsub(gt,S.rj),S.ri.vadd(mt,S.ri),S.ri.vsub(Tt.position,S.ri),S.rj.vadd(gt,S.rj),S.rj.vsub(Ft.position,S.rj),this.result.push(S),Bt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}}this.enableFrictionReduction&&Bt&&this.createFrictionFromAverage(Bt)};var Et=new c,pt=new c;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft,rt,Pt,Bt,Xt){var Dt=Et;if(!(mt.distanceTo(gt)>lt.boundingSphereRadius+st.boundingSphereRadius)&&lt.findSeparatingAxis(st,mt,ne,gt,Vt,Dt,Bt,Xt)){var Rt=[],S=pt;lt.clipAgainstHull(mt,ne,st,gt,Vt,Dt,-100,100,Rt);for(var G=0,Z=0;Z!==Rt.length;Z++){var z=this.createContactEquation(Tt,Ft,lt,st,rt,Pt),Q=z.ri,_t=z.rj;Dt.negate(z.ni),Rt[Z].normal.negate(S),S.mult(Rt[Z].depth,S),Rt[Z].point.vadd(S,Q),_t.copy(Rt[Z].point),Q.vsub(mt,Q),_t.vsub(gt,_t),Q.vadd(mt,Q),Q.vsub(Tt.position,Q),_t.vadd(gt,_t),_t.vsub(Ft.position,_t),this.result.push(z),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var Jt=new c,qt=new c,Yt=new c;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Jt;rt.set(0,0,1),Tt.quaternion.vmult(rt,rt);var Pt=qt;gt.vsub(Tt.position,Pt);var Bt=rt.dot(Pt);if(Bt<=0){var Xt=this.createContactEquation(Ft,Tt,st,lt);Xt.ni.copy(rt),Xt.ni.negate(Xt.ni),Xt.ri.set(0,0,0);var Dt=Yt;rt.mult(rt.dot(gt),Dt),gt.vsub(Dt,Dt),Xt.rj.copy(Dt),this.result.push(Xt),this.createFrictionEquationsFromContact(Xt,this.frictionResult)}};var kt=new c;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=kt;rt.set(0,0,1),gt.vsub(mt,rt);var Pt=rt.norm2();if(Pt<=lt.radius*lt.radius){var Bt=this.createContactEquation(Ft,Tt,st,lt);rt.normalize(),Bt.rj.copy(rt),Bt.rj.mult(lt.radius,Bt.rj),Bt.ni.copy(rt),Bt.ni.negate(Bt.ni),Bt.ri.set(0,0,0),this.result.push(Bt),this.createFrictionEquationsFromContact(Bt,this.frictionResult)}};var Ut=new h,re=new c;new c;var Y=new c,St=new c,yt=new c;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=-1,Pt=Y,Bt=yt,Xt=null,Dt=re;if(Dt.copy(gt),Dt.vsub(mt,Dt),ne.conjugate(Ut),Ut.vmult(Dt,Dt),lt.pointIsInside(Dt)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(mt,ne),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(ne);for(var Rt=0,S=lt.faces.length;Rt!==S;Rt++){var G=[lt.worldVertices[lt.faces[Rt][0]]],Z=lt.worldFaceNormals[Rt];gt.vsub(G[0],St);var z=-Z.dot(St);(Xt===null||Math.abs(z)<Math.abs(Xt))&&(Xt=z,rt=Rt,Pt.copy(Z))}if(rt!==-1){var Q=this.createContactEquation(Ft,Tt,st,lt);Pt.mult(Xt,Bt),Bt.vadd(gt,Bt),Bt.vsub(mt,Bt),Q.rj.copy(Bt),Pt.negate(Q.ni),Q.ri.set(0,0,0);var _t=Q.ri,zt=Q.rj;_t.vadd(gt,_t),_t.vsub(Ft.position,_t),zt.vadd(mt,zt),zt.vsub(Tt.position,zt),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft)};var ut=new c,wt=new c,$t=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=st.data,Pt=st.elementSize,Bt=lt.boundingSphereRadius,Xt=wt,Dt=$t,Rt=ut;u.pointToLocalFrame(gt,Vt,mt,Rt);var S=Math.floor((Rt.x-Bt)/Pt)-1,G=Math.ceil((Rt.x+Bt)/Pt)+1,Z=Math.floor((Rt.y-Bt)/Pt)-1,z=Math.ceil((Rt.y+Bt)/Pt)+1;if(!(G<0||z<0||S>rt.length||Z>rt[0].length)){S<0&&(S=0),G<0&&(G=0),Z<0&&(Z=0),z<0&&(z=0),S>=rt.length&&(S=rt.length-1),G>=rt.length&&(G=rt.length-1),z>=rt[0].length&&(z=rt[0].length-1),Z>=rt[0].length&&(Z=rt[0].length-1);var Q=[];st.getRectMinMax(S,Z,G,z,Q);var _t=Q[0],zt=Q[1];if(!(Rt.z-Bt>zt||Rt.z+Bt<_t))for(var It=S;It<G;It++)for(var Ot=Z;Ot<z;Ot++)st.getConvexTrianglePillar(It,Ot,!1),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft,null,null,Dt,null),st.getConvexTrianglePillar(It,Ot,!0),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft,null,null,Dt,null)}};var se=new c,le=new c;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=st.data,Pt=lt.radius,Bt=st.elementSize,Xt=le,Dt=se;u.pointToLocalFrame(gt,Vt,mt,Dt);var Rt=Math.floor((Dt.x-Pt)/Bt)-1,S=Math.ceil((Dt.x+Pt)/Bt)+1,G=Math.floor((Dt.y-Pt)/Bt)-1,Z=Math.ceil((Dt.y+Pt)/Bt)+1;if(!(S<0||Z<0||Rt>rt.length||Z>rt[0].length)){Rt<0&&(Rt=0),S<0&&(S=0),G<0&&(G=0),Z<0&&(Z=0),Rt>=rt.length&&(Rt=rt.length-1),S>=rt.length&&(S=rt.length-1),Z>=rt[0].length&&(Z=rt[0].length-1),G>=rt[0].length&&(G=rt[0].length-1);var z=[];st.getRectMinMax(Rt,G,S,Z,z);var Q=z[0],_t=z[1];if(!(Dt.z-Pt>_t||Dt.z+Pt<Q))for(var zt=this.result,It=Rt;It<S;It++)for(var Ot=G;Ot<Z;Ot++){var Ct=zt.length;st.getConvexTrianglePillar(It,Ot,!1),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft),st.getConvexTrianglePillar(It,Ot,!0),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft);var Qt=zt.length-Ct;if(Qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=y;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),_=e("../collision/Ray"),x=e("../collision/NaiveBroadphase");function y(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new x,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}y.prototype=new h,new f;var E=new _;if(y.prototype.getContactMaterial=function(O,K){return this.contactMaterialTable.get(O.id,K.id)},y.prototype.numObjects=function(){return this.bodies.length},y.prototype.collisionMatrixTick=function(){var O=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=O,this.collisionMatrix.reset()},y.prototype.add=y.prototype.addBody=function(O){this.bodies.indexOf(O)===-1&&(O.index=this.bodies.length,this.bodies.push(O),O.world=this,O.initPosition.copy(O.position),O.initVelocity.copy(O.velocity),O.timeLastSleepy=this.time,O instanceof v&&(O.initAngularVelocity.copy(O.angularVelocity),O.initQuaternion.copy(O.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=O,this.dispatchEvent(this.addBodyEvent))},y.prototype.addConstraint=function(O){this.constraints.push(O)},y.prototype.removeConstraint=function(O){var K=this.constraints.indexOf(O);K!==-1&&this.constraints.splice(K,1)},y.prototype.rayTest=function(O,K,X){X instanceof m?this.raycastClosest(O,K,{skipBackfaces:!0},X):this.raycastAll(O,K,{skipBackfaces:!0},X)},y.prototype.raycastAll=function(O,K,X,b){return X.mode=_.ALL,X.from=O,X.to=K,X.callback=b,E.intersectWorld(this,X)},y.prototype.raycastAny=function(O,K,X,b){return X.mode=_.ANY,X.from=O,X.to=K,X.result=b,E.intersectWorld(this,X)},y.prototype.raycastClosest=function(O,K,X,b){return X.mode=_.CLOSEST,X.from=O,X.to=K,X.result=b,E.intersectWorld(this,X)},y.prototype.remove=function(O){O.world=null;var K=this.bodies.length-1,X=this.bodies,b=X.indexOf(O);if(b!==-1){X.splice(b,1);for(var N=0;N!==X.length;N++)X[N].index=N;this.collisionMatrix.setNumObjects(K),this.removeBodyEvent.body=O,this.dispatchEvent(this.removeBodyEvent)}},y.prototype.removeBody=y.prototype.remove,y.prototype.addMaterial=function(O){this.materials.push(O)},y.prototype.addContactMaterial=function(O){this.contactmaterials.push(O),this.contactMaterialTable.set(O.materials[0].id,O.materials[1].id,O)},typeof performance>"u"&&(performance={}),!performance.now){var R=Date.now();performance.timing&&performance.timing.navigationStart&&(R=performance.timing.navigationStart),performance.now=function(){return Date.now()-R}}var C=new a;y.prototype.step=function(O,K,X){if(X=X||10,K=K||0,K===0)this.internalStep(O),this.time+=O;else{var b=Math.floor((this.time+K)/O)-Math.floor(this.time/O);b=Math.min(b,X);for(var N=performance.now(),D=0;D!==b&&(this.internalStep(O),!(performance.now()-N>O*1e3));D++);this.time+=K;for(var I=this.time%O,T=I/O,$=C,at=this.bodies,et=0;et!==at.length;et++){var j=at[et];j.type!==v.STATIC&&j.sleepState!==v.SLEEPING?(j.position.vsub(j.previousPosition,$),$.scale(T,$),j.position.vadd($,j.interpolatedPosition)):(j.interpolatedPosition.copy(j.position),j.interpolatedQuaternion.copy(j.quaternion))}}};var B={type:"postStep"},M={type:"preStep"},w={type:"collide",body:null,contact:null},L=[],V=[],W=[],U=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var k=new o,tt=new o,F=new a;y.prototype.internalStep=function(O){this.dt=O;var K=this.contacts,X=W,b=U,N=this.numObjects(),D=this.bodies,I=this.solver,T=this.gravity,$=this.doProfiling,at=this.profile,et=v.DYNAMIC,j,ot=this.constraints,ht=V;T.norm();var q=T.x,Lt=T.y,ft=T.z,it=0;for($&&(j=performance.now()),it=0;it!==N;it++){var ct=D[it];if(ct.type&et){var Zt=ct.force,At=ct.mass;Zt.x+=At*q,Zt.y+=At*Lt,Zt.z+=At*ft}}for(var it=0,Wt=this.subsystems.length;it!==Wt;it++)this.subsystems[it].update();$&&(j=performance.now()),X.length=0,b.length=0,this.broadphase.collisionPairs(this,X,b),$&&(at.broadphase=performance.now()-j);var Et=ot.length;for(it=0;it!==Et;it++){var Mt=ot[it];if(!Mt.collideConnected)for(var ee=X.length-1;ee>=0;ee-=1)(Mt.bodyA===X[ee]&&Mt.bodyB===b[ee]||Mt.bodyB===X[ee]&&Mt.bodyA===b[ee])&&(X.splice(ee,1),b.splice(ee,1))}this.collisionMatrixTick(),$&&(j=performance.now());var ie=L,P=K.length;for(it=0;it!==P;it++)ie.push(K[it]);K.length=0;var A=this.frictionEquations.length;for(it=0;it!==A;it++)ht.push(this.frictionEquations[it]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,b,this,K,ie,this.frictionEquations,ht),$&&(at.narrowphase=performance.now()-j),$&&(j=performance.now());for(var it=0;it<this.frictionEquations.length;it++)I.addEquation(this.frictionEquations[it]);for(var J=K.length,vt=0;vt!==J;vt++){var Mt=K[vt],ct=Mt.bi,dt=Mt.bj;Mt.si,Mt.sj;var xt;if(ct.material&&dt.material?xt=this.getContactMaterial(ct.material,dt.material)||this.defaultContactMaterial:xt=this.defaultContactMaterial,xt.friction,ct.material&&dt.material&&(ct.material.friction>=0&&dt.material.friction>=0&&ct.material.friction*dt.material.friction,ct.material.restitution>=0&&dt.material.restitution>=0&&(Mt.restitution=ct.material.restitution*dt.material.restitution)),I.addEquation(Mt),ct.allowSleep&&ct.type===v.DYNAMIC&&ct.sleepState===v.SLEEPING&&dt.sleepState===v.AWAKE&&dt.type!==v.STATIC){var Gt=dt.velocity.norm2()+dt.angularVelocity.norm2(),bt=Math.pow(dt.sleepSpeedLimit,2);Gt>=bt*2&&(ct._wakeUpAfterNarrowphase=!0)}if(dt.allowSleep&&dt.type===v.DYNAMIC&&dt.sleepState===v.SLEEPING&&ct.sleepState===v.AWAKE&&ct.type!==v.STATIC){var Nt=ct.velocity.norm2()+ct.angularVelocity.norm2(),H=Math.pow(ct.sleepSpeedLimit,2);Nt>=H*2&&(dt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ct,dt,!0),this.collisionMatrixPrevious.get(ct,dt)||(w.body=dt,w.contact=Mt,ct.dispatchEvent(w),w.body=ct,dt.dispatchEvent(w))}for($&&(at.makeContactConstraints=performance.now()-j,j=performance.now()),it=0;it!==N;it++){var ct=D[it];ct._wakeUpAfterNarrowphase&&(ct.wakeUp(),ct._wakeUpAfterNarrowphase=!1)}var Et=ot.length;for(it=0;it!==Et;it++){var Mt=ot[it];Mt.update();for(var ee=0,pt=Mt.equations.length;ee!==pt;ee++){var Jt=Mt.equations[ee];I.addEquation(Jt)}}I.solve(O,this),$&&(at.solve=performance.now()-j),I.removeAllEquations();var qt=Math.pow;for(it=0;it!==N;it++){var ct=D[it];if(ct.type&et){var Yt=qt(1-ct.linearDamping,O),kt=ct.velocity;kt.mult(Yt,kt);var Ut=ct.angularVelocity;if(Ut){var re=qt(1-ct.angularDamping,O);Ut.mult(re,Ut)}}}for(this.dispatchEvent(M),it=0;it!==N;it++){var ct=D[it];ct.preStep&&ct.preStep.call(ct)}$&&(j=performance.now());var Y=k,St=tt,yt=this.stepnumber,ut=v.DYNAMIC|v.KINEMATIC,wt=yt%(this.quatNormalizeSkip+1)===0,$t=this.quatNormalizeFast,se=O*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,it=0;it!==N;it++){var le=D[it],lt=le.force,st=le.torque;if(le.type&ut&&le.sleepState!==v.SLEEPING){var mt=le.velocity,gt=le.angularVelocity,ne=le.position,Vt=le.quaternion,Tt=le.invMass,Ft=le.invInertiaWorld;mt.x+=lt.x*Tt*O,mt.y+=lt.y*Tt*O,mt.z+=lt.z*Tt*O,le.angularVelocity&&(Ft.vmult(st,F),F.mult(O,F),F.vadd(gt,gt)),ne.x+=mt.x*O,ne.y+=mt.y*O,ne.z+=mt.z*O,le.angularVelocity&&(Y.set(gt.x,gt.y,gt.z,0),Y.mult(Vt,St),Vt.x+=se*St.x,Vt.y+=se*St.y,Vt.z+=se*St.z,Vt.w+=se*St.w,wt&&($t?Vt.normalizeFast():Vt.normalize())),le.aabb&&(le.aabbNeedsUpdate=!0),le.updateInertiaWorld&&le.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,$&&(at.integrate=performance.now()-j),this.time+=O,this.stepnumber+=1,this.dispatchEvent(B),it=0;it!==N;it++){var ct=D[it],rt=ct.postStep;rt&&rt.call(ct)}if(this.allowSleep)for(it=0;it!==N;it++)D[it].sleepTick(this.time)},y.prototype.clearForces=function(){for(var O=this.bodies,K=O.length,X=0;X!==K;X++){var b=O[X];b.force,b.torque,b.force.set(0,0,0),b.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(Al);var Fm=Al.exports;const ve=Um(Fm);var Qi=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++i%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var l=0;l<t.children.length;l++)t.children[l].style.display=l===h?"block":"none";i=h}var s=(performance||Date).now(),r=s,a=0,o=e(new Qi.Panel("FPS","#0ff","#002")),c=e(new Qi.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=e(new Qi.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var h=(performance||Date).now();if(c.update(h-s,200),h>=r+1e3&&(o.update(a*1e3/(h-r),100),r=h,a=0,u)){var l=performance.memory;u.update(l.usedJSHeapSize/1048576,l.jsHeapSizeLimit/1048576)}return h},update:function(){s=this.end()},domElement:t,setMode:n}};Qi.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,c=48*a,u=3*a,h=2*a,l=3*a,d=15*a,p=74*a,v=30*a,g=document.createElement("canvas");g.width=o,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,o,c),m.fillStyle=t,m.fillText(i,u,h),m.fillRect(l,d,p,v),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(l,d,p,v),{dom:g,update:function(f,_){n=Math.min(n,f),s=Math.max(s,f),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=t,m.fillText(r(f)+" "+i+" ("+r(n)+"-"+r(s)+")",u,h),m.drawImage(g,l+a,d,p-a,v,l,d,p-a,v),m.fillRect(l+p-a,d,a,v),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(l+p-a,d,a,r((1-f/_)*v))}}};const Bm=Qi;new fm;const Om=new dm,Qr=Om.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),Yn=new ve.Material("plastic"),Tl=new ve.Material("target"),zm=new ve.Material("concrete"),Rl=new ve.Material("metal"),Cl=new ve.ContactMaterial(zm,Yn,{friction:.9,restitution:.4}),Vm=new ve.ContactMaterial(Yn,Yn,{friction:.1,restitution:.7});new ve.ContactMaterial(Rl,Tl,{friction:.1,restitution:3});const Hm=new Zr(1,16,16),ko=new vn(1,1,1),Pl=new Ni({metalness:.3,roughness:.4,envMap:Qr,envMapIntensity:.5}),Gm=(i,t,e,n,s,r)=>{const a=new We(Hm,Pl);a.castShadow=!0,a.position.copy(r),a.scale.set(s,s,s),e.add(a);const o=new ve.Sphere(s),c=new ve.Body({mass:.5,shape:o,position:new ve.Vec3(0,3,0),material:Yn});c.position.copy(r),c.addEventListener("collide",n),t.add(c),i.push({mesh:a,body:c})},Ys=(i,t,e,n,s,r,a,o,c)=>{let u;if(c){const p=new Ni({metalness:.3,roughness:.4,envMap:Qr,envMapIntensity:.5,color:c});u=new We(ko,p)}else u=new We(ko,Pl);o||(u.castShadow=!0,u.position.copy(r),u.scale.set(s,s,s),e.add(u));let h=a||a===0?a:.1;const l=new ve.Box(new ve.Vec3(s/2,s/2,s/2)),d=new ve.Body({mass:h,shape:l,position:new ve.Vec3(0,3,0),material:c&&!o?Tl:Yn});d.position.copy(r),d.addEventListener("collide",n),i.push({mesh:u,body:d}),t.add(d)},Ln=new vm(16777215,.6);Ln.castShadow=!0;Ln.shadow.mapSize.set(1024,1024);Ln.shadow.camera.far=45;Ln.shadow.camera.left=-20;Ln.shadow.camera.top=20;Ln.shadow.camera.right=20;Ln.shadow.camera.bottom=-20;Ln.position.set(5,5,5);const Wm=new gm(16777215,2.2),On={width:window.innerWidth,height:window.innerHeight},mn=new nn(56,On.width/On.height,.1,100);mn.position.set(0,5,10);mn.lookAt(new nt(0,10,-20));const km=1.2;mn.setViewOffset(On.width*3,On.height*km,On.width*1,On.height*0,On.width,On.height);const Ue=new ve.World;Ue.gravity.set(0,-9.82,0);Ue.broadphase=new ve.SAPBroadphase(Ue);Ue.allowSleep=!0;Ue.defaultContactMaterial=Cl;Ue.addContactMaterial(Cl);Ue.addContactMaterial(Vm);const ke=new om;ke.background="#0000ff";let Xm="#fff";const qm=new ra(Xm,20,70);ke.fog=qm;const Ym=new Audio("/sounds/hit.mp3"),$m=new Audio("/sounds/win.mp3");Ym.preload="auto";$m.preload="auto";const gn=i=>{},Ci=1,jm=(i,t,e)=>{const s=new ve.Sphere(.25),r=new ve.Body({mass:2,shape:s,position:new ve.Vec3(0,2.25,0),material:Rl});r.allowSleep=!1,r.addEventListener("collide",e),i.addBody(r);const a=new We(new Zr(.25,32,32),new Ni({metalness:1,roughness:.4,envMap:Qr,envMapIntensity:.5}));a.castShadow=!0,a.position.y=Ci,a.addEventListener("onClick",gn),t.add(a);const o=new We(new vn(.025,.025,4),new Ni({color:"#f00",metalness:1,roughness:.4}));o.position.set(0,Ci+.25,0);const c=new We(new vn(.1,.1,.1),new Ni({color:"#ff0",metalness:1,roughness:.4}));c.position.set(1,Ci+.25,0),t.add(o,c);const u=new ve.Box(new ve.Vec3(.2,Ci/2,.2)),h=new ve.Body({mass:0,shape:u,position:new ve.Vec3(0,Ci/2,0),material:Yn});return i.add(h),{bulletBody:r,bullet:a,aimHelper:o,powerHelper:c,shotheight:Ci}},Km=new URLSearchParams(window.location.search),Ll=Km.get("debug")==="true";console.log(Ll);const sr=new Nm;var Xr=new Bm;Ll?(console.log("showing"),sr.show(),document.body.appendChild(Xr.dom),Xr.showPanel(0)):sr.hide();let Fr=0,ri=0,Il=!1;const qe={bullet:{diameter:.25,x:0,y:0,z:0},plane:{width:6,length:16}},Zm=i=>{i.body.material.name==="target"&&i.body.mass!==0&&Se.map((t,e)=>{i.body===t.body&&(Fr=Fr+50*(ri+1),console.log("score",Fr),setTimeout(()=>{t.body.removeEventListener("collide",gn),Ue.removeBody(t.body),Tn--,ke.remove(t.mesh)},30))})};let Se=[];const Dl=[],aa={createBox:()=>{for(let i=0;i<10;i++)Ys(Se,Ue,ke,gn,Math.random()*.1,{x:0,y:10,z:0})},createSphere:()=>{for(let i=0;i<1;i++)Gm(Dl,Ue,ke,gn,Math.random(),{x:0,y:10,z:0})},levelUp:()=>{Vl()}};sr.add(aa,"createBox");sr.add(aa,"createSphere");sr.add(aa,"levelUp");const or=jm(Ue,ke,Zm),Ui=or.bulletBody,Br=or.bullet,Xo=or.aimHelper,Fs=or.powerHelper,Jm=or.shotheight;let Tn=0;const oa=()=>{Tn=0;let i=.1-ri*.005,t=.05+ri*.02;if(ri<40&&i>0){console.log("redLikelihood, whiteLikelihood",i,t);for(let e=0;e<qe.plane.length-8;e++)for(let n=0;n<qe.plane.width-1;n++){const s=-e-4,r=-n+qe.plane.width/2-1,a=Math.random();a>1-i?(Tn++,Ys(Se,Ue,ke,gn,.9,{x:r,y:.5,z:s},.5,!1,"#f00")):a<t&&Ys(Se,Ue,ke,gn,.9,{x:r,y:.5,z:s})}}else Il=!0;console.log("targets",Tn),Tn<1&&i>0?(console.log("not enough targets",Se),zl(),console.log("cleared",Se),oa()):$s=!1};let Or=new vn(qe.plane.width,100,qe.plane.length);const li=new We(Or,new Ni({color:"#34de78",metalness:.3,roughness:.4,envMap:Qr,envMapIntensity:.5,opacity:.2}));li.receiveShadow=!0;li.position.y=-50;li.position.z=-qe.plane.length/2+4;ke.add(li);const Qm=new ve.Box(new ve.Vec3(qe.plane.width/2,100/2,qe.plane.length/2)),la=new ve.Body({mass:0,shape:Qm,material:Yn});la.position.copy(li.position);la.addEventListener("collide",gn);Ue.add(la);new xm(5);ke.add(Wm);ke.add(Ln);const Xe={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Xe.width=window.innerWidth,Xe.height=window.innerHeight,mn.aspect=Xe.width/Xe.height,mn.setViewOffset(Xe.width*3,Xe.height*1.5,Xe.width*1,Xe.height*0,Xe.width,Xe.height),mn.updateProjectionMatrix(),ci.setSize(Xe.width,Xe.height),ci.setPixelRatio(Math.min(window.devicePixelRatio,2))});ke.add(mn);const Nl=document.querySelector("canvas.webgl"),Ul=new Mm(mn,Nl);Ul.enableDamping=!0;const ci=new El({canvas:Nl});ci.shadowMap.enabled=!0;ci.shadowMap.type=$o;ci.setSize(Xe.width,Xe.height);ci.setPixelRatio(Math.min(window.devicePixelRatio,2));let Cn={x:0,y:0,z:0},Fl;const ts=()=>{clearInterval(Fl),setTimeout(()=>{const n=document.getElementById("firebtn"),s=1;n.style.transform=`scale(${s})`},250),Hi();const i=-2e3*Cn.x,t=-2e3*Cn.y,e=-2e3*Cn.z;Ui.applyForce(new ve.Vec3(i,t,e),Ui.position),Gn=0,Hi()},es=()=>{Ui.position.set(0,1.25,0),Ui.velocity.set(0,0,0),Ui.angularVelocity.set(0,0,0)};let Hn=0,Rn=0,Gn=0;const Hi=()=>{var i=(Gn+.3)*Math.sin(Rn),t=-(Gn+.3)*Math.cos(Rn)*Math.sin(Hn),e=(Gn+.3)*Math.cos(Rn)*Math.cos(Hn);Cn.x=i,Cn.y=t,Cn.z=e};Hi();const tv=i=>{Hn=Number(i.target.value),Hi()},ev=i=>{Rn=-Number(i.target.value),Hi()};function Bl(i){i.preventDefault(),Fl=setInterval(Ol,100)}const Ol=()=>{if(console.log("growing",Gn),!Fi)if(Br.position.x!==0)es();else{Gn+=.05;const i=document.getElementById("firebtn"),t=1+Gn;i.style.transform=`scale(${t})`,Hi(),Gn>=2&&(Fi=!0,ts(),setTimeout(()=>{Fi=!1},2e3))}};document.getElementById("angleInput").addEventListener("input",tv,!1);document.getElementById("windageInput").addEventListener("input",ev,!1);document.getElementById("firebtn").addEventListener("mousedown",Bl);document.getElementById("firebtn").addEventListener("touchstart",Bl);document.getElementById("firebtn").addEventListener("touchend",ts);document.getElementById("firebtn").addEventListener("mouseup",ts);document.getElementById("resetbtn").addEventListener("click",es);let Fi=!1;document.addEventListener("keydown",function(i){i.keyCode==40?Hn<=1.57&&(Hn+=.01):i.keyCode==38?Hn>=-1&&(Hn-=.01):i.keyCode==37?Rn<=.7853&&(Rn+=.01):i.keyCode==39?Rn>=-.7853&&(Rn-=.01):i.keyCode==32&&Ol()});document.addEventListener("keyup",function(i){Fi||i.keyCode==32&&(ts(),Fi=!0,setTimeout(()=>{Fi=!1},2e3))});const zl=()=>{Se.map(i=>{i.body.removeEventListener("collide",gn),Ue.removeBody(i.body),ke.remove(i.mesh)}),Se=[]};let $s=!1;const Vl=()=>{es(),ri++,qe.plane.length=20+ri*2,zl(),Or.dispose(),Or=new vn(qe.plane.width,100,qe.plane.length),li.geometry=Or,li.position.z=-qe.plane.length/2+4;let i=new ve.Box(new ve.Vec3(qe.plane.width/2,100/2,6/2)),t=new ve.Body({mass:0,shape:i,material:Yn,position:new ve.Vec3(0,-50,-qe.plane.length+7)});t.addEventListener("collide",gn),Ue.add(t),oa()},nv=()=>{document.getElementById("levelnr").innerHTML=ri,document.getElementById("scorenr").innerHTML=Fr,document.getElementById("blocknr").innerHTML=Tn},iv=new _m;let qo=0;const Hl=()=>{Xr.begin();const i=iv.getElapsedTime();let t=i-qo;qo=i,Ul.update(),Ue.step(1/60,t,3),Br.position.copy(Ui.position),Br.position.y<-10&&es();for(var e=Se.length-1;e>=0;e--)Se[e].mesh.position.copy(Se[e].body.position),Se[e].mesh.quaternion.copy(Se[e].body.quaternion),Se[e].mesh.position.y<-10&&(console.log("lost box",Se[e],Se[e].mesh.position.y),console.log(Se),Se[e].body.material.name==="target"&&Tn--,Se[e].body.removeEventListener("collide",gn),Ue.removeBody(Se[e].body),ke.remove(Se[e].mesh),Se.splice(e,1));Dl.map(n=>{n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion)}),console.log(Tn),Tn===0&&!$s&&!Il&&($s=!0,setTimeout(Vl,1e3)),Xo.rotation.x=Hn,Xo.rotation.y=Rn,Fs.position.x=Cn.x,Fs.position.y=Cn.y+Jm+.25,Fs.position.z=Cn.z,mn.lookAt(Br.position),nv(),ci.render(ke,mn),Xr.end(),window.requestAnimationFrame(Hl)};oa();Hl();
//# sourceMappingURL=index-e6657007.js.map
