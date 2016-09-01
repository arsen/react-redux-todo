webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),i=r(o),u=n(30),a=n(163),l=r(a),c=n(169),f=n(176),s=n(192),d=r(s),p=n(193),h=r(p),b=n(194),v=r(b),m=n(442),y=r(m),_=n(445),g=(r(_),function(e){return function(t){return function(n){try{return t(n)}catch(r){throw console.error("Caught an exception!",r),Raven.captureException(r,{extra:{action:n,state:e.getState()}}),r}}}}),O=(0,f.createStore)(y["default"],(0,f.applyMiddleware)(d["default"],(0,h["default"])(),g));(0,l["default"])(),(0,u.render)(i["default"].createElement(c.Provider,{store:O},i["default"].createElement(v["default"],null)),document.getElementById("root"))},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(195),i=r(o);t["default"]=i["default"]},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),u=n(196),a=r(u),l=n(348),c=r(l),f=n(353),s=r(f),d=n(390),p=r(d),h=n(431),b=r(h),v=n(440),m=r(v),y=function(){return i["default"].createElement(a["default"],null,i["default"].createElement(c["default"],{className:m["default"].container,zDepth:2},i["default"].createElement(s["default"],null),i["default"].createElement(b["default"],null),i["default"].createElement(p["default"],null)))};t["default"]=y},353:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(169),i=n(354),u=n(358),a=r(u),l=function(e){return{onAddClick:function(t){e((0,i.addTodo)(t))}}},c=(0,o.connect)(null,l)(a["default"]);t["default"]=c},354:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setVisibilityFilter=t.toggleTodo=t.deleteTodo=t.addTodo=t.connectToFirebase=void 0;var o=n(355),i=r(o);t.connectToFirebase=function(){return function(e){i["default"].ref("/public").on("child_added",function(t){var n={id:t.key,text:t.val().text,completed:t.val().completed};e({type:"ADD_TODO",data:n})}),i["default"].ref("/public").on("child_changed",function(t){e({type:"TOGGLE_TODO",id:t.key})}),i["default"].ref("/public").on("child_removed",function(t){e({type:"DELETE_TODO",id:t.key})})}},t.addTodo=function(e){return function(t){var n={text:e,completed:!1};i["default"].ref("/public").push(n).key}},t.deleteTodo=function(e){return function(t){i["default"].ref("/public/"+e).remove()}},t.toggleTodo=function(e,t){return function(n){var r={};r[e+"/completed"]=t,i["default"].ref("/public").update(r)}},t.setVisibilityFilter=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}}},355:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(356),i=r(o),u={apiKey:"AIzaSyCZCCOqhTOVqKmugphr8mqF8Zre6Ma-X4c",authDomain:"material-todo-fa2eb.firebaseapp.com",databaseURL:"https://material-todo-fa2eb.firebaseio.com",storageBucket:"material-todo-fa2eb.appspot.com"},a=i.initializeApp(u),l=a.database();t["default"]=l},358:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(359),s=r(f),d=n(369),p=r(d),h=n(386),b=r(h),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n}return u(t,e),a(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",{className:b["default"].container},c["default"].createElement(s["default"],{hintText:"type your todo",floatingLabelText:"Todo",className:b["default"].input,value:this.state.value,onChange:function(t){e.setState({value:t.target.value})}}),c["default"].createElement(p["default"],{label:"Add",primary:!0,onClick:function(){e.props.onAddClick(e.state.value),e.setState({value:""})}}))}}]),t}(l.Component);v.defaultProps={onAddClick:function(){}},t["default"]=v},386:function(e,t,n){var r=n(387);"string"==typeof r&&(r=[[e.id,r,""]]);n(389)(r,{});r.locals&&(e.exports=r.locals)},387:function(e,t,n){t=e.exports=n(388)(),t.push([e.id,"._2D4KjzgnE4UJwswxVYkopB{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center}._1ru3hDSKcxC-gWjuIICy-J{-webkit-box-flex:1;-ms-flex:1;flex:1}",""]),t.locals={container:"_2D4KjzgnE4UJwswxVYkopB",input:"_1ru3hDSKcxC-gWjuIICy-J"}},388:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},389:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(c(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:u}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],u=o[1],a=o[2],l=o[3],c={css:u,media:a,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=v(),r=_[_.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),_.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){e.parentNode.removeChild(e);var t=_.indexOf(e);t>=0&&_.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=a(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=s.bind(null,n),o=function(){u(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,_=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],u=0;u<n.length;u++){var a=n[u],l=p[a.id];l.refs--,i.push(l)}if(e){var c=o(e);r(c,t)}for(var u=0;u<i.length;u++){var l=i[u];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete p[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},390:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(169),i=n(354),u=n(391),a=r(u),l=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed})}},c=function(e){return{todos:l(e.todos,e.visibilityFilter)}},f=function(e){return{onTodoDoneClick:function(t,n){e((0,i.toggleTodo)(t,n))},onTodoDeleteClick:function(t){e((0,i.deleteTodo)(t))},connectToFirebase:function(){e((0,i.connectToFirebase)())}}},s=(0,o.connect)(c,f)(a["default"]);t["default"]=s},391:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=n(392),s=n(415),d=r(s),p=n(420),h=r(p),b=n(397),v=r(b),m=n(421),y=r(m),_=n(426),g=r(_),O=n(429),x=(r(O),function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={showDeleteConfirm:!1,currentDeleteId:-1},n}return u(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.connectToFirebase()}},{key:"render",value:function(){var e=this,t=this.props,n=t.todos,r=t.onTodoDoneClick,o=(t.onTodoDeleteClick,[c["default"].createElement(g["default"],{label:"Cancel",primary:!0,onTouchTap:function(){e.setState({showDeleteConfirm:!1,currentDeleteId:-1})}}),c["default"].createElement(g["default"],{label:"Delete",primary:!0,onTouchTap:function(){console.log("delete click"),e.props.onTodoDeleteClick(e.state.currentDeleteId),e.setState({showDeleteConfirm:!1,currentDeleteId:-1})}})]);return c["default"].createElement("div",null,c["default"].createElement(y["default"],{title:"Are you sure?",actions:o,modal:!1,open:this.state.showDeleteConfirm,onRequestClose:function(){e.setState({showDeleteConfirm:!1,currentDeleteId:-1})},contentStyle:{maxWidth:400}},"Are you sure you want to delete the To Do item?"),c["default"].createElement(f.List,null,n.map(function(t){var n=c["default"].createElement(d["default"],{checked:t.completed,onCheck:function(e,n){r(t.id,!t.completed)}}),o=c["default"].createElement(v["default"],{onClick:function(){e.setState({currentDeleteId:t.id,showDeleteConfirm:!0})}},c["default"].createElement(h["default"],null));return c["default"].createElement(f.ListItem,{key:t.id,primaryText:t.text,leftCheckbox:n,rightIconButton:o,innerDivStyle:{textDecoration:t.completed?"line-through":"none"}})})))}}]),t}(l.Component));t["default"]=x},429:function(e,t,n){var r=n(430);"string"==typeof r&&(r=[[e.id,r,""]]);n(389)(r,{});r.locals&&(e.exports=r.locals)},430:function(e,t,n){t=e.exports=n(388)(),t.push([e.id,"",""])},431:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(432),i=r(o),u=n(169),a=n(354),l=function(e){return{currentFilter:e.visibilityFilter}},c=function(e){return{onFilterChanged:function(t){e((0,a.setVisibilityFilter)(t))}}},f=(0,u.connect)(l,c)(i["default"]);t["default"]=f},432:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=r(o),u=n(433),a=n(438),l=(r(a),function(e){var t=e.currentFilter,n=e.onFilterChanged;return i["default"].createElement(u.Tabs,{value:t},i["default"].createElement(u.Tab,{value:"SHOW_ALL",label:"All",onActive:function(){n("SHOW_ALL")}}),i["default"].createElement(u.Tab,{value:"SHOW_ACTIVE",label:"Active",onActive:function(){n("SHOW_ACTIVE")}}),i["default"].createElement(u.Tab,{value:"SHOW_COMPLETED",label:"Completed",onActive:function(){n("SHOW_COMPLETED")}}))});t["default"]=l},438:function(e,t,n){var r=n(439);"string"==typeof r&&(r=[[e.id,r,""]]);n(389)(r,{});r.locals&&(e.exports=r.locals)},439:function(e,t,n){t=e.exports=n(388)(),t.push([e.id,"",""])},440:function(e,t,n){var r=n(441);"string"==typeof r&&(r=[[e.id,r,""]]);n(389)(r,{});r.locals&&(e.exports=r.locals)},441:function(e,t,n){t=e.exports=n(388)(),t.push([e.id,"._1ZDeVQs7ISPQIb2Z6OTduT{max-width:600px;width:100%;padding:0 10px}",""]),t.locals={container:"_1ZDeVQs7ISPQIb2Z6OTduT"}},442:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(176),i=n(443),u=r(i),a=n(444),l=r(a),c=(0,o.combineReducers)({todos:u["default"],visibilityFilter:l["default"]});t["default"]=c},443:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(355),u=(r(i),function(e,t){switch(t.type){case"ADD_TODO":return{id:t.id,text:t.text,completed:!1};case"TOGGLE_TODO":return e.id!==t.id?e:Object.assign({},e,{completed:!e.completed});default:return e}}),a=function(e,t){for(var n=0;n<e.length;n++)if(e[n].id===t)return n;return!1},l=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case"ADD_TODO":return[].concat(o(e),[t.data]);case"TOGGLE_TODO":return e.map(function(e){return u(e,t)});case"DELETE_TODO":var n=a(e,t.id);return n===!1?e:[].concat(o(e.slice(0,n)),o(e.slice(n+1)));case"TODOS_FETCH_DONE":return[].concat(o(t.todos));case"TODOS_UPDATED":return[].concat(o(t.todos));default:return e}};t["default"]=l},444:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=arguments.length<=0||void 0===arguments[0]?"SHOW_ALL":arguments[0],t=arguments[1];switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}};t["default"]=n},445:function(e,t,n){var r=n(446);"string"==typeof r&&(r=[[e.id,r,""]]);n(389)(r,{});r.locals&&(e.exports=r.locals)},446:function(e,t,n){t=e.exports=n(388)(),t.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);",""]),t.push([e.id,"html{box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;width:100%;height:100%}*,:after,:before{box-sizing:inherit}body{background-color:#eee;margin:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;width:100%;height:100%}h1,h2,h3,h4,h5,h6,p,ul{margin:0;padding:0}#root{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;width:100%;height:100%;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-content:flex-start;overflow:auto;padding:20px 0}",""])}});