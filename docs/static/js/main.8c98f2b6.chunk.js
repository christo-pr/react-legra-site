(this["webpackJsonpreact-legra-site"]=this["webpackJsonpreact-legra-site"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),c=(n(10),{Line:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.Line from={[1, 1]} to={[4, 4]} options={{ color: 'green' }} />\n        </Board>\n      )\n    }\n  ",Linear:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.Linear points={[[1, 1], [4, 1], [1, 4], [4, 4]]}/>\n        </Board>\n      )\n    }\n  ",Circle:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.Circle center={[3, 3]} radius={2} />\n        </Board>\n      )\n    }\n  ",Ellipse:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.Ellipse center={[8, 8]} vAxis={2} hAxis={3} />\n        </Board>\n      )\n    }\n  ",Image:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.Image src=\"/cat.jpg\" bs={15} />\n        </Board>\n      )\n    }\n  ",Rectangle:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Rectangle start={[5, 3]} width={5} height={12} options={{ filled: true }}/>\n        </Board>\n      )\n    }\n  ",Polygon:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n      const vertices = [\n        [3, 1],\n        [3, 8],\n        [10, 1],\n        [10, 8]\n      ]\n\n      return (\n        <Board>\n          <Board.Polygon vertices={vertices} options={{ color: 'yellow' }} />\n        </Board>\n      )\n    }\n  ",Arc:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.Arc\n            center={[10, 3]}\n            vAxis={4}\n            hAxis={5}\n            start={Math.PI}\n            stop={Math.PI * .5}\n           />\n        </Board>\n      )\n    }\n  ",Bezier:"\n    import React from 'react'\n    import Board from 'react-legra'\n\n    function Example () {\n\n      return (\n        <Board>\n          <Board.BezierCurve\n            from={[10,5]}\n            to={[20, 20]}\n            controlPointX={[8, 30]}\n            controlPointY={[18, 1]}\n          />\n        </Board>\n      )\n    }\n  ",ConfigProps:"\n    options: { // To control the look and feel of the component\n      filled?: false,\n      color?: blue\n    },\n    bs: 24 // Brick size, default to 24\n  "}),i=n(2),m=n(1);var s=function(e){var t=e.value,n=e.setValue;return r.a.createElement("div",{className:"slidecontainer mx-auto text-center"},r.a.createElement("small",null,"Brick size: ",t),r.a.createElement("input",{type:"range",min:"10",value:t,max:"50",onChange:function(e){return n(e.target.value)},className:"slider"}))};var d=function(e){var t=e.component,n=c[t];return r.a.createElement("pre",{className:"language-jsx"},r.a.createElement("code",{className:"language-jsx"},n))};var p=function(e){var t=e.component,n=e.title,a=e.componentProps,o=void 0===a?{}:a,l=e.description,c=e.code,i=e.controls;return r.a.createElement("div",{className:"w-full lg:flex justify-between"},r.a.createElement("div",{className:"code-card border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal"},r.a.createElement("div",{className:"mb-8"},r.a.createElement("div",{className:"border-l-4 border-blue-700 text-black p-4",role:"alert"},r.a.createElement("h4",{className:"font-bold text-2xl mb-2"},n),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:l}})),r.a.createElement("table",{className:"table-props"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"prop"),r.a.createElement("th",null,"type"),r.a.createElement("th",null,"default"))),r.a.createElement("tbody",null,Object.keys(o).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",{align:"center"},e,o[e][2]&&r.a.createElement("strong",null,r.a.createElement("small",null," (required)"))),r.a.createElement("td",{align:"center"},o[e][0]),r.a.createElement("td",{align:"center"},o[e][1]))})))),c)),r.a.createElement("div",{className:"flex-none bg-cover overflow-hidden ml-8"},i,r.a.createElement("div",{className:"border border-blue-700"},t)))};var u=function(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:"500",height:"500"},r.a.createElement(m.f.Line,{from:[1,1],to:[4,4],bs:n,options:{color:"green"}})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Line"});return r.a.createElement(p,{title:"Line Component",description:"\n        Draw a line from point <strong>a<strong> <i>(x1, y1)</i>\n        to point <strong>b<strong> <i>(x2, y2)</i>\n      ",component:l,code:u,componentProps:{from:["Array[x, y]","-",!0],to:["Array[x, y]","-",!0]},controls:c})};function E(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:"500",height:"500"},r.a.createElement(m.c,{bs:n,points:[[2,1],[12,1],[1,10],[12,10]]})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Linear"});return r.a.createElement(p,{title:"Linear Path Component",description:"Draw a set of lines connecting the specified points. `points` is an array of arrays of points `(x, y)`.",code:u,componentProps:{points:["Array[ [x1, y1], [x2, y2], ... ]","-",!0]},component:l,controls:c})}function h(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:"500",height:"500"},r.a.createElement(m.a,{bs:n,center:[9,8],radius:4})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Circle"});return r.a.createElement(p,{title:"Cricle Component",description:" Draw a circle from the `center` point and with the given `radius",component:l,code:u,componentProps:{center:["Array[x, y]","-",!0],radius:["Interger","10"]},controls:c})}function f(){var e=Object(a.useState)(15),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:500,height:500},r.a.createElement(m.b,{src:"/cat.jpg",bs:8,width:500,height:500})),c=(r.a.createElement(s,{value:n,setValue:o}),r.a.createElement(d,{component:"Image"}));return r.a.createElement(p,{title:"Image Component",description:"Draw an image with Legos!!!",code:c,componentProps:{src:["String","-",!0]},component:l})}function g(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:500,height:500},r.a.createElement(m.e,{bs:n,start:[5,3],width:5,height:12,options:{filled:!0}})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Rectangle"});return r.a.createElement(p,{title:"Rectangle Component",description:"Draw a rectangle given the top-left coordenates [x, y] (`start`) as the center point and with the specified `width` and `height`.",code:u,componentProps:{start:["Array[x, y]","-",!0],width:["Integer","-",!0],height:["Integer","-",!0]},component:l,controls:c})}function v(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:"500",height:"500"},r.a.createElement(m.d,{bs:n,vertices:[[3,1],[3,8],[10,1],[10,8]],options:{color:"yellow"}})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Polygon"});return r.a.createElement(p,{title:"Polygon Component",description:"Draw a polygon with the given `vertices`",code:u,componentProps:{vertices:["Array[ [x1, y1], [x2, y2] ]","-",!0]},component:l,controls:c})}function b(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:"500",height:"500"},r.a.createElement(m.f.Ellipse,{bs:n,center:[8,8],vAxis:4,hAxis:7})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Ellipse"});return r.a.createElement(p,{title:"Ellipse Component",description:"Draw an ellipse from the `center` point and the horizontal and vertical axis lenght controlled by `hAxis` and `vAxis` props",code:u,componentProps:{center:["Array[x, y]","-",!0],vAxis:["Interger","-",!0],hAxis:["Interger","-",!0]},component:l,controls:c})}function x(){var e=Object(a.useState)(24),t=Object(i.a)(e,2),n=t[0],o=t[1],l=r.a.createElement(m.f,{width:500,height:500},r.a.createElement(m.f.Arc,{bs:n,center:[10,3],vAxis:4,hAxis:5,start:Math.PI,stop:.5*Math.PI})),c=r.a.createElement(s,{value:n,setValue:o}),u=r.a.createElement(d,{component:"Arc"});return r.a.createElement(p,{title:"Arc Component",description:"An arc is just a **section** of an ellipse controlled by the additional `start` and `stop` props which represent the angle of the arc, also you can _'close'_ the arc form by these 2 points with the `filled` prop set to true",component:l,code:u,componentProps:{points:["Array[ [x1, y1] , [x2, y1], ... ]","-",!0]},controls:c})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"content"},r.a.createElement("section",{className:"container mx-auto hero h-64 mt-5"},r.a.createElement("div",{className:"min-h-full flex text-center"},r.a.createElement("div",{className:"flex-1 self-center hero-react"},r.a.createElement("p",null,"React")),r.a.createElement("div",{className:"flex-1 self-start"},r.a.createElement("img",{className:"self-center legra-logo mx-auto",src:"/react-site.png",alt:"legrajs & reactjs",height:"200"})),r.a.createElement("div",{className:"flex-1 self-center hero-legra"},r.a.createElement("p",null,"Legra")))),r.a.createElement("section",{className:"container mx-auto mt-20"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"flex-none"},r.a.createElement("img",{className:"rl-icon",src:"/favicon.png",alt:"legra icon",width:"45"})),r.a.createElement("h1",null,"React legra")),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"This lib is a react wrapper around ",r.a.createElement("a",{href:"https://legrajs.com"},"LegraJS"),", so far the api is very similar and we'll try to add a little bit more functionality over the time")),r.a.createElement("hr",null),r.a.createElement("div",{className:"installation"},r.a.createElement("h2",null,"Installation"),r.a.createElement("pre",{className:"language-bash"},r.a.createElement("code",null,"yarn add react-legra"))),r.a.createElement("div",{className:"installation"},r.a.createElement("h2",null,"Usage"),r.a.createElement("p",null,"To start drawing, you first need to create a canvas to draw on, the ",r.a.createElement("code",{className:"language-jsx"},"<Board />")," component will do that for you."),r.a.createElement("p",null,"All the components but ",r.a.createElement("code",{className:"language-jsx"},"<Board />"),", recieve (optionally) some configuration props:"),r.a.createElement("pre",{className:"language-js default-props"},r.a.createElement("code",null,c.ConfigProps)))),r.a.createElement("section",{className:"container mx-auto mt-10"},r.a.createElement("h2",null,"Components"),r.a.createElement("div",{className:"components-samples"},r.a.createElement("div",{className:"block my-10"},r.a.createElement(u,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(E,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(h,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(f,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(g,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(v,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(b,null)),r.a.createElement("div",{className:"block my-10"},r.a.createElement(x,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.8c98f2b6.chunk.js.map