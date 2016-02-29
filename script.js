setTimeout(function() {
    console.log('page javascript sending message');
    var info = 'no _events';
    if (EB_Common && EB_Common.EventProxy){
            if (EB_Common.EventProxy._events){
                Object.keys(EB_Common.EventProxy._events).forEach(function(current,index,arr){
                    info += current;
                });
            }
    }
    window.postMessage({ type: 'page_js_type',
                         text: info
                        },
                       '*' /* targetOrigin: any */);
}, 2000);
