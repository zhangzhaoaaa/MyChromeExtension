var addLibrary = function(library,arr) {

    var container = document.createElement('div');

    var link = document.createElement('a');
    link.href = '#';
    link.innerHTML = library;
    container.appendChild(link);

    var bindArray = arr[library];
    var link1 = document.createElement('a');
    bindArray.forEach(function(current,index,bindArr){
        link1.href = '#';
        link1.innerHTML = current["callback"];
    });
    container.appendChild(link1);


    document.getElementById('chrome_extension_panleList').appendChild(container);

};

document.getElementById("start").addEventListener('click', function () {
    if (localStorage.getItem('libraries')!= null){
        var libraries = localStorage.getItem('libraries');
        if (libraries === null) return;
        //window.location.reload();
        //$('#chrome_extension_panleList').empty();
        libraries = JSON.parse(libraries);
        Object.keys(libraries).forEach(function(current,index,arr){
            addLibrary(current,arr);
        });
    }
});
