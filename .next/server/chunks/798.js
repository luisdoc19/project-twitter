"use strict";
exports.id = 798;
exports.ids = [798];
exports.modules = {

/***/ 66692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_TextCard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./node_modules/@supabase/auth-helpers-nextjs/dist/index.js
var dist = __webpack_require__(43334);
;// CONCATENATED MODULE: ./src/app/components/LikeButton.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const LikeButton = ({ post, addOptimisticPost })=>{
    const handleLikeTweet = async ()=>{
        const supabase = (0,dist.createClientComponentClient)();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            if (post.user_liked) {
                addOptimisticPost({
                    ...post,
                    post_like_length: post.post_like_length - 1,
                    user_liked: !post.user_liked
                });
                await supabase.from("like").delete().match({
                    user_id: user.id,
                    posts_id: post.id
                });
            } else {
                addOptimisticPost({
                    ...post,
                    post_like_length: post.post_like_length + 1,
                    user_liked: !post.user_liked
                });
                await supabase.from("like").insert({
                    user_id: user.id,
                    posts_id: post.id
                });
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center mr-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-2 hover:bg-red-600/10 rounded-full cursor-pointer",
                onClick: handleLikeTweet,
                children: post.user_liked ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "icon icon-tabler icon-tabler-heart-filled text-red-700 hover:text-red-[700] cursor-pointer w-[18px] h-[18px]",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            stroke: "none",
                            d: "M0 0h24v24H0z",
                            fill: "none"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z",
                            fill: "currentColor"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "icon icon-tabler icon-tabler-heart cursor-pointer",
                    width: "18",
                    height: "18",
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
                            d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-1 text-sm",
                children: post.post_like_length
            })
        ]
    });
};
/* harmony default export */ const components_LikeButton = (LikeButton);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/app/components/TooltipUser.tsx
var TooltipUser = __webpack_require__(60998);
;// CONCATENATED MODULE: ./src/app/components/TextCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const TextCard = ({ posts, session })=>{
    const [optimisticTweets, addOptimisticTweet] = (0,react_experimental_.experimental_useOptimistic)(posts, (currentTweet, newTweet)=>{
        const newOptimisticTweet = [
            ...currentTweet
        ];
        const index = newOptimisticTweet.findIndex((post)=>post.id === newTweet.id);
        newOptimisticTweet[index] = newTweet;
        return newOptimisticTweet;
    });
    function getTimeAgoSinceCreated(created_at) {
        const currentTime = new Date();
        const createdAtDate = new Date(created_at);
        const timeDifference = currentTime.getTime() - createdAtDate.getTime();
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        if (days > 0) {
            const createdAtDay = createdAtDate.getDate();
            const createdAtMonth = createdAtDate.toLocaleString("default", {
                month: "short"
            });
            return `${createdAtDay} ${createdAtMonth}`;
        } else if (hours > 0) {
            return `${hours}h`;
        } else if (minutes > 0) {
            return `${minutes}m`;
        } else {
            return `${seconds}s`;
        }
    }
    return optimisticTweets.map((post)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "border border-[#2e2e2e] p-4  max-w-[600px] mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-between w-max  ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex gap-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: " flex flex-row gap-1 items-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TooltipUser/* default */.Z, {
                                            post: post,
                                            session: session
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-white font-bold block text-md cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/${post?.users.user_name}`,
                                                children: post?.users.name
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-gray-400 font-light block text-sm mt-[1.5px]",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: `/${post?.users.user_name}`,
                                                children: [
                                                    "@",
                                                    post?.users.user_name
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-gray-400 font-light block text-sm mt-[1.5px]",
                                            suppressHydrationWarning: true,
                                            children: [
                                                "\xb7 ",
                                                getTimeAgoSinceCreated(post.created_at)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "text-[#e7e9ea] text-sm block  leading-snug ",
                                            children: post?.text
                                        }),
                                        post.image && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex mx-auto h-auto w-[570px] py-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: post?.image,
                                                alt: "",
                                                className: "rounded object-cover w-full h-full"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-gray-400 mx-auto flex flex-row justify-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center mr-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    viewBox: "0 0 24 24",
                                    className: "r-1re7ezh r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr fill-current h-5 w-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-3",
                                    children: "2"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_LikeButton, {
                            post: post,
                            addOptimisticPost: addOptimisticTweet
                        })
                    ]
                })
            ]
        }, post.id));
};
/* harmony default export */ const components_TextCard = (TextCard);


/***/ }),

/***/ 81446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Usuario\Program\projects-excercises\login-user\src\app\components\TextCard.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;