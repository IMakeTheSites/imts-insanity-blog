(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 2629:
/***/ ((module) => {

// Exports
module.exports = {
	"GlobalHeader": "GlobalHeader_GlobalHeader__INTJ5"
};


/***/ }),

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({ children , type , onClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        onClick: onClick,
        className: "bg-light-green text-gray-100 rounded px-4 py-2 my-2 hover:bg-green-700",
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 8047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_GlobalHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2629);
/* harmony import */ var _styles_GlobalHeader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_GlobalHeader_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const GlobalHeader = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_styles_GlobalHeader_module_scss__WEBPACK_IMPORTED_MODULE_1___default().GlobalHeader),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: props.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: props.path
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalHeader);


/***/ }),

/***/ 3274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Page.js
var Page = __webpack_require__(4197);
// EXTERNAL MODULE: ./components/GlobalHeader.js
var GlobalHeader = __webpack_require__(8047);
// EXTERNAL MODULE: ./components/ClientLogos.js + 4 modules
var ClientLogos = __webpack_require__(4680);
// EXTERNAL MODULE: ./components/Testimonial.js + 1 modules
var Testimonial = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next-sanity-image"
var external_next_sanity_image_ = __webpack_require__(3742);
// EXTERNAL MODULE: ./sanityClient.js
var sanityClient = __webpack_require__(849);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/PostCard.js






function PostCard(props) {
    console.log(props.post);
    const post = props.data;
    const slug = post.slug.current;
    const imageProps = (0,external_next_sanity_image_.useNextSanityImage)(sanityClient/* sanityClient */.i, post.mainImage);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "border my-4 w-80 shadow hover:shadow-xl",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                post.mainImage && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    ...imageProps,
                    layout: "intrinsic",
                    alt: ""
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "p-2 flex justify-between items-baseline",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-lg font-bold",
                            children: post.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-md",
                            children: post.excerpt
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/post/${encodeURIComponent(slug)}`,
                                children: "View More..."
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_PostCard = (PostCard);

;// CONCATENATED MODULE: ./pages/blog.js







function BlogPage({ posts  }) {
    const [mappedPosts, setMappedPosts] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (posts.length) {
            setMappedPosts(posts.map((post)=>{
                return {
                    ...post
                };
            }));
        } else {
            setMappedPosts([]);
        }
    }, [
        posts
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Page/* default */.Z, {
        title: "Blog",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalHeader/* default */.Z, {
                name: "Blog"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-rows-1",
                    children: mappedPosts && mappedPosts.length && mappedPosts.map((post, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_PostCard, {
                            data: post
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ClientLogos/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Testimonial/* default */.Z, {})
        ]
    });
}
const getServerSideProps = async (context)=>{
    const query = encodeURIComponent(`*[_type == "post"]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const data = await fetch(url).then((res)=>res.json());
    const posts = data.result;
    if (!posts || !posts.length === 0) {
        return {
            props: {
                posts: []
            }
        };
    } else {
        return {
            props: {
                posts
            }
        };
    }
};
/* harmony default export */ const blog = (BlogPage);


/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ sanityClient)
/* harmony export */ });
const sanityClient = {
    projectId: "ysqxn84u",
    dataset: "production"
};


/***/ }),

/***/ 3742:
/***/ ((module) => {

"use strict";
module.exports = require("next-sanity-image");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4508:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,121], () => (__webpack_exec__(3274)));
module.exports = __webpack_exports__;

})();