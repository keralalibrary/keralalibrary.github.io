(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["return"],{baea:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"return",staticStyle:{height:"100%"}},[a("ReturnFilters",{attrs:{loadNextPage:e.loadNextPage}}),e.isLargeLoading?a("v-progress-linear",{attrs:{indeterminate:""}}):e._e(),e.fromSubLibrary&&!e.selectedsubLibrary?a("v-container",{staticClass:"text-center py-10 hide-following-divs"},[e._v(" Select a Sub Library ")]):e._e(),e.noRecordsFound?a("v-container",{staticClass:"text-center py-10"},[e._v(" No distributed books found. ")]):e._e(),a("div",{directives:[{name:"bar",rawName:"v-bar"}],ref:"scrollable",staticClass:"books-listing-parent"},[a("div",[a("v-container",{class:[e.isEmpty?"d-none":"",e.loadedAll?"":"pull-up-margin"]},[a("v-row",e._l(e.data,(function(t){return a("BookCard",{key:t._id,attrs:{book:t,type:"return",sm:"6",xs:"12",md:"4",lg:"4",cols:"12",fromSubLibrary:e.fromSubLibrary}})})),1)],1),e.loadedAll?e._e():a("SkeltonLoader")],1)])],1)},s=[],n=a("6211"),i=a("475c"),l=a("2ab4"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-btn",{staticClass:"search-bar-toggle d-md-none",on:{click:function(t){return e.toggleFilterOnXs()}}},[a("v-icon",[e._v("mdi-dots-horizontal")])],1),a("v-sheet",{class:["books-filters-parent",e.showFilterOnXs?"show":""],attrs:{outlined:""}},[a("div",{class:["px-6 pt-2 d-flex justify-end align-center"],staticStyle:{height:"30px"}},[e.mlState.libraryParent?e._e():a("v-checkbox",{staticClass:"mt-3 mr-2",attrs:{dense:"",label:"Distribute to Sub Library"},model:{value:e.fromSubLibrary,callback:function(t){e.fromSubLibrary=t},expression:"fromSubLibrary"}}),e.selectedBooks.length>0?a("v-dialog",{attrs:{"max-width":"950"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-badge",{staticClass:"float-right",attrs:{bordered:"",left:"",content:e.selectedBooks.length,overlap:""}},[a("v-btn",e._g(e._b({staticClass:"px-4 ml-2",attrs:{tile:"","x-small":"",color:"primary"}},"v-btn",s,!1),r),[e._v(" Selected Books ")])],1)]}},{key:"default",fn:function(t){return[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[e._v("Selected books to return")]),a("smooth-scrollbar",[a("div",{staticClass:"selectedBooksRow"},[a("v-row",{staticClass:"pt-6 px-2 mx-0"},e._l(e.selectedBooksDetails,(function(e){return a("BookCard",{key:e._id,attrs:{book:e,type:"return",sm:"6",xs:"12",md:"4",lg:"4",cols:"12"}})})),1)],1)]),a("v-card-actions",{staticClass:"justify-end pb-4"},[a("v-btn",{attrs:{tile:"",color:"primary"},on:{click:function(t){return e.resetSelectedBooks()}}},[e._v("Clear all")]),a("v-btn",{attrs:{tile:"",color:"primary"},on:{click:function(e){t.value=!1}}},[e._v("Close")])],1)],1)]}}],null,!1,2895217501)}):e._e(),a("v-btn",{staticClass:"ml-2",attrs:{tile:"","x-small":""},on:{click:function(t){return e.resetFilter()}}},[e._v(" Reset ")]),a("v-btn",{staticClass:"ml-2 d-md-none",attrs:{tile:"","x-small":""},on:{click:function(t){return e.toggleFilterOnXs()}}},[e._v("Hide")])],1),a("div",{class:["d-flex","align-center"]},[a("v-row",{staticClass:"mx-0 px-4 pt-2"},[a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:e.fromSubLibrary?10:7,md:e.fromSubLibrary?10:7,sm:"12",cols:"12"}},[e.fromSubLibrary?a("v-select",{staticClass:"mx-2 mt-0",attrs:{dense:"",loading:!e.isSubLibrariesLoaded,items:e.subLibraries,"item-text":"name","item-value":"_id",label:"Select a sub library to return books",clearable:""},model:{value:e.subLibrary,callback:function(t){e.subLibrary=t},expression:"subLibrary"}}):a("v-autocomplete",{staticClass:"mx-2 mt-0",attrs:{clearable:"",items:e.membersData,loading:e.isMemberLoading,"search-input":e.memberSearchKey,filter:e.filterMembers,"item-text":"name","item-value":"_id",label:"Select a member to return books",dense:""},on:{"update:searchInput":function(t){e.memberSearchKey=t},"update:search-input":function(t){e.memberSearchKey=t}},scopedSlots:e._u([{key:"item",fn:function(t){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{innerHTML:e._s("# "+t.item.memberNumber+" "+t.item.name)}})],1)]}}],null,!1,3979555647),model:{value:e.member,callback:function(t){e.member=t},expression:"member"}})],1),e.fromSubLibrary?e._e():a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"3",md:"3",sm:"12",cols:"12"}},[a("v-select",{staticClass:"mx-2 mt-0",attrs:{dense:"",items:["General","Balavedhi","Reference","E-Reader"],label:"Distribution Type"},model:{value:e.distributionType,callback:function(t){e.distributionType=t},expression:"distributionType"}})],1),a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"2",md:"2",sm:"12",cols:"12"}},[a("div",{staticClass:"mx-2"},[a("v-dialog",{attrs:{"max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"success",width:"100%",small:"",tile:"",disabled:0===e.selectedBooks.length}},"v-btn",s,!1),r),[e._v(" Return ")])]}},{key:"default",fn:function(t){return[e.selectedBooks.length>0?a("v-card",[a("v-toolbar",{attrs:{dense:"",color:"primary",dark:""}},[e._v("Confirm return ?")]),a("div",{staticClass:"text--primary py-6 px-4"},[e._v(" Are you sure to return the following book"+e._s(e.selectedBooks.length>1?"s":"")+" ")]),a("div",{staticClass:"px-4 pt-2 pb-4"},[a("v-menu",{ref:"returnOnMenu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mx-2 my-0",attrs:{dense:"",label:"Return Date","append-icon":"mdi-calendar",readonly:""},model:{value:e.returnDateText,callback:function(t){e.returnDateText=t},expression:"returnDateText"}},"v-text-field",s,!1),r))]}}],null,!0),model:{value:e.returnOnMenu,callback:function(t){e.returnOnMenu=t},expression:"returnOnMenu"}},[a("v-date-picker",{attrs:{"no-title":"",min:"1950-01-01",scrollable:""},on:{change:function(t){return e.$refs.returnOnMenu.save(e.returnDate)}},model:{value:e.returnDate,callback:function(t){e.returnDate=t},expression:"returnDate"}})],1),a("v-menu",{ref:"returnOnTimeMenu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mx-2 my-0",attrs:{dense:"",label:"Return Time","append-icon":"mdi-clock-outline",readonly:""},model:{value:e.returnTimeText,callback:function(t){e.returnTimeText=t},expression:"returnTimeText"}},"v-text-field",s,!1),r))]}}],null,!0),model:{value:e.returnOnTimeMenu,callback:function(t){e.returnOnTimeMenu=t},expression:"returnOnTimeMenu"}},[a("v-time-picker",{attrs:{"no-title":"",scrollable:"",format:"ampm",landscape:""},on:{change:function(t){return e.$refs.returnOnTimeMenu.save(e.returnTime)}},model:{value:e.returnTime,callback:function(t){e.returnTime=t},expression:"returnTime"}})],1)],1),a("smooth-scrollbar",[a("div",{staticStyle:{"max-height":"180px"}},[a("v-row",{staticClass:"px-4",attrs:{"no-gutters":""}},[a("div",e._l(e.selectedBooksDetails,(function(t){return a("v-chip",{key:t._id,staticClass:"mr-1 mb-2"},[e._v(" "+e._s(t.name)+" ")])})),1)])],1)]),a("v-card-actions",{staticClass:"justify-end pb-4"},[a("v-btn",{attrs:{small:"",tile:"",color:"primary"},on:{click:function(e){t.value=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{small:"",tile:"",color:"success"},on:{click:function(a){e.initiateReturn((function(){return t.value=!1}))}}},[e._v("Continue")])],1)],1):e._e()]}}])})],1)])],1)],1),a("div",{class:["d-flex","align-center"]},[a("v-row",{staticClass:"mx-0 px-4"},[a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"4",md:"4",sm:"12",cols:"12"}},[a("v-text-field",{staticClass:"mx-2",attrs:{clearable:"",dense:"","append-icon":"mdi-magnify",label:"Search"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}})],1),a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"2",md:"2",sm:"12",cols:"12"}},[a("v-select",{staticClass:"mx-2",attrs:{dense:"",items:e.searchByFilters,"item-text":"name","item-value":"_id",label:"Search By",clearable:""},model:{value:e.searchBy,callback:function(t){e.searchBy=t},expression:"searchBy"}})],1),a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"2",md:"2",sm:"12",cols:"12"}},[a("vc-data-autocomplete",{staticClass:"mx-2",attrs:{disabled:"E-Reader"===e.distributionType||"Reference"===e.distributionType,api:"/book/type","map-value":"name","emit-on-search":"",clearable:"",dense:"",label:"Category"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"2",md:"2",sm:"12",cols:"12"}},[a("v-select",{staticClass:"mx-2",attrs:{dense:"",items:e.searchByOrder,"item-text":"name","item-value":"orderBy",label:"Order by"},model:{value:e.orderBy,callback:function(t){e.orderBy=t},expression:"orderBy"}})],1),a("v-col",{staticClass:"px-0 py-0 my-0",attrs:{xl:"2",md:"2",sm:"12",cols:"12"}},[a("v-menu",{ref:"distributedDateMenu",attrs:{"close-on-content-click":!1,"return-value":e.distributedDates,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.distributedDates=t},"update:return-value":function(t){e.distributedDates=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,s=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mx-2",attrs:{hint:"Select a date range",dense:"",clearable:"",label:"Distributed date",readonly:"","append-icon":e.distributedDateRangeText&&e.distributedDateRangeText.includes("~")?"":"mdi-calendar-range"},model:{value:e.distributedDateRangeText,callback:function(t){e.distributedDateRangeText=t},expression:"distributedDateRangeText"}},"v-text-field",s,!1),r))]}}]),model:{value:e.distributedDateMenu,callback:function(t){e.distributedDateMenu=t},expression:"distributedDateMenu"}},[a("v-date-picker",{attrs:{max:e.distributedFilterMaxDate,"no-title":"",reactive:!0,range:"",scrollable:""},model:{value:e.distributedDates,callback:function(t){e.distributedDates=t},expression:"distributedDates"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.distributedDateMenu=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.distributedDateMenu.save(e.distributedDates)}}},[e._v(" OK ")])],1)],1)],1)],1)],1)])],1)},c=[],u={setup:n["p"],props:["loadNextPage"],components:{BookCard:i["a"]}},d=u,m=a("2877"),b=a("6544"),v=a.n(b),p=a("c6a6"),f=a("4ca6"),x=a("8336"),y=a("b0af"),k=a("99d9"),g=a("ac7c"),C=a("cc20"),_=a("62ad"),h=a("2e4b"),S=a("169a"),D=a("132d"),T=a("5d23"),L=a("e449"),B=a("0fd9"),w=a("b974"),V=a("8dd9"),M=a("2fa4"),R=a("8654"),O=a("c964"),F=a("71d9"),P=Object(m["a"])(d,o,c,!1,null,null,null),K=P.exports;v()(P,{VAutocomplete:p["a"],VBadge:f["a"],VBtn:x["a"],VCard:y["a"],VCardActions:k["a"],VCheckbox:g["a"],VChip:C["a"],VCol:_["a"],VDatePicker:h["a"],VDialog:S["a"],VIcon:D["a"],VListItemContent:T["a"],VListItemTitle:T["c"],VMenu:L["a"],VRow:B["a"],VSelect:w["a"],VSheet:V["a"],VSpacer:M["a"],VTextField:R["a"],VTimePicker:O["a"],VToolbar:F["a"]});var N={setup:n["o"],components:{BookCard:i["a"],SkeltonLoader:l["a"],ReturnFilters:K}},j=N,A=a("a523"),E=a("8e36"),$=Object(m["a"])(j,r,s,!1,null,null,null);t["default"]=$.exports;v()($,{VContainer:A["a"],VProgressLinear:E["a"],VRow:B["a"]})}}]);
//# sourceMappingURL=return.2246201b.js.map