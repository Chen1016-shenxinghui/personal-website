const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImages = [
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\效果图\\ai\\场景 2(1)_upscale01.png', name: 'jingsan-1' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\效果图\\ai\\图片(4)_upscale01.png', name: 'jingsan-2' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\微信图片_20260713172939_3464_44.jpg', name: 'jingsan-3' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\微信图片_20260713172943_3465_44.jpg', name: 'jingsan-4' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\微信图片_20260705151433_3196_44.png', name: 'jingsan-5' },
];

const outputDir = path.join(__dirname, 'public', 'assets', 'projects', 'jingsan-road');

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
      console.log(`✓ ${img.name}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(info.size / 1024).toFixed(0)}KB (${img.src})`);
    } catch (err) {
      console.error(`✗ ${img.name} failed:`, err.message);
    }
  }
  console.log('\nDone! All images processed to:', outputDir);
}

processImages();