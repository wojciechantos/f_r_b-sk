/**
 * @type {import('gatsby').GatsbyConfig}
 */
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
    ],
}
