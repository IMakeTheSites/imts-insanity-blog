"use strict";
(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 4341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@sanity/block-content-to-react"
const block_content_to_react_namespaceObject = require("@sanity/block-content-to-react");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_namespaceObject);
// EXTERNAL MODULE: external "next-sanity-image"
var external_next_sanity_image_ = __webpack_require__(3742);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./sanityClient.js
var sanityClient = __webpack_require__(849);
;// CONCATENATED MODULE: ./pages/post/[slug].js






const Post = (props)=>{
    const { title , body , image  } = props;
    const imageProps = (0,external_next_sanity_image_.useNextSanityImage)(sanityClient/* sanityClient */.i, image);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container py-5 px-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "flex",
                "aria-label": "breadcrumb",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                    className: "inline-flex items-center space-x-1 md:space-x-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "inline-flex items-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                children: "Blog"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            "aria-hidden": "true",
                            class: "w-6 h-6 text-gray-400",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                "fill-rule": "evenodd",
                                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                "clip-rule": "evenodd"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "inline-flex items-center",
                            "aria-current": "page",
                            children: title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-lg",
                        children: title
                    }),
                    imageProps && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        ...imageProps,
                        layout: "intrinsic",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                        blocks: body
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const pageSlug = context.query.slug;
    if (!pageSlug) {
        return {
            notFound: true
        };
    }
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const data = await fetch(url).then((res)=>res.json());
    const post = data.result[0];
    if (!post) {
        return {
            notFound: true
        };
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                image: post.mainImage
            }
        };
    }
};
/* harmony default export */ const _slug_ = (Post);


/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = require("next-sanity-image");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664], () => (__webpack_exec__(4341)));
module.exports = __webpack_exports__;

})();