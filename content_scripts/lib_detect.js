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
                bindArray.forEach(function(cur,ind,array){//绑定对象数组
                    var name = '';
                    if (cur.context.appName){
                        name = cur.context.appName;
                    }else if (cur.context.el){
                        var id = cur.context.el["id"];
                        var iInx = id.indexOf("view");
                        if (iInx != -1){
                            name = id.substr(0,iInx);
                        }else{
                            name = id;
                        }
                    }else{
                        name = '未确定';
                    }
                    vstr += name+",";
                });
                str += current + ":" + vstr + ";";
            });
            console.log("load...over...");
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
