// storage_googleapis_com_open_image.js

var url = $request.url;
var contentType = $response.headers['Content-Type'] || $response.headers['content-type'];

// 检查是否为图片类型
if (contentType.includes('image')) {
    // 获取持久化存储中的标记
    var notified = $persistentStore.read("notified_storage_googleapis_com");

    // 如果没有发送过通知，则发送通知
    if (!notified) {
        // 发送通知，包含图片的URL链接，可以在浏览器中打开
        $notify("检测到指定域名图片", `URL: ${url}`, "点击查看图片", {"open-url": url});

        // 设置持久化存储中的标记
        $persistentStore.write("true", "notified_storage_googleapis_com");
    }
}

// 返回未修改的响应体
$done({});
