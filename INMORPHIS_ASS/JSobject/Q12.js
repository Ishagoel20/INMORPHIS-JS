/*Write a JavaScript function to parse an URL.
Sample Object :
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python
'));
Expected Output :
[object Object] {
file: "search",
hash: "",
host: "github.com",
params: [object Object] {
q: "python",
utf8: "%E2%9C%93"
},
path: "/pubnub/python/search",
port: "",
protocol: "https",
query: "?utf8=%E2%9C%93&q=python",
relative: "/pubnub/python/search?utf8=%E2%9C%93&q=python",
segments: ["pubnub", "python", "search"],
source: "https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python"
}*/


function parse_URL(url) {
    var parser = document.createElement('a');
    parser.href = url;

    var queryParams = {};
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return {
        file: parser.pathname.split('/').pop(),
        hash: parser.hash,
        host: parser.host,
        params: queryParams,
        path: parser.pathname,
        port: parser.port,
        protocol: parser.protocol.replace(':', ''),
        query: parser.search,
        relative: parser.pathname + parser.search,
        segments: parser.pathname.split('/').filter(function (segment) {
            return segment !== '';
        }),
        source: url
    };
}

// Example usage:
var url = 'https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python';
console.log(parse_URL(url));
