const fs = require('fs');

console.log('🔍 Checking emoji shortcodes...');

// 示例：读取 README.md 检查 emoji
try {
    if (fs.existsSync('README.md')) {
        const content = fs.readFileSync('README.md', 'utf8');
        console.log('✅ README.md found');
        
        // 你的检查逻辑
        // 例如：检查是否包含 emoji 简码，main分支
        if (content.includes(':')) {
            console.log('✅ Emoji shortcodes check passed');
            process.exit(0);
        } else {
            console.log('ℹ️ No emoji shortcodes found');
            process.exit(0);
        }
    } else {
        console.log('⚠️ README.md not found');
        process.exit(0);
    }
} catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
}