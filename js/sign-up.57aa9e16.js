(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sign-up"],{1681:function(t,a,e){},"29e9":function(t,a,e){},"73cf":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",{staticClass:"register-wrap"},[s("v-row",{staticClass:"d-flex align-center"},[s("v-col",{staticClass:"login-wrap px-8 text-center d-flex flex-column justify-center",attrs:{sm:"12"}},[s("h1",{staticClass:"mt-2 mb-6 logo-wrap d-flex align-center justify-center"},[s("img",{attrs:{src:e("9b19")}}),s("span",{staticClass:"pt-1 gradient-text"},[t._v("Kerala Library Registration")])]),s("v-card",{staticClass:"mx-auto pb-6 px-9 mb-10 login-box",attrs:{tile:"",width:"600",outlined:"",elevation:"5",disabled:t.loading,loading:t.loading}},[s("v-form",{ref:"form",staticClass:"pt-6",attrs:{"lazy-validation":""},on:{submit:function(a){return a.preventDefault(),t.submit(a)}},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[s("input",{staticClass:"opacity-hide",attrs:{type:"email",name:"user_name",id:"user_name",value:""}}),s("input",{staticClass:"opacity-hide",attrs:{type:"password",name:"password",id:"password",value:""}}),s("div",{class:["inputs-wrap",t.step1Done&&"step-1-done"]},[s("div",{staticClass:"step-1"},[s("v-text-field",{staticClass:"my-1",attrs:{rules:t.nameRules,label:"Library Name",required:"",tabindex:"1"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}}),s("v-text-field",{staticClass:"my-1",attrs:{rules:t.emailRules,label:"Email",required:"",tabindex:"1"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}}),s("v-text-field",{staticClass:"my-1",attrs:{rules:[t.required,t.length(1,25)],label:"Registration Number",required:"",tabindex:"1"},model:{value:t.formData.regNo,callback:function(a){t.$set(t.formData,"regNo",a)},expression:"formData.regNo"}}),s("v-text-field",{staticClass:"my-1",attrs:{rules:t.usernameRules,label:"Username",required:"",tabindex:"1"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}}),s("v-textarea",{staticClass:"my-1",attrs:{rows:"1",rules:[t.required,t.length(1,300)],label:"Address",required:"",tabindex:"1"},model:{value:t.formData.address,callback:function(a){t.$set(t.formData,"address",a)},expression:"formData.address"}}),s("v-select",{staticClass:"my-1",attrs:{rules:[t.required],label:"District",items:t.districts,tabindex:"1"},model:{value:t.formData.district,callback:function(a){t.$set(t.formData,"district",a)},expression:"formData.district"}}),s("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"######",expression:"'######'"}],staticClass:"my-1",attrs:{rules:[t.required,function(t){return 6===t.length||"Enter a valid Pin Code"}],label:"Pin Code",required:"",tabindex:"1"},model:{value:t.formData.pin,callback:function(a){t.$set(t.formData,"pin",a)},expression:"formData.pin"}}),s("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"############",expression:"'############'"}],staticClass:"my-1",attrs:{rules:[t.required,function(t){return t.length>=10||"Enter a valid Indian phone number without country code"}],label:"Phone",required:"",tabindex:"1"},model:{value:t.formData.phone,callback:function(a){t.$set(t.formData,"phone",a)},expression:"formData.phone"}})],1),s("input",{staticClass:"opacity-hide",attrs:{value:""}}),s("div",{staticClass:"step-2"},[s("h3",{staticClass:"password-title"},[t._v("Set your password")]),s("v-text-field",{staticClass:"my-1",attrs:{type:"password",rules:t.passwordRules,label:"Password",required:"",tabindex:"1"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}}),s("v-text-field",{staticClass:"my-1",attrs:{type:"password",rules:t.confirmPasswordRules,label:"Confirm Password",required:"",tabindex:"1"},model:{value:t.formData.confirmPassword,callback:function(a){t.$set(t.formData,"confirmPassword",a)},expression:"formData.confirmPassword"}})],1)]),s("div",{staticClass:"d-flex justify-end align-center pt-1"},[t.step1Done?[s("v-btn",{staticClass:"ml-4",attrs:{tile:"",small:"",color:"primary",tabindex:"4"},on:{click:function(a){a.preventDefault(),t.step1Done=!1}}},[t._v(" Previous ")]),s("v-btn",{staticClass:"ml-4",attrs:{small:"",type:"submit",tile:"",color:"success",tabindex:"4"}},[t._v(" Sign Up ")])]:[s("span",{staticClass:"back-to-login"},[t._v(" Already have an account? "),s("a",{on:{click:function(a){return a.preventDefault(),t.gotoLogin(a)}}},[t._v("Login here")])]),s("v-btn",{staticClass:"ml-4",attrs:{tile:"",small:"",color:"primary",tabindex:"4",type:"submit"},on:{click:function(a){return a.preventDefault(),t.completeStep1(a)}}},[t._v(" Next ")])]],2)])],1)],1)],1)],1)},i=[],r=e("6211"),n={setup:r["m"]},o=n,l=(e("7c1d"),e("2877")),u=e("6544"),c=e.n(u),d=e("7496"),m=e("8336"),p=e("b0af"),f=e("62ad"),v=e("4bd4"),b=e("0fd9"),h=e("b974"),x=e("8654"),w=e("a844"),g=Object(l["a"])(o,s,i,!1,null,"752b89e0",null);a["default"]=g.exports;c()(g,{VApp:d["a"],VBtn:m["a"],VCard:p["a"],VCol:f["a"],VForm:v["a"],VRow:b["a"],VSelect:h["a"],VTextField:x["a"],VTextarea:w["a"]})},"7c1d":function(t,a,e){"use strict";e("29e9")},a844:function(t,a,e){"use strict";e("a9e3");var s=e("5530"),i=(e("1681"),e("8654")),r=e("58df"),n=Object(r["a"])(i["a"]);a["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=sign-up.57aa9e16.js.map