import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, type = 'website' }) {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {url && <link rel="canonical" href={url} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {url && <meta property="og:url" content={url} />}

            {/* Twitter Card */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
