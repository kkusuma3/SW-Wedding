/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SPREADSHEET_ID : '1DE2_8vROvNNuy8PoBG3WCg37f2rbVnkXi70eoHPSC-Y',
        RSVP_SHEET_ID : '0',
        WISHES_SHEET_ID: '523069520',
        CLIENT_EMAIL : 'google-sheets-service-account@sw-wedding.iam.gserviceaccount.com',
     },
    images: {
        domains: ['aawedding.mo.cloudinary.net'],
    },
    // Important for google spreadsheet and jwt to work!
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.tls = false;
          config.resolve.fallback.net = false;
          config.resolve.fallback.child_process = false;
        }
    
        return config;
    },
};

export default nextConfig;
