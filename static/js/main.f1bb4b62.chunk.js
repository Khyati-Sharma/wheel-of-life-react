(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{175:function(t,e,d){"use strict";d.r(e);var a=d(0),n=d.n(a),s=d(6),l=d.n(s),i=(d(72),d(9)),r=d(14),o=d(16),p=d(15),c=d(60),h=d(3),u=function(t){Object(o.a)(d,t);var e=Object(p.a)(d);function d(t){var a;return Object(i.a)(this,d),(a=e.call(this,t)).state={labels:["Friends and Family","Relationships","Wealth","Personal and Growth","Health","Fun and Recreation","Possession","Career"],datasets:[{backgroundColor:["black","#C9DE00","#2FDE00","#00A6B4","#6800B4","pink","orange","green"],data:a.props.dropped}]},a}return Object(r.a)(d,[{key:"render",value:function(){return console.log(this.state),Object(h.jsx)(c.a,{width:"400%",data:this.state,options:{legend:{display:!0,position:"right"}}})}}]),d}(n.a.Component),x=function(t){Object(o.a)(d,t);var e=Object(p.a)(d);function d(t){var a;return Object(i.a)(this,d),(a=e.call(this,t)).onDragStart=function(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.setData("text/plain",e)},a.allowDrop=function(t){t.preventDefault()},a.onDropTop=function(t){t.preventDefault();var e=t.dataTransfer.getData("text/plain"),d=a.state.dropped;d[t.target.id-1]=e,a.setState({dropped:d})},a.state=a.props.state,a}return Object(r.a)(d,[{key:"render",value:function(){for(var t=this,e=this.state,d=e.items,a=e.dropped,n=e.texts,s=[],l=0;l<n.length;l++){var i=null;a[l]&&(i=Object(h.jsx)("div",{className:"child1",id:"a"+(l+1),children:a[l]})),s.push(Object(h.jsxs)("div",{className:"tile",onDragOver:this.allowDrop,onDrop:function(e){return t.onDropTop(e)},children:[i,Object(h.jsx)("div",{className:"child2",id:l+1,children:this.state.texts[l].text})]}))}return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"labels",children:d.map((function(e){return Object(h.jsx)("p",{className:"num",draggable:"true",onDragStart:function(d){return t.onDragStart(d,e.no)},children:e.no})}))}),Object(h.jsx)("div",{className:"parent",children:s})]})}}]),d}(n.a.Component),b=d(66),j=d.n(b),f=d(63),g=d.n(f),v=d(65),m=d.n(v),O=d(189),y=d(190),w=d(44),D=d(43),k=(d(169),function(t){Object(o.a)(d,t);var e=Object(p.a)(d);function d(t){var a;return Object(i.a)(this,d),(a=e.call(this,t)).showThank=function(){D.b.success("E-mail successfully send",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},a.sendEmail=function(){var t=a.state,e=t.mail;t.data;e=a.mailInput.current.value;if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)){a.setState({mail:e});a.state.show;a.setState({show:!1}),a.showThank(),w.a.init("user_AT5nORStcFhAPLlCR9Xy2");var d={reply_to:e,reportData:a.createTemplate()};console.log(d),w.a.send("default_service","template_jblhwao",d).then((function(t){console.log(t)}),(function(t){console.log(t.text)}))}else alert("Please provide valid email address")},a.createTemplate=function(){return'<html>\n                <body>\n                    <h1>This is your Wheel Of Life</h1>\n                    <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 30%;">\n                        <tr>\n                            <th style="border: 1px solid #dddddd;  text-align: left; padding: 8px;">Area</th>\n                            <th style="border: 1px solid #dddddd;  text-align: left; padding: 8px;">Rating</th>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Friends & Family</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[0]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Relationships</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[1]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Wealth</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[2]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Personal Growth</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[3]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Health</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[4]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Fun & Recreation</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[5]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Possesion</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[6]+'</td>\n                        </tr>\n                        <tr>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 75%;">Career</td>\n                            <td style="border: 1px solid #dddddd;  text-align: left; padding: 8px; width: 25%;">'+a.props.values[7]+"</td>\n                        </tr>\n                    </table>\n                </body>\n            </html>"},a.close=function(){a.state.show;a.setState({show:!1})},a.state={mail:a.props.mail,show:a.props.show,data:{"Friends & Family":a.props.values[0],Relationships:a.props.values[1],Wealth:a.props.values[2],"Personal Growth":a.props.values[3],Health:a.props.values[4],"Fun & Recreation":a.props.values[5],Possesion:a.props.values[6],Career:a.props.values[7]}},a.mailInput=n.a.createRef(),a}return Object(r.a)(d,[{key:"sendFinalReport",value:function(t){t.preventDefault()}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.state.show?Object(h.jsx)("div",{className:"modal",children:Object(h.jsxs)(O.a,{show:this.props.show,children:[Object(h.jsxs)(O.a.Header,{children:[Object(h.jsx)(y.a,{onClick:this.close,className:"closeBtn",children:"x"}),Object(h.jsx)(O.a.Title,{id:"contained-modal-title-vcenter",children:"Send Email"})]}),Object(h.jsxs)(O.a.Body,{children:[Object(h.jsx)("p",{children:"Give your mail below so that we can send you a copy of your WHEEL OF LIFE"}),Object(h.jsx)("input",{type:"email",id:"phone",placeholder:"abc@gmail.com",ref:this.mailInput})]}),Object(h.jsx)(O.a.Footer,{children:Object(h.jsx)(y.a,{variant:"secondary",id:"off",onClick:this.sendEmail,children:"Send"})})]})}):null,Object(h.jsx)(D.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),d}(a.Component)),C=function(t){Object(o.a)(d,t);var e=Object(p.a)(d);function d(t){var a;return Object(i.a)(this,d),(a=e.call(this,t)).refreshPage=function(){window.location.reload()},a.openModal=function(){return a.setState({modalDisplay:!0})},a.state={toggleDisplay:!0,modalDisplay:!1,mail:"",items:[{no:1},{no:2},{no:3},{no:4},{no:5},{no:6},{no:7},{no:8},{no:9},{no:10}],texts:[{text:"Friends and Family"},{text:"Relationships"},{text:"Wealth"},{text:"Personal and Growth"},{text:"Health"},{text:"Fun and Recreation"},{text:"Possession"},{text:"Career"}],dropped:[null,null,null,null,null,null,null,null]},a}return Object(r.a)(d,[{key:"submit",value:function(t){1==(this.state.dropped.includes(null)?0:1)?this.setState({toggleDisplay:!1}):alert("Please fill all the tiles")}},{key:"email",value:function(t){this.setState({modalDisplay:!0})}},{key:"render",value:function(){var t=this,e=this.state,d=e.toggleDisplay,a=e.modalDisplay;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("img",{id:"logo",src:"../public/wings2life.png"}),Object(h.jsxs)("div",{id:"line",children:[Object(h.jsx)("div",{className:"head",children:"Wheel Of Life"}),d?Object(h.jsx)(g.a,{onClick:function(e){return t.submit(e)},id:"done"}):Object(h.jsx)(m.a,{id:"mail",onClick:function(e){return t.email(e)}}),Object(h.jsx)(j.a,{onClick:this.refreshPage,id:"refresh"})]})]}),Object(h.jsx)("div",{children:d?Object(h.jsx)(x,{state:this.state}):Object(h.jsx)(u,{dropped:this.state.dropped})}),Object(h.jsx)("div",{children:a?Object(h.jsx)(k,{show:a,mail:this.state.mail,labels:this.state.texts,values:this.state.dropped}):null})]})}}]),d}(n.a.Component);l.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))},72:function(t,e,d){}},[[175,1,2]]]);
//# sourceMappingURL=main.f1bb4b62.chunk.js.map