var previousUrls = JSON.parse($persistentStore.read("spotifyImageList") || "[]");

if (previousUrls.length > 0) {
    var latestImageUrl = previousUrls[previousUrls.length - 1]; // 获取最新的图片 URL
    $done({
        title: '最新 S potify 图片',
        content: '点击查看图片',
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
