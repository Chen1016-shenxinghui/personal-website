const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const sourceImages = [
  { src: 'D:\\小型建筑设计作业\\小型建筑设计效果图\\ps修改版\\正式版鸟瞰（ps修改版）.psd', name: 'design-1', density: 72 },
  { src: 'D:\\小型建筑设计作业\\小型建筑设计效果图\\ps修改版\\正式版室外场景2（ps修改版）.psd', name: 'design-2', density: 72 },
  { src: 'D:\\小型建筑设计作业\\小型建筑设计效果图\\ps修改版\\正式版正视角2222主入口（ps修改版）.psd', name: 'design-3', density: 72 },
  { src: 'C:\\Users\\Admin\\Desktop\\海上明月渲染\\客厅正视清晰.tif', name: 'design-4', density: 72 },
  { src: 'C:\\Users\\Admin\\Desktop\\海上明月渲染\\卧室2二_2.png', name: 'design-5', density: 72 },
];

const outputDir = path.join(__dirname, 'public', 'assets', 'marquee');

async function processImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const img of sourceImages) {
    const outputPath = path.join(outputDir, `${img.name}.jpg`);
    try {
      const info = await sharp(img.src, { density: img.density })
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