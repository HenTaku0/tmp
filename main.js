var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 打开浏览器，显示图片URL
    $notify("🐱检测到Spotify歌词分享🐱", `URL: ${url}`, "点击查看图片", {"open-url": url});
    // 直接跳转到浏览器
    $done({response: {status: 302, headers: {Location: url}}});
} else {
    // 返回未修改的响应体
    $done({});
}
