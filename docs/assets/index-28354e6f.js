(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="158",Ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tc=0,ka=1,Rc=2,Il=1,Dl=2,In=3,ri=0,$e=1,yn=2,ei=0,qi=1,Xa=2,qa=3,Ya=4,Cc=5,di=100,Pc=101,Lc=102,ja=103,$a=104,Ic=200,Dc=201,Nc=202,Uc=203,da=204,fa=205,Fc=206,Bc=207,Oc=208,zc=209,Vc=210,Hc=211,Gc=212,Wc=213,kc=214,Xc=0,qc=1,Yc=2,cs=3,jc=4,$c=5,Kc=6,Zc=7,Aa=0,Jc=1,Qc=2,ni=0,th=1,eh=2,nh=3,ih=4,rh=5,Nl=300,Ki=301,Zi=302,pa=303,ma=304,ys=306,va=1e3,pn=1001,yr=1002,De=1003,Ka=1004,Rs=1005,an=1006,sh=1007,xr=1008,ii=1009,ah=1010,oh=1011,Ta=1012,Ul=1013,Jn=1014,Qn=1015,Mr=1016,Fl=1017,Bl=1018,pi=1020,lh=1021,mn=1023,ch=1024,hh=1025,mi=1026,Ji=1027,uh=1028,Ol=1029,dh=1030,zl=1031,Vl=1033,Cs=33776,Ps=33777,Ls=33778,Is=33779,Za=35840,Ja=35841,Qa=35842,to=35843,fh=36196,eo=37492,no=37496,io=37808,ro=37809,so=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,vo=37820,go=37821,Ds=36492,_o=36494,yo=36495,ph=36283,xo=36284,Mo=36285,Eo=36286,Hl=3e3,vi=3001,mh=3200,vh=3201,Ra=0,gh=1,ln="",ze="srgb",Vn="srgb-linear",Ca="display-p3",xs="display-p3-linear",hs="linear",ye="srgb",us="rec709",ds="p3",Ri=7680,So=519,_h=512,yh=513,xh=514,Mh=515,Eh=516,Sh=517,wh=518,bh=519,wo=35044,bo="300 es",ga=1035,Fn=2e3,fs=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ao=1234567;const fr=Math.PI/180,Er=180/Math.PI;function nr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function Pa(i,t){return(i%t+t)%t}function Ah(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Th(i,t,e){return i!==t?(e-i)/(t-i):0}function pr(i,t,e){return(1-e)*i+e*t}function Rh(i,t,e,n){return pr(i,t,1-Math.exp(-e*n))}function Ch(i,t=1){return t-Math.abs(Pa(i,t*2)-t)}function Ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ih(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dh(i,t){return i+Math.random()*(t-i)}function Nh(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(Ao=i);let t=Ao+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fh(i){return i*fr}function Bh(i){return i*Er}function _a(i){return(i&i-1)===0&&i!==0}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ps(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),u=r((t+n)/2),c=a((t+n)/2),l=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*c,h*l,h*d,o*u);break;case"YZY":i.set(h*d,o*c,h*l,o*u);break;case"ZXZ":i.set(h*l,h*d,o*c,o*u);break;case"XZX":i.set(o*c,h*v,h*f,o*u);break;case"YXY":i.set(h*f,o*c,h*v,o*u);break;case"ZYZ":i.set(h*v,h*f,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:fr,RAD2DEG:Er,generateUUID:nr,clamp:ke,euclideanModulo:Pa,mapLinear:Ah,inverseLerp:Th,lerp:pr,damp:Rh,pingpong:Ch,smoothstep:Ph,smootherstep:Lh,randInt:Ih,randFloat:Dh,randFloatSpread:Nh,seededRandom:Uh,degToRad:Fh,radToDeg:Bh,isPowerOfTwo:_a,ceilPowerOfTwo:Oh,floorPowerOfTwo:ps,setQuaternionFromProperEuler:zh,normalize:Xe,denormalize:ki};class ae{constructor(t=0,e=0){ae.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,r,a,o,h,u){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,u)}set(t,e,n,s,r,a,o,h,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],u=n[1],c=n[4],l=n[7],d=n[2],f=n[5],v=n[8],g=s[0],m=s[3],p=s[6],_=s[1],y=s[4],x=s[7],M=s[2],T=s[5],C=s[8];return r[0]=a*g+o*_+h*M,r[3]=a*m+o*y+h*T,r[6]=a*p+o*x+h*C,r[1]=u*g+c*_+l*M,r[4]=u*m+c*y+l*T,r[7]=u*p+c*x+l*C,r[2]=d*g+f*_+v*M,r[5]=d*m+f*y+v*T,r[8]=d*p+f*x+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],u=t[7],c=t[8];return e*a*c-e*o*u-n*r*c+n*o*h+s*r*u-s*a*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],u=t[7],c=t[8],l=c*a-o*u,d=o*h-c*r,f=u*r-a*h,v=e*l+n*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(s*u-c*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(c*e-s*h)*g,t[5]=(s*r-o*e)*g,t[6]=f*g,t[7]=(n*h-u*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*a+u*o)+a+t,-s*u,s*h,-s*(-u*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new ue;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=Sr("canvas");return i.style.display="block",i}const To={};function mr(i){i in To||(To[i]=!0,console.warn(i))}const Ro=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Co=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[Vn]:{transfer:hs,primaries:us,toReference:i=>i,fromReference:i=>i},[ze]:{transfer:ye,primaries:us,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xs]:{transfer:hs,primaries:ds,toReference:i=>i.applyMatrix3(Co),fromReference:i=>i.applyMatrix3(Ro)},[Ca]:{transfer:ye,primaries:ds,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Co),fromReference:i=>i.applyMatrix3(Ro).convertLinearToSRGB()}},Gh=new Set([Vn,xs]),ge={enabled:!0,_workingColorSpace:Vn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Dr[t].toReference,s=Dr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Dr[i].primaries},getTransfer:function(i){return i===ln?hs:Dr[i].transfer}};function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class Wl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Sr("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wh=0;class kl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=nr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fs(s[a].image)):r.push(Fs(s[a]))}else r=Fs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class Ke extends wi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=pn,s=pn,r=an,a=xr,o=mn,h=ii,u=Ke.DEFAULT_ANISOTROPY,c=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=nr(),this.name="",this.source=new kl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===vi?ze:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case va:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case va:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?vi:Hl}set encoding(t){mr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vi?ze:ln}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Nl;Ke.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,e=0,n=0,s=1){Ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,u=h[0],c=h[4],l=h[8],d=h[1],f=h[5],v=h[9],g=h[2],m=h[6],p=h[10];if(Math.abs(c-d)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,M=(p+1)/2,T=(c+d)/4,C=(l+g)/4,F=(v+m)/4;return y>x&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=C/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=F/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=F/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(l-g)/_,this.z=(d-c)/_,this.w=Math.acos((u+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(mr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vi?ze:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends Xh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xl extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],u=n[s+1],c=n[s+2],l=n[s+3];const d=r[a+0],f=r[a+1],v=r[a+2],g=r[a+3];if(o===0){t[e+0]=h,t[e+1]=u,t[e+2]=c,t[e+3]=l;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=v,t[e+3]=g;return}if(l!==g||h!==d||u!==f||c!==v){let m=1-o;const p=h*d+u*f+c*v+l*g,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),T=Math.atan2(M,p*_);m=Math.sin(m*T)/M,o=Math.sin(o*T)/M}const x=o*_;if(h=h*m+d*x,u=u*m+f*x,c=c*m+v*x,l=l*m+g*x,m===1-o){const M=1/Math.sqrt(h*h+u*u+c*c+l*l);h*=M,u*=M,c*=M,l*=M}}t[e]=h,t[e+1]=u,t[e+2]=c,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],h=n[s+1],u=n[s+2],c=n[s+3],l=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return t[e]=o*v+c*l+h*f-u*d,t[e+1]=h*v+c*d+u*l-o*f,t[e+2]=u*v+c*f+o*d-h*l,t[e+3]=c*v-o*l-h*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,u=o(n/2),c=o(s/2),l=o(r/2),d=h(n/2),f=h(s/2),v=h(r/2);switch(a){case"XYZ":this._x=d*c*l+u*f*v,this._y=u*f*l-d*c*v,this._z=u*c*v+d*f*l,this._w=u*c*l-d*f*v;break;case"YXZ":this._x=d*c*l+u*f*v,this._y=u*f*l-d*c*v,this._z=u*c*v-d*f*l,this._w=u*c*l+d*f*v;break;case"ZXY":this._x=d*c*l-u*f*v,this._y=u*f*l+d*c*v,this._z=u*c*v+d*f*l,this._w=u*c*l-d*f*v;break;case"ZYX":this._x=d*c*l-u*f*v,this._y=u*f*l+d*c*v,this._z=u*c*v-d*f*l,this._w=u*c*l+d*f*v;break;case"YZX":this._x=d*c*l+u*f*v,this._y=u*f*l+d*c*v,this._z=u*c*v-d*f*l,this._w=u*c*l-d*f*v;break;case"XZY":this._x=d*c*l-u*f*v,this._y=u*f*l-d*c*v,this._z=u*c*v+d*f*l,this._w=u*c*l+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],u=e[2],c=e[6],l=e[10],d=n+o+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-h)*f,this._y=(r-u)*f,this._z=(a-s)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(c-h)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+u)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(r-u)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(a-s)/f,this._x=(r+u)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,u=e._z,c=e._w;return this._x=n*c+a*o+s*u-r*h,this._y=s*c+a*h+r*o-n*u,this._z=r*c+a*u+n*h-s*o,this._w=a*c-n*o-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(h),c=Math.atan2(u,o),l=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=a*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,n=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,u=2*(a*s-o*n),c=2*(o*e-r*s),l=2*(r*n-a*e);return this.x=e+h*u+a*l-o*c,this.y=n+h*c+o*u-r*l,this.z=s+h*l+r*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new tt,Po=new yi;class Rr{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nr.copy(n.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Ur.subVectors(this.max,ar),Pi.subVectors(t.a,ar),Li.subVectors(t.b,ar),Ii.subVectors(t.c,ar),Xn.subVectors(Li,Pi),qn.subVectors(Ii,Li),oi.subVectors(Pi,Ii);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-oi.z,oi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,oi.z,0,-oi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-oi.y,oi.x,0];return!Os(e,Pi,Li,Ii,Ur)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,Pi,Li,Ii,Ur))?!1:(Fr.crossVectors(Xn,qn),e=[Fr.x,Fr.y,Fr.z],Os(e,Pi,Li,Ii,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],hn=new tt,Nr=new Rr,Pi=new tt,Li=new tt,Ii=new tt,Xn=new tt,qn=new tt,oi=new tt,ar=new tt,Ur=new tt,Fr=new tt,li=new tt;function Os(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),h=t.dot(li),u=e.dot(li),c=n.dot(li);if(Math.max(-Math.max(h,u,c),Math.min(h,u,c))>o)return!1}return!0}const Yh=new Rr,or=new tt,zs=new tt;class Cr{constructor(t=new tt,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(zs)),this.expandByPoint(or.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new tt,Vs=new tt,Br=new tt,Yn=new tt,Hs=new tt,Or=new tt,Gs=new tt;class Ms{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vs.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Vs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Br),o=Yn.dot(this.direction),h=-Yn.dot(Br),u=Yn.lengthSq(),c=Math.abs(1-a*a);let l,d,f,v;if(c>0)if(l=a*h-o,d=a*o-h,v=r*c,l>=0)if(d>=-v)if(d<=v){const g=1/c;l*=g,d*=g,f=l*(l+a*d+2*o)+d*(a*l+d+2*h)+u}else d=r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*h)+u;else d=-r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*h)+u;else d<=-v?(l=Math.max(0,-(-a*r+o)),d=l>0?-r:Math.min(Math.max(-r,-h),r),f=-l*l+d*(d+2*h)+u):d<=v?(l=0,d=Math.min(Math.max(-r,-h),r),f=d*(d+2*h)+u):(l=Math.max(0,-(a*r+o)),d=l>0?r:Math.min(Math.max(-r,-h),r),f=-l*l+d*(d+2*h)+u);else d=a>0?-r:r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Vs).addScaledVector(Br,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h;const u=1/this.direction.x,c=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(t.min.z-d.z)*l,h=(t.max.z-d.z)*l):(o=(t.max.z-d.z)*l,h=(t.min.z-d.z)*l),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){Hs.subVectors(e,t),Or.subVectors(n,t),Gs.crossVectors(Hs,Or);let a=this.direction.dot(Gs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);const h=o*this.direction.dot(Or.crossVectors(Yn,Or));if(h<0)return null;const u=o*this.direction.dot(Hs.cross(Yn));if(u<0||h+u>a)return null;const c=-o*Yn.dot(Gs);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,s,r,a,o,h,u,c,l,d,f,v,g,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,u,c,l,d,f,v,g,m)}set(t,e,n,s,r,a,o,h,u,c,l,d,f,v,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=h,p[2]=u,p[6]=c,p[10]=l,p[14]=d,p[3]=f,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),u=Math.sin(s),c=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=a*c,f=a*l,v=o*c,g=o*l;e[0]=h*c,e[4]=-h*l,e[8]=u,e[1]=f+v*u,e[5]=d-g*u,e[9]=-o*h,e[2]=g-d*u,e[6]=v+f*u,e[10]=a*h}else if(t.order==="YXZ"){const d=h*c,f=h*l,v=u*c,g=u*l;e[0]=d+g*o,e[4]=v*o-f,e[8]=a*u,e[1]=a*l,e[5]=a*c,e[9]=-o,e[2]=f*o-v,e[6]=g+d*o,e[10]=a*h}else if(t.order==="ZXY"){const d=h*c,f=h*l,v=u*c,g=u*l;e[0]=d-g*o,e[4]=-a*l,e[8]=v+f*o,e[1]=f+v*o,e[5]=a*c,e[9]=g-d*o,e[2]=-a*u,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const d=a*c,f=a*l,v=o*c,g=o*l;e[0]=h*c,e[4]=v*u-f,e[8]=d*u+g,e[1]=h*l,e[5]=g*u+d,e[9]=f*u-v,e[2]=-u,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const d=a*h,f=a*u,v=o*h,g=o*u;e[0]=h*c,e[4]=g-d*l,e[8]=v*l+f,e[1]=l,e[5]=a*c,e[9]=-o*c,e[2]=-u*c,e[6]=f*l+v,e[10]=d-g*l}else if(t.order==="XZY"){const d=a*h,f=a*u,v=o*h,g=o*u;e[0]=h*c,e[4]=-l,e[8]=u*c,e[1]=d*l+g,e[5]=a*c,e[9]=f*l-v,e[2]=v*l-f,e[6]=o*c,e[10]=g*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jh,t,$h)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(n,tn),jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(n,tn)),jn.normalize(),zr.crossVectors(tn,jn),s[0]=jn.x,s[4]=zr.x,s[8]=tn.x,s[1]=jn.y,s[5]=zr.y,s[9]=tn.y,s[2]=jn.z,s[6]=zr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],u=n[12],c=n[1],l=n[5],d=n[9],f=n[13],v=n[2],g=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],M=n[15],T=s[0],C=s[4],F=s[8],E=s[12],w=s[1],P=s[5],W=s[9],k=s[13],N=s[2],H=s[6],nt=s[10],B=s[14],O=s[3],Y=s[7],X=s[11],b=s[15];return r[0]=a*T+o*w+h*N+u*O,r[4]=a*C+o*P+h*H+u*Y,r[8]=a*F+o*W+h*nt+u*X,r[12]=a*E+o*k+h*B+u*b,r[1]=c*T+l*w+d*N+f*O,r[5]=c*C+l*P+d*H+f*Y,r[9]=c*F+l*W+d*nt+f*X,r[13]=c*E+l*k+d*B+f*b,r[2]=v*T+g*w+m*N+p*O,r[6]=v*C+g*P+m*H+p*Y,r[10]=v*F+g*W+m*nt+p*X,r[14]=v*E+g*k+m*B+p*b,r[3]=_*T+y*w+x*N+M*O,r[7]=_*C+y*P+x*H+M*Y,r[11]=_*F+y*W+x*nt+M*X,r[15]=_*E+y*k+x*B+M*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],u=t[13],c=t[2],l=t[6],d=t[10],f=t[14],v=t[3],g=t[7],m=t[11],p=t[15];return v*(+r*h*l-s*u*l-r*o*d+n*u*d+s*o*f-n*h*f)+g*(+e*h*f-e*u*d+r*a*d-s*a*f+s*u*c-r*h*c)+m*(+e*u*l-e*o*f-r*a*l+n*a*f+r*o*c-n*u*c)+p*(-s*o*c-e*h*l+e*o*d+s*a*l-n*a*d+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],u=t[7],c=t[8],l=t[9],d=t[10],f=t[11],v=t[12],g=t[13],m=t[14],p=t[15],_=l*m*u-g*d*u+g*h*f-o*m*f-l*h*p+o*d*p,y=v*d*u-c*m*u-v*h*f+a*m*f+c*h*p-a*d*p,x=c*g*u-v*l*u+v*o*f-a*g*f-c*o*p+a*l*p,M=v*l*h-c*g*h-v*o*d+a*g*d+c*o*m-a*l*m,T=e*_+n*y+s*x+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=_*C,t[1]=(g*d*r-l*m*r-g*s*f+n*m*f+l*s*p-n*d*p)*C,t[2]=(o*m*r-g*h*r+g*s*u-n*m*u-o*s*p+n*h*p)*C,t[3]=(l*h*r-o*d*r-l*s*u+n*d*u+o*s*f-n*h*f)*C,t[4]=y*C,t[5]=(c*m*r-v*d*r+v*s*f-e*m*f-c*s*p+e*d*p)*C,t[6]=(v*h*r-a*m*r-v*s*u+e*m*u+a*s*p-e*h*p)*C,t[7]=(a*d*r-c*h*r+c*s*u-e*d*u-a*s*f+e*h*f)*C,t[8]=x*C,t[9]=(v*l*r-c*g*r-v*n*f+e*g*f+c*n*p-e*l*p)*C,t[10]=(a*g*r-v*o*r+v*n*u-e*g*u-a*n*p+e*o*p)*C,t[11]=(c*o*r-a*l*r-c*n*u+e*l*u+a*n*f-e*o*f)*C,t[12]=M*C,t[13]=(c*g*s-v*l*s+v*n*d-e*g*d-c*n*m+e*l*m)*C,t[14]=(v*o*s-a*g*s-v*n*h+e*g*h+a*n*m-e*o*m)*C,t[15]=(a*l*s-c*o*s+c*n*h-e*l*h-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,u=r*a,c=r*o;return this.set(u*a+n,u*o-s*h,u*h+s*o,0,u*o+s*h,c*o+n,c*h-s*a,0,u*h-s*o,c*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,u=r+r,c=a+a,l=o+o,d=r*u,f=r*c,v=r*l,g=a*c,m=a*l,p=o*l,_=h*u,y=h*c,x=h*l,M=n.x,T=n.y,C=n.z;return s[0]=(1-(g+p))*M,s[1]=(f+x)*M,s[2]=(v-y)*M,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(v+y)*C,s[9]=(m-_)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);const u=1/r,c=1/a,l=1/o;return un.elements[0]*=u,un.elements[1]*=u,un.elements[2]*=u,un.elements[4]*=c,un.elements[5]*=c,un.elements[6]*=c,un.elements[8]*=l,un.elements[9]*=l,un.elements[10]*=l,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Fn){const h=this.elements,u=2*r/(e-t),c=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let f,v;if(o===Fn)f=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fs)f=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=l,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn){const h=this.elements,u=1/(e-t),c=1/(n-s),l=1/(a-r),d=(e+t)*u,f=(n+s)*c;let v,g;if(o===Fn)v=(a+r)*l,g=-2*l;else if(o===fs)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-d,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=g,h[14]=-v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new tt,un=new Pe,jh=new tt(0,0,0),$h=new tt(1,1,1),jn=new tt,zr=new tt,tn=new tt,Lo=new Pe,Io=new yi;class Es{constructor(t=0,e=0,n=0,s=Es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],u=s[5],c=s[9],l=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Es.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kh=0;const Do=new tt,Ni=new yi,Rn=new Pe,Vr=new tt,lr=new tt,Zh=new tt,Jh=new yi,No=new tt(1,0,0),Uo=new tt(0,1,0),Fo=new tt(0,0,1),Qh={type:"added"},tu={type:"removed"};class He extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new tt,e=new Es,n=new yi,s=new tt(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ue}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Uo,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Do.copy(t).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Uo,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vr.copy(t):Vr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(lr,Vr,this.up):Rn.lookAt(Vr,lr,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let u=0,c=h.length;u<c;u++){const l=h[u];r(t.shapes,l)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,u=this.material.length;h<u;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),u=a(t.textures),c=a(t.images),l=a(t.shapes),d=a(t.skeletons),f=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const h=[];for(const u in o){const c=o[u];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}He.DEFAULT_UP=new tt(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new tt,Cn=new tt,Ws=new tt,Pn=new tt,Ui=new tt,Fi=new tt,Bo=new tt,ks=new tt,Xs=new tt,qs=new tt;let Hr=!1;class fn{constructor(t=new tt,e=new tt,n=new tt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Cn.subVectors(n,e),Ws.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(Cn),h=dn.dot(Ws),u=Cn.dot(Cn),c=Cn.dot(Ws),l=a*u-o*o;if(l===0)return r.set(-2,-1,-1);const d=1/l,f=(u*h-o*c)*d,v=(a*c-o*h)*d;return r.set(1-f-v,v,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(t,e,n,s,r,a,o,h){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),this.getInterpolation(t,e,n,s,r,a,o,h)}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,Pn),h.setScalar(0),h.addScaledVector(r,Pn.x),h.addScaledVector(a,Pn.y),h.addScaledVector(o,Pn.z),h}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Cn.subVectors(t,e),dn.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),dn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hr=!0),fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ui.subVectors(s,n),Fi.subVectors(r,n),ks.subVectors(t,n);const h=Ui.dot(ks),u=Fi.dot(ks);if(h<=0&&u<=0)return e.copy(n);Xs.subVectors(t,s);const c=Ui.dot(Xs),l=Fi.dot(Xs);if(c>=0&&l<=c)return e.copy(s);const d=h*l-c*u;if(d<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(n).addScaledVector(Ui,a);qs.subVectors(t,r);const f=Ui.dot(qs),v=Fi.dot(qs);if(v>=0&&f<=v)return e.copy(r);const g=f*u-h*v;if(g<=0&&u>=0&&v<=0)return o=u/(u-v),e.copy(n).addScaledVector(Fi,o);const m=c*v-f*l;if(m<=0&&l-c>=0&&f-v>=0)return Bo.subVectors(r,s),o=(l-c)/(l-c+(f-v)),e.copy(s).addScaledVector(Bo,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ys(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=Pa(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ys(a,r,t+1/3),this.g=Ys(a,r,t),this.b=Ys(a,r,t-1/3)}return ge.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ge.fromWorkingColorSpace(We.copy(this),t),Math.round(ke(We.r*255,0,255))*65536+Math.round(ke(We.g*255,0,255))*256+Math.round(ke(We.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let h,u;const c=(o+a)/2;if(o===a)h=0,u=0;else{const l=a-o;switch(u=c<=.5?l/(a+o):l/(2-a-o),a){case n:h=(s-r)/l+(s<r?6:0);break;case s:h=(r-n)/l+2;break;case r:h=(n-s)/l+4;break}h/=6}return t.h=h,t.s=u,t.l=c,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ze){ge.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Gr);const n=pr($n.h,Gr.h,e),s=pr($n.s,Gr.s,e),r=pr($n.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new he;he.NAMES=Yl;let eu=0;class Sn extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=qi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jl extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new tt,Wr=new ae;class xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wo,this.updateRange={offset:0,count:-1},this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==wo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class $l extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kl extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nu=0;const rn=new Pe,js=new He,Bi=new tt,en=new Rr,cr=new Rr,Be=new tt;class Ze extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Kl:$l)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return js.lookAt(t),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new tt,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(en.min,cr.min),en.expandByPoint(Be),Be.addVectors(en.max,cr.max),en.expandByPoint(Be)):(en.expandByPoint(cr.min),en.expandByPoint(cr.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],h=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Be.fromBufferAttribute(o,u),h&&(Bi.fromBufferAttribute(t,u),Be.add(Bi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*o),4));const h=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<o;w++)u[w]=new tt,c[w]=new tt;const l=new tt,d=new tt,f=new tt,v=new ae,g=new ae,m=new ae,p=new tt,_=new tt;function y(w,P,W){l.fromArray(s,w*3),d.fromArray(s,P*3),f.fromArray(s,W*3),v.fromArray(a,w*2),g.fromArray(a,P*2),m.fromArray(a,W*2),d.sub(l),f.sub(l),g.sub(v),m.sub(v);const k=1/(g.x*m.y-m.x*g.y);isFinite(k)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(k),_.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(k),u[w].add(p),u[P].add(p),u[W].add(p),c[w].add(_),c[P].add(_),c[W].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let w=0,P=x.length;w<P;++w){const W=x[w],k=W.start,N=W.count;for(let H=k,nt=k+N;H<nt;H+=3)y(n[H+0],n[H+1],n[H+2])}const M=new tt,T=new tt,C=new tt,F=new tt;function E(w){C.fromArray(r,w*3),F.copy(C);const P=u[w];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),T.crossVectors(F,P);const k=T.dot(c[w])<0?-1:1;h[w*4]=M.x,h[w*4+1]=M.y,h[w*4+2]=M.z,h[w*4+3]=k}for(let w=0,P=x.length;w<P;++w){const W=x[w],k=W.start,N=W.count;for(let H=k,nt=k+N;H<nt;H+=3)E(n[H+0]),E(n[H+1]),E(n[H+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new tt,r=new tt,a=new tt,o=new tt,h=new tt,u=new tt,c=new tt,l=new tt;if(t)for(let d=0,f=t.count;d<f;d+=3){const v=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),c.subVectors(a,r),l.subVectors(s,r),c.cross(l),o.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),o.add(c),h.add(c),u.add(c),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),l.subVectors(s,r),c.cross(l),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,h){const u=o.array,c=o.itemSize,l=o.normalized,d=new u.constructor(h.length*c);let f=0,v=0;for(let g=0,m=h.length;g<m;g++){o.isInterleavedBufferAttribute?f=h[g]*o.data.stride+o.offset:f=h[g]*c;for(let p=0;p<c;p++)d[v++]=u[f++]}return new xn(d,c,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const o in s){const h=s[o],u=t(h,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const h=[],u=r[o];for(let c=0,l=u.length;c<l;c++){const d=u[c],f=t(d,n);h.push(f)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const u=n[h];t.data.attributes[h]=u.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],c=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];c.push(f.toJSON(t.data))}c.length>0&&(s[h]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],l=r[u];for(let d=0,f=l.length;d<f;d++)c.push(l[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,c=a.length;u<c;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new Pe,ci=new Ms,kr=new Cr,zo=new tt,Oi=new tt,zi=new tt,Vi=new tt,$s=new tt,Xr=new tt,qr=new ae,Yr=new ae,jr=new ae,Vo=new tt,Ho=new tt,Go=new tt,$r=new tt,Kr=new tt;class be extends He{constructor(t=new Ze,e=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Xr.set(0,0,0);for(let h=0,u=r.length;h<u;h++){const c=o[h],l=r[h];c!==0&&($s.fromBufferAttribute(l,t),a?Xr.addScaledVector($s,c):Xr.addScaledVector($s.sub(e),c))}e.add(Xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(kr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(kr,zo)===null||ci.origin.distanceToSquared(zo)>(t.far-t.near)**2))&&(Oo.copy(r).invert(),ci.copy(t.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,M=y;x<M;x+=3){const T=o.getX(x),C=o.getX(x+1),F=o.getX(x+2);s=Zr(this,p,t,n,u,c,l,T,C,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Zr(this,a,t,n,u,c,l,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const m=d[v],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,M=y;x<M;x+=3){const T=x,C=x+1,F=x+2;s=Zr(this,p,t,n,u,c,l,T,C,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,f.start),g=Math.min(h.count,f.start+f.count);for(let m=v,p=g;m<p;m+=3){const _=m,y=m+1,x=m+2;s=Zr(this,a,t,n,u,c,l,_,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function iu(i,t,e,n,s,r,a,o){let h;if(t.side===$e?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===ri,o),h===null)return null;Kr.copy(o),Kr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Kr);return u<e.near||u>e.far?null:{distance:u,point:Kr.clone(),object:i}}function Zr(i,t,e,n,s,r,a,o,h,u){i.getVertexPosition(o,Oi),i.getVertexPosition(h,zi),i.getVertexPosition(u,Vi);const c=iu(i,t,e,n,Oi,zi,Vi,$r);if(c){s&&(qr.fromBufferAttribute(s,o),Yr.fromBufferAttribute(s,h),jr.fromBufferAttribute(s,u),c.uv=fn.getInterpolation($r,Oi,zi,Vi,qr,Yr,jr,new ae)),r&&(qr.fromBufferAttribute(r,o),Yr.fromBufferAttribute(r,h),jr.fromBufferAttribute(r,u),c.uv1=fn.getInterpolation($r,Oi,zi,Vi,qr,Yr,jr,new ae),c.uv2=c.uv1),a&&(Vo.fromBufferAttribute(a,o),Ho.fromBufferAttribute(a,h),Go.fromBufferAttribute(a,u),c.normal=fn.getInterpolation($r,Oi,zi,Vi,Vo,Ho,Go,new tt),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const l={a:o,b:h,c:u,normal:new tt,materialIndex:0};fn.getNormal(Oi,zi,Vi,l.normal),c.face=l}return c}class wn extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],u=[],c=[],l=[];let d=0,f=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2));function v(g,m,p,_,y,x,M,T,C,F,E){const w=x/C,P=M/F,W=x/2,k=M/2,N=T/2,H=C+1,nt=F+1;let B=0,O=0;const Y=new tt;for(let X=0;X<nt;X++){const b=X*P-k;for(let U=0;U<H;U++){const D=U*w-W;Y[g]=D*_,Y[m]=b*y,Y[p]=N,u.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[p]=T>0?1:-1,c.push(Y.x,Y.y,Y.z),l.push(U/C),l.push(1-X/F),B+=1}}for(let X=0;X<F;X++)for(let b=0;b<C;b++){const U=d+b+H*X,D=d+b+H*(X+1),I=d+(b+1)+H*(X+1),R=d+(b+1)+H*X;h.push(U,D,R),h.push(D,I,R),O+=6}o.addGroup(f,O,E),f+=O,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Qi(i[e]);for(const s in n)t[s]=n[s]}return t}function ru(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zl(i){return i.getRenderTarget()===null?i.outputColorSpace:ge.workingColorSpace}const su={clone:Qi,merge:qe};var au=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=au,this.fragmentShader=ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jl extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Jl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/u,s*=a.width/h,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class lu extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new on(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const a=new on(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new on(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const h=new on(Hi,Gi,t,e);h.layers=this.layers,this.add(h);const u=new on(Hi,Gi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(const u of e)this.remove(u);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,u,c]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(l,d,f),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class La extends Ke{constructor(t,e,n,s,r,a,o,h,u,c){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,a,o,h,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cu extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(mr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vi?ze:ln),this.texture=new La(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wn(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ei});r.uniforms.tEquirect.value=e;const a=new be(s,r),o=e.minFilter;return e.minFilter===xr&&(e.minFilter=an),new lu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ks=new tt,hu=new tt,uu=new ue;class Kn{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ks.subVectors(n,e).cross(hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ks),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uu.getNormalMatrix(t),s=this.coplanarPoint(Ks).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Cr,Jr=new tt;class Ia{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],h=s[3],u=s[4],c=s[5],l=s[6],d=s[7],f=s[8],v=s[9],g=s[10],m=s[11],p=s[12],_=s[13],y=s[14],x=s[15];if(n[0].setComponents(h-r,d-u,m-f,x-p).normalize(),n[1].setComponents(h+r,d+u,m+f,x+p).normalize(),n[2].setComponents(h+a,d+c,m+v,x+_).normalize(),n[3].setComponents(h-a,d-c,m-v,x-_).normalize(),n[4].setComponents(h-o,d-l,m-g,x-y).normalize(),e===Fn)n[5].setComponents(h+o,d+l,m+g,x+y).normalize();else if(e===fs)n[5].setComponents(o,l,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function du(i,t){const e=t.isWebGL2,n=new WeakMap;function s(u,c){const l=u.array,d=u.usage,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),u.onUploadCallback();let v;if(l instanceof Float32Array)v=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=i.SHORT;else if(l instanceof Uint32Array)v=i.UNSIGNED_INT;else if(l instanceof Int32Array)v=i.INT;else if(l instanceof Int8Array)v=i.BYTE;else if(l instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function r(u,c,l){const d=c.array,f=c.updateRange;i.bindBuffer(l,u),f.count===-1?i.bufferSubData(l,0,d):(e?i.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(l,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(i.deleteBuffer(c.buffer),n.delete(u))}function h(u,c){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,s(u,c)):l.version<u.version&&(r(l.buffer,u,c),l.version=u.version)}return{get:a,remove:o,update:h}}class Da extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),u=o+1,c=h+1,l=t/o,d=e/h,f=[],v=[],g=[],m=[];for(let p=0;p<c;p++){const _=p*d-a;for(let y=0;y<u;y++){const x=y*l-r;v.push(x,-_,0),g.push(0,0,1),m.push(y/o),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let _=0;_<o;_++){const y=_+u*p,x=_+u*(p+1),M=_+1+u*(p+1),T=_+1+u*p;f.push(y,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new we(v,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.width,t.height,t.widthSegments,t.heightSegments)}}var fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
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
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yu=`#ifdef USE_AOMAP
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
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wu=`#ifdef USE_IRIDESCENCE
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
#endif`,bu=`#ifdef USE_BUMPMAP
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
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nu=`#define PI 3.141592653589793
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
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`
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
}`,Wu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$u=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
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
}`,Qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,id=`uniform bool receiveShadow;
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
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cd=`PhysicalMaterial material;
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
#endif`,hd=`struct PhysicalMaterial {
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
}`,ud=`
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
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
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
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
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$d=`float getShadowMask() {
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
}`,Kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ef=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,af=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`#include <common>
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
}`,_f=`#if DEPTH_PACKING == 3200
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
}`,yf=`#define DISTANCE
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
}`,xf=`#define DISTANCE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ef=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,Af=`uniform vec3 diffuse;
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
}`,Tf=`#define LAMBERT
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
}`,Rf=`#define LAMBERT
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
}`,Cf=`#define MATCAP
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
}`,Pf=`#define MATCAP
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
}`,Lf=`#define NORMAL
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
}`,If=`#define NORMAL
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
}`,Df=`#define PHONG
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
}`,Nf=`#define PHONG
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
}`,Uf=`#define STANDARD
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
}`,Ff=`#define STANDARD
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
}`,Bf=`#define TOON
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
}`,Of=`#define TOON
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
}`,zf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 color;
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
}`,Wf=`uniform float rotation;
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
}`,kf=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:fu,alphahash_pars_fragment:pu,alphamap_fragment:mu,alphamap_pars_fragment:vu,alphatest_fragment:gu,alphatest_pars_fragment:_u,aomap_fragment:yu,aomap_pars_fragment:xu,begin_vertex:Mu,beginnormal_vertex:Eu,bsdfs:Su,iridescence_fragment:wu,bumpmap_pars_fragment:bu,clipping_planes_fragment:Au,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Cu,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Iu,color_vertex:Du,common:Nu,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Bu,displacementmap_vertex:Ou,emissivemap_fragment:zu,emissivemap_pars_fragment:Vu,colorspace_fragment:Hu,colorspace_pars_fragment:Gu,envmap_fragment:Wu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:rd,envmap_vertex:Yu,fog_vertex:ju,fog_pars_vertex:$u,fog_fragment:Ku,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_fragment:Qu,lightmap_pars_fragment:td,lights_lambert_fragment:ed,lights_lambert_pars_fragment:nd,lights_pars_begin:id,lights_toon_fragment:sd,lights_toon_pars_fragment:ad,lights_phong_fragment:od,lights_phong_pars_fragment:ld,lights_physical_fragment:cd,lights_physical_pars_fragment:hd,lights_fragment_begin:ud,lights_fragment_maps:dd,lights_fragment_end:fd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:yd,map_particle_fragment:xd,map_particle_pars_fragment:Md,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Sd,morphcolor_vertex:wd,morphnormal_vertex:bd,morphtarget_pars_vertex:Ad,morphtarget_vertex:Td,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Id,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Ud,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Bd,opaque_fragment:Od,packing:zd,premultiplied_alpha_fragment:Vd,project_vertex:Hd,dithering_fragment:Gd,dithering_pars_fragment:Wd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:jd,shadowmask_pars_fragment:$d,skinbase_vertex:Kd,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:tf,specularmap_pars_fragment:ef,tonemapping_fragment:nf,tonemapping_pars_fragment:rf,transmission_fragment:sf,transmission_pars_fragment:af,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:hf,background_vert:uf,background_frag:df,backgroundCube_vert:ff,backgroundCube_frag:pf,cube_vert:mf,cube_frag:vf,depth_vert:gf,depth_frag:_f,distanceRGBA_vert:yf,distanceRGBA_frag:xf,equirect_vert:Mf,equirect_frag:Ef,linedashed_vert:Sf,linedashed_frag:wf,meshbasic_vert:bf,meshbasic_frag:Af,meshlambert_vert:Tf,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:If,meshphong_vert:Df,meshphong_frag:Nf,meshphysical_vert:Uf,meshphysical_frag:Ff,meshtoon_vert:Bf,meshtoon_frag:Of,points_vert:zf,points_frag:Vf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Wf,sprite_frag:kf},Ht={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},_n={basic:{uniforms:qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:qe([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:qe([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:qe([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:qe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:qe([Ht.points,Ht.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:qe([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:qe([Ht.common,Ht.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:qe([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:qe([Ht.sprite,Ht.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:qe([Ht.common,Ht.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:qe([Ht.lights,Ht.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};_n.physical={uniforms:qe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Qr={r:0,b:0,g:0};function Xf(i,t,e,n,s,r,a){const o=new he(0);let h=r===!0?0:1,u,c,l=null,d=0,f=null;function v(m,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,h):y&&y.isColor&&(g(y,1),_=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ys)?(c===void 0&&(c=new be(new wn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Qi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=ge.getTransfer(y.colorSpace)!==ye,(l!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,l=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new be(new Da(2,2),new xi({name:"BackgroundMaterial",uniforms:Qi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ge.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(l!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,p){m.getRGB(Qr,Zl(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),h=p,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:v}}function qf(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},h=m(null);let u=h,c=!1;function l(N,H,nt,B,O){let Y=!1;if(a){const X=g(B,nt,H);u!==X&&(u=X,f(u.object)),Y=p(N,B,nt,O),Y&&_(N,B,nt,O)}else{const X=H.wireframe===!0;(u.geometry!==B.id||u.program!==nt.id||u.wireframe!==X)&&(u.geometry=B.id,u.program=nt.id,u.wireframe=X,Y=!0)}O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Y||c)&&(c=!1,F(N,H,nt,B),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,H,nt){const B=nt.wireframe===!0;let O=o[N.id];O===void 0&&(O={},o[N.id]=O);let Y=O[H.id];Y===void 0&&(Y={},O[H.id]=Y);let X=Y[B];return X===void 0&&(X=m(d()),Y[B]=X),X}function m(N){const H=[],nt=[],B=[];for(let O=0;O<s;O++)H[O]=0,nt[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:B,object:N,attributes:{},index:null}}function p(N,H,nt,B){const O=u.attributes,Y=H.attributes;let X=0;const b=nt.getAttributes();for(const U in b)if(b[U].location>=0){const I=O[U];let R=Y[U];if(R===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),I===void 0||I.attribute!==R||R&&I.data!==R.data)return!0;X++}return u.attributesNum!==X||u.index!==B}function _(N,H,nt,B){const O={},Y=H.attributes;let X=0;const b=nt.getAttributes();for(const U in b)if(b[U].location>=0){let I=Y[U];I===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));const R={};R.attribute=I,I&&I.data&&(R.data=I.data),O[U]=R,X++}u.attributes=O,u.attributesNum=X,u.index=B}function y(){const N=u.newAttributes;for(let H=0,nt=N.length;H<nt;H++)N[H]=0}function x(N){M(N,0)}function M(N,H){const nt=u.newAttributes,B=u.enabledAttributes,O=u.attributeDivisors;nt[N]=1,B[N]===0&&(i.enableVertexAttribArray(N),B[N]=1),O[N]!==H&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,H),O[N]=H)}function T(){const N=u.newAttributes,H=u.enabledAttributes;for(let nt=0,B=H.length;nt<B;nt++)H[nt]!==N[nt]&&(i.disableVertexAttribArray(nt),H[nt]=0)}function C(N,H,nt,B,O,Y,X){X===!0?i.vertexAttribIPointer(N,H,nt,O,Y):i.vertexAttribPointer(N,H,nt,B,O,Y)}function F(N,H,nt,B){if(n.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const O=B.attributes,Y=nt.getAttributes(),X=H.defaultAttributeValues;for(const b in Y){const U=Y[b];if(U.location>=0){let D=O[b];if(D===void 0&&(b==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),b==="instanceColor"&&N.instanceColor&&(D=N.instanceColor)),D!==void 0){const I=D.normalized,R=D.itemSize,$=e.get(D);if($===void 0)continue;const at=$.buffer,et=$.type,K=$.bytesPerElement,ot=n.isWebGL2===!0&&(et===i.INT||et===i.UNSIGNED_INT||D.gpuType===Ul);if(D.isInterleavedBufferAttribute){const ht=D.data,q=ht.stride,Lt=D.offset;if(ht.isInstancedInterleavedBuffer){for(let ft=0;ft<U.locationSize;ft++)M(U.location+ft,ht.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<U.locationSize;ft++)x(U.location+ft);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ft=0;ft<U.locationSize;ft++)C(U.location+ft,R/U.locationSize,et,I,q*K,(Lt+R/U.locationSize*ft)*K,ot)}else{if(D.isInstancedBufferAttribute){for(let ht=0;ht<U.locationSize;ht++)M(U.location+ht,D.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ht=0;ht<U.locationSize;ht++)x(U.location+ht);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ht=0;ht<U.locationSize;ht++)C(U.location+ht,R/U.locationSize,et,I,R*K,R/U.locationSize*ht*K,ot)}}else if(X!==void 0){const I=X[b];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(U.location,I);break;case 3:i.vertexAttrib3fv(U.location,I);break;case 4:i.vertexAttrib4fv(U.location,I);break;default:i.vertexAttrib1fv(U.location,I)}}}}T()}function E(){W();for(const N in o){const H=o[N];for(const nt in H){const B=H[nt];for(const O in B)v(B[O].object),delete B[O];delete H[nt]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const H=o[N.id];for(const nt in H){const B=H[nt];for(const O in B)v(B[O].object),delete B[O];delete H[nt]}delete o[N.id]}function P(N){for(const H in o){const nt=o[H];if(nt[N.id]===void 0)continue;const B=nt[N.id];for(const O in B)v(B[O].object),delete B[O];delete nt[N.id]}}function W(){k(),c=!0,u!==h&&(u=h,f(u.object))}function k(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:l,reset:W,resetDefaultState:k,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function Yf(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,c){i.drawArrays(r,u,c),e.update(c,r,1)}function h(u,c,l){if(l===0)return;let d,f;if(s)d=i,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,u,c,l),e.update(c,r,l)}this.setMode=a,this.render=o,this.renderInstances=h}function jf(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const h=r(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const u=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,x=a||t.has("OES_texture_float"),M=y&&x,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:T}}function $f(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Kn,o=new ue,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=c(l,d,0)},this.setState=function(l,d,f){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,p=i.get(l);if(!s||v===null||v.length===0||r&&!m)r?c(null):u();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;h.value=x,x=c(v,d,y,f);for(let M=0;M!==y;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(l,d,f,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=h.value,v!==!0||m===null){const p=f+g*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==g;++y,x+=4)a.copy(l[y]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Kf(i){let t=new WeakMap;function e(a,o){return o===pa?a.mapping=Ki:o===ma&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pa||o===ma)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const u=new cu(h.height/2);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class tc extends Jl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xi=4,Wo=[.125,.215,.35,.446,.526,.582],fi=20,Zs=new tc,ko=new he;let Js=null,Qs=0,ta=0;const ui=(1+Math.sqrt(5))/2,Wi=1/ui,Xo=[new tt(1,1,1),new tt(-1,1,1),new tt(1,1,-1),new tt(-1,1,-1),new tt(0,ui,Wi),new tt(0,ui,-Wi),new tt(Wi,0,ui),new tt(-Wi,0,ui),new tt(ui,Wi,0),new tt(-ui,Wi,0)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,ta),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Mr,format:mn,colorSpace:Vn,depthBuffer:!1},s=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zf(r)),this._blurMaterial=Jf(r,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,n,s){const o=new on(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,d=c.toneMapping;c.getClearColor(ko),c.toneMapping=ni,c.autoClear=!1;const f=new jl({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),v=new be(new wn,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(ko),g=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,h[p],0),o.lookAt(u[p],0,0)):_===1?(o.up.set(0,0,h[p]),o.lookAt(0,u[p],0)):(o.up.set(0,h[p],0),o.lookAt(0,0,u[p]));const y=this._cubeSize;ts(s,_*y,p>2?y:0,y,y),c.setRenderTarget(s),g&&c.render(v,o),c.render(t,o)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const h=this._cubeSize;ts(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,Zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xo[(s-1)%Xo.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const h=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,l=new be(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),g=r/v,m=isFinite(r)?1+Math.floor(c*g):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let _=0;for(let C=0;C<fi;++C){const F=C/g,E=Math.exp(-F*F/2);p.push(E),C===0?_+=E:C<m&&(_+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const x=this._sizeLods[s],M=3*x*(s>y-Xi?s-y+Xi:0),T=4*(this._cubeSize-x);ts(e,M,T,3*x,2*x),h.setRenderTarget(e),h.render(l,Zs)}}function Zf(i){const t=[],e=[],n=[];let s=i;const r=i-Xi+1+Wo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let h=1/o;a>i-Xi?h=Wo[a-i+Xi-1]:a===0&&(h=0),n.push(h);const u=1/(o-2),c=-u,l=1+u,d=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,v=6,g=3,m=2,p=1,_=new Float32Array(g*v*f),y=new Float32Array(m*v*f),x=new Float32Array(p*v*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,F=T>2?0:-1,E=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];_.set(E,g*v*T),y.set(d,m*v*T);const w=[T,T,T,T,T,T];x.set(w,p*v*T)}const M=new Ze;M.setAttribute("position",new xn(_,g)),M.setAttribute("uv",new xn(y,m)),M.setAttribute("faceIndex",new xn(x,p)),t.push(M),s>Xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yo(i,t,e){const n=new _i(i,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jf(i,t,e){const n=new Float32Array(fi),s=new tt(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function jo(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $o(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function Qf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,u=h===pa||h===ma,c=h===Ki||h===Zi;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=t.get(o);return e===null&&(e=new qo(i)),l=u?e.fromEquirectangular(o,l):e.fromCubemap(o,l),t.set(o,l),l.texture}else{if(t.has(o))return t.get(o).texture;{const l=o.image;if(u&&l&&l.height>0||c&&l&&s(l)){e===null&&(e=new qo(i));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let h=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&h++;return h===u}function r(o){const h=o.target;h.removeEventListener("dispose",r);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function tp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ep(i,t,e,n){const s={},r=new WeakMap;function a(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(l,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function h(l){const d=l.attributes;for(const v in d)t.update(d[v],i.ARRAY_BUFFER);const f=l.morphAttributes;for(const v in f){const g=f[v];for(let m=0,p=g.length;m<p;m++)t.update(g[m],i.ARRAY_BUFFER)}}function u(l){const d=[],f=l.index,v=l.attributes.position;let g=0;if(f!==null){const _=f.array;g=f.version;for(let y=0,x=_.length;y<x;y+=3){const M=_[y+0],T=_[y+1],C=_[y+2];d.push(M,T,T,C,C,M)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const M=y+0,T=y+1,C=y+2;d.push(M,T,T,C,C,M)}}else return;const m=new(Gl(d)?Kl:$l)(d,1);m.version=g;const p=r.get(l);p&&t.remove(p),r.set(l,m)}function c(l){const d=r.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&u(l)}else u(l);return r.get(l)}return{get:o,update:h,getWireframeAttribute:c}}function np(i,t,e,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,h;function u(d){o=d.type,h=d.bytesPerElement}function c(d,f){i.drawElements(r,f,o,d*h),e.update(f,r,1)}function l(d,f,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,f,o,d*h,v),e.update(f,r,v)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=l}function ip(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rp(i,t){return i[0]-t[0]}function sp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function ap(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new Ve,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function h(u,c,l){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=f!==void 0?f.length:0;let g=r.get(c);if(g===void 0||g.count!==v){let N=function(){W.dispose(),r.delete(c),c.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let F=0;_===!0&&(F=1),y===!0&&(F=2),x===!0&&(F=3);let E=c.attributes.position.count*F,w=1;E>t.maxTextureSize&&(w=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const P=new Float32Array(E*w*4*v),W=new Xl(P,E,w,v);W.type=Qn,W.needsUpdate=!0;const k=F*4;for(let H=0;H<v;H++){const nt=M[H],B=T[H],O=C[H],Y=E*w*4*H;for(let X=0;X<nt.count;X++){const b=X*k;_===!0&&(a.fromBufferAttribute(nt,X),P[Y+b+0]=a.x,P[Y+b+1]=a.y,P[Y+b+2]=a.z,P[Y+b+3]=0),y===!0&&(a.fromBufferAttribute(B,X),P[Y+b+4]=a.x,P[Y+b+5]=a.y,P[Y+b+6]=a.z,P[Y+b+7]=0),x===!0&&(a.fromBufferAttribute(O,X),P[Y+b+8]=a.x,P[Y+b+9]=a.y,P[Y+b+10]=a.z,P[Y+b+11]=O.itemSize===4?a.w:1)}}g={count:v,texture:W,size:new ae(E,w)},r.set(c,g),c.addEventListener("dispose",N)}let m=0;for(let _=0;_<d.length;_++)m+=d[_];const p=c.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",d),l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const f=d===void 0?0:d.length;let v=n[c.id];if(v===void 0||v.length!==f){v=[];for(let y=0;y<f;y++)v[y]=[y,0];n[c.id]=v}for(let y=0;y<f;y++){const x=v[y];x[0]=y,x[1]=d[y]}v.sort(sp);for(let y=0;y<8;y++)y<f&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(rp);const g=c.morphAttributes.position,m=c.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const x=o[y],M=x[0],T=x[1];M!==Number.MAX_SAFE_INTEGER&&T?(g&&c.getAttribute("morphTarget"+y)!==g[M]&&c.setAttribute("morphTarget"+y,g[M]),m&&c.getAttribute("morphNormal"+y)!==m[M]&&c.setAttribute("morphNormal"+y,m[M]),s[y]=T,p+=T):(g&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),m&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),s[y]=0)}const _=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function op(i,t,e,n){let s=new WeakMap;function r(h){const u=n.render.frame,c=h.geometry,l=t.get(h,c);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,u))),h.isSkinnedMesh){const d=h.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function a(){s=new WeakMap}function o(h){const u=h.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const ec=new Ke,nc=new Xl,ic=new qh,rc=new La,Ko=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),tl=new Float32Array(4);function ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ko[s];if(r===void 0&&(r=new Float32Array(s),Ko[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ss(i,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),Ue(e,n)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Qo.set(n),i.uniformMatrix3fv(this.addr,!1,Qo),Ue(e,n)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Jo.set(n),i.uniformMatrix4fv(this.addr,!1,Jo),Ue(e,n)}}function mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2D(t||ec,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ic,s)}function bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rc,s)}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nc,s)}function Tp(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return hp;case 35666:return up;case 35674:return dp;case 35675:return fp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return vp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return yp;case 36294:return xp;case 36295:return Mp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return wp;case 35680:case 36300:case 36308:case 36293:return bp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Cp(i,t){const e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function Pp(i,t){const e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function Lp(i,t){const e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function Ip(i,t){const e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dp(i,t){const e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Np(i,t){const e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Up(i,t){i.uniform1iv(this.addr,t)}function Fp(i,t){i.uniform2iv(this.addr,t)}function Bp(i,t){i.uniform3iv(this.addr,t)}function Op(i,t){i.uniform4iv(this.addr,t)}function zp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Hp(i,t){i.uniform3uiv(this.addr,t)}function Gp(i,t){i.uniform4uiv(this.addr,t)}function Wp(i,t,e){const n=this.cache,s=t.length,r=Ss(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ec,r[a])}function kp(i,t,e){const n=this.cache,s=t.length,r=Ss(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ic,r[a])}function Xp(i,t,e){const n=this.cache,s=t.length,r=Ss(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||rc,r[a])}function qp(i,t,e){const n=this.cache,s=t.length,r=Ss(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||nc,r[a])}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Ip;case 35675:return Dp;case 35676:return Np;case 5124:case 35670:return Up;case 35667:case 35671:return Fp;case 35668:case 35672:return Bp;case 35669:case 35673:return Op;case 5125:return zp;case 36294:return Vp;case 36295:return Hp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Tp(e.type)}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Yp(e.type)}}class Kp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function el(i,t){i.seq.push(t),i.map[t.id]=t}function Zp(i,t,e){const n=i.name,s=n.length;for(ea.lastIndex=0;;){const r=ea.exec(n),a=ea.lastIndex;let o=r[1];const h=r[2]==="]",u=r[3];if(h&&(o=o|0),u===void 0||u==="["&&a+2===s){el(e,u===void 0?new jp(o,i,t):new $p(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Kp(o),el(e,l)),e=l}}}class os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jp=37297;let Qp=0;function tm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function em(i){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(i);let n;switch(t===e?n="":t===ds&&e===us?n="LinearDisplayP3ToLinearSRGB":t===us&&e===ds&&(n="LinearSRGBToLinearDisplayP3"),i){case Vn:case xs:return[n,"LinearTransferOETF"];case ze:case Ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function il(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+tm(i.getShaderSource(t),a)}else return s}function nm(i,t){const e=em(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function im(i,t){let e;switch(t){case th:e="Linear";break;case eh:e="Reinhard";break;case nh:e="OptimizedCineon";break;case ih:e="ACESFilmic";break;case rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function rm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ur).join(`
`)}function sm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(om,cm)}const lm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cm(i,t){let e=oe[t];if(e===void 0){const n=lm.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(i){return i.replace(hm,um)}function um(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ol(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function fm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case Zi:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function mm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Aa:t="ENVMAP_BLENDING_MULTIPLY";break;case Jc:t="ENVMAP_BLENDING_MIX";break;case Qc:t="ENVMAP_BLENDING_ADD";break}return t}function vm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function gm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=dm(e),u=fm(e),c=pm(e),l=mm(e),d=vm(e),f=e.isWebGL2?"":rm(e),v=sm(r),g=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[f,ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?oe.tonemapping_pars_fragment:"",e.toneMapping!==ni?im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,nm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=ya(a),a=rl(a,e),a=sl(a,e),o=ya(o),o=rl(o,e),o=sl(o,e),a=al(a),o=al(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,x=_+p+o,M=nl(s,s.VERTEX_SHADER,y),T=nl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,M),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(g).trim(),k=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(T).trim();let H=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{const B=il(s,M,"vertex"),O=il(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+B+`
`+O)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(k===""||N==="")&&(nt=!1);nt&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:k,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(M),s.deleteShader(T),F=new os(s,g),E=am(s,g)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,Jp)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let _m=0;class ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xm(t),e.set(t,n)),n}}class xm{constructor(t){this.id=_m++,this.code=t,this.usedTimes=0}}function Mm(i,t,e,n,s,r,a){const o=new ql,h=new ym,u=[],c=s.isWebGL2,l=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function m(E,w,P,W,k){const N=W.fog,H=k.geometry,nt=E.isMeshStandardMaterial?W.environment:null,B=(E.isMeshStandardMaterial?e:t).get(E.envMap||nt),O=B&&B.mapping===ys?B.image.height:null,Y=v[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const X=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,b=X!==void 0?X.length:0;let U=0;H.morphAttributes.position!==void 0&&(U=1),H.morphAttributes.normal!==void 0&&(U=2),H.morphAttributes.color!==void 0&&(U=3);let D,I,R,$;if(Y){const ce=_n[Y];D=ce.vertexShader,I=ce.fragmentShader}else D=E.vertexShader,I=E.fragmentShader,h.update(E),R=h.getVertexShaderID(E),$=h.getFragmentShaderID(E);const at=i.getRenderTarget(),et=k.isInstancedMesh===!0,K=!!E.map,ot=!!E.matcap,ht=!!B,q=!!E.aoMap,Lt=!!E.lightMap,ft=!!E.bumpMap,it=!!E.normalMap,ct=!!E.displacementMap,Zt=!!E.emissiveMap,At=!!E.metalnessMap,Wt=!!E.roughnessMap,Mt=E.anisotropy>0,ee=E.clearcoat>0,ie=E.iridescence>0,L=E.sheen>0,A=E.transmission>0,J=Mt&&!!E.anisotropyMap,vt=ee&&!!E.clearcoatMap,dt=ee&&!!E.clearcoatNormalMap,yt=ee&&!!E.clearcoatRoughnessMap,Gt=ie&&!!E.iridescenceMap,bt=ie&&!!E.iridescenceThicknessMap,Nt=L&&!!E.sheenColorMap,V=L&&!!E.sheenRoughnessMap,Et=!!E.specularMap,pt=!!E.specularColorMap,Jt=!!E.specularIntensityMap,qt=A&&!!E.transmissionMap,Yt=A&&!!E.thicknessMap,kt=!!E.gradientMap,Ut=!!E.alphaMap,re=E.alphaTest>0,j=!!E.alphaHash,St=!!E.extensions,xt=!!H.attributes.uv1,ut=!!H.attributes.uv2,wt=!!H.attributes.uv3;let jt=ni;return E.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:c,shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:D,fragmentShader:I,defines:E.defines,customVertexShaderID:R,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,instancing:et,instancingColor:et&&k.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Vn,map:K,matcap:ot,envMap:ht,envMapMode:ht&&B.mapping,envMapCubeUVHeight:O,aoMap:q,lightMap:Lt,bumpMap:ft,normalMap:it,displacementMap:d&&ct,emissiveMap:Zt,normalMapObjectSpace:it&&E.normalMapType===gh,normalMapTangentSpace:it&&E.normalMapType===Ra,metalnessMap:At,roughnessMap:Wt,anisotropy:Mt,anisotropyMap:J,clearcoat:ee,clearcoatMap:vt,clearcoatNormalMap:dt,clearcoatRoughnessMap:yt,iridescence:ie,iridescenceMap:Gt,iridescenceThicknessMap:bt,sheen:L,sheenColorMap:Nt,sheenRoughnessMap:V,specularMap:Et,specularColorMap:pt,specularIntensityMap:Jt,transmission:A,transmissionMap:qt,thicknessMap:Yt,gradientMap:kt,opaque:E.transparent===!1&&E.blending===qi,alphaMap:Ut,alphaTest:re,alphaHash:j,combine:E.combine,mapUv:K&&g(E.map.channel),aoMapUv:q&&g(E.aoMap.channel),lightMapUv:Lt&&g(E.lightMap.channel),bumpMapUv:ft&&g(E.bumpMap.channel),normalMapUv:it&&g(E.normalMap.channel),displacementMapUv:ct&&g(E.displacementMap.channel),emissiveMapUv:Zt&&g(E.emissiveMap.channel),metalnessMapUv:At&&g(E.metalnessMap.channel),roughnessMapUv:Wt&&g(E.roughnessMap.channel),anisotropyMapUv:J&&g(E.anisotropyMap.channel),clearcoatMapUv:vt&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:V&&g(E.sheenRoughnessMap.channel),specularMapUv:Et&&g(E.specularMap.channel),specularColorMapUv:pt&&g(E.specularColorMap.channel),specularIntensityMapUv:Jt&&g(E.specularIntensityMap.channel),transmissionMapUv:qt&&g(E.transmissionMap.channel),thicknessMapUv:Yt&&g(E.thicknessMap.channel),alphaMapUv:Ut&&g(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(it||Mt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:xt,vertexUv2s:ut,vertexUv3s:wt,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(K||Ut),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:K&&E.map.isVideoTexture===!0&&ge.getTransfer(E.map.colorSpace)===ye,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===yn,flipSided:E.side===$e,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:St&&E.extensions.derivatives===!0,extensionFragDepth:St&&E.extensions.fragDepth===!0,extensionDrawBuffers:St&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:St&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)w.push(P),w.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(_(w,E),y(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function _(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function y(E,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),E.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function x(E){const w=v[E.type];let P;if(w){const W=_n[w];P=su.clone(W.uniforms)}else P=E.uniforms;return P}function M(E,w){let P;for(let W=0,k=u.length;W<k;W++){const N=u[W];if(N.cacheKey===w){P=N,++P.usedTimes;break}}return P===void 0&&(P=new gm(i,w,E,r),u.push(P)),P}function T(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function C(E){h.remove(E)}function F(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:F}}function Em(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(l,d,f,v,g,m){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=l.renderOrder,p.z=g,p.group=m),t++,p}function o(l,d,f,v,g,m){const p=a(l,d,f,v,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function h(l,d,f,v,g,m){const p=a(l,d,f,v,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(l,d){e.length>1&&e.sort(l||Sm),n.length>1&&n.sort(d||ll),s.length>1&&s.sort(d||ll)}function c(){for(let l=t,d=i.length;l<d;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:u}}function wm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new cl,i.set(n,[a])):s>=r.length?(a=new cl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new he};break;case"SpotLight":e={position:new tt,direction:new tt,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=e,e}}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tm=0;function Rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cm(i,t){const e=new bm,n=Am(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)s.probe.push(new tt);const r=new tt,a=new Pe,o=new Pe;function h(c,l){let d=0,f=0,v=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let g=0,m=0,p=0,_=0,y=0,x=0,M=0,T=0,C=0,F=0,E=0;c.sort(Rm);const w=l===!0?Math.PI:1;for(let W=0,k=c.length;W<k;W++){const N=c[W],H=N.color,nt=N.intensity,B=N.distance,O=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=H.r*nt*w,f+=H.g*nt*w,v+=H.b*nt*w;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(N.sh.coefficients[Y],nt);E++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const X=N.shadow,b=n.get(N);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,s.directionalShadow[g]=b,s.directionalShadowMap[g]=O,s.directionalShadowMatrix[g]=N.shadow.matrix,x++}s.directional[g]=Y,g++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(H).multiplyScalar(nt*w),Y.distance=B,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,s.spot[p]=Y;const X=N.shadow;if(N.map&&(s.spotLightMap[C]=N.map,C++,X.updateMatrices(N),N.castShadow&&F++),s.spotLightMatrix[p]=X.matrix,N.castShadow){const b=n.get(N);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,s.spotShadow[p]=b,s.spotShadowMap[p]=O,T++}p++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(H).multiplyScalar(nt),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),s.rectArea[_]=Y,_++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*w),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const X=N.shadow,b=n.get(N);b.shadowBias=X.bias,b.shadowNormalBias=X.normalBias,b.shadowRadius=X.radius,b.shadowMapSize=X.mapSize,b.shadowCameraNear=X.camera.near,b.shadowCameraFar=X.camera.far,s.pointShadow[m]=b,s.pointShadowMap[m]=O,s.pointShadowMatrix[m]=N.shadow.matrix,M++}s.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(nt*w),Y.groundColor.copy(N.groundColor).multiplyScalar(nt*w),s.hemi[y]=Y,y++}}_>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=v;const P=s.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==_||P.hemiLength!==y||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==C||P.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=p,s.rectArea.length=_,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=x,s.directionalShadowMap.length=x,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=x,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=T+C-F,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=E,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=_,P.hemiLength=y,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=C,P.numLightProbes=E,s.version=Tm++)}function u(c,l){let d=0,f=0,v=0,g=0,m=0;const p=l.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const x=c[_];if(x.isDirectionalLight){const M=s.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(x.isSpotLight){const M=s.spot[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),v++}else if(x.isRectAreaLight){const M=s.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(x.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=s.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:h,setupView:u,state:s}}function hl(i,t){const e=new Cm(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(l){n.push(l)}function o(l){s.push(l)}function h(l){e.setup(n,l)}function u(l){e.setupView(n,l)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o}}function Pm(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let h;return o===void 0?(h=new hl(i,t),e.set(r,[h])):a>=o.length?(h=new hl(i,t),o.push(h)):h=o[a],h}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lm extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Im extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
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
}`;function Um(i,t,e){let n=new Ia;const s=new ae,r=new ae,a=new Ve,o=new Lm({depthPacking:vh}),h=new Im,u={},c=e.maxTextureSize,l={[ri]:$e,[$e]:ri,[yn]:yn},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Dm,fragmentShader:Nm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ze;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new be(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let p=this.type;this.render=function(M,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const F=i.getRenderTarget(),E=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ei),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const W=p!==In&&this.type===In,k=p===In&&this.type!==In;for(let N=0,H=M.length;N<H;N++){const nt=M[N],B=nt.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const O=B.getFrameExtents();if(s.multiply(O),r.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/O.x),s.x=r.x*O.x,B.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/O.y),s.y=r.y*O.y,B.mapSize.y=r.y)),B.map===null||W===!0||k===!0){const X=this.type!==In?{minFilter:De,magFilter:De}:{};B.map!==null&&B.map.dispose(),B.map=new _i(s.x,s.y,X),B.map.texture.name=nt.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Y=B.getViewportCount();for(let X=0;X<Y;X++){const b=B.getViewport(X);a.set(r.x*b.x,r.y*b.y,r.x*b.z,r.y*b.w),P.viewport(a),B.updateMatrices(nt,X),n=B.getFrustum(),x(T,C,B.camera,nt,this.type)}B.isPointLightShadow!==!0&&this.type===In&&_(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,E,w)};function _(M,T){const C=t.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _i(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,g,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,C,f,g,null)}function y(M,T,C,F){let E=null;const w=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)E=w;else if(E=C.isPointLight===!0?h:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=E.uuid,W=T.uuid;let k=u[P];k===void 0&&(k={},u[P]=k);let N=k[W];N===void 0&&(N=E.clone(),k[W]=N),E=N}if(E.visible=T.visible,E.wireframe=T.wireframe,F===In?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:l[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const P=i.properties.get(E);P.light=C}return E}function x(M,T,C,F,E){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===In)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const W=t.update(M),k=M.material;if(Array.isArray(k)){const N=W.groups;for(let H=0,nt=N.length;H<nt;H++){const B=N[H],O=k[B.materialIndex];if(O&&O.visible){const Y=y(M,O,F,E);i.renderBufferDirect(C,null,W,Y,M,B)}}}else if(k.visible){const N=y(M,k,F,E);i.renderBufferDirect(C,null,W,N,M,null)}}const P=M.children;for(let W=0,k=P.length;W<k;W++)x(P[W],T,C,F,E)}}function Fm(i,t,e){const n=e.isWebGL2;function s(){let j=!1;const St=new Ve;let xt=null;const ut=new Ve(0,0,0,0);return{setMask:function(wt){xt!==wt&&!j&&(i.colorMask(wt,wt,wt,wt),xt=wt)},setLocked:function(wt){j=wt},setClear:function(wt,jt,se,ce,lt){lt===!0&&(wt*=ce,jt*=ce,se*=ce),St.set(wt,jt,se,ce),ut.equals(St)===!1&&(i.clearColor(wt,jt,se,ce),ut.copy(St))},reset:function(){j=!1,xt=null,ut.set(-1,0,0,0)}}}function r(){let j=!1,St=null,xt=null,ut=null;return{setTest:function(wt){wt?K(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(wt){St!==wt&&!j&&(i.depthMask(wt),St=wt)},setFunc:function(wt){if(xt!==wt){switch(wt){case Xc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Kc:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=wt}},setLocked:function(wt){j=wt},setClear:function(wt){ut!==wt&&(i.clearDepth(wt),ut=wt)},reset:function(){j=!1,St=null,xt=null,ut=null}}}function a(){let j=!1,St=null,xt=null,ut=null,wt=null,jt=null,se=null,ce=null,lt=null;return{setTest:function(st){j||(st?K(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(st){St!==st&&!j&&(i.stencilMask(st),St=st)},setFunc:function(st,mt,gt){(xt!==st||ut!==mt||wt!==gt)&&(i.stencilFunc(st,mt,gt),xt=st,ut=mt,wt=gt)},setOp:function(st,mt,gt){(jt!==st||se!==mt||ce!==gt)&&(i.stencilOp(st,mt,gt),jt=st,se=mt,ce=gt)},setLocked:function(st){j=st},setClear:function(st){lt!==st&&(i.clearStencil(st),lt=st)},reset:function(){j=!1,St=null,xt=null,ut=null,wt=null,jt=null,se=null,ce=null,lt=null}}}const o=new s,h=new r,u=new a,c=new WeakMap,l=new WeakMap;let d={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,M=null,T=null,C=null,F=null,E=new he(0,0,0),w=0,P=!1,W=null,k=null,N=null,H=null,nt=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=Y>=2);let b=null,U={};const D=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),R=new Ve().fromArray(D),$=new Ve().fromArray(I);function at(j,St,xt,ut){const wt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(j,jt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<xt;se++)n&&(j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY)?i.texImage3D(St,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(St+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return jt}const et={};et[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),u.setClear(0),K(i.DEPTH_TEST),h.setFunc(cs),At(!1),Wt(ka),K(i.CULL_FACE),ct(ei);function K(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function ot(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function ht(j,St){return f[j]!==St?(i.bindFramebuffer(j,St),f[j]=St,n&&(j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=St),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=St)),!0):!1}function q(j,St){let xt=g,ut=!1;if(j)if(xt=v.get(St),xt===void 0&&(xt=[],v.set(St,xt)),j.isWebGLMultipleRenderTargets){const wt=j.texture;if(xt.length!==wt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,se=wt.length;jt<se;jt++)xt[jt]=i.COLOR_ATTACHMENT0+jt;xt.length=wt.length,ut=!0}}else xt[0]!==i.COLOR_ATTACHMENT0&&(xt[0]=i.COLOR_ATTACHMENT0,ut=!0);else xt[0]!==i.BACK&&(xt[0]=i.BACK,ut=!0);ut&&(e.isWebGL2?i.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function Lt(j){return m!==j?(i.useProgram(j),m=j,!0):!1}const ft={[di]:i.FUNC_ADD,[Pc]:i.FUNC_SUBTRACT,[Lc]:i.FUNC_REVERSE_SUBTRACT};if(n)ft[ja]=i.MIN,ft[$a]=i.MAX;else{const j=t.get("EXT_blend_minmax");j!==null&&(ft[ja]=j.MIN_EXT,ft[$a]=j.MAX_EXT)}const it={[Ic]:i.ZERO,[Dc]:i.ONE,[Nc]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[Vc]:i.SRC_ALPHA_SATURATE,[Oc]:i.DST_COLOR,[Fc]:i.DST_ALPHA,[Uc]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[zc]:i.ONE_MINUS_DST_COLOR,[Bc]:i.ONE_MINUS_DST_ALPHA,[Hc]:i.CONSTANT_COLOR,[Gc]:i.ONE_MINUS_CONSTANT_COLOR,[Wc]:i.CONSTANT_ALPHA,[kc]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(j,St,xt,ut,wt,jt,se,ce,lt,st){if(j===ei){p===!0&&(ot(i.BLEND),p=!1);return}if(p===!1&&(K(i.BLEND),p=!0),j!==Cc){if(j!==_||st!==P){if((y!==di||T!==di)&&(i.blendEquation(i.FUNC_ADD),y=di,T=di),st)switch(j){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,M=null,C=null,F=null,E.set(0,0,0),w=0,_=j,P=st}return}wt=wt||St,jt=jt||xt,se=se||ut,(St!==y||wt!==T)&&(i.blendEquationSeparate(ft[St],ft[wt]),y=St,T=wt),(xt!==x||ut!==M||jt!==C||se!==F)&&(i.blendFuncSeparate(it[xt],it[ut],it[jt],it[se]),x=xt,M=ut,C=jt,F=se),(ce.equals(E)===!1||lt!==w)&&(i.blendColor(ce.r,ce.g,ce.b,lt),E.copy(ce),w=lt),_=j,P=!1}function Zt(j,St){j.side===yn?ot(i.CULL_FACE):K(i.CULL_FACE);let xt=j.side===$e;St&&(xt=!xt),At(xt),j.blending===qi&&j.transparent===!1?ct(ei):ct(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),o.setMask(j.colorWrite);const ut=j.stencilWrite;u.setTest(ut),ut&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ee(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(j){W!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),W=j)}function Wt(j){j!==Tc?(K(i.CULL_FACE),j!==k&&(j===ka?i.cullFace(i.BACK):j===Rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),k=j}function Mt(j){j!==N&&(O&&i.lineWidth(j),N=j)}function ee(j,St,xt){j?(K(i.POLYGON_OFFSET_FILL),(H!==St||nt!==xt)&&(i.polygonOffset(St,xt),H=St,nt=xt)):ot(i.POLYGON_OFFSET_FILL)}function ie(j){j?K(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function L(j){j===void 0&&(j=i.TEXTURE0+B-1),b!==j&&(i.activeTexture(j),b=j)}function A(j,St,xt){xt===void 0&&(b===null?xt=i.TEXTURE0+B-1:xt=b);let ut=U[xt];ut===void 0&&(ut={type:void 0,texture:void 0},U[xt]=ut),(ut.type!==j||ut.texture!==St)&&(b!==xt&&(i.activeTexture(xt),b=xt),i.bindTexture(j,St||et[j]),ut.type=j,ut.texture=St)}function J(){const j=U[b];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function vt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function yt(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function V(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Jt(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qt(j){R.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),R.copy(j))}function Yt(j){$.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),$.copy(j))}function kt(j,St){let xt=l.get(St);xt===void 0&&(xt=new WeakMap,l.set(St,xt));let ut=xt.get(j);ut===void 0&&(ut=i.getUniformBlockIndex(St,j.name),xt.set(j,ut))}function Ut(j,St){const ut=l.get(St).get(j);c.get(St)!==ut&&(i.uniformBlockBinding(St,ut,j.__bindingPointIndex),c.set(St,ut))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},b=null,U={},f={},v=new WeakMap,g=[],m=null,p=!1,_=null,y=null,x=null,M=null,T=null,C=null,F=null,E=new he(0,0,0),w=0,P=!1,W=null,k=null,N=null,H=null,nt=null,R.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),h.reset(),u.reset()}return{buffers:{color:o,depth:h,stencil:u},enable:K,disable:ot,bindFramebuffer:ht,drawBuffers:q,useProgram:Lt,setBlending:ct,setMaterial:Zt,setFlipSided:At,setCullFace:Wt,setLineWidth:Mt,setPolygonOffset:ee,setScissorTest:ie,activeTexture:L,bindTexture:A,unbindTexture:J,compressedTexImage2D:vt,compressedTexImage3D:dt,texImage2D:pt,texImage3D:Jt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:V,texStorage3D:Et,texSubImage2D:yt,texSubImage3D:Gt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Nt,scissor:qt,viewport:Yt,reset:re}}function Bm(i,t,e,n,s,r,a){const o=s.isWebGL2,h=s.maxTextures,u=s.maxCubemapSize,c=s.maxTextureSize,l=s.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,A){return p?new OffscreenCanvas(L,A):Sr("canvas")}function y(L,A,J,vt){let dt=1;if((L.width>vt||L.height>vt)&&(dt=vt/Math.max(L.width,L.height)),dt<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const yt=A?ps:Math.floor,Gt=yt(dt*L.width),bt=yt(dt*L.height);g===void 0&&(g=_(Gt,bt));const Nt=J?_(Gt,bt):g;return Nt.width=Gt,Nt.height=bt,Nt.getContext("2d").drawImage(L,0,0,Gt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Gt+"x"+bt+")."),Nt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return _a(L.width)&&_a(L.height)}function M(L){return o?!1:L.wrapS!==pn||L.wrapT!==pn||L.minFilter!==De&&L.minFilter!==an}function T(L,A){return L.generateMipmaps&&A&&L.minFilter!==De&&L.minFilter!==an}function C(L){i.generateMipmap(L)}function F(L,A,J,vt,dt=!1){if(o===!1)return A;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let yt=A;if(A===i.RED&&(J===i.FLOAT&&(yt=i.R32F),J===i.HALF_FLOAT&&(yt=i.R16F),J===i.UNSIGNED_BYTE&&(yt=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(yt=i.R8UI),J===i.UNSIGNED_SHORT&&(yt=i.R16UI),J===i.UNSIGNED_INT&&(yt=i.R32UI),J===i.BYTE&&(yt=i.R8I),J===i.SHORT&&(yt=i.R16I),J===i.INT&&(yt=i.R32I)),A===i.RG&&(J===i.FLOAT&&(yt=i.RG32F),J===i.HALF_FLOAT&&(yt=i.RG16F),J===i.UNSIGNED_BYTE&&(yt=i.RG8)),A===i.RGBA){const Gt=dt?hs:ge.getTransfer(vt);J===i.FLOAT&&(yt=i.RGBA32F),J===i.HALF_FLOAT&&(yt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(yt=Gt===ye?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(yt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(yt=i.RGB5_A1)}return(yt===i.R16F||yt===i.R32F||yt===i.RG16F||yt===i.RG32F||yt===i.RGBA16F||yt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function E(L,A,J){return T(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==De&&L.minFilter!==an?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){return L===De||L===Ka||L===Rs?i.NEAREST:i.LINEAR}function P(L){const A=L.target;A.removeEventListener("dispose",P),k(A),A.isVideoTexture&&v.delete(A)}function W(L){const A=L.target;A.removeEventListener("dispose",W),H(A)}function k(L){const A=n.get(L);if(A.__webglInit===void 0)return;const J=L.source,vt=m.get(J);if(vt){const dt=vt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&N(L),Object.keys(vt).length===0&&m.delete(J)}n.remove(L)}function N(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const J=L.source,vt=m.get(J);delete vt[A.__cacheKey],a.memory.textures--}function H(L){const A=L.texture,J=n.get(L),vt=n.get(A);if(vt.__webglTexture!==void 0&&(i.deleteTexture(vt.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(J.__webglFramebuffer[dt]))for(let yt=0;yt<J.__webglFramebuffer[dt].length;yt++)i.deleteFramebuffer(J.__webglFramebuffer[dt][yt]);else i.deleteFramebuffer(J.__webglFramebuffer[dt]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[dt])}else{if(Array.isArray(J.__webglFramebuffer))for(let dt=0;dt<J.__webglFramebuffer.length;dt++)i.deleteFramebuffer(J.__webglFramebuffer[dt]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let dt=0;dt<J.__webglColorRenderbuffer.length;dt++)J.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[dt]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let dt=0,yt=A.length;dt<yt;dt++){const Gt=n.get(A[dt]);Gt.__webglTexture&&(i.deleteTexture(Gt.__webglTexture),a.memory.textures--),n.remove(A[dt])}n.remove(A),n.remove(L)}let nt=0;function B(){nt=0}function O(){const L=nt;return L>=h&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+h),nt+=1,L}function Y(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function X(L,A){const J=n.get(L);if(L.isVideoTexture&&ee(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,L,A);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function b(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function U(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){K(J,L,A);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function D(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){ot(J,L,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const I={[va]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},R={[De]:i.NEAREST,[Ka]:i.NEAREST_MIPMAP_NEAREST,[Rs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[sh]:i.LINEAR_MIPMAP_NEAREST,[xr]:i.LINEAR_MIPMAP_LINEAR},$={[_h]:i.NEVER,[bh]:i.ALWAYS,[yh]:i.LESS,[Mh]:i.LEQUAL,[xh]:i.EQUAL,[wh]:i.GEQUAL,[Eh]:i.GREATER,[Sh]:i.NOTEQUAL};function at(L,A,J){if(J?(i.texParameteri(L,i.TEXTURE_WRAP_S,I[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,I[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,I[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,R[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,R[A.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==pn||A.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,w(A.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==De&&A.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(A.magFilter===De||A.minFilter!==Rs&&A.minFilter!==xr||A.type===Qn&&t.has("OES_texture_float_linear")===!1||o===!1&&A.type===Mr&&t.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(L,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function et(L,A){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",P));const vt=A.source;let dt=m.get(vt);dt===void 0&&(dt={},m.set(vt,dt));const yt=Y(A);if(yt!==L.__cacheKey){dt[yt]===void 0&&(dt[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),dt[yt].usedTimes++;const Gt=dt[L.__cacheKey];Gt!==void 0&&(dt[L.__cacheKey].usedTimes--,Gt.usedTimes===0&&N(A)),L.__cacheKey=yt,L.__webglTexture=dt[yt].texture}return J}function K(L,A,J){let vt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(vt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(vt=i.TEXTURE_3D);const dt=et(L,A),yt=A.source;e.bindTexture(vt,L.__webglTexture,i.TEXTURE0+J);const Gt=n.get(yt);if(yt.version!==Gt.__version||dt===!0){e.activeTexture(i.TEXTURE0+J);const bt=ge.getPrimaries(ge.workingColorSpace),Nt=A.colorSpace===ln?null:ge.getPrimaries(A.colorSpace),V=A.colorSpace===ln||bt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const Et=M(A)&&x(A.image)===!1;let pt=y(A.image,Et,!1,c);pt=ie(A,pt);const Jt=x(pt)||o,qt=r.convert(A.format,A.colorSpace);let Yt=r.convert(A.type),kt=F(A.internalFormat,qt,Yt,A.colorSpace,A.isVideoTexture);at(vt,A,Jt);let Ut;const re=A.mipmaps,j=o&&A.isVideoTexture!==!0,St=Gt.__version===void 0||dt===!0,xt=E(A,pt,Jt);if(A.isDepthTexture)kt=i.DEPTH_COMPONENT,o?A.type===Qn?kt=i.DEPTH_COMPONENT32F:A.type===Jn?kt=i.DEPTH_COMPONENT24:A.type===pi?kt=i.DEPTH24_STENCIL8:kt=i.DEPTH_COMPONENT16:A.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===mi&&kt===i.DEPTH_COMPONENT&&A.type!==Ta&&A.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Jn,Yt=r.convert(A.type)),A.format===Ji&&kt===i.DEPTH_COMPONENT&&(kt=i.DEPTH_STENCIL,A.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=pi,Yt=r.convert(A.type))),St&&(j?e.texStorage2D(i.TEXTURE_2D,1,kt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,kt,pt.width,pt.height,0,qt,Yt,null));else if(A.isDataTexture)if(re.length>0&&Jt){j&&St&&e.texStorage2D(i.TEXTURE_2D,xt,kt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],j?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,kt,Ut.width,Ut.height,0,qt,Yt,Ut.data);A.generateMipmaps=!1}else j?(St&&e.texStorage2D(i.TEXTURE_2D,xt,kt,pt.width,pt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,qt,Yt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,pt.width,pt.height,0,qt,Yt,pt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,kt,re[0].width,re[0].height,pt.depth);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],A.format!==mn?qt!==null?j?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Ut.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,kt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Ut.width,Ut.height,pt.depth,qt,Yt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,kt,Ut.width,Ut.height,pt.depth,0,qt,Yt,Ut.data)}else{j&&St&&e.texStorage2D(i.TEXTURE_2D,xt,kt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],A.format!==mn?qt!==null?j?e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ut.width,Ut.height,qt,Yt,Ut.data):e.texImage2D(i.TEXTURE_2D,ut,kt,Ut.width,Ut.height,0,qt,Yt,Ut.data)}else if(A.isDataArrayTexture)j?(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,kt,pt.width,pt.height,pt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(A.isData3DTexture)j?(St&&e.texStorage3D(i.TEXTURE_3D,xt,kt,pt.width,pt.height,pt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,qt,Yt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,pt.width,pt.height,pt.depth,0,qt,Yt,pt.data);else if(A.isFramebufferTexture){if(St)if(j)e.texStorage2D(i.TEXTURE_2D,xt,kt,pt.width,pt.height);else{let ut=pt.width,wt=pt.height;for(let jt=0;jt<xt;jt++)e.texImage2D(i.TEXTURE_2D,jt,kt,ut,wt,0,qt,Yt,null),ut>>=1,wt>>=1}}else if(re.length>0&&Jt){j&&St&&e.texStorage2D(i.TEXTURE_2D,xt,kt,re[0].width,re[0].height);for(let ut=0,wt=re.length;ut<wt;ut++)Ut=re[ut],j?e.texSubImage2D(i.TEXTURE_2D,ut,0,0,qt,Yt,Ut):e.texImage2D(i.TEXTURE_2D,ut,kt,qt,Yt,Ut);A.generateMipmaps=!1}else j?(St&&e.texStorage2D(i.TEXTURE_2D,xt,kt,pt.width,pt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,Yt,pt)):e.texImage2D(i.TEXTURE_2D,0,kt,qt,Yt,pt);T(A,Jt)&&C(vt),Gt.__version=yt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ot(L,A,J){if(A.image.length!==6)return;const vt=et(L,A),dt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const yt=n.get(dt);if(dt.version!==yt.__version||vt===!0){e.activeTexture(i.TEXTURE0+J);const Gt=ge.getPrimaries(ge.workingColorSpace),bt=A.colorSpace===ln?null:ge.getPrimaries(A.colorSpace),Nt=A.colorSpace===ln||Gt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const V=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,pt=[];for(let ut=0;ut<6;ut++)!V&&!Et?pt[ut]=y(A.image[ut],!1,!0,u):pt[ut]=Et?A.image[ut].image:A.image[ut],pt[ut]=ie(A,pt[ut]);const Jt=pt[0],qt=x(Jt)||o,Yt=r.convert(A.format,A.colorSpace),kt=r.convert(A.type),Ut=F(A.internalFormat,Yt,kt,A.colorSpace),re=o&&A.isVideoTexture!==!0,j=yt.__version===void 0||vt===!0;let St=E(A,Jt,qt);at(i.TEXTURE_CUBE_MAP,A,qt);let xt;if(V){re&&j&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ut,Jt.width,Jt.height);for(let ut=0;ut<6;ut++){xt=pt[ut].mipmaps;for(let wt=0;wt<xt.length;wt++){const jt=xt[wt];A.format!==mn?Yt!==null?re?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,jt.width,jt.height,Yt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,0,0,jt.width,jt.height,Yt,kt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt,Ut,jt.width,jt.height,0,Yt,kt,jt.data)}}}else{xt=A.mipmaps,re&&j&&(xt.length>0&&St++,e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Ut,pt[0].width,pt[0].height));for(let ut=0;ut<6;ut++)if(Et){re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,pt[ut].width,pt[ut].height,Yt,kt,pt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,pt[ut].width,pt[ut].height,0,Yt,kt,pt[ut].data);for(let wt=0;wt<xt.length;wt++){const se=xt[wt].image[ut].image;re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,se.width,se.height,Yt,kt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,se.width,se.height,0,Yt,kt,se.data)}}else{re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Yt,kt,pt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Ut,Yt,kt,pt[ut]);for(let wt=0;wt<xt.length;wt++){const jt=xt[wt];re?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,0,0,Yt,kt,jt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,wt+1,Ut,Yt,kt,jt.image[ut])}}}T(A,qt)&&C(i.TEXTURE_CUBE_MAP),yt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ht(L,A,J,vt,dt,yt){const Gt=r.convert(J.format,J.colorSpace),bt=r.convert(J.type),Nt=F(J.internalFormat,Gt,bt,J.colorSpace);if(!n.get(A).__hasExternalTextures){const Et=Math.max(1,A.width>>yt),pt=Math.max(1,A.height>>yt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,yt,Nt,Et,pt,A.depth,0,Gt,bt,null):e.texImage2D(dt,yt,Nt,Et,pt,0,Gt,bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,n.get(J).__webglTexture,0,Wt(A)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,n.get(J).__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function q(L,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let vt=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Mt(A)){const dt=A.depthTexture;dt&&dt.isDepthTexture&&(dt.type===Qn?vt=i.DEPTH_COMPONENT32F:dt.type===Jn&&(vt=i.DEPTH_COMPONENT24));const yt=Wt(A);Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,vt,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,vt,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const vt=Wt(A);J&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,A.width,A.height):Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const vt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let dt=0;dt<vt.length;dt++){const yt=vt[dt],Gt=r.convert(yt.format,yt.colorSpace),bt=r.convert(yt.type),Nt=F(yt.internalFormat,Gt,bt,yt.colorSpace),V=Wt(A);J&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,V,Nt,A.width,A.height):Mt(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V,Nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const vt=n.get(A.depthTexture).__webglTexture,dt=Wt(A);if(A.depthTexture.format===mi)Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(A.depthTexture.format===Ji)Mt(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ft(L){const A=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Lt(A.__webglFramebuffer,L)}else if(J){A.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[vt]),A.__webglDepthbuffer[vt]=i.createRenderbuffer(),q(A.__webglDepthbuffer[vt],L,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),q(A.__webglDepthbuffer,L,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,A,J){const vt=n.get(L);A!==void 0&&ht(vt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ft(L)}function ct(L){const A=L.texture,J=n.get(L),vt=n.get(A);L.addEventListener("dispose",W),L.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture()),vt.__version=A.version,a.memory.textures++);const dt=L.isWebGLCubeRenderTarget===!0,yt=L.isWebGLMultipleRenderTargets===!0,Gt=x(L)||o;if(dt){J.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[bt]=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)J.__webglFramebuffer[bt][Nt]=i.createFramebuffer()}else J.__webglFramebuffer[bt]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let bt=0;bt<A.mipmaps.length;bt++)J.__webglFramebuffer[bt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(yt)if(s.drawBuffers){const bt=L.texture;for(let Nt=0,V=bt.length;Nt<V;Nt++){const Et=n.get(bt[Nt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Mt(L)===!1){const bt=yt?A:[A];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const V=bt[Nt];J.__webglColorRenderbuffer[Nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Nt]);const Et=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),Jt=F(V.internalFormat,Et,pt,V.colorSpace,L.isXRRenderTarget===!0),qt=Wt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Jt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),q(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),at(i.TEXTURE_CUBE_MAP,A,Gt);for(let bt=0;bt<6;bt++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ht(J.__webglFramebuffer[bt][Nt],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Nt);else ht(J.__webglFramebuffer[bt],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);T(A,Gt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){const bt=L.texture;for(let Nt=0,V=bt.length;Nt<V;Nt++){const Et=bt[Nt],pt=n.get(Et);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),at(i.TEXTURE_2D,Et,Gt),ht(J.__webglFramebuffer,L,Et,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,0),T(Et,Gt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let bt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?bt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(bt,vt.__webglTexture),at(bt,A,Gt),o&&A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ht(J.__webglFramebuffer[Nt],L,A,i.COLOR_ATTACHMENT0,bt,Nt);else ht(J.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,bt,0);T(A,Gt)&&C(bt),e.unbindTexture()}L.depthBuffer&&ft(L)}function Zt(L){const A=x(L)||o,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let vt=0,dt=J.length;vt<dt;vt++){const yt=J[vt];if(T(yt,A)){const Gt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(yt).__webglTexture;e.bindTexture(Gt,bt),C(Gt),e.unbindTexture()}}}function At(L){if(o&&L.samples>0&&Mt(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,vt=L.height;let dt=i.COLOR_BUFFER_BIT;const yt=[],Gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(L),Nt=L.isWebGLMultipleRenderTargets===!0;if(Nt)for(let V=0;V<A.length;V++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let V=0;V<A.length;V++){yt.push(i.COLOR_ATTACHMENT0+V),L.depthBuffer&&yt.push(Gt);const Et=bt.__ignoreDepthValues!==void 0?bt.__ignoreDepthValues:!1;if(Et===!1&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Nt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[V]),Et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Gt])),Nt){const pt=n.get(A[V]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,J,vt,0,0,J,vt,dt,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Nt)for(let V=0;V<A.length;V++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,bt.__webglColorRenderbuffer[V]);const Et=n.get(A[V]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}}function Wt(L){return Math.min(l,L.samples)}function Mt(L){const A=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ee(L){const A=a.render.frame;v.get(L)!==A&&(v.set(L,A),L.update())}function ie(L,A){const J=L.colorSpace,vt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===ga||J!==Vn&&J!==ln&&(ge.getTransfer(J)===ye?o===!1?t.has("EXT_sRGB")===!0&&vt===mn?(L.format=ga,L.minFilter=an,L.generateMipmaps=!1):A=Wl.sRGBToLinear(A):(vt!==mn||dt!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=b,this.setTexture3D=U,this.setTextureCube=D,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Mt}function Om(i,t,e){const n=e.isWebGL2;function s(r,a=ln){let o;const h=ge.getTransfer(a);if(r===ii)return i.UNSIGNED_BYTE;if(r===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ah)return i.BYTE;if(r===oh)return i.SHORT;if(r===Ta)return i.UNSIGNED_SHORT;if(r===Ul)return i.INT;if(r===Jn)return i.UNSIGNED_INT;if(r===Qn)return i.FLOAT;if(r===Mr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===lh)return i.ALPHA;if(r===mn)return i.RGBA;if(r===ch)return i.LUMINANCE;if(r===hh)return i.LUMINANCE_ALPHA;if(r===mi)return i.DEPTH_COMPONENT;if(r===Ji)return i.DEPTH_STENCIL;if(r===ga)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===uh)return i.RED;if(r===Ol)return i.RED_INTEGER;if(r===dh)return i.RG;if(r===zl)return i.RG_INTEGER;if(r===Vl)return i.RGBA_INTEGER;if(r===Cs||r===Ps||r===Ls||r===Is)if(h===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ps)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ls)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Is)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ja||r===Qa||r===to)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===to)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===eo||r===no)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===eo)return h===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===no)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===io||r===ro||r===so||r===ao||r===oo||r===lo||r===co||r===ho||r===uo||r===fo||r===po||r===mo||r===vo||r===go)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===io)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ro)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===so)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ao)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oo)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lo)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===co)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ho)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uo)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fo)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===po)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mo)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vo)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===go)return h===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ds||r===_o||r===yo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ds)return h===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_o)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ph||r===xo||r===Mo||r===Eo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ds)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class zm extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ti extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vm={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(u,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=c.position.distanceTo(l.position),f=.02,v=.005;u.inputState.pinching&&d>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hm extends Ke{constructor(t,e,n,s,r,a,o,h,u,c){if(c=c!==void 0?c:mi,c!==mi&&c!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===mi&&(n=Jn),n===void 0&&c===Ji&&(n=pi),super(null,s,r,a,o,h,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=h!==void 0?h:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gm extends wi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",h=1,u=null,c=null,l=null,d=null,f=null,v=null;const g=e.getContextAttributes();let m=null,p=null;const _=[],y=[],x=new on;x.layers.enable(1),x.viewport=new Ve;const M=new on;M.layers.enable(2),M.viewport=new Ve;const T=[x,M],C=new zm;C.layers.enable(1),C.layers.enable(2);let F=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let U=_[b];return U===void 0&&(U=new na,_[b]=U),U.getTargetRaySpace()},this.getControllerGrip=function(b){let U=_[b];return U===void 0&&(U=new na,_[b]=U),U.getGripSpace()},this.getHand=function(b){let U=_[b];return U===void 0&&(U=new na,_[b]=U),U.getHandSpace()};function w(b){const U=y.indexOf(b.inputSource);if(U===-1)return;const D=_[U];D!==void 0&&(D.update(b.inputSource,b.frame,u||a),D.dispatchEvent({type:b.type,data:b.inputSource}))}function P(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",W);for(let b=0;b<_.length;b++){const U=y[b];U!==null&&(y[b]=null,_[b].disconnect(U))}F=null,E=null,t.setRenderTarget(m),f=null,d=null,l=null,s=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(b){u=b},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(b){if(s=b,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",P),s.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:f}),p=new _i(f.framebufferWidth,f.framebufferHeight,{format:mn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,D=null,I=null;g.depth&&(I=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=g.stencil?Ji:mi,D=g.stencil?pi:Jn);const R={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(R),s.updateRenderState({layers:[d]}),p=new _i(d.textureWidth,d.textureHeight,{format:mn,type:ii,depthTexture:new Hm(d.textureWidth,d.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const $=t.properties.get(p);$.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await s.requestReferenceSpace(o),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function W(b){for(let U=0;U<b.removed.length;U++){const D=b.removed[U],I=y.indexOf(D);I>=0&&(y[I]=null,_[I].disconnect(D))}for(let U=0;U<b.added.length;U++){const D=b.added[U];let I=y.indexOf(D);if(I===-1){for(let $=0;$<_.length;$++)if($>=y.length){y.push(D),I=$;break}else if(y[$]===null){y[$]=D,I=$;break}if(I===-1)break}const R=_[I];R&&R.connect(D)}}const k=new tt,N=new tt;function H(b,U,D){k.setFromMatrixPosition(U.matrixWorld),N.setFromMatrixPosition(D.matrixWorld);const I=k.distanceTo(N),R=U.projectionMatrix.elements,$=D.projectionMatrix.elements,at=R[14]/(R[10]-1),et=R[14]/(R[10]+1),K=(R[9]+1)/R[5],ot=(R[9]-1)/R[5],ht=(R[8]-1)/R[0],q=($[8]+1)/$[0],Lt=at*ht,ft=at*q,it=I/(-ht+q),ct=it*-ht;U.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(ct),b.translateZ(it),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert();const Zt=at+it,At=et+it,Wt=Lt-ct,Mt=ft+(I-ct),ee=K*et/At*Zt,ie=ot*et/At*Zt;b.projectionMatrix.makePerspective(Wt,Mt,ee,ie,Zt,At),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}function nt(b,U){U===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(U.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(s===null)return;C.near=M.near=x.near=b.near,C.far=M.far=x.far=b.far,(F!==C.near||E!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,E=C.far);const U=b.parent,D=C.cameras;nt(C,U);for(let I=0;I<D.length;I++)nt(D[I],U);D.length===2?H(C,x,M):C.projectionMatrix.copy(x.projectionMatrix),B(b,C,U)};function B(b,U,D){D===null?b.matrix.copy(U.matrixWorld):(b.matrix.copy(D.matrixWorld),b.matrix.invert(),b.matrix.multiply(U.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(U.projectionMatrix),b.projectionMatrixInverse.copy(U.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=Er*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(b){h=b,d!==null&&(d.fixedFoveation=b),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=b)};let O=null;function Y(b,U){if(c=U.getViewerPose(u||a),v=U,c!==null){const D=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let I=!1;D.length!==C.cameras.length&&(C.cameras.length=0,I=!0);for(let R=0;R<D.length;R++){const $=D[R];let at=null;if(f!==null)at=f.getViewport($);else{const K=l.getViewSubImage(d,$);at=K.viewport,R===0&&(t.setRenderTargetTextures(p,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(p))}let et=T[R];et===void 0&&(et=new on,et.layers.enable(R),et.viewport=new Ve,T[R]=et),et.matrix.fromArray($.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray($.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(at.x,at.y,at.width,at.height),R===0&&(C.matrix.copy(et.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),I===!0&&C.cameras.push(et)}}for(let D=0;D<_.length;D++){const I=y[D],R=_[D];I!==null&&R!==void 0&&R.update(I,U,u||a)}O&&O(b,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),v=null}const X=new Ql;X.setAnimationLoop(Y),this.setAnimationLoop=function(b){O=b},this.dispose=function(){}}}function Wm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),l(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?h(m,p,_,y):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function l(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function km(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function u(_,y){let x=s[_.id];x===void 0&&(v(_),x=c(_),s[_.id]=x,_.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(_,M);const T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function c(_){const y=l();_.__bindingPointIndex=y;const x=i.createBuffer(),M=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],x=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=x.length;T<C;T++){const F=x[T];if(f(F,T,M)===!0){const E=F.__offset,w=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let W=0;W<w.length;W++){const k=w[W],N=g(k);typeof k=="number"?(F.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,E+P,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=k.elements[0],F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=k.elements[0],F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=k.elements[0]):(k.toArray(F.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,F.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x){const M=_.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const T=Array.isArray(M)?M:[M],C=[];for(let F=0;F<T.length;F++)C.push(T[F].clone());x[y]=C}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const T=Array.isArray(x[y])?x[y]:[x[y]],C=Array.isArray(M)?M:[M];for(let F=0;F<T.length;F++){const E=T[F];if(E.equals(C[F])===!1)return E.copy(C[F]),!0}}return!1}function v(_){const y=_.uniforms;let x=0;const M=16;let T=0;for(let C=0,F=y.length;C<F;C++){const E=y[C],w={boundary:0,storage:0},P=Array.isArray(E.value)?E.value:[E.value];for(let W=0,k=P.length;W<k;W++){const N=P[W],H=g(N);w.boundary+=H.boundary,w.storage+=H.storage}if(E.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,C>0){T=x%M;const W=M-T;T!==0&&W-w.boundary<0&&(x+=M-T,E.__offset=x)}x+=w.storage}return T=x%M,T>0&&(x+=M-T),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:h,update:u,dispose:p}}class sc{constructor(t={}){const{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:l=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this._useLegacyLights=!1,this.toneMapping=ni,this.toneMappingExposure=1;const y=this;let x=!1,M=0,T=0,C=null,F=-1,E=null;const w=new Ve,P=new Ve;let W=null;const k=new he(0);let N=0,H=e.width,nt=e.height,B=1,O=null,Y=null;const X=new Ve(0,0,H,nt),b=new Ve(0,0,H,nt);let U=!1;const D=new Ia;let I=!1,R=!1,$=null;const at=new Pe,et=new ae,K=new tt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return C===null?B:1}let q=n;function Lt(S,G){for(let Z=0;Z<S.length;Z++){const z=S[Z],Q=e.getContext(z,G);if(Q!==null)return Q}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",re,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",St,!1),q===null){const G=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&G.shift(),q=Lt(G,S),q===null)throw Lt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ft,it,ct,Zt,At,Wt,Mt,ee,ie,L,A,J,vt,dt,yt,Gt,bt,Nt,V,Et,pt,Jt,qt,Yt;function kt(){ft=new tp(q),it=new jf(q,ft,t),ft.init(it),Jt=new Om(q,ft,it),ct=new Fm(q,ft,it),Zt=new ip(q),At=new Em,Wt=new Bm(q,ft,ct,At,it,Jt,Zt),Mt=new Kf(y),ee=new Qf(y),ie=new du(q,it),qt=new qf(q,ft,ie,it),L=new ep(q,ie,Zt,qt),A=new op(q,L,ie,Zt),V=new ap(q,it,Wt),Gt=new $f(At),J=new Mm(y,Mt,ee,ft,it,qt,Gt),vt=new Wm(y,At),dt=new wm,yt=new Pm(ft,it),Nt=new Xf(y,Mt,ee,ct,A,d,h),bt=new Um(y,A,it),Yt=new km(q,Zt,it,ct),Et=new Yf(q,ft,Zt,it),pt=new np(q,ft,Zt,it),Zt.programs=J.programs,y.capabilities=it,y.extensions=ft,y.properties=At,y.renderLists=dt,y.shadowMap=bt,y.state=ct,y.info=Zt}kt();const Ut=new Gm(y,q);this.xr=Ut,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const S=ft.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ft.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(H,nt,!1))},this.getSize=function(S){return S.set(H,nt)},this.setSize=function(S,G,Z=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,nt=G,e.width=Math.floor(S*B),e.height=Math.floor(G*B),Z===!0&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(H*B,nt*B).floor()},this.setDrawingBufferSize=function(S,G,Z){H=S,nt=G,B=Z,e.width=Math.floor(S*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(w)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,G,Z,z){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,G,Z,z),ct.viewport(w.copy(X).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(b)},this.setScissor=function(S,G,Z,z){S.isVector4?b.set(S.x,S.y,S.z,S.w):b.set(S,G,Z,z),ct.scissor(P.copy(b).multiplyScalar(B).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(S){ct.setScissorTest(U=S)},this.setOpaqueSort=function(S){O=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(S=!0,G=!0,Z=!0){let z=0;if(S){let Q=!1;if(C!==null){const _t=C.texture.format;Q=_t===Vl||_t===zl||_t===Ol}if(Q){const _t=C.texture.type,zt=_t===ii||_t===Jn||_t===Ta||_t===pi||_t===Fl||_t===Bl,It=Nt.getClearColor(),Ot=Nt.getClearAlpha(),Ct=It.r,Qt=It.g,te=It.b;zt?(f[0]=Ct,f[1]=Qt,f[2]=te,f[3]=Ot,q.clearBufferuiv(q.COLOR,0,f)):(v[0]=Ct,v[1]=Qt,v[2]=te,v[3]=Ot,q.clearBufferiv(q.COLOR,0,v))}else z|=q.COLOR_BUFFER_BIT}G&&(z|=q.DEPTH_BUFFER_BIT),Z&&(z|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",re,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",St,!1),dt.dispose(),yt.dispose(),At.dispose(),Mt.dispose(),ee.dispose(),A.dispose(),qt.dispose(),Yt.dispose(),J.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",lt),Ut.removeEventListener("sessionend",st),$&&($.dispose(),$=null),mt.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Zt.autoReset,G=bt.enabled,Z=bt.autoUpdate,z=bt.needsUpdate,Q=bt.type;kt(),Zt.autoReset=S,bt.enabled=G,bt.autoUpdate=Z,bt.needsUpdate=z,bt.type=Q}function St(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function xt(S){const G=S.target;G.removeEventListener("dispose",xt),ut(G)}function ut(S){wt(S),At.remove(S)}function wt(S){const G=At.get(S).programs;G!==void 0&&(G.forEach(function(Z){J.releaseProgram(Z)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,Z,z,Q,_t){G===null&&(G=ot);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Xt(S,G,Z,z,Q);ct.setMaterial(z,zt);let Ot=Z.index,Ct=1;if(z.wireframe===!0){if(Ot=L.getWireframeAttribute(Z),Ot===void 0)return;Ct=2}const Qt=Z.drawRange,te=Z.attributes.position;let fe=Qt.start*Ct,Se=(Qt.start+Qt.count)*Ct;_t!==null&&(fe=Math.max(fe,_t.start*Ct),Se=Math.min(Se,(_t.start+_t.count)*Ct)),Ot!==null?(fe=Math.max(fe,0),Se=Math.min(Se,Ot.count)):te!=null&&(fe=Math.max(fe,0),Se=Math.min(Se,te.count));const me=Se-fe;if(me<0||me===1/0)return;qt.setup(Q,z,It,Z,Ot);let de,ve=Et;if(Ot!==null&&(de=ie.get(Ot),ve=pt,ve.setIndex(de)),Q.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*ht()),ve.setMode(q.LINES)):ve.setMode(q.TRIANGLES);else if(Q.isLine){let $t=z.linewidth;$t===void 0&&($t=1),ct.setLineWidth($t*ht()),Q.isLineSegments?ve.setMode(q.LINES):Q.isLineLoop?ve.setMode(q.LINE_LOOP):ve.setMode(q.LINE_STRIP)}else Q.isPoints?ve.setMode(q.POINTS):Q.isSprite&&ve.setMode(q.TRIANGLES);if(Q.isInstancedMesh)ve.renderInstances(fe,me,Q.count);else if(Z.isInstancedBufferGeometry){const $t=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Je=Math.min(Z.instanceCount,$t);ve.renderInstances(fe,me,Je)}else ve.render(fe,me)};function jt(S,G,Z){S.transparent===!0&&S.side===yn&&S.forceSinglePass===!1?(S.side=$e,S.needsUpdate=!0,rt(S,G,Z),S.side=ri,S.needsUpdate=!0,rt(S,G,Z),S.side=yn):rt(S,G,Z)}this.compile=function(S,G,Z=null){Z===null&&(Z=S),m=yt.get(Z),m.init(),_.push(m),Z.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),S!==Z&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(y._useLegacyLights);const z=new Set;return S.traverse(function(Q){const _t=Q.material;if(_t)if(Array.isArray(_t))for(let zt=0;zt<_t.length;zt++){const It=_t[zt];jt(It,Z,Q),z.add(It)}else jt(_t,Z,Q),z.add(_t)}),_.pop(),m=null,z},this.compileAsync=function(S,G,Z=null){const z=this.compile(S,G,Z);return new Promise(Q=>{function _t(){if(z.forEach(function(zt){At.get(zt).currentProgram.isReady()&&z.delete(zt)}),z.size===0){Q(S);return}setTimeout(_t,10)}ft.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let se=null;function ce(S){se&&se(S)}function lt(){mt.stop()}function st(){mt.start()}const mt=new Ql;mt.setAnimationLoop(ce),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(S){se=S,Ut.setAnimationLoop(S),S===null?mt.stop():mt.start()},Ut.addEventListener("sessionstart",lt),Ut.addEventListener("sessionend",st),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(G),G=Ut.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,G,C),m=yt.get(S,_.length),m.init(),_.push(m),at.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),D.setFromProjectionMatrix(at),R=this.localClippingEnabled,I=Gt.init(this.clippingPlanes,R),g=dt.get(S,p.length),g.init(),p.push(g),gt(S,G,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(O,Y),this.info.render.frame++,I===!0&&Gt.beginShadows();const Z=m.state.shadowsArray;if(bt.render(Z,S,G),I===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Nt.render(g,S),m.setupLights(y._useLegacyLights),G.isArrayCamera){const z=G.cameras;for(let Q=0,_t=z.length;Q<_t;Q++){const zt=z[Q];ne(g,S,zt,zt.viewport)}}else ne(g,S,G);C!==null&&(Wt.updateMultisampleRenderTarget(C),Wt.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,G),qt.resetDefaultState(),F=-1,E=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function gt(S,G,Z,z){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){z&&K.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);const zt=A.update(S),It=S.material;It.visible&&g.push(S,zt,It,Z,K.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||D.intersectsObject(S))){const zt=A.update(S),It=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),K.copy(S.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),K.copy(zt.boundingSphere.center)),K.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(It)){const Ot=zt.groups;for(let Ct=0,Qt=Ot.length;Ct<Qt;Ct++){const te=Ot[Ct],fe=It[te.materialIndex];fe&&fe.visible&&g.push(S,zt,fe,Z,K.z,te)}}else It.visible&&g.push(S,zt,It,Z,K.z,null)}}const _t=S.children;for(let zt=0,It=_t.length;zt<It;zt++)gt(_t[zt],G,Z,z)}function ne(S,G,Z,z){const Q=S.opaque,_t=S.transmissive,zt=S.transparent;m.setupLightsView(Z),I===!0&&Gt.setGlobalState(y.clippingPlanes,Z),_t.length>0&&Vt(Q,_t,G,Z),z&&ct.viewport(w.copy(z)),Q.length>0&&Tt(Q,G,Z),_t.length>0&&Tt(_t,G,Z),zt.length>0&&Tt(zt,G,Z),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Vt(S,G,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const _t=it.isWebGL2;$===null&&($=new _i(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?Mr:ii,minFilter:xr,samples:_t?4:0})),y.getDrawingBufferSize(et),_t?$.setSize(et.x,et.y):$.setSize(ps(et.x),ps(et.y));const zt=y.getRenderTarget();y.setRenderTarget($),y.getClearColor(k),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const It=y.toneMapping;y.toneMapping=ni,Tt(S,Z,z),Wt.updateMultisampleRenderTarget($),Wt.updateRenderTargetMipmap($);let Ot=!1;for(let Ct=0,Qt=G.length;Ct<Qt;Ct++){const te=G[Ct],fe=te.object,Se=te.geometry,me=te.material,de=te.group;if(me.side===yn&&fe.layers.test(z.layers)){const ve=me.side;me.side=$e,me.needsUpdate=!0,Ft(fe,Z,z,Se,me,de),me.side=ve,me.needsUpdate=!0,Ot=!0}}Ot===!0&&(Wt.updateMultisampleRenderTarget($),Wt.updateRenderTargetMipmap($)),y.setRenderTarget(zt),y.setClearColor(k,N),y.toneMapping=It}function Tt(S,G,Z){const z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,_t=S.length;Q<_t;Q++){const zt=S[Q],It=zt.object,Ot=zt.geometry,Ct=z===null?zt.material:z,Qt=zt.group;It.layers.test(Z.layers)&&Ft(It,G,Z,Ot,Ct,Qt)}}function Ft(S,G,Z,z,Q,_t){S.onBeforeRender(y,G,Z,z,Q,_t),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(y,G,Z,z,S,_t),Q.transparent===!0&&Q.side===yn&&Q.forceSinglePass===!1?(Q.side=$e,Q.needsUpdate=!0,y.renderBufferDirect(Z,G,z,Q,S,_t),Q.side=ri,Q.needsUpdate=!0,y.renderBufferDirect(Z,G,z,Q,S,_t),Q.side=yn):y.renderBufferDirect(Z,G,z,Q,S,_t),S.onAfterRender(y,G,Z,z,Q,_t)}function rt(S,G,Z){G.isScene!==!0&&(G=ot);const z=At.get(S),Q=m.state.lights,_t=m.state.shadowsArray,zt=Q.state.version,It=J.getParameters(S,Q.state,_t,G,Z),Ot=J.getProgramCacheKey(It);let Ct=z.programs;z.environment=S.isMeshStandardMaterial?G.environment:null,z.fog=G.fog,z.envMap=(S.isMeshStandardMaterial?ee:Mt).get(S.envMap||z.environment),Ct===void 0&&(S.addEventListener("dispose",xt),Ct=new Map,z.programs=Ct);let Qt=Ct.get(Ot);if(Qt!==void 0){if(z.currentProgram===Qt&&z.lightsStateVersion===zt)return Bt(S,It),Qt}else It.uniforms=J.getUniforms(S),S.onBuild(Z,It,y),S.onBeforeCompile(It,y),Qt=J.acquireProgram(It,Ot),Ct.set(Ot,Qt),z.uniforms=It.uniforms;const te=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(te.clippingPlanes=Gt.uniform),Bt(S,It),z.needsLights=Rt(S),z.lightsStateVersion=zt,z.needsLights&&(te.ambientLightColor.value=Q.state.ambient,te.lightProbe.value=Q.state.probe,te.directionalLights.value=Q.state.directional,te.directionalLightShadows.value=Q.state.directionalShadow,te.spotLights.value=Q.state.spot,te.spotLightShadows.value=Q.state.spotShadow,te.rectAreaLights.value=Q.state.rectArea,te.ltc_1.value=Q.state.rectAreaLTC1,te.ltc_2.value=Q.state.rectAreaLTC2,te.pointLights.value=Q.state.point,te.pointLightShadows.value=Q.state.pointShadow,te.hemisphereLights.value=Q.state.hemi,te.directionalShadowMap.value=Q.state.directionalShadowMap,te.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,te.spotShadowMap.value=Q.state.spotShadowMap,te.spotLightMatrix.value=Q.state.spotLightMatrix,te.spotLightMap.value=Q.state.spotLightMap,te.pointShadowMap.value=Q.state.pointShadowMap,te.pointShadowMatrix.value=Q.state.pointShadowMatrix),z.currentProgram=Qt,z.uniformsList=null,Qt}function Pt(S){if(S.uniformsList===null){const G=S.currentProgram.getUniforms();S.uniformsList=os.seqWithValue(G.seq,S.uniforms)}return S.uniformsList}function Bt(S,G){const Z=At.get(S);Z.outputColorSpace=G.outputColorSpace,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Xt(S,G,Z,z,Q){G.isScene!==!0&&(G=ot),Wt.resetTextureUnits();const _t=G.fog,zt=z.isMeshStandardMaterial?G.environment:null,It=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Vn,Ot=(z.isMeshStandardMaterial?ee:Mt).get(z.envMap||zt),Ct=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qt=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),te=!!Z.morphAttributes.position,fe=!!Z.morphAttributes.normal,Se=!!Z.morphAttributes.color;let me=ni;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(me=y.toneMapping);const de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ve=de!==void 0?de.length:0,$t=At.get(z),Je=m.state.lights;if(I===!0&&(R===!0||S!==E)){const Ce=S===E&&z.id===F;Gt.setState(z,S,Ce)}let pe=!1;z.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Je.state.version||$t.outputColorSpace!==It||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||$t.envMap!==Ot||z.fog===!0&&$t.fog!==_t||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Gt.numPlanes||$t.numIntersection!==Gt.numIntersection)||$t.vertexAlphas!==Ct||$t.vertexTangents!==Qt||$t.morphTargets!==te||$t.morphNormals!==fe||$t.morphColors!==Se||$t.toneMapping!==me||it.isWebGL2===!0&&$t.morphTargetsCount!==ve)&&(pe=!0):(pe=!0,$t.__version=z.version);let xe=$t.currentProgram;pe===!0&&(xe=rt(z,G,Q));let Le=!1,Fe=!1,Qe=!1;const Kt=xe.getUniforms(),Re=$t.uniforms;if(ct.useProgram(xe.program)&&(Le=!0,Fe=!0,Qe=!0),z.id!==F&&(F=z.id,Fe=!0),Le||E!==S){Kt.setValue(q,"projectionMatrix",S.projectionMatrix),Kt.setValue(q,"viewMatrix",S.matrixWorldInverse);const Ce=Kt.map.cameraPosition;Ce!==void 0&&Ce.setValue(q,K.setFromMatrixPosition(S.matrixWorld)),it.logarithmicDepthBuffer&&Kt.setValue(q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Kt.setValue(q,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Fe=!0,Qe=!0)}if(Q.isSkinnedMesh){Kt.setOptional(q,Q,"bindMatrix"),Kt.setOptional(q,Q,"bindMatrixInverse");const Ce=Q.skeleton;Ce&&(it.floatVertexTextures?(Ce.boneTexture===null&&Ce.computeBoneTexture(),Kt.setValue(q,"boneTexture",Ce.boneTexture,Wt),Kt.setValue(q,"boneTextureSize",Ce.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ae=Z.morphAttributes;if((Ae.position!==void 0||Ae.normal!==void 0||Ae.color!==void 0&&it.isWebGL2===!0)&&V.update(Q,Z,xe),(Fe||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,Kt.setValue(q,"receiveShadow",Q.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Re.envMap.value=Ot,Re.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Fe&&(Kt.setValue(q,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&Dt(Re,Qe),_t&&z.fog===!0&&vt.refreshFogUniforms(Re,_t),vt.refreshMaterialUniforms(Re,z,B,nt,$),os.upload(q,Pt($t),Re,Wt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(os.upload(q,Pt($t),Re,Wt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Kt.setValue(q,"center",Q.center),Kt.setValue(q,"modelViewMatrix",Q.modelViewMatrix),Kt.setValue(q,"normalMatrix",Q.normalMatrix),Kt.setValue(q,"modelMatrix",Q.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ce=z.uniformsGroups;for(let cn=0,Ts=Ce.length;cn<Ts;cn++)if(it.isWebGL2){const Ir=Ce[cn];Yt.update(Ir,xe),Yt.bind(Ir,xe)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xe}function Dt(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function Rt(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,G,Z){At.get(S.texture).__webglTexture=G,At.get(S.depthTexture).__webglTexture=Z;const z=At.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Z===void 0,z.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,G){const Z=At.get(S);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,Z=0){C=S,M=G,T=Z;let z=!0,Q=null,_t=!1,zt=!1;if(S){const Ot=At.get(S);Ot.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(q.FRAMEBUFFER,null),z=!1):Ot.__webglFramebuffer===void 0?Wt.setupRenderTarget(S):Ot.__hasExternalTextures&&Wt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(zt=!0);const Qt=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qt[G])?Q=Qt[G][Z]:Q=Qt[G],_t=!0):it.isWebGL2&&S.samples>0&&Wt.useMultisampledRTT(S)===!1?Q=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[Z]:Q=Qt,w.copy(S.viewport),P.copy(S.scissor),W=S.scissorTest}else w.copy(X).multiplyScalar(B).floor(),P.copy(b).multiplyScalar(B).floor(),W=U;if(ct.bindFramebuffer(q.FRAMEBUFFER,Q)&&it.drawBuffers&&z&&ct.drawBuffers(S,Q),ct.viewport(w),ct.scissor(P),ct.setScissorTest(W),_t){const Ot=At.get(S.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,Z)}else if(zt){const Ot=At.get(S.texture),Ct=G||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,Ct)}F=-1},this.readRenderTargetPixels=function(S,G,Z,z,Q,_t,zt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){ct.bindFramebuffer(q.FRAMEBUFFER,It);try{const Ot=S.texture,Ct=Ot.format,Qt=Ot.type;if(Ct!==mn&&Jt.convert(Ct)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=Qt===Mr&&(ft.has("EXT_color_buffer_half_float")||it.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Qt!==ii&&Jt.convert(Qt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qt===Qn&&(it.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=S.width-z&&Z>=0&&Z<=S.height-Q&&q.readPixels(G,Z,z,Q,Jt.convert(Ct),Jt.convert(Qt),_t)}finally{const Ot=C!==null?At.get(C).__webglFramebuffer:null;ct.bindFramebuffer(q.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(S,G,Z=0){const z=Math.pow(2,-Z),Q=Math.floor(G.image.width*z),_t=Math.floor(G.image.height*z);Wt.setTexture2D(G,0),q.copyTexSubImage2D(q.TEXTURE_2D,Z,0,0,S.x,S.y,Q,_t),ct.unbindTexture()},this.copyTextureToTexture=function(S,G,Z,z=0){const Q=G.image.width,_t=G.image.height,zt=Jt.convert(Z.format),It=Jt.convert(Z.type);Wt.setTexture2D(Z,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,z,S.x,S.y,Q,_t,zt,It,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,z,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,zt,G.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,z,S.x,S.y,zt,It,G.image),z===0&&Z.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,G,Z,z,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=S.max.x-S.min.x+1,zt=S.max.y-S.min.y+1,It=S.max.z-S.min.z+1,Ot=Jt.convert(z.format),Ct=Jt.convert(z.type);let Qt;if(z.isData3DTexture)Wt.setTexture3D(z,0),Qt=q.TEXTURE_3D;else if(z.isDataArrayTexture)Wt.setTexture2DArray(z,0),Qt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,z.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,z.unpackAlignment);const te=q.getParameter(q.UNPACK_ROW_LENGTH),fe=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Se=q.getParameter(q.UNPACK_SKIP_PIXELS),me=q.getParameter(q.UNPACK_SKIP_ROWS),de=q.getParameter(q.UNPACK_SKIP_IMAGES),ve=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,ve.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ve.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,S.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,S.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,S.min.z),Z.isDataTexture||Z.isData3DTexture?q.texSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,Ct,ve.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,ve.data)):q.texSubImage3D(Qt,Q,G.x,G.y,G.z,_t,zt,It,Ot,Ct,ve),q.pixelStorei(q.UNPACK_ROW_LENGTH,te),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,fe),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Se),q.pixelStorei(q.UNPACK_SKIP_ROWS,me),q.pixelStorei(q.UNPACK_SKIP_IMAGES,de),Q===0&&z.generateMipmaps&&q.generateMipmap(Qt),ct.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){M=0,T=0,C=null,ct.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ca?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===xs?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?vi:Hl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vi?ze:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Xm extends sc{}Xm.prototype.isWebGL1Renderer=!0;class Ua{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=n}clone(){return new Ua(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qm extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class vr extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ul=new tt,dl=new tt,fl=new Pe,ia=new Ms,es=new Cr;class Ym extends He{constructor(t=new Ze,e=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ul.fromBufferAttribute(e,s-1),dl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ul.distanceTo(dl);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),es.radius+=r,t.ray.intersectsSphere(es)===!1)return;fl.copy(s).invert(),ia.copy(t.ray).applyMatrix4(fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,u=new tt,c=new tt,l=new tt,d=new tt,f=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let y=p,x=_-1;y<x;y+=f){const M=v.getX(y),T=v.getX(y+1);if(u.fromBufferAttribute(m,M),c.fromBufferAttribute(m,T),ia.distanceSqToSegment(u,c,d,l)>h)continue;d.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(d);F<t.near||F>t.far||e.push({distance:F,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let y=p,x=_-1;y<x;y+=f){if(u.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),ia.distanceSqToSegment(u,c,d,l)>h)continue;d.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(d);T<t.near||T>t.far||e.push({distance:T,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const pl=new tt,ml=new tt;class xa extends Ym{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)pl.fromBufferAttribute(e,s),ml.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pl.distanceTo(ml);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dr extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vl=new Pe,Ma=new Ms,ns=new Cr,is=new tt;class ra extends He{constructor(t=new Ze,e=new dr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(s),ns.radius+=r,t.ray.intersectsSphere(ns)===!1)return;vl.copy(s).invert(),Ma.copy(t.ray).applyMatrix4(vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let v=d,g=f;v<g;v++){const m=u.getX(v);is.fromBufferAttribute(l,m),gl(is,m,h,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let v=d,g=f;v<g;v++)is.fromBufferAttribute(l,v),gl(is,v,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function gl(i,t,e,n,s,r,a){const o=Ma.distanceSqToPoint(i);if(o<e){const h=new tt;Ma.closestPointToPoint(i,h),h.applyMatrix4(n);const u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:a})}}class Pr extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let u=0;const c=[],l=new tt,d=new tt,f=[],v=[],g=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&h===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){const T=M/e;l.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),l.y=t*Math.cos(a+y*o),l.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),v.push(l.x,l.y,l.z),d.copy(l).normalize(),g.push(d.x,d.y,d.z),m.push(T+x,1-y),_.push(u++)}c.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=c[p][_+1],x=c[p][_],M=c[p+1][_],T=c[p+1][_+1];(p!==0||a>0)&&f.push(y,x,T),(p!==n-1||h<Math.PI)&&f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new we(v,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fa extends Ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],h=[],u=[],c=new tt,l=new tt,d=new tt;for(let f=0;f<=n;f++)for(let v=0;v<=s;v++){const g=v/s*r,m=f/n*Math.PI*2;l.x=(t+e*Math.cos(m))*Math.cos(g),l.y=(t+e*Math.cos(m))*Math.sin(g),l.z=e*Math.sin(m),o.push(l.x,l.y,l.z),c.x=t*Math.cos(g),c.y=t*Math.sin(g),d.subVectors(l,c).normalize(),h.push(d.x,d.y,d.z),u.push(v/s),u.push(f/n)}for(let f=1;f<=n;f++)for(let v=1;v<=s;v++){const g=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,_=(s+1)*f+v;a.push(g,m,_),a.push(m,p,_)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nn extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jm extends Sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ms={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $m{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,h;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,l){return u.push(c,l),this},this.removeHandler=function(c){const l=u.indexOf(c);return l!==-1&&u.splice(l,2),this},this.getHandler=function(c){for(let l=0,d=u.length;l<d;l+=2){const f=u[l],v=u[l+1];if(f.global&&(f.lastIndex=0),f.test(c))return v}return null}}}const Km=new $m;class rr{constructor(t){this.manager=t!==void 0?t:Km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ln={};class Zm extends Error{constructor(t,e){super(t),this.response=e}}class Jm extends rr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ms.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ln[t]!==void 0){Ln[t].push({onLoad:e,onProgress:n,onError:s});return}Ln[t]=[],Ln[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Ln[t],l=u.body.getReader(),d=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),f=d?parseInt(d):0,v=f!==0;let g=0;const m=new ReadableStream({start(p){_();function _(){l.read().then(({done:y,value:x})=>{if(y)p.close();else{g+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let T=0,C=c.length;T<C;T++){const F=c[T];F.onProgress&&F.onProgress(M)}p.enqueue(x),_()}})}}});return new Response(m)}else throw new Zm(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(h){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(o),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(v=>f.decode(v))}}}).then(u=>{ms.add(t,u);const c=Ln[t];delete Ln[t];for(let l=0,d=c.length;l<d;l++){const f=c[l];f.onLoad&&f.onLoad(u)}}).catch(u=>{const c=Ln[t];if(c===void 0)throw this.manager.itemError(t),u;delete Ln[t];for(let l=0,d=c.length;l<d;l++){const f=c[l];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ac extends rr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ms.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Sr("img");function h(){c(),ms.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){c(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Qm extends rr{constructor(t){super(t)}load(t,e,n,s){const r=new La;r.colorSpace=ze;const a=new ac(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function h(u){a.load(t[u],function(c){r.images[u]=c,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let u=0;u<t.length;++u)h(u);return r}}class Ba extends rr{constructor(t){super(t)}load(t,e,n,s){const r=new Ke,a=new ac(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class oc extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const sa=new Pe,_l=new tt,yl=new tt;class tv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_l.setFromMatrixPosition(t.matrixWorld),e.position.copy(_l),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ev extends tv{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends oc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new ev}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class iv extends oc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xl(){return(typeof performance>"u"?Date:performance).now()}class Ml{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sv extends xa{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ze;s.setAttribute("position",new we(e,3)),s.setAttribute("color",new we(n,3));const r=new vr({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new he,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const El={type:"change"},aa={type:"start"},Sl={type:"end"},rs=new Ms,wl=new Kn,av=Math.cos(70*Vh.DEG2RAD);class ov extends wi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ai.ROTATE,MIDDLE:Ai.DOLLY,RIGHT:Ai.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",A),this._domElementKeyEvents=V},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(El),n.update(),r=s.NONE},this.update=function(){const V=new tt,Et=new yi().setFromUnitVectors(t.up,new tt(0,1,0)),pt=Et.clone().invert(),Jt=new tt,qt=new yi,Yt=new tt,kt=2*Math.PI;return function(re=null){const j=n.object.position;V.copy(j).sub(n.target),V.applyQuaternion(Et),o.setFromVector3(V),n.autoRotate&&r===s.NONE&&P(E(re)),n.enableDamping?(o.theta+=h.theta*n.dampingFactor,o.phi+=h.phi*n.dampingFactor):(o.theta+=h.theta,o.phi+=h.phi);let St=n.minAzimuthAngle,xt=n.maxAzimuthAngle;isFinite(St)&&isFinite(xt)&&(St<-Math.PI?St+=kt:St>Math.PI&&(St-=kt),xt<-Math.PI?xt+=kt:xt>Math.PI&&(xt-=kt),St<=xt?o.theta=Math.max(St,Math.min(xt,o.theta)):o.theta=o.theta>(St+xt)/2?Math.max(St,o.theta):Math.min(xt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*u),V.setFromSpherical(o),V.applyQuaternion(pt),j.copy(n.target).add(V),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),c.set(0,0,0));let ut=!1;if(n.zoomToCursor&&T){let wt=null;if(n.object.isPerspectiveCamera){const jt=V.length();wt=Y(jt*u);const se=jt-wt;n.object.position.addScaledVector(x,se),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const jt=new tt(M.x,M.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ut=!0;const se=new tt(M.x,M.y,0);se.unproject(n.object),n.object.position.sub(se).add(jt),n.object.updateMatrixWorld(),wt=V.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wt).add(n.object.position):(rs.origin.copy(n.object.position),rs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(rs.direction))<av?t.lookAt(n.target):(wl.setFromNormalAndCoplanarPoint(n.object.up,n.target),rs.intersectPlane(wl,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),ut=!0);return u=1,T=!1,ut||Jt.distanceToSquared(n.object.position)>a||8*(1-qt.dot(n.object.quaternion))>a||Yt.distanceToSquared(n.target)>0?(n.dispatchEvent(El),Jt.copy(n.object.position),qt.copy(n.object.quaternion),Yt.copy(n.target),ut=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",dt),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",Mt),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Mt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Ml,h=new Ml;let u=1;const c=new tt,l=new ae,d=new ae,f=new ae,v=new ae,g=new ae,m=new ae,p=new ae,_=new ae,y=new ae,x=new tt,M=new ae;let T=!1;const C=[],F={};function E(V){return V!==null?2*Math.PI/60*n.autoRotateSpeed*V:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function P(V){h.theta-=V}function W(V){h.phi-=V}const k=function(){const V=new tt;return function(pt,Jt){V.setFromMatrixColumn(Jt,0),V.multiplyScalar(-pt),c.add(V)}}(),N=function(){const V=new tt;return function(pt,Jt){n.screenSpacePanning===!0?V.setFromMatrixColumn(Jt,1):(V.setFromMatrixColumn(Jt,0),V.crossVectors(n.object.up,V)),V.multiplyScalar(pt),c.add(V)}}(),H=function(){const V=new tt;return function(pt,Jt){const qt=n.domElement;if(n.object.isPerspectiveCamera){const Yt=n.object.position;V.copy(Yt).sub(n.target);let kt=V.length();kt*=Math.tan(n.object.fov/2*Math.PI/180),k(2*pt*kt/qt.clientHeight,n.object.matrix),N(2*Jt*kt/qt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(pt*(n.object.right-n.object.left)/n.object.zoom/qt.clientWidth,n.object.matrix),N(Jt*(n.object.top-n.object.bottom)/n.object.zoom/qt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function nt(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(V){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=V:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(V){if(!n.zoomToCursor)return;T=!0;const Et=n.domElement.getBoundingClientRect(),pt=V.clientX-Et.left,Jt=V.clientY-Et.top,qt=Et.width,Yt=Et.height;M.x=pt/qt*2-1,M.y=-(Jt/Yt)*2+1,x.set(M.x,M.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(V){return Math.max(n.minDistance,Math.min(n.maxDistance,V))}function X(V){l.set(V.clientX,V.clientY)}function b(V){O(V),p.set(V.clientX,V.clientY)}function U(V){v.set(V.clientX,V.clientY)}function D(V){d.set(V.clientX,V.clientY),f.subVectors(d,l).multiplyScalar(n.rotateSpeed);const Et=n.domElement;P(2*Math.PI*f.x/Et.clientHeight),W(2*Math.PI*f.y/Et.clientHeight),l.copy(d),n.update()}function I(V){_.set(V.clientX,V.clientY),y.subVectors(_,p),y.y>0?nt(w()):y.y<0&&B(w()),p.copy(_),n.update()}function R(V){g.set(V.clientX,V.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),H(m.x,m.y),v.copy(g),n.update()}function $(V){O(V),V.deltaY<0?B(w()):V.deltaY>0&&nt(w()),n.update()}function at(V){let Et=!1;switch(V.code){case n.keys.UP:V.ctrlKey||V.metaKey||V.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),Et=!0;break;case n.keys.BOTTOM:V.ctrlKey||V.metaKey||V.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),Et=!0;break;case n.keys.LEFT:V.ctrlKey||V.metaKey||V.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),Et=!0;break;case n.keys.RIGHT:V.ctrlKey||V.metaKey||V.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),Et=!0;break}Et&&(V.preventDefault(),n.update())}function et(){if(C.length===1)l.set(C[0].pageX,C[0].pageY);else{const V=.5*(C[0].pageX+C[1].pageX),Et=.5*(C[0].pageY+C[1].pageY);l.set(V,Et)}}function K(){if(C.length===1)v.set(C[0].pageX,C[0].pageY);else{const V=.5*(C[0].pageX+C[1].pageX),Et=.5*(C[0].pageY+C[1].pageY);v.set(V,Et)}}function ot(){const V=C[0].pageX-C[1].pageX,Et=C[0].pageY-C[1].pageY,pt=Math.sqrt(V*V+Et*Et);p.set(0,pt)}function ht(){n.enableZoom&&ot(),n.enablePan&&K()}function q(){n.enableZoom&&ot(),n.enableRotate&&et()}function Lt(V){if(C.length==1)d.set(V.pageX,V.pageY);else{const pt=Nt(V),Jt=.5*(V.pageX+pt.x),qt=.5*(V.pageY+pt.y);d.set(Jt,qt)}f.subVectors(d,l).multiplyScalar(n.rotateSpeed);const Et=n.domElement;P(2*Math.PI*f.x/Et.clientHeight),W(2*Math.PI*f.y/Et.clientHeight),l.copy(d)}function ft(V){if(C.length===1)g.set(V.pageX,V.pageY);else{const Et=Nt(V),pt=.5*(V.pageX+Et.x),Jt=.5*(V.pageY+Et.y);g.set(pt,Jt)}m.subVectors(g,v).multiplyScalar(n.panSpeed),H(m.x,m.y),v.copy(g)}function it(V){const Et=Nt(V),pt=V.pageX-Et.x,Jt=V.pageY-Et.y,qt=Math.sqrt(pt*pt+Jt*Jt);_.set(0,qt),y.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),nt(y.y),p.copy(_)}function ct(V){n.enableZoom&&it(V),n.enablePan&&ft(V)}function Zt(V){n.enableZoom&&it(V),n.enableRotate&&Lt(V)}function At(V){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(V.pointerId),n.domElement.addEventListener("pointermove",Wt),n.domElement.addEventListener("pointerup",Mt)),yt(V),V.pointerType==="touch"?J(V):ee(V))}function Wt(V){n.enabled!==!1&&(V.pointerType==="touch"?vt(V):ie(V))}function Mt(V){Gt(V),C.length===0&&(n.domElement.releasePointerCapture(V.pointerId),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Mt)),n.dispatchEvent(Sl),r=s.NONE}function ee(V){let Et;switch(V.button){case 0:Et=n.mouseButtons.LEFT;break;case 1:Et=n.mouseButtons.MIDDLE;break;case 2:Et=n.mouseButtons.RIGHT;break;default:Et=-1}switch(Et){case Ai.DOLLY:if(n.enableZoom===!1)return;b(V),r=s.DOLLY;break;case Ai.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enablePan===!1)return;U(V),r=s.PAN}else{if(n.enableRotate===!1)return;X(V),r=s.ROTATE}break;case Ai.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(n.enableRotate===!1)return;X(V),r=s.ROTATE}else{if(n.enablePan===!1)return;U(V),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(aa)}function ie(V){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;D(V);break;case s.DOLLY:if(n.enableZoom===!1)return;I(V);break;case s.PAN:if(n.enablePan===!1)return;R(V);break}}function L(V){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(V.preventDefault(),n.dispatchEvent(aa),$(V),n.dispatchEvent(Sl))}function A(V){n.enabled===!1||n.enablePan===!1||at(V)}function J(V){switch(bt(V),C.length){case 1:switch(n.touches.ONE){case Ti.ROTATE:if(n.enableRotate===!1)return;et(),r=s.TOUCH_ROTATE;break;case Ti.PAN:if(n.enablePan===!1)return;K(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ti.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ht(),r=s.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(aa)}function vt(V){switch(bt(V),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Lt(V),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ft(V),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(V),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Zt(V),n.update();break;default:r=s.NONE}}function dt(V){n.enabled!==!1&&V.preventDefault()}function yt(V){C.push(V)}function Gt(V){delete F[V.pointerId];for(let Et=0;Et<C.length;Et++)if(C[Et].pointerId==V.pointerId){C.splice(Et,1);return}}function bt(V){let Et=F[V.pointerId];Et===void 0&&(Et=new ae,F[V.pointerId]=Et),Et.set(V.pageX,V.pageY)}function Nt(V){const Et=V.pointerId===C[0].pointerId?C[1]:C[0];return F[Et.pointerId]}n.domElement.addEventListener("contextmenu",dt),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",Mt),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Mn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Mn.nextNameID=Mn.nextNameID||0,this.$name.id=`lil-gui-name-${++Mn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class lv extends Mn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ea(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const cv={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ea,toHexString:Ea},wr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},hv={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=wr.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return wr.toHexString(s)}},uv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=wr.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return wr.toHexString(s)}},dv=[cv,wr,hv,uv];function fv(i){return dv.find(t=>t.match(i))}class pv extends Mn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=fv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ea(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class oa extends Mn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class mv extends Mn{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+_),this.$input.value=this.getValue())},s=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},r=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let a=!1,o,h,u,c,l;const d=5,f=_=>{o=_.clientX,h=u=_.clientY,a=!0,c=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=_=>{if(a){const y=_.clientX-o,x=_.clientY-h;Math.abs(x)>d?(_.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&g()}if(!a){const y=_.clientY-u;l-=y*this._step*this._arrowKeyMultiplier(_),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}u=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(p,_,y,x,M)=>(p-_)/(y-_)*(M-x)+x,e=p=>{const _=this.$slider.getBoundingClientRect();let y=t(p,_.left,_.right,this._min,this._max);this._snapClampSetValue(y)},n=p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=p=>{e(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let a=!1,o,h;const u=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),a=!1},c=p=>{p.touches.length>1||(this._hasScrollBar?(o=p.touches[0].clientX,h=p.touches[0].clientY,a=!0):u(p),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",d))},l=p=>{if(a){const _=p.touches[0].clientX-o,y=p.touches[0].clientY-h;Math.abs(_)>Math.abs(y)?u(p):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d))}else p.preventDefault(),e(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),v=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const y=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class vv extends Mn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class gv extends Mn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const _v=`.lil-gui {
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
}`;function yv(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let bl=!1;class Oa{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:h=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),h&&this.domElement.classList.add("allow-touch-styles"),!bl&&o&&(yv(_v),bl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=a}add(t,e,n,s,r){if(Object(n)===n)return new vv(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new mv(this,t,e,n,s,r);case"boolean":return new lv(this,t,e);case"string":return new gv(this,t,e);case"function":return new oa(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new pv(this,t,e,n)}addFolder(t){const e=new Oa({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof oa||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof oa)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const xv=Oa;function Mv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ss(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var lc={exports:{}};(function(i,t){(function(e){i.exports=e()})(function(){return function e(n,s,r){function a(u,c){if(!s[u]){if(!n[u]){var l=typeof ss=="function"&&ss;if(!c&&l)return l(u,!0);if(o)return o(u,!0);throw new Error("Cannot find module '"+u+"'")}var d=s[u]={exports:{}};n[u][0].call(d.exports,function(f){var v=n[u][1][f];return a(v||f)},d,d.exports,e,n,s,r)}return s[u].exports}for(var o=typeof ss=="function"&&ss,h=0;h<r.length;h++)a(r[h]);return a}({1:[function(e,n,s){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,s){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,s){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=a;function a(u){u=u||{},this.lowerBound=new r,u.lowerBound&&this.lowerBound.copy(u.lowerBound),this.upperBound=new r,u.upperBound&&this.upperBound.copy(u.upperBound)}var o=new r;a.prototype.setFromPoints=function(u,c,l,d){var f=this.lowerBound,v=this.upperBound,g=l;f.copy(u[0]),g&&g.vmult(f,f),v.copy(f);for(var m=1;m<u.length;m++){var p=u[m];g&&(g.vmult(p,o),p=o),p.x>v.x&&(v.x=p.x),p.x<f.x&&(f.x=p.x),p.y>v.y&&(v.y=p.y),p.y<f.y&&(f.y=p.y),p.z>v.z&&(v.z=p.z),p.z<f.z&&(f.z=p.z)}return c&&(c.vadd(f,f),c.vadd(v,v)),d&&(f.x-=d,f.y-=d,f.z-=d,v.x+=d,v.y+=d,v.z+=d),this},a.prototype.copy=function(u){return this.lowerBound.copy(u.lowerBound),this.upperBound.copy(u.upperBound),this},a.prototype.clone=function(){return new a().copy(this)},a.prototype.extend=function(u){var c=u.lowerBound.x;this.lowerBound.x>c&&(this.lowerBound.x=c);var l=u.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var c=u.lowerBound.y;this.lowerBound.y>c&&(this.lowerBound.y=c);var l=u.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var c=u.lowerBound.z;this.lowerBound.z>c&&(this.lowerBound.z=c);var l=u.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},a.prototype.overlaps=function(u){var c=this.lowerBound,l=this.upperBound,d=u.lowerBound,f=u.upperBound;return(d.x<=l.x&&l.x<=f.x||c.x<=f.x&&f.x<=l.x)&&(d.y<=l.y&&l.y<=f.y||c.y<=f.y&&f.y<=l.y)&&(d.z<=l.z&&l.z<=f.z||c.z<=f.z&&f.z<=l.z)},a.prototype.contains=function(u){var c=this.lowerBound,l=this.upperBound,d=u.lowerBound,f=u.upperBound;return c.x<=d.x&&l.x>=f.x&&c.y<=d.y&&l.y>=f.y&&c.z<=d.z&&l.z>=f.z},a.prototype.getCorners=function(u,c,l,d,f,v,g,m){var p=this.lowerBound,_=this.upperBound;u.copy(p),c.set(_.x,p.y,p.z),l.set(_.x,_.y,p.z),d.set(p.x,_.y,_.z),f.set(_.x,p.y,p.z),v.set(p.x,_.y,p.z),g.set(p.x,p.y,_.z),m.copy(_)};var h=[new r,new r,new r,new r,new r,new r,new r,new r];a.prototype.toLocalFrame=function(u,c){var l=h,d=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],_=l[6],y=l[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var M=l[x];u.pointToLocal(M,M)}return c.setFromPoints(l)},a.prototype.toWorldFrame=function(u,c){var l=h,d=l[0],f=l[1],v=l[2],g=l[3],m=l[4],p=l[5],_=l[6],y=l[7];this.getCorners(d,f,v,g,m,p,_,y);for(var x=0;x!==8;x++){var M=l[x];u.pointToWorld(M,M)}return c.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,s){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(a,o){if(a=a.index,o=o.index,o>a){var h=o;o=a,a=h}return this.matrix[(a*(a+1)>>1)+o-1]},r.prototype.set=function(a,o,h){if(a=a.index,o=o.index,o>a){var u=o;o=a,a=u}this.matrix[(a*(a+1)>>1)+o-1]=h?1:0},r.prototype.reset=function(){for(var a=0,o=this.matrix.length;a!==o;a++)this.matrix[a]=0},r.prototype.setNumObjects=function(a){this.matrix.length=a*(a-1)>>1}},{}],5:[function(e,n,s){var r=e("../objects/Body"),a=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=h;function h(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}h.prototype.collisionPairs=function(g,m,p){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var u=r.STATIC|r.KINEMATIC;h.prototype.needBroadphaseCollision=function(g,m){return!(!(g.collisionFilterGroup&m.collisionFilterMask)||!(m.collisionFilterGroup&g.collisionFilterMask)||(g.type&u||g.sleepState===r.SLEEPING)&&(m.type&u||m.sleepState===r.SLEEPING))},h.prototype.intersectionTest=function(g,m,p,_){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,p,_):this.doBoundingSphereBroadphase(g,m,p,_)};var c=new a;new a,new o,new a,h.prototype.doBoundingSphereBroadphase=function(g,m,p,_){var y=c;m.position.vsub(g.position,y);var x=Math.pow(g.boundingRadius+m.boundingRadius,2),M=y.norm2();M<x&&(p.push(g),_.push(m))},h.prototype.doBoundingBoxBroadphase=function(g,m,p,_){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(p.push(g),_.push(m))};var l={keys:[]},d=[],f=[];h.prototype.makePairsUnique=function(g,m){for(var p=l,_=d,y=f,x=g.length,M=0;M!==x;M++)_[M]=g[M],y[M]=m[M];g.length=0,m.length=0;for(var M=0;M!==x;M++){var T=_[M].id,C=y[M].id,F=T<C?T+","+C:C+","+T;p[F]=M,p.keys.push(F)}for(var M=0;M!==p.keys.length;M++){var F=p.keys.pop(),E=p[F];g.push(_[E]),m.push(y[E]),delete p[F]}},h.prototype.setWorld=function(g){};var v=new a;h.boundingSphereCheck=function(g,m){var p=v;return g.position.vsub(m.position,p),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>p.norm2()},h.prototype.aabbQuery=function(g,m,p){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,s){n.exports=h;var r=e("./Broadphase"),a=e("../math/Vec3"),o=e("../shapes/Shape");function h(c,l,d,f,v){r.apply(this),this.nx=d||10,this.ny=f||10,this.nz=v||10,this.aabbMin=c||new a(100,100,100),this.aabbMax=l||new a(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}h.prototype=new r,h.prototype.constructor=h;var u=new a;new a,h.prototype.collisionPairs=function(c,l,d){var f=c.numObjects(),v=c.bodies,at=this.aabbMax,$=this.aabbMin,g=this.nx,m=this.ny,p=this.nz,_=m*p,y=p,x=1,M=at.x,T=at.y,C=at.z,F=$.x,E=$.y,w=$.z,P=g/(M-F),W=m/(T-E),k=p/(C-w),N=(M-F)/g,H=(T-E)/m,nt=(C-w)/p,B=Math.sqrt(N*N+H*H+nt*nt)*.5,O=o.types,Y=O.SPHERE,X=O.PLANE;O.BOX,O.COMPOUND,O.CONVEXPOLYHEDRON;for(var b=this.bins,U=this.binLengths,D=this.bins.length,I=0;I!==D;I++)U[I]=0;var R=Math.ceil,$=Math.min,at=Math.max;function et(bt,Nt,V,Et,pt,Jt,qt){var Yt=(bt-F)*P|0,kt=(Nt-E)*W|0,Ut=(V-w)*k|0,re=R((Et-F)*P),j=R((pt-E)*W),St=R((Jt-w)*k);Yt<0?Yt=0:Yt>=g&&(Yt=g-1),kt<0?kt=0:kt>=m&&(kt=m-1),Ut<0?Ut=0:Ut>=p&&(Ut=p-1),re<0?re=0:re>=g&&(re=g-1),j<0?j=0:j>=m&&(j=m-1),St<0?St=0:St>=p&&(St=p-1),Yt*=_,kt*=y,Ut*=x,re*=_,j*=y,St*=x;for(var xt=Yt;xt<=re;xt+=_)for(var ut=kt;ut<=j;ut+=y)for(var wt=Ut;wt<=St;wt+=x){var jt=xt+ut+wt;b[jt][U[jt]++]=qt}}for(var I=0;I!==f;I++){var K=v[I],ot=K.shape;switch(ot.type){case Y:var ht=K.position.x,q=K.position.y,Lt=K.position.z,ft=ot.radius;et(ht-ft,q-ft,Lt-ft,ht+ft,q+ft,Lt+ft,K);break;case X:ot.worldNormalNeedsUpdate&&ot.computeWorldNormal(K.quaternion);var it=ot.worldNormal,ct=F+N*.5-K.position.x,Zt=E+H*.5-K.position.y,At=w+nt*.5-K.position.z,Wt=u;Wt.set(ct,Zt,At);for(var Mt=0,ee=0;Mt!==g;Mt++,ee+=_,Wt.y=Zt,Wt.x+=N)for(var ie=0,L=0;ie!==m;ie++,L+=y,Wt.z=At,Wt.y+=H)for(var A=0,J=0;A!==p;A++,J+=x,Wt.z+=nt)if(Wt.dot(it)<B){var vt=ee+L+J;b[vt][U[vt]++]=K}break;default:K.aabbNeedsUpdate&&K.computeAABB(),et(K.aabb.lowerBound.x,K.aabb.lowerBound.y,K.aabb.lowerBound.z,K.aabb.upperBound.x,K.aabb.upperBound.y,K.aabb.upperBound.z,K);break}}for(var I=0;I!==D;I++){var dt=U[I];if(dt>1)for(var yt=b[I],Mt=0;Mt!==dt;Mt++)for(var K=yt[Mt],ie=0;ie!==Mt;ie++){var Gt=yt[ie];this.needBroadphaseCollision(K,Gt)&&this.intersectionTest(K,Gt,l,d)}}this.makePairsUnique(l,d)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,s){n.exports=o;var r=e("./Broadphase"),a=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(h,u,c){var l=h.bodies,d=l.length,f,v,g,m;for(f=0;f!==d;f++)for(v=0;v!==f;v++)g=l[f],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,u,c)},new a,o.prototype.aabbQuery=function(h,u,c){c=c||[];for(var l=0;l<h.bodies.length;l++){var d=h.bodies[l];d.aabbNeedsUpdate&&d.computeAABB(),d.aabb.overlaps(u)&&c.push(d)}return c}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,s){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(a,o){if(a=a.id,o=o.id,o>a){var h=o;o=a,a=h}return a+"-"+o in this.matrix},r.prototype.set=function(a,o,h){if(a=a.id,o=o.id,o>a){var u=o;o=a,a=u}h?this.matrix[a+"-"+o]=!0:delete this.matrix[a+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(a){}},{}],9:[function(e,n,s){n.exports=l;var r=e("../math/Vec3"),a=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var h=e("../collision/RaycastResult"),u=e("../shapes/Shape"),c=e("../collision/AABB");function l(D,I){this.from=D?D.clone():new r,this.to=I?I.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new h,this.hasHit=!1,this.callback=function(R){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var d=new c,f=[];l.prototype.intersectWorld=function(D,I){return this.mode=I.mode||l.ANY,this.result=I.result||new h,this.skipBackfaces=!!I.skipBackfaces,this.collisionFilterMask=typeof I.collisionFilterMask<"u"?I.collisionFilterMask:-1,this.collisionFilterGroup=typeof I.collisionFilterGroup<"u"?I.collisionFilterGroup:-1,I.from&&this.from.copy(I.from),I.to&&this.to.copy(I.to),this.callback=I.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(d),f.length=0,D.broadphase.aabbQuery(D,d,f),this.intersectBodies(f),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(D,I,R,$){$.vsub(I,X),R.vsub(I,v),D.vsub(I,g);var at=X.dot(X),et=X.dot(v),K=X.dot(g),ot=v.dot(v),ht=v.dot(g),q,Lt;return(q=ot*K-et*ht)>=0&&(Lt=at*ht-et*K)>=0&&q+Lt<at*ot-et*et}var p=new r,_=new a;l.prototype.intersectBody=function(D,I){I&&(this.result=I,this._updateDirection());var R=this.checkCollisionResponse;if(!(R&&!D.collisionResponse)&&!(!(this.collisionFilterGroup&D.collisionFilterMask)||!(D.collisionFilterGroup&this.collisionFilterMask)))for(var $=p,at=_,et=0,K=D.shapes.length;et<K;et++){var ot=D.shapes[et];if(!(R&&!ot.collisionResponse)&&(D.quaternion.mult(D.shapeOrientations[et],at),D.quaternion.vmult(D.shapeOffsets[et],$),$.vadd(D.position,$),this.intersectShape(ot,at,$,D),this.result._shouldStop))break}},l.prototype.intersectBodies=function(D,I){I&&(this.result=I,this._updateDirection());for(var R=0,$=D.length;!this.result._shouldStop&&R<$;R++)this.intersectBody(D[R])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(D,I,R,$){var at=this.from,et=U(at,this._direction,R);if(!(et>D.boundingSphereRadius)){var K=this[D.type];K&&K.call(this,D,I,R,$)}},new r,new r;var y=new r,x=new r,M=new r,T=new r;new r,new h,l.prototype.intersectBox=function(D,I,R,$){return this.intersectConvex(D.convexPolyhedronRepresentation,I,R,$)},l.prototype[u.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(D,I,R,$){var at=this.from,et=this.to,K=this._direction,ot=new r(0,0,1);I.vmult(ot,ot);var ht=new r;at.vsub(R,ht);var q=ht.dot(ot);et.vsub(R,ht);var Lt=ht.dot(ot);if(!(q*Lt>0)&&!(at.distanceTo(et)<q)){var ft=ot.dot(K);if(!(Math.abs(ft)<this.precision)){var it=new r,ct=new r,Zt=new r;at.vsub(R,it);var At=-ot.dot(it)/ft;K.scale(At,ct),at.vadd(ct,Zt),this.reportIntersection(ot,Zt,D,$,-1)}}},l.prototype[u.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(D){var I=this.to,R=this.from;D.lowerBound.x=Math.min(I.x,R.x),D.lowerBound.y=Math.min(I.y,R.y),D.lowerBound.z=Math.min(I.z,R.z),D.upperBound.x=Math.max(I.x,R.x),D.upperBound.y=Math.max(I.y,R.y),D.upperBound.z=Math.max(I.z,R.z)};var C={faceList:[0]};l.prototype.intersectHeightfield=function(D,I,R,$){D.data,D.elementSize;var at=new r,et=new l(this.from,this.to);o.pointToLocalFrame(R,I,et.from,et.from),o.pointToLocalFrame(R,I,et.to,et.to);var K=[],ot=null,ht=null,q=null,Lt=null,ft=D.getIndexOfPosition(et.from.x,et.from.y,K,!1);if(ft&&(ot=K[0],ht=K[1],q=K[0],Lt=K[1]),ft=D.getIndexOfPosition(et.to.x,et.to.y,K,!1),ft&&((ot===null||K[0]<ot)&&(ot=K[0]),(q===null||K[0]>q)&&(q=K[0]),(ht===null||K[1]<ht)&&(ht=K[1]),(Lt===null||K[1]>Lt)&&(Lt=K[1])),ot!==null){var it=[];D.getRectMinMax(ot,ht,q,Lt,it),it[0],it[1];for(var ct=ot;ct<=q;ct++)for(var Zt=ht;Zt<=Lt;Zt++){if(this.result._shouldStop||(D.getConvexTrianglePillar(ct,Zt,!1),o.pointToWorldFrame(R,I,D.pillarOffset,at),this.intersectConvex(D.pillarConvex,I,at,$,C),this.result._shouldStop))return;D.getConvexTrianglePillar(ct,Zt,!0),o.pointToWorldFrame(R,I,D.pillarOffset,at),this.intersectConvex(D.pillarConvex,I,at,$,C)}}},l.prototype[u.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var F=new r,E=new r;l.prototype.intersectSphere=function(D,I,R,$){var at=this.from,et=this.to,K=D.radius,ot=Math.pow(et.x-at.x,2)+Math.pow(et.y-at.y,2)+Math.pow(et.z-at.z,2),ht=2*((et.x-at.x)*(at.x-R.x)+(et.y-at.y)*(at.y-R.y)+(et.z-at.z)*(at.z-R.z)),q=Math.pow(at.x-R.x,2)+Math.pow(at.y-R.y,2)+Math.pow(at.z-R.z,2)-Math.pow(K,2),Lt=Math.pow(ht,2)-4*ot*q,ft=F,it=E;if(!(Lt<0))if(Lt===0)at.lerp(et,Lt,ft),ft.vsub(R,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1);else{var ct=(-ht-Math.sqrt(Lt))/(2*ot),Zt=(-ht+Math.sqrt(Lt))/(2*ot);if(ct>=0&&ct<=1&&(at.lerp(et,ct,ft),ft.vsub(R,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1)),this.result._shouldStop)return;Zt>=0&&Zt<=1&&(at.lerp(et,Zt,ft),ft.vsub(R,it),it.normalize(),this.reportIntersection(it,ft,D,$,-1))}},l.prototype[u.types.SPHERE]=l.prototype.intersectSphere;var w=new r;new r,new r;var P=new r;l.prototype.intersectConvex=function(I,R,$,at,et){for(var K=w,ot=P,ht=et&&et.faceList||null,q=I.faces,Lt=I.vertices,ft=I.faceNormals,it=this._direction,ct=this.from,Zt=this.to,At=ct.distanceTo(Zt),Wt=ht?ht.length:q.length,Mt=this.result,ee=0;!Mt._shouldStop&&ee<Wt;ee++){var ie=ht?ht[ee]:ee,L=q[ie],A=ft[ie],J=R,vt=$;ot.copy(Lt[L[0]]),J.vmult(ot,ot),ot.vadd(vt,ot),ot.vsub(ct,ot),J.vmult(A,K);var dt=it.dot(K);if(!(Math.abs(dt)<this.precision)){var yt=K.dot(ot)/dt;if(!(yt<0)){it.mult(yt,y),y.vadd(ct,y),x.copy(Lt[L[0]]),J.vmult(x,x),vt.vadd(x,x);for(var Gt=1;!Mt._shouldStop&&Gt<L.length-1;Gt++){M.copy(Lt[L[Gt]]),T.copy(Lt[L[Gt+1]]),J.vmult(M,M),J.vmult(T,T),vt.vadd(M,M),vt.vadd(T,T);var bt=y.distanceTo(ct);!(m(y,x,M,T)||m(y,M,x,T))||bt>At||this.reportIntersection(K,y,I,at,ie)}}}}},l.prototype[u.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var W=new r,k=new r,N=new r,H=new r,nt=new r,B=new r;new c;var O=[],Y=new o;l.prototype.intersectTrimesh=function(I,R,$,at,et){var K=W,ot=O,ht=Y,q=P,Lt=k,ft=N,it=H,ct=B,Zt=nt;et&&et.faceList;var At=I.indices;I.vertices,I.faceNormals;var Wt=this.from,Mt=this.to,ee=this._direction;ht.position.copy($),ht.quaternion.copy(R),o.vectorToLocalFrame($,R,ee,Lt),o.pointToLocalFrame($,R,Wt,ft),o.pointToLocalFrame($,R,Mt,it);var ie=ft.distanceSquared(it);I.tree.rayQuery(this,ht,ot);for(var L=0,A=ot.length;!this.result._shouldStop&&L!==A;L++){var J=ot[L];I.getNormal(J,K),I.getVertex(At[J*3],x),x.vsub(ft,q);var vt=Lt.dot(K),dt=K.dot(q)/vt;if(!(dt<0)){Lt.scale(dt,y),y.vadd(ft,y),I.getVertex(At[J*3+1],M),I.getVertex(At[J*3+2],T);var yt=y.distanceSquared(ft);!(m(y,M,x,T)||m(y,x,M,T))||yt>ie||(o.vectorToWorldFrame(R,K,Zt),o.pointToWorldFrame($,R,y,ct),this.reportIntersection(Zt,ct,I,at,J))}}ot.length=0},l.prototype[u.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(D,I,R,$,at){var et=this.from,K=this.to,ot=et.distanceTo(I),ht=this.result;if(!(this.skipBackfaces&&D.dot(this._direction)>0))switch(ht.hitFaceIndex=typeof at<"u"?at:-1,this.mode){case l.ALL:this.hasHit=!0,ht.set(et,K,D,I,R,$,ot),ht.hasHit=!0,this.callback(ht);break;case l.CLOSEST:(ot<ht.distance||!ht.hasHit)&&(this.hasHit=!0,ht.hasHit=!0,ht.set(et,K,D,I,R,$,ot));break;case l.ANY:this.hasHit=!0,ht.hasHit=!0,ht.set(et,K,D,I,R,$,ot),ht._shouldStop=!0;break}};var X=new r,b=new r;function U(D,I,R){R.vsub(D,X);var $=X.dot(I);I.mult($,b),b.vadd(D,b);var at=R.distanceTo(b);return at}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}a.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},a.prototype.abort=function(){this._shouldStop=!0},a.prototype.set=function(o,h,u,c,l,d,f){this.rayFromWorld.copy(o),this.rayToWorld.copy(h),this.hitNormalWorld.copy(u),this.hitPointWorld.copy(c),this.shape=l,this.body=d,this.distance=f}},{"../math/Vec3":30}],11:[function(e,n,s){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=a;function a(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var h=this.axisList;this._addBodyHandler=function(u){h.push(u.body)},this._removeBodyHandler=function(u){var c=h.indexOf(u.body);c!==-1&&h.splice(c,1)},o&&this.setWorld(o)}a.prototype=new r,a.prototype.setWorld=function(o){this.axisList.length=0;for(var h=0;h<o.bodies.length;h++)this.axisList.push(o.bodies[h]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},a.insertionSortX=function(o){for(var h=1,u=o.length;h<u;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.x<=c.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=c}return o},a.insertionSortY=function(o){for(var h=1,u=o.length;h<u;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.y<=c.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=c}return o},a.insertionSortZ=function(o){for(var h=1,u=o.length;h<u;h++){for(var c=o[h],l=h-1;l>=0&&!(o[l].aabb.lowerBound.z<=c.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=c}return o},a.prototype.collisionPairs=function(o,h,u){var c=this.axisList,l=c.length,d=this.axisIndex,f,v;for(this.dirty&&(this.sortList(),this.dirty=!1),f=0;f!==l;f++){var g=c[f];for(v=f+1;v<l;v++){var m=c[v];if(this.needBroadphaseCollision(g,m)){if(!a.checkBounds(g,m,d))break;this.intersectionTest(g,m,h,u)}}}},a.prototype.sortList=function(){for(var o=this.axisList,h=this.axisIndex,u=o.length,c=0;c!==u;c++){var l=o[c];l.aabbNeedsUpdate&&l.computeAABB()}h===0?a.insertionSortX(o):h===1?a.insertionSortY(o):h===2&&a.insertionSortZ(o)},a.checkBounds=function(o,h,u){var c,l;u===0?(c=o.position.x,l=h.position.x):u===1?(c=o.position.y,l=h.position.y):u===2&&(c=o.position.z,l=h.position.z);var d=o.boundingRadius,f=h.boundingRadius,v=c+d,g=l-f;return g<v},a.prototype.autoDetectAxis=function(){for(var o=0,h=0,u=0,c=0,l=0,d=0,f=this.axisList,v=f.length,g=1/v,m=0;m!==v;m++){var p=f[m],_=p.position.x;o+=_,h+=_*_;var y=p.position.y;u+=y,c+=y*y;var x=p.position.z;l+=x,d+=x*x}var M=h-o*o*g,T=c-u*u*g,C=d-l*l*g;M>T?M>C?this.axisIndex=0:this.axisIndex=2:T>C?this.axisIndex=1:this.axisIndex=2},a.prototype.aabbQuery=function(o,h,u){u=u||[],this.dirty&&(this.sortList(),this.dirty=!1);var c=this.axisIndex,l="x";c===1&&(l="y"),c===2&&(l="z");var d=this.axisList;h.lowerBound[l],h.upperBound[l];for(var f=0;f<d.length;f++){var v=d[f];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(h)&&u.push(v)}return u}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var h=e("../math/Vec3");function u(c,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6,v=d.pivotA?d.pivotA.clone():new h,g=d.pivotB?d.pivotB.clone():new h;this.axisA=d.axisA?d.axisA.clone():new h,this.axisB=d.axisB?d.axisB.clone():new h,r.call(this,c,v,l,g,f),this.collideConnected=!!d.collideConnected,this.angle=typeof d.angle<"u"?d.angle:0;var m=this.coneEquation=new a(c,l,d),p=this.twistEquation=new o(c,l,d);this.twistAngle=typeof d.twistAngle<"u"?d.twistAngle:0,m.maxForce=0,m.minForce=-f,p.maxForce=0,p.minForce=-f,this.equations.push(m,p)}u.prototype=new r,u.constructor=u,new h,new h,u.prototype.update=function(){var c=this.bodyA,l=this.bodyB,d=this.coneEquation,f=this.twistEquation;r.prototype.update.call(this),c.vectorToWorldFrame(this.axisA,d.axisA),l.vectorToWorldFrame(this.axisB,d.axisB),this.axisA.tangents(f.axisA,f.axisA),c.vectorToWorldFrame(f.axisA,f.axisA),this.axisB.tangents(f.axisB,f.axisB),l.vectorToWorldFrame(f.axisB,f.axisB),d.angle=this.angle,f.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,s){n.exports=a;var r=e("../utils/Utils");function a(o,h,u){u=r.defaults(u,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=h,this.id=a.idCounter++,this.collideConnected=u.collideConnected,u.wakeUpBodies&&(o&&o.wakeUp(),h&&h.wakeUp())}a.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},a.prototype.enable=function(){for(var o=this.equations,h=0;h<o.length;h++)o[h].enabled=!0},a.prototype.disable=function(){for(var o=this.equations,h=0;h<o.length;h++)o[h].enabled=!1},a.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,s){n.exports=o;var r=e("./Constraint"),a=e("../equations/ContactEquation");function o(h,u,c,l){r.call(this,h,u),typeof c>"u"&&(c=h.position.distanceTo(u.position)),typeof l>"u"&&(l=1e6),this.distance=c;var d=this.distanceEquation=new a(h,u);this.equations.push(d),d.minForce=-l,d.maxForce=l}o.prototype=new r,o.prototype.update=function(){var h=this.bodyA,u=this.bodyB,c=this.distanceEquation,l=this.distance*.5,d=c.ni;u.position.vsub(h.position,d),d.normalize(),d.mult(l,c.ri),d.mult(-l,c.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,s){n.exports=u,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var h=e("../math/Vec3");function u(d,f,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new h,p=v.pivotB?v.pivotB.clone():new h;r.call(this,d,m,f,p,g);var _=this.axisA=v.axisA?v.axisA.clone():new h(1,0,0);_.normalize();var y=this.axisB=v.axisB?v.axisB.clone():new h(1,0,0);y.normalize();var x=this.rotationalEquation1=new a(d,f,v),M=this.rotationalEquation2=new a(d,f,v),T=this.motorEquation=new o(d,f,g);T.enabled=!1,this.equations.push(x,M,T)}u.prototype=new r,u.constructor=u,u.prototype.enableMotor=function(){this.motorEquation.enabled=!0},u.prototype.disableMotor=function(){this.motorEquation.enabled=!1},u.prototype.setMotorSpeed=function(d){this.motorEquation.targetVelocity=d},u.prototype.setMotorMaxForce=function(d){this.motorEquation.maxForce=d,this.motorEquation.minForce=-d};var c=new h,l=new h;u.prototype.update=function(){var d=this.bodyA,f=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,p=c,_=l,y=this.axisA,x=this.axisB;r.prototype.update.call(this),d.quaternion.vmult(y,p),f.quaternion.vmult(x,_),p.tangents(g.axisA,m.axisA),g.axisB.copy(_),m.axisB.copy(_),this.motorEquation.enabled&&(d.quaternion.vmult(this.axisA,v.axisA),f.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,s){n.exports=h,e("./Constraint");var r=e("./PointToPointConstraint"),a=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function h(u,c,l){l=l||{};var d=typeof l.maxForce<"u"?l.maxForce:1e6,f=new o,v=new o,g=new o;u.position.vadd(c.position,g),g.scale(.5,g),c.pointToLocalFrame(g,v),u.pointToLocalFrame(g,f),r.call(this,u,f,c,v,d);var m=this.rotationalEquation1=new a(u,c,l),p=this.rotationalEquation2=new a(u,c,l),_=this.rotationalEquation3=new a(u,c,l);this.equations.push(m,p,_)}h.prototype=new r,h.constructor=h,new o,new o,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,d=this.rotationalEquation2,f=this.rotationalEquation3;r.prototype.update.call(this),u.vectorToWorldFrame(o.UNIT_X,l.axisA),c.vectorToWorldFrame(o.UNIT_Y,l.axisB),u.vectorToWorldFrame(o.UNIT_Y,d.axisA),c.vectorToWorldFrame(o.UNIT_Z,d.axisB),u.vectorToWorldFrame(o.UNIT_Z,f.axisA),c.vectorToWorldFrame(o.UNIT_X,f.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,s){n.exports=h;var r=e("./Constraint"),a=e("../equations/ContactEquation"),o=e("../math/Vec3");function h(u,c,l,d,f){r.call(this,u,l),f=typeof f<"u"?f:1e6,this.pivotA=c?c.clone():new o,this.pivotB=d?d.clone():new o;var v=this.equationX=new a(u,l),g=this.equationY=new a(u,l),m=this.equationZ=new a(u,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-f,v.maxForce=g.maxForce=m.maxForce=f,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}h.prototype=new r,h.prototype.update=function(){var u=this.bodyA,c=this.bodyB,l=this.equationX,d=this.equationY,f=this.equationZ;u.quaternion.vmult(this.pivotA,l.ri),c.quaternion.vmult(this.pivotB,l.rj),d.ri.copy(l.ri),d.rj.copy(l.rj),f.ri.copy(l.ri),f.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,c,l,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.angle=typeof d.angle<"u"?d.angle:0}o.prototype=new a,o.prototype.constructor=o;var h=new r,u=new r;o.prototype.computeB=function(c){var l=this.a,d=this.b,f=this.axisA,v=this.axisB,g=h,m=u,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.angle)-f.dot(v),x=this.computeGW(),M=this.computeGiMf(),T=-y*l-x*d-c*M;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(m,p,_){_=typeof _<"u"?_:1e6,r.call(this,m,p,0,_),this.restitution=0,this.ri=new a,this.rj=new a,this.ni=new a}o.prototype=new r,o.prototype.constructor=o;var h=new a,u=new a,c=new a;o.prototype.computeB=function(m){var p=this.a,_=this.b,y=this.bi,x=this.bj,M=this.ri,T=this.rj,C=h,F=u,E=y.velocity,w=y.angularVelocity;y.force,y.torque;var P=x.velocity,W=x.angularVelocity;x.force,x.torque;var k=c,N=this.jacobianElementA,H=this.jacobianElementB,nt=this.ni;M.cross(nt,C),T.cross(nt,F),nt.negate(N.spatial),C.negate(N.rotational),H.spatial.copy(nt),H.rotational.copy(F),k.copy(x.position),k.vadd(T,k),k.vsub(y.position,k),k.vsub(M,k);var B=nt.dot(k),O=this.restitution+1,Y=O*P.dot(nt)-O*E.dot(nt)+W.dot(F)-w.dot(C),X=this.computeGiMf(),b=-B*p-Y*_-m*X;return b};var l=new a,d=new a,f=new a,v=new a,g=new a;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,p=d,_=f,y=v,x=g;return this.bi.position.vadd(this.ri,_),this.bj.position.vadd(this.rj,y),this.bi.getVelocityAtWorldPoint(_,m),this.bj.getVelocityAtWorldPoint(y,p),m.vsub(p,x),this.ni.dot(x)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,s){n.exports=o;var r=e("../math/JacobianElement"),a=e("../math/Vec3");function o(g,m,p,_){this.id=o.id++,this.minForce=typeof p>"u"?-1e6:p,this.maxForce=typeof _>"u"?1e6:_,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,p){var _=m,y=g,x=p;this.a=4/(x*(1+4*_)),this.b=4*_/(1+4*_),this.eps=4/(x*x*y*(1+4*_))},o.prototype.computeB=function(g,m,p){var _=this.computeGW(),y=this.computeGq(),x=this.computeGiMf();return-y*g-_*m-x*p},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.position,x=_.position;return g.spatial.dot(y)+m.spatial.dot(x)};var h=new a;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.velocity,x=_.velocity,M=p.angularVelocity||h,T=_.angularVelocity||h;return g.multiplyVectors(y,M)+m.multiplyVectors(x,T)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.vlambda,x=_.vlambda,M=p.wlambda||h,T=_.wlambda||h;return g.multiplyVectors(y,M)+m.multiplyVectors(x,T)};var u=new a,c=new a,l=new a,d=new a;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.force,x=p.torque,M=_.force,T=_.torque,C=p.invMassSolve,F=_.invMassSolve;return p.invInertiaWorldSolve?p.invInertiaWorldSolve.vmult(x,l):l.set(0,0,0),_.invInertiaWorldSolve?_.invInertiaWorldSolve.vmult(T,d):d.set(0,0,0),y.mult(C,u),M.mult(F,c),g.multiplyVectors(u,l)+m.multiplyVectors(c,d)};var f=new a;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,p=this.bi,_=this.bj,y=p.invMassSolve,x=_.invMassSolve,M=p.invInertiaWorldSolve,T=_.invInertiaWorldSolve,C=y+x;return M&&(M.vmult(g.rotational,f),C+=f.dot(g.rotational)),T&&(T.vmult(m.rotational,f),C+=f.dot(m.rotational)),C};var v=new a;new a,new a,new a,new a,new a,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,p=this.jacobianElementB,_=this.bi,y=this.bj,x=v;m.spatial.mult(_.invMassSolve*g,x),_.vlambda.vadd(x,_.vlambda),p.spatial.mult(y.invMassSolve*g,x),y.vlambda.vadd(x,y.vlambda),_.invInertiaWorldSolve&&(_.invInertiaWorldSolve.vmult(m.rotational,x),x.mult(g,x),_.wlambda.vadd(x,_.wlambda)),y.invInertiaWorldSolve&&(y.invInertiaWorldSolve.vmult(p.rotational,x),x.mult(g,x),y.wlambda.vadd(x,y.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,s){n.exports=o;var r=e("./Equation"),a=e("../math/Vec3");e("../math/Mat3");function o(c,l,d){r.call(this,c,l,-d,d),this.ri=new a,this.rj=new a,this.t=new a}o.prototype=new r,o.prototype.constructor=o;var h=new a,u=new a;o.prototype.computeB=function(c){this.a;var l=this.b;this.bi,this.bj;var d=this.ri,f=this.rj,v=h,g=u,m=this.t;d.cross(m,v),f.cross(m,g);var p=this.jacobianElementA,_=this.jacobianElementB;m.negate(p.spatial),v.negate(p.rotational),_.spatial.copy(m),_.rotational.copy(g);var y=this.computeGW(),x=this.computeGiMf(),M=-y*l-c*x;return M}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(c,l,d){d=d||{};var f=typeof d.maxForce<"u"?d.maxForce:1e6;a.call(this,c,l,-f,f),this.axisA=d.axisA?d.axisA.clone():new r(1,0,0),this.axisB=d.axisB?d.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new a,o.prototype.constructor=o;var h=new r,u=new r;o.prototype.computeB=function(c){var l=this.a,d=this.b,f=this.axisA,v=this.axisB,g=h,m=u,p=this.jacobianElementA,_=this.jacobianElementB;f.cross(v,g),v.cross(f,m),p.rotational.copy(m),_.rotational.copy(g);var y=Math.cos(this.maxAngle)-f.dot(v),x=this.computeGW(),M=this.computeGiMf(),T=-y*l-x*d-c*M;return T}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,s){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var a=e("./Equation");function o(h,u,c){c=typeof c<"u"?c:1e6,a.call(this,h,u,-c,c),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new a,o.prototype.constructor=o,o.prototype.computeB=function(h){this.a;var u=this.b;this.bi,this.bj;var c=this.axisA,l=this.axisB,d=this.jacobianElementA,f=this.jacobianElementB;d.rotational.copy(c),l.negate(f.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*u-h*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,s){var r=e("../utils/Utils");n.exports=a;function a(o,h,u){u=r.defaults(u,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=a.idCounter++,this.materials=[o,h],this.friction=u.friction,this.restitution=u.restitution,this.contactEquationStiffness=u.contactEquationStiffness,this.contactEquationRelaxation=u.contactEquationRelaxation,this.frictionEquationStiffness=u.frictionEquationStiffness,this.frictionEquationRelaxation=u.frictionEquationRelaxation}a.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,s){n.exports=r;function r(a){var o="";a=a||{},typeof a=="string"?(o=a,a={}):typeof a=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof a.friction<"u"?a.friction:-1,this.restitution=typeof a.restitution<"u"?a.restitution:-1}r.idCounter=0},{}],26:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(){this.spatial=new r,this.rotational=new r}a.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},a.prototype.multiplyVectors=function(o,h){return o.dot(this.spatial)+h.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}a.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},a.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},a.prototype.setTrace=function(o){var h=this.elements;h[0]=o.x,h[4]=o.y,h[8]=o.z},a.prototype.getTrace=function(h){var h=h||new r,u=this.elements;h.x=u[0],h.y=u[4],h.z=u[8]},a.prototype.vmult=function(o,h){h=h||new r;var u=this.elements,c=o.x,l=o.y,d=o.z;return h.x=u[0]*c+u[1]*l+u[2]*d,h.y=u[3]*c+u[4]*l+u[5]*d,h.z=u[6]*c+u[7]*l+u[8]*d,h},a.prototype.smult=function(o){for(var h=0;h<this.elements.length;h++)this.elements[h]*=o},a.prototype.mmult=function(o,h){for(var u=h||new a,c=0;c<3;c++)for(var l=0;l<3;l++){for(var d=0,f=0;f<3;f++)d+=o.elements[c+f*3]*this.elements[f+l*3];u.elements[c+l*3]=d}return u},a.prototype.scale=function(o,h){h=h||new a;for(var u=this.elements,c=h.elements,l=0;l!==3;l++)c[3*l+0]=o.x*u[3*l+0],c[3*l+1]=o.y*u[3*l+1],c[3*l+2]=o.z*u[3*l+2];return h},a.prototype.solve=function(o,h){h=h||new r;for(var u=3,c=4,l=[],d=0;d<u*c;d++)l.push(0);var d,f;for(d=0;d<3;d++)for(f=0;f<3;f++)l[d+c*f]=this.elements[d+3*f];l[3+4*0]=o.x,l[3+4*1]=o.y,l[3+4*2]=o.z;var v=3,g=v,m,p=4,_;do{if(d=g-v,l[d+c*d]===0){for(f=d+1;f<g;f++)if(l[d+c*f]!==0){m=p;do _=p-m,l[_+c*d]+=l[_+c*f];while(--m);break}}if(l[d+c*d]!==0)for(f=d+1;f<g;f++){var y=l[d+c*f]/l[d+c*d];m=p;do _=p-m,l[_+c*f]=_<=d?0:l[_+c*f]-l[_+c*d]*y;while(--m)}}while(--v);if(h.z=l[2*c+3]/l[2*c+2],h.y=(l[1*c+3]-l[1*c+2]*h.z)/l[1*c+1],h.x=(l[0*c+3]-l[0*c+2]*h.z-l[0*c+1]*h.y)/l[0*c+0],isNaN(h.x)||isNaN(h.y)||isNaN(h.z)||h.x===1/0||h.y===1/0||h.z===1/0)throw"Could not solve equation! Got x=["+h.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return h},a.prototype.e=function(o,h,u){if(u===void 0)return this.elements[h+3*o];this.elements[h+3*o]=u},a.prototype.copy=function(o){for(var h=0;h<o.elements.length;h++)this.elements[h]=o.elements[h];return this},a.prototype.toString=function(){for(var o="",h=",",u=0;u<9;u++)o+=this.elements[u]+h;return o},a.prototype.reverse=function(o){o=o||new a;for(var h=3,u=6,c=[],l=0;l<h*u;l++)c.push(0);var l,d;for(l=0;l<3;l++)for(d=0;d<3;d++)c[l+u*d]=this.elements[l+3*d];c[3+6*0]=1,c[3+6*1]=0,c[3+6*2]=0,c[4+6*0]=0,c[4+6*1]=1,c[4+6*2]=0,c[5+6*0]=0,c[5+6*1]=0,c[5+6*2]=1;var f=3,v=f,g,m=u,p;do{if(l=v-f,c[l+u*l]===0){for(d=l+1;d<v;d++)if(c[l+u*d]!==0){g=m;do p=m-g,c[p+u*l]+=c[p+u*d];while(--g);break}}if(c[l+u*l]!==0)for(d=l+1;d<v;d++){var _=c[l+u*d]/c[l+u*l];g=m;do p=m-g,c[p+u*d]=p<=l?0:c[p+u*d]-c[p+u*l]*_;while(--g)}}while(--f);l=2;do{d=l-1;do{var _=c[l+u*d]/c[l+u*l];g=u;do p=u-g,c[p+u*d]=c[p+u*d]-c[p+u*l]*_;while(--g)}while(d--)}while(--l);l=2;do{var _=1/c[l+u*l];g=u;do p=u-g,c[p+u*l]=c[p+u*l]*_;while(--g)}while(l--);l=2;do{d=2;do{if(p=c[h+d+u*l],isNaN(p)||p===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,d,p)}while(d--)}while(l--);return o},a.prototype.setRotationFromQuaternion=function(o){var h=o.x,u=o.y,c=o.z,l=o.w,d=h+h,f=u+u,v=c+c,g=h*d,m=h*f,p=h*v,_=u*f,y=u*v,x=c*v,M=l*d,T=l*f,C=l*v,F=this.elements;return F[3*0+0]=1-(_+x),F[3*0+1]=m-C,F[3*0+2]=p+T,F[3*1+0]=m+C,F[3*1+1]=1-(g+x),F[3*1+2]=y-M,F[3*2+0]=p-T,F[3*2+1]=y+M,F[3*2+2]=1-(g+_),this},a.prototype.transpose=function(o){o=o||new a;for(var h=o.elements,u=this.elements,c=0;c!==3;c++)for(var l=0;l!==3;l++)h[3*c+l]=u[3*l+c];return o}},{"./Vec3":30}],28:[function(e,n,s){n.exports=a;var r=e("./Vec3");function a(d,f,v,g){this.x=d!==void 0?d:0,this.y=f!==void 0?f:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}a.prototype.set=function(d,f,v,g){this.x=d,this.y=f,this.z=v,this.w=g},a.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},a.prototype.setFromAxisAngle=function(d,f){var v=Math.sin(f*.5);this.x=d.x*v,this.y=d.y*v,this.z=d.z*v,this.w=Math.cos(f*.5)},a.prototype.toAxisAngle=function(d){d=d||new r,this.normalize();var f=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(d.x=this.x,d.y=this.y,d.z=this.z):(d.x=this.x/v,d.y=this.y/v,d.z=this.z/v),[d,f]};var o=new r,h=new r;a.prototype.setFromVectors=function(d,f){if(d.isAntiparallelTo(f)){var v=o,g=h;d.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=d.cross(f);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(d.norm(),2)*Math.pow(f.norm(),2))+d.dot(f),this.normalize()}};var u=new r,c=new r,l=new r;a.prototype.mult=function(d,f){f=f||new a;var v=this.w,g=u,m=c,p=l;return g.set(this.x,this.y,this.z),m.set(d.x,d.y,d.z),f.w=v*d.w-g.dot(m),g.cross(m,p),f.x=v*m.x+d.w*g.x+p.x,f.y=v*m.y+d.w*g.y+p.y,f.z=v*m.z+d.w*g.z+p.z,f},a.prototype.inverse=function(d){var f=this.x,v=this.y,g=this.z,m=this.w;d=d||new a,this.conjugate(d);var p=1/(f*f+v*v+g*g+m*m);return d.x*=p,d.y*=p,d.z*=p,d.w*=p,d},a.prototype.conjugate=function(d){return d=d||new a,d.x=-this.x,d.y=-this.y,d.z=-this.z,d.w=this.w,d},a.prototype.normalize=function(){var d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(d=1/d,this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.normalizeFast=function(){var d=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;d===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=d,this.y*=d,this.z*=d,this.w*=d)},a.prototype.vmult=function(d,f){f=f||new r;var v=d.x,g=d.y,m=d.z,p=this.x,_=this.y,y=this.z,x=this.w,M=x*v+_*m-y*g,T=x*g+y*v-p*m,C=x*m+p*g-_*v,F=-p*v-_*g-y*m;return f.x=M*x+F*-p+T*-y-C*-_,f.y=T*x+F*-_+C*-p-M*-y,f.z=C*x+F*-y+M*-_-T*-p,f},a.prototype.copy=function(d){return this.x=d.x,this.y=d.y,this.z=d.z,this.w=d.w,this},a.prototype.toEuler=function(d,f){f=f||"YZX";var v,g,m,p=this.x,_=this.y,y=this.z,x=this.w;switch(f){case"YZX":var M=p*_+y*x;if(M>.499&&(v=2*Math.atan2(p,x),g=Math.PI/2,m=0),M<-.499&&(v=-2*Math.atan2(p,x),g=-Math.PI/2,m=0),isNaN(v)){var T=p*p,C=_*_,F=y*y;v=Math.atan2(2*_*x-2*p*y,1-2*C-2*F),g=Math.asin(2*M),m=Math.atan2(2*p*x-2*_*y,1-2*T-2*F)}break;default:throw new Error("Euler order "+f+" not supported yet.")}d.y=v,d.z=g,d.x=m},a.prototype.setFromEuler=function(d,f,v,g){g=g||"XYZ";var m=Math.cos(d/2),p=Math.cos(f/2),_=Math.cos(v/2),y=Math.sin(d/2),x=Math.sin(f/2),M=Math.sin(v/2);return g==="XYZ"?(this.x=y*p*_+m*x*M,this.y=m*x*_-y*p*M,this.z=m*p*M+y*x*_,this.w=m*p*_-y*x*M):g==="YXZ"?(this.x=y*p*_+m*x*M,this.y=m*x*_-y*p*M,this.z=m*p*M-y*x*_,this.w=m*p*_+y*x*M):g==="ZXY"?(this.x=y*p*_-m*x*M,this.y=m*x*_+y*p*M,this.z=m*p*M+y*x*_,this.w=m*p*_-y*x*M):g==="ZYX"?(this.x=y*p*_-m*x*M,this.y=m*x*_+y*p*M,this.z=m*p*M-y*x*_,this.w=m*p*_+y*x*M):g==="YZX"?(this.x=y*p*_+m*x*M,this.y=m*x*_+y*p*M,this.z=m*p*M-y*x*_,this.w=m*p*_-y*x*M):g==="XZY"&&(this.x=y*p*_-m*x*M,this.y=m*x*_-y*p*M,this.z=m*p*M+y*x*_,this.w=m*p*_+y*x*M),this},a.prototype.clone=function(){return new a(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,s){var r=e("./Vec3"),a=e("./Quaternion");n.exports=o;function o(u){u=u||{},this.position=new r,u.position&&this.position.copy(u.position),this.quaternion=new a,u.quaternion&&this.quaternion.copy(u.quaternion)}var h=new a;o.pointToLocalFrame=function(u,c,l,f){var f=f||new r;return l.vsub(u,f),c.conjugate(h),h.vmult(f,f),f},o.prototype.pointToLocal=function(u,c){return o.pointToLocalFrame(this.position,this.quaternion,u,c)},o.pointToWorldFrame=function(u,c,l,f){var f=f||new r;return c.vmult(l,f),f.vadd(u,f),f},o.prototype.pointToWorld=function(u,c){return o.pointToWorldFrame(this.position,this.quaternion,u,c)},o.prototype.vectorToWorldFrame=function(u,l){var l=l||new r;return this.quaternion.vmult(u,l),l},o.vectorToWorldFrame=function(u,c,l){return u.vmult(c,l),l},o.vectorToLocalFrame=function(u,c,l,f){var f=f||new r;return c.w*=-1,c.vmult(l,f),c.w*=-1,f}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,s){n.exports=a;var r=e("./Mat3");function a(c,l,d){this.x=c||0,this.y=l||0,this.z=d||0}a.ZERO=new a(0,0,0),a.UNIT_X=new a(1,0,0),a.UNIT_Y=new a(0,1,0),a.UNIT_Z=new a(0,0,1),a.prototype.cross=function(c,l){var d=c.x,f=c.y,v=c.z,g=this.x,m=this.y,p=this.z;return l=l||new a,l.x=m*v-p*f,l.y=p*d-g*v,l.z=g*f-m*d,l},a.prototype.set=function(c,l,d){return this.x=c,this.y=l,this.z=d,this},a.prototype.setZero=function(){this.x=this.y=this.z=0},a.prototype.vadd=function(c,l){if(l)l.x=c.x+this.x,l.y=c.y+this.y,l.z=c.z+this.z;else return new a(this.x+c.x,this.y+c.y,this.z+c.z)},a.prototype.vsub=function(c,l){if(l)l.x=this.x-c.x,l.y=this.y-c.y,l.z=this.z-c.z;else return new a(this.x-c.x,this.y-c.y,this.z-c.z)},a.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.prototype.normalize=function(){var c=this.x,l=this.y,d=this.z,f=Math.sqrt(c*c+l*l+d*d);if(f>0){var v=1/f;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return f},a.prototype.unit=function(c){c=c||new a;var l=this.x,d=this.y,f=this.z,v=Math.sqrt(l*l+d*d+f*f);return v>0?(v=1/v,c.x=l*v,c.y=d*v,c.z=f*v):(c.x=1,c.y=0,c.z=0),c},a.prototype.norm=function(){var c=this.x,l=this.y,d=this.z;return Math.sqrt(c*c+l*l+d*d)},a.prototype.length=a.prototype.norm,a.prototype.norm2=function(){return this.dot(this)},a.prototype.lengthSquared=a.prototype.norm2,a.prototype.distanceTo=function(c){var l=this.x,d=this.y,f=this.z,v=c.x,g=c.y,m=c.z;return Math.sqrt((v-l)*(v-l)+(g-d)*(g-d)+(m-f)*(m-f))},a.prototype.distanceSquared=function(c){var l=this.x,d=this.y,f=this.z,v=c.x,g=c.y,m=c.z;return(v-l)*(v-l)+(g-d)*(g-d)+(m-f)*(m-f)},a.prototype.mult=function(c,l){l=l||new a;var d=this.x,f=this.y,v=this.z;return l.x=c*d,l.y=c*f,l.z=c*v,l},a.prototype.scale=a.prototype.mult,a.prototype.dot=function(c){return this.x*c.x+this.y*c.y+this.z*c.z},a.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.prototype.negate=function(c){return c=c||new a,c.x=-this.x,c.y=-this.y,c.z=-this.z,c};var o=new a,h=new a;a.prototype.tangents=function(c,l){var d=this.norm();if(d>0){var f=o,v=1/d;f.set(this.x*v,this.y*v,this.z*v);var g=h;Math.abs(f.x)<.9?(g.set(1,0,0),f.cross(g,c)):(g.set(0,1,0),f.cross(g,c)),f.cross(c,l)}else c.set(1,0,0),l.set(0,1,0)},a.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.prototype.toArray=function(){return[this.x,this.y,this.z]},a.prototype.copy=function(c){return this.x=c.x,this.y=c.y,this.z=c.z,this},a.prototype.lerp=function(c,l,d){var f=this.x,v=this.y,g=this.z;d.x=f+(c.x-f)*l,d.y=v+(c.y-v)*l,d.z=g+(c.z-g)*l},a.prototype.almostEquals=function(c,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-c.x)>l||Math.abs(this.y-c.y)>l||Math.abs(this.z-c.z)>l)},a.prototype.almostZero=function(c){return c===void 0&&(c=1e-6),!(Math.abs(this.x)>c||Math.abs(this.y)>c||Math.abs(this.z)>c)};var u=new a;a.prototype.isAntiparallelTo=function(c,l){return this.negate(u),u.almostEquals(c,l)},a.prototype.clone=function(){return new a(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,s){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var a=e("../math/Vec3"),o=e("../math/Mat3"),h=e("../math/Quaternion");e("../material/Material");var u=e("../collision/AABB"),c=e("../shapes/Box");function l(P){P=P||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new a,this.collisionFilterGroup=typeof P.collisionFilterGroup=="number"?P.collisionFilterGroup:1,this.collisionFilterMask=typeof P.collisionFilterMask=="number"?P.collisionFilterMask:1,this.collisionResponse=!0,this.position=new a,P.position&&this.position.copy(P.position),this.previousPosition=new a,this.initPosition=new a,this.velocity=new a,P.velocity&&this.velocity.copy(P.velocity),this.initVelocity=new a,this.force=new a;var W=typeof P.mass=="number"?P.mass:0;this.mass=W,this.invMass=W>0?1/W:0,this.material=P.material||null,this.linearDamping=typeof P.linearDamping=="number"?P.linearDamping:.01,this.type=W<=0?l.STATIC:l.DYNAMIC,typeof P.type==typeof l.STATIC&&(this.type=P.type),this.allowSleep=typeof P.allowSleep<"u"?P.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof P.sleepSpeedLimit<"u"?P.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof P.sleepTimeLimit<"u"?P.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new a,this.quaternion=new h,P.quaternion&&this.quaternion.copy(P.quaternion),this.initQuaternion=new h,this.angularVelocity=new a,P.angularVelocity&&this.angularVelocity.copy(P.angularVelocity),this.initAngularVelocity=new a,this.interpolatedPosition=new a,this.interpolatedQuaternion=new h,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new a,this.invInertia=new a,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new a,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof P.fixedRotation<"u"?P.fixedRotation:!1,this.angularDamping=typeof P.angularDamping<"u"?P.angularDamping:.01,this.aabb=new u,this.aabbNeedsUpdate=!0,this.wlambda=new a,P.shape&&this.addShape(P.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var P=this.sleepState;this.sleepState=0,P===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(P){if(this.allowSleep){var W=this.sleepState,k=this.velocity.norm2()+this.angularVelocity.norm2(),N=Math.pow(this.sleepSpeedLimit,2);W===l.AWAKE&&k<N?(this.sleepState=l.SLEEPY,this.timeLastSleepy=P,this.dispatchEvent(l.sleepyEvent)):W===l.SLEEPY&&k>N?this.wakeUp():W===l.SLEEPY&&P-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(P,k){var k=k||new a;return P.vsub(this.position,k),this.quaternion.conjugate().vmult(k,k),k},l.prototype.vectorToLocalFrame=function(P,k){var k=k||new a;return this.quaternion.conjugate().vmult(P,k),k},l.prototype.pointToWorldFrame=function(P,k){var k=k||new a;return this.quaternion.vmult(P,k),k.vadd(this.position,k),k},l.prototype.vectorToWorldFrame=function(P,k){var k=k||new a;return this.quaternion.vmult(P,k),k};var d=new a,f=new h;l.prototype.addShape=function(P,W,k){var N=new a,H=new h;return W&&N.copy(W),k&&H.copy(k),this.shapes.push(P),this.shapeOffsets.push(N),this.shapeOrientations.push(H),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var P=this.shapes,W=this.shapeOffsets,k=P.length,N=0,H=0;H!==k;H++){var nt=P[H];nt.updateBoundingSphereRadius();var B=W[H].norm(),O=nt.boundingSphereRadius;B+O>N&&(N=B+O)}this.boundingRadius=N};var v=new u;l.prototype.computeAABB=function(){for(var P=this.shapes,W=this.shapeOffsets,k=this.shapeOrientations,N=P.length,H=d,nt=f,B=this.quaternion,O=this.aabb,Y=v,X=0;X!==N;X++){var b=P[X];k[X].mult(B,nt),nt.vmult(W[X],H),H.vadd(this.position,H),b.calculateWorldAABB(H,nt,Y.lowerBound,Y.upperBound),X===0?O.copy(Y):O.extend(Y)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(P){var W=this.invInertia;if(!(W.x===W.y&&W.y===W.z&&!P)){var k=g,N=m;k.setRotationFromQuaternion(this.quaternion),k.transpose(N),k.scale(W,k),k.mmult(N,this.invInertiaWorld)}};var p=new a,_=new a;l.prototype.applyForce=function(P,W){if(this.type===l.DYNAMIC){var k=p;W.vsub(this.position,k);var N=_;k.cross(P,N),this.force.vadd(P,this.force),this.torque.vadd(N,this.torque)}};var y=new a,x=new a;l.prototype.applyLocalForce=function(P,W){if(this.type===l.DYNAMIC){var k=y,N=x;this.vectorToWorldFrame(P,k),this.pointToWorldFrame(W,N),this.applyForce(k,N)}};var M=new a,T=new a,C=new a;l.prototype.applyImpulse=function(P,W){if(this.type===l.DYNAMIC){var k=M;W.vsub(this.position,k);var N=T;N.copy(P),N.mult(this.invMass,N),this.velocity.vadd(N,this.velocity);var H=C;k.cross(P,H),this.invInertiaWorld.vmult(H,H),this.angularVelocity.vadd(H,this.angularVelocity)}};var F=new a,E=new a;l.prototype.applyLocalImpulse=function(P,W){if(this.type===l.DYNAMIC){var k=F,N=E;this.vectorToWorldFrame(P,k),this.pointToWorldFrame(W,N),this.applyImpulse(k,N)}};var w=new a;l.prototype.updateMassProperties=function(){var P=w;this.invMass=this.mass>0?1/this.mass:0;var W=this.inertia,k=this.fixedRotation;this.computeAABB(),P.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),c.calculateInertia(P,this.mass,W),this.invInertia.set(W.x>0&&!k?1/W.x:0,W.y>0&&!k?1/W.y:0,W.z>0&&!k?1/W.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(P,W){var k=new a;return P.vsub(this.position,k),this.angularVelocity.cross(k,W),this.velocity.vadd(W,W),W}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,s){e("./Body");var r=e("../math/Vec3"),a=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),h=e("../objects/WheelInfo");n.exports=u;function u(B){this.chassisBody=B.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof B.indexRightAxis<"u"?B.indexRightAxis:1,this.indexForwardAxis=typeof B.indexForwardAxis<"u"?B.indexForwardAxis:0,this.indexUpAxis=typeof B.indexUpAxis<"u"?B.indexUpAxis:2}new r,new r,new r;var c=new r,l=new r,d=new r;new o,u.prototype.addWheel=function(B){B=B||{};var O=new h(B),Y=this.wheelInfos.length;return this.wheelInfos.push(O),Y},u.prototype.setSteeringValue=function(B,O){var Y=this.wheelInfos[O];Y.steering=B},new r,u.prototype.applyEngineForce=function(B,O){this.wheelInfos[O].engineForce=B},u.prototype.setBrake=function(B,O){this.wheelInfos[O].brake=B},u.prototype.addToWorld=function(B){this.constraints,B.add(this.chassisBody);var O=this;this.preStepCallback=function(){O.updateVehicle(B.dt)},B.addEventListener("preStep",this.preStepCallback),this.world=B},u.prototype.getVehicleAxisWorld=function(B,O){O.set(B===0?1:0,B===1?1:0,B===2?1:0),this.chassisBody.vectorToWorldFrame(O,O)},u.prototype.updateVehicle=function(B){for(var O=this.wheelInfos,Y=O.length,X=this.chassisBody,b=0;b<Y;b++)this.updateWheelTransform(b);this.currentVehicleSpeedKmHour=3.6*X.velocity.norm();var U=new r;this.getVehicleAxisWorld(this.indexForwardAxis,U),U.dot(X.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var b=0;b<Y;b++)this.castRay(O[b]);this.updateSuspension(B);for(var D=new r,I=new r,b=0;b<Y;b++){var R=O[b],$=R.suspensionForce;$>R.maxSuspensionForce&&($=R.maxSuspensionForce),R.raycastResult.hitNormalWorld.scale($*B,D),R.raycastResult.hitPointWorld.vsub(X.position,I),X.applyImpulse(D,R.raycastResult.hitPointWorld)}this.updateFriction(B);var at=new r,et=new r,K=new r;for(b=0;b<Y;b++){var R=O[b];X.getVelocityAtWorldPoint(R.chassisConnectionPointWorld,K);var ot=1;switch(this.indexUpAxis){case 1:ot=-1;break}if(R.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var ht=et.dot(R.raycastResult.hitNormalWorld);R.raycastResult.hitNormalWorld.scale(ht,at),et.vsub(at,et);var q=et.dot(K);R.deltaRotation=ot*q*B/R.radius}(R.sliding||!R.isInContact)&&R.engineForce!==0&&R.useCustomSlidingRotationalSpeed&&(R.deltaRotation=(R.engineForce>0?1:-1)*R.customSlidingRotationalSpeed*B),Math.abs(R.brake)>Math.abs(R.engineForce)&&(R.deltaRotation=0),R.rotation+=R.deltaRotation,R.deltaRotation*=.99}},u.prototype.updateSuspension=function(B){for(var O=this.chassisBody,Y=O.mass,X=this.wheelInfos,b=X.length,U=0;U<b;U++){var D=X[U];if(D.isInContact){var I,R=D.suspensionRestLength,$=D.suspensionLength,at=R-$;I=D.suspensionStiffness*at*D.clippedInvContactDotSuspension;var et=D.suspensionRelativeVelocity,K;et<0?K=D.dampingCompression:K=D.dampingRelaxation,I-=K*et,D.suspensionForce=I*Y,D.suspensionForce<0&&(D.suspensionForce=0)}else D.suspensionForce=0}},u.prototype.removeFromWorld=function(B){this.constraints,B.remove(this.chassisBody),B.removeEventListener("preStep",this.preStepCallback),this.world=null};var f=new r,v=new r;u.prototype.castRay=function(B){var O=f,Y=v;this.updateWheelTransformWorld(B);var X=this.chassisBody,b=-1,U=B.suspensionRestLength+B.radius;B.directionWorld.scale(U,O);var D=B.chassisConnectionPointWorld;D.vadd(O,Y);var I=B.raycastResult;I.reset();var R=X.collisionResponse;X.collisionResponse=!1,this.world.rayTest(D,Y,I),X.collisionResponse=R;var $=I.body;if(B.raycastResult.groundObject=0,$){b=I.distance,B.raycastResult.hitNormalWorld=I.hitNormalWorld,B.isInContact=!0;var at=I.distance;B.suspensionLength=at-B.radius;var et=B.suspensionRestLength-B.maxSuspensionTravel,K=B.suspensionRestLength+B.maxSuspensionTravel;B.suspensionLength<et&&(B.suspensionLength=et),B.suspensionLength>K&&(B.suspensionLength=K,B.raycastResult.reset());var ot=B.raycastResult.hitNormalWorld.dot(B.directionWorld),ht=new r;X.getVelocityAtWorldPoint(B.raycastResult.hitPointWorld,ht);var q=B.raycastResult.hitNormalWorld.dot(ht);if(ot>=-.1)B.suspensionRelativeVelocity=0,B.clippedInvContactDotSuspension=1/.1;else{var Lt=-1/ot;B.suspensionRelativeVelocity=q*Lt,B.clippedInvContactDotSuspension=Lt}}else B.suspensionLength=B.suspensionRestLength+0*B.maxSuspensionTravel,B.suspensionRelativeVelocity=0,B.directionWorld.scale(-1,B.raycastResult.hitNormalWorld),B.clippedInvContactDotSuspension=1;return b},u.prototype.updateWheelTransformWorld=function(B){B.isInContact=!1;var O=this.chassisBody;O.pointToWorldFrame(B.chassisConnectionPointLocal,B.chassisConnectionPointWorld),O.vectorToWorldFrame(B.directionLocal,B.directionWorld),O.vectorToWorldFrame(B.axleLocal,B.axleWorld)},u.prototype.updateWheelTransform=function(B){var O=c,Y=l,X=d,b=this.wheelInfos[B];this.updateWheelTransformWorld(b),b.directionLocal.scale(-1,O),Y.copy(b.axleLocal),O.cross(Y,X),X.normalize(),Y.normalize();var U=b.steering,D=new a;D.setFromAxisAngle(O,U);var I=new a;I.setFromAxisAngle(Y,b.rotation);var R=b.worldTransform.quaternion;this.chassisBody.quaternion.mult(D,R),R.mult(I,R),R.normalize();var $=b.worldTransform.position;$.copy(b.directionWorld),$.scale(b.suspensionLength,$),$.vadd(b.chassisConnectionPointWorld,$)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];u.prototype.getWheelTransformWorld=function(B){return this.wheelInfos[B].worldTransform};var m=new r,p=[],_=[],y=1;u.prototype.updateFriction=function(B){for(var O=m,Y=this.wheelInfos,X=Y.length,b=this.chassisBody,U=_,D=p,I=0;I<X;I++){var R=Y[I],$=R.raycastResult.body;R.sideImpulse=0,R.forwardImpulse=0,U[I]||(U[I]=new r),D[I]||(D[I]=new r)}for(var I=0;I<X;I++){var R=Y[I],$=R.raycastResult.body;if($){var at=D[I],et=this.getWheelTransformWorld(I);et.vectorToWorldFrame(g[this.indexRightAxis],at);var K=R.raycastResult.hitNormalWorld,ot=at.dot(K);K.scale(ot,O),at.vsub(O,at),at.normalize(),K.cross(at,U[I]),U[I].normalize(),R.sideImpulse=nt(b,R.raycastResult.hitPointWorld,$,R.raycastResult.hitPointWorld,at),R.sideImpulse*=y}}var ht=1,q=.5;this.sliding=!1;for(var I=0;I<X;I++){var R=Y[I],$=R.raycastResult.body,Lt=0;if(R.slipInfo=1,$){var ft=0,it=R.brake?R.brake:ft;Lt=C(b,$,R.raycastResult.hitPointWorld,U[I],it),Lt+=R.engineForce*B;var ct=it/Lt;R.slipInfo*=ct}if(R.forwardImpulse=0,R.skidInfo=1,$){R.skidInfo=1;var Zt=R.suspensionForce*B*R.frictionSlip,At=Zt,Wt=Zt*At;R.forwardImpulse=Lt;var Mt=R.forwardImpulse*q,ee=R.sideImpulse*ht,ie=Mt*Mt+ee*ee;if(R.sliding=!1,ie>Wt){this.sliding=!0,R.sliding=!0;var ct=Zt/Math.sqrt(ie);R.skidInfo*=ct}}}if(this.sliding)for(var I=0;I<X;I++){var R=Y[I];R.sideImpulse!==0&&R.skidInfo<1&&(R.forwardImpulse*=R.skidInfo,R.sideImpulse*=R.skidInfo)}for(var I=0;I<X;I++){var R=Y[I],L=new r;if(L.copy(R.raycastResult.hitPointWorld),R.forwardImpulse!==0){var A=new r;U[I].scale(R.forwardImpulse,A),b.applyImpulse(A,L)}if(R.sideImpulse!==0){var $=R.raycastResult.body,J=new r;J.copy(R.raycastResult.hitPointWorld);var vt=new r;D[I].scale(R.sideImpulse,vt),b.pointToLocalFrame(L,L),L["xyz"[this.indexUpAxis]]*=R.rollInfluence,b.pointToWorldFrame(L,L),b.applyImpulse(vt,L),vt.scale(-1,vt),$.applyImpulse(vt,J)}}};var x=new r,M=new r,T=new r;function C(B,O,Y,X,b){var U=0,D=Y,I=x,R=M,$=T;B.getVelocityAtWorldPoint(D,I),O.getVelocityAtWorldPoint(D,R),I.vsub(R,$);var at=X.dot($),et=W(B,Y,X),K=W(O,Y,X),ot=1,ht=ot/(et+K);return U=-at*ht,b<U&&(U=b),U<-b&&(U=-b),U}var F=new r,E=new r,w=new r,P=new r;function W(B,O,Y){var X=F,b=E,U=w,D=P;return O.vsub(B.position,X),X.cross(Y,b),B.invInertiaWorld.vmult(b,D),D.cross(X,U),B.invMass+Y.dot(U)}var k=new r,N=new r,H=new r;function nt(B,O,Y,X,b,ot){var D=b.norm2();if(D>1.1)return 0;var I=k,R=N,$=H;B.getVelocityAtWorldPoint(O,I),Y.getVelocityAtWorldPoint(X,R),I.vsub(R,$);var at=b.dot($),et=.2,K=1/(B.invMass+Y.invMass),ot=-et*at*K;return ot}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,s){var r=e("./Body"),a=e("../shapes/Sphere"),o=e("../shapes/Box"),h=e("../math/Vec3"),u=e("../constraints/HingeConstraint");n.exports=c;function c(f){if(this.wheelBodies=[],this.coordinateSystem=typeof f.coordinateSystem>"u"?new h(1,2,3):f.coordinateSystem.clone(),this.chassisBody=f.chassisBody,!this.chassisBody){var v=new o(new h(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}c.prototype.addWheel=function(f){f=f||{};var v=f.body;v||(v=new r(1,new a(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new h;var g=typeof f.position<"u"?f.position.clone():new h,m=new h;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var p=typeof f.axis<"u"?f.axis.clone():new h(0,1,0);this.wheelAxes.push(p);var _=new u(this.chassisBody,v,{pivotA:g,axisA:p,pivotB:h.ZERO,axisB:p,collideConnected:!1});return this.constraints.push(_),this.wheelBodies.length-1},c.prototype.setSteeringValue=function(f,v){var g=this.wheelAxes[v],m=Math.cos(f),p=Math.sin(f),_=g.x,y=g.y;this.constraints[v].axisA.set(m*_-p*y,p*_+m*y,0)},c.prototype.setMotorSpeed=function(f,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=f},c.prototype.disableMotor=function(f){var v=this.constraints[f];v.disableMotor()};var l=new h;c.prototype.setWheelForce=function(f,v){this.wheelForces[v]=f},c.prototype.applyWheelForce=function(f,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],p=m.torque;g.scale(f,l),m.vectorToWorldFrame(l,l),p.vadd(l,p)},c.prototype.addToWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.add(g[m]);for(var m=0;m<v.length;m++)f.addConstraint(v[m]);f.addEventListener("preStep",this._update.bind(this))},c.prototype._update=function(){for(var f=this.wheelForces,v=0;v<f.length;v++)this.applyWheelForce(f[v],v)},c.prototype.removeFromWorld=function(f){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)f.remove(g[m]);for(var m=0;m<v.length;m++)f.removeConstraint(v[m])};var d=new h;c.prototype.getWheelSpeed=function(f){var v=this.wheelAxes[f],g=this.wheelBodies[f],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,d),m.dot(d)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,s){n.exports=a,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function a(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}a.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},a.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;a.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,p=v.id,_=this.smoothingRadius*this.smoothingRadius,y=o,x=0;x!==m;x++){var M=this.particles[x];M.position.vsub(v.position,y),p!==M.id&&y.norm2()<_&&g.push(M)}};var h=new r,u=new r,c=new r,l=new r,d=new r,f=new r;a.prototype.update=function(){for(var v=this.particles.length,g=h,m=this.speedOfSound,p=this.eps,_=0;_!==v;_++){var y=this.particles[_],x=this.neighbors[_];x.length=0,this.getNeighbors(y,x),x.push(this.particles[_]);for(var M=x.length,T=0,C=0;C!==M;C++){y.position.vsub(x[C].position,g);var F=g.norm(),E=this.w(F);T+=x[C].mass*E}this.densities[_]=T,this.pressures[_]=m*m*(this.densities[_]-this.density)}for(var w=u,P=c,W=l,k=d,N=f,_=0;_!==v;_++){var H=this.particles[_];w.set(0,0,0),P.set(0,0,0);for(var nt,B,x=this.neighbors[_],M=x.length,C=0;C!==M;C++){var O=x[C];H.position.vsub(O.position,k);var Y=k.norm();nt=-O.mass*(this.pressures[_]/(this.densities[_]*this.densities[_]+p)+this.pressures[C]/(this.densities[C]*this.densities[C]+p)),this.gradw(k,W),W.mult(nt,W),w.vadd(W,w),O.velocity.vsub(H.velocity,N),N.mult(1/(1e-4+this.densities[_]*this.densities[C])*this.viscosity*O.mass,N),B=this.nablaw(Y),N.mult(B,N),P.vadd(N,P)}P.mult(H.mass,P),w.mult(H.mass,w),H.force.vadd(P,H.force),H.force.vadd(w,H.force)}},a.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},a.prototype.gradw=function(v,g){var m=v.norm(),p=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(p,9))*Math.pow(p*p-m*m,2),g)},a.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,s){var r=e("../math/Vec3");n.exports=a;function a(_,y,x){x=x||{},this.restLength=typeof x.restLength=="number"?x.restLength:1,this.stiffness=x.stiffness||100,this.damping=x.damping||1,this.bodyA=_,this.bodyB=y,this.localAnchorA=new r,this.localAnchorB=new r,x.localAnchorA&&this.localAnchorA.copy(x.localAnchorA),x.localAnchorB&&this.localAnchorB.copy(x.localAnchorB),x.worldAnchorA&&this.setWorldAnchorA(x.worldAnchorA),x.worldAnchorB&&this.setWorldAnchorB(x.worldAnchorB)}a.prototype.setWorldAnchorA=function(_){this.bodyA.pointToLocalFrame(_,this.localAnchorA)},a.prototype.setWorldAnchorB=function(_){this.bodyB.pointToLocalFrame(_,this.localAnchorB)},a.prototype.getWorldAnchorA=function(_){this.bodyA.pointToWorldFrame(this.localAnchorA,_)},a.prototype.getWorldAnchorB=function(_){this.bodyB.pointToWorldFrame(this.localAnchorB,_)};var o=new r,h=new r,u=new r,c=new r,l=new r,d=new r,f=new r,v=new r,g=new r,m=new r,p=new r;a.prototype.applyForce=function(){var _=this.stiffness,y=this.damping,x=this.restLength,M=this.bodyA,T=this.bodyB,C=o,F=h,E=u,w=c,P=p,W=l,k=d,N=f,H=v,nt=g,B=m;this.getWorldAnchorA(W),this.getWorldAnchorB(k),W.vsub(M.position,N),k.vsub(T.position,H),k.vsub(W,C);var O=C.norm();F.copy(C),F.normalize(),T.velocity.vsub(M.velocity,E),T.angularVelocity.cross(H,P),E.vadd(P,E),M.angularVelocity.cross(N,P),E.vsub(P,E),F.mult(-_*(O-x)-y*E.dot(F),w),M.force.vsub(w,M.force),T.force.vadd(w,T.force),N.cross(w,nt),H.cross(w,B),M.torque.vsub(nt,M.torque),T.torque.vadd(B,T.torque)}},{"../math/Vec3":30}],36:[function(e,n,s){var r=e("../math/Vec3"),a=e("../math/Transform"),o=e("../collision/RaycastResult"),h=e("../utils/Utils");n.exports=u;function u(d){d=h.defaults(d,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=d.maxSuspensionTravel,this.customSlidingRotationalSpeed=d.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=d.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=d.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=d.chassisConnectionPointWorld.clone(),this.directionLocal=d.directionLocal.clone(),this.directionWorld=d.directionWorld.clone(),this.axleLocal=d.axleLocal.clone(),this.axleWorld=d.axleWorld.clone(),this.suspensionRestLength=d.suspensionRestLength,this.suspensionMaxLength=d.suspensionMaxLength,this.radius=d.radius,this.suspensionStiffness=d.suspensionStiffness,this.dampingCompression=d.dampingCompression,this.dampingRelaxation=d.dampingRelaxation,this.frictionSlip=d.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=d.rollInfluence,this.maxSuspensionForce=d.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=d.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new a,this.isInContact=!1}var l=new r,c=new r,l=new r;u.prototype.updateWheel=function(d){var f=this.raycastResult;if(this.isInContact){var v=f.hitNormalWorld.dot(f.directionWorld);f.hitPointWorld.vsub(d.position,c),d.getVelocityAtWorldPoint(c,l);var g=f.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else f.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,f.directionWorld.scale(-1,f.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3"),o=e("./ConvexPolyhedron");function h(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}h.prototype=new r,h.prototype.constructor=h,h.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,d=this.halfExtents.y,f=this.halfExtents.z,v=a,g=[new v(-l,-d,-f),new v(l,-d,-f),new v(l,d,-f),new v(-l,d,-f),new v(-l,-d,f),new v(l,-d,f),new v(l,d,f),new v(-l,d,f)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var p=new o(g,m);this.convexPolyhedronRepresentation=p,p.material=this.material},h.prototype.calculateLocalInertia=function(l,d){return d=d||new a,h.calculateInertia(this.halfExtents,l,d),d},h.calculateInertia=function(l,d,f){var v=l;f.x=1/12*d*(2*v.y*2*v.y+2*v.z*2*v.z),f.y=1/12*d*(2*v.x*2*v.x+2*v.z*2*v.z),f.z=1/12*d*(2*v.y*2*v.y+2*v.x*2*v.x)},h.prototype.getSideNormals=function(l,d){var f=l,v=this.halfExtents;if(f[0].set(v.x,0,0),f[1].set(0,v.y,0),f[2].set(0,0,v.z),f[3].set(-v.x,0,0),f[4].set(0,-v.y,0),f[5].set(0,0,-v.z),d!==void 0)for(var g=0;g!==f.length;g++)d.vmult(f[g],f[g]);return f},h.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},h.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var u=new a;new a,h.prototype.forEachWorldCorner=function(l,d,f){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)u.set(g[m][0],g[m][1],g[m][2]),d.vmult(u,u),l.vadd(u,u),f(u.x,u.y,u.z)};var c=[new a,new a,new a,new a,new a,new a,new a,new a];h.prototype.calculateWorldAABB=function(l,d,f,v){var g=this.halfExtents;c[0].set(g.x,g.y,g.z),c[1].set(-g.x,g.y,g.z),c[2].set(-g.x,-g.y,g.z),c[3].set(-g.x,-g.y,-g.z),c[4].set(g.x,-g.y,-g.z),c[5].set(g.x,g.y,-g.z),c[6].set(-g.x,g.y,-g.z),c[7].set(g.x,-g.y,g.z);var m=c[0];d.vmult(m,m),l.vadd(m,m),v.copy(m),f.copy(m);for(var p=1;p<8;p++){var m=c[p];d.vmult(m,m),l.vadd(m,m);var _=m.x,y=m.y,x=m.z;_>v.x&&(v.x=_),y>v.y&&(v.y=y),x>v.z&&(v.z=x),_<f.x&&(f.x=_),y<f.y&&(f.y=y),x<f.z&&(f.z=x)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function h(b,U,D){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=b||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=U||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=D?D.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}h.prototype=new r,h.prototype.constructor=h;var u=new a;h.prototype.computeEdges=function(){var b=this.faces,U=this.vertices;U.length;var D=this.uniqueEdges;D.length=0;for(var I=u,R=0;R!==b.length;R++)for(var $=b[R],at=$.length,et=0;et!==at;et++){var K=(et+1)%at;U[$[et]].vsub(U[$[K]],I),I.normalize();for(var ot=!1,ht=0;ht!==D.length;ht++)if(D[ht].almostEquals(I)||D[ht].almostEquals(I)){ot=!0;break}ot||D.push(I.clone())}},h.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var b=0;b<this.faces.length;b++){for(var U=0;U<this.faces[b].length;U++)if(!this.vertices[this.faces[b][U]])throw new Error("Vertex "+this.faces[b][U]+" not found!");var D=this.faceNormals[b]||new a;this.getFaceNormal(b,D),D.negate(D),this.faceNormals[b]=D;var I=this.vertices[this.faces[b][0]];if(D.dot(I)<0){console.error(".faceNormals["+b+"] = Vec3("+D.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var U=0;U<this.faces[b].length;U++)console.warn(".vertices["+this.faces[b][U]+"] = Vec3("+this.vertices[this.faces[b][U]].toString()+")")}}};var c=new a,l=new a;h.computeNormal=function(b,U,D,I){U.vsub(b,l),D.vsub(U,c),c.cross(l,I),I.isZero()||I.normalize()},h.prototype.getFaceNormal=function(b,U){var D=this.faces[b],I=this.vertices[D[0]],R=this.vertices[D[1]],$=this.vertices[D[2]];return h.computeNormal(I,R,$,U)};var d=new a;h.prototype.clipAgainstHull=function(b,U,D,I,R,$,at,et,K){for(var ot=d,ht=-1,q=-Number.MAX_VALUE,Lt=0;Lt<D.faces.length;Lt++){ot.copy(D.faceNormals[Lt]),R.vmult(ot,ot);var ft=ot.dot($);ft>q&&(q=ft,ht=Lt)}for(var it=[],ct=D.faces[ht],Zt=ct.length,At=0;At<Zt;At++){var Wt=D.vertices[ct[At]],Mt=new a;Mt.copy(Wt),R.vmult(Mt,Mt),I.vadd(Mt,Mt),it.push(Mt)}ht>=0&&this.clipFaceAgainstHull($,b,U,it,at,et,K)};var f=new a,v=new a,g=new a,m=new a,p=new a,_=new a;h.prototype.findSeparatingAxis=function(b,U,D,I,R,$,at,et){var K=f,ot=v,ht=g,q=m,Lt=p,ft=_,it=Number.MAX_VALUE,ct=this;if(ct.uniqueAxes)for(var At=0;At!==ct.uniqueAxes.length;At++){D.vmult(ct.uniqueAxes[At],K);var Mt=ct.testSepAxis(K,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(K))}else for(var Zt=at?at.length:ct.faces.length,At=0;At<Zt;At++){var Wt=at?at[At]:At;K.copy(ct.faceNormals[Wt]),D.vmult(K,K);var Mt=ct.testSepAxis(K,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(K))}if(b.uniqueAxes)for(var At=0;At!==b.uniqueAxes.length;At++){R.vmult(b.uniqueAxes[At],ot);var Mt=ct.testSepAxis(ot,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(ot))}else for(var ee=et?et.length:b.faces.length,At=0;At<ee;At++){var Wt=et?et[At]:At;ot.copy(b.faceNormals[Wt]),R.vmult(ot,ot);var Mt=ct.testSepAxis(ot,b,U,D,I,R);if(Mt===!1)return!1;Mt<it&&(it=Mt,$.copy(ot))}for(var ie=0;ie!==ct.uniqueEdges.length;ie++){D.vmult(ct.uniqueEdges[ie],q);for(var L=0;L!==b.uniqueEdges.length;L++)if(R.vmult(b.uniqueEdges[L],Lt),q.cross(Lt,ft),!ft.almostZero()){ft.normalize();var A=ct.testSepAxis(ft,b,U,D,I,R);if(A===!1)return!1;A<it&&(it=A,$.copy(ft))}}return I.vsub(U,ht),ht.dot($)>0&&$.negate($),!0};var y=[],x=[];h.prototype.testSepAxis=function(b,U,D,I,R,$){var at=this;h.project(at,b,D,I,y),h.project(U,b,R,$,x);var et=y[0],K=y[1],ot=x[0],ht=x[1],q=et-ht,Lt=ot-K,ft=q<Lt?q:Lt;return ft};var M=new a,T=new a;h.prototype.calculateLocalInertia=function(b,U){this.computeLocalAABB(M,T);var D=T.x-M.x,I=T.y-M.y,R=T.z-M.z;U.x=1/12*b*(2*I*2*I+2*R*2*R),U.y=1/12*b*(2*D*2*D+2*R*2*R),U.z=1/12*b*(2*I*2*I+2*D*2*D)},h.prototype.getPlaneConstantOfFace=function(b){var U=this.faces[b],D=this.faceNormals[b],I=this.vertices[U[0]],R=-D.dot(I);return R};var C=new a,F=new a,E=new a,w=new a,P=new a,W=new a,k=new a,N=new a;h.prototype.clipFaceAgainstHull=function(b,U,D,I,R,$,at){for(var et=C,K=F,ot=E,ht=w,q=P,Lt=W,ft=k,it=N,ct=this,Zt=[],At=I,Wt=Zt,Mt=-1,ee=Number.MAX_VALUE,ie=0;ie<ct.faces.length;ie++){et.copy(ct.faceNormals[ie]),D.vmult(et,et);var L=et.dot(b);L<ee&&(ee=L,Mt=ie)}if(!(Mt<0)){var A=ct.faces[Mt];A.connectedFaces=[];for(var J=0;J<ct.faces.length;J++)for(var vt=0;vt<ct.faces[J].length;vt++)A.indexOf(ct.faces[J][vt])!==-1&&J!==Mt&&A.connectedFaces.indexOf(J)===-1&&A.connectedFaces.push(J);At.length;for(var dt=A.length,yt=0;yt<dt;yt++){var Gt=ct.vertices[A[yt]],bt=ct.vertices[A[(yt+1)%dt]];Gt.vsub(bt,K),ot.copy(K),D.vmult(ot,ot),U.vadd(ot,ot),ht.copy(this.faceNormals[Mt]),D.vmult(ht,ht),U.vadd(ht,ht),ot.cross(ht,q),q.negate(q),Lt.copy(Gt),D.vmult(Lt,Lt),U.vadd(Lt,Lt),-Lt.dot(q);var Et;{var Nt=A.connectedFaces[yt];ft.copy(this.faceNormals[Nt]);var V=this.getPlaneConstantOfFace(Nt);it.copy(ft),D.vmult(it,it);var Et=V-it.dot(U)}for(this.clipFaceAgainstPlane(At,Wt,it,Et);At.length;)At.shift();for(;Wt.length;)At.push(Wt.shift())}ft.copy(this.faceNormals[Mt]);var V=this.getPlaneConstantOfFace(Mt);it.copy(ft),D.vmult(it,it);for(var Et=V-it.dot(U),J=0;J<At.length;J++){var pt=it.dot(At[J])+Et;if(pt<=R&&(console.log("clamped: depth="+pt+" to minDist="+(R+"")),pt=R),pt<=$){var Jt=At[J];if(pt<=0){var qt={point:Jt,normal:it,depth:pt};at.push(qt)}}}}},h.prototype.clipFaceAgainstPlane=function(b,U,D,I){var R,$,at=b.length;if(at<2)return U;var et=b[b.length-1],K=b[0];R=D.dot(et)+I;for(var ot=0;ot<at;ot++){if(K=b[ot],$=D.dot(K)+I,R<0)if($<0){var ht=new a;ht.copy(K),U.push(ht)}else{var ht=new a;et.lerp(K,R/(R-$),ht),U.push(ht)}else if($<0){var ht=new a;et.lerp(K,R/(R-$),ht),U.push(ht),U.push(K)}et=K,R=$}return U},h.prototype.computeWorldVertices=function(b,U){for(var D=this.vertices.length;this.worldVertices.length<D;)this.worldVertices.push(new a);for(var I=this.vertices,R=this.worldVertices,$=0;$!==D;$++)U.vmult(I[$],R[$]),b.vadd(R[$],R[$]);this.worldVerticesNeedsUpdate=!1},new a,h.prototype.computeLocalAABB=function(b,U){var D=this.vertices.length,I=this.vertices;b.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),U.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var R=0;R<D;R++){var $=I[R];$.x<b.x?b.x=$.x:$.x>U.x&&(U.x=$.x),$.y<b.y?b.y=$.y:$.y>U.y&&(U.y=$.y),$.z<b.z?b.z=$.z:$.z>U.z&&(U.z=$.z)}},h.prototype.computeWorldFaceNormals=function(b){for(var U=this.faceNormals.length;this.worldFaceNormals.length<U;)this.worldFaceNormals.push(new a);for(var D=this.faceNormals,I=this.worldFaceNormals,R=0;R!==U;R++)b.vmult(D[R],I[R]);this.worldFaceNormalsNeedsUpdate=!1},h.prototype.updateBoundingSphereRadius=function(){for(var b=0,U=this.vertices,D=0,I=U.length;D!==I;D++){var R=U[D].norm2();R>b&&(b=R)}this.boundingSphereRadius=Math.sqrt(b)};var H=new a;h.prototype.calculateWorldAABB=function(b,U,D,I){for(var R=this.vertices.length,$=this.vertices,at,et,K,ot,ht,q,Lt=0;Lt<R;Lt++){H.copy($[Lt]),U.vmult(H,H),b.vadd(H,H);var ft=H;ft.x<at||at===void 0?at=ft.x:(ft.x>ot||ot===void 0)&&(ot=ft.x),ft.y<et||et===void 0?et=ft.y:(ft.y>ht||ht===void 0)&&(ht=ft.y),ft.z<K||K===void 0?K=ft.z:(ft.z>q||q===void 0)&&(q=ft.z)}D.set(at,et,K),I.set(ot,ht,q)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.prototype.getAveragePointLocal=function(b){b=b||new a;for(var U=this.vertices.length,D=this.vertices,I=0;I<U;I++)b.vadd(D[I],b);return b.mult(1/U,b),b},h.prototype.transformAllPoints=function(b,U){var D=this.vertices.length,I=this.vertices;if(U){for(var R=0;R<D;R++){var $=I[R];U.vmult($,$)}for(var R=0;R<this.faceNormals.length;R++){var $=this.faceNormals[R];U.vmult($,$)}}if(b)for(var R=0;R<D;R++){var $=I[R];$.vadd(b,$)}};var nt=new a,B=new a,O=new a;h.prototype.pointIsInside=function(b){var U=this.vertices.length,D=this.vertices,I=this.faces,R=this.faceNormals,$=null,at=this.faces.length,et=nt;this.getAveragePointLocal(et);for(var K=0;K<at;K++){this.faces[K].length;var U=R[K],ot=D[I[K][0]],ht=B;b.vsub(ot,ht);var q=U.dot(ht),Lt=O;et.vsub(ot,Lt);var ft=U.dot(Lt);if(q<0&&ft>0||q>0&&ft<0)return!1}return $?1:-1},new a;var Y=new a,X=new a;h.project=function(b,U,D,I,R){var $=b.vertices.length,at=Y,et=0,K=0,ot=X,ht=b.vertices;ot.setZero(),o.vectorToLocalFrame(D,I,U,at),o.pointToLocalFrame(D,I,ot,ot);var q=ot.dot(at);K=et=ht[0].dot(at);for(var Lt=1;Lt<$;Lt++){var ft=ht[Lt].dot(at);ft>et&&(et=ft),ft<K&&(K=ft)}if(K-=q,et-=q,K>et){var it=K;K=et,et=it}R[0]=et,R[1]=K}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,s){n.exports=h;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function h(u,c,l,d){var f=d,v=[],g=[],m=[],p=[],_=[],y=Math.cos,x=Math.sin;v.push(new a(c*y(0),c*x(0),-l*.5)),p.push(0),v.push(new a(u*y(0),u*x(0),l*.5)),_.push(1);for(var M=0;M<f;M++){var T=2*Math.PI/f*(M+1),C=2*Math.PI/f*(M+.5);M<f-1?(v.push(new a(c*y(T),c*x(T),-l*.5)),p.push(2*M+2),v.push(new a(u*y(T),u*x(T),l*.5)),_.push(2*M+3),m.push([2*M+2,2*M+3,2*M+1,2*M])):m.push([0,1,2*M+1,2*M]),(f%2===1||M<f/2)&&g.push(new a(y(C),x(C),0))}m.push(_),g.push(new a(0,0,1));for(var F=[],M=0;M<p.length;M++)F.push(p[p.length-M-1]);m.push(F),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}h.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,s){var r=e("./Shape"),a=e("./ConvexPolyhedron"),o=e("../math/Vec3"),h=e("../utils/Utils");n.exports=u;function u(c,l){l=h.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=c,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new a,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}u.prototype=new r,u.prototype.update=function(){this._cachedPillars={}},u.prototype.updateMinValue=function(){for(var c=this.data,l=c[0][0],d=0;d!==c.length;d++)for(var f=0;f!==c[d].length;f++){var v=c[d][f];v<l&&(l=v)}this.minValue=l},u.prototype.updateMaxValue=function(){for(var c=this.data,l=c[0][0],d=0;d!==c.length;d++)for(var f=0;f!==c[d].length;f++){var v=c[d][f];v>l&&(l=v)}this.maxValue=l},u.prototype.setHeightValueAtIndex=function(c,l,d){var f=this.data;f[c][l]=d,this.clearCachedConvexTrianglePillar(c,l,!1),c>0&&(this.clearCachedConvexTrianglePillar(c-1,l,!0),this.clearCachedConvexTrianglePillar(c-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(c,l-1,!0),this.clearCachedConvexTrianglePillar(c,l-1,!1)),l>0&&c>0&&this.clearCachedConvexTrianglePillar(c-1,l-1,!0)},u.prototype.getRectMinMax=function(c,l,d,f,v){v=v||[];for(var g=this.data,m=this.minValue,p=c;p<=d;p++)for(var _=l;_<=f;_++){var y=g[p][_];y>m&&(m=y)}v[0]=this.minValue,v[1]=m},u.prototype.getIndexOfPosition=function(c,l,d,f){var v=this.elementSize,g=this.data,m=Math.floor(c/v),p=Math.floor(l/v);return d[0]=m,d[1]=p,f&&(m<0&&(m=0),p<0&&(p=0),m>=g.length-1&&(m=g.length-1),p>=g[0].length-1&&(p=g[0].length-1)),!(m<0||p<0||m>=g.length-1||p>=g[0].length-1)},u.prototype.getHeightAt=function(c,l,d){var f=[];this.getIndexOfPosition(c,l,f,d);var v=[];return this.getRectMinMax(f[0],f[1]+1,f[0],f[1]+1,v),(v[0]+v[1])/2},u.prototype.getCacheConvexTrianglePillarKey=function(c,l,d){return c+"_"+l+"_"+(d?1:0)},u.prototype.getCachedConvexTrianglePillar=function(c,l,d){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]},u.prototype.setCachedConvexTrianglePillar=function(c,l,d,f,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]={convex:f,offset:v}},u.prototype.clearCachedConvexTrianglePillar=function(c,l,d){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(c,l,d)]},u.prototype.getConvexTrianglePillar=function(c,l,d){var f=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(c,l,d);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}f=new a,v=new o,this.pillarConvex=f,this.pillarOffset=v}var g=this.data,m=this.elementSize,p=f.faces;f.vertices.length=6;for(var _=0;_<6;_++)f.vertices[_]||(f.vertices[_]=new o);p.length=5;for(var _=0;_<5;_++)p[_]||(p[_]=[]);var y=f.vertices,x=(Math.min(g[c][l],g[c+1][l],g[c][l+1],g[c+1][l+1])-this.minValue)/2+this.minValue;d?(v.set((c+.75)*m,(l+.75)*m,x),y[0].set(.25*m,.25*m,g[c+1][l+1]-x),y[1].set(-.75*m,.25*m,g[c][l+1]-x),y[2].set(.25*m,-.75*m,g[c+1][l]-x),y[3].set(.25*m,.25*m,-x-1),y[4].set(-.75*m,.25*m,-x-1),y[5].set(.25*m,-.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=2,p[2][1]=5,p[2][2]=3,p[2][3]=0,p[3][0]=3,p[3][1]=4,p[3][2]=1,p[3][3]=0,p[4][0]=1,p[4][1]=4,p[4][2]=5,p[4][3]=2):(v.set((c+.25)*m,(l+.25)*m,x),y[0].set(-.25*m,-.25*m,g[c][l]-x),y[1].set(.75*m,-.25*m,g[c+1][l]-x),y[2].set(-.25*m,.75*m,g[c][l+1]-x),y[3].set(-.25*m,-.25*m,-x-1),y[4].set(.75*m,-.25*m,-x-1),y[5].set(-.25*m,.75*m,-x-1),p[0][0]=0,p[0][1]=1,p[0][2]=2,p[1][0]=5,p[1][1]=4,p[1][2]=3,p[2][0]=0,p[2][1]=2,p[2][2]=5,p[2][3]=3,p[3][0]=1,p[3][1]=0,p[3][2]=3,p[3][3]=4,p[4][0]=4,p[4][1]=5,p[4][2]=2,p[4][3]=1),f.computeNormals(),f.computeEdges(),f.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(c,l,d,f,v)},u.prototype.calculateLocalInertia=function(c,l){return l=l||new o,l.set(0,0,0),l},u.prototype.volume=function(){return Number.MAX_VALUE},u.prototype.calculateWorldAABB=function(c,l,d,f){d.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),f.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},u.prototype.updateBoundingSphereRadius=function(){var c=this.data,l=this.elementSize;this.boundingSphereRadius=new o(c.length*l,c[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(h,u){return u=u||new a,u.set(0,0,0),u},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(h,u,c,l){c.copy(h),l.copy(h)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new a,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(u){var c=this.worldNormal;c.set(0,0,1),u.vmult(c,c),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(u,c){return c=c||new a,c},o.prototype.volume=function(){return Number.MAX_VALUE};var h=new a;o.prototype.calculateWorldAABB=function(u,c,l,d){h.set(0,0,1),c.vmult(h,h);var f=Number.MAX_VALUE;l.set(-f,-f,-f),d.set(f,f,f),h.x===1&&(d.x=u.x),h.y===1&&(d.y=u.y),h.z===1&&(d.z=u.z),h.x===-1&&(l.x=u.x),h.y===-1&&(l.y=u.y),h.z===-1&&(l.z=u.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,s){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(a,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,s){n.exports=o;var r=e("./Shape"),a=e("../math/Vec3");function o(h){if(r.call(this),this.radius=h!==void 0?Number(h):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(h,u){u=u||new a;var c=2*h*this.radius*this.radius/5;return u.x=c,u.y=c,u.z=c,u},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(h,u,c,l){for(var d=this.radius,f=["x","y","z"],v=0;v<f.length;v++){var g=f[v];c[g]=h[g]-d,l[g]=h[g]+d}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,s){n.exports=c;var r=e("./Shape"),a=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),h=e("../collision/AABB"),u=e("../utils/Octree");function c(F,E){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(F),this.indices=new Int16Array(E),this.normals=new Float32Array(E.length),this.aabb=new h,this.edges=null,this.scale=new a(1,1,1),this.tree=new u,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}c.prototype=new r,c.prototype.constructor=c;var l=new a;c.prototype.updateTree=function(){var F=this.tree;F.reset(),F.aabb.copy(this.aabb);var E=this.scale;F.aabb.lowerBound.x*=1/E.x,F.aabb.lowerBound.y*=1/E.y,F.aabb.lowerBound.z*=1/E.z,F.aabb.upperBound.x*=1/E.x,F.aabb.upperBound.y*=1/E.y,F.aabb.upperBound.z*=1/E.z;for(var w=new h,P=new a,W=new a,k=new a,N=[P,W,k],H=0;H<this.indices.length/3;H++){var nt=H*3;this._getUnscaledVertex(this.indices[nt],P),this._getUnscaledVertex(this.indices[nt+1],W),this._getUnscaledVertex(this.indices[nt+2],k),w.setFromPoints(N),F.insert(w,H)}F.removeEmptyNodes()};var d=new h;c.prototype.getTrianglesInAABB=function(F,E){d.copy(F);var w=this.scale,P=w.x,W=w.y,k=w.z,N=d.lowerBound,H=d.upperBound;return N.x/=P,N.y/=W,N.z/=k,H.x/=P,H.y/=W,H.z/=k,this.tree.aabbQuery(d,E)},c.prototype.setScale=function(F){var E=this.scale.x===this.scale.y===this.scale.z,w=F.x===F.y===F.z;E&&w||this.updateNormals(),this.scale.copy(F),this.updateAABB(),this.updateBoundingSphereRadius()},c.prototype.updateNormals=function(){for(var F=l,E=this.normals,w=0;w<this.indices.length/3;w++){var P=w*3,W=this.indices[P],k=this.indices[P+1],N=this.indices[P+2];this.getVertex(W,p),this.getVertex(k,_),this.getVertex(N,y),c.computeNormal(_,p,y,F),E[P]=F.x,E[P+1]=F.y,E[P+2]=F.z}},c.prototype.updateEdges=function(){for(var F={},E=function(nt,B){var O=W<k?W+"_"+k:k+"_"+W;F[O]=!0},w=0;w<this.indices.length/3;w++){var P=w*3,W=this.indices[P],k=this.indices[P+1];this.indices[P+2],E(),E(),E()}var N=Object.keys(F);this.edges=new Int16Array(N.length*2);for(var w=0;w<N.length;w++){var H=N[w].split("_");this.edges[2*w]=parseInt(H[0],10),this.edges[2*w+1]=parseInt(H[1],10)}},c.prototype.getEdgeVertex=function(F,E,w){var P=this.edges[F*2+(E?1:0)];this.getVertex(P,w)};var f=new a,v=new a;c.prototype.getEdgeVector=function(F,E){var w=f,P=v;this.getEdgeVertex(F,0,w),this.getEdgeVertex(F,1,P),P.vsub(w,E)};var g=new a,m=new a;c.computeNormal=function(F,E,w,P){E.vsub(F,m),w.vsub(E,g),g.cross(m,P),P.isZero()||P.normalize()};var p=new a,_=new a,y=new a;c.prototype.getVertex=function(F,E){var w=this.scale;return this._getUnscaledVertex(F,E),E.x*=w.x,E.y*=w.y,E.z*=w.z,E},c.prototype._getUnscaledVertex=function(F,E){var w=F*3,P=this.vertices;return E.set(P[w],P[w+1],P[w+2])},c.prototype.getWorldVertex=function(F,E,w,P){return this.getVertex(F,P),o.pointToWorldFrame(E,w,P,P),P},c.prototype.getTriangleVertices=function(F,E,w,P){var W=F*3;this.getVertex(this.indices[W],E),this.getVertex(this.indices[W+1],w),this.getVertex(this.indices[W+2],P)},c.prototype.getNormal=function(F,E){var w=F*3;return E.set(this.normals[w],this.normals[w+1],this.normals[w+2])};var x=new h;c.prototype.calculateLocalInertia=function(F,E){this.computeLocalAABB(x);var w=x.upperBound.x-x.lowerBound.x,P=x.upperBound.y-x.lowerBound.y,W=x.upperBound.z-x.lowerBound.z;return E.set(1/12*F*(2*P*2*P+2*W*2*W),1/12*F*(2*w*2*w+2*W*2*W),1/12*F*(2*P*2*P+2*w*2*w))};var M=new a;c.prototype.computeLocalAABB=function(F){var E=F.lowerBound,w=F.upperBound,P=this.vertices.length;this.vertices;var W=M;this.getVertex(0,W),E.copy(W),w.copy(W);for(var k=0;k!==P;k++)this.getVertex(k,W),W.x<E.x?E.x=W.x:W.x>w.x&&(w.x=W.x),W.y<E.y?E.y=W.y:W.y>w.y&&(w.y=W.y),W.z<E.z?E.z=W.z:W.z>w.z&&(w.z=W.z)},c.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},c.prototype.updateBoundingSphereRadius=function(){for(var F=0,E=this.vertices,w=new a,P=0,W=E.length/3;P!==W;P++){this.getVertex(P,w);var k=w.norm2();k>F&&(F=k)}this.boundingSphereRadius=Math.sqrt(F)},new a;var T=new o,C=new h;c.prototype.calculateWorldAABB=function(F,E,w,P){var W=T,k=C;W.position=F,W.quaternion=E,this.aabb.toWorldFrame(W,k),w.copy(k.lowerBound),P.copy(k.upperBound)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.createTorus=function(F,E,w,P,W){F=F||1,E=E||.5,w=w||8,P=P||6,W=W||Math.PI*2;for(var k=[],N=[],H=0;H<=w;H++)for(var nt=0;nt<=P;nt++){var B=nt/P*W,O=H/w*Math.PI*2,Y=(F+E*Math.cos(O))*Math.cos(B),X=(F+E*Math.cos(O))*Math.sin(B),b=E*Math.sin(O);k.push(Y,X,b)}for(var H=1;H<=w;H++)for(var nt=1;nt<=P;nt++){var U=(P+1)*H+nt-1,D=(P+1)*(H-1)+nt-1,I=(P+1)*(H-1)+nt,R=(P+1)*H+nt;N.push(U,D,R),N.push(D,I,R)}return new c(k,N)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,s){n.exports=a,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function a(){r.call(this),this.iterations=10,this.tolerance=1e-7}a.prototype=new r;var o=[],h=[],u=[];a.prototype.solve=function(c,l){var d=0,f=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,p=l.bodies,_=p.length,y=c,x,M,T,C,F,E;if(m!==0)for(var w=0;w!==_;w++)p[w].updateSolveMassProperties();var P=h,W=u,k=o;P.length=m,W.length=m,k.length=m;for(var w=0;w!==m;w++){var N=g[w];k[w]=0,W[w]=N.computeB(y),P[w]=1/N.computeC()}if(m!==0){for(var w=0;w!==_;w++){var H=p[w],nt=H.vlambda,B=H.wlambda;nt.set(0,0,0),B&&B.set(0,0,0)}for(d=0;d!==f;d++){C=0;for(var O=0;O!==m;O++){var N=g[O];x=W[O],M=P[O],E=k[O],F=N.computeGWlambda(),T=M*(x-F-N.eps*E),E+T<N.minForce?T=N.minForce-E:E+T>N.maxForce&&(T=N.maxForce-E),k[O]+=T,C+=T>0?T:-T,N.addToWlambda(T)}if(C*C<v)break}for(var w=0;w!==_;w++){var H=p[w],Y=H.velocity,X=H.angularVelocity;Y.vadd(H.vlambda,Y),X&&X.vadd(H.wlambda,X)}}return d}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,s){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(a,o){return 0},r.prototype.addEquation=function(a){a.enabled&&this.equations.push(a)},r.prototype.removeEquation=function(a){var o=this.equations,h=o.indexOf(a);h!==-1&&o.splice(h,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,s){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),a=e("../objects/Body");function o(p){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=p,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var h=[],u=[],c={bodies:[]},l=a.STATIC;function d(p){for(var _=p.length,y=0;y!==_;y++){var x=p[y];if(!x.visited&&!(x.body.type&l))return x}return!1}var f=[];function v(p,_,y,x){for(f.push(p),p.visited=!0,_(p,y,x);f.length;)for(var M=f.pop(),T;T=d(M.children);)T.visited=!0,_(T,y,x),f.push(T)}function g(p,_,y){_.push(p.body);for(var x=p.eqs.length,M=0;M!==x;M++){var T=p.eqs[M];y.indexOf(T)===-1&&y.push(T)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(p,_){for(var y=h,x=this.nodePool,M=_.bodies,T=this.equations,C=T.length,F=M.length,E=this.subsolver;x.length<F;)x.push(this.createNode());y.length=F;for(var w=0;w<F;w++)y[w]=x[w];for(var w=0;w!==F;w++){var P=y[w];P.body=M[w],P.children.length=0,P.eqs.length=0,P.visited=!1}for(var W=0;W!==C;W++){var k=T[W],w=M.indexOf(k.bi),N=M.indexOf(k.bj),H=y[w],nt=y[N];H.children.push(nt),H.eqs.push(k),nt.children.push(H),nt.eqs.push(k)}var B,O=0,Y=u;E.tolerance=this.tolerance,E.iterations=this.iterations;for(var X=c;B=d(y);){Y.length=0,X.bodies.length=0,v(B,g,X.bodies,Y);var b=Y.length;Y=Y.sort(m);for(var w=0;w!==b;w++)E.addEquation(Y[w]);E.solve(p,X),E.removeAllEquations(),O++}return O};function m(p,_){return _.id-p.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,s){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(a,o){this._listeners===void 0&&(this._listeners={});var h=this._listeners;return h[a]===void 0&&(h[a]=[]),h[a].indexOf(o)===-1&&h[a].push(o),this},hasEventListener:function(a,o){if(this._listeners===void 0)return!1;var h=this._listeners;return h[a]!==void 0&&h[a].indexOf(o)!==-1},removeEventListener:function(a,o){if(this._listeners===void 0)return this;var h=this._listeners;if(h[a]===void 0)return this;var u=h[a].indexOf(o);return u!==-1&&h[a].splice(u,1),this},dispatchEvent:function(a){if(this._listeners===void 0)return this;var o=this._listeners,h=o[a.type];if(h!==void 0){a.target=this;for(var u=0,c=h.length;u<c;u++)h[u].call(this,a)}return this}}},{}],50:[function(e,n,s){var r=e("../collision/AABB"),a=e("../math/Vec3");n.exports=h;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function h(l,d){d=d||{},d.root=null,d.aabb=l,o.call(this,d),this.maxDepth=typeof d.maxDepth<"u"?d.maxDepth:8}h.prototype=new o,o.prototype.reset=function(l,d){this.children.length=this.data.length=0},o.prototype.insert=function(l,d,f){var v=this.data;if(f=f||0,!this.aabb.contains(l))return!1;var g=this.children;if(f<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var p=0;p!==8;p++)if(g[p].insert(l,d,f+1))return!0;m&&(g.length=0)}return v.push(d),!0};var u=new a;o.prototype.subdivide=function(){var l=this.aabb,d=l.lowerBound,f=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new a(0,0,0)})}),new o({aabb:new r({lowerBound:new a(1,0,0)})}),new o({aabb:new r({lowerBound:new a(1,1,0)})}),new o({aabb:new r({lowerBound:new a(1,1,1)})}),new o({aabb:new r({lowerBound:new a(0,1,1)})}),new o({aabb:new r({lowerBound:new a(0,0,1)})}),new o({aabb:new r({lowerBound:new a(1,0,1)})}),new o({aabb:new r({lowerBound:new a(0,1,0)})})),f.vsub(d,u),u.scale(.5,u);for(var g=this.root||this,m=0;m!==8;m++){var p=v[m];p.root=g;var _=p.aabb.lowerBound;_.x*=u.x,_.y*=u.y,_.z*=u.z,_.vadd(d,_),_.vadd(u,p.aabb.upperBound)}},o.prototype.aabbQuery=function(l,d){this.data,this.children;for(var f=[this];f.length;){var v=f.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(d,v.data),Array.prototype.push.apply(f,v.children)}return d};var c=new r;o.prototype.rayQuery=function(l,d,f){return l.getAABB(c),c.toLocalFrame(d,c),this.aabbQuery(c,f),f},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var d=l.pop(),f=d.children.length-1;f>=0;f--)d.children[f].data.length||d.children.splice(f,1);Array.prototype.push.apply(l,d.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,s){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var a=arguments.length,o=0;o!==a;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,s){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(a,o){if(a>o){var h=o;o=a,a=h}return this.data[a+"-"+o]},r.prototype.set=function(a,o,h){if(a>o){var u=o;o=a,a=u}var c=a+"-"+o;this.get(a,o)||this.data.keys.push(c),this.data[c]=h},r.prototype.reset=function(){for(var a=this.data,o=a.keys;o.length>0;){var h=o.pop();delete a[h]}}},{}],53:[function(e,n,s){function r(){}n.exports=r,r.defaults=function(a,o){a=a||{};for(var h in o)h in a||(a[h]=o[h]);return a}},{}],54:[function(e,n,s){n.exports=o;var r=e("../math/Vec3"),a=e("./Pool");function o(){a.call(this),this.type=r}o.prototype=new a,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,s){n.exports=v;var r=e("../collision/AABB"),a=e("../shapes/Shape"),o=e("../collision/Ray"),h=e("../math/Vec3"),u=e("../math/Transform");e("../shapes/ConvexPolyhedron");var c=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),d=e("../equations/ContactEquation"),f=e("../equations/FrictionEquation");function v(lt){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=lt,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(lt,st,mt,gt,ne,Vt){var Tt;this.contactPointPool.length?(Tt=this.contactPointPool.pop(),Tt.bi=lt,Tt.bj=st):Tt=new d(lt,st),Tt.enabled=lt.collisionResponse&&st.collisionResponse&&mt.collisionResponse&&gt.collisionResponse;var Ft=this.currentContactMaterial;Tt.restitution=Ft.restitution,Tt.setSpookParams(Ft.contactEquationStiffness,Ft.contactEquationRelaxation,this.world.dt);var rt=mt.material||lt.material,Pt=gt.material||st.material;return rt&&Pt&&rt.restitution>=0&&Pt.restitution>=0&&(Tt.restitution=rt.restitution*Pt.restitution),Tt.si=ne||mt,Tt.sj=Vt||gt,Tt},v.prototype.createFrictionEquationsFromContact=function(lt,st){var mt=lt.bi,gt=lt.bj,ne=lt.si,Vt=lt.sj,Tt=this.world,Ft=this.currentContactMaterial,rt=Ft.friction,Pt=ne.material||mt.material,Bt=Vt.material||gt.material;if(Pt&&Bt&&Pt.friction>=0&&Bt.friction>=0&&(rt=Pt.friction*Bt.friction),rt>0){var Xt=rt*Tt.gravity.length(),Dt=mt.invMass+gt.invMass;Dt>0&&(Dt=1/Dt);var Rt=this.frictionEquationPool,S=Rt.length?Rt.pop():new f(mt,gt,Xt*Dt),G=Rt.length?Rt.pop():new f(mt,gt,Xt*Dt);return S.bi=G.bi=mt,S.bj=G.bj=gt,S.minForce=G.minForce=-Xt*Dt,S.maxForce=G.maxForce=Xt*Dt,S.ri.copy(lt.ri),S.rj.copy(lt.rj),G.ri.copy(lt.ri),G.rj.copy(lt.rj),lt.ni.tangents(S.t,G.t),S.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),G.setSpookParams(Ft.frictionEquationStiffness,Ft.frictionEquationRelaxation,Tt.dt),S.enabled=G.enabled=lt.enabled,st.push(S,G),!0}return!1};var g=new h,m=new h,p=new h;v.prototype.createFrictionFromAverage=function(lt){var st=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(st,this.frictionResult)||lt===1)){var mt=this.frictionResult[this.frictionResult.length-2],gt=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),p.setZero();var ne=st.bi;st.bj;for(var Vt=0;Vt!==lt;Vt++)st=this.result[this.result.length-1-Vt],st.bodyA!==ne?(g.vadd(st.ni,g),m.vadd(st.ri,m),p.vadd(st.rj,p)):(g.vsub(st.ni,g),m.vadd(st.rj,m),p.vadd(st.ri,p));var Tt=1/lt;m.scale(Tt,mt.ri),p.scale(Tt,mt.rj),gt.ri.copy(mt.ri),gt.rj.copy(mt.rj),g.normalize(),g.tangents(mt.t,gt.t)}};var _=new h,y=new h,x=new c,M=new c;v.prototype.getContacts=function(lt,st,mt,gt,ne,Vt,Tt){this.contactPointPool=ne,this.frictionEquationPool=Tt,this.result=gt,this.frictionResult=Vt;for(var Ft=x,rt=M,Pt=_,Bt=y,Xt=0,Dt=lt.length;Xt!==Dt;Xt++){var Rt=lt[Xt],S=st[Xt],G=null;Rt.material&&S.material&&(G=mt.getContactMaterial(Rt.material,S.material)||null);for(var Z=0;Z<Rt.shapes.length;Z++){Rt.quaternion.mult(Rt.shapeOrientations[Z],Ft),Rt.quaternion.vmult(Rt.shapeOffsets[Z],Pt),Pt.vadd(Rt.position,Pt);for(var z=Rt.shapes[Z],Q=0;Q<S.shapes.length;Q++){S.quaternion.mult(S.shapeOrientations[Q],rt),S.quaternion.vmult(S.shapeOffsets[Q],Bt),Bt.vadd(S.position,Bt);var _t=S.shapes[Q];if(!(Pt.distanceTo(Bt)>z.boundingSphereRadius+_t.boundingSphereRadius)){var zt=null;z.material&&_t.material&&(zt=mt.getContactMaterial(z.material,_t.material)||null),this.currentContactMaterial=zt||G||mt.defaultContactMaterial;var It=this[z.type|_t.type];It&&(z.type<_t.type?It.call(this,z,_t,Pt,Bt,Ft,rt,Rt,S,z,_t):It.call(this,_t,z,Bt,Pt,rt,Ft,S,Rt,z,_t))}}}}},v.prototype[a.types.BOX|a.types.BOX]=v.prototype.boxBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,st.convexPolyhedronRepresentation.material=st.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st.convexPolyhedronRepresentation,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.BOX|a.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexConvex(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.BOX|a.types.PARTICLE]=v.prototype.boxParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexParticle(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft,lt,st)},v.prototype[a.types.SPHERE]=v.prototype.sphereSphere=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.createContactEquation(Tt,Ft,lt,st);gt.vsub(mt,rt.ni),rt.ni.normalize(),rt.ri.copy(rt.ni),rt.rj.copy(rt.ni),rt.ri.mult(lt.radius,rt.ri),rt.rj.mult(-st.radius,rt.rj),rt.ri.vadd(mt,rt.ri),rt.ri.vsub(Tt.position,rt.ri),rt.rj.vadd(gt,rt.rj),rt.rj.vsub(Ft.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)};var T=new h,C=new h,F=new h;v.prototype[a.types.PLANE|a.types.TRIMESH]=v.prototype.planeTrimesh=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=new h,Pt=T;Pt.set(0,0,1),ne.vmult(Pt,Pt);for(var Bt=0;Bt<st.vertices.length/3;Bt++){st.getVertex(Bt,rt);var Xt=new h;Xt.copy(rt),u.pointToWorldFrame(gt,Vt,Xt,rt);var Dt=C;rt.vsub(mt,Dt);var Rt=Pt.dot(Dt);if(Rt<=0){var S=this.createContactEquation(Tt,Ft,lt,st);S.ni.copy(Pt);var G=F;Pt.scale(Dt.dot(Pt),G),rt.vsub(G,G),S.ri.copy(G),S.ri.vsub(Tt.position,S.ri),S.rj.copy(rt),S.rj.vsub(Ft.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult)}}};var E=new h,w=new h;new h;var P=new h,W=new h,k=new h,N=new h,H=new h,nt=new h,B=new h,O=new h,Y=new h,X=new h,b=new h,U=new r,D=[];v.prototype[a.types.SPHERE|a.types.TRIMESH]=v.prototype.sphereTrimesh=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=k,Pt=N,Bt=H,Xt=nt,Dt=B,Rt=O,S=U,G=W,Z=w,z=D;u.pointToLocalFrame(gt,Vt,mt,Dt);var Q=lt.radius;S.lowerBound.set(Dt.x-Q,Dt.y-Q,Dt.z-Q),S.upperBound.set(Dt.x+Q,Dt.y+Q,Dt.z+Q),st.getTrianglesInAABB(S,z);for(var _t=P,zt=lt.radius*lt.radius,It=0;It<z.length;It++)for(var Ot=0;Ot<3;Ot++)if(st.getVertex(st.indices[z[It]*3+Ot],_t),_t.vsub(Dt,Z),Z.norm2()<=zt){G.copy(_t),u.pointToWorldFrame(gt,Vt,G,_t),_t.vsub(mt,Z);var Ct=this.createContactEquation(Tt,Ft,lt,st);Ct.ni.copy(Z),Ct.ni.normalize(),Ct.ri.copy(Ct.ni),Ct.ri.scale(lt.radius,Ct.ri),Ct.ri.vadd(mt,Ct.ri),Ct.ri.vsub(Tt.position,Ct.ri),Ct.rj.copy(_t),Ct.rj.vsub(Ft.position,Ct.rj),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}for(var It=0;It<z.length;It++)for(var Ot=0;Ot<3;Ot++){st.getVertex(st.indices[z[It]*3+Ot],rt),st.getVertex(st.indices[z[It]*3+(Ot+1)%3],Pt),Pt.vsub(rt,Bt),Dt.vsub(Pt,Rt);var Qt=Rt.dot(Bt);Dt.vsub(rt,Rt);var te=Rt.dot(Bt);if(te>0&&Qt<0){Dt.vsub(rt,Rt),Xt.copy(Bt),Xt.normalize(),te=Rt.dot(Xt),Xt.scale(te,Rt),Rt.vadd(rt,Rt);var fe=Rt.distanceTo(Dt);if(fe<lt.radius){var Ct=this.createContactEquation(Tt,Ft,lt,st);Rt.vsub(Dt,Ct.ni),Ct.ni.normalize(),Ct.ni.scale(lt.radius,Ct.ri),u.pointToWorldFrame(gt,Vt,Rt,Rt),Rt.vsub(Ft.position,Ct.rj),u.vectorToWorldFrame(Vt,Ct.ni,Ct.ni),u.vectorToWorldFrame(Vt,Ct.ri,Ct.ri),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}}}for(var Se=Y,me=X,de=b,ve=E,It=0,$t=z.length;It!==$t;It++){st.getTriangleVertices(z[It],Se,me,de),st.getNormal(z[It],ve),Dt.vsub(Se,Rt);var fe=Rt.dot(ve);if(ve.scale(fe,Rt),Dt.vsub(Rt,Rt),fe=Rt.distanceTo(Dt),o.pointInTriangle(Rt,Se,me,de)&&fe<lt.radius){var Ct=this.createContactEquation(Tt,Ft,lt,st);Rt.vsub(Dt,Ct.ni),Ct.ni.normalize(),Ct.ni.scale(lt.radius,Ct.ri),u.pointToWorldFrame(gt,Vt,Rt,Rt),Rt.vsub(Ft.position,Ct.rj),u.vectorToWorldFrame(Vt,Ct.ni,Ct.ni),u.vectorToWorldFrame(Vt,Ct.ri,Ct.ri),this.result.push(Ct),this.createFrictionEquationsFromContact(Ct,this.frictionResult)}}z.length=0};var I=new h,R=new h;v.prototype[a.types.SPHERE|a.types.PLANE]=v.prototype.spherePlane=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.createContactEquation(Tt,Ft,lt,st);if(rt.ni.set(0,0,1),Vt.vmult(rt.ni,rt.ni),rt.ni.negate(rt.ni),rt.ni.normalize(),rt.ni.mult(lt.radius,rt.ri),mt.vsub(gt,I),rt.ni.mult(rt.ni.dot(I),R),I.vsub(R,rt.rj),-I.dot(rt.ni)<=lt.radius){var Pt=rt.ri,Bt=rt.rj;Pt.vadd(mt,Pt),Pt.vsub(Tt.position,Pt),Bt.vadd(gt,Bt),Bt.vsub(Ft.position,Bt),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}};var $=new h,at=new h,et=new h;function K(lt,st,mt){for(var gt=null,ne=lt.length,Vt=0;Vt!==ne;Vt++){var Tt=lt[Vt],Ft=$;lt[(Vt+1)%ne].vsub(Tt,Ft);var rt=at;Ft.cross(st,rt);var Pt=et;mt.vsub(Tt,Pt);var Bt=rt.dot(Pt);if(gt===null||Bt>0&&gt===!0||Bt<=0&&gt===!1){gt===null&&(gt=Bt>0);continue}else return!1}return!0}var ot=new h,ht=new h,q=new h,Lt=new h,ft=[new h,new h,new h,new h,new h,new h],it=new h,ct=new h,Zt=new h,At=new h;v.prototype[a.types.SPHERE|a.types.BOX]=v.prototype.sphereBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.v3pool,Pt=ft;mt.vsub(gt,ot),st.getSideNormals(Pt,Vt);for(var Bt=lt.radius,Xt=!1,Dt=ct,Rt=Zt,S=At,G=null,Z=0,z=0,Q=0,_t=null,zt=0,It=Pt.length;zt!==It&&Xt===!1;zt++){var Ot=ht;Ot.copy(Pt[zt]);var Ct=Ot.norm();Ot.normalize();var Qt=ot.dot(Ot);if(Qt<Ct+Bt&&Qt>0){var te=q,fe=Lt;te.copy(Pt[(zt+1)%3]),fe.copy(Pt[(zt+2)%3]);var Se=te.norm(),me=fe.norm();te.normalize(),fe.normalize();var de=ot.dot(te),ve=ot.dot(fe);if(de<Se&&de>-Se&&ve<me&&ve>-me){var Ae=Math.abs(Qt-Ct-Bt);(_t===null||Ae<_t)&&(_t=Ae,z=de,Q=ve,G=Ct,Dt.copy(Ot),Rt.copy(te),S.copy(fe),Z++)}}}if(Z){Xt=!0;var Kt=this.createContactEquation(Tt,Ft,lt,st);Dt.mult(-Bt,Kt.ri),Kt.ni.copy(Dt),Kt.ni.negate(Kt.ni),Dt.mult(G,Dt),Rt.mult(z,Rt),Dt.vadd(Rt,Dt),S.mult(Q,S),Dt.vadd(S,Kt.rj),Kt.ri.vadd(mt,Kt.ri),Kt.ri.vsub(Tt.position,Kt.ri),Kt.rj.vadd(gt,Kt.rj),Kt.rj.vsub(Ft.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}for(var $t=rt.get(),Je=it,pe=0;pe!==2&&!Xt;pe++)for(var xe=0;xe!==2&&!Xt;xe++)for(var Le=0;Le!==2&&!Xt;Le++)if($t.set(0,0,0),pe?$t.vadd(Pt[0],$t):$t.vsub(Pt[0],$t),xe?$t.vadd(Pt[1],$t):$t.vsub(Pt[1],$t),Le?$t.vadd(Pt[2],$t):$t.vsub(Pt[2],$t),gt.vadd($t,Je),Je.vsub(mt,Je),Je.norm2()<Bt*Bt){Xt=!0;var Kt=this.createContactEquation(Tt,Ft,lt,st);Kt.ri.copy(Je),Kt.ri.normalize(),Kt.ni.copy(Kt.ri),Kt.ri.mult(Bt,Kt.ri),Kt.rj.copy($t),Kt.ri.vadd(mt,Kt.ri),Kt.ri.vsub(Tt.position,Kt.ri),Kt.rj.vadd(gt,Kt.rj),Kt.rj.vsub(Ft.position,Kt.rj),this.result.push(Kt),this.createFrictionEquationsFromContact(Kt,this.frictionResult)}rt.release($t),$t=null;for(var Fe=rt.get(),Qe=rt.get(),Kt=rt.get(),Re=rt.get(),Ae=rt.get(),Ce=Pt.length,pe=0;pe!==Ce&&!Xt;pe++)for(var xe=0;xe!==Ce&&!Xt;xe++)if(pe%3!==xe%3){Pt[xe].cross(Pt[pe],Fe),Fe.normalize(),Pt[pe].vadd(Pt[xe],Qe),Kt.copy(mt),Kt.vsub(Qe,Kt),Kt.vsub(gt,Kt);var cn=Kt.dot(Fe);Fe.mult(cn,Re);for(var Le=0;Le===pe%3||Le===xe%3;)Le++;Ae.copy(mt),Ae.vsub(Re,Ae),Ae.vsub(Qe,Ae),Ae.vsub(gt,Ae);var Ts=Math.abs(cn),Ir=Ae.norm();if(Ts<Pt[Le].norm()&&Ir<Bt){Xt=!0;var Me=this.createContactEquation(Tt,Ft,lt,st);Qe.vadd(Re,Me.rj),Me.rj.copy(Me.rj),Ae.negate(Me.ni),Me.ni.normalize(),Me.ri.copy(Me.rj),Me.ri.vadd(gt,Me.ri),Me.ri.vsub(mt,Me.ri),Me.ri.normalize(),Me.ri.mult(Bt,Me.ri),Me.ri.vadd(mt,Me.ri),Me.ri.vsub(Tt.position,Me.ri),Me.rj.vadd(gt,Me.rj),Me.rj.vsub(Ft.position,Me.rj),this.result.push(Me),this.createFrictionEquationsFromContact(Me,this.frictionResult)}}rt.release(Fe,Qe,Kt,Re,Ae)};var Wt=new h,Mt=new h,ee=new h,ie=new h,L=new h,A=new h,J=new h,vt=new h,dt=new h,yt=new h;v.prototype[a.types.SPHERE|a.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=this.v3pool;mt.vsub(gt,Wt);for(var Pt=st.faceNormals,Bt=st.faces,Xt=st.vertices,Dt=lt.radius,Rt=0;Rt!==Xt.length;Rt++){var S=Xt[Rt],G=L;Vt.vmult(S,G),gt.vadd(G,G);var Z=ie;if(G.vsub(mt,Z),Z.norm2()<Dt*Dt){Q=!0;var z=this.createContactEquation(Tt,Ft,lt,st);z.ri.copy(Z),z.ri.normalize(),z.ni.copy(z.ri),z.ri.mult(Dt,z.ri),G.vsub(gt,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);return}}for(var Q=!1,Rt=0,_t=Bt.length;Rt!==_t&&Q===!1;Rt++){var zt=Pt[Rt],It=Bt[Rt],Ot=A;Vt.vmult(zt,Ot);var Ct=J;Vt.vmult(Xt[It[0]],Ct),Ct.vadd(gt,Ct);var Qt=vt;Ot.mult(-Dt,Qt),mt.vadd(Qt,Qt);var te=dt;Qt.vsub(Ct,te);var fe=te.dot(Ot),Se=yt;if(mt.vsub(Ct,Se),fe<0&&Se.dot(Ot)>0){for(var me=[],de=0,ve=It.length;de!==ve;de++){var $t=rt.get();Vt.vmult(Xt[It[de]],$t),gt.vadd($t,$t),me.push($t)}if(K(me,Ot,mt)){Q=!0;var z=this.createContactEquation(Tt,Ft,lt,st);Ot.mult(-Dt,z.ri),Ot.negate(z.ni);var Je=rt.get();Ot.mult(-fe,Je);var pe=rt.get();Ot.mult(-Dt,pe),mt.vsub(gt,z.rj),z.rj.vadd(pe,z.rj),z.rj.vadd(Je,z.rj),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),rt.release(Je),rt.release(pe),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var de=0,xe=me.length;de!==xe;de++)rt.release(me[de]);return}else for(var de=0;de!==It.length;de++){var Le=rt.get(),Fe=rt.get();Vt.vmult(Xt[It[(de+1)%It.length]],Le),Vt.vmult(Xt[It[(de+2)%It.length]],Fe),gt.vadd(Le,Le),gt.vadd(Fe,Fe);var Qe=Mt;Fe.vsub(Le,Qe);var Kt=ee;Qe.unit(Kt);var Re=rt.get(),Ae=rt.get();mt.vsub(Le,Ae);var Ce=Ae.dot(Kt);Kt.mult(Ce,Re),Re.vadd(Le,Re);var cn=rt.get();if(Re.vsub(mt,cn),Ce>0&&Ce*Ce<Qe.norm2()&&cn.norm2()<Dt*Dt){var z=this.createContactEquation(Tt,Ft,lt,st);Re.vsub(gt,z.rj),Re.vsub(mt,z.ni),z.ni.normalize(),z.ni.mult(Dt,z.ri),z.rj.vadd(gt,z.rj),z.rj.vsub(Ft.position,z.rj),z.ri.vadd(mt,z.ri),z.ri.vsub(Tt.position,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult);for(var de=0,xe=me.length;de!==xe;de++)rt.release(me[de]);rt.release(Le),rt.release(Fe),rt.release(Re),rt.release(cn),rt.release(Ae);return}rt.release(Le),rt.release(Fe),rt.release(Re),rt.release(cn),rt.release(Ae)}for(var de=0,xe=me.length;de!==xe;de++)rt.release(me[de])}}},new h,new h,v.prototype[a.types.PLANE|a.types.BOX]=v.prototype.planeBox=function(lt,st,mt,gt,ne,Vt,Tt,Ft){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.planeConvex(lt,st.convexPolyhedronRepresentation,mt,gt,ne,Vt,Tt,Ft)};var Gt=new h,bt=new h,Nt=new h,V=new h;v.prototype[a.types.PLANE|a.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Gt,Pt=bt;Pt.set(0,0,1),ne.vmult(Pt,Pt);for(var Bt=0,Xt=Nt,Dt=0;Dt!==st.vertices.length;Dt++){rt.copy(st.vertices[Dt]),Vt.vmult(rt,rt),gt.vadd(rt,rt),rt.vsub(mt,Xt);var Rt=Pt.dot(Xt);if(Rt<=0){var S=this.createContactEquation(Tt,Ft,lt,st),G=V;Pt.mult(Pt.dot(Xt),G),rt.vsub(G,G),G.vsub(mt,S.ri),S.ni.copy(Pt),rt.vsub(gt,S.rj),S.ri.vadd(mt,S.ri),S.ri.vsub(Tt.position,S.ri),S.rj.vadd(gt,S.rj),S.rj.vsub(Ft.position,S.rj),this.result.push(S),Bt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}}this.enableFrictionReduction&&Bt&&this.createFrictionFromAverage(Bt)};var Et=new h,pt=new h;v.prototype[a.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(lt,st,mt,gt,ne,Vt,Tt,Ft,rt,Pt,Bt,Xt){var Dt=Et;if(!(mt.distanceTo(gt)>lt.boundingSphereRadius+st.boundingSphereRadius)&&lt.findSeparatingAxis(st,mt,ne,gt,Vt,Dt,Bt,Xt)){var Rt=[],S=pt;lt.clipAgainstHull(mt,ne,st,gt,Vt,Dt,-100,100,Rt);for(var G=0,Z=0;Z!==Rt.length;Z++){var z=this.createContactEquation(Tt,Ft,lt,st,rt,Pt),Q=z.ri,_t=z.rj;Dt.negate(z.ni),Rt[Z].normal.negate(S),S.mult(Rt[Z].depth,S),Rt[Z].point.vadd(S,Q),_t.copy(Rt[Z].point),Q.vsub(mt,Q),_t.vsub(gt,_t),Q.vadd(mt,Q),Q.vsub(Tt.position,Q),_t.vadd(gt,_t),_t.vsub(Ft.position,_t),this.result.push(z),G++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(z,this.frictionResult)}this.enableFrictionReduction&&G&&this.createFrictionFromAverage(G)}};var Jt=new h,qt=new h,Yt=new h;v.prototype[a.types.PLANE|a.types.PARTICLE]=v.prototype.planeParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=Jt;rt.set(0,0,1),Tt.quaternion.vmult(rt,rt);var Pt=qt;gt.vsub(Tt.position,Pt);var Bt=rt.dot(Pt);if(Bt<=0){var Xt=this.createContactEquation(Ft,Tt,st,lt);Xt.ni.copy(rt),Xt.ni.negate(Xt.ni),Xt.ri.set(0,0,0);var Dt=Yt;rt.mult(rt.dot(gt),Dt),gt.vsub(Dt,Dt),Xt.rj.copy(Dt),this.result.push(Xt),this.createFrictionEquationsFromContact(Xt,this.frictionResult)}};var kt=new h;v.prototype[a.types.PARTICLE|a.types.SPHERE]=v.prototype.sphereParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=kt;rt.set(0,0,1),gt.vsub(mt,rt);var Pt=rt.norm2();if(Pt<=lt.radius*lt.radius){var Bt=this.createContactEquation(Ft,Tt,st,lt);rt.normalize(),Bt.rj.copy(rt),Bt.rj.mult(lt.radius,Bt.rj),Bt.ni.copy(rt),Bt.ni.negate(Bt.ni),Bt.ri.set(0,0,0),this.result.push(Bt),this.createFrictionEquationsFromContact(Bt,this.frictionResult)}};var Ut=new c,re=new h;new h;var j=new h,St=new h,xt=new h;v.prototype[a.types.PARTICLE|a.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=-1,Pt=j,Bt=xt,Xt=null,Dt=re;if(Dt.copy(gt),Dt.vsub(mt,Dt),ne.conjugate(Ut),Ut.vmult(Dt,Dt),lt.pointIsInside(Dt)){lt.worldVerticesNeedsUpdate&&lt.computeWorldVertices(mt,ne),lt.worldFaceNormalsNeedsUpdate&&lt.computeWorldFaceNormals(ne);for(var Rt=0,S=lt.faces.length;Rt!==S;Rt++){var G=[lt.worldVertices[lt.faces[Rt][0]]],Z=lt.worldFaceNormals[Rt];gt.vsub(G[0],St);var z=-Z.dot(St);(Xt===null||Math.abs(z)<Math.abs(Xt))&&(Xt=z,rt=Rt,Pt.copy(Z))}if(rt!==-1){var Q=this.createContactEquation(Ft,Tt,st,lt);Pt.mult(Xt,Bt),Bt.vadd(gt,Bt),Bt.vsub(mt,Bt),Q.rj.copy(Bt),Pt.negate(Q.ni),Q.ri.set(0,0,0);var _t=Q.ri,zt=Q.rj;_t.vadd(gt,_t),_t.vsub(Ft.position,_t),zt.vadd(mt,zt),zt.vsub(Tt.position,zt),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[a.types.BOX|a.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){lt.convexPolyhedronRepresentation.material=lt.material,lt.convexPolyhedronRepresentation.collisionResponse=lt.collisionResponse,this.convexHeightfield(lt.convexPolyhedronRepresentation,st,mt,gt,ne,Vt,Tt,Ft)};var ut=new h,wt=new h,jt=[0];v.prototype[a.types.CONVEXPOLYHEDRON|a.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=st.data,Pt=st.elementSize,Bt=lt.boundingSphereRadius,Xt=wt,Dt=jt,Rt=ut;u.pointToLocalFrame(gt,Vt,mt,Rt);var S=Math.floor((Rt.x-Bt)/Pt)-1,G=Math.ceil((Rt.x+Bt)/Pt)+1,Z=Math.floor((Rt.y-Bt)/Pt)-1,z=Math.ceil((Rt.y+Bt)/Pt)+1;if(!(G<0||z<0||S>rt.length||Z>rt[0].length)){S<0&&(S=0),G<0&&(G=0),Z<0&&(Z=0),z<0&&(z=0),S>=rt.length&&(S=rt.length-1),G>=rt.length&&(G=rt.length-1),z>=rt[0].length&&(z=rt[0].length-1),Z>=rt[0].length&&(Z=rt[0].length-1);var Q=[];st.getRectMinMax(S,Z,G,z,Q);var _t=Q[0],zt=Q[1];if(!(Rt.z-Bt>zt||Rt.z+Bt<_t))for(var It=S;It<G;It++)for(var Ot=Z;Ot<z;Ot++)st.getConvexTrianglePillar(It,Ot,!1),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft,null,null,Dt,null),st.getConvexTrianglePillar(It,Ot,!0),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.convexConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft,null,null,Dt,null)}};var se=new h,ce=new h;v.prototype[a.types.SPHERE|a.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(lt,st,mt,gt,ne,Vt,Tt,Ft){var rt=st.data,Pt=lt.radius,Bt=st.elementSize,Xt=ce,Dt=se;u.pointToLocalFrame(gt,Vt,mt,Dt);var Rt=Math.floor((Dt.x-Pt)/Bt)-1,S=Math.ceil((Dt.x+Pt)/Bt)+1,G=Math.floor((Dt.y-Pt)/Bt)-1,Z=Math.ceil((Dt.y+Pt)/Bt)+1;if(!(S<0||Z<0||Rt>rt.length||Z>rt[0].length)){Rt<0&&(Rt=0),S<0&&(S=0),G<0&&(G=0),Z<0&&(Z=0),Rt>=rt.length&&(Rt=rt.length-1),S>=rt.length&&(S=rt.length-1),Z>=rt[0].length&&(Z=rt[0].length-1),G>=rt[0].length&&(G=rt[0].length-1);var z=[];st.getRectMinMax(Rt,G,S,Z,z);var Q=z[0],_t=z[1];if(!(Dt.z-Pt>_t||Dt.z+Pt<Q))for(var zt=this.result,It=Rt;It<S;It++)for(var Ot=G;Ot<Z;Ot++){var Ct=zt.length;st.getConvexTrianglePillar(It,Ot,!1),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft),st.getConvexTrianglePillar(It,Ot,!0),u.pointToWorldFrame(gt,Vt,st.pillarOffset,Xt),mt.distanceTo(Xt)<st.pillarConvex.boundingSphereRadius+lt.boundingSphereRadius&&this.sphereConvex(lt,st.pillarConvex,mt,Xt,ne,Vt,Tt,Ft);var Qt=zt.length-Ct;if(Qt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,s){n.exports=x;var r=e("../shapes/Shape"),a=e("../math/Vec3"),o=e("../math/Quaternion"),h=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var u=e("./Narrowphase"),c=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),d=e("../material/Material"),f=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),p=e("../collision/AABB"),_=e("../collision/Ray"),y=e("../collision/NaiveBroadphase");function x(){c.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new a,this.broadphase=new y,this.bodies=[],this.solver=new h,this.constraints=[],this.narrowphase=new u(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new d("default"),this.defaultContactMaterial=new f(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}x.prototype=new c,new p;var M=new _;if(x.prototype.getContactMaterial=function(O,Y){return this.contactMaterialTable.get(O.id,Y.id)},x.prototype.numObjects=function(){return this.bodies.length},x.prototype.collisionMatrixTick=function(){var O=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=O,this.collisionMatrix.reset()},x.prototype.add=x.prototype.addBody=function(O){this.bodies.indexOf(O)===-1&&(O.index=this.bodies.length,this.bodies.push(O),O.world=this,O.initPosition.copy(O.position),O.initVelocity.copy(O.velocity),O.timeLastSleepy=this.time,O instanceof v&&(O.initAngularVelocity.copy(O.angularVelocity),O.initQuaternion.copy(O.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=O,this.dispatchEvent(this.addBodyEvent))},x.prototype.addConstraint=function(O){this.constraints.push(O)},x.prototype.removeConstraint=function(O){var Y=this.constraints.indexOf(O);Y!==-1&&this.constraints.splice(Y,1)},x.prototype.rayTest=function(O,Y,X){X instanceof m?this.raycastClosest(O,Y,{skipBackfaces:!0},X):this.raycastAll(O,Y,{skipBackfaces:!0},X)},x.prototype.raycastAll=function(O,Y,X,b){return X.mode=_.ALL,X.from=O,X.to=Y,X.callback=b,M.intersectWorld(this,X)},x.prototype.raycastAny=function(O,Y,X,b){return X.mode=_.ANY,X.from=O,X.to=Y,X.result=b,M.intersectWorld(this,X)},x.prototype.raycastClosest=function(O,Y,X,b){return X.mode=_.CLOSEST,X.from=O,X.to=Y,X.result=b,M.intersectWorld(this,X)},x.prototype.remove=function(O){O.world=null;var Y=this.bodies.length-1,X=this.bodies,b=X.indexOf(O);if(b!==-1){X.splice(b,1);for(var U=0;U!==X.length;U++)X[U].index=U;this.collisionMatrix.setNumObjects(Y),this.removeBodyEvent.body=O,this.dispatchEvent(this.removeBodyEvent)}},x.prototype.removeBody=x.prototype.remove,x.prototype.addMaterial=function(O){this.materials.push(O)},x.prototype.addContactMaterial=function(O){this.contactmaterials.push(O),this.contactMaterialTable.set(O.materials[0].id,O.materials[1].id,O)},typeof performance>"u"&&(performance={}),!performance.now){var T=Date.now();performance.timing&&performance.timing.navigationStart&&(T=performance.timing.navigationStart),performance.now=function(){return Date.now()-T}}var C=new a;x.prototype.step=function(O,Y,X){if(X=X||10,Y=Y||0,Y===0)this.internalStep(O),this.time+=O;else{var b=Math.floor((this.time+Y)/O)-Math.floor(this.time/O);b=Math.min(b,X);for(var U=performance.now(),D=0;D!==b&&(this.internalStep(O),!(performance.now()-U>O*1e3));D++);this.time+=Y;for(var I=this.time%O,R=I/O,$=C,at=this.bodies,et=0;et!==at.length;et++){var K=at[et];K.type!==v.STATIC&&K.sleepState!==v.SLEEPING?(K.position.vsub(K.previousPosition,$),$.scale(R,$),K.position.vadd($,K.interpolatedPosition)):(K.interpolatedPosition.copy(K.position),K.interpolatedQuaternion.copy(K.quaternion))}}};var F={type:"postStep"},E={type:"preStep"},w={type:"collide",body:null,contact:null},P=[],W=[],k=[],N=[];new a,new a,new a,new a,new a,new a,new a,new a,new a,new o;var H=new o,nt=new o,B=new a;x.prototype.internalStep=function(O){this.dt=O;var Y=this.contacts,X=k,b=N,U=this.numObjects(),D=this.bodies,I=this.solver,R=this.gravity,$=this.doProfiling,at=this.profile,et=v.DYNAMIC,K,ot=this.constraints,ht=W;R.norm();var q=R.x,Lt=R.y,ft=R.z,it=0;for($&&(K=performance.now()),it=0;it!==U;it++){var ct=D[it];if(ct.type&et){var Zt=ct.force,At=ct.mass;Zt.x+=At*q,Zt.y+=At*Lt,Zt.z+=At*ft}}for(var it=0,Wt=this.subsystems.length;it!==Wt;it++)this.subsystems[it].update();$&&(K=performance.now()),X.length=0,b.length=0,this.broadphase.collisionPairs(this,X,b),$&&(at.broadphase=performance.now()-K);var Et=ot.length;for(it=0;it!==Et;it++){var Mt=ot[it];if(!Mt.collideConnected)for(var ee=X.length-1;ee>=0;ee-=1)(Mt.bodyA===X[ee]&&Mt.bodyB===b[ee]||Mt.bodyB===X[ee]&&Mt.bodyA===b[ee])&&(X.splice(ee,1),b.splice(ee,1))}this.collisionMatrixTick(),$&&(K=performance.now());var ie=P,L=Y.length;for(it=0;it!==L;it++)ie.push(Y[it]);Y.length=0;var A=this.frictionEquations.length;for(it=0;it!==A;it++)ht.push(this.frictionEquations[it]);this.frictionEquations.length=0,this.narrowphase.getContacts(X,b,this,Y,ie,this.frictionEquations,ht),$&&(at.narrowphase=performance.now()-K),$&&(K=performance.now());for(var it=0;it<this.frictionEquations.length;it++)I.addEquation(this.frictionEquations[it]);for(var J=Y.length,vt=0;vt!==J;vt++){var Mt=Y[vt],ct=Mt.bi,dt=Mt.bj;Mt.si,Mt.sj;var yt;if(ct.material&&dt.material?yt=this.getContactMaterial(ct.material,dt.material)||this.defaultContactMaterial:yt=this.defaultContactMaterial,yt.friction,ct.material&&dt.material&&(ct.material.friction>=0&&dt.material.friction>=0&&ct.material.friction*dt.material.friction,ct.material.restitution>=0&&dt.material.restitution>=0&&(Mt.restitution=ct.material.restitution*dt.material.restitution)),I.addEquation(Mt),ct.allowSleep&&ct.type===v.DYNAMIC&&ct.sleepState===v.SLEEPING&&dt.sleepState===v.AWAKE&&dt.type!==v.STATIC){var Gt=dt.velocity.norm2()+dt.angularVelocity.norm2(),bt=Math.pow(dt.sleepSpeedLimit,2);Gt>=bt*2&&(ct._wakeUpAfterNarrowphase=!0)}if(dt.allowSleep&&dt.type===v.DYNAMIC&&dt.sleepState===v.SLEEPING&&ct.sleepState===v.AWAKE&&ct.type!==v.STATIC){var Nt=ct.velocity.norm2()+ct.angularVelocity.norm2(),V=Math.pow(ct.sleepSpeedLimit,2);Nt>=V*2&&(dt._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ct,dt,!0),this.collisionMatrixPrevious.get(ct,dt)||(w.body=dt,w.contact=Mt,ct.dispatchEvent(w),w.body=ct,dt.dispatchEvent(w))}for($&&(at.makeContactConstraints=performance.now()-K,K=performance.now()),it=0;it!==U;it++){var ct=D[it];ct._wakeUpAfterNarrowphase&&(ct.wakeUp(),ct._wakeUpAfterNarrowphase=!1)}var Et=ot.length;for(it=0;it!==Et;it++){var Mt=ot[it];Mt.update();for(var ee=0,pt=Mt.equations.length;ee!==pt;ee++){var Jt=Mt.equations[ee];I.addEquation(Jt)}}I.solve(O,this),$&&(at.solve=performance.now()-K),I.removeAllEquations();var qt=Math.pow;for(it=0;it!==U;it++){var ct=D[it];if(ct.type&et){var Yt=qt(1-ct.linearDamping,O),kt=ct.velocity;kt.mult(Yt,kt);var Ut=ct.angularVelocity;if(Ut){var re=qt(1-ct.angularDamping,O);Ut.mult(re,Ut)}}}for(this.dispatchEvent(E),it=0;it!==U;it++){var ct=D[it];ct.preStep&&ct.preStep.call(ct)}$&&(K=performance.now());var j=H,St=nt,xt=this.stepnumber,ut=v.DYNAMIC|v.KINEMATIC,wt=xt%(this.quatNormalizeSkip+1)===0,jt=this.quatNormalizeFast,se=O*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,it=0;it!==U;it++){var ce=D[it],lt=ce.force,st=ce.torque;if(ce.type&ut&&ce.sleepState!==v.SLEEPING){var mt=ce.velocity,gt=ce.angularVelocity,ne=ce.position,Vt=ce.quaternion,Tt=ce.invMass,Ft=ce.invInertiaWorld;mt.x+=lt.x*Tt*O,mt.y+=lt.y*Tt*O,mt.z+=lt.z*Tt*O,ce.angularVelocity&&(Ft.vmult(st,B),B.mult(O,B),B.vadd(gt,gt)),ne.x+=mt.x*O,ne.y+=mt.y*O,ne.z+=mt.z*O,ce.angularVelocity&&(j.set(gt.x,gt.y,gt.z,0),j.mult(Vt,St),Vt.x+=se*St.x,Vt.y+=se*St.y,Vt.z+=se*St.z,Vt.w+=se*St.w,wt&&(jt?Vt.normalizeFast():Vt.normalize())),ce.aabb&&(ce.aabbNeedsUpdate=!0),ce.updateInertiaWorld&&ce.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,$&&(at.integrate=performance.now()-K),this.time+=O,this.stepnumber+=1,this.dispatchEvent(F),it=0;it!==U;it++){var ct=D[it],rt=ct.postStep;rt&&rt.call(ct)}if(this.allowSleep)for(it=0;it!==U;it++)D[it].sleepTick(this.time)},x.prototype.clearForces=function(){for(var O=this.bodies,Y=O.length,X=0;X!==Y;X++){var b=O[X];b.force,b.torque,b.force.set(0,0,0),b.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(lc);var Ev=lc.exports;const le=Mv(Ev);var gr=function(){var i=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(c){c.preventDefault(),n(++i%t.children.length)},!1);function e(c){return t.appendChild(c.dom),c}function n(c){for(var l=0;l<t.children.length;l++)t.children[l].style.display=l===c?"block":"none";i=c}var s=(performance||Date).now(),r=s,a=0,o=e(new gr.Panel("FPS","#0ff","#002")),h=e(new gr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=e(new gr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){s=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();if(h.update(c-s,200),c>=r+1e3&&(o.update(a*1e3/(c-r),100),r=c,a=0,u)){var l=performance.memory;u.update(l.usedJSHeapSize/1048576,l.jsHeapSizeLimit/1048576)}return c},update:function(){s=this.end()},domElement:t,setMode:n}};gr.Panel=function(i,t,e){var n=1/0,s=0,r=Math.round,a=r(window.devicePixelRatio||1),o=80*a,h=48*a,u=3*a,c=2*a,l=3*a,d=15*a,f=74*a,v=30*a,g=document.createElement("canvas");g.width=o,g.height=h,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*a+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,o,h),m.fillStyle=t,m.fillText(i,u,c),m.fillRect(l,d,f,v),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(l,d,f,v),{dom:g,update:function(p,_){n=Math.min(n,p),s=Math.max(s,p),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,o,d),m.fillStyle=t,m.fillText(r(p)+" "+i+" ("+r(n)+"-"+r(s)+")",u,c),m.drawImage(g,l+a,d,f-a,v,l,d,f-a,v),m.fillRect(l+f-a,d,a,v),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(l+f-a,d,a,r((1-p/_)*v))}}};const Sv=gr;new Ba;const wv=new Qm,bi=wv.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),bv=new Audio("/sounds/hit.mp3"),Av=new Audio("/sounds/win.mp3");bv.preload="auto";Av.preload="auto";const Hn=i=>{},Tv=i=>{},Gn=new le.Material("inertReactionMaterial"),cc=new le.Material("targetReactionMaterial"),Rv=new le.Material("floorReactionMaterial"),hc=new le.Material("bulletReactionMaterial"),Cv=new le.Material("crateReactionMaterial"),uc=new le.ContactMaterial(Rv,Gn,{friction:.9,restitution:.4}),Pv=new le.ContactMaterial(Gn,Gn,{friction:.1,restitution:.7}),Lv=new le.ContactMaterial(hc,cc,{friction:.1,restitution:3}),Wn=new Ba().load("textures/wood.jpg"),ws=new Ba().load("textures/crateAlpha.jpg");Wn.generateMipmaps=!1;Wn.minFilter=De;Wn.magFilter=De;ws.generateMipmaps=!1;ws.minFilter=De;ws.magFilter=De;Wn.repeat.x=.1;Wn.repeat.y=.1;Wn.wrapS=yr;Wn.wrapT=yr;const Iv=new nn({metalness:.2,roughness:.4,map:Wn}),Dv=new nn({metalness:.2,roughness:.4,map:Wn,transparent:!0,alphaMap:ws,side:yn,envMap:bi,envMapIntensity:.5}),dc=new nn({metalness:1,roughness:.4,envMap:bi,envMapIntensity:.5}),fc=new Pr(1,16,16),br=new wn(1,1,1),za=new nn({metalness:.3,roughness:.4,envMap:bi,envMapIntensity:.5}),Nv=(i,t,e,n,s)=>{const r=new be(fc,za);r.castShadow=!0,r.position.copy(s),r.scale.set(n,n,n),e.add(r);const a=new le.Sphere(n),o=new le.Body({mass:.5,shape:a,position:new le.Vec3(0,3,0),material:Gn});o.position.copy(s),o.addEventListener("collide",Hn),t.add(o),i.push({mesh:r,body:o})},vs=(i,t,e,n,s,r,a)=>{let o;if(a){const l=new nn({metalness:.3,roughness:.4,envMap:bi,envMapIntensity:.5,color:a});o=new be(br,l)}else o=new be(br,za);o.castShadow=!0,o.position.copy(s),o.scale.set(n,n,n),e.add(o);let h=r??.1;const u=new le.Box(new le.Vec3(n/2,n/2,n/2)),c=new le.Body({mass:h,shape:u,position:new le.Vec3(0,3,0),material:Gn});c.position.copy(s),c.addEventListener("collide",Hn),i.push({mesh:o,body:c}),t.add(c)},Uv=(i,t,e,n,s,r,a)=>{let o;if(a){const l=new nn({metalness:.3,roughness:.4,envMap:bi,envMapIntensity:.5,color:a});o=new be(br,l)}else o=new be(br,za);o.castShadow=!0,o.position.copy(s),o.scale.set(n,n,n),e.add(o);let h=r||r===0?r:.1;const u=new le.Box(new le.Vec3(n/2,n/2,n/2)),c=new le.Body({mass:h,shape:u,position:new le.Vec3(0,3,0),material:a?cc:Gn});c.position.copy(s),c.addEventListener("collide",Tv),i.push({mesh:o,body:c}),t.add(c)},pc=(i,t,e,n)=>{const s=new ti,r=new be(br,Dv);r.castShadow=!0,r.position.set(0,.01,0);const a=new be(fc,dc);a.position.set(0,0,0),a.scale.set(.25,.25,.25),s.add(a),s.add(r),s.position.copy(n),s.scale.set(1,1,1),e.add(s);let o=.5;const h=new le.Box(new le.Vec3(1/2,1/2,1/2)),u=new le.Body({mass:o,shape:h,position:new le.Vec3(0,3,0),material:Cv});u.position.copy(n),u.addEventListener("collide",Hn),i.push({mesh:s,body:u}),t.add(u)},kn=new nv(16777215,1.6);kn.castShadow=!0;kn.shadow.mapSize.set(1024,1024);kn.shadow.camera.far=45;kn.shadow.camera.left=-20;kn.shadow.camera.top=20;kn.shadow.camera.right=20;kn.shadow.camera.bottom=-20;kn.position.set(5,5,5);const Fv=new iv(16777215,1.2),Zn={width:window.innerWidth,height:window.innerHeight},En=new on(56,Zn.width/Zn.height,.1,100);En.position.set(0,5,10);En.lookAt(new tt(0,10,-20));const Bv=1.5;En.setViewOffset(Zn.width*3,Zn.height*Bv,Zn.width*1,Zn.height*0,Zn.width,Zn.height);const Ee=new le.World;Ee.gravity.set(0,-9.82,0);Ee.broadphase=new le.SAPBroadphase(Ee);Ee.allowSleep=!0;Ee.defaultContactMaterial=uc;Ee.addContactMaterial(uc);Ee.addContactMaterial(Pv);Ee.addContactMaterial(Lv);const Te=new qm;Te.background="#0000ff";let Ov="#fff";const zv=new Ua(Ov,20,70);Te.fog=zv;const Vv=/^[og]\s*(.+)?/,Hv=/^mtllib /,Gv=/^usemtl /,Wv=/^usemap /,Al=/\s+/,Tl=new tt,la=new tt,Rl=new tt,Cl=new tt,sn=new tt,as=new he;function kv(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const u={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return u.clone=this.clone.bind(u),u}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;Tl.fromArray(s,t),la.fromArray(s,e),Rl.fromArray(s,n),sn.subVectors(Rl,la),Cl.subVectors(Tl,la),sn.cross(Cl),sn.normalize(),r.push(sn.x,sn.y,sn.z),r.push(sn.x,sn.y,sn.z),r.push(sn.x,sn.y,sn.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,a,o,h,u){const c=this.vertices.length;let l=this.parseVertexIndex(t,c),d=this.parseVertexIndex(e,c),f=this.parseVertexIndex(n,c);if(this.addVertex(l,d,f),this.addColor(l,d,f),o!==void 0&&o!==""){const v=this.normals.length;l=this.parseNormalIndex(o,v),d=this.parseNormalIndex(h,v),f=this.parseNormalIndex(u,v),this.addNormal(l,d,f)}else this.addFaceNormal(l,d,f);if(s!==void 0&&s!==""){const v=this.uvs.length;l=this.parseUVIndex(s,v),d=this.parseUVIndex(r,v),f=this.parseUVIndex(a,v),this.addUV(l,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class mc extends rr{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,a=new Jm(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(h){s?s(h):console.error(h),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new kv;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s=[];for(let o=0,h=n.length;o<h;o++){const u=n[o].trimStart();if(u.length===0)continue;const c=u.charAt(0);if(c!=="#")if(c==="v"){const l=u.split(Al);switch(l[0]){case"v":e.vertices.push(parseFloat(l[1]),parseFloat(l[2]),parseFloat(l[3])),l.length>=7?(as.setRGB(parseFloat(l[4]),parseFloat(l[5]),parseFloat(l[6])).convertSRGBToLinear(),e.colors.push(as.r,as.g,as.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(l[1]),parseFloat(l[2]),parseFloat(l[3]));break;case"vt":e.uvs.push(parseFloat(l[1]),parseFloat(l[2]));break}}else if(c==="f"){const d=u.slice(1).trim().split(Al),f=[];for(let g=0,m=d.length;g<m;g++){const p=d[g];if(p.length>0){const _=p.split("/");f.push(_)}}const v=f[0];for(let g=1,m=f.length-1;g<m;g++){const p=f[g],_=f[g+1];e.addFace(v[0],p[0],_[0],v[1],p[1],_[1],v[2],p[2],_[2])}}else if(c==="l"){const l=u.substring(1).trim().split(" ");let d=[];const f=[];if(u.indexOf("/")===-1)d=l;else for(let v=0,g=l.length;v<g;v++){const m=l[v].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(d,f)}else if(c==="p"){const d=u.slice(1).trim().split(" ");e.addPointGeometry(d)}else if((s=Vv.exec(u))!==null){const l=(" "+s[0].slice(1).trim()).slice(1);e.startObject(l)}else if(Gv.test(u))e.object.startMaterial(u.substring(7).trim(),e.materialLibraries);else if(Hv.test(u))e.materialLibraries.push(u.substring(7).trim());else if(Wv.test(u))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(c==="s"){if(s=u.split(" "),s.length>1){const d=s[1].trim().toLowerCase();e.object.smooth=d!=="0"&&d!=="off"}else e.object.smooth=!0;const l=e.object.currentMaterial();l&&(l.smooth=e.object.smooth)}else{if(u==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+u+'"')}}e.finalize();const r=new ti;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,h=e.objects.length;o<h;o++){const u=e.objects[o],c=u.geometry,l=u.materials,d=c.type==="Line",f=c.type==="Points";let v=!1;if(c.vertices.length===0)continue;const g=new Ze;g.setAttribute("position",new we(c.vertices,3)),c.normals.length>0&&g.setAttribute("normal",new we(c.normals,3)),c.colors.length>0&&(v=!0,g.setAttribute("color",new we(c.colors,3))),c.hasUVIndices===!0&&g.setAttribute("uv",new we(c.uvs,2));const m=[];for(let _=0,y=l.length;_<y;_++){const x=l[_],M=x.name+"_"+x.smooth+"_"+v;let T=e.materials[M];if(this.materials!==null){if(T=this.materials.create(x.name),d&&T&&!(T instanceof vr)){const C=new vr;Sn.prototype.copy.call(C,T),C.color.copy(T.color),T=C}else if(f&&T&&!(T instanceof dr)){const C=new dr({size:10,sizeAttenuation:!1});Sn.prototype.copy.call(C,T),C.color.copy(T.color),C.map=T.map,T=C}}T===void 0&&(d?T=new vr:f?T=new dr({size:1,sizeAttenuation:!1}):T=new jm,T.name=x.name,T.flatShading=!x.smooth,T.vertexColors=v,e.materials[M]=T),m.push(T)}let p;if(m.length>1){for(let _=0,y=l.length;_<y;_++){const x=l[_];g.addGroup(x.groupStart,x.groupCount,_)}d?p=new xa(g,m):f?p=new ra(g,m):p=new be(g,m)}else d?p=new xa(g,m[0]):f?p=new ra(g,m[0]):p=new be(g,m[0]);p.name=u.name,r.add(p)}else if(e.vertices.length>0){const o=new dr({size:1,sizeAttenuation:!1}),h=new Ze;h.setAttribute("position",new we(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(h.setAttribute("color",new we(e.colors,3)),o.vertexColors=!0);const u=new ra(h,o);r.add(u)}return r}}const Nn=.7,Xv=new Fa(.1,.05,16,100),qv=new Pr(.1,16,16),Yv=(i,t,e)=>{const s=new le.Sphere(.25),r=new le.Body({mass:2,shape:s,position:new le.Vec3(0,Nn+.25,0),material:hc});r.allowSleep=!1,r.addEventListener("collide",e),i.addBody(r);const a=new be(new Pr(.25,32,32),dc);a.castShadow=!0,a.position.y=Nn,t.add(a);const o=new ti,h=new be(new wn(.001,.001,6),new nn({color:"#f00",metalness:.5,roughness:.4,transparent:!0,opacity:0}));h.name="ahRod",h.position.set(0,0,0);const u=new be(new wn(.1,.1,.1),new nn({color:"#ff0",opacity:0,transparent:!0}));for(let f=0;f<=9;f++){const v=new be(Xv,new nn({color:"rgb(255,"+f*25+",0)",metalness:.1,roughness:.4,transparent:!0,opacity:0})),g=.125+f*f*.001,m=1.9-(2.6+f*g);console.log(f,"z: ",g),v.position.set(0,0,m);let p=.5+f*.25;v.scale.set(p,p,p),o.add(v)}const c=new ti;for(let f=0;f<=8;f++){const v=new be(qv,new nn({color:"#fff",metalness:0,roughness:.9,transparent:!0}));c.add(v);let g=Math.sin(f*Math.PI/4)*.25,m=Math.cos(f*Math.PI/4)*.25;v.position.set(g,m,0)}o.add(c),u.position.set(1,Nn+.25,0),o.add(h),t.add(o,u),o.position.set(0,Nn+.25,0);const l=new le.Box(new le.Vec3(.2,Nn/2,.2)),d=new le.Body({mass:0,shape:l,position:new le.Vec3(0,Nn/2,0),material:Gn});return i.add(d),{bulletBody:r,bullet:a,aimHelperGroup:o,powerHelper:u,shotheight:Nn,cannonPuffGroup:c}},jv=new nn({metalness:.2,color:"#E3AF66",roughness:.4,envMapIntensity:.5}),vc=new nn({metalness:.9,color:"#fff",roughness:.2,envMap:bi,envMapIntensity:.15}),$v=async i=>{const t=new mc;return new Promise((e,n)=>{t.load("models/sightedcannon.obj",function(s){s.traverse(r=>{r.castShadow=!0,r.isMesh&&(r.name==="Body1"?r.material=vc:r.material=jv)}),s.scale.set(.15,.15,.15),s.position.y=Nn+.25,s.rotation.z=Math.PI*2,i.add(s),e(s)},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log("An error happened",s)})})},Kv=i=>{const t=new mc;return new Promise((e,n)=>{t.load("models/stand.obj",function(s){s.traverse(r=>{r.castShadow=!0,r.isMesh&&(r.name.includes("metal")?r.material=vc:r.material=Iv)}),s.scale.set(.15,.15,.15),s.position.y=Nn+.25,s.rotation.z=Math.PI*2,i.add(s),e(s)},function(s){console.log(s.loaded/s.total*100+"% loaded")},function(s){console.log("An error happened",s)})})},gn=[{red:.1,white:.05,steel:.01,ammo:.001,bouncy:.005},{red:.095,white:.07,steel:.01,ammo:.005,bouncy:.005},{red:.09,white:.09,steel:.015,ammo:.005,bouncy:.005},{red:.085,white:.11,steel:.02,ammo:.005,bouncy:.005},{red:.08,white:.13,steel:.025,ammo:.005,bouncy:.005},{red:.075,white:.15,steel:.03,ammo:.005,bouncy:.005},{red:.07,white:.17,steel:.035,ammo:.01,bouncy:.005},{red:.065,white:.19,steel:.04,ammo:.005,bouncy:.005},{red:.06,white:.21,steel:.045,ammo:.005,bouncy:.005},{red:.055,white:.23,steel:.05,ammo:.005,bouncy:.005},{red:.05,white:.25,steel:.055,ammo:.005,bouncy:.005},{red:.045,white:.27,steel:.06,ammo:.005,bouncy:.005},{red:.04,white:.29,steel:.065,ammo:.005,bouncy:.005},{red:.035,white:.31,steel:.07,ammo:.005,bouncy:.005},{red:.03,white:.33,steel:.075,ammo:.005,bouncy:.005},{red:.025,white:.35,steel:.08,ammo:.005,bouncy:.005},{red:.02,white:.37,steel:.085,ammo:.005,bouncy:.005},{red:.015,white:.39,steel:.09,ammo:.001,bouncy:.005},{red:.01,white:.41,steel:.095,ammo:.001,bouncy:.005},{red:.005,white:.43,steel:.1,ammo:.001,bouncy:.005},{red:.005,white:.45,steel:.105,ammo:0,bouncy:.005}],Zv=new URLSearchParams(window.location.search),gc=Zv.get("debug")==="true";console.log(gc);const Mi=new xv;var gs=new Sv;gc?(Mi.show(),document.body.appendChild(gs.dom),gs.showPanel(0)):Mi.hide();let Ar=0,tr=1,Oe=0,si=!1,bn=3,_r=0,_s=!1;const je={bullet:{diameter:.25,x:0,y:0,z:0},plane:{width:6,length:16}},Jv=i=>{i.body.material.name==="targetReactionMaterial"&&i.body.mass!==0?_e.map((t,e)=>{i.body===t.body&&(Qv(),setTimeout(()=>{_e.splice(e,1),t.body.removeEventListener("collide",Hn),Ee.removeBody(t.body),ai(),Te.remove(t.mesh)},30))}):i.body.material.name==="crateReactionMaterial"&&_e.map((t,e)=>{i.body===t.body&&(bn++,bn++,setTimeout(()=>{_e.splice(e,1),t.body.removeEventListener("collide",Hn),Ee.removeBody(t.body),ai(),Te.remove(t.mesh)},30))})},Qv=i=>{tr++,document.getElementById("multiplier").classList.add("big"),setTimeout(()=>{document.getElementById("multiplier").classList.remove("big")},200),_r++,_s=!0,_r>=5&&(bn++,_r=0,document.getElementById("bulletCounter").classList.add("big"),setTimeout(()=>{document.getElementById("bulletCounter").classList.remove("big")},200)),Ar=Ar+50*(Oe+1)*tr,ai()};let _e=[];const _c=[],Lr={createSphere:()=>{for(let i=0;i<1;i++)Nv(_c,Ee,Te,Math.random(),{x:0,y:10,z:0})},createAmmoBox:()=>{pc(_e,Ee,Te,{x:0,y:5.5,z:-3})},createWhiteBox:()=>{vs(_e,Ee,Te,.9,{x:0,y:5.5,z:-3},.1)},createSteelBox:()=>{vs(_e,Ee,Te,.9,{x:0,y:.5,z:-3},0,"#333")},levelUp:()=>{Ga()}};Mi.add(Lr,"createSteelBox");Mi.add(Lr,"createWhiteBox");Mi.add(Lr,"createAmmoBox");Mi.add(Lr,"createSphere");Mi.add(Lr,"levelUp");const sr=Yv(Ee,Te,Jv),ca=await $v(Te),Pl=await Kv(Te),Un=sr.bulletBody,ji=sr.bullet,Tr=sr.aimHelperGroup,ha=sr.powerHelper,tg=sr.shotheight,hr=sr.cannonPuffGroup;console.log("aimHelperGroup",Tr);let gi=0;const Va=()=>{gi=0;let i=.1-Oe*.005;if(Oe<40&&i>0){for(let t=0;t<je.plane.length-8;t++)for(let e=0;e<je.plane.width-1;e++){const n=-t-4,s=-e+je.plane.width/2-1,r=Math.random();r<gn[Oe].red?(gi++,Uv(_e,Ee,Te,.9,{x:s,y:.5,z:n},.5,"#f00")):r<gn[Oe].red+gn[Oe].ammo?pc(_e,Ee,Te,{x:s,y:.5,z:n}):r<gn[Oe].red+gn[Oe].ammo+gn[Oe].white?vs(_e,Ee,Te,.9,{x:s,y:.5,z:n},.1):r<gn[Oe].red+gn[Oe].ammo+gn[Oe].white+gn[Oe].steel&&vs(_e,Ee,Te,.9,{x:s,y:.5,z:n},0,"#333")}ai()}else si=!0;gi<1&&i>0?(wc(),Va()):Sa=!1};let ls=new wn(je.plane.width,100,je.plane.length);const Ei=new be(ls,new nn({color:"#34de78",metalness:.3,roughness:.4,envMap:bi,envMapIntensity:.5,opacity:.2}));Ei.receiveShadow=!0;Ei.position.y=-50;Ei.position.z=-je.plane.length/2+4;Te.add(Ei);const eg=new le.Box(new le.Vec3(je.plane.width/2,100/2,je.plane.length/2)),Ha=new le.Body({mass:0,shape:eg,material:Gn});Ha.position.copy(Ei.position);Ha.addEventListener("collide",Hn);Ee.add(Ha);new sv(5);Te.add(Fv);Te.add(kn);const Ye={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ye.width=window.innerWidth,Ye.height=window.innerHeight,En.aspect=Ye.width/Ye.height,En.setViewOffset(Ye.width*3,Ye.height*1.5,Ye.width*1,Ye.height*0,Ye.width,Ye.height),En.updateProjectionMatrix(),Si.setSize(Ye.width,Ye.height),Si.setPixelRatio(Math.min(window.devicePixelRatio,2))});Te.add(En);const yc=document.querySelector("canvas.webgl"),xc=new ov(En,yc);xc.enableDamping=!0;const Si=new sc({canvas:yc});Si.shadowMap.enabled=!0;Si.shadowMap.type=Dl;Si.setSize(Ye.width,Ye.height);Si.setPixelRatio(Math.min(window.devicePixelRatio,2));let zn={x:0,y:0,z:0},Mc;const bs=()=>{if(!si)if(ji.position.x===0){Wa=!0,bn--,document.getElementById("bulletCounter").innerHTML=bn,clearInterval(Mc),setTimeout(()=>{const n=document.getElementById("firebtn"),s=1;n.style.transform=`scale(${s})`},250),er();const i=-2e3*zn.x,t=-2e3*zn.y,e=-2e3*zn.z;Un.applyForce(new le.Vec3(i,t,e),Un.position),On=0,er(),Tr.children.map((n,s)=>{s<10&&(n.material.opacity=0)})}else console.log("bullet not in position, cant fire",ji.position.x)},As=()=>{si?(tr=1,Un.position.set(0,.95,0),Un.velocity.set(0,0,0),Un.angularVelocity.set(0,0,0)):(_r=0,_s&&(bn++,_s=!1),bn<=0&&(si=!0,bc()),tr=1,Un.position.set(0,.95,0),Un.velocity.set(0,0,0),Un.angularVelocity.set(0,0,0)),ai()};let Bn=0,vn=0,On=0;const er=()=>{var i=(On+.3)*Math.sin(vn),t=-(On+.3)*Math.cos(vn)*Math.sin(Bn),e=(On+.3)*Math.cos(vn)*Math.cos(Bn);zn.x=i,zn.y=t,zn.z=e};er();const ng=i=>{Bn=Number(i.target.value),er()},ig=i=>{vn=-Number(i.target.value),er()};function Ec(i){i.preventDefault(),Mc=setInterval(Sc,100)}const Sc=()=>{if(!$i&&!si&&ji.position.x===0){On+=.05;const i=document.getElementById("firebtn"),t=1+On;i.style.transform=`scale(${t})`,er(),On>=2&&($i=!0,bs(),setTimeout(()=>{$i=!1},2e3));let e=On*5;console.log("renderPower",e),Tr.children.map((n,s)=>{s<=e&&(n.material.opacity=e-s)})}},rg=()=>{Oe=-1,Ar=0,_r=0,_s=!1,tr=1,si=!1,bn=2,si=!1,As(),Ga(),document.getElementById("gameOverModal").classList.remove("visible")};document.getElementById("angleInput").addEventListener("input",ng,!1);document.getElementById("windageInput").addEventListener("input",ig,!1);document.getElementById("firebtn").addEventListener("mousedown",Ec);document.getElementById("firebtn").addEventListener("touchstart",Ec);document.getElementById("firebtn").addEventListener("touchend",bs);document.getElementById("firebtn").addEventListener("mouseup",bs);document.getElementById("resetbtn").addEventListener("click",As);document.getElementById("restartBtn").addEventListener("click",rg);let $i=!1,Dn=0;document.addEventListener("keydown",function(i){i.keyCode==40?(Dn+=.005,Bn<=1.57&&(Bn+=Dn)):i.keyCode==38?(Dn+=.005,Bn>=-1&&(Bn-=Dn)):i.keyCode==37?(Dn+=.005,vn<=.7853&&(vn+=Dn)):i.keyCode==39?(Dn+=.005,vn>=-.7853&&(vn-=Dn)):i.keyCode==32&&Sc()});document.addEventListener("keyup",function(i){Dn=0,$i||i.keyCode==32&&(bs(),$i=!0,setTimeout(()=>{$i=!1},2e3))});const wc=()=>{_e.map(i=>{i.body.removeEventListener("collide",Hn),Ee.removeBody(i.body),Te.remove(i.mesh)}),_e=[]};let Sa=!1;const Ga=()=>{if(Oe<21){bn++,As(),Oe++,je.plane.length=20+Oe*2,wc(),ls.dispose(),ls=new wn(je.plane.width,100,je.plane.length),Ei.geometry=ls,Ei.position.z=-je.plane.length/2+4;let i=new le.Box(new le.Vec3(je.plane.width/2,100/2,6/2)),t=new le.Body({mass:0,shape:i,material:Gn,position:new le.Vec3(0,-50,-je.plane.length+7)});t.addEventListener("collide",Hn),Ee.add(t),Va()}else si=!0,bc(),ai()},ai=()=>{let i=0;for(var t=_e.length-1;t>=0;t--)_e[t].body.material.name==="targetReactionMaterial"&&i++;gi=i,document.getElementById("levelnr").innerHTML=Oe,document.getElementById("scorenr").innerHTML=Ar,document.getElementById("blocknr").innerHTML=gi,document.getElementById("multiplier").innerHTML="x"+tr,document.getElementById("bulletCounter").innerHTML=bn};document.getElementById("infobtn").addEventListener("click",()=>{document.getElementById("infomodal").classList.toggle("visible")});document.getElementById("closebtn").addEventListener("click",()=>{document.getElementById("infomodal").classList.remove("visible")});const bc=()=>{console.log("showing game over"),document.getElementById("finScore").innerHTML=Ar,document.getElementById("gameOverModal").classList.toggle("visible")},sg=new rv;let Ll=0,ua=!1,Wa=!1,wa=0;const ag=i=>{console.log("power",On),hr.position.setZ(0-.15*i),hr.scale.set(1+.05*i,1+.05*i,1+.05*i),hr.children.map((t,e)=>{t.scale.set(1-i*.025,1-i*.025,1-i*.025)}),i>40&&(Wa=!1,wa=0,hr.position.setZ(.1),hr.scale.set(1,1,1))},Ac=()=>{gs.begin(),Wa===!0&&(wa++,ag(wa));const i=sg.getElapsedTime();let t=i-Ll;Ll=i,xc.update(),Ee.step(1/60,t,3),ji.position.copy(Un.position),ji.position.y<-10&&As();for(var e=_e.length-1;e>=0;e--)_e[e].mesh.position.copy(_e[e].body.position),_e[e].mesh.quaternion.copy(_e[e].body.quaternion),_e[e].mesh.position.y<-10&&(_e[e].body.material.name==="targetReactionMaterial"&&(gi--,ua=!0),_e[e].body.removeEventListener("collide",Hn),Ee.removeBody(_e[e].body),Te.remove(_e[e].mesh),_e.splice(e,1));ua&&(ai(),ua=!1),_c.map(n=>{n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(n.body.quaternion)}),gi===0&&!Sa&&(Sa=!0,setTimeout(Ga,1e3)),Tr.rotation.x=Bn,Tr.rotation.y=vn,ca&&(ca.rotation.y=vn+Math.PI,ca.rotation.x=Bn),Pl&&(Pl.rotation.y=vn+Math.PI),ha.position.x=zn.x,ha.position.y=zn.y+tg+.25,ha.position.z=zn.z,En.lookAt(ji.position),Si.render(Te,En),gs.end(),window.requestAnimationFrame(Ac)};Va();ai();Ac();
//# sourceMappingURL=index-28354e6f.js.map
