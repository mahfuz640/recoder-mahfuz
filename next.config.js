const path = require("path");

module.exports = {
  // other configurations...

  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        
      },
    ],
    
  },
};
