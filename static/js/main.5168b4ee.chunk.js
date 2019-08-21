(window.webpackJsonpflickk=window.webpackJsonpflickk||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/404.c35f1447.jpg"},34:function(e,t,n){e.exports=n.p+"static/media/tmdb.02a9430b.svg"},39:function(e,t,n){e.exports=n(52)},44:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),c=n.n(o),i=(n(44),n(5)),l=n(6),s=n(9),u=n(7),m=n(10),d=(n(45),n(14)),g=n(15),p=n(19),h=n(29),f=n(54),b=n(57),v=n(55),y=n(56),E=n(58),k=n(17),j=n.n(k),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onChange;return r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Search Movies",style:{padding:"0.5rem 1rem",display:"block",width:"100%",background:"rgba(0, 0, 0, 0.9)",outline:"none",border:"2px solid black",color:"#bbbbbb"},onChange:e,type:"text",placeholder:"Search..."}))}}]),t}(a.Component),O="https://api.themoviedb.org/3/person/",S="https://api.themoviedb.org/3/movie/popular?api_key=",x="https://api.themoviedb.org/3/search/movie?api_key=",I="&query=",T="df6f6314c5440cba12e1c99403e78dc3",B="&page=";function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){Object(h.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var D=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],isLoading:!0,searchQuery:"",pageNum:1},n.searchMovies=function(e){var t=e.target.value.trim();if(""===t)if(document.getElementById("popular-or-results").innerText="Popular Movies",document.getElementById("load-more-btn").style.display="block",sessionStorage.getItem("BaseState")){var a=JSON.parse(sessionStorage.getItem("BaseState"));n.setState(M({},a)),console.log("from session storage")}else fetch("".concat(S).concat(T)).then(function(e){return e.json()}).then(function(e){n.setState({movies:e.results},function(){""===t&&(sessionStorage.setItem("BaseState",JSON.stringify(n.state)),console.log("saved data to session storage"))})}).catch(function(e){return console.error(e)});else fetch("".concat(x).concat(T).concat(I).concat(t)).then(function(e){return e.json()}).then(function(e){n.setState({movies:e.results,pageNum:1})}).catch(function(e){return console.error(e)}),document.getElementById("popular-or-results").innerText="Results",document.getElementById("load-more-btn").style.display="none"},n.fetchMoreMovies=function(){var e=n.state,t=e.movies,a=e.pageNum,r=document.getElementById("load-more-btn");r.innerText="Load More Movies",fetch("".concat(S).concat(T).concat(B).concat(a+1)).then(function(e){return e.json()}).then(function(e){n.setState({movies:[].concat(Object(p.a)(t),Object(p.a)(e.results)),pageNum:e.page})}).catch(function(e){console.error(e),r.innerText="Couldn't Load Movies"})},n.addDefaultSrcToImg=function(e){e.target.onError=null,e.target.src=j.a,console.log("Image not found!")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.movies;if(sessionStorage.getItem("BaseState")){var n=JSON.parse(sessionStorage.getItem("BaseState"));this.setState(M({},n)),console.log("from session storage")}else fetch("".concat(S).concat(T).concat(B).concat(this.state.pageNum)).then(function(e){return e.json()}).then(function(n){e.setState({isLoading:!1,movies:[].concat(Object(p.a)(t),Object(p.a)(n.results))},function(){sessionStorage.setItem("BaseState",JSON.stringify(e.state)),console.log("saved data to session storage")})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state.movies.map(function(t){return r.a.createElement(f.a,{key:t.id,xs:12,sm:6,md:4,lg:3},r.a.createElement(d.b,{to:"/movie/"+t.id},r.a.createElement(b.a,{bg:"dark",text:"white",className:"mb-3"},r.a.createElement(b.a.Img,{variant:"top",alt:t.title,src:"".concat("https://image.tmdb.org/t/p/").concat("w342").concat(t.poster_path),onError:e.addDefaultSrcToImg}),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,{style:{fontSize:"1rem"}},t.title),r.a.createElement(b.a.Text,null,"Rating: ",t.vote_average)))))});return r.a.createElement(v.a,null,r.a.createElement("h2",{style:{margin:"1rem"}},"Search"),r.a.createElement(w,{onChange:this.searchMovies}),r.a.createElement("h2",{id:"popular-or-results",style:{margin:"1rem"}},"Popular Movies"),r.a.createElement(y.a,null,t),r.a.createElement(E.a,{id:"load-more-btn",onClick:this.fetchMoreMovies,variant:"dark",size:"lg",block:!0},"Load More Movies"))}}]),t}(a.Component),C=n(34),_=n.n(C),A=n(59),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"",style:{background:"rgba(0, 0, 0, 0.9)",color:"#eeeeee"}},r.a.createElement("header",{className:"App-header",style:{display:"grid",gridTemplateColumns:"auto auto"}},r.a.createElement(d.b,{to:"/",style:{textAlign:"left",color:"#dddddd"}},r.a.createElement("h1",{style:{fontSize:"1.75rem",textAlign:"left",display:"inline-block",margin:"0.5rem 1rem",userSelect:"none"},id:"title"},r.a.createElement("span",null,r.a.createElement(A.a,{id:"flickk-icon",style:{height:"2rem",verticalAlign:"bottom"}})),"Flickk")),r.a.createElement("span",{style:{textAlign:"right",verticalAlign:"super",margin:"0.5rem 1rem",fontWeight:"bold"},id:"tmdb-logo"},r.a.createElement("a",{style:{textDecoration:"none",color:"#eeeeee",userSelect:"none"},href:"http://www.themoviedb.org",target:"_blank",rel:"noopener noreferrer"},"Powered by"," ",r.a.createElement("img",{src:_.a,alt:"www.themoviedb.org",style:{height:"2.5rem",verticalAlign:"middle"}})))))}}]),t}(a.Component),R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",cast:[],backdrop:"",budget:"",genres:[],homepage:"",overview:"",release:"",runtime:"",status:"",tagline:"",vote:""},n.addDefaultSrcToImg=function(e){e.target.onError=null,e.target.src=j.a,console.log("Image not found!")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.movieID;fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t).concat("/credits?api_key=").concat(T)).then(function(e){return e.json()}).then(function(t){return e.setState({cast:t.cast})}).catch(function(e){return console.error(e)}),fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(T)).then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,backdrop:t.backdrop_path,budget:t.budget,genres:t.genres,homepage:t.homepage,overview:t.overview,release:t.release_date,runtime:t.runtime,status:t.status,tagline:t.tagline,vote:t.vote_average})})}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.backdrop,a=e.budget,o=e.genres,c=e.homepage,i=e.overview,l=e.release,s=e.runtime,u=e.status,m=e.tagline,g=e.vote,p=e.cast,h=o.map(function(e){return e.name}).join(", "),f=p.map(function(e){return r.a.createElement(d.b,{key:e.id,to:"/cast/"+e.id},r.a.createElement("span",null,e.name,",\xa0"))});return r.a.createElement("div",{className:"container-div",id:"movie-card-div",style:{padding:"2rem 1rem",background:"#222222",borderRadius:0}},r.a.createElement(v.a,{id:"movie-card-container",style:{background:"#222222",borderRadius:0}},r.a.createElement(b.a,{className:"bg-dark text-white"},r.a.createElement(b.a.Title,{style:{fontSize:"1.5rem",background:"rgba(0, 0, 0, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",color:"#cccccc",margin:0,paddingTop:"0.5rem"},className:"align-middle text-center pb-2 m-0"},t),r.a.createElement(b.a.Text,{style:{color:"#cccccc",background:"rgba(0, 0, 0, 0.8)",fontSize:"1rem"},className:"m-0 pb-2"},m),r.a.createElement(b.a.Img,{src:"https://image.tmdb.org/t/p/w1280/"+n,alt:t,onError:this.addDefaultSrcToImg}),r.a.createElement(b.a.ImgOverlay,null),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,null,i)),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Text,null,"Status: ",u," | Release: ",l," | Runtime: ",s),r.a.createElement(b.a.Text,null,"Rating: ",g," | Genres: ",h),r.a.createElement(b.a.Text,null,"Budget: $",a))),r.a.createElement(b.a.Body,null,"Cast: ",f),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c},"Visit Movie Website")))}}]),t}(a.Component),W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",birth:"",dept:"",img:"",bio:"",movies:[]},n.addDefaultSrcToImg=function(e){e.target.onError=null,e.target.src=j.a,console.log("Image not found!")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.personID;fetch("".concat(O).concat(t,"?api_key=").concat(T)).then(function(e){return e.json()}).then(function(t){return e.setState({name:t.name,birth:t.birthday||"Unknown",dept:t.known_for_department||"Unknown",bio:t.biography||"Information Not Found!",img:t.profile_path})}).catch(function(e){return console.error(e)}),fetch("".concat(O).concat(t,"/movie_credits?api_key=").concat(T)).then(function(e){return e.json()}).then(function(t){return e.setState({movies:t.cast})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.birth,o=e.dept,c=e.img,i=e.bio,l=e.movies.map(function(e){return r.a.createElement(d.b,{key:e.id,to:"/movie/"+e.id},r.a.createElement("span",null,e.title,",\xa0"))});return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"container-div",style:{padding:"1rem 0",background:"#222222",borderRadius:0}},r.a.createElement(v.a,null,r.a.createElement(b.a,{style:{maxWidth:"500px",background:"#000000",display:"block",margin:"auto",border:"2px solid black"}},r.a.createElement(b.a.Img,{style:{borderRadius:0,height:"auto",width:"100%",maxWidth:"300px"},src:"".concat("https://image.tmdb.org/t/p/original/").concat(c),onError:this.addDefaultSrcToImg}),r.a.createElement(b.a.Body,{style:{border:"2px solid #cccccc"}},r.a.createElement(b.a.Title,null,t),r.a.createElement(b.a.Text,null,"Birthday: ",n),r.a.createElement(b.a.Text,null,"Work: ",o),r.a.createElement(b.a.Text,null,"Biography: ",i)),r.a.createElement(b.a.Body,null,"Movies: ",l)))))}}]),t}(a.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement(a.Fragment,null,r.a.createElement(P,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:D}),r.a.createElement(g.a,{exact:!0,path:"/movie/:movieID",component:R}),r.a.createElement(g.a,{exact:!0,path:"/cast/:personID",component:W}))))}}]),t}(a.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/flickk-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/flickk-app","/service-worker.js");J?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):z(t,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.5168b4ee.chunk.js.map