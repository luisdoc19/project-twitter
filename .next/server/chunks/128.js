exports.id = 128;
exports.ids = [128];
exports.modules = {

/***/ 80391:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ }),

/***/ 80489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(82147);
const _getimgprops = __webpack_require__(1830);
const _warnonce = __webpack_require__(98658);
const _imagecomponent = __webpack_require__(73380);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(35246));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 52451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(80489)


/***/ }),

/***/ 11440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(50954)


/***/ }),

/***/ 76714:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._check_private_redeclaration = _check_private_redeclaration;
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}


/***/ }),

/***/ 42288:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_apply_descriptor_get = _class_apply_descriptor_get;
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);

    return descriptor.value;
}


/***/ }),

/***/ 77908:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_apply_descriptor_set = _class_apply_descriptor_set;
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}


/***/ }),

/***/ 84637:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_extract_field_descriptor = _class_extract_field_descriptor;
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}


/***/ }),

/***/ 68233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _class_apply_descriptor_get = __webpack_require__(42288);
var _class_extract_field_descriptor = __webpack_require__(84637);

exports._ = __webpack_unused_export__ = _class_private_field_get;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor._(receiver, privateMap, "get");
    return _class_apply_descriptor_get._(receiver, descriptor);
}


/***/ }),

/***/ 21455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _check_private_redeclaration = __webpack_require__(76714);

exports._ = __webpack_unused_export__ = _class_private_field_init;
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration._(obj, privateMap);
    privateMap.set(obj, value);
}


/***/ }),

/***/ 56013:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _class_apply_descriptor_set = __webpack_require__(77908);
var _class_extract_field_descriptor = __webpack_require__(84637);

exports._ = __webpack_unused_export__ = _class_private_field_set;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor._(receiver, privateMap, "set");
    _class_apply_descriptor_set._(receiver, descriptor, value);
    return value;
}


/***/ }),

/***/ 4934:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ NextUIProvider)
/* harmony export */ });
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57572);
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12493);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
// src/provider.tsx



var NextUIProvider = ({ children, locale = "en" }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__/* .I18nProvider */ .bd, { locale, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__/* .OverlayProvider */ .N3, { children }) });
};




/***/ }),

/***/ 99820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ tooltip_default)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/import.mjs
var dist_import = __webpack_require__(3522);
;// CONCATENATED MODULE: ./node_modules/@react-stately/overlays/dist/import.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = (0, dist_import/* useControlledState */.zk)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    const open = (0, react_experimental_.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, react_experimental_.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, react_experimental_.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen: isOpen,
        setOpen: setOpen,
        open: open,
        close: close,
        toggle: toggle
    };
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/@react-stately/tooltip/dist/import.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $8796f90736e175cb$var$TOOLTIP_DELAY = 1500; // this seems to be a 1.5 second delay, check with design
const $8796f90736e175cb$var$TOOLTIP_COOLDOWN = 500;
let $8796f90736e175cb$var$tooltips = {};
let $8796f90736e175cb$var$tooltipId = 0;
let $8796f90736e175cb$var$globalWarmedUp = false;
let $8796f90736e175cb$var$globalWarmUpTimeout = null;
let $8796f90736e175cb$var$globalCooldownTimeout = null;
function $8796f90736e175cb$export$4d40659c25ecb50b(props = {}) {
    let { delay: delay = $8796f90736e175cb$var$TOOLTIP_DELAY , closeDelay: closeDelay = $8796f90736e175cb$var$TOOLTIP_COOLDOWN  } = props;
    let { isOpen: isOpen , open: open , close: close  } = (0, $fc909762b330b746$export$61c6a8c84e605fb6)(props);
    let id = (0, react_experimental_.useMemo)(()=>`${++$8796f90736e175cb$var$tooltipId}`, []);
    let closeTimeout = (0, react_experimental_.useRef)();
    let ensureTooltipEntry = ()=>{
        $8796f90736e175cb$var$tooltips[id] = hideTooltip;
    };
    let closeOpenTooltips = ()=>{
        for(let hideTooltipId in $8796f90736e175cb$var$tooltips)if (hideTooltipId !== id) {
            $8796f90736e175cb$var$tooltips[hideTooltipId](true);
            delete $8796f90736e175cb$var$tooltips[hideTooltipId];
        }
    };
    let showTooltip = ()=>{
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
        closeOpenTooltips();
        ensureTooltipEntry();
        $8796f90736e175cb$var$globalWarmedUp = true;
        open();
        if ($8796f90736e175cb$var$globalWarmUpTimeout) {
            clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
        }
        if ($8796f90736e175cb$var$globalCooldownTimeout) {
            clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
            $8796f90736e175cb$var$globalCooldownTimeout = null;
        }
    };
    let hideTooltip = (immediate)=>{
        if (immediate || closeDelay <= 0) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
            close();
        } else if (!closeTimeout.current) closeTimeout.current = setTimeout(()=>{
            closeTimeout.current = null;
            close();
        }, closeDelay);
        if ($8796f90736e175cb$var$globalWarmUpTimeout) {
            clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
        }
        if ($8796f90736e175cb$var$globalWarmedUp) {
            if ($8796f90736e175cb$var$globalCooldownTimeout) clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
            $8796f90736e175cb$var$globalCooldownTimeout = setTimeout(()=>{
                delete $8796f90736e175cb$var$tooltips[id];
                $8796f90736e175cb$var$globalCooldownTimeout = null;
                $8796f90736e175cb$var$globalWarmedUp = false;
            }, Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN, closeDelay));
        }
    };
    let warmupTooltip = ()=>{
        closeOpenTooltips();
        ensureTooltipEntry();
        if (!isOpen && !$8796f90736e175cb$var$globalWarmUpTimeout && !$8796f90736e175cb$var$globalWarmedUp) $8796f90736e175cb$var$globalWarmUpTimeout = setTimeout(()=>{
            $8796f90736e175cb$var$globalWarmUpTimeout = null;
            $8796f90736e175cb$var$globalWarmedUp = true;
            showTooltip();
        }, delay);
        else if (!isOpen) showTooltip();
    };
    // eslint-disable-next-line arrow-body-style
    (0, react_experimental_.useEffect)(()=>{
        return ()=>{
            clearTimeout(closeTimeout.current);
            let tooltip = $8796f90736e175cb$var$tooltips[id];
            if (tooltip) delete $8796f90736e175cb$var$tooltips[id];
        };
    }, [
        id
    ]);
    return {
        isOpen: isOpen,
        open: (immediate)=>{
            if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
            else showTooltip();
        },
        close: hideTooltip
    };
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(74997);
;// CONCATENATED MODULE: ./node_modules/@react-aria/tooltip/dist/import.mjs





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
    let domProps = (0, utils_dist_import/* filterDOMProps */.zL)(props, {
        labelable: true
    });
    let { hoverProps: hoverProps  } = (0, interactions_dist_import/* useHover */.XI)({
        onHoverStart: ()=>{
            return state === null || state === void 0 ? void 0 : state.open(true);
        },
        onHoverEnd: ()=>{
            return state === null || state === void 0 ? void 0 : state.close();
        }
    });
    return {
        tooltipProps: (0, utils_dist_import/* mergeProps */.dG)(domProps, hoverProps, {
            role: "tooltip"
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
    let { isDisabled: isDisabled , trigger: trigger  } = props;
    let tooltipId = (0, utils_dist_import/* useId */.Me)();
    let isHovered = (0, react_experimental_.useRef)(false);
    let isFocused = (0, react_experimental_.useRef)(false);
    let handleShow = ()=>{
        if (isHovered.current || isFocused.current) state.open(isFocused.current);
    };
    let handleHide = (immediate)=>{
        if (!isHovered.current && !isFocused.current) state.close(immediate);
    };
    (0, react_experimental_.useEffect)(()=>{
        let onKeyDown = (e)=>{
            if (ref && ref.current) // Escape after clicking something can give it keyboard focus
            // dismiss tooltip on esc key press
            {
                if (e.key === "Escape") {
                    e.stopPropagation();
                    state.close(true);
                }
            }
        };
        if (state.isOpen) {
            document.addEventListener("keydown", onKeyDown, true);
            return ()=>{
                document.removeEventListener("keydown", onKeyDown, true);
            };
        }
    }, [
        ref,
        state
    ]);
    let onHoverStart = ()=>{
        if (trigger === "focus") return;
        // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
        // interactions for example, hover will end. When hover is restored after that element disappears,
        // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
        // is the result of moving the mouse.
        if ((0, interactions_dist_import/* getInteractionModality */.Jz)() === "pointer") isHovered.current = true;
        else isHovered.current = false;
        handleShow();
    };
    let onHoverEnd = ()=>{
        if (trigger === "focus") return;
        // no matter how the trigger is left, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide();
    };
    let onPressStart = ()=>{
        // no matter how the trigger is pressed, we should close the tooltip
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let onFocus = ()=>{
        let isVisible = (0, interactions_dist_import/* isFocusVisible */.E)();
        if (isVisible) {
            isFocused.current = true;
            handleShow();
        }
    };
    let onBlur = ()=>{
        isFocused.current = false;
        isHovered.current = false;
        handleHide(true);
    };
    let { hoverProps: hoverProps  } = (0, interactions_dist_import/* useHover */.XI)({
        isDisabled: isDisabled,
        onHoverStart: onHoverStart,
        onHoverEnd: onHoverEnd
    });
    let { pressProps: pressProps  } = (0, interactions_dist_import/* usePress */.r7)({
        onPressStart: onPressStart
    });
    let { focusableProps: focusableProps  } = (0, focus_dist_import/* useFocusable */.kc)({
        isDisabled: isDisabled,
        onFocus: onFocus,
        onBlur: onBlur
    }, ref);
    return {
        triggerProps: {
            "aria-describedby": state.isOpen ? tooltipId : undefined,
            ...(0, utils_dist_import/* mergeProps */.dG)(focusableProps, hoverProps, pressProps)
        },
        tooltipProps: {
            id: tooltipId
        }
    };
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/import.mjs
var overlays_dist_import = __webpack_require__(12493);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var dist_clsx = __webpack_require__(80391);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
// src/utils.ts


function forwardRef(component) {
  return (0,react_experimental_.forwardRef)(component);
}
var toIterator = (obj) => {
  return {
    ...obj,
    [Symbol.iterator]: function() {
      const keys = Object.keys(this);
      let index = 0;
      return {
        next: () => {
          if (index >= keys.length) {
            return { done: true };
          }
          const key = keys[index];
          const value = this[key];
          index++;
          return { value: { key, value }, done: false };
        }
      };
    }
  };
};
var mapPropsVariants = (props, variantKeys, removeVariantProps = true) => {
  if (!variantKeys) {
    return [props, {}];
  }
  const picked = variantKeys.reduce((acc, key) => {
    if (key in props) {
      return { ...acc, [key]: props[key] };
    } else {
      return acc;
    }
  }, {});
  if (removeVariantProps) {
    const omitted = Object.keys(props).filter((key) => !variantKeys.includes(key)).reduce((acc, key) => ({ ...acc, [key]: props[key] }), {});
    return [omitted, picked];
  } else {
    return [props, picked];
  }
};
var mapPropsVariantsWithCommon = (originalProps, variantKeys, commonKeys) => {
  const props = Object.keys(originalProps).filter((key) => !variantKeys.includes(key) || (commonKeys == null ? void 0 : commonKeys.includes(key))).reduce((acc, key) => ({ ...acc, [key]: originalProps[key] }), {});
  const variants = variantKeys.reduce(
    (acc, key) => ({ ...acc, [key]: originalProps[key] }),
    {}
  );
  return [props, variants];
};
var cn = (/* unused pure expression or super */ null && (clsx));



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-2PIR7DFM.mjs
// src/utils/variants.ts
var solid = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
};
var shadow = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
  default: "bg-default/40 text-default-foreground",
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  success: "bg-success/20 text-success-600 dark:text-success",
  warning: "bg-warning/20 text-warning-600 dark:text-warning",
  danger: "bg-danger/20 text-danger dark:text-danger-500",
  foreground: "bg-foreground/10 text-foreground"
};
var faded = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger",
  foreground: "border-default bg-default-100 text-foreground"
};
var light = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground"
};
var ghost = {
  default: "border-default text-default-foreground hover:!bg-default",
  primary: "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
  secondary: "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
  success: "border-success text-success hover:!text-success-foreground hover:!bg-success",
  warning: "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
  danger: "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-WA5F6AED.mjs
// src/types.ts
var spacingScaleKeys = [
  "0",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
  "1",
  "2",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96"
];
var mappedSpacingScaleKeys = spacingScaleKeys.map((key) => `unit-${key}`);



;// CONCATENATED MODULE: ./node_modules/tailwind-variants/dist/chunk-HHQZCQ2Q.js
var chunk_HHQZCQ2Q_o=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,c=t=>!t||typeof t!="object"||Object.keys(t).length===0,chunk_HHQZCQ2Q_p=(t,e)=>JSON.stringify(t)===JSON.stringify(e);function f(t,e){t.forEach(function(n){Array.isArray(n)?f(n,e):e.push(n);});}function s(t){let e=[];return f(t,e),e}var chunk_HHQZCQ2Q_y=(...t)=>s(t).filter(Boolean),chunk_HHQZCQ2Q_i=(t,e)=>{let n={};for(let r in t)e!=null&&e.hasOwnProperty(r)?n[r]=typeof t[r]=="object"?chunk_HHQZCQ2Q_i(t[r],e[r]):e[r]+" "+t[r]:n[r]=t[r];for(let r in e)n.hasOwnProperty(r)||(n[r]=e[r]);return n},chunk_HHQZCQ2Q_a=t=>!t||typeof t!="string"?t:t.replace(/\s+/g," ").trim();



;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups,
    _config$conflictingCl = config.conflictingClassGroupModifiers,
    conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  var theme = config.theme,
    prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
      classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
        classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
      classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
            value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }
  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':';
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName,
      maybePostfixModifierPosition: maybePostfixModifierPosition
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/config-utils.mjs




function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}


//# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
    getClassGroupId = configUtils.getClassGroupId,
    getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
      modifiers = _splitModifiers.modifiers,
      hasImportantModifier = _splitModifiers.hasImportantModifier,
      baseClassName = _splitModifiers.baseClassName,
      maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName,
      hasPostfixModifier: hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId,
      classGroupId = parsed.classGroupId,
      hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  var resolvedValue;
  var string = '';
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
      restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, 'size', isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, 'url', isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */
var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith('url(');
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}


//# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');
  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };
  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
    return ['auto', isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
    return ['auto', isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };
  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };
  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };
  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  };
  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };
  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };
  var getNumber = function getNumber() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal'].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal'].concat(getAlign(), ['baseline'])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline'])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-configs.mjs
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
function mergeConfigs(baseConfig, configExtension) {
  for (var key in configExtension) {
    mergePropertyRecursively(baseConfig, key, configExtension[key]);
  }
  return baseConfig;
}
var merge_configs_hasOwnProperty = Object.prototype.hasOwnProperty;
var overrideTypes = /*#__PURE__*/new Set(['string', 'number', 'boolean']);
function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
  if (!merge_configs_hasOwnProperty.call(baseObject, mergeKey) || overrideTypes.has(typeof mergeValue) || mergeValue === null) {
    baseObject[mergeKey] = mergeValue;
    return;
  }
  if (Array.isArray(mergeValue) && Array.isArray(baseObject[mergeKey])) {
    baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue);
    return;
  }
  if (typeof mergeValue === 'object' && typeof baseObject[mergeKey] === 'object') {
    if (baseObject[mergeKey] === null) {
      baseObject[mergeKey] = mergeValue;
      return;
    }
    for (var nextKey in mergeValue) {
      mergePropertyRecursively(baseObject[mergeKey], nextKey, mergeValue[nextKey]);
    }
  }
}


//# sourceMappingURL=merge-configs.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs




function extendTailwindMerge(configExtension) {
  for (var _len = arguments.length, createConfig = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    createConfig[_key - 1] = arguments[_key];
  }
  return typeof configExtension === 'function' ? createTailwindMerge.apply(void 0, [getDefaultConfig, configExtension].concat(createConfig)) : createTailwindMerge.apply(void 0, [function () {
    return mergeConfigs(getDefaultConfig(), configExtension);
  }].concat(createConfig));
}


//# sourceMappingURL=extend-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-variants/dist/index.js



var de={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},K=e=>e||void 0,M=(...e)=>K(s(e).filter(Boolean).join(" ")),B=null,v={},k=!1,j=(...e)=>C=>C.twMerge?((!B||k)&&(k=!1,B=c(v)?twMerge:extendTailwindMerge(v)),K(B(M(e)))):M(e),_=(e,C)=>{for(let y in C)e.hasOwnProperty(y)?e[y]=M(e[y],C[y]):e[y]=C[y];return e},me=(e$1,C)=>{var o,F,R,q,P;let{slots:y={},variants:p={},compoundVariants:V=[],compoundSlots:A=[],defaultVariants:ee={}}=e$1,i={...de,...C},O=M((o=e$1==null?void 0:e$1.extend)==null?void 0:o.base,e$1==null?void 0:e$1.base),d=chunk_HHQZCQ2Q_i(p,(F=e$1==null?void 0:e$1.extend)==null?void 0:F.variants),h={...(R=e$1==null?void 0:e$1.extend)==null?void 0:R.defaultVariants,...ee};!c(i.twMergeConfig)&&!chunk_HHQZCQ2Q_p(i.twMergeConfig,v)&&(k=!0,v=i.twMergeConfig);let $=c(y)?{}:{base:e$1==null?void 0:e$1.base,...y},w=c((q=e$1==null?void 0:e$1.extend)==null?void 0:q.slots)?$:_((P=e$1==null?void 0:e$1.extend)==null?void 0:P.slots,c($)?{base:e$1==null?void 0:e$1.base}:$),b$1=l=>{var G,H,I,J;if(c(d)&&c(y)&&c((G=e$1==null?void 0:e$1.extend)==null?void 0:G.slots))return j(O,l==null?void 0:l.class,l==null?void 0:l.className)(i);if(V&&!Array.isArray(V))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof V}`);if(A&&!Array.isArray(A))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof A}`);let re=(t,r,f=[],s)=>{let n=f;if(typeof r=="string")n.push(chunk_HHQZCQ2Q_a(r).split(" ").map(a=>`${t}:${a}`));else if(Array.isArray(r))n.push(r.flatMap(a=>`${t}:${a}`));else if(typeof r=="object"&&typeof s=="string"){let a=r==null?void 0:r[s];if(a&&typeof a=="string"){let u=chunk_HHQZCQ2Q_a(a);n[s]=n[s]?[...n[s],...u.split(" ").map(g=>`${t}:${g}`)]:u.split(" ").map(g=>`${t}:${g}`);}else Array.isArray(a)&&a.length>0&&(n[s]=a.flatMap(u=>`${t}:${u}`));}return n},U=(t,r=d,f=null)=>{let s=r==null?void 0:r[t];if(!s||c(s))return null;let n=l==null?void 0:l[t];if(n===null)return null;let a$1=chunk_HHQZCQ2Q_o(n),u=Array.isArray(i.responsiveVariants)&&i.responsiveVariants.length>0||i.responsiveVariants===!0,g=h==null?void 0:h[t],m=[];typeof a$1=="object"&&u&&(m=Object.keys(a$1).reduce((S,x)=>{let L=a$1[x],ue=s==null?void 0:s[L];return x==="initial"?(g=L,S):Array.isArray(i.responsiveVariants)&&!i.responsiveVariants.includes(x)?S:re(x,ue,S,f)},[]));let N=s[a$1]||s[chunk_HHQZCQ2Q_o(g)];return typeof m=="object"&&typeof f=="string"&&m[f]?_(m,N):m.length>0?[N,...m]:N},ae=()=>d?Object.keys(d).map(t=>U(t,d)):null,ne=t=>!d||typeof d!="object"?null:Object.keys(d).reduce((r,f)=>{let s=U(f,d,t),n=t==="base"&&typeof s=="string"?s:s&&s[t];return n&&r.push(n),r},[]),se=l&&Object.fromEntries(Object.entries(l).filter(([,t])=>t!==void 0)),W=t=>{var f;let r=typeof(l==null?void 0:l[t])=="object"?{[t]:(f=l[t])==null?void 0:f.initial}:{};return {...h,...se,...r}},z=(t=[])=>t==null?void 0:t.filter(({class:r,className:f,...s})=>Object.entries(s).every(([n,a])=>{let u=W(n);return Array.isArray(a)?a.includes(u[n]):u[n]===a})).flatMap(({class:r,className:f})=>[r,f]),D=()=>{var f;let t=z(V),r=z((f=e$1==null?void 0:e$1.extend)==null?void 0:f.compoundVariants);return chunk_HHQZCQ2Q_y(r,t)},fe=()=>{let t=D();return Array.isArray(t)?t.reduce((r,f)=>{if(typeof f=="string"&&(r.base=j(r.base,f)(i)),typeof f=="object"){let s=Object.keys(f);for(let n of s)r[n]=j(r[n],f[n])(i);}return r},{}):t},le=()=>A.length<1?null:A.reduce((t,r)=>{let{slots:f=[],class:s,className:n,...a}=r;if(!c(a)){let u=Object.keys(a);for(let g of u){let m=W(g)[g];if(!m||m!==a[g])return t}}for(let u of f)t[u]||(t[u]=[]),t[u].push([s,n]);return t},{});if(!c(y)||!c((H=e$1==null?void 0:e$1.extend)==null?void 0:H.slots)){let t=(I=fe())!=null?I:[],r=(J=le())!=null?J:[];return {...typeof w=="object"&&!c(w)?Object.keys(w).reduce((s,n)=>(s[n]=a=>j(w[n],ne(n),t==null?void 0:t[n],r==null?void 0:r[n],a==null?void 0:a.class,a==null?void 0:a.className)(i),s),{}):{}}}return j(O,ae(),D(),l==null?void 0:l.class,l==null?void 0:l.className)(i)},te=()=>{if(!(!d||typeof d!="object"))return Object.keys(d)};return b$1.variantKeys=te(),b$1.base=O,b$1.slots=w,b$1.variants=d,b$1.defaultVariants=h,b$1.compoundSlots=A,b$1.compoundVariants=V,b$1};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs


// src/utils/tv.ts

