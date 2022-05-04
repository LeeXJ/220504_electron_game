// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
"use strict";
let canvas = document.getElementById("GLCanvas");
let gl = canvas.getContext("webgl2") ||
    canvas.getContext("experimental-webgl2");
if (gl !== null) {
    gl.clearColor(0.0, 0.8, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
document.write("<br><b>The above is WebGL draw area!</b>");