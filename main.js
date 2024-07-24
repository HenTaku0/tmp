// storage_googleapis_com_open_image.js

var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
var userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

// 检查是否为图片类型并且请求头中不包含浏览器的标识
if (contentType.includes('image') && !userAgent.includes('Mozilla')) {
    // 发送通知，包含图片的URL链接，可以在浏览器中打开
    $notify("检测到指定域名图片", `URL: ${url}`, "点击查看图片", {"open-url": url});
}

// 返回未修改的响应体
$done({});
