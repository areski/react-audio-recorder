import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts';
import path from 'path'

const injectCodeFunction = (cssCode) => {
  console.log('injectCodeFunction', cssCode);
  try {
    if (typeof window === 'undefined') return;

    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(elementStyle);
  } catch (e) {
    console.error('vite-plugin-css-injected-by-js', e);
  }
}

// Custom plugin to handle worker bundling
const inlineWorker = () => ({
  name: 'inline-worker',
  enforce: 'pre' as const,
  transform(code, id) {
    console.log('transform', id);
    if (id.includes('worker')) {
      return {
        code: `
          const workerCode = \`(function(){"use strict";const i="https://unpkg.com/@ffmpeg/core@0.12.9/dist/umd/ffmpeg-core.js";var E;(function(t){t.LOAD="LOAD",t.EXEC="EXEC",t.FFPROBE="FFPROBE",t.WRITE_FILE="WRITE_FILE",t.READ_FILE="READ_FILE",t.DELETE_FILE="DELETE_FILE",t.RENAME="RENAME",t.CREATE_DIR="CREATE_DIR",t.LIST_DIR="LIST_DIR",t.DELETE_DIR="DELETE_DIR",t.ERROR="ERROR",t.DOWNLOAD="DOWNLOAD",t.PROGRESS="PROGRESS",t.LOG="LOG",t.MOUNT="MOUNT",t.UNMOUNT="UNMOUNT"})(E||(E={}));const f=new Error("unknown message type"),a=new Error("ffmpeg is not loaded, call \`await ffmpeg.load()\` first"),u=new Error("failed to import ffmpeg-core.js");let r;const O=async({coreURL:t,wasmURL:n,workerURL:e})=>{const o=!r;try{t||(t=i),importScripts(t)}catch{if((!t||t===i)&&(t=i.replace("/umd/","/esm/")),self.createFFmpegCore=(await import(t)).default,!self.createFFmpegCore)throw u}const s=t,c=n||t.replace(/.js$/g,".wasm"),p=e||t.replace(/.js$/g,".worker.js");return r=await self.createFFmpegCore({mainScriptUrlOrBlob:\`\${s}#\${btoa(JSON.stringify({wasmURL:c,workerURL:p}))}\`}),r.setLogger(R=>self.postMessage({type:E.LOG,data:R})),r.setProgress(R=>self.postMessage({type:E.PROGRESS,data:R})),o},m=({args:t,timeout:n=-1})=>{r.setTimeout(n),r.exec(...t);const e=r.ret;return r.reset(),e},l=({args:t,timeout:n=-1})=>{r.setTimeout(n),r.ffprobe(...t);const e=r.ret;return r.reset(),e},D=({path:t,data:n})=>(r.FS.writeFile(t,n),!0),S=({path:t,encoding:n})=>r.FS.readFile(t,{encoding:n}),I=({path:t})=>(r.FS.unlink(t),!0),L=({oldPath:t,newPath:n})=>(r.FS.rename(t,n),!0),N=({path:t})=>(r.FS.mkdir(t),!0),A=({path:t})=>{const n=r.FS.readdir(t),e=[];for(const o of n){const s=r.FS.stat(\`\${t}/\${o}\`),c=r.FS.isDir(s.mode);e.push({name:o,isDir:c})}return e},k=({path:t})=>(r.FS.rmdir(t),!0),w=({fsType:t,options:n,mountPoint:e})=>{const o=t,s=r.FS.filesystems[o];return s?(r.FS.mount(s,n,e),!0):!1},b=({mountPoint:t})=>(r.FS.unmount(t),!0);self.onmessage=async({data:{id:t,type:n,data:e}})=>{const o=[];let s;try{if(n!==E.LOAD&&!r)throw a;switch(n){case E.LOAD:s=await O(e);break;case E.EXEC:s=m(e);break;case E.FFPROBE:s=l(e);break;case E.WRITE_FILE:s=D(e);break;case E.READ_FILE:s=S(e);break;case E.DELETE_FILE:s=I(e);break;case E.RENAME:s=L(e);break;case E.CREATE_DIR:s=N(e);break;case E.LIST_DIR:s=A(e);break;case E.DELETE_DIR:s=k(e);break;case E.MOUNT:s=w(e);break;case E.UNMOUNT:s=b(e);break;default:throw f}}catch(c){self.postMessage({id:t,type:E.ERROR,data:c.toString()});return}s instanceof Uint8Array&&o.push(s.buffer),self.postMessage({id:t,type:n,data:s},o)}})();\`;
          const blob = new Blob([workerCode], { type: 'text/javascript' });
          export default function createWorker() {
            return new Worker(URL.createObjectURL(blob));
          }
        `,
        map: null
      };
    }
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin({ injectCodeFunction }),
    dts({
      insertTypesEntry: true,
    }),
    inlineWorker()
    // {
    //   name: "configure-response-headers",
    //   configureServer: (server) => {
    //     server.middlewares.use((_req, res, next) => {
    //       res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    //       res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    //       next();
    //     });
    //   },
    // },
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'AudioRecorder',
      fileName: (format) => `react-audio-voice-recorder-next.${format}.js`,
      formats: ["es"]
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        format: 'es',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
        inlineDynamicImports: true,
        manualChunks: null,
      },
    }
  },
})
