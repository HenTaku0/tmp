const domain = "storage.googleapis.com"; // 替换为您想要检测的域名

// 检查 URL 是否包含指定域名
if ($request.url.includes(domain)) {
    // 提取响应体内容
    $httpClient.get($request.url, function(error, response, data) {
        if (error) {
            console.log("请求失败: " + error);
        } else {
            // 发送通知，包含响应体内容的摘要
            const notificationTitle = "检测到指定域名响应";
            const notificationSubtitle = "URL: " + $request.url;
            const notificationBody = "响应内容: " + data.substring(0, 100); // 仅显示前100个字符

            $notification.post(notificationTitle, notificationSubtitle, notificationBody);

            console.log("响应内容: " + data);
        }
    });
}

// 返回未修改的响应体
$done({});
