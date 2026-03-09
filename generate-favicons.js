import sharp from 'sharp';

async function generateFavicons() {
    try {
        console.log("Generating optimized favicons and OG image from logo2.png...");
        const source = 'public/image/logo2.png';

        // Standard Favicon 32x32
        await sharp(source)
            .resize(32, 32)
            .toFile('public/favicon-32x32.png');

        // Recommended for Google Search Results (multiple of 48)
        await sharp(source)
            .resize(48, 48)
            .toFile('public/favicon-48x48.png');

        // Apple Touch Icon 180x180
        await sharp(source)
            .resize(180, 180)
            .toFile('public/apple-touch-icon.png');

        // OG Preview Image: 1200x630 with logo centered on dark background
        const logoSize = 500;
        const ogWidth = 1200;
        const ogHeight = 630;
        const leftOffset = Math.round((ogWidth - logoSize) / 2);
        const topOffset = Math.round((ogHeight - logoSize) / 2);

        const logoBuffer = await sharp(source)
            .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .toBuffer();

        await sharp({
            create: {
                width: ogWidth,
                height: ogHeight,
                channels: 4,
                background: { r: 26, g: 26, b: 46, alpha: 1 } // #1a1a2e (matches theme-color)
            }
        })
            .composite([{ input: logoBuffer, left: leftOffset, top: topOffset }])
            .png()
            .toFile('public/og-image.png');

        console.log("All assets generated successfully.");
    } catch (error) {
        console.error("Error generating assets:", error);
    }
}

generateFavicons();
