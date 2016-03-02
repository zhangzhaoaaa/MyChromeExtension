/**
 * Created by mike on 16-2-29.
 */
/*
window.addEventListener('myCustomEvent', function(event) {
    console.log('content_script.js got message:', event);
});

var customEvent = new CustomEvent('build', { 'detail': "dddddxxx"});
customEvent.initEvent('myCustomEvent', true, true);
document.dispatchEvent(customEvent);*/
/*
window.addEventListener('message', function(event) {
    console.log('content_script.js got message:', event);
    document.body.innerHTML = event.data.type+","+event.data.text;

});

setTimeout(function() {
    console.log('page javascript sending message');
    window.postMessage({ type: 'page_js_type',
            text: {"a":1111}
        },
        '*' /!* targetOrigin: any *!/);
}, 2000);*/
var common = [{
    name:'china'
},
    {
        name:'usa'
    }
]

/*function test(){

};
test.name = "mike";

test.prototype.getAge = function(){
    console.log('age....')
}
var t = new test();
console.log(test,t);*/

var sfFunc = function(){};
sfFunc.ename = 'segmentfault';
console.log(sfFunc);
