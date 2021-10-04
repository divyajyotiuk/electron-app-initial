# electron-app-initial
## Branch - simple-electron-app

Electron fiddle - electron sandbox - good for quick POCs
Comes with 4 sections - main.js, renderer.js, index.html, preload.js

https://www.electronjs.org/docs/latest/

**Dev Note**: Since Electron embeds Node.js into its binary, the version of Node.js running your code is unrelated to the version running on your system.


Start command 

```
{
  "scripts": {
    "start": "electron ."
  }
}
```

### To open webpage in browser window, two Electron modules are required -

- The `app` module, which controls your application's event lifecycle.
- The `BrowserWindow` module, which creates and manages application windows.


You can use the process global's platform attribute to run code specifically for certain operating systems.
Windows cannot be created before the ready event is fired


You can't edit the DOM from the main process because it has no access to the renderer's document context. They're in entirely different processes!
A preload script runs before the renderer process is loaded, and has access to both renderer globals (e.g. window and document) and a Node.js environment.

Each instance of the `BrowserWindow` class creates an application window that loads a web page in a separate renderer process. When a `BrowserWindow` instance is destroyed, its corresponding renderer process gets terminated as well.

**The renderer process**

a renderer is responsible for rendering web content
Therefore, all user interfaces and app functionality within a single browser window should be written with the same tools and paradigms that you use on the web.
Moreover, this also means that the renderer has no direct access to require or other Node.js APIs
- An HTML file is your entry point for the renderer process.
- UI styling is added through Cascading Style Sheets (CSS).
- Executable JavaScript code can be added through `<script>` elements.
In order to directly include NPM modules in the renderer, you must use the same bundler toolchains (for example, webpack or parcel) that you use on the web.

**Preload Scripts**

These scripts run within the renderer context, but are granted more privileges by having access to Node.js APIs.
Although preload scripts share a window global with the renderer they're attached to, you cannot directly attach any variables from the preload script to window because of the `contextIsolation` default. See `contextBridge`.
https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

### Process Model
https://www.electronjs.org/docs/latest/tutorial/process-model

### Packaging and distributing electron app
https://www.electronjs.org/docs/latest/tutorial/quick-start#package-and-distribute-your-application

### Troubleshooting
https://www.electronjs.org/docs/latest/tutorial/installation#troubleshooting


### Main Process Modules

#### `app`
https://www.electronjs.org/docs/latest/api/app/ <br>
Control application’s event lifecycle <br>
To add custom application behaviour (for instance, programatically quitting your application) <br>
Usage - Events, methods, properties <br>

#### BrowserWindow
(EventEmitter) <br>
https://www.electronjs.org/docs/latest/api/browser-window/ <br>
To create and control browser windows <br>
Important - options, events, static methods <br>
Look platform wise behaviour <br>

#### webContents
(EventEmitter) <br>
https://www.electronjs.org/docs/latest/api/web-contents/ <br>
`win.webContents` - readonly <br>
Usage - win.webContents.on(‘some-event’, ()=>{})
	win.webContents.method()
	win.webContents.property 
  <br>
```
const { webContents } = require('electron')  // as a module
```
Is a property of BrowserWindow <br>
To render and control web pages <br>
WebContents class is not exported from the 'electron' module. It is only available as a return value of other methods in the Electron API.









