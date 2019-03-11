(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),i=(a(28),a(3)),l=a(4),s=a(6),m=a(5),u=a(7),d=(a(29),a(43)),h=a(42),b=a(10);a(30);function f(e){return c.a.createElement("button",{onClick:function(t){t.preventDefault(),e.clickFunc()},className:e.deleteBtn?"btn delete":"btn"},c.a.createElement("span",{className:e.deleteBtn?"btn__text delete__text":"btn__text"},e.buttonText))}var p=a(18),v=a(13),E=Object(n.createContext)(),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={contacts:[]},a.addContact=function(e){var t=e.name,n=e.number,c=e.id;a.setState(function(e){return{contacts:[].concat(Object(v.a)(e.contacts),[{name:t,number:n,id:c}])}})},a.deleteContact=function(e){a.setState({contacts:a.state.contacts.filter(function(t){return t.id!==e})})},a.editContact=function(e,t){var n=a.state.contacts.map(function(a){return a.id===e?Object(p.a)({},a,t):a});a.setState({contacts:Object(v.a)(n)})},a.findContact=function(e){return a.state.contacts.find(function(t){return t.id===e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(E.Provider,{value:{contacts:this.state.contacts,addContact:this.addContact,deleteContact:this.deleteContact,findContact:this.findContact,editContact:this.editContact}},this.props.children)}}]),t}(n.Component),_=a(44),O=a(19),j=a.n(O),y=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:"",error:""},a.onChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onBackButtonClick=function(){a.props.history.push("/")},a.onSubmit=function(){var e={name:a.state.name,number:a.state.number,id:j()()};a.state.name&&a.state.number?(a.context.addContact(e),a.props.history.push("/")):a.setState({error:"the Fields Cannot Be Left Empty"})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{buttonText:"Go Back",clickFunc:this.onBackButtonClick}),c.a.createElement("div",{className:"heading",style:{fontSize:"2rem",color:"blue",textAlign:"center"}},"Add Contact Here"),c.a.createElement("form",{className:"form"},c.a.createElement("div",{className:"form__values"},c.a.createElement("label",{htmlFor:"name",className:"form__label"},"Name"),c.a.createElement("input",{className:"form__input",value:this.state.name,name:"name",type:"text",onChange:this.onChange})),c.a.createElement("div",{className:"form__values"},c.a.createElement("label",{htmlFor:"number",className:"form__label"},"Number"),c.a.createElement("input",{className:"form__input",value:this.state.number,name:"number",type:"text",onChange:this.onChange}))),c.a.createElement("div",{className:"input__data"}," name : ",this.state.name),c.a.createElement("div",{className:"input__data"}," number : ",this.state.number),c.a.createElement(f,{clickFunc:this.onSubmit,buttonText:"Add Contact"}),this.state.error?c.a.createElement("span",{className:"error"},this.state.error):"")}}]),t}(n.Component)),N=Object(_.a)(y);N.WrappedComponent.contextType=E;var k=N,g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"form__container"},c.a.createElement(k,null))}}]),t}(n.Component),x=(a(36),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(e){a.context.deleteContact(e)},a.onEditBtnClick=function(e){a.props.history.push("/edit/".concat(e))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.number,r=t.id;return c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"contact__text"}," Name : ",a),c.a.createElement("div",{className:"contact__text"}," Number : ",n),c.a.createElement(f,{buttonText:"Edit",clickFunc:function(){e.onEditBtnClick(r)}}),c.a.createElement(f,{deleteBtn:!0,buttonText:"delete",clickFunc:function(){e.onClick(r)}}))}}]),t}(c.a.Component));x.contextType=E;var w=Object(_.a)(x),B=(a(37),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).onClick=function(e){a.props.history.push("add")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(E.Consumer,null,function(t){var a=t.contacts;return c.a.createElement("div",{className:"home"},c.a.createElement(f,{buttonText:"Add Contact",clickFunc:e.onClick}),0===a.length?c.a.createElement("div",{className:"home__heading"},"no Contacts Add A Contact TO View It Here"):a.map(function(e){return c.a.createElement(w,{key:e.id,contact:e})}))})}}]),t}(n.Component));a(38);function F(){return c.a.createElement("div",{className:"header"},c.a.createElement("h3",{className:"heading"},"Phone Directory"))}var A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:"",id:""},a.onChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e={name:a.state.name,number:a.state.number};a.state.name&&a.state.number?(a.context.editContact(a.state.id,e),a.props.history.push("/")):a.setState({error:"the Fields Cannot Be Left Empty"})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.context.findContact(this.props.match.params.id);this.setState({name:e.name,number:e.number,id:e.id})}},{key:"render",value:function(){return c.a.createElement("div",{className:"form__container"},c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{buttonText:"Go Back",clickFunc:this.onBackButtonClick}),c.a.createElement("div",{className:"heading",style:{fontSize:"2rem",color:"blue",textAlign:"center"}},"Add Contact Here"),c.a.createElement("form",{className:"form"},c.a.createElement("div",{className:"form__values"},c.a.createElement("label",{htmlFor:"name",className:"form__label"},"Name"),c.a.createElement("input",{className:"form__input",value:this.state.name,name:"name",type:"text",onChange:this.onChange})),c.a.createElement("div",{className:"form__values"},c.a.createElement("label",{htmlFor:"number",className:"form__label"},"Number"),c.a.createElement("input",{className:"form__input",value:this.state.number,name:"number",type:"text",onChange:this.onChange}))),c.a.createElement("div",{className:"input__data"}," name : ",this.state.name),c.a.createElement("div",{className:"input__data"}," number : ",this.state.number),c.a.createElement(f,{clickFunc:this.onSubmit,buttonText:"Add Contact"}),this.state.error?c.a.createElement("span",{className:"error"},this.state.error):""))}}]),t}(n.Component);A.contextType=E;var S=A,T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(C,null,c.a.createElement("div",{className:"container"},c.a.createElement(F,null),c.a.createElement(d.a,{basename:"/upgrad"},c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{exact:!0,path:"/",component:B}),c.a.createElement(h.a,{exact:!0,path:"/add",component:g}),c.a.createElement(h.a,{exact:!0,path:"/edit/:id",component:S})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.24130304.chunk.js.map