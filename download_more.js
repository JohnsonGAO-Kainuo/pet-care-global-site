
const fs = require('fs');
const path = require('path');
const https = require('https');

const componentsDirs = [
    path.join(__dirname, 'src/components/sections'),
    path.join(__dirname, 'src/app') // Check pages too
];
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

const figmaImageMap = {
    "c08dba2f-c117-474d-bcc5-d2e5027ee6cf": "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c08dba2f-c117-474d-bcc5-d2e5027ee6cf",
    "ac5f45e7-a162-41ab-96b6-9342d063d5aa": "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac5f45e7-a162-41ab-96b6-9342d063d5aa",
    "51e9be0b-208b-4960-a922-112224ad6bcc": "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51e9be0b-208b-4960-a922-112224ad6bcc",
    "d530e9e7-86ba-47af-8c9c-6d7ea202aa50": "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d530e9e7-86ba-47af-8c9c-6d7ea202aa50"
};

async function run() {
    for (const [uuid, url] of Object.entries(figmaImageMap)) {
        const localPath = path.join(publicImagesDir, `${uuid}.png`);
        if (!fs.existsSync(localPath)) {
            console.log(`Downloading ${uuid}...`);
            try {
                await downloadImage(url, localPath);
                console.log(`Downloaded ${uuid}.png`);
            } catch (e) {
                console.error(`Failed to download ${uuid}: ${e.message}`);
            }
        }
    }
}

run().catch(console.error);
