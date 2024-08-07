const url = $request.url;
const contentType = $response.headers['Content-Type'] || $response.headers['content-type'];
const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (url.includes("storage.googleapis.com") && contentType.includes('image') && !userAgent.includes('Mozilla')) {
    const lastImageUrl = $persistentStore.read("last_image_url");

    // 检查是否为新图片
    if (lastImageUrl !== url) {
        $persistentStore.write(url, "last_image_url");
        $notification.post("检测到图片", "点击查看图片", url);
        $done({
            title: "检测到图片",
            content: "点击查看图片",
            icon: url,
            url: url
        });
    } else {
        $done({});
    }
} else {
    $done({});
}
