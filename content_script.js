var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

window.addEventListener('message', function(event) {
    console.log('content_script.js got message:', event);
    document.body.innerHTML = event.data.type+","+event.data.text;
    
});


