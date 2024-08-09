var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 读取已保存的最新图片 URL
var latestSavedUrl = $persistentStore.read("latestSpotifyImage") || "";

console.log("检测到的 URL: " + url);
console.log("当前保存的最新图片 URL: " + latestSavedUrl);

if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 如果当前检测到的 URL 与保存的不一致，则更新保存的 URL
    //if (url !== latestSavedUrl) {
        console.log("检测到新图片 URL: " + url);
        $persistentStore.write(url, "latestSpotifyImage");

} else {
    console.log("未检测到图片或请求来自浏览器");
}
$done({});
