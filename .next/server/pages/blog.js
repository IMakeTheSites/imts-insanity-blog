(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 2272:
/***/ ((module) => {

// Exports
module.exports = {
	"postTitle": "Post_postTitle__GKuDe",
	"postDescription": "Post_postDescription__TKsqW",
	"postContent": "Post_postContent__fKsd9",
	"postLink": "Post_postLink__oGPAa",
	"postImage": "Post_postImage__WO_EV"
};


/***/ }),

/***/ 3824:
/***/ ((module) => {

// Exports
module.exports = {
	"postGrid": "PostGrid_postGrid__Nqiyq"
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

function Button({ children , type , onClick , disabled  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: "bg-light-green text-gray-100 rounded px-4 py-2 my-2 hover:bg-green-700",
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 4498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2272);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1843);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3267);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_5__]);
_lib_client__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Post = ({ className , image , title ="" , description , slug  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/post/${encodeURIComponent(slug.current)}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().post)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postLink),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Title_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    type: "small",
                    className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postTitle),
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postContent),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postImage),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_5__/* .urlFor */ .uH)(image).url(),
                                alt: image.caption,
                                width: "100",
                                height: "100"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_Post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().postDescription),
                            children: description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3824);
/* harmony import */ var _PostGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostGrid_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const PostGrid = ({ className , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, (_PostGrid_module_scss__WEBPACK_IMPORTED_MODULE_2___default().postGrid)),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostGrid);


/***/ }),

/***/ 257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports default, loadData */
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3267);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client__WEBPACK_IMPORTED_MODULE_0__]);
_lib_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function post(req, res) {
    const { start , end  } = req.query;
    if (isNaN(Number(start)) || isNaN(Number(end))) {
        return res.status(400).end();
    }
    const { posts , total  } = await loadData(start, end);
    res.status(200).json({
        posts,
        total
    });
}
async function loadData(start, end) {
    const query = `{
    "posts": *[_type == "post"] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
    "total": count(*[_type =="post"])  
  }`;
    const { posts , total  } = await client.fetch(query);
    return {
        posts,
        total
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4197);
/* harmony import */ var _components_ClientLogos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4680);
/* harmony import */ var _components_Testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(471);
/* harmony import */ var _api_post_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(257);
/* harmony import */ var _components_Section_Section_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8493);
/* harmony import */ var _components_Cover_Cover_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1882);
/* harmony import */ var _components_Title_Title_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1843);
/* harmony import */ var _components_PostGrid_PostGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8373);
/* harmony import */ var _components_Post_Post_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4498);
/* harmony import */ var _components_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4759);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3267);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6419);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_post_js__WEBPACK_IMPORTED_MODULE_5__, _components_Post_Post_js__WEBPACK_IMPORTED_MODULE_10__, _lib_client__WEBPACK_IMPORTED_MODULE_12__, groq__WEBPACK_IMPORTED_MODULE_13__]);
([_api_post_js__WEBPACK_IMPORTED_MODULE_5__, _components_Post_Post_js__WEBPACK_IMPORTED_MODULE_10__, _lib_client__WEBPACK_IMPORTED_MODULE_12__, groq__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const LOAD_MORE_STEP = 4;
function BlogPage({ posts  }) {
    // const [posts, setPosts] = useState(initialPosts);
    // const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
    // const [loading, setLoading] = useState(false);
    // const showLoadButton = total > loadedAmount;
    // const getMorePosts = async () => {
    //   setLoading(true);
    //   try {
    //     const data = await fetch(
    //       `/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
    //     ).then((response) => response.json());
    //     setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
    //     setPosts([...posts, ...data.posts]);
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //   }
    // };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Blog",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    marginBottom: "1rem"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Section_Section_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cover_Cover_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            title: "Blog"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Section_Section_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                children: "New Post"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostGrid_PostGrid_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                children: posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post_Post_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        ...post
                                    }, post._id))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClientLogos__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Testimonial__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}
async function getStaticProps() {
    const posts = await _lib_client__WEBPACK_IMPORTED_MODULE_12__/* .client.fetch */ .Lp.fetch(groq__WEBPACK_IMPORTED_MODULE_13__["default"]`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
    return {
        props: {
            posts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ }),

/***/ 680:
/***/ ((module) => {

"use strict";
module.exports = import("@sanity/client");;

/***/ }),

/***/ 6419:
/***/ ((module) => {

"use strict";
module.exports = import("groq");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,121,403,900], () => (__webpack_exec__(6882)));
module.exports = __webpack_exports__;

})();