var COMMON_UNITS = ["small", "medium", "large"];
var tv = (options, config) => {
  var _a, _b, _c;
  return me(options, {
    ...config,
    twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
    twMergeConfig: {
      ...config == null ? void 0 : config.twMergeConfig,
      theme: {
        ...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
        opacity: ["disabled"],
        spacing: ["divider", "unit", ...mappedSpacingScaleKeys],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS
      },
      classGroups: {
        ...(_c = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c.classGroups,
        shadow: [{ shadow: COMMON_UNITS }],
        "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
        "bg-image": ["bg-stripe-gradient"],
        "min-w": [
          {
            "min-w": ["unit", ...mappedSpacingScaleKeys]
          }
        ],
        "min-h": [
          {
            "min-h": ["unit", ...mappedSpacingScaleKeys]
          }
        ]
      }
    }
  });
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-T7JNS25F.mjs
// src/utils/classes.ts
var baseStyles = (prefix) => ({
  color: `hsl(var(--${prefix}-foreground))`,
  backgroundColor: `hsl(var(--${prefix}-background))`
});
var focusVisibleClasses = (/* unused pure expression or super */ null && ([
  "focus-visible:z-10",
  "focus-visible:outline-2",
  "focus-visible:outline-focus",
  "focus-visible:outline-offset-2"
]));
var dataFocusVisibleClasses = [
  "outline-none",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];
var groupDataFocusVisibleClasses = (/* unused pure expression or super */ null && ([
  "outline-none",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background"
]));
var ringClasses = (/* unused pure expression or super */ null && ([
  "outline-none",
  "ring-2",
  "ring-focus",
  "ring-offset-2",
  "ring-offset-background"
]));
var translateCenterClasses = (/* unused pure expression or super */ null && ([
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2"
]));
var absoluteFullClasses = (/* unused pure expression or super */ null && (["absolute", "inset-0"]));



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-GF5XUX5Z.mjs




// src/components/popover.ts
var popover = tv({
  slots: {
    base: [
      "z-10",
      "relative",
      "inline-flex",
      "flex-col",
      "items-center",
      "justify-center",
      "box-border",
      "subpixel-antialiased",
      "px-4",
      "py-1",
      "outline-none",
      "box-border",
      ...dataFocusVisibleClasses
    ],
    trigger: ["z-10"],
    backdrop: ["hidden"],
    arrow: [
      "z-[-1]",
      "absolute",
      "rotate-45",
      "bg-inherit",
      "w-2.5",
      "h-2.5",
      "rounded-sm",
      "data-[placement=top]:-bottom-1",
      "data-[placement=top]:-translate-x-1/2",
      "data-[placement=top-start]:-bottom-1",
      "data-[placement=top-start]:-translate-x-8",
      "data-[placement=top-end]:-bottom-1",
      "data-[placement=top-end]:translate-x-6",
      "data-[placement=bottom]:-top-1",
      "data-[placement=bottom]:-translate-x-1/2",
      "data-[placement=bottom-start]:-top-1",
      "data-[placement=bottom-start]:-translate-x-8",
      "data-[placement=bottom-end]:-top-1",
      "data-[placement=bottom-end]:translate-x-6",
      "data-[placement=left]:-right-1",
      "data-[placement=left]:-translate-y-1/2",
      "data-[placement=left-start]:-right-1",
      "data-[placement=left-start]:-translate-y-3",
      "data-[placement=left-end]:-right-1",
      "data-[placement=left-end]:translate-y-0.5",
      "data-[placement=right]:-left-1",
      "data-[placement=right]:-translate-y-1/2",
      "data-[placement=right-start]:-left-1",
      "data-[placement=right-start]:-translate-y-3",
      "data-[placement=right-end]:-left-1",
      "data-[placement=right-end]:translate-y-0.5"
    ]
  },
  variants: {
    size: {
      sm: { base: "text-tiny" },
      md: { base: "text-small" },
      lg: { base: "text-medium" }
    },
    color: {
      default: {
        base: "bg-content1",
        arrow: "shadow-small"
      },
      foreground: {
        base: colorVariants.solid.foreground
      },
      primary: {
        base: colorVariants.solid.primary
      },
      secondary: {
        base: colorVariants.solid.secondary
      },
      success: {
        base: colorVariants.solid.success
      },
      warning: {
        base: colorVariants.solid.warning
      },
      danger: {
        base: colorVariants.solid.danger
      }
    },
    radius: {
      none: { base: "rounded-none" },
      sm: { base: "rounded-small" },
      md: { base: "rounded-medium" },
      lg: { base: "rounded-large" },
      full: { base: "rounded-full" }
    },
    shadow: {
      sm: {
        base: "shadow-small"
      },
      md: {
        base: "shadow-medium"
      },
      lg: {
        base: "shadow-large"
      }
    },
    backdrop: {
      transparent: {},
      opaque: {
        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
      },
      blur: {
        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
      }
    },
    triggerScaleOnOpen: {
      true: {
        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
      },
      false: {}
    },
    disableAnimation: {
      true: {
        base: "animate-none"
      }
    }
  },
  defaultVariants: {
    color: "default",
    radius: "lg",
    size: "md",
    shadow: "md",
    backdrop: "transparent",
    disableAnimation: false,
    triggerScaleOnOpen: true
  },
  compoundVariants: [
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "block w-full h-full fixed inset-0 -z-30"
      }
    }
  ]
});



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
// src/clsx.ts
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function chunk_6BQDBGF4_clsx(...args) {
  var i = 0, tmp, x, str = "";
  while (i < args.length) {
    if (tmp = args[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
// src/assertion.ts
var __DEV__ = (/* unused pure expression or super */ null && ("production" !== "production"));
var __TEST__ = (/* unused pure expression or super */ null && ("production" === "test"));
function isArray(value) {
  return Array.isArray(value);
}
function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isEmpty(value) {
  if (isArray(value))
    return isEmptyArray(value);
  if (isObject(value))
    return isEmptyObject(value);
  if (value == null || value === "")
    return true;
  return false;
}
function isFunction(value) {
  return typeof value === "function";
}
var dataAttr = (condition) => condition ? "true" : void 0;
var isNumeric = (value) => value != null && parseInt(value.toString(), 10) > 0;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-CIZQCQPA.mjs
"use client";

// src/refs.ts

function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
"use client";

// src/dom.ts

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
function getUserAgentBrowser(navigator) {
  const { userAgent: ua, vendor } = navigator;
  const android = /(android)/i.test(ua);
  switch (true) {
    case /CriOS/.test(ua):
      return "Chrome for iOS";
    case /Edg\//.test(ua):
      return "Edge";
    case (android && /Silk\//.test(ua)):
      return "Silk";
    case (/Chrome/.test(ua) && /Google Inc/.test(vendor)):
      return "Chrome";
    case /Firefox\/\d+\.\d+$/.test(ua):
      return "Firefox";
    case android:
      return "AOSP";
    case /MSIE|Trident/.test(ua):
      return "IE";
    case (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(ua)):
      return "Safari";
    case /AppleWebKit/.test(ua):
      return "WebKit";
    default:
      return null;
  }
}
function getUserAgentOS(navigator) {
  const { userAgent: ua, platform } = navigator;
  switch (true) {
    case /Android/.test(ua):
      return "Android";
    case /iPhone|iPad|iPod/.test(platform):
      return "iOS";
    case /Win/.test(platform):
      return "Windows";
    case /Mac/.test(platform):
      return "Mac";
    case /CrOS/.test(ua):
      return "Chrome OS";
    case /Firefox/.test(ua):
      return "Firefox OS";
    default:
      return null;
  }
}
function detectDeviceType(navigator) {
  const { userAgent: ua } = navigator;
  if (/(tablet)|(iPad)|(Nexus 9)/i.test(ua))
    return "tablet";
  if (/(mobi)/i.test(ua))
    return "phone";
  return "desktop";
}
function detectOS(os) {
  if (!isBrowser)
    return false;
  return getUserAgentOS(window.navigator) === os;
}
function detectBrowser(browser) {
  if (!isBrowser)
    return false;
  return getUserAgentBrowser(window.navigator) === browser;
}
function detectTouch() {
  if (!isBrowser)
    return false;
  return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
}
function createDOMRef(ref) {
  return {
    UNSAFE_getDOMNode() {
      return ref.current;
    }
  };
}
function createFocusableRef(domRef, focusableRef = domRef) {
  return {
    ...createDOMRef(domRef),
    focus() {
      if (focusableRef.current) {
        focusableRef.current.focus();
      }
    }
  };
}
function useDOMRef(ref) {
  const domRef = useRef(null);
  useImperativeHandle(ref, () => domRef.current);
  return domRef;
}
function useFocusableRef(ref, focusableRef) {
  const domRef = useRef(null);
  useImperativeHandle(ref, () => createFocusableRef(domRef, focusableRef));
  return domRef;
}
function useSyncRef(context, ref) {
  useLayoutEffect(() => {
    if (context && context.ref && ref && ref.current) {
      context.ref.current = ref.current;
      return () => {
        var _a;
        if ((_a = context.ref) == null ? void 0 : _a.current) {
          context.ref.current = null;
        }
      };
    }
  }, [context, ref]);
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/aria-utils/dist/chunk-WQVQ7P2I.mjs
"use client";

// src/overlays/utils.ts
var getTransformOrigins = (placement) => {
  const origins = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (origins == null ? void 0 : origins[placement]) || {};
};
var toReactAriaPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    "top-start": "top start",
    "top-end": "top end",
    "bottom-start": "bottom start",
    "bottom-end": "bottom end",
    "left-start": "left top",
    "left-end": "left bottom",
    "right-start": "right top",
    "right-end": "right bottom"
  };
  return mapPositions[placement];
};
var toOverlayPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    center: "top"
  };
  return mapPositions[placement];
};
var getShouldUseAxisPlacement = (axisPlacement, overlayPlacement) => {
  if (overlayPlacement.includes("-")) {
    const [position] = overlayPlacement.split("-");
    if (position.includes(axisPlacement)) {
      return false;
    }
  }
  return true;
};
var getArrowPlacement = (dynamicPlacement, placement) => {
  if (placement.includes("-")) {
    const [, position] = placement.split("-");
    return `${dynamicPlacement}-${position}`;
  }
  return dynamicPlacement;
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/tooltip/dist/chunk-62U42LRQ.mjs
"use client";

// src/use-tooltip.ts












function useTooltip(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);
  const {
    ref,
    as,
    isOpen: isOpenProp,
    content,
    children,
    defaultOpen,
    onOpenChange,
    isDisabled,
    trigger: triggerAction,
    shouldFlip = true,
    containerPadding = 12,
    placement: placementProp = "top",
    delay = 0,
    closeDelay = 500,
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    isDismissable,
    shouldCloseOnBlur = true,
    portalContainer,
    isKeyboardDismissDisabled = false,
    shouldCloseOnInteractOutside,
    className,
    onClose,
    motionProps,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "div";
  const state = $8796f90736e175cb$export$4d40659c25ecb50b({
    delay,
    closeDelay,
    isDisabled,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange: (isOpen2) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      if (!isOpen2) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const triggerRef = (0,react_experimental_.useRef)(null);
  const overlayRef = (0,react_experimental_.useRef)(null);
  const tooltipId = (0,react_experimental_.useId)();
  const isOpen = state.isOpen && !isDisabled;
  (0,react_experimental_.useImperativeHandle)(
    ref,
    () => createDOMRef(overlayRef)
  );
  const { triggerProps, tooltipProps: triggerTooltipProps } = $4e1b34546679e357$export$a6da6c504e4bba8b(
    {
      isDisabled,
      trigger: triggerAction
    },
    state,
    triggerRef
  );
  const { tooltipProps } = $326e436e94273fe1$export$1c4b08e0eca38426(
    {
      isOpen,
      ...(0,utils_dist_import/* mergeProps */.dG)(props, triggerTooltipProps)
    },
    state
  );
  const {
    overlayProps: positionProps,
    arrowProps,
    placement
  } = (0,overlays_dist_import/* useOverlayPosition */.tN)({
    isOpen,
    targetRef: triggerRef,
    placement: toReactAriaPlacement(placementProp),
    overlayRef,
    offset: showArrow ? offset + 3 : offset,
    crossOffset,
    shouldFlip,
    containerPadding
  });
  const { overlayProps } = (0,overlays_dist_import/* useOverlay */.Ir)(
    {
      isOpen,
      onClose: state.close,
      isDismissable,
      shouldCloseOnBlur,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside
    },
    overlayRef
  );
  const slots = (0,react_experimental_.useMemo)(
    () => {
      var _a, _b, _c;
      return popover({
        ...variantProps,
        radius: (_a = originalProps == null ? void 0 : originalProps.radius) != null ? _a : "md",
        size: (_b = originalProps == null ? void 0 : originalProps.size) != null ? _b : "md",
        shadow: (_c = originalProps == null ? void 0 : originalProps.shadow) != null ? _c : "sm"
      });
    },
    [
      ...Object.values(variantProps),
      originalProps == null ? void 0 : originalProps.radius,
      originalProps == null ? void 0 : originalProps.size,
      originalProps == null ? void 0 : originalProps.shadow
    ]
  );
  const baseStyles = chunk_6BQDBGF4_clsx(classNames == null ? void 0 : classNames.base, className);
  const getTriggerProps = (0,react_experimental_.useCallback)(
    (props2 = {}, _ref = null) => ({
      ...(0,utils_dist_import/* mergeProps */.dG)(triggerProps, props2),
      ref: mergeRefs(_ref, triggerRef),
      "aria-describedby": isOpen ? tooltipId : void 0
    }),
    [triggerProps, isOpen, tooltipId, state]
  );
  const getTooltipProps = (0,react_experimental_.useCallback)(
    () => ({
      ref: overlayRef,
      "data-open": dataAttr(isOpen),
      "data-disabled": dataAttr(isDisabled),
      "data-placement": getArrowPlacement(placement, placementProp),
      className: slots.base({ class: baseStyles }),
      ...(0,utils_dist_import/* mergeProps */.dG)(tooltipProps, overlayProps, otherProps),
      style: (0,utils_dist_import/* mergeProps */.dG)(positionProps.style, otherProps.style, props.style),
      id: tooltipId
    }),
    [
      baseStyles,
      overlayProps,
      otherProps,
      overlayRef,
      positionProps,
      slots,
      tooltipId,
      tooltipProps
    ]
  );
  const getArrowProps = (0,react_experimental_.useCallback)(
    () => ({
      className: slots.arrow({ class: classNames == null ? void 0 : classNames.arrow }),
      "data-placement": getArrowPlacement(placement, placementProp),
      ...arrowProps
    }),
    [arrowProps, placement, placementProp, slots, classNames]
  );
  return {
    Component,
    content,
    children,
    isOpen,
    triggerRef,
    showArrow,
    portalContainer,
    placement: placementProp,
    disableAnimation: originalProps == null ? void 0 : originalProps.disableAnimation,
    isDisabled,
    motionProps,
    getTriggerProps,
    getTooltipProps,
    getArrowProps
  };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs


/**
 * @public
 */
const MotionConfigContext = (0,react_experimental_.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never",
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/index.mjs


const MotionContext = (0,react_experimental_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs


/**
 * @public
 */
const PresenceContext_PresenceContext = (0,react_experimental_.createContext)(null);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-browser.mjs
const is_browser_isBrowser = typeof document !== "undefined";



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs



const useIsomorphicLayoutEffect = is_browser_isBrowser ? react_experimental_.useLayoutEffect : react_experimental_.useEffect;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LazyContext.mjs


const LazyContext = (0,react_experimental_.createContext)({ strict: false });



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs







function useVisualElement(Component, visualState, props, createVisualElement) {
    const { visualElement: parent } = (0,react_experimental_.useContext)(MotionContext);
    const lazyContext = (0,react_experimental_.useContext)(LazyContext);
    const presenceContext = (0,react_experimental_.useContext)(PresenceContext_PresenceContext);
    const reducedMotionConfig = (0,react_experimental_.useContext)(MotionConfigContext).reducedMotion;
    const visualElementRef = (0,react_experimental_.useRef)();
    /**
     * If we haven't preloaded a renderer, check to see if we have one lazy-loaded
     */
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
        visualElementRef.current = createVisualElement(Component, {
            visualState,
            parent,
            props,
            presenceContext,
            blockInitialAnimation: presenceContext
                ? presenceContext.initial === false
                : false,
            reducedMotionConfig,
        });
    }
    const visualElement = visualElementRef.current;
    (0,react_experimental_.useInsertionEffect)(() => {
        visualElement && visualElement.update(props, presenceContext);
    });
    /**
     * Cache this value as we want to know whether HandoffAppearAnimations
     * was present on initial render - it will be deleted after this.
     */
    const canHandoff = (0,react_experimental_.useRef)(Boolean(window.HandoffAppearAnimations));
    useIsomorphicLayoutEffect(() => {
        if (!visualElement)
            return;
        visualElement.render();
        /**
         * Ideally this function would always run in a useEffect.
         *
         * However, if we have optimised appear animations to handoff from,
         * it needs to happen synchronously to ensure there's no flash of
         * incorrect styles in the event of a hydration error.
         *
         * So if we detect a situtation where optimised appear animations
         * are running, we use useLayoutEffect to trigger animations.
         */
        if (canHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
    });
    (0,react_experimental_.useEffect)(() => {
        if (!visualElement)
            return;
        visualElement.updateFeatures();
        if (!canHandoff.current && visualElement.animationState) {
            visualElement.animationState.animateChanges();
        }
        /**
         * Once we've handed off animations we can delete HandoffAppearAnimations
         * so components added after the initial render can animate changes
         * in useEffect vs useLayoutEffect.
         */
        window.HandoffAppearAnimations = undefined;
        canHandoff.current = false;
    });
    return visualElement;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
    return (typeof ref === "object" &&
        Object.prototype.hasOwnProperty.call(ref, "current"));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs



/**
 * Creates a ref function that, when called, hydrates the provided
 * external ref and VisualElement.
 */
function useMotionRef(visualState, visualElement, externalRef) {
    return (0,react_experimental_.useCallback)((instance) => {
        instance && visualState.mount && visualState.mount(instance);
        if (visualElement) {
            instance
                ? visualElement.mount(instance)
                : visualElement.unmount();
        }
        if (externalRef) {
            if (typeof externalRef === "function") {
                externalRef(instance);
            }
            else if (isRefObject(externalRef)) {
                externalRef.current = instance;
            }
        }
    }, 
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [visualElement]);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs




function isControllingVariants(props) {
    return (isAnimationControls(props.animate) ||
        variantProps.some((name) => isVariantLabel(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs



function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
        const { initial, animate } = props;
        return {
            initial: initial === false || isVariantLabel(initial)
                ? initial
                : undefined,
            animate: isVariantLabel(animate) ? animate : undefined,
        };
    }
    return props.inherit !== false ? context : {};
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/MotionContext/create.mjs




function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, (0,react_experimental_.useContext)(MotionContext));
    return (0,react_experimental_.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/definitions.mjs
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/load-features.mjs


function loadFeatures(features) {
    for (const key in features) {
        featureDefinitions[key] = {
            ...featureDefinitions[key],
            ...features[key],
        };
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs


const LayoutGroupContext = (0,react_experimental_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs


/**
 * Internal, exported only for usage in Framer
 */
const SwitchLayoutGroupContext = (0,react_experimental_.createContext)({});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
const motionComponentSymbol = Symbol.for("motionComponentSymbol");



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/index.mjs














/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 */
function motion_createMotionComponent({ preloadedFeatures, createVisualElement, useRender, useVisualState, Component, }) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    function MotionComponent(props, externalRef) {
        /**
         * If we need to measure the element we load this functionality in a
         * separate class component in order to gain access to getSnapshotBeforeUpdate.
         */
        let MeasureLayout;
        const configAndProps = {
            ...(0,react_experimental_.useContext)(MotionConfigContext),
            ...props,
            layoutId: useLayoutId(props),
        };
        const { isStatic } = configAndProps;
        const context = useCreateMotionContext(props);
        const visualState = useVisualState(props, isStatic);
        if (!isStatic && is_browser_isBrowser) {
            /**
             * Create a VisualElement for this component. A VisualElement provides a common
             * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
             * providing a way of rendering to these APIs outside of the React render loop
             * for more performant animations and interactions
             */
            context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
            /**
             * Load Motion gesture and animation features. These are rendered as renderless
             * components so each feature can optionally make use of React lifecycle methods.
             */
            const initialLayoutGroupConfig = (0,react_experimental_.useContext)(SwitchLayoutGroupContext);
            const isStrict = (0,react_experimental_.useContext)(LazyContext).strict;
            if (context.visualElement) {
                MeasureLayout = context.visualElement.loadFeatures(
                // Note: Pass the full new combined props to correctly re-render dynamic feature components.
                configAndProps, isStrict, preloadedFeatures, initialLayoutGroupConfig);
            }
        }
        /**
         * The mount order and hierarchy is specific to ensure our element ref
         * is hydrated by the time features fire their effects.
         */
        return (react_experimental_.createElement(MotionContext.Provider, { value: context },
            MeasureLayout && context.visualElement ? (react_experimental_.createElement(MeasureLayout, { visualElement: context.visualElement, ...configAndProps })) : null,
            useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)));
    }
    const ForwardRefComponent = (0,react_experimental_.forwardRef)(MotionComponent);
    ForwardRefComponent[motionComponentSymbol] = Component;
    return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
    const layoutGroupId = (0,react_experimental_.useContext)(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== undefined
        ? layoutGroupId + "-" + layoutId
        : layoutId;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs


/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(createConfig) {
    function custom(Component, customMotionComponentConfig = {}) {
        return motion_createMotionComponent(createConfig(Component, customMotionComponentConfig));
    }
    if (typeof Proxy === "undefined") {
        return custom;
    }
    /**
     * A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
     * Rather than generating them anew every render.
     */
    const componentCache = new Map();
    return new Proxy(custom, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (_target, key) => {
            /**
             * If this element doesn't exist in the component cache, create it and cache.
             */
            if (!componentCache.has(key)) {
                componentCache.set(key, custom(key));
            }
            return componentCache.get(key);
        },
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
 * We keep these listed seperately as we use the lowercase tag names as part
 * of the runtime bundle to detect SVG components
 */
const lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs


function isSVGComponent(Component) {
    if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        Component.includes("-")) {
        return false;
    }
    else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 ||
        /**
         * If it contains a capital letter, it's an SVG component
         */
        /[A-Z]/.test(Component)) {
        return true;
    }
    return false;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs



function isForcedMotionValue(key, { layout, layoutId }) {
    return (transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!scaleCorrectors[key] || key === "opacity")));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
const isMotionValue = (value) => Boolean(value && value.getVelocity);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs


const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, { enableHardwareAcceleration = true, allowTransformNone = true, }, transformIsDefault, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = transformPropOrder[i];
        if (transform[key] !== undefined) {
            const transformName = translateAlias[key] || key;
            transformString += `${transformName}(${transform[key]}) `;
        }
    }
    if (enableHardwareAcceleration && !transform.z) {
        transformString += "translateZ(0)";
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = checkStringStartsWith("--");
const isCSSVariableToken = checkStringStartsWith("var(--");
const cssVariableRegex = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/clamp.mjs
const clamp = (min, max, v) => Math.min(Math.max(v, min), max);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/numbers/index.mjs


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/utils.mjs
/**
 * TODO: When we move from string as a source of truth to data models
 * everything in this folder should probably be referred to as models vs types
 */
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
    return typeof v === "string";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/numbers/units.mjs


const createUnitType = (unit) => ({
    test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs


const type_int_int = {
    ...number,
    transform: Math.round,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs




const numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    radius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    size: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    // Transform props
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale: scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px,
    // Misc
    zIndex: type_int_int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: type_int_int,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs






function buildHTMLStyles(state, latestValues, options, transformTemplate) {
    const { style, vars, transform, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    let transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept seperately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        /**
         * If this is a CSS variable we don't do any further processing.
         */
        if (isCSSVariableName(key)) {
            vars[key] = value;
            continue;
        }
        // Convert the value to its default value type, ie 0 -> "0px"
        const valueType = numberValueTypes[key];
        const valueAsType = getValueAsType(value, valueType);
        if (transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            // If we already know we have a non-default transform, early return
            if (!transformIsNone)
                continue;
            // Otherwise check to see if this is a default transform
            if (value !== (valueType.default || 0))
                transformIsNone = false;
        }
        else if (key.startsWith("origin")) {
            // If this is a transform origin, flag and enable further transform-origin processing
            hasTransformOrigin = true;
            transformOrigin[key] = valueAsType;
        }
        else {
            style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = buildTransform(state.transform, options, transformIsNone, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
const createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/use-props.mjs






function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
        if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
            target[key] = source[key];
        }
    }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
    return (0,react_experimental_.useMemo)(() => {
        const state = createHtmlRenderState();
        buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
        return Object.assign({}, state.vars, state.style);
    }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
    const styleProp = props.style || {};
    const style = {};
    /**
     * Copy non-Motion Values straight into style
     */
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
    return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
    // The `any` isn't ideal but it is the type of createElement props argument
    const htmlProps = {};
    const style = useStyle(props, visualState, isStatic);
    if (props.drag && props.dragListener !== false) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        style.userSelect =
            style.WebkitUserSelect =
                style.WebkitTouchCallout =
                    "none";
        // Disable scrolling on the draggable direction
        style.touchAction =
            props.drag === true
                ? "none"
                : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === undefined &&
        (props.onTap || props.onTapStart || props.whileTap)) {
        htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
 * A list of all valid MotionProps.
 *
 * @privateRemarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
const validMotionProps = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "ignoreStrict",
    "viewport",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return (key.startsWith("while") ||
        (key.startsWith("drag") && key !== "draggable") ||
        key.startsWith("layout") ||
        key.startsWith("onTap") ||
        key.startsWith("onPan") ||
        validMotionProps.has(key));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs


let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
    if (!isValidProp)
        return;
    // Explicitly filter our events
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    /**
     * We attempt to import this package but require won't be defined in esm environments, in that case
     * isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
     * in favour of explicit injection.
     */
    loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
        /**
         * values is considered a valid prop by Emotion, so if it's present
         * this will be rendered out to the DOM unless explicitly filtered.
         *
         * We check the type as it could be used with the `feColorMatrix`
         * element, which we support.
         */
        if (key === "values" && typeof props.values === "object")
            continue;
        if (shouldForward(key) ||
            (forwardMotionProps === true && isValidMotionProp(key)) ||
            (!isDom && !isValidMotionProp(key)) ||
            // If trying to use native HTML drag events, forward drag listeners
            (props["draggable"] && key.startsWith("onDrag"))) {
            filteredProps[key] = props[key];
        }
    }
    return filteredProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/path.mjs


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = px.transform(-offset);
    // Build the dash array
    const pathLength = px.transform(length);
    const pathSpacing = px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs




/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, options, isSVGTag, transformTemplate) {
    buildHTMLStyles(state, latest, options, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs


const createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {},
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/use-props.mjs






function useSVGProps(props, visualState, _isStatic, Component) {
    const visualProps = (0,react_experimental_.useMemo)(() => {
        const state = createSvgRenderState();
        buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, isSVGTag(Component), props.transformTemplate);
        return {
            ...state.attrs,
            style: { ...state.style },
        };
    }, [visualState]);
    if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/use-render.mjs







function createUseRender(forwardMotionProps = false) {
    const useRender = (Component, props, ref, { latestValues }, isStatic) => {
        const useVisualProps = isSVGComponent(Component)
            ? useSVGProps
            : useHTMLProps;
        const visualProps = useVisualProps(props, latestValues, isStatic, Component);
        const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
        const elementProps = {
            ...filteredProps,
            ...visualProps,
            ref,
        };
        /**
         * If component has been handed a motion value as its child,
         * memoise its initial value and render that. Subsequent updates
         * will be handled by the onChange handler
         */
        const { children } = props;
        const renderedChildren = (0,react_experimental_.useMemo)(() => (isMotionValue(children) ? children.get() : children), [children]);
        return (0,react_experimental_.createElement)(Component, {
            ...elementProps,
            children: renderedChildren,
        });
    };
    return useRender;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/render.mjs




function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs



function scrapeMotionValuesFromProps(props, prevProps) {
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if (isMotionValue(style[key]) ||
            (prevProps.style && isMotionValue(prevProps.style[key])) ||
            isForcedMotionValue(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs




function scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps);
    for (const key in props) {
        if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
            const targetKey = transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        definition = definition(custom !== undefined ? custom : props.custom, currentValues, currentVelocity);
    }
    return definition;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs


/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    const ref = (0,react_experimental_.useRef)(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/resolve-value.mjs


const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs



/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 */
function resolveMotionValue(value) {
    const unwrappedValue = isMotionValue(value) ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs









function makeState({ scrapeMotionValuesFromProps, createRenderState, onMount, }, props, context, presenceContext) {
    const state = {
        latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
        renderState: createRenderState(),
    };
    if (onMount) {
        state.mount = (instance) => onMount(props, instance, state);
    }
    return state;
}
const makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0,react_experimental_.useContext)(MotionContext);
    const presenceContext = (0,react_experimental_.useContext)(PresenceContext_PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
        values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context &&
        isVariantNode$1 &&
        !isControllingVariants$1 &&
        props.inherit !== false) {
        if (initial === undefined)
            initial = context.initial;
        if (animate === undefined)
            animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext
        ? presenceContext.initial === false
        : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet &&
        typeof variantToSet !== "boolean" &&
        !isAnimationControls(variantToSet)) {
        const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
        list.forEach((definition) => {
            const resolved = resolveVariantFromProps(props, definition);
            if (!resolved)
                return;
            const { transitionEnd, transition, ...target } = resolved;
            for (const key in target) {
                let valueTarget = target[key];
                if (Array.isArray(valueTarget)) {
                    /**
                     * Take final keyframe if the initial animation is blocked because
                     * we want to initialise at the end of that blocked animation.
                     */
                    const index = isInitialAnimationBlocked
                        ? valueTarget.length - 1
                        : 0;
                    valueTarget = valueTarget[index];
                }
                if (valueTarget !== null) {
                    values[key] = valueTarget;
                }
            }
            for (const key in transitionEnd)
                values[key] = transitionEnd[key];
        });
    }
    return values;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/noop.mjs
const noop = (any) => any;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two arrays, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let toRun = [];
    let toRunNextFrame = [];
    /**
     *
     */
    let numToRun = 0;
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            // If the buffer doesn't already contain this callback, add it
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                // If we're adding it to the currently running buffer, update its measured size
                if (addToCurrentFrame && isProcessing)
                    numToRun = toRun.length;
            }
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            const index = toRunNextFrame.indexOf(callback);
            if (index !== -1)
                toRunNextFrame.splice(index, 1);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
            // Clear the next frame list
            toRunNextFrame.length = 0;
            // Execute this frame
            numToRun = toRun.length;
            if (numToRun) {
                for (let i = 0; i < numToRun; i++) {
                    const callback = toRun[i];
                    callback(frameData);
                    if (toKeepAlive.has(callback)) {
                        step.schedule(callback);
                        runNextFrame();
                    }
                }
            }
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/frameloop/batcher.mjs


const stepsOrder = [
    "prepare",
    "read",
    "update",
    "preRender",
    "render",
    "postRender",
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0,
        timestamp: 0,
        isProcessing: false,
    };
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = createRenderStep(() => (runNextFrame = true));
        return acc;
    }, {});
    const processStep = (stepId) => steps[stepId].process(state);
    const processBatch = () => {
        const timestamp = performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        stepsOrder.forEach(processStep);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => stepsOrder.forEach((key) => steps[key].cancel(process));
    return { schedule, cancel, state, steps };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/frameloop/frame.mjs



const { schedule: frame_frame, cancel: cancelFrame, state: frameData, steps, } = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/config-motion.mjs








const svgMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrape_motion_values_scrapeMotionValuesFromProps,
        createRenderState: createSvgRenderState,
        onMount: (props, instance, { renderState, latestValues }) => {
            frame_frame.read(() => {
                try {
                    renderState.dimensions =
                        typeof instance.getBBox ===
                            "function"
                            ? instance.getBBox()
                            : instance.getBoundingClientRect();
                }
                catch (e) {
                    // Most likely trying to measure an unrendered element under Firefox
                    renderState.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                    };
                }
            });
            frame_frame.render(() => {
                buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, isSVGTag(instance.tagName), props.transformTemplate);
                renderSVG(instance, renderState);
            });
        },
    }),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/config-motion.mjs




const htmlMotionConfig = {
    useVisualState: makeUseVisualState({
        scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
        createRenderState: createHtmlRenderState,
    }),
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs





function create_config_createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures, createVisualElement) {
    const baseConfig = isSVGComponent(Component)
        ? svgMotionConfig
        : htmlMotionConfig;
    return {
        ...baseConfig,
        preloadedFeatures,
        useRender: createUseRender(forwardMotionProps),
        createVisualElement,
        Component,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/utils/is-primary-pointer.mjs
const isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
        return typeof event.button !== "number" || event.button <= 0;
    }
    else {
        /**
         * isPrimary is true for all mice buttons, whereas every touch point
         * is regarded as its own input. So subsequent concurrent touch points
         * will be false.
         *
         * Specifically match against false here as incomplete versions of
         * PointerEvents in very old browser might have it set as undefined.
         */
        return event.isPrimary !== false;
    }
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/event-info.mjs


function extractEventInfo(event, pointType = "page") {
    return {
        point: {
            x: event[pointType + "X"],
            y: event[pointType + "Y"],
        },
    };
}
const addPointerInfo = (handler) => {
    return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/events/add-pointer-event.mjs



function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/pipe.mjs
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
    let lock = null;
    return () => {
        const openLock = () => {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
const globalHorizontalLock = createLock("dragHorizontal");
const globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    let lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        const openHorizontal = globalHorizontalLock();
        const openVertical = globalVerticalLock();
        if (openHorizontal && openVertical) {
            lock = () => {
                openHorizontal();
                openVertical();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal)
                openHorizontal();
            if (openVertical)
                openVertical();
        }
    }
    return lock;
}
function isDragActive() {
    // Check the gesture lock - if we get it, it means no drag gesture is active
    // and we can safely fire the tap gesture.
    const openGestureLock = getGlobalLock(true);
    if (!openGestureLock)
        return true;
    openGestureLock();
    return false;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/Feature.mjs
class Feature {
    constructor(node) {
        this.isMounted = false;
        this.node = node;
    }
    update() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/hover.mjs






function addHoverEvent(node, isActive) {
    const eventName = "pointer" + (isActive ? "enter" : "leave");
    const callbackName = "onHover" + (isActive ? "Start" : "End");
    const handleEvent = (event, info) => {
        if (event.type === "touch" || isDragActive())
            return;
        const props = node.getProps();
        if (node.animationState && props.whileHover) {
            node.animationState.setActive("whileHover", isActive);
        }
        if (props[callbackName]) {
            frame_frame.update(() => props[callbackName](event, info));
        }
    };
    return addPointerEvent(node.current, eventName, handleEvent, {
        passive: !node.getProps()[callbackName],
    });
}
class HoverGesture extends Feature {
    mount() {
        this.unmount = pipe(addHoverEvent(this.node, true), addHoverEvent(this.node, false));
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/focus.mjs




class FocusGesture extends Feature {
    constructor() {
        super(...arguments);
        this.isActive = false;
    }
    onFocus() {
        let isFocusVisible = false;
        /**
         * If this element doesn't match focus-visible then don't
         * apply whileHover. But, if matches throws that focus-visible
         * is not a valid selector then in that browser outline styles will be applied
         * to the element by default and we want to match that behaviour with whileFocus.
         */
        try {
            isFocusVisible = this.node.current.matches(":focus-visible");
        }
        catch (e) {
            isFocusVisible = true;
        }
        if (!isFocusVisible || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", true);
        this.isActive = true;
    }
    onBlur() {
        if (!this.isActive || !this.node.animationState)
            return;
        this.node.animationState.setActive("whileFocus", false);
        this.isActive = false;
    }
    mount() {
        this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
const isNodeOrChild = (parent, child) => {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/press.mjs










function fireSyntheticPointerEvent(name, handler) {
    if (!handler)
        return;
    const syntheticPointerEvent = new PointerEvent("pointer" + name);
    handler(syntheticPointerEvent, extractEventInfo(syntheticPointerEvent));
}
class PressGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removeStartListeners = noop;
        this.removeEndListeners = noop;
        this.removeAccessibleListeners = noop;
        this.startPointerPress = (startEvent, startInfo) => {
            this.removeEndListeners();
            if (this.isPressing)
                return;
            const props = this.node.getProps();
            const endPointerPress = (endEvent, endInfo) => {
                if (!this.checkPressEnd())
                    return;
                const { onTap, onTapCancel } = this.node.getProps();
                frame_frame.update(() => {
                    /**
                     * We only count this as a tap gesture if the event.target is the same
                     * as, or a child of, this component's element
                     */
                    !isNodeOrChild(this.node.current, endEvent.target)
                        ? onTapCancel && onTapCancel(endEvent, endInfo)
                        : onTap && onTap(endEvent, endInfo);
                });
            };
            const removePointerUpListener = addPointerEvent(window, "pointerup", endPointerPress, { passive: !(props.onTap || props["onPointerUp"]) });
            const removePointerCancelListener = addPointerEvent(window, "pointercancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo), { passive: !(props.onTapCancel || props["onPointerCancel"]) });
            this.removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
            this.startPress(startEvent, startInfo);
        };
        this.startAccessiblePress = () => {
            const handleKeydown = (keydownEvent) => {
                if (keydownEvent.key !== "Enter" || this.isPressing)
                    return;
                const handleKeyup = (keyupEvent) => {
                    if (keyupEvent.key !== "Enter" || !this.checkPressEnd())
                        return;
                    fireSyntheticPointerEvent("up", (event, info) => {
                        const { onTap } = this.node.getProps();
                        if (onTap) {
                            frame_frame.update(() => onTap(event, info));
                        }
                    });
                };
                this.removeEndListeners();
                this.removeEndListeners = addDomEvent(this.node.current, "keyup", handleKeyup);
                fireSyntheticPointerEvent("down", (event, info) => {
                    this.startPress(event, info);
                });
            };
            const removeKeydownListener = addDomEvent(this.node.current, "keydown", handleKeydown);
            const handleBlur = () => {
                if (!this.isPressing)
                    return;
                fireSyntheticPointerEvent("cancel", (cancelEvent, cancelInfo) => this.cancelPress(cancelEvent, cancelInfo));
            };
            const removeBlurListener = addDomEvent(this.node.current, "blur", handleBlur);
            this.removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
        };
    }
    startPress(event, info) {
        this.isPressing = true;
        const { onTapStart, whileTap } = this.node.getProps();
        /**
         * Ensure we trigger animations before firing event callback
         */
        if (whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", true);
        }
        if (onTapStart) {
            frame_frame.update(() => onTapStart(event, info));
        }
    }
    checkPressEnd() {
        this.removeEndListeners();
        this.isPressing = false;
        const props = this.node.getProps();
        if (props.whileTap && this.node.animationState) {
            this.node.animationState.setActive("whileTap", false);
        }
        return !isDragActive();
    }
    cancelPress(event, info) {
        if (!this.checkPressEnd())
            return;
        const { onTapCancel } = this.node.getProps();
        if (onTapCancel) {
            frame_frame.update(() => onTapCancel(event, info));
        }
    }
    mount() {
        const props = this.node.getProps();
        const removePointerListener = addPointerEvent(this.node.current, "pointerdown", this.startPointerPress, { passive: !(props.onTapStart || props["onPointerStart"]) });
        const removeFocusListener = addDomEvent(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = pipe(removePointerListener, removeFocusListener);
    }
    unmount() {
        this.removeStartListeners();
        this.removeEndListeners();
        this.removeAccessibleListeners();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
 * Map an IntersectionHandler callback to an element. We only ever make one handler for one
 * element, so even though these handlers might all be triggered by different
 * observers, we can keep them in the same map.
 */
const observerCallbacks = new WeakMap();
/**
 * Multiple observers can be created for multiple element/document roots. Each with
 * different settings. So here we store dictionaries of observers to each root,
 * using serialised settings (threshold/margin) as lookup keys.
 */
const observers = new WeakMap();
const fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    /**
     * If we don't have an observer lookup map for this root, create one.
     */
    if (!observers.has(lookupRoot)) {
        observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    /**
     * If we don't have an observer for this combination of root and settings,
     * create one.
     */
    if (!rootObservers[key]) {
        rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
}
function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
        observerCallbacks.delete(element);
        rootInteresectionObserver.unobserve(element);
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs



const thresholdNames = {
    some: 0,
    all: 1,
};
class InViewFeature extends Feature {
    constructor() {
        super(...arguments);
        this.hasEnteredView = false;
        this.isInView = false;
    }
    startObserver() {
        this.unmount();
        const { viewport = {} } = this.node.getProps();
        const { root, margin: rootMargin, amount = "some", once } = viewport;
        const options = {
            root: root ? root.current : undefined,
            rootMargin,
            threshold: typeof amount === "number" ? amount : thresholdNames[amount],
        };
        const onIntersectionUpdate = (entry) => {
            const { isIntersecting } = entry;
            /**
             * If there's been no change in the viewport state, early return.
             */
            if (this.isInView === isIntersecting)
                return;
            this.isInView = isIntersecting;
            /**
             * Handle hasEnteredView. If this is only meant to run once, and
             * element isn't visible, early return. Otherwise set hasEnteredView to true.
             */
            if (once && !isIntersecting && this.hasEnteredView) {
                return;
            }
            else if (isIntersecting) {
                this.hasEnteredView = true;
            }
            if (this.node.animationState) {
                this.node.animationState.setActive("whileInView", isIntersecting);
            }
            /**
             * Use the latest committed props rather than the ones in scope
             * when this observer is created
             */
            const { onViewportEnter, onViewportLeave } = this.node.getProps();
            const callback = isIntersecting ? onViewportEnter : onViewportLeave;
            callback && callback(entry);
        };
        return observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver === "undefined")
            return;
        const { props, prevProps } = this.node;
        const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
        if (hasOptionsChanged) {
            this.startObserver();
        }
    }
    unmount() { }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/gestures.mjs





const gestureAnimations = {
    inView: {
        Feature: InViewFeature,
    },
    tap: {
        Feature: PressGesture,
    },
    focus: {
        Feature: FocusGesture,
    },
    hover: {
        Feature: HoverGesture,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
        return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (let i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs


/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    const current = {};
    visualElement.values.forEach((value, key) => (current[key] = value.get()));
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    const velocity = {};
    visualElement.values.forEach((value, key) => (velocity[key] = value.getVelocity()));
    return velocity;
}
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== undefined ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs


let warning = noop;
let invariant = noop;
if (false) {}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/time-conversion.mjs
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
const instantAnimationState = {
    current: false,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/easing.mjs


function isWaapiSupportedEasing(easing) {
    return Boolean(!easing ||
        (typeof easing === "string" && supportedWaapiEasing[easing]) ||
        isBezierDefinition(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing) {
    if (!easing)
        return undefined;
    return isBezierDefinition(easing)
        ? cubicBezierAsString(easing)
        : Array.isArray(easing)
            ? easing.map(mapEasingToNativeEasing)
            : supportedWaapiEasing[easing];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs


function animateStyle(element, valueName, keyframes, { delay = 0, duration, repeat = 0, repeatType = "loop", ease, times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }) {
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : keyframes.length - 1;
    return keyframes[index];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs


/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/ease.mjs


const easeIn = cubicBezier(0.42, 0, 1, 1);
const easeOut = cubicBezier(0, 0, 0.58, 1);
const easeInOut = cubicBezier(0.42, 0, 0.58, 1);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/circ.mjs



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/back.mjs




const backOut = cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = reverseEasing(backOut);
const backInOut = mirrorEasing(backIn);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/anticipate.mjs


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/easing/utils/map.mjs








const easingLookup = {
    linear: noop,
    easeIn: easeIn,
    easeInOut: easeInOut,
    easeOut: easeOut,
    circIn: circIn,
    circInOut: circInOut,
    circOut: circOut,
    backIn: backIn,
    backInOut: backInOut,
    backOut: backOut,
    anticipate: anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return cubicBezier(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        invariant(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/utils.mjs


/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((isString(v) && singleColorRegex.test(v) && v.startsWith(type)) ||
        (testProp && Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (!isString(v))
        return v;
    const [a, b, c, alpha] = v.match(floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/rgba.mjs





const clampRgbUnit = (v) => clamp(0, 255, v);
const rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        sanitize(alpha.transform(alpha$1)) +
        ")",
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/hex.mjs



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/hsla.mjs





const hsla = {
    test: isColorString("hsl", "hue"),
    parse: splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            percent.transform(sanitize(saturation)) +
            ", " +
            percent.transform(sanitize(lightness)) +
            ", " +
            sanitize(alpha.transform(alpha$1)) +
            ")");
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/color/index.mjs





const color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else {
            return hex.parse(v);
        }
    },
    transform: (v) => {
        return isString(v)
            ? v
            : v.hasOwnProperty("red")
                ? rgba.transform(v)
                : hsla.transform(v);
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/mix.mjs
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mix = (from, to, progress) => -progress * from + progress * to + from;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/mix-color.mjs







// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    return Math.sqrt(Math.max(0, v * (to * to - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    invariant(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    let model = type.parse(color);
    if (type === hsla) {
        // TODO Remove this cast - needed since Framer Motion's stricter typing
        model = hslaToRgba(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = mix(fromRGBA.alpha, toRGBA.alpha, v);
        return rgba.transform(blended);
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/complex/index.mjs






function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        isString(v) &&
        (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
const cssVarTokeniser = {
    regex: cssVariableRegex,
    countKey: "Vars",
    token: "${v}",
    parse: noop,
};
const colorTokeniser = {
    regex: colorRegex,
    countKey: "Colors",
    token: "${c}",
    parse: color.parse,
};
const numberTokeniser = {
    regex: floatRegex,
    countKey: "Numbers",
    token: "${n}",
    parse: number.parse,
};
function tokenise(info, { regex, countKey, token, parse }) {
    const matches = info.tokenised.match(regex);
    if (!matches)
        return;
    info["num" + countKey] = matches.length;
    info.tokenised = info.tokenised.replace(regex, token);
    info.values.push(...matches.map(parse));
}
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const info = {
        value: originalValue,
        tokenised: originalValue,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0,
    };
    if (info.value.includes("var(--"))
        tokenise(info, cssVarTokeniser);
    tokenise(info, colorTokeniser);
    tokenise(info, numberTokeniser);
    return info;
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { values, numColors, numVars, tokenised } = analyseComplexValue(source);
    const numValues = values.length;
    return (v) => {
        let output = tokenised;
        for (let i = 0; i < numValues; i++) {
            if (i < numVars) {
                output = output.replace(cssVarTokeniser.token, v[i]);
            }
            else if (i < numVars + numColors) {
                output = output.replace(colorTokeniser.token, color.transform(v[i]));
            }
            else {
                output = output.replace(numberTokeniser.token, sanitize(v[i]));
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/mix-complex.mjs







const mixImmediate = (origin, target) => (p) => `${p > 0 ? target : origin}`;
function getMixer(origin, target) {
    if (typeof origin === "number") {
        return (v) => mix(origin, target, v);
    }
    else if (color.test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return origin.startsWith("var(")
            ? mixImmediate(origin, target)
            : mixComplex(origin, target);
    }
}
const mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
    return (v) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
const mixObject = (origin, target) => {
    const output = { ...origin, ...target };
    const blendValue = {};
    for (const key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
const mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.numVars === targetStats.numVars &&
        originStats.numColors === targetStats.numColors &&
        originStats.numNumbers >= targetStats.numNumbers;
    if (canInterpolate) {
        return pipe(mixArray(originStats.values, targetStats.values), template);
    }
    else {
        warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return mixImmediate(origin, target);
    }
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/progress.mjs
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/interpolate.mjs










const mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
    if (typeof v === "number") {
        return mixNumber;
    }
    else if (typeof v === "string") {
        return color.test(v) ? mixColor : mixComplex;
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === "object") {
        return mixObject;
    }
    return mixNumber;
}
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || noop : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = progress(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v))
        : interpolator;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/fill.mjs



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = progress(0, remaining, i);
        offset.push(mix(min, 1, offsetProgress));
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/default.mjs


function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs







function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = isEasingArray(ease)
        ? ease.map(easingDefinitionToFunction)
        : easingDefinitionToFunction(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : defaultOffset(keyframeValues), duration);
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs




const safeMin = 0.001;
const minDuration = 0.01;
const maxDuration = 10.0;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1, }) {
    let envelope;
    let derivative;
    warning(duration <= secondsToMilliseconds(maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs




const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: 0.0,
        stiffness: 100,
        damping: 10,
        mass: 1.0,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        const derived = findSpring(options);
        springOptions = {
            ...springOptions,
            ...derived,
            velocity: 0.0,
            mass: 1.0,
        };
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring({ keyframes, restDelta, restSpeed, ...options }) {
    const origin = keyframes[0];
    const target = keyframes[keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, velocity, duration, isResolvedFromDuration, } = getSpringOptions(options);
    const initialVelocity = velocity ? -millisecondsToSeconds(velocity) : 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? 0.01 : 2);
    restDelta || (restDelta = isGranularScale ? 0.005 : 0.5);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    return {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = initialVelocity;
                if (t !== 0) {
                    /**
                     * We only need to calculate velocity for under-damped springs
                     * as over- and critically-damped springs can't overshoot, so
                     * checking only for displacement is enough.
                     */
                    if (dampingRatio < 1) {
                        currentVelocity = calcGeneratorVelocity(resolveSpring, t, current);
                    }
                    else {
                        currentVelocity = 0;
                    }
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/inertia.mjs



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = spring({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: calcGeneratorVelocity(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t > timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/js/driver-frameloop.mjs


const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => frame_frame.update(passTimestamp, true),
        stop: () => cancelFrame(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => frameData.isProcessing ? frameData.timestamp : performance.now(),
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/js/index.mjs









const types = {
    decay: inertia,
    inertia: inertia,
    tween: keyframes,
    keyframes: keyframes,
    spring: spring,
};
/**
 * Animate a single value on the main thread.
 *
 * This function is written, where functionality overlaps,
 * to be largely spec-compliant with WAAPI to allow fungibility
 * between the two.
 */
function animateValue({ autoplay = true, delay = 0, driver = frameloopDriver, keyframes: keyframes$1, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", onPlay, onStop, onComplete, onUpdate, ...options }) {
    let speed = 1;
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Resolve the current Promise every time we enter the
     * finished state. This is WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let animationDriver;
    const generatorFactory = types[type] || keyframes;
    /**
     * If this isn't the keyframes generator and we've been provided
     * strings as keyframes, we need to interpolate these.
     * TODO: Support velocity for units and complex value types/
     */
    let mapNumbersToKeyframes;
    if (generatorFactory !== keyframes &&
        typeof keyframes$1[0] !== "number") {
        mapNumbersToKeyframes = interpolate([0, 100], keyframes$1, {
            clamp: false,
        });
        keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    let mirroredGenerator;
    if (repeatType === "mirror") {
        mirroredGenerator = generatorFactory({
            ...options,
            keyframes: [...keyframes$1].reverse(),
            velocity: -(options.velocity || 0),
        });
    }
    let playState = "idle";
    let holdTime = null;
    let startTime = null;
    let cancelTime = null;
    /**
     * If duration is undefined and we have repeat options,
     * we need to calculate a duration from the generator.
     *
     * We set it to the generator itself to cache the duration.
     * Any timeline resolver will need to have already precalculated
     * the duration by this step.
     */
    if (generator.calculatedDuration === null && repeat) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    let resolvedDuration = Infinity;
    let totalDuration = Infinity;
    if (calculatedDuration !== null) {
        resolvedDuration = calculatedDuration + repeatDelay;
        totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    }
    let currentTime = 0;
    const tick = (timestamp) => {
        if (startTime === null)
            return;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (speed > 0)
            startTime = Math.min(startTime, timestamp);
        if (speed < 0)
            startTime = Math.min(timestamp - totalDuration / speed, startTime);
        if (holdTime !== null) {
            currentTime = holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            currentTime = Math.round(timestamp - startTime) * speed;
        }
        // Rebase on delay
        const timeWithoutDelay = currentTime - delay * (speed >= 0 ? 1 : -1);
        const isInDelayPhase = speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        currentTime = Math.max(timeWithoutDelay, 0);
        /**
         * If this animation has finished, set the current time
         * to the total duration.
         */
        if (playState === "finished" && holdTime === null) {
            currentTime = totalDuration;
        }
        let elapsed = currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = currentTime / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const iterationIsOdd = Boolean(currentIteration % 2);
            if (iterationIsOdd) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            let p = clamp(0, 1, iterationProgress);
            if (currentTime > totalDuration) {
                p = repeatType === "reverse" && iterationIsOdd ? 1 : 0;
            }
            elapsed = p * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes$1[0] }
            : frameGenerator.next(elapsed);
        if (mapNumbersToKeyframes) {
            state.value = mapNumbersToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done = speed >= 0 ? currentTime >= totalDuration : currentTime <= 0;
        }
        const isAnimationFinished = holdTime === null &&
            (playState === "finished" || (playState === "running" && done));
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            finish();
        }
        return state;
    };
    const stopAnimationDriver = () => {
        animationDriver && animationDriver.stop();
        animationDriver = undefined;
    };
    const cancel = () => {
        playState = "idle";
        stopAnimationDriver();
        resolveFinishedPromise();
        updateFinishedPromise();
        startTime = cancelTime = null;
    };
    const finish = () => {
        playState = "finished";
        onComplete && onComplete();
        stopAnimationDriver();
        resolveFinishedPromise();
    };
    const play = () => {
        if (hasStopped)
            return;
        if (!animationDriver)
            animationDriver = driver(tick);
        const now = animationDriver.now();
        onPlay && onPlay();
        if (holdTime !== null) {
            startTime = now - holdTime;
        }
        else if (!startTime || playState === "finished") {
            startTime = now;
        }
        if (playState === "finished") {
            updateFinishedPromise();
        }
        cancelTime = startTime;
        holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        playState = "running";
        animationDriver.start();
    };
    if (autoplay) {
        play();
    }
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        get time() {
            return millisecondsToSeconds(currentTime);
        },
        set time(newTime) {
            newTime = secondsToMilliseconds(newTime);
            currentTime = newTime;
            if (holdTime !== null || !animationDriver || speed === 0) {
                holdTime = newTime;
            }
            else {
                startTime = animationDriver.now() - newTime / speed;
            }
        },
        get duration() {
            const duration = generator.calculatedDuration === null
                ? calcGeneratorDuration(generator)
                : generator.calculatedDuration;
            return millisecondsToSeconds(duration);
        },
        get speed() {
            return speed;
        },
        set speed(newSpeed) {
            if (newSpeed === speed || !animationDriver)
                return;
            speed = newSpeed;
            controls.time = millisecondsToSeconds(currentTime);
        },
        get state() {
            return playState;
        },
        play,
        pause: () => {
            playState = "paused";
            holdTime = currentTime;
        },
        stop: () => {
            hasStopped = true;
            if (playState === "idle")
                return;
            playState = "idle";
            onStop && onStop();
            cancel();
        },
        cancel: () => {
            if (cancelTime !== null)
                tick(cancelTime);
            cancel();
        },
        complete: () => {
            playState = "finished";
        },
        sample: (elapsed) => {
            startTime = 0;
            return tick(elapsed);
        },
    };
    return controls;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/memo.mjs
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/waapi/create-accelerated-animation.mjs









const supportsWaapi = memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
]);
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const create_accelerated_animation_maxDuration = 20000;
const requiresPregeneratedKeyframes = (valueName, options) => options.type === "spring" ||
    valueName === "backgroundColor" ||
    !isWaapiSupportedEasing(options.ease);
function createAcceleratedAnimation(value, valueName, { onUpdate, onComplete, ...options }) {
    const canAccelerateAnimation = supportsWaapi() &&
        acceleratedValues.has(valueName) &&
        !options.repeatDelay &&
        options.repeatType !== "mirror" &&
        options.damping !== 0 &&
        options.type !== "inertia";
    if (!canAccelerateAnimation)
        return false;
    /**
     * TODO: Unify with js/index
     */
    let hasStopped = false;
    let resolveFinishedPromise;
    let currentFinishedPromise;
    /**
     * Resolve the current Promise every time we enter the
     * finished state. This is WAAPI-compatible behaviour.
     */
    const updateFinishedPromise = () => {
        currentFinishedPromise = new Promise((resolve) => {
            resolveFinishedPromise = resolve;
        });
    };
    // Create the first finished promise
    updateFinishedPromise();
    let { keyframes, duration = 300, ease, times } = options;
    /**
     * If this animation needs pre-generated keyframes then generate.
     */
    if (requiresPregeneratedKeyframes(valueName, options)) {
        const sampleAnimation = animateValue({
            ...options,
            repeat: 0,
            delay: 0,
        });
        let state = { done: false, value: keyframes[0] };
        const pregeneratedKeyframes = [];
        /**
         * Bail after 20 seconds of pre-generated keyframes as it's likely
         * we're heading for an infinite loop.
         */
        let t = 0;
        while (!state.done && t < create_accelerated_animation_maxDuration) {
            state = sampleAnimation.sample(t);
            pregeneratedKeyframes.push(state.value);
            t += sampleDelta;
        }
        times = undefined;
        keyframes = pregeneratedKeyframes;
        duration = t - sampleDelta;
        ease = "linear";
    }
    const animation = animateStyle(value.owner.current, valueName, keyframes, {
        ...options,
        duration,
        /**
         * This function is currently not called if ease is provided
         * as a function so the cast is safe.
         *
         * However it would be possible for a future refinement to port
         * in easing pregeneration from Motion One for browsers that
         * support the upcoming `linear()` easing function.
         */
        ease: ease,
        times,
    });
    const cancelAnimation = () => animation.cancel();
    const safeCancel = () => {
        frame_frame.update(cancelAnimation);
        resolveFinishedPromise();
        updateFinishedPromise();
    };
    /**
     * Prefer the `onfinish` prop as it's more widely supported than
     * the `finished` promise.
     *
     * Here, we synchronously set the provided MotionValue to the end
     * keyframe. If we didn't, when the WAAPI animation is finished it would
     * be removed from the element which would then revert to its old styles.
     */
    animation.onfinish = () => {
        value.set(getFinalKeyframe(keyframes, options));
        onComplete && onComplete();
        safeCancel();
    };
    /**
     * Animation interrupt callback.
     */
    const controls = {
        then(resolve, reject) {
            return currentFinishedPromise.then(resolve, reject);
        },
        attachTimeline(timeline) {
            animation.timeline = timeline;
            animation.onfinish = null;
            return noop;
        },
        get time() {
            return millisecondsToSeconds(animation.currentTime || 0);
        },
        set time(newTime) {
            animation.currentTime = secondsToMilliseconds(newTime);
        },
        get speed() {
            return animation.playbackRate;
        },
        set speed(newSpeed) {
            animation.playbackRate = newSpeed;
        },
        get duration() {
            return millisecondsToSeconds(duration);
        },
        play: () => {
            if (hasStopped)
                return;
            animation.play();
            /**
             * Cancel any pending cancel tasks
             */
            cancelFrame(cancelAnimation);
        },
        pause: () => animation.pause(),
        stop: () => {
            hasStopped = true;
            if (animation.playState === "idle")
                return;
            /**
             * WAAPI doesn't natively have any interruption capabilities.
             *
             * Rather than read commited styles back out of the DOM, we can
             * create a renderless JS animation and sample it twice to calculate
             * its current value, "previous" value, and therefore allow
             * Motion to calculate velocity for any subsequent animation.
             */
            const { currentTime } = animation;
            if (currentTime) {
                const sampleAnimation = animateValue({
                    ...options,
                    autoplay: false,
                });
                value.setWithVelocity(sampleAnimation.sample(currentTime - sampleDelta).value, sampleAnimation.sample(currentTime).value, sampleDelta);
            }
            safeCancel();
        },
        complete: () => animation.finish(),
        cancel: safeCancel,
    };
    return controls;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/animators/instant.mjs



function createInstantAnimation({ keyframes, delay, onUpdate, onComplete, }) {
    const setValue = () => {
        onUpdate && onUpdate(keyframes[keyframes.length - 1]);
        onComplete && onComplete();
        /**
         * TODO: As this API grows it could make sense to always return
         * animateValue. This will be a bigger project as animateValue
         * is frame-locked whereas this function resolves instantly.
         * This is a behavioural change and also has ramifications regarding
         * assumptions within tests.
         */
        return {
            time: 0,
            speed: 1,
            duration: 0,
            play: (noop),
            pause: (noop),
            stop: (noop),
            then: (resolve) => {
                resolve();
                return Promise.resolve();
            },
            cancel: (noop),
            complete: (noop),
        };
    };
    return delay
        ? animateValue({
            keyframes: [0, 1],
            duration: 0,
            delay,
            onComplete: setValue,
        })
        : setValue();
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (key, value) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/types/complex/filter.mjs



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = {
    ...complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color: color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter: filter,
    WebkitFilter: filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs




function animatable_none_getAnimatableNone(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (defaultValueType !== filter)
        defaultValueType = complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/.test(v);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/is-none.mjs


function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || isZeroValueString(value);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/keyframes.mjs




function getKeyframes(value, valueName, target, transition) {
    const isTargetAnimatable = isAnimatable(valueName, target);
    let keyframes;
    if (Array.isArray(target)) {
        keyframes = [...target];
    }
    else {
        keyframes = [null, target];
    }
    const defaultOrigin = transition.from !== undefined ? transition.from : value.get();
    let animatableTemplateValue = undefined;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < keyframes.length; i++) {
        /**
         * Fill null/wildcard keyframes
         */
        if (keyframes[i] === null) {
            keyframes[i] = i === 0 ? defaultOrigin : keyframes[i - 1];
        }
        if (isNone(keyframes[i])) {
            noneKeyframeIndexes.push(i);
        }
        // TODO: Clean this conditional, it works for now
        if (typeof keyframes[i] === "string" &&
            keyframes[i] !== "none" &&
            keyframes[i] !== "0") {
            animatableTemplateValue = keyframes[i];
        }
    }
    if (isTargetAnimatable &&
        noneKeyframeIndexes.length &&
        animatableTemplateValue) {
        for (let i = 0; i < noneKeyframeIndexes.length; i++) {
            const index = noneKeyframeIndexes[i];
            keyframes[index] = animatable_none_getAnimatableNone(valueName, animatableTemplateValue);
        }
    }
    return keyframes;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs











const animateMotionValue = (valueName, value, target, transition = {}) => {
    return (onComplete) => {
        const valueTransition = getValueTransition(transition, valueName) || {};
        /**
         * Most transition values are currently completely overwritten by value-specific
         * transitions. In the future it'd be nicer to blend these transitions. But for now
         * delay actually does inherit from the root transition if not value-specific.
         */
        const delay = valueTransition.delay || transition.delay || 0;
        /**
         * Elapsed isn't a public transition option but can be passed through from
         * optimized appear effects in milliseconds.
         */
        let { elapsed = 0 } = transition;
        elapsed = elapsed - secondsToMilliseconds(delay);
        const keyframes = getKeyframes(value, valueName, target, valueTransition);
        /**
         * Check if we're able to animate between the start and end keyframes,
         * and throw a warning if we're attempting to animate between one that's
         * animatable and another that isn't.
         */
        const originKeyframe = keyframes[0];
        const targetKeyframe = keyframes[keyframes.length - 1];
        const isOriginAnimatable = isAnimatable(valueName, originKeyframe);
        const isTargetAnimatable = isAnimatable(valueName, targetKeyframe);
        warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${valueName} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
        let options = {
            keyframes,
            velocity: value.getVelocity(),
            ease: "easeOut",
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v) => {
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: () => {
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
        };
        /**
         * If there's no transition defined for this value, we can generate
         * unqiue transition settings for this value.
         */
        if (!isTransitionDefined(valueTransition)) {
            options = {
                ...options,
                ...getDefaultTransition(valueName, options),
            };
        }
        /**
         * Both WAAPI and our internal animation functions use durations
         * as defined by milliseconds, while our external API defines them
         * as seconds.
         */
        if (options.duration) {
            options.duration = secondsToMilliseconds(options.duration);
        }
        if (options.repeatDelay) {
            options.repeatDelay = secondsToMilliseconds(options.repeatDelay);
        }
        if (!isOriginAnimatable ||
            !isTargetAnimatable ||
            instantAnimationState.current ||
            valueTransition.type === false) {
            /**
             * If we can't animate this value, or the global instant animation flag is set,
             * or this is simply defined as an instant transition, return an instant transition.
             */
            return createInstantAnimation(instantAnimationState.current
                ? { ...options, delay: 0 }
                : options);
        }
        /**
         * Animate via WAAPI if possible.
         */
        if (value.owner &&
            value.owner.current instanceof HTMLElement &&
            !value.owner.getProps().onUpdate) {
            const acceleratedAnimation = createAcceleratedAnimation(value, valueName, options);
            if (acceleratedAnimation)
                return acceleratedAnimation;
        }
        /**
         * If we didn't create an accelerated animation, create a JS animation
         */
        return animateValue(options);
    };
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-will-change/is.mjs


function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/subscription-manager.mjs


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        addUniqueItem(this.subscriptions, handler);
        return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs





const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined,
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "10.16.1";
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            this.prev = this.current;
            this.current = v;
            // Update timestamp
            const { delta, timestamp } = frameData;
            if (this.lastUpdated !== timestamp) {
                this.timeDelta = delta;
                this.lastUpdated = timestamp;
                frame_frame.postRender(this.scheduleVelocityCheck);
            }
            // Update update subscribers
            if (this.prev !== this.current && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update velocity subscribers
            if (this.events.velocityChange) {
                this.events.velocityChange.notify(this.getVelocity());
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = () => frame_frame.postRender(this.velocityCheck);
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = ({ timestamp }) => {
            if (timestamp !== this.lastUpdated) {
                this.prev = this.current;
                if (this.events.velocityChange) {
                    this.events.velocityChange.notify(this.getVelocity());
                }
            }
        };
        this.hasAnimated = false;
        this.prev = this.current = init;
        this.canTrackVelocity = isFloat(this.current);
        this.owner = options.owner;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (false) {}
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                frame_frame.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = prev;
        this.timeDelta = delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v) {
        this.updateAndNotify(v);
        this.prev = v;
        this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        if (collectMotionValues.current) {
            collectMotionValues.current.push(this);
        }
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                velocityPerSecond(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs





/**
 * A list of all ValueTypes
 */
const valueTypes = [...dimensionValueTypes, color, complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find(testValueType(v));



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/setters.mjs









/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, motionValue(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
    }
}
function setVariants(visualElement, variantLabels) {
    const reversedLabels = [...variantLabels].reverse();
    reversedLabels.forEach((key) => {
        const variant = visualElement.getVariant(key);
        variant && setTarget(visualElement, variant);
        if (visualElement.variantChildren) {
            visualElement.variantChildren.forEach((child) => {
                setVariants(child, variantLabels);
            });
        }
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b;
    const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
    const numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (let i = 0; i < numNewValues; i++) {
        const key = newValueKeys[i];
        const targetValue = target[key];
        let value = null;
        /**
         * If the target is a series of keyframes, we can use the first value
         * in the array. If this first value is null, we'll still need to read from the DOM.
         */
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        /**
         * If the target isn't keyframes, or the first keyframe was null, we need to
         * first check if an origin value was explicitly defined in the transition as "from",
         * if not read the value from the DOM. As an absolute fallback, take the defined target value.
         */
        if (value === null) {
            value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
        }
        /**
         * If value is still undefined or null, ignore it. Preferably this would throw,
         * but this was causing issues in Framer.
         */
        if (value === undefined || value === null)
            continue;
        if (typeof value === "string" &&
            (isNumericalString(value) || isZeroValueString(value))) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!findValueType(value) && complex.test(targetValue)) {
            value = animatable_none_getAnimatableNone(key, targetValue);
        }
        visualElement.addValue(key, motionValue(value, { owner: visualElement }));
        if (origin[key] === undefined) {
            origin[key] = value;
        }
        if (value !== null)
            visualElement.setBaseTarget(key, value);
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    const valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    const origin = {};
    for (const key in target) {
        const transitionOrigin = getOriginFromTransition(key, transition);
        if (transitionOrigin !== undefined) {
            origin[key] = transitionOrigin;
        }
        else {
            const value = visualElement.getValue(key);
            if (value) {
                origin[key] = value.get();
            }
        }
    }
    return origin;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs







/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, definition, { delay = 0, transitionOverride, type } = {}) {
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = visualElement.makeTargetAnimatable(definition);
    const willChange = visualElement.getValue("willChange");
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key);
        const valueTarget = target[key];
        if (!value ||
            valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = { delay, elapsed: 0, ...transition };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        if (window.HandoffAppearAnimations && !value.hasAnimated) {
            const appearId = visualElement.getProps()[optimizedAppearDataAttribute];
            if (appearId) {
                valueTransition.elapsed = window.HandoffAppearAnimations(appearId, key, value, frame_frame);
            }
        }
        value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && transformProps.has(key)
            ? { type: false }
            : valueTransition));
        const animation = value.animation;
        if (isWillChangeMotionValue(willChange)) {
            willChange.add(key);
            animation.then(() => willChange.remove(key));
        }
        animations.push(animation);
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            transitionEnd && setTarget(visualElement, transitionEnd);
        });
    }
    return animations;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs



function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.custom);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
        transition = options.transitionOverride;
    }
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getAnimation = resolved
        ? () => Promise.all(animateTarget(visualElement, resolved, options))
        : () => Promise.resolve();
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size
        ? (forwardDelay = 0) => {
            const { delayChildren = 0, staggerChildren, staggerDirection, } = transition;
            return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
        }
        : () => Promise.resolve();
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    const { when } = transition;
    if (when) {
        const [first, last] = when === "beforeChildren"
            ? [getAnimation, getChildAnimations]
            : [getChildAnimations, getAnimation];
        return first().then(() => last());
    }
    else {
        return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations = [];
    const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
    const generateStaggerDuration = staggerDirection === 1
        ? (i = 0) => i * staggerChildren
        : (i = 0) => maxStaggerDuration - i * staggerChildren;
    Array.from(visualElement.variantChildren)
        .sort(sortByTreeOrder)
        .forEach((child, i) => {
        child.notify("AnimationStart", variant);
        animations.push(animateVariant(child, variant, {
            ...options,
            delay: delayChildren + generateStaggerDuration(i),
        }).then(() => child.notify("AnimationComplete", variant)));
    });
    return Promise.all(animations);
}
function sortByTreeOrder(a, b) {
    return a.sortNodePosition(b);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs




function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
        const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
        animation = Promise.all(animations);
    }
    else if (typeof definition === "string") {
        animation = animateVariant(visualElement, definition, options);
    }
    else {
        const resolvedDefinition = typeof definition === "function"
            ? resolveVariant(visualElement, definition, options.custom)
            : definition;
        animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => visualElement.notify("AnimationComplete", definition));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/animation-state.mjs








const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
    return (animations) => Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
    let animate = animateList(visualElement);
    const state = createState();
    let isInitialRender = true;
    /**
     * This function will be used to reduce the animation definitions for
     * each active animation type into an object of resolved values for it.
     */
    const buildResolvedTypeValues = (acc, definition) => {
        const resolved = resolveVariant(visualElement, definition);
        if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            acc = { ...acc, ...target, ...transitionEnd };
        }
        return acc;
    };
    /**
     * This just allows us to inject mocked animation functions
     * @internal
     */
    function setAnimateFunction(makeAnimator) {
        animate = makeAnimator(visualElement);
    }
    /**
     * When we receive new props, we need to:
     * 1. Create a list of protected keys for each type. This is a directory of
     *    value keys that are currently being "handled" by types of a higher priority
     *    so that whenever an animation is played of a given type, these values are
     *    protected from being animated.
     * 2. Determine if an animation type needs animating.
     * 3. Determine if any values have been removed from a type and figure out
     *    what to animate those to.
     */
    function animateChanges(options, changedActiveType) {
        const props = visualElement.getProps();
        const context = visualElement.getVariantContext(true) || {};
        /**
         * A list of animations that we'll build into as we iterate through the animation
         * types. This will get executed at the end of the function.
         */
        const animations = [];
        /**
         * Keep track of which values have been removed. Then, as we hit lower priority
         * animation types, we can check if they contain removed values and animate to that.
         */
        const removedKeys = new Set();
        /**
         * A dictionary of all encountered keys. This is an object to let us build into and
         * copy it without iteration. Each time we hit an animation type we set its protected
         * keys - the keys its not allowed to animate - to the latest version of this object.
         */
        let encounteredKeys = {};
        /**
         * If a variant has been removed at a given index, and this component is controlling
         * variant animations, we want to ensure lower-priority variants are forced to animate.
         */
        let removedVariantIndex = Infinity;
        /**
         * Iterate through all animation types in reverse priority order. For each, we want to
         * detect which values it's handling and whether or not they've changed (and therefore
         * need to be animated). If any values have been removed, we want to detect those in
         * lower priority props and flag for animation.
         */
        for (let i = 0; i < numAnimationTypes; i++) {
            const type = reversePriorityOrder[i];
            const typeState = state[type];
            const prop = props[type] !== undefined ? props[type] : context[type];
            const propIsVariant = isVariantLabel(prop);
            /**
             * If this type has *just* changed isActive status, set activeDelta
             * to that status. Otherwise set to null.
             */
            const activeDelta = type === changedActiveType ? typeState.isActive : null;
            if (activeDelta === false)
                removedVariantIndex = i;
            /**
             * If this prop is an inherited variant, rather than been set directly on the
             * component itself, we want to make sure we allow the parent to trigger animations.
             *
             * TODO: Can probably change this to a !isControllingVariants check
             */
            let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
            /**
             *
             */
            if (isInherited &&
                isInitialRender &&
                visualElement.manuallyAnimateOnMount) {
                isInherited = false;
            }
            /**
             * Set all encountered keys so far as the protected keys for this type. This will
             * be any key that has been animated or otherwise handled by active, higher-priortiy types.
             */
            typeState.protectedKeys = { ...encounteredKeys };
            // Check if we can skip analysing this prop early
            if (
            // If it isn't active and hasn't *just* been set as inactive
            (!typeState.isActive && activeDelta === null) ||
                // If we didn't and don't have any defined prop for this animation type
                (!prop && !typeState.prevProp) ||
                // Or if the prop doesn't define an animation
                isAnimationControls(prop) ||
                typeof prop === "boolean") {
                continue;
            }
            /**
             * As we go look through the values defined on this type, if we detect
             * a changed value or a value that was removed in a higher priority, we set
             * this to true and add this prop to the animation list.
             */
            const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
            let shouldAnimateType = variantDidChange ||
                // If we're making this variant active, we want to always make it active
                (type === changedActiveType &&
                    typeState.isActive &&
                    !isInherited &&
                    propIsVariant) ||
                // If we removed a higher-priority variant (i is in reverse order)
                (i > removedVariantIndex && propIsVariant);
            /**
             * As animations can be set as variant lists, variants or target objects, we
             * coerce everything to an array if it isn't one already
             */
            const definitionList = Array.isArray(prop) ? prop : [prop];
            /**
             * Build an object of all the resolved values. We'll use this in the subsequent
             * animateChanges calls to determine whether a value has changed.
             */
            let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
            if (activeDelta === false)
                resolvedValues = {};
            /**
             * Now we need to loop through all the keys in the prev prop and this prop,
             * and decide:
             * 1. If the value has changed, and needs animating
             * 2. If it has been removed, and needs adding to the removedKeys set
             * 3. If it has been removed in a higher priority type and needs animating
             * 4. If it hasn't been removed in a higher priority but hasn't changed, and
             *    needs adding to the type's protectedKeys list.
             */
            const { prevResolvedValues = {} } = typeState;
            const allKeys = {
                ...prevResolvedValues,
                ...resolvedValues,
            };
            const markToAnimate = (key) => {
                shouldAnimateType = true;
                removedKeys.delete(key);
                typeState.needsAnimating[key] = true;
            };
            for (const key in allKeys) {
                const next = resolvedValues[key];
                const prev = prevResolvedValues[key];
                // If we've already handled this we can just skip ahead
                if (encounteredKeys.hasOwnProperty(key))
                    continue;
                /**
                 * If the value has changed, we probably want to animate it.
                 */
                if (next !== prev) {
                    /**
                     * If both values are keyframes, we need to shallow compare them to
                     * detect whether any value has changed. If it has, we animate it.
                     */
                    if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
                        if (!shallowCompare(next, prev) || variantDidChange) {
                            markToAnimate(key);
                        }
                        else {
                            /**
                             * If it hasn't changed, we want to ensure it doesn't animate by
                             * adding it to the list of protected keys.
                             */
                            typeState.protectedKeys[key] = true;
                        }
                    }
                    else if (next !== undefined) {
                        // If next is defined and doesn't equal prev, it needs animating
                        markToAnimate(key);
                    }
                    else {
                        // If it's undefined, it's been removed.
                        removedKeys.add(key);
                    }
                }
                else if (next !== undefined && removedKeys.has(key)) {
                    /**
                     * If next hasn't changed and it isn't undefined, we want to check if it's
                     * been removed by a higher priority
                     */
                    markToAnimate(key);
                }
                else {
                    /**
                     * If it hasn't changed, we add it to the list of protected values
                     * to ensure it doesn't get animated.
                     */
                    typeState.protectedKeys[key] = true;
                }
            }
            /**
             * Update the typeState so next time animateChanges is called we can compare the
             * latest prop and resolvedValues to these.
             */
            typeState.prevProp = prop;
            typeState.prevResolvedValues = resolvedValues;
            /**
             *
             */
            if (typeState.isActive) {
                encounteredKeys = { ...encounteredKeys, ...resolvedValues };
            }
            if (isInitialRender && visualElement.blockInitialAnimation) {
                shouldAnimateType = false;
            }
            /**
             * If this is an inherited prop we want to hard-block animations
             * TODO: Test as this should probably still handle animations triggered
             * by removed values?
             */
            if (shouldAnimateType && !isInherited) {
                animations.push(...definitionList.map((animation) => ({
                    animation: animation,
                    options: { type, ...options },
                })));
            }
        }
        /**
         * If there are some removed value that haven't been dealt with,
         * we need to create a new animation that falls back either to the value
         * defined in the style prop, or the last read value.
         */
        if (removedKeys.size) {
            const fallbackAnimation = {};
            removedKeys.forEach((key) => {
                const fallbackTarget = visualElement.getBaseTarget(key);
                if (fallbackTarget !== undefined) {
                    fallbackAnimation[key] = fallbackTarget;
                }
            });
            animations.push({ animation: fallbackAnimation });
        }
        let shouldAnimate = Boolean(animations.length);
        if (isInitialRender &&
            props.initial === false &&
            !visualElement.manuallyAnimateOnMount) {
            shouldAnimate = false;
        }
        isInitialRender = false;
        return shouldAnimate ? animate(animations) : Promise.resolve();
    }
    /**
     * Change whether a certain animation type is active.
     */
    function setActive(type, isActive, options) {
        var _a;
        // If the active state hasn't changed, we can safely do nothing here
        if (state[type].isActive === isActive)
            return Promise.resolve();
        // Propagate active change to children
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => { var _a; return (_a = child.animationState) === null || _a === void 0 ? void 0 : _a.setActive(type, isActive); });
        state[type].isActive = isActive;
        const animations = animateChanges(options, type);
        for (const key in state) {
            state[key].protectedKeys = {};
        }
        return animations;
    }
    return {
        animateChanges,
        setActive,
        setAnimateFunction,
        getState: () => state,
    };
}
function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
        return next !== prev;
    }
    else if (Array.isArray(next)) {
        return !shallowCompare(next, prev);
    }
    return false;
}
function createTypeState(isActive = false) {
    return {
        isActive,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function createState() {
    return {
        animate: createTypeState(true),
        whileInView: createTypeState(),
        whileHover: createTypeState(),
        whileTap: createTypeState(),
        whileDrag: createTypeState(),
        whileFocus: createTypeState(),
        exit: createTypeState(),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/index.mjs




class AnimationFeature extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
        super(node);
        node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
        const { animate } = this.node.getProps();
        this.unmount();
        if (isAnimationControls(animate)) {
            this.unmount = animate.subscribe(this.node);
        }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate } = this.node.getProps();
        const { animate: prevAnimate } = this.node.prevProps || {};
        if (animate !== prevAnimate) {
            this.updateAnimationControlsSubscription();
        }
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs


let id = 0;
class ExitAnimationFeature extends Feature {
    constructor() {
        super(...arguments);
        this.id = id++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const { isPresent, onExitComplete, custom } = this.node.presenceContext;
        const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || isPresent === prevIsPresent) {
            return;
        }
        const exitAnimation = this.node.animationState.setActive("exit", !isPresent, { custom: custom !== null && custom !== void 0 ? custom : this.node.getProps().custom });
        if (onExitComplete && !isPresent) {
            exitAnimation.then(() => onExitComplete(this.id));
        }
    }
    mount() {
        const { register } = this.node.presenceContext || {};
        if (register) {
            this.unmount = register(this.id);
        }
    }
    unmount() { }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/animations.mjs



const animations = {
    animation: {
        Feature: AnimationFeature,
    },
    exit: {
        Feature: ExitAnimationFeature,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/distance.mjs
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
    // Multi-dimensional
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs








/**
 * @internal
 */
class PanSession {
    constructor(event, handlers, { transformPagePoint } = {}) {
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const info = getPanInfo(this.lastMoveEventInfo, this.history);
            const isPanStarted = this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            const isDistancePastThreshold = distance2D(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            const { point } = info;
            const { timestamp } = frameData;
            this.history.push({ ...point, timestamp });
            const { onStart, onMove } = this.handlers;
            if (!isPanStarted) {
                onStart && onStart(this.lastMoveEvent, info);
                this.startEvent = this.lastMoveEvent;
            }
            onMove && onMove(this.lastMoveEvent, info);
        };
        this.handlePointerMove = (event, info) => {
            this.lastMoveEvent = event;
            this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
            // Throttle mouse move event to once per frame
            frame_frame.update(this.updatePoint, true);
        };
        this.handlePointerUp = (event, info) => {
            this.end();
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const { onEnd, onSessionEnd } = this.handlers;
            const panInfo = getPanInfo(event.type === "pointercancel"
                ? this.lastMoveEventInfo
                : transformPoint(info, this.transformPagePoint), this.history);
            if (this.startEvent && onEnd) {
                onEnd(event, panInfo);
            }
            onSessionEnd && onSessionEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (!isPrimaryPointer(event))
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        const info = extractEventInfo(event);
        const initialInfo = transformPoint(info, this.transformPagePoint);
        const { point } = initialInfo;
        const { timestamp } = frameData;
        this.history = [{ ...point, timestamp }];
        const { onSessionStart } = handlers;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(handlers) {
        this.handlers = handlers;
    }
    end() {
        this.removeListeners && this.removeListeners();
        cancelFrame(this.updatePoint);
    }
}
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo({ point }, history) {
    return {
        point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: PanSession_getVelocity(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function PanSession_getVelocity(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    const time = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    const currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs


function calcLength(axis) {
    return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
    return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mix(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001) || isNaN(delta.scale))
        delta.scale = 1;
    delta.translate =
        mix(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate) || isNaN(delta.translate))
        delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : undefined);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : undefined);
}
function calcRelativeAxis(target, relative, parent) {
    target.min = parent.min + relative.min;
    target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
    calcRelativeAxis(target.x, relative.x, parent.x);
    calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
    target.min = layout.min - parent.min;
    target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
    calcRelativeAxisPosition(target.x, layout.x, parent.x);
    calcRelativeAxisPosition(target.y, layout.y, parent.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs





/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, { min, max }, elastic) {
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        [min, max] = [max, min];
    }
    return { min, max };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function constraints_calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = progress(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}
const defaultElastic = 0.35;
/**
 * Accepts a dragElastic prop and returns resolved elastic values for each axis.
 */
function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
        dragElastic = 0;
    }
    else if (dragElastic === true) {
        dragElastic = defaultElastic;
    }
    return {
        x: resolveAxisElastic(dragElastic, "left", "right"),
        y: resolveAxisElastic(dragElastic, "top", "bottom"),
    };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
        min: resolvePointElastic(dragElastic, minLabel),
        max: resolvePointElastic(dragElastic, maxLabel),
    };
}
function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number"
        ? dragElastic
        : dragElastic[label] || 0;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/models.mjs
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
    return [callback("x"), callback("y")];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const instance = node.instance;
        if (instance &&
            instance.style &&
            instance.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && hasTransform(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    treeScale.x = snapToDefault(treeScale.x);
    treeScale.y = snapToDefault(treeScale.y);
}
function snapToDefault(scale) {
    if (Number.isInteger(scale))
        return scale;
    return scale > 1.0000000000001 || scale < 0.999999999999 ? scale : 1;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
    const axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    const originPoint = mix(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform, xKeys);
    transformAxis(box.y, transform, yKeys);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/utils/measure.mjs



function measureViewportBox(instance, transformPoint) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        translateAxis(viewportBox.x, scroll.offset.x);
        translateAxis(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs


















const elementDragControls = new WeakMap();
/**
 *
 */
// let latestPointerEvent: PointerEvent
class VisualElementDragControls {
    constructor(visualElement) {
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        this.isDragging = false;
        this.currentDirection = null;
        this.originPoint = { x: 0, y: 0 };
        /**
         * The permitted boundaries of travel, in pixels.
         */
        this.constraints = false;
        this.hasMutatedConstraints = false;
        /**
         * The per-axis resolved elastic values.
         */
        this.elastic = createBox();
        this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false } = {}) {
        /**
         * Don't start dragging if this component is exiting
         */
        const { presenceContext } = this.visualElement;
        if (presenceContext && presenceContext.isPresent === false)
            return;
        const onSessionStart = (event) => {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            this.stopAnimation();
            if (snapToCursor) {
                this.snapToCursor(extractEventInfo(event, "page").point);
            }
        };
        const onStart = (event, info) => {
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            const { drag, dragPropagation, onDragStart } = this.getProps();
            if (drag && !dragPropagation) {
                if (this.openGlobalLock)
                    this.openGlobalLock();
                this.openGlobalLock = getGlobalLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!this.openGlobalLock)
                    return;
            }
            this.isDragging = true;
            this.currentDirection = null;
            this.resolveConstraints();
            if (this.visualElement.projection) {
                this.visualElement.projection.isAnimationBlocked = true;
                this.visualElement.projection.target = undefined;
            }
            /**
             * Record gesture origin
             */
            eachAxis((axis) => {
                let current = this.getAxisMotionValue(axis).get() || 0;
                /**
                 * If the MotionValue is a percentage value convert to px
                 */
                if (percent.test(current)) {
                    const { projection } = this.visualElement;
                    if (projection && projection.layout) {
                        const measuredAxis = projection.layout.layoutBox[axis];
                        if (measuredAxis) {
                            const length = calcLength(measuredAxis);
                            current = length * (parseFloat(current) / 100);
                        }
                    }
                }
                this.originPoint[axis] = current;
            });
            // Fire onDragStart event
            if (onDragStart) {
                frame_frame.update(() => onDragStart(event, info), false, true);
            }
            const { animationState } = this.visualElement;
            animationState && animationState.setActive("whileDrag", true);
        };
        const onMove = (event, info) => {
            // latestPointerEvent = event
            const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag, } = this.getProps();
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !this.openGlobalLock)
                return;
            const { offset } = info;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && this.currentDirection === null) {
                this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (this.currentDirection !== null) {
                    onDirectionLock && onDirectionLock(this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            this.updateAxis("x", info.point, offset);
            this.updateAxis("y", info.point, offset);
            /**
             * Ideally we would leave the renderer to fire naturally at the end of
             * this frame but if the element is about to change layout as the result
             * of a re-render we want to ensure the browser can read the latest
             * bounding box to ensure the pointer and element don't fall out of sync.
             */
            this.visualElement.render();
            /**
             * This must fire after the render call as it might trigger a state
             * change which itself might trigger a layout update.
             */
            onDrag && onDrag(event, info);
        };
        const onSessionEnd = (event, info) => this.stop(event, info);
        this.panSession = new PanSession(originEvent, {
            onSessionStart,
            onStart,
            onMove,
            onSessionEnd,
        }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
    stop(event, info) {
        const isDragging = this.isDragging;
        this.cancel();
        if (!isDragging)
            return;
        const { velocity } = info;
        this.startAnimation(velocity);
        const { onDragEnd } = this.getProps();
        if (onDragEnd) {
            frame_frame.update(() => onDragEnd(event, info));
        }
    }
    cancel() {
        this.isDragging = false;
        const { projection, animationState } = this.visualElement;
        if (projection) {
            projection.isAnimationBlocked = false;
        }
        this.panSession && this.panSession.end();
        this.panSession = undefined;
        const { dragPropagation } = this.getProps();
        if (!dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
        animationState && animationState.setActive("whileDrag", false);
    }
    updateAxis(axis, _point, offset) {
        const { drag } = this.getProps();
        // If we're not dragging this axis, do an early return.
        if (!offset || !shouldDrag(axis, drag, this.currentDirection))
            return;
        const axisValue = this.getAxisMotionValue(axis);
        let next = this.originPoint[axis] + offset[axis];
        // Apply constraints
        if (this.constraints && this.constraints[axis]) {
            next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
        }
        axisValue.set(next);
    }
    resolveConstraints() {
        const { dragConstraints, dragElastic } = this.getProps();
        const { layout } = this.visualElement.projection || {};
        const prevConstraints = this.constraints;
        if (dragConstraints && isRefObject(dragConstraints)) {
            if (!this.constraints) {
                this.constraints = this.resolveRefConstraints();
            }
        }
        else {
            if (dragConstraints && layout) {
                this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
            }
            else {
                this.constraints = false;
            }
        }
        this.elastic = resolveDragElastic(dragElastic);
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (prevConstraints !== this.constraints &&
            layout &&
            this.constraints &&
            !this.hasMutatedConstraints) {
            eachAxis((axis) => {
                if (this.getAxisMotionValue(axis)) {
                    this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
                }
            });
        }
    }
    resolveRefConstraints() {
        const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
        if (!constraints || !isRefObject(constraints))
            return false;
        const constraintsElement = constraints.current;
        invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        const { projection } = this.visualElement;
        // TODO
        if (!projection || !projection.layout)
            return false;
        const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
        let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToBox(userConstraints);
            }
        }
        return measuredConstraints;
    }
    startAnimation(velocity) {
        const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd, } = this.getProps();
        const constraints = this.constraints || {};
        const momentumAnimations = eachAxis((axis) => {
            if (!shouldDrag(axis, drag, this.currentDirection)) {
                return;
            }
            let transition = (constraints && constraints[axis]) || {};
            if (dragSnapToOrigin)
                transition = { min: 0, max: 0 };
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            const bounceStiffness = dragElastic ? 200 : 1000000;
            const bounceDamping = dragElastic ? 40 : 10000000;
            const inertia = {
                type: "inertia",
                velocity: dragMomentum ? velocity[axis] : 0,
                bounceStiffness,
                bounceDamping,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...dragTransition,
                ...transition,
            };
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return this.startAxisValueAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
        const axisValue = this.getAxisMotionValue(axis);
        return axisValue.start(animateMotionValue(axis, axisValue, 0, transition));
    }
    stopAnimation() {
        eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
        const dragKey = "_drag" + axis.toUpperCase();
        const props = this.visualElement.getProps();
        const externalMotionValue = props[dragKey];
        return externalMotionValue
            ? externalMotionValue
            : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : undefined) || 0);
    }
    snapToCursor(point) {
        eachAxis((axis) => {
            const { drag } = this.getProps();
            // If we're not dragging this axis, do an early return.
            if (!shouldDrag(axis, drag, this.currentDirection))
                return;
            const { projection } = this.visualElement;
            const axisValue = this.getAxisMotionValue(axis);
            if (projection && projection.layout) {
                const { min, max } = projection.layout.layoutBox[axis];
                axisValue.set(point[axis] - mix(min, max, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const { drag, dragConstraints } = this.getProps();
        const { projection } = this.visualElement;
        if (!isRefObject(dragConstraints) || !projection || !this.constraints)
            return;
        /**
         * Stop current animations as there can be visual glitching if we try to do
         * this mid-animation
         */
        this.stopAnimation();
        /**
         * Record the relative position of the dragged element relative to the
         * constraints box and save as a progress value.
         */
        const boxProgress = { x: 0, y: 0 };
        eachAxis((axis) => {
            const axisValue = this.getAxisMotionValue(axis);
            if (axisValue) {
                const latest = axisValue.get();
                boxProgress[axis] = constraints_calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
            }
        });
        /**
         * Update the layout of this element and resolve the latest drag constraints
         */
        const { transformTemplate } = this.visualElement.getProps();
        this.visualElement.current.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
        this.resolveConstraints();
        /**
         * For each axis, calculate the current progress of the layout axis
         * within the new constraints.
         */
        eachAxis((axis) => {
            if (!shouldDrag(axis, drag, null))
                return;
            /**
             * Calculate a new transform based on the previous box progress
             */
            const axisValue = this.getAxisMotionValue(axis);
            const { min, max } = this.constraints[axis];
            axisValue.set(mix(min, max, boxProgress[axis]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        elementDragControls.set(this.visualElement, this);
        const element = this.visualElement.current;
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
            const { drag, dragListener = true } = this.getProps();
            drag && dragListener && this.start(event);
        });
        const measureDragConstraints = () => {
            const { dragConstraints } = this.getProps();
            if (isRefObject(dragConstraints)) {
                this.constraints = this.resolveRefConstraints();
            }
        };
        const { projection } = this.visualElement;
        const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
        if (projection && !projection.layout) {
            projection.root && projection.root.updateScroll();
            projection.updateLayout();
        }
        measureDragConstraints();
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
        /**
         * If the element's layout changes, calculate the delta and apply that to
         * the drag gesture's origin point.
         */
        const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
            if (this.isDragging && hasLayoutChanged) {
                eachAxis((axis) => {
                    const motionValue = this.getAxisMotionValue(axis);
                    if (!motionValue)
                        return;
                    this.originPoint[axis] += delta[axis].translate;
                    motionValue.set(motionValue.get() + delta[axis].translate);
                });
                this.visualElement.render();
            }
        }));
        return () => {
            stopResizeListener();
            stopPointerListener();
            stopMeasureLayoutListener();
            stopLayoutUpdateListener && stopLayoutUpdateListener();
        };
    }
    getProps() {
        const props = this.visualElement.getProps();
        const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true, } = props;
        return {
            ...props,
            drag,
            dragDirectionLock,
            dragPropagation,
            dragConstraints,
            dragElastic,
            dragMomentum,
        };
    }
}
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/drag/index.mjs




class DragGesture extends Feature {
    constructor(node) {
        super(node);
        this.removeGroupControls = noop;
        this.removeListeners = noop;
        this.controls = new VisualElementDragControls(node);
    }
    mount() {
        // If we've been provided a DragControls for manual control over the drag gesture,
        // subscribe this component to it on mount.
        const { dragControls } = this.node.getProps();
        if (dragControls) {
            this.removeGroupControls = dragControls.subscribe(this.controls);
        }
        this.removeListeners = this.controls.addListeners() || noop;
    }
    unmount() {
        this.removeGroupControls();
        this.removeListeners();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/gestures/pan/index.mjs






const asyncHandler = (handler) => (event, info) => {
    if (handler) {
        frame_frame.update(() => handler(event, info));
    }
};
class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: asyncHandler(onPanSessionStart),
            onStart: asyncHandler(onPanStart),
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                if (onPanEnd) {
                    frame_frame.update(() => onPanEnd(event, info));
                }
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs



/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    const context = (0,react_experimental_.useContext)(PresenceContext_PresenceContext);
    if (context === null)
        return [true, null];
    const { isPresent, onExitComplete, register } = context;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    const id = (0,react_experimental_.useId)();
    (0,react_experimental_.useEffect)(() => register(id), []);
    const safeToRemove = () => onExitComplete && onExitComplete(id);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent(useContext(PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/state.mjs
/**
 * This should only ever be modified on the client otherwise it'll
 * persist through server requests. If we need instanced states we
 * could lazy-init via root.
 */
const globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs


function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
        return 0;
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
const correctBorderRadius = {
    correct: (latest, node) => {
        if (!node.target)
            return latest;
        /**
         * If latest is a string, if it's a percentage we can return immediately as it's
         * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
         */
        if (typeof latest === "string") {
            if (px.test(latest)) {
                latest = parseFloat(latest);
            }
            else {
                return latest;
            }
        }
        /**
         * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
         * pixel value as a percentage of each axis
         */
        const x = pixelsToPercent(latest, node.target.x);
        const y = pixelsToPercent(latest, node.target.y);
        return `${x}% ${y}%`;
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs



const correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
        const original = latest;
        const shadow = complex.parse(latest);
        // TODO: Doesn't support multiple shadows
        if (shadow.length > 5)
            return original;
        const template = complex.createTransformer(latest);
        const offset = typeof shadow[0] !== "number" ? 1 : 0;
        // Calculate the overall context scale
        const xScale = projectionDelta.x.scale * treeScale.x;
        const yScale = projectionDelta.y.scale * treeScale.y;
        shadow[0 + offset] /= xScale;
        shadow[1 + offset] /= yScale;
        /**
         * Ideally we'd correct x and y scales individually, but because blur and
         * spread apply to both we have to take a scale average and apply that instead.
         * We could potentially improve the outcome of this by incorporating the ratio between
         * the two scales.
         */
        const averageScale = mix(xScale, yScale, 0.5);
        // Blur
        if (typeof shadow[2 + offset] === "number")
            shadow[2 + offset] /= averageScale;
        // Spread
        if (typeof shadow[3 + offset] === "number")
            shadow[3 + offset] /= averageScale;
        return template(shadow);
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs










class MeasureLayoutWithContext extends react_experimental_.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
        const { projection } = visualElement;
        addScaleCorrector(defaultScaleCorrectors);
        if (projection) {
            if (layoutGroup.group)
                layoutGroup.group.add(projection);
            if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
                switchLayoutGroup.register(projection);
            }
            projection.root.didUpdate();
            projection.addEventListener("animationComplete", () => {
                this.safeToRemove();
            });
            projection.setOptions({
                ...projection.options,
                onExitComplete: () => this.safeToRemove(),
            });
        }
        globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
        const { layoutDependency, visualElement, drag, isPresent } = this.props;
        const projection = visualElement.projection;
        if (!projection)
            return null;
        /**
         * TODO: We use this data in relegate to determine whether to
         * promote a previous element. There's no guarantee its presence data
         * will have updated by this point - if a bug like this arises it will
         * have to be that we markForRelegation and then find a new lead some other way,
         * perhaps in didUpdate
         */
        projection.isPresent = isPresent;
        if (drag ||
            prevProps.layoutDependency !== layoutDependency ||
            layoutDependency === undefined) {
            projection.willUpdate();
        }
        else {
            this.safeToRemove();
        }
        if (prevProps.isPresent !== isPresent) {
            if (isPresent) {
                projection.promote();
            }
            else if (!projection.relegate()) {
                /**
                 * If there's another stack member taking over from this one,
                 * it's in charge of the exit animation and therefore should
                 * be in charge of the safe to remove. Otherwise we call it here.
                 */
                frame_frame.postRender(() => {
                    const stack = projection.getStack();
                    if (!stack || !stack.members.length) {
                        this.safeToRemove();
                    }
                });
            }
        }
        return null;
    }
    componentDidUpdate() {
        const { projection } = this.props.visualElement;
        if (projection) {
            projection.root.didUpdate();
            queueMicrotask(() => {
                if (!projection.currentAnimation && projection.isLead()) {
                    this.safeToRemove();
                }
            });
        }
    }
    componentWillUnmount() {
        const { visualElement, layoutGroup, switchLayoutGroup: promoteContext, } = this.props;
        const { projection } = visualElement;
        if (projection) {
            projection.scheduleCheckAfterUnmount();
            if (layoutGroup && layoutGroup.group)
                layoutGroup.group.remove(projection);
            if (promoteContext && promoteContext.deregister)
                promoteContext.deregister(projection);
        }
    }
    safeToRemove() {
        const { safeToRemove } = this.props;
        safeToRemove && safeToRemove();
    }
    render() {
        return null;
    }
}
function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = (0,react_experimental_.useContext)(LayoutGroupContext);
    return (react_experimental_.createElement(MeasureLayoutWithContext, { ...props, layoutGroup: layoutGroup, switchLayoutGroup: (0,react_experimental_.useContext)(SwitchLayoutGroupContext), isPresent: isPresent, safeToRemove: safeToRemove }));
}
const defaultScaleCorrectors = {
    borderRadius: {
        ...correctBorderRadius,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow,
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs






const borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
        target.opacity = mix(0, 
        // TODO Reinstate this if only child
        lead.opacity !== undefined ? lead.opacity : 1, easeCrossfadeIn(progress));
        target.opacityExit = mix(follow.opacity !== undefined ? follow.opacity : 1, 0, easeCrossfadeOut(progress));
    }
    else if (isOnlyMember) {
        target.opacity = mix(follow.opacity !== undefined ? follow.opacity : 1, lead.opacity !== undefined ? lead.opacity : 1, progress);
    }
    /**
     * Mix border radius
     */
    for (let i = 0; i < numBorders; i++) {
        const borderLabel = `border${borders[i]}Radius`;
        let followRadius = getRadius(follow, borderLabel);
        let leadRadius = getRadius(lead, borderLabel);
        if (followRadius === undefined && leadRadius === undefined)
            continue;
        followRadius || (followRadius = 0);
        leadRadius || (leadRadius = 0);
        const canMix = followRadius === 0 ||
            leadRadius === 0 ||
            isPx(followRadius) === isPx(leadRadius);
        if (canMix) {
            target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress), 0);
            if (percent.test(leadRadius) || percent.test(followRadius)) {
                target[borderLabel] += "%";
            }
        }
        else {
            target[borderLabel] = leadRadius;
        }
    }
    /**
     * Mix rotation
     */
    if (follow.rotate || lead.rotate) {
        target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress);
    }
}
function getRadius(values, radiusName) {
    return values[radiusName] !== undefined
        ? values[radiusName]
        : values.borderRadius;
}
// /**
//  * We only want to mix the background color if there's a follow element
//  * that we're not crossfading opacity between. For instance with switch
//  * AnimateSharedLayout animations, this helps the illusion of a continuous
//  * element being animated but also cuts down on the number of paints triggered
//  * for elements where opacity is doing that work for us.
//  */
// if (
//     !hasFollowElement &&
//     latestLeadValues.backgroundColor &&
//     latestFollowValues.backgroundColor
// ) {
//     /**
//      * This isn't ideal performance-wise as mixColor is creating a new function every frame.
//      * We could probably create a mixer that runs at the start of the animation but
//      * the idea behind the crossfader is that it runs dynamically between two potentially
//      * changing targets (ie opacity or borderRadius may be animating independently via variants)
//      */
//     leadState.backgroundColor = followState.backgroundColor = mixColor(
//         latestFollowValues.backgroundColor as string,
//         latestLeadValues.backgroundColor as string
//     )(p)
// }
const easeCrossfadeIn = compress(0, 0.5, circOut);
const easeCrossfadeOut = compress(0.5, 0.95, noop);
function compress(min, max, easing) {
    return (p) => {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(progress(min, max, p));
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs




/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate = 0, scale = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
        translate = parseFloat(translate);
        const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
        translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
        return;
    let originPoint = mix(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
        originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
const delta_remove_xKeys = ["x", "scaleX", "originX"];
const delta_remove_yKeys = ["y", "scaleY", "originY"];
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, delta_remove_xKeys, originBox ? originBox.x : undefined, sourceBox ? sourceBox.x : undefined);
    removeAxisTransforms(box.y, transforms, delta_remove_yKeys, originBox ? originBox.y : undefined, sourceBox ? sourceBox.y : undefined);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/geometry/utils.mjs


function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a, b) {
    return (a.x.min === b.x.min &&
        a.x.max === b.x.max &&
        a.y.min === b.y.min &&
        a.y.max === b.y.max);
}
function boxEqualsRounded(a, b) {
    return (Math.round(a.x.min) === Math.round(b.x.min) &&
        Math.round(a.x.max) === Math.round(b.x.max) &&
        Math.round(a.y.min) === Math.round(b.y.min) &&
        Math.round(a.y.max) === Math.round(b.y.max));
}
function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/shared/stack.mjs


class NodeStack {
    constructor() {
        this.members = [];
    }
    add(node) {
        addUniqueItem(this.members, node);
        node.scheduleRender();
    }
    remove(node) {
        removeItem(this.members, node);
        if (node === this.prevLead) {
            this.prevLead = undefined;
        }
        if (node === this.lead) {
            const prevLead = this.members[this.members.length - 1];
            if (prevLead) {
                this.promote(prevLead);
            }
        }
    }
    relegate(node) {
        const indexOfNode = this.members.findIndex((member) => node === member);
        if (indexOfNode === 0)
            return false;
        /**
         * Find the next projection node that is present
         */
        let prevLead;
        for (let i = indexOfNode; i >= 0; i--) {
            const member = this.members[i];
            if (member.isPresent !== false) {
                prevLead = member;
                break;
            }
        }
        if (prevLead) {
            this.promote(prevLead);
            return true;
        }
        else {
            return false;
        }
    }
    promote(node, preserveFollowOpacity) {
        const prevLead = this.lead;
        if (node === prevLead)
            return;
        this.prevLead = prevLead;
        this.lead = node;
        node.show();
        if (prevLead) {
            prevLead.instance && prevLead.scheduleRender();
            node.scheduleRender();
            node.resumeFrom = prevLead;
            if (preserveFollowOpacity) {
                node.resumeFrom.preserveOpacity = true;
            }
            if (prevLead.snapshot) {
                node.snapshot = prevLead.snapshot;
                node.snapshot.latestValues =
                    prevLead.animationValues || prevLead.latestValues;
            }
            if (node.root && node.root.isUpdating) {
                node.isLayoutDirty = true;
            }
            const { crossfade } = node.options;
            if (crossfade === false) {
                prevLead.hide();
            }
            /**
             * TODO:
             *   - Test border radius when previous node was deleted
             *   - boxShadow mixing
             *   - Shared between element A in scrolled container and element B (scroll stays the same or changes)
             *   - Shared between element A in transformed container and element B (transform stays the same or changes)
             *   - Shared between element A in scrolled page and element B (scroll stays the same or changes)
             * ---
             *   - Crossfade opacity of root nodes
             *   - layoutId changes after animation
             *   - layoutId changes mid animation
             */
        }
    }
    exitAnimationComplete() {
        this.members.forEach((node) => {
            const { options, resumingFrom } = node;
            options.onExitComplete && options.onExitComplete();
            if (resumingFrom) {
                resumingFrom.options.onExitComplete &&
                    resumingFrom.options.onExitComplete();
            }
        });
    }
    scheduleRender() {
        this.members.forEach((node) => {
            node.instance && node.scheduleRender(false);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        if (this.lead && this.lead.snapshot) {
            this.lead.snapshot = undefined;
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform = "";
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    if (xTranslate || yTranslate) {
        transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
    }
    /**
     * Apply scale correction for the tree transform.
     * This will apply scale to the screen-orientated axes.
     */
    if (treeScale.x !== 1 || treeScale.y !== 1) {
        transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
        const { rotate, rotateX, rotateY } = latestTransform;
        if (rotate)
            transform += `rotate(${rotate}deg) `;
        if (rotateX)
            transform += `rotateX(${rotateX}deg) `;
        if (rotateY)
            transform += `rotateY(${rotateY}deg) `;
    }
    /**
     * Apply scale to match the size of the element to the size we want it.
     * This will apply scale to the element-orientated axes.
     */
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
        transform += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform || "none";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
const compareByDepth = (a, b) => a.depth - b.depth;



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs



class FlatTree {
    constructor() {
        this.children = [];
        this.isDirty = false;
    }
    add(child) {
        addUniqueItem(this.children, child);
        this.isDirty = true;
    }
    remove(child) {
        removeItem(this.children, child);
        this.isDirty = true;
    }
    forEach(callback) {
        this.isDirty && this.children.sort(compareByDepth);
        this.isDirty = false;
        this.children.forEach(callback);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/delay.mjs


/**
 * Timeout defined in ms
 */
function delay(callback, timeout) {
    const start = performance.now();
    const checkElapsed = ({ timestamp }) => {
        const elapsed = timestamp - start;
        if (elapsed >= timeout) {
            cancelFrame(checkElapsed);
            callback(elapsed - timeout);
        }
    };
    frame_frame.read(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/debug/record.mjs
function record(data) {
    if (window.MotionDebug) {
        window.MotionDebug.record(data);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/animation/interfaces/single-value.mjs




function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs


























const transformAxes = ["", "X", "Y", "Z"];
/**
 * We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
 * which has a noticeable difference in spring animations
 */
const animationTarget = 1000;
let create_projection_node_id = 0;
/**
 * Use a mutable data object for debug data so as to not create a new
 * object every frame.
 */
const projectionFrameData = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
};
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform, }) {
    return class ProjectionNode {
        constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
            /**
             * A unique ID generated for every projection node.
             */
            this.id = create_projection_node_id++;
            /**
             * An id that represents a unique session instigated by startUpdate.
             */
            this.animationId = 0;
            /**
             * A Set containing all this component's children. This is used to iterate
             * through the children.
             *
             * TODO: This could be faster to iterate as a flat array stored on the root node.
             */
            this.children = new Set();
            /**
             * Options for the node. We use this to configure what kind of layout animations
             * we should perform (if any).
             */
            this.options = {};
            /**
             * We use this to detect when its safe to shut down part of a projection tree.
             * We have to keep projecting children for scale correction and relative projection
             * until all their parents stop performing layout animations.
             */
            this.isTreeAnimating = false;
            this.isAnimationBlocked = false;
            /**
             * Flag to true if we think this layout has been changed. We can't always know this,
             * currently we set it to true every time a component renders, or if it has a layoutDependency
             * if that has changed between renders. Additionally, components can be grouped by LayoutGroup
             * and if one node is dirtied, they all are.
             */
            this.isLayoutDirty = false;
            /**
             * Flag to true if we think the projection calculations for this node needs
             * recalculating as a result of an updated transform or layout animation.
             */
            this.isProjectionDirty = false;
            /**
             * Flag to true if the layout *or* transform has changed. This then gets propagated
             * throughout the projection tree, forcing any element below to recalculate on the next frame.
             */
            this.isSharedProjectionDirty = false;
            /**
             * Flag transform dirty. This gets propagated throughout the whole tree but is only
             * respected by shared nodes.
             */
            this.isTransformDirty = false;
            /**
             * Block layout updates for instant layout transitions throughout the tree.
             */
            this.updateManuallyBlocked = false;
            this.updateBlockedByResize = false;
            /**
             * Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
             * call.
             */
            this.isUpdating = false;
            /**
             * If this is an SVG element we currently disable projection transforms
             */
            this.isSVG = false;
            /**
             * Flag to true (during promotion) if a node doing an instant layout transition needs to reset
             * its projection styles.
             */
            this.needsReset = false;
            /**
             * Flags whether this node should have its transform reset prior to measuring.
             */
            this.shouldResetTransform = false;
            /**
             * An object representing the calculated contextual/accumulated/tree scale.
             * This will be used to scale calculcated projection transforms, as these are
             * calculated in screen-space but need to be scaled for elements to layoutly
             * make it to their calculated destinations.
             *
             * TODO: Lazy-init
             */
            this.treeScale = { x: 1, y: 1 };
            /**
             *
             */
            this.eventHandlers = new Map();
            this.hasTreeAnimated = false;
            // Note: Currently only running on root node
            this.updateScheduled = false;
            this.checkUpdateFailed = () => {
                if (this.isUpdating) {
                    this.isUpdating = false;
                    this.clearAllSnapshots();
                }
            };
            /**
             * This is a multi-step process as shared nodes might be of different depths. Nodes
             * are sorted by depth order, so we need to resolve the entire tree before moving to
             * the next step.
             */
            this.updateProjection = () => {
                /**
                 * Reset debug counts. Manually resetting rather than creating a new
                 * object each frame.
                 */
                projectionFrameData.totalNodes =
                    projectionFrameData.resolvedTargetDeltas =
                        projectionFrameData.recalculatedProjection =
                            0;
                this.nodes.forEach(propagateDirtyNodes);
                this.nodes.forEach(resolveTargetDelta);
                this.nodes.forEach(calcProjection);
                this.nodes.forEach(cleanDirtyNodes);
                record(projectionFrameData);
            };
            this.hasProjected = false;
            this.isVisible = true;
            this.animationProgress = 0;
            /**
             * Shared layout
             */
            // TODO Only running on root node
            this.sharedNodes = new Map();
            this.latestValues = latestValues;
            this.root = parent ? parent.root || parent : this;
            this.path = parent ? [...parent.path, parent] : [];
            this.parent = parent;
            this.depth = parent ? parent.depth + 1 : 0;
            for (let i = 0; i < this.path.length; i++) {
                this.path[i].shouldResetTransform = true;
            }
            if (this.root === this)
                this.nodes = new FlatTree();
        }
        addEventListener(name, handler) {
            if (!this.eventHandlers.has(name)) {
                this.eventHandlers.set(name, new SubscriptionManager());
            }
            return this.eventHandlers.get(name).add(handler);
        }
        notifyListeners(name, ...args) {
            const subscriptionManager = this.eventHandlers.get(name);
            subscriptionManager && subscriptionManager.notify(...args);
        }
        hasListeners(name) {
            return this.eventHandlers.has(name);
        }
        /**
         * Lifecycles
         */
        mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = isSVGElement(instance);
            this.instance = instance;
            const { layoutId, layout, visualElement } = this.options;
            if (visualElement && !visualElement.current) {
                visualElement.mount(instance);
            }
            this.root.nodes.add(this);
            this.parent && this.parent.children.add(this);
            if (isLayoutDirty && (layout || layoutId)) {
                this.isLayoutDirty = true;
            }
            if (attachResizeListener) {
                let cancelDelay;
                const resizeUnblockUpdate = () => (this.root.updateBlockedByResize = false);
                attachResizeListener(instance, () => {
                    this.root.updateBlockedByResize = true;
                    cancelDelay && cancelDelay();
                    cancelDelay = delay(resizeUnblockUpdate, 250);
                    if (globalProjectionState.hasAnimatedSinceResize) {
                        globalProjectionState.hasAnimatedSinceResize = false;
                        this.nodes.forEach(finishAnimation);
                    }
                });
            }
            if (layoutId) {
                this.root.registerSharedNode(layoutId, this);
            }
            // Only register the handler if it requires layout animation
            if (this.options.animate !== false &&
                visualElement &&
                (layoutId || layout)) {
                this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout, }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = undefined;
                        this.relativeTarget = undefined;
                        return;
                    }
                    // TODO: Check here if an animation exists
                    const layoutTransition = this.options.transition ||
                        visualElement.getDefaultTransition() ||
                        defaultLayoutTransition;
                    const { onLayoutAnimationStart, onLayoutAnimationComplete, } = visualElement.getProps();
                    /**
                     * The target layout of the element might stay the same,
                     * but its position relative to its parent has changed.
                     */
                    const targetChanged = !this.targetLayout ||
                        !boxEqualsRounded(this.targetLayout, newLayout) ||
                        hasRelativeTargetChanged;
                    /**
                     * If the layout hasn't seemed to have changed, it might be that the
                     * element is visually in the same place in the document but its position
                     * relative to its parent has indeed changed. So here we check for that.
                     */
                    const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
                    if (this.options.layoutRoot ||
                        (this.resumeFrom && this.resumeFrom.instance) ||
                        hasOnlyRelativeTargetChanged ||
                        (hasLayoutChanged &&
                            (targetChanged || !this.currentAnimation))) {
                        if (this.resumeFrom) {
                            this.resumingFrom = this.resumeFrom;
                            this.resumingFrom.resumingFrom = undefined;
                        }
                        this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
                        const animationOptions = {
                            ...getValueTransition(layoutTransition, "layout"),
                            onPlay: onLayoutAnimationStart,
                            onComplete: onLayoutAnimationComplete,
                        };
                        if (visualElement.shouldReduceMotion ||
                            this.options.layoutRoot) {
                            animationOptions.delay = 0;
                            animationOptions.type = false;
                        }
                        this.startAnimation(animationOptions);
                    }
                    else {
                        /**
                         * If the layout hasn't changed and we have an animation that hasn't started yet,
                         * finish it immediately. Otherwise it will be animating from a location
                         * that was probably never commited to screen and look like a jumpy box.
                         */
                        if (!hasLayoutChanged) {
                            finishAnimation(this);
                        }
                        if (this.isLead() && this.options.onExitComplete) {
                            this.options.onExitComplete();
                        }
                    }
                    this.targetLayout = newLayout;
                });
            }
        }
        unmount() {
            this.options.layoutId && this.willUpdate();
            this.root.nodes.remove(this);
            const stack = this.getStack();
            stack && stack.remove(this);
            this.parent && this.parent.children.delete(this);
            this.instance = undefined;
            cancelFrame(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = true;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = false;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                false);
        }
        // Note: currently only running on root node
        startUpdate() {
            if (this.isUpdateBlocked())
                return;
            this.isUpdating = true;
            this.nodes && this.nodes.forEach(resetRotation);
            this.animationId++;
        }
        getTransformTemplate() {
            const { visualElement } = this.options;
            return visualElement && visualElement.getProps().transformTemplate;
        }
        willUpdate(shouldNotifyListeners = true) {
            this.root.hasTreeAnimated = true;
            if (this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            !this.root.isUpdating && this.root.startUpdate();
            if (this.isLayoutDirty)
                return;
            this.isLayoutDirty = true;
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                node.shouldResetTransform = true;
                node.updateScroll("snapshot");
                if (node.options.layoutRoot) {
                    node.willUpdate(false);
                }
            }
            const { layoutId, layout } = this.options;
            if (layoutId === undefined && !layout)
                return;
            const transformTemplate = this.getTransformTemplate();
            this.prevTransformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            this.updateSnapshot();
            shouldNotifyListeners && this.notifyListeners("willUpdate");
        }
        update() {
            this.updateScheduled = false;
            const updateWasBlocked = this.isUpdateBlocked();
            // When doing an instant transition, we skip the layout update,
            // but should still clean up the measurements so that the next
            // snapshot could be taken correctly.
            if (updateWasBlocked) {
                this.unblockUpdate();
                this.clearAllSnapshots();
                this.nodes.forEach(clearMeasurements);
                return;
            }
            if (!this.isUpdating) {
                this.nodes.forEach(clearIsLayoutDirty);
            }
            this.isUpdating = false;
            /**
             * Write
             */
            this.nodes.forEach(resetTransformStyle);
            /**
             * Read ==================
             */
            // Update layout measurements of updated children
            this.nodes.forEach(updateLayout);
            /**
             * Write
             */
            // Notify listeners that the layout is updated
            this.nodes.forEach(notifyLayoutUpdate);
            this.clearAllSnapshots();
            /**
             * Manually flush any pending updates. Ideally
             * we could leave this to the following requestAnimationFrame but this seems
             * to leave a flash of incorrectly styled content.
             */
            const now = performance.now();
            frameData.delta = clamp(0, 1000 / 60, now - frameData.timestamp);
            frameData.timestamp = now;
            frameData.isProcessing = true;
            steps.update.process(frameData);
            steps.preRender.process(frameData);
            steps.render.process(frameData);
            frameData.isProcessing = false;
        }
        didUpdate() {
            if (!this.updateScheduled) {
                this.updateScheduled = true;
                queueMicrotask(() => this.update());
            }
        }
        clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot);
            this.sharedNodes.forEach(removeLeadSnapshots);
        }
        scheduleUpdateProjection() {
            frame_frame.preRender(this.updateProjection, false, true);
        }
        scheduleCheckAfterUnmount() {
            /**
             * If the unmounting node is in a layoutGroup and did trigger a willUpdate,
             * we manually call didUpdate to give a chance to the siblings to animate.
             * Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
             */
            frame_frame.postRender(() => {
                if (this.isLayoutDirty) {
                    this.root.didUpdate();
                }
                else {
                    this.root.checkUpdateFailed();
                }
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            if (this.snapshot || !this.instance)
                return;
            this.snapshot = this.measure();
        }
        updateLayout() {
            if (!this.instance)
                return;
            // TODO: Incorporate into a forwarded scroll offset
            this.updateScroll();
            if (!(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty) {
                return;
            }
            /**
             * When a node is mounted, it simply resumes from the prevLead's
             * snapshot instead of taking a new one, but the ancestors scroll
             * might have updated while the prevLead is unmounted. We need to
             * update the scroll again to make sure the layout we measure is
             * up to date.
             */
            if (this.resumeFrom && !this.resumeFrom.instance) {
                for (let i = 0; i < this.path.length; i++) {
                    const node = this.path[i];
                    node.updateScroll();
                }
            }
            const prevLayout = this.layout;
            this.layout = this.measure(false);
            this.layoutCorrected = createBox();
            this.isLayoutDirty = false;
            this.projectionDelta = undefined;
            this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement } = this.options;
            visualElement &&
                visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : undefined);
        }
        updateScroll(phase = "measure") {
            let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
            if (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === phase) {
                needsMeasurement = false;
            }
            if (needsMeasurement) {
                this.scroll = {
                    animationId: this.root.animationId,
                    phase,
                    isRoot: checkIsScrollRoot(this.instance),
                    offset: measureScroll(this.instance),
                };
            }
        }
        resetTransform() {
            if (!resetTransform)
                return;
            const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
            const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
            const transformTemplate = this.getTransformTemplate();
            const transformTemplateValue = transformTemplate
                ? transformTemplate(this.latestValues, "")
                : undefined;
            const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
            if (isResetRequested &&
                (hasProjection ||
                    hasTransform(this.latestValues) ||
                    transformTemplateHasChanged)) {
                resetTransform(this.instance, transformTemplateValue);
                this.shouldResetTransform = false;
                this.scheduleRender();
            }
        }
        measure(removeTransform = true) {
            const pageBox = this.measurePageBox();
            let layoutBox = this.removeElementScroll(pageBox);
            /**
             * Measurements taken during the pre-render stage
             * still have transforms applied so we remove them
             * via calculation.
             */
            if (removeTransform) {
                layoutBox = this.removeTransform(layoutBox);
            }
            roundBox(layoutBox);
            return {
                animationId: this.root.animationId,
                measuredBox: pageBox,
                layoutBox,
                latestValues: {},
                source: this.id,
            };
        }
        measurePageBox() {
            const { visualElement } = this.options;
            if (!visualElement)
                return createBox();
            const box = visualElement.measureViewportBox();
            // Remove viewport scroll to give page-relative coordinates
            const { scroll } = this.root;
            if (scroll) {
                translateAxis(box.x, scroll.offset.x);
                translateAxis(box.y, scroll.offset.y);
            }
            return box;
        }
        removeElementScroll(box) {
            const boxWithoutScroll = createBox();
            copyBoxInto(boxWithoutScroll, box);
            /**
             * Performance TODO: Keep a cumulative scroll offset down the tree
             * rather than loop back up the path.
             */
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                const { scroll, options } = node;
                if (node !== this.root && scroll && options.layoutScroll) {
                    /**
                     * If this is a new scroll root, we want to remove all previous scrolls
                     * from the viewport box.
                     */
                    if (scroll.isRoot) {
                        copyBoxInto(boxWithoutScroll, box);
                        const { scroll: rootScroll } = this.root;
                        /**
                         * Undo the application of page scroll that was originally added
                         * to the measured bounding box.
                         */
                        if (rootScroll) {
                            translateAxis(boxWithoutScroll.x, -rootScroll.offset.x);
                            translateAxis(boxWithoutScroll.y, -rootScroll.offset.y);
                        }
                    }
                    translateAxis(boxWithoutScroll.x, scroll.offset.x);
                    translateAxis(boxWithoutScroll.y, scroll.offset.y);
                }
            }
            return boxWithoutScroll;
        }
        applyTransform(box, transformOnly = false) {
            const withTransforms = createBox();
            copyBoxInto(withTransforms, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!transformOnly &&
                    node.options.layoutScroll &&
                    node.scroll &&
                    node !== node.root) {
                    transformBox(withTransforms, {
                        x: -node.scroll.offset.x,
                        y: -node.scroll.offset.y,
                    });
                }
                if (!hasTransform(node.latestValues))
                    continue;
                transformBox(withTransforms, node.latestValues);
            }
            if (hasTransform(this.latestValues)) {
                transformBox(withTransforms, this.latestValues);
            }
            return withTransforms;
        }
        removeTransform(box) {
            const boxWithoutTransform = createBox();
            copyBoxInto(boxWithoutTransform, box);
            for (let i = 0; i < this.path.length; i++) {
                const node = this.path[i];
                if (!node.instance)
                    continue;
                if (!hasTransform(node.latestValues))
                    continue;
                hasScale(node.latestValues) && node.updateSnapshot();
                const sourceBox = createBox();
                const nodeBox = node.measurePageBox();
                copyBoxInto(sourceBox, nodeBox);
                removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : undefined, sourceBox);
            }
            if (hasTransform(this.latestValues)) {
                removeBoxTransforms(boxWithoutTransform, this.latestValues);
            }
            return boxWithoutTransform;
        }
        setTargetDelta(delta) {
            this.targetDelta = delta;
            this.root.scheduleUpdateProjection();
            this.isProjectionDirty = true;
        }
        setOptions(options) {
            this.options = {
                ...this.options,
                ...options,
                crossfade: options.crossfade !== undefined ? options.crossfade : true,
            };
        }
        clearMeasurements() {
            this.scroll = undefined;
            this.layout = undefined;
            this.snapshot = undefined;
            this.prevTransformTemplateValue = undefined;
            this.targetDelta = undefined;
            this.target = undefined;
            this.isLayoutDirty = false;
        }
        forceRelativeParentToResolveTarget() {
            if (!this.relativeParent)
                return;
            /**
             * If the parent target isn't up-to-date, force it to update.
             * This is an unfortunate de-optimisation as it means any updating relative
             * projection will cause all the relative parents to recalculate back
             * up the tree.
             */
            if (this.relativeParent.resolvedRelativeTargetAt !==
                frameData.timestamp) {
                this.relativeParent.resolveTargetDelta(true);
            }
        }
        resolveTargetDelta(forceRecalculation = false) {
            var _a;
            /**
             * Once the dirty status of nodes has been spread through the tree, we also
             * need to check if we have a shared node of a different depth that has itself
             * been dirtied.
             */
            const lead = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
            this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            /**
             * We don't use transform for this step of processing so we don't
             * need to check whether any nodes have changed transform.
             */
            const canSkip = !(forceRecalculation ||
                (isShared && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget);
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If we have no layout, we can't perform projection, so early return
             */
            if (!this.layout || !(layout || layoutId))
                return;
            this.resolvedRelativeTargetAt = frameData.timestamp;
            /**
             * If we don't have a targetDelta but do have a layout, we can attempt to resolve
             * a relativeParent. This will allow a component to perform scale correction
             * even if no animation has started.
             */
            // TODO If this is unsuccessful this currently happens every frame
            if (!this.targetDelta && !this.relativeTarget) {
                // TODO: This is a semi-repetition of further down this function, make DRY
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    relativeParent.layout &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * If we have no relative target or no target delta our target isn't valid
             * for this frame.
             */
            if (!this.relativeTarget && !this.targetDelta)
                return;
            /**
             * Lazy-init target data structure
             */
            if (!this.target) {
                this.target = createBox();
                this.targetWithTransforms = createBox();
            }
            /**
             * If we've got a relative box for this component, resolve it into a target relative to the parent.
             */
            if (this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.relativeParent &&
                this.relativeParent.target) {
                this.forceRelativeParentToResolveTarget();
                calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
                /**
                 * If we've only got a targetDelta, resolve it into a target
                 */
            }
            else if (this.targetDelta) {
                if (Boolean(this.resumingFrom)) {
                    // TODO: This is creating a new object every frame
                    this.target = this.applyTransform(this.layout.layoutBox);
                }
                else {
                    copyBoxInto(this.target, this.layout.layoutBox);
                }
                applyBoxDelta(this.target, this.targetDelta);
            }
            else {
                /**
                 * If no target, use own layout as target
                 */
                copyBoxInto(this.target, this.layout.layoutBox);
            }
            /**
             * If we've been told to attempt to resolve a relative target, do so.
             */
            if (this.attemptToResolveRelativeTarget) {
                this.attemptToResolveRelativeTarget = false;
                const relativeParent = this.getClosestProjectingParent();
                if (relativeParent &&
                    Boolean(relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                    !relativeParent.options.layoutScroll &&
                    relativeParent.target &&
                    this.animationProgress !== 1) {
                    this.relativeParent = relativeParent;
                    this.forceRelativeParentToResolveTarget();
                    this.relativeTarget = createBox();
                    this.relativeTargetOrigin = createBox();
                    calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
                }
                else {
                    this.relativeParent = this.relativeTarget = undefined;
                }
            }
            /**
             * Increase debug counter for resolved target deltas
             */
            projectionFrameData.resolvedTargetDeltas++;
        }
        getClosestProjectingParent() {
            if (!this.parent ||
                hasScale(this.parent.latestValues) ||
                has2DTranslate(this.parent.latestValues)) {
                return undefined;
            }
            if (this.parent.isProjecting()) {
                return this.parent;
            }
            else {
                return this.parent.getClosestProjectingParent();
            }
        }
        isProjecting() {
            return Boolean((this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout);
        }
        calcProjection() {
            var _a;
            const lead = this.getLead();
            const isShared = Boolean(this.resumingFrom) || this !== lead;
            let canSkip = true;
            /**
             * If this is a normal layout animation and neither this node nor its nearest projecting
             * is dirty then we can't skip.
             */
            if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
                canSkip = false;
            }
            /**
             * If this is a shared layout animation and this node's shared projection is dirty then
             * we can't skip.
             */
            if (isShared &&
                (this.isSharedProjectionDirty || this.isTransformDirty)) {
                canSkip = false;
            }
            /**
             * If we have resolved the target this frame we must recalculate the
             * projection to ensure it visually represents the internal calculations.
             */
            if (this.resolvedRelativeTargetAt === frameData.timestamp) {
                canSkip = false;
            }
            if (canSkip)
                return;
            const { layout, layoutId } = this.options;
            /**
             * If this section of the tree isn't animating we can
             * delete our target sources for the following frame.
             */
            this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation);
            if (!this.isTreeAnimating) {
                this.targetDelta = this.relativeTarget = undefined;
            }
            if (!this.layout || !(layout || layoutId))
                return;
            /**
             * Reset the corrected box with the latest values from box, as we're then going
             * to perform mutative operations on it.
             */
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            /**
             * Record previous tree scales before updating.
             */
            const prevTreeScaleX = this.treeScale.x;
            const prevTreeScaleY = this.treeScale.y;
            /**
             * Apply all the parent deltas to this box to produce the corrected box. This
             * is the layout box, as it will appear on screen as a result of the transforms of its parents.
             */
            applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
            /**
             * If this layer needs to perform scale correction but doesn't have a target,
             * use the layout as the target.
             */
            if (lead.layout &&
                !lead.target &&
                (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
                lead.target = lead.layout.layoutBox;
            }
            const { target } = lead;
            if (!target) {
                /**
                 * If we don't have a target to project into, but we were previously
                 * projecting, we want to remove the stored transform and schedule
                 * a render to ensure the elements reflect the removed transform.
                 */
                if (this.projectionTransform) {
                    this.projectionDelta = createDelta();
                    this.projectionTransform = "none";
                    this.scheduleRender();
                }
                return;
            }
            if (!this.projectionDelta) {
                this.projectionDelta = createDelta();
                this.projectionDeltaWithTransform = createDelta();
            }
            const prevProjectionTransform = this.projectionTransform;
            /**
             * Update the delta between the corrected box and the target box before user-set transforms were applied.
             * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
             * for our layout reprojection, but still allow them to be scaled correctly by the user.
             * It might be that to simplify this we may want to accept that user-set scale is also corrected
             * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
             * to allow people to choose whether these styles are corrected based on just the
             * layout reprojection or the final bounding box.
             */
            calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
            this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
            if (this.projectionTransform !== prevProjectionTransform ||
                this.treeScale.x !== prevTreeScaleX ||
                this.treeScale.y !== prevTreeScaleY) {
                this.hasProjected = true;
                this.scheduleRender();
                this.notifyListeners("projectionUpdate", target);
            }
            /**
             * Increase debug counter for recalculated projections
             */
            projectionFrameData.recalculatedProjection++;
        }
        hide() {
            this.isVisible = false;
            // TODO: Schedule render
        }
        show() {
            this.isVisible = true;
            // TODO: Schedule render
        }
        scheduleRender(notifyAll = true) {
            this.options.scheduleRender && this.options.scheduleRender();
            if (notifyAll) {
                const stack = this.getStack();
                stack && stack.scheduleRender();
            }
            if (this.resumingFrom && !this.resumingFrom.instance) {
                this.resumingFrom = undefined;
            }
        }
        setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
            const snapshot = this.snapshot;
            const snapshotLatestValues = snapshot
                ? snapshot.latestValues
                : {};
            const mixedValues = { ...this.latestValues };
            const targetDelta = createDelta();
            if (!this.relativeParent ||
                !this.relativeParent.options.layoutRoot) {
                this.relativeTarget = this.relativeTargetOrigin = undefined;
            }
            this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
            const relativeLayout = createBox();
            const snapshotSource = snapshot ? snapshot.source : undefined;
            const layoutSource = this.layout ? this.layout.source : undefined;
            const isSharedLayoutAnimation = snapshotSource !== layoutSource;
            const stack = this.getStack();
            const isOnlyMember = !stack || stack.members.length <= 1;
            const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation &&
                !isOnlyMember &&
                this.options.crossfade === true &&
                !this.path.some(hasOpacityCrossfade));
            this.animationProgress = 0;
            let prevRelativeTarget;
            this.mixTargetDelta = (latest) => {
                const progress = latest / 1000;
                mixAxisDelta(targetDelta.x, delta.x, progress);
                mixAxisDelta(targetDelta.y, delta.y, progress);
                this.setTargetDelta(targetDelta);
                if (this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout) {
                    calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
                    mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
                    /**
                     * If this is an unchanged relative target we can consider the
                     * projection not dirty.
                     */
                    if (prevRelativeTarget &&
                        boxEquals(this.relativeTarget, prevRelativeTarget)) {
                        this.isProjectionDirty = false;
                    }
                    if (!prevRelativeTarget)
                        prevRelativeTarget = createBox();
                    copyBoxInto(prevRelativeTarget, this.relativeTarget);
                }
                if (isSharedLayoutAnimation) {
                    this.animationValues = mixedValues;
                    mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
                }
                this.root.scheduleUpdateProjection();
                this.scheduleRender();
                this.animationProgress = progress;
            };
            this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
        }
        startAnimation(options) {
            this.notifyListeners("animationStart");
            this.currentAnimation && this.currentAnimation.stop();
            if (this.resumingFrom && this.resumingFrom.currentAnimation) {
                this.resumingFrom.currentAnimation.stop();
            }
            if (this.pendingAnimation) {
                cancelFrame(this.pendingAnimation);
                this.pendingAnimation = undefined;
            }
            /**
             * Start the animation in the next frame to have a frame with progress 0,
             * where the target is the same as when the animation started, so we can
             * calculate the relative positions correctly for instant transitions.
             */
            this.pendingAnimation = frame_frame.update(() => {
                globalProjectionState.hasAnimatedSinceResize = true;
                this.currentAnimation = animateSingleValue(0, animationTarget, {
                    ...options,
                    onUpdate: (latest) => {
                        this.mixTargetDelta(latest);
                        options.onUpdate && options.onUpdate(latest);
                    },
                    onComplete: () => {
                        options.onComplete && options.onComplete();
                        this.completeAnimation();
                    },
                });
                if (this.resumingFrom) {
                    this.resumingFrom.currentAnimation = this.currentAnimation;
                }
                this.pendingAnimation = undefined;
            });
        }
        completeAnimation() {
            if (this.resumingFrom) {
                this.resumingFrom.currentAnimation = undefined;
                this.resumingFrom.preserveOpacity = undefined;
            }
            const stack = this.getStack();
            stack && stack.exitAnimationComplete();
            this.resumingFrom =
                this.currentAnimation =
                    this.animationValues =
                        undefined;
            this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            if (this.currentAnimation) {
                this.mixTargetDelta && this.mixTargetDelta(animationTarget);
                this.currentAnimation.stop();
            }
            this.completeAnimation();
        }
        applyTransformsToTarget() {
            const lead = this.getLead();
            let { targetWithTransforms, target, layout, latestValues } = lead;
            if (!targetWithTransforms || !target || !layout)
                return;
            /**
             * If we're only animating position, and this element isn't the lead element,
             * then instead of projecting into the lead box we instead want to calculate
             * a new target that aligns the two boxes but maintains the layout shape.
             */
            if (this !== lead &&
                this.layout &&
                layout &&
                shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
                target = this.target || createBox();
                const xLength = calcLength(this.layout.layoutBox.x);
                target.x.min = lead.target.x.min;
                target.x.max = target.x.min + xLength;
                const yLength = calcLength(this.layout.layoutBox.y);
                target.y.min = lead.target.y.min;
                target.y.max = target.y.min + yLength;
            }
            copyBoxInto(targetWithTransforms, target);
            /**
             * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
             * This is the final box that we will then project into by calculating a transform delta and
             * applying it to the corrected box.
             */
            transformBox(targetWithTransforms, latestValues);
            /**
             * Update the delta between the corrected box and the final target box, after
             * user-set transforms are applied to it. This will be used by the renderer to
             * create a transform style that will reproject the element from its layout layout
             * into the desired bounding box.
             */
            calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
        }
        registerSharedNode(layoutId, node) {
            if (!this.sharedNodes.has(layoutId)) {
                this.sharedNodes.set(layoutId, new NodeStack());
            }
            const stack = this.sharedNodes.get(layoutId);
            stack.add(node);
            const config = node.options.initialPromotionConfig;
            node.promote({
                transition: config ? config.transition : undefined,
                preserveFollowOpacity: config && config.shouldPreserveFollowOpacity
                    ? config.shouldPreserveFollowOpacity(node)
                    : undefined,
            });
        }
        isLead() {
            const stack = this.getStack();
            return stack ? stack.lead === this : true;
        }
        getLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
        }
        getPrevLead() {
            var _a;
            const { layoutId } = this.options;
            return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : undefined;
        }
        getStack() {
            const { layoutId } = this.options;
            if (layoutId)
                return this.root.sharedNodes.get(layoutId);
        }
        promote({ needsReset, transition, preserveFollowOpacity, } = {}) {
            const stack = this.getStack();
            if (stack)
                stack.promote(this, preserveFollowOpacity);
            if (needsReset) {
                this.projectionDelta = undefined;
                this.needsReset = true;
            }
            if (transition)
                this.setOptions({ transition });
        }
        relegate() {
            const stack = this.getStack();
            if (stack) {
                return stack.relegate(this);
            }
            else {
                return false;
            }
        }
        resetRotation() {
            const { visualElement } = this.options;
            if (!visualElement)
                return;
            // If there's no detected rotation values, we can early return without a forced render.
            let hasRotate = false;
            /**
             * An unrolled check for rotation values. Most elements don't have any rotation and
             * skipping the nested loop and new object creation is 50% faster.
             */
            const { latestValues } = visualElement;
            if (latestValues.rotate ||
                latestValues.rotateX ||
                latestValues.rotateY ||
                latestValues.rotateZ) {
                hasRotate = true;
            }
            // If there's no rotation values, we don't need to do any more.
            if (!hasRotate)
                return;
            const resetValues = {};
            // Check the rotate value of all axes and reset to 0
            for (let i = 0; i < transformAxes.length; i++) {
                const key = "rotate" + transformAxes[i];
                // Record the rotation and then temporarily set it to 0
                if (latestValues[key]) {
                    resetValues[key] = latestValues[key];
                    visualElement.setStaticValue(key, 0);
                }
            }
            // Force a render of this element to apply the transform with all rotations
            // set to 0.
            visualElement.render();
            // Put back all the values we reset
            for (const key in resetValues) {
                visualElement.setStaticValue(key, resetValues[key]);
            }
            // Schedule a render for the next frame. This ensures we won't visually
            // see the element with the reset rotate value applied.
            visualElement.scheduleRender();
        }
        getProjectionStyles(styleProp = {}) {
            var _a, _b;
            // TODO: Return lifecycle-persistent object
            const styles = {};
            if (!this.instance || this.isSVG)
                return styles;
            if (!this.isVisible) {
                return { visibility: "hidden" };
            }
            else {
                styles.visibility = "";
            }
            const transformTemplate = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = false;
                styles.opacity = "";
                styles.pointerEvents =
                    resolveMotionValue(styleProp.pointerEvents) || "";
                styles.transform = transformTemplate
                    ? transformTemplate(this.latestValues, "")
                    : "none";
                return styles;
            }
            const lead = this.getLead();
            if (!this.projectionDelta || !this.layout || !lead.target) {
                const emptyStyles = {};
                if (this.options.layoutId) {
                    emptyStyles.opacity =
                        this.latestValues.opacity !== undefined
                            ? this.latestValues.opacity
                            : 1;
                    emptyStyles.pointerEvents =
                        resolveMotionValue(styleProp.pointerEvents) || "";
                }
                if (this.hasProjected && !hasTransform(this.latestValues)) {
                    emptyStyles.transform = transformTemplate
                        ? transformTemplate({}, "")
                        : "none";
                    this.hasProjected = false;
                }
                return emptyStyles;
            }
            const valuesToRender = lead.animationValues || lead.latestValues;
            this.applyTransformsToTarget();
            styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
            if (transformTemplate) {
                styles.transform = transformTemplate(valuesToRender, styles.transform);
            }
            const { x, y } = this.projectionDelta;
            styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
            if (lead.animationValues) {
                /**
                 * If the lead component is animating, assign this either the entering/leaving
                 * opacity
                 */
                styles.opacity =
                    lead === this
                        ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1
                        : this.preserveOpacity
                            ? this.latestValues.opacity
                            : valuesToRender.opacityExit;
            }
            else {
                /**
                 * Or we're not animating at all, set the lead component to its layout
                 * opacity and other components to hidden.
                 */
                styles.opacity =
                    lead === this
                        ? valuesToRender.opacity !== undefined
                            ? valuesToRender.opacity
                            : ""
                        : valuesToRender.opacityExit !== undefined
                            ? valuesToRender.opacityExit
                            : 0;
            }
            /**
             * Apply scale correction
             */
            for (const key in scaleCorrectors) {
                if (valuesToRender[key] === undefined)
                    continue;
                const { correct, applyTo } = scaleCorrectors[key];
                /**
                 * Only apply scale correction to the value if we have an
                 * active projection transform. Otherwise these values become
                 * vulnerable to distortion if the element changes size without
                 * a corresponding layout animation.
                 */
                const corrected = styles.transform === "none"
                    ? valuesToRender[key]
                    : correct(valuesToRender[key], lead);
                if (applyTo) {
                    const num = applyTo.length;
                    for (let i = 0; i < num; i++) {
                        styles[applyTo[i]] = corrected;
                    }
                }
                else {
                    styles[key] = corrected;
                }
            }
            /**
             * Disable pointer events on follow components. This is to ensure
             * that if a follow component covers a lead component it doesn't block
             * pointer events on the lead.
             */
            if (this.options.layoutId) {
                styles.pointerEvents =
                    lead === this
                        ? resolveMotionValue(styleProp.pointerEvents) || ""
                        : "none";
            }
            return styles;
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = undefined;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((node) => { var _a; return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop(); });
            this.root.nodes.forEach(clearMeasurements);
            this.root.sharedNodes.clear();
        }
    };
}
function updateLayout(node) {
    node.updateLayout();
}
function notifyLayoutUpdate(node) {
    var _a;
    const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
    if (node.isLead() &&
        node.layout &&
        snapshot &&
        node.hasListeners("didUpdate")) {
        const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
        const { animationType } = node.options;
        const isShared = snapshot.source !== node.layout.source;
        // TODO Maybe we want to also resize the layout snapshot so we don't trigger
        // animations for instance if layout="size" and an element has only changed position
        if (animationType === "size") {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(axisSnapshot);
                axisSnapshot.min = layout[axis].min;
                axisSnapshot.max = axisSnapshot.min + length;
            });
        }
        else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
            eachAxis((axis) => {
                const axisSnapshot = isShared
                    ? snapshot.measuredBox[axis]
                    : snapshot.layoutBox[axis];
                const length = calcLength(layout[axis]);
                axisSnapshot.max = axisSnapshot.min + length;
                /**
                 * Ensure relative target gets resized and rerendererd
                 */
                if (node.relativeTarget && !node.currentAnimation) {
                    node.isProjectionDirty = true;
                    node.relativeTarget[axis].max =
                        node.relativeTarget[axis].min + length;
                }
            });
        }
        const layoutDelta = createDelta();
        calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
        const visualDelta = createDelta();
        if (isShared) {
            calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
        }
        else {
            calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
        }
        const hasLayoutChanged = !isDeltaZero(layoutDelta);
        let hasRelativeTargetChanged = false;
        if (!node.resumeFrom) {
            const relativeParent = node.getClosestProjectingParent();
            /**
             * If the relativeParent is itself resuming from a different element then
             * the relative snapshot is not relavent
             */
            if (relativeParent && !relativeParent.resumeFrom) {
                const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
                if (parentSnapshot && parentLayout) {
                    const relativeSnapshot = createBox();
                    calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
                    const relativeLayout = createBox();
                    calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
                    if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
                        hasRelativeTargetChanged = true;
                    }
                    if (relativeParent.options.layoutRoot) {
                        node.relativeTarget = relativeLayout;
                        node.relativeTargetOrigin = relativeSnapshot;
                        node.relativeParent = relativeParent;
                    }
                }
            }
        }
        node.notifyListeners("didUpdate", {
            layout,
            snapshot,
            delta: visualDelta,
            layoutDelta,
            hasLayoutChanged,
            hasRelativeTargetChanged,
        });
    }
    else if (node.isLead()) {
        const { onExitComplete } = node.options;
        onExitComplete && onExitComplete();
    }
    /**
     * Clearing transition
     * TODO: Investigate why this transition is being passed in as {type: false } from Framer
     * and why we need it at all
     */
    node.options.transition = undefined;
}
function propagateDirtyNodes(node) {
    /**
     * Increase debug counter for nodes encountered this frame
     */
    projectionFrameData.totalNodes++;
    if (!node.parent)
        return;
    /**
     * If this node isn't projecting, propagate isProjectionDirty. It will have
     * no performance impact but it will allow the next child that *is* projecting
     * but *isn't* dirty to just check its parent to see if *any* ancestor needs
     * correcting.
     */
    if (!node.isProjecting()) {
        node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    /**
     * Propagate isSharedProjectionDirty and isTransformDirty
     * throughout the whole tree. A future revision can take another look at
     * this but for safety we still recalcualte shared nodes.
     */
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty ||
        node.parent.isProjectionDirty ||
        node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
    node.isProjectionDirty =
        node.isSharedProjectionDirty =
            node.isTransformDirty =
                false;
}
function clearSnapshot(node) {
    node.clearSnapshot();
}
function clearMeasurements(node) {
    node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
        visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
}
function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = undefined;
    node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
    node.resolveTargetDelta();
}
function calcProjection(node) {
    node.calcProjection();
}
function resetRotation(node) {
    node.resetRotation();
}
function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
    output.translate = mix(delta.translate, 0, p);
    output.scale = mix(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
    output.min = mix(from.min, to.min, p);
    output.max = mix(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
    return (node.animationValues && node.animationValues.opacityExit !== undefined);
}
const defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
const userAgentContains = (string) => typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes(string);
/**
 * Measured bounding boxes must be rounded in Safari and
 * left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
 * can appear to jump.
 */
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/")
    ? Math.round
    : noop;
function roundAxis(axis) {
    // Round to the nearest .5 pixels to support subpixel layouts
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
}
function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
    return (animationType === "position" ||
        (animationType === "preserve-aspect" &&
            !isNear(aspectRatio(snapshot), aspectRatio(layout), 0.2)));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs



const DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => true,
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs



const rootProjectionNode = {
    current: undefined,
};
const HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
        x: instance.scrollLeft,
        y: instance.scrollTop,
    }),
    defaultParent: () => {
        if (!rootProjectionNode.current) {
            const documentNode = new DocumentProjectionNode({});
            documentNode.mount(window);
            documentNode.setOptions({ layoutScroll: true });
            rootProjectionNode.current = documentNode;
        }
        return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
        instance.style.transform = value !== undefined ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed"),
});



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/drag.mjs





const drag = {
    pan: {
        Feature: PanGesture,
    },
    drag: {
        Feature: DragGesture,
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs




/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token, fallback] = match;
    return [token, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    else if (isCSSVariableToken(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, { ...target }, transitionEnd) {
    const element = visualElement.current;
    if (!(element instanceof Element))
        return { target, transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = { ...transitionEnd };
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.values.forEach((value) => {
        const current = value.get();
        if (!isCSSVariableToken(current))
            return;
        const resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (const key in target) {
        const current = target[key];
        if (!isCSSVariableToken(current))
            continue;
        const resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        if (!transitionEnd)
            transitionEnd = {};
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd[key] === undefined) {
            transitionEnd[key] = current;
        }
    }
    return { target, transitionEnd };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs








const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
]);
const isPositionalKey = (key) => positionalKeys.has(key);
const hasPositionalKey = (target) => {
    return Object.keys(target).some(isPositionalKey);
};
const isNumOrPxType = (v) => v === number || v === px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
const convertChangedValueTypes = (target, visualElement, changedKeys) => {
    const originBbox = visualElement.measureViewportBox();
    const element = visualElement.current;
    const elementComputedStyle = getComputedStyle(element);
    const { display } = elementComputedStyle;
    const origin = {};
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValue("display", target.display || "block");
    }
    /**
     * Record origins before we render and update styles
     */
    changedKeys.forEach((key) => {
        origin[key] = positionalValues[key](originBbox, elementComputedStyle);
    });
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    const targetBbox = visualElement.measureViewportBox();
    changedKeys.forEach((key) => {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        const value = visualElement.getValue(key);
        value && value.jump(origin[key]);
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
const checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
    target = { ...target };
    transitionEnd = { ...transitionEnd };
    const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    let removedTransformValues = [];
    let hasAttemptedToRemoveTransformValues = false;
    const changedValueTypeKeys = [];
    targetPositionalKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        let from = origin[key];
        let fromType = findDimensionValueType(from);
        const to = target[key];
        let toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            const numKeyframes = to.length;
            const fromIndex = to[0] === null ? 1 : 0;
            from = to[fromIndex];
            fromType = findDimensionValueType(from);
            for (let i = fromIndex; i < numKeyframes; i++) {
                /**
                 * Don't allow wildcard keyframes to be used to detect
                 * a difference in value types.
                 */
                if (to[i] === null)
                    break;
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    invariant(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                const current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === px) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) &&
                (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues =
                        removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                value.jump(to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        const scrollY = changedValueTypeKeys.indexOf("height") >= 0
            ? window.pageYOffset
            : null;
        const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(([key, value]) => {
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        // Restore scroll position
        if (is_browser_isBrowser && scrollY !== null) {
            window.scrollTo({ top: scrollY });
        }
        return { target: convertedTarget, transitionEnd };
    }
    else {
        return { target, transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target, transitionEnd };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs



/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
const parseDomVariant = (visualElement, target, origin, transitionEnd) => {
    const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs



function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!is_browser_isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.current = false;
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/utils/motion-values.mjs





function updateMotionValuesFromProps(element, next, prev) {
    const { willChange } = next;
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if (isMotionValue(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            if (isWillChangeMotionValue(willChange)) {
                willChange.add(key);
            }
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (false) {}
        }
        else if (isMotionValue(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, motionValue(nextValue, { owner: element }));
            if (isWillChangeMotionValue(willChange)) {
                willChange.remove(key);
            }
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                // TODO: Only update values that aren't being animated or even looked at
                !existingValue.hasAnimated && existingValue.set(nextValue);
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, motionValue(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/store.mjs
const visualElementStore = new WeakMap();



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/VisualElement.mjs




















const featureNames = Object.keys(featureDefinitions);
const numFeatures = featureNames.length;
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
const numVariantProps = variantProps.length;
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    constructor({ parent, props, presenceContext, reducedMotionConfig, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.scheduleRender = () => frame_frame.render(this.render, false, true);
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.isControllingVariants = isControllingVariants(props);
        this.isVariantNode = isVariantNode(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't neccessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {});
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && isMotionValue(value)) {
                value.set(latestValues[key], false);
                if (isWillChangeMotionValue(willChange)) {
                    willChange.add(key);
                }
            }
        }
    }
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps) {
        return {};
    }
    mount(instance) {
        this.current = instance;
        visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!hasReducedMotionListener.current) {
            initPrefersReducedMotion();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : prefersReducedMotion.current;
        if (false) {}
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        visualElementStore.delete(this.current);
        this.projection && this.projection.unmount();
        cancelFrame(this.notifyUpdate);
        cancelFrame(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            this.features[key].unmount();
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        const valueIsTransform = transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate &&
                frame_frame.update(this.notifyUpdate, false, true);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    loadFeatures({ children, ...renderedProps }, isStrict, preloadedFeatures, initialLayoutGroupConfig) {
        let ProjectionNodeConstructor;
        let MeasureLayout;
        /**
         * If we're in development mode, check to make sure we're not rendering a motion component
         * as a child of LazyMotion, as this will break the file-size benefits of using it.
         */
        if (false) {}
        for (let i = 0; i < numFeatures; i++) {
            const name = featureNames[i];
            const { isEnabled, Feature: FeatureConstructor, ProjectionNode, MeasureLayout: MeasureLayoutComponent, } = featureDefinitions[name];
            if (ProjectionNode)
                ProjectionNodeConstructor = ProjectionNode;
            if (isEnabled(renderedProps)) {
                if (!this.features[name] && FeatureConstructor) {
                    this.features[name] = new FeatureConstructor(this);
                }
                if (MeasureLayoutComponent) {
                    MeasureLayout = MeasureLayoutComponent;
                }
            }
        }
        if (!this.projection && ProjectionNodeConstructor) {
            this.projection = new ProjectionNodeConstructor(this.latestValues, this.parent && this.parent.projection);
            const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, } = renderedProps;
            this.projection.setOptions({
                layoutId,
                layout,
                alwaysMeasureLayout: Boolean(drag) ||
                    (dragConstraints && isRefObject(dragConstraints)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                /**
                 * TODO: Update options in an effect. This could be tricky as it'll be too late
                 * to update by the time layout animations run.
                 * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
                 * ensuring it gets called if there's no potential layout animations.
                 *
                 */
                animationType: typeof layout === "string" ? layout : "both",
                initialPromotionConfig: initialLayoutGroupConfig,
                layoutScroll,
                layoutRoot,
            });
        }
        return MeasureLayout;
    }
    updateFeatures() {
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature.isMounted) {
                feature.update();
            }
            else {
                feature.mount();
                feature.isMounted = true;
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Make a target animatable by Popmotion. For instance, if we're
     * trying to animate width from 100px to 100vw we need to measure 100vw
     * in pixels to determine what we really need to animate to. This is also
     * pluggable to support Framer's custom value types like Color,
     * and CSS variables.
     */
    makeTargetAnimatable(target, canMutate = true) {
        return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listener = props["on" + key];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    getVariantContext(startAtParent = false) {
        if (startAtParent) {
            return this.parent ? this.parent.getVariantContext() : undefined;
        }
        if (!this.isControllingVariants) {
            const context = this.parent
                ? this.parent.getVariantContext() || {}
                : {};
            if (this.props.initial !== undefined) {
                context.initial = this.props.initial;
            }
            return context;
        }
        const context = {};
        for (let i = 0; i < numVariantProps; i++) {
            const name = variantProps[i];
            const prop = this.props[name];
            if (isVariantLabel(prop) || prop === false) {
                context[name] = prop;
            }
        }
        return context;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        if (value !== this.values.get(key)) {
            this.removeValue(key);
            this.bindToMotionValue(key, value);
        }
        this.values.set(key, value);
        this.latestValues[key] = value.get();
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = motionValue(defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key) {
        var _a;
        return this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        const valueFromInitial = typeof initial === "string" || typeof initial === "object"
            ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key]
            : undefined;
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !isMotionValue(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs




class DOMVisualElement extends VisualElement {
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    makeTargetAnimatableFromInstance({ transition, transitionEnd, ...target }, { transformValues }, isMounted) {
        let origin = getOrigin(target, transition || {}, this);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (isMounted) {
            checkTargetForNewValues(this, target, origin);
            const parsed = parseDomVariant(this, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return {
            transition,
            transitionEnd,
            ...target,
        };
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs










function HTMLVisualElement_getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends DOMVisualElement {
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = HTMLVisualElement_getComputedStyle(instance);
            const value = (isCSSVariableName(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, options, props) {
        buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrapeMotionValuesFromProps(props, prevProps);
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if (isMotionValue(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current)
                    this.current.textContent = `${latest}`;
            });
        }
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderHTML(instance, renderState, styleProp, projection);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs











class SVGVisualElement extends DOMVisualElement {
    constructor() {
        super(...arguments);
        this.isSVGTag = false;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (transformProps.has(key)) {
            const defaultType = getDefaultValueType(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return instance.getAttribute(key);
    }
    measureInstanceViewportBox() {
        return createBox();
    }
    scrapeMotionValuesFromProps(props, prevProps) {
        return scrape_motion_values_scrapeMotionValuesFromProps(props, prevProps);
    }
    build(renderState, latestValues, options, props) {
        buildSVGAttrs(renderState, latestValues, options, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = isSVGTag(instance.tagName);
        super.mount(instance);
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs




const create_visual_element_createDomVisualElement = (Component, options) => {
    return isSVGComponent(Component)
        ? new SVGVisualElement(options, { enableHardwareAcceleration: false })
        : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/motion/features/layout.mjs



const layout = {
    layout: {
        ProjectionNode: HTMLProjectionNode,
        MeasureLayout: MeasureLayout,
    },
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs









const preloadedFeatures = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout,
};
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
const motion = /*@__PURE__*/ createMotionProxy((Component, config) => create_config_createDomMotionConfig(Component, config, preloadedFeatures, create_visual_element_createDomVisualElement));
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return createMotionComponent(createDomMotionConfig(key, { forwardMotionProps: false }, preloadedFeatures, createDomVisualElement));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs



function useIsMounted() {
    const isMounted = (0,react_experimental_.useRef)(false);
    useIsomorphicLayoutEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-force-update.mjs




function useForceUpdate() {
    const isMounted = useIsMounted();
    const [forcedRenderCount, setForcedRenderCount] = (0,react_experimental_.useState)(0);
    const forceRender = (0,react_experimental_.useCallback)(() => {
        isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
    /**
     * Defer this to the end of the next animation frame in case there are multiple
     * synchronous calls.
     */
    const deferredForceRender = (0,react_experimental_.useCallback)(() => frame_frame.postRender(forceRender), [forceRender]);
    return [deferredForceRender, forcedRenderCount];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs



/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react_experimental_.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent }) {
    const id = (0,react_experimental_.useId)();
    const ref = (0,react_experimental_.useRef)(null);
    const size = (0,react_experimental_.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react_experimental_.useInsertionEffect)(() => {
        const { width, height, top, left } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return (react_experimental_.createElement(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size }, react_experimental_.cloneElement(children, { ref })));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs






const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id = (0,react_experimental_.useId)();
    const context = (0,react_experimental_.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
            presenceChildren.set(childId, true);
            for (const isComplete of presenceChildren.values()) {
                if (!isComplete)
                    return; // can stop searching when any is incomplete
            }
            onExitComplete && onExitComplete();
        },
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    (0,react_experimental_.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react_experimental_.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = react_experimental_.createElement(PopChild, { isPresent: isPresent }, children);
    }
    return (react_experimental_.createElement(PresenceContext_PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs


function useUnmountEffect(callback) {
    return (0,react_experimental_.useEffect)(() => () => callback(), []);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs










const getChildKey = (child) => child.key || "";
function updateChildLookup(children, allChildren) {
    children.forEach((child) => {
        const key = getChildKey(child);
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react_experimental_.Children.forEach(children, (child) => {
        if ((0,react_experimental_.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, exitBeforeEnter, presenceAffectsLayout = true, mode = "sync", }) => {
    invariant(!exitBeforeEnter, "Replace exitBeforeEnter with mode='wait'");
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    const forceRender = (0,react_experimental_.useContext)(LayoutGroupContext).forceRender || useForceUpdate()[0];
    const isMounted = useIsMounted();
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    const filteredChildren = onlyElements(children);
    let childrenToRender = filteredChildren;
    const exitingChildren = (0,react_experimental_.useRef)(new Map()).current;
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    const presentChildren = (0,react_experimental_.useRef)(childrenToRender);
    // A lookup table to quickly reference components by key
    const allChildren = (0,react_experimental_.useRef)(new Map()).current;
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    const isInitialRender = (0,react_experimental_.useRef)(true);
    useIsomorphicLayoutEffect(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
    });
    useUnmountEffect(() => {
        isInitialRender.current = true;
        allChildren.clear();
        exitingChildren.clear();
    });
    if (isInitialRender.current) {
        return (react_experimental_.createElement(react_experimental_.Fragment, null, childrenToRender.map((child) => (react_experimental_.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child)))));
    }
    // If this is a subsequent render, deal with entering and exiting children
    childrenToRender = [...childrenToRender];
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    const presentKeys = presentChildren.current.map(getChildKey);
    const targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    const numPresent = presentKeys.length;
    for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1 && !exitingChildren.has(key)) {
            exitingChildren.set(key, undefined);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (mode === "wait" && exitingChildren.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exitingChildren.forEach((component, key) => {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        const child = allChildren.get(key);
        if (!child)
            return;
        const insertionIndex = presentKeys.indexOf(key);
        let exitingComponent = component;
        if (!exitingComponent) {
            const onExit = () => {
                allChildren.delete(key);
                exitingChildren.delete(key);
                // Remove this child from the present children
                const removeIndex = presentChildren.current.findIndex((presentChild) => presentChild.key === key);
                presentChildren.current.splice(removeIndex, 1);
                // Defer re-rendering until all exiting children have indeed left
                if (!exitingChildren.size) {
                    presentChildren.current = filteredChildren;
                    if (isMounted.current === false)
                        return;
                    forceRender();
                    onExitComplete && onExitComplete();
                }
            };
            exitingComponent = (react_experimental_.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
            exitingChildren.set(key, exitingComponent);
        }
        childrenToRender.splice(insertionIndex, 0, exitingComponent);
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exitingChildren.has(key) ? (child) : (react_experimental_.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout, mode: mode }, child));
    });
    if (false) {}
    return (react_experimental_.createElement(react_experimental_.Fragment, null, exitingChildren.size
        ? childrenToRender
        : childrenToRender.map((child) => (0,react_experimental_.cloneElement)(child))));
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/framer-transitions/dist/chunk-E4GWTEX4.mjs
"use client";

// src/transition-utils.ts
var TRANSITION_EASINGS = {
  ease: [0.36, 0.66, 0.4, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.155, 1.105, 0.295, 1.12],
  springOut: [0.57, -0.15, 0.62, 0.07],
  softSpring: [0.16, 1.11, 0.3, 1.02]
};
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var TRANSITION_VARIANTS = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      transform: "scale(0.6)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.2
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.6)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.3)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.4
      }
    }
  },
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  scaleFadeIn: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: TRANSITION_EASINGS.easeIn
      }
    },
    exit: {
      transform: "scale(0.95)",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: TRANSITION_EASINGS.easeOut
      }
    }
  },
  scaleInOut: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      transform: "scale(1.03)",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        },
        opacity: {
          easings: "ease",
          duration: 0.4
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        easings: "ease",
        duration: 0.3
      }
    }
  }
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-RFUEKIFS.mjs
// src/console.ts
var warningStack = {};
function warn(message, component, ...args) {
  var _a;
  const tag = component ? ` [${component}]` : " ";
  const log = `[Next UI]${tag}: ${message}`;
  if (typeof console === "undefined")
    return;
  if (warningStack[log])
    return;
  warningStack[log] = true;
  if (((_a = process == null ? void 0 : process.env) == null ? void 0 : _a.NODE_ENV) !== "production") {
    return console.warn(log, args);
  }
}



// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/tooltip/dist/chunk-O2GMSXKT.mjs
"use client";


// src/tooltip.tsx









var Tooltip = forwardRef((props, ref) => {
  const {
    Component,
    children,
    content,
    isOpen,
    portalContainer,
    placement,
    disableAnimation,
    motionProps,
    showArrow,
    getTriggerProps,
    getTooltipProps,
    getArrowProps
  } = useTooltip({
    ...props,
    ref
  });
  let trigger;
  try {
    const child = react_experimental_.Children.only(children);
    trigger = (0,react_experimental_.cloneElement)(child, getTriggerProps(child.props, child.ref));
  } catch (error) {
    trigger = /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", {});
    warn("Tooltip must have only one child node. Please, check your code.");
  }
  const arrowContent = (0,react_experimental_.useMemo)(() => {
    if (!showArrow)
      return null;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getArrowProps() });
  }, [showArrow, getArrowProps]);
  const animatedContent = (0,react_experimental_.useMemo)(() => {
    const { className, ...otherTooltipProps } = getTooltipProps();
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...otherTooltipProps, children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      motion.div,
      {
        animate: "enter",
        exit: "exit",
        initial: "exit",
        style: {
          ...getTransformOrigins(placement)
        },
        variants: TRANSITION_VARIANTS.scaleSpring,
        ...motionProps,
        children: /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { className, children: [
          content,
          arrowContent
        ] })
      }
    ) });
  }, [getTooltipProps, placement, motionProps, Component, content, arrowContent]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, { children: [
    trigger,
    disableAnimation && isOpen ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(overlays_dist_import/* OverlayContainer */.Xj, { portalContainer, children: /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ...getTooltipProps(), children: [
      content,
      arrowContent
    ] }) }) : /* @__PURE__ */ (0,jsx_runtime_.jsx)(AnimatePresence, { children: isOpen ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(overlays_dist_import/* OverlayContainer */.Xj, { portalContainer, children: animatedContent }) : null })
  ] });
});
Tooltip.displayName = "NextUI.Tooltip";
var tooltip_default = Tooltip;




/***/ }),

/***/ 74997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cW: () => (/* binding */ $9bf71ea28793e738$export$1258395f99bf9cbf),
/* harmony export */   kc: () => (/* binding */ $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)
/* harmony export */ });
/* unused harmony exports FocusScope, useFocusManager, getFocusableTreeWalker, createFocusManager, FocusRing, FocusableProvider, useFocusRing, focusSafely, useHasTabbableChild */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5243);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5459);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80391);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ((0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .getInteractionModality */ .Jz)() === "virtual") {
        let lastFocusedElement = document.activeElement;
        (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .runAfterTransition */ .QB)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .focusWithoutScrolling */ .Ao)(element);
        });
    } else (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .focusWithoutScrolling */ .Ao)(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display , visibility: visibility  } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
        const { getComputedStyle: getComputedStyle  } = element.ownerDocument.defaultView;
        let { display: computedDisplay , visibility: computedVisibility  } = getComputedStyle(element);
        isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $6nfFC$react).createContext(null)));
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = (0, $6nfFC$useRef)();
    let endRef = (0, $6nfFC$useRef)();
    let scopeRef = (0, $6nfFC$useRef)([]);
    let { parentNode: parentNode  } = (0, $6nfFC$useContext)($9bf71ea28793e738$var$FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (0, $6nfFC$useMemo)(()=>new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        }), [
        scopeRef
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
        if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
            let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
    }, [
        node,
        parentNode
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        let node = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        node.contain = contain;
    }, [
        contain
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children
    ]);
    $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    // this layout effect needs to run last so that focusScopeTree cleanup happens at the last moment possible
    (0, $6nfFC$useEffect)(()=>{
        if (scopeRef) {
            let activeElement = document.activeElement;
            let scope = null;
            // In strict mode, active scope is incorrectly updated since cleanup will run even though scope hasn't unmounted.
            // To fix this, we need to update the actual activeScope here
            if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
                // Since useLayoutEffect runs for children first, we need to traverse the focusScope tree and find the bottom most scope that
                // contains the active element and set that as the activeScope
                for (let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())if ($9bf71ea28793e738$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
                if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
            }
            return ()=>{
                // Scope may have been re-parented.
                let parentScope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).parent.scopeRef;
                // Restore the active scope on unmount if this scope or a descendant scope is active.
                // Parent effect cleanups run before children, so we need to check if the
                // parent scope actually still exists before restoring the active scope to it.
                if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
                $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
            };
        }
    }, [
        scopeRef
    ]);
    let focusManager = (0, $6nfFC$useMemo)(()=>$9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
    let value = (0, $6nfFC$useMemo)(()=>({
            focusManager: focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ (0, $6nfFC$react).createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $6nfFC$react).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ (0, $6nfFC$react).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var _useContext;
    return (_useContext = (0, $6nfFC$useContext)($9bf71ea28793e738$var$FocusContext)) === null || _useContext === void 0 ? void 0 : _useContext.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap , accept: accept  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap , accept: accept  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable , accept: accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable , accept: accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]"
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (0, $6nfFC$useRef)();
    let raf = (0, $6nfFC$useRef)(null);
    (0, $6nfFC$useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = null;
            }
            return;
        }
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: true
            }, scope);
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(e.target, scopeRef.current)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    if (document.body.contains(e.target)) {
                        focusedNode.current = e.target;
                        focusedNode.current.focus();
                    } else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
                }
            });
        };
        document.addEventListener("keydown", onKeyDown, false);
        document.addEventListener("focusin", onFocus, false);
        scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        scope.forEach((element)=>element.addEventListener("focusout", onBlur, false));
        return ()=>{
            document.removeEventListener("keydown", onKeyDown, false);
            document.removeEventListener("focusin", onFocus, false);
            scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
            scope.forEach((element)=>element.removeEventListener("focusout", onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    // eslint-disable-next-line arrow-body-style
    (0, $6nfFC$useLayoutEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s  } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))){
        if ($9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    var _focusScopeTree_getTreeNode;
    let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, $6a99195332edec8b$export$80f3e147d781571c)(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err) {
    // ignore
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    $9bf71ea28793e738$var$focusElement(nextNode);
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = (0, $6nfFC$react).useRef(autoFocus);
    (0, $6nfFC$useEffect)(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current)) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    (0, $6nfFC$useLayoutEffect)(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        let onFocus = (e)=>{
            let target = e.target;
            if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
            else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
        };
        document.addEventListener("focusin", onFocus, false);
        scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            document.removeEventListener("focusin", onFocus, false);
            scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = (0, $6nfFC$useRef)(typeof document !== "undefined" ? document.activeElement : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    (0, $6nfFC$useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
        };
        document.addEventListener("focusin", onFocus, false);
        scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            document.removeEventListener("focusin", onFocus, false);
            scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    (0, $6nfFC$useLayoutEffect)(()=>{
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = document.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            let nodeToRestore = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) {
                nodeToRestore = null;
                $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore = null;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener("keydown", onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener("keydown", onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0, $6nfFC$useLayoutEffect)(()=>{
        if (!restoreFocus) return;
        $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore = nodeToRestoreRef.current;
        return ()=>{
            let nodeToRestore = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            if (restoreFocus && nodeToRestore && // eslint-disable-next-line react-hooks/exhaustive-deps
            ($9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current) || document.activeElement === document.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (document.activeElement === document.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && document.body.contains(treeNode.nodeToRestore)) {
                                $9bf71ea28793e738$var$focusElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
                                $9bf71ea28793e738$var$focusFirstInScope(treeNode.scopeRef.current, true);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && (0, $645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return;
            let { from: from , tabbable: tabbable = defaultOptions.tabbable , wrap: wrap = defaultOptions.wrap , accept: accept = defaultOptions.accept  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { from: from , tabbable: tabbable = defaultOptions.tabbable , wrap: wrap = defaultOptions.wrap , accept: accept = defaultOptions.accept  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $9bf71ea28793e738$var$last(walker);
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { tabbable: tabbable = defaultOptions.tabbable , accept: accept = defaultOptions.accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { tabbable: tabbable = defaultOptions.tabbable , accept: accept = defaultOptions.accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        parentNode.removeChild(node);
        if (children.size > 0) children.forEach((child)=>parentNode.addChild(child));
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        let newTree = new $9bf71ea28793e738$var$Tree();
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, node.parent.scopeRef, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = (0, $6nfFC$useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, $6nfFC$isFocusVisible)()
    });
    let [isFocused, setFocused] = (0, $6nfFC$useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, $6nfFC$useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, $6nfFC$useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, $6nfFC$useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, $6nfFC$useFocusVisibleListener)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = (0, $6nfFC$useFocus)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = (0, $6nfFC$useFocusWithin)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = (0, $f7dceffc5ad7768b$export$4e328f61c538687f)(props);
    let child = (0, $6nfFC$react).Children.only(children);
    return /*#__PURE__*/ (0, $6nfFC$react).cloneElement(child, (0, $6nfFC$mergeProps)(child.props, {
        ...focusProps,
        className: (0, $6nfFC$clsx)({
            [focusClass || ""]: isFocused,
            [focusRingClass || ""]: isFocusVisible
        })
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .useSyncRef */ .lE)(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return /*#__PURE__*/ (0, $6nfFC$react).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children);
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $6nfFC$react).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider)));
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocus */ .KK)(props);
    let { keyboardProps: keyboardProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useKeyboard */ .v5)(props);
    let interactions = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .dG)(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, $6a99195332edec8b$export$80f3e147d781571c)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__/* .mergeProps */ .dG)({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
    let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, $6nfFC$useState)(false);
    (0, $6nfFC$useLayoutEffect)(()=>{
        if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    "tabIndex",
                    "disabled"
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 57572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bU: () => (/* binding */ $18f2051aff69b9bf$export$43bb16f9c6d9e3f7),
/* harmony export */   bd: () => (/* binding */ $18f2051aff69b9bf$export$a54013f0d02a8f82)
/* harmony export */ });
/* unused harmony exports useLocalizedStringFormatter, useListFormatter, useDateFormatter, useNumberFormatter, useCollator, useFilter */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90466);







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr"
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split("-")[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        // @ts-ignore
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch (_err) {
        locale = "en-US";
    }
    return {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__/* .useIsSSR */ .Av)();
    let [defaultLocale, setDefaultLocale] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: "en-US",
        direction: "ltr"
    };
    return defaultLocale;
}



const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let value = locale ? {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
    } : defaultLocale;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children);
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}


var $2aa2084a6c2b6b4f$exports = {};
"use strict";


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $iFADg$LocalizedStringDictionary)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let dictionary = (0, $iFADg$useMemo)(()=>$fca6afa0e843324b$var$getCachedDictionary(strings), [
        strings
    ]);
    return (0, $iFADg$useMemo)(()=>new (0, $iFADg$LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $33bf17300c498528$export$a2f47a3d2973640(options = {}) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    // @ts-ignore
    return (0, $iFADg$useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, $iFADg$useDeepMemo)(options, $896ba0a80a8f4d36$var$isEqual);
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, $iFADg$useMemo)(()=>new (0, $iFADg$DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, $iFADg$useMemo)(()=>new (0, $iFADg$NumberFormatter)(locale, options), [
        locale,
        options
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : "");
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = (0, $325a3faab7a68acd$export$a16aca283550c30d)({
        usage: "search",
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, $iFADg$useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, $iFADg$useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, $iFADg$useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, $iFADg$useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}





//# sourceMappingURL=real-module.js.map


/***/ }),

/***/ 5459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $507fabe10e71c6fb$export$b9b3dfddab17db27),
/* harmony export */   Fc: () => (/* binding */ $e0b6e0b68ec7f50f$export$872b660ac5a1ff98),
/* harmony export */   Jz: () => (/* binding */ $507fabe10e71c6fb$export$630ff653c5ada6a9),
/* harmony export */   KK: () => (/* binding */ $a1ea59d68270f0dd$export$f8168d8dd8fd66e6),
/* harmony export */   L_: () => (/* binding */ $9ab94262bd0047c7$export$420e68273165f4ec),
/* harmony export */   XI: () => (/* binding */ $6179b936705e76d3$export$ae780daf29e6d456),
/* harmony export */   r7: () => (/* binding */ $f6c31cce2adf654f$export$45712eceda6fad21),
/* harmony export */   v5: () => (/* binding */ $46d819fcbaf35654$export$8f71654801c2f7cd)
/* harmony export */ });
/* unused harmony exports Pressable, PressResponder, setInteractionModality, useInteractionModality, useFocusVisible, useFocusVisibleListener, useMove, useScrollWheel, useLongPress */
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5243);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68233);
/* harmony import */ var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21455);
/* harmony import */ var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56013);







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = "default";
let $14c0b72509d70225$var$savedUserSelect = "";
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isIOS */ .gn)()) {
        if ($14c0b72509d70225$var$state === "default") {
            $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
            document.documentElement.style.webkitUserSelect = "none";
        }
        $14c0b72509d70225$var$state = "disabled";
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = "none";
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isIOS */ .gn)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== "disabled") return;
        $14c0b72509d70225$var$state = "restoring";
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .runAfterTransition */ .QB)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === "restoring") {
                    if (document.documentElement.style.webkitUserSelect === "none") document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
                    $14c0b72509d70225$var$savedUserSelect = "";
                    $14c0b72509d70225$var$state = "default";
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
            if (target.getAttribute("style") === "") target.removeAttribute("style");
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";



function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    if (context) {
        let { register: register , ...contextProps } = context;
        props = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)(contextProps, props);
        register();
    }
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSyncRef */ .lE)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (0, _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (0, _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_3__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent){
        (0, _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_4__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (0, _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
    }
}
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress , onPressChange: onPressChange , onPressStart: onPressStart , onPressEnd: onPressEnd , onPressUp: onPressUp , isDisabled: isDisabled , isPressed: isPressedProp , preventFocusOnPress: preventFocusOnPress , shouldCancelOnPointerExit: shouldCancelOnPointerExit , allowTextSelectionOnPress: allowTextSelectionOnPress , // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _ , ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener , removeAllGlobalListeners: removeAllGlobalListeners  } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalListeners */ .xi)();
    let triggerPressStart = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return;
        let shouldStopPropagation = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return;
        state.ignoreClickAfterPress = true;
        state.didFirePressStart = false;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        return shouldStopPropagation;
    });
    let triggerPressUp = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((originalEvent, pointerType)=>{
        if (isDisabled) return;
        if (onPressUp) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
            onPressUp(event);
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        let state = ref.current;
        if (state.isPressed) {
            if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
    });
    let cancelOnPointerExit = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        shouldStopPropagation = triggerPressStart(e, "keyboard");
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred.
                        addGlobalListener(document, "keyup", onKeyUp, false);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                } else if (e.key === "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(e.currentTarget)) // If the target is a link, we won't have handled this above because we want the default
                // browser behavior to open the link when pressing Enter. But we still need to prevent
                // default so that elements above do not also handle it (e.g. table row).
                e.stopPropagation();
            },
            onKeyUp (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && !e.repeat && e.currentTarget.contains(e.target)) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard");
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualClick */ .Zj)(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                        let stopPressStart = triggerPressStart(e, "virtual");
                        let stopPressUp = triggerPressUp(e, "virtual");
                        let stopPressEnd = triggerPressEnd(e, "virtual");
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                state.isPressed = false;
                let target = e.target;
                let shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
                removeAllGlobalListeners();
                if (shouldStopPropagation) e.stopPropagation();
                // If the target is a link, trigger the click method to open the URL,
                // but defer triggering pressEnd until onClick event handler.
                if (state.target instanceof HTMLElement && state.target.contains(target) && ($f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link")) state.target.click();
            }
        };
        if (typeof PointerEvent !== "undefined") {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualPointerEvent */ .cr)(e.nativeEvent)) {
                    state.pointerType = "virtual";
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    addGlobalListener(document, "pointermove", onPointerMove, false);
                    addGlobalListener(document, "pointerup", onPointerUp, false);
                    addGlobalListener(document, "pointercancel", onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualClick */ .Zj)(e.nativeEvent) ? "virtual" : "mouse";
                if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener(document, "mouseup", onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType);
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = "touch";
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener(window, "scroll", onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    triggerPressUp(e, state.pointerType);
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget) shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (!allowTextSelectionOnPress) // eslint-disable-next-line react-hooks/exhaustive-deps
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(ref.current.target);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key , code: code  } = event;
    const element = currentTarget;
    const role = element.getAttribute("role");
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof HTMLTextAreaElement || element.isContentEditable) && // A link with a valid href should be handled natively,
    // unless it also has role='button' and was triggered using Space.
    (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === "button" && key !== "Enter") && // An element with role='link' should only trigger with Enter key
    !(role === "link" && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches  } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = point.width / 2 || point.radiusX || 0;
    let offsetY = point.height / 2 || point.radiusY || 0;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is a draggable element.
    return !(target instanceof HTMLElement) || !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
    return true;
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}



const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $bx7SL$react).forwardRef(({ children: children , ...props }, ref)=>{
    let newRef = (0, $bx7SL$useRef)();
    ref = ref !== null && ref !== void 0 ? ref : newRef;
    let { pressProps: pressProps  } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        ...props,
        ref: ref
    });
    let child = (0, $bx7SL$react).Children.only(children);
    return /*#__PURE__*/ (0, $bx7SL$react).cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...(0, $bx7SL$mergeProps)(child.props, pressProps)
    });
})));


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $bx7SL$react).forwardRef(({ children: children , ...props }, ref)=>{
    let isRegistered = (0, $bx7SL$useRef)(false);
    let prevContext = (0, $bx7SL$useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    let context = (0, $bx7SL$mergeProps)(prevContext || {}, {
        ...props,
        ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, $bx7SL$useSyncRef)(prevContext, ref);
    (0, $bx7SL$useEffect)(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, $bx7SL$react).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
})));


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener("focusout", onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    "disabled"
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}


function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled , onFocus: onFocusProp , onBlur: onBlurProp , onFocusChange: onFocusChange  } = props;
    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (e.target === e.currentTarget && document.activeElement === e.target) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .V5)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = "keyboard";
        $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    if (e.type === "mousedown" || e.type === "pointerdown") {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualClick */ .Zj)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = "virtual";
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = "virtual";
        $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
    if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
        document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    else document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, $bx7SL$useState)($507fabe10e71c6fb$var$currentModality);
    (0, $bx7SL$useEffect)(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, $bx7SL$useIsSSR)() ? null : modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    return !(isTextInput && modality === "keyboard" && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput , autoFocus: autoFocus  } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, $bx7SL$useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, $bx7SL$useEffect)(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled , onBlurWithin: onBlurWithin , onFocusWithin: onFocusWithin , onFocusWithinChange: onFocusWithinChange  } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocusWithin: false
    });
    let onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (!state.current.isFocusWithin && document.activeElement === e.target) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            onFocus: null,
            onBlur: null
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart , onHoverChange: onHoverChange , onHoverEnd: onHoverEnd , isDisabled: isDisabled  } = props;
    let [isHovered, setHovered] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: "",
        target: null
    }).current;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps , triggerHoverEnd: triggerHoverEnd  } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: "hoverstart",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = "";
            state.target = null;
            if (pointerType === "touch" || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: "hoverend",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== "undefined") {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, "mouse");
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref , onInteractOutside: onInteractOutside , isDisabled: isDisabled , onInteractOutsideStart: onInteractOutsideStart  } = props;
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== "undefined") {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            document.addEventListener("pointerdown", onPointerDown, true);
            document.addEventListener("pointerup", onPointerUp, true);
            return ()=>{
                document.removeEventListener("pointerdown", onPointerDown, true);
                document.removeEventListener("pointerup", onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            document.addEventListener("mousedown", onPointerDown, true);
            document.addEventListener("mouseup", onMouseUp, true);
            document.addEventListener("touchstart", onPointerDown, true);
            document.addEventListener("touchend", onTouchEnd, true);
            return ()=>{
                document.removeEventListener("mousedown", onPointerDown, true);
                document.removeEventListener("mouseup", onMouseUp, true);
                document.removeEventListener("touchstart", onPointerDown, true);
                document.removeEventListener("touchend", onTouchEnd, true);
            };
        }
    }, [
        ref,
        isDisabled,
        onPointerDown,
        triggerInteractOutside
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    if (event.target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (event.target.closest("[data-react-aria-top-layer]")) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
            onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart , onMove: onMove , onMoveEnd: onMoveEnd  } = props;
    let state = (0, $bx7SL$useRef)({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = (0, $bx7SL$useGlobalListeners)();
    let move = (0, $bx7SL$useEffectEvent)((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                type: "movestart",
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove({
            type: "move",
            pointerType: pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let end = (0, $bx7SL$useEffectEvent)((originalEvent, pointerType)=>{
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)();
        if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
            type: "moveend",
            pointerType: pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let moveProps = (0, $bx7SL$useMemo)(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, $14c0b72509d70225$export$16a4697467175487)();
            state.current.didMove = false;
        };
        if (typeof PointerEvent === "undefined") {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    move(e, "mouse", e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end(e, "mouse");
                    removeGlobalListener(window, "mousemove", onMouseMove, false);
                    removeGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, "mousemove", onMouseMove, false);
                    addGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id);
                if (touch >= 0) {
                    let { pageX: pageX , pageY: pageY  } = e.changedTouches[touch];
                    move(e, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id);
                if (touch >= 0) {
                    end(e, "touch");
                    state.current.id = null;
                    removeGlobalListener(window, "touchmove", onTouchMove);
                    removeGlobalListener(window, "touchend", onTouchEnd);
                    removeGlobalListener(window, "touchcancel", onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX , pageY: pageY , identifier: identifier  } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, "touchmove", onTouchMove, false);
                addGlobalListener(window, "touchend", onTouchEnd, false);
                addGlobalListener(window, "touchcancel", onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || "mouse";
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || "mouse";
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, "pointermove", onPointerMove, false);
                    removeGlobalListener(window, "pointerup", onPointerUp, false);
                    removeGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, "pointermove", onPointerMove, false);
                    addGlobalListener(window, "pointerup", onPointerUp, false);
                    addGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, "keyboard", deltaX, deltaY);
            end(e, "keyboard");
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case "Left":
                case "ArrowLeft":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case "Right":
                case "ArrowRight":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case "Up":
                case "ArrowUp":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case "Down":
                case "ArrowDown":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        addGlobalListener,
        removeGlobalListener,
        move,
        end
    ]);
    return {
        moveProps: moveProps
    };
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll , isDisabled: isDisabled  } = props;
    let onScrollHandler = (0, $bx7SL$useCallback)((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    (0, $bx7SL$useEvent)(ref, "wheel", isDisabled ? null : onScrollHandler);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled , onLongPressStart: onLongPressStart , onLongPressEnd: onLongPressEnd , onLongPress: onLongPress , threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD , accessibilityDescription: accessibilityDescription  } = props;
    const timeRef = (0, $bx7SL$useRef)(null);
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = (0, $bx7SL$useGlobalListeners)();
    let { pressProps: pressProps  } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        isDisabled: isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: "longpressstart"
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent("pointercancel", {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e,
                        type: "longpress"
                    });
                    timeRef.current = null;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === "touch") {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e.target, "contextmenu", onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, "pointerup", ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e.target, "contextmenu", onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
                ...e,
                type: "longpressend"
            });
        }
    });
    let descriptionProps = (0, $bx7SL$useDescription)(onLongPress && !isDisabled ? accessibilityDescription : null);
    return {
        longPressProps: (0, $bx7SL$mergeProps)(pressProps, descriptionProps)
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 12493:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ir: () => (/* binding */ $a11501f3d1d39e6c$export$ea8f71083e90600f),
/* harmony export */   N3: () => (/* binding */ $f57aed4a881a3485$export$bf688221f59024e5),
/* harmony export */   Xj: () => (/* binding */ $f57aed4a881a3485$export$b47c3594eab58386),
/* harmony export */   tN: () => (/* binding */ $2a41e45df1593e64$export$d39e1813b3bdd0e1)
/* harmony export */ });
/* unused harmony exports useOverlayTrigger, usePreventScroll, ModalProvider, useModalProvider, useModal, DismissButton, ariaHideOutside, usePopover, useModalOverlay, Overlay, useOverlayFocusContain */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3522);
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5243);
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57572);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74997);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5459);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55752);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90466);









function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $edcf132a9284368a$var$AXIS = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
};
const $edcf132a9284368a$var$CROSS_AXIS = {
    top: "left",
    left: "top"
};
const $edcf132a9284368a$var$AXIS_SIZE = {
    top: "height",
    left: "width"
};
const $edcf132a9284368a$var$TOTAL_SIZE = {
    width: "totalWidth",
    height: "totalHeight"
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
// @ts-ignore
let $edcf132a9284368a$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    if (containerNode.tagName === "BODY") {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        var _visualViewport_width;
        width = (_visualViewport_width = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
        var _visualViewport_height;
        height = (_visualViewport_height = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
    } else {
        ({ width: width , height: height , top: top , left: left  } = $edcf132a9284368a$var$getOffset(containerNode));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    return {
        width: width,
        height: height,
        totalWidth: totalWidth,
        totalHeight: totalHeight,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $edcf132a9284368a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, containerDimensions, padding) {
    let containerScroll = containerDimensions.scroll[axis];
    let containerHeight = containerDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
    let startEdgeOffset = offset - padding - containerScroll;
    let endEdgeOffset = offset + padding - containerScroll + size;
    if (startEdgeOffset < 0) return -startEdgeOffset;
    else if (endEdgeOffset > containerHeight) return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
    else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $edcf132a9284368a$var$parsePlacement(input) {
    if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(" ");
    let axis = $edcf132a9284368a$var$AXIS[placement] || "right";
    let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
    if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = "center";
    let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
    let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
    $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
    let { placement: placement , crossPlacement: crossPlacement , axis: axis , crossAxis: crossAxis , size: size , crossSize: crossSize  } = placementInfo;
    let position = {};
    // button position
    position[crossAxis] = childOffset[crossAxis];
    if (crossPlacement === "center") //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
     /* else {
    the overlay top should match the button top
  } */ 
    // add the crossOffset from props
    position[crossAxis] += crossOffset;
    // overlay top overlapping arrow with button bottom
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom overlapping arrow with button top
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .clamp */ .uZ)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
        position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
    return position.top != null ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top // this is the bottom of the boundary
     - (containerOffsetWithBoundary.top + position.top // this is the top of the overlay
    ) - (margins.top + margins.bottom + padding // save additional space for margin and padding
    )) : Math.max(0, childOffset.top + containerOffsetWithBoundary.top // this is the top of the trigger
     - (boundaryDimensions.top + boundaryDimensions.scroll.top // this is the top of the boundary
    ) - (margins.top + margins.bottom + padding // save additional space for margin and padding
    ));
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement , axis: axis , size: size  } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
    let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
    let { size: size , crossAxis: crossAxis , crossSize: crossSize , placement: placement , crossPlacement: crossPlacement  } = placementInfo;
    let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    let normalizedOffset = offset;
    let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
        let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    let preferredArrowPosition = childOffset[crossAxis] + .5 * childOffset[crossSize] - overlaySize[crossAxis];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    const arrowMaxPosition = overlaySize[crossSize] - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] - overlaySize[crossAxis] + arrowSize / 2;
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - overlaySize[crossAxis] - arrowSize / 2;
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .clamp */ .uZ)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .clamp */ .uZ)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement , targetNode: targetNode , overlayNode: overlayNode , scrollNode: scrollNode , padding: padding , shouldFlip: shouldFlip , boundaryElement: boundaryElement , offset: offset , crossOffset: crossOffset , maxHeight: maxHeight , arrowSize: arrowSize = 0 , arrowBoundaryOffset: arrowBoundaryOffset = 0  } = opts;
    let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
    let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode) : $edcf132a9284368a$var$getPosition(targetNode, container);
    if (!isViewportContainer) {
        let { marginTop: marginTop , marginLeft: marginLeft  } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode);
    let margins = $edcf132a9284368a$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
    let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
    let containerOffsetWithBoundary = boundaryElement.tagName === "BODY" ? $edcf132a9284368a$var$getOffset(container) : $edcf132a9284368a$var$getPosition(container, boundaryElement);
    return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $edcf132a9284368a$var$getOffset(node) {
    let { top: top , left: left , width: width , height: height  } = node.getBoundingClientRect();
    let { scrollTop: scrollTop , scrollLeft: scrollLeft , clientTop: clientTop , clientLeft: clientLeft  } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width: width,
        height: height
    };
}
function $edcf132a9284368a$var$getPosition(node, parent) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === "fixed") {
        let { top: top , left: left , width: width , height: height  } = node.getBoundingClientRect();
        offset = {
            top: top,
            left: left,
            width: width,
            height: height
        };
    } else {
        offset = $edcf132a9284368a$var$getOffset(node);
        let parentOffset = $edcf132a9284368a$var$getOffset(parent);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function $edcf132a9284368a$var$getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function $edcf132a9284368a$var$isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || // @ts-ignore
    "backdropFilter" in style && style.backdropFilter !== "none" || // @ts-ignore
    "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $dd149f63282afbbf$export$f6211563215e3b37 = new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef , isOpen: isOpen , onClose: onClose  } = opts;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener("scroll", onScroll, true);
        return ()=>{
            window.removeEventListener("scroll", onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}




// @ts-ignore
let $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
    let { direction: direction  } = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__/* .useLocale */ .bU)();
    let { arrowSize: arrowSize = 0 , targetRef: targetRef , overlayRef: overlayRef , scrollRef: scrollRef = overlayRef , placement: placement = "bottom" , containerPadding: containerPadding = 12 , shouldFlip: shouldFlip = true , boundaryElement: boundaryElement = typeof document !== "undefined" ? document.body : null , offset: offset = 0 , crossOffset: crossOffset = 0 , shouldUpdatePosition: shouldUpdatePosition = true , isOpen: isOpen = true , onClose: onClose , maxHeight: maxHeight , arrowBoundaryOffset: arrowBoundaryOffset = 0  } = props;
    let [position, setPosition] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        position: {},
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    let updatePosition = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        let position = (0, $edcf132a9284368a$export$b3ceb0cbf1056d98)({
            placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight,
            arrowSize: arrowSize,
            arrowBoundaryOffset: arrowBoundaryOffset
        });
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        Object.keys(position.position).forEach((key)=>overlayRef.current.style[key] = position.position[key] + "px");
        overlayRef.current.style.maxHeight = position.maxHeight != null ? position.maxHeight + "px" : undefined;
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useLayoutEffect */ .bt)(updatePosition, deps);
    // Update position on window resize
    $2a41e45df1593e64$var$useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useResizeObserver */ .yU)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useLayoutEffect */ .bt)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("resize", onResize);
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("scroll", onResize);
        return ()=>{
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("resize", onResize);
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("scroll", onResize);
        };
    }, [
        updatePosition
    ]);
    let close = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    (0, $dd149f63282afbbf$export$18fc8428861184da)({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose && close
    });
    return {
        overlayProps: {
            style: {
                position: "absolute",
                zIndex: 100000,
                ...position.position,
                maxHeight: position.maxHeight
            }
        },
        placement: position.placement,
        arrowProps: {
            "aria-hidden": "true",
            role: "presentation",
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $2a41e45df1593e64$var$useResize(onResize) {
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__/* .useLayoutEffect */ .bt)(()=>{
        window.addEventListener("resize", onResize, false);
        return ()=>{
            window.removeEventListener("resize", onResize, false);
        };
    }, [
        onResize
    ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
    if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
    return position.replace("start", "left").replace("end", "right");
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , isOpen: isOpen , isDismissable: isDismissable = false , isKeyboardDismissDisabled: isKeyboardDismissDisabled = false , shouldCloseOnInteractOutside: shouldCloseOnInteractOutside  } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack.
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === "Escape" && !isKeyboardDismissDisabled) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_5__/* .useInteractOutside */ .Fc)({
        ref: ref,
        onInteractOutside: isDismissable ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_5__/* .useFocusWithin */ .L_)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (e.relatedTarget && (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__/* .isElementInChildOfActiveScope */ .cW)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type  } = props;
    let { isOpen: isOpen  } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, $k7QOs$useEffect)(()=>{
        if (ref && ref.current) (0, $dd149f63282afbbf$export$f6211563215e3b37).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === "menu") ariaHasPopup = true;
    else if (type === "listbox") ariaHasPopup = "listbox";
    let overlayId = (0, $k7QOs$useId)();
    return {
        triggerProps: {
            "aria-haspopup": ariaHasPopup,
            "aria-expanded": isOpen,
            "aria-controls": isOpen ? overlayId : null,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// @ts-ignore
const $49c51c25361d4cd2$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled  } = options;
    (0, $k7QOs$useLayoutEffect)(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if ((0, $k7QOs$isIOS)()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
            else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
        }
        return ()=>{
            $49c51c25361d4cd2$var$preventScrollCount--;
            if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return (0, $k7QOs$chain)($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = (0, $k7QOs$getScrollParent)(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (bottom === 0) return;
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = "translateY(-2000px)";
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = "";
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = "translateY(-2000px)";
            requestAnimationFrame(()=>{
                target.style.transform = "";
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener("resize", ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = (0, $k7QOs$chain)($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"), $49c51c25361d4cd2$var$setStyle(document.body, "marginTop", `-${scrollY}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = (0, $k7QOs$chain)($49c51c25361d4cd2$var$addEvent(document, "touchstart", onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "touchmove", onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "touchend", onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "focus", onFocus, true), $49c51c25361d4cd2$var$addEvent(window, "scroll", onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, $k7QOs$getScrollParent)(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        target = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f57aed4a881a3485$var$Context = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children  } = props;
    let parent = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children);
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            "aria-hidden": context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps  } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$var$OverlayContainerDOM, props));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_7__/* .useIsSSR */ .Av)();
    let { portalContainer: portalContainer = isSSR ? null : document.body , ...rest } = props;
    (0, react__WEBPACK_IMPORTED_MODULE_0__).useEffect(()=>{
        if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_1__).createPortal(contents, portalContainer);
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, $k7QOs$useContext)($f57aed4a881a3485$var$Context);
    if (!context) throw new Error("Modal is not contained within a provider");
    (0, $k7QOs$useEffect)(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            "data-ismodal": !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $a2f21f5f14f60553$exports = {};
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
    "dismiss": `تجاهل`
};


var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
    "dismiss": `Отхвърляне`
};


var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
    "dismiss": `Odstranit`
};


var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
    "dismiss": `Luk`
};


var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
    "dismiss": `Schließen`
};


var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
    "dismiss": `Απόρριψη`
};


var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
    "dismiss": `Dismiss`
};


var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
    "dismiss": `Descartar`
};


var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
    "dismiss": `Lõpeta`
};


var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
    "dismiss": `Hylkää`
};


var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
    "dismiss": `Rejeter`
};


var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
    "dismiss": `התעלם`
};


var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
    "dismiss": `Odbaci`
};


var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
    "dismiss": `Elutasítás`
};


var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
    "dismiss": `Ignora`
};


var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
    "dismiss": `閉じる`
};


var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
    "dismiss": `무시`
};


var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
    "dismiss": `Atmesti`
};


var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
    "dismiss": `Nerādīt`
};


