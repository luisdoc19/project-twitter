exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 95202:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 89708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8636));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 95422));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66023))

/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 66023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const UserLinks = ({ userInfo })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "flex flex-row justify-evenly items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `text-sm cursor-pointer  p-2 hover:text-white ${pathname.split("/")[1] === userInfo[0]?.user_name && !pathname.split("/")[2] ? "text-white font-bold border-b-3 border-sky-600" : "text-[#71767b]"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/${userInfo && userInfo[0]?.user_name}`,
                    children: "Posts"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `text-sm cursor-pointer  p-2 hover:text-white ${pathname.split("/")[2] === "replies" ? "text-white font-bold border-b-3 border-sky-600" : "text-[#71767b]"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/${userInfo && userInfo[0]?.user_name}/replies`,
                    children: "Respuestas"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `text-sm cursor-pointer  p-2 hover:text-white ${pathname.split("/")[2] === "highlights" ? "text-white font-bold border-b-3 border-sky-600" : "text-[#71767b]"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/${userInfo && userInfo[0]?.user_name}/highlights`,
                    children: "Destacado"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `text-sm cursor-pointer  p-2 hover:text-white ${pathname.split("/")[2] === "media" ? "text-white font-bold border-b-3 border-sky-600" : "text-[#71767b]"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/${userInfo && userInfo[0]?.user_name}/media`,
                    children: "Videos y fotos"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: `text-sm cursor-pointer  p-2 hover:text-white ${pathname.split("/")[2] === "likes" ? "text-white font-bold border-b-3 border-sky-600" : "text-[#71767b]"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/${userInfo && userInfo[0]?.user_name}/likes`,
                    children: "Me gustas"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserLinks);


/***/ }),

/***/ 45320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./src/app/components/AsideBar.tsx
var AsideBar = __webpack_require__(46981);
// EXTERNAL MODULE: ./src/app/components/HeaderMenu.tsx
var HeaderMenu = __webpack_require__(17569);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(39100);
// EXTERNAL MODULE: ./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
var dist = __webpack_require__(87176);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(40063);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(64980);
;// CONCATENATED MODULE: ./public/not-user.webp
/* harmony default export */ const not_user = ({"src":"/_next/static/media/not-user.dd1cf84a.webp","height":1280,"width":1280,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAgAAkA4JZwAApp5NNc3YAD++trXjhfbjGC8/uVuB7eCt9eQU+qmh+/HSzAA","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/no-image.png
/* harmony default export */ const no_image = ({"src":"/_next/static/media/no-image.1e9ff5a9.png","height":360,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADBAMAAABc5lN7AAAAElBMVEU0NjkzNjk0NTk0NTgzNTkzNTgRe+5JAAAAE0lEQVR42mNwURRyYQhVYDIFEwAQbgIUnoFCIgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/app/components/UserLinks.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Usuario\Program\projects-excercises\login-user\src\app\components\UserLinks.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const UserLinks = (__default__);
;// CONCATENATED MODULE: ./src/app/components/UserProfile.tsx










const UserProfile = async ({ id })=>{
    const supabase = (0,dist.createServerComponentClient)({
        cookies: headers.cookies
    });
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) (0,navigation.redirect)("/dashboard/sign-in");
    const { data: user } = await supabase.from("users").select("*, posts(*)").eq("user_name", id);
    const userInfo = user;
    if (userInfo?.length === 0) return (0,navigation.redirect)("/not-found");
    return userInfo?.length && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "border-b border-[#2e2e2e]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-5 px-4 pt-2 pb-1 fixed top-12 backdrop-blur-lg backdrop-saturate-[37%] bg-[rgba(32,32,32,0.64)] w-[599px] border-r border-[#2e2e2e] z-30",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-[#fff] flex self-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "icon icon-tabler icon-tabler-arrow-left",
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        stroke: "none",
                                        d: "M0 0h24v24H0z",
                                        fill: "none"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5 12l14 0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5 12l6 6"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5 12l6 -6"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col text-gray-400 font-light text-xs",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-white font-bold block text-xl cursor-pointer",
                                children: userInfo && userInfo[0]?.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    userInfo !== null && userInfo[0].posts.length,
                                    " posts"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-14",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: no_image,
                    className: "max-w-[100%] h-auto block",
                    width: 1920,
                    height: 1080,
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-4 flex flex-row h-20 justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: userInfo[0].avatar_url || not_user,
                                    width: 600,
                                    height: 600,
                                    className: "w-[100px] relative top-[-50px] rounded-full border-3 border-[#1c1c1c] sm:w-[140px] sm:top-[-70px]",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: userInfo && userInfo[0].id === session.user.id && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "flex self-start mt-4 mr-2 font-bold relative justify-center cursor-pointer items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-[#ededed] bg-[#2e2e2e]  border-[#3e3e3e] hover:border-[#3e3e3e] dark:bg-[#2e2e2e] hover:bg-[#3e3e3e] focus-visible:outline-[#155b3d] shadow-sm text-xs px-2 py-1",
                                    children: "Editar perfil"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col py-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-white font-bold w-max text-xl cursor-pointer hover:underline",
                                        children: userInfo && userInfo[0].name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-[#71767b]  font-light block text-sm cursor-pointer",
                                        children: [
                                            "@",
                                            userInfo && userInfo[0].user_name
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-[#e7e9ea] text-sm",
                                    children: userInfo && userInfo[0]?.bio
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row mt-2 text-[#71767b] font-light text-sm gap-2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "icon icon-tabler icon-tabler-calendar",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M16 3v4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M8 3v4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M4 11h16"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M11 15h1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M12 15v3"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Se unio en",
                                            " ",
                                            userInfo && new Date(userInfo[0].created_at).toLocaleDateString()
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row gap-2 mt-2 text-gray-400 font-light  text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "flex flex-row gap-1 cursor-pointer hover:underline font-extralight",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "text-white font-bold block text-md",
                                                children: "0"
                                            }),
                                            "Siguiendo"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "ml-2 flex flex-row gap-1 cursor-pointer hover:underline font-extralight",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "text-white font-bold block text-md",
                                                children: "12"
                                            }),
                                            "Seguidores"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(UserLinks, {
                    userInfo: userInfo
                })
            })
        ]
    });
};
/* harmony default export */ const components_UserProfile = (UserProfile);

;// CONCATENATED MODULE: ./src/app/(user-menu)/[id]/layout.tsx





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children, params }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "min-h-full flex flex-col",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-[100vh] max-h-[100vh]",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row w-full bg-[#1c1c1c] h-[100vh] max-h-[100vh] overflow-hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(AsideBar/* default */.Z, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                                className: "col-span-9 mx-auto w-full bg-[#202020]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderMenu/* default */.Z, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                        className: "flex h-[95%] flex-col gap-5 overflow-y-scroll",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "max-w-[600px] box-border w-[100%] mx-auto flex justify-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "border border-[#2e2e2e] border-t-0 border-b-0 w-max",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(components_UserProfile, {
                                                        id: params.id
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                                                        children: children
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 11897:
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


/***/ }),

/***/ 95422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/no-image.1e9ff5a9.png","height":360,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADBAMAAABc5lN7AAAAElBMVEU0NjkzNjk0NTk0NTgzNTkzNTgRe+5JAAAAE0lEQVR42mNwURRyYQhVYDIFEwAQbgIUnoFCIgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});

/***/ })

};
;