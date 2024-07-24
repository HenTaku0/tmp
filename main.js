// storage_googleapis_com_open_image.js

var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var referer = $request.headers['Referer'] || $request.headers['referer'];

// 检查是否为图片类型并且不是来自浏览器的直接访问
if (contentType.includes('image') && !referer) {
    // 发送通知，包含图片的URL链接，可以在浏览器中打开
    $notify("检测到指定域名图片", `URL: ${url}`, "点击查看图片", {"open-url": url});
}

// 返回未修改的响应体
$done({});