var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
    "dismiss": `Lukk`
};


var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
    "dismiss": `Negeren`
};


var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
    "dismiss": `Zignoruj`
};


var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
    "dismiss": `Descartar`
};


var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
    "dismiss": `Dispensar`
};


var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
    "dismiss": `Revocare`
};


var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
    "dismiss": `Пропустить`
};


var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
    "dismiss": `Zrušiť`
};


var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
    "dismiss": `Opusti`
};


var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
    "dismiss": `Odbaci`
};


var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
    "dismiss": `Avvisa`
};


var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
    "dismiss": `Kapat`
};


var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
    "dismiss": `Скасувати`
};


var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
    "dismiss": `取消`
};


var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
    "dismiss": `關閉`
};


$a2f21f5f14f60553$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};






function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss , ...otherProps } = props;
    let stringFormatter = (0, $k7QOs$useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($a2f21f5f14f60553$exports))));
    let labels = (0, $k7QOs$useLabels)(otherProps, stringFormatter.format("dismiss"));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, $k7QOs$react).createElement((0, $k7QOs$VisuallyHidden), null, /*#__PURE__*/ (0, $k7QOs$react).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
let $5e3802645cc19319$var$observerStack = (/* unused pure expression or super */ null && ([]));
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if (node.contains(target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        var _refCountMap_get;
        let refCount = (_refCountMap_get = $5e3802645cc19319$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute("aria-hidden") === "true" && refCount === 0) return;
        if (refCount === 0) node.setAttribute("aria-hidden", "true");
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== "childList" || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) {
                for (let node of change.removedNodes)if (node instanceof Element) {
                    visibleNodes.delete(node);
                    hiddenNodes.delete(node);
                }
                for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let observerWrapper = {
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $5e3802645cc19319$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute("aria-hidden");
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1]) {
            $5e3802645cc19319$var$observerStack.pop();
            if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].observe();
        } else $5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper), 1);
    };
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f2f8a6077418541e$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef , popoverRef: popoverRef , isNonModal: isNonModal , isKeyboardDismissDisabled: isKeyboardDismissDisabled , ...otherProps } = props;
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = (0, $a11501f3d1d39e6c$export$ea8f71083e90600f)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled
    }, popoverRef);
    let { overlayProps: positionProps , arrowProps: arrowProps , placement: placement  } = (0, $2a41e45df1593e64$export$d39e1813b3bdd0e1)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: null
    });
    (0, $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: isNonModal
    });
    (0, $k7QOs$useLayoutEffect)(()=>{
        if (state.isOpen && !isNonModal && popoverRef.current) return (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
            popoverRef.current
        ]);
    }, [
        isNonModal,
        state.isOpen,
        popoverRef
    ]);
    return {
        popoverProps: (0, $k7QOs$mergeProps)(overlayProps, positionProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement
    };
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $k7QOs$react).createContext(null)));
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, $k7QOs$useIsSSR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body , isExiting: isExiting  } = props;
    let [contain, setContain] = (0, $k7QOs$useState)(false);
    let contextValue = (0, $k7QOs$useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    if (!portalContainer) return null;
    let contents;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, $k7QOs$react).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, $k7QOs$react).createElement((0, $k7QOs$FocusScope), {
        restoreFocus: true,
        contain: contain && !isExiting
    }, props.children));
    else contents = /*#__PURE__*/ (0, $k7QOs$react).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, props.children);
    return /*#__PURE__*/ (0, $k7QOs$reactdom).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (0, $k7QOs$useContext)($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, $k7QOs$useLayoutEffect)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}



