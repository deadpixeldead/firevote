module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'JWT Token Secret',
  MONGO_URI: process.env.MONGO_URI || 'localhost',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || '',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '',
  GITHUB_SECRET: process.env.GITHUB_SECRET || '',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || '46d6cc16b2fa445595e747a3349cb6e4',

  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || '',
  TWITCH_SECRET: process.env.TWITCH_SECRET || '',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || '',
  YAHOO_SECRET: process.env.YAHOO_SECRET || '',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || 'CWLgbCHUoW4twTkCQgT7glqb2',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'pPOUuxAVjDHAtRQswnoVWTUiqK2fnM5yttniJKBJxukQ7Z7R9B'
};