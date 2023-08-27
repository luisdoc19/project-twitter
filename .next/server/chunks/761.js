exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 7507:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 69165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43334);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const GitHub = ()=>{
    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__.createClientComponentClient)();
    const handleSignIn = async ()=>{
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: handleSignIn,
        className: "relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#161616] hover:bg-[#232323] border-[#343434] hover:border-[#3e3e3e] dark:border-[#3e3e3e] hover:dark:border-[#505050] dark:bg-[#2e2e2e] dark:hover:bg-[#343434] focus-visible:outline[#10472f] shadow-sm w-full flex items-center justify-center text-base px-4 py-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "sbui-icon ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "truncate",
                children: "Continue with GitHub"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitHub);


/***/ }),

/***/ 48800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43334);
/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Google = ()=>{
    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_2__.createClientComponentClient)();
    const handleSignIn = async ()=>{
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        onClick: handleSignIn,
        className: "relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#161616] hover:bg-[#232323] border-[#343434] hover:border-[#3e3e3e] dark:border-[#3e3e3e] hover:dark:border-[#505050] dark:bg-[#2e2e2e] dark:hover:bg-[#343434] focus-visible:outline[#10472f] shadow-sm w-full flex items-center justify-center text-base px-4 py-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "icon icon-tabler icon-tabler-brand-google",
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                stroke: "currentColor",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "truncate",
                children: "Continue with Google"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Google);


/***/ }),

/***/ 36974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Usuario\Program\projects-excercises\login-user\src\app\components\GitHub.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 71232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Usuario\Program\projects-excercises\login-user\src\app\components\Google.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 31365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/NavBar.tsx



function NavBar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute top-0 w-full px-8 mx-auto sm:px-6 lg:px-8 pt-6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "relative flex items-center justify-between sm:h-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-between w-full md:w-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/dashboard/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://supabase.com/dashboard/_next/image?url=%2Fdashboard%2Fimg%2Fsupabase-dark.svg&w=128&q=75",
                                    alt: "",
                                    className: "w-[120px] h-[22px]"
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "items-center hidden space-x-3 md:ml-10 md:flex md:pr-4",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#161616] hover:bg-[#232323] border-[#343434] hover:border-[#3e3e3e] dark:border-[#3e3e3e] hover:dark:border-[#505050] dark:bg-[#2e2e2e] dark:hover:bg-[#343434] focus-visible:outline-[#10472f] shadow-sm text-xs px-2.5 py-1",
                        type: "button",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "sbui-icon text-[#7e7e7e]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                        points: "14 2 14 8 20 8"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                        x1: "16",
                                        y1: "13",
                                        x2: "8",
                                        y2: "13"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("line", {
                                        x1: "16",
                                        y1: "17",
                                        x2: "8",
                                        y2: "17"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                        points: "10 9 9 9 8 9"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "truncate",
                                children: "Documentation"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_NavBar = (NavBar);

;// CONCATENATED MODULE: ./src/app/dashboard/layout.tsx



function layout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-screen flex flex-col",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col flex-1 bg-[#161616]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                                className: "flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-[#1c1c1c] border-[#2e2e2e]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]",
                                        children: children
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "sm:text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-xs text-[#707070] sm:mx-auto sm:max-w-sm",
                                            children: "By continuing, you agree to Supabase's Termsof services and Privacy Policy, and to receive periodic emails with updates"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                                className: "flex-col items-center justify-center flex-1 flex-shrink hidden basis-1/4 xl:flex",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative flex flex-col gap-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute select-none -top-12 -left-11",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-[160px] leading-none text-[#343434]",
                                                children: "“"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                            className: "z-10 max-w-lg text-3xl text-[#ededed]",
                                            children: "Working on my next SaaS app and I want this to be my whole job because I'm just straight out vibing putting it together. @supabase and chill, if you will"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 51404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39100);


const loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "loader"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);


/***/ })

};
;