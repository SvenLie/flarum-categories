(()=>{var t={n:a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return t.d(o,{a:o}),o},d:(a,o)=>{for(var e in o)t.o(o,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:o[e]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a),t.d(a,{default:()=>at});const o=flarum.core.compat["common/extend"],e=flarum.core.compat["forum/components/IndexPage"];var s=t.n(e);const r=flarum.core.compat["common/components/LinkButton"];var n=t.n(r);const i=flarum.core.compat["common/Model"];var c=t.n(i);const l=flarum.core.compat["tags/models/Tag"];var u=t.n(l);function d(t,a){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},d(t,a)}function g(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,d(t,a)}const p=flarum.core.compat["forum/app"];var h=t.n(p);const f=flarum.core.compat["common/components/Page"];var v=t.n(f);const y=flarum.core.compat["common/components/LoadingIndicator"];var C=t.n(y);const b=flarum.core.compat["forum/components/AffixedSidebar"];var w=t.n(b);const T=flarum.core.compat["common/helpers/listItems"];var N=t.n(T);const I=flarum.core.compat["common/utils/ItemList"];var P=t.n(I);const k=flarum.core.compat["common/utils/extractText"];var D=t.n(k);const L=flarum.core.compat["common/utils/classList"];var A=t.n(L);const M=flarum.core.compat["tags/utils/sortTags"];var _=t.n(M);const x=flarum.core.compat["tags/helpers/tagLabel"];var S=t.n(x);const O=flarum.core.compat["common/Component"];var U=t.n(O);const B=flarum.core.compat["common/components/Link"];var j=t.n(B);const W=flarum.core.compat["common/helpers/icon"];var E=t.n(W),R=function(t){function a(){return t.apply(this,arguments)||this}g(a,t);var o=a.prototype;return o.view=function(){return m("div",{class:A()("StatWidget",{"Categories-compactMobileModeEnabled":!!h().forum.attribute("categories.compactMobile")})},this.content().toArray())},o.content=function(){var t=new(P());return t.add("count",m("div",{class:"StatWidget-count"},this.attrs.count),100),t.add("label",m("div",{class:"StatWidget-label"},m("span",{className:"Categories-showOnMobile"},E()(this.attrs.icon)),m("span",{className:"Categories-hideOnMobile"},this.attrs.label)),80),t},a}(U());const V=flarum.core.compat["common/helpers/avatar"];var z=t.n(V);const F=flarum.core.compat["common/helpers/username"];var q=t.n(F);const G=flarum.core.compat["common/helpers/humanTime"];var H=t.n(G);const J=flarum.core.compat["common/utils/string"],K=flarum.core.compat["forum/components/UserCard"];var Q=t.n(K),X=function(t){function a(){for(var a,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return(a=t.call.apply(t,[this].concat(e))||this).cardVisible=void 0,a}g(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.cardVisible=!1},o.view=function(){var t,a=this.attrs.discussion;return a?(a.lastPostedUser(),m(j(),{class:"LastDiscussion",href:h().route.discussion(a,null!=(t=a.lastPostNumber())?t:0)},this.content().toArray())):m("div",{class:"LastDiscussion"},h().translator.trans("askvortsov-categories.forum.last_discussion_widget.no_discussions"))},o.content=function(){var t=new(P()),a=this.attrs.discussion,o=a.lastPostedUser();t.add("avatar",m(j(),{className:"LastDiscussion-avatar",href:o?h().route.user(o):"#","aria-label":D()(q()(o))},!!o&&z()(o)),100),t.add("mainContent",m("div",{class:"LastDiscussion-content"},m("div",{class:"LastDiscussion-bottomRow"},H()(a.lastPostedAt())," ",m(j(),{className:"LastDiscussion-usernameLink",href:o?h().route.user(o):"#"},m("span",{style:{display:"inline",margin:"0 4px"},role:"presentation"},"|"),q()(o))),m("div",{class:"LastDiscussion-topRow"},(0,J.truncate)(a.title(),26))),50);var e=null;return o&&this.cardVisible&&(e=Q().component({user:o,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),t.add("card",m("div",{class:"LastDiscussion-userCardContainer"},e),10),t},o.oncreate=function(a){var o,e=this;t.prototype.oncreate.call(this,a),this.$().on("mouseover",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(o),o=window.setTimeout(e.showCard.bind(e),300)})).on("mouseout",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(o),o=window.setTimeout(e.hideCard.bind(e),150)}))},o.onremove=function(a){t.prototype.onremove.call(this,a),this.$().off("mouseover mouseout")},o.showCard=function(){var t=this;this.cardVisible=!0,m.redraw(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},o.hideCard=function(){$(".UserCard").removeClass("in"),this.cardVisible=!1,m.redraw()},a}(U()),Y=function(t){function a(){for(var a,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return(a=t.call.apply(t,[this].concat(e))||this).tag=void 0,a.isChild=void 0,a.collapsed=void 0,a.compactMobileMode=void 0,a}g(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.tag=this.attrs.model,this.isChild=null!=this.attrs.parent&&null!=this.attrs.parent,this.collapsed=!1,window.addEventListener("resize",(function(){m.redraw()}))},o.view=function(){var t=this.tag;return t?(this.compactMobileMode=!!h().forum.attribute("categories.compactMobile"),m("li",{className:A()("TagCategory","TagCategory-"+t.slug(),{SubCategory:this.isChild,ParentCategory:!this.isChild,compactMobile:this.compactMobileMode})},this.categoryItems().toArray())):null},o.categoryItems=function(){var t=this,o=new(P()),e=this.tag,s=this.isChild?[]:_()(e.children()||[]);return console.log(e),o.add("link",m(j(),{className:"TagCategory-content TagCategory-content-"+e.slug(),style:this.isChild?{color:e.fontColor}:{color:e.color()},href:h().route.tag(e)},this.contentItems().toArray()),100),this.compactMobileMode||this.isChild||o.add("children",m("ol",{className:"TagCategory-subTagList"},s.map((function(o){return[a.component({model:o,parent:t})]}))),10),o},o.contentItems=function(){var t=this,o=new(P()),e=this.tag,s=this.isChild?[]:_()(e.children()||[]);return o.add("alignStart",m("div",{className:"TagCategory-alignStart"},this.alignStartItems().toArray()),100),o.add("alignEnd",m("div",{className:"TagCategory-alignEnd"},this.alignEndItems().toArray()),50),!this.isChild&&this.compactMobileMode&&!this.collapsed&&o.add("children",m("ol",{className:"TagCategory-subTagList"},s.map((function(o){return[a.component({model:o,parent:t})]}))),10),o},o.alignStartItems=function(){var t=this,a=new(P()),o=this.tag,e=this.isChild?[]:_()(o.children()||[]);return a.add("icon",m("span",{className:"TagCategory-icon"},this.iconItems().toArray()),100),a.add("main",m("div",{className:"TagCategory-main"},this.mainItems().toArray()),50),e.length&&a.add("toggleArrow",m("button",{className:"TagCategory-toggleArrow Button--ua-reset",onclick:function(a){t.toggleArrow(a)}},E()(this.collapsed?"fas fa-caret-down":"fas fa-caret-up")),10),a},o.alignEndItems=function(){var t=new(P()),a=this.tag;return t.add("stats",m("div",{className:"TagCategory-stats StatWidgetList"},this.statItems().toArray()),100),t.add("lastDiscussion",m("div",{className:A()("TagCategory-lastDiscussion",{empty:!a.lastPostedDiscussion()})},this.lastDiscussionItems().toArray()),50),t},o.iconItems=function(){var t=new(P());if(this.tag.icon()&&this.isChild){var a={},o="fa-stack-1x CategoryIcon";h().forum.attribute("categories.childBareIcon")&&(a.color=this.tag.color(),o+=" NoBackgroundCategoryIcon");var e=this.compactMobileMode?"fa-stack fa-1x":"fa-stack fa-2x";t.add("icon",m("span",{className:e},!!h().forum.attribute("categories.childBareIcon")&&m("i",{className:"fa fa-circle fa-stack-2x icon-background",style:{color:this.tag.color()}}),E()(this.tag.icon(),{className:o,style:a})),10)}else if(this.tag.icon()&&!h().forum.attribute("categories.parentRemoveIcon")){var s=this.compactMobileMode?"fa-stack fa-2x":"fa-stack fa-3x";t.add("icon",m("span",{className:s},E()(this.tag.icon(),{className:"fa-stack-1x CategoryIcon"})),10)}return t},o.mainItems=function(){var t=new(P());return t.add("name",m("h4",{className:"TagCategory-name"},this.tag.name()),15),!this.tag.description()||!this.isChild&&h().forum.attribute("categories.parentRemoveDescription")||t.add("description",m("div",{className:"TagCategory-description"},this.tag.description()),10),t},o.statItems=function(){var t=new(P());return!this.isChild&&h().forum.attribute("categories.parentRemoveStats")||(t.add("discussionCount",R.component({count:Intl.NumberFormat().format(this.tag.discussionCount()),label:h().translator.trans("askvortsov-categories.forum.stat-widgets.discussion_label"),icon:"fas fa-file-alt"}),15),t.add("postCount",R.component({count:Intl.NumberFormat().format(this.tag.postCount()),label:h().translator.trans("askvortsov-categories.forum.stat-widgets.post_label"),icon:"fas fa-comment"}),10)),t},o.lastDiscussionItems=function(){var t=new(P());return!this.isChild&&h().forum.attribute("categories.parentRemoveLastDiscussion")||t.add("lastDiscussion",X.component({discussion:this.tag.lastPostedDiscussion()}),10),t},o.oncreate=function(a){t.prototype.oncreate.call(this,a),this.$(".TagCategory-content,.TagCategory-toggleArrow").on("mouseenter",(function(t){$(this).addClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").removeClass("hover")})),this.$(".TagCategory-content,.TagCategory-toggleArrow").on("mouseleave",(function(t){$(this).removeClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").addClass("hover")}))},o.onremove=function(a){t.prototype.onremove.call(this,a),this.$(".TagCategory-content,.TagCategory-toggleArrow").off("mouseenter"),this.$(".TagCategory-content,.TagCategory-toggleArrow").off("mouseleave")},o.toggleArrow=function(t){t.preventDefault(),t.stopPropagation(),this.collapsed=!this.collapsed,m.redraw()},a}(U()),Z=function(t){function a(){for(var a,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return(a=t.call.apply(t,[this].concat(e))||this).tags=void 0,a.loading=void 0,a}g(a,t);var o=a.prototype;return o.oninit=function(a){var o=this;t.prototype.oninit.call(this,a),h().history.push("categories",D()(h().translator.trans("askvortsov-category.forum.header.back_to_categories_tooltip"))),this.tags=[];var e=h().preloadedApiDocument();e?this.tags=_()(e.filter((function(t){return!t.isChild()}))):(this.loading=!0,h().tagList.load(["parent","children","lastPostedDiscussion","lastPostedDiscussion.lastPostedUser"]).then((function(){o.tags=_()(h().store.all("tags").filter((function(t){return!t.isChild()}))),o.loading=!1,m.redraw()})))},o.view=function(){if(this.loading)return m(C(),null);var t=h().forum.attribute("categories.fullPageDesktop")?["CategoriesPage","TagsPage"]:["CategoriesPage"];return m("div",{className:A()(t)},this.pageItems().toArray())},o.pageItems=function(){var t=new(P());return t.add("hero",s().prototype.hero(),100),t.add("container",m("div",{className:"container"},m("div",{className:h().forum.attribute("categories.fullPageDesktop")?"":"sideNavContainer"},this.containerItems().toArray())),50),t},o.containerItems=function(){var t=new(P()),a=this.tags.filter((function(t){return null!==t.position()})),o=this.tags.filter((function(t){return null===t.position()}));return t.add("sideNav",m(w(),null,m("nav",{className:"CategoriesPage-nav TagsPage-nav IndexPage-nav sideNav"},m("ul",null,N()(s().prototype.sidebarItems().toArray())))),100),t.add("categoriesList",m("div",{className:"CategoriesPage-content sideNavOffset"},m("ol",{className:"TagCategoryList"},a.map((function(t){return Y.component({model:t})}))),o.length?m("div",{className:"TagCloud"},o.map((function(t){return[S()(t,{link:!0})," "]}))):""),50),t},o.oncreate=function(a){t.prototype.oncreate.call(this,a),h().setTitle(D()(h().translator.trans("askvortsov-categories.forum.all_categories.meta_title_text")))},a}(v());function tt(t,a){if(app.current.matches(Z)&&app.forum.attribute("categories.fullPageDesktop"))for(var o in t.items)a(o)&&t.remove(o)}app.initializers.add("askvortsov/flarum-categories",(function(){app.routes.categories={path:"/categories",component:Z},u().prototype.postCount=c().attribute("postCount"),(0,o.extend)(s().prototype,"navItems",(function(t){return t.has("tags")&&!app.forum.attribute("categories.keepTagsNav")&&t.remove("tags"),t.add("categories",m(n(),{icon:"fas fa-th-list",href:app.route("categories")},app.translator.trans("askvortsov-categories.forum.index.categories_link")),-9.5),t.has("moreTags")&&t.replace("moreTags",m(n(),{href:app.route("categories")},app.translator.trans("flarum-tags.forum.index.more_link"))),tt(t,(function(t){return t.startsWith("tag")})),t})),(0,o.extend)(s().prototype,"sidebarItems",(function(t){return tt(t,(function(t){return"newDiscussion"!==t&&"nav"!==t})),t}))}));const at={"components/CategoriesPage":Z,"components/Category":Y,"components/LastDiscussionWidget":X,"components/StatWidget":R}})(),module.exports=a})();
//# sourceMappingURL=forum.js.map