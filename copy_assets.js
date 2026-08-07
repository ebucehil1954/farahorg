const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'görseller');
const destDir = path.join(__dirname, 'public', 'images', 'raw');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const imageFiles = files.filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));

console.log(`Found ${imageFiles.length} image files in ${srcDir}`);

const mapping = [];

imageFiles.forEach((file, index) => {
  const ext = path.extname(file);
  const newName = `img-${index + 1}${ext.toLowerCase()}`;
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, newName);
  
  fs.copyFileSync(srcPath, destPath);
  mapping.push({
    original: file,
    newName: newName,
    publicPath: `/images/raw/${newName}`
  });
});

fs.writeFileSync(
  path.join(__dirname, 'public', 'images', 'raw', 'mapping.json'),
  JSON.stringify(mapping, null, 2)
);

console.log('Copy complete! Mapping saved to public/images/raw/mapping.json');
