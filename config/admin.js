module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb4cde01d5a9ae4b5b3f85fc8503315b'),
  },
});
