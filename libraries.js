var addLibrary = function(library) {

    var container = document.createElement('div');

    var link = document.createElement('a');
    link.href = '#';
    link.innerHTML = library;

    container.appendChild(link);


    document.getElementById('chrome_extension_panleList').appendChild(container);

};

document.getElementById("start").addEventListener('click', function () {
    var libraries = localStorage.getItem('libraries').split(',');
    if (libraries === null) return;
    //window.location.reload();
    //$('#chrome_extension_panleList').empty();
    for (var i=0,j=libraries.length; i<j; i++) {
        addLibrary(libraries[i]);
    }
});
