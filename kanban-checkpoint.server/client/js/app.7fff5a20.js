(function(t){function e(e){for(var n,c,r=e[0],i=e[1],d=e[2],l=0,b=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(b.length)b.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},c={app:0},o={app:0},s=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1af21c3f":"32652223","chunk-27bc9413":"fc51bc26","chunk-6dabe98c":"36852b5a","chunk-7bdd8267":"ef98dcde","chunk-bd4e6a0a":"00b0622b"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-1af21c3f":1,"chunk-27bc9413":1,"chunk-6dabe98c":1,"chunk-7bdd8267":1,"chunk-bd4e6a0a":1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-1af21c3f":"cb4a5995","chunk-27bc9413":"b642057b","chunk-6dabe98c":"c05f91dc","chunk-7bdd8267":"ead8d67a","chunk-bd4e6a0a":"9a40db21"}[t]+".css",o=i.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var d=s[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===o))return e()}var b=document.getElementsByTagName("style");for(r=0;r<b.length;r++){d=b[r],l=d.getAttribute("data-href");if(l===n||l===o)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete c[t],u.parentNode.removeChild(u),a(s)},u.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){c[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t);var b=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",b.name="ChunkLoadError",b.type=n,b.request=c,a[1](b)}o[t]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var b=0;b<d.length;b++)e(d[b]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f59":function(t,e,a){"use strict";a("69f3")},"10b0":function(t,e,a){},"15c1":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-0b1ec3ee");Object(n["v"])("data-v-0b1ec3ee");const o={class:"col-3 min-vh-100 chalk-border"},s={class:"row"},r={class:"col-1 offset-9 justify-content-right"},i={class:"col-12"},d={class:"chalk"},l={class:"row"},b={class:"row"},u={class:"col"};Object(n["t"])();const p=c((t,e,a,c,p,m)=>{const h=Object(n["z"])("TaskComponent"),f=Object(n["z"])("TaskModalComponent");return Object(n["s"])(),Object(n["e"])("div",o,[Object(n["h"])("div",s,[Object(n["h"])("div",r,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-light text-center buttonStyle chalk pl-2 pb-0 pt-1 pr-1",onClick:e[1]||(e[1]=(...t)=>c.deleteList&&c.deleteList(...t))}," X ")]),Object(n["h"])("div",i,[Object(n["h"])("h1",d,Object(n["C"])(a.listProp.title.toUpperCase()),1)])]),Object(n["h"])("div",l,[Object(n["h"])("ul",{class:"col",onDrop:e[2]||(e[2]=t=>c.drop()),onDragover:e[3]||(e[3]=Object(n["I"])(t=>c.allowDrop(),["prevent"])),dropzone:"zone",id:a.listProp.id},[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(c.state.tasks,t=>(Object(n["s"])(),Object(n["e"])(h,{key:t.id,"task-prop":t},null,8,["task-prop"]))),128))],40,["id"])]),Object(n["h"])("div",b,[Object(n["h"])("div",u,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-light chalk buttonStyle","data-toggle":"modal","data-target":"#taskModal"+a.listProp.id}," a TASK ",8,["data-target"]),Object(n["h"])(f,{"list-prop":a.listProp},null,8,["list-prop"])])])])});var m=a("83fc"),h=a("8a4e"),f=a("5fb1"),O=a("d8e7"),j={name:"ListComponent",props:{listProp:{type:Object,required:!0}},setup(t){const e=Object(n["w"])({tasks:Object(n["c"])(()=>m["a"].tasks.filter(e=>e.listId===t.listProp.id))});return{state:e,async deleteList(){try{f["a"].delete(t.listProp.id)}catch(e){h["a"].error(e)}},allowDrop(){},drop(){const t=event.dataTransfer.getData("application/x-moz-node"),e=m["a"].tasks.find(e=>e.id===t);"LI"===event.target.nodeName?(e.listId=event.target.parentNode.id,O["a"].edit(e,t),event.target.parentNode.appendChild(document.getElementById(t))):"H2"===event.target.nodeName?(e.listId=event.target.parentNode.parentNode.id,O["a"].edit(e,t),event.target.parentNode.parentNode.appendChild(document.getElementById(t))):"UL"===event.target.nodeName&&(e.listId=event.target.id,O["a"].edit(e,t),event.target.appendChild(document.getElementById(t)))}}}};a("4e75");j.render=p,j.__scopeId="data-v-0b1ec3ee";e["default"]=j},"1c7a":function(t,e,a){},"228d":function(t,e,a){"use strict";a("1c7a")},"2b20":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r}));var n=a("bc3a"),c=a.n(n);const o=window.location.origin.includes("localhost")?"http://localhost:3000":"",s=c.a.create({baseURL:o,timeout:8e3}),r=function(t){s.defaults.headers.authorization=t}},"2da5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{constructor({id:t,creatorId:e,creator:a,body:n,taskId:c}){this.id=t,this.creatorId=e,this.creator=a,this.body=n,this.taskId=c}}},"382b":function(t,e,a){"use strict";a("5c1e")},"3a86":function(t,e,a){},"3ba0":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{constructor({id:t,creatorId:e,title:a,listId:n}){this.id=t,this.creatorId=e,this.title=a,this.listId=n}}},"41cb":function(t,e,a){"use strict";var n=a("6c02"),c=a("8816");function o(t){return()=>a("a2f9")(`./${t}.vue`)}const s=[{path:"/",name:"Home",component:o("HomePage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/kanbanlist",name:"KanbanList",component:o("KanbanListPage"),beforeEnter:c["a"]},{path:"/kanbans/:id",name:"Kanban",component:o("KanbanDetailsPage"),beforeEnter:c["a"]},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:c["a"]}],r=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:s});e["a"]=r},"4e75":function(t,e,a){"use strict";a("10b0")},"500e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["h"])("footer",null,[Object(n["h"])("div",{class:"bg-dark text-light text-center p-4"}," T & T ")],-1);function o(t,e,a,o,s,r){const i=Object(n["z"])("Navbar"),d=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(i)]),Object(n["h"])("main",null,[Object(n["h"])(d,null,{default:Object(n["G"])(({Component:t})=>[Object(n["h"])(n["b"],{name:"route",mode:"out-in"},{default:Object(n["G"])(()=>[(Object(n["s"])(),Object(n["e"])(Object(n["A"])(t)))]),_:2},1024)]),_:1})]),c],64)}var s=a("83fc"),r={name:"App",setup(){return{appState:Object(n["c"])(()=>s["a"])}}};a("382b");r.render=o;var i=r;function d(t){const e=a("ccc2");e.keys().forEach(a=>{const n=e(a),c=n.default||n,o=c.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,c)})}var l=a("41cb"),b=a("4989"),u=a.n(b),p=a("1157"),m=a.n(p),h=a("f0bd");const f=Object(n["d"])(i);d(f),f.use(l["a"],u.a,m.a,h["default"]).mount("#app")},"57a1":function(t,e,a){"use strict";a("70a0")},"5c1e":function(t,e,a){},"5fb1":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("83fc"),c=a("c962"),o=a("3ba0"),s=a("2b20");class r{async getAll(){try{const t=await s["a"].get("api/lists");n["a"].lists=t.data.map(t=>new c["a"](t))}catch(t){}}async getById(t){try{const e=await s["a"].get("api/lists/"+t);n["a"].activelist=e.data.map(t=>new c["a"](t))}catch(e){}}async getTasksByListId(t){try{const e=await s["a"].get("api/lists/"+t+"/tasks");n["a"].tasks=[...n["a"].tasks,e.data.map(t=>new o["a"](t))]}catch(e){}}async create(t,e){try{t.kanbanId=e;const a=await s["a"].post("api/lists",t);n["a"].lists=[...n["a"].lists,new c["a"](a.data)]}catch(a){}}async edit(t,e){try{const a=await s["a"].put("api/lists/"+e,t),c=n["a"].lists.findIndex(t=>t.id===a.data.id);n["a"].lists.splice(c,1,a.data)}catch(a){}}async delete(t){try{await s["a"].delete("api/lists/"+t),n["a"].lists=n["a"].lists.filter(e=>e.id!==t)}catch(e){}}}const i=new r},"69f3":function(t,e,a){},"6f3f":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c={class:"modal fade",id:"createListModal",tabindex:"-1",role:"dialog","aria-labelledby":"createListModal","aria-hidden":"true"},o={class:"modal-dialog",role:"document"},s={class:"modal-content"},r=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"createListModal"}," Add A New List "),Object(n["h"])("button",{id:"closeModal",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},d={class:"form-group"},l=Object(n["h"])("small",{id:"maxListsError",class:"form-text text-danger",hidden:""},"You have reached the maximum number of allowed lists",-1),b=Object(n["h"])("button",{type:"submit",class:"btn btn-success"}," Add ",-1);function u(t,e,a,u,p,m){return Object(n["s"])(),Object(n["e"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("div",s,[r,Object(n["h"])("div",i,[Object(n["h"])("form",{onSubmit:e[2]||(e[2]=Object(n["I"])((...t)=>u.createList&&u.createList(...t),["prevent"]))},[Object(n["h"])("div",d,[Object(n["H"])(Object(n["h"])("input",{type:"text",name:"List title",id:"ListTitle",class:"form-control",placeholder:"List title","onUpdate:modelValue":e[1]||(e[1]=t=>u.state.newList.title=t)},null,512),[[n["E"],u.state.newList.title]]),l]),b],32)])])])])}var p=a("5fb1"),m=a("8a4e"),h=a("6c02"),f=a("83fc"),O={name:"ListModalComponent",setup(){const t=Object(h["d"])(),e=Object(n["w"])({newList:{},lists:Object(n["c"])(()=>f["a"].lists)});return{state:e,async createList(){try{m["a"].log(t.params.id),await p["a"].create(e.newList,t.params.id),e.newList={},document.getElementById("closeModal").click()}catch(a){m["a"].error(a)}}}}};O.render=u;e["default"]=O},"70a0":function(t,e,a){},"73dc":function(t,e,a){"use strict";a("500e")},"7f28":function(t,e,a){"use strict";a("3a86")},"823e":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c={class:"modal-dialog",role:"document"},o={class:"modal-content"},s={class:"modal-header"},r=Object(n["h"])("h5",{class:"modal-title",id:"createTaskModal"}," Add A New Task ",-1),i=Object(n["h"])("span",{"aria-hidden":"true"},"×",-1),d={class:"modal-body"},l={class:"form-group"},b=Object(n["h"])("button",{type:"submit",class:"btn btn-success"}," Add ",-1);function u(t,e,a,u,p,m){return Object(n["s"])(),Object(n["e"])("div",{class:"modal fade",id:"taskModal"+a.listProp.id,tabindex:"-1",role:"dialog","aria-labelledby":"createTaskModal","aria-hidden":"true"},[Object(n["h"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("div",s,[r,Object(n["h"])("button",{id:"closeModal"+a.listProp.id,type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[i],8,["id"])]),Object(n["h"])("div",d,[Object(n["h"])("form",{onSubmit:e[2]||(e[2]=Object(n["I"])((...t)=>u.createTask&&u.createTask(...t),["prevent"]))},[Object(n["h"])("div",l,[Object(n["H"])(Object(n["h"])("input",{type:"text",name:"Task title",id:"TaskTitle",class:"form-control",placeholder:"Task title","onUpdate:modelValue":e[1]||(e[1]=t=>u.state.newTask.title=t)},null,512),[[n["E"],u.state.newTask.title]])]),b],32)])])])],8,["id"])}var p=a("d8e7"),m=a("8a4e"),h=a("6c02"),f=a("83fc"),O={name:"TaskModalComponent",props:{listProp:{type:Object,required:!0}},setup(t){const e=Object(h["d"])(),a=Object(n["w"])({newTask:{},Tasks:Object(n["c"])(()=>f["a"].Tasks)});return{state:a,async createTask(){try{a.newTask.listId=t.listProp.id,a.newTask.kanbanId=e.params.id,await p["a"].create(a.newTask),a.newTask={},document.getElementById("closeModal"+t.listProp.id).click()}catch(n){m["a"].error(n)}}}}};O.render=u;e["default"]=O},"83fc":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("7a23");const c=Object(n["w"])({user:{},account:{},activeKanban:{},activeTask:{},kanbans:[],lists:[],tasks:[],comments:[]})},8574:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-652c0d41");Object(n["v"])("data-v-652c0d41");const o={class:"row justify-content-between border-bottom border-bottom-dark"},s={class:"col-10"},r={key:0},i={class:"col-2"};Object(n["t"])();const d=c((t,e,a,c,d,l)=>(Object(n["s"])(),Object(n["e"])("div",o,[Object(n["h"])("div",s,[Object(n["h"])("p",null,Object(n["C"])(a.commentProp.body),1),a.commentProp.creator?(Object(n["s"])(),Object(n["e"])("h6",r," By: "+Object(n["C"])(a.commentProp.creator.name),1)):Object(n["f"])("",!0)]),Object(n["h"])("div",i,[a.commentProp.creatorId===c.state.account.id?(Object(n["s"])(),Object(n["e"])("button",{key:0,type:"button",class:"btn btn-danger buttonStyle py-1 px-2 m-1",onClick:e[1]||(e[1]=(...t)=>c.deleteComment&&c.deleteComment(...t))}," X ")):Object(n["f"])("",!0)])])));var l=a("83fc"),b=a("8a4e"),u=a("e5f0"),p={name:"CommentComponent",props:{commentProp:{type:Object,required:!0}},setup(t){const e=Object(n["w"])({account:Object(n["c"])(()=>l["a"].account)});return{state:e,deleteComment(){try{u["a"].delete(t.commentProp.id)}catch(e){b["a"].error(e)}}}}};a("228d");p.render=d,p.__scopeId="data-v-652c0d41";e["default"]=p},"8a4e":function(t,e,a){"use strict";function n(t,e){window.location.origin.includes("localhost")&&console[t](...e)}a.d(e,"a",(function(){return c}));const c={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"8a92":function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-1c3c3c20"),o=c((t,e,a,o,s,r)=>{const i=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("li",{class:"chalk spacebetween listStyle",onClick:e[2]||(e[2]=(...t)=>o.setActiveKanban&&o.setActiveKanban(...t))},[Object(n["h"])(i,{to:{name:"Kanban",params:{id:a.kanbanProp.id}}},{default:c(()=>[Object(n["g"])(Object(n["C"])(a.kanbanProp.title.toUpperCase()),1)]),_:1},8,["to"]),Object(n["h"])("i",{class:"fa fa-times text-light","aria-hidden":"true",onClick:e[1]||(e[1]=(...t)=>o.deleteKanban&&o.deleteKanban(...t))})])});var s=a("8a4e"),r=a("febc"),i={name:"KanbanListItemComponent",props:{kanbanProp:{type:Object,required:!0}},setup(t){const e=Object(n["w"])({});return{state:e,async deleteKanban(){try{r["a"].delete(t.kanbanProp.id)}catch(e){s["a"].error(e)}},async setActiveKanban(){try{r["a"].getById(t.kanbanProp.id)}catch(e){s["a"].error(e)}}}}};a("0f59");i.render=o,i.__scopeId="data-v-1c3c3c20";e["default"]=i},9523:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-fb70546e");Object(n["v"])("data-v-fb70546e");const o={class:"col-1 offset-10 justify-content-right"},s={class:"col"};Object(n["t"])();const r=c((t,e,a,c,r,i)=>{const d=Object(n["z"])("CommentModalComponent");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("li",{class:"row stickyNote",draggable:"true",id:a.taskProp.id,onDragstart:e[2]||(e[2]=t=>c.drag()),onClick:e[3]||(e[3]=t=>c.openComments())},[Object(n["h"])("div",o,[Object(n["h"])("button",{type:"button",class:"btn btn-outline-dark buttonStyle text-center pl-1 pb-0 pt-1 pr-1",onClick:e[1]||(e[1]=Object(n["I"])((...t)=>c.deleteTask&&c.deleteTask(...t),["stop"]))}," X ")]),Object(n["h"])("div",s,[Object(n["h"])("h2",null,Object(n["C"])(a.taskProp.title.toUpperCase()),1)])],40,["id"]),Object(n["h"])(d,{"task-prop":a.taskProp},null,8,["task-prop"])],64)});var i=a("d8e7"),d=a("8a4e"),l=a("1157"),b=a.n(l),u=a("83fc"),p={name:"TaskComponent",props:{taskProp:{type:Object,required:!0}},setup(t){const e=Object(n["w"])({});return{state:e,async deleteTask(){try{i["a"].delete(t.taskProp.id)}catch(e){d["a"].error(e)}},drag(){event.dataTransfer.dropEffect="move",event.dataTransfer.effectAllowed="move",event.dataTransfer.setData("application/x-moz-node",event.target.id)},async openComments(){try{d["a"].log(u["a"].account),await i["a"].getCommentsById(t.taskProp.id),b()("#commentModal"+t.taskProp.id).modal()}catch(e){d["a"].log(e)}}}}};a("57a1");p.render=r,p.__scopeId="data-v-fb70546e";e["default"]=p},"9d8d":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),c=a("c974"),o=a.n(c);const s=Object(n["J"])("data-v-0b4410a8");Object(n["v"])("data-v-0b4410a8");const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i=Object(n["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(n["h"])("img",{alt:"logo",src:o.a,height:"45"})],-1),d=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},b={class:"navbar-nav mr-auto"},u={class:"nav-item","data-toggle":"collapse","data-target":"#navbarText"},p=Object(n["g"])(" Home "),m={class:"nav-item","data-toggle":"collapse","data-target":"#navbarText"},h=Object(n["g"])(" Kanbans "),f={class:"nav-item","data-toggle":"collapse","data-target":"#navbarText"},O=Object(n["g"])(" About "),j={class:"navbar-text"},v={key:1,class:"dropdown"},g={class:"mx-3"},y=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(n["t"])();const k=s((t,e,a,c,o,k)=>{const w=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("nav",r,[Object(n["h"])(w,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:s(()=>[i]),_:1}),d,Object(n["h"])("div",l,[Object(n["h"])("ul",b,[Object(n["h"])("li",u,[Object(n["h"])(w,{to:{name:"Home"},class:"nav-link"},{default:s(()=>[p]),_:1})]),Object(n["h"])("li",m,[Object(n["h"])(w,{to:{name:"KanbanList"},class:"nav-link"},{default:s(()=>[h]),_:1})]),Object(n["h"])("li",f,[Object(n["h"])(w,{to:{name:"About"},class:"nav-link"},{default:s(()=>[O]),_:1})])]),Object(n["h"])("span",j,[c.user.isAuthenticated?(Object(n["s"])(),Object(n["e"])("div",v,[Object(n["h"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>c.state.dropOpen=!c.state.dropOpen)},[Object(n["h"])("img",{src:c.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",g,Object(n["C"])(c.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:c.state.dropOpen}],onClick:e[4]||(e[4]=t=>c.state.dropOpen=!1)},[Object(n["h"])(w,{to:{name:"Account"}},{default:s(()=>[y]),_:1}),Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>c.logout&&c.logout(...t))}," logout ")],2)])):(Object(n["s"])(),Object(n["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>c.login&&c.login(...t))}," Login "))])])])});var w=a("8816"),C=a("83fc");const T="tallen.us.auth0.com",I="pM6rtU2yhVG5ZyXC7RxjQ3AAFIYsnfMs",P="https://classroom";var x=a("41cb"),A=a("2b20"),L=a("8a4e");class K{async getAccount(){try{const t=await A["a"].get("/account");C["a"].account=t.data}catch(t){L["a"].error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const E=new K,M=Object(w["b"])({domain:T,clientId:I,audience:P,onRedirectCallback:t=>{x["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});M.on(M.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(A["b"])(M.bearer),await E.getAccount(),C["a"].user=M.user}));var _={name:"Navbar",setup(){const t=Object(n["w"])({dropOpen:!1});return{state:t,user:Object(n["c"])(()=>C["a"].user),async login(){M.loginWithPopup()},async logout(){await M.logout({returnTo:window.location.origin})}}}};a("73dc");_.render=k,_.__scopeId="data-v-0b4410a8";e["default"]=_},a2f9:function(t,e,a){var n={"./AboutPage.vue":["478b","chunk-bd4e6a0a"],"./AccountPage.vue":["e542","chunk-7bdd8267"],"./HomePage.vue":["78a7","chunk-27bc9413"],"./KanbanDetailsPage.vue":["8f2d","chunk-6dabe98c"],"./KanbanListPage.vue":["b80e","chunk-1af21c3f"]};function c(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],c=e[0];return a.e(e[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="a2f9",t.exports=c},c962:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));class n{constructor({id:t,creatorId:e,title:a,kanbanId:n}){this.id=t,this.creatorId=e,this.title=a,this.kanbanId=n}}},c974:function(t,e,a){t.exports=a.p+"img/cw-logo.5a19e7f9.png"},ccc2:function(t,e,a){var n={"./CommentComponent.vue":"8574","./CommentModalComponent.vue":"efad","./KanbanListItemComponent.vue":"8a92","./KanbanModalComponent.vue":"f1ab","./ListComponent.vue":"15c1","./ListModalComponent.vue":"6f3f","./TaskComponent.vue":"9523","./TaskModalComponent.vue":"823e","./navbar.vue":"9d8d"};function c(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=o,t.exports=c,c.id="ccc2"},d8e7:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("83fc"),c=a("2b20"),o=a("3ba0"),s=a("2da5");class r{async getById(t){try{const e=await c["a"].get("api/tasks/"+t);n["a"].activeTask=e.data.map(t=>new o["a"](t))}catch(e){}}async getCommentsById(t){try{const e=await c["a"].get("api/tasks/"+t+"/comments");n["a"].comments=e.data.map(t=>new s["a"](t))}catch(e){}}async create(t){try{const e=await c["a"].post("api/tasks",t);n["a"].tasks=[...n["a"].tasks,new o["a"](e.data)]}catch(e){}}async edit(t,e){try{const a=await c["a"].put("api/tasks/"+e,t),o=n["a"].tasks.findIndex(t=>t.id===a.data.id);n["a"].tasks.splice(o,1,a.data)}catch(a){}}async delete(t){try{await c["a"].delete("api/tasks/"+t),n["a"].tasks=n["a"].tasks.filter(e=>e.id!==t)}catch(e){}}}const i=new r},e5f0:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a("83fc"),c=a("2b20"),o=a("2da5");class s{async getById(t){try{const e=await c["a"].get("api/comments/"+t);n["a"].activecomment=e.data.map(t=>new o["a"](t))}catch(e){}}async create(t){try{const e=await c["a"].post("api/comments",t);n["a"].comments.push(new o["a"](e.data))}catch(e){}}async edit(t,e){try{const a=await c["a"].put("api/comments/"+e,t),o=n["a"].comments.findIndex(t=>t.id===a.data.id);n["a"].comments.splice(o,1,a.data)}catch(a){}}async delete(t){try{await c["a"].delete("api/comments/"+t),n["a"].comments=n["a"].comments.filter(e=>e.id!==t)}catch(e){}}}const r=new s},efad:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c={class:"modal-dialog",role:"document"},o={class:"modal-content"},s=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"createCommentModal"}," Comments "),Object(n["h"])("button",{id:"closeModal",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")])],-1),r={class:"modal-body pt-0"},i={class:"row"},d={class:"col"},l={class:"input-group my-3"},b=Object(n["h"])("div",{class:"input-group-append"},[Object(n["h"])("button",{class:"btn btn-outline-dark",type:"submit",id:"button-addon2"}," Add ")],-1);function u(t,e,a,u,p,m){const h=Object(n["z"])("CommentComponent");return Object(n["s"])(),Object(n["e"])("div",{class:"modal fade",id:"commentModal"+a.taskProp.id,tabindex:"-1",role:"dialog","aria-labelledby":"createCommentModal","aria-hidden":"true"},[Object(n["h"])("div",c,[Object(n["h"])("div",o,[s,Object(n["h"])("div",r,[Object(n["h"])("div",i,[Object(n["h"])("div",d,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(u.state.comments,t=>(Object(n["s"])(),Object(n["e"])(h,{key:t.id,"comment-prop":t},null,8,["comment-prop"]))),128))])]),Object(n["h"])("form",{onSubmit:e[2]||(e[2]=Object(n["I"])((...t)=>u.createComment&&u.createComment(...t),["prevent"]))},[Object(n["h"])("div",l,[Object(n["H"])(Object(n["h"])("input",{type:"text",name:"Comment Body",id:"CommentBody",class:"form-control background-danger",placeholder:"Comment","onUpdate:modelValue":e[1]||(e[1]=t=>u.state.newComment.body=t)},null,512),[[n["E"],u.state.newComment.body]]),b])],32)])])])],8,["id"])}var p=a("e5f0"),m=a("8a4e"),h=a("83fc"),f={name:"CommentModalComponent",props:{taskProp:{type:Object,required:!0}},setup(t){const e=Object(n["w"])({newComment:{},comments:Object(n["c"])(()=>h["a"].comments)});return{state:e,async createComment(){try{e.newComment.taskId=t.taskProp.id,await p["a"].create(e.newComment),e.newComment={}}catch(a){m["a"].error(a)}}}}};a("7f28");f.render=u;e["default"]=f},f1ab:function(t,e,a){"use strict";a.r(e);var n=a("7a23");const c=Object(n["J"])("data-v-2cf1bf60");Object(n["v"])("data-v-2cf1bf60");const o={class:"modal fade",id:"createKanbanModal",tabindex:"-1",role:"dialog","aria-labelledby":"createKanbanModal","aria-hidden":"true"},s={class:"modal-dialog",role:"document"},r={class:"modal-content"},i=Object(n["h"])("div",{class:"modal-header"},[Object(n["h"])("h5",{class:"modal-title",id:"createKanbanModal"}," Create A New Kanban Board "),Object(n["h"])("button",{id:"closeModal",type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")])],-1),d={class:"modal-body"},l={class:"form-group"},b=Object(n["h"])("button",{type:"submit",class:"btn btn-success"}," Create ",-1);Object(n["t"])();const u=c((t,e,a,c,u,p)=>(Object(n["s"])(),Object(n["e"])("div",o,[Object(n["h"])("div",s,[Object(n["h"])("div",r,[i,Object(n["h"])("div",d,[Object(n["h"])("form",{onSubmit:e[2]||(e[2]=Object(n["I"])((...t)=>c.createKanban&&c.createKanban(...t),["prevent"]))},[Object(n["h"])("div",l,[Object(n["H"])(Object(n["h"])("input",{type:"text",name:"Kanban title",id:"KanbanTitle",class:"form-control",placeholder:"Kanban title","onUpdate:modelValue":e[1]||(e[1]=t=>c.state.newKanban.title=t)},null,512),[[n["E"],c.state.newKanban.title]])]),b],32)])])])])));var p=a("83fc"),m=a("febc"),h=a("8a4e"),f={name:"KanbanModalComponent",setup(){const t=Object(n["w"])({newKanban:{},activeKanban:Object(n["c"])(()=>p["a"].activeKanban)});return{state:t,async createKanban(){try{await m["a"].create(t.newKanban),t.newKanban={},document.getElementById("closeModal").click()}catch(e){h["a"].error(e)}}}}};f.render=u,f.__scopeId="data-v-2cf1bf60";e["default"]=f},febc:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("83fc");class c{constructor({id:t,creatorId:e,title:a}){this.id=t,this.creatorId=e,this.title=a}}var o=a("c962"),s=a("3ba0"),r=a("8a4e"),i=a("2b20");class d{async getAll(){try{const t=await i["a"].get("api/kanbans");n["a"].kanbans=t.data.map(t=>new c(t))}catch(t){}}async getById(t){try{r["a"].log(t+"from kanbanservice getById before api call");const e=await i["a"].get("api/kanbans/"+t);n["a"].activeKanban=new c(e.data),r["a"].log(n["a"].activeKanban+"from kanbanservice getById after api call")}catch(e){}}async getListsById(t){try{const e=await i["a"].get("api/kanbans/"+t+"/lists");n["a"].lists=e.data.map(t=>new o["a"](t))}catch(e){}}async getTasksById(t){try{const e=await i["a"].get("api/kanbans/"+t+"/tasks");n["a"].tasks=e.data.map(t=>new s["a"](t))}catch(e){}}async create(t){try{const e=await i["a"].post("api/kanbans",t);n["a"].kanbans.push(e.data)}catch(e){}}async edit(t,e){try{const a=await i["a"].put("api/kanbans/"+e,t),c=n["a"].kanbans.findIndex(t=>t.id===a.data.id);n["a"].kanbans.splice(c,1,a.data)}catch(a){}}async delete(t){try{await i["a"].delete("api/kanbans/"+t),n["a"].kanbans=n["a"].kanbans.filter(e=>e.id!==t)}catch(e){}}}const l=new d}});