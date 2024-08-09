var existingImages = JSON.parse($persistentStore.read("spotifyImageList") || "[]");
if (existingImages.length > 0) {
    let latestImageUrl = existingImages[existingImages.length - 1]; // 显示最后一张图片
    $done({
        title: '最新 Spotify 图片',
        content: '点击 查看图片',
        icon: latestImageUrl,
        backgroundColor: '#1DB954',
        url: latestImageUrl
    });
} else {
    $done({
        title: 'Spotify 图片',
        content: '没有新图片',
        icon: 'photo',
        backgroundColor: '#1DB954'
    });
}
