// storage_googleapis_com_save_image.js

var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];

// 检查是否为图片类型
if (contentType.includes('image')) {
    // 将响应体编码为base64
    var body = $response.body;
    var base64Image = body.toString('base64');
    var imageUrl = `data:${contentType};base64,${base64Image}`;

    // 发送通知，包含图片链接
    $notify("检测到指定域名图片", `URL: ${url}`, `点击查看图片`, {"open-url": imageUrl});
}

// 返回未修改的响应体
$done({});
