(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-802680ec"],{"11e9":function(e,t,r){var a=r("52a7"),n=r("4630"),o=r("6821"),s=r("6a99"),i=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?u:function(e,t){if(e=o(e),t=s(t,!0),c)try{return u(e,t)}catch(r){}if(i(e,t))return n(!a.f.call(e,t),e[t])}},1866:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"college"},[r("div",{staticClass:"base-info"},[r("p",{staticClass:"info-title"},[e._v("院校信息：")]),e._v(" "),r("div",{staticClass:"info-content"},[r("div",[r("div",{staticClass:"info-item"},[r("p",[e._v("院校名称：")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.baseInfo.name,callback:function(t){e.$set(e.baseInfo,"name",t)},expression:"baseInfo.name"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("院校封面图:")]),e._v(" "),r("div",{staticClass:"upload"},[e.baseInfo.baseUrl?e._e():r("el-upload",{staticClass:"image-uploader",attrs:{data:e.dataObj,multiple:!1,"show-file-list":!1,"on-success":e.handleBannerSuccess,drag:"",action:"https://httpbin.org/post"}},[r("i",{staticClass:"el-icon-upload"}),e._v(" "),r("div",{staticClass:"el-upload__text"},[e._v("\n                内容展示图：将文件拖到此处，或\n                "),r("em",[e._v("点击上传")])])]),e._v(" "),e.baseInfo.baseUrl?r("div",{staticClass:"image-preview",style:{backgroundImage:"url("+e.baseInfo.baseUrl+")"}},[r("div",{staticClass:"image-preview-action",on:{click:e.removeBanner}},[r("i",{staticClass:"el-icon-delete"})])]):e._e()],1)])]),e._v(" "),r("div",[r("div",{staticClass:"info-item"},[r("P",[e._v("所在地：")]),r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.baseInfo.local,callback:function(t){e.$set(e.baseInfo,"local",t)},expression:"baseInfo.local"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v(" 招生简介")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入内容"},model:{value:e.baseInfo.intor,callback:function(t){e.$set(e.baseInfo,"intor",t)},expression:"baseInfo.intor"}})],1)])])]),e._v(" "),r("div",{staticClass:"postgraduate-info"},[r("p",{staticClass:"info-title"},[e._v("考研信息：")]),e._v(" "),r("div",{staticClass:"info-content"},[r("div",[r("div",{staticClass:"info-item"},[r("p",[e._v("研究生院网址：")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入研究生院网址"},model:{value:e.postgraduateInfo.graduateUrl,callback:function(t){e.$set(e.postgraduateInfo,"graduateUrl",t)},expression:"postgraduateInfo.graduateUrl"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("报录比：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"每条内容占一行，年份与报录比之间用空格隔开"},model:{value:e.postgraduateInfo.reportRatio,callback:function(t){e.$set(e.postgraduateInfo,"reportRatio",t)},expression:"postgraduateInfo.reportRatio"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("直通学长：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"每条内容占一行，姓名与联系方式(微信)之间用空格隔开"},model:{value:e.postgraduateInfo.seniors,callback:function(t){e.$set(e.postgraduateInfo,"seniors",t)},expression:"postgraduateInfo.seniors"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("考研经验：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"每条占一行，Q与A之间用空格隔开"},model:{value:e.postgraduateInfo.experience,callback:function(t){e.$set(e.postgraduateInfo,"experience",t)},expression:"postgraduateInfo.experience"}})],1)]),e._v(" "),r("div",[r("div",{staticClass:"info-item"},[r("p",[e._v("考研调剂网址：")]),e._v(" "),r("el-input",{attrs:{placeholder:"请输入考研调剂信息网址"},model:{value:e.postgraduateInfo.transferUrl,callback:function(t){e.$set(e.postgraduateInfo,"transferUrl",t)},expression:"postgraduateInfo.transferUrl"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("历年分数线：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"每条占一行，年份与分数之间用空格隔开"},model:{value:e.postgraduateInfo.sourceLine,callback:function(t){e.$set(e.postgraduateInfo,"sourceLine",t)},expression:"postgraduateInfo.sourceLine"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("研究生导师：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"每条内容占一行，姓名与联系方式之间用空格隔开"},model:{value:e.postgraduateInfo.tutors,callback:function(t){e.$set(e.postgraduateInfo,"tutors",t)},expression:"postgraduateInfo.tutors"}})],1),e._v(" "),r("div",{staticClass:"info-item"},[r("p",[e._v("真题资料：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"每条内容占一行，资料名称 链接 密码之间用空格隔开"},model:{value:e.postgraduateInfo.resources,callback:function(t){e.$set(e.postgraduateInfo,"resources",t)},expression:"postgraduateInfo.resources"}})],1)])])]),e._v(" "),r("div",{staticClass:"sumit-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitCollege}},[e._v(e._s(e.btnTxt))])],1)])},n=[],o=(r("28a5"),r("ac6a"),r("456d"),r("c5f6"),r("ee1d"),r("96cf"),r("3b8d")),s=r("50cc"),i={name:"College",data:function(){return{btnTxt:"上传",id:0,dataObj:{token:"",key:""},baseInfo:{name:"",local:"",baseUrl:"",intor:""},postgraduateInfo:{graduateUrl:"",transferUrl:"",reportRatio:"",sourceLine:"",seniors:"",tutors:"",experience:"",resources:""}}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.params.id,Number.isNaN(+t)){e.next=6;break}return this.id=t,e.next=5,this.fetchRequest(t);case 5:this.btnTxt="更新";case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{handleBannerSuccess:function(e){var t=e.files.file;this.baseInfo.baseUrl=t},removeBanner:function(){this.baseInfo.baseUrl=""},fetchRequest:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$loading({lock:!0,text:"发布中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e.prev=1,e.next=4,Object(s["b"])({college_id:this.id});case 4:if(r=e.sent,a=r.data,1!==a.noerr){e.next=8;break}throw new Error;case 8:this.baseInfo.name=a.data.college_name,this.baseInfo.local=a.data.college_local,this.baseInfo.baseUrl=a.data.college_banner,this.baseInfo.intor=a.data.college_intor,this.postgraduateInfo=this.reverseFormat(JSON.parse(a.data.college_graduate)),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](1),this.$message.error("获取详情失败");case 18:return e.prev=18,t.close(),e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[1,15,18,21]])})));function t(){return e.apply(this,arguments)}return t}(),submitCollege:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.propsCheck(this.postgraduateInfo),r=this.propsCheck(this.baseInfo),t&&r){e.next=5;break}return this.$message.error("院校信息请填写完整"),e.abrupt("return");case 5:if(a=this.format(this.postgraduateInfo),n=Object.assign({},this.baseInfo,{graduateInfo:JSON.stringify(a)}),0!==this.id){e.next=12;break}return e.next=10,this.releaseCollege(n);case 10:e.next=14;break;case 12:return e.next=14,this.updateCollege(n);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),updateCollege:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=this.$loading({lock:!0,text:"更新中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e.prev=1,e.next=4,Object(s["e"])(Object.assign(t,{college_id:this.id}));case 4:if(a=e.sent,n=a.data,1!==n.noerr){e.next=8;break}throw new Error;case 8:this.$message.success("更新成功"),this.$router.push("/college/college"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),this.$message.error("更新失败");case 15:return e.prev=15,r.close(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[1,12,15,18]])})));function t(t){return e.apply(this,arguments)}return t}(),releaseCollege:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=this.$loading({lock:!0,text:"发布中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e.prev=1,e.next=4,Object(s["d"])(t);case 4:if(a=e.sent,n=a.data,1!==n.noerr){e.next=8;break}throw new Error;case 8:this.$message.success("发布成功"),this.$router.push("/college/college"),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](1),this.$message.error("发布失败");case 15:return e.prev=15,r.close(),e.finish(15);case 18:case"end":return e.stop()}}),e,this,[[1,12,15,18]])})));function t(t){return e.apply(this,arguments)}return t}(),format:function(e){var t=this;return Object.keys(e).reduce((function(e,r){var a=t.postgraduateInfo[r].split("\n");return e[r]=a.map((function(e){return e.split(" ")})),e}),{})},reverseFormat:function(e){return Object.keys(e).reduce((function(t,r){var a=e[r].map((function(e){return e.join(" ")})).join("\n");return t[r]=a,t}),{})},propsCheck:function(e){var t=!0;return Object.keys(e).forEach((function(r){e[r]||(t=!1)})),t}}},c=i,u=(r("800f"),r("2877")),l=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=l.exports},"456d":function(e,t,r){var a=r("4bf8"),n=r("0d58");r("5eda")("keys",(function(){return function(e){return n(a(e))}}))},"4db5":function(e,t,r){},"50cc":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}));var a=r("b775"),n=r("da71");function o(e){return Object(a["a"])({url:"".concat(n["a"].BASE_URL,"/college/college-list"),method:"get",params:e})}function s(e){return Object(a["a"])({url:"".concat(n["a"].BASE_URL,"/college/release-college"),method:"post",data:e})}function i(e){return Object(a["a"])({url:"".concat(n["a"].BASE_URL,"/college/update-college"),method:"post",data:e})}function c(e){return Object(a["a"])({url:"".concat(n["a"].BASE_URL,"/college/delete-college"),method:"get",params:e})}function u(e){return Object(a["a"])({url:"".concat(n["a"].BASE_URL,"/college/college-details"),method:"get",params:e})}},"5dbc":function(e,t,r){var a=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var o,s=t.constructor;return s!==r&&"function"==typeof s&&(o=s.prototype)!==r.prototype&&a(o)&&n&&n(e,o),e}},"5eda":function(e,t,r){var a=r("5ca1"),n=r("8378"),o=r("79e5");e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),a(a.S+a.F*o((function(){r(1)})),"Object",s)}},"800f":function(e,t,r){"use strict";var a=r("4db5"),n=r.n(a);n.a},"8b97":function(e,t,r){var a=r("d3f4"),n=r("cb7c"),o=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:o}},9093:function(e,t,r){var a=r("ce10"),n=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},aa77:function(e,t,r){var a=r("5ca1"),n=r("be13"),o=r("79e5"),s=r("fdef"),i="["+s+"]",c="​",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),f=function(e,t,r){var n={},i=o((function(){return!!s[e]()||c[e]()!=c})),u=n[e]=i?t(p):s[e];r&&(n[r]=u),a(a.P+a.F*i,"String",n)},p=f.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},c5f6:function(e,t,r){"use strict";var a=r("7726"),n=r("69a8"),o=r("2d95"),s=r("5dbc"),i=r("6a99"),c=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,d="Number",v=a[d],g=v,b=v.prototype,h=o(r("2aeb")(b))==d,m="trim"in String.prototype,_=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=m?t.trim():p(t,3);var r,a,n,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var s,c=t.slice(2),u=0,l=c.length;u<l;u++)if(s=c.charCodeAt(u),s<48||s>n)return NaN;return parseInt(c,a)}}return+t};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof v&&(h?c((function(){b.valueOf.call(r)})):o(r)!=d)?s(new g(_(t)),r,v):_(t)};for(var I,x=r("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;x.length>k;k++)n(g,I=x[k])&&!n(v,I)&&f(v,I,l(g,I));v.prototype=b,b.constructor=v,r("2aba")(a,d,v)}},ee1d:function(e,t,r){var a=r("5ca1");a(a.S,"Number",{isNaN:function(e){return e!=e}})},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);