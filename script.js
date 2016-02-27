setTimeout(function() {
    console.log('page javascript sending message');
    window.postMessage({ type: 'page_js_type',
                         text: "Hello from the page's javascript!"},
                       '*' /* targetOrigin: any */);
}, 2000);
