/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Fotograficznie rzecz biorąc',
        siteUrl: 'https://www.yourdomain.tld',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        'gatsby-plugin-provide-react',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    'https://fonts.googleapis.com',
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Lora`,
                        file: 'https://fonts.googleapis.com/css2?family=Lora:ital@0;1&display=swap',
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                resolveModules: [path.join(__dirname, 'src')],
            },
        },
    ],
};
