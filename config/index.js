module.exports = {
  production: false,
  origin: 'http://localhost:3000',
  cookieKey: '',
  secret: '',
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/stage',
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE,
  },
  PORT: process.env.PORT || 4000,
  GRAPHQL_PORT: process.env.GRAPHQL_PORT || 4001,
  SECRET_KEY: 'asdf123456',
  UNSPLASH_AK: '-yOmcLwpqRYd_3vR_P6Wgi210BbR_jOi_VefToBqDYU',
  UNSPLASH_SK: 'm_-8KByljD0OYY9PzTgiHHE3MmfQ6F4N_x41w0PDt8g',
  PIXABAY_AK: '19213825-ebec08c3546ba09000a38f84f',
  STORYBLOCKS_PK:
  'test_f8eecc0879b845b0cc485363e92f6c342b6dfe4fd740c52022c624b4845',
  STORYBLOCKS_PRK:
  'test_655a5d66a8b3a234bf67a8edece6d9dfe9ea116ba7e4161c228d72a7b81',
};
