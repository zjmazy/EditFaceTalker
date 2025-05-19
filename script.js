document.addEventListener('DOMContentLoaded', function() {
    const characterButtons = document.querySelectorAll('.character-button');
    const videoSources = document.querySelectorAll('.emotion-item video source');

    characterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮状态
            characterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // 获取选中的人物
            const selectedCharacter = this.dataset.character;

            // 更新所有视频源
            videoSources.forEach(source => {
                const currentPath = source.src;
                const fileName = currentPath.split('/').pop(); // 获取文件名
                const attributeName = fileName.split('_').slice(1).join('_'); // 获取属性名部分
                
                // 构建新的视频路径
                const newPath = `videos/${selectedCharacter}/${selectedCharacter === 'Chris_Hemsworth_019' ? '823' : selectedCharacter.split('_')[0]}_${attributeName}`;
                source.src = newPath;

                // 重新加载视频
                source.parentElement.load();
            });
        });
    });
});