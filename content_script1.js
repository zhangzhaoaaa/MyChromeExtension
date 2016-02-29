var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};

window.addEventListener('myCustomEvent', function(event) {
    console.log('content_script.js got message:', event);
    var info;
    /*if (event.type){
        if (event.type._events){
            Object.keys(event.type._events).forEach(function(current,index,arr){
                info += current;
            });
        }
        document.body.innerHTML = info;
    }*/
});


