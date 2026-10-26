var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ed=0,qc=1,td=2;var ts=1,id=2,js=3,Nn=0,ci=1,Jt=2,Si=0,Qs=1,is=2,Yc=3,Zc=4,nd=5;var ns=100,sd=101,rd=102,ad=103,od=104,ld=200,cd=201,hd=202,ud=203,Kc=204,$c=205,dd=206,fd=207,pd=208,md=209,gd=210,_d=211,xd=212,vd=213,yd=214,so=0,ro=1,ao=2,Ds=3,oo=4,lo=5,co=6,ho=7,Jc=0,Md=1,bd=2,Ui=0,ia=1,na=2,sa=3,ss=4,ra=5,aa=6,oa=7;var jc=300,Un=301,rs=302,Ho=303,Go=304,la=306,uo=1e3,Gi=1001,fo=1002,Zt=1003,Sd=1004;var ca=1005;var $t=1006,Wo=1007;var Fn=1008;var hi=1009,Qc=1010,eh=1011,er=1012,Xo=1013,Fi=1014,wi=1015,jt=1016,qo=1017,Yo=1018,tr=1020,th=35902,ih=35899,nh=1021,sh=1022,Ei=1023,Wi=1026,On=1027,Zo=1028,Ko=1029,Bn=1030,$o=1031;var Jo=1033,ha=33776,ua=33777,da=33778,fa=33779,jo=35840,Qo=35841,el=35842,tl=35843,il=36196,nl=37492,sl=37496,rl=37488,al=37489,pa=37490,ol=37491,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,_l=37817,xl=37818,vl=37819,yl=37820,Ml=37821,bl=36492,Sl=36494,wl=36495,El=36283,Tl=36284,ma=36285,Al=36286;var yr=2300,po=2301,io=2302,Lc=2303,Dc=2400,Nc=2401,Uc=2402;var wd=3200;var Rl=0,Ed=1,fn="",mi="srgb",Mr="srgb-linear",br="linear",ct="srgb";var no=7680;var Td=519,Ad=512,Rd=513,Cd=514,Cl=515,Pd=516,Id=517,Pl=518,Ld=519,Dd=35044;var rh="300 es",Ii=2e3,Ns=2001;function ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function op(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Sr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nd(){let n=Sr("canvas");return n.style.display="block",n}var gu={},Us=null;function ah(...n){let e="THREE."+n.shift();Us?Us("log",e,...n):console.log(e,...n)}function Ud(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=Ud(n);let e="THREE."+n.shift();if(Us)Us("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function He(...n){n=Ud(n);let e="THREE."+n.shift();if(Us)Us("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $n(...n){let e=n.join(" ");e in gu||(gu[e]=!0,ke(...n))}function Fd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Od={[so]:ro,[ao]:co,[oo]:ho,[Ds]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Ds},Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=1234567,gr=Math.PI/180,Fs=180/Math.PI;function as(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function oh(n,e){return(n%e+e)%e}function lp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cp(n,e,t){return n!==e?(t-n)/(e-n):0}function _r(n,e,t){return(1-t)*n+t*e}function hp(n,e,t,i){return _r(n,e,1-Math.exp(-t*i))}function up(n,e=1){return e-Math.abs(oh(n,e*2)-e)}function dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mp(n,e){return n+Math.random()*(e-n)}function gp(n){return n*(.5-Math.random())}function _p(n){n!==void 0&&(_u=n);let e=_u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xp(n){return n*gr}function vp(n){return n*Fs}function yp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Mp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lh={DEG2RAD:gr,RAD2DEG:Fs,generateUUID:as,clamp:Qe,euclideanModulo:oh,mapLinear:lp,inverseLerp:cp,lerp:_r,damp:hp,pingpong:up,smoothstep:dp,smootherstep:fp,randInt:pp,randFloat:mp,randFloatSpread:gp,seededRandom:_p,degToRad:xp,radToDeg:vp,isPowerOfTwo:yp,ceilPowerOfTwo:Mp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:Sp,normalize:ri,denormalize:Is},ph=class ph{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ph.prototype.isVector2=!0;var re=ph,_i=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mh=class mh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oc.copy(this).projectOnVector(e),this.sub(oc)}reflect(e){return this.sub(oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mh.prototype.isVector3=!0;var P=mh,oc=new P,xu=new _i,gh=class gh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],M=s[1],w=s[4],x=s[7],S=s[2],E=s[5],C=s[8];return r[0]=a*y+o*M+l*S,r[3]=a*m+o*w+l*E,r[6]=a*p+o*x+l*C,r[1]=c*y+h*M+d*S,r[4]=c*m+h*w+d*E,r[7]=c*p+h*x+d*C,r[2]=u*y+f*M+g*S,r[5]=u*m+f*w+g*E,r[8]=u*p+f*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $n("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(e,t)),this}rotate(e){return $n("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-e)),this}translate(e,t){return $n("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gh.prototype.isMatrix3=!0;var Ye=gh,lc=new Ye,vu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){let n={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=cn(s.r),s.g=cn(s.g),s.b=cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fn?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $n("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $n("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mr]:{primaries:e,whitePoint:i,transfer:br,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),n}var tt=wp();function cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var _s,mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Sr("canvas")),_s.width=e.width,_s.height=e.height;let s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cn(t[i]/255)*255):t[i]=cn(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ep=0,Os=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cc(s[a].image)):r.push(cc(s[a]))}else r=cc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function cc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Tp=0,hc=new P,li=class n extends Li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gi,s=Gi,r=$t,a=Fn,o=Ei,l=hi,c=n.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=as(),this.name="",this.source=new Os(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=jc;li.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,x=(f+1)/2,S=(p+1)/2,E=(h+u)/4,C=(d+y)/4,v=(g+m)/4;return w>x&&w>S?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=C/i):x>S?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=E/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=C/r,s=v/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var At=_h,go=class extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new li(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Os(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends go{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wr=class extends li{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends li{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vo=class Vo{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ap,e,Rp)}lookAt(e,t,i){let s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),yn.crossVectors(i,fi),yn.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),yn.crossVectors(i,fi)),yn.normalize(),Pa.crossVectors(fi,yn),s[0]=yn.x,s[4]=Pa.x,s[8]=fi.x,s[1]=yn.y,s[5]=Pa.y,s[9]=fi.y,s[2]=yn.z,s[6]=Pa.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],M=i[3],w=i[7],x=i[11],S=i[15],E=s[0],C=s[4],v=s[8],T=s[12],I=s[1],N=s[5],O=s[9],W=s[13],U=s[2],k=s[6],Y=s[10],q=s[14],oe=s[3],Z=s[7],ee=s[11],se=s[15];return r[0]=a*E+o*I+l*U+c*oe,r[4]=a*C+o*N+l*k+c*Z,r[8]=a*v+o*O+l*Y+c*ee,r[12]=a*T+o*W+l*q+c*se,r[1]=h*E+d*I+u*U+f*oe,r[5]=h*C+d*N+u*k+f*Z,r[9]=h*v+d*O+u*Y+f*ee,r[13]=h*T+d*W+u*q+f*se,r[2]=g*E+y*I+m*U+p*oe,r[6]=g*C+y*N+m*k+p*Z,r[10]=g*v+y*O+m*Y+p*ee,r[14]=g*T+y*W+m*q+p*se,r[3]=M*E+w*I+x*U+S*oe,r[7]=M*C+w*N+x*k+S*Z,r[11]=M*v+w*O+x*Y+S*ee,r[15]=M*T+w*W+x*q+S*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*u,w=o*f-c*d,x=o*u-l*d,S=a*f-c*h,E=a*u-l*h,C=a*d-o*h;return t*(y*M-m*w+p*x)-i*(g*M-m*S+p*E)+s*(g*w-y*S+p*C)-r*(g*x-y*E+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*o-i*a,w=t*l-s*a,x=t*c-r*a,S=i*l-s*o,E=i*c-r*o,C=s*c-r*l,v=h*y-d*g,T=h*m-u*g,I=h*p-f*g,N=d*m-u*y,O=d*p-f*y,W=u*p-f*m,U=M*W-w*O+x*N+S*I-E*T+C*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/U;return e[0]=(o*W-l*O+c*N)*k,e[1]=(s*O-i*W-r*N)*k,e[2]=(y*C-m*E+p*S)*k,e[3]=(u*E-d*C-f*S)*k,e[4]=(l*I-a*W-c*T)*k,e[5]=(t*W-s*I+r*T)*k,e[6]=(m*x-g*C-p*w)*k,e[7]=(h*C-u*x+f*w)*k,e[8]=(a*O-o*I+c*v)*k,e[9]=(i*I-t*O-r*v)*k,e[10]=(g*E-y*x+p*M)*k,e[11]=(d*x-h*E-f*M)*k,e[12]=(o*T-a*N-l*v)*k,e[13]=(t*N-i*T+s*v)*k,e[14]=(y*w-g*S-m*M)*k,e[15]=(h*S-d*w+u*M)*k,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,M=l*c,w=l*h,x=l*d,S=i.x,E=i.y,C=i.z;return s[0]=(1-(y+p))*S,s[1]=(f+x)*S,s[2]=(g-w)*S,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(u+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+w)*C,s[9]=(m-M)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ri.copy(this);let c=1/a,h=1/o,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,t.setFromRotationMatrix(Ri),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ii,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Ii)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ii,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Ii)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vo.prototype.isMatrix4=!0;var pt=Vo,xs=new P,Ri=new pt,Ap=new P(0,0,0),Rp=new P(1,1,1),yn=new P,Pa=new P,fi=new P,Mu=new pt,bu=new _i,hn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cp=0,Su=new P,vs=new _i,sn=new pt,Ia=new P,lr=new P,Pp=new P,Ip=new _i,wu=new P(1,0,0),Eu=new P(0,1,0),Tu=new P(0,0,1),Au={type:"added"},Lp={type:"removed"},ys={type:"childadded",child:null},uc={type:"childremoved",child:null},Ut=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new hn,i=new _i,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ye}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ia.copy(e):Ia.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(lr,Ia,this.up):sn.lookAt(Ia,lr,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(sn),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),ys.child=e,this.dispatchEvent(ys),ys.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new P(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dp={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},La={h:0,s:0,l:0};function dc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=oh(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=dc(a,r,e+1/3),this.g=dc(a,r,e),this.b=dc(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=mi){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){let i=Bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cn(e.r),this.g=cn(e.g),this.b=cn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return tt.workingToColorSpace(ti.copy(this),e),Math.round(Qe(ti.r*255,0,255))*65536+Math.round(Qe(ti.g*255,0,255))*256+Math.round(Qe(ti.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(ti.copy(this),t);let i=ti.r,s=ti.g,r=ti.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=mi){tt.workingToColorSpace(ti.copy(this),e);let t=ti.r,i=ti.g,s=ti.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(La);let i=_r(Mn.h,La.h,t),s=_r(Mn.s,La.s,t),r=_r(Mn.l,La.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ti=new Be;Be.NAMES=Bd;var Er=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=new P,rn=new P,fc=new P,an=new P,Ms=new P,bs=new P,Ru=new P,pc=new P,mc=new P,gc=new P,_c=new At,xc=new At,vc=new At,En=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ci.subVectors(e,t),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ci.subVectors(s,t),rn.subVectors(i,t),fc.subVectors(e,t);let a=Ci.dot(Ci),o=Ci.dot(rn),l=Ci.dot(fc),c=rn.dot(rn),h=rn.dot(fc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return _c.setScalar(0),xc.setScalar(0),vc.setScalar(0),_c.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,i),vc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(_c,r.x),a.addScaledVector(xc,r.y),a.addScaledVector(vc,r.z),a}static isFrontFacing(e,t,i,s){return Ci.subVectors(i,t),rn.subVectors(e,t),Ci.cross(rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ci.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,i),bs.subVectors(r,i),pc.subVectors(e,i);let l=Ms.dot(pc),c=bs.dot(pc);if(l<=0&&c<=0)return t.copy(i);mc.subVectors(e,s);let h=Ms.dot(mc),d=bs.dot(mc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ms,a);gc.subVectors(e,r);let f=Ms.dot(gc),g=bs.dot(gc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(bs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ru.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Ru,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(i).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(r,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Na.subVectors(this.max,cr),Ss.subVectors(e.a,cr),ws.subVectors(e.b,cr),Es.subVectors(e.c,cr),bn.subVectors(ws,Ss),Sn.subVectors(Es,ws),Xn.subVectors(Ss,Es);let t=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-Xn.z,Xn.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,Xn.z,0,-Xn.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-Xn.y,Xn.x,0];return!yc(t,Ss,ws,Es,Na)||(t=[1,0,0,0,1,0,0,0,1],!yc(t,Ss,ws,Es,Na))?!1:(Ua.crossVectors(bn,Sn),t=[Ua.x,Ua.y,Ua.z],yc(t,Ss,ws,Es,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},on=[new P,new P,new P,new P,new P,new P,new P,new P],Pi=new P,Da=new Xi,Ss=new P,ws=new P,Es=new P,bn=new P,Sn=new P,Xn=new P,cr=new P,Na=new P,Ua=new P,qn=new P;function yc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qn.fromArray(n,r);let o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=i.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zt=new P,Fa=new re,Np=0,gi=class extends Li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Np++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dd,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ri(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array),s=ri(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ri(t,this.array),i=ri(i,this.array),s=ri(s,this.array),r=ri(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Tr=class extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ar=class extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var $e=class extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Up=new Xi,hr=new P,Mc=new P,qi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Up.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Mc)),this.expandByPoint(hr.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fp=0,bi=new pt,bc=new Ut,Ts=new P,pi=new Xi,ur=new Xi,Yt=new P,Mt=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?Ar:Tr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return bc.lookAt(e),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(pi.min,ur.min),pi.expandByPoint(Yt),Yt.addVectors(pi.max,ur.max),pi.expandByPoint(Yt)):(pi.expandByPoint(ur.min),pi.expandByPoint(ur.max))}pi.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),Yt.add(Ts)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new P,l[v]=new P;let c=new P,h=new P,d=new P,u=new re,f=new re,g=new re,y=new P,m=new P;function p(v,T,I){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[v].add(y),o[T].add(y),o[I].add(y),l[v].add(m),l[T].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,T=M.length;v<T;++v){let I=M[v],N=I.start,O=I.count;for(let W=N,U=N+O;W<U;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let w=new P,x=new P,S=new P,E=new P;function C(v){S.fromBufferAttribute(s,v),E.copy(S);let T=o[v];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(E,T);let N=x.dot(l[v])<0?-1:1;a.setXYZW(v,w.x,w.y,w.z,N)}for(let v=0,T=M.length;v<T;++v){let I=M[v],N=I.start,O=I.count;for(let W=N,U=N+O;W<U;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new gi(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sc=new P,Op=new P,Bp=new Ye,ai=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sc.subVectors(i,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bp.getNormalMatrix(e),s=this.coplanarPoint(Sc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kp=0,Yi=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Qs,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=$c,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new re().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ln=new P,wc=new P,Oa=new P,Ba=new P,un=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wc.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),Ba.copy(this.origin).sub(wc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Oa),o=Ba.dot(this.direction),l=-Ba.dot(Oa),c=Ba.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wc).addScaledVector(Oa,u),f}intersectSphere(e,t){if(e.radius<0)return null;ln.subVectors(e.center,this.origin);let i=ln.dot(this.direction),s=ln.dot(ln)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=i.x-a.x,M=i.y-a.y,w=i.z-a.z,x=Math.abs(l),S=Math.abs(c),E=Math.abs(h),C,v,T,I,N,O,W,U,k,Y,q,oe;if(x>=S&&x>=E?(T=l,O=d,k=g,oe=p,l>=0?(C=c,v=h,I=u,N=f,W=y,U=m,Y=M,q=w):(C=h,v=c,I=f,N=u,W=m,U=y,Y=w,q=M)):S>=E?(T=c,O=u,k=y,oe=M,c>=0?(C=h,v=l,I=f,N=d,W=m,U=g,Y=w,q=p):(C=l,v=h,I=d,N=f,W=g,U=m,Y=p,q=w)):(T=h,O=f,k=m,oe=w,h>=0?(C=l,v=c,I=d,N=u,W=g,U=y,Y=p,q=M):(C=c,v=l,I=u,N=d,W=y,U=g,Y=M,q=p)),T===0)return null;let Z=C/T,ee=v/T,se=1/T,De=I-Z*O,Re=N-ee*O,ht=W-Z*k,it=U-ee*k,ot=Y-Z*oe,J=q-ee*oe,te=ot*it-J*ht,Me=De*J-Re*ot,Ge=ht*Re-it*De;if(s){if(te<0||Me<0||Ge<0)return null}else if((te<0||Me<0||Ge<0)&&(te>0||Me>0||Ge>0))return null;let Ee=te+Me+Ge;if(Ee===0)return null;let We=se*(te*O+Me*k+Ge*oe);return(Ee>0?We<0:We>0)?null:this.at(We/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ft=class extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cu=new pt,Yn=new un,ka=new qi,Pu=new P,za=new P,Va=new P,Ha=new P,Ec=new P,Ga=new P,Iu=new P,Wa=new P,Bt=class extends Ut{constructor(e=new Mt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ec.fromBufferAttribute(d,e),a?Ga.addScaledVector(Ec,h):Ga.addScaledVector(Ec.sub(t),h))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(ka.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(ka,Pu)===null||Yn.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Cu),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=w;x<S;x+=3){let E=o.getX(x),C=o.getX(x+1),v=o.getX(x+2);s=Xa(this,p,e,i,c,h,d,E,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),w=o.getX(m+1),x=o.getX(m+2);s=Xa(this,a,e,i,c,h,d,M,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=w;x<S;x+=3){let E=x,C=x+1,v=x+2;s=Xa(this,p,e,i,c,h,d,E,C,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,w=m+1,x=m+2;s=Xa(this,a,e,i,c,h,d,M,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function zp(n,e,t,i,s,r,a,o){let l;if(e.side===ci?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Nn,o),l===null)return null;Wa.copy(o),Wa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Wa);return c<t.near||c>t.far?null:{distance:c,point:Wa.clone(),object:n}}function Xa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,za),n.getVertexPosition(l,Va),n.getVertexPosition(c,Ha);let h=zp(n,e,t,i,za,Va,Ha,Iu);if(h){let d=new P;En.getBarycoord(Iu,za,Va,Ha,d),s&&(h.uv=En.getInterpolatedAttribute(s,o,l,c,d,new re)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,l,c,d,new re)),a&&(h.normal=En.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};En.getNormal(za,Va,Ha,u.normal),h.face=u,h.barycoord=d}return h}var Rr=class extends li{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Zt,h=Zt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cr=class extends gi{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new pt,Lu=new pt,qa=[],Du=new Xi,Vp=new pt,dr=new Bt,fr=new qi,Tn=class extends Bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Vp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),Du.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Du)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,As),fr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(i),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),Lu.multiplyMatrices(i,As),dr.matrixWorld=Lu,dr.raycast(e,qa);for(let a=0,o=qa.length;a<o;a++){let l=qa[a];l.instanceId=r,l.object=this,t.push(l)}qa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(s*this.count),s,this.count,Zo,wi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zn=new qi,Hp=new re(.5,.5),Ya=new P,zs=class{constructor(e=new ai,t=new ai,i=new ai,s=new ai,r=new ai,a=new ai){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],w=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,p-g,S-M).normalize(),s[1].setComponents(c+a,f+h,p+g,S+M).normalize(),s[2].setComponents(c+o,f+d,p+y,S+w).normalize(),s[3].setComponents(c-o,f-d,p-y,S-w).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,S-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-x).normalize(),t===Ii)s[5].setComponents(c+l,f+u,p+m,S+x).normalize();else if(t===Ns)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);let t=Hp.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ya.x=s.normal.x>0?e.max.x:e.min.x,Ya.y=s.normal.y>0?e.max.y:e.min.y,Ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var An=class extends Yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xo=new P,vo=new P,Nu=new pt,pr=new un,Za=new qi,Tc=new P,Uu=new P,Vs=class extends Ut{constructor(e=new Mt,t=new An){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)xo.fromBufferAttribute(t,s-1),vo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=xo.distanceTo(vo);e.setAttribute("lineDistance",new $e(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,e.ray.intersectsSphere(Za)===!1)return;Nu.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Nu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),w=Ka(this,e,pr,l,p,M,y);w&&t.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=Ka(this,e,pr,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=Ka(this,e,pr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Ka(this,e,pr,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ka(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,vo,Tc,Uu)>i)return;Tc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Tc);if(!(c<e.near||c>e.far))return{distance:c,point:Uu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Fu=new P,Ou=new P,Hs=class extends Vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Fu.fromBufferAttribute(t,s),Ou.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fu.distanceTo(Ou);e.setAttribute("lineDistance",new $e(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Jn=class extends Yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bu=new pt,Fc=new un,$a=new qi,Ja=new P,Gs=class extends Ut{constructor(e=new Mt,t=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Bu.copy(s).invert(),Fc.copy(e.ray).applyMatrix4(Bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);Ja.fromBufferAttribute(d,m),ku(Ja,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Ja.fromBufferAttribute(d,g),ku(Ja,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ku(n,e,t,i,s,r,a){let o=Fc.distanceSqToPoint(n);if(o<t){let l=new P;Fc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends li{constructor(e=[],t=Un,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ir=class extends li{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Rn=class extends li{constructor(e,t,i=Fi,s,r,a,o=Zt,l=Zt,c,h=Wi,d=1){if(h!==Wi&&h!==On)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Os(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},yo=class extends Rn{constructor(e,t=Fi,i=Un,s,r,a=Zt,o=Zt,l,c=Wi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends li{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},dn=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2));function g(y,m,p,M,w,x,S,E,C,v,T){let I=x/C,N=S/v,O=x/2,W=S/2,U=E/2,k=C+1,Y=v+1,q=0,oe=0,Z=new P;for(let ee=0;ee<Y;ee++){let se=ee*N-W;for(let De=0;De<k;De++){let Re=De*I-O;Z[y]=Re*M,Z[m]=se*w,Z[p]=U,c.push(Z.x,Z.y,Z.z),Z[y]=0,Z[m]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(De/C),d.push(1-ee/v),q+=1}}for(let ee=0;ee<v;ee++)for(let se=0;se<C;se++){let De=u+se+k*ee,Re=u+se+k*(ee+1),ht=u+(se+1)+k*(ee+1),it=u+(se+1)+k*ee;l.push(De,Re,it),l.push(Re,ht,it),oe+=6}o.addGroup(f,oe,T),f+=oe,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ws=class n extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Cn=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new $e(d,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function M(){let x=new P,S=new P,E=0,C=(t-e)/i;for(let v=0;v<=r;v++){let T=[],I=v/r,N=I*(t-e)+e;for(let O=0;O<=s;O++){let W=O/s,U=W*l+o,k=Math.sin(U),Y=Math.cos(U);S.x=N*k,S.y=-I*i+m,S.z=N*Y,d.push(S.x,S.y,S.z),x.set(k,C,Y).normalize(),u.push(x.x,x.y,x.z),f.push(W,1-I),T.push(g++)}y.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){let I=y[T][v],N=y[T+1][v],O=y[T+1][v+1],W=y[T][v+1];(e>0||T!==0)&&(h.push(I,N,W),E+=3),(t>0||T!==r-1)&&(h.push(N,O,W),E+=3)}c.addGroup(p,E,0),p+=E}function w(x){let S=g,E=new re,C=new P,v=0,T=x===!0?e:t,I=x===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let N=g;for(let O=0;O<=s;O++){let U=O/s*l+o,k=Math.cos(U),Y=Math.sin(U);C.x=T*Y,C.y=m*I,C.z=T*k,d.push(C.x,C.y,C.z),u.push(0,I,0),E.x=k*.5+.5,E.y=Y*.5*I+.5,f.push(E.x,E.y),g++}for(let O=0;O<s;O++){let W=S+O,U=N+O;x===!0?h.push(U,U+1,W):h.push(U+1,U,W),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jn=class n extends Cn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Dr=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new P,x=new P,S=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],x),f(t[E+2],S),l(w,x,S,M)}function l(M,w,x,S){let E=S+1,C=[];for(let v=0;v<=E;v++){C[v]=[];let T=M.clone().lerp(x,v/E),I=w.clone().lerp(x,v/E),N=E-v;for(let O=0;O<=N;O++)O===0&&v===E?C[v][O]=T:C[v][O]=T.clone().lerp(I,O/N)}for(let v=0;v<E;v++)for(let T=0;T<2*(E-v)-1;T++){let I=Math.floor(T/2);T%2===0?(u(C[v][I+1]),u(C[v+1][I]),u(C[v][I])):(u(C[v][I+1]),u(C[v+1][I+1]),u(C[v+1][I]))}}function c(M){let w=new P;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(M),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function h(){let M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;a.push(x,1-S)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){let w=a[M+0],x=a[M+2],S=a[M+4],E=Math.max(w,x,S),C=Math.min(w,x,S);E>.9&&C<.1&&(w<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){let x=M*3;w.x=e[x+0],w.y=e[x+1],w.z=e[x+2]}function g(){let M=new P,w=new P,x=new P,S=new P,E=new re,C=new re,v=new re;for(let T=0,I=0;T<r.length;T+=9,I+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),E.set(a[I+0],a[I+1]),C.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),S.copy(M).add(w).add(x).divideScalar(3);let N=m(S);y(E,I+0,M,N),y(C,I+2,w,N),y(v,I+4,x,N)}}function y(M,w,x,S){S<0&&M.x===1&&(a[w]=M.x-1),x.x===0&&x.z===0&&(a[w]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new pt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Xs=class extends xi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mo=class extends Xs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ch(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var zu=new P,Vu=new P,Ac=new ch,Rc=new ch,Cc=new ch,bo=class extends xi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Vu.subVectors(s[0],s[1]).add(s[0]),c=Vu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(zu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ac.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Rc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Cc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Rc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Cc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ac.calc(l),Rc.calc(l),Cc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Gp(n,e){let t=1-n;return t*t*e}function Wp(n,e){return 2*(1-n)*n*e}function Xp(n,e){return n*n*e}function xr(n,e,t,i){return Gp(n,e)+Wp(n,t)+Xp(n,i)}function qp(n,e){let t=1-n;return t*t*t*e}function Yp(n,e){let t=1-n;return 3*t*t*n*e}function Zp(n,e){return 3*(1-n)*n*n*e}function Kp(n,e){return n*n*n*e}function vr(n,e,t,i,s){return qp(n,e)+Yp(n,t)+Zp(n,i)+Kp(n,s)}var Nr=class extends xi{constructor(e=new re,t=new re,i=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends xi{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y),vr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ur=class extends xi{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends xi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends xi{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends xi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(xr(e,s.x,r.x,a.x),xr(e,s.y,r.y,a.y),xr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Hu(o,l.x,c.x,h.x,d.x),Hu(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},Oc=Object.freeze({__proto__:null,ArcCurve:Mo,CatmullRomCurve3:bo,CubicBezierCurve:Nr,CubicBezierCurve3:So,EllipseCurve:Xs,LineCurve:Ur,LineCurve3:wo,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:Eo,SplineCurve:Or}),To=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Oc[s.type]().fromJSON(s))}return this}},Br=class extends To{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ur(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Fr(this.currentPoint.clone(),new re(e,t),new re(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Nr(this.currentPoint.clone(),new re(e,t),new re(i,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Or(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Xs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qs=class extends Br{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Br().fromJSON(s))}return this}};function $p(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=kd(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=tm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return kr(r,a,t,o,l,c,0),a}function kd(n,e,t,i,s){let r;if(s===dm(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Gu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Gu(a/i|0,n[a],n[a+1],r);return r&&Ys(r,r.next)&&(Vr(r),r=r.next),r}function Qn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ys(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function kr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&am(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?jp(n,i,s,r):Jp(n)){e.push(l.i,n.i,c.i),Vr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Qp(Qn(n),e),kr(n,e,t,i,s,r,2)):a===2&&em(n,e,t,i,s,r):kr(Qn(n),e,t,i,s,r,1);break}}}function Jp(n){let e=n.prev,t=n,i=n.next;if(Dt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&mr(s,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=Bc(f,g,e,t,i),M=Bc(y,m,e,t,i),w=n.prevZ,x=n.nextZ;for(;w&&w.z>=p&&x&&x.z<=M;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&mr(o,h,l,d,c,u,w.x,w.y)&&Dt(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&mr(o,h,l,d,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=y&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&mr(o,h,l,d,c,u,w.x,w.y)&&Dt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&mr(o,h,l,d,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qp(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Ys(i,s)&&Vd(i,t,t.next,s)&&zr(i,s)&&zr(s,i)&&(e.push(i.i,t.i,s.i),Vr(t),Vr(t.next),t=n=s),t=t.next}while(t!==n);return Qn(t)}function em(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&cm(a,o)){let l=Hd(a,o);a=Qn(a,a.next),l=Qn(l,l.next),kr(a,e,t,i,s,r,0),kr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function tm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=kd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(lm(c))}s.sort(im);for(let r=0;r<s.length;r++)t=nm(s[r],t);return t}function im(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function nm(n,e){let t=sm(n,e);if(!t)return e;let i=Hd(t,n);return Qn(i,i.next),Qn(t,t.next)}function sm(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Ys(n,t))return t;do{if(Ys(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&zd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);zr(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&rm(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function rm(n,e){return Dt(n.prev,n,e.prev)<0&&Dt(e.next,n,n.next)<0}function am(n,e,t,i){let s=n;do s.z===0&&(s.z=Bc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,om(s)}function om(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Bc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function lm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function zd(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function mr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&zd(n,e,t,i,s,r,a,o)}function cm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!hm(n,e)&&(zr(n,e)&&zr(e,n)&&um(n,e)&&(Dt(n.prev,n,e.prev)||Dt(n,e.prev,e))||Ys(n,e)&&Dt(n.prev,n,n.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ys(n,e){return n.x===e.x&&n.y===e.y}function Vd(n,e,t,i){let s=Qa(Dt(n,e,t)),r=Qa(Dt(n,e,i)),a=Qa(Dt(t,i,n)),o=Qa(Dt(t,i,e));return!!(s!==r&&a!==o||s===0&&ja(n,t,e)||r===0&&ja(n,i,e)||a===0&&ja(t,n,i)||o===0&&ja(t,e,i))}function ja(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qa(n){return n>0?1:n<0?-1:0}function hm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function zr(n,e){return Dt(n.prev,n,n.next)<0?Dt(n,e,n.next)>=0&&Dt(n,n.prev,e)>=0:Dt(n,e,n.prev)<0||Dt(n,n.next,e)<0}function um(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Hd(n,e){let t=kc(n.i,n.x,n.y),i=kc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Gu(n,e,t,i){let s=kc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function kc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dm(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var zc=class{static triangulate(e,t,i=2){return $p(e,t,i)}},Kn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Wu(e),Xu(i,e);let a=e.length;t.forEach(Wu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Xu(i,t[l]);let o=zc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Wu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Xu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Hr=class n extends Mt{constructor(e=new qs([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:fm,w,x=!1,S,E,C,v;if(p){w=p.getSpacedPoints(h),x=!0,u=!1;let ie=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,ie),E=new P,C=new P,v=new P}u||(m=0,f=0,g=0,y=0);let T=o.extractPoints(c),I=T.shape,N=T.holes;if(!Kn.isClockWise(I)){I=I.reverse();for(let ie=0,ce=N.length;ie<ce;ie++){let he=N[ie];Kn.isClockWise(he)&&(N[ie]=he.reverse())}}function W(ie){let he=10000000000000001e-36,ue=ie[0];for(let pe=1;pe<=ie.length;pe++){let ze=pe%ie.length,Oe=ie[ze],Xe=Oe.x-ue.x,Ze=Oe.y-ue.y,L=Xe*Xe+Ze*Ze,ut=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(ue.x),Math.abs(ue.y)),nt=he*ut*ut;if(L<=nt){ie.splice(ze,1),pe--;continue}ue=Oe}}W(I),N.forEach(W);let U=N.length,k=I;for(let ie=0;ie<U;ie++){let ce=N[ie];I=I.concat(ce)}function Y(ie,ce,he){return ce||He("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ce,he)}let q=I.length;function oe(ie,ce,he){let ue,pe,ze,Oe=ie.x-ce.x,Xe=ie.y-ce.y,Ze=he.x-ie.x,L=he.y-ie.y,ut=Oe*Oe+Xe*Xe,nt=Oe*L-Xe*Ze;if(Math.abs(nt)>Number.EPSILON){let A=Math.sqrt(ut),_=Math.sqrt(Ze*Ze+L*L),B=ce.x-Xe/A,G=ce.y+Oe/A,K=he.x-L/_,de=he.y+Ze/_,fe=((K-B)*L-(de-G)*Ze)/(Oe*L-Xe*Ze);ue=B+Oe*fe-ie.x,pe=G+Xe*fe-ie.y;let $=ue*ue+pe*pe;if($<=2)return new re(ue,pe);ze=Math.sqrt($/2)}else{let A=!1;Oe>Number.EPSILON?Ze>Number.EPSILON&&(A=!0):Oe<-Number.EPSILON?Ze<-Number.EPSILON&&(A=!0):Math.sign(Xe)===Math.sign(L)&&(A=!0),A?(ue=-Xe,pe=Oe,ze=Math.sqrt(ut)):(ue=Oe,pe=Xe,ze=Math.sqrt(ut/2))}return new re(ue/ze,pe/ze)}let Z=[];for(let ie=0,ce=k.length,he=ce-1,ue=ie+1;ie<ce;ie++,he++,ue++)he===ce&&(he=0),ue===ce&&(ue=0),Z[ie]=oe(k[ie],k[he],k[ue]);let ee=[],se,De=Z.concat();for(let ie=0,ce=U;ie<ce;ie++){let he=N[ie];se=[];for(let ue=0,pe=he.length,ze=pe-1,Oe=ue+1;ue<pe;ue++,ze++,Oe++)ze===pe&&(ze=0),Oe===pe&&(Oe=0),se[ue]=oe(he[ue],he[ze],he[Oe]);ee.push(se),De=De.concat(se)}let Re;if(m===0)Re=Kn.triangulateShape(k,N);else{let ie=[],ce=[];for(let he=0;he<m;he++){let ue=he/m,pe=f*Math.cos(ue*Math.PI/2),ze=g*Math.sin(ue*Math.PI/2)+y;for(let Oe=0,Xe=k.length;Oe<Xe;Oe++){let Ze=Y(k[Oe],Z[Oe],ze);Me(Ze.x,Ze.y,-pe),ue===0&&ie.push(Ze)}for(let Oe=0,Xe=U;Oe<Xe;Oe++){let Ze=N[Oe];se=ee[Oe];let L=[];for(let ut=0,nt=Ze.length;ut<nt;ut++){let A=Y(Ze[ut],se[ut],ze);Me(A.x,A.y,-pe),ue===0&&L.push(A)}ue===0&&ce.push(L)}}Re=Kn.triangulateShape(ie,ce)}let ht=Re.length,it=g+y;for(let ie=0;ie<q;ie++){let ce=u?Y(I[ie],De[ie],it):I[ie];x?(C.copy(S.normals[0]).multiplyScalar(ce.x),E.copy(S.binormals[0]).multiplyScalar(ce.y),v.copy(w[0]).add(C).add(E),Me(v.x,v.y,v.z)):Me(ce.x,ce.y,0)}for(let ie=1;ie<=h;ie++)for(let ce=0;ce<q;ce++){let he=u?Y(I[ce],De[ce],it):I[ce];x?(C.copy(S.normals[ie]).multiplyScalar(he.x),E.copy(S.binormals[ie]).multiplyScalar(he.y),v.copy(w[ie]).add(C).add(E),Me(v.x,v.y,v.z)):Me(he.x,he.y,d/h*ie)}for(let ie=m-1;ie>=0;ie--){let ce=ie/m,he=f*Math.cos(ce*Math.PI/2),ue=g*Math.sin(ce*Math.PI/2)+y;for(let pe=0,ze=k.length;pe<ze;pe++){let Oe=Y(k[pe],Z[pe],ue);Me(Oe.x,Oe.y,d+he)}for(let pe=0,ze=N.length;pe<ze;pe++){let Oe=N[pe];se=ee[pe];for(let Xe=0,Ze=Oe.length;Xe<Ze;Xe++){let L=Y(Oe[Xe],se[Xe],ue);x?Me(L.x,L.y+w[h-1].y,w[h-1].x+he):Me(L.x,L.y,d+he)}}}ot(),J();function ot(){let ie=s.length/3;if(u){let ce=0,he=q*ce;for(let ue=0;ue<ht;ue++){let pe=Re[ue];Ge(pe[2]+he,pe[1]+he,pe[0]+he)}ce=h+m*2,he=q*ce;for(let ue=0;ue<ht;ue++){let pe=Re[ue];Ge(pe[0]+he,pe[1]+he,pe[2]+he)}}else{for(let ce=0;ce<ht;ce++){let he=Re[ce];Ge(he[2],he[1],he[0])}for(let ce=0;ce<ht;ce++){let he=Re[ce];Ge(he[0]+q*h,he[1]+q*h,he[2]+q*h)}}i.addGroup(ie,s.length/3-ie,0)}function J(){let ie=s.length/3,ce=0;te(k,ce),ce+=k.length;for(let he=0,ue=N.length;he<ue;he++){let pe=N[he];te(pe,ce),ce+=pe.length}i.addGroup(ie,s.length/3-ie,1)}function te(ie,ce){let he=ie.length;for(;--he>=0;){let ue=he,pe=he-1;pe<0&&(pe=ie.length-1);for(let ze=0,Oe=h+m*2;ze<Oe;ze++){let Xe=q*ze,Ze=q*(ze+1),L=ce+ue+Xe,ut=ce+pe+Xe,nt=ce+pe+Ze,A=ce+ue+Ze;Ee(L,ut,nt,A)}}}function Me(ie,ce,he){l.push(ie),l.push(ce),l.push(he)}function Ge(ie,ce,he){We(ie),We(ce),We(he);let ue=s.length/3,pe=M.generateTopUV(i,s,ue-3,ue-2,ue-1);mt(pe[0]),mt(pe[1]),mt(pe[2])}function Ee(ie,ce,he,ue){We(ie),We(ce),We(ue),We(ce),We(he),We(ue);let pe=s.length/3,ze=M.generateSideWallUV(i,s,pe-6,pe-3,pe-2,pe-1);mt(ze[0]),mt(ze[1]),mt(ze[3]),mt(ze[1]),mt(ze[2]),mt(ze[3])}function We(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function mt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return pm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oc[s.type]().fromJSON(s)),new n(i,e.options)}},fm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-d),new re(u,1-g),new re(y,1-p)]:[new re(o,1-l),new re(h,1-d),new re(f,1-g),new re(m,1-p)]}};function pm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Gr=class n extends Dr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Wr=class n extends Dr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zi=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let w=0;w<c;w++){let x=w*d-r;g.push(x,-M,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let w=M+c*p,x=M+c*(p+1),S=M+1+c*(p+1),E=M+1+c*p;f.push(w,x,E),f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},es=class n extends Mt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new P,g=new re;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let p=0;p<i;p++){let M=p+m,w=M,x=M+i+1,S=M+i+2,E=M+1;o.push(w,x,E),o.push(x,S,E)}}this.setIndex(o),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Xr=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let M=[],w=p/i,x=a+w*o,S=e*Math.cos(x),E=Math.sqrt(e*e-S*S),C=0;p===0&&a===0?C=.5/t:p===i&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let T=v/t,I=s+T*r;d.x=-E*Math.cos(I),d.y=S,d.z=E*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+C,1-w),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let w=h[p][M+1],x=h[p][M],S=h[p+1][M],E=h[p+1][M+1];(p!==0||a>0)&&f.push(w,x,E),(p!==i-1||l<Math.PI)&&f.push(x,S,E)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(y,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qr=class n extends Mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(p,M,x),l.push(M,w,x)}this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function os(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(qu(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(qu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function ii(n){let e={};for(let t=0;t<n.length;t++){let i=os(n[t]);for(let s in i)e[s]=i[s]}return e}function qu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var pn={clone:os,merge:ii},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rt=class extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new re().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new At().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zs=class extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pn=class extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ao=class extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ro=class extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Pc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var In=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends In{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=e,o=2*t-i;break;case Uc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:a=e,l=2*i-t;break;case Uc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+M*a[c+S]+w*a[l+S]+x*a[d+S];return r}},Po=class extends In{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Io=class extends In{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Lo=class extends In{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,M=d[p],w=d[p+1],x=e*u+g*2,S=h[x],E=h[x+1],C=vm(i,t,M,S,s);r[g]=Gd(C,y,w,E,m)}return r}};function Gd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function xm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function vm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Gd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=xm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vi=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Pc(e.settings)&&(i.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break;case Lc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return io;case this.InterpolantFactoryMethodBezier:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Pc(this.settings)&&(Yu(this.settings.inTangents,e),Yu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){He("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&op(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===io,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Pc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=po;var Ln=class extends vi{constructor(e,t,i){super(e,t,i)}};Ln.prototype.ValueTypeName="bool";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=yr;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}};Do.prototype.ValueTypeName="color";var No=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}};No.prototype.ValueTypeName="number";var Uo=class extends In{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)_i.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yr=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends vi{constructor(e,t,i){super(e,t,i)}};Dn.prototype.ValueTypeName="string";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=yr;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends vi{constructor(e,t,i,s){super(e,t,i,s)}};Fo.prototype.ValueTypeName="vector";var Oo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wd=new Oo,Bo=class{constructor(e){this.manager=e!==void 0?e:Wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Zr=class extends Ks{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ic=new pt,Zu=new P,Ku=new P,Kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ic,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ns||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eo=new P,to=new _i,Hi=new P,$r=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(eo,to,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(eo,to,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wn=new P,$u=new re,Ju=new re,oi=class extends $r{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,$u,Ju),t.subVectors(Ju,$u)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vc=class extends Kr{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}},Jr=class extends Ks{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ki=class extends $r{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hc=class extends Kr{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Hc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=-90,Ps=1,ko=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new oi(Cs,Ps,e,t);s.layers=this.layers,this.add(s);let r=new oi(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let a=new oi(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let o=new oi(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let l=new oi(Cs,Ps,e,t);l.layers=this.layers,this.add(l);let c=new oi(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},zo=class extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ym.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ym(){this._document.hidden===!1&&this.reset()}var uh="\\[\\]\\.:\\/",Mm=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",bm="[^"+uh.replace("\\.","")+"]",Sm=/((?:WC+[\/:])*)/.source.replace("WC",dh),wm=/(WCOD+)?/.source.replace("WCOD",bm),Em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),Am=new RegExp("^"+Sm+wm+Em+Tm+"$"),Rm=["material","materials","bones","map"],Gc=class{constructor(e,t,i){let s=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mm,"")}static parseTrackName(e){let t=Am.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Gc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jv=new Float32Array(1);var ju=new pt,Qr=class{constructor(e,t,i=0,s=1/0){this.ray=new un(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,i=[]){return Wc(e,this,i,t),i.sort(Qu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Wc(e[s],this,i,t);return i.sort(Qu),i}};function Qu(n,e){return n.distance-e.distance}function Wc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Wc(r[a],e,t,!0)}}var Js=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var xh=class xh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};xh.prototype.isMatrix2=!0;var Xc=xh;var ea=class extends Hs{constructor(e=10,t=10,i=4473924,s=8947848){i=new Be(i),s=new Be(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,g=-o;u<=t;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let y=u===r?i:s;y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3,y.toArray(c,f),f+=3}let h=new Mt;h.setAttribute("position",new $e(l,3)),h.setAttribute("color",new $e(c,3));let d=new An({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var ta=class extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function fh(n,e,t,i){let s=Cm(i);switch(t){case nh:return n*e;case Zo:return n*e/s.components*s.byteLength;case Ko:return n*e/s.components*s.byteLength;case Bn:return n*e*2/s.components*s.byteLength;case $o:return n*e*2/s.components*s.byteLength;case sh:return n*e*3/s.components*s.byteLength;case Ei:return n*e*4/s.components*s.byteLength;case Jo:return n*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tl:return Math.max(n,16)*Math.max(e,8)/4;case jo:case el:return Math.max(n,8)*Math.max(e,8)/2;case il:case nl:case rl:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:case pa:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bl:case Sl:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case El:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ma:case Al:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cm(n){switch(n){case hi:case Qc:return{byteLength:1,components:1};case er:case eh:case jt:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case Fi:case Xo:case wi:return{byteLength:4,components:1};case th:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ff(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Im(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,qm=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,wg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
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
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
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
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,L0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
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
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,k0=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Y0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,J0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,j0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,t_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,n_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,s_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,r_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,a_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,o_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,c_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,h_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,u_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,et={alphahash_fragment:Lm,alphahash_pars_fragment:Dm,alphamap_fragment:Nm,alphamap_pars_fragment:Um,alphatest_fragment:Fm,alphatest_pars_fragment:Om,aomap_fragment:Bm,aomap_pars_fragment:km,batching_pars_vertex:zm,batching_vertex:Vm,begin_vertex:Hm,beginnormal_vertex:Gm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:qm,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:$m,color_fragment:Jm,color_pars_fragment:jm,color_pars_vertex:Qm,color_vertex:eg,common:tg,cube_uv_reflection_fragment:ig,defaultnormal_vertex:ng,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:ag,emissivemap_pars_fragment:og,colorspace_fragment:lg,colorspace_pars_fragment:cg,envmap_fragment:hg,envmap_common_pars_fragment:ug,envmap_pars_fragment:dg,envmap_pars_vertex:fg,envmap_physical_pars_fragment:wg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:_g,fog_pars_fragment:xg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:bg,lights_pars_begin:Sg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Ig,lights_fragment_maps:Lg,lights_fragment_end:Dg,lightprobes_pars_fragment:Ng,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:zg,map_particle_fragment:Vg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Kg,normal_fragment_begin:$g,normal_fragment_maps:Jg,normal_pars_fragment:jg,normal_pars_vertex:Qg,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:n0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,opaque_fragment:a0,packing:o0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:h0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:x0,skinning_pars_vertex:v0,skinning_vertex:y0,skinnormal_vertex:M0,specularmap_fragment:b0,specularmap_pars_fragment:S0,tonemapping_fragment:w0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:I0,background_vert:L0,background_frag:D0,backgroundCube_vert:N0,backgroundCube_frag:U0,cube_vert:F0,cube_frag:O0,depth_vert:B0,depth_frag:k0,distance_vert:z0,distance_frag:V0,equirect_vert:H0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:Z0,meshlambert_frag:K0,meshmatcap_vert:$0,meshmatcap_frag:J0,meshnormal_vert:j0,meshnormal_frag:Q0,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:i_,meshphysical_frag:n_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:a_,points_frag:o_,shadow_vert:l_,shadow_frag:c_,sprite_vert:h_,sprite_frag:u_},ye={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ji={basic:{uniforms:ii([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ii([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ii([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ii([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ii([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ii([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ii([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ii([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ii([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ii([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ii([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:ii([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:ii([ye.lights,ye.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ji.physical={uniforms:ii([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Il={r:0,b:0,g:0},d_=new pt,pf=new Ye;pf.set(-1,0,0,0,1,0,0,0,1);function f_(n,e,t,i,s,r){let a=new Be(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let x=M.backgroundBlurriness>0;w=e.get(w,x)}return w}function g(M){let w=!1,x=f(M);x===null?m(a,o):x&&x.isColor&&(m(x,1),w=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===la)?(c===void 0&&(c=new Bt(new dn(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:os(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pf),c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,(h!==x||d!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Bt(new Zi(2,2),new Rt({name:"BackgroundMaterial",uniforms:os(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(Il,hh(n)),t.buffers.color.setClear(Il.r,Il.g,Il.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function p_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,O,W,U,k){let Y=!1,q=d(N,U,W,O);r!==q&&(r=q,c(r.object)),Y=f(N,U,W,k),Y&&g(N,U,W,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(N,O,W,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,O,W,U){let k=U.wireframe===!0,Y=i[O.id];Y===void 0&&(Y={},i[O.id]=Y);let q=N.isInstancedMesh===!0?N.id:0,oe=Y[q];oe===void 0&&(oe={},Y[q]=oe);let Z=oe[W.id];Z===void 0&&(Z={},oe[W.id]=Z);let ee=Z[k];return ee===void 0&&(ee=u(l()),Z[k]=ee),ee}function u(N){let O=[],W=[],U=[];for(let k=0;k<t;k++)O[k]=0,W[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:U,object:N,attributes:{},index:null}}function f(N,O,W,U){let k=r.attributes,Y=O.attributes,q=0,oe=W.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=k[Z],De=Y[Z];if(De===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(De=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(De=N.instanceColor)),se===void 0||se.attribute!==De||De&&se.data!==De.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(N,O,W,U){let k={},Y=O.attributes,q=0,oe=W.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=Y[Z];se===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(se=N.instanceColor));let De={};De.attribute=se,se&&se.data&&(De.data=se.data),k[Z]=De,q++}r.attributes=k,r.attributesNum=q,r.index=U}function y(){let N=r.newAttributes;for(let O=0,W=N.length;O<W;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){let W=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;W[N]=1,U[N]===0&&(n.enableVertexAttribArray(N),U[N]=1),k[N]!==O&&(n.vertexAttribDivisor(N,O),k[N]=O)}function M(){let N=r.newAttributes,O=r.enabledAttributes;for(let W=0,U=O.length;W<U;W++)O[W]!==N[W]&&(n.disableVertexAttribArray(W),O[W]=0)}function w(N,O,W,U,k,Y,q){q===!0?n.vertexAttribIPointer(N,O,W,k,Y):n.vertexAttribPointer(N,O,W,U,k,Y)}function x(N,O,W,U){y();let k=U.attributes,Y=W.getAttributes(),q=O.defaultAttributeValues;for(let oe in Y){let Z=Y[oe];if(Z.location>=0){let ee=k[oe];if(ee===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){let se=ee.normalized,De=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;let ht=Re.buffer,it=Re.type,ot=Re.bytesPerElement,J=it===n.INT||it===n.UNSIGNED_INT||ee.gpuType===Xo;if(ee.isInterleavedBufferAttribute){let te=ee.data,Me=te.stride,Ge=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)p(Z.location+Ee,te.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)m(Z.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let Ee=0;Ee<Z.locationSize;Ee++)w(Z.location+Ee,De/Z.locationSize,it,se,Me*ot,(Ge+De/Z.locationSize*Ee)*ot,J)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<Z.locationSize;te++)p(Z.location+te,ee.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<Z.locationSize;te++)m(Z.location+te);n.bindBuffer(n.ARRAY_BUFFER,ht);for(let te=0;te<Z.locationSize;te++)w(Z.location+te,De/Z.locationSize,it,se,De*ot,De/Z.locationSize*te*ot,J)}}else if(q!==void 0){let se=q[oe];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Z.location,se);break;case 3:n.vertexAttrib3fv(Z.location,se);break;case 4:n.vertexAttrib4fv(Z.location,se);break;default:n.vertexAttrib1fv(Z.location,se)}}}}M()}function S(){T();for(let N in i){let O=i[N];for(let W in O){let U=O[W];for(let k in U){let Y=U[k];for(let q in Y)h(Y[q].object),delete Y[q];delete U[k]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let O=i[N.id];for(let W in O){let U=O[W];for(let k in U){let Y=U[k];for(let q in Y)h(Y[q].object),delete Y[q];delete U[k]}}delete i[N.id]}function C(N){for(let O in i){let W=i[O];for(let U in W){let k=W[U];if(k[N.id]===void 0)continue;let Y=k[N.id];for(let q in Y)h(Y[q].object),delete Y[q];delete k[N.id]}}}function v(N){for(let O in i){let W=i[O],U=N.isInstancedMesh===!0?N.id:0,k=W[U];if(k!==void 0){for(let Y in k){let q=k[Y];for(let oe in q)h(q[oe].object),delete q[oe];delete k[Y]}delete W[U],Object.keys(W).length===0&&delete i[O]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function m_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function g_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Ei&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==hi&&C!==wi&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:x,maxSamples:S,samples:E}}function __(n){let e=this,t=null,i=0,s=!1,r=!1,a=new ai,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,w=M*4,x=p.clippingState||null;l.value=x,x=h(g,u,w,f);for(let S=0;S!==w;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,x=f;w!==y;++w,x+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var nr=4,x_=6,v_=20,y_=256,ga=new Ki,Xd=new Be,vh=null,yh=0,Mh=0,bh=!1,M_=new P,ls=new P,Dl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=M_}=r;vh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,yh,Mh),this._renderer.xr.enabled=bh,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Un||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:jt,format:Ei,colorSpace:Mr,depthBuffer:!1},s=qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=b_(r)),this._blurMaterial=w_(r,e,t),this._ggxMaterial=S_(r,e,t)}return s}_compileMaterial(e){let t=new Bt(new Mt,e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,i,s,r){let l=new oi(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Xd),d.toneMapping=Ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new dn,new Ft({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Xd),p=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;ir(s,x*S,w>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Un||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ga)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-nr?i-g+nr:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ir(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,ga),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ir(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,ga)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-nr?s-this._lodMax+nr:0),u=4*(this._cubeSize-h);ir(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,ga)}};function b_(n){let e=[],t=[],i=n,s=n-nr+1+x_;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,w=p>2?0:-1,x=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(x,f*u*p);for(let S=0;S<u;S++){let E=h[S*2]*2-1,C=h[S*2+1]*2-1;p===0?ls.set(1,C,E):p===1?ls.set(-E,1,-C):p===2?ls.set(-E,C,1):p===3?ls.set(-1,C,-E):p===4?ls.set(-E,-1,C):ls.set(E,C,-1),ls.toArray(y,(p*u+S)*f)}}let m=new Mt;m.setAttribute("position",new gi(g,f)),m.setAttribute("outputDirection",new gi(y,f)),t.push(new Bt(m,null)),i>nr&&i--}return{lodMeshes:t,sizeLods:e}}function qd(n,e,t){let i=new Vt(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function S_(n,e,t){return new Rt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function w_(n,e,t){return new Rt({name:"SphericalGaussianBlur",defines:{SAMPLES:v_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Yd(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Zd(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nl=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:Si});r.uniforms.tEquirect.value=t;let a=new Bt(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=$t),new ko(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function E_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ho||f===Go)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Nl(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Ho||f===Go,y=f===Un||f===rs;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Dl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new Dl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Ho?u.mapping=Un:f===Go&&(u.mapping=rs),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function T_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&$n("WebGLRenderer: "+i+" extension not supported."),s}}}function A_(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let w=0,x=M.length;w<x;w+=3){let S=M[w+0],E=M[w+1],C=M[w+2];u.push(S,E,E,C,C,S)}}else{let M=g.array;y=g.version;for(let w=0,x=M.length/3-1;w<x;w+=3){let S=w+0,E=w+1,C=w+2;u.push(S,E,E,C,C,S)}}let m=new(g.count>=65535?Ar:Tr)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function R_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function C_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function P_(n,e,t){let i=new WeakMap,s=new At;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let x=o.attributes.position.count*w,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*S*4*d),C=new wr(E,x,S,d);C.type=wi,C.needsUpdate=!0;let v=w*4;for(let I=0;I<d;I++){let N=m[I],O=p[I],W=M[I],U=x*S*4*I;for(let k=0;k<N.count;k++){let Y=k*v;f===!0&&(s.fromBufferAttribute(N,k),E[U+Y+0]=s.x,E[U+Y+1]=s.y,E[U+Y+2]=s.z,E[U+Y+3]=0),g===!0&&(s.fromBufferAttribute(O,k),E[U+Y+4]=s.x,E[U+Y+5]=s.y,E[U+Y+6]=s.z,E[U+Y+7]=0),y===!0&&(s.fromBufferAttribute(W,k),E[U+Y+8]=s.x,E[U+Y+9]=s.y,E[U+Y+10]=s.z,E[U+Y+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new re(x,S)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function I_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var L_={[ia]:"LINEAR_TONE_MAPPING",[na]:"REINHARD_TONE_MAPPING",[sa]:"CINEON_TONE_MAPPING",[ss]:"ACES_FILMIC_TONE_MAPPING",[aa]:"AGX_TONE_MAPPING",[oa]:"NEUTRAL_TONE_MAPPING",[ra]:"CUSTOM_TONE_MAPPING"};function D_(n,e,t,i,s,r){let a=new Vt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Mt;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));let h=new Zs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Bt(c,h),u=new Ki(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],w=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let E=0;E<M.length;E++){let C=M[E];C.setSize&&C.setSize(x,S)}},this.setEffects=function(x){M=x,w=M.length>0&&M[0].isRenderPass===!0;let S=a.width,E=a.height;M.length>0&&o===null&&(o=new Vt(S,E,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(S,E,{type:jt,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let v=M[C];v.setSize&&v.setSize(S,E)}},this.begin=function(x,S){if(y||x.toneMapping===Ui&&M.length===0)return!1;if(p=S,S!==null){let E=S.width,C=S.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return w===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Ui,!0},this.hasRenderPass=function(){return w},this.end=function(x,S){x.toneMapping=m,y=!0;let E=a,C=o;for(let v=0;v<M.length;v++){let T=M[v];T.enabled!==!1&&(T.render(x,C,E,S),T.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},tt.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");let v=L_[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,x.setRenderTarget(p),x.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var mf=new li,Eh=new Rn(1,1),gf=new wr,_f=new _o,xf=new Pr,Kd=[],$d=[],Jd=new Float32Array(16),jd=new Float32Array(9),Qd=new Float32Array(4);function rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Kd[s];if(r===void 0&&(r=new Float32Array(s),Kd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ol(n,e){let t=$d[e];t===void 0&&(t=new Int32Array(e),$d[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function N_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function B_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Qd.set(i),n.uniformMatrix2fv(this.addr,!1,Qd),Xt(t,i)}}function k_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;jd.set(i),n.uniformMatrix3fv(this.addr,!1,jd),Xt(t,i)}}function z_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Jd.set(i),n.uniformMatrix4fv(this.addr,!1,Jd),Xt(t,i)}}function V_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function X_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function Y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function K_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Eh.compareFunction=t.isReversedDepthBuffer()?Pl:Cl,r=Eh):r=mf,t.setTexture2D(e||r,s)}function $_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_f,s)}function J_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xf,s)}function j_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gf,s)}function Q_(n){switch(n){case 5126:return N_;case 35664:return U_;case 35665:return F_;case 35666:return O_;case 35674:return B_;case 35675:return k_;case 35676:return z_;case 5124:case 35670:return V_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return j_}}function ex(n,e){n.uniform1fv(this.addr,e)}function tx(n,e){let t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function ix(n,e){let t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function nx(n,e){let t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function sx(n,e){let t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rx(n,e){let t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ax(n,e){let t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ox(n,e){n.uniform1iv(this.addr,e)}function lx(n,e){n.uniform2iv(this.addr,e)}function cx(n,e){n.uniform3iv(this.addr,e)}function hx(n,e){n.uniform4iv(this.addr,e)}function ux(n,e){n.uniform1uiv(this.addr,e)}function dx(n,e){n.uniform2uiv(this.addr,e)}function fx(n,e){n.uniform3uiv(this.addr,e)}function px(n,e){n.uniform4uiv(this.addr,e)}function mx(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Eh:a=mf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function gx(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_f,r[a])}function _x(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xf,r[a])}function xx(n,e,t){let i=this.cache,s=e.length,r=Ol(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gf,r[a])}function vx(n){switch(n){case 5126:return ex;case 35664:return tx;case 35665:return ix;case 35666:return nx;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}var Th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}},Ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vx(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function ef(n,e){n.seq.push(e),n.map[e.id]=e}function yx(n,e,t){let i=n.name,s=i.length;for(Sh.lastIndex=0;;){let r=Sh.exec(i),a=Sh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ef(t,c===void 0?new Th(o,n,e):new Ah(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Rh(o),ef(t,d)),t=d}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);yx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function tf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Mx=37297,bx=0;function Sx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var nf=new Ye;function wx(n){tt._getMatrix(nf,tt.workingColorSpace,n);let e=`mat3( ${nf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case br:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Sx(n.getShaderSource(e),o)}else return r}function Ex(n,e){let t=wx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Tx={[ia]:"Linear",[na]:"Reinhard",[sa]:"Cineon",[ss]:"ACESFilmic",[aa]:"AgX",[oa]:"Neutral",[ra]:"Custom"};function Ax(n,e){let t=Tx[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new P;function Rx(){tt.getLuminanceCoefficients(Ll);let n=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Px(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ix(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xa(n){return n!==""}function rf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function af(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(n){return n.replace(Lx,Nx)}var Dx=new Map;function Nx(n,e){let t=et[e];if(t===void 0){let i=Dx.get(e);if(i!==void 0)t=et[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ch(t)}var Ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(Ux,Fx)}function Fx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ox={[ts]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function Bx(n){return Ox[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kx={[Un]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function zx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Vx={[rs]:"ENVMAP_MODE_REFRACTION"};function Hx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Vx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gx={[Jc]:"ENVMAP_BLENDING_MULTIPLY",[Md]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function Wx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Gx[n.combine]||"ENVMAP_BLENDING_NONE"}function Xx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Bx(t),c=zx(t),h=Hx(t),d=Wx(t),u=Xx(t),f=Cx(t),g=Px(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?et.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Ex("linearToOutputTexel",t.outputColorSpace),Rx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=Ch(a),a=rf(a,t),a=af(a,t),o=Ch(o),o=rf(o,t),o=af(o,t),a=of(a),o=of(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+a,x=M+p+o,S=tf(s,s.VERTEX_SHADER,w),E=tf(s,s.FRAGMENT_SHADER,x);s.attachShader(y,S),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",W=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(E)||"",k=O.trim(),Y=W.trim(),q=U.trim(),oe=!0,Z=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,E);else{let ee=sf(s,S,"vertex"),se=sf(s,E,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ee+`
`+se)}else k!==""?ke("WebGLProgram: Program Info Log:",k):(Y===""||q==="")&&(Z=!1);Z&&(N.diagnostics={runnable:oe,programLog:k,vertexShader:{log:Y,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(S),s.deleteShader(E),v=new sr(s,y),T=Ix(s,y)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,Mx)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var Yx=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ih(e),t.set(e,i)),i}},Ih=class{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}};function Zx(n){return n===Bn||n===pa||n===ma}function Kx(n,e,t,i,s,r){let a=new Bs,o=new Ph,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,T,I,N,O,W){let U=N.fog,k=O.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,oe=e.get(v.envMap||Y,q),Z=oe&&oe.mapping===la?oe.image.height:null,ee=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,De=se!==void 0?se.length:0,Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let ht,it,ot,J;if(ee){let bt=Ji[ee];ht=bt.vertexShader,it=bt.fragmentShader}else{ht=v.vertexShader,it=v.fragmentShader;let bt=o.getVertexShaderStage(v),dt=o.getFragmentShaderStage(v);o.update(v,bt,dt),ot=bt.id,J=dt.id}let te=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Ge=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,We=!!v.map,mt=!!v.matcap,ie=!!oe,ce=!!v.aoMap,he=!!v.lightMap,ue=!!v.bumpMap&&v.wireframe===!1,pe=!!v.normalMap,ze=!!v.displacementMap,Oe=!!v.emissiveMap,Xe=!!v.metalnessMap,Ze=!!v.roughnessMap,L=v.anisotropy>0,ut=v.clearcoat>0,nt=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,G=v.transmission>0,K=L&&!!v.anisotropyMap,de=ut&&!!v.clearcoatMap,fe=ut&&!!v.clearcoatNormalMap,$=ut&&!!v.clearcoatRoughnessMap,Q=_&&!!v.iridescenceMap,me=_&&!!v.iridescenceThicknessMap,Ne=B&&!!v.sheenColorMap,ve=B&&!!v.sheenRoughnessMap,ge=!!v.specularMap,Ue=!!v.specularColorMap,Ve=!!v.specularIntensityMap,Je=G&&!!v.transmissionMap,F=G&&!!v.thicknessMap,_e=!!v.gradientMap,j=!!v.alphaMap,xe=v.alphaTest>0,we=!!v.alphaHash,ae=!!v.extensions,Fe=Ui;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let Ie={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:ht,fragmentShader:it,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&O.instanceColor!==null,instancingMorph:Ge&&O.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:mt,envMap:ie,envMapMode:ie&&oe.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:he,bumpMap:ue,normalMap:pe,displacementMap:ze,emissiveMap:Oe,normalMapObjectSpace:pe&&v.normalMapType===Ed,normalMapTangentSpace:pe&&v.normalMapType===Rl,packedNormalMap:pe&&v.normalMapType===Rl&&Zx(v.normalMap.format),metalnessMap:Xe,roughnessMap:Ze,anisotropy:L,anisotropyMap:K,clearcoat:ut,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:$,dispersion:nt,retroreflection:A,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:me,sheen:B,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:Ue,specularIntensityMap:Ve,transmission:G,transmissionMap:Je,thicknessMap:F,gradientMap:_e,opaque:v.transparent===!1&&v.blending===Qs&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:xe,alphaHash:we,combine:v.combine,mapUv:We&&g(v.map.channel),aoMapUv:ce&&g(v.aoMap.channel),lightMapUv:he&&g(v.lightMap.channel),bumpMapUv:ue&&g(v.bumpMap.channel),normalMapUv:pe&&g(v.normalMap.channel),displacementMapUv:ze&&g(v.displacementMap.channel),emissiveMapUv:Oe&&g(v.emissiveMap.channel),metalnessMapUv:Xe&&g(v.metalnessMap.channel),roughnessMapUv:Ze&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:de&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(v.sheenRoughnessMap.channel),specularMapUv:ge&&g(v.specularMap.channel),specularColorMapUv:Ue&&g(v.specularColorMap.channel),specularIntensityMapUv:Ve&&g(v.specularIntensityMap.channel),transmissionMapUv:Je&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pe||L),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(We||j),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&pe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Re,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ct,decodeVideoTextureEmissive:Oe&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ct,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jt,flipSided:v.side===ci,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(T,v),M(T,v),T.push(n.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function w(v){let T=f[v.type],I;if(T){let N=Ji[T];I=pn.clone(N.uniforms)}else I=v.uniforms;return I}function x(v,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new qx(n,T,v,s),c.push(I),h.set(T,I)),I}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:C}}function $x(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Jx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function cf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},n[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let w=o(u,f,g,y,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(u,f,g,y,m,p){let M=o(u,f,g,y,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||Jx),i.length>1&&i.sort(f||cf),s.length>1&&s.sort(f||cf)}function d(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function jx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new hf,n.set(i,[a])):s>=r.length?(a=new hf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Be};break;case"SpotLight":t={position:new P,direction:new P,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function ev(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tv=0;function iv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nv(n){let e=new Qx,t=ev(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new pt,a=new pt;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,w=0,x=0,S=0,E=0,C=0,v=0,T=0,I=0;c.sort(iv);for(let O=0,W=c.length;O<W;O++){let U=c[O],k=U.color,Y=U.intensity,q=U.distance,oe=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Bn?oe=U.shadow.map.texture:oe=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=k.r*Y,d+=k.g*Y,u+=k.b*Y;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(U.sh.coefficients[Z],Y);I++}else if(U.isSunLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ee=U.shadow,se=t.get(U);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=se,i.sunShadowMap[g]=oe;let De=ee.getViewportCount();for(let Re=0;Re<De;Re++)i.sunShadowMatrix[y+Re]=ee.getMatrix(Re),i.sunShadowCascade[y+Re]=ee._cascadeData[Re];y+=De,g++}i.sun[f]=Z,f++}else if(U.isDirectionalLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let ee=U.shadow,se=t.get(U);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,i.directionalShadow[m]=se,i.directionalShadowMap[m]=oe,i.directionalShadowMatrix[m]=U.shadow.matrix,S++}i.directional[m]=Z,m++}else if(U.isSpotLight){let Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(k).multiplyScalar(Y),Z.distance=q,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,i.spot[M]=Z;let ee=U.shadow;if(U.map&&(i.spotLightMap[v]=U.map,v++,ee.updateMatrices(U),U.castShadow&&T++),i.spotLightMatrix[M]=ee.matrix,U.castShadow){let se=t.get(U);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,i.spotShadow[M]=se,i.spotShadowMap[M]=oe,C++}M++}else if(U.isRectAreaLight){let Z=e.get(U);Z.color.copy(k).multiplyScalar(Y),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),i.rectArea[w]=Z,w++}else if(U.isPointLight){let Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){let ee=U.shadow,se=t.get(U);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,se.shadowCameraNear=ee.camera.near,se.shadowCameraFar=ee.camera.far,i.pointShadow[p]=se,i.pointShadowMap[p]=oe,i.pointShadowMatrix[p]=U.shadow.matrix,E++}i.point[p]=Z,p++}else if(U.isHemisphereLight){let Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(Y),Z.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[x]=Z,x++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==w||N.hemiLength!==x||N.numSunShadows!==g||N.numDirectionalShadows!==S||N.numPointShadows!==E||N.numSpotShadows!==C||N.numSpotMaps!==v||N.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-T,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=M,N.rectAreaLength=w,N.hemiLength=x,N.numSunShadows=g,N.numDirectionalShadows=S,N.numPointShadows=E,N.numSpotShadows=C,N.numSpotMaps=v,N.numLightProbes=I,i.version=tv++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let x=c[M];if(x.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function uf(n){let e=new nv(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function sv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new uf(n),e.set(s,[o])):r>=a.length?(o=new uf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ov=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],lv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],df=new pt,_a=new P,wh=new P;function cv(n,e,t){let i=new zs,s=new re,r=new re,a=new At,o=new Ao,l=new Ro,c={},h=t.maxTextureSize,d={[Nn]:ci,[ci]:Nn,[Jt]:Jt},u=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:rv,fragmentShader:av}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let p=this.type;this.render=function(E,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===id&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=p!==this.type;W&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=E.length;U<k;U++){let Y=E[U],q=Y.shadow;if(q===void 0){ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let oe=q.getFrameExtents();s.multiply(oe),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,q.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===js){if(Y.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Vt(s.x,s.y,{format:Bn,type:jt,minFilter:$t,magFilter:$t,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new Rn(s.x,s.y,wi),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=Wi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Zt,q.map.depthTexture.magFilter=Zt}else Y.isPointLight?(q.map=new Nl(s.x),q.map.depthTexture=new yo(s.x,Fi)):(q.map=new Vt(s.x,s.y),q.map.depthTexture=new Rn(s.x,s.y,Fi)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=Wi,this.type===ts?(q.map.depthTexture.compareFunction=Z?Pl:Cl,q.map.depthTexture.minFilter=$t,q.map.depthTexture.magFilter=$t):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Zt,q.map.depthTexture.magFilter=Zt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ee=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,v);for(let se=0;se<ee;se++){let De=q.getCamera(se);if(Y.isPointLight){let Re=q.camera,ht=q.matrix,it=Y.distance||Re.far;it!==Re.far&&(Re.far=it,Re.updateProjectionMatrix()),_a.setFromMatrixPosition(Y.matrixWorld),Re.position.copy(_a),wh.copy(Re.position),wh.add(ov[se]),Re.up.copy(lv[se]),Re.lookAt(wh),Re.updateMatrixWorld(),ht.makeTranslation(-_a.x,-_a.y,-_a.z),df.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),q._frustum.setFromProjectionMatrix(df,Re.coordinateSystem,Re.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,se),n.clear();else{se===0&&(n.setRenderTarget(q.map),n.clear());let Re=q.getViewport(se);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),O.viewport(a)}i=q.getFrustum(se),x(C,v,De,Y,this.type)}q.isPointLightShadow!==!0&&this.type===js&&M(q,v),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,N)};function M(E,C){let v=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Vt(s.x,s.y,{format:Bn,type:jt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,v,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,v,f,y,null)}function w(E,C,v,T){let I=null,N=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=I.uuid,W=C.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let k=U[W];k===void 0&&(k=I.clone(),U[W]=k,C.addEventListener("dispose",S)),I=k}if(I.visible=C.visible,I.wireframe=C.wireframe,T===js?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=n.properties.get(I);O.light=v}return I}function x(E,C,v,T,I){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===js)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let W=e.update(E),U=E.material;if(Array.isArray(U)){let k=W.groups;for(let Y=0,q=k.length;Y<q;Y++){let oe=k[Y],Z=U[oe.materialIndex];if(Z&&Z.visible){let ee=w(E,Z,T,I);E.onBeforeShadow(n,E,C,v,W,ee,oe),n.renderBufferDirect(v,null,W,ee,E,oe),E.onAfterShadow(n,E,C,v,W,ee,oe)}}}else if(U.visible){let k=w(E,U,T,I);E.onBeforeShadow(n,E,C,v,W,k,null),n.renderBufferDirect(v,null,W,k,E,null),E.onAfterShadow(n,E,C,v,W,k,null)}}let O=E.children;for(let W=0,U=O.length;W<U;W++)x(O[W],C,v,T,I)}function S(E){E.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function hv(n,e){function t(){let F=!1,_e=new At,j=null,xe=new At(0,0,0,0);return{setMask:function(we){j!==we&&!F&&(n.colorMask(we,we,we,we),j=we)},setLocked:function(we){F=we},setClear:function(we,ae,Fe,Ie,bt){bt===!0&&(we*=Ie,ae*=Ie,Fe*=Ie),_e.set(we,ae,Fe,Ie),xe.equals(_e)===!1&&(n.clearColor(we,ae,Fe,Ie),xe.copy(_e))},reset:function(){F=!1,j=null,xe.set(-1,0,0,0)}}}function i(){let F=!1,_e=!1,j=null,xe=null,we=null;return{setReversed:function(ae){if(_e!==ae){let Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),_e=ae;let Ie=we;we=null,this.setClear(Ie)}},getReversed:function(){return _e},setTest:function(ae){ae?te(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ae){j!==ae&&!F&&(n.depthMask(ae),j=ae)},setFunc:function(ae){if(_e&&(ae=Od[ae]),xe!==ae){switch(ae){case so:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case ao:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case lo:n.depthFunc(n.GEQUAL);break;case co:n.depthFunc(n.GREATER);break;case ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ae}},setLocked:function(ae){F=ae},setClear:function(ae){we!==ae&&(we=ae,_e&&(ae=1-ae),n.clearDepth(ae))},reset:function(){F=!1,j=null,xe=null,we=null,_e=!1}}}function s(){let F=!1,_e=null,j=null,xe=null,we=null,ae=null,Fe=null,Ie=null,bt=null;return{setTest:function(dt){F||(dt?te(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(dt){_e!==dt&&!F&&(n.stencilMask(dt),_e=dt)},setFunc:function(dt,Ai,zi){(j!==dt||xe!==Ai||we!==zi)&&(n.stencilFunc(dt,Ai,zi),j=dt,xe=Ai,we=zi)},setOp:function(dt,Ai,zi){(ae!==dt||Fe!==Ai||Ie!==zi)&&(n.stencilOp(dt,Ai,zi),ae=dt,Fe=Ai,Ie=zi)},setLocked:function(dt){F=dt},setClear:function(dt){bt!==dt&&(n.clearStencil(dt),bt=dt)},reset:function(){F=!1,_e=null,j=null,xe=null,we=null,ae=null,Fe=null,Ie=null,bt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,x=null,S=null,E=null,C=null,v=new Be(0,0,0),T=0,I=!1,N=null,O=null,W=null,U=null,k=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,oe=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=oe>=2);let ee=null,se={},De=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ht=new At().fromArray(De),it=new At().fromArray(Re);function ot(F,_e,j,xe){let we=new Uint8Array(4),ae=n.createTexture();n.bindTexture(F,ae),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<j;Fe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(_e+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ae}let J={};J[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Ds),ue(!1),pe(qc),te(n.CULL_FACE),ce(Si);function te(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Me(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ge(F,_e){return u[F]!==_e?(n.bindFramebuffer(F,_e),u[F]=_e,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(F,_e){let j=g,xe=!1;if(F){j=f.get(_e),j===void 0&&(j=[],f.set(_e,j));let we=F.textures;if(j.length!==we.length||j[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Fe=we.length;ae<Fe;ae++)j[ae]=n.COLOR_ATTACHMENT0+ae;j.length=we.length,xe=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,xe=!0);xe&&n.drawBuffers(j)}function We(F){return y!==F?(n.useProgram(F),y=F,!0):!1}let mt={[ns]:n.FUNC_ADD,[sd]:n.FUNC_SUBTRACT,[rd]:n.FUNC_REVERSE_SUBTRACT};mt[ad]=n.MIN,mt[od]=n.MAX;let ie={[ld]:n.ZERO,[cd]:n.ONE,[hd]:n.SRC_COLOR,[Kc]:n.SRC_ALPHA,[gd]:n.SRC_ALPHA_SATURATE,[pd]:n.DST_COLOR,[dd]:n.DST_ALPHA,[ud]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[md]:n.ONE_MINUS_DST_COLOR,[fd]:n.ONE_MINUS_DST_ALPHA,[_d]:n.CONSTANT_COLOR,[xd]:n.ONE_MINUS_CONSTANT_COLOR,[vd]:n.CONSTANT_ALPHA,[yd]:n.ONE_MINUS_CONSTANT_ALPHA};function ce(F,_e,j,xe,we,ae,Fe,Ie,bt,dt){if(F===Si){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),F!==nd){if(F!==p||dt!==I){if((M!==ns||S!==ns)&&(n.blendEquation(n.FUNC_ADD),M=ns,S=ns),dt)switch(F){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:He("WebGLState: Invalid blending: ",F);break}else switch(F){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yc:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",F);break}w=null,x=null,E=null,C=null,v.set(0,0,0),T=0,p=F,I=dt}return}we=we||_e,ae=ae||j,Fe=Fe||xe,(_e!==M||we!==S)&&(n.blendEquationSeparate(mt[_e],mt[we]),M=_e,S=we),(j!==w||xe!==x||ae!==E||Fe!==C)&&(n.blendFuncSeparate(ie[j],ie[xe],ie[ae],ie[Fe]),w=j,x=xe,E=ae,C=Fe),(Ie.equals(v)===!1||bt!==T)&&(n.blendColor(Ie.r,Ie.g,Ie.b,bt),v.copy(Ie),T=bt),p=F,I=!1}function he(F,_e){F.side===Jt?Me(n.CULL_FACE):te(n.CULL_FACE);let j=F.side===ci;_e&&(j=!j),ue(j),F.blending===Qs&&F.transparent===!1?ce(Si):ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){N!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),N=F)}function pe(F){F!==ed?(te(n.CULL_FACE),F!==O&&(F===qc?n.cullFace(n.BACK):F===td?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),O=F}function ze(F){F!==W&&(q&&n.lineWidth(F),W=F)}function Oe(F,_e,j){F?(te(n.POLYGON_OFFSET_FILL),(U!==_e||k!==j)&&(U=_e,k=j,a.getReversed()&&(_e=-_e),n.polygonOffset(_e,j))):Me(n.POLYGON_OFFSET_FILL)}function Xe(F){F?te(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=n.TEXTURE0+Y-1),ee!==F&&(n.activeTexture(F),ee=F)}function L(F,_e,j){j===void 0&&(ee===null?j=n.TEXTURE0+Y-1:j=ee);let xe=se[j];xe===void 0&&(xe={type:void 0,texture:void 0},se[j]=xe),(xe.type!==F||xe.texture!==_e)&&(ee!==j&&(n.activeTexture(j),ee=j),n.bindTexture(F,_e||J[F]),xe.type=F,xe.texture=_e)}function ut(){let F=se[ee];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function _(){try{n.texSubImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function B(){try{n.texSubImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function de(){try{n.texStorage2D(...arguments)}catch(F){He("WebGLState:",F)}}function fe(){try{n.texStorage3D(...arguments)}catch(F){He("WebGLState:",F)}}function $(){try{n.texImage2D(...arguments)}catch(F){He("WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){He("WebGLState:",F)}}function me(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Ne(F,_e){d[F]!==_e&&(n.pixelStorei(F,_e),d[F]=_e)}function ve(F){ht.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ht.copy(F))}function ge(F){it.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function Ue(F,_e){let j=c.get(_e);j===void 0&&(j=new WeakMap,c.set(_e,j));let xe=j.get(F);xe===void 0&&(xe=n.getUniformBlockIndex(_e,F.name),j.set(F,xe))}function Ve(F,_e){let xe=c.get(_e).get(F);l.get(_e)!==xe&&(n.uniformBlockBinding(_e,xe,F.__bindingPointIndex),l.set(_e,xe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,se={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,w=null,x=null,S=null,E=null,C=null,v=new Be(0,0,0),T=0,I=!1,N=null,O=null,W=null,U=null,k=null,ht.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Me,bindFramebuffer:Ge,drawBuffers:Ee,useProgram:We,setBlending:ce,setMaterial:he,setFlipSided:ue,setCullFace:pe,setLineWidth:ze,setPolygonOffset:Oe,setScissorTest:Xe,activeTexture:Ze,bindTexture:L,unbindTexture:ut,compressedTexImage2D:nt,compressedTexImage3D:A,texImage2D:$,texImage3D:Q,pixelStorei:Ne,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:fe,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:ve,viewport:ge,reset:Je}}function uv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,_){return g?new OffscreenCanvas(A,_):Sr("canvas")}function m(A,_,B){let G=1,K=nt(A);if((K.width>B||K.height>B)&&(G=B/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let de=Math.floor(G*K.width),fe=Math.floor(G*K.height);u===void 0&&(u=y(de,fe));let $=_?y(de,fe):u;return $.width=de,$.height=fe,$.getContext("2d").drawImage(A,0,0,de,fe),ke("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+fe+")."),$}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,_,B,G,K,de=!1){if(A!==null){if(n[A]!==void 0)return n[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;G&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8),B===n.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),B===n.SHORT&&fe&&($=fe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),_===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8),B===n.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),B===n.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),B===n.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),_===n.RGBA){let Q=de?br:tt.getTransfer(K);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Q===ct?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),B===n.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(A,_){let B;return A?_===null||_===Fi||_===tr?B=n.DEPTH24_STENCIL8:_===wi?B=n.DEPTH32F_STENCIL8:_===er&&(B=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===tr?B=n.DEPTH_COMPONENT24:_===wi?B=n.DEPTH_COMPONENT32F:_===er&&(B=n.DEPTH_COMPONENT16),B}function E(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){let _=A.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(A){let _=A.target;_.removeEventListener("dispose",v),N(_)}function T(A){let _=i.get(A);if(_.__webglInit===void 0)return;let B=A.source,G=f.get(B);if(G){let K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(A),Object.keys(G).length===0&&f.delete(B)}i.remove(A)}function I(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let B=A.source,G=f.get(B);delete G[_.__cacheKey],a.memory.textures--}function N(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[G][K]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=A.textures;for(let G=0,K=B.length;G<K;G++){let de=i.get(B[G]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(B[G])}i.remove(A)}let O=0;function W(){O=0}function U(){return O}function k(A){O=A}function Y(){let A=O;return A>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,A}function q(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function oe(A,_){let B=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let G=A.image;if(G===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function Z(A,_){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Me(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function ee(A,_){let B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Me(B,A,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function se(A,_){let B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ge(B,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let De={[uo]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[fo]:n.MIRRORED_REPEAT},Re={[Zt]:n.NEAREST,[Sd]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[$t]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},ht={[Ad]:n.NEVER,[Ld]:n.ALWAYS,[Rd]:n.LESS,[Cl]:n.LEQUAL,[Cd]:n.EQUAL,[Pl]:n.GEQUAL,[Pd]:n.GREATER,[Id]:n.NOTEQUAL};function it(A,_){if(_.type===wi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===Wo||_.magFilter===ca||_.magFilter===Fn||_.minFilter===$t||_.minFilter===Wo||_.minFilter===ca||_.minFilter===Fn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,De[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,De[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,De[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Re[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Re[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ht[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Zt||_.minFilter!==ca&&_.minFilter!==Fn||_.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ot(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));let G=_.source,K=f.get(G);K===void 0&&(K={},f.set(G,K));let de=q(_);if(de!==A.__cacheKey){K[de]===void 0&&(K[de]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[de].usedTimes++;let fe=K[A.__cacheKey];fe!==void 0&&(K[A.__cacheKey].usedTimes--,fe.usedTimes===0&&I(_)),A.__cacheKey=de,A.__webglTexture=K[de].texture}return B}function J(A,_,B){return Math.floor(Math.floor(A/B)/_)}function te(A,_,B,G){let de=A.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,G,_.data);else{de.sort((Ne,ve)=>Ne.start-ve.start);let fe=0;for(let Ne=1;Ne<de.length;Ne++){let ve=de[fe],ge=de[Ne],Ue=ve.start+ve.count,Ve=J(ge.start,_.width,4),Je=J(ve.start,_.width,4);ge.start<=Ue+1&&Ve===Je&&J(ge.start+ge.count-1,_.width,4)===Ve?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++fe,de[fe]=ge)}de.length=fe+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,ve=de.length;Ne<ve;Ne++){let ge=de[Ne],Ue=Math.floor(ge.start/4),Ve=Math.ceil(ge.count/4),Je=Ue%_.width,F=Math.floor(Ue/_.width),_e=Ve,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Je,F,_e,j,B,G,_.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Me(A,_,B){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let K=ot(A,_),de=_.source;t.bindTexture(G,A.__webglTexture,n.TEXTURE0+B);let fe=i.get(de);if(de.version!==fe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let j=tt.getPrimaries(tt.workingColorSpace),xe=_.colorSpace===fn?null:tt.getPrimaries(_.colorSpace),we=_.colorSpace===fn||j===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=ut(_,Q);let me=r.convert(_.format,_.colorSpace),Ne=r.convert(_.type),ve=x(_.internalFormat,me,Ne,_.normalized,_.colorSpace,_.isVideoTexture);it(G,_);let ge,Ue=_.mipmaps,Ve=_.isVideoTexture!==!0,Je=fe.__version===void 0||K===!0,F=de.dataReady,_e=E(_,Q);if(_.isDepthTexture)ve=S(_.format===On,_.type),Je&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,ve,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,me,Ne,null));else if(_.isDataTexture)if(Ue.length>0){Ve&&Je&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Ue[0].width,Ue[0].height);for(let j=0,xe=Ue.length;j<xe;j++)ge=Ue[j],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,j,ve,ge.width,ge.height,0,me,Ne,ge.data);_.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Q.width,Q.height),F&&te(_,Q,me,Ne)):t.texImage2D(n.TEXTURE_2D,0,ve,Q.width,Q.height,0,me,Ne,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,Ue[0].width,Ue[0].height,Q.depth);for(let j=0,xe=Ue.length;j<xe;j++)if(ge=Ue[j],_.format!==Ei)if(me!==null)if(Ve){if(F)if(_.layerUpdates.size>0){let we=fh(ge.width,ge.height,_.format,_.type);for(let ae of _.layerUpdates){let Fe=ge.data.subarray(ae*we/ge.data.BYTES_PER_ELEMENT,(ae+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,ae,ge.width,ge.height,1,me,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,Q.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,ve,ge.width,ge.height,Q.depth,0,ge.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,Q.depth,me,Ne,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,ve,ge.width,ge.height,Q.depth,0,me,Ne,ge.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ve&&Je&&t.texStorage2D(n.TEXTURE_2D,_e,ve,Ue[0].width,Ue[0].height);for(let j=0,xe=Ue.length;j<xe;j++)ge=Ue[j],_.format!==Ei?me!==null?Ve?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,j,ve,ge.width,ge.height,0,ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge.width,ge.height,me,Ne,ge.data):t.texImage2D(n.TEXTURE_2D,j,ve,ge.width,ge.height,0,me,Ne,ge.data)}else if(_.isDataArrayTexture)if(Ve){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,Q.width,Q.height,Q.depth),F)if(_.layerUpdates.size>0){let j=fh(Q.width,Q.height,_.format,_.type);for(let xe of _.layerUpdates){let we=Q.data.subarray(xe*j/Q.data.BYTES_PER_ELEMENT,(xe+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,Q.width,Q.height,1,me,Ne,we)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,me,Ne,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,Q.width,Q.height,Q.depth,0,me,Ne,Q.data);else if(_.isData3DTexture)Ve?(Je&&t.texStorage3D(n.TEXTURE_3D,_e,ve,Q.width,Q.height,Q.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,me,Ne,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ve,Q.width,Q.height,Q.depth,0,me,Ne,Q.data);else if(_.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(n.TEXTURE_2D,_e,ve,Q.width,Q.height);else{let j=Q.width,xe=Q.height;for(let we=0;we<_e;we++)t.texImage2D(n.TEXTURE_2D,we,ve,j,xe,0,me,Ne,null),j>>=1,xe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(_),j.onpaint=xe=>{let we=xe.changedElements;for(let ae of d)we.includes(ae.image)&&(ae.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let we=n.RGBA,ae=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,ae,Fe,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ve&&Je){let j=nt(Ue[0]);t.texStorage2D(n.TEXTURE_2D,_e,ve,j.width,j.height)}for(let j=0,xe=Ue.length;j<xe;j++)ge=Ue[j],Ve?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,me,Ne,ge):t.texImage2D(n.TEXTURE_2D,j,ve,me,Ne,ge);_.generateMipmaps=!1}else if(Ve){if(Je){let j=nt(Q);t.texStorage2D(n.TEXTURE_2D,_e,ve,j.width,j.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Ne,Q)}else t.texImage2D(n.TEXTURE_2D,0,ve,me,Ne,Q);p(_)&&M(G),fe.__version=de.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ge(A,_,B){if(_.image.length!==6)return;let G=ot(A,_),K=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);let de=i.get(K);if(K.version!==de.__version||G===!0){t.activeTexture(n.TEXTURE0+B);let fe=tt.getPrimaries(tt.workingColorSpace),$=_.colorSpace===fn?null:tt.getPrimaries(_.colorSpace),Q=_.colorSpace===fn||fe===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let me=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!me&&!Ne?ve[ae]=m(_.image[ae],!0,s.maxCubemapSize):ve[ae]=Ne?_.image[ae].image:_.image[ae],ve[ae]=ut(_,ve[ae]);let ge=ve[0],Ue=r.convert(_.format,_.colorSpace),Ve=r.convert(_.type),Je=x(_.internalFormat,Ue,Ve,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,_e=de.__version===void 0||G===!0,j=K.dataReady,xe=E(_,ge);it(n.TEXTURE_CUBE_MAP,_);let we;if(me){F&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,ge.width,ge.height);for(let ae=0;ae<6;ae++){we=ve[ae].mipmaps;for(let Fe=0;Fe<we.length;Fe++){let Ie=we[Fe];_.format!==Ei?Ue!==null?F?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Je,Ie.width,Ie.height,0,Ie.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ie.width,Ie.height,Ue,Ve,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Je,Ie.width,Ie.height,0,Ue,Ve,Ie.data)}}}else{if(we=_.mipmaps,F&&_e){we.length>0&&xe++;let ae=nt(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ne){F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Ue,Ve,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,ve[ae].width,ve[ae].height,0,Ue,Ve,ve[ae].data);for(let Fe=0;Fe<we.length;Fe++){let bt=we[Fe].image[ae].image;F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,bt.width,bt.height,Ue,Ve,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Je,bt.width,bt.height,0,Ue,Ve,bt.data)}}else{F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Ve,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Ue,Ve,ve[ae]);for(let Fe=0;Fe<we.length;Fe++){let Ie=we[Fe];F?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Ue,Ve,Ie.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Je,Ue,Ve,Ie.image[ae])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),de.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ee(A,_,B,G,K,de){let fe=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Q=x(B.internalFormat,fe,$,B.normalized,B.colorSpace),me=i.get(_),Ne=i.get(B);if(Ne.__renderTarget=_,!me.__hasExternalTextures){let ve=Math.max(1,_.width>>de),ge=Math.max(1,_.height>>de);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,de,Q,ve,ge,_.depth,0,fe,$,null):t.texImage2D(K,de,Q,ve,ge,0,fe,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ze(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,K,Ne.__webglTexture,0,Xe(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,K,Ne.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(A,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,de=S(_.stencilBuffer,K),fe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(_),de,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(_),de,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,de,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,A)}else{let G=_.textures;for(let K=0;K<G.length;K++){let de=G[K],fe=r.convert(de.format,de.colorSpace),$=r.convert(de.type),Q=x(de.internalFormat,fe,$,de.normalized,de.colorSpace);Ze(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(_),Q,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(_),Q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function mt(A,_,B){let G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),it(n.TEXTURE_CUBE_MAP,_.depthTexture);let me=r.convert(_.depthTexture.format),Ne=r.convert(_.depthTexture.type),ve;_.depthTexture.format===Wi?ve=n.DEPTH_COMPONENT24:_.depthTexture.format===On&&(ve=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,_.width,_.height,0,me,Ne,null)}}else oe(_.depthTexture,0);let de=K.__webglTexture,fe=Xe(_),$=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Q=_.depthTexture.format===On?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wi)Ze(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,de,0);else if(_.depthTexture.format===On)Ze(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,$,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,$,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){let _=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)mt(_.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?mt(_.__webglFramebuffer[0],A,0):mt(_.__webglFramebuffer,A,0)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),We(_.__webglDepthbuffer[G],A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,de)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),We(_.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(A,_,B){let G=i.get(A);_!==void 0&&Ee(G.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ie(A)}function he(A){let _=A.texture,B=i.get(A),G=i.get(_);A.addEventListener("dispose",v);let K=A.textures,de=A.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),de){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<_.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=n.createFramebuffer()}else B.__webglFramebuffer[$]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)B.__webglFramebuffer[$]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(fe)for(let $=0,Q=K.length;$<Q;$++){let me=i.get(K[$]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ze(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){let Q=K[$];B.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let me=r.convert(Q.format,Q.colorSpace),Ne=r.convert(Q.type),ve=x(Q.internalFormat,me,Ne,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),ge=Xe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ve,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,B.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),We(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),it(n.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Ee(B.__webglFramebuffer[$][Q],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Ee(B.__webglFramebuffer[$],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let $=0,Q=K.length;$<Q;$++){let me=K[$],Ne=i.get(me),ve=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ne.__webglTexture),it(ve,me),Ee(B.__webglFramebuffer,A,me,n.COLOR_ATTACHMENT0+$,ve,0),p(me)&&M(ve)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,G.__webglTexture),it($,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Ee(B.__webglFramebuffer[Q],A,_,n.COLOR_ATTACHMENT0,$,Q);else Ee(B.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,$,0);p(_)&&M($),t.unbindTexture()}A.depthBuffer&&ie(A)}function ue(A){let _=A.textures;for(let B=0,G=_.length;B<G;B++){let K=_[B];if(p(K)){let de=w(A),fe=i.get(K).__webglTexture;t.bindTexture(de,fe),M(de),t.unbindTexture()}}}let pe=[],ze=[];function Oe(A){if(A.samples>0){if(Ze(A)===!1){let _=A.textures,B=A.width,G=A.height,K=n.COLOR_BUFFER_BIT,de=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(A),$=_.length>1;if($)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<_.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,K,n.NEAREST),l===!0&&(pe.length=0,ze.length=0,pe.push(n.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(pe.push(de),ze.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Xe(A){return Math.min(s.maxSamples,A.samples)}function Ze(A){let _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ut(A,_){let B=A.colorSpace,G=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Mr&&B!==fn&&(tt.getTransfer(B)===ct?(G!==Ei||K!==hi)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",B)),_}function nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=ce,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dv(n,e){function t(i,s=fn){let r,a=tt.getTransfer(s);if(i===hi)return n.UNSIGNED_BYTE;if(i===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ih)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qc)return n.BYTE;if(i===eh)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===Xo)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===jt)return n.HALF_FLOAT;if(i===nh)return n.ALPHA;if(i===sh)return n.RGB;if(i===Ei)return n.RGBA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===On)return n.DEPTH_STENCIL;if(i===Zo)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Bn)return n.RG;if(i===$o)return n.RG_INTEGER;if(i===Jo)return n.RGBA_INTEGER;if(i===ha||i===ua||i===da||i===fa)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Qo||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===nl||i===sl||i===rl||i===al||i===pa||i===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===nl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===pa)return r.COMPRESSED_RG11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===yl||i===Ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===Sl||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===bl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===Tl||i===ma||i===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===El)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Rt({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new Zi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dh=class extends Li{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Lh,p={},M=t.getContextAttributes(),w=null,x=null,S=[],E=[],C=new re,v=null,T=null,I=new oi;I.viewport=new At;let N=new oi;N.viewport=new At;let O=[I,N],W=new zo,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=S[J];return te===void 0&&(te=new ks,S[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=S[J];return te===void 0&&(te=new ks,S[J]=te),te.getGripSpace()},this.getHand=function(J){let te=S[J];return te===void 0&&(te=new ks,S[J]=te),te.getHandSpace()};function Y(J){let te=E.indexOf(J.inputSource);if(te===-1)return;let Me=S[te];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",oe);for(let J=0;J<S.length;J++){let te=E[J];te!==null&&(E[J]=null,S[J].disconnect(te))}U=null,k=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(w),f=null,u=null,d=null,s=null,x=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ge=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=M.stencil?On:Wi,Ge=M.stencil?tr:Fi);let We={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Vt(u.textureWidth,u.textureHeight,{format:Ei,type:hi,depthTexture:new Rn(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Vt(f.framebufferWidth,f.framebufferHeight,{format:Ei,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(J){for(let te=0;te<J.removed.length;te++){let Me=J.removed[te],Ge=E.indexOf(Me);Ge>=0&&(E[Ge]=null,S[Ge].disconnect(Me))}for(let te=0;te<J.added.length;te++){let Me=J.added[te],Ge=E.indexOf(Me);if(Ge===-1){for(let We=0;We<S.length;We++)if(We>=E.length){E.push(Me),Ge=We;break}else if(E[We]===null){E[We]=Me,Ge=We;break}if(Ge===-1)break}let Ee=S[Ge];Ee&&Ee.connect(Me)}}let Z=new P,ee=new P;function se(J,te,Me){Z.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);let Ge=Z.distanceTo(ee),Ee=te.projectionMatrix.elements,We=Me.projectionMatrix.elements,mt=Ee[14]/(Ee[10]-1),ie=Ee[14]/(Ee[10]+1),ce=(Ee[9]+1)/Ee[5],he=(Ee[9]-1)/Ee[5],ue=(Ee[8]-1)/Ee[0],pe=(We[8]+1)/We[0],ze=mt*ue,Oe=mt*pe,Xe=Ge/(-ue+pe),Ze=Xe*-ue;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ze),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ee[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let L=mt+Xe,ut=ie+Xe,nt=ze-Ze,A=Oe+(Ge-Ze),_=ce*ie/ut*L,B=he*ie/ut*L;J.projectionMatrix.makePerspective(nt,A,_,B,L,ut),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function De(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,Me=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),W.near=N.near=I.near=te,W.far=N.far=I.far=Me,(U!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),U=W.near,k=W.far),W.layers.mask=J.layers.mask|6,I.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let Ge=J.parent,Ee=W.cameras;De(W,Ge);for(let We=0;We<Ee.length;We++)De(Ee[We],Ge);Ee.length===2?se(W,I,N):W.projectionMatrix.copy(I.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Re(J,W,Ge)};function Re(J,te,Me){Me===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(J){return p[J]};let ht=null;function it(J,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ge=!1;Me.length!==W.cameras.length&&(W.cameras.length=0,Ge=!0);for(let ie=0;ie<Me.length;ie++){let ce=Me[ie],he=null;if(f!==null)he=f.getViewport(ce);else{let pe=d.getViewSubImage(u,ce);he=pe.viewport,ie===0&&(e.setRenderTargetTextures(x,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(x))}let ue=O[ie];ue===void 0&&(ue=new oi,ue.layers.enable(ie),ue.viewport=new At,O[ie]=ue),ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),ie===0&&(W.matrix.copy(ue.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ge===!0&&W.cameras.push(ue)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let ie=d.getDepthInformation(Me[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let ie=0;ie<Me.length;ie++){let ce=Me[ie].camera;if(ce){let he=p[ce];he||(he=new Lr,p[ce]=he);let ue=d.getCameraImage(ce);he.sourceTexture=ue}}}}for(let Me=0;Me<S.length;Me++){let Ge=E[Me],Ee=S[Me];Ge!==null&&Ee!==void 0&&Ee.update(Ge,te,c||a)}ht&&ht(J,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let ot=new ff;ot.setAnimationLoop(it),this.setAnimationLoop=function(J){ht=J},this.dispose=function(){}}},mv=new pt,vf=new Ye;vf.set(-1,0,0,0,1,0,0,0,1);function gv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ci&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ci&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),w=M.envMap,x=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ci&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _v(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let E=S.program;i.uniformBlockBinding(x,E)}function c(x,S){let E=s[x.id];E===void 0&&(m(x),E=h(x),s[x.id]=E,x.addEventListener("dispose",M));let C=S.program;i.updateUBOMapping(x,C);let v=e.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let S=d();x.__bindingPointIndex=S;let E=n.createBuffer(),C=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],E=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,T=E.length;v<T;v++){let I=E[v];if(Array.isArray(I))for(let N=0,O=I.length;N<O;N++)f(I[N],v,N,C);else f(I,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,S,E,C){if(y(x,S,E,C)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let I=0;for(let N=0;N<T.length;N++){let O=T[N],W=p(O);g(O,x.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function g(x,S,E){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,E)}function y(x,S,E,C){let v=x.value,T=S+"_"+E;if(C[T]===void 0)return typeof v=="number"||typeof v=="boolean"?C[T]=v:ArrayBuffer.isView(v)?C[T]=v.slice():C[T]=v.clone(),!0;{let I=C[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return C[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function m(x){let S=x.uniforms,E=0,C=16;for(let T=0,I=S.length;T<I;T++){let N=Array.isArray(S[T])?S[T]:[S[T]];for(let O=0,W=N.length;O<W;O++){let U=N[O],k=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,q=k.length;Y<q;Y++){let oe=k[Y],Z=p(oe),ee=E%C,se=ee%Z.boundary,De=ee+se;E+=se,De!==0&&C-De<Z.storage&&(E+=C-De),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=Z.storage}}}let v=E%C;return v>0&&(E+=C-v),x.__size=E,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function vv(){return $i===null&&($i=new Rr(xv,16,16,Bn,jt),$i.name="DFG_LUT",$i.minFilter=$t,$i.magFilter=$t,$i.wrapS=Gi,$i.wrapT=Gi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var Ul=class{constructor(e={}){let{canvas:t=Nd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=hi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Jo,$o,Ko]),p=new Set([hi,Fi,er,tr,qo,Yo]),M=new Uint32Array(4),w=new Int32Array(4),x=new P,S=null,E=null,C=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,W=null,U=null,k=null;this._outputColorSpace=mi;let Y=0,q=0,oe=null,Z=-1,ee=null,se=new At,De=new At,Re=null,ht=new Be(0),it=0,ot=t.width,J=t.height,te=1,Me=null,Ge=null,Ee=new At(0,0,ot,J),We=new At(0,0,ot,J),mt=!1,ie=new zs,ce=!1,he=!1,ue=new pt,pe=new P,ze=new At,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Ze(){return oe===null?te:1}let L=i;function ut(b,D){return t.getContext(b,D)}let nt,A,_,B,G,K,de,fe,$,Q,me,Ne,ve,ge,Ue,Ve,Je,F,_e,j,xe,we,ae;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Ai,!1),L===null){let D="webgl2";if(L=ut(D,b),L===null)throw ut(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(b){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),He("WebGLRenderer: "+b.message),b}function Fe(){nt=new T_(L),nt.init(),xe=new dv(L,nt),A=new g_(L,nt,e,xe),_=new hv(L,nt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),W=L.createFramebuffer(),U=L.createFramebuffer(),k=L.createFramebuffer(),B=new C_(L),G=new $x,K=new uv(L,nt,_,G,A,xe,B),de=new E_(I),fe=new Im(L),we=new p_(L,fe),$=new A_(L,fe,B,we),Q=new I_(L,$,fe,we,B),F=new P_(L,A,K),Ue=new __(G),me=new Kx(I,de,nt,A,we,Ue),Ne=new gv(I,G),ve=new jx,ge=new sv(nt),Je=new f_(I,de,_,Q,g,l),Ve=new cv(I,Q,A),ae=new _v(L,B,A,_),_e=new m_(L,nt,B),j=new R_(L,nt,B),B.programs=me.programs,I.capabilities=A,I.extensions=nt,I.properties=G,I.renderLists=ve,I.shadowMap=Ve,I.state=_,I.info=B}y!==hi&&(T=new D_(y,t.width,t.height,o,s,r));let Ie=new Dh(I,L);this.xr=Ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(ot,J,!1))},this.getSize=function(b){return b.set(ot,J)},this.setSize=function(b,D,X=!0){if(Ie.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=b,J=D,t.width=Math.floor(b*te),t.height=Math.floor(D*te),X===!0&&(t.style.width=b+"px",t.style.height=D+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(ot*te,J*te).floor()},this.setDrawingBufferSize=function(b,D,X){ot=b,J=D,te=X,t.width=Math.floor(b*X),t.height=Math.floor(D*X),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(y===hi){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ee)},this.setViewport=function(b,D,X,z){b.isVector4?Ee.set(b.x,b.y,b.z,b.w):Ee.set(b,D,X,z),_.viewport(se.copy(Ee).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(We)},this.setScissor=function(b,D,X,z){b.isVector4?We.set(b.x,b.y,b.z,b.w):We.set(b,D,X,z),_.scissor(De.copy(We).multiplyScalar(te).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(b){_.setScissorTest(mt=b)},this.setOpaqueSort=function(b){Me=b},this.setTransparentSort=function(b){Ge=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,X=!0){let z=0;if(b){let V=!1;if(oe!==null){let Se=oe.texture.format;V=m.has(Se)}if(V){let Se=oe.texture.type,Ae=p.has(Se),be=Je.getClearColor(),Ce=Je.getClearAlpha(),Le=be.r,je=be.g,st=be.b;Ae?(M[0]=Le,M[1]=je,M[2]=st,M[3]=Ce,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Le,w[1]=je,w[2]=st,w[3]=Ce,L.clearBufferiv(L.COLOR,0,w))}else z|=L.COLOR_BUFFER_BIT}D&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),Je.dispose(),ve.dispose(),ge.dispose(),G.dispose(),de.dispose(),Q.dispose(),we.dispose(),ae.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",ou),Ie.removeEventListener("sessionend",lu),Wn.stop()};function bt(b){b.preventDefault(),ah("WebGLRenderer: Context Lost."),N=!0}function dt(){ah("WebGLRenderer: Context Restored."),N=!1;let b=B.autoReset,D=Ve.enabled,X=Ve.autoUpdate,z=Ve.needsUpdate,V=Ve.type;Fe(),B.autoReset=b,Ve.enabled=D,Ve.autoUpdate=X,Ve.needsUpdate=z,Ve.type=V}function Ai(b){He("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zi(b){let D=b.target;D.removeEventListener("dispose",zi),Qf(D)}function Qf(b){ep(b),G.remove(b)}function ep(b){let D=G.get(b).programs;D!==void 0&&(D.forEach(function(X){me.releaseProgram(X)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,X,z,V,Se){D===null&&(D=Oe);let Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,be=np(b,D,X,z,V);_.setMaterial(z,Ae);let Ce=X.index,Le=1;if(z.wireframe===!0){if(Ce=$.getWireframeAttribute(X),Ce===void 0)return;Le=2}let je=X.drawRange,st=X.attributes.position,Pe=je.start*Le,ft=(je.start+je.count)*Le;Se!==null&&(Pe=Math.max(Pe,Se.start*Le),ft=Math.min(ft,(Se.start+Se.count)*Le)),Ce!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Ce.count)):st!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,st.count));let kt=ft-Pe;if(kt<0||kt===1/0)return;we.setup(V,z,be,X,Ce);let wt,yt=_e;if(Ce!==null&&(wt=fe.get(Ce),yt=j,yt.setIndex(wt)),V.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*Ze()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(V.isLine){let Qt=z.linewidth;Qt===void 0&&(Qt=1),_.setLineWidth(Qt*Ze()),V.isLineSegments?yt.setMode(L.LINES):V.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else V.isPoints?yt.setMode(L.POINTS):V.isSprite&&yt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Qt=V._multiDrawStarts,Te=V._multiDrawCounts,si=V._multiDrawCount,lt=Ce?fe.get(Ce).bytesPerElement:1,Mi=G.get(z).currentProgram.getUniforms();for(let Vi=0;Vi<si;Vi++)Mi.setValue(L,"_gl_DrawID",Vi),yt.render(Qt[Vi]/lt,Te[Vi])}else if(V.isInstancedMesh)yt.renderInstances(Pe,kt,V.count);else if(X.isInstancedBufferGeometry){let Qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Te=Math.min(X.instanceCount,Qt);yt.renderInstances(Pe,kt,Te)}else yt.render(Pe,kt)};function au(b,D,X,z){O!==null&&b.isNodeMaterial&&O.setObject(z,b),ce===!0&&Ue.setState(b,X,!1),b.transparent===!0&&b.side===Jt&&b.forceSinglePass===!1?(b.side=ci,b.needsUpdate=!0,Ca(b,D,z),b.side=Nn,b.needsUpdate=!0,Ca(b,D,z),b.side=Jt):Ca(b,D,z)}this.compile=function(b,D,X=null){X===null&&(X=b),O!==null&&O.renderStart(b,D,X),E=ge.get(X),E.init(D),v.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),he=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,he),ce===!0&&Ue.setGlobalState(this.clippingPlanes,D),O!==null&&Ve.render(E.state.shadowsArray,X,D);let z=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Se=V.material;if(Se)if(Array.isArray(Se))for(let Ae=0;Ae<Se.length;Ae++){let be=Se[Ae];au(be,X,D,V),z.add(be)}else au(Se,X,D,V),z.add(Se)}),E=v.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(b,D,X=null){let z=this.compile(b,D,X);return new Promise(V=>{function Se(){if(z.forEach(function(Ae){let Ce=G.get(Ae).currentProgram;(Ce===void 0||Ce.isReady())&&z.delete(Ae)}),z.size===0){V(b);return}setTimeout(Se,10)}nt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let rc=null;function tp(b){rc&&rc(b)}function ou(){Wn.stop()}function lu(){Wn.start()}let Wn=new ff;Wn.setAnimationLoop(tp),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(b){rc=b,Ie.setAnimationLoop(b),b===null?Wn.stop():Wn.start()},Ie.addEventListener("sessionstart",ou),Ie.addEventListener("sessionend",lu),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(b,D);let X=Ie.enabled===!0&&Ie.isPresenting===!0,z=T!==null&&(oe===null||X)&&T.begin(I,oe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(D),D=Ie.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,D,oe),E=ge.get(b,v.length),E.init(D),E.state.textureUnits=K.getTextureUnits(),v.push(E),ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ie.setFromProjectionMatrix(ue,Ii,D.reversedDepth),he=this.localClippingEnabled,ce=Ue.init(this.clippingPlanes,he),S=ve.get(b,C.length),S.init(),C.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&ac(Ae,D,-1/0,I.sortObjects)}ac(b,D,0,I.sortObjects),S.finish(),O!==null&&O.updateLights(E.state.lightsArray),I.sortObjects===!0&&S.sort(Me,Ge),Xe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Xe&&Je.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ue.beginShadows();let V=E.state.shadowsArray;if(Ve.render(V,b,D),ce===!0&&Ue.endShadows(),(z&&T.hasRenderPass())===!1){let Ae=S.opaque,be=S.transmissive;if(E.setupLights(),D.isArrayCamera){let Ce=D.cameras;if(be.length>0)for(let Le=0,je=Ce.length;Le<je;Le++){let st=Ce[Le];hu(Ae,be,b,st)}Xe&&Je.render(b);for(let Le=0,je=Ce.length;Le<je;Le++){let st=Ce[Le];cu(S,b,st,st.viewport)}}else be.length>0&&hu(Ae,be,b,D),Xe&&Je.render(b),cu(S,b,D)}oe!==null&&q===0&&(K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe)),z&&T.end(I),b.isScene===!0&&b.onAfterRender(I,b,D),we.resetDefaultState(),Z=-1,ee=null,v.pop(),v.length>0?(E=v[v.length-1],K.setTextureUnits(E.state.textureUnits),ce===!0&&Ue.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?S=C[C.length-1]:S=null,O!==null&&O.renderEnd()};function ac(b,D,X,z){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ie)){z&&ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);let Ae=Q.update(b),be=b.material;be.visible&&S.push(b,Ae,be,X,ze.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ie))){let Ae=Q.update(b),be=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ze.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ze.copy(Ae.boundingSphere.center)),ze.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(be)){let Ce=Ae.groups;for(let Le=0,je=Ce.length;Le<je;Le++){let st=Ce[Le],Pe=be[st.materialIndex];Pe&&Pe.visible&&S.push(b,Ae,Pe,X,ze.z,st,D)}}else be.visible&&S.push(b,Ae,be,X,ze.z,null,D)}}let Se=b.children;for(let Ae=0,be=Se.length;Ae<be;Ae++)ac(Se[Ae],D,X,z)}function cu(b,D,X,z){let{opaque:V,transmissive:Se,transparent:Ae}=b;E.setupLightsView(X),ce===!0&&Ue.setGlobalState(I.clippingPlanes,X),z&&_.viewport(se.copy(z)),V.length>0&&Ra(V,D,X),Se.length>0&&Ra(Se,D,X),Ae.length>0&&Ra(Ae,D,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function hu(b,D,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Pe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Vt(1,1,{generateMipmaps:!0,type:Pe?jt:hi,minFilter:Fn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Se=E.state.transmissionRenderTarget[z.id],Ae=z.viewport||se;Se.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let be=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Le=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(ht),it=I.getClearAlpha(),it<1&&I.setClearColor(16777215,.5),I.clear(),Xe&&Je.render(X);let je=I.toneMapping;I.toneMapping=Ui;let st=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ce===!0&&Ue.setGlobalState(I.clippingPlanes,z),Ra(b,X,z),K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,kt=D.length;ft<kt;ft++){let wt=D[ft],{object:yt,geometry:Qt,material:Te,group:si}=wt;if(Te.side===Jt&&yt.layers.test(z.layers)){let lt=Te.side;Te.side=ci,Te.needsUpdate=!0,uu(yt,X,z,Qt,Te,si),Te.side=lt,Te.needsUpdate=!0,Pe=!0}}Pe===!0&&(K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se))}I.setRenderTarget(be,Ce,Le),I.setClearColor(ht,it),st!==void 0&&(z.viewport=st),I.toneMapping=je}function Ra(b,D,X){let z=D.isScene===!0?D.overrideMaterial:null;for(let V=0,Se=b.length;V<Se;V++){let Ae=b[V],{object:be,geometry:Ce,group:Le}=Ae,je=Ae.material;je.allowOverride===!0&&z!==null&&(je=z),be.layers.test(X.layers)&&uu(be,D,X,Ce,je,Le)}}function uu(b,D,X,z,V,Se){O!==null&&V.isNodeMaterial&&O.setObject(b,V),b.onBeforeRender(I,D,X,z,V,Se),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,D,X,z,b,Se),V.transparent===!0&&V.side===Jt&&V.forceSinglePass===!1?(V.side=ci,V.needsUpdate=!0,I.renderBufferDirect(X,D,z,V,b,Se),V.side=Nn,V.needsUpdate=!0,I.renderBufferDirect(X,D,z,V,b,Se),V.side=Jt):I.renderBufferDirect(X,D,z,V,b,Se),b.onAfterRender(I,D,X,z,V,Se)}function Ca(b,D,X){D.isScene!==!0&&(D=Oe);let z=G.get(b),V=E.state.lights,Se=E.state.shadowsArray,Ae=V.state.version,be=me.getParameters(b,V.state,Se,D,X,E.state.lightProbeGridArray),Ce=me.getProgramCacheKey(be),Le=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=de.get(b.envMap||z.environment,je),z.envMapRotation=z.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",zi),Le=new Map,z.programs=Le);let st=Le.get(Ce);if(st!==void 0){if(z.currentProgram===st&&z.lightsStateVersion===Ae)return fu(b,be),st}else be.uniforms=me.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,X,be),b.onBeforeCompile(be,I),st=me.acquireProgram(be,Ce),Le.set(Ce,st),z.uniforms=be.uniforms;let Pe=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),fu(b,be),z.needsLights=rp(b),z.lightsStateVersion=Ae,z.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.sunLights.value=V.state.sun,Pe.sunLightShadows.value=V.state.sunShadow,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.sunShadowMatrix.value=V.state.sunShadowMatrix,Pe.sunShadowCascade.value=V.state.sunShadowCascade,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=st,z.uniformsList=null,st}function du(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=sr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function fu(b,D){let X=G.get(b);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function ip(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(D.matrixWorld);for(let X=0,z=b.length;X<z;X++){let V=b[X];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function np(b,D,X,z,V){D.isScene!==!0&&(D=Oe),K.resetTextureUnits();let Se=D.fog,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,be=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tt.workingColorSpace,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Le=de.get(z.envMap||Ae,Ce),je=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,st=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,kt=!!X.morphAttributes.color,wt=Ui;z.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(wt=I.toneMapping);let yt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Qt=yt!==void 0?yt.length:0,Te=G.get(z),si=E.state.lights;if(ce===!0&&(he===!0||b!==ee)){let St=b===ee&&z.id===Z;Ue.setState(z,b,St)}let lt=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==si.state.version||Te.outputColorSpace!==be||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==Le||z.fog===!0&&Te.fog!==Se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ue.numPlanes||Te.numIntersection!==Ue.numIntersection)||Te.vertexAlphas!==je||Te.vertexTangents!==st||Te.morphTargets!==Pe||Te.morphNormals!==ft||Te.morphColors!==kt||Te.toneMapping!==wt||Te.morphTargetsCount!==Qt||!!Te.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Te.__version=z.version);let Mi=Te.currentProgram;lt===!0&&(Mi=Ca(z,D,V),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Mi,Te));let Vi=!1,_n=!1,ms=!1,xt=Mi.getUniforms(),Ot=Te.uniforms;if(_.useProgram(Mi.program)&&(Vi=!0,_n=!0,ms=!0),z.id!==Z&&(Z=z.id,_n=!0),Te.needsLights){let St=ip(E.state.lightProbeGridArray,V);Te.lightProbeGrid!==St&&(Te.lightProbeGrid=St,_n=!0)}if(Vi||ee!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xt.setValue(L,"projectionMatrix",b.projectionMatrix),xt.setValue(L,"viewMatrix",b.matrixWorldInverse);let vn=xt.map.cameraPosition;vn!==void 0&&vn.setValue(L,pe.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),ee!==b&&(ee=b,_n=!0,ms=!0)}if(Te.needsLights&&(si.state.sunShadowMap.length>0&&xt.setValue(L,"sunShadowMap",si.state.sunShadowMap,K),si.state.directionalShadowMap.length>0&&xt.setValue(L,"directionalShadowMap",si.state.directionalShadowMap,K),si.state.spotShadowMap.length>0&&xt.setValue(L,"spotShadowMap",si.state.spotShadowMap,K),si.state.pointShadowMap.length>0&&xt.setValue(L,"pointShadowMap",si.state.pointShadowMap,K)),V.isSkinnedMesh){xt.setOptional(L,V,"bindMatrix"),xt.setOptional(L,V,"bindMatrixInverse");let St=V.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),xt.setValue(L,"boneTexture",St.boneTexture,K))}V.isBatchedMesh&&(xt.setOptional(L,V,"batchingTexture"),xt.setValue(L,"batchingTexture",V._matricesTexture,K),xt.setOptional(L,V,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",V._indirectTexture,K),xt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",V._colorsTexture,K));let xn=X.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&F.update(V,X,Mi),(_n||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,xt.setValue(L,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Ot.envMapIntensity.value=D.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=vv()),_n){if(xt.setValue(L,"toneMappingExposure",I.toneMappingExposure),Te.needsLights&&sp(Ot,ms),Se&&z.fog===!0&&Ne.refreshFogUniforms(Ot,Se),Ne.refreshMaterialUniforms(Ot,z,te,J,E.state.transmissionRenderTarget[b.id]),Te.needsLights&&Te.lightProbeGrid){let St=Te.lightProbeGrid;Ot.probesSH.value=St.texture,Ot.probesMin.value.copy(St.boundingBox.min),Ot.probesMax.value.copy(St.boundingBox.max),Ot.probesResolution.value.copy(St.resolution)}sr.upload(L,du(Te),Ot,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(sr.upload(L,du(Te),Ot,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xt.setValue(L,"center",V.center),xt.setValue(L,"modelViewMatrix",V.modelViewMatrix),xt.setValue(L,"normalMatrix",V.normalMatrix),xt.setValue(L,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let St=z.uniformsGroups;for(let vn=0,gs=St.length;vn<gs;vn++){let mu=St[vn];ae.update(mu,Mi),ae.bind(mu,Mi)}}return Mi}function sp(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function rp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(b,D,X){let z=G.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=D,G.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let X=G.get(b);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,X=0){oe=b,Y=D,q=X;let z=null,V=!1,Se=!1;if(b){let be=G.get(b);if(be.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,be.__webglFramebuffer),se.copy(b.viewport),De.copy(b.scissor),Re=b.scissorTest,_.viewport(se),_.scissor(De),_.setScissorTest(Re),Z=-1;return}else if(be.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(be.__hasExternalTextures)K.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let je=b.depthTexture;if(be.__boundDepthTexture!==je){if(je!==null&&G.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);let Le=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[D])?z=Le[D][X]:z=Le[D],V=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?z=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[X]:z=Le,se.copy(b.viewport),De.copy(b.scissor),Re=b.scissorTest}else se.copy(Ee).multiplyScalar(te).floor(),De.copy(We).multiplyScalar(te).floor(),Re=mt;if(X!==0&&(z=W),_.bindFramebuffer(L.FRAMEBUFFER,z)&&_.drawBuffers(b,z),_.viewport(se),_.scissor(De),_.setScissorTest(Re),V){let be=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,be.__webglTexture,X)}else if(Se){let be=D;for(let Ce=0;Ce<b.textures.length;Ce++){let Le=G.get(b.textures[Ce]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,X,be)}}else if(b!==null&&X!==0){let be=G.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,be.__webglTexture,X)}Z=-1};function pu(b){let D=G.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,X,z,V,Se,Ae,be=0){if(!(b&&b.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){_.bindFramebuffer(L.FRAMEBUFFER,Ce);try{let Le=b.textures[be],je=Le.format,st=Le.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be);let Pe=pu(Le);if(Pe.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-z&&X>=0&&X<=b.height-V&&L.readPixels(D,X,z,V,xe.convert(je),xe.convert(st),Se)}finally{let Le=oe!==null?G.get(oe).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,D,X,z,V,Se,Ae,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(D>=0&&D<=b.width-z&&X>=0&&X<=b.height-V){_.bindFramebuffer(L.FRAMEBUFFER,Ce);let Le=b.textures[be],je=Le.format,st=Le.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be);let Pe=pu(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ft),L.bufferData(L.PIXEL_PACK_BUFFER,Se.byteLength,L.STREAM_READ),L.readPixels(D,X,z,V,xe.convert(je),xe.convert(st),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let kt=oe!==null?G.get(oe).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,kt);let wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fd(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Se),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ft),L.deleteSync(wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,X=0){let z=Math.pow(2,-X),V=Math.floor(b.image.width*z),Se=Math.floor(b.image.height*z),Ae=D!==null?D.x:0,be=D!==null?D.y:0;K.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Ae,be,V,Se),_.unbindTexture()},this.copyTextureToTexture=function(b,D,X=null,z=null,V=0,Se=0){let Ae,be,Ce,Le,je,st,Pe,ft,kt,wt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(X!==null)Ae=X.max.x-X.min.x,be=X.max.y-X.min.y,Ce=X.isBox3?X.max.z-X.min.z:1,Le=X.min.x,je=X.min.y,st=X.isBox3?X.min.z:0;else{let Ot=Math.pow(2,-V);Ae=Math.floor(wt.width*Ot),be=Math.floor(wt.height*Ot),b.isDataArrayTexture?Ce=wt.depth:b.isData3DTexture?Ce=Math.floor(wt.depth*Ot):Ce=1,Le=0,je=0,st=0}z!==null?(Pe=z.x,ft=z.y,kt=z.z):(Pe=0,ft=0,kt=0);let yt=xe.convert(D.format),Qt=xe.convert(D.type),Te;D.isData3DTexture?(K.setTexture3D(D,0),Te=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),Te=L.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),Te=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let si=_.getParameter(L.UNPACK_ROW_LENGTH),lt=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Mi=_.getParameter(L.UNPACK_SKIP_PIXELS),Vi=_.getParameter(L.UNPACK_SKIP_ROWS),_n=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),_.pixelStorei(L.UNPACK_SKIP_ROWS,je),_.pixelStorei(L.UNPACK_SKIP_IMAGES,st);let ms=b.isDataArrayTexture||b.isData3DTexture,xt=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let Ot=G.get(b),xn=G.get(D),St=G.get(Ot.__renderTarget),vn=G.get(xn.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,St.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let gs=0;gs<Ce;gs++)ms&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(b).__webglTexture,V,st+gs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(D).__webglTexture,Se,kt+gs)),L.blitFramebuffer(Le,je,Ae,be,Pe,ft,Ae,be,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||G.has(b)){let Ot=G.get(b),xn=G.get(D);_.bindFramebuffer(L.READ_FRAMEBUFFER,U),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let St=0;St<Ce;St++)ms?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,V,st+St):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,V),xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xn.__webglTexture,Se,kt+St):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xn.__webglTexture,Se),V!==0?L.blitFramebuffer(Le,je,Ae,be,Pe,ft,Ae,be,L.COLOR_BUFFER_BIT,L.NEAREST):xt?L.copyTexSubImage3D(Te,Se,Pe,ft,kt+St,Le,je,Ae,be):L.copyTexSubImage2D(Te,Se,Pe,ft,Le,je,Ae,be);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else xt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Te,Se,Pe,ft,kt,Ae,be,Ce,yt,Qt,wt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,Se,Pe,ft,kt,Ae,be,Ce,yt,wt.data):L.texSubImage3D(Te,Se,Pe,ft,kt,Ae,be,Ce,yt,Qt,wt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Se,Pe,ft,Ae,be,yt,Qt,wt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Se,Pe,ft,wt.width,wt.height,yt,wt.data):L.texSubImage2D(L.TEXTURE_2D,Se,Pe,ft,Ae,be,yt,Qt,wt);_.pixelStorei(L.UNPACK_ROW_LENGTH,si),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Mi),_.pixelStorei(L.UNPACK_SKIP_ROWS,Vi),_.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),Se===0&&D.generateMipmaps&&L.generateMipmap(Te),_.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Y=0,q=0,oe=null,_.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Mf={type:"change"},Uh={type:"start"},Sf={type:"end"},Bl=new un,bf=new ai,yv=Math.cos(70*lh.DEG2RAD),qt=new P,ui=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6,kl=class extends ta{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new _i,this._lastTargetPosition=new P,this._quat=new _i().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new P,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new P,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bv.bind(this),this._onPointerDown=Mv.bind(this),this._onPointerUp=Sv.bind(this),this._onContextMenu=Pv.bind(this),this._onMouseWheel=Tv.bind(this),this._onKeyDown=Av.bind(this),this._onTouchStart=Rv.bind(this),this._onTouchMove=Cv.bind(this),this._onMouseDown=wv.bind(this),this._onMouseMove=Ev.bind(this),this._interceptControlDown=Iv.bind(this),this._interceptControlUp=Lv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=gt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mf),this.update(),this.state=gt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ui:i>Math.PI&&(i-=ui),s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Bl.origin.copy(this.object.position),Bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bl.direction))<yv?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bl.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(Mf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qt.copy(s).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Mv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Sv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=gt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function wv(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=gt.DOLLY;break;case Di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}break;case Di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Uh)}function Ev(n){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Tv(n){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(n.preventDefault(),this.dispatchEvent(Uh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sf))}function Av(n){this.enabled!==!1&&this._handleKeyDown(n)}function Rv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=gt.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=gt.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Uh)}function Cv(n){switch(this._trackPointer(n),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=gt.NONE}}function Pv(n){this.enabled!==!1&&n.preventDefault()}function Iv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Dv=new Ki(-1,1,1,-1,0,1),Fh=class extends Mt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}},Nv=new Fh,kn=class{constructor(e){this._mesh=new Bt(Nv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zl=class extends yi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pn.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new kn(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var va=class extends yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vl=class extends yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new re);this._width=i.width,this._height=i.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zl(ar),this.copyPass.material.blending=Si,this.timer=new jr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(a instanceof va?i=!0:a instanceof Vl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gl=class extends yi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Be}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var wf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var or=class n extends yi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Vt(r,a,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Vt(r,a,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=wf;this.highPassUniforms=pn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pn.clone(ar.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,premultipliedAlpha:!0,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Be,this._oldClearAlpha=1,this._basic=new Ft,this._fsQuad=new kn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Rt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};or.BlurDirectionX=new re(1,0);or.BlurDirectionY=new re(0,1);var ya={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wl=class extends yi{constructor(){super(),this.isOutputPass=!0,this.uniforms=pn.clone(ya.uniforms),this.material=new Zs({name:ya.name,uniforms:this.uniforms,vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader}),this._fsQuad=new kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ia?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ra&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _t={sentry:{name:"N\xF6bet\xE7i",tag:"HIZLI ATI\u015E",cost:70,damage:14,rate:.48,range:3.25,color:"#9ae9cb",desc:"Seri enerji at\u0131\u015Flar\u0131. Kara ve hava hedeflerine kar\u015F\u0131 g\xFCvenilir savunma.",branches:[["Avc\u0131","%40 at\u0131\u015F h\u0131z\u0131"],["Muhaf\u0131z","%35 hasar, +0,6 menzil"]]},mortar:{name:"Havan",tag:"ALAN HASARI",cost:125,damage:48,rate:1.65,range:3.6,color:"#ffc98b",splash:1.25,ground:!0,desc:"Patlay\u0131c\u0131 mermiler kalabal\u0131klar\u0131 da\u011F\u0131t\u0131r. Yaln\u0131zca kara hedeflerini vurur.",branches:[["Napalm","B\xF6lgede yanma hasar\u0131"],["Ku\u015Fatma","%55 hasar, geni\u015F patlama"]]},frost:{name:"Kriyo",tag:"YAVA\u015ELATMA",cost:95,damage:6,rate:.75,range:2.85,color:"#8fdcff",slow:.48,desc:"So\u011Fuk dalgalar\u0131 yak\u0131ndaki d\xFC\u015Fmanlar\u0131 yava\u015Flat\u0131r. Di\u011Fer kulelerle birlikte \xE7ok etkilidir.",branches:[["Mutlak s\u0131f\u0131r","Daha g\xFC\xE7l\xFC yava\u015Flatma"],["Par\xE7alanma","Yava\u015Flayanlara ek hasar"]]},prism:{name:"Prizma",tag:"S\xDCREKL\u0130 I\u015EIN",cost:165,damage:7,rate:.13,range:3.25,color:"#dfa6ff",desc:"Kesintisiz enerji \u0131\u015F\u0131n\u0131. Ayn\u0131 hedefe odakland\u0131k\xE7a daha fazla hasar verir.",branches:[["Odak","I\u015F\u0131n hasar\u0131 %60 artar"],["Yank\u0131","\u0130kinci hedefe %45 \u0131\u015F\u0131n"]]},rail:{name:"Rayl\u0131",tag:"ZIRH DEL\u0130C\u0130",cost:190,damage:115,rate:2.1,range:5.5,color:"#ffe3a1",pierce:!0,desc:"Uzun menzilli a\u011F\u0131r at\u0131\u015F. Z\u0131rh\u0131 tamamen deler; g\xFC\xE7l\xFC hedefler i\xE7in idealdir.",branches:[["\u0130nfaz","%30 alt\u0131 cana \xE7ift hasar"],["H\u0131zland\u0131r\u0131c\u0131","%45 at\u0131\u015F h\u0131z\u0131"]]},tesla:{name:"Tesla",tag:"Z\u0130NC\u0130R \u015E\u0130M\u015EEK",cost:155,damage:25,rate:1.1,range:3.1,color:"#a8b5ff",chain:3,desc:"\u015Eim\u015Fek yak\u0131ndaki d\xFC\u015Fmanlara s\u0131\xE7rar. Her s\u0131\xE7ramada hasar biraz azal\u0131r.",branches:[["F\u0131rt\u0131na","+3 zincir hedefi"],["A\u015F\u0131r\u0131 y\xFCk","%50 hasar, k\u0131sa sersemletme"]]}},at={grunt:{name:"G\xF6lgeler",hp:52,speed:.9,reward:12,leak:1,color:"#dd728e",size:.22},fast:{name:"Ko\u015Fucular",hp:36,speed:1.65,reward:11,leak:1,color:"#f3bd72",size:.18},tank:{name:"Z\u0131rhl\u0131lar",hp:220,speed:.55,reward:28,leak:3,color:"#ac89d5",size:.31,armor:.48},flyer:{name:"G\xF6zc\xFCler",hp:65,speed:1.04,reward:16,leak:1,color:"#7ce3ee",size:.24,fly:!0},healer:{name:"\u015Eifac\u0131lar",hp:140,speed:.74,reward:24,leak:2,color:"#8ee9b6",size:.25,heal:!0},splitter:{name:"Yar\u0131lganlar",hp:140,speed:.78,reward:18,leak:2,color:"#f3a47c",size:.28,split:!0},mini:{name:"K\u0131v\u0131lc\u0131mlar",hp:32,speed:1.3,reward:4,leak:1,color:"#efac8d",size:.13},shield:{name:"Kalkanl\u0131lar",hp:220,speed:.7,reward:30,leak:2,color:"#8ba9dc",size:.27,shield:90},blinker:{name:"S\u0131\xE7rayanlar",hp:78,speed:1.05,reward:18,leak:2,color:"#c58cff",size:.2,blink:!0,note:"Her 4 saniyede rotada ileri s\u0131\xE7rar. Yava\u015Flat\u0131lm\u0131\u015Fken s\u0131\xE7rayamaz."},banner:{name:"Sancaktarlar",hp:190,speed:.66,reward:32,leak:3,color:"#ffd57a",size:.26,aura:!0,note:"Yak\u0131n\u0131ndaki d\xFC\u015Fmanlar\u0131 %28 h\u0131zland\u0131r\u0131r. \xD6nce onu vur."},boss:{name:"K\u0131\u015F\u0131n H\xFCk\xFCmdar\u0131",hp:1e3,speed:.38,reward:220,leak:12,color:"#f087a8",size:.52,boss:!0,armor:.25}},Oi=[{name:"Buzul Vadisi",label:"DENGEL\u0130 ARAZ\u0130",desc:"Geni\u015F ge\xE7itler ve kristal ormanlar\u0131.",color:"#9ae9cb",waypoints:[[0,3],[4,3],[4,7],[10,7],[10,3],[16,3]],rocks:[[3,1],[7,2],[8,5],[13,6],[14,8],[2,8],[11,9]],seed:51},{name:"Kristal Ge\xE7idi",label:"DAR BO\u011EAZLAR",desc:"Keskin virajlar, uzun savunma hatlar\u0131.",color:"#d6b5f9",waypoints:[[0,5],[3,5],[3,2],[8,2],[8,8],[13,8],[13,5],[16,5]],rocks:[[1,1],[5,4],[6,4],[10,5],[11,5],[15,2],[4,9],[11,1]],seed:89},{name:"Kutup Kalesi",label:"\xC7ET\u0130N SAVUNMA",desc:"Donmu\u015F bir kalenin son savunma hatt\u0131.",color:"#8fdcff",waypoints:[[0,2],[5,2],[5,8],[11,8],[11,2],[16,2]],rocks:[[2,5],[3,5],[7,4],[8,4],[9,4],[13,6],[14,6],[15,9],[7,10]],seed:123}],Ma=[{name:"Rahat",hp:.78,gold:550,lives:35,reward:1.15},{name:"Taktik",hp:1,gold:420,lives:25,reward:1},{name:"Usta",hp:1.3,gold:360,lives:15,reward:.95}],Oh=["\u0130lk","En g\xFC\xE7l\xFC","En yak\u0131n","En zay\u0131f","\u015Eifac\u0131 \xF6nce"],Bh=Object.keys(_t);function Tf(n){let e=[],t=6+Math.floor(n*1.6);for(let i=0;i<t;i++){let s="grunt";n>=2&&i%3===1&&(s="fast"),n>=3&&i%5===3&&(s="tank"),n>=4&&i%6===2&&(s="flyer"),n>=6&&i%6===4&&(s="splitter"),n>=7&&i%7===5&&(s="healer"),n>=8&&i%6===0&&(s="shield"),n>=5&&i%9===7&&(s="blinker"),n>=9&&i%10===5&&(s="banner"),e.push(s)}return n%5===0&&e.push("boss"),e}var Ef={heart:"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",gem:"m12 2 9 7-9 13L3 9 12 2ZM3 9h18M8 4l-1 5 5 13 5-13-1-5",waves:"M2 6c3-4 6 4 10 0s7 4 10 0M2 12c3-4 6 4 10 0s7 4 10 0M2 18c3-4 6 4 10 0s7 4 10 0",pause:"M8 5v14M16 5v14",play:"m8 4 12 8-12 8V4Z",volume:"M11 4 5 9H2v6h3l6 5V4Zm4 4c3 2 3 6 0 8m3-11c5 4 5 10 0 14",mute:"M11 4 5 9H2v6h3l6 5V4Zm5 5 6 6m0-6-6 6",settings:"m9 3-1 3-3 1-2 3 2 2-1 3 3 2 2 4h4l2-3 3-1 2-3-2-2 1-3-3-2-2-3H9ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",info:"M12 11v6m0-10v.1M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",grid:"M3 3h18v18H3V3Zm6 0v18m6-18v18M3 9h18M3 15h18",route:"M5 4v12c0 4 7 4 7 0V8c0-4 7-4 7 0v12M3 4h4m10 16h4",rotate:"M3 10a9 9 0 1 1 2 9M3 3v7h7",focus:"M3 8V3h5m8 0h5v5m0 8v5h-5M8 21H3v-5M9 12h6m-3-3v6",mouse:"M7 8a5 5 0 0 1 10 0v8a5 5 0 0 1-10 0V8Zm5-5v7m-5 0h10",crosshair:"M2 12h5m10 0h5M12 2v5m0 10v5M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z",snowflake:"M12 2v20M3 7l18 10M3 17 21 7M8 4l4 4 4-4m-8 16 4-4 4 4M3 11l5 1-1-5m14 6-5-1 1 5M3 13l5-1-1 5m14-6-5 1 1-5",close:"m6 6 12 12M6 18 18 6","arrow-right":"M4 12h16m-6-6 6 6-6 6",upload:"M12 16V3m-5 5 5-5 5 5M4 15v6h16v-6",download:"M12 3v13m-5-5 5 5 5-5M4 17v4h16v-4",mountain:"m2 20 7-15 5 9 3-6 6 12H2Zm4-8 3 2 3-3",crystal:"m12 2 6 7-2 12H8L6 9l6-7Zm0 0v20M6 9h12",castle:"M3 21V7h4V3h3v4h4V3h3v4h4v14H3Zm6 0v-6h6v6"};function ji(n){return`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${Ef[n]||Ef.gem}"/></svg>`}function kh(n){return`<svg viewBox="0 0 44 40" aria-hidden="true"><path d="${{sentry:"M9 23 22 17 35 23 22 30 9 23ZM22 6l9 6v9l-9 6-9-6v-9l9-6Zm0 5v9m0-5h15m-3-3 4 3-4 3M17 31v4m10-4v4",mortar:"M8 26 22 19 36 26 22 34 8 26ZM15 23V12l7-5 8 5v11m-15-8 7 4 8-4M22 7v12m-6-7 6-4 6 4-6 4-6-4ZM12 30v4m20-4v4",frost:"M8 28 22 21 36 28 22 35 8 28ZM22 3l8 14-8 11-8-11 8-14Zm0 0v25m-8-11h16M22 10l-4 7 4 6 4-6-4-7ZM22 35v3",prism:"M8 28 22 21 36 28 22 35 8 28ZM16 25V13l6-9 6 9v12M22 4v24m-6-15 6 4 6-4M11 9l-3-3m25 3 3-3M8 17H4m32 0h4",rail:"M8 27 22 20 36 27 22 35 8 27ZM16 24V14l6-4 8 5v9M22 10V6m0 10 15-9 3 5-15 9m10-11 3 5M13 31v4m18-4v4",tesla:"M8 28 22 21 36 28 22 35 8 28ZM16 25V13l6-4 6 4v12m-12-8 6 4 6-4M22 9V4m-8 3 8-4 8 4M13 12l9-5 9 5M9 8l-4 6 5-1-3 6m29-11 4 6-5-1 3 6"}[n]}"/></svg>`}function mn(n){let e=[];for(let t=0;t<n.waypoints.length-1;t++){let[i,s]=n.waypoints[t],[r,a]=n.waypoints[t+1];for(e.length||e.push(i+s*17);i!==r||s!==a;)i+=Math.sign(r-i),s+=Math.sign(a-s),e.push(i+s*17)}return e}function Xl(n){let e=_t[n.kind],t=1+(n.level-1)*.48,i=e.damage*t,s=e.rate,r=e.range+(n.level-1)*.18,a=e.slow,o=e.chain,l=e.splash;return n.branch==="a"&&(n.kind==="sentry"&&(s/=1.4),n.kind,n.kind==="frost"&&(a=.7),n.kind==="prism"&&(i*=1.6),n.kind==="tesla"&&(o+=3)),n.branch==="b"&&(n.kind==="sentry"&&(i*=1.35,r+=.6),n.kind==="mortar"&&(i*=1.55,l*=1.25),n.kind==="frost"&&(i*=3),n.kind==="rail"&&(s/=1.45),n.kind==="tesla"&&(i*=1.5)),{damage:i,rate:s,range:r,slow:a,chain:o,splash:l}}var di=Math.PI*2,Hh={box:new dn(1,1,1),cyl:new Cn(1,1,1,8),hex:new Cn(1,1,1,6),cone:new jn(1,1,6),orb:new Gr(1,1),crystal:new Wr(1,0),sphere:new Xr(1,10,6),torus:new qr(1,.045,5,32)},zh=new Map;function Ke(n,e=0,t=.25){let i=n+"|"+e+"|"+t;return zh.has(i)||zh.set(i,new Pn({color:n,roughness:.66,metalness:t,emissive:n,emissiveIntensity:e})),zh.get(i)}function Ti(n,e,t=0,i=0,s=0,r=1,a=r,o=r){let l=new Bt(typeof n=="string"?Hh[n]:n,e);return l.position.set(t,i,s),l.scale.set(r,a,o),l}function le(n,e,t,i,s,r,a,o,l){let c=Ti(e,t,i,s,r,a,o,l);return n.add(c),c}var Ct=n=>new P(n%17-8,0,Math.floor(n/17)-5);function Vh(n){return()=>(n=n*1664525+1013904223>>>0,n/4294967296)}var ql=class{constructor(e){this.el=e,this.time=0,this.quality="high",this.fx=[],this.rings=[],this.projectiles=[],this.beams=[],this.mapId=0,this.routeVisible=!0,this.gridVisible=!1,this.hoverCell=-1,this.renderedFrames=0,this.stormK=0,this.stormTarget=0,this.effectScale=1,this.reduceMotion=!1,this.skinColor=null,this.decals=[],this.scene=new Er,this.scene.background=new Be("#102431"),this.scene.fog=null,this.camera=new Ki(-15,15,10,-10,.1,160),this.camera.position.set(13,21,21),this.camera.lookAt(0,0,0),this.renderer=new Ul({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.7)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ts,this.renderer.toneMapping=ss,this.renderer.toneMappingExposure=1.1,this.el.appendChild(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-label","Arazi: kule kurmak i\xE7in t\u0131kla; yak\u0131nla\u015Ft\u0131rmak i\xE7in kayd\u0131r."),this.controls=new kl(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.enableRotate=!0,this.controls.mouseButtons={LEFT:null,MIDDLE:Di.PAN,RIGHT:Di.ROTATE},this.controls.touches={ONE:Ni.PAN,TWO:Ni.DOLLY_ROTATE},this.controls.minZoom=.65,this.controls.maxZoom=2.2,this.controls.minPolarAngle=.3,this.controls.maxPolarAngle=1.25,this.controls.maxDistance=65,this.controls.target.set(0,0,0),this.scene.add(new Zr("#b3dcff","#375568",2));let t=new $s("#e0f2ff",3.2);t.position.set(-7,16,5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-14,t.shadow.camera.right=14,t.shadow.camera.top=12,t.shadow.camera.bottom=-12,t.shadow.camera.near=1,t.shadow.camera.far=50,t.shadow.bias=-5e-4,t.shadow.normalBias=.035,t.shadow.radius=3,this.scene.add(t),this.sun=t;let i=new $s("#72edce",1.3);i.position.set(5,6,-12),this.scene.add(i),this.composer=new Hl(this.renderer),this.composer.addPass(new Gl(this.scene,this.camera)),this.bloom=new or(new re(800,600),.32,.65,1.05),this.composer.addPass(this.bloom),this.composer.addPass(new Wl),this.environment=new Nt,this.scene.add(this.environment),this.terrain=new Nt,this.scene.add(this.terrain),this.routeGroup=new Nt,this.scene.add(this.routeGroup),this.units=new Nt,this.scene.add(this.units),this.particleGroup=new Nt,this.scene.add(this.particleGroup),this.makeAtmosphere(),this.grid=new ea(17,17,"#a4dfde","#7db3c9"),this.grid.position.y=.045,this.grid.scale.z=11/17,this.grid.material.transparent=!0,this.grid.material.opacity=.2,this.grid.visible=!1,this.scene.add(this.grid),this.highlight=Ti(new Cn(.47,.47,.025,6),new Ft({color:"#9ae9cb",transparent:!0,opacity:.5,depthWrite:!1}),0,.06,0),this.highlight.visible=!1,this.scene.add(this.highlight),this.rangeDisc=Ti(new es(.985,1,96),new Ft({color:"#9ae9cb",transparent:!0,opacity:.6,side:Jt,depthWrite:!1}),0,.1,0),this.rangeDisc.rotation.x=-Math.PI/2,this.rangeDisc.visible=!1,this.scene.add(this.rangeDisc),this.rangeFill=Ti(new Ws(1,80),new Ft({color:"#9ae9cb",transparent:!0,opacity:.035,side:Jt,depthWrite:!1}),0,.08,0),this.rangeFill.rotation.x=-Math.PI/2,this.rangeFill.visible=!1,this.scene.add(this.rangeFill),this.aimRing=Ti(new es(.96,1,64),new Ft({color:"#ffc991",transparent:!0,opacity:.9,side:Jt,depthWrite:!1}),0,.15,0),this.aimRing.rotation.x=-Math.PI/2,this.aimRing.visible=!1,this.scene.add(this.aimRing),this.raycaster=new Qr,this.plane=new ai(new P(0,1,0),0),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.buildMap(0)}makeAtmosphere(){let e=Vh(88),t=[];for(let M=0;M<220;M++)t.push((e()-.5)*65,4+e()*22,-18-e()*25);let i=new Mt;i.setAttribute("position",new $e(t,3)),this.stars=new Gs(i,new Jn({size:.055,color:"#c0ebff",transparent:!0,opacity:.7,sizeAttenuation:!0}));let s=[];for(let M=0;M<250;M++)s.push((e()-.5)*28,e()*15,(e()-.5)*20);let r=new Mt;r.setAttribute("position",new $e(s,3)),this.snow=new Gs(r,new Jn({color:"#d5f1ff",size:.035,transparent:!0,opacity:.55,depthWrite:!1})),this.environment.add(this.snow),this.auroraMat=new Rt({transparent:!0,depthWrite:!1,blending:is,side:Jt,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*.4+time*.13)*1.2;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"varying vec2 vUv;uniform float time;void main(){float y=vUv.y;float band=sin(vUv.x*8.+sin(vUv.x*15.+time*.15)*.5+time*.07)*.13+.48;float a=exp(-pow((y-band)*4.5,2.))*.7;float strips=.5+.5*sin(vUv.x*180.+sin(time*.1+vUv.x*30.)*3.);vec3 col=mix(vec3(.18,.75,.57),vec3(.35,.28,.7),smoothstep(.35,.8,vUv.x));gl_FragColor=vec4(col,a*(.65+strips*.35)*sin(vUv.x*3.14159));}"});let a=new Rt({uniforms:{time:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vP,1.);}",fragmentShader:"varying vec3 vP;uniform float time;float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}void main(){vec2 p=vP.xz;float r=length(p*vec2(.58,.82));vec3 base=mix(vec3(.04,.12,.17),vec3(.015,.045,.085),smoothstep(7.,30.,r));float w=n(p*.22+vec2(time*.035,-time*.02))*.7+n(p*.55-time*.03)*.3;float band=smoothstep(.38,.78,w);vec3 aur=mix(vec3(.12,.82,.58),vec3(.46,.28,.82),n(p*.08+7.));float glow=exp(-r*.085);vec3 col=base+aur*band*glow*.5;float s=step(.9965,h(floor(p*9.)));col+=vec3(.7,.9,1.)*s*smoothstep(8.,18.,r)*.8;float shore=smoothstep(11.,6.5,r);col+=vec3(.08,.28,.32)*shore*.5;gl_FragColor=vec4(col*.2,1.);}"});this.floorMat=a;let o=Ti(new Zi(220,220),a,0,-2.1,0);o.rotation.x=-Math.PI/2,this.environment.add(o),this.curtains=[];for(let[M,w,x,S,E]of[[-6,10,-26,.25,70],[12,12,-30,-.2,60],[-30,11,4,Math.PI/2-.15,56]]){let C=new Bt(new Zi(E,14,64,1),this.auroraMat);C.position.set(M,w,x),C.rotation.y=S,C.renderOrder=-1,this.environment.add(C),this.curtains.push(C)}let l=Vh(404),c=[];for(let M=0;M<26;M++){let w=Math.PI*(.95+l()*1.1),x=24+l()*18;c.push([Math.cos(w)*x,Math.sin(w)*x*.9,3+l()*7,2+l()*3.5])}for(let M=0;M<8;M++)c.push([24+l()*14,-6+l()*20,3+l()*5,2+l()*3]);let h=new Tn(new jn(1,1,5),new Pn({color:"#ffffff",roughness:.9,flatShading:!0}),c.length),d=new Ut;c.forEach(([M,w,x,S],E)=>{d.position.set(M,-2.1+x/2-.4,w),d.scale.set(S,x,S),d.rotation.set(0,l()*3,0),d.updateMatrix(),h.setMatrixAt(E,d.matrix),h.setColorAt(E,new Be().setHSL(.56+l()*.03,.28,.2+l()*.1))}),h.receiveShadow=!1,this.environment.add(h);let u=new Tn(new jn(1,1,5),new Pn({color:"#cfe9f2",roughness:.8,flatShading:!0}),c.length);c.forEach(([M,w,x,S],E)=>{d.position.set(M,-2.1+x*.84-.4,w),d.scale.set(S*.36,x*.34,S*.36),d.updateMatrix(),u.setMatrixAt(E,d.matrix)}),this.environment.add(u);let f=document.createElement("canvas");f.width=f.height=128;let g=f.getContext("2d"),y=g.createRadialGradient(64,64,4,64,64,62);y.addColorStop(0,"rgba(190,230,240,.55)"),y.addColorStop(1,"rgba(190,230,240,0)"),g.fillStyle=y,g.fillRect(0,0,128,128);let m=new Ir(f),p=new Ft({map:m,transparent:!0,opacity:.32,depthWrite:!1});this.mist=[];for(let M=0;M<12;M++){let w=M/12*di,x=new Bt(new Zi(9,4),p);x.rotation.x=-Math.PI/2,x.position.set(Math.cos(w)*11.2,-1.1,Math.sin(w)*7.3),x.userData.a=w,x.userData.ph=M,this.environment.add(x),this.mist.push(x)}}setStorm(e){this.stormTarget=e?1:0}setEffectScale(e){this.effectScale=e}setReduceMotion(e){this.reduceMotion=e,this.snow.visible=!e&&this.quality!=="low"}setSkin(e){this.skinColor=e;let t=this.core?.userData.coreCrystal;t&&(t.material=Ke(e||"#9ae9cb",1.65,.3));for(let i of this.units.children)i.userData.skinRing&&(i.userData.skinRing.visible=!!e,e&&(i.userData.skinRing.material=Ke(e,2.2,.3)))}showRule(e){this.ruleGroup&&(this.terrain.remove(this.ruleGroup),this.ruleGroup=null),this.ruleNodes=[];let t=new Nt;if(this.terrain.add(t),this.ruleGroup=t,!!e)for(let i of e.cells){let s=Ct(i);if(e.kind==="ice"){let r=le(t,"box",new Pn({color:"#bdeeff",emissive:"#6cc8ff",emissiveIntensity:.55,transparent:!0,opacity:.72,roughness:.08,metalness:.4}),s.x,.06,s.z,.94,.03,.94);r.receiveShadow=!0;for(let a=0;a<2;a++)le(t,"box",Ke("#eaf9ff",1.2),s.x+(a?.14:-.2),.09,s.z+(a?-.2:.1),.34,.012,.016).rotation.y=a?.7:-.5}else if(e.kind==="node"){le(t,"hex",Ke("#3a2d63",0,.5),s.x,.05,s.z,.44,.08,.44);let r=le(t,"torus",Ke("#c3a1ff",2.2,.3),s.x,.12,s.z,.4,.4,.4);r.rotation.x=Math.PI/2;let a=le(t,"crystal",Ke("#b98cff",1.8,.2),s.x,.3,s.z,.1,.2,.1);this.ruleNodes.push({r,c:a,ph:i})}}}resize(){let e=this.el.clientWidth||1e3,t=this.el.clientHeight||650,i=e/t,s=i<1?23/i:Math.max(13.8,25/i);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.el.clientWidth<600&&!this.mobile?(this.mobile=!0,this.resetCamera()):this.el.clientWidth>=600&&this.mobile&&(this.mobile=!1,this.resetCamera())}resetCamera(){this.camera.zoom=1,this.camera.position.set(this.mobile?3:12,21,this.mobile?24:21),this.controls.target.set(0,0,0),this.camera.updateProjectionMatrix(),this.controls.update()}rotate(){let e=this.camera.position.clone().sub(this.controls.target);e.applyAxisAngle(new P(0,1,0),Math.PI/2),this.camera.position.copy(this.controls.target).add(e),this.controls.update()}setQuality(e){this.quality=e,this.renderer.setPixelRatio(Math.min(devicePixelRatio,e==="high"?1.7:e==="medium"?1.25:1)),this.renderer.shadowMap.enabled=e!=="low",this.bloom.enabled=e==="high",this.snow.visible=e!=="low"&&!this.reduceMotion,this.resize()}clearGroup(e){for(;e.children.length;){let t=e.children[0];e.remove(t),t.traverse(i=>{i.userData.disposeGeo&&i.geometry?.dispose(),i.userData.disposeMat&&i.material?.dispose()})}}buildMap(e){this.mapId=e,this.clearGroup(this.terrain),this.clearGroup(this.routeGroup),this.clearGroup(this.units),this.clearEffects(),this.map=Oi[e];let t=Vh(this.map.seed),i=new Set(mn(this.map));this.tiles=[],this.blocked=new Set(this.map.rocks.map(([M,w])=>M+w*17));let s=new qs,r=18.3,a=12.3,o=.65;s.moveTo(-r/2+o,-a/2),s.lineTo(r/2-o,-a/2),s.quadraticCurveTo(r/2,-a/2,r/2,-a/2+o),s.lineTo(r/2,a/2-o),s.quadraticCurveTo(r/2,a/2,r/2-o,a/2),s.lineTo(-r/2+o,a/2),s.quadraticCurveTo(-r/2,a/2,-r/2,a/2-o),s.lineTo(-r/2,-a/2+o),s.quadraticCurveTo(-r/2,-a/2,-r/2+o,-a/2);let l=new Hr(s,{depth:1.1,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.22,bevelThickness:.25});l.rotateX(-Math.PI/2);let c=Ti(l,Ke("#253e51",0,.15),0,-1.35,0);c.userData.disposeGeo=!0,c.castShadow=!0,c.receiveShadow=!0,this.terrain.add(c);let h=new dn(.985,.16,.985),d=Ke(e===1?"#8fa9c4":e===2?"#97b9c7":"#a5c4cc",0,.06),u=new Tn(h,d,187);u.userData.disposeGeo=!0,u.receiveShadow=!0;let f=new Ut;for(let M=0;M<187;M++){let w=Ct(M);f.position.set(w.x,-.06,w.z),f.rotation.set(0,0,0),f.updateMatrix(),u.setMatrixAt(M,f.matrix);let x=new Be().setHSL(.53+t()*.035,.16+t()*.06,.6+t()*.08);u.setColorAt(M,x),this.tiles.push(w)}this.tileMesh=u,this.terrain.add(u);for(let M=0;M<65;M++){let w=M%4,x,S;w<2?(x=(t()-.5)*18,S=(w?1:-1)*(5.85+t()*.4)):(x=(w===2?1:-1)*(8.9+t()*.35),S=(t()-.5)*12),le(this.terrain,"orb",Ke(M%3?"#344d61":"#557689"),x,-.75-t()*.4,S,.3+t()*.65,.4+t()*.5,.25+t()*.45).rotation.set(t(),t(),t())}let g=Ke("#1b4b50"),y=Ke("#286269"),m=Ke("#c4dce0"),p=(M,w,x=1)=>{let S=new Nt;S.position.set(M,.04,w),S.scale.setScalar(x),le(S,"cyl",Ke("#53616b"),0,.33,0,.07,.65,.07);for(let E=0;E<3;E++){let C=.43-E*.09,v=.55+E*.32,T=le(S,"cone",E%2?y:g,0,v,0,C,.83,C);T.castShadow=!0;let I=le(S,"cone",m,0,v+.14,0,C*.81,.57,C*.81);I.castShadow=!0}this.terrain.add(S)};for(let M=0;M<36;M++){let w=M%4,x,S;w<2?(x=-8+t()*16,S=(w?1:-1)*(5.1+t()*.55)):(x=(w===2?1:-1)*(8.2+t()*.35),S=-5+t()*10);let E=!1;for(let C of[mn(this.map)[0],mn(this.map).at(-1)])Ct(C).distanceTo(new P(x,0,S))<1.5&&(E=!0);E||p(x,S,.65+t()*.65)}for(let M of this.blocked){let w=Ct(M);for(let x=0;x<3;x++){let S=le(this.terrain,"orb",Ke(x?"#7296a9":"#527187"),w.x+(t()-.5)*.4,.15+t()*.1,w.z+(t()-.5)*.4,.25+t()*.3,.22+t()*.3,.25+t()*.2);S.rotation.set(t(),t(),t()),S.castShadow=!0}if(M%3===0){let x=le(this.terrain,"crystal",Ke(e===1?"#bd95ea":"#83d9df",1.1),w.x,.55,w.z,.15,.63,.15);x.rotation.z=.18}}for(let M=0;M<27;M++){let w=Math.floor(t()*17*11);if(i.has(w)||this.blocked.has(w))continue;let x=Ct(w),S=le(this.terrain,"cone",Ke("#68999e"),x.x+(t()-.5)*.6,.08,x.z+(t()-.5)*.6,.06,.2,.06);S.rotation.z=(t()-.5)*.4}this.buildDetail(e,t,i),this.makeGate(mn(this.map)[0],!1),this.makeGate(mn(this.map).at(-1),!0),this.resetCamera()}instanced(e,t,i,s=null){let r=new Tn(s||Hh[e],t,i.length),a=new Ut;return i.forEach((o,l)=>{a.position.set(o.x,o.y,o.z),a.scale.set(o.sx,o.sy??o.sx,o.sz??o.sx),a.rotation.set(o.rx||0,o.ry||0,o.rz||0),a.updateMatrix(),r.setMatrixAt(l,a.matrix),o.c&&r.setColorAt(l,new Be(o.c))}),r.castShadow=!0,r.receiveShadow=!0,this.terrain.add(r),r}buildDetail(e,t,i){let s=[];for(let f=0;f<187;f++)!i.has(f)&&!this.blocked.has(f)&&s.push(f);let r=[];for(let f=0;f<46;f++){let g=Ct(s[Math.floor(t()*s.length)]);r.push({x:g.x+(t()-.5)*.7,y:.03,z:g.z+(t()-.5)*.7,sx:.22+t()*.3,sy:.05+t()*.08,sz:.16+t()*.24,ry:t()*3})}this.instanced("orb",Ke("#dcf1f6",0,.02),r);let a=[];for(let f=0;f<38;f++){let g=Ct(s[Math.floor(t()*s.length)]),y=g.x+(t()-.5)*.5,m=g.z+(t()-.5)*.5,p=t()*di;for(let M=0;M<3;M++){let w=y+Math.cos(p)*(.12+t()*.18),x=m+Math.sin(p)*(.12+t()*.18);a.push(y,.026,m,w,.026,x),y=w,m=x,p+=(t()-.5)*1.2}}let o=new Mt;o.setAttribute("position",new $e(a,3));let l=new Hs(o,new An({color:e===1?"#6a62b5":"#3d7f98",transparent:!0,opacity:.75}));l.userData.disposeGeo=!0,l.userData.disposeMat=!0,l.position.y=.09,this.terrain.add(l);let c=[],h=[],d=[];for(let f=0;f<70;f++){let g=f%4,y,m;g<2?(y=(t()-.5)*18.2,m=(g?1:-1)*(6.15+t()*.35)):(y=(g===2?1:-1)*(9.1+t()*.3),m=(t()-.5)*12.2);let p=g===1||g===2,M=(.35+t()*.8)*(p?.55:1);c.push({x:y,y:-.15+M/2-.4,z:m,sx:.09+t()*.1,sy:M,sz:.09+t()*.1,rz:(t()-.5)*.3,rx:(t()-.5)*.3,ry:t()*3})}for(let f=0;f<20;f++){let g=f%4,y,m;g<2?(y=(t()-.5)*17,m=(g?1:-1)*6.3):(y=(g===2?1:-1)*9.25,m=(t()-.5)*11);let p=(.7+t()*.9)*(g===1||g===2?.6:1);d.push({x:y*1.02,y:-.1+p/2-.5,z:m*1.02,sx:.4+t()*.3,sy:p,sz:.38+t()*.3,ry:t()*3}),f%2===0&&h.push({x:y*1.03,y:-.55-t()*.25,z:m*1.03,sx:.05,sy:.45+t()*.55,sz:.05,rz:(t()-.5)*.9,ry:t()*3})}this.instanced("crystal",Ke(e===1?"#b794f0":"#8fe3f0",1.1,.2),c),this.instanced("cyl",Ke("#2e4658",0,.5),d),this.instanced("crystal",Ke(e===2?"#ffd6a1":"#7cf0cf",2,.2),h);let u=[];for(let f=0;f<16;f++){let g=Ct(s[Math.floor(t()*s.length)]);u.push({x:g.x+(t()-.5)*.7,y:.14,z:g.z+(t()-.5)*.7,sx:.04+t()*.03,sy:.14+t()*.16,sz:.04+t()*.03,rz:(t()-.5)*.6})}this.instanced("crystal",Ke(e===1?"#c8a6ff":"#93f1e0",1.6,.2),u)}makeGate(e,t){let i=Ct(e),s=new Nt;s.position.copy(i),this.terrain.add(s);let r=Ke("#365766",0,.6),a=Ke(t?"#9ae9cb":"#e993b6",1.65,.3),o=Ke("#bed4dc");if(t){le(s,"cyl",r,0,.08,0,.65,.23,.65),le(s,"cyl",Ke("#668c95",0,.45),0,.24,0,.44,.15,.44);let l=le(s,"crystal",a,0,1,0,.3,.8,.3);s.userData.coreCrystal=l;for(let d=0;d<3;d++){let u=d*di/3,f=le(s,"box",r,Math.cos(u)*.4,.68,Math.sin(u)*.4,.12,.7,.12);f.rotation.y=-u}let c=le(s,"torus",a,0,.35,0,.55,.55,.55);c.rotation.x=Math.PI/2;let h=new Jr("#8af8dc",6,3,2);h.position.y=1,s.add(h),this.core=s}else{for(let c=0;c<2;c++)le(s,"box",r,0,.57,(c?1:-1)*.5,.4,1.2,.3),le(s,"box",o,0,1.2,(c?1:-1)*.5,.44,.12,.36),le(s,"crystal",a,0,1.4,(c?1:-1)*.5,.12,.28,.12);le(s,"box",r,0,1.15,0,.4,.24,1.3);let l=Ti(new Zi(.8,.95),new Ft({color:"#bd6f94",transparent:!0,opacity:.3,side:Jt}),0,.6,0);l.rotation.y=Math.PI/2,l.userData.disposeGeo=!0,l.userData.disposeMat=!0,s.add(l),this.gate=s}}updateRoute(e){this.clearGroup(this.routeGroup);let t=Ke("#477b89",.08,.35),i=Ke("#a2e7dd",.7,.25);for(let s=0;s<e.length;s++){let r=Ct(e[s]),a=le(this.routeGroup,"cyl",t,r.x,.026,r.z,.27,.016,.27);if(a.receiveShadow=!0,s<e.length-1){let o=Ct(e[s+1]),l=r.clone().add(o).multiplyScalar(.5),c=le(this.routeGroup,"box",t,l.x,.026,l.z,r.x===o.x?.54:1.02,.018,r.z===o.z?.54:1.02);c.receiveShadow=!0;let h=le(this.routeGroup,"box",i,l.x,.044,l.z,r.x===o.x?.055:.27,.012,r.z===o.z?.055:.27);h.rotation.y=0}}this.routeGroup.visible=this.routeVisible}makeTower(e){let t=_t[e.kind],i=new Nt,s=Ct(e.cell);i.position.copy(s),i.scale.setScalar(1.32),this.units.add(i);let r=Ke("#344e5d",0,.6),a=Ke("#577785",0,.55),o=Ke(t.color,1.4,.3),l=Ke("#182b38",0,.6);le(i,"hex",l,0,.12,0,.4,.24,.4).castShadow=!0,le(i,"hex",a,0,.27,0,.34,.13,.34);let c=le(i,"torus",o,0,.27,0,.33,.33,.33);c.rotation.x=Math.PI/2;for(let g=0;g<3;g++){let y=g*di/3;le(i,"box",r,Math.cos(y)*.32,.16,Math.sin(y)*.32,.17,.24,.17).rotation.y=-y}let h=new Nt;h.position.y=.4,i.add(h);let d=new Nt;h.add(d);let u;if(e.kind==="sentry"&&(le(d,"cyl",r,0,.08,0,.2,.21,.2),le(d,"box",a,0,.22,0,.27,.21,.32),u=le(d,"box",l,0,.23,.26,.12,.12,.4),le(d,"box",o,0,.23,.46,.09,.075,.025),le(d,"box",o,-.145,.23,0,.02,.11,.19),le(d,"box",o,.145,.23,0,.02,.11,.19)),e.kind==="mortar"){le(d,"hex",r,0,.11,0,.28,.22,.28);let g=le(d,"cyl",l,0,.31,.05,.15,.48,.15);g.rotation.x=.5,u=le(d,"torus",o,0,.52,.16,.15,.15,.15),u.rotation.x=.5+Math.PI/2,le(d,"box",a,-.23,.22,0,.09,.22,.25),le(d,"box",a,.23,.22,0,.09,.22,.25)}if(e.kind==="frost"){le(d,"cyl",r,0,.08,0,.18,.2,.18),u=le(d,"crystal",o,0,.45,0,.19,.42,.19);for(let g=0;g<3;g++){let y=g*di/3,m=le(d,"crystal",Ke("#5a90a6",.15,.4),Math.cos(y)*.24,.2,Math.sin(y)*.24,.08,.22,.08);m.rotation.z=.2}}if(e.kind==="prism"){le(d,"hex",r,0,.23,0,.2,.45,.2);for(let y=0;y<3;y++){let m=y*di/3;le(d,"box",a,Math.cos(m)*.22,.3,Math.sin(m)*.22,.09,.6,.09).rotation.z=Math.cos(m)*.13}u=le(d,"crystal",o,0,.66,0,.17,.24,.17);let g=le(d,"torus",o,0,.5,0,.3,.3,.3);g.rotation.x=1.15}if(e.kind==="rail"){le(d,"box",r,0,.15,0,.3,.3,.38),le(d,"box",l,0,.25,.22,.14,.13,.75);for(let g=0;g<2;g++)le(d,"box",o,(g?1:-1)*.1,.25,.26,.025,.09,.7);u=le(d,"box",a,0,.25,.62,.25,.18,.12),le(d,"box",o,0,.26,.69,.12,.07,.02)}if(e.kind==="tesla"){le(d,"cyl",r,0,.29,0,.09,.6,.09);for(let g=0;g<3;g++){let y=le(d,"torus",g===2?o:a,0,.15+g*.16,0,.24-g*.035,.24-g*.035,.24-g*.035);y.rotation.x=Math.PI/2}u=le(d,"orb",o,0,.65,0,.13)}e.mesh=i,e.turret=h,e.emitter=u,e.visualCore=d;let f=le(i,"torus",Ke(this.skinColor||"#ffffff",2.2,.3),0,.31,0,.4,.4,.4);return f.rotation.x=Math.PI/2,f.visible=!!this.skinColor,i.userData.skinRing=f,i.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),this.decorate(e),i}decorate(e){let t=1+(e.level-1)*.07;if(e.visualCore.scale.setScalar(t),e.ornament&&(e.mesh.remove(e.ornament),e.ornament=null),e.level<3)return;let i=new Nt;i.userData.spin=!0;let s=e.branch==="a"?"#ffb36b":e.branch==="b"?"#8ad7ff":_t[e.kind].color,r=Ke(s,2.1,.3);for(let a=0;a<2;a++){let o=a*Math.PI;le(i,e.branch==="a"?"crystal":"box",r,Math.cos(o)*.36,.55,Math.sin(o)*.36,.06,e.branch==="a"?.16:.06,.06).rotation.set(.4,o,.3)}if(e.level>=4){let a=le(i,"torus",r,0,.9,0,.3,.3,.3);a.rotation.x=Math.PI/2}if(e.level>=5){for(let o=0;o<5;o++){let l=o/5*di,c=le(i,"cone",Ke("#fff2c4",2.6,.3),Math.cos(l)*.17,1.13,Math.sin(l)*.17,.05,.2,.05);c.rotation.z=Math.cos(l)*-.2,c.rotation.x=Math.sin(l)*.2}let a=le(i,"torus",Ke("#fff2c4",2.6,.3),0,1.04,0,.19,.19,.19);a.rotation.x=Math.PI/2}e.ornament=i,e.mesh.add(i)}upgradeTower(e){this.decorate(e);let t=_t[e.kind].color;this.burst(e.mesh.position.x,.7,e.mesh.position.z,t,e.level>=5?44:20),this.ring(e.mesh.position.x,e.mesh.position.z,t,1,.7),e.level>=5&&this.ring(e.mesh.position.x,e.mesh.position.z,"#fff2c4",1.6,.9)}removeTower(e){this.units.remove(e.mesh)}makeEnemy(e){let t=at[e.kind],i=new Nt;i.scale.setScalar(t.boss?1.15:1.35),i.position.set(e.x,0,e.z),this.units.add(i);let s=new Nt;i.add(s);let r=Ke(e.kind==="tank"?"#635c7f":"#384556",0,.6),a=Ke(t.color,1.25,.2),o=Ke("#222c40",0,.5),l=t.size,c,h=[];if(t.fly){le(s,"crystal",r,0,.1,0,l,.15,l*.7);for(let y=0;y<2;y++)le(s,"box",r,(y?1:-1)*.33,.1,0,.44,.05,.17),le(s,"box",a,(y?1:-1)*.48,.14,0,.05,.06,.12);le(s,"sphere",a,0,.05,.12,.07),s.position.y=.9}else if(t.boss){le(s,"orb",r,0,.48,0,.49,.47,.42),le(s,"crystal",a,0,.6,0,.19,.43,.19);for(let p=0;p<4;p++){let M=p*di/4+.7,w=le(s,"cone",o,Math.cos(M)*.48,.22,Math.sin(M)*.4,.13,.65,.13);w.rotation.z=Math.cos(M)*-.55,w.rotation.x=Math.sin(M)*.5,w.userData.base=[w.rotation.x,w.rotation.z],h.push(w)}for(let p=0;p<6;p++){let M=p*di/6,w=le(s,"cone",a,Math.cos(M)*.32,1.02,Math.sin(M)*.32,.05,.3,.05);w.rotation.z=Math.cos(M)*-.35,w.rotation.x=Math.sin(M)*.35}le(s,"sphere",Ke("#fff0c2",3,.1),0,.55,.42,.08);for(let p=0;p<2;p++)le(s,"crystal",a,(p?1:-1)*.58,.65,.05,.1,.34,.1).rotation.z=(p?-1:1)*.5;let y=new Ft({color:"#9fc2ff",wireframe:!0,transparent:!0,opacity:.28}),m=le(i,"sphere",y,0,.55,0,.82,.8,.82);m.userData.disposeMat=!0,e.shieldMesh=m;for(let p=0;p<3;p++)le(s,"crystal",a,(p-1)*.25,1,0,.065,.18+.1*(p===1),.065);c=le(s,"torus",a,0,.67,0,.65,.65,.65),c.rotation.x=Math.PI/2}else if(e.kind==="blinker"){le(s,"crystal",r,0,.3,0,l,l*1.5,l*.8),le(s,"crystal",a,0,.3,0,l*.5,l*1.1,l*.4),c=le(s,"torus",a,0,.3,0,.3,.3,.3),c.rotation.x=Math.PI/2.4;for(let y=0;y<2;y++)le(s,"crystal",a,(y?1:-1)*.22,.45,-.1,.045,.2,.045).rotation.z=(y?-1:1)*.6}else if(e.kind==="banner"){le(s,"box",r,0,.22,0,l*1.5,.34,l*1.5),le(s,"cyl",o,0,.7,0,.02,.9,.02),le(s,"box",a,.12,.98,0,.24,.2,.015);let y=le(i,"torus",Ke(t.color,1.2,.1),0,.06,0,2.4,2.4,2.4);y.rotation.x=Math.PI/2,y.material=new Ft({color:t.color,transparent:!0,opacity:.35,depthWrite:!1}),y.userData.disposeMat=!0,e.auraRing=y;for(let m=0;m<4;m++){let p=m*di/4+.6,M=le(s,"box",o,Math.cos(p)*l,.08,Math.sin(p)*l,.05,.18,.05);M.userData.base=[0,0],h.push(M)}}else if(e.kind==="tank"||e.kind==="shield")le(s,"box",r,0,.25,0,l*1.7,.42,l*1.8),le(s,"box",o,-l,.12,0,.14,.22,l*2),le(s,"box",o,l,.12,0,.14,.22,l*2),le(s,"crystal",a,0,.52,0,l*.5,l*.6,l*.5),le(s,"box",a,0,.28,l,.2,.06,.03);else if(e.kind==="healer")le(s,"crystal",r,0,.36,0,l,.35,l),c=le(s,"torus",a,0,.4,0,.32,.32,.32),c.rotation.x=Math.PI/3,le(s,"sphere",a,0,.4,0,.1);else if(e.kind==="splitter"){le(s,"orb",r,0,.3,0,l,l,l);for(let y=0;y<4;y++){let m=y*di/4,p=le(s,"crystal",a,Math.cos(m)*l,.3,Math.sin(m)*l,.08,.2,.08);p.rotation.z=Math.cos(m)*.5}}else{le(s,"orb",r,0,.25,0,l,l*.8,l*1.2),le(s,"crystal",a,0,.36,0,l*.55,l*.7,l*.55);for(let y=0;y<4;y++){let m=y*di/4+.6,p=le(s,"box",o,Math.cos(m)*l,.1,Math.sin(m)*l,.055,.22,.055);p.rotation.z=Math.cos(m)*.5,p.userData.base=[0,p.rotation.z],h.push(p)}le(s,"box",a,0,.25,l,.15,.04,.035)}if(t.shield){let y=new Ft({color:t.color,wireframe:!0,transparent:!0,opacity:.2}),m=le(i,"sphere",y,0,.3,0,.42,.52,.42);m.userData.disposeMat=!0,e.shieldMesh=m}let d=new Nt;d.position.y=t.fly?1.55:t.boss?1.45:.88,i.add(d);let u=le(d,"box",new Ft({color:"#172331"}),0,0,0,t.boss?.95:.48,.046,.014);u.userData.disposeMat=!0;let f=le(d,"box",new Ft({color:t.color}),0,0,.01,t.boss?.9:.44,.026,.014);f.userData.disposeMat=!0,f.userData.width=t.boss?.9:.44,e.health=f,e.healthBar=d,e.mesh=i,e.body=s,e.rotor=c,e.legs=h;let g=le(i,"torus",new Ft({color:"#ffd57a"}),0,t.fly?1.25:.75,0,.16,.16,.16);return g.rotation.x=Math.PI/2,g.visible=!1,g.userData.disposeMat=!0,e.buffMark=g,i.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),i}removeEnemy(e){e.mesh&&(this.units.remove(e.mesh),e.mesh.traverse(t=>{t.userData.disposeMat&&t.material.dispose()}))}setHover(e,t,i,s="#9ae9cb"){if(this.hoverCell=e,e<0){this.highlight.visible=!1;return}let r=Ct(e);this.highlight.position.set(r.x,.07,r.z),this.highlight.visible=!0,this.highlight.material.color.set(t?s:"#f19098"),this.highlight.material.opacity=t?.38:.55}showRange(e,t,i="#9ae9cb"){if(this.rangeDisc.visible=e>=0,this.rangeFill.visible=e>=0,e<0)return;let s=Ct(e);for(let r of[this.rangeDisc,this.rangeFill])r.position.set(s.x,r===this.rangeDisc?.12:.1,s.z),r.scale.set(t,t,1),r.material.color.set(i)}aim(e,t,i,s){this.aimRing.visible=!0,this.aimRing.position.set(e,.16,t),this.aimRing.scale.set(i,i,1),this.aimRing.material.color.set(s)}point(e,t){let i=this.renderer.domElement.getBoundingClientRect(),s=new re((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1);this.raycaster.setFromCamera(s,this.camera);let r=new P;if(!this.raycaster.ray.intersectPlane(this.plane,r))return null;let a=Math.round(r.x)+8,o=Math.round(r.z)+5;return{x:r.x,z:r.z,col:a,row:o,cell:a>=0&&a<17&&o>=0&&o<11?a+o*17:-1}}projectCell(e){let t=Ct(e);t.y=.1,t.project(this.camera);let i=this.renderer.domElement.getBoundingClientRect();return{x:i.left+(t.x+1)/2*i.width,y:i.top+(-t.y+1)/2*i.height}}ring(e,t,i,s=1,r=.45){if(this.rings.length>40)return;let a=Ti(new es(.92,1,48),new Ft({color:i,transparent:!0,opacity:.9,side:Jt,depthWrite:!1}),e,.15,t);a.rotation.x=-Math.PI/2,this.particleGroup.add(a),this.rings.push({mesh:a,age:0,life:r,r:s})}decal(e,t,i,s,r,a={}){if(this.decals.length>24)return;let o=new Bt(new Ws(1,28),new Ft({color:i,transparent:!0,opacity:a.opacity??.5,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.set(e,.07+(a.lift||0),t),o.scale.set(s,s,1),this.particleGroup.add(o),this.decals.push({mesh:o,age:0,life:r,o:a.opacity??.5})}frostGround(e,t,i){if(this.decal(e,t,"#bff0ff",i,1.4,{opacity:.32,lift:0}),this.quality!=="low")for(let s=0;s<4;s++){let r=Math.random()*di,a=Math.random()*i*.8;this.burst(e+Math.cos(r)*a,.1,t+Math.sin(r)*a,"#d6f6ff",1)}}scorch(e,t,i){this.decal(e,t,"#1b1411",i*.9,3.2,{opacity:.55,lift:.005}),this.decal(e,t,"#ff8d4a",i*.55,.5,{opacity:.55,lift:.01})}trail(e,t,i){this.beam(e,t,i,.05,.38);let s=this.quality==="low"?3:8;for(let r=0;r<s;r++)this.burst(e.x+(t.x-e.x)*(r/s),e.y+(t.y-e.y)*(r/s),e.z+(t.z-e.z)*(r/s),i,1)}burst(e,t,i,s,r=12){r=this.quality==="low"?Math.min(8,r):r,r=Math.max(r>0?1:0,Math.round(r*this.effectScale));for(let a=0;a<r&&this.fx.length<380;a++){let o=Math.random()*di,l=.4+Math.random()*2.5,c=Ti("box",Ke(s,1.6),e,t,i,.025+Math.random()*.035);this.particleGroup.add(c),this.fx.push({mesh:c,vx:Math.cos(o)*l,vy:1+Math.random()*2,vz:Math.sin(o)*l,life:.3+Math.random()*.5,age:0})}}beam(e,t,i,s=.025,r=.13,a=!1){if(a&&this.quality!=="low"&&this.effectScale>.5)for(let d=0;d<2;d++){let u=e.clone().lerp(t,.25+Math.random()*.5),f=u.clone();f.x+=(Math.random()-.5)*.9,f.z+=(Math.random()-.5)*.9,f.y+=Math.random()*.4,this.beam(u,f,i,s,r*.7,!1)}let o;if(a){o=[e.clone()];for(let d=1;d<7;d++){let u=e.clone().lerp(t,d/7);u.x+=(Math.random()-.5)*.2,u.y+=(Math.random()-.5)*.2,u.z+=(Math.random()-.5)*.2,o.push(u)}o.push(t.clone())}else o=[e,t];let l=new Mt().setFromPoints(o),c=new An({color:new Be(i).multiplyScalar(2),transparent:!0,opacity:1,depthWrite:!1}),h=new Vs(l,c);this.particleGroup.add(h),this.beams.push({mesh:h,life:r,age:0})}shot(e,t,i,s,r){let a=Ti(s==="mortar"?"orb":"sphere",Ke(i,2),e.x,e.y,e.z,s==="mortar"?.09:.045);this.particleGroup.add(a);let o=Math.hypot(e.x-t.x,e.z-t.z);this.projectiles.push({mesh:a,start:e.clone(),target:t,life:s==="mortar"?.65:Math.max(.09,o/17),age:0,kind:s,onHit:r,done:!1})}orbital(e,t){this.ring(e,t,"#ffc993",2.6,.9);let i=new P(e,14,t),s=new P(e,.1,t);this.beam(i,s,"#ffddae",.2,.65);let r=Ke("#ffdcb0",3),a=Ti("cyl",r,e,6,t,.1,12,.1);this.particleGroup.add(a),this.fx.push({mesh:a,vx:0,vy:0,vz:0,life:.35,age:0,column:!0}),this.burst(e,.5,t,"#ffd194",65)}clearEffects(){for(let e of this.decals)this.particleGroup.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.decals.length=0;for(let e of[this.fx,this.rings,this.projectiles,this.beams]){for(let t of e)this.particleGroup.remove(t.mesh),t.mesh.geometry&&!Object.values(Hh).includes(t.mesh.geometry)&&t.mesh.geometry.dispose(),t.mesh.material?.isLineBasicMaterial&&t.mesh.material.dispose(),e===this.rings&&t.mesh.material.dispose();e.length=0}}simulate(e){for(let t=this.projectiles.length-1;t>=0;t--){let i=this.projectiles[t];i.age+=e;let s=Math.min(1,i.age/i.life),r=i.target;if(!r||r.dead){this.particleGroup.remove(i.mesh),this.projectiles.splice(t,1);continue}i.mesh.position.lerpVectors(i.start,new P(r.x,at[r.kind].fly?1.1:.4,r.z),s),i.kind==="mortar"&&(i.mesh.position.y+=Math.sin(s*Math.PI)*2.2),s>=1&&(this.particleGroup.remove(i.mesh),this.projectiles.splice(t,1),i.onHit?.(r))}}update(e,t,i){if(this.time+=e,this.controls.update(),this.stormK+=(this.stormTarget-this.stormK)*Math.min(1,e*1.6),this.reduceMotion||(this.auroraMat.uniforms.time.value=this.time,this.floorMat.uniforms.time.value=this.time),this.snow.material.opacity=.55+this.stormK*.35,this.snow.material.size=.035+this.stormK*.03,this.scene.background.set(this.stormK>.02?"#1b2d3a":"#102431"),this.mist&&!this.reduceMotion)for(let s of this.mist){let r=s.userData.a+Math.sin(this.time*.05+s.userData.ph)*.05;s.position.x=Math.cos(r)*(11.2+Math.sin(this.time*.1+s.userData.ph)*.5),s.position.z=Math.sin(r)*7.3,s.material.opacity=.3+this.stormK*.25}for(let s of this.ruleNodes||[])s.c.rotation.y=this.time*1.2,s.r.scale.setScalar(.4+Math.sin(this.time*2+s.ph)*.03);for(let s of i?.towers||[])s.ornament&&(s.ornament.rotation.y=this.time*(.6+s.level*.15));if(this.snow.visible){let s=this.snow.geometry.attributes.position,r=1+this.stormK*5;for(let a=0;a<s.count;a++)s.array[a*3]+=(.1+Math.sin(this.time*.4+a)*.04)*e*r,s.array[a*3+1]-=e*(.15+a%7*.035)*(1+this.stormK*2),s.array[a*3+1]<0&&(s.array[a*3+1]=14),s.array[a*3]>15&&(s.array[a*3]=-15);s.needsUpdate=!0}this.core&&(this.core.userData.coreCrystal.rotation.y=this.time*.35,this.core.userData.coreCrystal.position.y=1+Math.sin(this.time*1.5)*.07);for(let s of i?.towers||[])s.mesh&&(s.turret.rotation.y=s.angle||0,(s.kind==="frost"||s.kind==="prism")&&(s.emitter.rotation.y=this.time*(s.kind==="prism"?1.3:.6),s.emitter.position.y=(s.kind==="prism"?.66:.45)+Math.sin(this.time*2+s.cell)*.04));for(let s of i?.enemies||[]){if(!s.mesh)continue;s.mesh.position.set(s.x,0,s.z),s.mesh.rotation.y=s.angle||0,s.body.position.y=(at[s.kind].fly?.9:0)+Math.sin(this.time*(s.kind==="fast"?16:8)+s.id)*.025,s.healthBar.quaternion.copy(this.camera.quaternion).premultiply(s.mesh.quaternion.clone().invert());let r=Math.max(0,s.hp/s.maxHp),a=s.health.userData.width;if(s.health.scale.x=a*r,s.health.position.x=-a*(1-r)/2,s.healthBar.visible=r<.99||at[s.kind].boss,s.rotor&&(s.rotor.rotation.z=this.time),s.shieldMesh&&(s.shieldMesh.visible=s.shield>0,s.shieldMesh.rotation.y=this.time*.8),s.buffMark&&(s.buffMark.visible=!!s.buff,s.buffMark.rotation.z=this.time*3),s.auraRing&&(s.auraRing.rotation.z=this.time*.5),s.legs&&s.frozen<=0){let o=(at[s.kind].speed||1)*7;s.legs.forEach((l,c)=>{let h=l.userData.base||[0,0];l.rotation.x=h[0]+Math.sin(this.time*o+c*1.7+s.id)*.4})}s.slow>0?s.body.scale.setScalar(.98+Math.sin(this.time*5)*.02):s.body.scale.setScalar(1)}for(let s=this.fx.length-1;s>=0;s--){let r=this.fx[s];if(r.age+=e,r.age>r.life){this.particleGroup.remove(r.mesh),this.fx.splice(s,1);continue}r.mesh.position.x+=r.vx*e,r.mesh.position.y+=r.vy*e,r.mesh.position.z+=r.vz*e,r.column||(r.vy-=e*4),r.mesh.scale.multiplyScalar(Math.max(.8,1-e*2.8))}for(let s=this.rings.length-1;s>=0;s--){let r=this.rings[s];r.age+=e;let a=r.age/r.life;r.mesh.scale.setScalar(.1+r.r*a),r.mesh.material.opacity=(1-a)*.8,a>=1&&(this.particleGroup.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.rings.splice(s,1))}for(let s=this.decals.length-1;s>=0;s--){let r=this.decals[s];r.age+=e,r.mesh.material.opacity=Math.max(0,(1-r.age/r.life)*r.o),r.age>=r.life&&(this.particleGroup.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.decals.splice(s,1))}for(let s=this.beams.length-1;s>=0;s--){let r=this.beams[s];r.age+=e,r.mesh.material.opacity=Math.max(0,1-r.age/r.life),r.age>=r.life&&(this.particleGroup.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),this.beams.splice(s,1))}this.grid.visible=this.gridVisible,!this.noRender&&(this.quality==="high"?this.composer.render():this.renderer.render(this.scene,this.camera),this.renderedFrames++)}};var zn=[{title:"K\u0131r\u0131lgan buz",short:"Buzda d\xFC\u015Fman h\u0131z\u0131 +%28",desc:"Parlayan buz h\xFCcrelerinde kara d\xFC\u015Fmanlar\u0131 %28 h\u0131zlan\u0131r. Orada yava\u015Flat: Rayl\u0131 ve Tesla yava\u015Flam\u0131\u015F hedeflere ek hasar verir.",kind:"ice",cells:[72,89,106,123,124,125]},{title:"Kristal rezonans\u0131",short:"Enerji yuvas\u0131: +0,6 menzil, +%12 h\u0131z",desc:"Mor enerji yuvalar\u0131na kurulan kuleler +0,6 menzil ve %12 h\u0131zl\u0131 at\u0131\u015F kazan\u0131r. Yuvalar azd\u0131r; en \xF6nemli kuleni oraya koy.",kind:"node",cells:[56,109,78,64,159,133]},{title:"Kutup f\u0131rt\u0131nas\u0131",short:"Her 24 sn'de 7 sn f\u0131rt\u0131na: menzil -0,7",desc:"Dalga s\u0131ras\u0131nda her 24 saniyenin son 7 saniyesinde kule menzili 0,7 azal\u0131r. Rayl\u0131 kule etkilenmez. \xD6nceden uyar\u0131 gelir.",kind:"storm",cells:[]}],cs=[{id:"none",name:"Serbest d\xFCzen",desc:"Ek kural yok."},{id:"compact",name:"Alt\u0131 kule yemini",desc:"En fazla 6 kule. +150 ba\u015Flang\u0131\xE7 kredisi. Az kule, bilin\xE7li uzmanl\u0131k.",maxTowers:6,bonusGold:150},{id:"blackout",name:"Desteksiz kuzey",desc:"Y\xF6r\xFCnge ve Donma kapal\u0131. Dalga \xF6d\xFCl\xFC %25 y\xFCksek.",noAbilities:!0,reward:1.25}],hs=10;function Uv(n=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Istanbul",year:"numeric",month:"2-digit",day:"2-digit"}).format(n)}function Yl(n=new Date){let e=Uv(n),t=2166136261;for(let i of e)t=Math.imul(t^i.charCodeAt(0),16777619)>>>0;return{day:e,seed:t,map:t%3,difficulty:1,challenge:["compact","blackout"][(t>>>3)%2]}}var us=n=>cs.find(e=>e.id===n.challenge)||cs[0],Zl=n=>n.mode==="daily"?hs:n.mode==="endless"?1/0:15;function Gh(n,e){let t=Tf(e);if(n.mode==="daily"&&n.dailySeed){let i=t.at(-1)==="boss"?t.pop():null,s=(n.dailySeed+e*7)%Math.max(1,t.length),r=[...t.slice(s),...t.slice(0,s)];return i&&r.push(i),r}return t}var Kl=n=>n.map===2&&n.waveActive&&n.waveTime%24>=17,Af=n=>n.map===2&&n.waveActive&&n.waveTime%24>=14&&n.waveTime%24<17;function ba(n,e){let t=Xl(n);return e.map===1&&zn[1].cells.includes(n.cell)&&(t.range+=.6,t.rate/=1.12),Kl(e)&&n.kind!=="rail"&&(t.range=Math.max(1.2,t.range-.7)),t}function Rf(n,e){return!e||!(n.slow>0)?1:e.kind==="rail"?1.35:e.kind==="tesla"?1.2:e.kind==="mortar"?1.15:1}var Cf=(n,e)=>e.map===0&&zn[0].cells.includes(n)?1.28:1;function Wh(){return{medals:[0,0,0],wins:0,bestDaily:0,unlocked:[],skin:"classic"}}function Pf(n){let e=Wh();if(!n||typeof n!="object")return e;let t=(i,s)=>Math.max(0,Math.min(s,Math.floor(Number(i))||0));return e.medals=[0,1,2].map(i=>t(n.medals?.[i],3)),e.wins=t(n.wins,1e6),e.bestDaily=t(n.bestDaily,hs),e.unlocked=["mint","violet","gold"].filter(i=>n.unlocked?.includes?.(i)),e.skin=["classic",...e.unlocked].includes(n.skin)?n.skin:"classic",e}function Xh(n,e){return e?1+(n.lives===n.maxLives?1:0)+(new Set(n.towers.map(t=>t.kind)).size>=4?1:0):0}function If(n,e,t){if(e.mode==="daily"&&(n.bestDaily=Math.max(n.bestDaily,Math.min(hs,e.wave))),!t)return[];e.mode!=="daily"&&n.wins++,e.mode==="campaign"&&(n.medals[e.map]=Math.max(n.medals[e.map],Xh(e,!0)));let i=[],s=n.medals.reduce((r,a)=>r+a,0);for(let[r,a]of[["mint",n.wins>=1],["violet",n.medals.every(o=>o>=1)],["gold",s>=7]])a&&!n.unlocked.includes(r)&&(n.unlocked.push(r),i.push(r));return i}var Sa={classic:{name:"Klasik",color:null},mint:{name:"Nane I\u015F\u0131\u011F\u0131",color:"#7ef0c0"},violet:{name:"Mor Aurora",color:"#b79cff"},gold:{name:"Alt\u0131n \u015Eafak",color:"#ffd27a"}},Lf={mint:"ilk seferi kazan",violet:"\xFC\xE7 haritada da sefer kazan",gold:"sefer y\u0131ld\u0131zlar\u0131n\u0131 toplam 7'ye \xE7\u0131kar"};var H=n=>document.getElementById(n);var ds=n=>Math.round(n).toLocaleString("tr-TR");for(let n of document.querySelectorAll("[data-icon]"))n.innerHTML=ji(n.dataset.icon);var It={map:0,difficulty:1,mode:"campaign"},ne,R,Tt=null,Gt=null,Vn=-1,Lt=null,rt=!1,vt="menu",Hn=1,kf=!1,qh=0,Df=0,Yh=0,Fv=0,tc=!0,Nf,Uf,tn="",jh=!1,Qi=null,Ht=Wh(),gn={effects:1,reduceMotion:!1,autoQuality:!0},en=!0,wa=0,Ea=0,Ff=0,Qh=!1,zf=!1,qe={ctx:null,musicVolume:.3,sfxVolume:.55,muted:!1,beat:0,clock:0,lastSfx:0,init(){if(this.ctx){this.ctx.resume().catch(()=>{});return}try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.7;let n=this.ctx.createDynamicsCompressor();this.master.connect(n),n.connect(this.ctx.destination),this.music=this.ctx.createGain(),this.music.gain.value=this.musicVolume,this.music.connect(this.master),this.effects=this.ctx.createGain(),this.effects.gain.value=this.sfxVolume,this.effects.connect(this.master),this.pad()}catch{}},tone(n,e=.1,t="sine",i=.07,s="effects",r){if(!this.ctx||this.muted||this.ctx.state!=="running")return;let a=this.ctx.currentTime,o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type=t,o.frequency.setValueAtTime(n,a),r&&o.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+e),l.gain.setValueAtTime(1e-4,a),l.gain.linearRampToValueAtTime(i,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(this[s]),o.start(a),o.stop(a+e+.02)},pad(){if(!this.ctx)return;let n=this.ctx.currentTime;for(let e of[110,164.81,220,261.63]){let t=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.createBiquadFilter();t.type="sine",t.frequency.value=e,s.type="lowpass",s.frequency.value=400,i.gain.value=.016,t.connect(s),s.connect(i),i.connect(this.music),t.start(n)}},update(n){if(!this.ctx||this.muted||vt!=="game"||rt)return;this.clock+=n;let e=this.intensity();if(this.clock>[.62,.46,.34][e]){this.clock=0,e>=1&&this.beat%4===0&&this.tone(55,.5,"sine",.05,"music"),e===2&&this.beat%2===1&&this.tone(880,.3,"triangle",.015,"music");let t=[440,0,523.25,659.25,0,587.33,0,329.63,440,0,391.99,0,523.25,0,329.63,0],i=t[this.beat++%t.length];i&&this.tone(i,1.2,"sine",.025,"music")}},last:{},sfx(n){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime,t={shot:.04,sentry:.04,prism:.09,tesla:.06,kill:.03,frost:.12}[n]||0,i=gn.effects<.75&&["shot","sentry","prism","kill","tesla"].includes(n)?.14:0;if(e-(this.last[n]||0)<Math.max(t,i))return;this.last[n]=e;let s=(r,a,o,l,c)=>this.tone(r,a,o,l,"effects",c);n==="shot"||n==="sentry"?s(600,.06,"triangle",.035,240):n==="tesla"?(s(900,.09,"sawtooth",.03,2400),s(300,.12,"square",.015,120)):n==="prism"?s(1500,.05,"sine",.025,1100):n==="mortar"?s(90,.23,"triangle",.14,30):n==="rail"?s(160,.18,"sawtooth",.045,900):n==="frost"?s(1300,.14,"sine",.04,450):n==="build"?(s(480,.12,"sine",.12),setTimeout(()=>s(720,.16,"sine",.08),60)):n==="upgrade"?[520,660,880].forEach((r,a)=>setTimeout(()=>s(r,.14,"triangle",.08),a*70)):n==="crit"?(s(1200,.08,"square",.05,2200),setTimeout(()=>s(1800,.12,"sine",.05),40)):n==="shield"?(s(1900,.18,"triangle",.06,500),s(2400,.1,"sine",.03,900)):n==="boss"?(s(55,1.1,"sawtooth",.14,32),s(110,.8,"triangle",.09,60),setTimeout(()=>s(82,.6,"sawtooth",.08,40),260)):n==="storm"?(s(260,1.3,"sine",.07,110),s(390,1.3,"triangle",.03,150)):n==="blink"?s(700,.1,"sine",.05,2e3):n==="kill"?s(280,.1,"triangle",.035,80):n==="leak"?s(120,.4,"sawtooth",.06,45):n==="wave"?(s(180,.4,"triangle",.12),setTimeout(()=>s(270,.4,"triangle",.1),180)):n==="orbital"?(s(70,1,"sawtooth",.16,22),s(900,.6,"sine",.1,70)):s(540,.06,"sine",.05)},intensity(){return R?R.enemies.some(n=>n.kind==="boss"&&!n.dead)||R.lives<=R.maxLives*.3?2:R.waveActive?1:0:0},setMute(n){this.muted=n,this.master&&this.master.gain.setTargetAtTime(n?0:.7,this.ctx.currentTime,.1),H("sound-btn").innerHTML=ji(n?"mute":"volume"),H("sound-btn").setAttribute("aria-label",n?"Sesi a\xE7":"Sesi kapat")}};function ni(n){H("toast").textContent=n,H("toast").classList.add("show"),clearTimeout(Nf),Nf=setTimeout(()=>H("toast").classList.remove("show"),2500)}function fs(n,e="YAKLA\u015EAN TEHD\u0130T"){H("banner-text").textContent=n,H("wave-banner").querySelector("small").textContent=e,H("wave-banner").classList.add("show"),clearTimeout(Uf),Uf=setTimeout(()=>H("wave-banner").classList.remove("show"),2500)}var Vf=n=>{let e=n%17,t=Math.floor(n/17),i=[];return e>0&&i.push(n-1),e<16&&i.push(n+1),t>0&&i.push(n-17),t<10&&i.push(n+17),i};function eu(n=-1,e=R){let t=Array(187).fill(1/0),i=new Set,s=new Set([...e.obstacles,...e.towers.map(r=>r.cell),n]);t[e.exit]=0;for(let r=0;r<187;r++){let a=-1,o=1/0;for(let l=0;l<t.length;l++)!i.has(l)&&t[l]<o&&(o=t[l],a=l);if(a<0)break;i.add(a);for(let l of Vf(a)){if(s.has(l))continue;let c=o+(e.preferred.has(a)?1:3.6);c<t[l]&&(t[l]=c)}}return t}function jl(n,e=R.dist){let t=-1,i=1/0;for(let s of Vf(n)){if(R.obstacles.has(s)||R.towers.some(a=>a.cell===s))continue;let r=e[s]+(R.preferred.has(s)?1:3.6);r<i&&(i=r,t=s)}return t}function ic(){R.dist=eu();let n=[R.spawn],e=R.spawn,t=new Set(n);for(let i=0;i<187&&!(e===R.exit||(e=jl(e),e<0||t.has(e)));i++)n.push(e),t.add(e);R.route=n,ne.updateRoute(n)}function Hf(n){if(n<0||n>=187)return"Buras\u0131 in\u015Fa alan\u0131n\u0131n d\u0131\u015F\u0131nda.";if(n===R.spawn||n===R.exit)return"Ge\xE7it ve \xE7ekirdek \xFCzerine in\u015Fa edilemez.";if(R.obstacles.has(n))return"Kayal\u0131k araziye kule kurulamaz.";if(R.towers.some(t=>t.cell===n))return"Bu h\xFCcrede zaten bir kule var.";if(R.enemies.some(t=>!t.dead&&!at[t.kind].fly&&(t.cell===n||t.next===n)))return"D\xFC\u015Fmanlar\u0131n ge\xE7mesini bekle.";let e=eu(n);if(!Number.isFinite(e[R.spawn]))return"Ge\xE7idi tamamen kapatamazs\u0131n.";for(let t of R.enemies)if(!t.dead&&!at[t.kind].fly&&!Number.isFinite(e[t.next]))return"Bu yerle\u015Fim d\xFC\u015Fman\u0131n yolunu kapat\u0131yor.";return""}function Gf(){let n=Oi[It.map],e=mn(n),t=Ma[It.difficulty],i=It.mode==="daily"?Yl():null,s=i?i.challenge:"none",r=cs.find(a=>a.id===s);return{version:5,dailySeed:i?i.seed:0,dailyDay:i?i.day:"",challenge:s,stormSeen:0,map:It.map,difficulty:It.difficulty,mode:It.mode,gold:t.gold+(r.bonusGold||0),lives:t.lives,maxLives:t.lives,wave:0,kills:0,damage:0,earned:0,towers:[],enemies:[],queue:[],hazards:[],obstacles:new Set(n.rocks.map(([a,o])=>a+o*17)),preferred:new Set(e),spawn:e[0],exit:e.at(-1),dist:[],route:[],time:0,waveActive:!1,waveTime:0,waveSpawned:0,waveTotal:0,waveDone:0,autoDelay:8,cooldowns:{orbital:0,freeze:0},uid:0}}function tu(n=null){if(qe.init(),vt="game",rt=!1,Hn=1,Tt=null,Gt=null,Lt=null,Vn=-1,tc=H("auto-wave").checked,!n&&It.mode==="daily"){let e=Yl();It={...It,map:e.map,difficulty:e.difficulty}}R=Gf(),ne.buildMap(It.map),ne.highlight.visible=!1,ne.aimRing.visible=!1,ne.showRange(-1,0),n&&qv(n),ne.showRule(zn[R.map]),ne.setSkin(Sa[Ht.skin]?.color||null),zf=!n&&!Qh&&R.mode!=="daily",en=!0,ic(),H("menu").hidden=!0,H("result").hidden=!0,H("pause-overlay").hidden=!0,H("target-hint").hidden=!0,ps(),setTimeout(()=>ne.resize(),0),H("sector-name").textContent=Oi[R.map].name,H("sector-no").textContent=String(R.map+1).padStart(2,"0"),H("max-lives").textContent=" / "+R.maxLives,(R.mode==="daily"||zn[R.map])&&setTimeout(()=>ni(R.mode==="daily"?"G\xFCnl\xFCk: "+us(R).name:"Harita kural\u0131: "+zn[R.map].short),900),tn="",nn(),Kt(),n||fs(Oi[R.map].name,"SEKT\xD6R "+String(R.map+1).padStart(2,"0"))}function Kh(){vt="menu",rt=!1,ps(),H("menu").hidden=!1,H("result").hidden=!0,H("pause-overlay").hidden=!0,ne.clearEffects(),Lt=null,H("coach").hidden=!0,Gn(),qe.sfx("click")}function Wf(n){vt==="game"&&(Tt=Tt===n?null:n,Gt=null,Lt=null,ne.aimRing.visible=!1,tn="",H("target-hint").hidden=!0,qe.sfx("click"),nn(),nu(),Kt())}function Ov(n){Gt=n,Tt=null,Lt=null,ne.highlight.visible=!1,ne.aimRing.visible=!1,H("target-hint").hidden=!0,ne.showRange(n.cell,ba(n,R).range,_t[n.kind].color),tn="",nn(),Kt()}function Ta(){Tt=null,Gt=null,Lt=null,ne.highlight.visible=!1,ne.aimRing.visible=!1,ne.showRange(-1,0),H("target-hint").hidden=!0,nn(),tn="",Kt()}function Bv(n){if(!Tt)return;if(rt){ni("\u0130n\u015Fa etmek i\xE7in savunmay\u0131 devam ettir.");return}let e=_t[Tt],t=us(R);if(t.maxTowers&&R.towers.length>=t.maxTowers){ni("Meydan okuma s\u0131n\u0131r\u0131: en fazla "+t.maxTowers+" kule.");return}if(R.gold<e.cost){ni("Yeterli kredi yok.");return}let i=Hf(n);if(i){ni(i);return}let s={id:++R.uid,cell:n,kind:Tt,level:1,branch:null,invested:e.cost,cd:.05,targetMode:0,angle:0,damage:0,kills:0,focusId:0,focus:0};R.gold-=e.cost,R.towers.push(s),ne.makeTower(s),ne.burst(s.mesh.position.x,.3,s.mesh.position.z,e.color,15),ne.ring(s.mesh.position.x,s.mesh.position.z,e.color,.8,.45),ic(),qe.sfx("build"),Kt(),nn(),nu()}var $h=n=>Math.round(_t[n.kind].cost*.7*n.level);function Jh(n,e=null){if(rt||!n||n.level>=5)return;if(n.level===2&&!e){tn="",Kf(!0);return}let t=$h(n);if(R.gold<t){ni("Y\xFCkseltmek i\xE7in yeterli kredi yok.");return}R.gold-=t,n.invested+=t,n.level++,e&&(n.branch=e),ne.upgradeTower(n),qe.sfx("upgrade"),tn="",ne.showRange(n.cell,Xl(n).range,_t[n.kind].color),Kt(),nn()}function kv(n){if(rt||!n)return;let e=Math.floor(n.invested*.75);R.gold+=e,ne.burst(n.mesh.position.x,.4,n.mesh.position.z,_t[n.kind].color,10),ne.removeTower(n),R.towers=R.towers.filter(t=>t!==n),Gt=null,tn="",ne.showRange(-1,0),ic(),qe.sfx("click"),ni("Kule geri d\xF6n\xFC\u015Ft\xFCr\xFCld\xFC. +"+e+" kredi"),Kt(),nn()}function Aa(n,e=1,t=null){let i=at[n],s=t?new P(t.x,0,t.z):Ct(R.spawn),r=(1+R.wave*.115+R.wave*R.wave*.008)*Ma[R.difficulty].hp,a=i.hp*r*e,o={id:++R.uid,kind:n,x:s.x,z:s.z,cell:t?t.cell:R.spawn,next:t?t.next:jl(R.spawn),hp:a,maxHp:a,shield:(i.shield||0)*r,slow:0,slowPower:0,frozen:0,healTimer:1.7,angle:0,dead:!1,age:0,blinkCd:3+R.uid%3*.5,phase:0,buff:0};return R.enemies.push(o),ne.makeEnemy(o),R.waveSpawned++,o}function iu(){if(vt!=="game"||rt||R.waveActive||R.enemies.length||R.queue.length||R.wave>=Zl(R))return;R.wave++,R.waveActive=!0,R.waveTime=0,R.waveSpawned=0,R.waveDone=0;let n=Gh(R,R.wave);R.waveTotal=n.length,R.queue=n.map((e,t)=>({at:t*(e==="boss"?.6:.64),kind:e})),fs(R.wave%5===0?"DALGA "+String(R.wave).padStart(2,"0")+" \xB7 H\xDCK\xDCMDAR":"DALGA "+String(R.wave).padStart(2,"0")),qe.sfx("wave"),Kt()}function ki(n,e,t=null,i=!1){if(n.dead)return;let s=at[n.kind];t?.kind==="rail"&&t.branch==="a"&&n.hp/n.maxHp<.3&&(e*=2,qe.sfx("crit")),!i&&s.armor&&(e*=1-s.armor),t?.kind==="frost"&&t.branch==="b"&&n.slow>0&&(e*=1.5),e*=Rf(n,t);let r=e;if(n.shield>0){let a=Math.min(n.shield,e);n.shield-=a,e-=a,n.shield<=0&&(ne.ring(n.x,n.z,"#9fc2ff",1.1,.4),qe.sfx("shield"))}n.hp-=e,R.damage+=r,t&&(t.damage+=r),n.hp<=0?zv(n,t):s.boss&&Xf(n)}function Xf(n){let e=n.hp/n.maxHp;if(n.phase<1&&e<=.66){n.phase=1,n.shield+=n.maxHp*.2,fs("H\xDCK\xDCMDAR KALKAN KURDU","FAZ 2 \xB7 \xC7A\u011ERI"),qe.sfx("boss"),ne.ring(n.x,n.z,"#9fc2ff",2.6,.9);for(let t=0;t<3;t++)Aa("mini",.8,n).x+=(t-1)*.12;R.waveTotal+=3}if(n.phase<2&&e<=.33){n.phase=2,fs("H\xDCK\xDCMDAR \xD6FKELEND\u0130","FAZ 3 \xB7 HIZ ARTTI"),qe.sfx("boss"),ne.ring(n.x,n.z,"#ff8aa8",3,1);for(let t=0;t<2;t++)Aa("blinker",.8,n).x+=t?.1:-.1;R.waveTotal+=2}}function zv(n,e){if(n.dead)return;n.dead=!0,R.kills++,R.waveDone++,e&&e.kills++;let t=Math.round(at[n.kind].reward*Ma[R.difficulty].reward);if(R.gold+=t,R.earned+=t,ne.burst(n.x,.32,n.z,at[n.kind].color,at[n.kind].boss?45:9),at[n.kind].boss&&ne.ring(n.x,n.z,at[n.kind].color,2,.8),ne.removeEnemy(n),qe.sfx(at[n.kind].boss?"boss":"kill"),at[n.kind].split){for(let i=0;i<2;i++){let s=Aa("mini",.7,n);s.x+=(i?1:-1)*.07}R.waveTotal+=2}}function Of(n){n.dead=!0,R.waveDone++,R.lives=Math.max(0,R.lives-at[n.kind].leak),ne.removeEnemy(n),ne.ring(n.x,n.z,"#ed899e",1.6,.6),ne.burst(n.x,.5,n.z,"#f4a2b3",18),qe.sfx("leak"),R.lives<=0&&Yf(!1)}function Bf(n){if(at[n.kind].fly){let e=Ct(R.exit);return Math.hypot(e.x-n.x,e.z-n.z)}return R.dist[n.next]+Math.hypot(n.x-(n.next%17-8),n.z-(Math.floor(n.next/17)-5))}function Vv(n,e){let t=Ct(n.cell),i=null,s=-1/0;for(let r of R.enemies){if(r.dead||_t[n.kind].ground&&at[r.kind].fly)continue;let a=Math.hypot(r.x-t.x,r.z-t.z);if(a>e.range)continue;let o=n.targetMode===0?-Bf(r):n.targetMode===1?r.hp:n.targetMode===2?-a:n.targetMode===3?-r.hp:(at[r.kind].heal?1e6:0)-Bf(r);o>s&&(i=r,s=o)}return i}function Hv(n,e,t){let i=_t[n.kind],s=Ct(n.cell),r=new P(s.x,1.05,s.z),a=new P(e.x,at[e.kind].fly?1.1:.4,e.z);if(n.angle=Math.atan2(e.x-s.x,e.z-s.z),n.kind==="prism"){if(n.focusId===e.id?n.focus=Math.min(1.6,n.focus+t.rate*.25):(n.focusId=e.id,n.focus=0),ki(e,t.damage*(1+n.focus),n),ne.beam(r,a,i.color,.025,.15),qe.sfx("prism"),n.branch==="b"){let o=R.enemies.find(l=>l!==e&&!l.dead&&Math.hypot(l.x-e.x,l.z-e.z)<1.8);o&&(ki(o,t.damage*.45,n),ne.beam(a,new P(o.x,.4,o.z),i.color,.02,.12))}}else if(n.kind==="frost"){ne.ring(s.x,s.z,i.color,t.range,.6),ne.frostGround(s.x,s.z,t.range);for(let o of R.enemies)!o.dead&&Math.hypot(o.x-s.x,o.z-s.z)<=t.range&&(ki(o,t.damage,n),o.slow=1.4,o.slowPower=t.slow,ne.beam(r,new P(o.x,.4,o.z),i.color,.01,.12));qe.sfx("frost")}else if(n.kind==="tesla"){let o=e,l=new Set,c=r;for(let h=0;h<t.chain&&o;h++){let d=new P(o.x,at[o.kind].fly?1.15:.4,o.z);ne.beam(c,d,i.color,.02,.22,!0),ki(o,t.damage*Math.pow(.8,h),n),n.branch==="b"&&(o.frozen=Math.max(o.frozen,.2)),l.add(o.id),c=d,o=R.enemies.filter(f=>!f.dead&&!l.has(f.id)&&Math.hypot(f.x-o.x,f.z-o.z)<2.1).sort((f,g)=>Math.hypot(f.x-c.x,f.z-c.z)-Math.hypot(g.x-c.x,g.z-c.z))[0]}qe.sfx("tesla")}else n.kind==="rail"?(ne.trail(r,a,i.color),ne.burst(e.x,.4,e.z,i.color,6),ki(e,t.damage,n,!0),qe.sfx("rail")):(ne.shot(r,e,i.color,n.kind,o=>{if(vt==="game")if(n.kind==="mortar"){for(let l of R.enemies)!l.dead&&!at[l.kind].fly&&Math.hypot(l.x-o.x,l.z-o.z)<t.splash&&ki(l,t.damage,n);ne.ring(o.x,o.z,i.color,t.splash,.4),ne.scorch(o.x,o.z,t.splash),ne.burst(o.x,.3,o.z,i.color,18),n.branch==="a"&&R.hazards.push({x:o.x,z:o.z,r:t.splash,life:3,timer:0,t:n,damage:t.damage*.15}),qe.sfx("mortar")}else ki(o,t.damage,n),ne.burst(o.x,.4,o.z,i.color,3)}),qe.sfx(n.kind==="mortar"?"mortar":"shot"))}function qf(n){if(vt!=="game"||rt)return;R.time+=n,Fv+=n;for(let t of["orbital","freeze"])R.cooldowns[t]=Math.max(0,R.cooldowns[t]-n);if(R.waveActive)for(R.waveTime+=n;R.queue.length&&R.queue[0].at<=R.waveTime;){let t=R.queue.shift();Aa(t.kind)}let e=R.enemies.filter(t=>!t.dead&&at[t.kind].aura);if(Af(R)||Kl(R)){let t=R.wave*100+Math.floor(R.waveTime/24);R.stormSeen!==t&&(R.stormSeen=t,fs("KUTUP FIRTINASI YAKLA\u015EIYOR","MENZ\u0130L KISALACAK"),qe.sfx("storm"))}ne.setStorm(Kl(R));for(let t of R.enemies){if(t.dead)continue;let i=at[t.kind];if(t.age+=n,t.buff=e.some(c=>c!==t&&Math.hypot(c.x-t.x,c.z-t.z)<2.4)?1:0,i.blink&&t.frozen<=0&&(t.blinkCd-=n,t.blinkCd<=0)){t.blinkCd=t.slow>0?1:4;let c=R.route.indexOf(t.next);if(t.slow<=0&&c>=0&&c+3<R.route.length){ne.burst(t.x,.4,t.z,i.color,10);let h=R.route[c+2],d=Ct(h);t.x=d.x,t.z=d.z,t.cell=h,t.next=jl(h),ne.burst(t.x,.4,t.z,i.color,10),qe.sfx("blink"),t.next<0&&(t.next=R.route[c+3])}}if(t.slow=Math.max(0,t.slow-n),t.frozen=Math.max(0,t.frozen-n),i.heal&&(t.healTimer-=n,t.healTimer<=0)){t.healTimer=2;for(let c of R.enemies)c!==t&&!c.dead&&Math.hypot(c.x-t.x,c.z-t.z)<2&&(c.hp=Math.min(c.maxHp,c.hp+c.maxHp*.07),ne.beam(new P(t.x,.6,t.z),new P(c.x,.4,c.z),i.color,.01,.4))}if(t.frozen>0)continue;let s=i.speed*n*(t.slow>0?1-t.slowPower:1)*(t.buff?1.28:1)*(t.phase>=2?1.3:1)*(i.fly?1:Cf(t.cell,R))*(R.wave>20?1+Math.min(.8,(R.wave-20)*.015):1),r=i.fly?Ct(R.exit):Ct(t.next),a=r.x-t.x,o=r.z-t.z,l=Math.hypot(a,o);if(t.angle=Math.atan2(a,o),l<=s+.001)if(t.x=r.x,t.z=r.z,i.fly||t.next===R.exit){if(Of(t),vt!=="game")return}else t.cell=t.next,t.next=jl(t.cell),t.next<0&&Of(t);else t.x+=a/l*s,t.z+=o/l*s}for(let t of R.towers){t.cd-=n;let i=ba(t,R),s=Vv(t,i);if(s){let r=Ct(t.cell);t.angle=Math.atan2(s.x-r.x,s.z-r.z),t.cd<=0&&(t.cd=i.rate,Hv(t,s,i))}else t.focus=0}for(let t=R.hazards.length-1;t>=0;t--){let i=R.hazards[t];if(i.life-=n,i.timer-=n,i.life<=0){R.hazards.splice(t,1);continue}if(i.timer<=0){i.timer=.4;for(let s of R.enemies)!s.dead&&!at[s.kind].fly&&Math.hypot(s.x-i.x,s.z-i.z)<i.r&&ki(s,i.damage,i.t);ne.ring(i.x,i.z,"#ffb777",i.r,.45)}}if(ne.simulate(n),R.enemies=R.enemies.filter(t=>!t.dead),R.waveActive&&!R.enemies.length&&!R.queue.length){R.waveActive=!1,R.autoDelay=8;let t=Math.round((35+R.wave*7+Math.min(60,Math.floor(R.gold*.04)))*(us(R).reward||1));if(R.gold+=t,R.earned+=t,ne.clearEffects(),qe.sfx("build"),R.wave>=Zl(R)){Yf(!0);return}Qi=JSON.parse(JSON.stringify(sc())),fs("DALGA TEM\u0130ZLEND\u0130 \xB7 +"+t,"SAHA G\xDCVENL\u0130"),nn()}!R.waveActive&&R.wave>0&&tc&&(R.autoDelay-=n,R.autoDelay<=0&&iu())}function Ql(n){if(!(vt!=="game"||rt)){if(us(R).noAbilities){ni("Bu meydan okumada destek sistemleri kapal\u0131.");return}if(R.cooldowns[n]>0){ni("Destek sistemi yeniden doluyor.");return}if(!R.waveActive){ni("Destek sistemleri sald\u0131r\u0131 s\u0131ras\u0131nda kullan\u0131labilir.");return}Lt=Lt===n?null:n,Tt=null,Gt=null,ne.showRange(-1,0),ne.highlight.visible=!1,nn(),H("target-hint").hidden=!Lt,H("target-hint-text").textContent=n==="orbital"?"Darbe b\xF6lgesini se\xE7 \xB7 2,6 alan":"Dondurulacak b\xF6lgeyi se\xE7 \xB7 3,2 alan",Kt()}}function Gv(n,e){if(!Lt||!R.waveActive||rt)return;let t=Lt,i=t==="orbital"?2.6:3.2;if(t==="orbital"){ne.orbital(n,e);for(let s of R.enemies)!s.dead&&Math.hypot(s.x-n,s.z-e)<i&&ki(s,350+R.wave*42,null,!0);R.cooldowns.orbital=48,qe.sfx("orbital")}else{ne.ring(n,e,"#a3e3ff",i,1.2),ne.burst(n,.5,e,"#9ddaff",35);for(let s of R.enemies)!s.dead&&Math.hypot(s.x-n,s.z-e)<i&&(s.frozen=at[s.kind].boss?2:4,s.slow=7,s.slowPower=.6,ki(s,25+R.wave*5));R.cooldowns.freeze=36,qe.sfx("frost")}Lt=null,ne.aimRing.visible=!1,H("target-hint").hidden=!0,Kt()}function Yf(n){vt="result",rt=!1,Lt=null,ne.aimRing.visible=!1,ne.showRange(-1,0),H("result").hidden=!1,H("result").classList.toggle("victory-fail",!n),H("result-kicker").textContent=n?"SEFER TAMAMLANDI":"\xC7EK\u0130RDEK SUSTU",H("result-title").textContent=n?"Kuzey h\xE2l\xE2 parl\u0131yor.":"I\u015F\u0131k yeniden do\u011Facak.",H("result-description").textContent=n?"On be\u015F dalga. Tek bir savunma. Zafer senin.":"Her yenilgi, daha iyi bir savunman\u0131n ba\u015Flang\u0131c\u0131d\u0131r.",H("result-stats").innerHTML=`<div><strong>${R.wave}</strong><small>ULA\u015EILAN DALGA</small></div><div><strong>${ds(R.kills)}</strong><small>\u0130MHA</small></div><div><strong>${ds(R.damage)}</strong><small>TOPLAM HASAR</small></div>`,H("result-endless").hidden=!n||R.mode==="daily",Qi=null;let e=Xh(R,n),t=If(Ht,R,n),i=[...R.towers].sort((r,a)=>a.damage-r.damage)[0];R.mode==="daily"&&(H("result-description").textContent=n?"G\xFCn\xFCn meydan okumas\u0131n\u0131 tamamlad\u0131n: "+us(R).name+".":"Bug\xFCn "+R.wave+" / "+hs+" dalgaya ula\u015Ft\u0131n. Yar\u0131n yeni bir kural gelecek.");let s=H("result-extra");s||(s=document.createElement("div"),s.id="result-extra",H("result-stats").after(s)),s.innerHTML=(n&&R.mode!=="endless"?`<div class="result-stars" aria-label="${e} y\u0131ld\u0131z">${[1,2,3].map(r=>`<span class="${r<=e?"":"off"}">\u2605</span>`).join("")}</div>`:"")+`<p class="result-extra">${i?"En etkili kule: "+_t[i.kind].name+" \xB7 "+ds(i.damage)+" hasar \xB7 "+i.kills+" imha.":"Bu savunmada kule kurulmad\u0131."}${n&&e<3?" Y\u0131ld\u0131zlar: \xE7ekirde\u011Fi hasars\u0131z koru, d\xF6rt farkl\u0131 kule t\xFCr\xFC kullan.":""}${t.length?" Yeni kozmetik a\xE7\u0131ld\u0131: "+t.map(r=>Sa[r].name).join(", ")+".":""}</p>`,qe.sfx(n?"build":"leak")}function ec(){vt!=="game"||!H("modal-backdrop").hidden||(rt=!rt,H("pause-overlay").hidden=!rt,H("pause-btn").innerHTML=ji(rt?"play":"pause"),H("pause-btn").setAttribute("aria-label",rt?"Devam et":"Duraklat"),Kt())}function Zf(){Hn=Hn===3?1:Hn+1,H("speed-btn").textContent=Hn+"\xD7",qe.sfx("click")}function nn(){for(let n of document.querySelectorAll(".tower-card"))n.classList.toggle("selected",Tt===n.dataset.kind),n.classList.toggle("unaffordable",R&&R.gold<_t[n.dataset.kind].cost),n.setAttribute("aria-pressed",String(Tt===n.dataset.kind))}function Kf(n=!1){let e=Gt;if(!e){H("inspector").hidden=!0,H("intel").hidden=!1;return}let t=e.level===2,i=[e.id,e.level,e.branch,R.gold>=$h(e),rt,e.targetMode,Math.floor(e.damage/100)].join();if(tn===i&&!n)return;tn=i;let s=_t[e.kind],r=ba(e,R),a=$h(e),o=e.branch?s.branches[e.branch==="a"?0:1][0]:s.tag;H("inspector").hidden=!1,H("intel").hidden=!0,H("inspector").innerHTML=`<div class="inspector-top"><div class="tower-art" style="color:${s.color}">${kh(e.kind)}</div><div><small>${o}</small><h2>${s.name}</h2><div class="level-dots">${Array.from({length:5},(l,c)=>`<i class="${c<e.level?"on":""}"></i>`).join("")}</div></div></div><p class="inspector-desc">${s.desc}</p><div class="stat-grid"><div><small>HASAR / ATI\u015E</small><strong>${ds(r.damage)}</strong></div><div><small>MENZ\u0130L</small><strong>${r.range.toFixed(1)} <em>birim</em></strong></div><div><small>ATI\u015E ARALI\u011EI</small><strong>${r.rate.toFixed(2)} <em>sn</em></strong></div><div><small>TOPLAM HASAR</small><strong>${ds(e.damage)}</strong></div></div>${t?`<div class="section-label">UZMANLI\u011EINI SE\xC7 \xB7 ${a} KRED\u0130</div><div class="branch-choices">${s.branches.map((l,c)=>`<button class="branch-choice" data-action="branch" data-branch="${c?"b":"a"}" ${R.gold<a||rt?"disabled":""}>${l[0]}<small>${l[1]}</small></button>`).join("")}</div>`:`<button class="primary inspector-upgrade" data-action="upgrade" ${e.level>=5||R.gold<a||rt?"disabled":""}><span>${e.level>=5?"En y\xFCksek seviye":"Seviye "+(e.level+1)+" \u2192 y\xFCkselt"}</span><small>${e.level>=5?"MAKS.":a+" \u25C7"}</small></button>`}<div class="inspector-subactions"><button data-action="target" ${rt?"disabled":""}>Hedef: ${Oh[e.targetMode]}</button><button class="sell" data-action="sell" ${rt?"disabled":""}>Sat +${Math.floor(e.invested*.75)}</button></div><button class="close-inspector" data-action="close">Se\xE7imi kald\u0131r \xB7 ESC</button>`}function Kt(){if(!R)return;H("lives").textContent=R.lives,H("gold").textContent=ds(R.gold),H("wave").textContent=R.wave,H("wave-total").textContent=R.mode==="endless"?" / \u221E":" / "+Zl(R),H("phase-label").textContent=rt?"TAKT\u0130K MOLA":R.waveActive?"SALDIRI ALTINDA":"HAZIRLIK A\u015EAMASI",H("phase-label").parentNode.querySelector(".status-dot").style.background=R.waveActive?"#f0a5a5":"#9ae9cb",H("pause-btn").innerHTML=ji(rt?"play":"pause"),H("speed-btn").textContent=Hn+"\xD7";let n=R.wave+1,e=Gh(R,n),t={};for(let r of e)t[r]=(t[r]||0)+1;let i=n.toString();H("wave-preview").dataset.wave!==i&&(H("wave-preview").dataset.wave=i,H("wave-preview").innerHTML=Object.entries(t).map(([r,a])=>`<div class="preview-enemy" style="--enemy-color:${at[r].color}"><i class="enemy-dot"></i><span>${at[r].name}</span><strong>\xD7${a}</strong></div>`).join(""),H("next-number").textContent=String(n).padStart(2,"0"),H("wave-hint").textContent=n%5===0?"B\xFCy\xFCk bir enerji imzas\u0131 yakla\u015F\u0131yor. A\u011F\u0131r silahlar\u0131n\u0131 haz\u0131rla.":e.includes("banner")?"Sancaktarlar yak\u0131ndaki d\xFC\u015Fmanlar\u0131 h\u0131zland\u0131r\u0131r. \xD6nce onlar\u0131 vur.":e.includes("blinker")?"S\u0131\xE7rayanlar yava\u015Flat\u0131l\u0131rsa s\u0131\xE7rayamaz. Kriyo veya Donma kullan.":n===1?"\u0130lk sald\u0131r\u0131. Yola yak\u0131n iki N\xF6bet\xE7i ile ba\u015Fla.":n===4?"U\xE7an hedefler do\u011Frudan \xE7ekirde\u011Fe gider. Havanlar onlar\u0131 vuramaz.":n===3?"Z\u0131rhl\u0131lara kar\u015F\u0131 Rayl\u0131 kulelerini kullan.":n>=7?"\u015Eifac\u0131lar\u0131 \xF6ncelikli hedeflemek, kalabal\u0131klar\u0131 zay\u0131flat\u0131r.":"Dengeli bir savunma kur. Kriyo ve alan hasar\u0131n\u0131 birle\u015Ftir."),H("wave-progress-fill").style.width=R.waveActive?100*R.waveDone/Math.max(1,R.waveTotal)+"%":R.wave>0?"100%":"0%",H("wave-status").textContent=R.waveActive?R.enemies.filter(r=>!r.dead).length+" hedef sahada":R.wave===0?"Komutun bekleniyor":"Saha g\xFCvenli",H("kill-count").textContent=ds(R.kills)+" imha",H("wave-btn").disabled=rt||R.waveActive,H("launch-text").textContent=R.waveActive?"Sald\u0131r\u0131 s\xFCr\xFCyor":R.wave===0?"\u0130lk dalgay\u0131 ba\u015Flat":"Dalga "+String(n).padStart(2,"0")+" \xB7 ba\u015Flat",H("launch-caption").textContent=R.waveActive?"SAVUNMAN \xC7ALI\u015EIYOR":R.wave===0?"SAVUNMANI HAZIRLA":"YEN\u0130DEN KONUMLAN",H("auto-timer").textContent=tc&&!R.waveActive&&R.wave>0?Math.max(0,Math.ceil(R.autoDelay))+" sn":"";for(let r of["orbital","freeze"]){let a=R.cooldowns[r],o=H(r+"-btn");o.disabled=rt||a>0||!R.waveActive||!!us(R).noAbilities,o.classList.toggle("active",Lt===r),H(r+"-cd").textContent=a>0?Math.ceil(a)+" SN":"HAZIR \xB7 "+(r==="orbital"?"Q":"E"),o.querySelector(".cooldown-overlay").style.width=a>0?(1-a/(r==="orbital"?48:36))*100+"%":"0%"}let s=R.enemies.find(r=>r.kind==="boss"&&!r.dead);H("boss-bar").hidden=!s,s&&(H("boss-hp").style.width=Math.max(0,s.hp/s.maxHp*100)+"%",H("boss-percent").textContent=Math.ceil(Math.max(0,s.hp/s.maxHp*100))+"%"),H("build-hint").innerHTML=ji(Lt?"crosshair":Tt?"grid":"mouse")+(Lt?"Destek sistemi i\xE7in bir b\xF6lge se\xE7":Tt?_t[Tt].name+" \xB7 "+_t[Tt].cost+" kredi \xB7 araziye t\u0131kla":Gt?"Se\xE7ili: "+_t[Gt.kind].name:"Kule se\xE7, araziye yerle\u015Ftir"),Kf(),nn(),$v()}function nu(){if(vt==="game"){if(Lt){ne.highlight.visible=!1,ne.showRange(-1,0);return}if(Gt){ne.highlight.visible=!1,ne.showRange(Gt.cell,ba(Gt,R).range,_t[Gt.kind].color);return}if(Tt&&Vn>=0){let n=!Hf(Vn)&&R.gold>=_t[Tt].cost;ne.setHover(Vn,n,_t[Tt].range,_t[Tt].color),ne.showRange(Vn,_t[Tt].range,n?_t[Tt].color:"#ed8d9d")}else ne.highlight.visible=!1,ne.showRange(-1,0)}}function nc(n){H("modal-backdrop").hidden&&(kf=rt),vt==="game"&&(rt=!0),H("modal-content").innerHTML=n,H("modal-backdrop").hidden=!1,H("modal-close").focus(),Kt()}function ps(){H("modal-backdrop").hidden||(H("modal-backdrop").hidden=!0,vt==="game"&&(rt=kf),Kt())}function su(){nc(`<span class="eyebrow">SAHA KILAVUZU</span><h2>Her kule, yeni bir ihtimal.</h2><h3>01 \xB7 Yolunu \u015Fekillendir</h3><p>Bir kule se\xE7 ve araziye t\u0131kla. D\xFC\u015Fman rotas\u0131 yeni kulelerin etraf\u0131ndan ge\xE7er. Kayalara, \xE7ekirde\u011Fe ve ge\xE7ide in\u015Fa edemezsin; yolu tamamen kapatamazs\u0131n.</p><h3>02 \xB7 Savunman\u0131 birle\u015Ftir</h3><p>N\xF6bet\xE7i h\u0131zl\u0131d\u0131r, Havan alan hasar\u0131 verir, Kriyo yava\u015Flat\u0131r. Prizma tek hedefi eritir, Rayl\u0131 z\u0131rh deler, Tesla kalabal\u0131\u011Fa s\u0131\xE7rar. Kuleye t\u0131klayarak y\xFCkselt; \xFC\xE7\xFCnc\xFC seviyede bir uzmanl\u0131k se\xE7.</p><h3>03 \xB7 Zaman\u0131 sen y\xF6net</h3><p>Dalgalar\u0131 haz\u0131r oldu\u011Funda ba\u015Flat. Be\u015Finci dalgalar\u0131n sonunda bir h\xFCk\xFCmdar gelir. Y\xF6r\xFCnge darbesi ve Donma i\xE7in \xF6nce yetene\u011Fe, sonra hedef b\xF6lgeye t\u0131kla. Seferde 15 dalgay\u0131 atlat; sonsuz modda s\u0131n\u0131r yok.</p><h3>04 \xB7 Arazinin kurallar\u0131</h3><p>Her haritan\u0131n bir kural\u0131 vard\u0131r: Buzul Vadisi'nde buz h\xFCcreleri d\xFC\u015Fman\u0131 h\u0131zland\u0131r\u0131r, Kristal Ge\xE7idi'nde enerji yuvalar\u0131 kulelerine menzil verir, Kutup Kalesi'nde periyodik f\u0131rt\u0131na menzili k\u0131salt\u0131r. Yava\u015Flam\u0131\u015F d\xFC\u015Fmanlar Tesla'dan %20, Havan'dan %15 ve Rayl\u0131'dan %35 fazla hasar al\u0131r. S\u0131\xE7rayanlar yava\u015Flat\u0131l\u0131nca s\u0131\xE7rayamaz; Sancaktarlar yak\u0131n\u0131ndaki d\xFC\u015Fmanlar\u0131 h\u0131zland\u0131r\u0131r; H\xFCk\xFCmdar y\xFCzde 66 ve 33 canda yeni fazlara girer. G\xFCnl\xFCk modda her g\xFCn ayn\u0131 kurall\u0131 yeni bir meydan okuma vard\u0131r.</p><div class="help-grid"><div><kbd>1\u20136</kbd> Kule se\xE7</div><div><kbd>BO\u015ELUK</kbd> Duraklat</div><div><kbd>Q / E</kbd> Yetenekler</div><div><kbd>N</kbd> Yeni dalga</div><div><kbd>U</kbd> Kuleyi y\xFCkselt</div><div><kbd>X</kbd> H\u0131z\u0131 de\u011Fi\u015Ftir</div><div><kbd>G</kbd> Izgara</div><div><kbd>ESC</kbd> Se\xE7imi iptal et</div><div><kbd>R / F</kbd> D\xF6nd\xFCr / s\u0131f\u0131rla</div><div><kbd>H / M</kbd> Yard\u0131m / ses</div></div><p class="muted-note">Kamera: kayd\u0131rarak yak\u0131nla\u015Ft\u0131r, sa\u011F tu\u015Fla s\xFCr\xFCkleyerek d\xF6nd\xFCr. Telefonda iki parmakla yak\u0131nla\u015Ft\u0131r ve d\xF6nd\xFCr. Ayarlardan kay\u0131t dosyas\u0131 indirip daha sonra y\xFCkleyebilirsin. Oyun tek oyunculudur.</p><h3>Saha ansiklopedisi</h3><div class="codex">${Object.values(at).map(n=>`<div style="--c:${n.color}"><strong>${n.name}</strong>${n.note||(n.fly?"U\xE7ar; do\u011Frudan \xE7ekirde\u011Fe gider. Havan vuramaz.":n.heal?"Yak\u0131ndakileri iyile\u015Ftirir. Hedef modunu Destek \xF6nce yap.":n.split?"\xD6l\xFCnce iki k\u0131v\u0131lc\u0131ma b\xF6l\xFCn\xFCr.":n.shield?"\xD6nce kalkan\u0131n\u0131 k\u0131rman gerekir.":n.boss?"Her be\u015Finci dalgada gelir. %66 ve %33 canda faz de\u011Fi\u015Ftirir.":n.armor?"A\u011F\u0131r z\u0131rhl\u0131; Rayl\u0131 ve y\xF6r\xFCnge z\u0131rh\u0131 deler.":"Standart sald\u0131r\u0131 birimi.")}</div>`).join("")}</div><button class="primary" id="help-done">Anla\u015F\u0131ld\u0131 \xB7 kuzeyi savun</button>`),H("help-done").onclick=ps}function Wv(){nc(`<span class="eyebrow">KOMUTA MERKEZ\u0130</span><h2>Saha ayarlar\u0131</h2><div class="setting-row"><label for="quality-select">Grafik kalitesi</label><select id="quality-select"><option value="high">Y\xFCksek \xB7 par\u0131lt\u0131 + g\xF6lgeler</option><option value="medium">Dengeli \xB7 g\xF6lgeler</option><option value="low">Hafif \xB7 performans</option></select></div><div class="setting-row"><label for="music-volume">Atmosfer m\xFCzi\u011Fi</label><input id="music-volume" type="range" min="0" max="1" step=".05" value="${qe.musicVolume}"></div><div class="setting-row"><label for="sfx-volume">Efekt sesleri</label><input id="sfx-volume" type="range" min="0" max="1" step=".05" value="${qe.sfxVolume}"></div><div class="setting-row"><label for="effects-density">Efekt yo\u011Funlu\u011Fu</label><select id="effects-density"><option value="1">Tam</option><option value="0.6">Azalt\u0131lm\u0131\u015F</option><option value="0.25">Minimum</option></select></div><div class="setting-row"><label class="check"><input type="checkbox" id="reduce-motion"> Hareketi azalt (kar, aurora ve animasyonlar durur)</label></div><div class="setting-row"><label class="check"><input type="checkbox" id="auto-quality"> D\xFC\u015F\xFCk FPS'te grafikleri otomatik d\xFC\u015F\xFCr</label></div><div class="setting-row"><label>Kule vurgusu</label></div><div class="skin-row" id="skin-row"></div><div class="setting-actions"><button class="secondary" id="save-btn">${ji("download")} Kay\u0131t indir</button><button class="secondary" id="load-btn">${ji("upload")} Kay\u0131t y\xFCkle</button></div><p class="muted-note">\u0130lerlemen bu a\xE7\u0131k oyun oturumunda tutulur. Sayfay\u0131 kapatmadan \xF6nce kay\u0131t indir; daha sonra ayn\u0131 dosyay\u0131 y\xFCkleyerek kald\u0131\u011F\u0131n yerden devam et.</p><button class="danger-button" id="leave-btn">Ana men\xFCye d\xF6n</button>`),H("quality-select").value=ne.quality,H("quality-select").onchange=n=>{ne.setQuality(n.target.value),en=!0},H("music-volume").oninput=n=>{qe.musicVolume=+n.target.value,qe.music&&qe.music.gain.setTargetAtTime(qe.musicVolume,qe.ctx.currentTime,.05)},H("sfx-volume").oninput=n=>{qe.sfxVolume=+n.target.value,qe.effects&&qe.effects.gain.setTargetAtTime(qe.sfxVolume,qe.ctx.currentTime,.05)},H("effects-density").value=String(gn.effects),H("effects-density").onchange=n=>Jl({effects:+n.target.value}),H("reduce-motion").checked=gn.reduceMotion,H("reduce-motion").onchange=n=>Jl({reduceMotion:n.target.checked}),H("auto-quality").checked=gn.autoQuality,H("auto-quality").onchange=n=>Jl({autoQuality:n.target.checked}),H("skin-row").innerHTML=Object.entries(Sa).map(([n,e])=>{let t=n==="classic"||Ht.unlocked.includes(n);return`<button data-skin="${n}" class="${Ht.skin===n?"selected":""}" ${t?"":"disabled"} title="${t?"":"A\xE7mak i\xE7in: "+Lf[n]}">${e.name}${t?"":" \xB7 kilitli"}</button>`}).join(""),H("skin-row").onclick=n=>{let e=n.target.closest("[data-skin]");if(!(!e||e.disabled)){Ht.skin=e.dataset.skin,ne.setSkin(Sa[Ht.skin].color);for(let t of H("skin-row").children)t.classList.toggle("selected",t===e);en=!0}},H("save-btn").disabled=vt!=="game",H("save-btn").onclick=Xv,H("load-btn").onclick=()=>H("load-input").click(),H("leave-btn").onclick=$f}function $f(){if(vt!=="game"){Kh();return}nc('<span class="eyebrow">SAVUNMADAN AYRIL</span><h2>Ana men\xFCye d\xF6n\xFCls\xFCn m\xFC?</h2><p>Bu oturumda savunman\u0131n bir kopyas\u0131 men\xFCde "Devam et" olarak saklan\u0131r. Sayfay\u0131 kapat\u0131rsan kaybolur; kal\u0131c\u0131 olmas\u0131 i\xE7in \xF6nce Ayarlar b\xF6l\xFCm\xFCnden kay\u0131t dosyas\u0131 indir.</p><button class="primary" id="confirm-leave">Ana men\xFCye d\xF6n</button><button class="text-button" id="cancel-leave">Savunmaya geri d\xF6n</button>'),H("confirm-leave").onclick=()=>{R&&R.lives>0&&(Qi=JSON.parse(JSON.stringify(sc()))),Kh()},H("cancel-leave").onclick=ps}function sc(){let n=(e,t)=>Object.fromEntries(t.map(i=>[i,e[i]]));return{version:5,dailySeed:R.dailySeed,dailyDay:R.dailyDay,challenge:R.challenge,stormSeen:R.stormSeen,profile:Ht,hazards:R.hazards.map(e=>({x:e.x,z:e.z,r:e.r,life:e.life,timer:e.timer,damage:e.damage,towerId:e.t?e.t.id:0})),map:R.map,difficulty:R.difficulty,mode:R.mode,gold:R.gold,lives:R.lives,wave:R.wave,kills:R.kills,damage:R.damage,earned:R.earned,time:R.time,uid:R.uid,waveActive:R.waveActive,waveTime:R.waveTime,waveSpawned:R.waveSpawned,waveTotal:R.waveTotal,waveDone:R.waveDone,queue:R.queue,cooldowns:R.cooldowns,autoDelay:R.autoDelay,towers:R.towers.map(e=>n(e,["id","cell","kind","level","branch","invested","cd","targetMode","angle","damage","kills","focusId","focus"])),enemies:R.enemies.filter(e=>!e.dead).map(e=>n(e,["id","kind","x","z","cell","next","hp","maxHp","shield","slow","slowPower","frozen","healTimer","angle","age","blinkCd","phase"]))}}function Xv(){if(!R)return;let n=new Blob([JSON.stringify(sc(),null,2)],{type:"application/json"}),e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download="Aurora-Defense-dalga-"+R.wave+".json",t.click(),setTimeout(()=>URL.revokeObjectURL(e),5e3),ni("Kay\u0131t dosyan haz\u0131r.")}function Jf(n){if(!n||![4,5].includes(n.version)||![0,1,2].includes(n.map)||![0,1,2].includes(n.difficulty)||!["campaign","endless","daily"].includes(n.mode))throw Error("Bu dosya bir Aurora Defense kayd\u0131 de\u011Fil.");if(n.version===5){if(!cs.some(a=>a.id===n.challenge)||typeof n.dailySeed!="number"||!Number.isFinite(n.dailySeed)||!Array.isArray(n.hazards)||n.hazards.length>200)throw Error("Kay\u0131t verisi ge\xE7ersiz.");for(let a of n.hazards)for(let o of["x","z","r","life","timer","damage","towerId"])if(!a||typeof a[o]!="number"||!Number.isFinite(a[o])||Math.abs(a[o])>1e6||o==="r"&&(a[o]<=0||a[o]>10)||o==="life"&&a[o]>20)throw Error("Alev alan\u0131 verisi ge\xE7ersiz.");if(n.mode==="daily"&&n.wave>hs)throw Error("Kay\u0131t s\u0131n\u0131rlar\u0131 ge\xE7ersiz.")}for(let a of["gold","lives","wave","kills","damage","time","uid","waveTime","waveTotal","waveDone"])if(typeof n[a]!="number"||!Number.isFinite(n[a])||n[a]<0||n[a]>1e9)throw Error("Kay\u0131t verisi ge\xE7ersiz.");if(n.wave>1e3||n.lives>100||n.lives<=0||!Array.isArray(n.towers)||n.towers.length>(n.challenge==="compact"?6:185)||!Array.isArray(n.enemies)||n.enemies.length>600||!Array.isArray(n.queue)||n.queue.length>2e3)throw Error("Kay\u0131t s\u0131n\u0131rlar\u0131 ge\xE7ersiz.");let e=new Set,t=new Set(Oi[n.map].rocks.map(([a,o])=>a+o*17)),i=mn(Oi[n.map]);for(let a of n.towers){if(!_t[a.kind]||!Number.isInteger(a.cell)||a.cell<0||a.cell>=187||e.has(a.cell)||t.has(a.cell)||a.cell===i[0]||a.cell===i.at(-1)||![1,2,3,4,5].includes(a.level)||![null,"a","b"].includes(a.branch))throw Error("Kule bilgileri ge\xE7ersiz.");e.add(a.cell);for(let o of["id","invested","cd","targetMode","angle","damage","kills"])if(typeof a[o]!="number"||!Number.isFinite(a[o]))throw Error("Kule de\u011Feri ge\xE7ersiz.");if(a.targetMode<0||a.targetMode>4||a.invested<0)throw Error("Kule de\u011Feri ge\xE7ersiz.")}let s={obstacles:t,towers:n.towers,preferred:new Set(i),exit:i.at(-1)},r=eu(-1,s);if(!Number.isFinite(r[i[0]]))throw Error("Kay\u0131tl\u0131 rota kapal\u0131.");for(let a of n.enemies){if(!at[a.kind]||!Number.isInteger(a.cell)||a.cell<0||a.cell>=187||!Number.isInteger(a.next)||a.next<0||a.next>=187)throw Error("D\xFC\u015Fman verisi ge\xE7ersiz.");for(let o of["blinkCd","phase"])if(a[o]!==void 0&&(typeof a[o]!="number"||!Number.isFinite(a[o])||a[o]<0||a[o]>100))throw Error("D\xFC\u015Fman de\u011Feri ge\xE7ersiz.");for(let o of["id","x","z","hp","maxHp","shield","slow","slowPower","frozen","healTimer","angle","age"])if(typeof a[o]!="number"||!Number.isFinite(a[o]))throw Error("D\xFC\u015Fman de\u011Feri ge\xE7ersiz.");if(a.hp<=0||a.maxHp<=0||Math.abs(a.x)>20||Math.abs(a.z)>20||!Number.isFinite(r[a.next]))throw Error("D\xFC\u015Fman konumu ge\xE7ersiz.")}for(let a of n.queue)if(!at[a.kind]||!Number.isFinite(a.at)||a.at<0)throw Error("Dalga verisi ge\xE7ersiz.");if(!n.cooldowns||!Number.isFinite(n.cooldowns.orbital)||!Number.isFinite(n.cooldowns.freeze))throw Error("Destek sistemi verisi eksik.");return n}function qv(n){for(let e of["gold","lives","wave","kills","damage","earned","time","uid","waveActive","waveTime","waveSpawned","waveTotal","waveDone","autoDelay","queue","cooldowns"])n[e]!==void 0&&(R[e]=n[e]);n.version===5&&(R.dailySeed=n.dailySeed,R.dailyDay=n.dailyDay||"",R.challenge=n.challenge,R.stormSeen=n.stormSeen||0,Yv(n.profile)),R.towers=n.towers.map(e=>({...e,focus:e.focus||0,focusId:e.focusId||0})),R.enemies=n.enemies.map(e=>({...e,dead:!1,blinkCd:e.blinkCd??3,phase:e.phase??0,buff:0})),R.hazards=(n.hazards||[]).map(e=>({...e,t:R.towers.find(t=>t.id===e.towerId)||null}));for(let e of R.towers)ne.makeTower(e);for(let e of R.enemies)ne.makeEnemy(e)}function Yv(n){let e=Pf(n);Ht.medals=Ht.medals.map((t,i)=>Math.max(t,e.medals[i])),Ht.wins=Math.max(Ht.wins,e.wins),Ht.bestDaily=Math.max(Ht.bestDaily,e.bestDaily),Ht.unlocked=[...new Set([...Ht.unlocked,...e.unlocked])]}function ru(n){let e=Jf(n);return It={map:e.map,difficulty:e.difficulty,mode:e.mode},tu(e),Gn(),e}H("load-input").onchange=async n=>{let e=n.target.files[0];if(n.target.value="",!!e)try{if(e.size>2e6)throw Error("Kay\u0131t dosyas\u0131 \xE7ok b\xFCy\xFCk.");ru(await e.text().then(t=>{try{return JSON.parse(t)}catch{throw Error("Kay\u0131t dosyas\u0131 okunamad\u0131 veya bozuk.")}})),ni("Savunman geri y\xFCklendi.")}catch(t){vt==="menu"?(H("loading-text").textContent="",nc('<span class="eyebrow">KAYIT Y\xDCKLENEMED\u0130</span><h2>Ge\xE7ersiz dosya</h2><p>Ge\xE7erli bir Aurora Defense JSON kayd\u0131 se\xE7melisin. Mevcut oyunun ve men\xFC durumu de\u011Fi\u015Fmedi.</p>')):ni(t.message||"Kay\u0131t dosyas\u0131 okunamad\u0131.")}};function Gn(){H("map-choices").innerHTML=Oi.map((t,i)=>`<button class="map-choice ${It.map===i?"selected":""}" data-map="${i}" aria-pressed="${It.map===i}" title="${t.desc}"><span class="map-icon">${ji(i===0?"mountain":i===1?"crystal":"castle")}</span><small>0${i+1} \xB7 ${t.label}</small><strong>${t.name}</strong></button>`).join(""),H("difficulty-choices").innerHTML=Ma.map((t,i)=>`<button data-difficulty="${i}" class="${It.difficulty===i?"selected":""}" aria-pressed="${It.difficulty===i}">${t.name}</button>`).join("");for(let t of H("mode-choices").children)t.classList.toggle("selected",t.dataset.mode===It.mode),t.setAttribute("aria-pressed",String(t.dataset.mode===It.mode));let n=Yl();H("mode-note").textContent=It.mode==="daily"?"Bug\xFCn\xFCn d\xFCzeni ("+n.day+"): "+Oi[n.map].name+" \xB7 "+cs.find(t=>t.id===n.challenge).name+" \u2014 "+cs.find(t=>t.id===n.challenge).desc:"Harita kural\u0131 \xB7 "+zn[It.map].title+": "+zn[It.map].desc;let e=t=>"\u2605".repeat(t)+"\u2606".repeat(3-t);H("profile-line").textContent="SEFER YILDIZLARI  01 "+e(Ht.medals[0])+"  02 "+e(Ht.medals[1])+"  03 "+e(Ht.medals[2])+"   \xB7   G\xDCNL\xDCK EN \u0130Y\u0130 "+Ht.bestDaily+"/"+hs+"   \xB7   \u0130lerleme bu oturumda tutulur; kal\u0131c\u0131 olmas\u0131 i\xE7in kay\u0131t dosyas\u0131 indir.",H("continue-btn").hidden=!Qi,Qi&&(H("continue-text").textContent="Devam et \xB7 dalga "+Qi.wave)}H("map-choices").onclick=n=>{let e=n.target.closest("[data-map]");e&&(It.map=+e.dataset.map,Gn(),qe.sfx("click"))};H("difficulty-choices").onclick=n=>{let e=n.target.closest("[data-difficulty]");e&&(It.difficulty=+e.dataset.difficulty,Gn())};H("mode-choices").onclick=n=>{let e=n.target.closest("[data-mode]");e&&(It.mode=e.dataset.mode,Gn())};H("tower-list").innerHTML=Bh.map((n,e)=>{let t=_t[n];return`<button class="tower-card" data-kind="${n}" aria-label="${t.name}, ${t.cost} kredi" aria-pressed="false" title="${t.name} \xB7 ${t.desc}" style="--tower-color:${t.color}"><span class="key">${e+1}</span><div class="tower-art">${kh(n)}</div><strong>${t.name}</strong><span class="tower-cost">${ji("gem")}${t.cost}</span></button>`}).join("");H("tower-list").onclick=n=>{let e=n.target.closest("[data-kind]");e&&Wf(e.dataset.kind)};H("inspector").onclick=n=>{let e=n.target.closest("[data-action]");if(!e||e.disabled||!Gt)return;let t=Gt;e.dataset.action==="upgrade"&&Jh(t),e.dataset.action==="branch"&&Jh(t,e.dataset.branch),e.dataset.action==="sell"&&kv(t),e.dataset.action==="target"&&(t.targetMode=(t.targetMode+1)%5,tn="",Kt()),e.dataset.action==="close"&&Ta()};H("start-btn").onclick=()=>tu();H("continue-btn").onclick=()=>{if(Qi)try{ru(JSON.parse(JSON.stringify(Qi))),ni("Kontrol noktas\u0131ndan devam ediyorsun.")}catch{Qi=null,Gn(),ni("Kontrol noktas\u0131 okunamad\u0131.")}};H("menu-help").onclick=su;H("home-btn").onclick=$f;H("load-menu-btn").onclick=()=>H("load-input").click();H("wave-btn").onclick=iu;H("pause-btn").onclick=ec;H("resume-btn").onclick=ec;H("speed-btn").onclick=Zf;H("sound-btn").onclick=()=>qe.setMute(!qe.muted);H("settings-btn").onclick=Wv;H("help-btn").onclick=su;H("orbital-btn").onclick=()=>Ql("orbital");H("freeze-btn").onclick=()=>Ql("freeze");H("cancel-target").onclick=Ta;H("auto-wave").onchange=n=>{tc=n.target.checked,R&&!R.waveActive&&(R.autoDelay=8)};H("modal-close").onclick=ps;H("modal-backdrop").onclick=n=>{n.target===H("modal-backdrop")&&ps()};H("grid-btn").onclick=()=>{ne.gridVisible=!ne.gridVisible,H("grid-btn").classList.toggle("active",ne.gridVisible),H("grid-btn").setAttribute("aria-pressed",String(ne.gridVisible))};H("route-btn").onclick=()=>{ne.routeVisible=!ne.routeVisible,ne.routeGroup.visible=ne.routeVisible,H("route-btn").classList.toggle("active",ne.routeVisible),H("route-btn").setAttribute("aria-pressed",String(ne.routeVisible))};H("rotate-btn").onclick=()=>ne.rotate();H("reset-camera-btn").onclick=()=>ne.resetCamera();H("result-retry").onclick=()=>tu();H("result-menu").onclick=Kh;H("result-endless").onclick=()=>{R.mode="endless",It.mode="endless",vt="game",H("result").hidden=!0,R.autoDelay=8,fs("SONSUZ SAVUNMA","SEFER TAMAMLANDI"),Kt()};document.addEventListener("keydown",n=>{if(!n.target.matches("input,select,textarea")){if(n.code==="Escape"){n.preventDefault(),H("modal-backdrop").hidden?Tt||Gt||Lt?Ta():vt==="game"&&ec():ps();return}if(n.code==="KeyH"){su();return}if(n.code==="KeyM"){qe.setMute(!qe.muted);return}if(!(vt!=="game"||!H("modal-backdrop").hidden)){if(n.code.startsWith("Digit")&&+n.key>=1&&+n.key<=6){Wf(Bh[+n.key-1]);return}n.code==="Space"&&(n.preventDefault(),ec()),!n.repeat&&(n.code==="KeyN"&&iu(),n.code==="KeyX"&&Zf(),n.code==="KeyQ"&&Ql("orbital"),n.code==="KeyE"&&Ql("freeze"),n.code==="KeyG"&&H("grid-btn").click(),n.code==="KeyR"&&ne.rotate(),n.code==="KeyF"&&ne.resetCamera(),n.code==="KeyU"&&Gt&&Jh(Gt))}}});function Zv(){let n=ne.renderer.domElement,e=null;n.addEventListener("contextmenu",t=>t.preventDefault()),n.addEventListener("pointerdown",t=>{t.button===0&&(e={x:t.clientX,y:t.clientY,id:t.pointerId},qe.init())}),n.addEventListener("pointermove",t=>{if(vt!=="game"||rt)return;let i=ne.point(t.clientX,t.clientY);Vn=i?.cell??-1,Lt&&i&&i.cell>=0?ne.aim(i.x,i.z,Lt==="orbital"?2.6:3.2,Lt==="orbital"?"#ffc991":"#a3e3ff"):Lt&&(ne.aimRing.visible=!1),nu()}),n.addEventListener("pointerleave",()=>{Vn=-1,ne.highlight.visible=!1,Gt||ne.showRange(-1,0)}),n.addEventListener("pointerup",t=>{if(vt!=="game"||rt||t.button!==0||!e)return;let i=Math.hypot(t.clientX-e.x,t.clientY-e.y);if(e=null,i>9)return;let s=ne.point(t.clientX,t.clientY);if(!s||s.cell<0){Lt||Ta();return}if(Vn=s.cell,Lt){Gv(s.x,s.z);return}let r=R.towers.find(a=>a.cell===s.cell);if(r){Ov(r),qe.sfx("click");return}Tt?Bv(s.cell):Ta()})}function Jl(n){Object.assign(gn,n),ne.setEffectScale(gn.effects),ne.setReduceMotion(gn.reduceMotion),document.body.classList.toggle("reduce-motion",gn.reduceMotion),en=!0}var Kv=["Soldan bir kule se\xE7. N\xF6bet\xE7i ile ba\u015Flamak iyi bir fikir (tu\u015F 1).","Yolun yan\u0131ndaki bir h\xFCcreye t\u0131kla. D\xFC\u015Fmanlar kulenin etraf\u0131ndan dolan\u0131r.",'Haz\u0131rsan "\u0130lk dalgay\u0131 ba\u015Flat" d\xFC\u011Fmesine bas (tu\u015F N).'];function $v(){let n=H("coach");if(!zf||Qh||vt!=="game"||!R||R.wave>0){n.hidden=!0;return}let e=R.towers.length?2:Tt?1:0;n.hidden=!1,H("coach-step").textContent=e+1,H("coach-text").textContent=Kv[e]}H("coach-skip").onclick=()=>{Qh=!0,H("coach").hidden=!0};function jf(n){requestAnimationFrame(jf);let e=Math.min(.08,(n-(Df||n))/1e3);if(Df=n,!ne)return;let t=vt==="game"&&!rt?e*Hn:0;if(!jh)for(Yh+=t;Yh>=1/60;)qf(1/60),Yh-=1/60;let i=document.hidden||vt!=="game",s=!1,r=e;if(i||(rt?(wa+=e,(en||wa>=.2)&&(s=!0,r=wa,wa=0)):(s=!0,wa=0),en&&(s=!0,en=!1)),s&&(ne.noRender=!1,ne.update(r,0,R)),qe.update(e),qh+=e,qh>.15&&(qh=0,Kt()),vt==="game"&&!rt&&!document.hidden&&(Zh++,$l+=e,Ff+=e),$l>=1){let a=Math.round(Zh/$l);if(H("perf").textContent=a+" FPS \xB7 "+{high:"Y\xDCKSEK",medium:"DENGEL\u0130",low:"HAF\u0130F"}[ne.quality],window.__fps=a,gn.autoQuality&&Ff>6&&ne.quality!=="low"){if(Ea=a<26?Ea+1:0,Ea>=4){Ea=0;let o=ne.quality==="high"?"medium":"low";ne.setQuality(o),ni("Ak\u0131c\u0131l\u0131k i\xE7in grafik kalitesi "+(o==="medium"?"dengeliye":"hafife")+" al\u0131nd\u0131. Ayarlardan de\u011Fi\u015Ftirebilirsin.")}}else Ea=0;$l=0,Zh=0}}var Zh=0,$l=0;window.render_game_to_text=()=>JSON.stringify({screen:vt,paused:rt,speed:Hn,map:R?.map,mode:R?.mode,coordinates:"17 s\xFCtun \xD7 11 sat\u0131r; h\xFCcre = s\xFCtun + sat\u0131r \xD7 17; x sa\u011Fa, z a\u015Fa\u011F\u0131",gold:R?.gold,lives:R?.lives,wave:R?.wave,waveActive:R?.waveActive,queue:R?.queue.length,kills:R?.kills,selectedKind:Tt,selectedCell:Gt?.cell,ability:Lt,cooldowns:R?.cooldowns,route:R?.route,towers:R?.towers.map(n=>({cell:n.cell,kind:n.kind,level:n.level,branch:n.branch,target:Oh[n.targetMode],damage:Math.round(n.damage)})),enemies:R?.enemies.filter(n=>!n.dead).map(n=>({kind:n.kind,x:+n.x.toFixed(2),z:+n.z.toFixed(2),hp:Math.round(n.hp),frozen:+n.frozen.toFixed(1)}))});window.advanceTime=n=>{jh=!0;let e=Math.max(1,Math.round(n/(1e3/60)));ne.noRender=!0;for(let t=0;t<e;t++)qf(1/60),ne.update(1/60,0,R);ne.noRender=!1,ne.update(1/60,0,R),Kt()};window.auroraQA={projectCell:n=>ne.projectCell(n),snapshot:sc,validateSave:Jf,getState:()=>R,resumeRealtime:()=>{jh=!1},getWorld:()=>ne,loadSave:ru,getCheckpoint:()=>Qi,getProfile:()=>Ht,setPrefs:n=>Jl(n),stats:()=>({rendered:ne.renderedFrames,screen:vt,paused:rt}),bossPhases:Xf,spawnEnemy:Aa,damageEnemy:ki};async function Jv(){Gn();try{ne=new ql(H("renderer")),R=Gf(),ic(),Zv(),ne.controls.addEventListener("change",()=>en=!0);for(let n of["pointermove","pointerdown","wheel"])ne.renderer.domElement.addEventListener(n,()=>en=!0,{passive:!0});window.addEventListener("resize",()=>en=!0),Gn(),Kt(),await document.fonts.ready,H("loading").hidden=!0,requestAnimationFrame(jf)}catch(n){console.error(n),H("loading-text").textContent="3D g\xF6r\xFCnt\xFC ba\u015Flat\u0131lamad\u0131. WebGL destekleyen bir taray\u0131c\u0131da tekrar a\xE7."}}Jv();
