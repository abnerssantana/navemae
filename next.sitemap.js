/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://navemae.digital/',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        additionalSitemaps: [],
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}