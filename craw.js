const lastDetectedImageUrl = $persistentStore.read("lastDetectedImageUrl");
const imageDownloadStatus = $persistentStore.read("imageDownloadStatus");

if (lastDetectedImageUrl) {
    $done({
        title: '检测到图片',
        content: imageDownloadStatus || '点击查看图片',
        icon: 'photo',
        backgroundColor: '#FFD700',
        url: lastDetectedImageUrl
    });
} else {
    $done({
        title: '等待检测到的图片',
        content: '暂无图片',
        icon: 'photo',
        backgroundColor: '#CCCCCC'
    });
}
