const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImage = 'C:\\Users\\Admin\\Desktop\\环境热点分析\\微信图片_20260716131323_1_37.jpg';
const outputDir = path.join(__dirname, 'public', 'assets');
const outputPath = path.join(outputDir, 'portrait.jpg');

async function processImage() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const info = await sharp(sourceImage)
      .resize(720, null, { withoutEnlargement: true, fit: 'inside' })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath);

    const originalSize = fs.statSync(sourceImage).size;
    console.log(`✓ portrait: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(info.size / 1024).toFixed(0)}KB`);
    console.log(`  Dimensions: ${info.width}x${info.height}`);
  } catch (err) {
    console.error('✗ failed:', err.message);
  }
  console.log('\nDone!');
}

processImage();