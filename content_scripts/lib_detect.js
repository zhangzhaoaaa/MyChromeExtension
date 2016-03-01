/**
    description: Injected into document by inject.js to create a meta element with
                 any recognized JS libraries.
**/
(function() {

    /**
     * Returns library, version pairs in format:
     * libraryName:version,libraryName:version...
     */
     function wait() {
        var encodeLibraries = function(libraries) {
            var encoded = [];
            for (var i=0; i<libraries.length; i++) {
                encoded.push(libraries[i].name);
            }
            return encoded.join(',');
        };
        var detectLibraries = function() {
            var libraries = [{name:'mandy'},{name:'mike'}];
            if (window.common){
                libraries = window.common;
            }
            return libraries;
        };

        if (window === top) {
            var libs = detectLibraries();
            if (libs.length > 0) {
                document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect').content = encodeLibraries(libs);
            }
        }
    }

    window.setTimeout(function() {
        wait();
    },2000);

})();
