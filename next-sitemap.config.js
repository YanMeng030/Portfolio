module.exports = {
  siteUrl: 'http://localhost:3000', // 如果你在本地运行，替换为实际端口
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
