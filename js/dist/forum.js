module.exports=function(t){var a={};function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=21)}([function(t,a){t.exports=flarum.core.compat["common/extend"]},function(t,a){t.exports=flarum.core.compat["common/Component"]},function(t,a){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,a){t.exports=flarum.core.compat["common/components/Link"]},function(t,a){t.exports=flarum.core.compat["common/helpers/icon"]},function(t,a){t.exports=flarum.core.compat["tags/utils/sortTags"]},function(t,a){t.exports=flarum.core.compat["common/utils/ItemList"]},function(t,a){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,a){t.exports=flarum.core.compat["common/Model"]},function(t,a){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,a){t.exports=flarum.core.compat["common/components/Page"]},function(t,a){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,a){t.exports=flarum.core.compat["forum/components/AffixedSidebar"]},function(t,a){t.exports=flarum.core.compat["common/helpers/listItems"]},function(t,a){t.exports=flarum.core.compat["tags/helpers/tagLabel"]},function(t,a){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["common/helpers/username"]},function(t,a){t.exports=flarum.core.compat["common/helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["common/utils/string"]},function(t,a){t.exports=flarum.core.compat["forum/components/UserCard"]},,function(t,a,o){"use strict";o.r(a);var e=o(0),s=o(2),r=o.n(s),n=o(7),i=o.n(n),c=o(8),u=o.n(c),l=o(9),p=o.n(l);function f(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a}var g=o(10),d=o.n(g),h=o(11),v=o.n(h),C=o(12),y=o.n(C),b=o(13),T=o.n(b),x=o(5),w=o.n(x),k=o(14),D=o.n(k),P=o(1),L=o.n(P),_=o(3),I=o.n(_),N=o(4),M=o.n(N),S=o(6),A=o.n(S),j=function(t){function a(){return t.apply(this,arguments)||this}return f(a,t),a.prototype.view=function(){var t=app.forum.attribute("categories.compactMobile")&&window.innerWidth<767;return m("div",{class:"StatWidget"},m("div",{class:"StatWidget-count"},this.attrs.count),m("div",{class:"StatWidget-label"},t?M()(this.attrs.icon):this.attrs.label))},a}(L.a),O=o(15),U=o.n(O),B=o(16),W=o.n(B),R=o(17),V=o.n(R),z=o(18),E=o(19),q=o.n(E),F=function(t){function a(){return t.apply(this,arguments)||this}f(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.cardVisible=!1},o.view=function(){var t=this.attrs.discussion;if(!t)return m("div",{class:"LastDiscussion"},app.translator.trans("askvortsov-categories.forum.last_discussion_widget.no_discussions"));var a=t.lastPostedUser(),o="";return a&&this.cardVisible&&(o=q.a.component({user:a,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),m(I.a,{class:"LastDiscussion",href:app.route.discussion(t,t.lastPostNumber())},m(I.a,{className:"LastDiscussion-avatar",href:a?app.route.user(a):"#"},U()(a)),m("div",{class:"LastDiscussion-content"},m("div",{class:"LastDiscussion-bottomRow"},V()(t.lastPostedAt())," ",m(I.a,{className:"LastDiscussion-usernameLink",href:a?app.route.user(a):"#"}," ","| ",W()(a))),m("div",{class:"LastDiscussion-topRow"},Object(z.truncate)(t.title(),26))),m("div",{class:"LastDiscussion-userCardContainer"},o))},o.oncreate=function(a){var o,e=this;t.prototype.oncreate.call(this,a),this.$().on("mouseover",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(o),o=setTimeout(e.showCard.bind(e),300)})).on("mouseout",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(o),o=setTimeout(e.hideCard.bind(e),150)}))},o.showCard=function(){var t=this;this.cardVisible=!0,m.redraw(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},o.hideCard=function(){$(".UserCard").removeClass("in"),this.cardVisible=!1,m.redraw()},a}(L.a),G=function(t){function a(){return t.apply(this,arguments)||this}f(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.tag=this.attrs.model,this.isChild=null!=this.attrs.parent&&null!=this.attrs.parent,this.collapsed=!1,window.addEventListener("resize",(function(){m.redraw()}))},o.view=function(){var t=this,o=this.tag;if(!o)return"";this.compactMobileMode=window.innerWidth<=767&&app.forum.attribute("categories.compactMobile");var e=this.isChild?[]:w()(o.children()||[]),s=this.isChild?{}:{backgroundColor:o.color()},r=["TagCategory","TagCategory-"+o.slug()];this.isChild?r.push("SubCategory"):r.push("ParentCategory"),this.compactMobileMode&&r.push("compactMobile");var n=(o.lastPostedDiscussion()?["TagCategory-lastDiscussion"]:["TagCategory-lastDiscussion empty"]).join(" "),i=!this.isChild&&this.compactMobileMode,c=m("ol",{className:"TagCategory-subTagList"},e.map((function(o){return[a.component({model:o,parent:t})]})));return m("li",{class:r.join(" ")},m(I.a,{class:"TagCategory-content TagCategory-content-"+o.slug(),style:s,href:app.route.tag(o)},m("div",{class:"TagCategory-alignStart"},m("div",{class:"TagCategory-alignStart-main"},m("span",{class:"TagCategory-icon"},this.iconItems().toArray()),m("div",{class:"TagCategory-main"},this.mainItems().toArray())),0==e.length?"":m("p",{class:"TagCategory-toggleArrow",onclick:function(a){t.toggleArrow(a)}},M()(this.collapsed?"fas fa-caret-down":"fas fa-caret-up"))),m("div",{class:"TagCategory-alignEnd"},m("div",{class:"TagCategory-stats StatWidgetList"},this.statItems().toArray()),m("div",{class:n},this.lastDiscussionItems().toArray())),i&&!this.collapsed?c:""),i||this.isChild?"":c)},o.iconItems=function(){var t=new A.a;if(this.tag.icon()&&this.isChild){var a={},o="fa-stack-1x CategoryIcon";app.forum.attribute("categories.childBareIcon")&&(a.color=this.tag.color(),o+=" NoBackgroundCategoryIcon");var e=this.compactMobileMode?"fa-stack fa-1x":"fa-stack fa-2x";t.add("icon",m("span",{class:e},app.forum.attribute("categories.childBareIcon")?"":m("i",{class:"fa fa-circle fa-stack-2x icon-background",style:{color:this.tag.color()}}),M()(this.tag.icon(),{className:o,style:a})),10)}else if(this.tag.icon()&&!app.forum.attribute("categories.parentRemoveIcon")){var s=this.compactMobileMode?"fa-stack fa-2x":"fa-stack fa-3x";t.add("icon",m("span",{class:s},M()(this.tag.icon(),{className:"fa-stack-1x CategoryIcon"})),10)}return t},o.mainItems=function(){var t=new A.a;return t.add("name",m("h4",{class:"TagCategory-name"},this.tag.name()),15),!this.tag.description()||!this.isChild&&app.forum.attribute("categories.parentRemoveDescription")||t.add("description",m("div",{class:"TagCategory-description"},this.tag.description()),10),t},o.statItems=function(){var t=new A.a;return!this.isChild&&app.forum.attribute("categories.parentRemoveStats")||(t.add("discussionCount",j.component({count:this.tag.discussionCount(),label:app.translator.trans("askvortsov-categories.forum.stat-widgets.discussion_label"),icon:"fas fa-file-alt"}),15),t.add("postCount",j.component({count:this.tag.postCount(),label:app.translator.trans("askvortsov-categories.forum.stat-widgets.post_label"),icon:"fas fa-comment"}),10)),t},o.lastDiscussionItems=function(){var t=new A.a;return!this.isChild&&app.forum.attribute("categories.parentRemoveLastDiscussion")||t.add("lastDiscussion",F.component({discussion:this.tag.lastPostedDiscussion()}),10),t},o.oncreate=function(a){t.prototype.oncreate.call(this,a),this.$(".TagCategory-content,.TagCategory-toggleArrow").bind("mouseenter",(function(t){$(this).addClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").removeClass("hover")})),this.$(".TagCategory-content,.TagCategory-toggleArrow").bind("mouseleave",(function(t){$(this).removeClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").addClass("hover")}))},o.toggleArrow=function(t){t.preventDefault(),t.stopPropagation(),this.collapsed=!this.collapsed,m.redraw()},a}(L.a),H=function(t){function a(){return t.apply(this,arguments)||this}f(a,t);var o=a.prototype;return o.oninit=function(a){var o=this;t.prototype.oninit.call(this,a),app.history.push("categories",app.translator.trans("askvortsov-category.forum.header.back_to_categories_tooltip")),this.tags=[];var e=app.preloadedApiDocument();e?this.tags=w()(e.filter((function(t){return!t.isChild()}))):(this.loading=!0,app.tagList.load(["children","lastPostedDiscussion","lastPostedDiscussion.lastPostedUser"]).then((function(){o.tags=w()(app.store.all("tags").filter((function(t){return!t.isChild()}))),o.loading=!1,m.redraw()})))},o.view=function(){if(this.loading)return m(v.a,null);var t=this.tags.filter((function(t){return null!==t.position()})),a=this.tags.filter((function(t){return null===t.position()})),o=app.forum.attribute("categories.fullPageDesktop")?["CategoriesPage","TagsPage"]:["CategoriesPage"];return m("div",{className:o.join(" ")},r.a.prototype.hero(),m("div",{className:"container"},m("div",{className:app.forum.attribute("categories.fullPageDesktop")?"":"sideNavContainer"},m(y.a,null,m("nav",{className:"CategoriesPage-nav TagsPage-nav IndexPage-nav sideNav"},m("ul",null,T()(r.a.prototype.sidebarItems().toArray())))),m("div",{className:"CategoriesPage-content sideNavOffset"},m("ol",{className:"TagCategoryList"},t.map((function(t){return G.component({model:t})}))),a.length?m("div",{className:"TagCloud"},a.map((function(t){return[D()(t,{link:!0})," "]}))):""))))},o.oncreate=function(a){t.prototype.oncreate.call(this,a),app.setTitle(app.translator.trans("askvortsov-categories.forum.all_categories.meta_title_text"))},a}(d.a);function J(t,a){if(app.current.matches(H)&&app.forum.attribute("categories.fullPageDesktop"))for(var o in t.items)a(o)&&t.remove(o)}app.initializers.add("askvortsov/flarum-categories",(function(){app.routes.categories={path:"/categories",component:H},p.a.prototype.postCount=u.a.attribute("postCount"),Object(e.extend)(r.a.prototype,"navItems",(function(t){return t.has("tags")&&!app.forum.attribute("categories.keepTagsNav")&&t.remove("tags"),t.add("categories",m(i.a,{icon:"fas fa-th-list",href:app.route("categories")},app.translator.trans("askvortsov-categories.forum.index.categories_link")),-9.5),t.has("moreTags")&&t.replace("moreTags",m(i.a,{href:app.route("categories")},app.translator.trans("flarum-tags.forum.index.more_link"))),J(t,(function(t){return t.startsWith("tag")})),t})),Object(e.extend)(r.a.prototype,"sidebarItems",(function(t){return J(t,(function(t){return"newDiscussion"!==t&&"nav"!==t})),t}))}))}]);
//# sourceMappingURL=forum.js.map