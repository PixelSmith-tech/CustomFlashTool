console.log("JS loaded");

function sendAction(action) {
    console.log("Sending:", action);
    window.chrome.webview.postMessage({
        action: action
    });
}