function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = (0, $a11501f3d1d39e6c$export$ea8f71083e90600f)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: !state.isOpen
    });
    (0, $337b884510726a0d$export$14c98a7594375490)();
    (0, $k7QOs$useEffect)(()=>{
        if (state.isOpen) return (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, $k7QOs$mergeProps)(overlayProps),
        underlayProps: underlayProps
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ 90466:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Av: () => (/* binding */ $b5e257d569688ac6$export$535bd6ca7f90a273),
/* harmony export */   gP: () => (/* binding */ $b5e257d569688ac6$export$619500959fc48b26)
/* harmony export */ });
/* unused harmony export SSRProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0,
    isSSR: false
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext($b5e257d569688ac6$var$defaultContext);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, $73SJx$useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, $73SJx$useState)(true);
    let value = (0, $73SJx$useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
            current: 0,
            isSSR: isSSR
        }), [
        cur,
        counter,
        isSSR
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== "undefined") // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, $73SJx$useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, props.children);
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, $73SJx$react)["useId"] === "function") {
        if ( true && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
            console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
            $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
        }
        return /*#__PURE__*/ (0, $73SJx$react).createElement((0, $73SJx$react).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react__WEBPACK_IMPORTED_MODULE_0__).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "production" === "test" ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    // @ts-ignore
    let id = (0, react__WEBPACK_IMPORTED_MODULE_0__).useId();
    let [didSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "production" === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)["useSyncExternalStore"] === "function") return (0, react__WEBPACK_IMPORTED_MODULE_0__)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let cur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    return cur.isSSR;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 5243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ $7215afc6de606d6b$export$de79e2c695e052f3),
