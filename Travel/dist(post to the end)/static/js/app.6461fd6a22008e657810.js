webpackJsonp([1],{"0XaT":function(t,e){},"4Hhy":function(t,e){},"5Uno":function(t,e){},Avoy:function(t,e){},Az7r:function(t,e){},"BM/Y":function(t,e){},BjtM:function(t,e){},BpKH:function(t,e){},CzKg:function(t,e){},GAaD:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("sPfQ")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),u={name:"Header",computed:c()({},Object(l.c)(["city"]))},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header",attrs:{id:"list"}},[t._m(0),t._v(" "),i("div",{staticClass:"iconfont icon-mag"},[t._v("")]),t._v(" "),i("input",{staticClass:"header-middle",attrs:{type:"text",placeholder:"please search your interests",name:"input",id:"input"}}),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n      "+t._s(this.city)+"\n      "),i("span",{staticClass:"iconfont"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont icon-back"},[this._v("")])])}]};var h=i("VU/8")(u,d,!1,function(t){i("5Uno")},"data-v-0e7aa205",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOptions:{autoplay:3e3,pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var v=i("VU/8")(p,f,!1,function(t){i("BM/Y")},"data-v-11b4f1ad",null).exports,m={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),1)],1)},staticRenderFns:[]};var y=i("VU/8")(m,_,!1,function(t){i("GAaD")},"data-v-783f5a86",null).exports,C={name:"Recommend",props:{list:Array}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热门推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(C,w,!1,function(t){i("htBi")},"data-v-1449a014",null).exports,b={name:"Weekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("近期优惠")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("mZdR")},"data-v-6eae0e73",null).exports,$=i("mtWM"),I=i.n($),S={name:"Home",components:{HomeHeader:h,HomeSwiper:v,HomeIcons:y,HomeRecommend:g,HomeWeekend:x},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){I.a.get("/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).result&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}console.log(t)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var U=i("VU/8")(S,E,!1,function(t){i("UT56")},"data-v-cf559168",null).exports,L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont icon"},[this._v("")])]),this._v(" "),e("div",{staticClass:"header"},[this._v("城市选择")])],1)},staticRenderFns:[]};var A=i("VU/8")({name:"Header"},L,!1,function(t){i("ypYs")},"data-v-66981230",null).exports,H=i("GQaK"),T={name:"Search",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null}},computed:{hasNoData:function(){return!this.list.length}},watch:{keyword:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];if(t.keyword){for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyword)>-1||i.name.indexOf(t.keyword)>-1)&&e.push(i)});t.list=e}else t.list=[]},100)}},mounted:function(){this.scroll=new H.a(this.$refs.search)},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("./")}},Object(l.b)(["changeCity"]))},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"item-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoData,expression:"hasNoData"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到匹配数据\n      ")])],2)])])},staticRenderFns:[]};var F=i("VU/8")(T,O,!1,function(t){i("0XaT")},"data-v-4fb8d858",null).exports,R={name:"List",props:{cities:Object,hotCities:Array,letter:String},mounted:function(){this.scroll=new H.a(this.$refs.wrapper)},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("./")}},Object(l.b)(["changeCity"]))},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topBottom"},[t._v("您的位置")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topBottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topBottom"},[t._v(t._s(s))]),t._v(" "),t._l(e,function(e){return i("ul",{key:e.id,staticClass:"item-list",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("li",{staticClass:"item border-bottom"},[t._v("\n          "+t._s(e.name)+"\n        ")])])})],2)})],2)])},staticRenderFns:[]};var D=i("VU/8")(R,j,!1,function(t){i("Az7r")},"data-v-52f58f40",null).exports,N={name:"Alphabet",props:{cities:Object},data:function(){return{touchStatus:!1,startY:0,timer:0}},updated:function(){this.startY=this.$refs.A[0].offsetTop},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("change",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchEnd:function(){this.touchStatus=!1}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v("\n    "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var B={name:"City",components:{CityHeader:A,CitySearch:F,CityList:D,CityAlphabet:i("VU/8")(N,V,!1,function(t){i("gakY")},"data-v-9d7e5e92",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){I.a.get("/static/mock/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).result&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}console.log(t)},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var M=i("VU/8")(B,G,!1,function(t){i("y+lk")},"data-v-13be262a",null).exports,Y={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:"true",observer:"true",loop:"true"}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var P=i("VU/8")(Y,z,!1,function(t){i("w5U+")},"data-v-946b573a",null).exports,K={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var W=i("VU/8")({name:"fadeAnimation"},K,!1,function(t){i("Wy/a")},"data-v-befad478",null).exports,Q={name:"DetailBanner",props:{sight:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1,imgs:["http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"]}},components:{CommonGallary:P,FadeAnimation:W},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v("\n        大连圣亚海洋世界(AAAA景区)")]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v("\n        "+t._s(this.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var X=i("VU/8")(Q,q,!1,function(t){i("vKzv")},"data-v-7bc1cfde",null).exports,Z={name:"DetailHeader",data:function(){return{showIcon:!0,myOpacity:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>60){this.showIcon=!1;var e=t/140;e=e>1?1:e,this.myOpacity={opacity:e}}else this.showIcon=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showIcon,expression:"showIcon"}],staticClass:"header-back",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont icon"},[this._v("")])]),this._v(" "),e("router-link",{directives:[{name:"show",rawName:"v-show",value:!this.showIcon,expression:"!showIcon"}],staticClass:"header-fixed",style:this.myOpacity,attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")]),this._v("\n    城市选择\n  ")])],1)},staticRenderFns:[]};var tt=i("VU/8")(Z,J,!1,function(t){i("CzKg")},"data-v-9ef17886",null).exports,et={name:"DetailList",props:{list:Array}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-chilren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:X,DetailHeader:tt,DetailList:i("VU/8")(et,it,!1,function(t){i("Avoy")},"data-v-8286dc68",null).exports},data:function(){return{sightName:"",list:[],bannerImg:"",gallaryImgs:[]}},methods:{getDetailInfo:function(){I.a.get("/static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).result&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sight:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("4Hhy")},"data-v-0e1d9cec",null).exports;s.a.use(r.a);var rt=new r.a({routes:[{path:"/",name:"Home",component:U},{path:"/city",name:"City",component:M},{path:"/detail/:id",name:"Detail",component:at}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),ot=i("v5o6"),ct=i.n(ot),lt=i("F3EI"),ut=i.n(lt),dt=(i("j1ja"),"北京");try{localStorage.city&&(dt=localStorage.city)}catch(t){}var ht={city:dt},pt={changeCity:function(t,e){t.city=e;try{localStorage.city&&(localStorage.city=e)}catch(t){}}};s.a.use(l.a);var ft=new l.a.Store({state:ht,mutations:pt});i("m0iu"),i("cjdf"),i("BjtM"),i("BpKH");s.a.config.productionTip=!1,ct.a.attach(document.body),s.a.use(ut.a),new s.a({el:"#app",router:rt,store:ft,components:{App:a},template:"<App/>"})},UT56:function(t,e){},"Wy/a":function(t,e){},cjdf:function(t,e){},gakY:function(t,e){},htBi:function(t,e){},m0iu:function(t,e){},mZdR:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("m0SV"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},sPfQ:function(t,e){},vKzv:function(t,e){},"w5U+":function(t,e){},"y+lk":function(t,e){},ypYs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6461fd6a22008e657810.js.map