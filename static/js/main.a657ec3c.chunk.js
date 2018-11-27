(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(4),r=a.n(o),c=(a(82),a(66)),i=a(50),l=a(18),d=a(19),u=a(23),h=a(20),p=a(24),m=(a(84),a(86),a(88),a(147)),f=a(28),k=(a(90),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.textInput.current.focus()}},{key:"componentDidUpdate",value:function(){this.props.textInput.current.focus()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("form",{className:"d-flex flex-column align-items-center bg-light",onSubmit:this.props.addTask},s.a.createElement("input",{autoComplete:"off",className:"w-100",name:"taskText",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",ref:this.props.textInput,onChange:this.props.handleInputChange}),s.a.createElement(m.a,{type:"submit",className:"w-100",bsStyle:"success"}," \u0414\u043e\u0434\u0430\u0442\u0438 "),s.a.createElement("div",{className:"d-flex flex-row"},s.a.createElement("div",{className:"d-flex flex-column p-2 flex-fill"},s.a.createElement(f.a,{name:"doneTasks",type:"checkbox",id:"exampleCustomCheckbox1",label:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u0437\u0430\u0434\u0430\u0447\u0456",onChange:this.props.handleInputChange}),s.a.createElement(f.a,{name:"undoneTasks",type:"checkbox",id:"exampleCustomCheckbox2",label:"\u041d\u0435\u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u0437\u0430\u0434\u0430\u0447\u0456",onChange:this.props.handleInputChange})),s.a.createElement("div",{className:"d-flex flex-column p-2 flex-fill"},s.a.createElement(f.a,{name:"sortByDate",value:"byLastDate",onChange:this.props.handleInputChange,checked:"byLastDate"===this.props.sortByDate,type:"radio",id:"exampleCustomRadio1",label:"\u041f\u0440\u0456\u043e\u0440\u0456\u0442\u0435\u0442 \u0437\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u044e"}),s.a.createElement(f.a,{name:"sortByDate",value:"byFirstDate",onChange:this.props.handleInputChange,checked:"byFirstDate"===this.props.sortByDate,type:"radio",id:"exampleCustomRadio2",label:"\u041f\u0440\u0456\u043e\u0440\u0456\u0442\u0435\u0442 \u0437\u0430 \u043f\u0435\u0440\u0448\u043e\u044e"})))))}}]),t}(n.Component)),D=(a(113),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).confirmTasks=function(e){return s.a.createElement("li",{className:"d-flex flex-row",key:e.date},s.a.createElement("span",{className:"w-100",onClick:function(t){return a.props.checkLikeDone(e.date)}},s.a.createElement("button",{className:"list-group-item list-group-item-action justify-content-between align-items-center btn"},s.a.createElement("span",{className:e.done?"done":"undone"},e.text," - ","".concat(e.dateToDo.getMonth(),"/").concat(e.dateToDo.getDate(),"/").concat(e.dateToDo.getFullYear()," ").concat(e.dateToDo.getHours(),":").concat(e.dateToDo.getMinutes())))),s.a.createElement("button",{className:"close",onClick:function(t){return a.props.deleteTask(e.date)}},"x"))},a.displayedTasks=function(e,t,a){return e&&!t?a=a.filter(function(e){return e.done}):!e&&t&&(a=a.filter(function(e){return!e.done})),a},a.sortByDate=function(e,t){return t="byLastDate"===e?t.sort(function(e,t){return t.date-e.date}):t.sort(function(e,t){return e.date-t.date})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.entries,t=this.props.doneTasks,a=this.props.undoneTasks,n=this.props.sortByDate;e=this.displayedTasks(t,a,e);var o=(e=this.sortByDate(n,e)).map(this.confirmTasks);return s.a.createElement("ul",{className:"list-group"},o)}}]),t}(n.Component)),y=a(76),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={tasks:[],taskText:{text:"",date:"",done:!1},dateToDo:new Date,highlightedDates:[],doneTasks:!1,undoneTasks:!1,sortByDate:"byLastDate"},a.textInput=s.a.createRef(),a.addTask=function(e){e.preventDefault();var t={text:a.state.taskText.text,date:a.state.taskText.date,done:a.state.taskText.done,dateToDo:a.state.dateToDo},n=a.state.dateToDo;""!==t.text&&a.setState({tasks:Object(i.a)(a.state.tasks).concat([t]),taskText:{text:"",date:"",done:!1},highlightedDates:Object(i.a)(a.state.highlightedDates).concat([n])})},a.deleteTask=function(e){var t=a.state.tasks.filter(function(t){return t.date!==e});a.setState({tasks:t})},a.handleInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:"radio"===t.type?t.value:{text:t.value,date:Date.now(),done:!1},s=t.name;a.setState(Object(c.a)({},s,n))},a.handleDateChange=function(e){a.setState({dateToDo:e})},a.checkLikeDone=function(e){var t=a.state.tasks.map(function(t){return t.date!==e?t:{text:t.text,date:t.date,done:!t.done,dateToDo:t.dateToDo}});a.setState({tasks:t})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y.a,{selected:this.state.dateToDo,onChange:this.handleDateChange,highlightDates:this.state.highlightedDates,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time"}),s.a.createElement(k,{addTask:this.addTask,textInput:this.textInput,handleInputChange:this.handleInputChange,sortByDate:this.state.sortByDate}),s.a.createElement(D,{entries:this.state.tasks,doneTasks:this.state.doneTasks,undoneTasks:this.state.undoneTasks,sortByDate:this.state.sortByDate,deleteTask:this.deleteTask,checkLikeDone:this.checkLikeDone}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){e.exports=a(145)},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){}},[[77,2,1]]]);
//# sourceMappingURL=main.a657ec3c.chunk.js.map