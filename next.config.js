const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "ishamsiyev094",
        mongodb_password: "lDRwSx6uVEi4IGis",
        mongodb_clustername: "backend-db",
        mongodb_database: "messages-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "ishamsiyev094",
      mongodb_password: "lDRwSx6uVEi4IGis",
      mongodb_clustername: "backend-db",
      mongodb_database: "messages",
    },
  };
};
