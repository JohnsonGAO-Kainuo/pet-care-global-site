
const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');

const componentsDir = path.join(__dirname, 'src/components/sections');
const publicImagesDir = path.join(__dirname, 'public/images');

if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

async function processFiles() {
    const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

    for (const file of files) {
        const filePath = path.join(componentsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const urlRegex = /https:\/\/figma-alpha-api\.s3\.us-west-2\.amazonaws\.com\/images\/[a-zA-Z0-9-]+/g;
        
        const matches = [...new Set(content.match(urlRegex) || [])];
        
        if (matches.length > 0) {
            console.log(`Processing ${file}...`);
            for (const url of matches) {
                const filename = path.basename(url) + '.png'; // Assuming png, but we should check headers ideally or just rely on browser handling
                // Note: The URLs in the code don't have extensions, so I'll append .png to be safe for local serving, 
                // but checking the actual content type would be better. Let's try downloading first.
                // Actually, the original code had URLs without extensions in the string. 
                // Let's just use the UUID.
                
                const localFilename = path.basename(url);
                const localPath = path.join(publicImagesDir, localFilename);
                
                try {
                    await downloadImage(url, localPath);
                    console.log(`Downloaded ${localFilename}`);
                    
                    // Replace in content
                    // Use a global replace for this specific URL
                    content = content.split(url).join(`/images/${localFilename}`);
                } catch (error) {
                    console.error(`Error downloading ${url}:`, error.message);
                }
            }
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
}

processFiles().catch(console.error);
