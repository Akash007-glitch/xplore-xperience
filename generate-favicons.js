import sharp from 'sharp';

async function generateFavicons() {
    try {
        console.log("Generating favicons from logo.png...");
        await sharp('public/image/logo.png')
            .resize(32, 32)
            .toFile('public/favicon-32x32.png');

        await sharp('public/image/logo.png')
            .resize(180, 180)
            .toFile('public/apple-touch-icon.png');

        console.log("Favicons generated successfully.");
    } catch (error) {
        console.error("Error generating favicons:", error);
    }
}

generateFavicons();
