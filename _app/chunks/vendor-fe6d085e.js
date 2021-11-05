function noop(){}const identity=r=>r;function assign(r,o){for(const s in o)r[s]=o[s];return r}function run(r){return r()}function blank_object(){return Object.create(null)}function run_all(r){r.forEach(run)}function is_function(r){return typeof r=="function"}function safe_not_equal(r,o){return r!=r?o==o:r!==o||r&&typeof r=="object"||typeof r=="function"}let src_url_equal_anchor;function src_url_equal(r,o){return src_url_equal_anchor||(src_url_equal_anchor=document.createElement("a")),src_url_equal_anchor.href=o,r===src_url_equal_anchor.href}function is_empty(r){return Object.keys(r).length===0}function create_slot(r,o,s,i){if(r){const a=get_slot_context(r,o,s,i);return r[0](a)}}function get_slot_context(r,o,s,i){return r[1]&&i?assign(s.ctx.slice(),r[1](i(o))):s.ctx}function get_slot_changes(r,o,s,i){if(r[2]&&i){const a=r[2](i(s));if(o.dirty===void 0)return a;if(typeof a=="object"){const u=[],l=Math.max(o.dirty.length,a.length);for(let d=0;d<l;d+=1)u[d]=o.dirty[d]|a[d];return u}return o.dirty|a}return o.dirty}function update_slot_base(r,o,s,i,a,u){if(a){const l=get_slot_context(o,s,i,u);r.p(l,a)}}function get_all_dirty_from_scope(r){if(r.ctx.length>32){const o=[],s=r.ctx.length/32;for(let i=0;i<s;i++)o[i]=-1;return o}return-1}function action_destroyer(r){return r&&is_function(r.destroy)?r.destroy:noop}const is_client=typeof window!="undefined";let now=is_client?()=>window.performance.now():()=>Date.now(),raf=is_client?r=>requestAnimationFrame(r):noop;const tasks=new Set;function run_tasks(r){tasks.forEach(o=>{o.c(r)||(tasks.delete(o),o.f())}),tasks.size!==0&&raf(run_tasks)}function loop(r){let o;return tasks.size===0&&raf(run_tasks),{promise:new Promise(s=>{tasks.add(o={c:r,f:s})}),abort(){tasks.delete(o)}}}let is_hydrating=!1;function start_hydrating(){is_hydrating=!0}function end_hydrating(){is_hydrating=!1}function upper_bound(r,o,s,i){for(;r<o;){const a=r+(o-r>>1);s(a)<=i?r=a+1:o=a}return r}function init_hydrate(r){if(r.hydrate_init)return;r.hydrate_init=!0;let o=r.childNodes;if(r.nodeName==="HEAD"){const c=[];for(let f=0;f<o.length;f++){const y=o[f];y.claim_order!==void 0&&c.push(y)}o=c}const s=new Int32Array(o.length+1),i=new Int32Array(o.length);s[0]=-1;let a=0;for(let c=0;c<o.length;c++){const f=o[c].claim_order,y=(a>0&&o[s[a]].claim_order<=f?a+1:upper_bound(1,a,_=>o[s[_]].claim_order,f))-1;i[c]=s[y]+1;const p=y+1;s[p]=c,a=Math.max(p,a)}const u=[],l=[];let d=o.length-1;for(let c=s[a]+1;c!=0;c=i[c-1]){for(u.push(o[c-1]);d>=c;d--)l.push(o[d]);d--}for(;d>=0;d--)l.push(o[d]);u.reverse(),l.sort((c,f)=>c.claim_order-f.claim_order);for(let c=0,f=0;c<l.length;c++){for(;f<u.length&&l[c].claim_order>=u[f].claim_order;)f++;const y=f<u.length?u[f]:null;r.insertBefore(l[c],y)}}function append(r,o){r.appendChild(o)}function get_root_for_style(r){if(!r)return document;const o=r.getRootNode?r.getRootNode():r.ownerDocument;return o&&o.host?o:r.ownerDocument}function append_empty_stylesheet(r){const o=element("style");return append_stylesheet(get_root_for_style(r),o),o}function append_stylesheet(r,o){append(r.head||r,o)}function append_hydration(r,o){if(is_hydrating){for(init_hydrate(r),(r.actual_end_child===void 0||r.actual_end_child!==null&&r.actual_end_child.parentElement!==r)&&(r.actual_end_child=r.firstChild);r.actual_end_child!==null&&r.actual_end_child.claim_order===void 0;)r.actual_end_child=r.actual_end_child.nextSibling;o!==r.actual_end_child?(o.claim_order!==void 0||o.parentNode!==r)&&r.insertBefore(o,r.actual_end_child):r.actual_end_child=o.nextSibling}else(o.parentNode!==r||o.nextSibling!==null)&&r.appendChild(o)}function insert_hydration(r,o,s){is_hydrating&&!s?append_hydration(r,o):(o.parentNode!==r||o.nextSibling!=s)&&r.insertBefore(o,s||null)}function detach(r){r.parentNode.removeChild(r)}function element(r){return document.createElement(r)}function text(r){return document.createTextNode(r)}function space(){return text(" ")}function empty(){return text("")}function attr(r,o,s){s==null?r.removeAttribute(o):r.getAttribute(o)!==s&&r.setAttribute(o,s)}function children(r){return Array.from(r.childNodes)}function init_claim_info(r){r.claim_info===void 0&&(r.claim_info={last_index:0,total_claimed:0})}function claim_node(r,o,s,i,a=!1){init_claim_info(r);const u=(()=>{for(let l=r.claim_info.last_index;l<r.length;l++){const d=r[l];if(o(d)){const c=s(d);return c===void 0?r.splice(l,1):r[l]=c,a||(r.claim_info.last_index=l),d}}for(let l=r.claim_info.last_index-1;l>=0;l--){const d=r[l];if(o(d)){const c=s(d);return c===void 0?r.splice(l,1):r[l]=c,a?c===void 0&&r.claim_info.last_index--:r.claim_info.last_index=l,d}}return i()})();return u.claim_order=r.claim_info.total_claimed,r.claim_info.total_claimed+=1,u}function claim_element_base(r,o,s,i){return claim_node(r,a=>a.nodeName===o,a=>{const u=[];for(let l=0;l<a.attributes.length;l++){const d=a.attributes[l];s[d.name]||u.push(d.name)}u.forEach(l=>a.removeAttribute(l))},()=>i(o))}function claim_element(r,o,s){return claim_element_base(r,o,s,element)}function claim_text(r,o){return claim_node(r,s=>s.nodeType===3,s=>{const i=""+o;if(s.data.startsWith(i)){if(s.data.length!==i.length)return s.splitText(i.length)}else s.data=i},()=>text(o),!0)}function claim_space(r){return claim_text(r," ")}function set_data(r,o){o=""+o,r.wholeText!==o&&(r.data=o)}function set_style(r,o,s,i){r.style.setProperty(o,s,i?"important":"")}function toggle_class(r,o,s){r.classList[s?"add":"remove"](o)}function custom_event(r,o,s=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,s,!1,o),i}function query_selector_all(r,o=document.body){return Array.from(o.querySelectorAll(r))}const active_docs=new Set;let active=0;function hash(r){let o=5381,s=r.length;for(;s--;)o=(o<<5)-o^r.charCodeAt(s);return o>>>0}function create_rule(r,o,s,i,a,u,l,d=0){const c=16.666/i;let f=`{
`;for(let h=0;h<=1;h+=c){const v=o+(s-o)*u(h);f+=h*100+`%{${l(v,1-v)}}
`}const y=f+`100% {${l(s,1-s)}}
}`,p=`__svelte_${hash(y)}_${d}`,_=get_root_for_style(r);active_docs.add(_);const m=_.__svelte_stylesheet||(_.__svelte_stylesheet=append_empty_stylesheet(r).sheet),g=_.__svelte_rules||(_.__svelte_rules={});g[p]||(g[p]=!0,m.insertRule(`@keyframes ${p} ${y}`,m.cssRules.length));const k=r.style.animation||"";return r.style.animation=`${k?`${k}, `:""}${p} ${i}ms linear ${a}ms 1 both`,active+=1,p}function delete_rule(r,o){const s=(r.style.animation||"").split(", "),i=s.filter(o?u=>u.indexOf(o)<0:u=>u.indexOf("__svelte")===-1),a=s.length-i.length;a&&(r.style.animation=i.join(", "),active-=a,active||clear_rules())}function clear_rules(){raf(()=>{active||(active_docs.forEach(r=>{const o=r.__svelte_stylesheet;let s=o.cssRules.length;for(;s--;)o.deleteRule(s);r.__svelte_rules={}}),active_docs.clear())})}function create_animation(r,o,s,i){if(!o)return noop;const a=r.getBoundingClientRect();if(o.left===a.left&&o.right===a.right&&o.top===a.top&&o.bottom===a.bottom)return noop;const{delay:u=0,duration:l=300,easing:d=identity,start:c=now()+u,end:f=c+l,tick:y=noop,css:p}=s(r,{from:o,to:a},i);let _=!0,m=!1,g;function k(){p&&(g=create_rule(r,0,1,l,u,d,p)),u||(m=!0)}function h(){p&&delete_rule(r,g),_=!1}return loop(v=>{if(!m&&v>=c&&(m=!0),m&&v>=f&&(y(1,0),h()),!_)return!1;if(m){const w=v-c,x=0+1*d(w/l);y(x,1-x)}return!0}),k(),y(0,1),h}function fix_position(r){const o=getComputedStyle(r);if(o.position!=="absolute"&&o.position!=="fixed"){const{width:s,height:i}=o,a=r.getBoundingClientRect();r.style.position="absolute",r.style.width=s,r.style.height=i,add_transform(r,a)}}function add_transform(r,o){const s=r.getBoundingClientRect();if(o.left!==s.left||o.top!==s.top){const i=getComputedStyle(r),a=i.transform==="none"?"":i.transform;r.style.transform=`${a} translate(${o.left-s.left}px, ${o.top-s.top}px)`}}let current_component;function set_current_component(r){current_component=r}function get_current_component(){if(!current_component)throw new Error("Function called outside component initialization");return current_component}function beforeUpdate(r){get_current_component().$$.before_update.push(r)}function onMount(r){get_current_component().$$.on_mount.push(r)}function afterUpdate(r){get_current_component().$$.after_update.push(r)}function createEventDispatcher(){const r=get_current_component();return(o,s)=>{const i=r.$$.callbacks[o];if(i){const a=custom_event(o,s);i.slice().forEach(u=>{u.call(r,a)})}}}function setContext(r,o){get_current_component().$$.context.set(r,o)}const dirty_components=[],binding_callbacks=[],render_callbacks=[],flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(r){render_callbacks.push(r)}let flushing=!1;const seen_callbacks=new Set;function flush(){if(!flushing){flushing=!0;do{for(let r=0;r<dirty_components.length;r+=1){const o=dirty_components[r];set_current_component(o),update(o.$$)}for(set_current_component(null),dirty_components.length=0;binding_callbacks.length;)binding_callbacks.pop()();for(let r=0;r<render_callbacks.length;r+=1){const o=render_callbacks[r];seen_callbacks.has(o)||(seen_callbacks.add(o),o())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,flushing=!1,seen_callbacks.clear()}}function update(r){if(r.fragment!==null){r.update(),run_all(r.before_update);const o=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,o),r.after_update.forEach(add_render_callback)}}let promise;function wait(){return promise||(promise=Promise.resolve(),promise.then(()=>{promise=null})),promise}function dispatch(r,o,s){r.dispatchEvent(custom_event(`${o?"intro":"outro"}${s}`))}const outroing=new Set;let outros;function group_outros(){outros={r:0,c:[],p:outros}}function check_outros(){outros.r||run_all(outros.c),outros=outros.p}function transition_in(r,o){r&&r.i&&(outroing.delete(r),r.i(o))}function transition_out(r,o,s,i){if(r&&r.o){if(outroing.has(r))return;outroing.add(r),outros.c.push(()=>{outroing.delete(r),i&&(s&&r.d(1),i())}),r.o(o)}}const null_transition={duration:0};function create_bidirectional_transition(r,o,s,i){let a=o(r,s),u=i?0:1,l=null,d=null,c=null;function f(){c&&delete_rule(r,c)}function y(_,m){const g=_.b-u;return m*=Math.abs(g),{a:u,b:_.b,d:g,duration:m,start:_.start,end:_.start+m,group:_.group}}function p(_){const{delay:m=0,duration:g=300,easing:k=identity,tick:h=noop,css:v}=a||null_transition,w={start:now()+m,b:_};_||(w.group=outros,outros.r+=1),l||d?d=w:(v&&(f(),c=create_rule(r,u,_,g,m,k,v)),_&&h(0,1),l=y(w,g),add_render_callback(()=>dispatch(r,_,"start")),loop(x=>{if(d&&x>d.start&&(l=y(d,g),d=null,dispatch(r,l.b,"start"),v&&(f(),c=create_rule(r,u,l.b,l.duration,0,k,a.css))),l){if(x>=l.end)h(u=l.b,1-u),dispatch(r,l.b,"end"),d||(l.b?f():--l.group.r||run_all(l.group.c)),l=null;else if(x>=l.start){const E=x-l.start;u=l.a+l.d*k(E/l.duration),h(u,1-u)}}return!!(l||d)}))}return{run(_){is_function(a)?wait().then(()=>{a=a(),p(_)}):p(_)},end(){f(),l=d=null}}}function outro_and_destroy_block(r,o){transition_out(r,1,1,()=>{o.delete(r.key)})}function fix_and_outro_and_destroy_block(r,o){r.f(),outro_and_destroy_block(r,o)}function update_keyed_each(r,o,s,i,a,u,l,d,c,f,y,p){let _=r.length,m=u.length,g=_;const k={};for(;g--;)k[r[g].key]=g;const h=[],v=new Map,w=new Map;for(g=m;g--;){const b=p(a,u,g),C=s(b);let q=l.get(C);q?i&&q.p(b,o):(q=f(C,b),q.c()),v.set(C,h[g]=q),C in k&&w.set(C,Math.abs(g-k[C]))}const x=new Set,E=new Set;function S(b){transition_in(b,1),b.m(d,y),l.set(b.key,b),y=b.first,m--}for(;_&&m;){const b=h[m-1],C=r[_-1],q=b.key,j=C.key;b===C?(y=b.first,_--,m--):v.has(j)?!l.has(q)||x.has(q)?S(b):E.has(j)?_--:w.get(q)>w.get(j)?(E.add(q),S(b)):(x.add(j),_--):(c(C,l),_--)}for(;_--;){const b=r[_];v.has(b.key)||c(b,l)}for(;m;)S(h[m-1]);return h}function get_spread_update(r,o){const s={},i={},a={$$scope:1};let u=r.length;for(;u--;){const l=r[u],d=o[u];if(d){for(const c in l)c in d||(i[c]=1);for(const c in d)a[c]||(s[c]=d[c],a[c]=1);r[u]=d}else for(const c in l)a[c]=1}for(const l in i)l in s||(s[l]=void 0);return s}function get_spread_object(r){return typeof r=="object"&&r!==null?r:{}}function create_component(r){r&&r.c()}function claim_component(r,o){r&&r.l(o)}function mount_component(r,o,s,i){const{fragment:a,on_mount:u,on_destroy:l,after_update:d}=r.$$;a&&a.m(o,s),i||add_render_callback(()=>{const c=u.map(run).filter(is_function);l?l.push(...c):run_all(c),r.$$.on_mount=[]}),d.forEach(add_render_callback)}function destroy_component(r,o){const s=r.$$;s.fragment!==null&&(run_all(s.on_destroy),s.fragment&&s.fragment.d(o),s.on_destroy=s.fragment=null,s.ctx=[])}function make_dirty(r,o){r.$$.dirty[0]===-1&&(dirty_components.push(r),schedule_update(),r.$$.dirty.fill(0)),r.$$.dirty[o/31|0]|=1<<o%31}function init(r,o,s,i,a,u,l,d=[-1]){const c=current_component;set_current_component(r);const f=r.$$={fragment:null,ctx:null,props:u,update:noop,not_equal:a,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(c?c.$$.context:[])),callbacks:blank_object(),dirty:d,skip_bound:!1,root:o.target||c.$$.root};l&&l(f.root);let y=!1;if(f.ctx=s?s(r,o.props||{},(p,_,...m)=>{const g=m.length?m[0]:_;return f.ctx&&a(f.ctx[p],f.ctx[p]=g)&&(!f.skip_bound&&f.bound[p]&&f.bound[p](g),y&&make_dirty(r,p)),_}):[],f.update(),y=!0,run_all(f.before_update),f.fragment=i?i(f.ctx):!1,o.target){if(o.hydrate){start_hydrating();const p=children(o.target);f.fragment&&f.fragment.l(p),p.forEach(detach)}else f.fragment&&f.fragment.c();o.intro&&transition_in(r.$$.fragment),mount_component(r,o.target,o.anchor,o.customElement),end_hydrating(),flush()}set_current_component(c)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(o,s){const i=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return i.push(s),()=>{const a=i.indexOf(s);a!==-1&&i.splice(a,1)}}$set(o){this.$$set&&!is_empty(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}const subscriber_queue=[];function writable(r,o=noop){let s;const i=new Set;function a(d){if(safe_not_equal(r,d)&&(r=d,s)){const c=!subscriber_queue.length;for(const f of i)f[1](),subscriber_queue.push(f,r);if(c){for(let f=0;f<subscriber_queue.length;f+=2)subscriber_queue[f][0](subscriber_queue[f+1]);subscriber_queue.length=0}}}function u(d){a(d(r))}function l(d,c=noop){const f=[d,c];return i.add(f),i.size===1&&(s=o(a)||noop),d(r),()=>{i.delete(f),i.size===0&&(s(),s=null)}}return{set:a,update:u,subscribe:l}}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function getDefaultExportFromCjs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kursor$1={exports:{}};/*!
  * Kursor v0.1.5
  * Forged by Luis Daniel Rovira
  * Released under the MIT License.
  */(function(module,exports){(function(o,s){module.exports=s()})(typeof self!="undefined"?self:commonjsGlobal,function(){return function(r){var o={};function s(i){if(o[i])return o[i].exports;var a=o[i]={i,l:!1,exports:{}};return r[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=r,s.c=o,s.d=function(i,a,u){s.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:u})},s.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,a){if(a&1&&(i=s(i)),a&8||a&4&&typeof i=="object"&&i&&i.__esModule)return i;var u=Object.create(null);if(s.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:i}),a&2&&typeof i!="string")for(var l in i)s.d(u,l,function(d){return i[d]}.bind(null,l));return u},s.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(a,"a",a),a},s.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},s.p="/dist/",s(s.s="./src/index.js")}({"./src/index.js":function(module,exports,__webpack_require__){eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./styles/index.styl */ "./src/styles/index.styl");

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var key = 1;

var kursor =
/*#__PURE__*/
function () {
  function kursor() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, kursor);

    var _props = {
      type: 1,
      ...props
    };
    this.props = _props;
    this.key = key === 1 ? '' : key;
    key++;
    this.render();
    this.hovers();
    this.mousemove();
    this.down();
  }

  _createClass(kursor, [{
    key: "color",
    value: function color(colorx) {
      (0, _utils.setColor)('color', colorx, this.kursor);
      (0, _utils.setColor)('color', colorx, this.kursorChild);
    }
  }, {
    key: "hidden",
    value: function hidden() {
      var isHidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isHidden) {
        this.addClass('kursor--hidden');
        this.addClass('kursorChild--hidden', true);
      } else {
        this.removeClass('kursor--hidden');
        this.removeClass('kursorChild--hidden', true);
      }
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      var wrapper = document.createElement('div');
      wrapper.setAttribute('id', 'kursorWrapper');
      document.querySelector(this.props.el).insertBefore(wrapper, document.querySelector(this.props.el).firstChild);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.mobileAndTabletcheck()) {
        return;
      }

      this.createCursor('kursorChild');
      this.createCursor('kursor');

      if (this.props.hasOwnProperty('removeDefaultCursor')) {
        if (this.props.removeDefaultCursor) {
          document.body.classList.add('notCursor');
        }
      }

      if (this.props.hasOwnProperty('type')) {
        this.addClass("kursor--".concat(this.props.type));
      }
    }
  }, {
    key: "down",
    value: function down() {
      var _this = this;

      document.addEventListener('mousedown', function (e) {
        _this.addClass('kursor--down');
      });
      document.addEventListener('mouseup', function (e) {
        _this.removeClass('kursor--down');
      });
    }
  }, {
    key: "mobileAndTabletcheck",
    value: function mobileAndTabletcheck() {
      var check = false;

      (function (a) {
        if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    }
  }, {
    key: "mousemove",
    value: function mousemove() {
      var _this2 = this;

      var hasEl = this.props.hasOwnProperty('el');
      var el = window;

      if (hasEl) {
        el = document.querySelector(this.props.el);
      }

      el.addEventListener('mousemove', function (e) {
        var cursor = document.querySelector('.kursor' + _this2.key);
        var cursorChild = document.querySelector('.kursorChild' + _this2.key);

        if (hasEl) {
          var notEl = e.target !== document.querySelector(_this2.props.el);
          var parentEl = e.target.closest(_this2.props.el);

          if (notEl) {
            cursor = parentEl.querySelector('.kursor' + _this2.key);
            cursorChild = parentEl.querySelector('.kursorChild' + _this2.key);
          } else {
            cursor = e.target.querySelector('.kursor' + _this2.key);
            cursorChild = e.target.querySelector('.kursorChild' + _this2.key);
          }

          cursor.style.left = "".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, "px");
          cursor.style.top = "".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, "px");
          cursorChild.style.left = "".concat(notEl ? e.offsetX + e.target.offsetLeft : e.offsetX, "px");
          cursorChild.style.top = "".concat(notEl ? e.offsetY + e.target.offsetTop : e.offsetY, "px");
        } else {
          cursor.style.left = "".concat(e.x, "px");
          cursor.style.top = "".concat(e.y, "px");
          cursorChild.style.left = "".concat(e.x, "px");
          cursorChild.style.top = "".concat(e.y, "px");
        }
      });
      var doc = document;

      if (hasEl) {
        doc = document.querySelector(this.props.el);
      }

      doc.addEventListener('mouseenter', function (e) {
        _this2.removeClass('kursor--hidden');

        _this2.removeClass('kursorChild--hidden', true);
      });
      doc.addEventListener('mouseleave', function (e) {
        _this2.addClass('kursor--hidden');

        _this2.addClass('kursorChild--hidden', true);
      });
    }
  }, {
    key: "hovers",
    value: function hovers() {
      var _this3 = this;

      var hovers = document.querySelectorAll('.k-hover' + this.key);
      console.log(hovers);
      hovers.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
          _this3.addClass('--hover');
        });
        item.addEventListener('mouseleave', function () {
          _this3.removeClass('--hover');
        });
      });
    }
  }, {
    key: "createCursor",
    value: function createCursor(name) {
      this[name] = document.createElement('div');
      this[name].setAttribute('class', name);
      this[name].classList.add(name + this.key);
      this[name].setAttribute('style', '--k-color: 0,0,0');

      if (this.props.hasOwnProperty('el')) {
        this[name].classList.add("".concat(name, "--hidden"));
        this[name].classList.add('kursor--absolute');
        document.querySelector(this.props.el).insertBefore(this[name], document.querySelector(this.props.el).firstChild);
      } else {
        document.body.insertBefore(this[name], document.body.firstChild);
      }

      if (this.props.hasOwnProperty('color')) {
        (0, _utils.setColor)('color', this.props.color, this[name]);
      }
    }
  }, {
    key: "addClass",
    value: function addClass(classx) {
      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.add(classx);
    }
  }, {
    key: "removeClass",
    value: function removeClass(classx) {
      var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      document.querySelector(child ? '.kursorChild' + this.key : '.kursor' + this.key).classList.remove(classx);
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return kursor;
}();

exports.default = kursor;
module.exports = exports["default"];

//# sourceURL=webpack://kursor/./src/index.js?`)},"./src/styles/index.styl":function(module,exports,__webpack_require__){eval(`// extracted by mini-css-extract-plugin

//# sourceURL=webpack://kursor/./src/styles/index.styl?`)},"./src/utils/index.js":function(module,exports,__webpack_require__){eval(`

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setColor = void 0;

var setVar = function setVar(propertyName, value, el) {
  if (!el) {
    document.documentElement.style.setProperty("--k-".concat(propertyName), value);
  } else {
    el.style.setProperty("--k-".concat(propertyName), value);
  }
};

var setColor = function setColor(colorName, color, el) {
  function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  var isRGB = /^(rgb|rgba)/.test(color);
  var isHEX = /^(#)/.test(color);
  var newColor;

  if (isRGB) {
    var arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = "".concat(arrayColor[0], ",").concat(arrayColor[1], ",").concat(arrayColor[2]);
    setVar(colorName, newColor, el);
  } else if (isHEX) {
    var rgb = hexToRgb(color);
    newColor = "".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b);
    setVar(colorName, newColor, el);
  }
};

exports.setColor = setColor;

//# sourceURL=webpack://kursor/./src/utils/index.js?`)}})})})(kursor$1);var kursor=getDefaultExportFromCjs(kursor$1.exports);const t$1=(r,o)=>{const s=document.createElement(o);return s.textContent=r,s},e=r=>r.childNodes.length===1&&r.childNodes[0].nodeType===3,n=r=>{if(e(r)){const o=r.textContent,s=t$1(r.textContent,"p");return r.textContent="",r.appendChild(s),[{currentNode:s,text:o}]}return[...r.children].map(o=>{const s=o.innerHTML.replaceAll("&amp;","&");return{currentNode:o,text:s}})},t=async(r,o)=>{const{mode:s}=(o.loop||o.loopRandom)&&await import("./loopTypewriter-2a163f9d.js")||o.scramble&&await import("./scramble-fa1afc2b.js")||await import("./typewriter-22098918.js"),i=n(r);if(o.delay>0){const{sleep:a}=await import("./index-4cce485c.js");await a(o.delay),r.classList.remove("delay")}s({node:r,elements:i},o)};var Typewriter_svelte_svelte_type_style_lang="";function create_key_block(r){let o,s,i,a,u;const l=r[10].default,d=create_slot(l,r,r[9],null);return{c(){o=element("div"),d&&d.c(),this.h()},l(c){o=claim_element(c,"DIV",{class:!0,style:!0});var f=children(o);d&&d.l(f),f.forEach(detach),this.h()},h(){attr(o,"class","typewriter-container svelte-1xd0fu9"),set_style(o,"--cursor-color",typeof r[0]=="string"?r[0]:"black"),toggle_class(o,"cursor",r[0]),toggle_class(o,"delay",r[2].delay>0)},m(c,f){insert_hydration(c,o,f),d&&d.m(o,null),i=!0,a||(u=action_destroyer(s=t.call(null,o,r[2])),a=!0)},p(c,f){d&&d.p&&(!i||f&512)&&update_slot_base(d,l,c,c[9],i?get_slot_changes(l,c[9],f,null):get_all_dirty_from_scope(c[9]),null),(!i||f&1)&&set_style(o,"--cursor-color",typeof c[0]=="string"?c[0]:"black"),s&&is_function(s.update)&&f&4&&s.update.call(null,c[2]),f&1&&toggle_class(o,"cursor",c[0]),f&4&&toggle_class(o,"delay",c[2].delay>0)},i(c){i||(transition_in(d,c),i=!0)},o(c){transition_out(d,c),i=!1},d(c){c&&detach(o),d&&d.d(c),a=!1,u()}}}function create_fragment(r){let o=r[1],s,i,a=create_key_block(r);return{c(){a.c(),s=empty()},l(u){a.l(u),s=empty()},m(u,l){a.m(u,l),insert_hydration(u,s,l),i=!0},p(u,[l]){l&2&&safe_not_equal(o,o=u[1])?(group_outros(),transition_out(a,1,1,noop),check_outros(),a=create_key_block(u),a.c(),transition_in(a),a.m(s.parentNode,s)):a.p(u,l)},i(u){i||(transition_in(a),i=!0)},o(u){transition_out(a),i=!1},d(u){u&&detach(s),a.d(u)}}}function instance(r,o,s){let i,{$$slots:a={},$$scope:u}=o,{interval:l=30}=o,{cascade:d=!1}=o,{loop:c=!1}=o,{loopRandom:f=!1}=o,{scramble:y=!1}=o,{cursor:p=!0}=o,{delay:_=0}=o,m=!1,g={};const k=createEventDispatcher();return beforeUpdate(()=>m&&s(1,g={})),onMount(()=>m=!0),r.$$set=h=>{"interval"in h&&s(3,l=h.interval),"cascade"in h&&s(4,d=h.cascade),"loop"in h&&s(5,c=h.loop),"loopRandom"in h&&s(6,f=h.loopRandom),"scramble"in h&&s(7,y=h.scramble),"cursor"in h&&s(0,p=h.cursor),"delay"in h&&s(8,_=h.delay),"$$scope"in h&&s(9,u=h.$$scope)},r.$$.update=()=>{r.$$.dirty&505&&s(2,i={interval:l,cascade:d,loop:c,loopRandom:f,scramble:y,cursor:p,delay:_,dispatch:k})},[p,g,i,l,d,c,f,y,_,u,a]}class Typewriter extends SvelteComponent{constructor(o){super();init(this,o,instance,create_fragment,safe_not_equal,{interval:3,cascade:4,loop:5,loopRandom:6,scramble:7,cursor:0,delay:8})}}function cubicOut(r){const o=r-1;return o*o*o+1}function scale(r,{delay:o=0,duration:s=400,easing:i=cubicOut,start:a=0,opacity:u=0}={}){const l=getComputedStyle(r),d=+l.opacity,c=l.transform==="none"?"":l.transform,f=1-a,y=d*(1-u);return{delay:o,duration:s,easing:i,css:(p,_)=>`
			transform: ${c} scale(${1-f*_});
			opacity: ${d-y*_}
		`}}function flip(r,{from:o,to:s},i={}){const a=getComputedStyle(r),u=a.transform==="none"?"":a.transform,[l,d]=a.transformOrigin.split(" ").map(parseFloat),c=o.left+o.width*l/s.width-(s.left+l),f=o.top+o.height*d/s.height-(s.top+d),{delay:y=0,duration:p=m=>Math.sqrt(m)*120,easing:_=cubicOut}=i;return{delay:y,duration:is_function(p)?p(Math.sqrt(c*c+f*f)):p,easing:_,css:(m,g)=>{const k=g*c,h=g*f,v=m+g*o.width/s.width,w=m+g*o.height/s.height;return`transform: ${u} translate(${k}px, ${h}px) scale(${v}, ${w});`}}}export{t$1 as $,onMount as A,assign as B,writable as C,create_slot as D,append_hydration as E,update_slot_base as F,get_all_dirty_from_scope as G,get_slot_changes as H,kursor as I,noop as J,query_selector_all as K,src_url_equal as L,toggle_class as M,action_destroyer as N,is_function as O,fix_position as P,add_transform as Q,create_animation as R,SvelteComponent as S,Typewriter as T,add_render_callback as U,create_bidirectional_transition as V,run_all as W,update_keyed_each as X,flip as Y,scale as Z,fix_and_outro_and_destroy_block as _,children as a,n as a0,e as a1,attr as b,claim_element as c,detach as d,element as e,insert_hydration as f,claim_text as g,set_data as h,init as i,create_component as j,space as k,empty as l,claim_component as m,claim_space as n,mount_component as o,get_spread_update as p,get_spread_object as q,group_outros as r,safe_not_equal as s,text as t,transition_out as u,destroy_component as v,check_outros as w,transition_in as x,setContext as y,afterUpdate as z};
