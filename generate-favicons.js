import sharp from 'sharp';

async function generateFavicons() {
    try {
        console.log("Generating optimized favicons from logo2.png...");
        const source = 'public/image/logo2.png';

        // Standard Favicon 32x32
        await sharp(source)
            .resize(32, 32)
            .toFile('public/image/logo2.png');

        // Recommended for Google Search Results (multiple of 48)
        await sharp(source)
            .resize(48, 48)
            .toFile('public/image/logo2.png');

        // Apple Touch Icon
        await sharp(source)
            .resize(180, 180)
            .toFile('public/image/logo2.png');

        console.log("Favicons generated successfully.");
    } catch (error) {
        console.error("Error generating favicons:", error);
    }
}

generateFavicons();
