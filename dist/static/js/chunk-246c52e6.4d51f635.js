(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-246c52e6"],{"50cc":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n("b775"),l=n("da71");function r(e){return Object(a["a"])({url:"".concat(l["a"].BASE_URL,"/college/college-list"),method:"get",params:e})}function c(e){return Object(a["a"])({url:"".concat(l["a"].BASE_URL,"/college/release-college"),method:"post",data:e})}function o(e){return Object(a["a"])({url:"".concat(l["a"].BASE_URL,"/college/update-college"),method:"post",data:e})}function i(e){return Object(a["a"])({url:"".concat(l["a"].BASE_URL,"/college/delete-college"),method:"get",params:e})}function s(e){return Object(a["a"])({url:"".concat(l["a"].BASE_URL,"/college/college-details"),method:"get",params:e})}},"7cc6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"college-list"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"stripe",border:"border"}},[n("el-table-column",{attrs:{type:"index",label:"编号",width:"80",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"college_name",label:"院校名称",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"college_local",label:"所在地",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),e.updateCollege(t.$index,e.tableData)}}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),e.showDeleteDialog(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"删除热点",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("span",[e._v("是否删除")]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.deleteCallback}},[e._v("确 定")])],1)])],1)},l=[],r=(n("96cf"),n("3b8d")),c=n("50cc"),o={name:"College",data:function(){return{collgeeId:0,dialogVisible:!1,tableData:[]}},created:function(){this.fetchRequest()},methods:{closeDialog:function(){this.dialogVisible=!1},openDialog:function(){this.dialogVisible=!0},fetchRequest:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$loading({lock:!0,text:"发布中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e.prev=1,e.next=4,Object(c["c"])();case 4:if(n=e.sent,a=n.data,1!==a.noerr){e.next=8;break}throw new Error;case 8:this.tableData=a.data,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),this.$message.error("获取失败");case 14:return e.prev=14,t.close(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])})));function t(){return e.apply(this,arguments)}return t}(),updateCollege:function(e,t){var n=t[e].college_id;this.$router.push("/college/edit/".concat(n))},showDeleteDialog:function(e,t){this.openDialog(),this.collgeeId=t[e].college_id},deleteCallback:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$loading({lock:!0,text:"发布中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.2)"}),e.prev=1,e.next=4,Object(c["a"])({college_id:this.collgeeId});case 4:if(n=e.sent,a=n.data,1!==a.noerr){e.next=8;break}throw new Error;case 8:return this.$message.success("删除成功"),e.next=11,this.fetchRequest();case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),this.$message.error("删除失败");case 16:return e.prev=16,t.close(),this.closeDialog(),e.finish(16);case 20:case"end":return e.stop()}}),e,this,[[1,13,16,20]])})));function t(){return e.apply(this,arguments)}return t}()}},i=o,s=n("2877"),u=Object(s["a"])(i,a,l,!1,null,null,null);t["default"]=u.exports}}]);