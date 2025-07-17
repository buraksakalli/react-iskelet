

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

___$insertStyle(".skeleton {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n.skeleton__thumbnail {\n  border-radius: 0.5rem;\n  height: 6rem;\n  width: 6rem;\n  background-color: #d1d5db;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  margin-bottom: 1rem;\n}\n\n.skeleton__text {\n  height: 0.75rem;\n  width: 100%;\n  border-radius: 0.375rem;\n  background-color: #d1d5db;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  margin-bottom: 0.5rem;\n}\n\n.skeleton__title {\n  width: 50%;\n  height: 1.25rem;\n  margin-bottom: 1rem;\n  border-radius: 0.375rem;\n  background-color: #d1d5db;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n.skeleton__avatar {\n  border-radius: 9999px;\n  border-radius: 6rem;\n  background-color: #d1d5db;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  margin-bottom: 1rem;\n  height: 6rem;\n  width: 6rem;\n}\n\n@keyframes pulse {\n  50% {\n    opacity: 0.5;\n  }\n}");

function cn() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(" ");
}
function getCustomStyles(width, height) {
    var styles = {};
    if (width !== undefined) {
        styles.width = typeof width === 'number' ? "".concat(width, "px") : width;
    }
    if (height !== undefined) {
        styles.height = typeof height === 'number' ? "".concat(height, "px") : height;
    }
    return Object.keys(styles).length > 0 ? styles : undefined;
}
var SkeletonChildren = function (_a) {
    var type = _a.type, count = _a.count, width = _a.width, height = _a.height, props = __rest(_a, ["type", "count", "width", "height"]);
    switch (type) {
        case "text":
            return React__default["default"].createElement(Text, __assign({}, props, { count: count, width: width, height: height }));
        case "title":
            return React__default["default"].createElement(Title, __assign({}, props, { count: count, width: width, height: height }));
        case "thumbnail":
            return React__default["default"].createElement(Thumbnail, __assign({}, props, { count: count, width: width, height: height }));
        case "avatar":
            return React__default["default"].createElement(Avatar, __assign({}, props, { count: count, width: width, height: height }));
        default:
            return React__default["default"].createElement(Text, __assign({}, props, { count: count, width: width, height: height }));
    }
};
function Skeleton(_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, props = __rest(_a, ["type"]);
    return React__default["default"].createElement(SkeletonChildren, __assign({ type: type }, props));
}
var MultipleLines = function (_a) {
    var count = _a.count, baseClass = _a.baseClass, width = _a.width, height = _a.height, props = __rest(_a, ["count", "baseClass", "width", "height"]);
    var customStyles = getCustomStyles(width, height);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, __spreadArray([], Array(count), true).map(function (_, i) { return (React__default["default"].createElement("div", { key: i, className: cn(baseClass, props === null || props === void 0 ? void 0 : props.className), style: __assign(__assign({}, customStyles), props.style) })); })));
};
var Text = function (_a) {
    var count = _a.count, width = _a.width, height = _a.height, props = __rest(_a, ["count", "width", "height"]);
    var customStyles = getCustomStyles(width, height);
    if (count)
        return (React__default["default"].createElement(MultipleLines, __assign({ count: count, baseClass: "skeleton__text", width: width, height: height }, props)));
    return (React__default["default"].createElement("div", { className: cn("skeleton__text", props === null || props === void 0 ? void 0 : props.className), style: __assign(__assign({}, customStyles), props.style) }));
};
var Title = function (_a) {
    var count = _a.count, width = _a.width, height = _a.height, props = __rest(_a, ["count", "width", "height"]);
    var customStyles = getCustomStyles(width, height);
    if (count)
        return (React__default["default"].createElement(MultipleLines, __assign({ count: count, baseClass: "skeleton__title", width: width, height: height }, props)));
    return (React__default["default"].createElement("div", { className: cn("skeleton__title", props === null || props === void 0 ? void 0 : props.className), style: __assign(__assign({}, customStyles), props.style) }));
};
var Thumbnail = function (_a) {
    var count = _a.count, width = _a.width, height = _a.height, props = __rest(_a, ["count", "width", "height"]);
    var customStyles = getCustomStyles(width, height);
    if (count)
        return (React__default["default"].createElement(MultipleLines, __assign({ count: count, baseClass: "skeleton__thumbnail", width: width, height: height }, props)));
    return (React__default["default"].createElement("div", { className: cn("skeleton__thumbnail", props === null || props === void 0 ? void 0 : props.className), style: __assign(__assign({}, customStyles), props.style) }));
};
var Avatar = function (_a) {
    var count = _a.count, width = _a.width, height = _a.height, props = __rest(_a, ["count", "width", "height"]);
    var customStyles = getCustomStyles(width, height);
    if (count)
        return (React__default["default"].createElement(MultipleLines, __assign({ count: count, baseClass: "skeleton__avatar", width: width, height: height }, props)));
    return (React__default["default"].createElement("div", { className: cn("skeleton__avatar", props === null || props === void 0 ? void 0 : props.className), style: __assign(__assign({}, customStyles), props.style) }));
};
Skeleton.Text = Text;
Skeleton.Title = Title;
Skeleton.Avatar = Avatar;
Skeleton.Thumbnail = Thumbnail;

exports["default"] = Skeleton;
//# sourceMappingURL=index.js.map
