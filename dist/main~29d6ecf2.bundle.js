(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,n,t){},13:function(e,n,t){},5:function(e,n,t){"use strict";var r=t(6),a=t.n(r);function i(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,a)}var o=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,a.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();n.a=o},7:function(e,n,t){"use strict";var r={init:function(e){var n=this,t=e.button,r=e.drawer,a=e.content;t.addEventListener("click",(function(e){n._toggleDrawer(e,r)})),a.addEventListener("click",(function(e){n._closeDrawer(e,r)}))},_toggleDrawer:function(e,n){e.stopPropagation(),n.classList.toggle("slide")},_closeDrawer:function(e,n){e.stopPropagation(),n.classList.remove("slide")}},a={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}},i=t(2),o=t(0),s=function(e){return"\n    <article class='item-content'>\n        <p class='post-item-city'>Kota ".concat(e.city,"</p>\n        <img crossorigin='anonymous' class='lazyload item-thumbnail' data-src=").concat(o.a.BASE_IMAGE_URL+e.pictureId," alt=").concat(e.name,">\n        <div class='post-item-content'>\n            <p class='post-item-title'><a href='","/#/detail/".concat(e.id),"'>").concat(e.name,"</a></p>\n            <p class='post-item-rate'>Rating: ⭐️").concat(e.rating,"</p>\n            <p class='post-item-description'>").concat(e.description,"</p>\n        </div>\n    </article>\n")},c=function(e){for(var n="",t=0;t<e;t+=1)n+='\n        <div class="item-content">\n            <img class="item-thumbnail" width="100%" height="350px" src="./images/placeholder.png" alt="skeleton">\n            <div class="post-item-content">\n                <h3 class="skeleton title">Lorem ipsum dolor sit.</hp>\n                <h3 class="skeleton rate">Lorem ipsum dolor sit.</h3>\n                <p class="skeleton post-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>\n            </div>\n        </div>\n    ';return n},u=function(e){return"\n    <div class='restaurant-detail-content'>      \n        <img class='restaurant-image' src='".concat(o.a.BASE_IMAGE_URL+e.pictureId,"' alt='").concat(e.name,"' />                \n        <div class='restaurant-info'>\n            <h2 class='restaurant-name'>").concat(e.name,"</h2>\n            <div>\n                <p><strong>Rating: </strong>⭐️").concat(e.rating,"</p>          \n                <p><strong>Category: </strong>").concat(e.categories.map((function(e){return"<span>".concat(e.name,"</span>")})).join(", "),"</p> \n                <p><strong>Address:</strong> ").concat(e.address,"</p>\n            </div>\n            <div>\n                <p><strong>Description: </strong></p>\n                <p>").concat(e.description,"</p>\n            </div>\n            <div id='likeButtonContainer'></div>  \n        </div>\n    </div>\n    <div class='restaurant-menu-container'>\n        <h2 class='menu-title'>Menu</h2>\n        <div class='restaurant-menu'>      \n            <div class='foods-menu'>\n            <h3>Foods</h3>\n                <ul>\n                    ").concat(e.menus.foods.map((function(e){return"<li>".concat(e.name,"</li>")})).join(""),"\n                </ul>\n            </div>\n            <div class='drink-menu'>\n            <h3>Drinks</h3>\n                <ul>\n                    ").concat(e.menus.drinks.map((function(e){return"<li>".concat(e.name,"</li>")})).join("")," \n                </ul>\n            </div> \n        </div>    \n    </div>\n    <div class='restaurant-reviews-container'>\n    <h2 class='reviews-title'>Reviews (").concat(e.customerReviews.length,")</h2>        \n    <div class='restaurant-reviews'>\n        ").concat(e.customerReviews.map((function(e){return"                                    \n        <div class='costumers-review'>\n                <picture>\n                    <source type=\"image/webp\" srcset=\"./images/user.webp\">\n                    <source type=\"image/jpeg\" srcset=\"./images/user.png\">\n                    <img class='customer-image' src='./images/user.png' alt='costumer' crossorigin='anonymous'/>\n                </picture>          \n            <div class='data-review'>                     \n                <p>".concat(e.date,"</p>\n                <p>").concat(e.name,"</p>\n                <p>").concat(e.review,"</p>\n            </div> \n        </div>\n        ")})).reverse().join(""),"\n    </div> \n    <div>\n")};function d(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,a)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){d(i,r,a,o,s,"next",e)}function s(e){d(i,r,a,o,s,"throw",e)}o(void 0)}))}}var v={render:function(){return l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'     \n        <hero-component></hero-component>\n        <main>\n            <section>\n                <headline-content></headline-content>\n                <div id="direct-content">\n                    <h2 class=\'restaurants-title\'>Visit Our Places</h2>\n                    <div class="restaurants">\n                        '.concat(c(20),"\n                    </div>\n                </div>\n            </section>\n        </main    \n        \n        "));case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return l(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.restaurantMenu();case 3:n=e.sent,(t=document.querySelector(".restaurants")).innerHTML="",n.restaurants.forEach((function(e){t.innerHTML+=s(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),"Failed to fetch"===e.t0.message&&(console.log(e.t0),document.querySelector("#direct-content").innerHTML="\n    <div>\n        <h2 class='error-message'>This page can't be reached</h1>     \n    </div >\n    ");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},p=t(1);function m(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){m(i,r,a,o,s,"next",e)}function s(e){m(i,r,a,o,s,"throw",e)}o(void 0)}))}}var h={init:function(e){var n=this;return f(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.likeButtonContainer,a=e.restaurant,n._likeButtonContainer=r,n._restaurant=a,t.next=5,n._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var e=this;return f(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e._restaurant.id,n.next=3,e._isRestaurantExist(t);case 3:if(!n.sent){n.next=7;break}e._renderLiked(),n.next=8;break;case 7:e._renderLike();case 8:case"end":return n.stop()}}),n)})))()},_isRestaurantExist:function(e){return f(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.getRestaurant(e);case 2:return t=n.sent,n.abrupt("return",!!t);case 4:case"end":return n.stop()}}),n)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML="\n    <button button aria-label='like this restaurant' id = 'likeButton' class='like' >\n        <i class='fa fa-heart-o' aria-hidden='true'></i>\n    </button >\n    ",document.querySelector("#likeButton").addEventListener("click",f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML="\n    <button button aria-label='unlike this restaurant' id = 'likeButton' class='like' >\n        <i class='fa fa-heart' aria-hidden='true'></i>\n    </button >\n    ",document.querySelector("#likeButton").addEventListener("click",f(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.a.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return n.stop()}}),n)}))))}};function w(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,a)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){w(i,r,a,o,s,"next",e)}function s(e){w(i,r,a,o,s,"throw",e)}o(void 0)}))}}function b(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,a)}function R(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){b(i,r,a,o,s,"next",e)}function s(e){b(i,r,a,o,s,"throw",e)}o(void 0)}))}}var k={"/":v,"/home":v,"/detail/:id":{render:function(){return g(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","\n        <div class='restaurant-detail-container'>\n            <div id='restaurant-detail'></div>\n            <div class='form-container'>\n                <form id='form-review'>\n                    <label for='inputName'></label>\n                    <input type='text' id='inputName' name='Name' placeholder='Your name...'>                  \n                    <label for='inputReview'></label> \n                    <textarea name='comment' id='inputReview' placeholder='Write comment...'></textarea>                   \n                    <button type='submit'>Send</button>\n                </form>\n            </div>\n        </div>                 \n    ");case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return g(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=document.querySelector('script[src="https://use.fontawesome.com/b070c8f1df.js"]'))||((t=document.createElement("script")).src="https://use.fontawesome.com/b070c8f1df.js",document.body.appendChild(t)),n.prev=2,r=a.parseActiveUrlWithoutCombiner(),n.next=6,i.a.detailRestaurant(r.id);case 6:o=n.sent,document.querySelector("#restaurant-detail").innerHTML=u(o.restaurant),e._addReviewRestaurant(r),e._favoriteButton(r,o),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),"Failed to fetch"===n.t0.message&&(preLoad.classList.add("hidden"),console.log(n.t0),document.querySelector(".restaurant-detail-container").innerHTML="\n    <div>\n        <h2 class='error-message'>This page can't be reached</h1>     \n    </div >\n    ");case 16:case"end":return n.stop()}}),n,null,[[2,13]])})))()},_addReviewRestaurant:function(e){var n=document.querySelector(".restaurant-reviews-container");document.querySelector("#form-review").addEventListener("submit",function(){var t=g(regeneratorRuntime.mark((function t(r){var a,o,s,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n.innerHTML="",a=document.querySelector("#inputName").value,o=document.querySelector("#inputReview").value,s={id:e.id,name:a,review:o},t.next=7,i.a.restaurantReview(s);case 7:return t.next=9,i.a.detailRestaurant(e.id);case 9:c=t.sent,n.innerHTML=(u=c.restaurant,"\n        <h2 class='reviews-title'>Reviews (".concat(u.customerReviews.length,")</h2>        \n        <div class='restaurant-reviews'>\n            ").concat(u.customerReviews.map((function(e){return"                                    \n            <div class='costumers-review'>\n                <img class='customer-image' src='./images/user.png' alt='costumer' crossorigin='anonymous'/>\n                <div class='data-review'>                     \n                    <p>".concat(e.date,"</p>\n                    <p>").concat(e.name,"</p>\n                    <p>").concat(e.review,"</p>\n                </div> \n            </div>\n            ")})).reverse().join(""),"\n        </div>\n    "));case 11:case"end":return t.stop()}var u}),t)})));return function(e){return t.apply(this,arguments)}}())},_favoriteButton:function(e,n){h.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:e.id,pictureId:n.restaurant.pictureId,name:n.restaurant.name,description:n.restaurant.description,rating:n.restaurant.rating,city:n.restaurant.city}})}},"/favorite":{render:function(){return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return","\n        <div class='favorite-restaurant'>\n            <h2 class='restaurants-title'>Favorited Restaurant</h2>\n            <div id='restaurants' class='restaurants'>\n            </div>\n        </div>\n    ");case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){return R(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getAllRestaurants();case 2:return 0===(n=e.sent).length&&(document.querySelector(".favorite-restaurant").innerHTML="\n                <div class='failed-container'>\n                    <h2 class='restaurants-item__not__found'>There are no restaurants to display</h2>     \n                </div>\n                "),e.next=6,document.querySelector("#restaurants");case 6:t=e.sent,n.forEach((function(e){t.innerHTML+=s(e)}));case 8:case"end":return e.stop()}}),e)})))()}}};function y(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,a)}function _(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(n){var t=n.button,r=n.drawer,a=n.content;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._button=t,this._drawer=r,this._content=a,this._initialAppShell()}var n,t,i,o,s;return n=e,(t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.parseActiveUrlWithCombiner(),t=k[n],e.next=4,t.render();case 4:return this._content.innerHTML=e.sent,e.next=7,t.afterRender();case 7:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,n=arguments;return new Promise((function(t,r){var a=o.apply(e,n);function i(e){y(a,t,r,i,s,"next",e)}function s(e){y(a,t,r,i,s,"throw",e)}i(void 0)}))},function(){return s.apply(this,arguments)})}])&&_(n.prototype,t),i&&_(n,i),e}();n.a=x}}]);