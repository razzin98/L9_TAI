const config = {
  port: process.env.PORT || 3002,
  databaseUrl: "mongodb+srv://pwsz-user:pwsz-pass@cluster0.thbeg.mongodb.net/pwsz-db?retryWrites=true&w=majority" || 'baza danych',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
