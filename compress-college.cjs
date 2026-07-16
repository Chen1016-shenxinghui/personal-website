const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImages = [
  { src: 'D:\\室内空间设计\\效果图\\黄墙2.jpg', name: 'college-1' },
  { src: 'D:\\室内空间设计\\效果图\\木工手工4.jpg', name: 'college-2' },
  { src: 'D:\\室内空间设计\\效果图\\阅览.jpg', name: 'college-3' },
];

const outputDir = path.join(__dirname, 'public', 'assets', 'projects', 'design-college');

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