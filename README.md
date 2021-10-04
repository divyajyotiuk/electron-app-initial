# electron-app-initial
## Branch - simple-electron-app

Electron fiddle - electron sandbox - good for quick POCs
Comes with 4 sections - main.js, renderer.js, index.html, preload.js

https://www.electronjs.org/docs/latest/

**Note**: Since Electron embeds Node.js into its binary, the version of Node.js running your code is unrelated to the version running on your system.


Start command 

```
{
  "scripts": {
    "start": "electron ."
  }
}
```

### To open webpage in browser window, two Electron modules are required -

- The app module, which controls your application's event lifecycle.
- The BrowserWindow module, which creates and manages application windows.


You can use the process global's platform attribute to run code specifically for certain operating systems.
Windows cannot be created before the ready event is fired


You can't edit the DOM from the main process because it has no access to the renderer's document context. They're in entirely different processes!
A preload script runs before the renderer process is loaded, and has access to both renderer globals (e.g. window and document) and a Node.js environment.

### Process Model
https://www.electronjs.org/docs/latest/tutorial/process-model

### Packaging and distributing electron app
https://www.electronjs.org/docs/latest/tutorial/quick-start#package-and-distribute-your-application

### Troubleshooting
https://www.electronjs.org/docs/latest/tutorial/installation#troubleshooting








