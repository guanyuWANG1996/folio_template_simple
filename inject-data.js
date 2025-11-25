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
    const warnings = validateData(data);
    if (warnings.length) {
      for (const w of warnings) console.warn('[data warning]', w);
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Development mode: using safe defaults for missing fields');
      }
    }

    const template = handlebars.compile(templateSource);
    const html = template(applySafeDefaults(data));

    await fs.ensureDir(distDir);
    await fs.writeFile(path.join(distDir, 'index.html'), html, 'utf-8');

    await copyStaticAssets(root, distDir, html);

    console.log('Injected HTML written to dist/index.html');
  } catch (err) {
    console.error('Injection failed:', err);
    process.exit(1);
  }
}

main();

function isExternalUrl(u) {
  return /^([a-z]+:)?\/\//i.test(u) || /^data:/i.test(u);
}

async function copyIfExists(srcRoot, relPath, distDir) {
  const src = path.join(srcRoot, relPath);
  const dest = path.join(distDir, relPath);
  if (await fs.pathExists(src)) {
    await fs.ensureDir(path.dirname(dest));
    await fs.copy(src, dest);
    return true;
  }
  return false;
}

async function copyStaticAssets(srcRoot, distDir, renderedHtml) {
  const candidateDirs = ['assets', 'public', 'static', 'styles'];
  for (const dir of candidateDirs) {
    const p = path.join(srcRoot, dir);
    if (await fs.pathExists(p)) {
      await fs.copy(p, path.join(distDir, dir));
    }
  }

  const resourcePaths = new Set();
  const addMatch = (regex, attrIndex) => {
    let m;
    while ((m = regex.exec(renderedHtml)) !== null) {
      const raw = m[attrIndex].trim();
      if (!raw || isExternalUrl(raw)) continue;
      const rel = raw.replace(/^\/?/, '');
      resourcePaths.add(rel);
    }
  };
  addMatch(/<img[^>]+src=\"([^\"]+)\"/gi, 1);
  addMatch(/<link[^>]+href=\"([^\"]+)\"/gi, 1);
  addMatch(/<script[^>]+src=\"([^\"]+)\"/gi, 1);

  for (const rel of resourcePaths) {
    await copyIfExists(srcRoot, rel, distDir);
  }
}

function applySafeDefaults(data) {
  const d = JSON.parse(JSON.stringify(data || {}));
  d.user = d.user || {};
  d.config = d.config || {};
  if (!d.user.name) d.user.name = 'Your Name';
  if (!d.config.primaryColor) d.config.primaryColor = '#165DFF';
  if (!d.config.fontFamily) d.config.fontFamily = 'Inter';
  if (!Array.isArray(d.user.skills)) d.user.skills = [];
  if (!Array.isArray(d.user.projects)) d.user.projects = [];
  return d;
}

function validateData(data) {
  const issues = [];
  if (!data || typeof data !== 'object') {
    issues.push('数据为空或不是对象');
    return issues;
  }
  if (!data.user || typeof data.user !== 'object') issues.push('缺少 user 对象');
  if (!data.config || typeof data.config !== 'object') issues.push('缺少 config 对象');
  if (!data.user?.name) issues.push('缺少 user.name');
  if (!data.config?.primaryColor) issues.push('缺少 config.primaryColor');
  if (!data.config?.fontFamily) issues.push('缺少 config.fontFamily');
  if (!Array.isArray(data.user?.skills)) issues.push('user.skills 应为数组');
  if (!Array.isArray(data.user?.projects)) issues.push('user.projects 应为数组');
  return issues;
}
