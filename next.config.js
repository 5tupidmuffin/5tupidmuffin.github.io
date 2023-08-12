/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", //https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  distDir: "build",
  trailingSlash: true,
};

module.exports = nextConfig;
