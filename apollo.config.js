module.exports = {
  client: {
    service: {
      name: "performancechecklist",
      url: "https://graphql.contentstack.com/stacks/bltee47bccbc9d4dfc7?environment=localhost",
      headers: {
        access_token: "csdd84e745e89eeff37eb158c7",
      },
    },
    includes: ["**/*.graphql", "src/data/*.ts"],
  },
};
