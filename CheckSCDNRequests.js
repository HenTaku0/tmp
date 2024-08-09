var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 读取之前存储的 URL 列表
    var previousUrls = JSON.parse($persistentStore.read("spotifyImageList") || "[]");

    // 只有在 URL 不存在于列表中时才保存新 URL
    if (!previousUrls.includes(url)) {
        previousUrls.push(url);
        $persistentStore.write(JSON.stringify(previousUrls), "spotifyImageList");
        $notify("🐱检测到新的 Spotify 图片🐱", `URL: ${url}`, "图片已保存到 Tile");
    }
}

$done({});
