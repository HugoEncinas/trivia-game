(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(71)},61:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),u=n.n(c),o=(n(61),n(19)),i=n(20),s=n(24),l=n(21),f=n(25),m=n(86),p=n(88),h=n(87),b=n(23),v=n(52),d=n(16),E=n(53),O=n(44),j=n.n(O),w="BEGIN_TRIVIA",y="SET_RESULTS",g="TRACK_ANSWER",k="CHANGE_QUESTION",T={begin:!1,results:[{category:"",type:"",difficulty:"",question:"",correct_answer:"",incorrect_answers:[""]}]},q={currentQuestion:1,answersTrack:[]},_={home:T,quiz:q},x=n(37),Q=n(31);var N=Object(d.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(Q.a)({},e,{begin:!0});case y:return Object(Q.a)({},e,{results:Object(x.a)(t.results)});default:return e}},quiz:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(Q.a)({},e,{answersTrack:[].concat(Object(x.a)(e.answersTrack),[t.answer])});case k:return Object(Q.a)({},e,{currentQuestion:e.currentQuestion+1});default:return e}}}),A=function(e,t){return"RESET_TRIVIA"===t.type&&(e=_),N(e,t)},C=n(14),H=n.n(C),S=n(29),I=n(45),z=n(46),R=function(){var e=Object(z.a)(H.a.mark(function e(t){var n,r;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",e.next=4,fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),W=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a={type:e};return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return n.forEach(function(e,r){a[n[r]]=t[r]}),a}};function P(e){Ae.push(e)}var D=W(w),V=W(y,"results"),X=W(g,"answer"),B=W(k),G=W("RESET_TRIVIA"),L=H.a.mark(F),U=H.a.mark(M);function F(e){var t;return H.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return Object(I.a)(e),n.prev=1,n.next=4,Object(S.b)(R,{});case 4:return t=n.sent,n.next=7,Object(S.c)(V(t.results));case 7:return n.next=9,Object(S.b)(P,"/quiz");case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:case"end":return n.stop()}},L,null,[[1,11]])}function M(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.d)(w,F);case 2:case"end":return e.stop()}},U)}var Y=H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([M()]);case 2:case"end":return e.stop()}},e)}),J=function(){var e=Object(E.a)(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})||d.d,n=Object(d.e)(A,_,t(Object(d.a)(j.a,e)));return e.run(Y),n},K=n(84),$=n(85),Z=n(10),ee=n(11);function te(){var e=Object(Z.a)(["\n  color: #fff;\n  background-color: #3f51b5;\n"]);return te=function(){return e},e}function ne(){var e=Object(Z.a)(["\n  color: #dedede;\n"]);return ne=function(){return e},e}function re(){var e=Object(Z.a)(["\n  color: #dedede;\n"]);return re=function(){return e},e}function ae(){var e=Object(Z.a)([""]);return ae=function(){return e},e}var ce=ee.a.div(ae()),ue=ee.a.h4(re()),oe=ee.a.h5(ne()),ie=(ee.a.button(te()),function(e){var t=e.beginHandler;return a.a.createElement(K.a,{className:"container"},a.a.createElement(ce,null,a.a.createElement(ue,{className:"title"},"Welcome to the Trivia Challenge!")),a.a.createElement(ce,null,a.a.createElement(oe,{className:"subtitle"},"You will be presented with 10 True or False questions.")),a.a.createElement(ce,null,a.a.createElement(oe,{className:"subtitle"},"Can you score 100%?")),a.a.createElement(ce,null,a.a.createElement($.a,{variant:"contained",color:"primary",onClick:t},"BEGIN")))}),se=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).beginHandler=function(e){(0,n.props.beginTrivia)()},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(ie,{beginHandler:this.beginHandler})}}]),t}(r.PureComponent),le={beginTrivia:D},fe=Object(b.b)(function(e){return{}},le)(se);function me(){var e=Object(Z.a)(["\n  margin-right: 16px !important;\n"]);return me=function(){return e},e}var pe=Object(ee.a)($.a)(me()),he=function(e){var t=e.question,n=e.currentQuestion,r=e.questionHandler;return a.a.createElement("div",null,a.a.createElement("h1",null,t.category),a.a.createElement("h2",null,t.question),a.a.createElement("p",null,n," of 10"),a.a.createElement(pe,{variant:"contained",color:"primary",onClick:function(e){return r(e,"True")}},"True"),a.a.createElement(pe,{variant:"contained",color:"primary",onClick:function(e){return r(e,"False")}},"False"))},be=function(e){var t=e.question,n=e.currentQuestion,r=e.questionHandler;return a.a.createElement(K.a,{maxWidth:"sm",className:"container"},a.a.createElement(he,{question:t,currentQuestion:n,questionHandler:r}))},ve=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).questionHandler=function(e,t){var r=n.props,a=r.results,c=r.currentQuestion,u=r.trackAnwser,o=r.changeQuestion,i=r.history;a[c-1].correct_answer===t?u(!0):u(!1),c<10?o():i.push("/results")},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.results,n=e.currentQuestion;return a.a.createElement(be,{question:t[n-1],currentQuestion:n,questionHandler:this.questionHandler})}}]),t}(r.PureComponent),de={trackAnwser:X,changeQuestion:B},Ee=Object(b.b)(function(e){return{results:e.home.results,currentQuestion:e.quiz.currentQuestion}},de)(ve);function Oe(){var e=Object(Z.a)(["\n  margin-bottom: 16px;\n  color: ",";\n  &:before {\n    margin-right: 4px;\n    content: '","';\n  }\n"]);return Oe=function(){return e},e}var je=ee.a.li(Oe(),function(e){return"true"==e.result?"green":"red"},function(e){return"true"==e.result?"\u2713":"X"}),we=function(e){var t=e.question,n=e.result;return a.a.createElement(je,{result:n.toString()},a.a.createElement("span",null,a.a.createElement("i",{className:"fas fa-plus"}),t.question),a.a.createElement("div",null,"Correct Answer: ",t.correct_answer))};function ye(){var e=Object(Z.a)(["\n  list-style: none;\n"]);return ye=function(){return e},e}function ge(){var e=Object(Z.a)(["\n  justify-content: flex-start;\n"]);return ge=function(){return e},e}var ke,Te=Object(ee.a)(K.a)(ge()),qe=ee.a.ul(ye()),_e=function(e){var t=e.answersTrack,n=e.questions,r=e.score,c=e.restartQuizHandler;return a.a.createElement(Te,{maxWidth:"sm",className:"container"},a.a.createElement("div",null,a.a.createElement("h1",null,"You scored"),a.a.createElement("h1",null,r,"/10")),a.a.createElement("div",null,a.a.createElement(qe,null,n.map(function(e,n){return a.a.createElement(we,{question:e,result:void 0!==t[n]&&t[n],key:n})}))),a.a.createElement($.a,{variant:"contained",color:"secondary",onClick:c,fullWidth:!1},"PLAY AGAIN?"))},xe=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).restartQuizHandler=function(){var e=n.props,t=e.history;(0,e.resetTrivia)(),t.push("/")},n.state={score:0},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.answersTrack.filter(function(e){return!0===e}).length;this.setState({score:e})}},{key:"render",value:function(){var e=this.props,t=e.answersTrack,n=e.questions,r=this.state.score;return a.a.createElement(_e,{answersTrack:t,questions:n,score:r,restartQuizHandler:this.restartQuizHandler})}}]),t}(r.PureComponent),Qe={resetTrivia:G},Ne=Object(b.b)(function(e){return{questions:e.home.results,answersTrack:e.quiz.answersTrack}},Qe)(xe);n(69);!function(e){e.home="/",e.quiz="/quiz",e.results="/results"}(ke||(ke={}));var Ae=Object(v.a)(),Ce=J(),He=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,{store:Ce},a.a.createElement(m.a,{history:Ae},a.a.createElement(p.a,null,a.a.createElement(h.a,{path:ke.home,exact:!0,component:fe}),a.a.createElement(h.a,{path:ke.quiz,component:Ee}),a.a.createElement(h.a,{path:ke.results,component:Ne}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[56,1,2]]]);
//# sourceMappingURL=main.9d1fae60.chunk.js.map