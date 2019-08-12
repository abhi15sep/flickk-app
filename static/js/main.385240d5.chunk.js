(window.webpackJsonpflickk=window.webpackJsonpflickk||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/404.c35f1447.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/tmdb.02a9430b.svg"},39:function(e,t,a){e.exports=a(52)},44:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),i=(a(44),a(5)),s=a(6),l=a(9),m=a(7),u=a(10),p=(a(45),a(14)),d=a(15),g=a(18),h=a(28),b=a(54),f=a(57),v=a(55),y=a(56),E=a(58),k=a(29),j=a.n(k),O=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.onChange;return r.a.createElement("div",null,r.a.createElement("input",{style:{padding:"0.5rem 1rem",display:"block",width:"100%",background:"rgba(0, 0, 0, 0.9)",outline:"none",border:"2px solid black",color:"#bbbbbb"},onChange:e,type:"text",placeholder:"Search..."}))}}]),t}(n.Component),w="https://api.themoviedb.org/3/person/",S="https://api.themoviedb.org/3/movie/popular?api_key=",x="https://api.themoviedb.org/3/search/movie?api_key=",I="&query=",B="df6f6314c5440cba12e1c99403e78dc3",N="&page=";function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],isLoading:!0,searchQuery:"",pageNum:1},a.searchMovies=function(e){var t=e.target.value.trim();if(""===t)if(document.getElementById("popular-or-results").innerText="Popular Movies",document.getElementById("load-more-btn").style.display="block",sessionStorage.getItem("BaseState")){var n=JSON.parse(sessionStorage.getItem("BaseState"));a.setState(_({},n)),console.log("from session storage")}else fetch("".concat(S).concat(B)).then(function(e){return e.json()}).then(function(e){a.setState({movies:e.results},function(){""===t&&(sessionStorage.setItem("BaseState",JSON.stringify(a.state)),console.log("saved data to session storage"))})}).catch(function(e){return console.error(e)});else fetch("".concat(x).concat(B).concat(I).concat(t)).then(function(e){return e.json()}).then(function(e){a.setState({movies:e.results,pageNum:1})}).catch(function(e){return console.error(e)}),document.getElementById("popular-or-results").innerText="Results",document.getElementById("load-more-btn").style.display="none"},a.fetchMoreMovies=function(){var e=a.state,t=e.movies,n=e.pageNum;fetch("".concat(S).concat(B).concat(N).concat(n+1)).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(g.a)(t),Object(g.a)(e.results)),pageNum:e.page})}).catch(function(e){return console.error(e)})},a.addDefaultSrcToImg=function(e){e.target.src=j.a},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.movies;if(sessionStorage.getItem("BaseState")){var a=JSON.parse(sessionStorage.getItem("BaseState"));this.setState(_({},a)),console.log("from session storage")}else fetch("".concat(S).concat(B).concat(N).concat(this.state.pageNum)).then(function(e){return e.json()}).then(function(a){e.setState({isLoading:!1,movies:[].concat(Object(g.a)(t),Object(g.a)(a.results))},function(){sessionStorage.setItem("BaseState",JSON.stringify(e.state)),console.log("saved data to session storage")})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state.movies.map(function(t){return r.a.createElement(b.a,{key:t.id,xs:12,sm:6,md:4,lg:3},r.a.createElement(p.b,{to:"/movie/"+t.id},r.a.createElement(f.a,{bg:"dark",text:"white",className:"mb-3"},r.a.createElement(f.a.Img,{variant:"top",alt:t.title,src:"".concat("https://image.tmdb.org/t/p/").concat("w342").concat(t.poster_path),onError:e.addDefaultSrcToImg}),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,{style:{fontSize:"1rem"}},t.title),r.a.createElement(f.a.Text,null,"Rating: ",t.vote_average)))))});return r.a.createElement(v.a,null,r.a.createElement("h2",{style:{margin:"1rem"}},"Search"),r.a.createElement(O,{onChange:this.searchMovies}),r.a.createElement("h2",{id:"popular-or-results",style:{margin:"1rem"}},"Popular Movies"),r.a.createElement(y.a,null,t),r.a.createElement(E.a,{id:"load-more-btn",onClick:this.fetchMoreMovies,variant:"success",size:"lg",block:!0},"Load More Movies"))}}]),t}(n.Component),D=a(34),C=a.n(D),P=a(59),A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"",style:{background:"rgba(0, 0, 0, 0.9)",color:"#eeeeee"}},r.a.createElement("header",{className:"App-header",style:{display:"grid",gridTemplateColumns:"auto auto"}},r.a.createElement("h1",{style:{fontSize:"1.75rem",textAlign:"left",display:"inline-block",margin:"0.5rem 1rem",userSelect:"none"},id:"title"},r.a.createElement("span",null,r.a.createElement(P.a,{id:"flickk-icon",style:{height:"2rem",verticalAlign:"bottom"}})),"Flickk"),r.a.createElement("span",{style:{textAlign:"right",verticalAlign:"super",margin:"0.5rem 1rem",fontWeight:"bold"},id:"tmdb-logo"},r.a.createElement("a",{style:{textDecoration:"none",color:"#eeeeee",userSelect:"none"},href:"http://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},"Powered by"," ",r.a.createElement("img",{src:C.a,alt:"www.themoviedb.org",style:{height:"2.5rem",verticalAlign:"middle"}})))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",cast:[],backdrop:"",budget:"",genres:[],homepage:"",overview:"",release:"",runtime:"",status:"",tagline:"",vote:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieID;fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t).concat("/credits?api_key=").concat(B)).then(function(e){return e.json()}).then(function(t){return e.setState({cast:t.cast})}).catch(function(e){return console.error(e)}),fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(B)).then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,backdrop:t.backdrop_path,budget:t.budget,genres:t.genres,homepage:t.homepage,overview:t.overview,release:t.release_date,runtime:t.runtime,status:t.status,tagline:t.tagline,vote:t.vote_average})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.backdrop,n=e.budget,o=e.genres,c=e.homepage,i=e.overview,s=e.release,l=e.runtime,m=e.status,u=e.tagline,d=e.vote,g=e.cast,h=o.map(function(e){return e.name}).join(", "),b=g.map(function(e){return r.a.createElement(p.b,{key:e.id,to:"/cast/"+e.id},r.a.createElement("span",null,e.name,",\xa0"))});return r.a.createElement("div",{className:"container-div",style:{padding:"2rem 1rem",background:"#222222",borderRadius:0}},r.a.createElement(v.a,{style:{background:"#222222",borderRadius:0}},r.a.createElement(f.a,{className:"bg-dark text-white"},r.a.createElement(f.a.Title,{style:{fontSize:"1.5rem",background:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",color:"#cccccc",margin:0,paddingTop:"0.5rem"},className:"align-middle text-center pb-2 m-0"},t),r.a.createElement(f.a.Text,{style:{color:"#cccccc",background:"rgba(0, 0, 0, 0.5)",fontSize:"1rem"},className:"m-0 pb-2"},u),r.a.createElement(f.a.Img,{src:"https://image.tmdb.org/t/p/w1280/"+a,alt:t}),r.a.createElement(f.a.ImgOverlay,null),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Text,null,i)),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Text,null,"Status: ",m," | Release: ",s," | Runtime: ",l),r.a.createElement(f.a.Text,null,"Rating: ",d," | Genres: ",h),r.a.createElement(f.a.Text,null,"Budget: ",n))),r.a.createElement(f.a.Body,null,"Cast: ",b),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c},"Visit Movie Website")))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",birth:"",dept:"",img:"",bio:"",movies:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.personID;fetch("".concat(w).concat(t,"?api_key=").concat(B)).then(function(e){return e.json()}).then(function(t){return e.setState({name:t.name,birth:t.birthday||"Unknown",dept:t.known_for_department||"Unknown",bio:t.biography||"Information Not Found!",img:t.profile_path})}).catch(function(e){return console.error(e)}),fetch("".concat(w).concat(t,"/movie_credits?api_key=").concat(B)).then(function(e){return e.json()}).then(function(t){return e.setState({movies:t.cast})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.birth,o=e.dept,c=e.img,i=e.bio,s=e.movies.map(function(e){return r.a.createElement(p.b,{key:e.id,to:"/movie/"+e.id},r.a.createElement("span",null,e.title,",\xa0"))});return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-div",style:{padding:"1rem 0",background:"#222222",borderRadius:0}},r.a.createElement(v.a,null,r.a.createElement(f.a,{style:{maxWidth:"500px",background:"#000000",display:"block",margin:"auto",border:"2px solid black"}},r.a.createElement(f.a.Img,{style:{borderRadius:0,height:"auto",width:"100%",maxWidth:"300px"},src:"".concat("https://image.tmdb.org/t/p/original/").concat(c)}),r.a.createElement(f.a.Body,{style:{border:"2px solid #cccccc"}},r.a.createElement(f.a.Title,null,t),r.a.createElement(f.a.Text,null,"Birthday: ",a),r.a.createElement(f.a.Text,null,"Work: ",o),r.a.createElement(f.a.Text,null,"Biography: ",i)),r.a.createElement(f.a.Body,null,"Movies: ",s)))))}}]),t}(n.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/"},r.a.createElement(n.Fragment,null,r.a.createElement(A,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:M}),r.a.createElement(d.a,{exact:!0,path:"/movie/:movieID",component:R}),r.a.createElement(d.a,{exact:!0,path:"/cast/:personID",component:W}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.385240d5.chunk.js.map