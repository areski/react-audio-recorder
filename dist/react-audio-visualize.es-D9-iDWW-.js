import Pe, { useState as A, useRef as Ne, useEffect as B, useCallback as cr, forwardRef as fr, useImperativeHandle as pr } from "react";
var ae = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function yr() {
  if (xe)
    return M;
  xe = 1;
  var f = Pe, y = Symbol.for("react.element"), O = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(i, u, d) {
    var o, a = {}, v = null, j = null;
    d !== void 0 && (v = "" + d), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (o in u)
      b.call(u, o) && !_.hasOwnProperty(o) && (a[o] = u[o]);
    if (i && i.defaultProps)
      for (o in u = i.defaultProps, u)
        a[o] === void 0 && (a[o] = u[o]);
    return { $$typeof: y, type: i, key: v, ref: j, props: a, _owner: h.current };
  }
  return M.Fragment = O, M.jsx = S, M.jsxs = S, M;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function dr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Pe, y = Symbol.for("react.element"), O = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), i = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), x = Symbol.iterator, R = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[R];
      return typeof r == "function" ? r : null;
    }
    var g = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        E("error", e, t);
      }
    }
    function E(e, r, t) {
      {
        var n = g.ReactDebugCurrentFrame, p = n.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var m = t.map(function(l) {
          return String(l);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var D = !1, P = !1, W = !1, Ie = !1, Te = !1, oe;
    oe = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === _ || Te || e === h || e === d || e === o || Ie || e === j || D || P || W || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === a || e.$$typeof === S || e.$$typeof === i || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case O:
          return "Portal";
        case _:
          return "Profiler";
        case h:
          return "StrictMode";
        case d:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var r = e;
            return ie(r) + ".Consumer";
          case S:
            var t = e;
            return ie(t._context) + ".Provider";
          case u:
            return ze(e, e.render, "ForwardRef");
          case a:
            var n = e.displayName || null;
            return n !== null ? n : I(e.type) || "Memo";
          case v: {
            var p = e, m = p._payload, l = p._init;
            try {
              return I(l(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, U = 0, se, ue, le, ce, fe, pe, ye;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function We() {
      {
        if (U === 0) {
          se = console.log, ue = console.info, le = console.warn, ce = console.error, fe = console.group, pe = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        U++;
      }
    }
    function Ue() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: se
            }),
            info: T({}, e, {
              value: ue
            }),
            warn: T({}, e, {
              value: le
            }),
            error: T({}, e, {
              value: ce
            }),
            group: T({}, e, {
              value: fe
            }),
            groupCollapsed: T({}, e, {
              value: pe
            }),
            groupEnd: T({}, e, {
              value: ye
            })
          });
        }
        U < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = g.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (p) {
            var n = p.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Q = !1, Y;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Me();
    }
    function me(e, r) {
      if (!e || Q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = G.current, G.current = null, We();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (F) {
              n = F;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (F) {
              n = F;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            n = F;
          }
          e();
        }
      } catch (F) {
        if (F && n && typeof F.stack == "string") {
          for (var s = F.stack.split(`
`), C = n.stack.split(`
`), w = s.length - 1, k = C.length - 1; w >= 1 && k >= 0 && s[w] !== C[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (s[w] !== C[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || s[w] !== C[k]) {
                    var $ = `
` + s[w].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, $), $;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        Q = !1, G.current = m, Ue(), Error.prepareStackTrace = p;
      }
      var z = e ? e.displayName || e.name : "", De = z ? V(z) : "";
      return typeof e == "function" && Y.set(e, De), De;
    }
    function Ae(e, r, t) {
      return me(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Be(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case d:
          return V("Suspense");
        case o:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ae(e.render);
          case a:
            return q(e.type, r, t);
          case v: {
            var n = e, p = n._payload, m = n._init;
            try {
              return q(m(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, ge = {}, he = g.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, p) {
      {
        var m = Function.call.bind(H);
        for (var l in e)
          if (m(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              s = e[l](r, l, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              s = w;
            }
            s && !(s instanceof Error) && (J(p), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, l, typeof s), J(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, J(p), c("Failed %s type: %s", t, s.message), J(null));
          }
      }
    }
    var Ye = Array.isArray;
    function Z(e) {
      return Ye(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function be(e) {
      if (He(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), ve(e);
    }
    var _e = g.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Se;
    function Xe(e) {
      if (H.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (H.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function Qe(e, r) {
      {
        var t = function() {
          we || (we = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Se || (Se = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, p, m, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function rr(e, r, t, n, p) {
      {
        var m, l = {}, s = null, C = null;
        t !== void 0 && (be(t), s = "" + t), Ge(r) && (be(r.key), s = "" + r.key), Xe(r) && (C = r.ref, Ke(r, p));
        for (m in r)
          H.call(r, m) && !Je.hasOwnProperty(m) && (l[m] = r[m]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (m in w)
            l[m] === void 0 && (l[m] = w[m]);
        }
        if (s || C) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Qe(l, k), C && Ze(l, k);
        }
        return er(e, s, C, p, n, _e.current, l);
      }
    }
    var ee = g.ReactCurrentOwner, ke = g.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Re() {
      {
        if (ee.current) {
          var e = I(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var Oe = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + I(e._owner.type) + "."), L(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && je(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = N(e);
          if (typeof p == "function" && p !== e.entries)
            for (var m = p.call(e), l; !(l = m.next()).done; )
              te(l.value) && je(l.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === a))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = I(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var p = I(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Ce(e, r, t, n, p, m) {
      {
        var l = Le(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = tr();
          C ? s += C : s += Re();
          var w;
          e === null ? w = "null" : Z(e) ? w = "array" : e !== void 0 && e.$$typeof === y ? (w = "<" + (I(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, s);
        }
        var k = rr(e, r, t, p, m);
        if (k == null)
          return k;
        if (l) {
          var $ = r.children;
          if ($ !== void 0)
            if (n)
              if (Z($)) {
                for (var z = 0; z < $.length; z++)
                  Ee($[z], e);
                Object.freeze && Object.freeze($);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee($, e);
        }
        return e === b ? or(k) : ar(k), k;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    X.Fragment = b, X.jsx = ur, X.jsxs = lr;
  }()), X;
}
process.env.NODE_ENV === "production" ? ae.exports = yr() : ae.exports = dr();
var Fe = ae.exports;
const mr = (f, y, O, b) => {
  let h = y / (O + b), _ = Math.floor(f.length / h);
  h > f.length && (h = f.length, _ = 1);
  const S = [];
  for (let i = 0; i < h; i++) {
    let u = 0;
    for (let d = 0; d < _ && i * _ + d < f.length; d++)
      u += f[i * _ + d];
    S.push(u / _);
  }
  return S;
}, gr = (f, y, O, b, h, _) => {
  const S = y.height / 2, i = y.getContext("2d");
  i && (i.clearRect(0, 0, y.width, y.height), h !== "transparent" && (i.fillStyle = h, i.fillRect(0, 0, y.width, y.height)), f.forEach((u, d) => {
    i.fillStyle = _;
    const o = d * (O + b), a = S - u / 2, v = O, j = u || 1;
    i.beginPath(), i.roundRect ? (i.roundRect(o, a, v, j, 50), i.fill()) : i.fillRect(o, a, v, j);
  }));
}, _r = ({
  mediaRecorder: f,
  width: y = "100%",
  height: O = "100%",
  barWidth: b = 2,
  gap: h = 1,
  backgroundColor: _ = "transparent",
  barColor: S = "rgb(160, 198, 255)",
  fftSize: i = 1024,
  maxDecibels: u = -10,
  minDecibels: d = -90,
  smoothingTimeConstant: o = 0.4
}) => {
  const [a, v] = A(), [j, x] = A(), [R, N] = A(), g = Ne(null);
  B(() => {
    if (!f.stream)
      return;
    const D = new AudioContext(), P = D.createAnalyser();
    N(P), P.fftSize = i, P.minDecibels = d, P.maxDecibels = u, P.smoothingTimeConstant = o;
    const W = D.createMediaStreamSource(f.stream);
    return W.connect(P), v(D), x(W), () => {
      W.disconnect(), P.disconnect(), D.state !== "closed" && D.close();
    };
  }, [f.stream]), B(() => {
    R && f.state === "recording" && c();
  }, [R, f.state]);
  const c = cr(() => {
    if (!R || !a)
      return;
    const D = new Uint8Array(R == null ? void 0 : R.frequencyBinCount);
    f.state === "recording" ? (R == null || R.getByteFrequencyData(D), E(D), requestAnimationFrame(c)) : f.state === "paused" ? E(D) : f.state === "inactive" && a.state !== "closed" && a.close();
  }, [R, a == null ? void 0 : a.state]);
  B(() => () => {
    a && a.state !== "closed" && a.close(), j == null || j.disconnect(), R == null || R.disconnect();
  }, []);
  const E = (D) => {
    if (!g.current)
      return;
    const P = mr(
      D,
      g.current.width,
      b,
      h
    );
    gr(
      P,
      g.current,
      b,
      h,
      _,
      S
    );
  };
  return /* @__PURE__ */ Fe.jsx(
    "canvas",
    {
      ref: g,
      width: y,
      height: O,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, hr = (f, y, O, b, h) => {
  const _ = f.getChannelData(0), S = O / (b + h), i = Math.floor(_.length / S), u = y / 2;
  let d = [], o = 0;
  for (let a = 0; a < S; a++) {
    const v = [];
    let j = 0;
    const x = [];
    let R = 0;
    for (let c = 0; c < i && a * i + c < f.length; c++) {
      const E = _[a * i + c];
      E <= 0 && (v.push(E), j++), E > 0 && (x.push(E), R++);
    }
    const N = v.reduce((c, E) => c + E, 0) / j, g = { max: x.reduce((c, E) => c + E, 0) / R, min: N };
    g.max > o && (o = g.max), Math.abs(g.min) > o && (o = Math.abs(g.min)), d.push(g);
  }
  if (u * 0.8 > o * u) {
    const a = u * 0.8 / o;
    d = d.map((v) => ({
      max: v.max * a,
      min: v.min * a
    }));
  }
  return d;
}, ne = (f, y, O, b, h, _, S, i = 0, u = 1) => {
  const d = y.height / 2, o = y.getContext("2d");
  if (!o)
    return;
  o.clearRect(0, 0, y.width, y.height), h !== "transparent" && (o.fillStyle = h, o.fillRect(0, 0, y.width, y.height));
  const a = (i || 0) / u;
  f.forEach((v, j) => {
    const x = j / f.length, R = a > x;
    o.fillStyle = R && S ? S : _;
    const N = j * (O + b), g = d + v.min, c = O, E = d + v.max - g;
    o.beginPath(), o.roundRect ? (o.roundRect(N, g, c, E, 50), o.fill()) : o.fillRect(N, g, c, E);
  });
}, vr = fr(
  ({
    blob: f,
    width: y,
    height: O,
    barWidth: b = 2,
    gap: h = 1,
    currentTime: _,
    style: S,
    backgroundColor: i = "transparent",
    barColor: u = "rgb(184, 184, 184)",
    barPlayedColor: d = "rgb(160, 198, 255)"
  }, o) => {
    const a = Ne(null), [v, j] = A([]), [x, R] = A(0);
    return pr(
      o,
      () => a.current,
      []
    ), B(() => {
      (async () => {
        if (!a.current)
          return;
        if (!f) {
          const g = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ne(
            g,
            a.current,
            b,
            h,
            i,
            u,
            d
          );
          return;
        }
        const N = await f.arrayBuffer();
        await new AudioContext().decodeAudioData(N, (g) => {
          if (!a.current)
            return;
          R(g.duration);
          const c = hr(
            g,
            O,
            y,
            b,
            h
          );
          j(c), ne(
            c,
            a.current,
            b,
            h,
            i,
            u,
            d
          );
        });
      })();
    }, [f, a.current]), B(() => {
      a.current && ne(
        v,
        a.current,
        b,
        h,
        i,
        u,
        d,
        _,
        x
      );
    }, [_, x]), /* @__PURE__ */ Fe.jsx(
      "canvas",
      {
        ref: a,
        width: y,
        height: O,
        style: {
          ...S
        }
      }
    );
  }
);
vr.displayName = "AudioVisualizer";
export {
  vr as AudioVisualizer,
  _r as LiveAudioVisualizer
};
