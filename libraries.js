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
    document.getElementById('chrome_extension_panleList').appendChild(container);

};

document.getElementById("start").addEventListener('click', function () {

    var libraries = localStorage.getItem('libraries');
    //window.location.reload();
    var nodes = document.getElementById("chrome_extension_panleList").childNodes;
    if (nodes.length > 0){
        for (var i = 1,len = nodes.length;i < len;i++){
            document.getElementById("chrome_extension_panleList").removeChild(nodes[i]);
        }
    }
    setTimeout(function(){
        if (libraries != null){
            var libArr = libraries.split(";");
            libArr.forEach(function(current,index,arr){ //;
                var one = current.split(':');
                var two = one[1].split(',');
                addLibrary(one[0],two);
            });
        }
    },200);

});
