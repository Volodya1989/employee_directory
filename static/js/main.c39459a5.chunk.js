(this.webpackJsonpemployee_trucker=this.webpackJsonpemployee_trucker||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=a(2),u=a(3),s=a(5),m=a(4),i=a(16),h=a.n(i),E=function(){return h.a.get("https://randomuser.me/api/?results=100&inc=picture,name,phone,email,dob,login")},d=a(17),p=a.n(d),f=function(e){return console.log(e.results[0]),l.a.createElement("tbody",{className:""},e.results.map((function(e){return l.a.createElement("tr",{className:"table",key:e.login.uuid},l.a.createElement("td",null,l.a.createElement("img",{className:"",src:e.picture.medium,alt:""})),l.a.createElement("td",null,e.name.first," ",e.name.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",{className:"email"},l.a.createElement("a",{href:"mailto:{result.email}"},e.email)),l.a.createElement("td",null,l.a.createElement(p.a,{format:"MM/DD/YYYY"},e.dob.date)),l.a.createElement("td",null,e.dob.age))})))},y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[]},e.handleSearch=function(e){var t=e.target.value;console.log(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){console.log("Results: "+JSON.stringify(t.data.results)),e.setState({employees:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("table",{className:"employeeTable "},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Image"),l.a.createElement("th",{onClick:""},"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"DOB"),l.a.createElement("th",null,"Age"))),l.a.createElement(f,{results:this.state.employees}))}}]),a}(n.Component),g=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("h5",null,"Click on NAME or DOB heading to filter or use the search box to narrow your results."))},v=function(e){return l.a.createElement("div",{className:"wrapper"},e.children)},b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={employees:[],filteredEmployees:[]},e.handleSearch=function(e){var t=e.target.value;console.log(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){console.log("Results: "+JSON.stringify(t.data.results)),e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement(v,null,l.a.createElement(g,null),l.a.createElement("form",null,l.a.createElement("input",{className:"search",placeholder:"search",onChange:function(t){return e.handleSearch(t)}})),l.a.createElement(y,null))}}]),a}(n.Component);var N=function(){return l.a.createElement("div",{className:"container "},l.a.createElement(b,null))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c39459a5.chunk.js.map