const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://s.ytimg.com https://connect.facebook.net",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.facebook.com https://web.facebook.com https://www.google.com",
              "img-src 'self' data: blob: https://i.ytimg.com https://yt3.ggpht.com https://www.facebook.com https://*.fbcdn.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' ws: wss: https://www.youtube.com https://fonts.googleapis.com https://fonts.gstatic.com",
              "media-src 'self' blob: https://www.youtube.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;