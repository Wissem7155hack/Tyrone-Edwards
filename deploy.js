#!/usr/bin/env node
import path from 'path';
import { execSync } from 'child_process';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const tempDir = path.join(__dirname, '.deploy-temp');

try {
    // Clean up temp directory
    if (fs.existsSync(tempDir)) {
        execSync(`rmdir /s /q "${tempDir}"`, { shell: 'cmd.exe', stdio: 'ignore' });
    }

    // Create temp directory and copy dist
    fs.mkdirSync(tempDir, { recursive: true });
    execSync(`xcopy "${distDir}" "${tempDir}" /E /Y`, { shell: 'cmd.exe' });
    // Initialize git in temp directory
    process.chdir(tempDir);
    execSync('git init', { stdio: 'inherit' });
    execSync('git config user.email "wissemwchtiba@gmail.com"', { stdio: 'inherit' });
    execSync('git config user.name "Deploy Bot"', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
    execSync('git remote add origin https://github.com/Wissem7155hack/Tyrone-Edwards.git', { stdio: 'inherit' });
    execSync('git push -u origin HEAD:gh-pages -f', { stdio: 'inherit' });

    console.log('\n✅ Successfully deployed to GitHub Pages!');

    // Cleanup
    process.chdir('..');
    execSync(`rmdir /s /q "${tempDir}"`, { shell: 'cmd.exe', stdio: 'ignore' });

} catch (error) {
    console.error('Deployment failed:', error.message);
    process.exit(1);
}
