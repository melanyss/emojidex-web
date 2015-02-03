/*
 * jQuery emojidex - v0.2.0
 * emojidex plugin for jQuery/Zepto and compatible
 * https://github.com/emojidex/emojidex-web
 *
 * Includes:
 *   emojidexReplace, emojidexAutocomplete
 *
 * =LICENSE=
 * Licensed under the emojidex Open License
 * https://www.emojidex.com/emojidex/emojidex_open_license
 *
 * Copyright 2013 Genshin Souzou Kabushiki Kaisha
 *
 *
 * Includes:
 * --------------------------------
 * emojidex client - v0.2.0
 * * Provides search, index caching and combining and asset URI resolution
 * https://github.com/emojidex/emojidex-web-client
 *
 * =LICENSE=
 * Licensed under the emojidex Open License
 * https://www.emojidex.com/emojidex/emojidex_open_license
 *
 * Copyright 2013 Genshin Souzou Kabushiki Kaisha
 *
 *
 * Includes:
 * --------------------------------
 * jQuery Storage API Plugin
 *
 * Copyright (c) 2013 Julien Maurel
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 * https://github.com/julien-maurel/jQuery-Storage-API
 *
 * Version: 1.7.3
 *
 * --------------------------------
 * --------------------------------
  Implement Github like autocomplete mentions
  http://ichord.github.com/At.js
  Copyright (c) 2013 chord.luo@gmail.com
  Licensed under the MIT license.
* --------------------------------
! jquery.atwho - v0.5.1 - 2014-09-14
 * Copyright (c) 2014 chord.luo <chord.luo@gmail.com>;
 * homepage: http://ichord.github.com/At.js* Licensed MIT
* --------------------------------
 */
