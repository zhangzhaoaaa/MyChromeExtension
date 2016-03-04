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
var common = {
    getName: function () {
        console.log('xxx');
    }
}
var EB_Common = {};
EB_Common.EventProxy = {};
EB_Common.EventProxy._events = {
    axa:[
        {
            context:{
                templateApp:"k"
            }
        },
        {
            context:{
                testApp:"k"
            }
        }
    ]
}

//console.log(EB_Common.EventProxy._events.axa[0].callback.toString());
/*function test(){

};
test.name = "mike";

test.prototype.getAge = function(){
    console.log('age....')
}
var t = new test();
console.log(test,t);*/

/*var sfFunc = function(){};
sfFunc.ename = 'segmentfault';
console.log(sfFunc);*/

/*
var syntax = esprima.parse('EB_Common.EventProxy._events.axa[0].callback.toString()');
console.log(syntax);*/

var array = ["c1:cc,ccc","a1:aa,aaa","b1:bb,bbb"];

var keys = [];
array.forEach(function(current,index){
    var key1 = {};
    var a = current.split(":");
    key1[a[0]] = a[1];
    keys.push(key1);
});
keys.sort(function(a,b){
    return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
});
console.log(keys);