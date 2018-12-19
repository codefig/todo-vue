webpackJsonp([1],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(27)
/* template */
var __vue_template__ = __webpack_require__(28)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/News.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12793f84", Component.options)
  } else {
    hotAPI.reload("data-v-12793f84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            mobile: ["Android", "Operating Systems", "IOS", "IPad", "Wndows"],
            desktop: ["Dell", "HP", "laptop", "Maciintosh"],
            id: this.$route.params.id,
            news: []
        };
    },
    methods: {
        loadPosts: function loadPosts() {
            if (this.id === 'mobile') {
                this.news = this.mobile;
            } else {
                this.news = this.desktop;
            }
        }
    },
    created: function created() {
        console.log("Id : ", this.$route.params.id);
        this.loadPosts();
    },
    watch: {
        '$route': function $route(to, from) {
            this.id = this.$route.params.id;
            this.loadPosts();
        }
    }
});

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "box" },
    _vm._l(_vm.news, function(items, index) {
      return _c("h1", { key: index }, [_vm._v(_vm._s(items))])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12793f84", module.exports)
  }
}

/***/ })

});