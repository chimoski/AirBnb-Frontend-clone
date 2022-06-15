/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env:{
    mapBox_key: 'pk.eyJ1IjoiY2hpbW9za2kiLCJhIjoiY2wyOHhxMDl3MDFuZjNjcnU4cThlejE0bSJ9.XfOGsK6g19iBIk2dNvGb7Q'
  }
}

module.exports = nextConfig
