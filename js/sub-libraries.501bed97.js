(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sub-libraries"],{1681:function(t,e,a){},"2ab4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",t._l(t.counts[t.getScreenSize],(function(e){return a("v-col",{key:e,attrs:{sm:"6",xs:"12",md:"4",lg:"4",cols:"12"}},[a("v-card",{attrs:{tile:""}},[a("v-card-text",[a("v-skeleton-loader",{attrs:{height:t.cardHeight-t.offset,tile:"",type:t.loaderType}})],1)],1)],1)})),1)],1)],1)},s=[],r=a("5530"),n=a("a6f4"),o=a("4360"),l={props:{cardHeight:{type:String,default:"186"},loaderType:{type:String,default:"table-cell,paragraph,text,text"}},setup:function(){var t=34;return Object(r["a"])(Object(r["a"])({},Object(n["g"])(o["a"].app)),{},{offset:t,counts:{sm:4,xs:2,md:6,lg:6,xl:6}})}},c=l,u=a("2877"),d=a("6544"),f=a.n(d),m=a("b0af"),p=a("99d9"),h=a("62ad"),v=a("a523"),b=a("0fd9"),g=a("3129"),y=Object(u["a"])(c,i,s,!1,null,null,null);e["a"]=y.exports;f()(y,{VCard:m["a"],VCardText:p["b"],VCol:h["a"],VContainer:v["a"],VRow:b["a"],VSkeletonLoader:g["a"]})},"3a2f":function(t,e,a){"use strict";a("a9e3");var i=a("ade3"),s=(a("9734"),a("4ad4")),r=a("a9ad"),n=a("16b7"),o=a("b848"),l=a("75eb"),c=a("f573"),u=a("f2e7"),d=a("80d2"),f=a("d9bd"),m=a("58df");e["a"]=Object(m["a"])(r["a"],n["a"],o["a"],l["a"],c["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||i?r=s+e.width/2-a.width/2:(this.left||this.right)&&(r=s+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!1!==this.attach?e.offsetTop:e.top,s=0;return this.top||this.bottom?s=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+e.height/2-a.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(s+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(d["g"])(this.maxWidth),minWidth:Object(d["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(d["t"])(this,"activator",!0)&&Object(f["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=s["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===d["y"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},5808:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("v-sheet",{staticClass:"px-6 py-2 d-flex flex-column justify-center",staticStyle:{height:"50px"}},[a("div",{staticClass:"d-flex justify-end"},[a("v-btn",{staticClass:"primary",attrs:{tile:"","x-small":""},on:{click:t.showAddSubLibraryPopup}},[t._v("Add New Sub Library")])],1)]),t.noRecordsFound?a("v-container",{staticClass:"text-center py-10"},[t._v(" No sub libraries found. ")]):t._e(),a("div",{directives:[{name:"bar",rawName:"v-bar"}],ref:"scrollable",staticClass:"users-listing-parent"},[a("div",[t.isLoading?a("SkeltonLoader",{attrs:{cardHeight:"98",loaderType:"table-cell, text"}}):a("v-container",[a("v-row",t._l(t.data,(function(t){return a("SubLibraryCard",{key:t._id,attrs:{subLibrary:t,sm:"6",xs:"12",md:"4",lg:"4",cols:"12"}})})),1)],1)],1)]),a("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-card",[a("v-form",{ref:"form",attrs:{autocomplete:"off","lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.register(e)}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[a("v-toolbar",{staticClass:"mb-4",attrs:{color:"primary",dark:""}},[a("span",[t._v("Add New Sub Library")])]),a("div",{staticClass:"px-8 pb-3",staticStyle:{"max-height":"460px","overflow-y":"auto"}},[a("input",{staticClass:"opacity-hide",attrs:{type:"email",name:"user_name",id:"user_name",value:""}}),a("input",{staticClass:"opacity-hide",attrs:{type:"password",name:"password",id:"password",value:""}}),a("v-text-field",{staticClass:"my-1",attrs:{rules:t.nameRules,label:"Library Name",required:"",tabindex:"1"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),a("v-text-field",{staticClass:"my-1",attrs:{rules:t.emailRules,label:"Email",required:"",tabindex:"1"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("v-text-field",{staticClass:"my-1",attrs:{rules:t.usernameRules,label:"Username",required:"",tabindex:"1"},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}}),a("v-autocomplete",{attrs:{clearable:"",items:t.membersData,loading:t.isMemberLoading,"search-input":t.memberSearchKey,filter:t.filterMembers,"item-text":"name","item-value":"_id",label:"Member assigned to this library",dense:"",rules:[t.required]},on:{"update:searchInput":function(e){t.memberSearchKey=e},"update:search-input":function(e){t.memberSearchKey=e}},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:t._s("# "+e.item.memberNumber+" "+e.item.name)}})],1)]}}],null,!0),model:{value:t.formData.member,callback:function(e){t.$set(t.formData,"member",e)},expression:"formData.member"}}),a("v-textarea",{staticClass:"my-1",attrs:{rows:"1",rules:[t.required],label:"Address",required:"",tabindex:"1"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}}),a("v-select",{staticClass:"my-1",attrs:{rules:[t.required],label:"District",items:t.districts,tabindex:"1"},model:{value:t.formData.district,callback:function(e){t.$set(t.formData,"district",e)},expression:"formData.district"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"######",expression:"'######'"}],staticClass:"my-1",attrs:{rules:[t.required,function(t){return 6===t.length||"Enter a valid Pin Code"}],label:"Pin Code",required:"",tabindex:"1"},model:{value:t.formData.pin,callback:function(e){t.$set(t.formData,"pin",e)},expression:"formData.pin"}}),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"############",expression:"'############'"}],staticClass:"my-1",attrs:{rules:[t.required,function(t){return t.length>=10||"Enter a valid Indian phone number without country code"}],label:"Phone",required:"",tabindex:"1"},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}}),a("v-text-field",{staticClass:"my-1",attrs:{type:"password",rules:t.passwordRules,label:"Password",required:"",tabindex:"1"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("v-text-field",{staticClass:"my-1",attrs:{type:"password",rules:t.confirmPasswordRules,label:"Confirm Password",required:"",tabindex:"1"},model:{value:t.formData.confirmPassword,callback:function(e){t.$set(t.formData,"confirmPassword",e)},expression:"formData.confirmPassword"}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){e.value=!1}}},[t._v(" Cancel ")]),a("v-btn",{staticClass:"primary",attrs:{tile:"",type:"action"}},[t._v("Save")])],1)],1)],1)]}}]),model:{value:t.newSubLibraryDialog,callback:function(e){t.newSubLibraryDialog=e},expression:"newSubLibraryDialog"}})],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{sm:t.sm,xs:t.xs,md:t.md,lg:t.lg,cols:t.cols}},[a("v-tooltip",{attrs:{top:"","max-width":"250","nudge-top":"-15",transition:"fade-transition","open-delay":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-card",t._g(t._b({attrs:{tile:""}},"v-card",s,!1),i),[a("v-card-text",[a("div",{staticClass:"text--primary force-single-line relative pr-4"},[t._v(" Name: "+t._s(t.subLibrary.name)+" "),a("router-link",{attrs:{to:"/sub-libraries/"+t.subLibrary._id}},[a("v-icon",{staticClass:"absolute-right pointer",attrs:{size:"15",color:"primary"}},[t._v("mdi-pencil")])],1)],1),a("div",{class:["force-single-line",t.subLibrary.booksInStock>0&&"green--text"]},[t._v(" Books In Stock: "+t._s(t.subLibrary.booksInStock)+" ")]),a("div",{staticClass:"force-single-line",class:["force-single-line",t.subLibrary.booksDistributed>0&&"orange--text"]},[t._v(" Book Out of Stock: "+t._s(t.subLibrary.booksDistributed)+" ")])])],1)]}}])},[t._v(t._s(t.subLibrary.name)+" ")])],1)},n=[],o=a("c1df"),l=a.n(o),c={props:["lg","md","sm","xs","cols","subLibrary"],setup:function(){return{Moment:l.a}}},u=c,d=a("2877"),f=a("6544"),m=a.n(f),p=a("b0af"),h=a("99d9"),v=a("62ad"),b=a("132d"),g=a("3a2f"),y=Object(d["a"])(u,r,n,!1,null,null,null),x=y.exports;m()(y,{VCard:p["a"],VCardText:h["b"],VCol:v["a"],VIcon:b["a"],VTooltip:g["a"]});var w=a("2ab4"),C=a("6211"),k={setup:C["t"],components:{SubLibraryCard:x,SkeltonLoader:w["a"]}},D=k,S=a("c6a6"),_=a("8336"),L=a("a523"),V=a("169a"),I=a("ce7e"),T=a("4bd4"),O=a("5d23"),A=a("0fd9"),j=a("b974"),$=a("8dd9"),P=a("2fa4"),N=a("8654"),H=a("a844"),q=a("71d9"),R=Object(d["a"])(D,i,s,!1,null,null,null);e["default"]=R.exports;m()(R,{VAutocomplete:S["a"],VBtn:_["a"],VCard:p["a"],VCardActions:h["a"],VContainer:L["a"],VDialog:V["a"],VDivider:I["a"],VForm:T["a"],VListItemContent:O["a"],VListItemTitle:O["c"],VRow:A["a"],VSelect:j["a"],VSheet:$["a"],VSpacer:P["a"],VTextField:N["a"],VTextarea:H["a"],VToolbar:q["a"]})},9734:function(t,e,a){},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var i=a("2b0e");function s(t){return i["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,s=a.data,r=a.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var n=s.attrs;if(n){s.attrs={};var o=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,r)}})}var r=a("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,s=e.data,n=e.children,o=s.attrs;return o&&(s.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),n)}})},a844:function(t,e,a){"use strict";a("a9e3");var i=a("5530"),s=(a("1681"),a("8654")),r=a("58df"),n=Object(r["a"])(s["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=sub-libraries.501bed97.js.map