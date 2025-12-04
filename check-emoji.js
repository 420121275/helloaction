const fs = require('fs');
const path = require('path');
 
const markdownFiles = fs.readdirSync('.').filter(file => file.endsWith('.md'));
 
markdownFiles.forEach(file => {
  const content = fs.readFileSync(path.join('.', file), 'utf8');
  if (content.includes(':') && !content.includes('github.com')) {
    console.log(`Emoji found in ${file}:`, content.match(/:.+:/g));
  }
});
