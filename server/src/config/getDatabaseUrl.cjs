const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/mtg-curve-calculator_development",
      test: "postgres://postgres:postgres@localhost:5432/mtg-curve-calculator_test",
      e2e: "postgres://postgres:postgres@localhost:5432/mtg-curve-calculator_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
