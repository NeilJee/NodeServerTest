    var http = require("http");
    var url=require("url");


    function start(route,handle) {
        http.createServer(onRequest).listen(1337, "127.0.0.1");
        console.log('Server running at http://127.0.0.1:1337/');

        function onRequest(request,response){
            /*var postData="";*/
            var pathname=url.parse(request.url).pathname;
            console.log("Request for "+pathname+ " Reveived");
            route(pathname,handle,response,request);

/*            request.setEncoding("utf8");

            request.addListener("data",function(postDataChunk){
                postData+=postDataChunk;
                console.log("Received POST data chunk '"+postDataChunk+"'.");
            });

            request.addListener("end",function(){
                route(pathname,handle,response,postData);
            })*/




        }
    }
    exports.start=start;


