"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 60998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99820);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_not_user_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4934);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const TooltipUser = ({ post, session })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__/* .NextUIProvider */ .w, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_6__/* .tooltip_default */ .e, {
            className: "bg-[#1c1c1c] w-full p-4 focus:border-[#494949]   focus:ring-[#313131] placeholder-[#505050] border border-[#3e3e3e]",
            content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-20",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/${post.users.user_name}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        alt: post.users.user_name,
                                        src: post.users.avatar_url || _public_not_user_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
                                        width: 1080,
                                        height: 1080,
                                        className: "h-[70px] w-[70px] rounded-full flex self-center cursor-pointer select-none"
                                    })
                                })
                            }),
                            session && post.user_id !== session.user.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "h-full px-5 py-[7px] cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-2xl outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-black border-white hover:border-[#fff] bg-[#fff] hover:bg-[#fff]/60 focus-visible:outline-[#155b3d] shadow-sm text-sm font-bold ",
                                children: "Seguir"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[86px] h-[20]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/${post.users.user_name}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-white font-bold block text-xl cursor-pointer hover:underline",
                                    children: post.users.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/${post.users.user_name}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-gray-400 font-light block text-sm cursor-pointer",
                                    children: [
                                        "@",
                                        post.users.user_name
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-row gap-2 mt-2 text-gray-400 font-light  text-sm",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "flex flex-row gap-1 cursor-pointer hover:underline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "text-white font-bold block text-md",
                                        children: "0"
                                    }),
                                    "Siguiendo"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "ml-2 flex flex-row gap-1 cursor-pointer hover:underline",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        className: "text-white font-bold block text-md",
                                        children: "12"
                                    }),
                                    "Seguidores"
                                ]
                            })
                        ]
                    })
                ]
            }),
            delay: 500,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: `/${post?.users.user_name}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: post.users.avatar_url || _public_not_user_webp__WEBPACK_IMPORTED_MODULE_4__["default"],
                    alt: post.user_id || post.users.user_name,
                    width: 900,
                    height: 900,
                    className: "h-10 w-10 rounded-full select-none outline-none cursor-pointer"
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipUser);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/not-user.dd1cf84a.webp","height":1280,"width":1280,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgAAkA4JZwAApp5NNc3YAD++trXjhfbjGC8/uVuB7eCt9eQU+qmh+/HSzAA","blurWidth":8,"blurHeight":8});

/***/ })

};
;