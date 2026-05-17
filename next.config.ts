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
              "font-src 'self' data: https://fonts.gstatic.com",
              // ✅ Added Supabase + MailerSend
              "connect-src 'self' ws: wss: https://www.youtube.com https://fonts.googleapis.com https://fonts.gstatic.com https://*.supabase.co wss://*.supabase.co https://api.mailersend.com",
              "media-src 'self' blob: https://www.youtube.com",
              // ✅ Extra security headers
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
            ].join("; "),
          },
          // ✅ Additional security headers
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;