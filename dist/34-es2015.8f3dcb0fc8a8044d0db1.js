(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"+803":function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("fXoL"),c=i("tyNb"),o=i("pqks"),b=i("ofXK");function r(t,e){if(1&t&&(n.Zb(0,"li",5),n.Wc(1),n.Yb()),2&t){const t=e.$implicit;n.Fb(1),n.Xc(t)}}let s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Nb({type:t,selectors:[["app-breadcrumb"]],inputs:{title:"title",items:"items",active_item:"active_item"},decls:14,vars:5,consts:[[1,"container-fluid"],[1,"page-title"],[1,"row"],[1,"col-6"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[3,"icon"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item","active"]],template:function(t,e){1&t&&(n.Zb(0,"div",0),n.Zb(1,"div",1),n.Zb(2,"div",2),n.Zb(3,"div",3),n.Zb(4,"h3"),n.Wc(5),n.Yb(),n.Yb(),n.Zb(6,"div",3),n.Zb(7,"ol",4),n.Zb(8,"li",5),n.Zb(9,"a",6),n.Ub(10,"app-feather-icons",7),n.Yb(),n.Yb(),n.Uc(11,r,2,1,"li",8),n.Zb(12,"li",9),n.Wc(13),n.Yb(),n.Yb(),n.Yb(),n.Yb(),n.Yb(),n.Yb()),2&t&&(n.Fb(5),n.Xc(e.title),n.Fb(4),n.vc("routerLink","/dashboard/default"),n.Fb(1),n.vc("icon","home"),n.Fb(1),n.vc("ngForOf",e.items),n.Fb(2),n.Xc(e.active_item))},directives:[c.i,o.a,b.o],styles:[""]}),t})()},Fyao:function(t,e,i){"use strict";i.r(e),i.d(e,"TodoModule",function(){return h});var n=i("ofXK"),c=i("3Pt+"),o=i("PCNd"),b=i("tyNb"),r=i("yhGT"),s=i("fXoL"),a=i("5eHb"),l=i("+803");const d=function(t){return{completed:t}};function p(t,e){if(1&t){const t=s.ac();s.Zb(0,"li",35),s.Zb(1,"div",36),s.Zb(2,"h4",37),s.Wc(3),s.Yb(),s.Zb(4,"span",38),s.Zb(5,"span",39),s.kc("click",function(){s.Lc(t);const i=e.index;return s.oc().taskDeleted(i)}),s.Zb(6,"i",15),s.Ub(7,"i",40),s.Yb(),s.Yb(),s.Zb(8,"span",41),s.kc("click",function(){s.Lc(t);const i=e.$implicit;return s.oc().taskCompleted(i)}),s.Zb(9,"i",15),s.Ub(10,"i",16),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()}if(2&t){const t=e.$implicit,i=s.oc();s.vc("ngClass",s.zc(2,d,t.completed?t.completed:i.completed)),s.Fb(3),s.Xc(t.text)}}const u=function(){return["Apps"]},m=function(t){return{"move-up":t}},k=function(t){return{"move-down":t}},v=function(t){return{hide:t}},f=function(t){return{visible:t}},Y=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t){this.toastrService=t,this.todos=r.a,this.red_border=!1}ngOnInit(){}addTask(t){if(!t)return this.red_border=!0,!1;this.todos.push({text:t,completed:!1}),this.text="",this.red_border=!1}taskCompleted(t){t.completed=!t.completed,t.completed?this.toastrService.success(t.text,"Mark as completed"):this.toastrService.error(t.text,"Mark as Incompleted")}taskDeleted(t){this.todos.splice(t,1)}markAllAction(t){this.todos.filter(e=>{e.completed=t}),this.completed=t,t?this.toastrService.success("All Task as Completed"):this.toastrService.error("All Task as Incompleted")}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(a.b))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-todo"]],decls:45,vars:20,consts:[[3,"title","items","active_item"],[1,"container-fluid"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"todo"],[1,"todo-list-wrapper"],[1,"todo-list-container"],[1,"mark-all-tasks"],[1,"mark-all-tasks-container"],["id","mark-all-finished","role","button","id","mark-all-finished","role","button",1,"mark-all-btn",3,"ngClass"],[1,"btn-label"],[1,"action-box","completed",3,"click"],[1,"icon"],[1,"icon-check"],["id","mark-all-incomplete","role","button",1,"mark-all-btn","move-down",3,"ngClass"],[1,"action-box"],[1,"icon",3,"click"],[1,"todo-list-body"],["id","todo-list"],["class","task",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-list-footer"],[1,"add-task-btn-wrapper"],[1,"add-task-btn",3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus"],[1,"new-task-wrapper",3,"ngClass"],["name","todo","id","new-task",1,"textfield",3,"ngModel","ngModelChange"],["id","close-task-panel",1,"btn","btn-danger","cancel-btn",3,"click"],["id","add-task",1,"btn","btn-success","ml-3","add-new-task-btn",3,"click"],[1,"notification-popup","hide"],[1,"task"],[1,"notification-text"],[1,"task",3,"ngClass"],[1,"task-container"],[1,"task-label"],[1,"task-action-btn"],["title","Delete Task","routerLink","/to-do",1,"action-box","large","delete-btn",3,"click"],[1,"icon-trash"],["title","Mark Complete",1,"action-box","large","complete-btn",3,"click"]],template:function(t,e){1&t&&(s.Ub(0,"app-breadcrumb",0),s.Zb(1,"div",1),s.Zb(2,"div",2),s.Zb(3,"div",3),s.Zb(4,"div",4),s.Zb(5,"div",5),s.Zb(6,"h5"),s.Wc(7,"To-Do"),s.Yb(),s.Yb(),s.Zb(8,"div",6),s.Zb(9,"div",7),s.Zb(10,"div",8),s.Zb(11,"div",9),s.Zb(12,"div",10),s.Zb(13,"div",11),s.Zb(14,"span",12),s.Zb(15,"span",13),s.Wc(16,"Mark all as finished"),s.Yb(),s.Zb(17,"span",14),s.kc("click",function(){return e.markAllAction(!0)}),s.Zb(18,"i",15),s.Ub(19,"i",16),s.Yb(),s.Yb(),s.Yb(),s.Zb(20,"span",17),s.Zb(21,"span",13),s.Wc(22,"Mark all as Incomplete"),s.Yb(),s.Zb(23,"span",18),s.Zb(24,"i",19),s.kc("click",function(){return e.markAllAction(!1)}),s.Ub(25,"i",16),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(26,"div",20),s.Zb(27,"ul",21),s.Uc(28,p,11,4,"li",22),s.Yb(),s.Yb(),s.Zb(29,"div",23),s.Zb(30,"div",24),s.Zb(31,"span",25),s.Zb(32,"button",26),s.kc("click",function(){return e.visible=!0}),s.Ub(33,"i",27),s.Wc(34," Add new task"),s.Yb(),s.Yb(),s.Yb(),s.Zb(35,"div",28),s.Zb(36,"textarea",29),s.kc("ngModelChange",function(t){return e.text=t}),s.Yb(),s.Zb(37,"span",30),s.kc("click",function(){return e.visible=!1}),s.Wc(38,"Close"),s.Yb(),s.Zb(39,"span",31),s.kc("click",function(){return e.addTask(e.text)}),s.Wc(40,"Add Task"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Zb(41,"div",32),s.Zb(42,"p"),s.Ub(43,"span",33),s.Ub(44,"span",34),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()),2&t&&(s.vc("title","To Do")("items",s.yc(11,u))("active_item","To Do"),s.Fb(14),s.vc("ngClass",s.zc(12,m,e.completed)),s.Fb(6),s.vc("ngClass",s.zc(14,k,!e.completed)),s.Fb(8),s.vc("ngForOf",e.todos),s.Fb(3),s.vc("ngClass",s.zc(16,v,e.visible)),s.Fb(4),s.vc("ngClass",s.zc(18,f,e.visible)),s.Fb(1),s.Lb("border-danger",e.red_border),s.vc("ngModel",e.text))},directives:[l.a,n.n,n.o,c.b,c.l,c.o,b.g],styles:[".err[_ngcontent-%COMP%]{border:thin red;color:red}"]}),t})()}]}];let Z=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[b.j.forChild(Y)],b.j]}),t})(),h=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,Z,c.i,c.r,o.a]]}),t})()}}]);