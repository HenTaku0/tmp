var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

console.log("检测到的 URL: " + url); // 输出检测到的 URL
console.log("Content-Type: " + contentType); // 输出 Content-Type
console.log("User-Agent: " + userAgent); // 输出 User-Agent

if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    console.log("检测到图片 URL: " + url); // 确认检测到图片
    $persistentStore.write(url, "latestSpotifyImage");
    $notification.post("🐱检测到Spotify图片🐱", `URL: ${url}`, "图片已保存到Tile");
} else {
    console.log("未检测到图片或请求来自浏览器"); // 记录未检测到图片的情况
}
$done({});
