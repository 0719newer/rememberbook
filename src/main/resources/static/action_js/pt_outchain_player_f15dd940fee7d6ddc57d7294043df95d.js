(function(){var c1x=NEJ.P,bc2x=NEJ.O,a1x=c1x("nej.e"),h1x=c1x("nej.v"),k1x=c1x("nej.u"),v2x=c1x("nej.j"),H2x=c1x("nej.ut"),dK3x=c1x("nm.u"),b1x,L2x;dK3x.JZ3x=NEJ.C();b1x=dK3x.JZ3x.M2x(H2x.cO3x);b1x.cz2x=function(){this.cI3x();a1x.tB8t({src:location.protocol+"//music.163.com/style/swf/CloudMusicPlayer.swf?v=2014060988888",hidden:true,parent:document.body,params:{flashvars:"hostname="+location.hostname,allowscriptaccess:"always",wmode:"transparent"},onready:this.Se5j.f1x(this)});window.onIoError=this.AB0x.f1x(this);window.onLoadProgress=this.AE1x.f1x(this);window.onPlayProgress=this.xD0x.f1x(this);window.onPlayComplete=this.coX8P.f1x(this)};b1x.bC2x=function(){this.xa9R();this.cOr4v()};b1x.Se5j=function(ik5p){this.by2x=ik5p;if(typeof console==="undefined"){console={}}console.aslog=this.coV8N.f1x(this);this.nv7o(this.coU8M);this.et4x(this.jy5D)};b1x.coV8N=function(bG2x){this.by2x.as_postMessage(bG2x)};b1x.xa9R=function(){delete this.jy5D;if(this.by2x){this.by2x.as_stop();this.by2x.as_clear()}};b1x.AB0x=function(bZ2x){this.z2x("onplayerror",{name:"ioerror",code:bZ2x})};b1x.AE1x=function(pZ7S,cF3x){if(this.gN4R<1)return;this.z2x("onloadprogress",{loaded:pZ7S/1e3,duration:cF3x/1e3})};b1x.xD0x=function(coT8L,cF3x){this.gN4R=cF3x;this.z2x("onplayprogress",{current:coT8L/1e3,duration:cF3x/1e3})};b1x.coX8P=function(i1x){this.z2x("onstatechange",{state:4})};b1x.et4x=function(cZ3x,DN1x,pM7F,Ru5z){this.xa9R();if(DN1x>0){if(Ru5z){v2x.bk2x("/api/song/enhance/dj/audition/url",{type:"json",query:{id:DN1x,br:192e3},onload:function(ic5h){if(ic5h&&ic5h.data&&ic5h.data.url){doPlay.call(this,ic5h.data.url)}}.f1x(this)})}else{v2x.bk2x("/api/song/enhance/player/url",{type:"json",query:{ids:JSON.stringify([DN1x]),br:128e3},onload:function(ic5h){if(ic5h.code==200&&ic5h.data&&ic5h.data.length){var bx2x=ic5h.data[0];if(bx2x.url){doPlay.call(this,bx2x.url)}}}.f1x(this)})}}else{doPlay.call(this,cZ3x)}function doPlay(cZ3x){if(!cZ3x)return;this.jy5D=cZ3x;this.gN4R=0;if(this.by2x){this.by2x.as_addSong({id:DN1x,url:this.jy5D});if(pM7F===undefined)pM7F=true;if(pM7F){this.by2x.as_play();this.z2x("onstatechange",{state:1})}}}};b1x.fF4J=function(){if(this.by2x&&this.jy5D){this.by2x.as_pause();this.z2x("onstatechange",{state:2})}};b1x.pc7V=function(){if(this.by2x&&this.jy5D){this.by2x.as_play();this.z2x("onstatechange",{state:1})}};b1x.bg2x=function(){this.xa9R();this.z2x("onstatechange",{state:3})};b1x.pI7B=function(fu4y){if(!this.by2x||!this.jy5D)return;this.by2x.as_setPosition(this.gN4R*fu4y);this.by2x.currentTime=this.by2x.duration*fu4y};b1x.GK2x=function(Ri5n){if(this.by2x)this.by2x.as_setMuted(!!Ri5n);this.z2x("onmutedchange",{muted:Ri5n})};b1x.nv7o=function(C2x){this.coU8M=C2x;if(this.by2x)this.by2x.as_setVolume(C2x);this.z2x("onvolumechange",{value:C2x})};b1x.xk0x=function(){return this.by2x&&this.by2x.as_isPlaying()}})();
(function(){var c1x=NEJ.P,bc2x=NEJ.O,a1x=c1x("nej.e"),v2x=c1x("nej.j"),h1x=c1x("nej.v"),k1x=c1x("nej.u"),H2x=c1x("nej.ut"),dK3x=c1x("nm.u"),b1x,L2x;function coS8K(Z2x){return(Z2x||"").replace(/^https?:/,"")}dK3x.Rh5m=NEJ.C();b1x=dK3x.Rh5m.M2x(H2x.cO3x);b1x.cz2x=function(){var bwA7t=function(Y2x){h1x.s2x(this.by2x,Y2x,this.coR8J.f1x(this,Y2x))};return function(){this.cI3x();this.by2x=new Audio;this.mw6q=["play","pause","ended","playing","progress","loadeddata","timeupdate","error","emptied"];k1x.be2x(this.mw6q,bwA7t,this);this.bip3x=0;this.Rf5k=0}}();b1x.bC2x=function(){this.xa9R();this.bH2x()};b1x.xa9R=function(){if(!this.by2x.currentSrc)return;this.Zx8p();try{this.by2x.currentTime=0}catch(e){}this.by2x.pause();this.by2x.src=""};b1x.coR8J=function(Y2x){switch(Y2x){case"play":case"loadeddata":if(Y2x=="loadeddata")this.Zx8p();this.z2x("onstatechange",{state:0});break;case"pause":this.z2x("onstatechange",{state:2});break;case"ended":this.z2x("onstatechange",{state:4});break;case"playing":this.z2x("onstatechange",{state:1});break;case"progress":if(!this.by2x.buffered.length)return;var a1x=this.by2x.buffered.end(0);this.z2x("onloadprogress",{loaded:a1x,duration:this.by2x.duration});break;case"timeupdate":this.z2x("onplayprogress",{current:this.by2x.currentTime,duration:this.by2x.duration});break;case"emptied":break;case"error":var bZ2x=this.by2x.error,bS2x=this.by2x.currentSrc,Zy8q=this.by2x.currentTime;if(bZ2x){switch(bZ2x.code){case bZ2x.MEDIA_ERR_ABORTED:case bZ2x.MEDIA_ERR_DECODE:case bZ2x.MEDIA_ERR_ENCRYPTED:this.z2x("onplayerror",{error:bZ2x.code,src:bS2x,time:Zy8q});break;case bZ2x.MEDIA_ERR_NETWORK:this.biG3x(bS2x,Zy8q);break;case bZ2x.MEDIA_ERR_SRC_NOT_SUPPORTED:if(!!this.by2x.src&&this.by2x.src!=location.protocol+"//"+location.host+"/"&&this.by2x.src.indexOf("#")<0){this.z2x("onplayerror",{error:bZ2x.code,src:bS2x,time:Zy8q})}break;default:this.z2x("onplayerror",{error:-1,src:bS2x,time:Zy8q});break}}break}};b1x.et4x=function(cZ3x,DN1x,pM7F,Ru5z){this.Zx8p();if(DN1x>0){if(Ru5z){v2x.bk2x("/api/song/enhance/dj/audition/url",{type:"json",query:{id:DN1x,br:192e3},onload:function(ic5h){if(ic5h&&ic5h.data&&ic5h.data.url){doPlay.call(this,ic5h.data.url)}}.f1x(this)})}else{v2x.bk2x("/api/song/enhance/player/url",{type:"json",query:{ids:JSON.stringify([DN1x]),br:128e3},onload:function(ic5h){if(ic5h.code==200&&ic5h.data&&ic5h.data.length){var bx2x=ic5h.data[0];if(bx2x.url){doPlay.call(this,bx2x.url)}}}.f1x(this)})}}else{doPlay.call(this,cZ3x)}function doPlay(cZ3x){this.by2x.src=coS8K(cZ3x);if(pM7F===undefined)pM7F=true;if(pM7F){this.by2x.play()}}};b1x.Zx8p=function(){this.Rf5k=0;this.bip3x=clearTimeout(this.bip3x)};b1x.biG3x=function(cZ3x,biJ3x){if(!cZ3x||this.Rf5k>5){if(this.Rf5k>5)this.z2x("onplayerror",{error:2,src:cZ3x,time:biJ3x});this.Zx8p();return}if(this.Rf5k>0){var r2x=cZ3x.indexOf("#");cZ3x=r2x>=0?cZ3x.substring(0,r2x):cZ3x;this.by2x.src=cZ3x+"#t="+biJ3x;this.by2x.play()}this.Rf5k++;this.bip3x=setTimeout(arguments.callee.f1x(this,cZ3x,biJ3x),5e3)};b1x.fF4J=function(){this.by2x.pause()};b1x.pc7V=function(){this.by2x.play()};b1x.bg2x=function(){this.xa9R();this.z2x("onstatechange",{state:3})};b1x.pI7B=function(fu4y){if(!this.by2x.currentSrc)return;this.by2x.currentTime=this.by2x.duration*fu4y};b1x.GK2x=function(Ri5n){this.by2x.muted=!!Ri5n;this.z2x("onmutedchange",{muted:Ri5n})};b1x.nv7o=function(C2x){this.by2x.volume=C2x;this.z2x("onvolumechange",{value:C2x})};b1x.xk0x=function(){return this.by2x.currentTime>0&&!this.by2x.ended&&!this.by2x.paused}})();
(function(){var c1x=NEJ.P,bc2x=NEJ.O,fn4r=NEJ.R,a1x=c1x("nej.e"),h1x=c1x("nej.v"),P2x=c1x("nej.ut"),BZ1x;if(!!P2x.bbI9z)return;P2x.bbI9z=NEJ.C();BZ1x=P2x.bbI9z.M2x(P2x.cO3x);BZ1x.cz2x=function(){this.la6U={onchange:this.gq4u.f1x(this),ondragend:this.gq4u.eG4K(this,!0)};this.cI3x()};BZ1x.bn2x=function(e1x){this.bp2x(e1x);this.la6U.view=a1x.A2x(e1x.track);this.la6U.body=a1x.A2x(e1x.slide);this.la6U.mbar=this.la6U.view;this.wi9Z(e1x.range);this.bY2x([[this.la6U.view,"mousedown",this.clE7x.f1x(this)]]);this.jj5o=P2x.wm9d.B2x(this.la6U)};BZ1x.bC2x=function(){this.bH2x();this.jj5o.V2x();delete this.jj5o;delete this.in5s;delete this.la6U.view;delete this.la6U.body;delete this.la6U.mbar};BZ1x.gq4u=function(d1x,gh4l){var bVW4a=d1x.left/this.in5s.x[1],bVX4b=d1x.top/this.in5s.y[1],bVZ4d=this.in5s.x,bWa4e=this.in5s.y;this.z2x("onchange",{stopped:!!gh4l,x:{rate:bVW4a,value:bVW4a*(bVZ4d[1]-bVZ4d[0])},y:{rate:bVX4b,value:bVX4b*(bWa4e[1]-bWa4e[0])}})};BZ1x.clE7x=function(d1x){var bl2x=a1x.ix5C(this.la6U.view),bWb4f={x:h1x.ka5f(d1x),y:h1x.mA6u(d1x)},dw3x={x:Math.floor(this.la6U.body.offsetWidth/2),y:Math.floor(this.la6U.body.offsetHeight/2)};this.jj5o.hb4f({top:bWb4f.y-bl2x.y-dw3x.y,left:bWb4f.x-bl2x.x-dw3x.x})};BZ1x.wi9Z=function(dm3x){var sT8L;if(!!this.in5s){var oU7N=this.jj5o.buq6k();sT8L={x:oU7N.left/this.in5s.x[1],y:oU7N.top/this.in5s.y[1]}}dm3x=dm3x||bc2x;var clC7v=(dm3x.x||fn4r)[1]||this.la6U.view.clientWidth-this.la6U.body.offsetWidth,clB7u=(dm3x.y||fn4r)[1]||this.la6U.view.clientHeight-this.la6U.body.offsetHeight;this.in5s={x:dm3x.x||[0,clC7v],y:dm3x.y||[0,clB7u]};if(!!sT8L)this.hb4f(sT8L);return this};BZ1x.hb4f=function(sT8L){sT8L=sT8L||bc2x;this.jj5o.hb4f({top:this.in5s.y[1]*(sT8L.y||0),left:this.in5s.x[1]*(sT8L.x||0)})}})();
(function(){var P2x=NEJ.P("nej.ut"),bWh4l;if(!!P2x.Nz4D)return;P2x.Nz4D=NEJ.C();bWh4l=P2x.Nz4D.M2x(P2x.bbI9z);bWh4l.cz2x=function(){this.cI3x();this.la6U.direction=2}})();
(function(){var c1x=NEJ.P,a1x=c1x("nej.e"),h1x=c1x("nej.v"),P2x=c1x("nej.p"),bF2x=c1x("nej.ui"),cg2x=c1x("nej.ut"),x2x=c1x("nm.w"),b1x,L2x;x2x.Ah0x=NEJ.C();b1x=x2x.Ah0x.M2x(bF2x.eo4s);L2x=x2x.Ah0x.ct2x;b1x.cz2x=function(){this.cI3x()};b1x.bn2x=function(e1x){this.bp2x(e1x);this.o2x=a1x.A2x(e1x.content);this.mO6I=a1x.A2x(e1x.slide);this.jy5D=a1x.A2x(e1x.track);this.bXU4Y=e1x.speed;this.bjE3x=this.o2x.scrollHeight-this.o2x.clientHeight;a1x.bd2x(this.mO6I,"height",(this.o2x.clientHeight/this.o2x.scrollHeight*parseInt(a1x.dl3x(this.jy5D,"height"))||0)+"px");if(this.o2x.scrollHeight<=this.o2x.clientHeight)a1x.bd2x(this.mO6I,"display","none");else a1x.bd2x(this.mO6I,"display","block");this.xw0x=cg2x.Nz4D.B2x({slide:this.mO6I,track:this.jy5D,onchange:this.bjG3x.f1x(this)});if(P2x.dy3x.browser!="firefox")this.bY2x([[this.o2x,"mousewheel",this.HA2x.f1x(this)]]);else{this.o2x.addEventListener("DOMMouseScroll",this.HA2x.f1x(this),false)}};b1x.bC2x=function(){this.bH2x();this.xw0x.V2x();delete this.o2x;delete this.mO6I;delete this.jy5D;delete this.in5s;delete this.bXU4Y};b1x.bjG3x=function(d1x){this.o2x.scrollTop=parseInt(this.bjE3x*d1x.y.rate)};b1x.HA2x=function(d1x){h1x.cq2x(d1x);this.bjE3x=this.o2x.scrollHeight-this.o2x.clientHeight;var dw3x=0,Li4m,ci2x,gJ4N;ci2x=parseInt(this.jy5D.clientHeight)-parseInt(a1x.dl3x(this.mO6I,"height"));dw3x=d1x.wheelDelta?d1x.wheelDelta/120:-d1x.detail/3;Li4m=parseInt(a1x.dl3x(this.mO6I,"top"))-dw3x*this.bXU4Y;if(Li4m<0)Li4m=0;if(Li4m>ci2x)Li4m=ci2x;a1x.bd2x(this.mO6I,"top",Li4m+"px");gJ4N=parseInt(a1x.dl3x(this.mO6I,"top"));this.xw0x.z2x("onchange",{y:{rate:gJ4N/ci2x}})};b1x.qk7d=function(){this.bjE3x=this.o2x.scrollHeight-this.o2x.clientHeight;this.xw0x.hb4f({x:0,y:0});a1x.bd2x(this.mO6I,"height",this.o2x.clientHeight/this.o2x.scrollHeight*parseInt(this.jy5D.clientHeight)+"px");this.xw0x.wi9Z({x:[],y:[0,this.jy5D.clientHeight-parseInt(a1x.dl3x(this.mO6I,"height"))]});if(this.o2x.scrollHeight<=this.o2x.clientHeight)a1x.bd2x(this.mO6I,"display","none");else a1x.bd2x(this.mO6I,"display","block")};b1x.hb4f=function(dT4X){this.xw0x.hb4f(dT4X)};b1x.Mz4D=function(bjK3x){var clj7c=parseInt(a1x.dl3x(this.mO6I,"height"));var cli7b=parseInt(a1x.dl3x(this.jy5D,"height"));var xQ0x=cli7b-clj7c;var gJ4N=parseInt(xQ0x*bjK3x)+"px";a1x.bd2x(this.mO6I,"top",gJ4N)};b1x.bYh4l=function(){if(this.o2x.scrollHeight<=this.o2x.clientHeight)return;var bjK3x=this.o2x.scrollTop/(this.o2x.scrollHeight-this.o2x.clientHeight);this.Mz4D(bjK3x)};b1x.cOK4O=function(){if(this.xw0x)this.xw0x.wi9Z()}})();
(function(){var c1x=NEJ.P,a1x=c1x("nej.e"),h1x=c1x("nej.v"),P2x=c1x("nej.ut"),yC0x;P2x.Hv2x=NEJ.C();yC0x=P2x.Hv2x.M2x(P2x.cO3x);yC0x.bn2x=function(e1x){this.bp2x(e1x);this.clz7s=!!e1x.reset;this.VY7R=parseInt(e1x.delta)||0;this.jy5D=a1x.A2x(e1x.track);this.bWo4s=a1x.A2x(e1x.progress);this.bY2x([[e1x.thumb,"mousedown",this.clx7q.f1x(this)],[document,"mousemove",this.bWq4u.f1x(this)],[document,"mouseup",this.biz3x.f1x(this)],[this.jy5D,"mousedown",this.bWs4w.f1x(this)]]);var fu4y=e1x.value;if(fu4y==null){fu4y=this.bWo4s.offsetWidth/this.jy5D.offsetWidth}this.hb4f(fu4y)};yC0x.bC2x=function(){if(!!this.clz7s)this.Xi7b(0);this.bH2x()};yC0x.clx7q=function(d1x){if(!!this.ih5m)return;h1x.bg2x(d1x);this.ih5m=h1x.ka5f(d1x);this.bWu4y=this.jy5D.offsetWidth};yC0x.bWq4u=function(d1x){if(!this.ih5m)return;var bl2x=h1x.ka5f(d1x),dw3x=bl2x-this.ih5m;this.ih5m=bl2x;this.Xi7b(this.Hw2x+dw3x/this.bWu4y);this.z2x("onslidechange",{ratio:this.Hw2x})};yC0x.biz3x=function(d1x){if(!this.ih5m)return;this.bWq4u(d1x);delete this.ih5m;delete this.bWu4y;this.z2x("onslidestop",{ratio:this.Hw2x})};yC0x.bWs4w=function(d1x){var clw7p=a1x.ix5C(this.jy5D).x,clv7o=h1x.ka5f(d1x);this.Xi7b((clv7o-clw7p+this.VY7R)/this.jy5D.offsetWidth);this.z2x("onslidestop",{ratio:this.Hw2x})};yC0x.Xi7b=function(fu4y){this.Hw2x=Math.max(0,Math.min(1,fu4y));a1x.bd2x(this.bWo4s,"width",this.Hw2x*100+"%")};yC0x.hb4f=function(fu4y){if(!!this.ih5m)return;this.Xi7b(fu4y)};yC0x.buq6k=function(fu4y){return this.Hw2x}})();
(function(){var c1x=NEJ.P,fn4r=NEJ.R,a1x=c1x("nej.e"),P2x=c1x("nej.p"),h1x=c1x("nej.v"),k1x=c1x("nej.u"),H2x=c1x("nej.ut"),v2x=c1x("nej.j"),E2x=c1x("nm.m"),dK3x=c1x("nm.u"),l1x=c1x("nm.x"),x2x=c1x("nm.w"),b1x,L2x;E2x.Vh6b=NEJ.C();b1x=E2x.Vh6b.prototype;b1x.cz2x=function(){this.ig5l=location.parse(location.href).query;this.o2x=a1x.A2x("player");this.bbt9k();this.cdQ5V();this.bX2x();this.Uh6b();this.bQY2x();this.cdR5W();this.dE3x.nv7o(.8)};b1x.bbt9k=function(){var Dl1x=a1x.do3x("audio"),el4p=Dl1x.canPlayType&&Dl1x.canPlayType("audio/mpeg")?dK3x.Rh5m:dK3x.JZ3x;this.dE3x=el4p.B2x({onstatechange:this.gF4J.f1x(this),onloadprogress:this.AE1x.f1x(this),onplayprogress:this.xD0x.f1x(this)})};b1x.cdQ5V=function(){if(this.ig5l.height==32){this.cb2x="player-sm"}else if(this.ig5l.height==66){this.cb2x="player-mid"}else if(this.ig5l.height==90){this.cb2x="player-bg"}else{this.cb2x="player-list"}if(this.ig5l.bg){a1x.bd2x(document.body,"background","#"+this.ig5l.bg)}this.o2x.innerHTML=a1x.io5t(this.cb2x)};b1x.bX2x=function(){this.lk6e=a1x.A2x("cover");this.kx5C=a1x.A2x("title");this.OT5Y=a1x.A2x("bar");this.qF8x=a1x.A2x("time");this.gE4I=a1x.A2x("prev");this.IA3x=a1x.A2x("next");this.hv5A=a1x.A2x("play");this.bRR3x=a1x.A2x("pause");this.cPw4A=a1x.A2x("open");this.bM2x=a1x.A2x("list");this.Ie3x=a1x.A2x("list-box");this.na6U=a1x.A2x("loading");this.bRH3x=a1x.A2x("ctrl-box");this.bRG3x=a1x.A2x("sm-mid");this.bRE3x=a1x.A2x("mid-ctrl");h1x.s2x(this.o2x,"click",this.bU2x.f1x(this));h1x.s2x(document,"mouseout",this.WB7u.f1x(this));h1x.s2x(window,"resize",this.EF2x.f1x(this));h1x.s2x(window,"beforeunload",this.bvE6y.f1x(this))};b1x.Uh6b=function(){var j1x=a1x.F2x(this.OT5Y,"j-flag");this.xw0x=H2x.Hv2x.B2x({track:this.OT5Y,thumb:j1x[1],progress:j1x[0],onslidechange:this.bjG3x.f1x(this),onslideStop:this.biz3x.f1x(this)})};b1x.bQY2x=function(){if(!this.bM2x)return;var j1x=a1x.F2x(this.bM2x,"j-flag");this.jm5r=x2x.Ah0x.B2x({content:this.Ie3x,slide:j1x[1],track:j1x[0],speed:5})};b1x.cdR5W=function(){var cdZ6T={0:"/api/playlist/detail",1:"/api/album/{id}",2:"/api/song/detail",3:"/api/dj/program/detail",4:"/api/dj/program/byradio?radioId={id}"},Z2x=cdZ6T[this.ig5l.type];v2x.bk2x(l1x.bec0x(Z2x,this.ig5l),{type:"json",query:{id:this.ig5l.id,ids:JSON.stringify([this.ig5l.id]),limit:1e4,offset:0},onload:this.bRs3x.f1x(this),onerror:this.bRs3x.f1x(this)})};b1x.bRs3x=function(d1x){if(d1x.code==200){switch(parseInt(this.ig5l.type)){case 0:this.hF5K=d1x.result.tracks;this.kx5C.innerHTML=a1x.cd2x("title",{title:k1x.dN4R(d1x.result.name)});this.AR1x(d1x.result.coverImgUrl);break;case 1:this.hF5K=d1x.album.songs;this.kx5C.innerHTML=a1x.cd2x("title",{title:d1x.album.name,sub:d1x.album.artist.name});this.AR1x(d1x.album.picUrl);break;case 2:this.hF5K=d1x.songs;var bm2x=d1x.songs[0],gi4m=[];k1x.be2x(bm2x.artists,function(wx9o){gi4m.push(wx9o.name)});this.kx5C.innerHTML=a1x.cd2x("title",{title:bm2x.name,sub:gi4m.join("/")});this.AR1x(bm2x.album.picUrl);break;case 3:this.hF5K=[d1x.program.mainSong];this.kx5C.innerHTML=a1x.cd2x("title",{title:k1x.dN4R(d1x.program.name)});this.AR1x(d1x.program.coverUrl);break;case 4:if(d1x.programs&&d1x.programs.length){var dG3x=d1x.programs[0].radio;this.kx5C.innerHTML=a1x.cd2x("title",{title:k1x.dN4R(dG3x.name)});this.AR1x(dG3x.picUrl);this.hF5K=[];k1x.be2x(d1x.programs,function(dc3x){if(dc3x.mainSong){dc3x.mainSong.name=dc3x.name;dc3x.mainSong.artists=[{name:dG3x.name}];this.hF5K.push(dc3x.mainSong)}},this)}break}this.cec6W();if(parseInt(this.ig5l.auto)){this.Ic3x(0)}this.EF2x();this.pd7W();if(this.jm5r)this.jm5r.qk7d()}else{alert("资源加载失败")}};b1x.Ic3x=function(r2x){r2x=parseInt(r2x)||0;if(r2x>this.hF5K.length-1){r2x=0}else if(r2x<0){r2x=this.hF5K.length-1}var i1x=this.hF5K[r2x];if(i1x.status<0||i1x.fee>0)return;this.dE3x.et4x("",i1x.id);this.LC4G=r2x};b1x.cec6W=function(){window.setTimeout(function(){if((this.kx5C.clientHeight||this.kx5C.scrollHeight)>33){this.kx5C.innerHTML='<marquee scrollamount="2" onmouseover="this.stop()" onmouseout="this.start()">'+this.kx5C.innerHTML+"</marquee>"}}.f1x(this),100)};b1x.AR1x=function(cZ3x){if(this.lk6e){this.lk6e.src=l1x.cGa2x(cZ3x)+"?param=90y90"}};b1x.pd7W=function(){if(this.Ie3x){a1x.dB3x(this.Ie3x,"song-list",{playIndex:this.LC4G,songs:this.hF5K},{getArtist:l1x.tk8c});this.EF2x(true)}};b1x.bU2x=function(d1x){var g1x=h1x.ba2x(d1x,"d:action");switch(a1x.t2x(g1x,"action")){case"play":if(typeof this.LC4G=="undefined"){this.Ic3x(0);this.pd7W()}else{this.dE3x.pc7V()}break;case"pause":this.dE3x.fF4J();break;case"next":this.Ic3x(this.LC4G+1);this.pd7W();break;case"prev":this.Ic3x(this.LC4G-1);this.pd7W();break;case"playByIndex":this.Ic3x(a1x.t2x(g1x,"index"));this.pd7W();break;case"open":if(a1x.bE2x(this.bM2x,"z-close")){a1x.y2x(this.bM2x,"z-close")}else{a1x.w2x(this.bM2x,"z-close")}break;case"home":window.open(location.protocol+"//music.163.com");break}};b1x.bjG3x=function(d1x){};b1x.biz3x=function(d1x){if(d1x.ratio==1){this.Ic3x(this.LC4G+1);this.pd7W();return}this.dE3x.pI7B(d1x.ratio)};b1x.gF4J=function(d1x){switch(d1x.state){case 1:a1x.w2x(this.hv5A,"f-hide");a1x.y2x(this.bRR3x,"f-hide");break;case 2:a1x.y2x(this.hv5A,"f-hide");a1x.w2x(this.bRR3x,"f-hide");break;case 4:this.Ic3x(this.LC4G+1);this.pd7W();break}};b1x.AE1x=function(){};b1x.xD0x=function(d1x){if(this.qF8x){this.qF8x.innerText="- "+l1x.lO6I(d1x.duration-d1x.current)}this.xw0x.hb4f(d1x.current/d1x.duration)};b1x.EF2x=function(cef6Z){var cJ3x=document.body.clientWidth-20,ci2x=document.body.clientHeight-20;a1x.fl4p(this.o2x,{width:cJ3x+"px",height:ci2x+"px"});if(this.bRH3x){a1x.bd2x(this.bRH3x,"width",cJ3x-20-90+"px")}if(this.Ie3x){var bZZ5e=a1x.F2x(this.Ie3x,"name"),ceh6b=a1x.F2x(this.Ie3x,"by"),bRm3x=cJ3x-68;k1x.be2x(bZZ5e,function(tz8r,r2x){a1x.bd2x(tz8r,"width",bRm3x*.7+"px");a1x.bd2x(ceh6b[r2x],"width",bRm3x*.3+"px");a1x.bd2x(tz8r.parentNode,"width",cJ3x-18+"px")});a1x.bd2x(this.Ie3x.parentNode,"height",ci2x-130+"px");a1x.bd2x(this.bM2x,"height",ci2x-90+"px");if(this.jm5r&&!cef6Z)this.jm5r.qk7d()}if(this.bRG3x){a1x.bd2x(this.bRG3x,"width",cJ3x-84+"px")}if(this.bRE3x){a1x.bd2x(this.bRE3x,"width",cJ3x-86+"px");a1x.bd2x(this.OT5Y,"width",cJ3x-86-44+"px");a1x.bd2x(this.kx5C,"width",this.kx5C.parentNode.clientWidth-24+"px")}};b1x.WB7u=function(d1x){var dd3x=h1x.ka5f(d1x),hL5Q=h1x.mA6u(d1x);if(dd3x<=0||hL5Q<=0||dd3x>=document.body.clientWidth||hL5Q>=document.body.clientHeight){h1x.z2x(document,"mouseup",d1x)}};b1x.bvE6y=function(){this.dE3x.bg2x()};a1x.cW3x("template-box");new E2x.Vh6b})()