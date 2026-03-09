import sharp from 'sharp';

async function generateFavicons() {
    try {
        console.log("Generating optimized favicons from logo2.png...");
        const source = 'public/image/logo2.png';

        // Standard Favicon 32x32
        await sharp(source)
            .resize(32, 32)
            .toFile('public/favicon-32x32.png');

        // Recommended for Google Search Results (multiple of 48)
        await sharp(source)
            .resize(48, 48)
            .toFile('public/favicon-48x48.png');

        // Apple Touch Icon
        await sharp(source)
            .resize(180, 180)
            .toFile('public/apple-touch-icon.png');

        console.log("Favicons generated successfully.");
    } catch (error) {
        console.error("Error generating favicons:", error);
    }
}

generateFavicons();
