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
            var encoded = [],str = "";
            Object.keys(libraries).forEach(function(current,index,arr){
                var bindArray = libraries[current];
                var obj = {},
                vstr = "";
                bindArray.forEach(function(cur,ind,array){
                    vstr += Object.keys(cur.context)[0]+",";
                });
                str += current + ":" + vstr + ";";
            });
            console.log(str);
            return str;
        };
        var detectLibraries = function() {
            var libraries = null;
            if (window.EB_Common && window.EB_Common.EventProxy){
                libraries = window.EB_Common.EventProxy._events;
            }
            return libraries;
        };

        if (window === top) {
            var libs = detectLibraries();
            if (libs != null && libs!=undefined) {
                document.getElementById('d41d8cd98f00b204e9800998ecf8427e_lib_detect').content = encodeLibraries(libs);
            }
        }
    }

    window.setTimeout(function() {
        wait();
    },2000);

})();
