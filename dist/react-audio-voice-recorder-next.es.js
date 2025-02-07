(function(){"use strict";(e=>{console.log("injectCodeFunction",e);try{if(typeof window>"u")return;var r=document.createElement("style");r.appendChild(document.createTextNode(e)),document.head.appendChild(r)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
var It = Object.defineProperty;
var Je = (n) => {
  throw TypeError(n);
};
var Ct = (n, t, a) => t in n ? It(n, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[t] = a;
var A = (n, t, a) => Ct(n, typeof t != "symbol" ? t + "" : t, a), Qe = (n, t, a) => t.has(n) || Je("Cannot " + a);
var g = (n, t, a) => (Qe(n, t, "read from private field"), a ? a.call(n) : t.get(n)), G = (n, t, a) => t.has(n) ? Je("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, a), oe = (n, t, a, s) => (Qe(n, t, "write to private field"), s ? s.call(n, a) : t.set(n, a), a);
import { jsxs as _e, jsx as H, Fragment as jt } from "react/jsx-runtime";
import ke, { useState as M, useCallback as re, useEffect as ne, Suspense as Lt, useRef as tt, forwardRef as Nt, useImperativeHandle as Pt } from "react";
const At = (n, t, a) => {
  const [s, u] = M(!1), [b, E] = M(!1), [f, i] = M(0), [p, d] = M(), [c, h] = M(), [w, L] = M(), O = re(() => {
    const k = setInterval(() => {
      i((C) => C + 1);
    }, 1e3);
    h(k);
  }, [i, h]), N = re(() => {
    c != null && clearInterval(c), h(void 0);
  }, [c, h]), R = re(() => {
    c == null && navigator.mediaDevices.getUserMedia({ audio: n ?? !0 }).then((k) => {
      u(!0);
      const C = new MediaRecorder(
        k,
        a
      );
      d(C), C.start(), O(), C.addEventListener("dataavailable", ($) => {
        L($.data), C.stream.getTracks().forEach((Z) => Z.stop()), d(void 0);
      });
    }).catch((k) => {
      console.log(k.name, k.message, k.cause), t == null || t(k);
    });
  }, [
    c,
    u,
    d,
    O,
    L,
    t,
    a
  ]), m = re(() => {
    p == null || p.stop(), N(), i(0), u(!1), E(!1);
  }, [
    p,
    i,
    u,
    E,
    N
  ]), D = re(() => {
    b ? (E(!1), p == null || p.resume(), O()) : (E(!0), N(), p == null || p.pause());
  }, [p, E, O, N]);
  return {
    startRecording: R,
    stopRecording: m,
    togglePauseResume: D,
    recordingBlob: w,
    isRecording: s,
    isPaused: b,
    recordingTime: f,
    mediaRecorder: p
  };
}, Tt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20470%20470'%20style='enable-background:new%200%200%20470%20470;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M235,302.296c47.177,0,85.423-38.245,85.423-85.423V85.423C320.423,38.245,282.177,0,235,0s-85.423,38.245-85.423,85.423%20v131.451C149.577,264.051,187.823,302.296,235,302.296z'/%3e%3cpath%20d='M350.423,136.148v30h15v50.726c0,71.915-58.508,130.423-130.423,130.423s-130.423-58.507-130.423-130.423v-50.726h15v-30%20h-45v80.726C74.577,300.273,138.551,369,220,376.589V440h-90.444v30h210.889v-30H250v-63.411%20c81.449-7.589,145.423-76.317,145.423-159.716v-80.726H350.423z'/%3e%3c/g%3e%3c/svg%3e", $t = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.607%2047.607'%20style='enable-background:new%200%200%2047.607%2047.607;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0%20l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3cpath%20d='M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631%20C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3c/g%3e%3c/svg%3e", Vt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20494.148%20494.148'%20style='enable-background:new%200%200%20494.148%20494.148;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124%20c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884%20C432.632,229.572,422.964,213.288,405.284,201.188z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Bt = "data:image/svg+xml,%3csvg%20width='18px'%20height='18px'%20viewBox='0%200%2018%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000000'%20d='M17.85%203.15l-2.99-3A.508.508%200%200%200%2014.5%200H1.4A1.417%201.417%200%200%200%200%201.43v15.14A1.417%201.417%200%200%200%201.4%2018h15.2a1.417%201.417%200%200%200%201.4-1.43V3.5a.47.47%200%200%200-.15-.35zM2%205V3a1%201%200%200%201%201-1h8a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H3a1%201%200%200%201-1-1zm7%2011a4%204%200%201%201%204-4%204%204%200%200%201-4%204z'/%3e%3c/svg%3e", Mt = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2046.734%2046.734'%20style='enable-background:new%200%200%2046.734%2046.734;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M41.346,0H5.388C2.417,0,0,2.417,0,5.388v35.958c0,2.971,2.417,5.388,5.388,5.388h35.958c2.971,0,5.388-2.417,5.388-5.388%20V5.388C46.733,2.417,44.316,0,41.346,0z'/%3e%3c/g%3e%3c/svg%3e", zt = ke.lazy(async () => {
  const { LiveAudioVisualizer: n } = await Promise.resolve().then(() => Xt);
  return { default: n };
}), nr = ({
  onRecordingComplete: n,
  onNotAllowedOrFound: t,
  recorderControls: a,
  audioTrackConstraints: s,
  downloadOnSavePress: u = !1,
  downloadFileExtension: b = "webm",
  showVisualizer: E = !1,
  mediaRecorderOptions: f,
  classes: i
}) => {
  const {
    startRecording: p,
    stopRecording: d,
    togglePauseResume: c,
    recordingBlob: h,
    isRecording: w,
    isPaused: L,
    recordingTime: O,
    mediaRecorder: N
  } = a ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  At(
    s,
    t,
    f
  ), [R, m] = M(!1), D = ($ = !0) => {
    m($), d();
  }, k = async ($) => {
    const W = (await Promise.resolve().then(() => Zt)).createFFmpeg({ log: !1 });
    await W.load();
    const X = "input.webm", z = `output.${b}`;
    W.FS(
      "writeFile",
      X,
      new Uint8Array(await $.arrayBuffer())
    ), await W.run("-i", X, z);
    const ge = W.FS("readFile", z);
    return new Blob([ge.buffer], {
      type: `audio/${b}`
    });
  }, C = async ($) => {
    !crossOriginIsolated && b !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const Z = crossOriginIsolated ? await k($) : $, W = crossOriginIsolated ? b : "webm", X = URL.createObjectURL(Z), z = document.createElement("a");
    z.style.display = "none", z.href = X, z.download = `audio.${W}`, document.body.appendChild(z), z.click(), z.remove();
  };
  return ne(() => {
    (R || a) && h != null && n != null && (n(h), u && C(h));
  }, [h]), /* @__PURE__ */ _e(
    "div",
    {
      className: `audio-recorder ${w ? "recording" : ""} ${(i == null ? void 0 : i.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ H(
          "img",
          {
            src: w ? Bt : Tt,
            className: `audio-recorder-mic ${(i == null ? void 0 : i.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: w ? () => D() : p,
            "data-testid": "ar_mic",
            title: w ? "Save recording" : "Start recording"
          }
        ),
        /* @__PURE__ */ _e(
          "span",
          {
            className: `audio-recorder-timer ${w ? "" : "display-none"} ${(i == null ? void 0 : i.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(O / 60),
              ":",
              String(O % 60).padStart(2, "0")
            ]
          }
        ),
        E ? /* @__PURE__ */ H(
          "span",
          {
            className: `audio-recorder-visualizer ${w ? "" : "display-none"}`,
            children: N && /* @__PURE__ */ H(Lt, { fallback: /* @__PURE__ */ H(jt, {}), children: /* @__PURE__ */ H(
              zt,
              {
                mediaRecorder: N,
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
        ) : /* @__PURE__ */ _e(
          "span",
          {
            className: `audio-recorder-status ${w ? "" : "display-none"} ${(i == null ? void 0 : i.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ H("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ H(
          "img",
          {
            src: L ? Vt : $t,
            className: `audio-recorder-options ${w ? "" : "display-none"} ${(i == null ? void 0 : i.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: c,
            title: L ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ H(
          "img",
          {
            src: Mt,
            className: `audio-recorder-options ${w ? "" : "display-none"} ${(i == null ? void 0 : i.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => D(!1),
            title: "Discard Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
var Oe = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Ft() {
  if (Ze)
    return ie;
  Ze = 1;
  var n = ke, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(f, i, p) {
    var d, c = {}, h = null, w = null;
    p !== void 0 && (h = "" + p), i.key !== void 0 && (h = "" + i.key), i.ref !== void 0 && (w = i.ref);
    for (d in i)
      s.call(i, d) && !b.hasOwnProperty(d) && (c[d] = i[d]);
    if (f && f.defaultProps)
      for (d in i = f.defaultProps, i)
        c[d] === void 0 && (c[d] = i[d]);
    return { $$typeof: t, type: f, key: h, ref: w, props: c, _owner: u.current };
  }
  return ie.Fragment = a, ie.jsx = E, ie.jsxs = E, ie;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function Ut() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ke, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), f = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), L = Symbol.iterator, O = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[O];
      return typeof r == "function" ? r : null;
    }
    var R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          o[l - 1] = arguments[l];
        D("error", e, o);
      }
    }
    function D(e, r, o) {
      {
        var l = R.ReactDebugCurrentFrame, _ = l.getStackAddendum();
        _ !== "" && (r += "%s", o = o.concat([_]));
        var x = o.map(function(v) {
          return String(v);
        });
        x.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var k = !1, C = !1, $ = !1, Z = !1, W = !1, X;
    X = Symbol.for("react.module.reference");
    function z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === b || W || e === u || e === p || e === d || Z || e === w || k || C || $ || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === c || e.$$typeof === E || e.$$typeof === f || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function ge(e, r, o) {
      var l = e.displayName;
      if (l)
        return l;
      var _ = r.displayName || r.name || "";
      return _ !== "" ? o + "(" + _ + ")" : o;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case b:
          return "Profiler";
        case u:
          return "StrictMode";
        case p:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return me(r) + ".Consumer";
          case E:
            var o = e;
            return me(o._context) + ".Provider";
          case i:
            return ge(e, e.render, "ForwardRef");
          case c:
            var l = e.displayName || null;
            return l !== null ? l : q(e.type) || "Memo";
          case h: {
            var _ = e, x = _._payload, v = _._init;
            try {
              return q(v(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ae = 0, De, Ie, Ce, je, Le, Ne, Pe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function at() {
      {
        if (ae === 0) {
          De = console.log, Ie = console.info, Ce = console.warn, je = console.error, Le = console.group, Ne = console.groupCollapsed, Pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
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
        ae++;
      }
    }
    function ot() {
      {
        if (ae--, ae === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: De
            }),
            info: K({}, e, {
              value: Ie
            }),
            warn: K({}, e, {
              value: Ce
            }),
            error: K({}, e, {
              value: je
            }),
            group: K({}, e, {
              value: Le
            }),
            groupCollapsed: K({}, e, {
              value: Ne
            }),
            groupEnd: K({}, e, {
              value: Pe
            })
          });
        }
        ae < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = R.ReactCurrentDispatcher, he;
    function se(e, r, o) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (_) {
            var l = _.stack.trim().match(/\n( *(at )?)/);
            he = l && l[1] || "";
          }
        return `
` + he + e;
      }
    }
    var ve = !1, ce;
    {
      var it = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new it();
    }
    function Te(e, r) {
      if (!e || ve)
        return "";
      {
        var o = ce.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      ve = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ye.current, ye.current = null, at();
      try {
        if (r) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (F) {
              l = F;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (F) {
              l = F;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            l = F;
          }
          e();
        }
      } catch (F) {
        if (F && l && typeof F.stack == "string") {
          for (var y = F.stack.split(`
`), P = l.stack.split(`
`), I = y.length - 1, j = P.length - 1; I >= 1 && j >= 0 && y[I] !== P[j]; )
            j--;
          for (; I >= 1 && j >= 0; I--, j--)
            if (y[I] !== P[j]) {
              if (I !== 1 || j !== 1)
                do
                  if (I--, j--, j < 0 || y[I] !== P[j]) {
                    var B = `
` + y[I].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, B), B;
                  }
                while (I >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ve = !1, ye.current = x, ot(), Error.prepareStackTrace = _;
      }
      var te = e ? e.displayName || e.name : "", Ke = te ? se(te) : "";
      return typeof e == "function" && ce.set(e, Ke), Ke;
    }
    function st(e, r, o) {
      return Te(e, !1);
    }
    function ct(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function le(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, ct(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case p:
          return se("Suspense");
        case d:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return st(e.render);
          case c:
            return le(e.type, r, o);
          case h: {
            var l = e, _ = l._payload, x = l._init;
            try {
              return le(x(_), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, $e = {}, Ve = R.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var r = e._owner, o = le(e.type, e._source, r ? r.type : null);
        Ve.setExtraStackFrame(o);
      } else
        Ve.setExtraStackFrame(null);
    }
    function lt(e, r, o, l, _) {
      {
        var x = Function.call.bind(ue);
        for (var v in e)
          if (x(e, v)) {
            var y = void 0;
            try {
              if (typeof e[v] != "function") {
                var P = Error((l || "React class") + ": " + o + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              y = e[v](r, v, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              y = I;
            }
            y && !(y instanceof Error) && (fe(_), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, v, typeof y), fe(null)), y instanceof Error && !(y.message in $e) && ($e[y.message] = !0, fe(_), m("Failed %s type: %s", o, y.message), fe(null));
          }
      }
    }
    var ut = Array.isArray;
    function be(e) {
      return ut(e);
    }
    function ft(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function dt(e) {
      try {
        return Be(e), !1;
      } catch {
        return !0;
      }
    }
    function Be(e) {
      return "" + e;
    }
    function Me(e) {
      if (dt(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ft(e)), Be(e);
    }
    var ze = R.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Ue;
    function gt(e) {
      if (ue.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mt(e) {
      if (ue.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yt(e, r) {
      typeof e.ref == "string" && ze.current;
    }
    function ht(e, r) {
      {
        var o = function() {
          Fe || (Fe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function vt(e, r) {
      {
        var o = function() {
          Ue || (Ue = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var bt = function(e, r, o, l, _, x, v) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: v,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Et(e, r, o, l, _) {
      {
        var x, v = {}, y = null, P = null;
        o !== void 0 && (Me(o), y = "" + o), mt(r) && (Me(r.key), y = "" + r.key), gt(r) && (P = r.ref, yt(r, _));
        for (x in r)
          ue.call(r, x) && !pt.hasOwnProperty(x) && (v[x] = r[x]);
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (x in I)
            v[x] === void 0 && (v[x] = I[x]);
        }
        if (y || P) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && ht(v, j), P && vt(v, j);
        }
        return bt(e, y, P, _, l, ze.current, v);
      }
    }
    var Ee = R.ReactCurrentOwner, We = R.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var r = e._owner, o = le(e.type, e._source, r ? r.type : null);
        We.setExtraStackFrame(o);
      } else
        We.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ge() {
      {
        if (Ee.current) {
          var e = q(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wt(e) {
      return "";
    }
    var He = {};
    function Rt(e) {
      {
        var r = Ge();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Rt(r);
        if (He[o])
          return;
        He[o] = !0;
        var l = "";
        e && e._owner && e._owner !== Ee.current && (l = " It was passed a child from " + q(e._owner.type) + "."), ee(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), ee(null);
      }
    }
    function Xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            Re(l) && Ye(l, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = N(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var x = _.call(e), v; !(v = x.next()).done; )
              Re(v.value) && Ye(v.value, r);
        }
      }
    }
    function _t(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === c))
          o = r.propTypes;
        else
          return;
        if (o) {
          var l = q(r);
          lt(o, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !we) {
          we = !0;
          var _ = q(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function St(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var l = r[o];
          if (l !== "children" && l !== "key") {
            ee(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    function qe(e, r, o, l, _, x) {
      {
        var v = z(e);
        if (!v) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = wt();
          P ? y += P : y += Ge();
          var I;
          e === null ? I = "null" : be(e) ? I = "array" : e !== void 0 && e.$$typeof === t ? (I = "<" + (q(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : I = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, y);
        }
        var j = Et(e, r, o, _, x);
        if (j == null)
          return j;
        if (v) {
          var B = r.children;
          if (B !== void 0)
            if (l)
              if (be(B)) {
                for (var te = 0; te < B.length; te++)
                  Xe(B[te], e);
                Object.freeze && Object.freeze(B);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(B, e);
        }
        return e === s ? St(j) : _t(j), j;
      }
    }
    function Ot(e, r, o) {
      return qe(e, r, o, !0);
    }
    function xt(e, r, o) {
      return qe(e, r, o, !1);
    }
    var kt = xt, Dt = Ot;
    de.Fragment = s, de.jsx = kt, de.jsxs = Dt;
  }()), de;
}
process.env.NODE_ENV === "production" ? Oe.exports = Ft() : Oe.exports = Ut();
var rt = Oe.exports;
const Wt = (n, t, a, s) => {
  let u = t / (a + s), b = Math.floor(n.length / u);
  u > n.length && (u = n.length, b = 1);
  const E = [];
  for (let f = 0; f < u; f++) {
    let i = 0;
    for (let p = 0; p < b && f * b + p < n.length; p++)
      i += n[f * b + p];
    E.push(i / b);
  }
  return E;
}, Gt = (n, t, a, s, u, b) => {
  const E = t.height / 2, f = t.getContext("2d");
  f && (f.clearRect(0, 0, t.width, t.height), u !== "transparent" && (f.fillStyle = u, f.fillRect(0, 0, t.width, t.height)), n.forEach((i, p) => {
    f.fillStyle = b;
    const d = p * (a + s), c = E - i / 2, h = a, w = i || 1;
    f.beginPath(), f.roundRect ? (f.roundRect(d, c, h, w, 50), f.fill()) : f.fillRect(d, c, h, w);
  }));
}, Ht = ({
  mediaRecorder: n,
  width: t = "100%",
  height: a = "100%",
  barWidth: s = 2,
  gap: u = 1,
  backgroundColor: b = "transparent",
  barColor: E = "rgb(160, 198, 255)",
  fftSize: f = 1024,
  maxDecibels: i = -10,
  minDecibels: p = -90,
  smoothingTimeConstant: d = 0.4
}) => {
  const [c, h] = M(), [w, L] = M(), [O, N] = M(), R = tt(null);
  ne(() => {
    if (!n.stream)
      return;
    const k = new AudioContext(), C = k.createAnalyser();
    N(C), C.fftSize = f, C.minDecibels = p, C.maxDecibels = i, C.smoothingTimeConstant = d;
    const $ = k.createMediaStreamSource(n.stream);
    return $.connect(C), h(k), L($), () => {
      $.disconnect(), C.disconnect(), k.state !== "closed" && k.close();
    };
  }, [n.stream]), ne(() => {
    O && n.state === "recording" && m();
  }, [O, n.state]);
  const m = re(() => {
    if (!O || !c)
      return;
    const k = new Uint8Array(O == null ? void 0 : O.frequencyBinCount);
    n.state === "recording" ? (O == null || O.getByteFrequencyData(k), D(k), requestAnimationFrame(m)) : n.state === "paused" ? D(k) : n.state === "inactive" && c.state !== "closed" && c.close();
  }, [O, c == null ? void 0 : c.state]);
  ne(() => () => {
    c && c.state !== "closed" && c.close(), w == null || w.disconnect(), O == null || O.disconnect();
  }, []);
  const D = (k) => {
    if (!R.current)
      return;
    const C = Wt(
      k,
      R.current.width,
      s,
      u
    );
    Gt(
      C,
      R.current,
      s,
      u,
      b,
      E
    );
  };
  return /* @__PURE__ */ rt.jsx(
    "canvas",
    {
      ref: R,
      width: t,
      height: a,
      style: {
        aspectRatio: "unset"
      }
    }
  );
}, Yt = (n, t, a, s, u) => {
  const b = n.getChannelData(0), E = a / (s + u), f = Math.floor(b.length / E), i = t / 2;
  let p = [], d = 0;
  for (let c = 0; c < E; c++) {
    const h = [];
    let w = 0;
    const L = [];
    let O = 0;
    for (let m = 0; m < f && c * f + m < n.length; m++) {
      const D = b[c * f + m];
      D <= 0 && (h.push(D), w++), D > 0 && (L.push(D), O++);
    }
    const N = h.reduce((m, D) => m + D, 0) / w, R = { max: L.reduce((m, D) => m + D, 0) / O, min: N };
    R.max > d && (d = R.max), Math.abs(R.min) > d && (d = Math.abs(R.min)), p.push(R);
  }
  if (i * 0.8 > d * i) {
    const c = i * 0.8 / d;
    p = p.map((h) => ({
      max: h.max * c,
      min: h.min * c
    }));
  }
  return p;
}, Se = (n, t, a, s, u, b, E, f = 0, i = 1) => {
  const p = t.height / 2, d = t.getContext("2d");
  if (!d)
    return;
  d.clearRect(0, 0, t.width, t.height), u !== "transparent" && (d.fillStyle = u, d.fillRect(0, 0, t.width, t.height));
  const c = (f || 0) / i;
  n.forEach((h, w) => {
    const L = w / n.length, O = c > L;
    d.fillStyle = O && E ? E : b;
    const N = w * (a + s), R = p + h.min, m = a, D = p + h.max - R;
    d.beginPath(), d.roundRect ? (d.roundRect(N, R, m, D, 50), d.fill()) : d.fillRect(N, R, m, D);
  });
}, nt = Nt(
  ({
    blob: n,
    width: t,
    height: a,
    barWidth: s = 2,
    gap: u = 1,
    currentTime: b,
    style: E,
    backgroundColor: f = "transparent",
    barColor: i = "rgb(184, 184, 184)",
    barPlayedColor: p = "rgb(160, 198, 255)"
  }, d) => {
    const c = tt(null), [h, w] = M([]), [L, O] = M(0);
    return Pt(
      d,
      () => c.current,
      []
    ), ne(() => {
      (async () => {
        if (!c.current)
          return;
        if (!n) {
          const R = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          Se(
            R,
            c.current,
            s,
            u,
            f,
            i,
            p
          );
          return;
        }
        const N = await n.arrayBuffer();
        await new AudioContext().decodeAudioData(N, (R) => {
          if (!c.current)
            return;
          O(R.duration);
          const m = Yt(
            R,
            a,
            t,
            s,
            u
          );
          w(m), Se(
            m,
            c.current,
            s,
            u,
            f,
            i,
            p
          );
        });
      })();
    }, [n, c.current]), ne(() => {
      c.current && Se(
        h,
        c.current,
        s,
        u,
        f,
        i,
        p,
        b,
        L
      );
    }, [b, L]), /* @__PURE__ */ rt.jsx(
      "canvas",
      {
        ref: c,
        width: t,
        height: a,
        style: {
          ...E
        }
      }
    );
  }
);
nt.displayName = "AudioVisualizer";
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AudioVisualizer: nt,
  LiveAudioVisualizer: Ht
}, Symbol.toStringTag, { value: "Module" }));
var S;
(function(n) {
  n.LOAD = "LOAD", n.EXEC = "EXEC", n.FFPROBE = "FFPROBE", n.WRITE_FILE = "WRITE_FILE", n.READ_FILE = "READ_FILE", n.DELETE_FILE = "DELETE_FILE", n.RENAME = "RENAME", n.CREATE_DIR = "CREATE_DIR", n.LIST_DIR = "LIST_DIR", n.DELETE_DIR = "DELETE_DIR", n.ERROR = "ERROR", n.DOWNLOAD = "DOWNLOAD", n.PROGRESS = "PROGRESS", n.LOG = "LOG", n.MOUNT = "MOUNT", n.UNMOUNT = "UNMOUNT";
})(S || (S = {}));
const qt = /* @__PURE__ */ (() => {
  let n = 0;
  return () => n++;
})(), Kt = new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"), Jt = new Error("called FFmpeg.terminate()");
var V, Y, U, J, Q, pe, T;
class Qt {
  constructor() {
    G(this, V, null);
    /**
     * #resolves and #rejects tracks Promise resolves and rejects to
     * be called when we receive message from web worker.
     */
    G(this, Y, {});
    G(this, U, {});
    G(this, J, []);
    G(this, Q, []);
    A(this, "loaded", !1);
    /**
     * register worker message event handlers.
     */
    G(this, pe, () => {
      g(this, V) && (g(this, V).onmessage = ({ data: { id: t, type: a, data: s } }) => {
        switch (a) {
          case S.LOAD:
            this.loaded = !0, g(this, Y)[t](s);
            break;
          case S.MOUNT:
          case S.UNMOUNT:
          case S.EXEC:
          case S.FFPROBE:
          case S.WRITE_FILE:
          case S.READ_FILE:
          case S.DELETE_FILE:
          case S.RENAME:
          case S.CREATE_DIR:
          case S.LIST_DIR:
          case S.DELETE_DIR:
            g(this, Y)[t](s);
            break;
          case S.LOG:
            g(this, J).forEach((u) => u(s));
            break;
          case S.PROGRESS:
            g(this, Q).forEach((u) => u(s));
            break;
          case S.ERROR:
            g(this, U)[t](s);
            break;
        }
        delete g(this, Y)[t], delete g(this, U)[t];
      });
    });
    /**
     * Generic function to send messages to web worker.
     */
    G(this, T, ({ type: t, data: a }, s = [], u) => g(this, V) ? new Promise((b, E) => {
      const f = qt();
      g(this, V) && g(this, V).postMessage({ id: f, type: t, data: a }, s), g(this, Y)[f] = b, g(this, U)[f] = E, u == null || u.addEventListener("abort", () => {
        E(new DOMException(`Message # ${f} was aborted`, "AbortError"));
      }, { once: !0 });
    }) : Promise.reject(Kt));
    /**
     * Loads ffmpeg-core inside web worker. It is required to call this method first
     * as it initializes WebAssembly and other essential variables.
     *
     * @category FFmpeg
     * @returns `true` if ffmpeg core is loaded for the first time.
     */
    A(this, "load", ({ classWorkerURL: t, ...a } = {}, { signal: s } = {}) => (g(this, V) || (oe(this, V, t ? new Worker(new URL(t, import.meta.url), {
      type: "module"
    }) : (
      // We need to duplicated the code here to enable webpack
      // to bundle worekr.js here.
      new Worker(new URL(
        /* @vite-ignore */
        "/assets/worker-BAOIWoxA.js",
        import.meta.url
      ), {
        type: "module"
      })
    )), g(this, pe).call(this)), g(this, T).call(this, {
      type: S.LOAD,
      data: a
    }, void 0, s)));
    /**
     * Execute ffmpeg command.
     *
     * @remarks
     * To avoid common I/O issues, ["-nostdin", "-y"] are prepended to the args
     * by default.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // ffmpeg -i video.avi video.mp4
     * await ffmpeg.exec(["-i", "video.avi", "video.mp4"]);
     * const data = ffmpeg.readFile("video.mp4");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */
    A(this, "exec", (t, a = -1, { signal: s } = {}) => g(this, T).call(this, {
      type: S.EXEC,
      data: { args: t, timeout: a }
    }, void 0, s));
    /**
     * Execute ffprobe command.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", ...);
     * // Getting duration of a video in seconds: ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.avi -o output.txt
     * await ffmpeg.ffprobe(["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", "video.avi", "-o", "output.txt"]);
     * const data = ffmpeg.readFile("output.txt");
     * ```
     *
     * @returns `0` if no error, `!= 0` if timeout (1) or error.
     * @category FFmpeg
     */
    A(this, "ffprobe", (t, a = -1, { signal: s } = {}) => g(this, T).call(this, {
      type: S.FFPROBE,
      data: { args: t, timeout: a }
    }, void 0, s));
    /**
     * Terminate all ongoing API calls and terminate web worker.
     * `FFmpeg.load()` must be called again before calling any other APIs.
     *
     * @category FFmpeg
     */
    A(this, "terminate", () => {
      const t = Object.keys(g(this, U));
      for (const a of t)
        g(this, U)[a](Jt), delete g(this, U)[a], delete g(this, Y)[a];
      g(this, V) && (g(this, V).terminate(), oe(this, V, null), this.loaded = !1);
    });
    /**
     * Write data to ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * await ffmpeg.writeFile("video.avi", await fetchFile("../video.avi"));
     * await ffmpeg.writeFile("text.txt", "hello world");
     * ```
     *
     * @category File System
     */
    A(this, "writeFile", (t, a, { signal: s } = {}) => {
      const u = [];
      return a instanceof Uint8Array && u.push(a.buffer), g(this, T).call(this, {
        type: S.WRITE_FILE,
        data: { path: t, data: a }
      }, u, s);
    });
    A(this, "mount", (t, a, s) => {
      const u = [];
      return g(this, T).call(this, {
        type: S.MOUNT,
        data: { fsType: t, options: a, mountPoint: s }
      }, u);
    });
    A(this, "unmount", (t) => {
      const a = [];
      return g(this, T).call(this, {
        type: S.UNMOUNT,
        data: { mountPoint: t }
      }, a);
    });
    /**
     * Read data from ffmpeg.wasm.
     *
     * @example
     * ```ts
     * const ffmpeg = new FFmpeg();
     * await ffmpeg.load();
     * const data = await ffmpeg.readFile("video.mp4");
     * ```
     *
     * @category File System
     */
    A(this, "readFile", (t, a = "binary", { signal: s } = {}) => g(this, T).call(this, {
      type: S.READ_FILE,
      data: { path: t, encoding: a }
    }, void 0, s));
    /**
     * Delete a file.
     *
     * @category File System
     */
    A(this, "deleteFile", (t, { signal: a } = {}) => g(this, T).call(this, {
      type: S.DELETE_FILE,
      data: { path: t }
    }, void 0, a));
    /**
     * Rename a file or directory.
     *
     * @category File System
     */
    A(this, "rename", (t, a, { signal: s } = {}) => g(this, T).call(this, {
      type: S.RENAME,
      data: { oldPath: t, newPath: a }
    }, void 0, s));
    /**
     * Create a directory.
     *
     * @category File System
     */
    A(this, "createDir", (t, { signal: a } = {}) => g(this, T).call(this, {
      type: S.CREATE_DIR,
      data: { path: t }
    }, void 0, a));
    /**
     * List directory contents.
     *
     * @category File System
     */
    A(this, "listDir", (t, { signal: a } = {}) => g(this, T).call(this, {
      type: S.LIST_DIR,
      data: { path: t }
    }, void 0, a));
    /**
     * Delete an empty directory.
     *
     * @category File System
     */
    A(this, "deleteDir", (t, { signal: a } = {}) => g(this, T).call(this, {
      type: S.DELETE_DIR,
      data: { path: t }
    }, void 0, a));
  }
  on(t, a) {
    t === "log" ? g(this, J).push(a) : t === "progress" && g(this, Q).push(a);
  }
  off(t, a) {
    t === "log" ? oe(this, J, g(this, J).filter((s) => s !== a)) : t === "progress" && oe(this, Q, g(this, Q).filter((s) => s !== a));
  }
}
V = new WeakMap(), Y = new WeakMap(), U = new WeakMap(), J = new WeakMap(), Q = new WeakMap(), pe = new WeakMap(), T = new WeakMap();
var xe;
(function(n) {
  n.MEMFS = "MEMFS", n.NODEFS = "NODEFS", n.NODERAWFS = "NODERAWFS", n.IDBFS = "IDBFS", n.WORKERFS = "WORKERFS", n.PROXYFS = "PROXYFS";
})(xe || (xe = {}));
const Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get FFFSType() {
    return xe;
  },
  FFmpeg: Qt
}, Symbol.toStringTag, { value: "Module" }));
export {
  nr as AudioRecorder,
  At as useAudioRecorder
};