/* harmony export */   Me: () => (/* binding */ $bdb11010cef70236$export$f680877a34711e37),
/* harmony export */   QB: () => (/* binding */ $bbed8b41f857bcc0$export$24490316f764c430),
/* harmony export */   V5: () => (/* binding */ $c87311424ea30a05$export$9ac100e40613ea10),
/* harmony export */   Zj: () => (/* binding */ $6a7db85432448f7f$export$60278871457622de),
/* harmony export */   bt: () => (/* binding */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c),
/* harmony export */   cr: () => (/* binding */ $6a7db85432448f7f$export$29bf1b5f2c56cf63),
/* harmony export */   dG: () => (/* binding */ $3ef42575df84b30b$export$9d1611c77c2fe928),
/* harmony export */   gn: () => (/* binding */ $c87311424ea30a05$export$fedb369cb70207f1),
/* harmony export */   iW: () => (/* binding */ $8ae05eaa5c114e9c$export$7f54fc3180508a52),
/* harmony export */   lE: () => (/* binding */ $e7801be82b4b2a53$export$4debdb1a3f0fa79e),
/* harmony export */   xi: () => (/* binding */ $03deb23ff14920c4$export$4eaf04e54aa8eed6),
/* harmony export */   yU: () => (/* binding */ $9daab02d461809db$export$683480f191c0e3ea),
/* harmony export */   zL: () => (/* binding */ $65484d02dcb7eb3e$export$457c3d6518dd4c6f)
/* harmony export */ });
/* unused harmony exports mergeIds, useSlotId, chain, mergeRefs, getOffset, useDrag1D, useLabels, useObjectRef, useUpdateEffect, getScrollParent, isScrollable, useViewportSize, useDescription, isIPhone, isIPad, isAppleDevice, isWebKit, isChrome, isAndroid, useEvent, useValueEffect, scrollIntoView, scrollIntoViewport, useDeepMemo, useFormReset */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90466);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80391);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, $12uGp$useState)(defaultValue);
    let valueRef = (0, $12uGp$useRef)(value);
    let effect = (0, $12uGp$useRef)(null);
    // Must be stable so that `queue` is stable.
    let nextIter = (0, $12uGp$useCallback)(()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        while(!newValue.done && valueRef.current === newValue.value)// If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // Always update valueRef when setting the state.
        // This is needed because the function is not regenerated with the new state value since
        // they must be stable across renders. Instead, it gets carried in the ref, but the setState
        // is also needed in order to cause a rerender.
        setValue(newValue.value);
        valueRef.current = newValue.value;
    // this list of dependencies is stable, setState and refs never change after first render.
    }, [
        setValue,
        valueRef,
        effect
    ]);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextIter();
    });
    // queue must be a stable function, much like setState.
    let queue = (0, $12uGp$useCallback)((fn)=>{
        effect.current = fn(valueRef.current);
        nextIter();
    // this list of dependencies is stable, setState and refs never change after first render.
    // in addition, nextIter is stable as outlined above
    }, [
        nextIter,
        effect,
        valueRef
    ]);
    return [
        value,
        queue
    ];
}


