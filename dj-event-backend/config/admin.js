module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '686bc4eca25fb51b2acdb7e367808712'),
  },
});
