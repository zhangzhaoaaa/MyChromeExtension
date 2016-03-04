var addLibrary = function(library,arr) {

    var container = document.createElement('tr');

    var td1 = document.createElement('td');
    td1.innerHTML = library;
    container.appendChild(td1);

    var bindArray = arr;

    if (bindArray.length > 0){
        var td2 = document.createElement('td');
        bindArray.forEach(function(current,index,bindArr){
            var span = document.createElement('span');
            span.style.cssText="margin:5px";
            span.innerHTML = current;
            td2.appendChild(span);
        });
        container.appendChild(td2);
    }
    document.getElementById('chrome_tbody').appendChild(container);

};

var clearListeners = function (){
    var allRows = document.getElementById("chrome_tbody").getElementsByTagName('tr');
    if(allRows.length>1) {
        for (var i = 1, len = allRows.length; i < len; i++) {
            document.getElementById("chrome_tbody").deleteRow(1);
        }
    }
};

document.getElementById("clear").addEventListener('click', function () {
    clearListeners();
});

document.getElementById("reload").addEventListener('click', function () {
    chrome.devtools.inspectedWindow.eval("addRegister()",
        { useContentScriptContext: true });
});

document.getElementById("start").addEventListener('click', function () {
    var libraries = localStorage.getItem('libraries');
    clearListeners();
    setTimeout(function(){
        if (libraries != null){
            var libArr = libraries.split(";");
            var keys = [];
            libArr.forEach(function(current,index){
                if (current){
                    var key1 = {};
                    var a = current.split(":");
                    if (a.length > 0){
                        key1[a[0]] = a[1];
                        keys.push(key1);
                    }
                }
            });
            keys.sort(function(a,b){
                return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
            });
            keys.forEach(function(current,index,arr){ //;
                if (Object.keys(current).length > 0){
                    var listenName = Object.keys(current)[0];
                    var appNames = current[listenName];
                    var appNameArray = appNames.split(',');
                    addLibrary(listenName,appNameArray);
                }
            });
        }
    },200);

});