let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
    let nextId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let res = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__/* .useSSRSafeId */ .gP)(value);
    let updateValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((val)=>{
        nextId.current = val;
    }, []);
    $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (0, $12uGp$useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === "function") callback(...args);
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
            key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
            else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx__WEBPACK_IMPORTED_MODULE_1__)(a, b);
            else if (key === "id" && a && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === "function") ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details"
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement("div");
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === "horizontal" ? rect.right : rect.bottom;
    return orientation === "horizontal" ? rect.left : rect.top;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === "undefined") return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener("transitioncancel", onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener("transitioncancel", onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 

// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = (/* unused pure expression or super */ null && ([]));
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === "horizontal" ? e.clientX : e.clientY;
    let getNextOffset = (e)=>{
        let containerOffset = (0, $ab71dadb03a6fb2e$export$622cea445a1c5b7d)(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = (0, $12uGp$useRef)(false);
    let prevPosition = (0, $12uGp$useRef)(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = (0, $12uGp$useRef)({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener("mouseup", onMouseUp, false);
        window.removeEventListener("mousemove", onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt))) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener("mousemove", onMouseDragged, false);
        window.addEventListener("mouseup", onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case "Left":
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Up":
            case "ArrowUp":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Right":
            case "ArrowRight":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Down":
            case "ArrowDown":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Home":
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case "End":
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case "Enter":
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    let addGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , "aria-label": label , "aria-labelledby": labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(" ");
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        "aria-label": label,
        "aria-labelledby": labelledBy
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, $12uGp$useRef)();
    return (0, $12uGp$useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === "function") forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0, $12uGp$useRef)(true);
    const lastDeps = (0, $12uGp$useRef)(null);
    (0, $12uGp$useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, $12uGp$useEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}




function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener("resize", onResize, false);
            return ()=>{
                window.removeEventListener("resize", onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    }, [
        context,
        ref
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $62d8ded9296f3872$export$cfa2225e87938781(node) {
    if ($62d8ded9296f3872$export$2bb74740c4e19def(node)) node = node.parentElement;
    while(node && !$62d8ded9296f3872$export$2bb74740c4e19def(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$export$2bb74740c4e19def(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let [size, setSize] = (0, $12uGp$useState)(()=>$5df64b3807dc15ee$var$getViewportSize());
    (0, $12uGp$useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener("resize", onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener("resize", onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener("resize", onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener("resize", onResize);
        };
    }, []);
    return size;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, $12uGp$useState)(undefined);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement("div");
            node.id = id;
            node.style.display = "none";
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        "aria-describedby": description ? id : undefined
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{
        const f = ref.current;
        return f(...args);
    }, []);
}


function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (0, $12uGp$useEffect)(()=>{
        if (isDisabled) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left
    let { borderTopWidth: borderTopWidth , borderLeftWidth: borderLeftWidth  } = getComputedStyle(scrollView);
    let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === "left" ? "offsetLeft" : "offsetTop";
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft , top: originalTop  } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: "nearest"
            });
            let { left: newLeft , top: newTop  } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement, _opts_containingElement_scrollIntoView, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: "center",
                    inline: "center"
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: "nearest"
                });
            }
        } else {
            let scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            while(targetElement && scrollParent && targetElement !== root && scrollParent !== root){
                $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
                targetElement = scrollParent;
                scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            }
        }
    }
}



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, $12uGp$useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, $12uGp$useRef)(initialValue);
    let handleReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, $12uGp$useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener("reset", handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener("reset", handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 3522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uZ: () => (/* binding */ $9446cca9a3875146$export$7d15b64cf5a3a4c4),
/* harmony export */   zk: () => (/* binding */ $458b0a5536c1a7cf$export$40bfa8c7b0832715)
/* harmony export */ });
/* unused harmony exports snapValueToStep, toFixedNumber */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17640);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);
    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === "function") {
            console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf(".");
    let precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}





//# sourceMappingURL=module.js.map


/***/ })

};
;