/*! jquery.caret 2014-09-14 */
(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l;return k="caret",b=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.setPos=function(){return this.domInputor},b.prototype.getIEPosition=function(){return this.getPosition()},b.prototype.getPosition=function(){var a,b;return b=this.getOffset(),a=this.$inputor.offset(),b.left-=a.left,b.top-=a.top,b},b.prototype.getOldIEPos=function(){var a,b;return b=h.selection.createRange(),a=h.body.createTextRange(),a.moveToElementText(this.domInputor),a.setEndPoint("EndToEnd",b),a.text.length},b.prototype.getPos=function(){var a,b,c;return(c=this.range())?(a=c.cloneRange(),a.selectNodeContents(this.domInputor),a.setEnd(c.endContainer,c.endOffset),b=a.toString().length,a.detach(),b):h.selection?this.getOldIEPos():void 0},b.prototype.getOldIEOffset=function(){var a,b;return a=h.selection.createRange().duplicate(),a.moveStart("character",-1),b=a.getBoundingClientRect(),{height:b.bottom-b.top,left:b.left,top:b.top}},b.prototype.getOffset=function(){var b,c,d,e;if(j.getSelection&&(d=this.range())){if(d.endOffset-1<0)return null;b=d.cloneRange(),b.setStart(d.endContainer,d.endOffset-1),b.setEnd(d.endContainer,d.endOffset),e=b.getBoundingClientRect(),c={height:e.height,left:e.left+e.width,top:e.top},b.detach()}else h.selection&&(c=this.getOldIEOffset());return c&&(c.top+=a(j).scrollTop(),c.left+=a(j).scrollLeft()),c},b.prototype.range=function(){var a;if(j.getSelection)return a=j.getSelection(),a.rangeCount>0?a.getRangeAt(0):null},b}(),c=function(){function b(a){this.$inputor=a,this.domInputor=this.$inputor[0]}return b.prototype.getIEPos=function(){var a,b,c,d,e,f,g;return b=this.domInputor,f=h.selection.createRange(),e=0,f&&f.parentElement()===b&&(d=b.value.replace(/\r\n/g,"\n"),c=d.length,g=b.createTextRange(),g.moveToBookmark(f.getBookmark()),a=b.createTextRange(),a.collapse(!1),e=g.compareEndPoints("StartToEnd",a)>-1?c:-g.moveStart("character",-c)),e},b.prototype.getPos=function(){return h.selection?this.getIEPos():this.domInputor.selectionStart},b.prototype.setPos=function(a){var b,c;return b=this.domInputor,h.selection?(c=b.createTextRange(),c.move("character",a),c.select()):b.setSelectionRange&&b.setSelectionRange(a,a),b},b.prototype.getIEOffset=function(a){var b,c,d,e;return c=this.domInputor.createTextRange(),a||(a=this.getPos()),c.move("character",a),d=c.boundingLeft,e=c.boundingTop,b=c.boundingHeight,{left:d,top:e,height:b}},b.prototype.getOffset=function(b){var c,d,e;return c=this.$inputor,h.selection?(d=this.getIEOffset(b),d.top+=a(j).scrollTop()+c.scrollTop(),d.left+=a(j).scrollLeft()+c.scrollLeft(),d):(d=c.offset(),e=this.getPosition(b),d={left:d.left+e.left-c.scrollLeft(),top:d.top+e.top-c.scrollTop(),height:e.height})},b.prototype.getPosition=function(b){var c,e,f,g,h,i,j;return c=this.$inputor,g=function(b){return a("<div></div>").text(b).html()},void 0===b&&(b=this.getPos()),j=c.val().slice(0,b),f=c.val().slice(b),h="<span style='position: relative; display: inline;'>"+g(j)+"</span>",h+="<span id='caret' style='position: relative; display: inline;'>|</span>",h+="<span style='position: relative; display: inline;'>"+g(f)+"</span>",i=new d(c),e=i.create(h).rect()},b.prototype.getIEPosition=function(a){var b,c,d,e,f;return d=this.getIEOffset(a),c=this.$inputor.offset(),e=d.left-c.left,f=d.top-c.top,b=d.height,{left:e,top:f,height:b}},b}(),d=function(){function b(a){this.$inputor=a}return b.prototype.css_attr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle","borderTopWidth","boxSizing","fontFamily","fontSize","fontWeight","height","letterSpacing","lineHeight","marginBottom","marginLeft","marginRight","marginTop","outlineWidth","overflow","overflowX","overflowY","paddingBottom","paddingLeft","paddingRight","paddingTop","textAlign","textOverflow","textTransform","whiteSpace","wordBreak","wordWrap"],b.prototype.mirrorCss=function(){var b,c=this;return b={position:"absolute",left:-9999,top:0,zIndex:-2e4},"TEXTAREA"===this.$inputor.prop("tagName")&&this.css_attr.push("width"),a.each(this.css_attr,function(a,d){return b[d]=c.$inputor.css(d)}),b},b.prototype.create=function(b){return this.$mirror=a("<div></div>"),this.$mirror.css(this.mirrorCss()),this.$mirror.html(b),this.$inputor.after(this.$mirror),this},b.prototype.rect=function(){var a,b,c;return a=this.$mirror.find("#caret"),b=a.position(),c={left:b.left,top:b.top,height:a.height()},this.$mirror.remove(),c},b}(),e={contentEditable:function(a){return!(!a[0].contentEditable||"true"!==a[0].contentEditable)}},g={pos:function(a){return a||0===a?this.setPos(a):this.getPos()},position:function(a){return h.selection?this.getIEPosition(a):this.getPosition(a)},offset:function(a){var b;return b=this.getOffset(a)}},h=null,j=null,i=null,l=function(a){var b;return(b=null!=a?a.iframe:void 0)?(i=b,j=b.contentWindow,h=b.contentDocument||j.document):(i=void 0,j=window,h=document)},f=function(a){var b;h=a[0].ownerDocument,j=h.defaultView||h.parentWindow;try{return i=j.frameElement}catch(c){b=c}},a.fn.caret=function(d,f,h){var i;return g[d]?(a.isPlainObject(f)?(l(f),f=void 0):l(h),i=e.contentEditable(this)?new b(this):new c(this),g[d].apply(i,[f])):a.error("Method "+d+" does not exist on jQuery.caret")},a.fn.caret.EditableCaret=b,a.fn.caret.InputCaret=c,a.fn.caret.Utils=e,a.fn.caret.apis=g})}).call(this);
(function(){!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(window.jQuery)}(function(a){var b,c,d,e,f,g,h,i=[].slice;c=function(){function b(b){this.current_flag=null,this.controllers={},this.alias_maps={},this.$inputor=a(b),this.setIframe(),this.listen()}return b.prototype.createContainer=function(b){return 0===(this.$el=a("#atwho-container",b)).length?a(b.body).append(this.$el=a("<div id='atwho-container'></div>")):void 0},b.prototype.setIframe=function(a,b){var c;return null==b&&(b=!1),a?(this.window=a.contentWindow,this.document=a.contentDocument||this.window.document,this.iframe=a):(this.document=document,this.window=window,this.iframe=null),(this.iframeStandalone=b)?(null!=(c=this.$el)&&c.remove(),this.createContainer(this.document)):this.createContainer(document)},b.prototype.controller=function(a){var b,c,d,e;if(this.alias_maps[a])c=this.controllers[this.alias_maps[a]];else{e=this.controllers;for(d in e)if(b=e[d],d===a){c=b;break}}return c?c:this.controllers[this.current_flag]},b.prototype.set_context_for=function(a){return this.current_flag=a,this},b.prototype.reg=function(a,b){var c,e;return c=(e=this.controllers)[a]||(e[a]=new d(this,a)),b.alias&&(this.alias_maps[b.alias]=a),c.init(b),this},b.prototype.listen=function(){return this.$inputor.on("keyup.atwhoInner",function(a){return function(b){return a.on_keyup(b)}}(this)).on("keydown.atwhoInner",function(a){return function(b){return a.on_keydown(b)}}(this)).on("scroll.atwhoInner",function(a){return function(b){var c;return null!=(c=a.controller())?c.view.hide(b):void 0}}(this)).on("blur.atwhoInner",function(a){return function(b){var c;return(c=a.controller())?c.view.hide(b,c.get_opt("display_timeout")):void 0}}(this)).on("click.atwhoInner",function(a){return function(b){var c;return null!=(c=a.controller())?c.view.hide(b):void 0}}(this))},b.prototype.shutdown=function(){var a,b,c;c=this.controllers;for(b in c)a=c[b],a.destroy(),delete this.controllers[b];return this.$inputor.off(".atwhoInner"),this.$el.remove()},b.prototype.dispatch=function(){return a.map(this.controllers,function(a){return function(b){var c;return(c=b.get_opt("delay"))?(clearTimeout(a.delayedCallback),a.delayedCallback=setTimeout(function(){return b.look_up()?a.set_context_for(b.at):void 0},c)):b.look_up()?a.set_context_for(b.at):void 0}}(this))},b.prototype.on_keyup=function(b){var c;switch(b.keyCode){case f.ESC:b.preventDefault(),null!=(c=this.controller())&&c.view.hide();break;case f.DOWN:case f.UP:case f.CTRL:a.noop();break;case f.P:case f.N:b.ctrlKey||this.dispatch();break;default:this.dispatch()}},b.prototype.on_keydown=function(b){var c,d;if(c=null!=(d=this.controller())?d.view:void 0,c&&c.visible())switch(b.keyCode){case f.ESC:b.preventDefault(),c.hide(b);break;case f.UP:b.preventDefault(),c.prev();break;case f.DOWN:b.preventDefault(),c.next();break;case f.P:if(!b.ctrlKey)return;b.preventDefault(),c.prev();break;case f.N:if(!b.ctrlKey)return;b.preventDefault(),c.next();break;case f.TAB:case f.ENTER:if(!c.visible())return;b.preventDefault(),c.choose(b);break;default:a.noop()}},b}(),d=function(){function b(b,c){this.app=b,this.at=c,this.$inputor=this.app.$inputor,this.id=this.$inputor[0].id||this.uid(),this.setting=null,this.query=null,this.pos=0,this.cur_rect=null,this.range=null,0===(this.$el=a("#atwho-ground-"+this.id,this.app.$el)).length&&this.app.$el.append(this.$el=a("<div id='atwho-ground-"+this.id+"'></div>")),this.model=new g(this),this.view=new h(this)}return b.prototype.uid=function(){return(Math.random().toString(16)+"000000000").substr(2,8)+(new Date).getTime()},b.prototype.init=function(b){return this.setting=a.extend({},this.setting||a.fn.atwho["default"],b),this.view.init(),this.model.reload(this.setting.data)},b.prototype.destroy=function(){return this.trigger("beforeDestroy"),this.model.destroy(),this.view.destroy(),this.$el.remove()},b.prototype.call_default=function(){var b,c,d;d=arguments[0],b=2<=arguments.length?i.call(arguments,1):[];try{return e[d].apply(this,b)}catch(f){return c=f,a.error(""+c+" Or maybe At.js doesn't have function "+d)}},b.prototype.trigger=function(a,b){var c,d;return null==b&&(b=[]),b.push(this),c=this.get_opt("alias"),d=c?""+a+"-"+c+".atwho":""+a+".atwho",this.$inputor.trigger(d,b)},b.prototype.callbacks=function(a){return this.get_opt("callbacks")[a]||e[a]},b.prototype.get_opt=function(a){var b;try{return this.setting[a]}catch(c){return b=c,null}},b.prototype.content=function(){return this.$inputor.is("textarea, input")?this.$inputor.val():this.$inputor.text()},b.prototype.catch_query=function(){var a,b,c,d,e,f;return b=this.content(),a=this.$inputor.caret("pos",{iframe:this.app.iframe}),f=b.slice(0,a),d=this.callbacks("matcher").call(this,this.at,f,this.get_opt("start_with_space")),"string"==typeof d&&d.length<=this.get_opt("max_len",20)?(e=a-d.length,c=e+d.length,this.pos=e,d={text:d,head_pos:e,end_pos:c},this.trigger("matched",[this.at,d.text])):(d=null,this.view.hide()),this.query=d},b.prototype.rect=function(){var b,c,d;if(b=this.$inputor.caret("offset",this.pos-1,{iframe:this.app.iframe}))return this.app.iframe&&!this.app.iframeStandalone&&(c=a(this.app.iframe).offset(),b.left+=c.left,b.top+=c.top),"true"===this.$inputor.attr("contentEditable")&&(b=this.cur_rect||(this.cur_rect=b)),d=this.app.document.selection?0:2,{left:b.left,top:b.top,bottom:b.top+b.height+d}},b.prototype.reset_rect=function(){return"true"===this.$inputor.attr("contentEditable")?this.cur_rect=null:void 0},b.prototype.mark_range=function(){return"true"===this.$inputor.attr("contentEditable")&&(this.app.window.getSelection&&(this.range=this.app.window.getSelection().getRangeAt(0)),this.app.document.selection)?this.ie8_range=this.app.document.selection.createRange():void 0},b.prototype.insert_content_for=function(b){var c,d,e;return d=b.data("value"),e=this.get_opt("insert_tpl"),this.$inputor.is("textarea, input")||!e?d:(c=a.extend({},b.data("item-data"),{"atwho-data-value":d,"atwho-at":this.at}),this.callbacks("tpl_eval").call(this,e,c))},b.prototype.insert=function(b){var c,d,e,f,g,h,i,j,k;return c=this.$inputor,k=this.callbacks("inserting_wrapper").call(this,c,b,this.get_opt("suffix")),c.is("textarea, input")?(h=c.val(),i=h.slice(0,Math.max(this.query.head_pos-this.at.length,0)),j=""+i+k+h.slice(this.query.end_pos||0),c.val(j),c.caret("pos",i.length+k.length,{iframe:this.app.iframe})):(f=this.range)?(e=f.startOffset-(this.query.end_pos-this.query.head_pos)-this.at.length,f.setStart(f.endContainer,Math.max(e,0)),f.setEnd(f.endContainer,f.endOffset),f.deleteContents(),d=a(k,this.app.document)[0],f.insertNode(d),f.setEndAfter(d),f.collapse(!1),g=this.app.window.getSelection(),g.removeAllRanges(),g.addRange(f)):(f=this.ie8_range)&&(f.moveStart("character",this.query.end_pos-this.query.head_pos-this.at.length),f.pasteHTML(k),f.collapse(!1),f.select()),c.is(":focus")||c.focus(),c.change()},b.prototype.render_view=function(a){var b;return b=this.get_opt("search_key"),a=this.callbacks("sorter").call(this,this.query.text,a.slice(0,1001),b),this.view.render(a.slice(0,this.get_opt("limit")))},b.prototype.look_up=function(){var b,c;if(b=this.catch_query())return c=function(a){return a&&a.length>0?this.render_view(a):this.view.hide()},this.model.query(b.text,a.proxy(c,this)),b},b}(),g=function(){function b(a){this.context=a,this.at=this.context.at,this.storage=this.context.$inputor}return b.prototype.destroy=function(){return this.storage.data(this.at,null)},b.prototype.saved=function(){return this.fetch()>0},b.prototype.query=function(a,b){var c,d,e;return c=this.fetch(),d=this.context.get_opt("search_key"),c=this.context.callbacks("filter").call(this.context,a,c,d)||[],e=this.context.callbacks("remote_filter"),c.length>0||!e&&0===c.length?b(c):e.call(this.context,a,b)},b.prototype.fetch=function(){return this.storage.data(this.at)||[]},b.prototype.save=function(a){return this.storage.data(this.at,this.context.callbacks("before_save").call(this.context,a||[]))},b.prototype.load=function(a){return!this.saved()&&a?this._load(a):void 0},b.prototype.reload=function(a){return this._load(a)},b.prototype._load=function(b){return"string"==typeof b?a.ajax(b,{dataType:"json"}).done(function(a){return function(b){return a.save(b)}}(this)):this.save(b)},b}(),h=function(){function b(b){this.context=b,this.$el=a("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"),this.timeout_id=null,this.context.$el.append(this.$el),this.bind_event()}return b.prototype.init=function(){var a;return a=this.context.get_opt("alias")||this.context.at.charCodeAt(0),this.$el.attr({id:"at-view-"+a})},b.prototype.destroy=function(){return this.$el.remove()},b.prototype.bind_event=function(){var b;return b=this.$el.find("ul"),b.on("mouseenter.atwho-view","li",function(c){return b.find(".cur").removeClass("cur"),a(c.currentTarget).addClass("cur")}).on("click",function(a){return function(b){return a.choose(b),b.preventDefault()}}(this))},b.prototype.visible=function(){return this.$el.is(":visible")},b.prototype.choose=function(a){var b,c;return(b=this.$el.find(".cur")).length&&(c=this.context.insert_content_for(b),this.context.insert(this.context.callbacks("before_insert").call(this.context,c,b),b),this.context.trigger("inserted",[b,a]),this.hide(a)),this.context.get_opt("hide_without_suffix")?this.stop_showing=!0:void 0},b.prototype.reposition=function(b){var c,d,e,f;return f=this.context.app.iframeStandalone?this.context.app.window:window,b.bottom+this.$el.height()-a(f).scrollTop()>a(f).height()&&(b.bottom=b.top-this.$el.height()),b.left>(d=a(f).width()-this.$el.width()-5)&&(b.left=d),c={left:b.left,top:b.bottom},null!=(e=this.context.callbacks("before_reposition"))&&e.call(this.context,c),this.$el.offset(c),this.context.trigger("reposition",[c])},b.prototype.next=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.next(),b.length||(b=this.$el.find("li:first")),b.addClass("cur")},b.prototype.prev=function(){var a,b;return a=this.$el.find(".cur").removeClass("cur"),b=a.prev(),b.length||(b=this.$el.find("li:last")),b.addClass("cur")},b.prototype.show=function(){var a;return this.stop_showing?void(this.stop_showing=!1):(this.context.mark_range(),this.visible()||(this.$el.show(),this.context.trigger("shown")),(a=this.context.rect())?this.reposition(a):void 0)},b.prototype.hide=function(a,b){var c;if(this.visible())return isNaN(b)?(this.context.reset_rect(),this.$el.hide(),this.context.trigger("hidden",[a])):(c=function(a){return function(){return a.hide()}}(this),clearTimeout(this.timeout_id),this.timeout_id=setTimeout(c,b))},b.prototype.render=function(b){var c,d,e,f,g,h,i;if(!(a.isArray(b)&&b.length>0))return void this.hide();for(this.$el.find("ul").empty(),d=this.$el.find("ul"),g=this.context.get_opt("tpl"),h=0,i=b.length;i>h;h++)e=b[h],e=a.extend({},e,{"atwho-at":this.context.at}),f=this.context.callbacks("tpl_eval").call(this.context,g,e),c=a(this.context.callbacks("highlighter").call(this.context,f,this.context.query.text)),c.data("item-data",e),d.append(c);return this.show(),this.context.get_opt("highlight_first")?d.find("li:first").addClass("cur"):void 0},b}(),f={DOWN:40,UP:38,ESC:27,TAB:9,ENTER:13,CTRL:17,P:80,N:78},e={before_save:function(b){var c,d,e,f;if(!a.isArray(b))return b;for(f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(a.isPlainObject(c)?c:{name:c});return f},matcher:function(a,b,c){var d,e;return a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),c&&(a="(?:^|\\s)"+a),e=new RegExp(a+"([A-Za-z0-9_+-]*)$|"+a+"([^\\x00-\\xff]*)$","gi"),d=e.exec(b),d?d[2]||d[1]:null},filter:function(a,b,c){var d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],~new String(d[c]).toLowerCase().indexOf(a.toLowerCase())&&g.push(d);return g},remote_filter:null,sorter:function(a,b,c){var d,e,f,g;if(!a)return b;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],d.atwho_order=new String(d[c]).toLowerCase().indexOf(a.toLowerCase()),d.atwho_order>-1&&g.push(d);return g.sort(function(a,b){return a.atwho_order-b.atwho_order})},tpl_eval:function(a,b){var c;try{return a.replace(/\$\{([^\}]*)\}/g,function(a,c){return b[c]})}catch(d){return c=d,""}},highlighter:function(a,b){var c;return b?(c=new RegExp(">\\s*(\\w*?)("+b.replace("+","\\+")+")(\\w*)\\s*<","ig"),a.replace(c,function(a,b,c,d){return"> "+b+"<strong>"+c+"</strong>"+d+" <"})):a},before_insert:function(a){return a},inserting_wrapper:function(a,b,c){var d,e;return d=""===c?c:c||" ",a.is("textarea, input")?""+b+d:"true"===a.attr("contentEditable")?(d=""===c?c:c||"&nbsp;",/firefox/i.test(navigator.userAgent)?e="<span>"+b+d+"</span>":(c="<span contenteditable='false'>"+d+"<span>",e="<span contenteditable='false'>"+b+c+"</span>"),this.app.document.selection&&(e="<span contenteditable='true'>"+b+"</span>"),e):void 0}},b={load:function(a,b){var c;return(c=this.controller(a))?c.model.load(b):void 0},setIframe:function(a,b){return this.setIframe(a,b),null},run:function(){return this.dispatch()},destroy:function(){return this.shutdown(),this.$inputor.data("atwho",null)}},a.fn.atwho=function(d){var e,f;return f=arguments,e=null,this.filter('textarea, input, [contenteditable=""], [contenteditable=true]').each(function(){var g,h;return(h=(g=a(this)).data("atwho"))||g.data("atwho",h=new c(this)),"object"!=typeof d&&d?b[d]&&h?e=b[d].apply(h,Array.prototype.slice.call(f,1)):a.error("Method "+d+" does not exist on jQuery.caret"):h.reg(d.at,d)}),e||this},a.fn.atwho["default"]={at:void 0,alias:void 0,data:null,tpl:"<li data-value='${atwho-at}${name}'>${name}</li>",insert_tpl:"<span id='${id}'>${atwho-data-value}</span>",callbacks:e,search_key:"name",suffix:void 0,hide_without_suffix:!1,start_with_space:!0,highlight_first:!0,limit:5,max_len:20,display_timeout:300,delay:null}})}).call(this);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(b){var c,d,e,f=arguments.length,g=window[b],h=arguments,i=h[1];if(2>f)throw new Error("Minimum 2 arguments must be given");if(a.isArray(i)){d={};for(var j in i){c=i[j];try{d[c]=JSON.parse(g.getItem(c))}catch(k){d[c]=g.getItem(c)}}return d}if(2!=f){try{d=JSON.parse(g.getItem(i))}catch(k){throw new ReferenceError(i+" is not defined in this storage")}for(var j=2;f-1>j;j++)if(d=d[h[j]],void 0===d)throw new ReferenceError([].slice.call(h,1,j+1).join(".")+" is not defined in this storage");if(a.isArray(h[j])){e=d,d={};for(var l in h[j])d[h[j][l]]=e[h[j][l]];return d}return d[h[j]]}try{return JSON.parse(g.getItem(i))}catch(k){return g.getItem(i)}}function c(b){var c,d,e=arguments.length,f=window[b],g=arguments,h=g[1],i=g[2],j={};if(2>e||!a.isPlainObject(h)&&3>e)throw new Error("Minimum 3 arguments must be given or second parameter must be an object");if(a.isPlainObject(h)){for(var k in h)c=h[k],a.isPlainObject(c)?f.setItem(k,JSON.stringify(c)):f.setItem(k,c);return h}if(3==e)return"object"==typeof i?f.setItem(h,JSON.stringify(i)):f.setItem(h,i),i;try{d=f.getItem(h),null!=d&&(j=JSON.parse(d))}catch(l){}d=j;for(var k=2;e-2>k;k++)c=g[k],d[c]&&a.isPlainObject(d[c])||(d[c]={}),d=d[c];return d[g[k]]=g[k+1],f.setItem(h,JSON.stringify(j)),j}function d(b){var c,d,e=arguments.length,f=window[b],g=arguments,h=g[1];if(2>e)throw new Error("Minimum 2 arguments must be given");if(a.isArray(h)){for(var i in h)f.removeItem(h[i]);return!0}if(2==e)return f.removeItem(h),!0;try{c=d=JSON.parse(f.getItem(h))}catch(j){throw new ReferenceError(h+" is not defined in this storage")}for(var i=2;e-1>i;i++)if(d=d[g[i]],void 0===d)throw new ReferenceError([].slice.call(g,1,i).join(".")+" is not defined in this storage");if(a.isArray(g[i]))for(var k in g[i])delete d[g[i][k]];else delete d[g[i]];return f.setItem(h,JSON.stringify(c)),!0}function e(b,c){var e=h(b);for(var f in e)d(b,e[f]);if(c)for(var f in a.namespaceStorages)i(f)}function f(c){var d=arguments.length,e=arguments,g=(window[c],e[1]);if(1==d)return 0==h(c).length;if(a.isArray(g)){for(var i=0;i<g.length;i++)if(!f(c,g[i]))return!1;return!0}try{var j=b.apply(this,arguments);a.isArray(e[d-1])||(j={totest:j});for(var i in j)if(!(a.isPlainObject(j[i])&&a.isEmptyObject(j[i])||a.isArray(j[i])&&!j[i].length)&&j[i])return!1;return!0}catch(k){return!0}}function g(c){var d=arguments.length,e=arguments,f=(window[c],e[1]);if(2>d)throw new Error("Minimum 2 arguments must be given");if(a.isArray(f)){for(var h=0;h<f.length;h++)if(!g(c,f[h]))return!1;return!0}try{var i=b.apply(this,arguments);a.isArray(e[d-1])||(i={totest:i});for(var h in i)if(void 0===i[h]||null===i[h])return!1;return!0}catch(j){return!1}}function h(c){var d=arguments.length,e=window[c],f=arguments,g=(f[1],[]),h={};if(h=d>1?b.apply(this,f):e,h._cookie)for(var i in a.cookie())""!=i&&g.push(i.replace(h._prefix,""));else for(var j in h)g.push(j);return g}function i(b){if(!b||"string"!=typeof b)throw new Error("First parameter must be a string");m?(window.localStorage.getItem(b)||window.localStorage.setItem(b,"{}"),window.sessionStorage.getItem(b)||window.sessionStorage.setItem(b,"{}")):(window.localCookieStorage.getItem(b)||window.localCookieStorage.setItem(b,"{}"),window.sessionCookieStorage.getItem(b)||window.sessionCookieStorage.setItem(b,"{}"));var c={localStorage:a.extend({},a.localStorage,{_ns:b}),sessionStorage:a.extend({},a.sessionStorage,{_ns:b})};return a.cookie&&(window.cookieStorage.getItem(b)||window.cookieStorage.setItem(b,"{}"),c.cookieStorage=a.extend({},a.cookieStorage,{_ns:b})),a.namespaceStorages[b]=c,c}function j(a){if(!window[a])return!1;var b="jsapi";try{return window[a].setItem(b,b),window[a].removeItem(b),!0}catch(c){return!1}}var k="ls_",l="ss_",m=j("localStorage"),n={_type:"",_ns:"",_callMethod:function(a,b){var c=[this._type],b=Array.prototype.slice.call(b),d=b[0];return this._ns&&c.push(this._ns),"string"==typeof d&&-1!==d.indexOf(".")&&(b.shift(),[].unshift.apply(b,d.split("."))),[].push.apply(c,b),a.apply(this,c)},get:function(){return this._callMethod(b,arguments)},set:function(){var b=arguments.length,d=arguments,e=d[0];if(1>b||!a.isPlainObject(e)&&2>b)throw new Error("Minimum 2 arguments must be given or first parameter must be an object");if(a.isPlainObject(e)&&this._ns){for(var f in e)c(this._type,this._ns,f,e[f]);return e}var g=this._callMethod(c,d);return this._ns?g[e.split(".")[0]]:g},remove:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return this._callMethod(d,arguments)},removeAll:function(a){return this._ns?(c(this._type,this._ns,{}),!0):e(this._type,a)},isEmpty:function(){return this._callMethod(f,arguments)},isSet:function(){if(arguments.length<1)throw new Error("Minimum 1 argument must be given");return this._callMethod(g,arguments)},keys:function(){return this._callMethod(h,arguments)}};if(a.cookie){window.name||(window.name=Math.floor(1e8*Math.random()));var o={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(b,c){a.cookie(this._prefix+b,c,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(b){return a.cookie(this._prefix+b)},removeItem:function(b){return a.removeCookie(this._prefix+b)},clear:function(){for(var b in a.cookie())""!=b&&(!this._prefix&&-1===b.indexOf(k)&&-1===b.indexOf(l)||this._prefix&&0===b.indexOf(this._prefix))&&a.removeCookie(b)},setExpires:function(a){return this._expires=a,this},setPath:function(a){return this._path=a,this},setDomain:function(a){return this._domain=a,this},setConf:function(a){return a.path&&(this._path=a.path),a.domain&&(this._domain=a.domain),a.expires&&(this._expires=a.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};m||(window.localCookieStorage=a.extend({},o,{_prefix:k,_expires:3650}),window.sessionCookieStorage=a.extend({},o,{_prefix:l+window.name+"_"})),window.cookieStorage=a.extend({},o),a.cookieStorage=a.extend({},n,{_type:"cookieStorage",setExpires:function(a){return window.cookieStorage.setExpires(a),this},setPath:function(a){return window.cookieStorage.setPath(a),this},setDomain:function(a){return window.cookieStorage.setDomain(a),this},setConf:function(a){return window.cookieStorage.setConf(a),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}a.initNamespaceStorage=function(a){return i(a)},m?(a.localStorage=a.extend({},n,{_type:"localStorage"}),a.sessionStorage=a.extend({},n,{_type:"sessionStorage"})):(a.localStorage=a.extend({},n,{_type:"localCookieStorage"}),a.sessionStorage=a.extend({},n,{_type:"sessionCookieStorage"})),a.namespaceStorages={},a.removeAllStorages=function(b){a.localStorage.removeAll(b),a.sessionStorage.removeAll(b),a.cookieStorage&&a.cookieStorage.removeAll(b),b||(a.namespaceStorages={})}}),function(){var a,b,c,d,e,f,g,h,i,j,k=function(a,b){return function(){return a.apply(b,arguments)}};this.EmojidexClient=function(){function a(a){null==a&&(a={}),this.Util=new j,this.S=new f(a),this.Data=this.S.Data,this.Emoji=this.S.Emoji,this.Categories=this.S.Categories,this.Indexes=this.S.Indexes,this.User=this.S.User,this.Search=new e(this.S)}return a}(),a=function(){function a(a){null==a&&(a=null),this.S=a||new f,this._categories=this.S.Data.categories(),0===this.S.Data.categories().length&&this.sync()}return a.prototype.sync=function(a,b){var c=this;return null==b&&(b=this.S.locale),$.ajax({url:this.S.api_url+"categories",dataType:"json",data:{locale:b},success:function(b){return c._categories=c.S.Data.categories(b.categories),null!=a?a(b.categories):void 0}})},a.prototype.all=function(){return this._categories},a}(),b=function(){function a(a){this.storage=$.localStorage,this.storage.isSet("emojidex")||this.storage.set("emojidex",{}),this.storage.isSet("emojidex.emoji")||this.storage.set("emojidex.emoji",a.emoji||[]),this.storage.isSet("emojidex.history")||this.storage.set("emojidex.history",a.history||[]),this.storage.isSet("emojidex.favorites")||this.storage.set("emojidex.favorites",a.favorites||[]),this.storage.isSet("emojidex.auth_info")||this.storage.set("emojidex.auth_info",a.auth_info||this._def_auth_info())}return a.prototype.emoji=function(a){return null==a&&(a=null),null!==a&&this.storage.set("emojidex.emoji",a),this.storage.get("emojidex.emoji")},a.prototype.favorites=function(a){return null==a&&(a=null),null!==a&&this.storage.set("emojidex.favorites",a),this.storage.get("emojidex.favorites")},a.prototype.history=function(a){return null==a&&(a=null),null!==a&&this.storage.set("emojidex.history",a),this.storage.get("emojidex.history")},a.prototype.categories=function(a){return null==a&&(a=null),null!==a&&this.storage.set("emojidex.categories",a),this.storage.get("emojidex.categories")},a.prototype._def_auth_info=function(){return{status:"none",user:"",token:null}},a.prototype.auth_info=function(a){return null==a&&(a=null),null!==a&&this.storage.set("emojidex.auth_info",a),this.storage.get("emojidex.auth_info")},a}(),c=function(){function a(a){null==a&&(a=null),this.combine=k(this.combine,this),this.S=a||new f,this._emoji=this.S.Data.emoji(),this.util=new j,0===this.S.Data.emoji().length&&this.seed()}return a.prototype.seed=function(a){switch(null===a&&(a=this.S.locale),a){case"en":return this.S.Indexes.user("emoji",this.combine),this.S.Indexes.user("emojidex",this.combine);case"ja":return this.S.Indexes.user("絵文字",this.combine),this.S.Indexes.user("絵文字デックス",this.combine)}},a.prototype.all=function(){return this._emoji},a.prototype.search=function(a,b,c){var d,e;return null==b&&(b=null),null==c&&(c={}),e=function(){var b,c,e,f;for(e=this._emoji,f=[],b=0,c=e.length;c>b;b++)d=e[b],d.code.match(a)&&f.push(d);return f}.call(this),b&&b(e),e},a.prototype.starting=function(a,b,c){var d,e;return null==b&&(b=null),null==c&&(c={}),e=function(){var b,c,e,f;for(e=this._emoji,f=[],b=0,c=e.length;c>b;b++)d=e[b],d.code.match("^"+a)&&f.push(d);return f}.call(this),b&&b(e),e},a.prototype.ending=function(a,b,c){var d,e;return null==b&&(b=null),null==c&&(c={}),e=function(){var b,c,e,f;for(e=this._emoji,f=[],b=0,c=e.length;c>b;b++)d=e[b],d.code.match(a+"$")&&f.push(d);return f}.call(this),b&&b(e),e},a.prototype.tags=function(a,b,c){var d,e,f,g,h,i;for(null==b&&(b=null),null==c&&(c={}),a=this.util.breakout(a),f=c.selection||this._emoji,h=0,i=a.length;i>h;h++)g=a[h],d=function(){var a,b,c;for(c=[],a=0,b=f.length;b>a;a++)e=f[a],$.inArray(g,e.tags)>=0&&c.push(e);return c}();return d},a.prototype.categories=function(a,b,c){var d,e,f,g,h,i;for(null==b&&(b=null),null==c&&(c={}),a=this.util.breakout(a),g=c.selection||this._emoji,e=[],h=0,i=a.length;i>h;h++)d=a[h],$.extend(e,function(){var a,b,c;for(c=[],a=0,b=g.length;b>a;a++)f=g[a],f.category===d&&c.push(f);return c}());return e},a.prototype.advanced=function(a,b,c,d,e){return null==b&&(b=[]),null==c&&(c=[]),null==d&&(d=null),null==e&&(e={}),this.categories(c,null,{selection:this.tags(b,null,{selection:this.search(a)})})},a.prototype.combine=function(a){return this._emoji=this.S.Data.emoji($.extend(this._emoji,a))},a.prototype.flush=function(){return this._emoji=this.S.Data.emoji([])},a}(),d=function(){function a(a){null==a&&(a=null),this.S=a||new f,this.results=[],this.cur_page=1,this.cur_limit=this.S.limit,this.count=0}return a.prototype.index=function(a,b){var c=this;return null==a&&(a=null),this.next=function(){return this.get_index(a,$.extend(b,{page:b.page+1}))},b=this._combine_opts(b),$.getJSON(this.S.api_url+"/emoji?"+$.param(b)).error(function(){return c.results=[]}).success(function(b){return c._succeed(b,a)})},a.prototype.newest=function(a,b){var c=this;return null==a&&(a=null),this.next=function(){return this.get_newest(a,$.extend(b,{page:b.page+1}))},b=this._combine_opts(b),$.getJSON(this.S.api_url+"/newest?"+$.param(b)).error(function(){return c.results=[]}).success(function(b){return c._succeed(b,a)})},a.prototype.popular=function(a,b){var c=this;return null==a&&(a=null),this.next=function(){return this.get_popular(a,$.extend(b,{page:b.page+1}))},b=this._combine_opts(b),$.getJSON(this.S.api_url+"/popular?"+$.param(b)).error(function(){return c.results=[]}).success(function(b){return c._succeed(b,a)})},a.prototype.user=function(a,b,c){var d=this;return c=this._combine_opts(c),$.ajax({url:this.S.api_url+("users/"+a+"/emoji"),dataType:"json",data:c,success:function(a){return d._succeed(a,b)},error:function(){return d.results=[]}})},a.prototype._combine_opts=function(a){return $.extend({page:1,limit:this.S.limit,detailed:this.S.detailed},a)},a.prototype._succeed=function(a,b){return this.results=a.emoji,this.cur_page=a.meta.page,this.count=a.meta.count,this.S.Emoji.combine(a.emoji),null!=b?b(a.emoji):void 0},a}(),e=function(){function a(a){this.S=a||new f,this.Util=new j,this.results=[],this.cur_page=1,this.cur_limit=this.S.limit,this.count=0,this.next=function(){return null}}return a.prototype.search=function(a,b,c){var d=this;return null==b&&(b=null),this.next=function(){return this.search(a,b,$.extend(c,{page:c.page+1}))},this.S.closed_net?this.S.Emoji.search(a,b):(c=this._combine_opts(c),$.getJSON(this.S.api_url+"search/emoji?"+$.param($.extend({},{code_cont:this.Util.escape_term(a)},c))).error(function(){return d.results=[]}).success(function(a){return d._succeed(a,b)})),this.S.Emoji.search(a)},a.prototype.starting=function(a,b,c){var d=this;return null==b&&(b=null),this.next=function(){return this.starting(a,b,$.extend(c,{page:c.page+1}))},this.S.closed_net?this.S.Emoji.starting(a,b):(c=this._combine_opts(c),$.getJSON(this.S.api_url+"search/emoji?"+$.param($.extend({},{code_sw:this.Util.escape_term(a)},c))).error(function(){return d.results=[]}).success(function(a){return d._succeed(a,b)})),this.S.Emoji.starting(a)},a.prototype.ending=function(a,b,c){var d=this;return null==b&&(b=null),this.next=function(){return this.ending(a,b,$.extend(c,{page:c.page+1}))},this.S.closed_net?this.S.Emoji.ending(a,b):(c=this._combine_opts(c),$.getJSON(this.S.api_url+"search/emoji?"+$.param($.extend({},{code_ew:this.Util.escape_term(a)},c))).error(function(){return d.results=[]}).success(function(a){return d._succeed(a,b)})),this.S.Emoji.ending(a)},a.prototype.tags=function(a,b,c){var d=this;return null==b&&(b=null),this.next=function(){return this.tags(term,b,$.extend(c,{page:c.page+1}))},this.S.closed_net?this.S.Emoji.tags(a,b):(c=this._combine_opts(c),$.getJSON(this.S.api_url+"search/emoji?"+$.param($.extend({},{"tags[]":this.Util.breakout(a)},c))).error(function(){return d.results=[]}).success(function(a){return d._succeed(a,b)})),this.S.Emoji.tags(a)},a.prototype.advanced=function(a,b,c,d,e){var f,g=this;return null==b&&(b=[]),null==c&&(c=[]),null==d&&(d=null),this.next=function(){return this.advanced(a,b,c,d,$.extend(e,{page:e.page+1}))},this.S.closed_net?this.S.Emoji.advanced(a,b,c,d):(e=this._combine_opts(e),f={code_cont:this.Util.escape_term(a)},b.length>0&&(f=$.extend(f,{"tags[]":this.Util.breakout(b)})),c.length>0&&(f=$.extend(f,{"categories[]":this.Util.breakout(c)})),$.getJSON(this.S.api_url+"search/emoji?"+$.param($.extend(f,e))).error(function(){return g.results=[]}).success(function(a){return g._succeed(a,d)})),this.S.Emoji.advanced(a,b,c)},a.prototype._combine_opts=function(a){return $.extend({},{page:1,limit:this.S.limit,detailed:this.S.detailed},a)},a.prototype._succeed=function(a,b){return this.results=a.emoji,this.cur_page=a.meta.page,this.count=a.meta.count,this.S.Emoji.combine(a.emoji),null!=b?b(a.emoji):void 0},a}(),f=function(){function e(e){e=$.extend({},this.defaults(),e),this.closed_net=e.closed_net,this.api_url=e.api_url,this.cdn_url=e.cdn_url,this.size_code=e.size_code,this.detailed=e.detailed,this.limit=e.limit,this.locale=e.locale,this.Data=new b(this,e),this.Emoji=new c(this),this.Categories=new a(this),this.User=new g(this),this.Indexes=new d(this)}return e.prototype.defaults=function(){return{locale:"en",api_url:"https://www.emojidex.com/api/v1/",cdn_url:"http://cdn.emojidex.com/emoji",closed_net:!1,min_query_len:4,size_code:"px32",detailed:!1,limit:32}},e}(),g=function(){function a(a){null==a&&(a=null),this.S=a||new f,this.auth_info=this.S.Data._def_auth_info(),this.History=new i(this.S),this.Favorites=new h(this.S),this._auto_login()}return a.prototype._auto_login=function(){return this.closed_net?void 0:(this.auth_info=this.S.Data.auth_info(),null!==this.auth_info.token?this.sync_user_data():this.logout())},a.prototype.login=function(a){switch(a.authtype){case"plain":return this.plain_auth(a.username,a.password,a.callback);case"basic":return this.basic_auth(a.user,a.pass,a.callback);case"google":return this.google_auth(a.callback);default:return this._auto_login()}},a.prototype.logout=function(){return this.S.Data.auth_info(this.S.Data._def_auth_info())},a.prototype.plain_auth=function(a,b,c){var d,e=this;return null==c&&(c=null),d=this.S.api_url+"users/authenticate?"+$.param({username:a,password:b}),$.getJSON(d).error(function(a){return e.auth_info=e.S.Data.auth_info({status:a.auth_status,token:null,user:""})}).success(function(a){return e._set_auth_from_response(a),c?c(e.auth_info):void 0})},a.prototype.basic_auth=function(a,b,c){return null==c&&(c=null),!1},a.prototype.google_auth=function(a){return null==a&&(a=null),!1},a.prototype._set_auth_from_response=function(a){return this.auth_info=this.S.Data.auth_info({status:a.auth_status,token:a.auth_token,user:a.auth_user}),this.sync_user_data()},a.prototype.sync_user_data=function(){return this.History.token=this.Favorites.token=this.auth_info.token,this.Favorites.sync(),this.History.sync()},a}(),h=function(){function a(a,b){null==a&&(a=null),null==b&&(b=null),this.S=a||new f,this.token=b,this._favorites=this.S.Data.favorites()}return a.prototype.all=function(){return this._favorites},a.prototype.get=function(a){var b=this;return null!=this.token?($.ajax({url:this.S.api_url+"users/favorites",dataType:"json",data:{auth_token:this.token},success:function(c){return b._favorites=b.S.Data.favorites(c),null!=a?a(b._favorites):void 0}}),!0):!1},a.prototype.set=function(a){var b=this;return null!=this.token?($.ajax({type:"POST",url:this.S.api_url+"users/favorites",data:{auth_token:this.token,emoji_code:a},success:function(a){return b._favorites.push(a),b.S.Data.favorites(b._favorites)}}),!0):!1},a.prototype.unset=function(a){var b=this;return null!=this.token?($.ajax({type:"DELETE",url:this.S.api_url+"users/favorites",data:{auth_token:this.token,emoji_code:a},success:function(){return b.sync()}}),!0):!1},a.prototype.sync=function(){return this.get()},a}(),i=function(){function a(a,b){null==a&&(a=null),null==b&&(b=null),this.S=a||new f,this.token=b,this._history=this.S.Data.history()}return a.prototype.all=function(){return this._history},a.prototype.get=function(){var a=this;return null!=this.token?($.getJSON(this.S.api_url+"users/history?"+$.param({auth_token:this.token})).success(function(b){return a._history=a.S.Data.history(b)}),!0):!1},a.prototype.set=function(a){var b=this;return null!=this.token?($.ajax({type:"POST",url:this.S.api_url+"users/history",data:{auth_token:this.token,emoji_code:a},success:function(a){var c,d,e,f,g;for(g=b._history,d=e=0,f=g.length;f>e;d=++e)if(c=g[d],c.emoji_code===a.emoji_code)return b._history[d]=a,b.S.Data.history(b._history),a}}),!0):!1},a.prototype.sync=function(){return this.get()},a}(),j=function(){function a(){}return a.prototype.escape_term=function(a){return a.split(" ").join("_")},a.prototype.de_escape_term=function(a){return a.split("_").join(" ")},a.prototype.breakout=function(a){return null===a?[]:(a instanceof Array||(a=[a]),a)},a.prototype.simplify=function(a,b){var c,d,e,f;for(null==a&&(a=this.results),null==b&&(b=this.size_code),f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push({code:this.Util.escape_term(c.code),img_url:""+this.cdn_url+"/"+b+"/"+this.Util.escape_term(c.code)+".png"});return f},a}()}.call(this);
(function() {
  var AutoComplete;

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "emojidexAutocomplete";
    defaults = {
      limit: 10
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.autocomplete = new AutoComplete(this);
        this.autocomplete.setAutoComplete();
      }

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

  AutoComplete = (function() {
    function AutoComplete(plugin) {
      this.plugin = plugin;
    }

    AutoComplete.prototype.setAutoComplete = function() {
      var at_init, ec, getMatchString, getRegexp, searching_num, setAtwho, setSearchedEmojiData,
        _this = this;
      setAtwho = function(at_options) {
        return $(_this.plugin.element).atwho(at_options).on('reposition.atwho', function(e) {
          return $(e.currentTarget).atwho(at_options);
        }).on('hidden.atwho', function(e) {
          return $(e.currentTarget).atwho(at_options);
        });
      };
      setSearchedEmojiData = function(at_obj, match_string) {
        var num, updateAtwho;
        updateAtwho = function(searched_data) {
          var at_options;
          at_options = {
            data: searched_data,
            callbacks: {
              matcher: function(flag, subtext, should_startWithSpace) {
                return getMatchString(subtext, getRegexp(flag, should_startWithSpace));
              }
            }
          };
          return at_obj.$inputor.atwho('destroy').atwho($.extend({}, at_obj.setting, at_options)).atwho('run');
        };
        num = ++searching_num;
        ec.search(match_string, function(response) {
          var searched_data;
          searched_data = ec.simplify();
          if (searching_num === num) {
            if (searched_data.length) {
              return updateAtwho(searched_data);
            }
          }
        });
        return match_string;
      };
      getRegexp = function(flag, should_startWithSpace) {
        var regexp, _a, _y;
        _a = decodeURI("%C3%80");
        _y = decodeURI("%C3%BF");
        flag = flag.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        if (should_startWithSpace) {
          flag = '(?:^|\\s)' + flag;
        }
        return regexp = new RegExp("" + flag + "([A-Za-z" + _a + "-" + _y + "0-9_\+\-]*)$|" + flag + "([^\\x00-\\xff]*)$", 'gi');
      };
      getMatchString = function(subtext, regexp) {
        var match;
        match = regexp.exec(subtext);
        return match = match ? match[2] || match[1] : null;
      };
      searching_num = 0;
      ec = new EmojidexClient;
      at_init = {
        at: ":",
        limit: this.plugin.options.limit,
        search_key: "code",
        tpl: "<li data-value=':${code}:'><img src='${img_url}' height='20' width='20' /> ${code}</li>",
        insert_tpl: "<img src='${img_url}' height='20' width='20' />",
        callbacks: {
          matcher: function(flag, subtext, should_startWithSpace) {
            var match;
            match = getMatchString(subtext, getRegexp(flag, should_startWithSpace));
            if (match) {
              return setSearchedEmojiData(this, match);
            }
          }
        }
      };
      return setAtwho(at_init);
    };

    return AutoComplete;

  })();

}).call(this);

(function() {
  var Pallet;

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "emojidexPallet";
    defaults = {
      switch_element: $("#pallet-btn")
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.pallet = new Pallet;
      }

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

  Pallet = (function() {
    function Pallet(emoji_data_array, element, options) {
      this.emoji_data_array = emoji_data_array;
      this.element = element;
      this.options = options;
      this.KEY_ESC = 27;
      this.KEY_TAB = 9;
    }

    Pallet.prototype.setPallet = function() {};

    return Pallet;

  })();

}).call(this);

(function() {
  var Replacer, ReplacerService,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "emojidexReplace";
    defaults = {
      userNames: ['emoji', 'emojidex']
    };
    Plugin = (function() {
      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.api_emoji_replacer = new ReplacerService(this.element, this.options);
        this.api_emoji_replacer.replace();
      }

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

  Replacer = (function() {
    function Replacer() {}

    Replacer.prototype.emoji_data = null;

    Replacer.prototype.element = null;

    Replacer.prototype.options = null;

    Replacer.prototype.emoji_regexps = null;

    Replacer.prototype.setEmojiCSS_getEmojiRegexps = function(emoji_data) {
      var emoji, emoji_css, regexp_for_code, regexp_for_utf, _i, _len;
      regexp_for_utf = "";
      regexp_for_code = ":(";
      emoji_css = $('<style type="text/css" />');
      for (_i = 0, _len = emoji_data.length; _i < _len; _i++) {
        emoji = emoji_data[_i];
        if (emoji.moji != null) {
          regexp_for_utf += emoji.moji + "|";
        }
        if (emoji.code != null) {
          regexp_for_code += emoji.code + "|";
        }
        emoji_css.append("i.emojidex-" + emoji.code + " {background-image: url('" + emoji.img_url + "')}");
      }
      $("head").append(emoji_css);
      return {
        utf: regexp_for_utf.slice(0, -1),
        code: regexp_for_code.slice(0, -1) + "):"
      };
    };

    Replacer.prototype.getEmojiTag = function(emoji_code) {
      return '<i class="emojidex-' + emoji_code + '"></i>';
    };

    Replacer.prototype.replaceForUTF = function(options) {
      var replaced_string,
        _this = this;
      return replaced_string = options.s_replace.replace(new RegExp(options.regexp, "g"), function(matched_string) {
        var emoji, _i, _len, _ref;
        _ref = options.emoji_data;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          emoji = _ref[_i];
          if (emoji.moji === matched_string) {
            return _this.getEmojiTag(emoji.code);
          }
        }
      });
    };

    Replacer.prototype.replaceForCode = function(options) {
      var replaced_string,
        _this = this;
      return replaced_string = options.s_replace.replace(new RegExp(options.regexp, "g"), function(matched_string, pattern1) {
        var emoji, _i, _len, _ref;
        _ref = options.emoji_data;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          emoji = _ref[_i];
          if (emoji.code === pattern1) {
            return _this.getEmojiTag(emoji.code);
          }
        }
      });
    };

    Replacer.prototype.setEmojiIcon = function(loader) {
      var replaced_string, text_node, text_nodes, _i, _len,
        _this = this;
      text_nodes = $(this.element_clone).find(":not(iframe,textarea,script)").andSelf().contents().filter(function() {
        return this.nodeType === Node.TEXT_NODE;
      });
      for (_i = 0, _len = text_nodes.length; _i < _len; _i++) {
        text_node = text_nodes[_i];
        replaced_string = text_node.textContent;
        if (loader.emoji_regexps.utf != null) {
          replaced_string = this.replaceForUTF({
            s_replace: replaced_string,
            regexp: loader.emoji_regexps.utf,
            emoji_data: loader.emoji_data
          });
        }
        if (loader.emoji_regexps.code != null) {
          replaced_string = this.replaceForCode({
            s_replace: replaced_string,
            regexp: loader.emoji_regexps.code,
            emoji_data: loader.emoji_data
          });
        }
        $(text_node).replaceWith(replaced_string);
      }
      return this.element.find(".emojidex-loading-icon").fadeOut("normal", function() {
        _this.element.replaceWith(_this.element_clone);
        return _this.element = _this.element_clone;
      });
    };

    return Replacer;

  })();

  ReplacerService = (function(_super) {
    __extends(ReplacerService, _super);

    function ReplacerService(element, options) {
      this.element = element;
      this.options = options;
      this.onLoadEmojiData = __bind(this.onLoadEmojiData, this);
      ReplacerService.__super__.constructor.apply(this, arguments);
      this.element = $(this.element);
    }

    ReplacerService.prototype.replace = function(callback) {
      this.setLoadingIcon();
      return this;
    };

    ReplacerService.prototype.onLoadEmojiData = function(emoji_data) {
      var emoji, _i, _len;
      for (_i = 0, _len = emoji_data.length; _i < _len; _i++) {
        emoji = emoji_data[_i];
        emoji.code = emoji.code.replace(RegExp(" ", "g"), "_");
        emoji.img_url = "http://cdn.emojidex.com/emoji/px32/" + emoji.code + ".png";
      }
      this.emoji_data = emoji_data;
      this.emoji_regexps = this.setEmojiCSS_getEmojiRegexps(emoji_data);
      this.setEmojiIcon(this);
      if (typeof callback !== "undefined" && callback !== null) {
        return callback(this);
      }
    };

    ReplacerService.prototype.setLoadingIcon = function() {
      var setLoadingTag, text, text_node, text_nodes, _i, _len;
      setLoadingTag = function(text) {
        return text = text.replace(/:([^:]+):/g, function(matched_string, pattern1) {
          return '<img class="emojidex-loading-icon" style="width: 1.5em; height: 1.5em" src="img/loading1.gif"></img>';
        });
      };
      this.element_clone = this.element.clone();
      text_nodes = this.element.find(":not(iframe,textarea,script)").andSelf().contents().filter(function() {
        return this.nodeType === Node.TEXT_NODE;
      });
      for (_i = 0, _len = text_nodes.length; _i < _len; _i++) {
        text_node = text_nodes[_i];
        text = text_node.textContent;
        text = setLoadingTag(text);
        $(text_node).replaceWith(text);
      }
      return this.getEmojiDataFromAPI(this.onLoadEmojiData);
    };

    ReplacerService.prototype.getEmojiDataFromAPI = function(callback) {
      var emoji_data, loaded_num, user_name, user_names, _i, _len, _results;
      loaded_num = 0;
      user_names = this.options.userNames;
      emoji_data = [];
      _results = [];
      for (_i = 0, _len = user_names.length; _i < _len; _i++) {
        user_name = user_names[_i];
        _results.push($.ajax({
          url: "https://www.emojidex.com/api/v1/users/" + user_name + "/emoji",
          dataType: "json",
          type: "get",
          success: function(user_emoji_json, status, xhr) {
            emoji_data = emoji_data.concat(user_emoji_json.emoji);
            if (++loaded_num === user_names.length) {
              return callback(emoji_data);
            }
          },
          error: function(data) {
            console.log("error: load json");
            return console.log(data);
          }
        }));
      }
      return _results;
    };

    return ReplacerService;

  })(Replacer);

}).call(this);
