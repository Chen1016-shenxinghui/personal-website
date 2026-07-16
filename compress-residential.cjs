const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImages = [
  { src: 'C:\\Users\\Admin\\Desktop\\环境更新设计\\效果图\\调整\\场景 2(1)_ai.jpg', name: 'residential-1' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境更新设计\\效果图\\调整\\场景 6_夜景.jpg', name: 'residential-2' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境更新设计\\效果图\\菜园效果图\\图片(4).png', name: 'residential-3' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境更新设计\\效果图\\菜园效果图\\场景 2(1).png', name: 'residential-4' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境更新设计\\效果图\\儿童乐园效果图\\图片(5)_夜景.png', name: 'residential-5' },
];

const outputDir = path.join(__dirname, 'public', 'assets', 'projects', 'residential');

async function processImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of sourceImages) {
    const outputPath = path.join(outputDir, `${img.name}.jpg`);
    try {
      const info = await sharp(img.src)
        .resize(1280, null, { withoutEnlargement: true, fit: 'inside' })
        .jpeg({ quality: 82, progressive: true })
        .toFile(outputPath);

      const originalSize = fs.statSync(img.src).size;
      console.log(`✓ ${img.name}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(info.size / 1024).toFixed(0)}KB`);
    } catch (err) {
      console.error(`✗ ${img.name} failed:`, err.message);
    }
  }
  console.log('\nDone! All images processed to:', outputDir);
}

processImages();