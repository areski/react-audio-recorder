(function(){"use strict";(r=>{try{if(typeof window>"u")return;const e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import Re, { useState as B, useCallback as J, useEffect as ke, Suspense as je } from "react";
var K = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Ae() {
  if (Ee) return F;
  Ee = 1;
  var u = Symbol.for("react.transitional.element"), x = Symbol.for("react.fragment");
  function E(A, s, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      l = {};
      for (var R in s)
        R !== "key" && (l[R] = s[R]);
    } else l = s;
    return s = l.ref, {
      $$typeof: u,
      type: A,
      key: f,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return F.Fragment = x, F.jsx = E, F.jsxs = E, F;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Ne() {
  return he || (he = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === _e ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case _:
          return "Portal";
        case T:
          return "Profiler";
        case V:
          return "StrictMode";
        case Z:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case b:
            return (e.displayName || "Context") + ".Provider";
          case $:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case re:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function x(e) {
      return "" + e;
    }
    function E(e) {
      try {
        x(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), x(e);
      }
    }
    function A() {
    }
    function s() {
      if (L === 0) {
        ce = console.log, ue = console.info, le = console.warn, fe = console.error, de = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: A,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      L++;
    }
    function l() {
      if (L--, L === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: G({}, e, { value: ce }),
          info: G({}, e, { value: ue }),
          warn: G({}, e, { value: le }),
          error: G({}, e, { value: fe }),
          group: G({}, e, { value: de }),
          groupCollapsed: G({}, e, { value: ge }),
          groupEnd: G({}, e, { value: ve })
        });
      }
      0 > L && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function f(e) {
      if (oe === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          oe = r && r[1] || "", me = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + oe + e + me;
    }
    function R(e, r) {
      if (!e || ne) return "";
      var t = ae.get(e);
      if (t !== void 0) return t;
      ne = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = M.H, M.H = null, s();
      try {
        var d = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (j) {
                    var Q = j;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (j) {
                    Q = j;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (j) {
                  Q = j;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (j) {
              if (j && Q && typeof j.stack == "string")
                return [j.stack, Q.stack];
            }
            return [null, null];
          }
        };
        d.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var i = Object.getOwnPropertyDescriptor(
          d.DetermineComponentFrameRoot,
          "name"
        );
        i && i.configurable && Object.defineProperty(
          d.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = d.DetermineComponentFrameRoot(), k = o[0], U = o[1];
        if (k && U) {
          var g = k.split(`
`), z = U.split(`
`);
          for (o = i = 0; i < g.length && !g[i].includes(
            "DetermineComponentFrameRoot"
          ); )
            i++;
          for (; o < z.length && !z[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (i === g.length || o === z.length)
            for (i = g.length - 1, o = z.length - 1; 1 <= i && 0 <= o && g[i] !== z[o]; )
              o--;
          for (; 1 <= i && 0 <= o; i--, o--)
            if (g[i] !== z[o]) {
              if (i !== 1 || o !== 1)
                do
                  if (i--, o--, 0 > o || g[i] !== z[o]) {
                    var q = `
` + g[i].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, q), q;
                  }
                while (1 <= i && 0 <= o);
              break;
            }
        }
      } finally {
        ne = !1, M.H = n, l(), Error.prepareStackTrace = t;
      }
      return g = (g = e ? e.displayName || e.name : "") ? f(g) : "", typeof e == "function" && ae.set(e, g), g;
    }
    function a(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return R(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return f(e);
      switch (e) {
        case Z:
          return f("Suspense");
        case D:
          return f("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case H:
            return e = R(e.render, !1), e;
          case ee:
            return a(e.type);
          case re:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return "";
    }
    function c() {
      var e = M.A;
      return e === null ? null : e.getOwner();
    }
    function P(e) {
      if (se.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function C(e, r) {
      function t() {
        pe || (pe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function h() {
      var e = u(this.type);
      return be[e] || (be[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function m(e, r, t, n, d, i) {
      return t = i.ref, e = {
        $$typeof: v,
        type: e,
        key: r,
        props: i,
        _owner: d
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, r, t, n, d, i) {
      if (typeof e == "string" || typeof e == "function" || e === p || e === T || e === V || e === Z || e === D || e === Se || typeof e == "object" && e !== null && (e.$$typeof === re || e.$$typeof === ee || e.$$typeof === b || e.$$typeof === $ || e.$$typeof === H || e.$$typeof === Ce || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (te(o)) {
              for (n = 0; n < o.length; n++)
                S(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else S(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : te(e) ? n = "array" : e !== void 0 && e.$$typeof === v ? (n = "<" + (u(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (se.call(r, "key")) {
        o = u(e);
        var k = Object.keys(r).filter(function(g) {
          return g !== "key";
        });
        n = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", we[o + n] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          k,
          o
        ), we[o + n] = !0);
      }
      if (o = null, t !== void 0 && (E(t), o = "" + t), P(r) && (E(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var U in r)
          U !== "key" && (t[U] = r[U]);
      } else t = r;
      return o && C(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), m(e, o, i, d, c(), t);
    }
    function S(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== Te) {
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            y(n) && Y(n, r);
          }
        else if (y(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = ie && e[ie] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            y(e.value) && Y(e.value, r);
      }
    }
    function y(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    function Y(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = W(r), !xe[r])) {
        xe[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== c() && (t = null, typeof e._owner.tag == "number" ? t = u(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = M.getCurrentStack;
        M.getCurrentStack = function() {
          var d = a(e.type);
          return n && (d += n() || ""), d;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), M.getCurrentStack = n;
      }
    }
    function W(e) {
      var r = "", t = c();
      return t && (t = u(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = u(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var I = Re, v = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), b = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), Se = Symbol.for("react.offscreen"), ie = Symbol.iterator, _e = Symbol.for("react.client.reference"), M = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, G = Object.assign, Ce = Symbol.for("react.client.reference"), te = Array.isArray, L = 0, ce, ue, le, fe, de, ge, ve;
    A.__reactDisabledLog = !0;
    var oe, me, ne = !1, ae = new (typeof WeakMap == "function" ? WeakMap : Map)(), Te = Symbol.for("react.client.reference"), pe, be = {}, we = {}, xe = {};
    X.Fragment = p, X.jsx = function(e, r, t, n, d) {
      return N(e, r, t, !1, n, d);
    }, X.jsxs = function(e, r, t, n, d) {
      return N(e, r, t, !0, n, d);
    };
  }()), X;
}
var ye;
function Oe() {
  return ye || (ye = 1, process.env.NODE_ENV === "production" ? K.exports = Ae() : K.exports = Ne()), K.exports;
}
var w = Oe();
const Pe = (u, x, E) => {
  const [A, s] = B(!1), [l, f] = B(!1), [R, a] = B(0), [c, P] = B(), [C, h] = B(), [m, N] = B(), S = J(() => {
    const v = setInterval(() => {
      a((_) => _ + 1);
    }, 1e3);
    h(v);
  }, [a, h]), y = J(() => {
    C != null && clearInterval(C), h(void 0);
  }, [C, h]), Y = J(() => {
    C == null && navigator.mediaDevices.getUserMedia({ audio: u ?? !0 }).then((v) => {
      s(!0);
      const _ = new MediaRecorder(
        v,
        E
      );
      P(_), _.start(), S(), _.addEventListener("dataavailable", (p) => {
        N(p.data), _.stream.getTracks().forEach((V) => V.stop()), P(void 0);
      });
    }).catch((v) => {
      console.log(v.name, v.message, v.cause), x == null || x(v);
    });
  }, [
    C,
    s,
    P,
    S,
    N,
    x,
    E
  ]), W = J(() => {
    c == null || c.stop(), y(), a(0), s(!1), f(!1);
  }, [
    c,
    a,
    s,
    f,
    y
  ]), I = J(() => {
    l ? (f(!1), c == null || c.resume(), S()) : (f(!0), y(), c == null || c.pause());
  }, [c, f, S, y]);
  return {
    startRecording: Y,
    stopRecording: W,
    togglePauseResume: I,
    recordingBlob: m,
    isRecording: A,
    isPaused: l,
    recordingTime: R,
    mediaRecorder: c
  };
}, Ve = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20470%20470'%20style='enable-background:new%200%200%20470%20470;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M235,302.296c47.177,0,85.423-38.245,85.423-85.423V85.423C320.423,38.245,282.177,0,235,0s-85.423,38.245-85.423,85.423%20v131.451C149.577,264.051,187.823,302.296,235,302.296z'/%3e%3cpath%20d='M350.423,136.148v30h15v50.726c0,71.915-58.508,130.423-130.423,130.423s-130.423-58.507-130.423-130.423v-50.726h15v-30%20h-45v80.726C74.577,300.273,138.551,369,220,376.589V440h-90.444v30h210.889v-30H250v-63.411%20c81.449-7.589,145.423-76.317,145.423-159.716v-80.726H350.423z'/%3e%3c/g%3e%3c/svg%3e", $e = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.607%2047.607'%20style='enable-background:new%200%200%2047.607%2047.607;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0%20l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3cpath%20d='M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631%20C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3c/g%3e%3c/svg%3e", Me = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20494.148%20494.148'%20style='enable-background:new%200%200%20494.148%20494.148;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124%20c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884%20C432.632,229.572,422.964,213.288,405.284,201.188z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ge = "data:image/svg+xml,%3csvg%20width='18px'%20height='18px'%20viewBox='0%200%2018%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000000'%20d='M17.85%203.15l-2.99-3A.508.508%200%200%200%2014.5%200H1.4A1.417%201.417%200%200%200%200%201.43v15.14A1.417%201.417%200%200%200%201.4%2018h15.2a1.417%201.417%200%200%200%201.4-1.43V3.5a.47.47%200%200%200-.15-.35zM2%205V3a1%201%200%200%201%201-1h8a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H3a1%201%200%200%201-1-1zm7%2011a4%204%200%201%201%204-4%204%204%200%200%201-4%204z'/%3e%3c/svg%3e", ze = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2046.734%2046.734'%20style='enable-background:new%200%200%2046.734%2046.734;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M41.346,0H5.388C2.417,0,0,2.417,0,5.388v35.958c0,2.971,2.417,5.388,5.388,5.388h35.958c2.971,0,5.388-2.417,5.388-5.388%20V5.388C46.733,2.417,44.316,0,41.346,0z'/%3e%3c/g%3e%3c/svg%3e", Be = Re.lazy(async () => {
  const { LiveAudioVisualizer: u } = await import("./react-audio-visualize.es-D9-iDWW-.js");
  return { default: u };
}), Ie = ({
  onRecordingComplete: u,
  onNotAllowedOrFound: x,
  recorderControls: E,
  audioTrackConstraints: A,
  downloadOnSavePress: s = !1,
  downloadFileExtension: l = "webm",
  showVisualizer: f = !1,
  mediaRecorderOptions: R,
  classes: a
}) => {
  const {
    startRecording: c,
    stopRecording: P,
    togglePauseResume: C,
    recordingBlob: h,
    isRecording: m,
    isPaused: N,
    recordingTime: S,
    mediaRecorder: y
  } = E ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  Pe(
    A,
    x,
    R
  ), [Y, W] = B(!1), I = (p = !0) => {
    W(p), P();
  }, v = async (p) => {
    const T = (await import("./index-D8kRViJr.js")).createFFmpeg({ log: !1 });
    await T.load();
    const $ = "input.webm", b = `output.${l}`;
    T.FS(
      "writeFile",
      $,
      new Uint8Array(await p.arrayBuffer())
    ), await T.run("-i", $, b);
    const H = T.FS("readFile", b);
    return new Blob([H.buffer], {
      type: `audio/${l}`
    });
  }, _ = async (p) => {
    !crossOriginIsolated && l !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const V = crossOriginIsolated ? await v(p) : p, T = crossOriginIsolated ? l : "webm", $ = URL.createObjectURL(V), b = document.createElement("a");
    b.style.display = "none", b.href = $, b.download = `audio.${T}`, document.body.appendChild(b), b.click(), b.remove();
  };
  return ke(() => {
    (Y || E) && h != null && u != null && (u(h), s && _(h));
  }, [h]), /* @__PURE__ */ w.jsxs(
    "div",
    {
      className: `audio-recorder ${m ? "recording" : ""} ${(a == null ? void 0 : a.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ w.jsx(
          "img",
          {
            src: m ? Ge : Ve,
            className: `audio-recorder-mic ${(a == null ? void 0 : a.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: m ? () => I() : c,
            "data-testid": "ar_mic",
            title: m ? "Save recording" : "Start recording"
          }
        ),
        /* @__PURE__ */ w.jsxs(
          "span",
          {
            className: `audio-recorder-timer ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(S / 60),
              ":",
              String(S % 60).padStart(2, "0")
            ]
          }
        ),
        f ? /* @__PURE__ */ w.jsx(
          "span",
          {
            className: `audio-recorder-visualizer ${m ? "" : "display-none"}`,
            children: y && /* @__PURE__ */ w.jsx(je, { fallback: /* @__PURE__ */ w.jsx(w.Fragment, {}), children: /* @__PURE__ */ w.jsx(
              Be,
              {
                mediaRecorder: y,
                barWidth: 2,
                gap: 2,
                width: 140,
                height: 30,
                fftSize: 512,
                maxDecibels: -10,
                minDecibels: -80,
                smoothingTimeConstant: 0.4
              }
            ) })
          }
        ) : /* @__PURE__ */ w.jsxs(
          "span",
          {
            className: `audio-recorder-status ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ w.jsx("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ w.jsx(
          "img",
          {
            src: N ? Me : $e,
            className: `audio-recorder-options ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: C,
            title: N ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ w.jsx(
          "img",
          {
            src: ze,
            className: `audio-recorder-options ${m ? "" : "display-none"} ${(a == null ? void 0 : a.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => I(!1),
            title: "Discard Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
export {
  Ie as AudioRecorder,
  Pe as useAudioRecorder
};
