const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImages = [
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\jpg\\历史前沿分析.jpg', name: 'analysis-1' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\jpg\\植被分析.jpg', name: 'analysis-2' },
  { src: 'C:\\Users\\Admin\\Desktop\\环境热点分析\\jpg\\总道路划分.jpg', name: 'analysis-3' },
  { src: 'D:\\外部空间设计作业\\照片\\封面.jpg', name: 'analysis-4' },
];

const outputDir = path.join(__dirname, 'public', 'assets', 'marquee');

async function processImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of sourceImages) {
    const outputPath = path.join(outputDir, `${img.name}.jpg`);
    try {
      const info = await sharp(img.src)
        .resize(840, null, { withoutEnlargement: true, fit: 'inside' })
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);

      const originalSize = fs.statSync(img.src).size;
      console.log(`✓ ${img.name}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(info.size / 1024).toFixed(0)}KB (${info.width}x${info.height})`);
    } catch (err) {
      console.error(`✗ ${img.name} failed:`, err.message);
    }
  }
  console.log('\nDone! All images processed to:', outputDir);
}

processImages();