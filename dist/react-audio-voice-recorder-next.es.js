(function(){"use strict";(r=>{try{if(typeof window>"u")return;var e=document.createElement("style");e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})(".audio-recorder{background-color:#ebebeb;box-shadow:0 2px 5px #bebebe;border-radius:20px;box-sizing:border-box;color:#000;width:40px;display:flex;align-items:center;transition:all .2s ease-in;-webkit-tap-highlight-color:transparent}.audio-recorder-mic{box-sizing:content-box;cursor:pointer;height:16px;color:#000;padding:12px}.audio-recorder .audio-recorder-mic{border-radius:20px}.audio-recorder.recording .audio-recorder-mic{border-radius:0}.audio-recorder-timer,.audio-recorder-status{color:#000;margin-left:10px;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;font-weight:400;line-height:1}.audio-recorder-status{margin-left:15px;display:flex;align-items:baseline;flex-grow:1;animation-name:fading-ar-status;animation-duration:2s;animation-iteration-count:infinite}.audio-recorder-status-dot{background-color:#d00;border-radius:50%;height:10px;width:9px;margin-right:5px}.audio-recorder-options{box-sizing:content-box;height:16px;cursor:pointer;padding:12px 6px 12px 12px}.audio-recorder-options~.audio-recorder-options{padding:12px 12px 12px 6px;border-radius:0 5px 5px 0}.recording{border-radius:12px;width:300px;transition:all .2s ease-out}.display-none{display:none}.audio-recorder-visualizer{margin-left:15px;flex-grow:1;align-self:center;display:flex;align-items:center}@keyframes fading-ar-status{0%{opacity:1}50%{opacity:0}to{opacity:1}}")})();
import { jsxs as A, jsx as c, Fragment as $ } from "react/jsx-runtime";
import M, { useState as p, useCallback as S, useEffect as P, Suspense as T } from "react";
const _ = (v, w, f) => {
  const [k, x] = p(!1), [d, l] = p(!1), [B, e] = p(0), [t, b] = p(), [g, r] = p(), [o, V] = p(), u = S(() => {
    const i = setInterval(() => {
      e((n) => n + 1);
    }, 1e3);
    r(i);
  }, [e, r]), m = S(() => {
    g != null && clearInterval(g), r(void 0);
  }, [g, r]), G = S(() => {
    g == null && navigator.mediaDevices.getUserMedia({ audio: v ?? !0 }).then((i) => {
      x(!0);
      const n = new MediaRecorder(
        i,
        f
      );
      b(n), n.start(), u(), n.addEventListener("dataavailable", (s) => {
        V(s.data), n.stream.getTracks().forEach((C) => C.stop()), b(void 0);
      });
    }).catch((i) => {
      console.log(i.name, i.message, i.cause), w == null || w(i);
    });
  }, [
    g,
    x,
    b,
    u,
    V,
    w,
    f
  ]), I = S(() => {
    t == null || t.stop(), m(), e(0), x(!1), l(!1);
  }, [
    t,
    e,
    x,
    l,
    m
  ]), y = S(() => {
    d ? (l(!1), t == null || t.resume(), u()) : (l(!0), m(), t == null || t.pause());
  }, [t, l, u, m]);
  return {
    startRecording: G,
    stopRecording: I,
    togglePauseResume: y,
    recordingBlob: o,
    isRecording: k,
    isPaused: d,
    recordingTime: B,
    mediaRecorder: t
  };
}, L = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20470%20470'%20style='enable-background:new%200%200%20470%20470;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M235,302.296c47.177,0,85.423-38.245,85.423-85.423V85.423C320.423,38.245,282.177,0,235,0s-85.423,38.245-85.423,85.423%20v131.451C149.577,264.051,187.823,302.296,235,302.296z'/%3e%3cpath%20d='M350.423,136.148v30h15v50.726c0,71.915-58.508,130.423-130.423,130.423s-130.423-58.507-130.423-130.423v-50.726h15v-30%20h-45v80.726C74.577,300.273,138.551,369,220,376.589V440h-90.444v30h210.889v-30H250v-63.411%20c81.449-7.589,145.423-76.317,145.423-159.716v-80.726H350.423z'/%3e%3c/g%3e%3c/svg%3e", D = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2047.607%2047.607'%20style='enable-background:new%200%200%2047.607%2047.607;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0%20l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3cpath%20d='M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631%20C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z'/%3e%3c/g%3e%3c/svg%3e", E = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20494.148%20494.148'%20style='enable-background:new%200%200%20494.148%20494.148;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124%20c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884%20C432.632,229.572,422.964,213.288,405.284,201.188z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", H = "data:image/svg+xml,%3csvg%20width='18px'%20height='18px'%20viewBox='0%200%2018%2018'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23000000'%20d='M17.85%203.15l-2.99-3A.508.508%200%200%200%2014.5%200H1.4A1.417%201.417%200%200%200%200%201.43v15.14A1.417%201.417%200%200%200%201.4%2018h15.2a1.417%201.417%200%200%200%201.4-1.43V3.5a.47.47%200%200%200-.15-.35zM2%205V3a1%201%200%200%201%201-1h8a1%201%200%200%201%201%201v2a1%201%200%200%201-1%201H3a1%201%200%200%201-1-1zm7%2011a4%204%200%201%201%204-4%204%204%200%200%201-4%204z'/%3e%3c/svg%3e", N = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2046.734%2046.734'%20style='enable-background:new%200%200%2046.734%2046.734;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M41.346,0H5.388C2.417,0,0,2.417,0,5.388v35.958c0,2.971,2.417,5.388,5.388,5.388h35.958c2.971,0,5.388-2.417,5.388-5.388%20V5.388C46.733,2.417,44.316,0,41.346,0z'/%3e%3c/g%3e%3c/svg%3e", F = M.lazy(async () => {
  const { LiveAudioVisualizer: v } = await import("./react-audio-visualize.es-D9-iDWW-.js");
  return { default: v };
}), W = ({
  onRecordingComplete: v,
  onNotAllowedOrFound: w,
  recorderControls: f,
  audioTrackConstraints: k,
  downloadOnSavePress: x = !1,
  downloadFileExtension: d = "webm",
  showVisualizer: l = !1,
  mediaRecorderOptions: B,
  classes: e
}) => {
  const {
    startRecording: t,
    stopRecording: b,
    togglePauseResume: g,
    recordingBlob: r,
    isRecording: o,
    isPaused: V,
    recordingTime: u,
    mediaRecorder: m
  } = f ?? // eslint-disable-next-line react-hooks/rules-of-hooks
  _(
    k,
    w,
    B
  ), [G, I] = p(!1), y = (s = !0) => {
    I(s), b();
  }, i = async (s) => {
    const h = (await import("./index-D8kRViJr.js")).createFFmpeg({ log: !1 });
    await h.load();
    const R = "input.webm", a = `output.${d}`;
    h.FS(
      "writeFile",
      R,
      new Uint8Array(await s.arrayBuffer())
    ), await h.run("-i", R, a);
    const z = h.FS("readFile", a);
    return new Blob([z.buffer], {
      type: `audio/${d}`
    });
  }, n = async (s) => {
    !crossOriginIsolated && d !== "webm" && console.warn(
      'This website is not "cross-origin isolated". Audio will be downloaded in webm format, since mp3/wav encoding requires cross origin isolation. Please visit https://web.dev/cross-origin-isolation-guide/ and https://web.dev/coop-coep/ for information on how to make your website "cross-origin isolated"'
    );
    const C = crossOriginIsolated ? await i(s) : s, h = crossOriginIsolated ? d : "webm", R = URL.createObjectURL(C), a = document.createElement("a");
    a.style.display = "none", a.href = R, a.download = `audio.${h}`, document.body.appendChild(a), a.click(), a.remove();
  };
  return P(() => {
    (G || f) && r != null && v != null && (v(r), x && n(r));
  }, [r]), /* @__PURE__ */ A(
    "div",
    {
      className: `audio-recorder ${o ? "recording" : ""} ${(e == null ? void 0 : e.AudioRecorderClass) ?? ""}`,
      "data-testid": "audio_recorder",
      children: [
        /* @__PURE__ */ c(
          "img",
          {
            src: o ? H : L,
            className: `audio-recorder-mic ${(e == null ? void 0 : e.AudioRecorderStartSaveClass) ?? ""}`,
            onClick: o ? () => y() : t,
            "data-testid": "ar_mic",
            title: o ? "Save recording" : "Start recording"
          }
        ),
        /* @__PURE__ */ A(
          "span",
          {
            className: `audio-recorder-timer ${o ? "" : "display-none"} ${(e == null ? void 0 : e.AudioRecorderTimerClass) ?? ""}`,
            "data-testid": "ar_timer",
            children: [
              Math.floor(u / 60),
              ":",
              String(u % 60).padStart(2, "0")
            ]
          }
        ),
        l ? /* @__PURE__ */ c(
          "span",
          {
            className: `audio-recorder-visualizer ${o ? "" : "display-none"}`,
            children: m && /* @__PURE__ */ c(T, { fallback: /* @__PURE__ */ c($, {}), children: /* @__PURE__ */ c(
              F,
              {
                mediaRecorder: m,
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
        ) : /* @__PURE__ */ A(
          "span",
          {
            className: `audio-recorder-status ${o ? "" : "display-none"} ${(e == null ? void 0 : e.AudioRecorderStatusClass) ?? ""}`,
            children: [
              /* @__PURE__ */ c("span", { className: "audio-recorder-status-dot" }),
              "Recording"
            ]
          }
        ),
        /* @__PURE__ */ c(
          "img",
          {
            src: V ? E : D,
            className: `audio-recorder-options ${o ? "" : "display-none"} ${(e == null ? void 0 : e.AudioRecorderPauseResumeClass) ?? ""}`,
            onClick: g,
            title: V ? "Resume recording" : "Pause recording",
            "data-testid": "ar_pause"
          }
        ),
        /* @__PURE__ */ c(
          "img",
          {
            src: N,
            className: `audio-recorder-options ${o ? "" : "display-none"} ${(e == null ? void 0 : e.AudioRecorderDiscardClass) ?? ""}`,
            onClick: () => y(!1),
            title: "Discard Recording",
            "data-testid": "ar_cancel"
          }
        )
      ]
    }
  );
};
export {
  W as AudioRecorder,
  _ as useAudioRecorder
};
