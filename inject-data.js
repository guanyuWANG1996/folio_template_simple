import fs from 'fs-extra';
import path from 'path';
import handlebars from 'handlebars';

const root = process.cwd();
const templatePath = path.join(root, 'index.html');
const dataPath = path.join(root, 'test-data.json');
const distDir = path.join(root, 'dist');

async function main() {
  try {
    const [templateSource, dataJson] = await Promise.all([
      fs.readFile(templatePath, 'utf-8'),
      fs.readFile(dataPath, 'utf-8')
    ]);

    const data = JSON.parse(dataJson);

    const template = handlebars.compile(templateSource);
    const html = template(data);

    await fs.ensureDir(distDir);
    await fs.writeFile(path.join(distDir, 'index.html'), html, 'utf-8');

    const assetCandidates = [
      path.join(root, 'assets'),
      path.join(root, 'src', 'assets')
    ];
    for (const assetDir of assetCandidates) {
      if (await fs.pathExists(assetDir)) {
        await fs.copy(assetDir, path.join(distDir, 'assets'));
        break;
      }
    }

    console.log('Injected HTML written to dist/index.html');
  } catch (err) {
    console.error('Injection failed:', err);
    process.exit(1);
  }
}

main();

