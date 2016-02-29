console.log('page javascript sending message');
if (EB_Common && EB_Common.EventProxy) {
    /*window.postMessage({
        type : EB_Common.EventProxy
    },
    '*');*/
    var customEvent = new CustomEvent('build', {
        'detail' : EB_Common.EventProxy
    });
    customEvent.initEvent('myCustomEvent', true, true);
    document.dispatchEvent(customEvent);
}

